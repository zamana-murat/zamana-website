---
title: "Üretim ve İmalat: Claude Uygulamaları"
seoTitle: "Üretimde Claude: Vardiya Raporu, 8D, OEE Analizi ve ISO Belgeleri"
description: "Üretim ve imalat işletmeleri için Claude: vardiya raporları, kalite belgeleri, OEE analizi, fire azaltma, ISO uyumu ve tedarikçi yönetimi."
tags:
  - departmanlar
  - uretim
  - imalat
  - oee
  - kalite
lastUpdated: "2026-10-06"
---

Türkiye sanayisi geniş ve çeşitli: gıda, tekstil, otomotiv yan sanayi, makine, metal, plastik. Üretim hattı her gün veri üretir, ama bu verinin **büyük kısmı hiç okunmaz**; yönetim raporuna dönüşmediği için kaybolur. Claude, üretim verisini iş kararına çevirmeye ve vardiyalar arası iletişimi hızlandırmaya yardım eder.

## Claude'un Çözdüğü Temel Sıkıntılar

- Vardiya raporları yazılırken aynı şeyler tekrar yazılıyor, kalite tutarsız
- KPI'lar Excel'de duruyor, kimse aylık özetini çıkaramıyor
- ISO 9001 / 14001 / 45001 belgeleri eskiyor, denetim öncesi panik
- Müşteri kalite şikayetlerine yanıt yavaş ve genelleme yapıyor
- Tedarikçi RFQ'ları her seferinde sıfırdan yazılıyor
- Üretim sorunlarının kök neden analizi birkaç dakikada bitirilip konu kapatılıyor

## Bölüm 1: Vardiya ve Üretim Raporları

### Vardiya Sonu Raporu

Vardiya amiri vardiya sonunda rapor yazmak için genellikle 30-60 dakika harcıyor. Claude ile bu süre çoğu zaman 5-10 dakikaya iner (Zamana eğitim materyali). Çalışan ham notlarını, KPI sayılarını ve olayları yapıştırır, Claude yapılandırılmış rapor çıkarır:

- Vardiya özeti
- KPI tablosu (üretim, fire, OEE, mola süreleri)
- Vardiya içi olaylar ve aksiyon
- Sonraki vardiyaya devir notları

[Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/)'nde operasyon şablonu var.

### Haftalık / Aylık Üretim Raporu

Vardiya raporlarını birleştirip yönetim için aylık rapor üretir: trend analizi, anomali işaretleme, **3 ana içgörü ve 3 öneri** formatında.

### OEE / Verim Analizi

OEE (Overall Equipment Effectiveness) verilerini Claude analiz eder ve **kayıp kategorilerine** göre kırılım yapar. [Code Execution](/wiki/yetenekler/code-execution/) ile hesaplar gerçekten çalıştırılır, tahmin yürütülmez. Yine de sonuçları kendi raporlarınızla karşılaştırın.

Hat karşılaştırma: birden çok hattın verisini birlikte verirseniz Claude hatlar arası farkı çıkarır ve hangi hattın uygulamasının diğerlerine örnek olabileceğini önerir. Fark nedenini hat sorumlusuyla doğrulayın; veri tanımları (duruş, fire) hatlar arasında aynı değilse karşılaştırma yanıltır. Üretim verisi Logo, Mikro gibi bir programdan geliyorsa dışa aktarma yolları için [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/) sayfasına bakın.

## Bölüm 2: Kalite ve Belgelendirme

### ISO Belge Yönetimi

ISO 9001 / 14001 / 45001 / IATF 16949 belgelerini **güncel** tutmak zordur. Claude:

- Mevcut prosedürleri okur, eski, çelişkili veya eksik bölümleri tespit eder
- Yeni prosedür yazımında standart format uygular
- Denetim öncesi gözden geçirme listesi çıkarır
- Düzeltici / önleyici faaliyet (DÖF/DİF) raporu hazırlar

### Kalite Şikayet Yanıtı

Müşteriden kalite şikayeti geldiğinde yanıt taslağı Claude ile yaklaşık bir saat içinde hazırlanabilir (Zamana eğitim materyali): **olgusal**, **savunmacı olmayan**, **önlemi somut** bir taslak. [Müşteri hizmetleri](/wiki/departmanlar/musteri-hizmetleri/) sayfası genel şikayet yönetimini detaylandırır.

### 8D Raporu

Otomotiv ve diğer düzenlemeye tabi sektörlerde 8D (8 Disiplin) raporları zorunludur. Claude 8D yapısını uygular:

1. Ekip kurma
2. Sorun tanımı
3. Acil önlem
4. Kök neden analizi
5. Kalıcı düzeltme
6. Uygulama
7. Önleme
8. Takdir / kapanış

Ham veriden başlayarak ilk dört disiplinin (ekip, sorun tanımı, acil önlem, kök neden) taslağı yaklaşık bir saatte çıkar. Teknik içeriği kalite ekibi doğrular.

### FMEA (Hata Modu Etki Analizi)

Yeni ürün veya süreç için FMEA çalışması zaman alır. Claude geçmiş FMEA'lardan referans çıkarır, yeni FMEA için adım adım rehberlik eder.

### Kalibrasyon ve Bakım Kaydı

Kalibrasyon ve bakım notları çoğu yerde dağınık dosyalarda ya da kâğıtta durur. Ham notu ve ölçüm değerlerini verirsiniz; Claude denetime sunulabilecek yapılandırılmış bir kayıt çıkarır (cihaz, tarih, sonuç, sapma, bir sonraki kalibrasyon tarihi). Ölçüm değerlerini ve sertifika numaralarını kaynak belgeyle karşılaştırın; Claude eksik alanı tahminle doldurabilir.

## Bölüm 3: Tedarikçi ve Hammadde

### RFQ (Teklif Talebi)

Üretimde RFQ'nun içeriği hammadde ve parçaya özgüdür: teknik şartname, kalite gereksinimi, sevkiyat ve paketleme talimatı. Hazırlama yöntemi, şablon ve kıyaslama tablosu için [Satınalma](/wiki/departmanlar/satinalma/) sayfasındaki RFQ bölümüne bakın.

### Tedarikçi Performans Değerlendirmesi

Tedarikçi başına zamanında teslimat, kalite, fiyat ve iletişim: Claude ile çeyreklik puan kartı hazırlanır.

### Hammadde Spesifikasyon Belgesi

Yeni hammadde alındığında spesifikasyon belgesi Claude ile sade ve anlaşılır biçimde yazılır.

## Bölüm 4: Üretim Planlama ve Çizelgeleme

### Kapasite Planlama

Sipariş havuzu, kapasite ve vardiya verisinden Claude haftalık bir çizelge önerisi çıkarır. Optimum olmayabilir, ama planlama süresi belirgin biçimde kısalır; son karar planlama sorumlusundadır.

### Bottleneck Analizi

Üretim verilerinden darboğaz tespiti: hangi makine, hangi vardiya, hangi ürün. Claude hipotez üretir, [Code Execution](/wiki/yetenekler/code-execution/) ile doğrulanır.

## Bölüm 5: İSG (İş Sağlığı Güvenliği)

### Risk Değerlendirmesi

İSG risk değerlendirmeleri düzenli olarak güncellenmelidir. Claude:

- Eski değerlendirme dokümanını okur
- Saha gözlem notlarınızı alır
- Yeni risk maddelerini ekler, eskileri günceller
- Türkiye İSG mevzuatına uygun format kullanır

### Olay (Kaza) Raporu

İş kazası sonrasında yasal bildirim süreleri kısadır. Claude kaza notlarınızdan SGK formuyla uyumlu bir rapor taslağı çıkarır; güncel bildirim sürelerini ve zorunlu alanları İSG uzmanınızla doğrulayın.

### Güvenlik Talimatları

Hat operatörleri için güvenlik talimatları: sade, mümkünse fotoğraflı, tek sayfa. Hem Türkçe hem yabancı işçi varsa çeviriyle birlikte.

## Bölüm 6: İhracat Odaklı Üretim

İhracat yapan üreticiler için ek değer:

- Yabancı dilde teknik dokümantasyon
- Müşteri spesifikasyon talebine uyum analizi
- Sevkiyat talimatları (CMR, packing list, certificate of origin) için taslaklar

[İhracat departmanı](/wiki/departmanlar/ihracat/) sayfası ihracat-spesifik konuları detaylandırır.

## Pratik Kullanım Senaryoları

### Senaryo 1: Vardiya Amiri Pazartesi Sabah

Pazartesi 06:00. Amir, Cuma vardiya raporlarını Claude'a verir ve **hafta sonu yapılan üretim, fire ve duruş** özetini ister. Pazartesi sabah toplantısına 10-15 dakikada hazırdır.

### Senaryo 2: Kalite Müdürü Müşteri Şikayetinde

Otomotiv müşterisinden kritik bir şikayet geldi. Claude 8D'nin ilk 4 disiplinini yaklaşık bir saatte taslak olarak çıkarır. Kalite müdürü teknik detaylarla zenginleştirir ve müşteriye aynı gün gönderir.

### Senaryo 3: ISO Denetim Öncesi

3 hafta sonra ISO 9001 sürveyans denetimi var. Claude tüm prosedürleri tarar ve son gözden geçirme tarihi 12 ayı geçen belgeleri listeler. Sahipler atanır, belgeler güncellenir.

### Senaryo 4: Yeni Ürün Lansmanı

Yeni ürün için FMEA çalıştayı yapılacak. Claude benzer ürünlerin geçmiş FMEA'larından referans çıkarır ve çalıştaya başlangıç noktası oluşturur. Çalıştay süresi kısalır.

## Gerçek Örnek: 8D'nin İlk Dört Disiplini

Bir otomotiv yan sanayi tesisine müşteriden kritik bir şikayet geldi: sevk edilen partideki braketlerin bir kısmında delik ölçüsü toleransın dışında (rakamlar kurgusaldır). Kalite müdürü aynı gün yanıt vermek zorunda.

**Adım 1:** Ham notları verir (müşteri adı ve parti numarası anonimleştirilmiş):
> *"8D raporunun D1-D4 bölümlerini taslak yaz. Sorun: Parti A, 1.200 adet braket, 38 adette delik çapı 8,05 mm (tolerans 8,00 +0,03). Üretim tarihi 14 Eylül, hat 3, ikinci vardiya. Elimizde: o vardiyanın raporu, takım değişim kaydı, kalibrasyon kaydı. D1 ekip önerisi, D2 5N1K sorun tanımı, D3 geçici önlem (stok ve sevkiyat kontrolü), D4 için 5 Neden ve balık kılçığı ile olası kök neden hipotezleri. Bilmediğin şeyi tahmin etme, 'veri gerekli' yaz."*

**Adım 2:** Claude dört bölümü taslak olarak çıkarır; D4'te takım aşınması, takım değişim sonrası ilk parça kontrolünün atlanması ve ölçüm cihazı sapması gibi hipotezleri, hangi kayıtla doğrulanacağıyla birlikte listeler.

**Adım 3:** Kalite müdürü ve üretim mühendisi hipotezleri kayıtlarla karşılaştırır, doğrulanamayanları çıkarır, kök nedeni kendileri belirler.

**Adım 4:** Müşteriye aynı gün D1-D3 ve D4'ün durumu iletilir; D5-D8 sonraki günlerde tamamlanır.

**Süre:** 8D'nin D1-D4 taslağı için elle 3-4 saat, Claude ile yaklaşık 1 saat (kalite ekibinin kontrolü dahil). Vardiya raporu elle 30-60 dakika, Claude ile 5-10 dakika; her iş günü yazan tek bir amir için ayda yaklaşık 9-18 saat fark eder. Haftalık üretim raporlarında kazanç bildiren bir otomotiv yan sanayi vakası için bkz. [ölçüm vakaları](/wiki/temeller/olcum-metrikleri/). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

## CLAUDE.md Tavsiyesi

Üretim müdürü için CLAUDE.md temel yapısı [Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/) sayfasında. Eklenmesi yararlı:

```markdown
## Tesis Bilgisi
- Üretim hatları: [hat sayısı, tipler]
- Vardiya yapısı: [örn. 3x8 saat]
- Ana ürünler: [3-4 kategori]
- Sertifikasyon: [ISO 9001, IATF 16949, ISO 45001]
- Yıllık üretim hacmi: [yaklaşık]

## Yapılacak
- KPI raporlarında birim belirt (kg, adet, %)
- Kalite şikayetinde 8D format
- Tedarikçi/müşteri ismini anonimleştir

## Yapma
- Üretim formülü, ürün reçetesi yapıştırma (ticari sır)
- Tedarikçi fiyat anlaşması detaylarını verme
```

## Kullanım Engelleri ve Çözümleri

**Engel:** "Operasyonda zaman yok, Claude'a oturup yazmak vakit alır."

**Çözüm:** Tam tersi, Claude **vakit kazandırır**. İlk hafta kısa bir öğrenme yatırımından sonra vardiya raporu birkaç dakikada tamamlanır.

**Engel:** "Hattaki çalışanlar bilgisayarla iyi değil."

**Çözüm:** Claude'u vardiya amirleri / mühendisler kullanır, hattaki operatöre gerek yok. Onların ham notları amir tarafından Claude'a verilir.

**Engel:** "Üretim verim hassas, dışarı vermeyim."

**Çözüm:** [Şirket içi politika](/wiki/temeller/sirket-ici-politika/) ile veri sınıflandırması yapılır. Üretim formülü Claude'a girilmez, ama OEE rakamları gibi veriler paylaşılabilir hale getirilebilir.

## Bireysel Kullanım: Üretim Mühendisi

Tek bir üretim mühendisi de ciddi değer alabilir, ekip kurulumuna gerek yoktur.

## İlgili Sayfalar

- [Operasyon Departmanı](/wiki/departmanlar/operasyon/): Genel operasyon yaklaşımı
- [İhracat Departmanı](/wiki/departmanlar/ihracat/): İhracat odaklı üreticiler
- [Satınalma Departmanı](/wiki/departmanlar/satinalma/): Tedarikçi yönetimi ve RFQ ayrıntısı
- [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/): Logo, Mikro gibi programlardan veri aktarma
- [BT Departmanı](/wiki/departmanlar/bilgi-teknolojileri/): Üretim sistemleri (MES, SCADA) entegrasyonu
- [Code Execution](/wiki/yetenekler/code-execution/): KPI analizi ve grafik
- [Skills](/wiki/yetenekler/skills/): .xlsx ve .docx rapor üretme
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Veri sınıflandırma

