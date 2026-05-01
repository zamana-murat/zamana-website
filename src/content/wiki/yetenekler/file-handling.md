---
title: Dosya İşleme — Claude Hangi Dosyaları Okur ve Üretir?
description: Claude hangi dosya tiplerini okur, hangilerini oluşturur, bilgisayarınızdaki workspace klasörüyle nasıl çalışır. PDF, Word, Excel, görsel, kod dosyaları.
tags:
  - yetenekler
  - dosya-isleme
  - workspace
  - pdf
  - excel
---

Claude, metin tabanlı bir araç olmanın çok ötesinde **dosyalarla çalışan bir sistemdir**. Bir PDF okur, bir Excel tablosu oluşturur, bir Word raporu düzenler, bir görsel analiz eder — hepsi aynı oturumda.

Bu sayfa hangi dosya tiplerini **okuduğunu**, hangilerini **ürettiğini**, ve dosyaların fiziksel olarak nerede yaşadığını anlatır.

## Claude Hangi Dosyaları Okur?

Claude içeriklerini analiz edip üzerinde çalışabildiği dosya tipleri:

### Metin ve Belge Dosyaları

- **`.txt`, `.md`** — düz metin ve Markdown
- **`.pdf`** — PDF içeriği çıkarır ve okur (metin, tablolar, zaman zaman görseller)
- **`.csv`** — tabular veriyi okur ve analiz eder
- **`.docx`** — Word belgelerini okur (biçimleme, başlıklar, tablolar dahil)
- **`.xlsx`** — Excel tablolarını okur (tüm sayfalar, formüller, değerler)
- **`.pptx`** — PowerPoint sunumlarını okur (slaytlar, notlar, içerik)
- **`.html`** — HTML dosyalarını okur

### Görseller

- **`.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`**

Claude görselleri **görür** — sadece metin çıkarmaz, içeriği anlar. Bir grafiği analiz eder, bir ekran görüntüsünden veri okur, bir ürün fotoğrafını tarif eder. Detay için [Görsel ve Görüntü](vision-image/) sayfasına bakın.

### Kod Dosyaları

- **`.py`, `.js`, `.ts`, `.sql`** ve diğer kod formatlarının çoğu

İş profesyoneli kod yazmaz, ama zaman zaman Claude'un **kod analiz etmesi veya bir script önermesi** faydalı olur. [Bilgi Teknolojileri](../departmanlar/bilgi-teknolojileri/) departmanı için özellikle değerlidir.

## Claude Hangi Dosyaları Üretir?

Cowork modunda Claude yeni dosyalar oluşturabilir. Üretim için skill'ler devreye girer:

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

**Önemli:** Siz skill çağırmak zorunda değilsiniz. "Bir Word raporu oluştur" dediğinizde Claude `docx` skill'ini otomatik devreye alır. Manuel `/docx` çağırdığınızda aynı sonuç — ama Claude'a niyeti önceden bildirmiş olursunuz ve bazı edge case'lerde fark yaratır.

## Workspace Klasörü — Dosyaların Fiziksel Evi

Claude'un **oluşturduğu her dosya**, [Cowork](../araclar/cowork-modu/)'e bağladığınız **workspace klasörünüze** kaydedilir. Bu klasör bilgisayarınızda gerçek bir klasördür:

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

Claude bir dosya ürettiğinde size **`computer://` bağlantısı** verir — bir tıkla dosya açılır.

Bu klasör:

- **Kalıcıdır** — oturum bittikten sonra dosyalar orada kalır
- **Sizindir** — bilgisayarınızda, size ait, yedeklenebilir
- **İzlenebilirdir** — Windows Explorer veya macOS Finder'dan normal bir klasör gibi yönetilir

## Working Directory vs Workspace Klasörü

Bu iki kavramı karıştırmak kolay:

| Kavram | Ne İşe Yarar | Kalıcılık |
|---|---|---|
| **Working directory** | Claude'un geçici çalışma alanı | Oturumlar arası temizlenir |
| **Workspace klasörü (mnt/)** | Sizin kalıcı teslimat klasörünüz | Her zaman kalıcı |

**Saklanmasını istediğiniz her şey** workspace klasöründe olmalıdır. Working directory Claude'un scratch paper'ıdır.

## Dosya Boyutu Sınırları

- Çok büyük dosyalar (500+ sayfalık PDF, gigabyte'lık veri setleri) bağlam penceresine sığmayabilir
- Büyük dosyaları **parçalara bölün** — bölüm bölüm işletin
- [Enterprise planında 500K token bağlam](../temeller/planlar/) bu kısıtı büyük ölçüde gevşetir
- Çok büyük veri için Python ile parçalı işlem: Claude scripte gider, her seferinde bir bölüm okur

## İyi Çalışma Alışkanlıkları

- **Proje bazlı alt klasörler:** workspace kökünde her büyük iş için ayrı klasör (`projeler/XYZ-teklif/`, `projeler/Q2-rapor/`). Claude klasör yapınızı görür ve mantıklı yere kaydeder.
- **Ay başı arşiv:** eski projeleri `arsiv/` klasörüne taşıyın. Workspace kökü dağınık olmasın.
- **CLAUDE.md kökte:** her zaman workspace'in kök dizininde durur. Claude oturumu başlatırken oradan okur.
- **Önemli dosyaları versiyonla:** `teklif-v1.docx`, `teklif-v2.docx` gibi. İterasyon geçmişi görünür olur.

## Gizlilik Notu

Workspace klasöründeki dosyalar fiziksel olarak **sizin bilgisayarınızdadır** — Anthropic sunucularında değil. Cowork oturumunda Claude bu dosyaları işlerken içerik Anthropic'e geçer (işleme için), ama:

- **Team ve Enterprise planlarında** varsayılan olarak eğitim için kullanılmaz
- **Pro planında** opt-in ayarıyla kontrol edilir

Detay için [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) sayfasına bakın.

## İlgili Sayfalar

- [Skills](skills/) — Dosya üreten skill'ler (`docx`, `xlsx`, `pptx`, `pdf`)
- [Artifacts](artifacts/) — Dosya olmayan canlı çıktılar
- [Cowork Modu](../araclar/cowork-modu/) — Workspace klasörünün yaşadığı ortam
- [Görsel ve Görüntü](vision-image/) — Görsel dosyalarla çalışmak
- [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) — Dosya gizliliği ve veri işleme

