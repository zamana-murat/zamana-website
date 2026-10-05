---
title: "Dosya İşleme: Claude Hangi Dosyaları Okur ve Üretir?"
description: Claude hangi dosya tiplerini okur, hangilerini oluşturur, bilgisayarınızdaki workspace klasörüyle nasıl çalışır. PDF, Word, Excel, görsel, kod dosyaları.
tags:
  - yetenekler
  - dosya-isleme
  - workspace
  - pdf
  - excel
lastUpdated: "2026-10-05"
---

Claude, metin tabanlı bir araç olmanın çok ötesinde **dosyalarla çalışan bir sistemdir**. Bir PDF okur, bir Excel tablosu oluşturur, bir Word raporu düzenler, bir görsel analiz eder; hepsi aynı oturumda.

Bu sayfa hangi dosya tiplerini **okuduğunu**, hangilerini **ürettiğini** ve dosyaların fiziksel olarak nerede yaşadığını anlatır.

## Claude Hangi Dosyaları Okur?

Claude içeriklerini analiz edip üzerinde çalışabildiği dosya tipleri:

### Metin ve Belge Dosyaları

- **`.txt`, `.md`:** düz metin ve Markdown
- **`.pdf`:** PDF içeriği çıkarır ve okur (metin, tablolar, zaman zaman görseller). claude.ai'de PDF en çok 1000 sayfa olabilir; 100 sayfaya kadar metinle birlikte grafikler ve tablolar da okunur, bundan sonraki sayfalarda yalnız metin okunur. Sohbet başına en çok 20 dosya yüklenir
- **`.csv`:** tablo biçimli veriyi okur ve analiz eder
- **`.docx`:** Word belgelerini okur (biçimleme, başlıklar, tablolar dahil)
- **`.xlsx`:** Excel tablolarını okur (tüm sayfalar, formüller, değerler)
- **`.pptx`:** PowerPoint sunumlarını okur (slaytlar, notlar, içerik)
- **`.html`:** HTML dosyalarını okur

### Görseller

- **`.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`**

Claude görselleri **görür**: yalnızca metin çıkarmaz, içeriği anlar. Bir grafiği analiz eder, bir ekran görüntüsünden veri okur, bir ürün fotoğrafını tarif eder. claude.ai'de mesaj başına en çok 20 görsel yüklenir, görsel başına sınır 10 MB'tır. Detay için [Görsel ve Görüntü](/wiki/yetenekler/vision-image/) sayfasına bakın.

### Kod Dosyaları

- **`.py`, `.js`, `.ts`, `.sql`** ve diğer kod formatlarının çoğu

İş profesyoneli kod yazmaz, ama zaman zaman Claude'un **kod analiz etmesi veya bir script önermesi** faydalı olur. [Bilgi Teknolojileri](/wiki/departmanlar/bilgi-teknolojileri/) departmanı için özellikle değerlidir.

## Claude Hangi Dosyaları Üretir?

Cowork'te Claude yeni dosyalar oluşturabilir. Üretim için skill'ler devreye girer:

| Format | Skill | Tipik Kullanım |
|---|---|---|
| **`.docx`** | `docx` | Word raporu, resmi yazışma, sözleşme taslağı |
| **`.xlsx`** | `xlsx` | Excel tablosu, analiz, finansal model, veri listesi |
| **`.pptx`** | `pptx` | PowerPoint sunumu, yönetim kuruluna rapor |
| **`.pdf`** | `pdf` | PDF raporu, broşür, belge birleştirme |
| **`.html`** | (skill yok, doğrudan) | Web sayfası, canlı artifact |
| **`.md`** | (skill yok, doğrudan) | Markdown belge, CLAUDE.md güncellemesi |
| **`.py`, `.js`** | (skill yok, doğrudan) | Script, otomasyon kodu |
| **`.png`, `.svg`** | `canvas-design` | Görsel tasarım, logo, diyagram |

**Önemli:** Siz skill çağırmak zorunda değilsiniz. "Bir Word raporu oluştur" dediğinizde Claude `docx` skill'ini otomatik devreye alır. `/docx` yazarak elle çağırırsanız sonuç aynıdır, ama Claude'a niyetinizi baştan bildirmiş olursunuz; bu bazen daha tutarlı çıktı verir.

## Workspace Klasörü: Dosyaların Fiziksel Evi

Claude'un **oluşturduğu her dosya**, [Cowork](/wiki/araclar/cowork-modu/)'e bağladığınız **workspace klasörünüze** kaydedilir. Bu klasör bilgisayarınızda gerçek bir klasördür:

```
C:\ClaudeWorkspace\
├── CLAUDE.md
├── projeler\
│   ├── XYZ-Gida-teklif\
│   │   ├── teklif-final.docx
│   │   └── karsilastirma.xlsx
│   └── Q2-pazarlama\
├── raporlar\
│   └── 2026-03-operasyon.docx
└── arsiv\
```

Claude bir dosya ürettiğinde size **`computer://` bağlantısı** verir, bir tıkla dosya açılır.

Bu klasör:

- **Kalıcıdır**: oturum bittikten sonra dosyalar orada kalır
- **Sizindir**: bilgisayarınızda, size ait, yedeklenebilir
- **İzlenebilirdir**: Windows Explorer veya macOS Finder'dan normal bir klasör gibi yönetilir

## Working Directory vs Workspace Klasörü

Bu iki kavramı karıştırmak kolay:

| Kavram | Ne İşe Yarar | Kalıcılık |
|---|---|---|
| **Working directory** | Claude'un geçici çalışma alanı | Oturumlar arası temizlenir |
| **Workspace klasörü (mnt/)** | Sizin kalıcı teslimat klasörünüz | Her zaman kalıcı |

**Saklanmasını istediğiniz her şey** workspace klasöründe olmalıdır. Working directory, Claude'un karalama kâğıdıdır.

## Dosya Boyutu Sınırları

- Çok büyük dosyalar (1.000 sayfayı aşan raporlar, gigabyte'lık veri setleri) bağlam penceresine sığmayabilir. 200K bağlamlı Claude Haiku 4.5 ile yüzlerce sayfalık belgelerde de aynı sorun çıkar
- Büyük dosyaları **parçalara bölün**: bölüm bölüm işletin
- Güncel modellerde (Fable 5.1, Opus 5.5, Sonnet 5.5) [1M token bağlam](/wiki/temeller/modeller/) bu kısıtı büyük ölçüde gevşetir
- Çok büyük veri için Claude bir Python betiği yazıp dosyayı her seferinde bir bölüm okuyarak işleyebilir

## İyi Çalışma Alışkanlıkları

- **Proje bazlı alt klasörler:** workspace kökünde her büyük iş için ayrı klasör (`projeler/XYZ-teklif/`, `projeler/Q2-rapor/`). Claude klasör yapınızı görür ve mantıklı yere kaydeder.
- **Ay başı arşiv:** eski projeleri `arsiv/` klasörüne taşıyın. Workspace kökü dağınık olmasın.
- **CLAUDE.md kökte:** her zaman workspace'in kök dizininde durur. Claude oturumu başlatırken oradan okur.
- **Önemli dosyaları versiyonla:** `teklif-v1.docx`, `teklif-v2.docx` gibi. İterasyon geçmişi görünür olur.

## Gizlilik Notu

Workspace klasöründeki dosyalar fiziksel olarak **sizin bilgisayarınızdadır**, Anthropic sunucularında değil. Cowork oturumunda Claude bu dosyaları işlerken içerik Anthropic'e geçer (işleme için), ama:

- **Team ve Enterprise planlarında** varsayılan olarak eğitim için kullanılmaz
- **Free, Pro ve Max planlarında** tüketici gizlilik ayarına bağlıdır, hesabınızda kontrol edin

Detay için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasına bakın.

## İlgili Sayfalar

- [Skills](/wiki/yetenekler/skills/): Dosya üreten skill'ler (`docx`, `xlsx`, `pptx`, `pdf`)
- [Artifacts](/wiki/yetenekler/artifacts/): Dosya olmayan canlı çıktılar
- [Cowork Modu](/wiki/araclar/cowork-modu/): Workspace klasörünün yaşadığı ortam
- [Görsel ve Görüntü](/wiki/yetenekler/vision-image/): Görsel dosyalarla çalışmak
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Dosya gizliliği ve veri işleme

