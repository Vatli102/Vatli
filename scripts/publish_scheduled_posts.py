# -*- coding: utf-8 -*-
import os
import shutil
import re
import datetime

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VAN_DIR = os.path.join(BASE_DIR, "van")
DRAFTS_DIR = os.path.join(VAN_DIR, "scheduled_drafts")
BAI_VIET_DIR = os.path.join(VAN_DIR, "bai-viet")
IMAGES_DIR = os.path.join(VAN_DIR, "images")
INDEX_HTML = os.path.join(VAN_DIR, "index.html")
SITEMAP_XML = os.path.join(BASE_DIR, "sitemap.xml")

os.makedirs(BAI_VIET_DIR, exist_ok=True)
os.makedirs(IMAGES_DIR, exist_ok=True)

now_utc = datetime.datetime.now(datetime.timezone.utc)
now_vn = now_utc + datetime.timedelta(hours=7)
today_str = now_vn.strftime("%Y-%m-%d")
print(f"=== KIEM TRA LICH DANG BAI NGU VAN (GMT+7: {today_str}) ===")

if not os.path.exists(DRAFTS_DIR):
    print("Khong tim thay thu muc scheduled_drafts.")
    exit(0)

draft_files = [f for f in os.listdir(DRAFTS_DIR) if f.endswith(".html")]
published_count = 0

for df in sorted(draft_files):
    m = re.match(r"^(\d{4}-\d{2}-\d{2})-(.+)\.html$", df)
    if not m:
        continue
    
    post_date = m.group(1)
    slug = m.group(2)
    
    if post_date <= today_str:
        print(f"-> Xuat ban bai viet: {df} (Ngay hen: {post_date})")
        src_draft_path = os.path.join(DRAFTS_DIR, df)
        dest_post_path = os.path.join(BAI_VIET_DIR, f"{slug}.html")
        
        with open(src_draft_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        title_m = re.search(r'<title>(.*?)\s*\|\s*Vatli102\.com</title>', content)
        title = title_m.group(1) if title_m else slug
        
        desc_m = re.search(r'<meta name="description" content="(.*?)">', content)
        desc = desc_m.group(1) if desc_m else ""
        
        grade_m = re.search(r'<span class="text-indigo-700 font-bold">(.*?)</span>', content)
        grade = grade_m.group(1) if grade_m else "Ngữ văn"
        
        with open(dest_post_path, "w", encoding="utf-8") as f:
            f.write(content)
        
        if os.path.exists(INDEX_HTML):
            with open(INDEX_HTML, "r", encoding="utf-8") as f:
                idx_content = f.read()
            
            post_card_html = f'''
            <!-- Bai viet xuat ban: {post_date} -->
            <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-extrabold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800">{grade}</span>
                        <span class="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded"><i class="fa-solid fa-circle-check"></i> Mới cập nhật</span>
                    </div>
                    <h3 class="font-extrabold text-slate-900 text-base leading-snug">
                        <a href="/van/bai-viet/{slug}.html" class="hover:text-indigo-600 transition-colors">{title}</a>
                    </h3>
                    <p class="text-slate-500 text-xs font-medium line-clamp-3 leading-relaxed">{desc}</p>
                </div>
                <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] text-slate-400"><i class="fa-regular fa-calendar"></i> {post_date}</span>
                    <a href="/van/bai-viet/{slug}.html" class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg transition-all flex items-center gap-1">
                        <span>Đọc ngay</span> <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </a>
                </div>
            </div>
            '''
            
            if f"/van/bai-viet/{slug}.html" not in idx_content:
                if "<!-- CONTAINER_BAI_VIET_MOI -->" in idx_content:
                    idx_content = idx_content.replace("<!-- CONTAINER_BAI_VIET_MOI -->", f"<!-- CONTAINER_BAI_VIET_MOI -->\n{post_card_html}")
                    with open(INDEX_HTML, "w", encoding="utf-8") as f:
                        f.write(idx_content)
                    print(f"Da cap nhat vao van/index.html: {title}")
        
        if os.path.exists(SITEMAP_XML):
            with open(SITEMAP_XML, "r", encoding="utf-8") as f:
                sitemap_content = f.read()
            url_entry = f"https://vatli102.com/van/bai-viet/{slug}.html"
            if url_entry not in sitemap_content and "</urlset>" in sitemap_content:
                new_url_tag = f'''  <url>
    <loc>{url_entry}</loc>
    <lastmod>{today_str}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>'''
                sitemap_content = sitemap_content.replace("</urlset>", new_url_tag)
                with open(SITEMAP_XML, "w", encoding="utf-8") as f:
                    f.write(sitemap_content)
                print(f"Da them vao sitemap.xml: {url_entry}")
        
        os.remove(src_draft_path)
        published_count += 1

print(f"Hoan tat: Da xuat ban {published_count} bai viet.")
