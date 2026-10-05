---
title: "Sözlük: Claude ve AI Terimleri Türkçe"
description: "Claude ekosistemindeki terimlerin sade Türkçe karşılıkları ve açıklamaları. CLAUDE.md'den Zero Data Retention'a kadar 50+ terim."
tags:
  - sozluk
  - terimler
  - referans
lastUpdated: "2026-10-05"
---

Claude ekosistemindeki terimlerin sade Türkçe karşılıkları. Her terim için kısa açıklama ve, varsa, detaylı sayfaya bağlantı.

> **Kullanım:** Ctrl+F (Cmd+F) ile aradığınız terime hızlıca gidebilirsiniz.

## A

**Adaptif Düşünme (Adaptive thinking)**
Claude'un görev karmaşıklığına göre cevap vermeden önce ne zaman ve ne kadar derin düşüneceğine dinamik olarak karar verme yeteneği.

**Agent**
Claude'un birden fazla adım boyunca otonom çalışıp araçlar kullanarak karmaşık görevleri tamamladığı çalışma biçimi. Detay: [Agents ve Subagents](/wiki/yetenekler/agents-subagents/).

**Anthropic**
Claude'u yapan şirket. Merkezi San Francisco'da. 2021'de kuruldu.

**Artifact**
Claude'un ürettiği etkileşimli çıktı, Cowork'te yan panelde açılan kalıcı HTML sayfa. Connector'dan canlı veri çekebilir. Detay: [Artifacts](/wiki/yetenekler/artifacts/).

**ASL (AI Safety Level)**
Anthropic'in modellerin yetenek seviyesini sınıflandırma sistemi (ASL-1 ile ASL-4+ arası). Her seviye için önceden tanımlanmış güvenlik kontrolleri uygulanır. Detay: [Anthropic ve Tarihçe](/wiki/temeller/anthropic-ve-tarihce/).

## B

**Bağlayıcı (Connector)**
Claude'u Gmail, Drive, Slack, Notion, CRM gibi üçüncü taraf servislere bağlayan entegrasyon; çoğu OAuth ile yetkilendirilir. Resmi dizinde yaklaşık 900 hazır connector bulunur, MCP ile özel connector da eklenebilir. Detay: [Connectors](/wiki/araclar/connectors/) ve [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/).

**Bash / Bash tool**
Kabuk / komut satırı ortamı. Claude izole bir sanal makinede burada kod çalıştırabilir. Detay: [Cowork Modu](/wiki/araclar/cowork-modu/).

**BATNA**
Best Alternative To a Negotiated Agreement: bir pazarlıkta anlaşmaya varılamazsa alacağınız en iyi alternatif. Satınalma ve ticarette kritik.

**Bilgi Kesim Tarihi (Knowledge Cutoff)**
Modelin eğitiminden sonraki olayları kendiliğinden bilmediği tarih. Fable 5.1, Opus 5.5 ve Sonnet 5.5 için güvenilir bilgi kesimi Haziran 2026, Haiku 4.5 için Şubat 2025'tir. Detay: [Modeller](/wiki/temeller/modeller/).

## C

**Chain-of-thought (Zincirleme Düşünme)**
Cevaptan önce Claude'dan adım adım akıl yürütmesini isteyen prompting tekniği. Detay: [İleri Seviye Prompt Engineering](/wiki/prompting/ileri-seviye/).

**Claude Chat**
claude.ai adresindeki standart tarayıcı / mobil arayüzü. Kurulum gerektirmez. Detay: [Claude Chat](/wiki/araclar/claude-chat/).

**Claude Desktop**
Windows ve macOS için yerel uygulama; Cowork'e giriş kapısı. Detay: [Claude Desktop](/wiki/araclar/claude-desktop/).

**Claude Enterprise**
Koltuk başı aylık 20 USD (yıllık faturalı) artı kullanımın API fiyatıyla ayrıca faturalandığı plan; RBAC, audit log, HIPAA yapılandırması, DPA. Bağlam penceresi diğer ücretli planlarla aynıdır (1M). Detay: [Planlar](/wiki/temeller/planlar/).

**Claude Free**
Ücretsiz plan; sıkı kullanım limitleri; 5 Project'e kadar; Cowork yok. Detay: [Claude Planları](/wiki/temeller/planlar/).

**Claude Max 5x**
Aylık 100 USD bireysel plan. Yeni başlayan kullanıcının ilk ayı için önerilir, agresif keşif ritminde Pro limiti yetmez. Ay 2+ kullanıma göre Pro'ya indirilebilir. Detay: [Planlar](/wiki/temeller/planlar/).

**Claude Max 20x**
Aylık 200 USD bireysel plan. Çok yoğun, sürekli kullanım için. Detay: [Planlar](/wiki/temeller/planlar/).

**CLAUDE.md**
Claude'un her Cowork oturumu başında okuduğu kalıcı talimat dosyası. Detay: [CLAUDE.md Nedir?](/wiki/claude-md/nedir/).

**Claude Pro**
Aylık 20 USD bireysel plan. Steady-state hafif kullanım için uygun. Sonnet 5.5 ve Cowork dahil. Kullanım limiti 5 saatlik pencere ve haftalık limitle işler. Detay: [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/) ve [Planlar](/wiki/temeller/planlar/).

**Claude Team**
Kurumsal plan, Standard koltuk aylık 25 USD (yıllıkta 20), Premium koltuk aylık 125 USD (yıllıkta 100), en az 2 koltuk; paylaşılan Project'ler; SSO; yönetici kontrolleri. Detay: [Planlar](/wiki/temeller/planlar/).

**Code Execution**
Claude'un sohbet içinde Python kodu yazıp sandbox'ta çalıştırması: gerçek hesap, veri analizi, grafik. Detay: [Code Execution](/wiki/yetenekler/code-execution/).

**Computer Use**
Claude'un herhangi bir yazılım GUI'si ile etkileşim kurma yeteneği: ekran görüntüleri ile görsel giriş, fare / klavye ile çıkış. Research preview aşamasındadır, yalnızca Pro ve Max'te, Claude Desktop içinde çalışır. Detay: [Computer Use](/wiki/yetenekler/computer-use/).

**Constitutional AI**
Anthropic'in geliştirdiği AI eğitim yöntemi: modelin "anayasa"ya göre kendi çıktılarını eleştirip iyileştirmesi. Detay: [Anthropic ve Tarihçe](/wiki/temeller/anthropic-ve-tarihce/).

**Context Compaction (Bağlam Sıkıştırma)**
Bağlam penceresi limitine yaklaşırken eski konuşma içeriğinin otomatik özetlenmesi, uzun oturumları ayakta tutar. Detay: [Context ve Compaction](/wiki/yetenekler/context-compaction/).

**Context Window (Bağlam Penceresi)**
Claude'un bir sohbette aynı anda görebildiği ve akıl yürütebildiği toplam metin.

**Cowork**
Claude'un çok adımlı otonom çalışma biçimi. 16 Eylül 2026'dan beri sohbetle tek Claude içinde birleşiyor (kademeli yayılım); masaüstü, web ve mobilde beta. Detay: [Cowork Modu](/wiki/araclar/cowork-modu/).

**Cowork Project**
Cowork içinde kendi klasörü, bağlamı, hafızası ve görevleri olan, oturumlar arası kalıcı hafızaya sahip ayrı çalışma alanı.

**Custom Skill (Özel Skill)**
Şirkete özel görev talimatlarını içeren, kullanıcının yazdığı SKILL.md dosyası.

## Ç

**Çaba (Effort)**
Claude'un bir işe ne kadar derin düşünüp ne kadar token harcayacağını ayarlayan seviye. Varsayılan modele ve yüzeye göre değişir; Haiku 4.5 desteklemez. Detay: [Effort Control](/wiki/yetenekler/effort-control/).

## D

**Dispatch**
Telefonunuzdan masaüstü Cowork oturumunuza görev göndermenizi sağlayan özellik. Pro ve Max için sınırlı beta, yeni kullanıcıya kapalı. Detay: [Dispatch](/wiki/araclar/dispatch/).

**DPA (Data Processing Agreement)**
Veri İşleme Sözleşmesi: KVKK ve GDPR kapsamında veri işleyenle yapılan, kurumsal dağıtım için gereken sözleşme. Anthropic'in DPA'sı yalnızca ticari ürünlerde (Team, Enterprise, API) geçerlidir ve ticari şartlara otomatik dahildir. Detay: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) ve [Takım ve Admin](/wiki/temeller/takim-ve-admin/).

## F

**Fable / Mythos**
Claude ailesinin en güçlü genel modeli Fable 5.1'dir (Mythos sınıfı). Mythos 5.1 yalnızca Project Glasswing katılımcılarına davetle açıktır. Fable, Max ve Team Premium'da plana dahildir (haftalık limitin en fazla %50'sine kadar); Pro ve Team Standard'da yalnızca kullanım kredisi (usage credits) ile kullanılır. Detay: [Modeller](/wiki/temeller/modeller/).

**Few-shot Prompting**
Prompt'ta istenen çıktı formatını, stilini veya akıl yürütme kalıbını göstermek için 2-5 örnek sağlamak. Detay: [İleri Seviye](/wiki/prompting/ileri-seviye/) ve [Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/).

## G

**Global instructions (Genel talimatlar)**
Cowork düzeyindeki talimatlar (Settings > Cowork), her oturuma uygulanır.

## H

**Halüsinasyon (Hallucination)**
Claude'un emin ama yanlış bilgi üretmesi. Detay: [Claude'un Sınırları](/wiki/temeller/sinirlamalar/).

## I

**Incoterms**
Uluslararası ticarette alıcı ve satıcı sorumluluklarını tanımlayan standart terimler (EXW, FOB, CIF, DAP vb.). [İhracat](/wiki/departmanlar/ihracat/) sayfasında detay.

## J

**JSON şema**
Claude'un yapılandırılmış veri çıktısında alanların isim ve tipini belirleyen tanım. Detay: [Çıktı Formatı](/wiki/prompting/cikti-formati/).

## K

**Knowledge Base (Bilgi Tabanı)**
Bir Project'e yüklenen belge koleksiyonu; Claude her sohbette referans alır. Ücretli planlarda RAG ile ölçeklenir.

**Kullanım Kredisi (Usage Credits)**
Abonelik kotası bitince devreye giren, API fiyatıyla çalışan kullandıkça öde bakiyesi; Pro, Max ve Team'de açılabilir. Detay: [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/).

**KVKK**
Kişisel Verilerin Korunması Kanunu, Türkiye'nin kişisel veri koruma yasası; kişisel verinin nasıl işleneceğini düzenler. Detay: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

## L

**LC (Letter of Credit)**
Akreditif, uluslararası ticarette bankanın alıcı adına satıcıya ödeme garantisi vermesi. [İhracat](/wiki/departmanlar/ihracat/).

**Live Artifact**
Cowork artifact'ı; connector'lara bağlanır ve her açıldığında güncel veriyle tazelenir. 19 Ağustos 2026'dan beri "legacy" biçimdir: mevcutlar çalışmaya devam eder ama yerinde düzenlenemez, bu tarihten sonra oluşturulanlar standart artifact'tir. Detay: [Artifacts](/wiki/yetenekler/artifacts/).

**LLM (Large Language Model)**
Büyük Dil Modeli, Claude'un ait olduğu AI kategorisi.

**LOI (Letter of Intent)**
Niyet Mektubu, uluslararası ticarette alıcı veya satıcının açılış pozisyonunu ifade eden belge.

## M

**MCP (Model Context Protocol)**
Açık standart, Claude ↔ dış servis bağlantıları için. Detay: [MCP Nedir?](/wiki/mcp/nedir/).

**Memory**
Claude'un otomatik biriktirdiği kişisel bilgi katmanı. 25 Ağustos 2026'dan beri sohbet ve Cowork arasında ortaktır; Free, Pro ve Max'te varsayılan açık, Team ve Enterprise'ta varsayılan kapalıdır. CLAUDE.md'den farklı; otomatik öğrenir. Detay: [Memory](/wiki/yetenekler/memory/).

**Memory Skill**
`productivity:memory-management`: iki-katmanlı kalıcı bilgi sistemi oluşturur. Detay: [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/).

## N

**NCNDA**
Non-Circumvention Non-Disclosure Agreement, dolanma önleme ve gizlilik sözleşmesi. Uluslararası ticarette sık kullanılır.

**NCR (Non-Conformance Report)**
Uygunsuzluk raporu: kalite sisteminde bir ürün veya sürecin spesifikasyon dışı durumunun belgelenmesi.

## O

**OEE (Overall Equipment Effectiveness)**
Üretim verim göstergesi: Kullanılabilirlik × Performans × Kalite. Detay: [Üretim ve İmalat](/wiki/departmanlar/uretim-imalat/).

**Onam (Aydınlatılmış Onam)**
Sağlık alanında hastanın bilgilendirilmiş izni. Detay: [Sağlık](/wiki/departmanlar/saglik/).

## P

**Plugin**
Skill'ler, MCP connector'ları ve subagent'ların kurulabilir paketi.

**Private Marketplace (Özel Marketplace)**
Yalnızca şirketin onayladığı araçlardan oluşan, Enterprise kontrollü plugin kataloğu.

**Project (claude.ai)**
Claude Chat'teki kalıcı çalışma alanı, bilgi tabanı ve özel talimatlarla. Detay: [Projects](/wiki/araclar/projects/).

**Prompt**
Claude'a gönderdiğiniz talimat veya mesaj.

**Prompt Chaining**
Karmaşık bir görevi ardışık prompt'lara bölmek: her çıktı sıradakinin girdisi olur.

**Prompt Injection**
Dış kaynaklı (e-posta, web) içeriğe gizlenmiş, Claude'u kötü davranışa yönlendirme amaçlı saldırı. Detay: [MCP Güvenlik](/wiki/mcp/guvenlik/).

**Prompt Library (Prompt Kütüphanesi)**
Kullanım senaryosuna göre organize edilmiş, kaydedilmiş, test edilmiş, yeniden kullanılabilir promptların kişisel koleksiyonu.

**Public Benefit Corporation (PBC)**
Anthropic'in kurumsal yapısı: kâr amacının yanında kamu yararını da gözeten yasal şirket türü. Detay: [Anthropic ve Tarihçe](/wiki/temeller/anthropic-ve-tarihce/).

## R

**RAG (Retrieval Augmented Generation)**
Ücretli planlarda bilgi tabanı kapasitesini ölçekleyen teknoloji.

**RFP / RFQ**
Request for Proposal / Request for Quote, Teklif Talebi / Fiyat Teklifi Talebi. Satınalma süreçlerinde kullanılır; üretim ve satınalmada standart belgedir. Detay: [Üretim ve İmalat](/wiki/departmanlar/uretim-imalat/), [Satınalma](/wiki/departmanlar/satinalma/).

**RSP (Responsible Scaling Policy)**
Anthropic'in AI modellerini güvenlik seviyesine göre yönetme politikası. ASL ile birlikte uygulanır. Detay: [Anthropic ve Tarihçe](/wiki/temeller/anthropic-ve-tarihce/).

## S

**SAML / SCIM / SSO**
Kurumsal kimlik yönetim standartları. SSO tek seferlik giriş, SAML protokol, SCIM otomatik kullanıcı sağlama. Team ve Enterprise planlarında. Detay: [Takım ve Admin](/wiki/temeller/takim-ve-admin/).

**Sandbox**
Claude'un kodu güvenle çalıştırdığı izole hesaplama ortamı. Detay: [Code Execution](/wiki/yetenekler/code-execution/).

**Scheduled Task (Zamanlanmış Görev)**
Kullanıcı başlatmadan belirli aralıkla çalışan otomasyon. Detay: [Scheduled Tasks](/wiki/araclar/scheduled-tasks/).

**Skill**
Özel görevler için önceden inşa edilmiş talimat seti; Cowork'te `/skill-adi` ile çağrılır. Detay: [Skills](/wiki/yetenekler/skills/).

**Sorumlu Sıfatıyla KDV (2 No'lu Beyanname)**
Türkiye'de yurt dışından dijital hizmet alımında, alıcının kendi sorumluluğunda hesaplayıp ödediği KDV. Detay: [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/).

**SPA (Sale and Purchase Agreement)**
Satış ve Satın Alma Sözleşmesi, uluslararası ticarette bağlayıcı ticari anlaşma.

**Subagent (Alt-agent)**
Claude tarafından paralel veya izole bir alt görev için oluşturulan Claude instance'ı. Detay: [Agents ve Subagents](/wiki/yetenekler/agents-subagents/).

**Sycophancy (Onay Eğilimi)**
Yapay zekanın doğru olanı değil, kullanıcının duymak istediğini söyleme eğilimi; bir görüş bildirildiğinde aksini düşünse bile hak verme. İş kararlarında risklidir. Karşı önlem: onaylatmak yerine çürütmesini istemek. Detay: [Sınırlamalar](/wiki/temeller/sinirlamalar/).

**System Prompt**
Bir konuşma başlamadan önce Claude'a verilen talimatlar; tüm yanıtları şekillendirir.

## Ş

**Şirket İçi Politika**
Claude kullanımını yöneten şirket-genel kuralları belgesi. Detay: [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/).

## T

**Takım CLAUDE.md**
Şirket / takım genelinde paylaşılan CLAUDE.md, bireyselin üstünde geçerli. Detay: [Takım CLAUDE.md](/wiki/claude-md/takim-claude-md/).

**Task Budget**
Bir agentik döngünün tamamı için Claude'a verilen istişari token bütçesi; işi önceliklendirmek ve düzgün bitirmek içindir, sert sınır değildir (kesin sınır `max_tokens`). Yalnızca API'de beta özelliğidir, Opus 4.7 ile duyuruldu; Claude Code ve Cowork'te desteklenmez.

**TCO (Total Cost of Ownership)**
Toplam Sahip Olma Maliyeti: sadece satın alma fiyatı değil, tüm yaşam döngüsü maliyetleri dahil.

**Token**
Yaklaşık 0.75 İngilizce kelime; bağlam penceresi boyutunun ölçüm birimi.

**TSV (Tab-Separated Values)**
Sekme ile ayrılmış değer formatı. Excel'e yapıştırma için CSV'den daha güvenli. Detay: [Çıktı Formatı](/wiki/prompting/cikti-formati/).

**TTK**
Türk Ticaret Kanunu, Türkiye'nin ticari faaliyetleri düzenleyen temel kanunu.

## V

**VERBİS**
KVKK kapsamında Veri Sorumluları Sicili. AI araçlarıyla işlenen kişisel veriler de kayıt yükümlülüğü kapsamında değerlendirilebilir; hukuk müşavirinize danışın.

**Vision (Görü)**
Claude'un görselleri (belge, grafik, ekran görüntüsü, fotoğraf) görme, analiz etme ve hakkında akıl yürütme yeteneği. Claude görsel üretmez veya düzenlemez. Detay: [Görsel ve Görüntü](/wiki/yetenekler/vision-image/).

**VM (Virtual Machine)**
Sanal makine, Cowork'ün kod çalıştırdığı izole sandbox.

**Voice Mode**
Claude'un ses giriş / çıkış arayüzü (beta); web, mobil ve masaüstünde, tüm planlarda mevcut. Türkçe, yardım sayfasındaki desteklenen diller arasında görünmüyor. Detay: [Voice Mode](/wiki/araclar/voice-mode/).

## W

**Working Directory**
Cowork'te Claude'un geçici çalışma alanı; oturumlar arası temizlenir.

**Workspace Folder (Workspace Klasörü)**
Kullanıcının Cowork'e bağladığı gerçek bilgisayar klasörü; tüm çıktılar buraya kaydedilir ve kalıcıdır.

## X

**XML Tag'leri**
Prompt'larda kullanılan yapısal işaretçiler (örn. `<context>`, `<task>`), Claude'un karmaşık talimatları ayrıştırmasına yardım eder.

## Y

**Yapışkan Bilgi (Memory vs CLAUDE.md vs Project Knowledge)**
Üç katmanlı kalıcı bilgi sistemi: Memory (otomatik kişisel), CLAUDE.md (manuel kural), Project Knowledge (büyük doküman havuzu). Detay: [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/).

## Z

**Zero Data Retention**
Bir API sözleşme düzenlemesi: Anthropic istem ve yanıtları, yanıt döndükten sonra depolamaz. Bir plan değildir; satış ekibiyle talep edilir, kuruluş başına etkinleştirilir ve tüm API özellikleri uygun değildir. Enterprise planına otomatik dahil değildir.

---

**Sözlük yaşayan bir belgedir.** Claude yeni özellikler ekledikçe, modeller değiştikçe ve yeni kullanım senaryoları ortaya çıktıkça güncellenir. Son güncelleme: 2026-10-05.

