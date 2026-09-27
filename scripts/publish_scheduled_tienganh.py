# -*- coding: utf-8 -*-
"""
Auto-Publisher for Tiếng Anh Online Tests (vatli102.com)
Checks tienganh/schedule_manifest.json and automatically activates lessons
when their scheduled_date arrives (GMT+7).
"""

import os
import sys
import json
import shutil
import re
import datetime

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TIENGANH_DIR = os.path.join(BASE_DIR, "tienganh")
MANIFEST_PATH = os.path.join(TIENGANH_DIR, "schedule_manifest.json")
INDEX_HTML = os.path.join(TIENGANH_DIR, "index.html")
SITEMAP_XML = os.path.join(BASE_DIR, "sitemap.xml")
DRAFTS_DIR = os.path.join(TIENGANH_DIR, "scheduled_drafts")
LOP7_DIR = os.path.join(TIENGANH_DIR, "lop-7")

now_utc = datetime.datetime.now(datetime.timezone.utc)
now_vn = now_utc + datetime.timedelta(hours=7)
today_str = now_vn.strftime("%Y-%m-%d")

print(f"=== KIEM TRA LICH PHAT HANH TIENG ANH (GMT+7: {today_str}) ===")

if not os.path.exists(MANIFEST_PATH):
    print("Khong tim thay schedule_manifest.json")
    sys.exit(0)

with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
    manifest = json.load(f)

items = manifest.get("items", [])
published_count = 0
changes_made = False

for item in items:
    s_date = item.get("scheduled_date")
    status = item.get("status")
    slug = item.get("slug")
    item_id = item.get("id")
    title = item.get("title")

    # If scheduled date has arrived and item is still scheduled
    if s_date <= today_str and status == "scheduled":
        print(f"-> Kich hoat phat hanh: {title} (Ngay hen: {s_date})")
        item["status"] = "published"
        changes_made = True
        published_count += 1

        # Copy from scheduled_drafts if exists
        draft_item_dir = os.path.join(DRAFTS_DIR, item_id)
        target_item_dir = os.path.join(LOP7_DIR, slug)
        if os.path.exists(draft_item_dir):
            os.makedirs(target_item_dir, exist_ok=True)
            for f in os.listdir(draft_item_dir):
                s_file = os.path.join(draft_item_dir, f)
                d_file = os.path.join(target_item_dir, f)
                if os.path.isfile(s_file):
                    shutil.copy2(s_file, d_file)
            print(f"   Da sao chep tu scheduled_drafts/{item_id} sang lop-7/{slug}")

        # Update sitemap.xml
        if os.path.exists(SITEMAP_XML):
            with open(SITEMAP_XML, "r", encoding="utf-8") as sf:
                sitemap_content = sf.read()
            url_entry = f"https://vatli102.com/tienganh/lop-7/{slug}/"
            if url_entry not in sitemap_content and "</urlset>" in sitemap_content:
                new_url_tag = f'''  <url>
    <loc>{url_entry}</loc>
    <lastmod>{today_str}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
</urlset>'''
                sitemap_content = sitemap_content.replace("</urlset>", new_url_tag)
                with open(SITEMAP_XML, "w", encoding="utf-8") as sf:
                    sf.write(sitemap_content)
                print(f"   Da cap nhat sitemap.xml voi URL: {url_entry}")

# Function to render portal cards according to manifest
def update_portal_index(manifest_items):
    if not os.path.exists(INDEX_HTML):
        return

    with open(INDEX_HTML, "r", encoding="utf-8") as f:
        html = f.read()

    # Generate Featured Cards Grid
    cards_html = []
    
    # 1. First render Grade 7 cards
    for item in manifest_items:
        slug = item["slug"]
        title = item["title"]
        s_date = item["scheduled_date"]
        status = item["status"]
        desc = item["description"]
        keywords = item["keywords"]
        t_limit = item.get("time_limit", "45 - 50 Phút")

        # Format date for display: YYYY-MM-DD -> DD/MM/YYYY
        d_parts = s_date.split("-")
        d_display = f"{d_parts[2]}/{d_parts[1]}/{d_parts[0]}" if len(d_parts) == 3 else s_date

        if status == "published":
            badge_html = '''<div class="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-teal-600 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm">
                        🟢 ĐÃ PHÁT HÀNH
                    </div>'''
            btn_html = f'''<a href="/tienganh/lop-7/{slug}/" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-indigo-200">
                            <span>🚀 Làm Bài Trực Tuyến</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </a>'''
        else:
            badge_html = f'''<div class="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-orange-600 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm">
                        ⏳ MỞ NGÀY {d_display}
                    </div>'''
            btn_html = f'''<button onclick="alert('Đề thi sẽ chính thức mở vào ngày {d_display} theo phân phối chương trình năm học 2026-2027!')" class="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                            <i class="fa-regular fa-clock text-amber-500"></i>
                            <span>Lên lịch mở: {d_display}</span>
                        </button>'''

        card = f'''                <!-- Card {title} English 7 ({status.upper()}) -->
                <div class="lesson-card bg-white rounded-2xl border-2 {"border-indigo-500/40" if status == "published" else "border-slate-200"} p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative overflow-hidden group" data-grade="lop-7" data-keywords="{keywords}">
                    {badge_html}
                    <div class="space-y-3 pt-1">
                        <div class="flex items-center gap-2">
                            <span class="text-[11px] font-extrabold px-2.5 py-0.5 rounded-md bg-indigo-100 text-indigo-800 border border-indigo-200">Tiếng Anh 7</span>
                            <span class="text-[11px] font-bold text-slate-500"><i class="fa-solid fa-clock mr-1 text-amber-500"></i> {t_limit}</span>
                        </div>
                        <h3 class="font-extrabold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                            {title}
                        </h3>
                        <p class="text-slate-600 text-xs leading-relaxed">
                            {desc}
                        </p>
                        <div class="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-500">
                            <span class="px-2 py-0.5 bg-slate-100 rounded"><i class="fa-solid fa-headphones text-cyan-600"></i> Audio Listening</span>
                            <span class="px-2 py-0.5 bg-slate-100 rounded"><i class="fa-solid fa-book-open text-indigo-500"></i> Tab Lý thuyết</span>
                            <span class="px-2 py-0.5 bg-slate-100 rounded"><i class="fa-solid fa-shield-halved text-emerald-500"></i> Chống gian lận</span>
                        </div>
                    </div>
                    <div class="pt-3 border-t border-slate-100">
                        {btn_html}
                    </div>
                </div>'''
        cards_html.append(card)

    # 2. Add Grade 12 active cards
    cards_html.append('''                <!-- Card Unit 1 English 12 (Active) -->
                <div class="lesson-card bg-white rounded-2xl border-2 border-violet-500/40 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative overflow-hidden group" data-grade="lop-12" data-keywords="unit 1 life stories we admire tiếng anh 12 global success lớp 12 tốt nghiệp thpt">
                    <div class="absolute top-0 right-0 bg-gradient-to-l from-violet-600 to-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm">
                        🟢 ĐÃ PHÁT HÀNH
                    </div>
                    <div class="space-y-3 pt-1">
                        <div class="flex items-center gap-2">
                            <span class="text-[11px] font-extrabold px-2.5 py-0.5 rounded-md bg-violet-100 text-violet-800 border border-violet-200">Tiếng Anh 12</span>
                            <span class="text-[11px] font-bold text-slate-500"><i class="fa-solid fa-clock mr-1 text-amber-500"></i> 50 Phút</span>
                        </div>
                        <h3 class="font-extrabold text-slate-900 text-base group-hover:text-violet-600 transition-colors">
                            Unit 1: Life Stories We Admire
                        </h3>
                        <p class="text-slate-600 text-xs leading-relaxed">
                            Đề ôn tập trọng tâm <strong>40 câu trắc nghiệm ABCD</strong> chuẩn cấu trúc đề thi Tốt nghiệp THPT 2026. Tích hợp tab Lý thuyết trọng tâm, làm bài từng câu và giải thích chi tiết.
                        </p>
                        <div class="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-500">
                            <span class="px-2 py-0.5 bg-slate-100 rounded"><i class="fa-solid fa-book-open text-violet-500"></i> Tab Lý thuyết</span>
                            <span class="px-2 py-0.5 bg-slate-100 rounded"><i class="fa-solid fa-shield-halved text-emerald-500"></i> Chống gian lận</span>
                            <span class="px-2 py-0.5 bg-slate-100 rounded"><i class="fa-solid fa-chart-pie text-cyan-500"></i> Phân tích ma trận</span>
                        </div>
                    </div>
                    <div class="pt-3 border-t border-slate-100">
                        <a href="/tienganh/lop-12/unit-1/" class="w-full py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-violet-200">
                            <span>🚀 Làm Bài Trực Tuyến</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </a>
                    </div>
                </div>

                <!-- Card Unit 2 English 12 (Active) -->
                <div class="lesson-card bg-white rounded-2xl border-2 border-violet-500/40 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative overflow-hidden group" data-grade="lop-12" data-keywords="unit 2 a multicultural world thế giới đa văn hóa tiếng anh 12 global success lớp 12 tốt nghiệp thpt">
                    <div class="absolute top-0 right-0 bg-gradient-to-l from-violet-600 to-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm">
                        🟢 ĐÃ PHÁT HÀNH
                    </div>
                    <div class="space-y-3 pt-1">
                        <div class="flex items-center gap-2">
                            <span class="text-[11px] font-extrabold px-2.5 py-0.5 rounded-md bg-violet-100 text-violet-800 border border-violet-200">Tiếng Anh 12</span>
                            <span class="text-[11px] font-bold text-slate-500"><i class="fa-solid fa-clock mr-1 text-amber-500"></i> 50 Phút</span>
                        </div>
                        <h3 class="font-extrabold text-slate-900 text-base group-hover:text-violet-600 transition-colors">
                            Unit 2: A Multicultural World
                        </h3>
                        <p class="text-slate-600 text-xs leading-relaxed">
                            Đề kiểm tra <strong>40 câu trắc nghiệm ABCD</strong> chuẩn ma trận đề thi THPT 2026. Luyện tập mạo từ nâng cao, từ vựng đa văn hóa, phát âm và bài đọc hiểu chuyên sâu.
                        </p>
                        <div class="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-500">
                            <span class="px-2 py-0.5 bg-slate-100 rounded"><i class="fa-solid fa-book-open text-violet-500"></i> Tab Lý thuyết</span>
                            <span class="px-2 py-0.5 bg-slate-100 rounded"><i class="fa-solid fa-shield-halved text-emerald-500"></i> Chống gian lận</span>
                            <span class="px-2 py-0.5 bg-slate-100 rounded"><i class="fa-solid fa-chart-pie text-cyan-500"></i> Phân tích ma trận</span>
                        </div>
                    </div>
                    <div class="pt-3 border-t border-slate-100">
                        <a href="/tienganh/lop-12/unit-2/" class="w-full py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-violet-200">
                            <span>🚀 Làm Bài Trực Tuyến</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </a>
                    </div>
                </div>''')

    # Generate Grade 7 Curriculum List
    list_items_html = []
    for item in manifest_items:
        slug = item["slug"]
        title = item["title"]
        s_date = item["scheduled_date"]
        status = item["status"]
        d_parts = s_date.split("-")
        d_display = f"{d_parts[2]}/{d_parts[1]}" if len(d_parts) == 3 else s_date

        if status == "published":
            icon = "fa-circle-play text-emerald-500" if item["category"] == "unit" else "fa-star text-amber-500"
            link = f'<a href="/tienganh/lop-7/{slug}/" class="text-[11px] font-extrabold text-indigo-600 hover:underline">Thi ngay →</a>'
        else:
            icon = "fa-clock text-slate-400"
            link = f'<span class="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">Mở {d_display}</span>'

        list_items_html.append(f'''                                <li class="p-1.5 bg-indigo-50/70 border border-indigo-100 rounded-lg flex items-center justify-between">
                                    <span class="font-bold text-indigo-900"><i class="fa-solid {icon} mr-1"></i> {title}</span>
                                    {link}
                                </li>''')

    # Replace grid container
    new_grid_content = "\n\n".join(cards_html)
    grid_pattern = r'(<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">)(.*?)(</div>\s*</div>\s*<!-- Section 2:)'
    
    html = re.sub(
        grid_pattern,
        f'\\1\n{new_grid_content}\n            \\3',
        html,
        flags=re.DOTALL
    )

    # Count published items for Grade 7 badge
    lop7_pub_count = sum(1 for item in manifest_items if item["status"] == "published")
    badge_text = f"🟢 Đã mở {lop7_pub_count} bài (Lên lịch tự động)"
    
    # Replace Grade 7 badge in accordion
    html = re.sub(
        r'(<div class="grade-box[^"]*" data-grade="lop-7".*?<span class="text-\[10px\] font-extrabold [^>]*>).*?(</span>)',
        f'\\1{badge_text}\\2',
        html,
        flags=re.DOTALL
    )

    # Replace Grade 7 accordion list with scrollable container
    new_list_content = "\n".join(list_items_html)
    html = re.sub(
        r'(<div class="grade-box[^"]*" data-grade="lop-7".*?)<ul class="text-xs[^>]*>.*?</ul>',
        f'\\1<ul class="text-xs space-y-1.5 font-medium max-h-72 overflow-y-auto pr-1">\n{new_list_content}\n                            </ul>',
        html,
        flags=re.DOTALL
    )

    with open(INDEX_HTML, "w", encoding="utf-8") as f:
        f.write(html)
    print("Da cap nhat giao dien tienganh/index.html theo dung trang thai lich phat hanh!")

# Always update the portal index layout based on manifest
update_portal_index(items)

if changes_made:
    with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)
    print(f"Hoan tat: Da kich hoat {published_count} bai hoc moi theo lich!")
else:
    print("Tat ca cac bai hoc da duoc dong bo dung theo lich hen.")
