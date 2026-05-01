---
title: Cowork Modu Nedir?
description: "Cowork, Claude Desktop'ın iş akışı odaklı modudur. Dosyalarınıza erişir, kod çalıştırır, araçları kullanır. Zamana eğitim programlarının çalışma ortamıdır."
tags:
  - cowork
  - claude-desktop
  - arac
---

**Cowork, Claude Desktop uygulamasının içinde yaşayan ve Claude'u bir sohbet arayüzünden tam bir çalışma ortamına dönüştüren özelliktir.** Şu an research preview aşamasındadır — yani aktif geliştirilen, kararlı ve kullanılabilir bir özelliktir ama Anthropic hızla değiştirmeye devam ediyor.

Zamana eğitim programlarının tamamı Cowork üzerine kuruludur. Sebep basit: bir iş profesyoneline gerçek değeri Cowork katar.

## Chat ve Cowork Arasındaki Fark

Bu farkı anlamak her şeyin anahtarıdır.

**Claude Chat'te** siz sorarsınız, Claude cevap verir. Her şey yazı düzleminde kalır. Claude dosyanıza erişmez, bilgisayarınızda bir şey çalıştıramaz, Slack'e mesaj gönderemez. Konuşma biter, sonuç kopyala-yapıştır yoluyla sizin sorumluluğunuzdadır.

**Cowork'te** siz bir sonuç tarif edersiniz — Claude plan yapar, uygular, teslim eder. Workspace klasörünüzdeki dosyayı okur, analiz eder, yeni bir rapor oluşturur, Google Drive'a yükler, Slack'te ekibinize haber verir. Süreç zincirinin tamamını tek oturumda yönetir.

> **Chat, bir öğrenci gibi çalışır. Cowork, bir meslektaş gibi çalışır.**

## Cowork'te Neler Var?

Cowork'ün gücü tek bir özelliğinden değil, birlikte çalışan bir özellik setinden gelir:

### Dosya Erişimi
Claude workspace klasörünüzdeki dosyaları doğrudan okur, oluşturur, düzenler. Word belgesi yazar, Excel dosyasını günceller, PDF'i açıp işler. Bilgisayarınızdaki gerçek klasörde, gerçek dosyalar üzerinde çalışır.

### Sandbox'ta Kod Çalıştırma
Claude, bilgisayarınızda izole bir sanal makine içinde Python, PowerShell, Bash veya Node.js çalıştırır. Bu sanal makine işletim sisteminizden ayrıdır — tasarım gereği güvenlidir. Excel formülleri bu şekilde hesaplanır, PDF'ler bu şekilde işlenir, veri bu şekilde dönüştürülür.

**Önemli not:** Siz kod yazmazsınız. Claude'a ne yaptırmak istediğinizi Türkçe söylersiniz, Claude kodu kendisi yazar ve çalıştırır. "Sadece iş adamı olan çalışan da kod yazmış gibi olur" kısmı buradan gelir.

### Skills (Yetenek Paketleri)
Skills, belirli bir görev tipi için önceden hazırlanmış uzmanlık paketleridir. `/docx`, `/pptx`, `/xlsx`, `/pdf` gibi komutlarla devreye girer. O dosya tipi için en iyi uygulamaları, biçimleme kurallarını, tipik hataları içerir. Sonuç: profesyonel kalitede çıktı, ilk denemede.

### Plugins (Eklentiler)
Plugins, skills + connector + subagent paketlerini bir araya getiren kurulabilir bileşenlerdir. Örneğin "Sales plugin" içinde satış aramaları hazırlama skill'i, müşteri araştırma skill'i ve CRM bağlantısı birlikte gelir. Bir departmanın ihtiyaçlarını tek pakette toplar.

### Connectors (Bağlayıcılar)
Dış servislere kimlik doğrulamalı bağlantılardır: Slack, Google Drive, Gmail, Microsoft 365, Notion, Asana, ClickUp, birçok CRM platformu ve 30+ diğer servis. Bir kere bağlarsınız, Claude bu servislere sizin adınıza okur ve yazar.

### Artifacts (Canlı Çıktılar)
Cowork yan panelinde açılan kalıcı HTML sayfalarıdır. Her açıldığında connector'lardan güncel veri çekebilir — yani tek seferlik bir raporu canlı bir kontrol paneline dönüştürür. Satış pipeline'ı, haftalık performans özeti, stok durumu gibi şeyler için.

### Scheduled Tasks (Zamanlanmış Görevler)
Sizin başlatmanıza gerek kalmadan belirli aralıklarla (günlük, haftalık, aylık) çalışan otomasyonlardır. Pazartesi sabah brifinginiz, Cuma akşam ekip raporu — siz bir şey yapmadan hazırlanır.

### Dispatch (Uzaktan Görev)
Telefonunuzdan bir görev gönderirsiniz, Claude masaüstünüzde çalışır, sonucu hazırlar. Siz toplantıdayken bile işler ilerler.

### Subagent Koordinasyonu
Karmaşık görevlerde Claude birden fazla alt-instance başlatır: biri araştırır, diğeri taslak yazar, üçüncüsü dosyaları kontrol eder. Sonuçlar tek çıktıda birleştirilir.

### Projects (Projeler)
Cowork içinde ayrı çalışma alanları — her biri kendi dosyaları, bağlamı, hafızası ve zamanlanmış görevleriyle. "Akmin Q2 satışları" ile "Zamana wiki" projelerini birbirine karıştırmazsınız.

## Bir Cowork Oturumu Nasıl İşler?

1. Claude Desktop'ta Cowork'ü açarsınız
2. Claude workspace klasörünüzü ve bağlam dosyalarınızı (CLAUDE.md, proje dosyaları) okur
3. Bir görev tarif edersiniz — tek cümle olabilir, detaylı talimat da olabilir
4. Claude isteği analiz eder, bir plan çıkarır, alt görevlere böler
5. Claude çalışır: dosyaları okur, kod çalıştırır, connector'ları çağırır, çıktıları yazar
6. Sonucu workspace klasörünüze teslim eder, açmak için bağlantı verir
7. Siz kontrol edersiniz, gerekirse geri bildirim verip iyileştirirsiniz

## Workspace Klasörü

Cowork'ün kalbidir. Bilgisayarınızda gerçek bir klasördür — siz seçer ve Cowork ayarlarından bağlarsınız. Claude'un ürettiği her şey bu klasöre kaydedilir ve oturum bittikten sonra orada kalır.

**İki kavramı karıştırmayın:**

| Kavram | Ne İşe Yarar | Kalıcılık |
|---|---|---|
| **Working directory** | Claude'un geçici çalışma alanı | Oturumlar arası temizlenir |
| **Workspace klasörü (mnt/)** | Sizin kalıcı teslimat klasörünüz | Her zaman kalıcı |

**Zamana'nın 1. Oturum Kuralı:** Workspace klasörünü hemen kurun. Adını net verin (`ClaudeWorkspace`, `YapayZeka`, `AiCalisma` gibi). Her çıktı oraya gider. Bu alışkanlığı ilk oturumda kurarsanız, bir ay içinde doğal bir refleks haline gelir.

## Cowork'ün Bağlam Katmanları

Cowork oturumu başlattığınızda Claude birden fazla kaynaktan bağlam toplar:

| Katman | Kaynak | Kapsamı |
|---|---|---|
| Genel talimatlar | Ayarlar > Cowork | Her oturum |
| CLAUDE.md | Workspace kök klasörü | Her oturum |
| Proje bağlam dosyası | Aktif proje klasörü | Sadece o proje |
| Oturum içi yüklemeler | Konuşmada paylaşılan dosyalar | Sadece o oturum |

Bu katmanların ne kadarını doldurursanız, çalışan o kadar az açıklama yapar ve Claude'un çıktısı gerçek iş bağlamınıza o kadar yaklaşır.

## Güvenlik ve Kontrol

Cowork güçlüdür — ve güç sorumluluk getirir.

- **Sandbox izolasyonu.** Claude'un kod çalıştırdığı sanal makine işletim sisteminizden ayrıdır. Yanlışlıkla C diskinizi silemez.
- **Connector izinleri.** Her dış servis bağlantısı ayrı ayrı onaylanır. Claude sadece izin verdiğiniz servislere erişebilir.
- **Eylem onayları.** Kritik eylemler (dosya silme, e-posta gönderme, işlem yapma) önce size gösterilir, siz onayladıktan sonra uygulanır.
- **Şeffaf aktivite.** Claude'un yaptığı her şey sohbet geçmişinde görünür. Arka planda gizli eylem olmaz.

Bu, bir çalışana "Claude şirket verilerine özgürce erişebilir" anlamına gelmez. Claude, **çalışanın izin verdiği araçları**, **çalışanın açıkladığı şekilde** kullanır. Denetim ve sınır çalışandadır.

## İlgili Sayfalar

- [Claude Desktop](claude-desktop/) — Cowork'ün içinde yaşadığı uygulama
- [CLAUDE.md Nedir?](../claude-md/nedir/) — Cowork'ün her oturumda okuduğu hafıza dosyası
- [Skills](../yetenekler/skills/) — Cowork'teki yetenek paketleri
- [MCP Bağlantı Listesi](../mcp/baglanti-listesi/) — Cowork'te kullanılabilen connector'lar
- [Dispatch](dispatch/) — Uzaktan görev atama
- [Scheduled Tasks](scheduled-tasks/) — Zamanlanmış otomasyonlar

