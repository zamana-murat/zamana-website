---
title: "Üretim ve İmalat: Claude Uygulamaları"
description: "Üretim ve imalat işletmeleri için Claude: vardiya raporları, kalite belgeleri, OEE analizi, fire azaltma, ISO uyumu ve tedarikçi yönetimi."
tags:
  - departmanlar
  - uretim
  - imalat
  - oee
  - kalite
lastUpdated: "2026-10-05"
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

Vardiya amiri vardiya sonunda rapor yazmak için genellikle yarım saat ile bir saat arası harcıyor. Claude ile bu süre çoğu zaman birkaç dakikaya iner. Çalışan ham notlarını, KPI sayılarını ve olayları yapıştırır, Claude yapılandırılmış rapor çıkarır:

- Vardiya özeti
- KPI tablosu (üretim, fire, OEE, mola süreleri)
- Vardiya içi olaylar ve aksiyon
- Sonraki vardiyaya devir notları

[Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/)'nde operasyon şablonu var.

### Haftalık / Aylık Üretim Raporu

Vardiya raporlarını birleştirip yönetim için aylık rapor üretir: trend analizi, anomali işaretleme, **3 ana içgörü ve 3 öneri** formatında.

### OEE / Verim Analizi

OEE (Overall Equipment Effectiveness) verilerini Claude analiz eder ve **kayıp kategorilerine** göre kırılım yapar. [Code Execution](/wiki/yetenekler/code-execution/) ile hesaplar gerçekten çalıştırılır, tahmin yürütülmez. Yine de sonuçları kendi raporlarınızla karşılaştırın.

## Bölüm 2: Kalite ve Belgelendirme

### ISO Belge Yönetimi

ISO 9001 / 14001 / 45001 / IATF 16949 belgelerini **güncel** tutmak zordur. Claude:

- Mevcut prosedürleri okur, eski, çelişkili veya eksik bölümleri tespit eder
- Yeni prosedür yazımında standart format uygular
- Denetim öncesi gözden geçirme listesi çıkarır
- Düzeltici / önleyici faaliyet (DÖF/DİF) raporu hazırlar

### Kalite Şikayet Yanıtı

Müşteriden kalite şikayeti geldiğinde yanıt taslağı Claude ile kısa sürede hazırlanabilir: **olgusal**, **savunmacı olmayan**, **önlemi somut** bir taslak. [Müşteri hizmetleri](/wiki/departmanlar/musteri-hizmetleri/) sayfası genel şikayet yönetimini detaylandırır.

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

Ham veriden başlayarak kısa sürede 8D raporunun ilk taslağı çıkar. Teknik içeriği kalite ekibi doğrular.

### FMEA (Hata Modu Etki Analizi)

Yeni ürün veya süreç için FMEA çalışması zaman alır. Claude geçmiş FMEA'lardan referans çıkarır, yeni FMEA için adım adım rehberlik eder.

## Bölüm 3: Tedarikçi ve Hammadde

### RFQ (Teklif Talebi)

Standart RFQ şablonu Claude ile hazırlanır:

- Teknik şartname
- Miktar / teslimat
- Kalite gereksinimleri
- Sevkiyat / paketleme talimatı
- Ödeme şartları
- Cevap formatı (kıyaslanabilir olması için)

Birden fazla tedarikçiye gönderildiğinde **kıyaslama tablosu** Claude ile hızla çıkarılır.

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

Pazartesi 06:00. Amir, Cuma vardiya raporlarını Claude'a verir ve **hafta sonu yapılan üretim, fire ve duruş** özetini ister. Pazartesi sabah toplantısına birkaç dakikada hazırdır.

### Senaryo 2: Kalite Müdürü Müşteri Şikayetinde

Otomotiv müşterisinden kritik bir şikayet geldi. Claude 8D'nin ilk 4 disiplinini kısa sürede taslak olarak çıkarır. Kalite müdürü teknik detaylarla zenginleştirir ve müşteriye aynı gün gönderir.

### Senaryo 3: ISO Denetim Öncesi

3 hafta sonra ISO 9001 sürveyans denetimi var. Claude tüm prosedürleri tarar ve son gözden geçirme tarihi 12 ayı geçen belgeleri listeler. Sahipler atanır, belgeler güncellenir.

### Senaryo 4: Yeni Ürün Lansmanı

Yeni ürün için FMEA çalıştayı yapılacak. Claude benzer ürünlerin geçmiş FMEA'larından referans çıkarır ve çalıştaya başlangıç noktası oluşturur. Çalıştay süresi kısalır.

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
- [Satınalma Departmanı](/wiki/departmanlar/satinalma/): Tedarikçi yönetimi
- [BT Departmanı](/wiki/departmanlar/bilgi-teknolojileri/): Üretim sistemleri (MES, SCADA) entegrasyonu
- [Code Execution](/wiki/yetenekler/code-execution/): KPI analizi ve grafik
- [Skills](/wiki/yetenekler/skills/): .xlsx ve .docx rapor üretme
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Veri sınıflandırma

