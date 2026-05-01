---
title: İlk Kurulum — Hesap, Abonelik, Claude Desktop
description: "Sıfırdan Claude'a başlamak için adım adım kurulum rehberi. Claude.ai'a üye olmak, Pro planı aktive etmek, Claude Desktop'ı kurmak, donanım gereksinimleri, ek yazılımlar."
tags:
  - temeller
  - kurulum
  - baslangic
  - claude-desktop
---

Bu sayfa, **hiç Claude kullanmamış birinin** sıfırdan başlangıç noktasına gelmesi için hazırlanmıştır. Her adımı tek tek anlatıyoruz — bilgisayar bilgisi gerekmez, "şuraya tıkla, bunu seç" şeklinde.

> **Bu sayfayı okumadan önce:**
> - [Claude Nedir?](claude-nedir/) — Claude'un ne olduğunu anlayın
> - [Modeller](modeller/) — Sonnet'in neden ana model olduğunu görün
>
> İkisini okuduğunuzu varsayıyoruz. Yine de uzaklaştıysanız sorun değil — bu sayfa kendi kendine yeter.

**Toplam süre:** 30-45 dakika (donanımı hazırsa). İnternet hızınıza ve indirme süresine bağlı.

**Yapacaklarımız:**

1. claude.ai'a üye olmak
2. [Pro planı](planlar/) satın almak
3. [Claude Desktop](../araclar/claude-desktop/)'ı indirmek ve kurmak
4. Workspace klasörü oluşturmak
5. [Cowork modunu](../araclar/cowork-modu/) aktifleştirmek
6. (Bonus) Ek yazılımlar — Chrome, basit editör

---

## Önce: Donanım Kontrolü

Başlamadan önce bilgisayarınız uygun mu kontrol edelim. Uygun değilse Claude Desktop sorunlu çalışır.

### Minimum Gereksinimler

| Bileşen | Minimum | Önerilen | Kontrol nasıl yapılır? |
|---|---|---|---|
| **İşletim sistemi** | Windows 10 (64-bit) veya macOS 12 Ventura | Windows 11 / macOS 14+ | Windows: Sağ alt → "Hakkında" / Mac: Apple ikonu → "Bu Mac Hakkında" |
| **RAM (bellek)** | 16 GB | 32 GB | Windows: Görev Yöneticisi → Performans / Mac: Bu Mac Hakkında |
| **İşlemci** | Intel i5 / i7 (8. nesil veya üstü), AMD Ryzen 5/7, Apple M1+ | Intel i7 (11. nesil+), Ryzen 7, Apple M2+ | Sistem bilgisinden bakın |
| **Depolama** | 256 GB SSD (en az 10 GB boş) | NVMe SSD, 20+ GB boş | Sürücüler → C: sağ tık → Özellikler |
| **Ekran** | 1080p (1920×1080) | 1440p veya 4K | Ayarlar → Sistem → Ekran |
| **İnternet** | 25 Mbps stabil | 50 Mbps | speedtest.net'te ölçün |

**Donanımım uymuyorsa ne olur?**

- **8 GB RAM:** Cowork mod yavaş çalışır, sandbox kod çalıştırma takılır. Çalışır ama sinir bozucu.
- **HDD (SSD değil):** Workspace klasörü erişimi yavaş, Claude dosyalarınızı uzun sürede okur.
- **Eski işlemci:** Çoklu [skill](../yetenekler/skills/) aynı anda çalıştırılırken bilgisayar zorlanır.
- **VPN'li ofis ağı:** Kurumsal VPN bazen Claude trafiğini engeller. (IT ile konuşun.)

**Donanım yetersizse:** Önce donanımı yükselten — sonra kuruluma geç. Kötü donanımda kurmaya çalışmak boşa zaman.

---

## Adım 1: Claude.ai'a Üye Olun

### 1.1 Tarayıcıdan Aç

Chrome veya Edge tarayıcısını açın. Adres çubuğuna yazın:

```
claude.ai
```

Enter basın. Anthropic'in ana sayfası açılır.

> **Neden Chrome / Edge?** Modern OAuth (kimlik doğrulama) akışları için en uyumlu. Internet Explorer veya çok eski Firefox sürümleri sorun çıkarabilir.

### 1.2 "Sign Up" / "Üye Ol" Düğmesi

Sağ üst köşede **"Sign up"** veya **"Get started"** yazan turuncu/mavi düğme görünür. Tıklayın.

> Düğme isimleri zaman zaman değişebilir; "kayıt ol", "başlayın", "ücretsiz dene" gibi varyantları olabilir. Hepsi aynı yere götürür.

### 1.3 Üyelik Yöntemi

Üç seçenek çıkar:

- **"Continue with Google"** — Gmail hesabınızla
- **"Continue with Apple"** — iCloud / Apple ID ile
- **"Continue with email"** — herhangi bir e-posta ile

**Tavsiye:** Kurumsal kullanım için **şirket e-posta adresinizi** kullanın (`murat@zamana.com.tr` gibi). Kişisel öğrenim için Gmail rahattır.

### 1.4 E-posta Doğrulama (E-posta seçtiyseniz)

E-posta'nızı yazın → "Continue" / "Devam"
Mail kutunuza Anthropic'ten doğrulama maili gelir.
Maildeki linke tıklayın → otomatik claude.ai'a döner.

**Mail gelmediyse:** Spam/Junk klasörünü kontrol edin. 5 dakika içinde gelmezse e-postayı yanlış yazmış olabilirsiniz, tekrar deneyin.

### 1.5 Profil Bilgileri

Claude.ai sizi karşılar, ad-soyad ister:

- **Adınız** ve **soyadınız** (gerçek isim önerilir, sertifikalar bu isme çıkar)
- **Anthropic'i nasıl duyduğunuz** (opsiyonel anket — istediğinizi seçin)

"Continue" → ana ekrana düşersiniz.

### 1.6 İlk Görünüm — Free Plandasınız

Şu an **Free plandasınız**. Kullanım hakkınız var ama çok kısıtlı. Sıradaki adımda Pro'ya geçeceğiz.

> **Önemli — [Free planda](planlar/) Cowork yok.** Workspace, dosya erişimi, skill kullanımı yok. Yalnız ücretli planda çalışır. O nedenle yükseltme şart.

---

## Adım 2: Pro Planı Aktive Edin

### 2.1 Plan Seçim Ekranı

Sol alt köşede profil ikonunuz var. Tıklayın → açılan menüden **"Upgrade"** veya **"Plan"** seçeneğini bulun.

Alternatif: Sol menüden **"Settings"** → **"Plan"** veya **"Billing"** sekmesi.

Plan listesini görürsünüz: **Free / Pro / Max 5x / Max 20x / Team / Enterprise**.

### 2.2 Hangi Planı?

İki durumdan hangisindeyseniz ona göre seçim:

**🎓 Zamana eğitim programı satın aldıysanız → Max 5x ($100/ay)**

Eğitim, ilk günden itibaren ciddi kullanım gerektirir — [connector](../mcp/baglanti-listesi/) kurulumu, skill denemeleri, gerçek iş çıktıları, uzun belge testleri. Pro'nun ($20) kullanım limiti bu ritimde **birkaç saatte** dolar; "çalışmıyor" yanlış izlenimi oluşur ve eğitimden alınacak değer düşer. Max 5x bu sürtünmeyi ortadan kaldırır.

Plan listesinde **Max 5x'e** tıklayın → "Subscribe to Max" / "Upgrade".

**📖 Kendi başınıza Claude'u öğrenmeye başladıysanız → Pro ($20/ay)**

Pro, Cowork modu dahil tüm temel özelliklere erişim verir. [Sonnet 4.6](modeller/), plugin'ler, connector'lar, [scheduled tasks](../araclar/scheduled-tasks/) — hepsi Pro'da çalışır. Kendi tempoda öğrenen biri için ilk başta yeterlidir.

Plan listesinde **Pro'ya** tıklayın → "Subscribe to Pro" / "Upgrade".

> **Ne zaman Pro'dan Max 5x'e geçmeli?**
>
> Pro limitlerini sık sık doldurmaya başlarsanız (Claude size "saatlik limit doldu" der), Max 5x'e geçmenin zamanı gelmiştir. Tipik tetikleyiciler:
>
> - Günde 3+ saat aktif Claude kullanıyorsunuz
> - Birden fazla connector yoğun çalışıyor
> - Uzun belge analizi (100+ sayfa) gibi ağır görevleri sık yapıyorsunuz
>
> Üst plana geçmek tek tıklama — ayarlar → plan → upgrade. İhtiyaç yoksa Pro'da kalın, parayı boşa atmayın.

### 2.3 Plan Düğmesine Basın → "Subscribe" / "Üye Ol"

Yukarıda seçtiğiniz plana göre **"Subscribe to Pro"** veya **"Subscribe to Max"** düğmesine basın.

Ödeme ekranı açılır:

- **Kredi kartı** numarası, son kullanma, CVC
- **Fatura adresi** (kurumsal kullanım için şirket adresi)
- **Aylık otomatik yenileme** — varsayılan açık. Ne zaman istesen iptal edebilirsin.

> **KDV ve döviz:** Anthropic ABD merkezli — fatura USD olarak gelir. Türk kartınızda otomatik TL'ye çevrilir, kartınızın döviz kuru üzerinden işlem yapılır. KDV Anthropic'in faturasına dahildir.

### 2.4 Ödeme Onayı

Banka 3D Secure SMS gelebilir → onaylayın. Anthropic ödeme onayı gönderir.

**Hata: "ödeme reddedildi"**
- Kartınızda yurt dışı işlem açık mı? Çoğu Türk bankasında varsayılan kapalı, internet bankacılığından açın.
- Limitiniz yeterli mi?
- Hala olmuyorsa farklı kart deneyin veya bankayı arayın.

### 2.5 Aktivasyon Doğrulama

Plan başarılı kurulduğunda **profilinizde "Pro" rozeti** görünür.

claude.ai'da herhangi bir sohbet açın, yan menüde [model seçenekleri](modeller/) arasında **Sonnet** görünür olmalı (ve sınırlı Opus). Free'de bu seçenekler yoktu.

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

- **Windows** — `.exe` dosyası iner (~100-150 MB)
- **macOS** — `.dmg` dosyası iner

> **Linux:** Resmi destek yok. Linux kullanıyorsanız **[Claude.ai web arayüzü](../araclar/claude-chat/)** ile devam edin. Cowork'ün tüm özellikleri olmasa da çoğu işi yapar.

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

### 4.3 Şirket Bilgisayarındaysanız — IT Engelleri

Şirket bilgisayarına yazılım kuramıyorsanız:

- **IT'den izin isteyin:** "Claude Desktop kurmamız gerekiyor, Anthropic'in resmi yazılımı, anthropic.com domaininden indirildi"
- **Domain whitelist:** `claude.ai`, `anthropic.com` ve Claude Desktop arka uç adresleri firewall'da açık olmalı
- **VPN testi:** Bazı kurumsal VPN'ler Claude trafiğini bozar — IT'ye bunu da test ettirin

[Gizlilik ve KVKK](gizlilik-kvkk/) sayfasında IT için detaylı liste var.

---

## Adım 5: Claude Desktop'a Giriş Yapın

Claude Desktop ilk açıldığında giriş ekranı çıkar.

1. **"Continue with Browser"** seçeneğine basın
2. Tarayıcı otomatik açılır → claude.ai'a yönlendirir
3. Claude.ai'da zaten girişliyseniz → otomatik onay
4. Değilse → giriş bilgilerinizi yazın
5. **"Authorize"** / **"Onayla"** → Claude Desktop'a geri döner
6. Artık masaüstü uygulamanızda Pro hesabınızla bağlısınız

**Doğrulama:** Sağ üst köşede profil resminiz / baş harfleriniz + **"Pro"** rozeti görünmeli.

---

## Adım 6: Workspace Klasörü Oluşturun

Claude Desktop'ın "Cowork" özelliği bilgisayarınızdaki belirli bir klasörü görür ve onun içinde çalışır. Önce bu klasörü hazırlamalıyız.

### 6.1 Klasör Yeri Seçin

**Tavsiye:** Diskinizin kök dizininde basit bir isimle.

- **Windows:** `C:\ClaudeWorkspace`
- **macOS:** `~/ClaudeWorkspace` (ana klasörünüzün altında)

> **Asla OneDrive / iCloud / Google Drive senkronize klasörlerinin içine koymayın!** Senkronizasyon çakışmaları yaşarsınız — Claude bir dosya yazarken OneDrive aynı anda buluta yüklemeye çalışır, çakışır, dosya bozulur.

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

Şu an boş kalsın — zamanla dolar.

---

## Adım 7: Cowork Modunu Aktifleştirin

### 7.1 Cowork Sekmesi

Claude Desktop'ın **sol üst köşesinde, 3 küçük ikon** şeklinde sekmeler vardır (yakın zamanda yenilenen arayüz). Soldan sağa sırasıyla:

- 💬 **Chats** — konuşma balonu ikonu, normal sohbet için
- ≡ **Cowork** — küçük yatay çizgili liste ikonu (ortadaki), bizim ihtiyacımız olan
- `</>` **Code** — kod parantezleri + "Code" yazılı, geliştirici modu (Zamana kapsamı dışı)

**Ortadaki Cowork ikonuna tıklayın.**

> [Projects](../araclar/projects/) artık ayrı bir sekme değil — Cowork ve Chats içinde alt seçenek olarak yer alıyor.

### 7.2 İlk Açılış — "Get Started"

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

Claude listeleyecek: `projeler/, raporlar/, arsiv/, prompts/`. Bu listeyi görüyorsa **Cowork çalışıyor** demektir.

---

## Adım 8: CLAUDE.md Başlangıç Dosyası

Claude'un sizi her oturumda yeniden tanımak zorunda kalmaması için workspace kök klasörüne **[CLAUDE.md](../claude-md/nedir/)** adlı bir dosya koymalıyız. Bu dosya Claude'un kalıcı hafızasıdır.

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
# CLAUDE.md — [Adınız]

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
- Asla: tahmini bilgi olarak verme — emin değilsen söyle
```

Kaydedin. Bu kadar yeterli — zamanla genişletirsiniz.

[CLAUDE.md Nasıl Yazılır?](../claude-md/nasil-yazilir/) sayfasında detaylı şablon var.

### 8.3 Test

Cowork'te yeni sohbet açın:

```
CLAUDE.md dosyamı okudun mu? Beni özetle.
```

Claude doğru özetlerse — kurulum tamam.

---

## Bonus: Ek Yazılımlar

Claude Desktop tek başına yeter ama şu yardımcıları kurarsanız hayatınız kolaylaşır:

### Chrome veya Edge (Modern Tarayıcı)

Connector'ları (Slack, Drive vb.) bağlarken OAuth akışları için modern tarayıcı gerekir.

- Zaten varsa: güncel olduğundan emin olun (Yardım → Hakkında)
- Yoksa: [google.com/chrome](https://www.google.com/chrome) → indir → kur

### VS Code (Daha İyi Metin Editörü)

CLAUDE.md ve markdown dosyalarını düzenlemek için Notepad/TextEdit yeterli. Ama VS Code daha rahattır.

- [code.visualstudio.com](https://code.visualstudio.com) → indir → kur
- İlk açılışta Türkçe dil paketi önerilir → kabul edin
- Dosyaları VS Code ile açmak için: dosyaya sağ tıklayın → "VS Code ile aç"

**Şart değil** — Notepad ile de yapılır.

### Microsoft Office veya Google Workspace

Cowork'ün ürettiği `.docx`, `.xlsx`, `.pptx` dosyalarını açmak için:

- **Microsoft 365** (kurumsal genelde var)
- veya **Google Workspace** (ücretsiz Google hesabıyla yeterli)
- veya **LibreOffice** (ücretsiz alternatif — [libreoffice.org](https://www.libreoffice.org))

Birini kurmuş olmanız yeterli.

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

- RAM'iniz 16 GB'tan az mı? Diğer ağır uygulamaları (özellikle Chrome'un 50 sekmesi) kapatın
- Workspace klasörü HDD'de mi? SSD'ye taşıyın
- Çok büyük dosyalarla çalışıyorsanız parçalayın

### Email gelmiyor / Kayıt olamıyorum

- Spam klasörü
- Şirket maili güvenlik filtresi → @anthropic.com'u beyaz listeye ekletin
- Geçici olarak Gmail ile deneyin

---

## Sıradaki Adım: İlk 7 Gün

Kurulum tamam. Artık Claude Desktop ve Cowork'ü kullanabiliyorsunuz. Ama şimdi **doğru ilk hafta** önemli — bilgiyi alışkanlığa çevirmek için.

[**İlk 7 Gün Rehberi**](ilk-7-gun/) → gün gün ne yapacağınızı, hangi hatalardan kaçınacağınızı, haftanın sonunda nerede olacağınızı anlatır.

---

## İlgili Sayfalar

- [İlk 7 Gün Rehberi](ilk-7-gun/) — Kurulum sonrası ilk hafta
- [Claude Desktop](../araclar/claude-desktop/) — Uygulama detayları
- [Cowork Modu](../araclar/cowork-modu/) — Cowork'ün ne olduğu
- [CLAUDE.md Nasıl Yazılır?](../claude-md/nasil-yazilir/) — Hafıza dosyası şablonu
- [Claude Planları](planlar/) — Plan detayları, Pro → Max upgrade mantığı
- [Gizlilik ve KVKK](gizlilik-kvkk/) — IT için kurumsal kurulum gereksinimleri

