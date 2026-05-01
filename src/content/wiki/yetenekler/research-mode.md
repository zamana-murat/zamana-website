---
title: Research Mode — Derin Araştırma ve Uzun Soluklu Analiz
description: "Claude'un kapsamlı araştırma modunda nasıl çalıştığı. Çok kaynaklı sentez, detaylı raporlar, Dispatch ile birleşim."
tags:
  - yetenekler
  - arastirma
  - dispatch
---

**Bazı sorular tek bir web aramasıyla cevaplanmaz.** "Türkiye'de organik gıda pazarının 5 yıllık görünümü", "rakip 5 firma için detaylı kıyaslama", "yeni mevzuatın sektör etkisi" — bunlar saatler süren araştırma istiyor. Claude'un research mode'u tam buna hizmet eder.

Bu sayfa derin araştırma yetenekçesinin ne olduğunu, [Dispatch](../araclar/dispatch/) ile ilişkisini ve hangi senaryolarda iş profesyoneline değer ürettiğini anlatır.

## Research Mode Nedir?

Tek bir web araması ile karşılaştırın:

| | Hızlı Web Arama | Research Mode |
|---|---|---|
| Süre | 10-30 saniye | 5-30 dakika |
| Kaynak sayısı | 5-10 | 30-100+ |
| Çıktı | Birkaç paragraf | Yapılandırılmış uzun rapor |
| Kullanım | Hızlı bilgi | Derin sentez, karar destek |
| Tetikleme | Otomatik | Bilinçli istek |

Research mode "bir arkadaşına 'şunu araştırıp bana sun' demek" gibi. Claude:

1. Soruyu alt sorulara böler
2. Her alt soru için birden çok kaynak tarar
3. Çelişen bilgileri farkeder, doğruluk değerlendirmesi yapar
4. Yapılandırılmış bir rapor olarak sunar
5. Kaynakları ekte verir

## Hangi Senaryolarda Değer?

### Pazar Araştırması

> *"Türkiye'de B2B SaaS pazarının 2026 görünümü: pazar büyüklüğü, ana oyuncular, segment kırılımı, büyüme trendleri, yatırımcı ilgisi."*

Bir hafta süren analist işi. Research mode bunu 30-45 dakikada bitirir, bir uzmana göre kabaca taslak çıkarır.

### Rakip Analizi

> *"5 ana rakibimiz: ürün özellikleri, fiyatlandırma, müşteri profili, pazarlama yaklaşımı, son 12 aydaki haberler. Bizimle kıyaslama tablosu."*

[Pazarlama departmanı](../departmanlar/pazarlama/) ve [Satış departmanı](../departmanlar/satis/) için sürekli ihtiyaç olan iş.

### Mevzuat / Yasal Araştırma

> *"Yeni KVKK düzenlemesi (2026): değişen maddeler, sektörümüze etkisi, uygulama tarihleri, geçiş gereklilikleri."*

[Hukuk departmanı](../departmanlar/hukuk/) tarafında zaman tasarrufu büyük.

### Teknoloji Değerlendirmesi

> *"3 farklı CRM çözümünün kıyaslaması: SAP, Salesforce, MS Dynamics. Maliyet, özellik, Türkiye lokalizasyonu, müşteri yorumları."*

[BT departmanı](../departmanlar/bilgi-teknolojileri/) için satın alma kararı destek.

### Müşteri / İş Ortağı Araştırması

> *"X holding hakkında detaylı araştırma: ana iş kolları, son 3 yıl finansalları, yönetim, son haberler, satışta dikkat edilmesi gereken hassasiyetler."*

Üst düzey toplantı öncesi brief.

### Sektör Trend Raporu

> *"2026 başında lojistik sektörü: küresel ve Türkiye trendleri, teknoloji yenilikleri, fiyat baskıları, yeni iş modelleri."*

Stratejik planlama girdisi.

## Research Mode Nasıl Tetiklenir?

### 1. Açıkça İsteme

> *"Detaylı araştırma yap. Birden çok kaynak çakıştır, çelişkileri belirt, kaynak listesi ver. Yapılandırılmış rapor formatında."*

Claude bunu uzun soluklu bir araştırma olarak yorumlar.

### 2. [Dispatch](../araclar/dispatch/) ile

Daha uzun süreli araştırmalar için Dispatch tarafına gönderirsiniz. Bir dosyaya araştırma görevi tanımlarsınız, arka planda çalışır, bittiğinde size sonucu gelir. 30 dakika - birkaç saat sürebilir.

### 3. Project Knowledge ile Birleşik

Araştırılacak konunun **iç dokümanlarınız** kapsamı varsa (örn. eski raporlar, satış verisi), bunları [Projects](../araclar/projects/) altında knowledge olarak yükleyip "iç dokümanlarımla birlikte web araştırmasını birleştir" diyebilirsiniz.

## Çıktı Formatı

Tipik research mode çıktısı:

```markdown
# [Konu] — Araştırma Raporu

## Yönetici Özeti
[1-2 paragraf, en kritik bulgular]

## Metodoloji
- Tarih aralığı: ...
- Kaynak sayısı: ...
- Sınırlamalar: ...

## 1. [Alt Konu 1]
[Detay paragraflar]

## 2. [Alt Konu 2]
[Detay paragraflar]

...

## Çelişen Bulgular
[Kaynaklar arası anlaşmazlıklar, yorumlar]

## Sonuç ve Öneriler
[Veriden çıkan tavsiyeler]

## Kaynaklar
1. [Link] — [Tip] — [Tarih]
2. ...
```

[Çıktı Formatı](../prompting/cikti-formati/) sayfasında nasıl şekillendirileceği detaylanır.

## Pratik İpuçları

### 1. Soruyu Spesifik Sor

❌ *"Pazar araştırması yap."*
↓ Çok geniş, sığ çıktı

✅ *"Türkiye'de yenilenebilir enerji depolama (battery storage) pazarının 2026 görünümü. Spesifik olarak: pazar büyüklüğü TL bazında, ana 5 oyuncu, mevzuat gelişmeleri, yatırım trendleri, önümüzdeki 24 ay tahmini."*

### 2. Tarih Aralığı Belirt

> *"Son 12 ay verilerine odaklan, 2025 öncesi sadece referans için."*

Aksi halde Claude eski, eskimiş verileri ön plana çıkarabilir.

### 3. Coğrafya Belirt

> *"Türkiye-spesifik analiz. Global örnekler sadece kıyaslama için."*

Türkiye odaklı bir araştırma istiyorsanız bunu söylemezseniz Claude global bakış açısı verir.

### 4. Çıktı Uzunluğu Belirt

> *"15-20 sayfa rapor"* veya *"4 sayfa yönetici özet"*

Belirtmezseniz Claude orta uzunluk verir, sizin için fazla veya az olabilir.

### 5. Kaynak Önceliği

> *"Resmî kaynaklar (TÜİK, kamu kuruluşları) > sektör raporları > basın > blog hiyerarşisinde değerlendir."*

Kaynak kalitesi araştırma kalitesini belirler.

### 6. Çelişkileri Sor

> *"Kaynaklar arası çelişki varsa açıkça belirt, hangi kaynağın daha güvenilir olduğunu söyle."*

Bu Claude'u körü körüne sentez yapmaktan çıkarır.

[Web Arama](../araclar/web-arama/) sayfasında araştırma kalitesi arttırma teknikleri var.

## Kalite Kontrol

Research mode çıktısı yine de doğrulama gerektirir:

- **Sayısal veriler:** Önemli olanları kaynağa gidip kontrol edin
- **Mevzuat referansları:** Yürürlük tarihini doğrulayın (resmî kaynak)
- **Şirket finansalları:** Bilanço dönemi ve para birimi tutarlı mı
- **Çelişen iddialar:** Claude çelişkiyi belirtmiş mi, yoksa birini saklayıp diğerini almış mı

[Sınırlamalar](../temeller/sinirlamalar/) sayfası halüsinasyon ve doğrulama konusunu derinleştirir.

## Maliyet Yönü — Token / Bağlam

Research mode uzun bağlam tüketir. Pro / Max planı kullanıcıları:

- Pro: günlük yoğun kullanımda kotayı çabuk doldurur
- Max 5x / Max 20x: rahatça kullanılır
- Enterprise: organizasyon havuzu paylaşılır

[Planlar](../temeller/planlar/) sayfası detaylar.

## Birleştirilmiş Senaryo: Research + Skills + Dispatch

Karmaşık iş senaryosu örneği:

1. **Dispatch** ile uzun araştırma görevi başlatılır (45 dk arka plan)
2. Sonuç gelir, **research mode** raporu hazır
3. **[Skills](skills/)** ile rapor .docx ve .pptx olarak dışa aktarılır
4. **[Connectors](../araclar/connectors/)** ile rapor Drive'a yüklenir
5. Sonucu yöneticilerle paylaşırsınız

Bu birleşik akış [Cowork modu](../araclar/cowork-modu/) içinde tek prompt'la kurulabilir.

## Research Mode'a Karar Verirken

Araştırma karşılığını göz önünde tutun:

- **15 dk Claude araştırması** ≈ 2-4 saat manual web tarama
- **30 dk Claude araştırması** ≈ yarım gün analist işi
- **60 dk araştırma + Skills + grafikler** ≈ 1-2 gün danışmanlık raporu

Müşteri toplantısı, yönetim raporu, stratejik karar — geleneksel "süresi var" işlerde Claude inanılmaz değer çıkarır.

## Sınırlar

**Henüz şu işleri yapamaz:**

- Ücretli akademik dergileri (sadece açık kaynaklar)
- Şirket içi gizli araştırmalar (kaynak yok)
- Çok özel uzmanlık gerektiren niş alanlar (örn. roket bilimi nüansları)
- Birinci el saha araştırması (anket, mülakat)

Bu durumlar için **AI başlangıç noktası** + **insan derinleştirme** birleşimi gerekir.

## İlgili Sayfalar

- [Web Arama](../araclar/web-arama/) — Hızlı arama tarafı
- [Dispatch](../araclar/dispatch/) — Uzun süreli arka plan görevi
- [Cowork Modu](../araclar/cowork-modu/) — Research + Skills + Connectors birleşimi
- [Skills](skills/) — Çıktıyı dosya olarak dışa aktarma
- [Projects](../araclar/projects/) — İç dokümanlarla birleşik araştırma
- [Çıktı Formatı](../prompting/cikti-formati/) — Rapor şekillendirme
- [Sınırlamalar](../temeller/sinirlamalar/) — Halüsinasyon riski
- [Hukuk Departmanı](../departmanlar/hukuk/) — Mevzuat araştırması
- [Pazarlama Departmanı](../departmanlar/pazarlama/) — Pazar araştırması

