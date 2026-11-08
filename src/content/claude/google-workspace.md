---
title: "Claude for Google Workspace: Docs, Sheets ve Slides İçinde"
seoTitle: "Claude for Google Workspace: Docs, Sheets, Slides"
description: "Claude, Google Docs, Sheets ve Slides'ın yan panelinde çalışır; her değişikliği öneri olarak sunar. Kurulum, planlar, yönetici ayarları ve Türkiye için notlar."
eyebrow: "Eklenti"
lead: "Tek kurulumla Claude, Google Docs, Sheets ve Slides'ın yan paneline gelir. Açık dosyanızı okur, değişikliği öneri olarak gösterir; siz kabul etmeden hiçbir şey değişmez."
heroAnimation: "google-workspace"
heroAlt: "Kurgusal Kuzey Fındık'ın ihracat fiyat listesi tablosunda yan paneldeki Claude'a euro fiyatlarını yüzde 5 artırması yazılıyor; değişen dört hücre öneri olarak vurgulanıyor ve kullanıcı kabul ediyor."
availability: "Beta; Pro, Max, Ultra, Team ve Enterprise planlarında, Google Workspace Marketplace'ten kurulur. Free'de yok. Kurumda Google Workspace yöneticisi dağıtır ya da izin verir."
sourceUrl: "https://claude.com/claude-for-google-workspace"
sourceTitle: "Claude for Google Workspace (beta)"
related:
  - { label: "Claude for Microsoft 365", href: "/claude/microsoft-365/" }
  - { label: "Connectors", href: "/claude/connectors/" }
  - { label: "Skills", href: "/claude/skills/" }
  - { label: "Türk iş araçları (wiki)", href: "/wiki/temeller/turk-is-araclari/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
order: 52
lastUpdated: "2026-11-08"
---

## Nedir?

Şirketiniz Microsoft yerine Google kullanıyorsa günün büyük kısmı Docs, Sheets ve Slides'ta geçer. Claude for Google Workspace, 6 Ekim 2026'dan beri genel beta olarak bu üç uygulamaya yan panel ekliyor. Google Workspace Marketplace'ten tek kurulum yaparsınız, Claude üç uygulamada birden görünür. Dosyayı sohbete kopyalamanız gerekmez; Claude açık dosyada sizinle birlikte çalışır.

- **Google Docs:** Sıfırdan taslak yazar, metni ve yapıyı sıkılaştırır. Değişiklikler öneri (suggestion) olarak gelir, tek tek uygular ya da reddedersiniz. Başlık stillerinize uyar.
- **Google Sheets:** Finansal model kurar, veriyi analiz eder, bağlı veri kaynaklarınızdan güncel rakam çeker. Değişen hücreler vurgulanır.
- **Google Slides:** Sunumunuzun kendi düzeninden ve temasından slayt üretir, seçtiğiniz içeriği düzenler, üst üste binen öğeleri işaretler.

Panele PDF, CSV ya da Office dosyası bırakabilirsiniz; Claude onu açık dosyanızla birlikte okur. Connector'larla başka araçlardan bağlam çeker, iyi giden bir süreci skill olarak kaydedip ekibin üç uygulamada aynı şekilde kullanmasını sağlarsınız. Model kurma ya da not yazma tercihinizi bir kez söylersiniz, sonraki sefer uygular.

Microsoft 365 sürümüyle farkı yalnızca hangi paketi kullandığınız: Google Workspace sürümü Docs, Sheets ve Slides'ı, [Microsoft 365 sürümü](/claude/microsoft-365/) Excel, PowerPoint, Word ve Outlook'u kapsar. Kaynak sayfada Gmail için bir eklenti yok; Gmail'e Claude sohbetinden connector ile bağlanılır.

## Türk şirketinde ne işe yarar?

Örnekler varsayımsaldır, şirket adları kurgusaldır; kendi işinize uyarlayın.

- **İhracat fiyat listesi:** Kurgusal Kuzey Fındık'ın ihracat sorumlusu, euro fiyat tablosunda "yeni sezon için yüzde 5 artır, değişen hücreleri göster" der. Claude değişiklikleri vurgulu öneri olarak sunar, formüller yerinde kalır.
- **Teklif ve sözleşme metni:** Satış ekibi Docs'taki teklif şablonunu müşteriye göre uyarlatır. Her değişiklik öneri olarak görünür; kimin neyi kabul ettiği belge geçmişinde kalır.
- **Aylık sunum:** Sheets'teki satış özetinden, şirketin onaylı Slides şablonuyla on slaytlık yönetim sunumu. Rakamları sunumdan önce kendiniz kontrol edin.
- **Okul ve STK'lar:** Google Workspace kullanan kurgusal bir vakıf okulu, veli bilgilendirme yazısını ve etkinlik bütçesini aynı panelden hazırlar.
- **Referans dosyayla çalışma:** Tedarikçiden gelen PDF şartnameyi panele bırakıp Docs'taki teknik cevap metninin şartnameyle çelişen yerlerini işaretletmek.

## Nasıl başlarsınız?

1. Ücretli bir Claude planınız olduğundan emin olun (Pro, Max, Ultra, Team ya da Enterprise).
2. Eklentiyi Google Workspace Marketplace'ten kurun. Şirket hesabında Google Workspace yöneticisinin eklentiyi alan adına ya da seçili gruplara Google Admin konsolundan dağıtması veya kurulumuna izin vermesi gerekebilir.
3. Bir Docs, Sheets ya da Slides dosyası açın ve **Uzantılar > Claude > Open Claude** yolunu izleyin, Claude hesabınızla giriş yapın.
4. Önce küçük bir işle deneyin: bir paragraf, bir tablo sütunu, bir slayt. Varsayılan ayar "düzenlemeden önce sor"dur; tüm düzenlemeleri otomatik kabul etmeyi yalnız güvendiğiniz işlerde açın.

## Hangi planda, nelere dikkat?

**Plan ve durum.** Beta. Pro, Max, Ultra, Team ve Enterprise'da; Free'de yok. Team ve Enterprise'ta Docs, Sheets ve Slides connector'larını önce kuruluş sahibi açar.

**Neye erişir?** Claude yalnız açık dosyayı (seçtiğiniz metin, hücre ya da slayt dahil) ve kurumunuzun açtığı connector'ları görür. Erişimi mevcut Google paylaşım izinlerinizle aynıdır, sizin göremediğiniz bir dosyaya ulaşmaz. Drive'daki diğer dosyalar için Google Drive connector'ının bağlı olması gerekir. Google, kurulumda iki izni de baştan gösterir.

**Teknik sınırlar.** Chrome, Edge ve Safari'de çalışır, Firefox'ta çalışmaz. Yan panel açık kalmalı; tek bir işlem en çok 6 dakika sürebilir.

**Kurumsal kontroller.** Enterprise'da Compliance API, müşteri yönetimli şifreleme anahtarı ve OpenTelemetry ile denetim aktarımı eklentiyi de kapsar. Sıfır veri saklama (ZDR) ve üçüncü taraf bulut üzerinden çalıştırma bu eklentide henüz desteklenmiyor.

**Türkçe Sheets.** Türkçe yerel ayarlı tablolarda ondalık ayırıcı virgül, formül ayırıcı noktalı virgüldür. Kaynakta bu konuda bir açıklama yok; üretilen formülleri kendi dosyanızda mutlaka deneyin.

**Veri ve KVKK.** Açık dosyanın içeriği Claude'a gider ve Türkiye dışında işlenir. Kişisel veri içeren dosyalar için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasını okuyun. Veri işleme Anthropic'in Gizlilik Politikası ve Ticari Şartları'na tabidir. Anthropic'in Türkiye'de ofisi ya da temsilcisi yok, ödeme doğrudan Anthropic'e USD ile yapılır ([Türkiye'de Claude](/wiki/temeller/turkiyede-claude/)).

Zamana'nın programları, ekibinizin bu araçları kendi belgeleri ve şablonlarıyla günlük işe oturtması içindir. [Programlarımıza](/programlar/) bakabilirsiniz.
