---
title: Görsel ve Görüntü — Claude Gözleriyle Görüyor
description: Claude görselleri OCR düzeyinde değil, anlamsal düzeyde okur. Belge, grafik, fotoğraf, ekran görüntüsü, diyagram — hepsini analiz eder.
tags:
  - yetenekler
  - gorsel
  - vision
  - ocr
  - gorsel-analiz
---

Claude görselleri **görür ve akıl yürütür** — metinlerle yaptığı düşünceyle aynı seviyede. Bu basit OCR (metin tanıma) değil, basit görsel tanıma değil. **Görsel muhakemedir**: bağlamı, ilişkileri ve anlamı görsellerden çıkarır.

Bu sayfa Claude'un görsellerle ne yapabildiğini ve bir iş profesyonelinin bunu nasıl kullandığını anlatır.

## Claude Neleri Görür ve Analiz Eder?

### Belgeler ve Görsellerdeki Metin

- Fotoğraf, tarama ve ekran görüntülerinden metin okur ve çıkarır (OCR kalitesine eşdeğer veya daha iyi)
- El yazısı notları işler (orta düzey doğruluk)
- Standart olmayan düzenlerdeki metinleri okur: ekrandaki sözleşmeler, yazı tahtası fotoğrafları, fişler, kartvizitler
- Belge görsellerinden tablolar, şekiller ve yapılandırılmış veri çıkarır

### Grafikler ve Veri Görselleri

- Çubuk grafik, çizgi grafik, pasta grafik, scatter plot okur ve yorumlar
- Altta veri olmadığı durumlarda grafiklerden veri noktalarını tahmini olarak çıkarır
- Görsel veriden trendler, anomaliler ve ana çıkarımları tarif eder
- Tek analizde birden fazla grafiği karşılaştırır (tek turda 20 görsele kadar)

### Fotoğraflar ve Gerçek Dünya Görselleri

- Sahne içeriğini bağlamla yorumlar
- Nesneleri, insanları (genel olarak tarif eder, isimle tanımlamaz), ortamları tespit eder
- Ürün etiketlerini, ambalajları, tabelaları okur
- Kalite kontrol amacıyla ürün fotoğraflarını analiz eder

### Teknik Diyagramlar

- UML diyagramları, akış şemaları, mimari çizimleri okur ve yorumlar
- Süreç diyagramlarını ve organizasyon şemalarını anlar
- Teknik şemaları analiz eder (CLAUDE.md'de alan bağlamı varsa)
- Harita, kat planı, yerleşim diyagramlarından bilgi çıkarır

### Ekran Görüntüleri ve UI Öğeleri

- Uygulama ekran görüntülerini okur ve yorumlar
- UI öğelerini, form alanlarını, düğmeleri, menüleri tespit eder
- Ekranda ne olduğunu tarif eder — [Computer Use](computer-use/) için kritik
- İki ekran görüntüsünü karşılaştırarak değişiklikleri belirler

## Teknik Özellikler

| Özellik | Değer |
|---|---|
| Desteklenen formatlar | JPEG, PNG, GIF, WebP |
| Maksimum tur başı görsel (claude.ai) | 20 |
| Maksimum API isteği başı | 100 |
| Maksimum çözünürlük (Opus 4.7) | 2.576 piksel uzun kenarda (Claude'un desteklediği en yüksek) |
| Computer Use için optimum | 1080p (performans/maliyet dengesi) |

## Claude Görsellerle Ne Yapamaz?

- **Raster görsel üretmez** (fotoğraf, illüstrasyon) — DALL-E veya Midjourney işlevi yok
- **Fotoğraftan belirli isimli kişileri tanımlamaz** (gizlilik koruması)
- **Çok düşük çözünürlüklü veya kötü bozulmuş görsellerde mükemmel doğruluk beklenmesin**

**Ne üretebilir:** SVG grafikler, React görsel bileşenler, HTML görsel düzenler, Mermaid diyagramlar — **programatik görseller**, raster değil. [Artifacts](artifacts/) sayfasında detayları var.

## Departmana Göre Kullanım Senaryoları

| Departman | Görsel Kullanım Senaryosu |
|---|---|
| **Operasyon** | Teslim edilen ürün fotoğrafı → kalite kontrol raporu; hasar fotoğrafı → NCR analizi |
| **Finans** | Fiş / fatura fotoğrafı → yapılandırılmış gider verisi; rapor ekran görüntüsü → anlatı |
| **İnsan Kaynakları** | Taranmış CV → yapılandırılmış aday profili; tahta organizasyon şeması → metin hali |
| **Hukuk** | Sözleşme sayfası fotoğrafı → madde çıkarımı; taranmış belgede imza / damga kontrolü |
| **İdari İşler** | Kartvizit fotoğrafı → iletişim kaydı; tahta toplantı notları → yapılandırılmış minute |
| **İhracat / Ticaret** | Mal, ambalaj, işaret fotoğrafları → sevkiyat inceleme notları; CIS belgeleri |
| **Müşteri Hizmetleri** | Müşterinin gönderdiği ürün fotoğrafı → sorun sınıflandırması ve yanıt |
| **Pazarlama** | Rakip reklam ekran görüntüsü → analiz; etkinlik fotoğrafı → sosyal medya caption |

## Pratik Örnekler

### Kartvizit → CRM Kaydı

Konferansta 20 kartvizit aldınız. Fotoğrafları tek oturumda Claude'a gönderirsiniz:

> *"Bu 20 kartvizitten her birini CRM kaydı formatında yapılandır: Ad, Şirket, Pozisyon, E-posta, Telefon, Web. Excel tablosu olarak ver."*

Saatlerce sürecek elle yazma işi birkaç dakikaya iner.

### Tahta Fotoğrafı → Toplantı Notu

Brainstorm toplantısı bitti, tahta dolu. Fotoğrafını çeker Claude'a gönderirsiniz:

> *"Bu tahta yazısını yapılandırılmış toplantı notuna çevir: ana başlıklar, alt maddeler, eylem kalemleri ayrı bölümde."*

Toplantıdan çıkmadan notlar hazırdır.

### Fiş Fotoğrafları → Gider Raporu

20 fiş, farklı biçim ve dillerde. Hepsinin fotoğrafı:

> *"Bu fişlerden bir gider raporu çıkar. Her fiş için tarih, satıcı, tutar, KDV, kategori. Excel formatında."*

Mali müşavire gönderilecek dosya hazır.

### Rakip Kampanyası Ekran Görüntüsü → Analiz

Instagram'da bir rakip kampanyası görmüşsünüz. Ekran görüntüsünü paylaşırsınız:

> *"Bu kampanyanın iletişim stratejisini analiz et: ana mesaj, hedef kitle, ton, çağrı, görsel yaklaşım. Bize nasıl uygulanır?"*

Pazarlama toplantısına hazır bir brief çıkar.

## Zamana'nın Öğretme Noktası

Çalışanların çoğu **Claude'a fotoğraf verebileceğini bilmez**. "Claude metin aracı" algısı hâkim.

Kartvizit → CRM girişi tek başına bir satış ekibi için "ya!" anıdır. Tahta → toplantı minutu bir yönetici asistanı için "ya!" anıdır.

Zamana'nın eğitim sorusu:

> **"Bu bilgi elinde bir görselde mi var? Claude'a ver."**

O refleks kurulduğunda çalışan zamanını haftada saatlerce kazanır.

## İlgili Sayfalar

- [Dosya İşleme](file-handling/) — Görsellerin de bir dosya olduğu gerçeği
- [Computer Use](computer-use/) — Ekran görüntülerinin en gelişmiş kullanımı
- [Artifacts](artifacts/) — Claude'un ürettiği programatik görseller
- [Departmanlar](../departmanlar/) — Her departman için özel kullanım örnekleri

