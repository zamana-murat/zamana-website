---
title: "Sözlük: Claude ve AI Terimleri Türkçe"
seoTitle: "Claude Sözlüğü: Yapay Zeka Terimleri Türkçe"
description: "Claude ve yapay zeka terimlerinin sade Türkçe karşılıkları: effort, thinking, Cowork, CLAUDE.md, geçici sohbet, Research, KVKK ve 90'dan fazla terim."
tags:
  - sozluk
  - terimler
  - referans
lastUpdated: "2026-11-09"
---

Claude ekosistemindeki terimlerin sade Türkçe karşılıkları. Her terim için kısa açıklama ve, varsa, detaylı sayfaya bağlantı.

> **Kullanım:** Ctrl+F (Cmd+F) ile aradığınız terime hızlıca gidebilirsiniz.

## A

**Adaptif Düşünme (Adaptive thinking)**
Claude'un görev karmaşıklığına göre cevap vermeden önce ne zaman ve ne kadar derin düşüneceğine kendisinin karar vermesi. Güncel modellerde varsayılan yöntemdir. Thinking ve effort ile ilişkisi için bkz. [Effort Control](/wiki/yetenekler/effort-control/).

<a id="agent"></a>**Agent (Yapay Zeka Ajanı)**
Yapay zeka ajanı: Claude'un birden fazla adım boyunca otonom çalışıp araçlar kullanarak karmaşık görevleri tamamladığı çalışma biçimi. Detay: [Agents ve Subagents](/wiki/yetenekler/agents-subagents/).

**AGENTS.md**
Claude Code'da, klasörde CLAUDE.md yoksa proje talimatı olarak okunan yedek dosya. Geliştirici aracıdır; iş kullanıcısının bilmesi şart değildir. Detay: [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/).

**Anthropic**
Claude'u yapan şirket. Merkezi San Francisco'da. 2021'de kuruldu. Detay: [Anthropic ve Tarihçe](/wiki/temeller/anthropic-ve-tarihce/).

**Artifact**
Claude'un sohbette ya da Cowork'te ürettiği, yan panelde açılan etkileşimli çıktı (sayfa, tablo, küçük uygulama). Artifact'ler Free dahil tüm planlarda vardır. Eski "live artifact" biçimi için bkz. Live Artifact. Detay: [Artifacts](/wiki/yetenekler/artifacts/).

**ASL (AI Safety Level)**
Anthropic'in modellerin yetenek seviyesini sınıflandırma sistemi (ASL-1 ile ASL-4+ arası). Her seviye için önceden tanımlanmış güvenlik kontrolleri uygulanır. Detay: [Anthropic ve Tarihçe](/wiki/temeller/anthropic-ve-tarihce/).

## B

<a id="connector"></a>**Bağlayıcı (Connector)**
Claude'u Gmail, Drive, Slack, Notion, CRM gibi üçüncü taraf servislere bağlayan entegrasyon; çoğu OAuth ile yetkilendirilir. Resmi dizinde 1.000'den fazla hazır connector bulunur, MCP ile özel connector da eklenebilir. Logo, Mikro, Paraşüt gibi Türk iş araçlarında resmi connector durumu farklıdır. Detay: [Connectors](/wiki/araclar/connectors/), [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/) ve [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/).

<a id="baglam-penceresi"></a>**Bağlam Penceresi (Context Window)**
Claude'un bir sohbette aynı anda görebildiği ve akıl yürütebildiği toplam metin. Plana göre değil modele göre değişir: Fable 5.1, Opus 5.5 ve Sonnet 5.5 için 1M token, Haiku 5.5 için 1M, legacy Haiku 4.5 için 200K. Uzun belgede sorunuzu belgeden sonra, en sona yazmak yanıtı iyileştirir. Detay: [Context ve Compaction](/wiki/yetenekler/context-compaction/) ve [Belgeyle Çalışma](/wiki/prompting/belgeyle-calisma/).

**Bash / Bash tool**
Kabuk / komut satırı ortamı. Claude izole bir sanal makinede burada kod çalıştırabilir. Detay: [Cowork Modu](/wiki/araclar/cowork-modu/).

**BATNA**
Best Alternative To a Negotiated Agreement: bir pazarlıkta anlaşmaya varılamazsa alacağınız en iyi alternatif. Satınalma ve ticarette kritik. Detay: [Satınalma](/wiki/departmanlar/satinalma/).

**Bilgi Kesim Tarihi (Knowledge Cutoff)**
Modelin eğitiminden sonraki olayları kendiliğinden bilmediği tarih. Fable 5.1, Opus 5.5 ve Sonnet 5.5 için güvenilir bilgi kesimi Haziran 2026 (Haiku 5.5 için de Haziran 2026), legacy Haiku 4.5 için Şubat 2025'tir. Güncel konuda web aramasını açmak gerekir. Detay: [Modeller](/wiki/temeller/modeller/).

## C

**Chain-of-thought (Zincirleme Düşünme)**
Cevaptan önce Claude'dan adım adım akıl yürütmesini isteyen prompting tekniği. Thinking açıkken "adım adım düşün" demek önerilmez; genel bir talimat ("iyice düşün") çoğu zaman elle yazılmış adım planından iyidir. Elle zincirleme düşünce, thinking kapalıyken yedek yöntemdir. Detay: [İleri Seviye Prompt Engineering](/wiki/prompting/ileri-seviye/).

<a id="claude-okunusu"></a>**Claude (okunuşu)**
Türkçede genellikle "Klod" diye okunur (İngilizce telaffuza yakın). Yazıda "Claude" olarak bırakılır; modelin adı Anthropic tarafından verilmiştir.

**Claude Academy**
Anthropic'in ücretsiz kurs platformu (academy.claude.com, eski adıyla Anthropic Academy). Kurslar arasında AI Fluency, Claude 101 ve Cowork girişi bulunur; tamamlayana rozet ya da sertifika verilir. Detay: [4D Çerçevesi](/wiki/prompting/4d-cercevesi/).

**Claude Chat**
claude.ai adresindeki standart tarayıcı / mobil arayüzü. Kurulum gerektirmez. Detay: [Claude Chat](/wiki/araclar/claude-chat/).

**Claude Code**
Claude'un terminalde ve geliştirici ortamlarında (VS Code, Cursor, JetBrains) çalışan kodlama aracı; kullanım kotası sohbetle ortaktır, Free'de yoktur. Geliştirici aracıdır, iş eğitiminin kapsamı dışındadır. Detay: [Kurumlar için Claude Code](/kurumsal/claude-code/).

**Claude Dashboards**
Bağlı veri kaynağından (Snowflake, BigQuery, Salesforce gibi) sade bir soruyla canlı pano kuran ve veri değiştikçe güncel tutan özellik (8 Ekim 2026, beta). Ücretli planlarda; Enterprise'ta yönetici açar. Detay: [Claude Design](/wiki/yetenekler/claude-design/).

**Claude Design / Slides / Docs**
Konuşma içinden tasarım, sunum ve belge üretip doğrudan düzenleme araçları. 8 Ekim 2026'dan beri beta değil, Free dahil tüm planlarda. Ayrı claude.ai/design sitesi 14 Aralık 2026'da kapanır. Detay: [Claude Design](/wiki/yetenekler/claude-design/).

**Claude Desktop**
Windows, macOS ve Linux için yerel uygulama; Cowork'ün yerel dosya ve tarayıcı özelliklerinin ön koşulu. Detay: [Claude Desktop](/wiki/araclar/claude-desktop/).

**Claude Duet**
Claude'un kendi sanal makinesinde arka planda çalışıp dikkat gerektiren işi size getirdiği, ayrı bir proaktif ajan uygulaması (21 Ekim 2026, research preview). Pro, Max ve Ultra'da, şimdilik ABD'de bekleme listesiyle; mesaj gönderme, ödeme, imza ve silme öncesi onay ister.

**Claude Enterprise**
Koltuk başı aylık 20 USD (yıllık faturalı) artı kullanımın API fiyatıyla ayrıca faturalandığı plan; RBAC, audit log, HIPAA yapılandırması, DPA. Bağlam penceresi diğer ücretli planlarla aynıdır (1M). Detay: [Planlar](/wiki/temeller/planlar/).

**Claude for Google Workspace**
Google Docs, Sheets ve Slides içinde yan panelde çalışan Claude eklentisi (6 Ekim 2026, genel beta). Açık dosyayı okur ve onayınızla yerinde düzenler. Ücretli planlarda. Detay: [Office, Google ve Chrome'da Claude](/wiki/araclar/office-ve-chrome/).

**Claude Free**
Ücretsiz plan; sıkı kullanım limitleri; 5 Project'e kadar; Research, Claude Code ve Cowork yok, Claude Design, Slides ve Docs var. Detay: [Claude Planları](/wiki/temeller/planlar/).

**Claude in Chrome**
Claude'un masaüstü Google Chrome'da yan panelde açılıp sayfayı okuduğu, tıklayıp form doldurabildiği tarayıcı uzantısı. 26 Ağustos 2026'dan beri tüm ücretli planlarda genel kullanımda; diğer Chromium tarayıcılarda ve mobilde yoktur. Anthropic kullanımı hâlâ riskli sayar; hassas sitelerde ve geri alınamaz işlemlerde dikkatli olun. Detay: [Office, Google ve Chrome'da Claude](/wiki/araclar/office-ve-chrome/).

**Claude Marketplace**
23 Eylül 2026'da açılan katalog; connector, eklenti, ajan, iş ortağı ürünleri ve hizmet ortaklarını tek yerde toplar. Dizindeki connector sayısıyla çelişmez, sayılan birimler farklıdır. Detay: [Connectors](/wiki/araclar/connectors/) ve [Claude Marketplace](/kurumsal/marketplace/).

**Claude Max**
Aylık 100 USD bireysel plan (eski adı Max 5x), Pro'nun 5 katı limit. Yeni başlayan kullanıcının ilk ayı için önerilir, agresif keşif ritminde Pro limiti yetmez. Zorunlu değildir; ay 2+ kullanıma göre Pro'ya indirilebilir. Aylık 100 USD API kredisi içerir (Claude Console'daki API kullanımı için; Claude Code ve Cowork'ü kapsamaz). Detay: [Planlar](/wiki/temeller/planlar/).

<a id="claude-md"></a>**CLAUDE.md**
Çalışma klasöründe duran kalıcı talimat dosyası. Yerel Cowork oturumu (masaüstü, klasör bağlı) ve Claude Code okur; sohbet okumaz, bulut Cowork oturumunda okunduğu belgelenmemiştir. Sohbetteki karşılığı için bkz. Instructions for Claude. Detay: [CLAUDE.md Nedir?](/wiki/claude-md/nedir/).

**Claude Motion**
Rapordan ya da veriden kısa video gibi oynayan animasyonlu anlatım üreten özellik (8 Ekim 2026, beta). Video üretim modeli değil, kodla animasyon; MP4 indirilir. Yalnız Team ve Enterprise. Detay: [Claude Design](/wiki/yetenekler/claude-design/).

**Claude Pro**
Aylık 20 USD bireysel plan. Steady-state hafif kullanım için uygun. Sonnet 5.5 ve Cowork dahil. Kullanım limiti 5 saatlik pencere ve haftalık limitle işler. Detay: [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/) ve [Planlar](/wiki/temeller/planlar/).

**Claude Tag**
Slack'te @Claude yazarak Claude'u ekip arkadaşı gibi etiketleme özelliği (23 Haziran 2026). Team ve Enterprise planlarında vardır. Microsoft Teams sürümü için bekleme listesi var, henüz yayında değil. Detay: [Slack ve Teams Entegrasyonu](/wiki/araclar/slack-teams-entegrasyon/).

**Claude Team**
Kurumsal plan, Standard koltuk aylık 25 USD (yıllıkta 20), Premium koltuk aylık 125 USD (yıllıkta 100), en az 2 koltuk; paylaşılan Project'ler; SSO; yönetici kontrolleri. Detay: [Planlar](/wiki/temeller/planlar/).

**Claude Ultra**
Aylık 200 USD bireysel plan (eski adı Max 20x), Pro'nun haftalık 10 katı limit; doğrulanmış hesapta 5 saatlik oturum limiti yoktur. Çok yoğun, sürekli kullanım için. Aylık 200 USD API kredisi içerir (Claude Console'daki API kullanımı için; Claude Code ve Cowork'ü kapsamaz). Detay: [Planlar](/wiki/temeller/planlar/).

**Code Execution**
Claude'un sohbet içinde Python ya da JavaScript kodu yazıp sandbox'ta çalıştırması: gerçek hesap, veri analizi, grafik, xlsx/pptx/docx/pdf dosya üretimi. Free dahil tüm planlarda vardır; Team ve Enterprise'ta owner kapatabilir. Geçici sohbette çalışmaz. Detay: [Code Execution](/wiki/yetenekler/code-execution/).

**Compliance API**
Yöneticilerin sohbet, dosya, proje ve etkinlik kayıtlarına programatik erişimle denetim ve uyum raporu çıkarmasını sağlayan arayüz. Yalnız Enterprise'ta vardır (Public Sector hariç), Team'de yoktur; yalnız Primary Owner açar. Detay: [Takım ve Admin](/wiki/temeller/takim-ve-admin/).

**Computer Use**
Claude'un herhangi bir yazılım GUI'si ile etkileşim kurma yeteneği: ekran görüntüleri ile görsel giriş, fare / klavye ile çıkış. Beta aşamasındadır (ilk çıkışta research preview idi), yalnızca Pro, Max ve Ultra'da, Claude Desktop'ta Cowork ve Claude Code içinde çalışır; Team ve Enterprise'ta yoktur. Detay: [Computer Use](/wiki/yetenekler/computer-use/).

**Constitutional AI**
Anthropic'in geliştirdiği AI eğitim yöntemi: modelin "anayasa"ya göre kendi çıktılarını eleştirip iyileştirmesi. Detay: [Anthropic ve Tarihçe](/wiki/temeller/anthropic-ve-tarihce/).

**Context Compaction (Bağlam Sıkıştırma)**
Bağlam penceresi dolmaya yaklaşırken eski mesajların otomatik özetlenmesi, uzun oturumları ayakta tutar. claude.ai'de code execution açıkken çalışır, limitten düşmez. Detay: [Context ve Compaction](/wiki/yetenekler/context-compaction/).

<a id="cowork"></a>**Cowork**
Claude'un çok adımlı otonom çalışma biçimi. Masaüstünde ücretli planlarda genel kullanıma açık, web ve mobilde beta. 16 Eylül 2026'dan beri sohbetle tek Claude içinde birleşiyor (kademeli yayılım; Enterprise'ta birleşik arayüz 23 Ekim 2026'dan beri genel kullanımda). 6 Ekim 2026'dan itibaren Pro, Max ve Ultra'da yeni görevler bulutta çalışır. Detay: [Cowork Modu](/wiki/araclar/cowork-modu/).

**Cowork Project**
Cowork içinde kendi klasörü, talimatı, bağlamı ve proje hafızası olan, yalnızca bilgisayarda duran çalışma alanı. claude.ai'deki Project ile aynı şey değildir. Detay: [Cowork Modu](/wiki/araclar/cowork-modu/).

**Custom Skill (Özel Skill)**
Şirkete özel görev talimatlarını içeren, kullanıcının yazdığı SKILL.md dosyası. Detay: [Skills](/wiki/yetenekler/skills/).

## Ç

**Çaba (Effort)**
Bkz. Effort.

## D

**Dispatch**
Telefonunuzdan masaüstü Cowork oturumunuza görev göndermenizi sağlayan özellik. Pro, Max ve Ultra için sınırlı beta, yeni kullanıcıya kapalı. Cowork'ün telefondan görev atama özelliği bundan ayrıdır: Pro, Max, Ultra ve Team'de otomatik açıktır, Enterprise'ta kurum isterse açılır. Detay: [Dispatch](/wiki/araclar/claude-mobil/#telefondan-görev-mobil-cowork-ve-dispatch).

**DPA (Data Processing Agreement)**
Veri İşleme Sözleşmesi: KVKK ve GDPR kapsamında veri işleyenle yapılan, kurumsal dağıtım için gereken sözleşme. Anthropic'in DPA'sı yalnızca ticari ürünlerde (Team, Enterprise, API) geçerlidir ve ticari şartlara otomatik dahildir. Detay: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) ve [Takım ve Admin](/wiki/temeller/takim-ve-admin/).

## E

<a id="effort"></a>**Effort (Çaba seviyesi)**
Claude'un bir işe ne kadar derin düşünüp ne kadar token harcayacağını ayarlayan seviye. claude.ai'de gönder düğmesinin yanındaki model menüsünden seçilir; Low, Medium, High, Extra high ve Max kademeleri vardır. Yüksek kademe limiti daha hızlı tüketir. Legacy Haiku 4.5 desteklemez. Detay: [Effort Control](/wiki/yetenekler/effort-control/).

<a id="thinking"></a>**Extended Thinking / Thinking (Uzatılmış Düşünme)**
Claude'un yanıtı yazmadan önce kendi içinde akıl yürütmesi. Model menüsünde Effort'tan ayrı bir ayardır: Effort ne kadar çaba harcanacağını, Thinking düşünmenin açık olup olmadığını belirler. Güncel modellerin çoğunda kapatılamaz. Detay: [Effort Control](/wiki/yetenekler/effort-control/).

## F

**Fable / Mythos**
Claude ailesinin en güçlü genel modeli Fable 5.1'dir (Mythos sınıfı). Mythos 5.1 yalnızca Project Glasswing katılımcılarına davetle açıktır. Fable, Max, Ultra ve Team Premium'da plana dahildir (haftalık limitin en fazla %50'sine kadar); Pro ve Team Standard'da yalnızca kullanım kredisi (usage credits) ile kullanılır. Detay: [Modeller](/wiki/temeller/modeller/).

**Few-shot Prompting**
Prompt'ta istenen çıktı formatını, stilini veya akıl yürütme kalıbını göstermek için 3-5 örnek sağlamak. Örnekler ilgili ve çeşitli olmalıdır. Detay: [İleri Seviye](/wiki/prompting/ileri-seviye/) ve [Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/).

## G

**Geçici Sohbet (Incognito chat)**
Geçmişe ve hafızaya kaydedilmeyen, modelin eğitiminde kullanılmayan sohbet. Yeni sohbette sağ üstteki hayalet simgesiyle açılır; Free dahil tüm planlarda vardır. Profil talimatınız uygulanır, ama dosya oluşturma ve kod çalıştırma yoktur. "Hiç saklanmaz" demek yanlıştır: saklama süresi 30 gündür. Detay: [Memory](/wiki/yetenekler/memory/).

**Global instructions (Genel talimatlar)**
Cowork'teki eski adı; artık profil talimatıyla aynı ayardır (Settings > General > "Instructions for Claude"). Bkz. Instructions for Claude.

## H

**Hook (Prompt Hook'u, Güvenlik Merkezi)**
Enterprise'ta Claude'dan giden istemleri ya da araç çağrılarını kendi güvenlik aracınıza (ör. DLP) kontrole gönderen mekanizma. 5 Kasım 2026'da gelen güvenlik paketinin parçasıdır; güvenlik merkezi ise ayarları Anthropic'in önerdiği yapılandırmayla karşılaştırır (beta). Detay: [Takım ve Admin](/wiki/temeller/takim-ve-admin/#enterprise-güvenlik-araçları-kasım-2026).

<a id="halusinasyon"></a>**Halüsinasyon (Hallucination)**
Claude'un emin ama yanlış bilgi üretmesi. Detay: [Claude'un Sınırları](/wiki/temeller/sinirlamalar/).

## I

**Instructions for Claude (Profil talimatı)**
Settings > General altındaki hesap geneli talimat alanı. Tüm sohbetlerde ve Cowork'te, tüm planlarda (Free dahil) ve geçici sohbette de geçerlidir. Kalıcı talimat yerlerinin karşılaştırması: [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/).

**Incoterms**
Uluslararası ticarette alıcı ve satıcı sorumluluklarını tanımlayan standart terimler (EXW, FOB, CIF, DAP vb.). Detay: [İhracat](/wiki/departmanlar/ihracat/).

## J

**JSON şema**
Claude'un yapılandırılmış veri çıktısında alanların isim ve tipini belirleyen tanım. API'de karşılığı için bkz. Structured Outputs. Detay: [Çıktı Formatı](/wiki/prompting/cikti-formati/).

## K

**Knowledge Base (Bilgi Tabanı)**
Bir Project'e yüklenen belge koleksiyonu; Claude her sohbette referans alır. Bilgi tabanı bağlama sığmayacak kadar büyürse ücretli planlarda RAG moduna geçer ve kapasite 10 kata kadar artar. Detay: [Projects](/wiki/araclar/projects/).

**Kullanım Kredisi (Usage Credits)**
Abonelik kotası bitince devreye giren, API fiyatıyla çalışan kullandıkça öde bakiyesi; Pro, Max, Ultra ve Team'de açılabilir. Detay: [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/).

**Kuruluş Talimatı (organizationInstructions)**
Yöneticinin tüm kullanıcılar için tanımladığı talimat; sohbet, Cowork ve Claude Code oturumlarında sistem istemine eklenir, en çok 3.000 karakterdir. Model için bir rehberdir, zorlayıcı kural değildir. Detay: [Takım CLAUDE.md](/wiki/claude-md/takim-claude-md/).

**KVKK**
Kişisel Verilerin Korunması Kanunu, Türkiye'nin kişisel veri koruma yasası; kişisel verinin nasıl işleneceğini düzenler. Detay: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

## L

**LC (Letter of Credit)**
Akreditif, uluslararası ticarette bankanın alıcı adına satıcıya ödeme garantisi vermesi. Detay: [İhracat](/wiki/departmanlar/ihracat/).

**Live Artifact**
Cowork artifact'ı; connector'lara bağlanır ve her açıldığında güncel veriyle tazelenir. 19 Ağustos 2026'dan beri "legacy" biçimdir: mevcutlar çalışmaya devam eder ama yerinde düzenlenemez, bu tarihten sonra oluşturulanlar standart artifact'tir. Detay: [Artifacts](/wiki/yetenekler/artifacts/).

<a id="llm"></a>**LLM (Large Language Model)**
Büyük Dil Modeli, Claude'un ait olduğu AI kategorisi. Detay: [Claude Nedir?](/wiki/temeller/claude-nedir/).

**LOI (Letter of Intent)**
Niyet Mektubu, uluslararası ticarette alıcı veya satıcının açılış pozisyonunu ifade eden belge. Detay: [İhracat](/wiki/departmanlar/ihracat/).

## M

<a id="mcp"></a>**MCP (Model Context Protocol)**
Açık standart, Claude ↔ dış servis bağlantıları için. Detay: [MCP Nedir?](/wiki/mcp/nedir/).

**Masaüstü Uzantısı (.mcpb)**
Claude Desktop'a tek tıkla kurulan yerel MCP sunucu paketi (eski adı .dxt). Team ve Enterprise'ta owner izin listesi açarsa yalnız onaylı uzantılar kurulabilir. Detay: [MCP Kurulum Rehberi](/wiki/mcp/kurulum-rehberi/).

**Memory**
Claude'un otomatik biriktirdiği kişisel bilgi katmanı. Sohbet hafızası 25 Ağustos 2026'dan beri bulut Cowork görevlerinde kullanılır; yerel Cowork oturumları sohbet hafızasını kullanmaz, Cowork projesinin ayrı hafızası vardır. Free, Pro, Max ve Ultra'da varsayılan açık, Team ve Enterprise'ta varsayılan kapalıdır. CLAUDE.md'den farklı; otomatik öğrenir. Detay: [Memory](/wiki/yetenekler/memory/).

**Memory Skill**
`productivity:memory-management`: iki-katmanlı kalıcı bilgi sistemi oluşturur. Detay: [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/).

## N

**NCNDA**
Non-Circumvention Non-Disclosure Agreement, dolanma önleme ve gizlilik sözleşmesi. Uluslararası ticarette sık kullanılır. Detay: [İhracat](/wiki/departmanlar/ihracat/).

**NCR (Non-Conformance Report)**
Uygunsuzluk raporu: kalite sisteminde bir ürün veya sürecin spesifikasyon dışı durumunun belgelenmesi. Detay: [Üretim ve İmalat](/wiki/departmanlar/uretim-imalat/).

## O

**OEE (Overall Equipment Effectiveness)**
Üretim verim göstergesi: Kullanılabilirlik × Performans × Kalite. Detay: [Üretim ve İmalat](/wiki/departmanlar/uretim-imalat/).

**Onam (Aydınlatılmış Onam)**
Sağlık alanında hastanın bilgilendirilmiş izni. Detay: [Sağlık](/wiki/departmanlar/saglik/).

## P

**Plugin**
Skill'ler, MCP connector'ları ve subagent'ların kurulabilir paketi. Detay: [Skills](/wiki/yetenekler/skills/).

**Private Marketplace (Özel Marketplace)**
Yalnızca şirketin onayladığı plugin'lerden oluşan, kurum içi dağıtım kataloğu. Team ve Enterprise'ta owner kurar (Cowork ve Skills açık olmalı); gruba göre farklı kurulum kuralı yalnız Enterprise'tadır. Genel katalog için bkz. Claude Marketplace. Detay: [Skills](/wiki/yetenekler/skills/).

<a id="project"></a>**Project (claude.ai)**
Claude Chat'teki kalıcı çalışma alanı, bilgi tabanı ve proje talimatıyla. Free'de en çok 5 proje açılır. Detay: [Projects](/wiki/araclar/projects/).

**Proje Talimatı (Project instructions)**
Yalnız o Project içindeki sohbetlerde geçerli talimat; hesap geneli olan profil talimatından ayrıdır. Tüm planlarda vardır. Detay: [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/).

<a id="prompt"></a>**Prompt**
Claude'a gönderdiğiniz talimat veya mesaj. Detay: [Prompt ve Token](/wiki/temeller/prompt-ve-token/).

<a id="prompt-muhendisligi"></a>**Prompt Mühendisliği (Prompt Engineering)**
İstenen çıktıyı almak için talimatı düzenleme işi. İş kullanıcısı için dürüst not: sihirli kalıp ya da ayrı bir meslek gerekmez; neyi, kim için, hangi biçimde istediğinizi açık yazmak ve ilk yanıtı birkaç tur düzeltmek çoğu işe yeter. Detay: [Temel İlkeler](/wiki/prompting/temel-ilkeler/) ve [Prompt İterasyonu](/wiki/prompting/prompt-iterasyonu/).

**Prompt Chaining**
Karmaşık bir görevi ardışık prompt'lara bölmek: her çıktı sıradakinin girdisi olur. Detay: [İleri Seviye](/wiki/prompting/ileri-seviye/).

<a id="prompt-injection"></a>**Prompt Injection**
Dış kaynaklı (e-posta, web) içeriğe gizlenmiş, Claude'u kötü davranışa yönlendirme amaçlı saldırı. Detay: [MCP Güvenlik](/wiki/mcp/guvenlik/).

**Prompt Library (Prompt Kütüphanesi)**
Kullanım senaryosuna göre organize edilmiş, kaydedilmiş, test edilmiş, yeniden kullanılabilir promptların kişisel koleksiyonu. Detay: [Prompt Kataloğu](/wiki/prompting/prompt-katalogu/).

**Public Benefit Corporation (PBC)**
Anthropic'in kurumsal yapısı: kâr amacının yanında kamu yararını da gözeten yasal şirket türü. Detay: [Anthropic ve Tarihçe](/wiki/temeller/anthropic-ve-tarihce/).

## R

<a id="rag"></a>**RAG (Retrieval Augmented Generation)**
Bilgi tabanındaki belgelerden yalnız ilgili parçaları getirip kullanan teknoloji. Claude'da Project bilgi tabanı büyüdüğünde ücretli planlarda devreye girer. Detay: [Projects](/wiki/araclar/projects/).

**Research (Derin Araştırma)**
Claude'un çok sayıda arama yapıp kaynaklı rapor hazırladığı mod. Pro, Max, Ultra, Team ve Enterprise'ta vardır, Free'de yoktur; web arama açık olmalıdır. Standart sohbetle aynı kotayı kullanır ama limiti daha hızlı tüketir. Detay: [Research Mode](/wiki/yetenekler/research-mode/).

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
Kullanıcı başlatmadan belirli aralıkla çalışan otomasyon. Bulutta oluşturulan zamanlanmış görevler yerel klasör ve yerel connector kullanamaz. Detay: [Scheduled Tasks](/wiki/araclar/scheduled-tasks/).

<a id="skill"></a>**Skill**
Özel görevler için önceden inşa edilmiş talimat seti; tüm planlarda vardır, Cowork'te `/skill-adi` ile çağrılır, Claude ilgili görürse kendisi de yükler. Eski Styles özelliği Skills'e taşınıyor. Detay: [Skills](/wiki/yetenekler/skills/).

**Sorumlu Sıfatıyla KDV (2 No'lu Beyanname)**
Türkiye'de yurt dışından dijital hizmet alımında, alıcının kendi sorumluluğunda hesaplayıp ödediği KDV. Detay: [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/).

**SPA (Sale and Purchase Agreement)**
Satış ve Satın Alma Sözleşmesi, uluslararası ticarette bağlayıcı ticari anlaşma. Detay: [İhracat](/wiki/departmanlar/ihracat/).

**Structured Outputs (Yapılandırılmış Çıktı)**
API'de Claude'un yanıtını verdiğiniz JSON şemaya uymaya zorlayan özellik. Geliştiriciler içindir; iş kullanıcısı için prompt'ta formatı tarif etmek yeterlidir. Detay: [Çıktı Formatı](/wiki/prompting/cikti-formati/).

<a id="subagent"></a>**Subagent (Alt-agent)**
Claude tarafından paralel veya izole bir alt görev için oluşturulan Claude instance'ı. Detay: [Agents ve Subagents](/wiki/yetenekler/agents-subagents/).

**Sycophancy (Onay Eğilimi)**
Yapay zekanın doğru olanı değil, kullanıcının duymak istediğini söyleme eğilimi; bir görüş bildirildiğinde aksini düşünse bile hak verme. İş kararlarında risklidir. Karşı önlem: onaylatmak yerine çürütmesini istemek. Detay: [Sınırlamalar](/wiki/temeller/sinirlamalar/).

**System Prompt**
Bir konuşma başlamadan önce Claude'a verilen talimatlar; tüm yanıtları şekillendirir. Detay: [Prompt ve Token](/wiki/temeller/prompt-ve-token/).

## Ş

**Şirket İçi Politika**
Claude kullanımını yöneten şirket-genel kuralları belgesi. Detay: [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/).

## T

**Takım CLAUDE.md**
Şirket / takım genelinde paylaşılan CLAUDE.md, bireyselin üstünde geçerli. Detay: [Takım CLAUDE.md](/wiki/claude-md/takim-claude-md/).

**Task Budget**
Bir agentik döngünün tamamı için Claude'a verilen istişari token bütçesi; işi önceliklendirmek ve düzgün bitirmek içindir, sert sınır değildir (kesin sınır `max_tokens`). Yalnızca API'de beta özelliğidir, Opus 4.7 ile duyuruldu; Claude Code ve Cowork'te desteklenmez. Detay: [Effort Control](/wiki/yetenekler/effort-control/).

**TCO (Total Cost of Ownership)**
Toplam Sahip Olma Maliyeti: sadece satın alma fiyatı değil, tüm yaşam döngüsü maliyetleri dahil. Detay: [ROI Hesaplayıcı](/wiki/temeller/roi-hesaplayici/).

**Telefondan Görev (Cowork)**
Telefondaki Claude uygulamasından Cowork'e iş atama; görev bulutta çalışır, dizüstünüz kapalıyken de sürer. Pro, Max, Ultra ve Team'de otomatik açıktır, Enterprise'ta kurum isterse açılır. Eski Dispatch'ten ayrıdır. Detay: [Claude Mobil](/wiki/araclar/claude-mobil/#telefondan-görev-mobil-cowork-ve-dispatch).

<a id="token"></a>**Token**
Yaklaşık 0.75 İngilizce kelime; bağlam penceresi boyutunun ölçüm birimi. Detay: [Prompt ve Token](/wiki/temeller/prompt-ve-token/).

**TSV (Tab-Separated Values)**
Sekme ile ayrılmış değer formatı. Excel'e yapıştırma için CSV'den daha güvenli. Detay: [Çıktı Formatı](/wiki/prompting/cikti-formati/).

**TTK**
Türk Ticaret Kanunu, Türkiye'nin ticari faaliyetleri düzenleyen temel kanunu. Detay: [Hukuk](/wiki/departmanlar/hukuk/).

## V

**VERBİS**
KVKK kapsamında Veri Sorumluları Sicili. AI araçlarıyla işlenen kişisel veriler de kayıt yükümlülüğü kapsamında değerlendirilebilir; hukuk müşavirinize danışın. Detay: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

**Vision (Görü)**
Claude'un görselleri (belge, grafik, ekran görüntüsü, fotoğraf) görme, analiz etme ve hakkında akıl yürütme yeteneği. Claude görsel üretmez veya düzenlemez. Detay: [Görsel ve Görüntü](/wiki/yetenekler/vision-image/).

**VM (Virtual Machine)**
Sanal makine, Claude'un kod çalıştırdığı izole sandbox. Detay: [Cowork Modu](/wiki/araclar/cowork-modu/).

**Voice Mode**
Claude'un ses giriş / çıkış arayüzü (beta); web, mobil ve masaüstünde, tüm planlarda mevcut. Türkçe desteği doğrulanmadı, uygulamadaki dil menüsünden kontrol edin. Detay: [Voice Mode](/wiki/araclar/voice-mode/).

## W

**Working Directory**
Cowork'te Claude'un geçici çalışma alanı; oturumlar arası temizlenir. Detay: [Cowork Modu](/wiki/araclar/cowork-modu/).

**Workspace Folder (Workspace Klasörü)**
Yerel Cowork'te bağladığınız gerçek bilgisayar klasörü; çıktılar buraya kaydedilir ve kalıcıdır. Bulut oturumu bilgisayardaki dosyaya doğrudan erişmez, klasörler elle eklenir. Detay: [Cowork Modu](/wiki/araclar/cowork-modu/).

## X

**XML Tag'leri**
Prompt'larda kullanılan yapısal işaretçiler (örn. `<context>`, `<task>`), Claude'un karmaşık talimatları ayrıştırmasına yardım eder; etiket adları serbesttir, tutarlı ve açıklayıcı olmaları yeterlidir. Detay: [İleri Seviye](/wiki/prompting/ileri-seviye/).

## Y

**Yapışkan Bilgi (Memory vs CLAUDE.md vs Project Knowledge)**
Üç katmanlı kalıcı bilgi sistemi: Memory (otomatik kişisel), kalıcı talimat (manuel kural: sohbette profil ya da proje talimatı, yerel Cowork'te klasörde CLAUDE.md), Project Knowledge (büyük doküman havuzu). Detay: [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/).

**Yurt Dışına Aktarım (KVKK m.9)**
Claude'a kişisel veri girmek, verinin yurt dışına aktarılması sayılır. KVKK m.9 sırası: yeterlilik kararı, standart sözleşme, arızi aktarım. Detay: [KVKK m.9 Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/).

## Z

**Zero Data Retention**
Bir API sözleşme düzenlemesi: Anthropic istem ve yanıtları, yanıt döndükten sonra depolamaz. Bir plan değildir; satış ekibiyle talep edilir, kuruluş başına etkinleştirilir ve tüm API özellikleri uygun değildir. Enterprise planına otomatik dahil değildir. Detay: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

---

**Sözlük yaşayan bir belgedir.** Claude yeni özellikler ekledikçe, modeller değiştikçe ve yeni kullanım senaryoları ortaya çıktıkça güncellenir. Son güncelleme: 2026-11-08.
