// Usman Kalera — AI Video Creator: site interactions
// Features: mobile menu, single-play videos, FAQ, reveal, WhatsApp brief form,
// EN/UR language toggle (RTL), light/dark theme toggle, film-strip lightbox,
// share copy-link, WebP poster upgrade.
(function () {
  'use strict';

  var CANONICAL = 'https://usmankalera-dev.github.io/ai-video-creator/';

  /* ================= Urdu translations ================= */
  var UR = {
    brand_label: 'عثمان کلیرا — اے آئی ویڈیو کری ایٹر، اوپر واپس جائیں',
    brand_role: 'اے آئی ویڈیو کری ایٹر',
    nav_main_label: 'مرکزی نیویگیشن',
    nav_services: 'خدمات',
    nav_film: 'نمایاں فلم',
    nav_latest: 'تازہ ترین کام',
    nav_pricing: 'قیمتیں',
    nav_about: 'میرے بارے میں',
    nav_faq: 'عام سوالات',
    nav_cta: 'ویڈیو بنوائیں',
    hero_eyebrow: 'اے آئی ویڈیو کری ایٹر · لاہور، پاکستان · دنیا بھر کے لیے کام',
    hero_role: 'اے آئی ویڈیو کری ایٹر',
    hero_prop: 'آپ کے برانڈ کے لیے توجہ کھینچنے والے اے آئی ویڈیو اشتہارات، ریلز اور پروڈکٹ فلمیں — اردو اور انگریزی وائس اوور کے ساتھ، صرف $5 سے، چند دنوں میں تیار۔',
    btn_whatsapp: 'واٹس ایپ پر آرڈر کریں',
    btn_fiverr: 'مجھے فائیور پر ہائر کریں',
    btn_watch: 'فلم دیکھیں',
    hero_point1: '$5 سے آغاز',
    hero_point2: '2 تا 5 دن میں ڈیلیوری',
    hero_point3: 'اردو اور انگریزی وائس اوور',
    hero_video_label: 'عثمان کلیرا کی سفید سوزوکی مہران پر سینمائی اے آئی فلم',
    hero_caption: 'سینمائی کار فلم — سوزوکی مہران · عثمان کی اے آئی سے تیار اور ایڈٹ شدہ',
    trust_label: 'اہم معلومات',
    trust_1: '$5 سے آغاز',
    trust_2: '2 تا 5 دن میں ڈیلیوری',
    trust_3: 'اردو اور انگریزی وائس اوور',
    trust_4: 'ہر پیکج میں نظرثانی شامل',
    marquee_label: 'مہارتیں',
    mq_ads: 'اے آئی ویڈیو اشتہارات',
    mq_reels: 'ریلز اور ٹک ٹاک',
    mq_ugc: 'یو جی سی پروڈکٹ ویڈیوز',
    mq_films: 'سینمائی فلمیں',
    mq_urdu: 'اردو وائس اوور',
    mq_english: 'انگریزی وائس اوور',
    mq_subs: 'سب ٹائٹلز',
    mq_chars: 'یکساں کردار',
    svc_eyebrow: 'میں کیا بناتا ہوں',
    svc_h2: 'ویڈیو خدمات جو فروخت بڑھائیں',
    svc_lead: 'ہر ویڈیو کی منصوبہ بندی، تیاری اور ایڈیٹنگ میں خود کرتا ہوں — نہ ٹیمپلیٹ، نہ اسٹاک فوٹیج والا انداز۔ اپنی پروڈکٹ کے لیے مناسب فارمیٹ منتخب کریں۔',
    svc1_t: 'سوشل میڈیا کے لیے اے آئی ویڈیو اشتہارات',
    svc1_p: 'فیس بک، انسٹاگرام اور یوٹیوب کے لیے بنائے گئے پروڈکٹ اشتہارات — پہلے 3 سیکنڈ میں مضبوط آغاز، واضح پیشکش، اور کلکس دلانے والا کال ٹو ایکشن۔',
    svc2_t: 'ریلز، ٹک ٹاک اور شارٹس',
    svc2_p: 'فیڈ کے لیے بنائی گئی عمودی مختصر ویڈیوز: تیز کٹس، اسکرین پر متن، رجحان کے مطابق ساخت اور ایسا اختتام جو دیکھنے کا وقت بڑھائے۔',
    svc3_t: 'یو جی سی طرز کی پروڈکٹ ویڈیوز',
    svc3_p: 'قدرتی، پیش کنندہ کے انداز والی ویڈیوز جو اصل کسٹمر ریویو محسوس ہوں — خریداروں کا سب سے قابلِ اعتماد فارمیٹ، پروڈکٹس، ایپس اور رئیل اسٹیٹ کے لیے۔',
    svc4_t: 'سینمائی پروڈکٹ فلمیں',
    svc4_p: 'متعدد زاویوں والی پریمیم فلمیں، ہموار کیمرہ موومنٹ، موسیقی اور ٹائٹل اسکرینز کے ساتھ — ایسی ویڈیوز جو عام پروڈکٹ کو بھی برانڈ جیسا دکھائیں۔',
    svc5_t: 'اردو اور انگریزی وائس اوور',
    svc5_p: 'اردو یا انگریزی میں واضح اے آئی وائس اوور، مماثل سب ٹائٹلز کے ساتھ — پاکستانی اور خلیجی ناظرین کے لیے بہترین جو ویڈیو دیکھ کر خریداری کرتے ہیں۔',
    film_eyebrow: 'نمایاں فلم',
    film_h2: 'ایک تصویر اندر۔ پوری فلم باہر۔',
    film_lead: 'میرا خاص کام: صرف ایک تصویر سے تیار اور ایڈٹ شدہ مکمل سینمائی کار فلم — ہر زاویہ یکساں، موسیقی، ٹائٹل اور اختتامی اسکرینز کے ساتھ۔',
    film_video_label: 'سوزوکی مہران کی سینمائی کار فلم، 63 سیکنڈ',
    film_title: 'سینمائی کار فلم — سوزوکی مہران',
    film_caption: 'عثمان کی اے آئی سے تیار اور ایڈٹ شدہ · 63 سیکنڈ · موسیقی کے ساتھ',
    film_desc: 'گاڑی کی صرف ایک تصویر سے بنائی گئی: ہیڈلائٹس والے لمحے کے ساتھ آہستہ آگے بڑھتا شاٹ، سائیڈ کے ساتھ سرکتا منظر، قریبی تفصیلات، اونچے زاویے کا نظارہ اور وسیع سنہرا اختتام۔ گاڑی، اس کی نمبر پلیٹ اور گلی ہر شاٹ میں یکساں رہتے ہیں — اے آئی ویڈیو کا سب سے مشکل حصہ، درست انداز میں۔',
    film_tag: 'سینمائی فلم · 63 سیکنڈ',
    strip_title: 'فلم کے مناظر',
    strip_alt1: 'سفید سوزوکی مہران کا اگلا منظر، ہیڈلائٹ روشن اور مہران بیج نمایاں',
    strip_alt2: 'سفید سوزوکی مہران کا پہلو، دروازوں کے ساتھ اگلے پہیے کی طرف سرکتا منظر',
    strip_alt3: 'سوزوکی مہران کی ہیڈلائٹ اور گرل کا قریبی منظر، لیمپ روشن',
    strip_alt4: 'سفید سوزوکی مہران کا وسیع آخری شاٹ، شام کی گرم روشنی میں گھر کے گیٹ کے باہر کھڑی',
    strip_cap1: 'آغاز — ہیڈلائٹس آن',
    strip_cap2: 'سائیڈ کے ساتھ سرکتا منظر',
    strip_cap3: 'ہیڈلائٹ اور گرل کی تفصیل',
    strip_cap4: 'وسیع اختتامی منظر',
    latest_eyebrow: 'تازہ ترین کام',
    latest_h2: 'پروڈکٹ ٹیزرز اور برانڈ اشتہارات',
    latest_lead: 'پروڈکٹ برانڈز کے لیے حالیہ مختصر کام: رکھزار کراس باڈی بیگ کے لیے تاریک لانچ ٹیزر، AURENZA ہیئر آئل کے لیے روشن، فطرت پر مبنی پروڈکٹ اشتہار، نقوش ریزین آرٹ کے لیے سنہرا ریزین ٹیزر — خزف ہاتھ کی پینٹ شدہ سیرامکس کے لیے نرم، خواب جیسا عمودی ٹیزر — اور مسقط، عمان میں سرمایہ کار کے سفر پر مبنی 33 سیکنڈ کی عمودی رئیل اسٹیٹ فلم، پہلی اسکرول سے بکنگ کی تصدیق تک۔ مختصر اور دلچسپ — اسکرول روکنے کے لیے بنائے گئے۔',
    latest_video_label: 'رکھزار اینٹی تھیفٹ کراس باڈی بیگ کی لانچ ٹیزر ویڈیو، 10 سیکنڈ',
    latest_title: 'رکھزار — اینٹی تھیفٹ کراس باڈی بیگ',
    latest_caption: 'پروڈکٹ لانچ ٹیزر · 10 سیکنڈ · لاہور',
    latest_desc: 'رکھزار بیگ لانچ کے لیے بنایا گیا تاریک، سینمائی 360° ریویل ٹیزر: بیگ روشنی کی ایک کرن تلے آہستہ گھومتا ہے، اس کی زپیں اور پٹا سائے سے ابھرتے ہیں، اور پھر لانچ کا پیغام آتا ہے — جلد آ رہا ہے، لاہور۔',
    latest_tag: 'لانچ ٹیزر · 10 سیکنڈ',
    latest2_video_label: 'AURENZA ہیئر آئل کی پروڈکٹ اشتہار ویڈیو، 10 سیکنڈ',
    latest2_title: 'AURENZA — ہیئر آئل',
    latest2_caption: 'پروڈکٹ اشتہار · 10 سیکنڈ · فل ایچ ڈی',
    latest2_desc: 'AURENZA ہیئر آئل کے لیے پریمیم پروڈکٹ اشتہار، پتوں کے درمیان سنہری صبح کی روشنی میں بنایا گیا: پتھر پر رکھی بوتل، ڈراپر کا آہستہ قریبی منظر، اور اختتام پر مکمل پیک شاٹ — آخری سطر کے ساتھ: "آپ کے بال۔ آپ کی چمک۔"',
    latest2_tag: 'برانڈ اشتہار · 10 سیکنڈ',
    latest3_video_label: 'نقوش ریزین آرٹ کی برانڈ ٹیزر ویڈیو، 10 سیکنڈ',
    latest3_title: 'نقوش — ریزین آرٹ',
    latest3_caption: 'برانڈ ٹیزر · 10 سیکنڈ',
    latest3_desc: 'نقوش — ہاتھ سے بنے ریزین آرٹ برانڈ — کے لیے سنہرا ریزین ٹیزر: سنہرے ذرات کے ساتھ گھومتا مائع سونا، نرم ماربل کی بناوٹ، اور اختتام پر وعدہ — "کچھ بڑا آنے والا ہے۔"',
    latest3_tag: 'لانچ ٹیزر · 10 سیکنڈ',
    latest4_video_label: 'خزف ہاتھ کی پینٹ شدہ سیرامکس کی برانڈ ٹیزر ویڈیو، 13 سیکنڈ، عمودی',
    latest4_title: 'خزف — ہاتھ کی پینٹ شدہ سیرامکس',
    latest4_caption: 'برانڈ ٹیزر · 13 سیکنڈ · عمودی',
    latest4_desc: 'خزف — ہاتھ کی پینٹ شدہ سیرامکس برانڈ — کے لیے نرم، خواب جیسا ٹیزر: لفظوں "اگر عام سا ہوتا تو…" کے پاس سے گزرتا گرتا پھول کا پتا، مٹی پر گلابی پھول کو زندگی دیتا برش، اور اختتام پر وعدہ — "جلد آ رہا ہے۔"',
    latest4_tag: 'جلد آ رہا ہے · 13 سیکنڈ',
    latest5_video_label: 'مسقط، عمان میں سرمایہ کار کے سفر کی رئیل اسٹیٹ فلم، 33 سیکنڈ، عمودی',
    latest5_title: 'مسقط، عمان — رئیل اسٹیٹ سرمایہ کار کا سفر',
    latest5_caption: 'رئیل اسٹیٹ فلم · 33 سیکنڈ · عمودی',
    latest5_desc: 'مسقط، عمان میں ایک سرمایہ کار کے سفر پر مبنی عمودی رئیل اسٹیٹ فلم: وہ فون پر پراپرٹی دریافت کرتا ہے، لوکیشن دیکھتا ہے، آپشنز کا جائزہ لیتا ہے، دستاویزات پر دستخط کرتا ہے اور بکنگ کی تصدیق حاصل کرتا ہے — اختتام غروب آفتاب کے فضائی منظر اور اس سطر پر ہوتا ہے: "آپ کی اگلی سرمایہ کاری عمان میں یہیں سے شروع ہوتی ہے۔"',
    latest5_tag: 'رئیل اسٹیٹ · 33 سیکنڈ',
    cta_eyebrow: 'ریلز · ٹک ٹاک · شارٹس',
    cta_h: 'ایسا ہی عمودی ٹیزر چاہیے؟',
    cta_p: 'فیڈ کے لیے بنائے گئے عمودی ٹیزرز — آپ کی پروڈکٹ کے گرد تیار، وائس اوور اور ایڈیٹنگ کے ساتھ، سب ٹائٹلز اور لانچ کے لیے تیار تکمیل کے ساتھ۔',
    cta_btn: 'واٹس ایپ پر پوچھیں',
    price_anchor: 'پیکجز $5 سے — قیمتیں دیکھیں ↓',
    rev_eyebrow: 'کلائنٹ کی محبت',
    rev_h2: 'اصل کلائنٹس کے پانچ ستارہ الفاظ',
    rev_lead: 'کلائنٹس اور ساتھی میرے ساتھ کام کے بارے میں کیا کہتے ہیں۔',
    rev1_q: '"یہ واقعی ایک اچھا تجربہ تھا، ہمیں ہماری ویب سائٹ وقت پر موصول ہوئی"',
    rev1_role: 'ویب سائٹ ڈویلپمنٹ · رکھزار ٹیک · اکتوبر 2026',
    rev2_q: '"میں بہت مطمئن ہوں کیونکہ مجھے میری ویب سائٹ وقت پر مکمل موصول ہوئی ☺️"',
    rev2_role: 'اکتوبر 2026',
    rev3_q: '"حیرت انگیز سروس! مکمل طور پر مطمئن.."',
    rev3_role: 'اکتوبر 2026',
    rev_cta_pre: 'ایسے ہی نتائج چاہئیں؟',
    rev_cta_link: 'مجھے فائیور پر ہائر کریں',
    proc_eyebrow: 'طریقہ کار',
    proc_h2: 'پروڈکٹ سے شائع شدہ ویڈیو تک، صرف 4 مراحل میں',
    proc1_t: 'اپنی پروڈکٹ بتائیں',
    proc1_p: 'واٹس ایپ پر اپنی پروڈکٹ کی تصاویر یا پروڈکٹ کا لنک بھیجیں، ساتھ اپنی پیشکش کے بارے میں ایک سطر لکھیں۔',
    proc2_t: 'تصور اور اسکرپٹ',
    proc2_p: 'میں آغاز، اسکرپٹ اور شاٹ پلان تیار کرتا ہوں — اور آپ سے سمت کی تصدیق کرتا ہوں۔',
    proc3_t: 'اے آئی تیاری اور ایڈیٹنگ',
    proc3_p: 'مناظر تیار کیے جاتے ہیں، وائس اوور اور سب ٹائٹلز شامل کر کے شاندار حتمی شکل دی جاتی ہے۔',
    proc4_t: '2 تا 5 دن میں ڈیلیوری',
    proc4_p: 'آپ کو شائع کرنے کے لیے تیار MP4 ملتی ہے، ساتھ شامل نظرثانیاں تاکہ ویڈیو مکمل طور پر درست ہو جائے۔',
    price_eyebrow: 'قیمتیں',
    price_h2: 'سادہ اور شفاف پیکجز',
    price_lead: 'میرے فائیور گگ والے ہی پیکجز — کوئی پوشیدہ فیس نہیں۔ کئی ویڈیوز چاہئیں؟ واٹس ایپ پر بنڈل قیمت پوچھیں۔',
    price_basic_name: 'بنیادی',
    price_standard_name: 'معیاری',
    price_premium_name: 'پریمیم',
    price_badge: 'سب سے مقبول',
    li_short: '1 اے آئی مختصر ویڈیو',
    li_15: '15 سیکنڈ تک',
    li_rev1: '1 نظرثانی',
    li_del2: '2 دن میں ڈیلیوری',
    li_ad: '1 اے آئی ویڈیو اشتہار',
    li_30: '30 سیکنڈ تک',
    li_vo: 'اردو یا انگریزی وائس اوور',
    li_rev2: '2 نظرثانیاں',
    li_del3: '3 دن میں ڈیلیوری',
    li_60: '60 سیکنڈ تک',
    li_vo_sub: 'وائس اوور + سب ٹائٹلز',
    li_rev3: '3 نظرثانیاں',
    li_del_pri: 'ترجیحی ڈیلیوری',
    price_btn_basic: 'بنیادی سے آغاز کریں',
    price_btn_standard: 'معیاری سے آغاز کریں',
    price_btn_premium: 'پریمیم سے آغاز کریں',
    about_img_alt: 'عثمان کلیرا کی اسٹوڈیو تصویر، اے آئی ویڈیو کری ایٹر اور رکھزار ٹیک کے بانی',
    about_eyebrow: 'میرے بارے میں',
    about_h2: 'ویڈیوز کے پیچھے موجود تخلیق کار',
    about_p1: 'میں بی ایس آرٹیفیشل انٹیلیجنس کا طالب علم اور <strong>رکھزار ٹیک</strong> کا بانی اور سی ای او ہوں، لاہور، پاکستان سے دنیا بھر کے کلائنٹس کے ساتھ کام کرتا ہوں — بشمول عمان کے ایک رئیل اسٹیٹ کلائنٹ کے۔',
    about_p2: 'گزشتہ ڈھائی سال سے میں برانڈز اور فروخت کنندگان کے لیے جنریٹو اے آئی ویڈیوز بنا رہا ہوں: اشتہارات، ریلز، یو جی سی طرز کی پروڈکٹ ویڈیوز اور سینمائی فلمیں۔ میری خصوصیات ہیں <strong>ہر شاٹ میں یکساں کردار</strong> اور <strong>سب ٹائٹلز کے ساتھ قدرتی اردو اور انگریزی وائس اوور</strong> — وہی تفصیلات جو اے آئی ویڈیو کو حقیقی محسوس کراتی ہیں۔',
    about_p3: 'ہر پروجیکٹ میں خود ذاتی طور پر سنبھالتا ہوں، پہلے آغاز سے حتمی کٹ تک۔',
    about_btn1: 'میرے ساتھ کام کریں',
    about_btn2: 'میرا مرکزی پورٹ فولیو دیکھیں',
    faq_eyebrow: 'سوالات',
    faq_h2: 'عام طور پر پوچھے جانے والے سوالات',
    faq_q1: 'اے آئی ویڈیو کی قیمت کتنی ہے؟',
    faq_a1: 'قیمتیں بنیادی مختصر ویڈیو (15 سیکنڈ تک) کے لیے $5 سے شروع ہوتی ہیں۔ معیاری پیکج $10 کا ہے، 30 سیکنڈ تک کے ویڈیو اشتہار اور وائس اوور کے ساتھ، اور پریمیم $20 کا ہے، 60 سیکنڈ تک وائس اوور اور سب ٹائٹلز کے ساتھ۔ لمبی یا کئی ویڈیوز کے لیے واٹس ایپ پر حسبِ ضرورت قیمت پوچھیں۔',
    faq_q2: 'میری ویڈیو کتنی جلدی ملے گی؟',
    faq_a2: 'ڈیلیوری پیکج کے مطابق 2 تا 5 دن میں ہوتی ہے: بنیادی 2 دن میں، معیاری 3 دن میں، اور پریمیم ترجیحی ڈیلیوری کے ساتھ۔ اگر آپ کی لانچ کی تاریخ قریب ہے تو واٹس ایپ پر بتائیں، آرڈر سے پہلے میں تصدیق کر دوں گا کہ کیا ممکن ہے۔',
    faq_q3: 'آغاز کے لیے آپ سے کیا چاہیے؟',
    faq_a3: 'بس آپ کی پروڈکٹ کی تصاویر یا پروڈکٹ پیج کا لنک، اگر لوگو ہے تو وہ، اور چند سطریں کہ آپ کی پیشکش کیا ہے اور ویڈیو کس کے لیے ہے۔ تصور، اسکرپٹ، وائس اوور اور ایڈیٹنگ میں سنبھالتا ہوں — آپ بس جائزہ لے کر منظور کریں۔',
    faq_q4: 'کتنی نظرثانیاں شامل ہیں؟',
    faq_a4: 'بنیادی میں 1 نظرثانی، معیاری میں 2 نظرثانیاں اور پریمیم میں 3 نظرثانیاں شامل ہیں۔ نظرثانی میں مناظر، اسکرین کے متن اور وائس اوور میں تبدیلیاں شامل ہیں تاکہ حتمی ویڈیو آپ کے برانڈ کے مطابق ہو۔',
    faq_q5: 'کیا آپ میری ویڈیو اردو میں بنا سکتے ہیں؟',
    faq_a5: 'جی ہاں۔ میں اردو اور انگریزی دونوں میں اے آئی وائس اوور تیار کرتا ہوں، اور پریمیم ویڈیوز میں سب ٹائٹلز شامل ہوتے ہیں۔ میرے بہت سے کلائنٹس پاکستان اور خلیج میں فروخت کرتے ہیں، اس لیے اردو وائس اوور کے ساتھ انگریزی سب ٹائٹلز میرا سب سے زیادہ مانگا جانے والا مجموعہ ہے۔',
    contact_eyebrow: 'پروجیکٹ شروع کریں',
    contact_h2: 'مجھے اپنی پروڈکٹ کے بارے میں بتائیں',
    contact_lead: 'یہ فارم بھریں، واٹس ایپ آپ کی تفصیل کے ساتھ کھل جائے گا۔ میں عام طور پر اسی دن جواب دیتا ہوں۔',
    form_name: 'آپ کا نام',
    form_name_ph: 'مثلاً عائشہ خان',
    form_product: 'آپ کی پروڈکٹ',
    form_product_ph: 'مثلاً رال کے زیورات، رئیل اسٹیٹ، ملبوسات...',
    form_product_error: 'براہ کرم بتائیں کہ آپ کی پروڈکٹ کیا ہے — چند الفاظ ہی کافی ہیں۔',
    form_type: 'ویڈیو کی قسم',
    form_opt1: 'اے آئی ویڈیو اشتہار (سوشل میڈیا)',
    form_opt2: 'ریل / ٹک ٹاک / شارٹ',
    form_opt3: 'یو جی سی طرز کی پروڈکٹ ویڈیو',
    form_opt4: 'سینمائی پروڈکٹ فلم',
    form_opt5: 'ابھی یقین نہیں — مشورہ دیں',
    form_extra: 'کچھ اور؟',
    form_optional: '(اختیاری)',
    form_msg_ph: 'آپ کی پیشکش، ناظرین، آخری تاریخ...',
    form_submit: 'واٹس ایپ پر تفصیل بھیجیں',
    form_note_pre: 'فائیور پسند ہے؟',
    form_note_link: 'میری فائیور گگ سے آرڈر کریں',
    form_note_suf: '',
    footer_brand: 'عثمان کلیرا — اے آئی ویڈیو کری ایٹر · بانی و سی ای او، رکھزار ٹیک · لاہور، پاکستان',
    share_label: 'یہ پورٹ فولیو شیئر کریں',
    share_wa_label: 'واٹس ایپ پر شیئر کریں',
    share_fb_label: 'فیس بک پر شیئر کریں',
    share_x_label: 'ایکس پر شیئر کریں',
    share_copy_label: 'پورٹ فولیو لنک کاپی کریں',
    copy_link: 'لنک کاپی کریں',
    copied: 'کاپی ہو گیا',
    footer_nav_label: 'فوٹر',
    foot_fiverr: 'فائیور',
    foot_main: 'مرکزی پورٹ فولیو',
    foot_rakhzaar: 'رکھزار ٹیک',
    foot_wa: 'واٹس ایپ',
    footer_rights: 'عثمان کلیرا۔ اس صفحے کی تمام ویڈیوز میرا اپنا کام ہیں۔',
    wa_float_label: 'واٹس ایپ پر بات کریں',
    lb_label: 'فلم کے مناظر دیکھیں',
    lb_img_alt: 'فلم کا منظر، بڑی صورت میں',
    lb_close: 'بند کریں',
    lb_prev: 'پچھلا منظر',
    lb_next: 'اگلا منظر',
    menu_open: 'مینیو کھولیں',
    menu_close: 'مینیو بند کریں',
    theme_to_light: 'روشن تھیم پر جائیں',
    theme_to_dark: 'تاریک تھیم پر جائیں',
    view_scene: 'منظر دیکھیں'
  };

  /* ================= i18n engine (English originals captured from DOM) ================= */
  var originals = { text: {}, aria: {}, alt: {}, ph: {} };
  function capture(map, el, get) {
    var key = el.getAttribute(map === 'text' ? 'data-i18n' : map === 'aria' ? 'data-i18n-aria' : map === 'alt' ? 'data-i18n-alt' : 'data-i18n-ph');
    if (key && !(key in originals[map])) originals[map][key] = get(el);
  }
  document.querySelectorAll('[data-i18n]').forEach(function (el) { capture('text', el, function (e) { return e.innerHTML; }); });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { capture('aria', el, function (e) { return e.getAttribute('aria-label') || ''; }); });
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) { capture('alt', el, function (e) { return e.getAttribute('alt') || ''; }); });
  document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { capture('ph', el, function (e) { return e.getAttribute('placeholder') || ''; }); });

  var currentLang = document.documentElement.getAttribute('lang') === 'ur' ? 'ur' : 'en';
  function t(key) {
    if (currentLang === 'ur' && key in UR) return UR[key];
    return originals.text[key] || originals.aria[key] || '';
  }
  function applyLang(lang, save) {
    currentLang = lang;
    var html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');
    var pick = function (map, dict, set) {
      document.querySelectorAll(map === 'text' ? '[data-i18n]' : map === 'aria' ? '[data-i18n-aria]' : map === 'alt' ? '[data-i18n-alt]' : '[data-i18n-ph]').forEach(function (el) {
        var key = el.getAttribute(map === 'text' ? 'data-i18n' : map === 'aria' ? 'data-i18n-aria' : map === 'alt' ? 'data-i18n-alt' : 'data-i18n-ph');
        var val = (lang === 'ur' && key in dict) ? dict[key] : originals[map][key];
        if (val !== undefined) set(el, val);
      });
    };
    pick('text', UR, function (el, v) { el.innerHTML = v; });
    pick('aria', UR, function (el, v) { el.setAttribute('aria-label', v); });
    pick('alt', UR, function (el, v) { el.setAttribute('alt', v); });
    pick('ph', UR, function (el, v) { el.setAttribute('placeholder', v); });
    document.querySelectorAll('.lang-opt').forEach(function (sp) {
      sp.classList.toggle('is-active', sp.getAttribute('data-lang-opt') === lang);
    });
    refreshMenuLabel();
    refreshThemeLabel();
    refreshStripLabels();
    if (save) { try { localStorage.setItem('uk-lang', lang); } catch (e) {} }
  }

  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLang(currentLang === 'ur' ? 'en' : 'ur', true);
    });
  }

  /* ================= Theme ================= */
  var themeToggle = document.getElementById('themeToggle');
  var themeMeta = document.getElementById('themeColor');
  var currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  function refreshThemeLabel() {
    if (!themeToggle) return;
    var key = currentTheme === 'light' ? 'theme_to_dark' : 'theme_to_light';
    themeToggle.setAttribute('aria-label',
      currentLang === 'ur' ? UR[key] : (currentTheme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'));
  }
  function applyTheme(theme, save) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    if (themeMeta) themeMeta.setAttribute('content', theme === 'light' ? '#faf5ee' : '#17101d');
    refreshThemeLabel();
    if (save) { try { localStorage.setItem('uk-theme', theme); } catch (e) {} }
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      applyTheme(currentTheme === 'light' ? 'dark' : 'light', true);
    });
  }

  /* ================= Mobile menu ================= */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  function refreshMenuLabel() {
    if (!toggle) return;
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-label',
      currentLang === 'ur' ? (open ? UR.menu_close : UR.menu_open) : (open ? 'Close menu' : 'Open menu'));
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      refreshMenuLabel();
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        refreshMenuLabel();
      }
    });
  }

  /* ================= Videos: only one plays at a time ================= */
  var videos = Array.prototype.slice.call(document.querySelectorAll('video'));
  videos.forEach(function (v) {
    v.addEventListener('play', function () {
      videos.forEach(function (other) {
        if (other !== v && !other.paused) other.pause();
      });
    });
  });

  /* Posters ship as WebP directly in the markup — no runtime swap,
     so a JPG poster is never downloaded. */

  /* Reduced motion: the hero must not autoplay */
  var heroVideo = document.querySelector('.hero-video');
  if (heroVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroVideo.removeAttribute('autoplay');
    heroVideo.pause();
  }

  /* ================= FAQ accordion ================= */
  document.querySelectorAll('.faq-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var panel = item.querySelector('.faq-a');
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-toggle[aria-expanded="true"]').forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          other.closest('.faq-item').querySelector('.faq-a').hidden = true;
        }
      });
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      panel.hidden = isOpen;
    });
  });

  /* ================= Reveal on scroll ================= */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ================= Film-strip lightbox ================= */
  var stripItems = Array.prototype.slice.call(document.querySelectorAll('.strip-item'));
  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCaption = document.getElementById('lbCaption');
  var lbCount = document.getElementById('lbCount');
  var lbClose = document.getElementById('lbClose');
  var lbPrev = document.getElementById('lbPrev');
  var lbNext = document.getElementById('lbNext');
  var lbIndex = 0;
  var lastFocus = null;

  function refreshStripLabels() {
    stripItems.forEach(function (fig) {
      var cap = fig.querySelector('figcaption');
      var label = (currentLang === 'ur' ? UR.view_scene : 'View scene') + (cap ? ': ' + cap.textContent.trim() : '');
      fig.setAttribute('aria-label', label);
    });
  }
  function lbShow(i) {
    lbIndex = (i + stripItems.length) % stripItems.length;
    var fig = stripItems[lbIndex];
    var img = fig.querySelector('img');
    var cap = fig.querySelector('figcaption');
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.getAttribute('alt') || '';
    lbCaption.textContent = cap ? cap.textContent.trim() : '';
    lbCount.textContent = '(' + (lbIndex + 1) + ' / ' + stripItems.length + ')';
  }
  var bgInertEls = [];
  function lbSetInert(on) {
    bgInertEls = Array.prototype.slice.call(document.querySelectorAll('header, main, footer, .wa-float'));
    bgInertEls.forEach(function (el) { el.inert = on; });
  }
  function lbOpen(i) {
    lastFocus = document.activeElement;
    lbShow(i);
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbSetInert(true);
    lbClose.focus();
  }
  function lbCloseFn() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    lbSetInert(false);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  if (lightbox && stripItems.length) {
    stripItems.forEach(function (fig, i) {
      fig.addEventListener('click', function () { lbOpen(i); });
      fig.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lbOpen(i); }
      });
    });
    lbClose.addEventListener('click', lbCloseFn);
    lbPrev.addEventListener('click', function () { lbShow(lbIndex - 1); });
    lbNext.addEventListener('click', function () { lbShow(lbIndex + 1); });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) lbCloseFn(); });
    document.addEventListener('keydown', function (e) {
      if (lightbox.hidden) return;
      var rtl = document.documentElement.getAttribute('dir') === 'rtl';
      if (e.key === 'Escape') lbCloseFn();
      else if (e.key === 'ArrowRight') lbShow(lbIndex + (rtl ? -1 : 1));
      else if (e.key === 'ArrowLeft') lbShow(lbIndex + (rtl ? 1 : -1));
      else if (e.key === 'Tab') {
        /* Focus trap: cycle only among the lightbox controls */
        var focusables = [lbClose, lbPrev, lbNext];
        var idx = focusables.indexOf(document.activeElement);
        e.preventDefault();
        if (e.shiftKey) idx = idx <= 0 ? focusables.length - 1 : idx - 1;
        else idx = idx >= focusables.length - 1 ? 0 : idx + 1;
        focusables[idx].focus();
      }
    });
  }

  /* ================= Share: copy link ================= */
  var copyBtn = document.getElementById('copyLink');
  if (copyBtn) {
    var copyLabel = copyBtn.querySelector('.copy-label');
    var copyTimer = null;
    copyBtn.addEventListener('click', function () {
      var done = function () {
        copyBtn.classList.add('copied');
        if (copyLabel) copyLabel.textContent = currentLang === 'ur' ? UR.copied : 'Copied';
        clearTimeout(copyTimer);
        copyTimer = setTimeout(function () {
          copyBtn.classList.remove('copied');
          if (copyLabel) copyLabel.textContent = currentLang === 'ur' ? UR.copy_link : (originals.text.copy_link || 'Copy Link');
        }, 2000);
      };
      var fallback = function () {
        try {
          var ta = document.createElement('textarea');
          ta.value = CANONICAL;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        } catch (e) {}
        done();
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(CANONICAL).then(done, fallback);
      } else {
        fallback();
      }
    });
  }

  /* ================= WhatsApp brief form ================= */
  var form = document.getElementById('briefForm');
  var productInput = document.getElementById('bfProduct');
  var productError = document.getElementById('bfProductError');
  function setProductError(show) {
    if (!productInput || !productError) return;
    productError.hidden = !show;
    productInput.setAttribute('aria-invalid', show ? 'true' : 'false');
  }
  if (productInput) {
    productInput.addEventListener('input', function () {
      if (productInput.value.trim()) setProductError(false);
    });
  }
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('bfName').value.trim();
      var product = productInput.value.trim();
      var type = document.getElementById('bfType').value;
      var msg = document.getElementById('bfMsg').value.trim();
      if (!product) {
        setProductError(true);
        productInput.focus();
        return;
      }
      setProductError(false);
      var lines = ['Hi Usman, I want an AI video for my product...'];
      if (name) lines.push('Name: ' + name);
      lines.push('Product: ' + product);
      lines.push('Video type: ' + type);
      if (msg) lines.push('Details: ' + msg);
      var url = 'https://wa.me/923187579301?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener');
    });
  }

  /* ================= WhatsApp float: fade while typing / at footer ================= */
  var waFloat = document.querySelector('.wa-float');
  if (waFloat) {
    var footerInView = false;
    var setFloatDim = function () {
      var typing = !!(form && form.contains(document.activeElement));
      waFloat.classList.toggle('dim', typing || footerInView);
    };
    if (form) {
      form.addEventListener('focusin', setFloatDim);
      form.addEventListener('focusout', function () { setTimeout(setFloatDim, 0); });
    }
    var siteFooter = document.querySelector('.site-footer');
    if (siteFooter && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          footerInView = en.isIntersecting;
          setFloatDim();
        });
      }).observe(siteFooter);
    }
  }

  /* ================= Footer year + initial state ================= */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  applyLang(currentLang, false);
  applyTheme(currentTheme, false);
  refreshStripLabels();
  refreshMenuLabel();
})();
