---
title: "Code Execution — Claude Sandbox'ta Kod Çalıştırma"
description: "Claude'un Python sandbox ile gerçek hesaplama, veri analizi, grafik üretimi yapması. Excel alternatifi olarak iş profesyonelleri için."
tags:
  - yetenekler
  - kod
  - sandbox
  - veri
---

**Claude, sohbet içinde gerçek Python kodu yazar ve onu kendi sandbox'ında çalıştırır.** Bu, dil modeli "tahminine" değil **gerçek hesaplamaya** dayanır. Bir Excel açmadan veri analizi, grafik, hesap tablosu çıktısı — Claude'un içinden alabilirsiniz.

Bu sayfa code execution yeteneğinin ne olduğunu, hangi senaryolarda iş profesyoneli için değer ürettiğini ve [Skills](skills/) ile ilişkisini anlatır.

## "Code Execution" — İş Kullanıcısı İçin Ne Demek?

İlk bakışta "kod çalıştırma" geliştirici işi gibi gelir. Ama burada söz konusu olan: **Claude veri ile çalışırken arka planda Python kullanır, sonucu size hazır verir.** Sizin kod yazmanıza gerek yok; "Claude, bu Excel'i analiz et" deyip arkayı izlersiniz.

Pratik olarak Claude bunu yapar:

1. Verdiğiniz veriyi (CSV, Excel, JSON, PDF tablo) Python ile okur
2. Hesap, dönüşüm, görselleştirme yapar
3. Çıktıyı size sayı, tablo veya grafik olarak verir
4. Kodun kendisini de gösterir (ister okuyup anlarsınız, ister atlarsınız)

## Hangi Senaryolarda Değer Üretir?

### Veri Analizi

Bir CSV / Excel'iniz var, içinde 10.000 satır müşteri verisi. *"Şehir bazında ortalama sipariş tutarı, en yüksek 5 şehir"* sorusunu Python kodu yazmadan çözmek istersiniz. Claude bunu code execution ile yapar — gerçek hesaplama, halüsinasyon yok.

### Hesap Tablosu / Formül

Bütçe modeli, ROI hesabı, faiz/amortisman hesaplaması — bunların tümü matematik. Claude code execution ile **gerçek matematik** yapar; "tahmin yürütüp" yanlış sayı vermez.

[Finans departmanı](../departmanlar/finans/) sayfası bu tür hesaplara örnekler içerir.

### Grafik / Görselleştirme

Verinizi grafiksel olarak görmek istiyorsunuz. Bar chart, line chart, pie chart, scatter plot — Claude Python (matplotlib, plotly) ile bunları üretir, [Artifact](artifacts/) olarak gösterir.

### Veri Temizleme

Excel'inizde 5 farklı tarih formatı, eksik hücreler, duplikatlar var. Claude bunu temizler, normalize eder, çıktı olarak temiz veri verir.

### İstatistiksel Analiz

Korelasyon, regresyon, trend analizi — kullanıcı için soyut kavramlar Python kütüphaneleri (pandas, scikit-learn) ile gerçek hesaplamaya dönüşür.

### PDF Tablodan Veri Çıkarma

PDF'teki tablo Excel'e geçmiyor. Claude code execution ile PDF'i okur, tabloları ayıklar, CSV'ye çevirir.

## Code Execution vs LLM Tahmini

Önemli bir ayrım:

| | LLM Tahmini | Code Execution |
|---|---|---|
| Toplam: 100 + 250 + 175 = ? | "Yaklaşık 525" (bazen yanlış) | 525 (kesin) |
| 12.500 satırlık veride filtre | Halüsinasyon riski | Gerçek SQL/pandas filtre |
| Faiz formülü | Bazen formül yanlış | Doğru hesap |
| Tarih aralık filtresi | Hata payı | Kesin |
| 1000 müşteri ortalaması | Tahmini | Tam ortalama |

Önemli sayısal hesaplamalarda **code execution kullanması için Claude'a açıkça söyleyin:**

> *"Bu veriyi Python ile analiz et, code execution kullan. Tahmin yapma, gerçek hesapla."*

Claude basit hesaplarda bile bunu yapar; karmaşık olanlarda zorunlu.

## Hangi Diller / Kütüphaneler?

Şu an temelde **Python** desteklenir. Yaygın kütüphaneler:

- **pandas** — veri manipülasyonu, Excel/CSV okuma
- **numpy** — sayısal işlem
- **matplotlib / plotly** — grafik
- **scikit-learn** — temel makine öğrenmesi
- **openpyxl** — Excel dosya yazma (.xlsx)
- **PyPDF2 / pdfplumber** — PDF okuma
- **requests** — sınırlı web isteği

Bazı kütüphaneler sandbox'ta yoktur (örn. internet'e açık veritabanı bağlantısı). [Skills](skills/) bu eksikliği doldurur.

## Pratik Örnek: Excel Analizi

Bir e-ticaret şirketi 12 aylık satış verisi yüklüyor:

> *"Bu Excel'i analiz et: aylara göre satış, en çok satan kategori, müşteri başına ortalama sepet, sezon trendleri. Grafikler de yap."*

Claude code execution ile:

1. Excel'i pandas ile okur
2. Aylara göre groupby yapar → toplam satış
3. Kategori bazında pivot → en çok satan
4. Müşteri başına ortalama hesaplar
5. matplotlib ile 3 ayrı grafik üretir
6. Çıktıyı [Artifact](artifacts/) olarak gösterir
7. Kodu da paylaşır (isteyen okur, isteyen atlar)

5 dakikada bir analist günlük iş çıkar.

[Perakende ve E-ticaret](../departmanlar/perakende-eticaret/) sayfasında bu tür analizlerin yaygın senaryoları var.

## Code Execution + Skills

İki yetenek birlikte güç katlar:

- **Code execution** → veri işleme, hesaplama, görselleştirme
- **[Skills](skills/)** → çıktıyı .docx / .xlsx / .pptx dosya olarak üretme

Senaryo:

> *"Bu veriyi analiz et (code execution), sonra yöneticime sunulacak bir Excel raporu yap (skills)."*

Claude:
1. Code execution ile veri analizi
2. Skills ile sonuçları Excel'e yazıyor
3. Sonuç olarak indirilebilir .xlsx dosyası

[Skills](skills/) ve [Dosya İşleme](file-handling/) sayfaları bu boyutu detaylandırır.

## Sınırlar

### Veri Boyutu

Sandbox'a yüklenebilen dosya boyutu sınırlıdır (genelde 30-100 MB civarı, plana göre). Çok büyük veri için ön-örnekleme veya özet veri ile çalışın.

### Hız

Çok karmaşık hesap (örn. milyonlarca satır, ML modeli eğitimi) yavaş veya zaman aşımına uğrar. Bu durumlar için yerel Excel veya başka araç daha pratik.

### Internet Erişimi

Sandbox'tan internet erişimi sınırlıdır (web arama Claude'un kendisi tarafından yapılır, code'un içinden değil). Dış API'ye bağlanan kod sınırlı çalışır.

### Kalıcılık Yok

Sandbox her sohbette sıfırdan başlar. Bir sohbette ürettiğiniz çıktıyı Claude bir sonraki sohbette **bilmez** — dosyayı kaydetmek, sonra yeni sohbete yüklemek gerekir.

[Projects](../araclar/projects/) ile kısmen çözülür: bir proje altında dosyalar saklanır, her yeni sohbette erişilebilir.

## Plan Gereksinimi

Code execution **çoğu plan**'da mevcut, ancak ağır kullanım sınıra çabuk dayanır:

- **Free / Pro:** Aktif ama günlük kullanım sınırlı
- **Max 5x / Max 20x:** Daha geniş limit
- **Team / Enterprise:** Organizasyon bazlı kullanım

[Planlar](../temeller/planlar/) sayfası detay verir.

## Güvenlik / KVKK

Code execution için sandbox'a yüklenen veri:

- Anthropic'in altyapısında işlenir, varsayılan olarak eğitim için kullanılmaz
- Sohbet bitince sandbox sıfırlanır
- KVKK çerçevesinde "veri işleyen" akışı içinde [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) sayfasında anlatıldığı gibi

**Kişisel veri içeren veri yüklerken:**

- Müşteri ad-soyad, TC, telefon → anonimleştir
- Hassas finansal sırlar → yüklemeyin
- [Şirket içi politika](../temeller/sirket-ici-politika/)'nızla uyumlu olun

## Kullanım Tavsiyeleri

**Açıkça isteyin.** Claude bazen "tahminle" cevaplamaya çalışır. "Bunu Python ile hesapla, gerçek sayı ver" diye netleştirin.

**Veriyi ufak başlatın.** Önce 100 satırlık bir test verisiyle prompt'u doğrulayın, sonra tüm veriyi yükleyin.

**Çıktıyı kontrol edin.** Code execution gerçek hesap yapar ama formülü yanlış kurabilir. Sonuçları gözden geçirin (özellikle finansal hesapta).

**Kodu okumaya zorlamayın.** Çıktıyı alın, kodu yorum yapmadan kullanın — koda hâkim değilseniz Claude'un kalitesine güvenin (ya da bir uzmana doğrulatın).

## Örnek Komutlar

Sıkça kullanılabilecek prompt başlangıçları:

> *"Şu CSV'yi pandas ile yükle, ilk 20 satırı göster."*
>
> *"Bu Excel'de yıllık satışları aylık bazda grupla, line chart yap."*
>
> *"Bu PDF'in 5. sayfasındaki tablonun verilerini CSV olarak çıkar."*
>
> *"Şu 12 ayın gelir verisinden trend analizi yap, Q1-Q4 özet."*
>
> *"Bu liste tekrar eden satırlar var, dedup yap, temiz versiyonu Excel olarak ver."*

## İlgili Sayfalar

- [Skills](skills/) — .xlsx, .docx, .pptx üretme
- [Artifacts](artifacts/) — Görselleştirme çıktıları
- [Dosya İşleme](file-handling/) — Excel, CSV, PDF yükleme
- [Projects](../araclar/projects/) — Veri kalıcılığı
- [Cowork Modu](../araclar/cowork-modu/) — Code execution Cowork ile birleşince
- [Planlar](../temeller/planlar/) — Hangi planda hangi sınır
- [Finans departmanı](../departmanlar/finans/) — Finans için pratik kullanım
- [Operasyon departmanı](../departmanlar/operasyon/) — KPI analizi
- [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) — Veri akışı

