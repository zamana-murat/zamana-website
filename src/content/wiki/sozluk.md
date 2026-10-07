---
title: "Sözlük: Claude ve AI Terimleri Türkçe"
seoTitle: "Claude Sözlüğü: Yapay Zeka ve Claude Terimleri Türkçe"
description: "Claude ve yapay zeka terimlerinin sade Türkçe karşılıkları: effort, thinking, Cowork, CLAUDE.md, geçici sohbet, Research, KVKK ve 90'dan fazla terim."
tags:
  - sozluk
  - terimler
  - referans
lastUpdated: "2026-10-06"
---

Claude ekosistemindeki terimlerin sade Türkçe karşılıkları. Her terim için kısa açıklama ve, varsa, detaylı sayfaya bağlantı.

> **Kullanım:** Ctrl+F (Cmd+F) ile aradığınız terime hızlıca gidebilirsiniz.

## A

**Adaptif Düşünme (Adaptive thinking)**
Claude'un görev karmaşıklığına göre cevap vermeden önce ne zaman ve ne kadar derin düşüneceğine kendisinin karar vermesi. Güncel modellerde varsayılan yöntemdir. Thinking ve effort ile ilişkisi için bkz. [Effort Control](/wiki/yetenekler/effort-control/).

**Agent**
Claude'un birden fazla adım boyunca otonom çalışıp araçlar kullanarak karmaşık görevleri tamamladığı çalışma biçimi. Detay: [Agents ve Subagents](/wiki/yetenekler/agents-subagents/).

**AGENTS.md**
Claude Code'da, klasörde CLAUDE.md yoksa proje talimatı olarak okunan yedek dosya. Geliştirici aracıdır; iş kullanıcısının bilmesi şart değildir. Detay: [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/).

**Anthropic**
Claude'u yapan şirket. Merkezi San Francisco'da. 2021'de kuruldu. Detay: [Anthropic ve Tarihçe](/wiki/temeller/anthropic-ve-tarihce/).

**Artifact**
Claude'un sohbette ya da Cowork'te ürettiği, yan panelde açılan etkileşimli çıktı (sayfa, tablo, küçük uygulama). Artifact'ler Free dahil tüm planlarda vardır. Eski "live artifact" biçimi için bkz. Live Artifact. Detay: [Artifacts](/wiki/yetenekler/artifacts/).

**ASL (AI Safety Level)**
Anthropic'in modellerin yetenek seviyesini sınıflandırma sistemi (ASL-1 ile ASL-4+ arası). Her seviye için önceden tanımlanmış güvenlik kontrolleri uygulanır. Detay: [Anthropic ve Tarihçe](/wiki/temeller/anthropic-ve-tarihce/).

## B

**Bağlayıcı (Connector)**
Claude'u Gmail, Drive, Slack, Notion, CRM gibi üçüncü taraf servislere bağlayan entegrasyon; çoğu OAuth ile yetkilendirilir. Resmi dizinde yaklaşık 900 hazır connector bulunur, MCP ile özel connector da eklenebilir. Logo, Mikro, Paraşüt gibi Türk iş araçlarında resmi connector durumu farklıdır. Detay: [Connectors](/wiki/araclar/connectors/), [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/) ve [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/).

**Bağlam Penceresi (Context Window)**
Claude'un bir sohbette aynı anda görebildiği ve akıl yürütebildiği toplam metin. Plana göre değil modele göre değişir: Fable 5.1, Opus 5.5 ve Sonnet 5.5 için 1M token, Haiku 4.5 için 200K. Uzun belgede sorunuzu belgeden sonra, en sona yazmak yanıtı iyileştirir. Detay: [Context ve Compaction](/wiki/yetenekler/context-compaction/) ve [Belgeyle Çalışma](/wiki/prompting/belgeyle-calisma/).

**Bash / Bash tool**
Kabuk / komut satırı ortamı. Claude izole bir sanal makinede burada kod çalıştırabilir. Detay: [Cowork Modu](/wiki/araclar/cowork-modu/).

**BATNA**
Best Alternative To a Negotiated Agreement: bir pazarlıkta anlaşmaya varılamazsa alacağınız en iyi alternatif. Satınalma ve ticarette kritik. Detay: [Satınalma](/wiki/departmanlar/satinalma/).

**Bilgi Kesim Tarihi (Knowledge Cutoff)**
Modelin eğitiminden sonraki olayları kendiliğinden bilmediği tarih. Fable 5.1, Opus 5.5 ve Sonnet 5.5 için güvenilir bilgi kesimi Haziran 2026, Haiku 4.5 için Şubat 2025'tir. Güncel konuda web aramasını açmak gerekir. Detay: [Modeller](/wiki/temeller/modeller/).

## C

**Chain-of-thought (Zincirleme Düşünme)**
Cevaptan önce Claude'dan adım adım akıl yürütmesini isteyen prompting tekniği. Thinking açıkken "adım adım düşün" demek önerilmez; genel bir talimat ("iyice düşün") çoğu zaman elle yazılmış adım planından iyidir. Elle zincirleme düşünce, thinking kapalıyken yedek yöntemdir. Detay: [İleri Seviye Prompt Engineering](/wiki/prompting/ileri-seviye/).

**Claude Academy**
Anthropic'in ücretsiz kurs platformu (academy.claude.com, eski adıyla Anthropic Academy). Kurslar arasında AI Fluency, Claude 101 ve Cowork girişi bulunur; tamamlayana rozet ya da sertifika verilir. Detay: [4D Çerçevesi](/wiki/prompting/4d-cercevesi/).

**Claude Chat**
claude.ai adresindeki standart tarayıcı / mobil arayüzü. Kurulum gerektirmez. Detay: [Claude Chat](/wiki/araclar/claude-chat/).

**Claude Desktop**
Windows, macOS ve Linux için yerel uygulama; Cowork'ün yerel dosya ve tarayıcı özelliklerinin ön koşulu. Detay: [Claude Desktop](/wiki/araclar/claude-desktop/).

**Claude Enterprise**
Koltuk başı aylık 20 USD (yıllık faturalı) artı kullanımın API fiyatıyla ayrıca faturalandığı plan; RBAC, audit log, HIPAA yapılandırması, DPA. Bağlam penceresi diğer ücretli planlarla aynıdır (1M). Detay: [Planlar](/wiki/temeller/planlar/).

**Claude Free**
Ücretsiz plan; sıkı kullanım limitleri; 5 Project'e kadar; Research, Claude Code ve Cowork yok. Detay: [Claude Planları](/wiki/temeller/planlar/).

**Claude Marketplace**
23 Eylül 2026'da açılan katalog; connector, eklenti, ajan, iş ortağı ürünleri ve hizmet ortaklarını tek yerde toplar. Dizindeki connector sayısıyla çelişmez, sayılan birimler farklıdır. Detay: [Connectors](/wiki/araclar/connectors/) ve [Claude Marketplace](/kurumsal/marketplace/).

**Claude Max 5x**
Aylık 100 USD bireysel plan. Yeni başlayan kullanıcının ilk ayı için önerilir, agresif keşif ritminde Pro limiti yetmez. Ay 2+ kullanıma göre Pro'ya indirilebilir. Detay: [Planlar](/wiki/temeller/planlar/).

**Claude Max 20x**
Aylık 200 USD bireysel plan. Çok yoğun, sürekli kullanım için. Detay: [Planlar](/wiki/temeller/planlar/).

**CLAUDE.md**
Çalışma klasöründe duran kalıcı talimat dosyası. Yerel Cowork oturumu (masaüstü, klasör bağlı) ve Claude Code okur; sohbet okumaz, bulut Cowork oturumunda okunduğu belgelenmemiştir. Sohbetteki karşılığı için bkz. Instructions for Claude. Detay: [CLAUDE.md Nedir?](/wiki/claude-md/nedir/).

**Claude Pro**
Aylık 20 USD bireysel plan. Steady-state hafif kullanım için uygun. Sonnet 5.5 ve Cowork dahil. Kullanım limiti 5 saatlik pencere ve haftalık limitle işler. Detay: [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/) ve [Planlar](/wiki/temeller/planlar/).

**Claude Tag**
Slack'te @Claude yazarak Claude'u ekip arkadaşı gibi etiketleme özelliği (23 Haziran 2026). Team ve Enterprise planlarında vardır. Teams için resmi bir sürümü duyurulmadı. Detay: [Slack ve Teams Entegrasyonu](/wiki/araclar/slack-teams-entegrasyon/).

**Claude Team**
Kurumsal plan, Standard koltuk aylık 25 USD (yıllıkta 20), Premium koltuk aylık 125 USD (yıllıkta 100), en az 2 koltuk; paylaşılan Project'ler; SSO; yönetici kontrolleri. Detay: [Planlar](/wiki/temeller/planlar/).

**Code Execution**
Claude'un sohbet içinde Python ya da JavaScript kodu yazıp sandbox'ta çalıştırması: gerçek hesap, veri analizi, grafik, xlsx/pptx/docx/pdf dosya üretimi. Free dahil tüm planlarda vardır; Team ve Enterprise'ta owner kapatabilir. Geçici sohbette çalışmaz. Detay: [Code Execution](/wiki/yetenekler/code-execution/).

**Computer Use**
Claude'un herhangi bir yazılım GUI'si ile etkileşim kurma yeteneği: ekran görüntüleri ile görsel giriş, fare / klavye ile çıkış. Research preview aşamasındadır, yalnızca Pro ve Max'te, Claude Desktop içinde çalışır. Detay: [Computer Use](/wiki/yetenekler/computer-use/).

**Constitutional AI**
Anthropic'in geliştirdiği AI eğitim yöntemi: modelin "anayasa"ya göre kendi çıktılarını eleştirip iyileştirmesi. Detay: [Anthropic ve Tarihçe](/wiki/temeller/anthropic-ve-tarihce/).

**Context Compaction (Bağlam Sıkıştırma)**
Bağlam penceresi dolmaya yaklaşırken eski mesajların otomatik özetlenmesi, uzun oturumları ayakta tutar. claude.ai'de code execution açıkken çalışır, limitten düşmez. Detay: [Context ve Compaction](/wiki/yetenekler/context-compaction/).

**Cowork**
Claude'un çok adımlı otonom çalışma biçimi. Masaüstünde ücretli planlarda genel kullanıma açık, web ve mobilde beta. 16 Eylül 2026'dan beri sohbetle tek Claude içinde birleşiyor (kademeli yayılım). 6 Ekim 2026'dan itibaren Pro ve Max'te yeni görevler bulutta çalışır. Detay: [Cowork Modu](/wiki/araclar/cowork-modu/).

**Cowork Project**
Cowork içinde kendi klasörü, talimatı, bağlamı ve proje hafızası olan, yalnızca bilgisayarda duran çalışma alanı. claude.ai'deki Project ile aynı şey değildir. Detay: [Cowork Modu](/wiki/araclar/cowork-modu/).

**Custom Skill (Özel Skill)**
Şirkete özel görev talimatlarını içeren, kullanıcının yazdığı SKILL.md dosyası. Detay: [Skills](/wiki/yetenekler/skills/).

## Ç

**Çaba (Effort)**
Bkz. Effort.

## D

**Dispatch**
Telefonunuzdan masaüstü Cowork oturumunuza görev göndermenizi sağlayan özellik. Pro ve Max için sınırlı beta, yeni kullanıcıya kapalı. Detay: [Dispatch](/wiki/araclar/claude-mobil/#telefondan-görev-mobil-cowork-ve-dispatch).

**DPA (Data Processing Agreement)**
Veri İşleme Sözleşmesi: KVKK ve GDPR kapsamında veri işleyenle yapılan, kurumsal dağıtım için gereken sözleşme. Anthropic'in DPA'sı yalnızca ticari ürünlerde (Team, Enterprise, API) geçerlidir ve ticari şartlara otomatik dahildir. Detay: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) ve [Takım ve Admin](/wiki/temeller/takim-ve-admin/).

## E

**Effort (Çaba seviyesi)**
Claude'un bir işe ne kadar derin düşünüp ne kadar token harcayacağını ayarlayan seviye. claude.ai'de gönder düğmesinin yanındaki model menüsünden seçilir; Low, Medium, High, Extra high ve Max kademeleri vardır. Yüksek kademe limiti daha hızlı tüketir. Haiku 4.5 desteklemez. Detay: [Effort Control](/wiki/yetenekler/effort-control/).

**Extended Thinking / Thinking (Uzatılmış Düşünme)**
Claude'un yanıtı yazmadan önce kendi içinde akıl yürütmesi. Model menüsünde Effort'tan ayrı bir ayardır: Effort ne kadar çaba harcanacağını, Thinking düşünmenin açık olup olmadığını belirler. Güncel modellerin çoğunda kapatılamaz. Detay: [Effort Control](/wiki/yetenekler/effort-control/).

## F

**Fable / Mythos**
Claude ailesinin en güçlü genel modeli Fable 5.1'dir (Mythos sınıfı). Mythos 5.1 yalnızca Project Glasswing katılımcılarına davetle açıktır. Fable, Max ve Team Premium'da plana dahildir (haftalık limitin en fazla %50'sine kadar); Pro ve Team Standard'da yalnızca kullanım kredisi (usage credits) ile kullanılır. Detay: [Modeller](/wiki/temeller/modeller/).

**Few-shot Prompting**
Prompt'ta istenen çıktı formatını, stilini veya akıl yürütme kalıbını göstermek için 3-5 örnek sağlamak. Örnekler ilgili ve çeşitli olmalıdır. Detay: [İleri Seviye](/wiki/prompting/ileri-seviye/) ve [Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/).

## G

**Geçici Sohbet (Incognito chat)**
Geçmişe ve hafızaya kaydedilmeyen, modelin eğitiminde kullanılmayan sohbet. Yeni sohbette sağ üstteki hayalet simgesiyle açılır; Free dahil tüm planlarda vardır. Profil talimatınız uygulanır, ama dosya oluşturma ve kod çalıştırma yoktur. "Hiç saklanmaz" demek yanlıştır: saklama süresi 30 gündür. Detay: [Memory](/wiki/yetenekler/memory/).

**Global instructions (Genel talimatlar)**
Cowork'teki eski adı; artık profil talimatıyla aynı ayardır (Settings > General > "Instructions for Claude"). Bkz. Instructions for Claude.

## H

**Halüsinasyon (Hallucination)**
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
Abonelik kotası bitince devreye giren, API fiyatıyla çalışan kullandıkça öde bakiyesi; Pro, Max ve Team'de açılabilir. Detay: [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/).

**Kuruluş Talimatı (organizationInstructions)**
Yöneticinin tüm kullanıcılar için tanımladığı talimat; sohbet, Cowork ve Claude Code oturumlarında sistem istemine eklenir, en çok 3.000 karakterdir. Model için bir rehberdir, zorlayıcı kural değildir. Detay: [Takım CLAUDE.md](/wiki/claude-md/takim-claude-md/).

**KVKK**
Kişisel Verilerin Korunması Kanunu, Türkiye'nin kişisel veri koruma yasası; kişisel verinin nasıl işleneceğini düzenler. Detay: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

## L

**LC (Letter of Credit)**
Akreditif, uluslararası ticarette bankanın alıcı adına satıcıya ödeme garantisi vermesi. Detay: [İhracat](/wiki/departmanlar/ihracat/).

**Live Artifact**
Cowork artifact'ı; connector'lara bağlanır ve her açıldığında güncel veriyle tazelenir. 19 Ağustos 2026'dan beri "legacy" biçimdir: mevcutlar çalışmaya devam eder ama yerinde düzenlenemez, bu tarihten sonra oluşturulanlar standart artifact'tir. Detay: [Artifacts](/wiki/yetenekler/artifacts/).

**LLM (Large Language Model)**
Büyük Dil Modeli, Claude'un ait olduğu AI kategorisi. Detay: [Claude Nedir?](/wiki/temeller/claude-nedir/).

**LOI (Letter of Intent)**
Niyet Mektubu, uluslararası ticarette alıcı veya satıcının açılış pozisyonunu ifade eden belge. Detay: [İhracat](/wiki/departmanlar/ihracat/).

## M

**MCP (Model Context Protocol)**
Açık standart, Claude ↔ dış servis bağlantıları için. Detay: [MCP Nedir?](/wiki/mcp/nedir/).

**Memory**
Claude'un otomatik biriktirdiği kişisel bilgi katmanı. Sohbet hafızası 25 Ağustos 2026'dan beri bulut Cowork görevlerinde kullanılır; yerel Cowork oturumları sohbet hafızasını kullanmaz, Cowork projesinin ayrı hafızası vardır. Free, Pro ve Max'te varsayılan açık, Team ve Enterprise'ta varsayılan kapalıdır. CLAUDE.md'den farklı; otomatik öğrenir. Detay: [Memory](/wiki/yetenekler/memory/).

**Memory Skill**
`productivity:memory-management`: iki-katmanlı kalıcı bilgi sistemi oluşturur. Detay: [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/).

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
Yalnızca şirketin onayladığı araçlardan oluşan, Enterprise kontrollü plugin kataloğu. Genel katalog için bkz. Claude Marketplace.

**Project (claude.ai)**
Claude Chat'teki kalıcı çalışma alanı, bilgi tabanı ve proje talimatıyla. Free'de en çok 5 proje açılır. Detay: [Projects](/wiki/araclar/projects/).

**Proje Talimatı (Project instructions)**
Yalnız o Project içindeki sohbetlerde geçerli talimat; hesap geneli olan profil talimatından ayrıdır. Tüm planlarda vardır. Detay: [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/).

**Prompt**
Claude'a gönderdiğiniz talimat veya mesaj. Detay: [Prompt ve Token](/wiki/temeller/prompt-ve-token/).

**Prompt Chaining**
Karmaşık bir görevi ardışık prompt'lara bölmek: her çıktı sıradakinin girdisi olur. Detay: [İleri Seviye](/wiki/prompting/ileri-seviye/).

**Prompt Injection**
Dış kaynaklı (e-posta, web) içeriğe gizlenmiş, Claude'u kötü davranışa yönlendirme amaçlı saldırı. Detay: [MCP Güvenlik](/wiki/mcp/guvenlik/).

**Prompt Library (Prompt Kütüphanesi)**
Kullanım senaryosuna göre organize edilmiş, kaydedilmiş, test edilmiş, yeniden kullanılabilir promptların kişisel koleksiyonu. Detay: [Prompt Kataloğu](/wiki/prompting/prompt-katalogu/).

**Public Benefit Corporation (PBC)**
Anthropic'in kurumsal yapısı: kâr amacının yanında kamu yararını da gözeten yasal şirket türü. Detay: [Anthropic ve Tarihçe](/wiki/temeller/anthropic-ve-tarihce/).

## R

**RAG (Retrieval Augmented Generation)**
Bilgi tabanındaki belgelerden yalnız ilgili parçaları getirip kullanan teknoloji. Claude'da Project bilgi tabanı büyüdüğünde ücretli planlarda devreye girer. Detay: [Projects](/wiki/araclar/projects/).

**Research (Derin Araştırma)**
Claude'un çok sayıda arama yapıp kaynaklı rapor hazırladığı mod. Pro, Max, Team ve Enterprise'ta vardır, Free'de yoktur; web arama açık olmalıdır. Standart sohbetle aynı kotayı kullanır ama limiti daha hızlı tüketir. Detay: [Research Mode](/wiki/yetenekler/research-mode/).

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

**Skill**
Özel görevler için önceden inşa edilmiş talimat seti; tüm planlarda vardır, Cowork'te `/skill-adi` ile çağrılır, Claude ilgili görürse kendisi de yükler. Eski Styles özelliği Skills'e taşınıyor. Detay: [Skills](/wiki/yetenekler/skills/).

**Sorumlu Sıfatıyla KDV (2 No'lu Beyanname)**
Türkiye'de yurt dışından dijital hizmet alımında, alıcının kendi sorumluluğunda hesaplayıp ödediği KDV. Detay: [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/).

**SPA (Sale and Purchase Agreement)**
Satış ve Satın Alma Sözleşmesi, uluslararası ticarette bağlayıcı ticari anlaşma. Detay: [İhracat](/wiki/departmanlar/ihracat/).

**Structured Outputs (Yapılandırılmış Çıktı)**
API'de Claude'un yanıtını verdiğiniz JSON şemaya uymaya zorlayan özellik. Geliştiriciler içindir; iş kullanıcısı için prompt'ta formatı tarif etmek yeterlidir. Detay: [Çıktı Formatı](/wiki/prompting/cikti-formati/).

**Subagent (Alt-agent)**
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

**Token**
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
Claude'un ses giriş / çıkış arayüzü (beta); web, mobil ve masaüstünde, tüm planlarda mevcut. Türkçe, yardım sayfasındaki desteklenen diller arasında görünmüyor. Detay: [Voice Mode](/wiki/araclar/voice-mode/).

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

**Sözlük yaşayan bir belgedir.** Claude yeni özellikler ekledikçe, modeller değiştikçe ve yeni kullanım senaryoları ortaya çıktıkça güncellenir. Son güncelleme: 2026-10-06.
