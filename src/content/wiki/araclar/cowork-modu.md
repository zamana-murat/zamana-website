---
title: Cowork Modu Nedir?
description: "Cowork, Claude'un dosyalarınıza erişen, kod çalıştıran ve araçları kullanan çalışma biçimidir. 16 Eylül 2026'dan itibaren sohbetle tek Claude içinde birleşiyor."
tags:
  - cowork
  - claude-desktop
  - arac
lastUpdated: "2026-10-05"
---

**Cowork, Claude'u bir sohbet arayüzünden tam bir çalışma ortamına dönüştüren özelliktir.** Dosyalarınıza erişir, kod çalıştırır, bağlı araçları kullanır ve işi baştan sona teslim eder. Cowork 9 Nisan 2026'dan beri masaüstünde (macOS ve Windows) genel kullanıma açık, 7 Temmuz 2026'dan beri web ve mobilde beta olarak da kullanılabiliyor.

> **Güncel durum (16 Eylül 2026):** Cowork ve sohbet tek bir Claude arayüzünde birleşiyor. Artık "sohbet mi, Cowork mu?" diye seçim yapmıyorsunuz; Claude görevin neye ihtiyaç duyduğunu kendisi anlıyor. Yayılım kademeli: önce Pro ve Max, Team ve Free için "yakında". Enterprise yöneticilerine en az 30 gün önceden haber verilecek. Hesabınızda birleşik arayüz henüz açılmadıysa sayfadaki "ayrı mod" anlatımı sizin ekranınızı tarif eder. Ayrıntı: [Cowork ve sohbet tek Claude oldu](/haberler/2026-09-16-cowork-ve-sohbet-tek-claude-oldu/).

## Hangi Planda, Nerede Çalışır?

- **Masaüstü (macOS, Windows):** tüm ücretli planlarda. Enterprise'da yönetici etkinleştirmesi gerekebilir.
- **Web ve mobil:** beta; Pro, Max ve Team planlarında, Enterprise'da yönetici açtıysa. Connector'lar, skill'ler, zamanlanmış görevler ve cihazlar arası devam var; yerel dosya erişimi ve tarayıcı kullanımı kısmidir (masaüstü uygulaması açık olmalı).
- **Cowork'ün Chrome yan paneli:** Max ve Team'de, Pro'ya yayılıyor.
- **Computer use:** research preview; yalnız Pro ve Max'te, masaüstü uygulamasında Cowork ve Claude Code içinde. Team ve Enterprise'ta yok. Ayrıntı: [Computer Use](/wiki/yetenekler/computer-use/).
- **Yerleşik tarayıcı (masaüstü):** Claude, sizin sekmelerinize ve şifrelerinize dokunmayan kendi tarayıcısıyla sitelerde gezip form doldurabiliyor. Ayrıntı: [Cowork'e kendi tarayıcısı geldi](/haberler/2026-08-26-cowork-yerlesik-tarayici/).

Free planda Cowork yoktur. Hafıza 25 Ağustos 2026'dan beri sohbet ve Cowork arasında ortaktır, bkz. [Memory](/wiki/yetenekler/memory/).

> **6 Ekim 2026'dan itibaren:** Pro ve Max'te yeni Cowork görevleri bulutta çalışıyor ve "Only on your computer" seçeneği kalkıyor. Bu planlarda yeni görevler için bilgisayarın açık ve uyanık kalması gerekmiyor. Yerel klasör erişimi, computer use ve yerleşik tarayıcı gibi masaüstüne bağlı yetenekler yine masaüstü uygulaması ister. Eski görevler ile Team ve Enterprise için yardım merkezindeki güncel duyuruya bakın.

## Sohbet ve Cowork: Hangi Tür İş Hangisine Yakın?

Birleşme sonrası bu bir ürün seçimi değil, bir **iş türü** ayrımıdır. Aynı konuşmada ikisini birlikte kullanırsınız.

**Soru-cevap tarzı işlerde** siz sorarsınız, Claude cevap verir. Her şey yazı düzleminde kalır, sonuç sizin sorumluluğunuzdadır.

**Çalışma tarzı işlerde** siz bir sonuç tarif edersiniz, Claude plan yapar, uygular, teslim eder. Workspace klasörünüzdeki dosyayı okur, analiz eder, yeni bir rapor oluşturur, Google Drive'a yükler, Slack'te ekibinize haber verir. Süreç zincirinin tamamını tek oturumda yönetir.

> **Soru-cevapta Claude bir danışman gibi, çalışma tarzı işlerde bir meslektaş gibi davranır.**

Claude ilerlemeyi nasıl kontrol edeceğinizi de size bırakır: ya her adımdan önce onay ister ya da bağımsız çalışıp yalnızca önemli noktaları bildirir. İlk haftalarda onay isteyen modu tercih edin.

## Cowork'te Neler Var?

Cowork'ün gücü tek bir özelliğinden değil, birlikte çalışan bir özellik setinden gelir:

### Dosya Erişimi
Claude workspace klasörünüzdeki dosyaları doğrudan okur, oluşturur, düzenler. Word belgesi yazar, Excel dosyasını günceller, PDF'i açıp işler. Bilgisayarınızdaki gerçek klasörde, gerçek dosyalar üzerinde çalışır.

### Sandbox'ta Kod Çalıştırma
Claude, bilgisayarınızda izole bir sanal makine içinde Python, PowerShell, Bash veya Node.js çalıştırır. Bu sanal makine işletim sisteminizden ayrıdır. Excel formülleri, PDF işleme ve veri dönüştürme gibi işler burada yapılır.

**Önemli not:** Siz kod yazmazsınız. Claude'a ne istediğinizi Türkçe söylersiniz, kodu Claude yazar ve çalıştırır.

### Skills (Yetenek Paketleri)
Skills, belirli bir görev tipi için önceden hazırlanmış uzmanlık paketleridir. `/docx`, `/pptx`, `/xlsx`, `/pdf` gibi komutlarla devreye girer. O dosya tipi için en iyi uygulamaları, biçimleme kurallarını, tipik hataları içerir. Sonuç: profesyonel kalitede çıktı, ilk denemede.

### Plugins (Eklentiler)
Plugins, skills + connector + subagent paketlerini bir araya getiren kurulabilir bileşenlerdir. Örneğin "Sales plugin" içinde satış aramaları hazırlama skill'i, müşteri araştırma skill'i ve CRM bağlantısı birlikte gelir. Bir departmanın ihtiyaçlarını tek pakette toplar.

### Connectors (Bağlayıcılar)
Dış servislere kimlik doğrulamalı bağlantılardır: Slack, Google Drive, Gmail, Microsoft 365, Notion, Asana, ClickUp, birçok CRM platformu ve resmi dizindeki yaklaşık 900 connector'dan geri kalanı. Bir kere bağlarsınız, Claude bu servislere sizin adınıza okur ve yazar. Excel, PowerPoint ve Word'ün içinde çalışan eklentiler ayrı bir konudur: [Office ve Chrome'da Claude](/wiki/araclar/office-ve-chrome/).

### Artifacts (Canlı Çıktılar)
Cowork yan panelinde açılan kalıcı HTML sayfalarıdır. Her açıldığında connector'lardan güncel veri çekebilir, yani tek seferlik bir raporu canlı bir kontrol paneline dönüştürür. Satış pipeline'ı, haftalık performans özeti, stok durumu gibi şeyler için.

Claude Design, Slides ve Docs ürünleri de bu ailede yer alır; ücretli planlarda (Pro, Max, Team, Enterprise) beta olarak sunulur, Free planda yoktur. Enterprise'da yönetici açana kadar kapalıdır.

### Scheduled Tasks (Zamanlanmış Görevler)
Sizin başlatmanıza gerek kalmadan belirli aralıklarla (günlük, haftalık, aylık) çalışan otomasyonlardır. Pazartesi sabah brifinginiz, Cuma akşam ekip raporu, siz bir şey yapmadan hazırlanır.

### Dispatch (Uzaktan Görev)
Telefonunuzdan bir görev gönderirsiniz, Claude masaüstünüzde çalışır ve sonucu hazırlar. Pro ve Max'te sınırlı beta olarak sunuluyor, yeni kullanıcılara kapalı; mevcut kullanıcılar şimdilik kullanabiliyor. Yeni bir hesapta telefondan görev atmanın yolu mobil Cowork betasıdır. Ayrıntı: [Dispatch](/wiki/araclar/dispatch/).

### Subagent Koordinasyonu
Karmaşık görevlerde Claude birden fazla alt ajan başlatabilir: biri araştırır, diğeri taslak yazar, üçüncüsü dosyaları kontrol eder. Sonuçlar tek çıktıda birleştirilir. Aynı mantık Claude Code'da da genel kullanıma açık alt ajanlar olarak vardır, bkz. [Alt Ajanlar](/wiki/yetenekler/agents-subagents/).

### Projects (Projeler)
Cowork içinde ayrı çalışma alanları, her biri kendi dosyaları, bağlamı, hafızası ve zamanlanmış görevleriyle. "Q2 satış raporu" ile "şirket içi wiki" projelerini birbirine karıştırmazsınız.

## Bir Cowork Oturumu Nasıl İşler?

1. Claude'u açarsınız (masaüstü, web ya da mobil). Birleşik arayüz hesabınızda henüz yoksa Cowork sekmesini seçersiniz
2. Görevi tarif edersiniz. Tek cümle de olabilir, detaylı talimat da
3. Claude workspace klasörünüzü ve bağlam dosyalarınızı (CLAUDE.md, proje dosyaları) okur
4. Claude isteği analiz eder, bir plan çıkarır, alt görevlere böler
5. Claude çalışır: dosyaları okur, kod çalıştırır, connector'ları çağırır, çıktıları yazar
6. Sonucu workspace klasörünüze teslim eder, açmak için bağlantı verir
7. Siz kontrol edersiniz, gerekirse geri bildirim verip iyileştirirsiniz

## İlk Görevi Devretmek

Cowork'e ilk kez bir görev devrederken üç adım vardır, ve ikincisi en kritik olanıdır:

1. **İzinleri kurun.** Claude'un hangi klasöre eriştiğini (workspace) ve hangi servislere bağlandığını (connector'lar) önceden ayarlayın. Claude yalnızca verdiğiniz erişimle çalışır.
2. **Görevi tarif edin ve planı onaylayın.** Claude, dosyalarınıza dokunmadan veya bir eylem yapmadan **önce ne yapacağına dair bir plan önerir**. Bu planı okuyun. Yanlış bir adım varsa burada durdurursunuz, makinenizde bir şey değişmeden.
3. **Çalışmasına izin verin, sonucu gözden geçirin.** Plan doğruysa onaylarsınız; Claude uygular, çıktıyı workspace'e teslim eder.

> **Devretmenin kalbi, "yap" demek değil, Claude'un planını onaylamaktır.** İlk birkaç görevde planı dikkatle okuyun; güven oluştukça bu adım hızlanır.

İlk somut görev için adım adım bir yürüyüş: [İlk 7 Gün Rehberi → Gün 1](/wiki/temeller/ilk-7-gun/).

## Workspace Klasörü

Cowork'ün kalbidir. Bilgisayarınızda gerçek bir klasördür, siz seçer ve Cowork ayarlarından bağlarsınız. Claude'un ürettiği her şey bu klasöre kaydedilir ve oturum bittikten sonra orada kalır.

**İki kavramı karıştırmayın:**

| Kavram | Ne İşe Yarar | Kalıcılık |
|---|---|---|
| **Working directory** | Claude'un geçici çalışma alanı | Oturumlar arası temizlenir |
| **Workspace klasörü (mnt/)** | Sizin kalıcı teslimat klasörünüz | Her zaman kalıcı |

**Pratik kural:** Workspace klasörünü hemen kurun. Adını net verin (`ClaudeWorkspace`, `YapayZeka`, `AiCalisma` gibi). Her çıktı oraya gider. Bu alışkanlığı ilk günden kurarsanız, bir ay içinde doğal bir refleks haline gelir.

## Cowork'ün Bağlam Katmanları

Cowork oturumu başlattığınızda Claude birden fazla kaynaktan bağlam toplar:

| Katman | Kaynak | Kapsamı |
|---|---|---|
| Genel talimatlar | Ayarlar → Cowork | Her oturum |
| CLAUDE.md | Workspace kök klasörü | Her oturum |
| Proje bağlam dosyası | Aktif proje klasörü | Sadece o proje |
| Oturum içi yüklemeler | Konuşmada paylaşılan dosyalar | Sadece o oturum |

Bu katmanların ne kadarını doldurursanız, çalışan o kadar az açıklama yapar ve Claude'un çıktısı gerçek iş bağlamınıza o kadar yaklaşır.

## Cowork'ü Kişiselleştirme: Üç Katman

Cowork'ü kendi iş akışınıza uydurmak, basitten ileriye doğru üç katmanda ilerler. Acele etmeyin; alttan başlayıp ihtiyaç doğdukça yükselin.

**Katman 1: Bağlam ve araçlar (herkes buradan başlar)**

- **Connector'lar:** Cowork'ü Slack, Salesforce, Microsoft 365, Google Workspace gibi sistemlerinize bağlayın ki Claude verinizi okuyup yazabilsin.
- **Talimatlar (Instructions):** Claude'un nasıl çalışacağını belirleyen sabit kurallar. Üç düzeyde verilebilir:
  - **Global** (Settings → Cowork → Global instructions): her oturumda geçerli
  - **Proje**: sadece o projede geçerli
  - **Organizasyon**: admin tarafından tüm şirkete uygulanır

**Katman 2: Süreç yakalama**

- **Skills:** Tekrar eden bir iş akışını ve en iyi uygulamalarınızı bir [skill](/wiki/yetenekler/skills/) olarak kodlayın. En kolay yol: işi normal şekilde bir kez yapın, sonra *"Az önce yaptığımız işi bir skill olarak paketle"* deyin.

**Katman 3: Dağıtım**

- **Plugins:** İlgili skill'leri + connector'ları tek pakette toplayıp ekip arkadaşlarınızın tek tıkla kurabileceği, role özel bir kurulum haline getirin. Detay: [Skills → Plugin Özelleştirme](/wiki/yetenekler/skills/).

**Pratik sıra:** Önce connector + talimatlar. Bir işi birkaç kez tekrarladıktan sonra skill. Ekiple paylaşma ihtiyacı doğunca plugin. Talimatlar arka plan kurallarını verir, skill'ler belirli tekrar eden süreçleri yürütür.

## Güvenlik ve Kontrol

Cowork güçlüdür ve güç sorumluluk getirir.

- **Sandbox izolasyonu.** Claude'un kod çalıştırdığı sanal makine işletim sisteminizden ayrıdır. Yanlışlıkla C diskinizi silemez.
- **Connector izinleri.** Her dış servis bağlantısı ayrı ayrı onaylanır. Claude sadece izin verdiğiniz servislere erişebilir.
- **Eylem onayları.** Kritik eylemler (dosya silme, e-posta gönderme, işlem yapma) önce size gösterilir, siz onayladıktan sonra uygulanır.
- **Şeffaf aktivite.** Claude'un yaptığı her şey sohbet geçmişinde görünür. Arka planda gizli eylem olmaz.

Bu, bir çalışana "Claude şirket verilerine özgürce erişebilir" anlamına gelmez. Claude, **çalışanın izin verdiği araçları**, **çalışanın açıkladığı şekilde** kullanır. Denetim ve sınır çalışandadır.

## İlgili Sayfalar

- [Claude Desktop](/wiki/araclar/claude-desktop/): Cowork'ün masaüstü uygulaması
- [Office ve Chrome'da Claude](/wiki/araclar/office-ve-chrome/): Excel, PowerPoint, Word, Outlook ve tarayıcı
- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Cowork'ün her oturumda okuduğu hafıza dosyası
- [Skills](/wiki/yetenekler/skills/): Cowork'teki yetenek paketleri
- [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): Cowork'te kullanılabilen connector'lar
- [Dispatch](/wiki/araclar/dispatch/): Uzaktan görev atama
- [Scheduled Tasks](/wiki/araclar/scheduled-tasks/): Zamanlanmış otomasyonlar

