---
title: "İlk Kurulum: Hesap, Abonelik, Claude Desktop"
seoTitle: "Claude'a Nasıl Kayıt Olunur? Üye Olma, Plan ve Kurulum Rehberi"
description: "Claude'a nasıl kayıt olunur: claude.ai'a üye olma, yaş sınırı, gizlilik ayarı, plan seçimi (Pro veya Max), Claude Desktop kurulumu ve donanım gereksinimleri."
tags:
  - temeller
  - kurulum
  - baslangic
  - claude-desktop
lastUpdated: "2026-10-06"
---

Bu sayfa, **hiç Claude kullanmamış birinin** sıfırdan başlangıç noktasına gelmesi için hazırlanmıştır. Her adımı tek tek anlatıyoruz, bilgisayar bilgisi gerekmez, "şuraya tıkla, bunu seç" şeklinde.

> **Bu sayfayı okumadan önce:**
> - [Claude Nedir?](/wiki/temeller/claude-nedir/): Claude'un ne olduğunu anlayın
> - [Modeller](/wiki/temeller/modeller/): Günlük iş için neden Sonnet önerdiğimizi görün
>
> Okumadıysanız da sorun değil, bu sayfa kendi kendine yeter.

**Toplam süre:** 30-45 dakika (donanımı hazırsa). İnternet hızınıza ve indirme süresine bağlı.

**Yapacaklarımız:**

1. claude.ai'a üye olmak
2. [Plan](/wiki/temeller/planlar/) seçip satın almak (yeni başlayanlara ilk ay Max 5x öneriyoruz, Pro ile başlamak da olur)
3. [Claude Desktop](/wiki/araclar/claude-desktop/)'ı indirmek ve kurmak
4. Workspace klasörü oluşturmak
5. [Cowork](/wiki/araclar/cowork-modu/)'ü aktifleştirmek
6. (Bonus) Ek yazılımlar: Chrome, basit editör

---

## Önce: Donanım Kontrolü

Başlamadan önce bilgisayarınız uygun mu kontrol edelim. Uygun değilse Claude Desktop sorunlu çalışır.

### Minimum Gereksinimler

| Bileşen | Minimum | Önerilen | Kontrol nasıl yapılır? |
|---|---|---|---|
| **İşletim sistemi** | Windows 10 (64-bit) veya üstü, macOS 11 (Big Sur) veya üstü (Linux için aşağıdaki nota bakın) | Windows 11 / macOS 14+ | Windows: Sağ alt → "Hakkında" / Mac: Apple ikonu → "Bu Mac Hakkında" |
| **RAM (bellek)** | Resmi gereksinim yayımlanmıyor | Bol RAM tercih edin (Cowork ve çok sekmeli tarayıcı birlikte çalışır) | Windows: Görev Yöneticisi → Performans / Mac: Bu Mac Hakkında |
| **İşlemci** | Intel i5 / i7 (8. nesil veya üstü), AMD Ryzen 5/7, Apple M1+ | Intel i7 (11. nesil+), Ryzen 7, Apple M2+ | Sistem bilgisinden bakın |
| **Depolama** | 256 GB SSD (en az 10 GB boş) | NVMe SSD, 20+ GB boş | Sürücüler → C: sağ tık → Özellikler |
| **Ekran** | 1080p (1920×1080) | 1440p veya 4K | Ayarlar → Sistem → Ekran |
| **İnternet** | 25 Mbps stabil | 50 Mbps | speedtest.net'te ölçün |

> Resmi olarak yayımlanan gereksinim yalnızca işletim sistemi sürümüdür. Diğer satırlar Zamana'nın deneyime dayalı önerisidir.

**Donanımım uymuyorsa ne olur?**

- **Az RAM:** Cowork yavaş çalışabilir, sandbox kod çalıştırma takılabilir. Çalışır ama sinir bozucu.
- **HDD (SSD değil):** Workspace klasörü erişimi yavaş, Claude dosyalarınızı uzun sürede okur.
- **Eski işlemci:** Çoklu [skill](/wiki/yetenekler/skills/) aynı anda çalıştırılırken bilgisayar zorlanır.
- **VPN'li ofis ağı:** Kurumsal VPN bazen Claude trafiğini engeller. (IT ile konuşun.)

**Donanım yetersizse:** Önce donanımı yükseltin, sonra kuruluma geçin. Kötü donanımda kurmaya çalışmak boşa zaman.

---

## Adım 1: Claude'a Nasıl Kayıt Olunur? (claude.ai'a Üye Olun)

Claude'a kayıt ücretsizdir ve birkaç dakika sürer. Şirketiniz Team veya Enterprise kullanıyorsa kayıt yerine yöneticinizin davetini kullanırsınız, bu durum 1.8'de.

> **Yaş sınırı:** Claude'u kullanmak için en az 18 yaşında olmanız gerekir (bulunduğunuz yerde rıza yaşı daha yüksekse o geçerlidir). 18 yaş altı izlenimi veren hesaplar devre dışı bırakılabilir.

### 1.1 Tarayıcıdan Açın

Chrome veya Edge tarayıcısını açın. Adres çubuğuna yazın:

```
claude.ai
```

Enter'a basın. Anthropic'in ana sayfası açılır.

> **Neden Chrome / Edge?** Modern OAuth (kimlik doğrulama) akışları için en uyumlu. Internet Explorer veya çok eski Firefox sürümleri sorun çıkarabilir.

### 1.2 "Sign Up" / "Üye Ol" Düğmesi

Sağ üst köşede **"Sign up"** veya **"Get started"** yazan turuncu/mavi düğme görünür. Tıklayın.

> Düğme isimleri zaman zaman değişebilir; "kayıt ol", "başlayın", "ücretsiz dene" gibi varyantları olabilir. Hepsi aynı yere götürür.

### 1.3 Üyelik Yöntemi

Üç seçenek çıkar:

- **"Continue with Google"**: Gmail hesabınızla
- **"Continue with Apple"**: iCloud / Apple ID ile
- **"Continue with email"**: herhangi bir e-posta ile

**Tavsiye:** Kurumsal kullanım için **şirket e-posta adresinizi** kullanın (`ad@sirket.com` gibi). Kişisel öğrenim için Gmail rahattır.

### 1.4 E-posta Doğrulama (E-posta seçtiyseniz)

E-postanızı yazın → "Continue" / "Devam"
Mail kutunuza Anthropic'ten doğrulama maili gelir.
Maildeki linke tıklayın → otomatik claude.ai'a döner.

**Mail gelmediyse:** Spam/Junk klasörünü kontrol edin. 5 dakika içinde gelmezse e-postayı yanlış yazmış olabilirsiniz, tekrar deneyin.

### 1.5 Profil Bilgileri

Claude.ai sizi karşılar, ad-soyad ister:

- **Adınız** ve **soyadınız** (gerçek isim önerilir)
- **Anthropic'i nasıl duyduğunuz** (opsiyonel anket: istediğinizi seçin)

"Continue" → ana ekrana düşersiniz.

### 1.6 İlk Görünüm: Free Plandasınız

Şu an **Free plandasınız**. Kullanım hakkınız var ama çok kısıtlı. Sıradaki adımda ücretli bir plana geçeceğiz.

> **Önemli: [Free planda](/wiki/temeller/planlar/) Cowork yok.** Yerel klasör (workspace) erişimi yok; Claude Design, Slides ve Docs gibi yeni üretim araçları da Free'de bulunmuyor (ücretli planlarda beta). Connectors ve skills Free'de de kullanılabilir, ama bu rehberin Cowork adımları ücretli plan gerektirir. Bu yüzden bir sonraki adımda ücretli plana geçiyoruz.

### 1.7 İlk Gizlilik Ayarları

Plan almadan önce iki ayara bakın. İkisi de **Settings** altındadır ve istediğiniz zaman değiştirebilirsiniz.

- **Claude'u geliştirmeye yardım et** (*Help improve Claude*, **Settings → Privacy**): konuşmalarınızın model eğitiminde kullanılıp kullanılmayacağını siz seçersiniz. İzin verirseniz veri 5 yıl, vermezseniz 30 gün saklanır. Varsayılan konumu hesabınızda kendiniz kontrol edin; iş içeriği yazacaksanız ayarın kapalı olması önerilir. Ayrıntı: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).
- **Sohbetlerden hafıza oluştur** (*Generate memory from chats*, **Settings → Memory**): Claude önceki sohbetlerinizden tercihlerinizi hatırlar. Free, Pro ve Max'te varsayılan olarak açıktır; Team ve Enterprise'ta varsayılan kapalıdır ve yönetici kontrolündedir. İş ve kişisel konuları aynı hesapta karıştırmak istemiyorsanız kapatın. Ayrıntı: [Hafıza](/wiki/yetenekler/memory/).

### 1.8 Şirketiniz Team veya Enterprise Kullanıyorsa: Davetle Katılım

Şirketiniz Team veya Enterprise planındaysa yöneticiniz size e-postayla davet gönderir. Davet bağlantısından şirket e-posta adresinizle giriş yaparsınız; ücretli planı şirket karşılar, kendiniz abonelik almanız gerekmez ve Adım 2'yi atlayabilirsiniz.

Daha önce kişisel hesabınız varsa katılırken eski sohbetlerinizi şirket hesabına taşıyabilir ya da kişisel hesabı ayrı tutabilirsiniz. Taşıma sırasında özel skills, özel connector'lar, uygulama yetkilendirmeleri ve halka açık paylaşım linkleri taşınmaz, bunları yeniden kurmanız gerekir. Hangi plan neyi içerir: [Claude Planları](/wiki/temeller/planlar/).

### 1.9 Mobil Uygulama

Aynı hesapla iOS ve Android uygulamasına da giriş yapabilirsiniz. Telefondan satın alırsanız fiyat App Store veya Google Play üzerinden TL ile gösterilir ve web fiyatından farklıdır, ayrıntısı [Claude Planları](/wiki/temeller/planlar/) sayfasında. Bu rehberdeki Cowork ve workspace adımları masaüstü uygulaması içindir.

---

## Adım 2: Planınızı Aktive Edin

### 2.1 Plan Seçim Ekranı

Sol alt köşede profil ikonunuz var. Tıklayın → açılan menüden **"Upgrade"** veya **"Plan"** seçeneğini bulun.

Alternatif: Sol menüden **"Settings"** → **"Plan"** veya **"Billing"** sekmesi.

Plan listesini görürsünüz: **Free / Pro / Max 5x / Max 20x / Team / Enterprise**.

### 2.2 Hangi Planı?

İki durumdan hangisindeyseniz ona göre seçim. Önerimiz ilk ay Max 5x'tir, ama zorunlu değil: Pro ile başlayıp gerektiğinde yükseltebilirsiniz.

**🚀 İlk ay yoğun keşif yapacaksanız → Max 5x ($100/ay), önerimiz**

Yeni bir kullanıcı ilk ayda ciddi kullanım yapar: [connector](/wiki/mcp/baglanti-listesi/) kurulumu, skill denemeleri, gerçek iş çıktıları, uzun belge testleri. Pro'nun ($20) kullanım limiti bu ritimde **birkaç saatte** dolar; "çalışmıyor" yanlış izlenimi oluşur ve değer kaybolur. Max 5x bu sürtünmeyi ortadan kaldırır.

Plan listesinde **Max 5x'e** tıklayın → "Subscribe to Max" / "Upgrade".

**📖 Yavaş tempoda öğrenmeye başladıysanız → Pro ($20/ay)**

Pro, Cowork dahil tüm temel özelliklere erişim verir. [Sonnet 5.5](/wiki/temeller/modeller/), plugin'ler, connector'lar ve [scheduled tasks](/wiki/araclar/scheduled-tasks/) Pro'da çalışır. Kendi tempoda öğrenen biri için ilk başta yeterlidir.

Plan listesinde **Pro'ya** tıklayın → "Subscribe to Pro" / "Upgrade".

> **Ne zaman Pro'dan Max 5x'e geçmeli?**
>
> Pro limitlerini sık sık doldurmaya başlarsanız (Claude size kullanım limitinin dolduğunu söyler), Max 5x'e geçmenin zamanı gelmiştir. Tipik tetikleyiciler:
>
> - Günde 3+ saat aktif Claude kullanıyorsunuz
> - Birden fazla connector yoğun çalışıyor
> - Uzun belge analizi (100+ sayfa) gibi ağır görevleri sık yapıyorsunuz
>
> Üst plana geçmek tek tıklama: ayarlar → plan → upgrade. İhtiyaç yoksa Pro'da kalın, parayı boşa atmayın.

### 2.3 Plan Düğmesine Basın → "Subscribe" / "Üye Ol"

Yukarıda seçtiğiniz plana göre **"Subscribe to Pro"** veya **"Subscribe to Max"** düğmesine basın.

Ödeme ekranı açılır:

- **Kredi kartı** numarası, son kullanma, CVC
- **Fatura adresi** (kurumsal kullanım için şirket adresi)
- **Aylık otomatik yenileme**: varsayılan açık. İstediğiniz zaman iptal edebilirsiniz. (Pro'da yıllık ödeme seçeneği de var: $200 peşin, aylık $17 eşdeğeri. Max'te yalnızca aylık.)

> **KDV ve döviz:** Anthropic ABD merkezli, fiyatlar USD ile gösterilir. Türk kartınızda tutar bankanızın kendi kuruyla TL'ye çevrilir. Türkiye faturalama adresiyle ödemede %20 KDV'nin eklendiği bildiriliyor (ikincil kaynaklara göre aylık Pro için karttan yaklaşık $24 çekilir); Anthropic'in Türkiye'ye özel resmi bir KDV sayfasını bulamadık, o yüzden ödeme ekranındaki toplam tutara bakın. Mobil uygulama mağazasından alırsanız TL fiyat web fiyatından farklı çıkar. TL karşılığı hesabı için [Claude Planları](/wiki/temeller/planlar/) sayfasına, kurumsal muhasebe için [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/) sayfasına bakın.

### 2.4 Ödeme Onayı

Banka 3D Secure SMS gelebilir → onaylayın. Anthropic ödeme onayı gönderir.

**Hata: "ödeme reddedildi"**
- Kartınızda yurt dışı işlem açık mı? Çoğu Türk bankasında varsayılan kapalı, internet bankacılığından açın.
- Limitiniz yeterli mi?
- Hala olmuyorsa farklı kart deneyin veya bankayı arayın.

### 2.5 Aktivasyon Doğrulama

Plan başarılı kurulduğunda **profilinizde plan rozeti** ("Pro" ya da "Max") görünür.

claude.ai'da herhangi bir sohbet açın, yan menüde [model seçenekleri](/wiki/temeller/modeller/) arasında **Sonnet** ve **Opus** görünür olmalı (Fable da listelenir ama Pro'da yalnızca ek kullanım kredisiyle çalışır). Free'de yalnızca Haiku ve Sonnet var.

---

## Adım 3: Claude Desktop'ı İndirin

### 3.1 Download Sayfasını Bulun

claude.ai sol menüsünde veya profil menüsünde **"Download Desktop App"** seçeneği vardır. Tıklayın.

Veya doğrudan:

```
claude.ai/download
```

### 3.2 İşletim Sisteminizi Seçin

İki büyük düğme var:

- **Windows**: `.exe` dosyası iner (~100-150 MB)
- **macOS**: `.dmg` dosyası iner

> **Linux:** Claude Desktop resmi olarak Linux'u da destekler (Ubuntu 22.04+ / Debian 12+, x64 veya arm64). Linux'ta Cowork için en az 8 GB RAM ve yaklaşık 25 GB boş disk gerekir (KVM gerekli). Bu rehberdeki indirme ve kurulum adımları Windows ve macOS içindir; Linux için resmi kurulum sayfasındaki adımları izleyin. İsterseniz **[Claude.ai web arayüzü](/wiki/araclar/claude-chat/)** ile de devam edebilirsiniz; Cowork web'de beta aşamasındadır ve yerel dosya erişimi kısmidir, workspace klasörü adımları (Adım 6 ve 7) masaüstü uygulaması gerektirir.

### 3.3 İndirme

Dosya **İndirilenler** (Downloads) klasörüne iner. İndirme bitene kadar bekleyin. Tarayıcıda alt sırada ilerleme görünür.

İnternet hızınıza göre 2-10 dakika sürer.

---

## Adım 4: Claude Desktop'ı Kurun

### 4.1 Windows İçin

1. **Downloads** klasörünü açın (Dosya Gezgini → Sol panel → İndirilenler)
2. `Claude-Setup.exe` (veya benzer isimli) dosyaya **çift tıklayın**
3. Windows "Bu uygulamanın bilgisayarınızda değişiklik yapmasına izin veriyor musunuz?" diye sorabilir → **"Evet"**
4. Kurulum sihirbazı açılır → **"Next"** / **"Install"** → kurulum 1-2 dakikada biter
5. **"Finish"** ile sihirbazı kapatın
6. Başlat menüsüne **"Claude"** yazın → uygulama görünür → açın

### 4.2 macOS İçin

1. **Downloads** klasöründen `Claude.dmg` dosyasına çift tıklayın
2. Açılan pencerede **Claude ikonunu Applications klasörüne sürükleyin**
3. Pencereyi kapatın
4. **Spotlight** açın (Cmd+Space) → **"Claude"** yazın → açın
5. İlk açılışta macOS "indirilen uygulamayı çalıştırmak istediğinize emin misiniz?" sorabilir → **"Open"**

### 4.3 Şirket Bilgisayarındaysanız: IT Engelleri

Şirket bilgisayarına yazılım kuramıyorsanız:

- **IT'den izin isteyin:** "Claude Desktop kurmamız gerekiyor, Anthropic'in resmi yazılımı, anthropic.com domaininden indirildi"
- **Domain whitelist:** `claude.ai`, `anthropic.com` ve Claude Desktop arka uç adresleri firewall'da açık olmalı
- **VPN testi:** Bazı kurumsal VPN'ler Claude trafiğini bozar: IT'ye bunu da test ettirin

[Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasında IT için detaylı liste var.

---

## Adım 5: Claude Desktop'a Giriş Yapın

Claude Desktop ilk açıldığında giriş ekranı çıkar.

1. **"Continue with Browser"** seçeneğine basın
2. Tarayıcı otomatik açılır → claude.ai'a yönlendirir
3. Claude.ai'da zaten girişliyseniz → otomatik onay
4. Değilse → giriş bilgilerinizi yazın
5. **"Authorize"** / **"Onayla"** → Claude Desktop'a geri döner
6. Artık masaüstü uygulamanızda ücretli hesabınızla bağlısınız

**Doğrulama:** Sağ üst köşede profil resminiz / baş harfleriniz + plan rozeti (**"Pro"** ya da **"Max"**) görünmeli.

---

## Adım 6: Workspace Klasörü Oluşturun

Claude Desktop'ın "Cowork" özelliği bilgisayarınızdaki belirli bir klasörü görür ve onun içinde çalışır. Önce bu klasörü hazırlamalıyız.

### 6.1 Klasör Yeri Seçin

**Tavsiye:** Diskinizin kök dizininde basit bir isimle.

- **Windows:** `C:\ClaudeWorkspace`
- **macOS:** `~/ClaudeWorkspace` (ana klasörünüzün altında)

> **Asla OneDrive / iCloud / Google Drive senkronize klasörlerinin içine koymayın!** Senkronizasyon çakışmaları yaşarsınız, Claude bir dosya yazarken OneDrive aynı anda buluta yüklemeye çalışır, çakışır, dosya bozulur.

### 6.2 Klasörü Yaratın

**Windows:**
1. Dosya Gezgini'ni açın
2. Sol panelden **C:** sürücüsüne tıklayın
3. Sağda boş alana sağ tıklayın → **Yeni → Klasör**
4. Adını **"ClaudeWorkspace"** yazın → Enter

**macOS:**
1. Finder'ı açın
2. Cmd+Shift+H ile ana klasörünüze gidin
3. Cmd+Shift+N ile yeni klasör yaratın
4. Adını **"ClaudeWorkspace"** yazın → Enter

### 6.3 Alt Klasör Yapısı (Opsiyonel ama Önerilen)

ClaudeWorkspace içine dört klasör daha açın:

```
ClaudeWorkspace/
├── projeler/        (aktif iş projeleri)
├── raporlar/        (tek seferlik raporlar)
├── arsiv/           (eski projeler)
└── prompts/         (kullandığınız prompt kütüphanesi)
```

Şu an boş kalsın, zamanla dolar.

---

## Adım 7: Cowork'ü Aktifleştirin

### 7.1 Cowork Sekmesi

Claude Desktop'ın **sol üst köşesinde, 3 küçük ikon** şeklinde sekmeler vardır (yakın zamanda yenilenen arayüz). Soldan sağa sırasıyla:

- 💬 **Chats**: konuşma balonu ikonu, normal sohbet için
- ≡ **Cowork**: küçük yatay çizgili liste ikonu (ortadaki), bizim ihtiyacımız olan
- `</>` **Code**: kod parantezleri + "Code" yazılı, geliştirici modu

**Ortadaki Cowork ikonuna tıklayın.**

> [Projects](/wiki/araclar/projects/) artık ayrı bir sekme değil, Cowork ve Chats içinde alt seçenek olarak yer alıyor. 17 Eylül 2026'da yeniden tasarlandı (beta): [Projects yeniden tasarlandı](/haberler/2026-09-17-projects-yeniden-tasarlandi/).

> **Güncel not (6 Ekim 2026):** Pro ve Max'te yeni Cowork görevleri artık bulutta çalışır ve "Only on your computer" seçeneği kalktı; yeni görevler için bilgisayarın açık ve uyanık kalması gerekmez. Yerel klasör erişimi, computer use ve yerleşik tarayıcı gibi masaüstüne bağlı yetenekler yine masaüstü uygulaması ister, bu yüzden aşağıdaki workspace klasörü adımları geçerlidir. Ayrıntı: [Cowork Modu](/wiki/araclar/cowork-modu/).

> **Güncel not (16 Eylül 2026):** Cowork ve sohbet tek Claude'da birleşiyor, yayılım kademeli (önce Pro ve Max). Hesabınızda birleşik arayüz açıldıysa ayrı bir Cowork ikonu görmeyebilirsiniz; bu durumda doğrudan yeni bir konuşma açıp workspace klasörünü orada bağlayın. Ayrıntı: [Cowork ve sohbet tek Claude oldu](/haberler/2026-09-16-cowork-ve-sohbet-tek-claude-oldu/).

### 7.2 İlk Açılış: "Get Started"

Cowork ilk açıldığında karşılama ekranı çıkar:

- **"Connect Workspace"** veya **"Choose folder"** düğmesi
- Tıklayın
- Klasör seçim ekranı açılır
- Az önce yarattığınız **`C:\ClaudeWorkspace`** (veya Mac eşdeğeri) klasörünü seçin
- **"Connect"** / **"Open"**

### 7.3 İzin Onayları

Cowork bilgisayarınızda dosyalara erişmek için izin ister:

- **Dosya okuma izni** → Allow
- **Dosya yazma izni** → Allow
- (macOS) **Klasör erişim izni** → Sistem Tercihleri otomatik açılabilir → Claude'a izin verin

İzinleri vermezseniz Cowork çalışmaz.

### 7.4 İlk Test

Cowork sohbet alanına yazın:

```
Merhaba. Workspace klasörümü görebiliyor musun? İçinde hangi klasörler var?
```

Claude listeleyecek: `projeler/, raporlar/, arsiv/, prompts/`. Bu listeyi görüyorsanız **Cowork çalışıyor** demektir.

---

## Adım 8: CLAUDE.md Başlangıç Dosyası

Claude'un sizi her oturumda yeniden tanımak zorunda kalmaması için workspace kök klasörüne **[CLAUDE.md](/wiki/claude-md/nedir/)** adlı bir dosya koymalıyız. Bu dosya, sizin yazıp düzenlediğiniz kalıcı talimat ve bağlam dosyasıdır (Claude'un kendi otomatik hafızasından ayrıdır).

**Nerede okunur?** Bilgisayarınızda, klasörü bağlayarak açtığınız Cowork oturumu bu klasördeki CLAUDE.md'yi okur. Sıradan sohbet (Chats) CLAUDE.md okumaz; bulut Cowork oturumlarında okunduğu belgelenmemiş. Tüm sohbetlerde geçerli olmasını istediğiniz kurallar için aşağıdaki 8.3'te profil talimatına da kısa bir sürüm yazacağız. Hangi talimatın nerede geçerli olduğunun tam tablosu: [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/).

### 8.1 Dosyayı Yaratın

**Windows:**
1. `C:\ClaudeWorkspace` klasörünü açın
2. Sağ tıklayın → **Yeni → Metin Belgesi**
3. Adını **`CLAUDE.md`** yapın (uzantı `.txt` değil `.md` olmalı)
4. Windows uyarı verirse "Evet, uzantıyı değiştirmek istiyorum"

**macOS:**
1. Finder'da `~/ClaudeWorkspace` klasörünü açın
2. **TextEdit** açın → boş belge → kaydet → klasör seçimi → ad: `CLAUDE.md`

### 8.2 Asgari İçerik

Dosyayı bir editör ile açın (Notepad veya TextEdit yeterli) ve şunu yapıştırın, kendi bilgilerinizle değiştirin:

```markdown
# CLAUDE.md: [Adınız]

## Kim Olduğum
- İsim: [Ad Soyad]
- Pozisyon: [Pozisyon, Şirket]
- Sektör: [Sektörünüz]

## Ton
- Türkçe: profesyonel ama robot gibi değil
- Devrik cümle kullanma
- Kaçınılacak: pazarlama klişeleri ("eşsiz", "devrim yaratan")

## Her Zaman / Asla
- Her zaman: önemli yazıları göndermeden önce taslağı göster
- Asla: tahmini bilgi olarak verme, emin değilsen söyle
```

Kaydedin. Bu kadar yeterli, zamanla genişletirsiniz.

[CLAUDE.md Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/) sayfasında detaylı şablon var.

### 8.3 Kısa Sürümü Profil Talimatına da Yazın

Settings > General > **"Instructions for Claude"** alanını açın ve yukarıdaki dosyanın en kritik 3-4 satırını (kim olduğunuz, ton, "her zaman / asla" kuralları) oraya yapıştırın. Bu alan tüm sohbetlerde ve Cowork'te geçerlidir; CLAUDE.md'yi okumayan sıradan sohbette de Claude sizi tanır.

### 8.4 Test

Workspace klasörünü bağlayarak Cowork'te yeni oturum açın ve ilk mesaj olarak şunu yazın:

```
Talimatımı 3 maddede özetle.
```

Claude CLAUDE.md'deki bilgileri (ad, ton, kurallar) doğru özetlerse klasör tarafı tamam. Aynı soruyu bir sıradan sohbette sorun: bu kez yalnız profil talimatına yazdığınız kısa sürümü özetlemesi gerekir. Özet yanlışsa ya da boşsa dosyanın doğru klasörde ve adının tam `CLAUDE.md` olduğundan emin olun, profil talimatının kaydedildiğini kontrol edin.

---

## Bonus: Ek Yazılımlar

Claude Desktop tek başına yeter ama şu yardımcıları kurarsanız hayatınız kolaylaşır:

### Chrome veya Edge (Modern Tarayıcı)

Connector'ları (Slack, Drive vb.) bağlarken OAuth akışları için modern tarayıcı gerekir.

Google Chrome kullanıyorsanız **Claude in Chrome** eklentisi de vardır (26 Ağustos 2026'dan beri genel kullanımda, tüm ücretli planlarda, yalnız masaüstü Chrome). Claude'un tarayıcıda sizin adınıza sayfa açıp doldurmasını sağlar; ne yaptığını bilerek kullanın. Tanıtım: [Claude in Chrome](/claude/chrome/), wiki özeti: [Office ve Chrome](/wiki/araclar/office-ve-chrome/).

- Zaten varsa: güncel olduğundan emin olun (Yardım → Hakkında)
- Yoksa: [google.com/chrome](https://www.google.com/chrome) → indir → kur

### VS Code (Daha İyi Metin Editörü)

CLAUDE.md ve markdown dosyalarını düzenlemek için Notepad/TextEdit yeterli. Ama VS Code daha rahattır.

- [code.visualstudio.com](https://code.visualstudio.com) → indir → kur
- İlk açılışta Türkçe dil paketi önerilir → kabul edin
- Dosyaları VS Code ile açmak için: dosyaya sağ tıklayın → "VS Code ile aç"

**Şart değil**: Notepad ile de yapılır.

### Microsoft Office veya Google Workspace

Cowork'ün ürettiği `.docx`, `.xlsx`, `.pptx` dosyalarını açmak için:

- **Microsoft 365** (kurumsal genelde var)
- veya **Google Workspace** (ücretsiz Google hesabıyla yeterli)
- veya **LibreOffice** (ücretsiz alternatif: [libreoffice.org](https://www.libreoffice.org))

Birini kurmuş olmanız yeterli. Microsoft 365 kullanıyorsanız Excel, PowerPoint ve Word içinde çalışan Claude eklentileri de vardır (ücretli planlarda; Outlook için public beta). Tanıtım: [Claude ve Microsoft 365](/claude/microsoft-365/).

### Speedtest (İsteğe Bağlı)

İnternet hızınızı ölçmek için: [speedtest.net](https://www.speedtest.net). 25 Mbps+ olduğunu doğrulayın.

---

## Sorun Giderme

### "Cowork görünmüyor"

- Hesabınız Pro veya üstü mü? (Free'de Cowork yok)
- Claude Desktop'ı yeniden başlatın
- claude.ai'da çıkış yapıp Desktop'tan tekrar giriş yapın

### "Workspace klasörü bağlanmıyor"

- Klasörü OneDrive/iCloud/Google Drive içinden çıkarın
- Yazma izni var mı? (Klasöre sağ tık → Özellikler → Güvenlik)
- Antivirüs Claude Desktop'ı engelliyor olabilir → istisna ekleyin

### "Connector OAuth tamamlanmıyor"

- Tarayıcınız güncel mi? (Chrome/Edge son sürüm)
- VPN'i geçici kapatın
- Tarayıcı pop-up'ları engelliyorsa izin verin

### "Yavaş çalışıyor"

- RAM'iniz kısıtlı mı? Diğer ağır uygulamaları (özellikle Chrome'un 50 sekmesi) kapatın
- Workspace klasörü HDD'de mi? SSD'ye taşıyın
- Çok büyük dosyalarla çalışıyorsanız parçalayın

### Email gelmiyor / Kayıt olamıyorum

- Spam klasörü
- Şirket maili güvenlik filtresi → @anthropic.com'u beyaz listeye ekletin
- Geçici olarak Gmail ile deneyin

---

## Sıradaki Adım: İlk 7 Gün

Kurulum tamam. Artık Claude Desktop ve Cowork'ü kullanabiliyorsunuz. Ama şimdi **doğru ilk hafta** önemli, bilgiyi alışkanlığa çevirmek için.

[**İlk 7 Gün Rehberi**](/wiki/temeller/ilk-7-gun/) → gün gün ne yapacağınızı, hangi hatalardan kaçınacağınızı, haftanın sonunda nerede olacağınızı anlatır.

Kurulum tek başına verim getirmez; ilk haftada neyin işe yaradığını görmek çoğu zaman bir rehber ister. Kendi işiniz üzerinden, size özel ilerleyen bir [birebir Claude eğitimi](/programlar/bireysel/) isterseniz 3 haftalık programın kapsamına bakabilirsiniz.

---

## İlgili Sayfalar

- [İlk 7 Gün Rehberi](/wiki/temeller/ilk-7-gun/): Kurulum sonrası ilk hafta
- [Claude Desktop](/wiki/araclar/claude-desktop/): Uygulama detayları
- [Cowork Modu](/wiki/araclar/cowork-modu/): Cowork'ün ne olduğu
- [CLAUDE.md Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/): Kalıcı talimat dosyası şablonu
- [Claude Planları](/wiki/temeller/planlar/): Plan detayları, Pro → Max upgrade mantığı
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): IT için kurumsal kurulum gereksinimleri

