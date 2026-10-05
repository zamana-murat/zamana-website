---
title: "Code Execution: Claude Sandbox'ta Kod Çalıştırma"
description: "Claude'un Python sandbox ile gerçek hesaplama, veri analizi, grafik üretimi yapması. Excel alternatifi olarak iş profesyonelleri için."
tags:
  - yetenekler
  - kod
  - sandbox
  - veri
lastUpdated: "2026-10-05"
---

**Claude, sohbet içinde gerçek Python kodu yazar ve onu kendi sandbox'ında çalıştırır.** Bu, dil modeli "tahminine" değil **gerçek hesaplamaya** dayanır. Excel açmadan veri analizi, grafik ve hesap tablosu çıktısını Claude'un içinden alabilirsiniz.

Bu sayfa code execution yeteneğinin ne olduğunu, hangi senaryolarda iş profesyoneli için değer ürettiğini ve [Skills](/wiki/yetenekler/skills/) ile ilişkisini anlatır.

## "Code Execution": İş Kullanıcısı İçin Ne Demek?

İlk bakışta "kod çalıştırma" geliştirici işi gibi gelir. Ama burada söz konusu olan: **Claude veri ile çalışırken arka planda Python kullanır, sonucu size hazır verir.** Sizin kod yazmanıza gerek yok; "Claude, bu Excel'i analiz et" deyip arkayı izlersiniz.

Pratik olarak Claude bunu yapar:

1. Verdiğiniz veriyi (CSV, Excel, JSON, PDF tablo) Python ile okur
2. Hesap, dönüşüm, görselleştirme yapar
3. Çıktıyı size sayı, tablo veya grafik olarak verir
4. Kodun kendisini de gösterir (ister okuyup anlarsınız, ister atlarsınız)

## Hangi Senaryolarda Değer Üretir?

### Veri Analizi

Bir CSV / Excel'iniz var, içinde 10.000 satır müşteri verisi. *"Şehir bazında ortalama sipariş tutarı, en yüksek 5 şehir"* sorusunu Python kodu yazmadan çözmek istersiniz. Claude bunu code execution ile yapar: gerçek hesaplama, tahmin yok.

### Hesap Tablosu / Formül

Bütçe modeli, ROI hesabı, faiz ve amortisman hesaplaması gibi işlerin tümü matematiktir. Claude code execution ile **gerçek matematik** yapar; "tahmin yürütüp" yanlış sayı vermez.

[Finans departmanı](/wiki/departmanlar/finans/) sayfası bu tür hesaplara örnekler içerir.

### Grafik / Görselleştirme

Verinizi grafiksel olarak görmek istiyorsunuz. Bar chart, line chart, pie chart veya scatter plot isteyebilirsiniz. Claude bunları Python (matplotlib, plotly) ile üretir ve [Artifact](/wiki/yetenekler/artifacts/) olarak gösterir.

### Veri Temizleme

Excel'inizde 5 farklı tarih formatı, eksik hücreler, duplikatlar var. Claude bunu temizler, normalize eder, çıktı olarak temiz veri verir.

### İstatistiksel Analiz

Korelasyon, regresyon ve trend analizi gibi soyut kavramlar Python kütüphaneleri (pandas, scikit-learn) ile gerçek hesaplamaya dönüşür.

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

Claude çoğu zaman kodu kendiliğinden çalıştırır; yine de önemli hesaplarda bunu açıkça istemek güvenlidir.

## Hangi Diller / Kütüphaneler?

Şu an temelde **Python** desteklenir. Yaygın kütüphaneler:

- **pandas**: veri manipülasyonu, Excel/CSV okuma
- **numpy**: sayısal işlem
- **matplotlib / plotly**: grafik
- **scikit-learn**: temel makine öğrenmesi
- **openpyxl**: Excel dosya yazma (.xlsx)
- **PyPDF2 / pdfplumber**: PDF okuma
- **requests**: sınırlı web isteği

Sandbox'ta her kütüphane ve dış bağlantı yoktur (örneğin internetteki bir veritabanına doğrudan bağlanamazsınız). Dosya üretimi gibi eksikleri [Skills](/wiki/yetenekler/skills/) tamamlar.

## Pratik Örnek: Excel Analizi

Bir e-ticaret şirketi 12 aylık satış verisi yüklüyor:

> *"Bu Excel'i analiz et: aylara göre satış, en çok satan kategori, müşteri başına ortalama sepet, sezon trendleri. Grafikler de yap."*

Claude code execution ile:

1. Excel'i pandas ile okur
2. Aylara göre groupby yapar → toplam satış
3. Kategori bazında pivot → en çok satan
4. Müşteri başına ortalama hesaplar
5. matplotlib ile 3 ayrı grafik üretir
6. Çıktıyı [Artifact](/wiki/yetenekler/artifacts/) olarak gösterir
7. Kodu da paylaşır (isteyen okur, isteyen atlar)

5 dakikada bir analist günlük iş çıkar.

[Perakende ve E-ticaret](/wiki/departmanlar/perakende-eticaret/) sayfasında bu tür analizlerin yaygın senaryoları var.

## Code Execution + Skills

İki yetenek birlikte güç katlar:

- **Code execution** → veri işleme, hesaplama, görselleştirme
- **[Skills](/wiki/yetenekler/skills/)** → çıktıyı .docx / .xlsx / .pptx dosya olarak üretme

Senaryo:

> *"Bu veriyi analiz et (code execution), sonra yöneticime sunulacak bir Excel raporu yap (skills)."*

Claude:
1. Code execution ile veri analizi
2. Skills ile sonuçları Excel'e yazıyor
3. Sonuç olarak indirilebilir .xlsx dosyası

[Skills](/wiki/yetenekler/skills/) ve [Dosya İşleme](/wiki/yetenekler/file-handling/) sayfaları bu boyutu detaylandırır.

## Sınırlar

### Veri Boyutu

Sandbox'a yüklenen ve indirilen dosyalar için sınır dosya başına 30 MB'tır. Çok büyük veri için ön-örnekleme veya özet veri ile çalışın.

### Hız

Çok karmaşık hesap (örn. milyonlarca satır, ML modeli eğitimi) yavaş veya zaman aşımına uğrar. Bu durumlar için yerel Excel veya başka araç daha pratik.

### Internet Erişimi

Sandbox'tan internet erişimi sınırlıdır (web arama Claude'un kendisi tarafından yapılır, code'un içinden değil). Dış API'ye bağlanan kod sınırlı çalışır.

### Kalıcılık Yok

Sandbox her sohbette sıfırdan başlar. Bir sohbette ürettiğiniz çıktıyı Claude bir sonraki sohbette **bilmez**; dosyayı kaydedip yeni sohbete yüklemeniz gerekir.

[Projects](/wiki/araclar/projects/) ile kısmen çözülür: bir proje altında dosyalar saklanır, her yeni sohbette erişilebilir.

## Plan Gereksinimi

Code execution tüm planlarda vardır ve varsayılan olarak açıktır; ağır kullanım plan limitine çabuk dayanır:

- **Free / Pro:** Günlük kullanım sınırlıdır
- **Max 5x / Max 20x:** Daha geniş limit
- **Team / Enterprise:** Yönetici kapatabilir; dış ağ erişimi varsayılan olarak kapalıdır

[Planlar](/wiki/temeller/planlar/) sayfası detay verir.

## Güvenlik / KVKK

Code execution için sandbox'a yüklenen veri:

- Anthropic'in altyapısında işlenir. Team ve Enterprise planlarında varsayılan olarak eğitim için kullanılmaz; Free, Pro ve Max'te bu, hesabınızdaki gizlilik ayarına (Privacy Settings) bağlıdır
- KVKK çerçevesinde "veri işleyen" akışı içinde [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasında anlatıldığı gibi

**Kişisel veri içeren veri yüklerken:**

- Müşteri ad-soyad, TC, telefon → anonimleştir
- Hassas finansal sırlar → yüklemeyin
- [Şirket içi politika](/wiki/temeller/sirket-ici-politika/)'nızla uyumlu olun

## Kullanım Tavsiyeleri

**Açıkça isteyin.** Claude bazen "tahminle" cevaplamaya çalışır. "Bunu Python ile hesapla, gerçek sayı ver" diye netleştirin.

**Veriyi ufak başlatın.** Önce 100 satırlık bir test verisiyle prompt'u doğrulayın, sonra tüm veriyi yükleyin.

**Çıktıyı kontrol edin.** Code execution gerçek hesap yapar ama formülü yanlış kurabilir. Sonuçları gözden geçirin (özellikle finansal hesapta).

**Kodu okumak zorunda değilsiniz.** Koda hâkim değilseniz çıktıyı alın ve sonucun mantığını kontrol edin; önemli bir hesapta bir uzmana doğrulatın.

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

- [Skills](/wiki/yetenekler/skills/): .xlsx, .docx, .pptx üretme
- [Artifacts](/wiki/yetenekler/artifacts/): Görselleştirme çıktıları
- [Dosya İşleme](/wiki/yetenekler/file-handling/): Excel, CSV, PDF yükleme
- [Projects](/wiki/araclar/projects/): Veri kalıcılığı
- [Cowork Modu](/wiki/araclar/cowork-modu/): Code execution Cowork ile birleşince
- [Planlar](/wiki/temeller/planlar/): Hangi planda hangi sınır
- [Finans departmanı](/wiki/departmanlar/finans/): Finans için pratik kullanım
- [Operasyon departmanı](/wiki/departmanlar/operasyon/): KPI analizi
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Veri akışı

