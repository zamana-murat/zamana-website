---
title: "Dosya İşleme: Claude Hangi Dosyaları Okur ve Üretir?"
seoTitle: "Claude Hangi Dosyaları Okur? PDF, Excel, Word"
description: "Claude hangi dosyaları okur ve üretir? PDF, Word, Excel, görsel; yükleme sınırları, dosyaların nerede durduğu ve Türkiye'den örnekler."
tags:
  - yetenekler
  - dosya-isleme
  - yukleme-sinirlari
  - pdf
  - excel
lastUpdated: "2026-10-06"
---

Claude, metin tabanlı bir araç olmanın çok ötesinde **dosyalarla çalışan bir sistemdir**. Bir PDF okur, bir Excel tablosu oluşturur, bir Word raporu düzenler, bir görsel analiz eder; hepsi aynı oturumda.

Bu sayfa hangi dosya tiplerini **okuduğunu**, hangilerini **ürettiğini**, yükleme sınırlarını ve üretilen dosyaların nerede durduğunu anlatır.

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

Claude sohbette de, Cowork görevinde de yeni dosyalar oluşturabilir. Code execution ve dosya oluşturma Free dahil tüm planlarda vardır (Team ve Enterprise'ta yönetici kapatabilir). Biçim için skill'ler devreye girer:

| Format | Skill | Tipik Kullanım |
|---|---|---|
| **`.docx`** | `docx` | Word raporu, resmi yazışma, sözleşme taslağı |
| **`.xlsx`** | `xlsx` | Excel tablosu, analiz, finansal model, veri listesi |
| **`.pptx`** | `pptx` | PowerPoint sunumu, yönetim kuruluna rapor |
| **`.pdf`** | `pdf` | PDF raporu, broşür, belge birleştirme |
| **`.html`** | (skill yok, doğrudan) | Web sayfası, artifact |
| **`.md`** | (skill yok, doğrudan) | Markdown belge, CLAUDE.md güncellemesi |
| **`.py`, `.js`** | (skill yok, doğrudan) | Script, otomasyon kodu |
| **`.svg`, grafik** | (skill gerekmez) | Diyagram ve grafik; Claude resim üretmez, kod ya da vektör olarak çizer |

**Önemli:** Siz skill çağırmak zorunda değilsiniz. "Bir Word raporu oluştur" dediğinizde Claude `docx` skill'ini otomatik devreye alır. `/docx` yazarak elle çağırırsanız sonuç aynıdır, ama Claude'a niyetinizi baştan bildirmiş olursunuz; bu bazen daha tutarlı çıktı verir.

## Üretilen Dosyalar Nerede Durur?

Claude bir dosya ürettiğinde konuşmada bir bağlantı ya da önizleme olarak görürsünüz; açar, indirir, kendi klasörünüze kaydedersiniz. Önemli çıktıyı kendi klasörünüze (OneDrive, Drive ya da şirket paylaşımı) siz kaydetmeyi alışkanlık edinin.

Cowork'te yerel klasör bağlayarak çalışmak da mümkündür; klasör erişimi masaüstü uygulaması ister. 6 Ekim 2026'dan beri Pro ve Max'te yeni Cowork görevleri bulutta çalışır. Klasör bağlama, zamanlanmış işler ve bulut/yerel ayrımı için [Cowork Modu](/wiki/araclar/cowork-modu/) sayfasına bakın.

## Yükleme Sınırları

- **Sohbette:** dosya başına en çok 500 MB, sohbet başına en çok 20 dosya; PDF'de en çok 1000 sayfa (100 sayfaya kadar metin ve görsel, sonrası yalnız metin). Görselde mesaj başına 20 görsel, görsel başına 10 MB
- **Projelerde:** proje dosyası başına 30 MB; dosya sayısı sınırsız ama bilgi tabanı bağlama sığmalıdır. Sınıra yaklaşınca Pro, Max, Team ve Enterprise'ta RAG modu kapasiteyi 10 kata kadar artırır
- **Code execution'da:** dosya başına 30 MB (yükleme ve indirme)
- Çok büyük dosyalar (1.000 sayfayı aşan raporlar, gigabyte'lık veri setleri) bağlam penceresine sığmayabilir. 200K bağlamlı Claude Haiku 4.5 ile yüzlerce sayfalık belgelerde de aynı sorun çıkar
- Büyük dosyaları **parçalara bölün**: bölüm bölüm işletin
- Güncel modellerde (Fable 5.1, Opus 5.5, Sonnet 5.5) [1M token bağlam](/wiki/temeller/modeller/) bu kısıtı büyük ölçüde gevşetir
- Çok büyük veri için Claude bir Python betiği yazıp dosyayı her seferinde bir bölüm okuyarak işleyebilir ([Code Execution](/wiki/yetenekler/code-execution/))

## Türkiye'den Örnekler

Aşağıdaki şirketler kurgusaldır. Muhasebe programlarına resmi bir connector olmadığı için en pratik yol dışa aktarılan dosyadır; ayrıntı [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/) sayfasında.

- **Logo dökümü:** Anadolu Yapı Market'in muhasebesi cari hesap dökümünü Excel ya da CSV olarak alır, Claude'dan vadesi geçmiş bakiyeleri tedarikçiye göre gruplamasını ister
- **e-Fatura:** Ege Tekstil'in finans ekibi gelen fatura listesini Excel olarak, tek tek faturaları PDF olarak yükler; kategorileme ve mükerrer kayıt kontrolü yaptırır. e-Fatura XML (UBL) dosyalarını da yükleyebilirsiniz, ama büyük XML yerine liste halini deneyin ve önce 10-20 satırla test edin
- **Banka ekstresi:** CSV ya da Excel çıktısı yüklenir, Claude hareketleri sınıflandırır; sonucu kendi kayıtlarınızla karşılaştırın

Claude'un hazırladığı çıktı resmi belge değildir; resmi e-Fatura ve beyan çıktısını muhasebe programınız ve entegratörünüz üretir.

## İyi Çalışma Alışkanlıkları

- **Proje bazlı klasörler:** Cowork'e klasör bağlıyorsanız her büyük iş için ayrı klasör kullanın (`projeler/Karadeniz-teklif/`, `projeler/Q2-rapor/`). Claude klasör yapınızı görür ve mantıklı yere kaydeder.
- **Ay başı arşiv:** eski projeleri `arsiv/` klasörüne taşıyın, çalışma klasörü dağınık olmasın.
- **Önemli dosyaları versiyonla:** `teklif-v1.docx`, `teklif-v2.docx` gibi. İterasyon geçmişi görünür olur.
- **Yinelenen iş için Project:** aynı dosyalarla tekrar çalışıyorsanız dosyaları bir projeye koyun; her sohbette yeniden yüklemezsiniz.

## Gizlilik Notu

Yüklediğiniz ya da Claude'un işlediği dosyanın içeriği, işlenmek üzere Anthropic'e geçer. Cowork'te yerel klasörde çalışsanız da bu böyledir. Sonrası plana bağlıdır:

- **Team ve Enterprise planlarında** girdi ve çıktı varsayılan olarak eğitim için kullanılmaz
- **Free, Pro ve Max planlarında** tüketici gizlilik ayarına bağlıdır, hesabınızda kontrol edin

Kişisel veri içeren dosyalar (bordro, müşteri listesi, kimlik belgesi) için önce [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasına bakın.

## İlgili Sayfalar

- [Skills](/wiki/yetenekler/skills/): Dosya üreten skill'ler (`docx`, `xlsx`, `pptx`, `pdf`)
- [Artifacts](/wiki/yetenekler/artifacts/): Dosya olmayan interaktif çıktılar
- [Cowork Modu](/wiki/araclar/cowork-modu/): Klasör bağlama ve bulut görevleri
- [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/): Logo, e-Fatura ve banka dökümleri
- [Görsel ve Görüntü](/wiki/yetenekler/vision-image/): Görsel dosyalarla çalışmak
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Dosya gizliliği ve veri işleme

