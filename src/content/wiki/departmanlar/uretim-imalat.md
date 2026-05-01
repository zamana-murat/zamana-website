---
title: Üretim ve İmalat — Claude Uygulamaları
description: Üretim ve imalat işletmeleri için Claude — vardiya raporları, kalite belgeleri, OEE analizi, fire azaltma, ISO uyumu ve tedarikçi yönetimi.
tags:
  - departmanlar
  - uretim
  - imalat
  - oee
  - kalite
---

Türkiye sanayisi geniş ve karmaşık — gıda, tekstil, otomotiv yan sanayi, makine, metal, plastik. Üretim hattı her gün veri üretir, ama bu verinin **çoğu hiç okunmaz**, yönetim raporu olmadan kaybolur. Claude, üretim verisini iş kararına çevirir ve hat-arası iletişimi olağanüstü hızlandırır.

## Claude'un Çözdüğü Temel Sıkıntılar

- Vardiya raporları yazılırken aynı şeyler tekrar yazılıyor, kalite tutarsız
- KPI'lar Excel'de duruyor, kimse aylık özetini çıkaramıyor
- ISO 9001 / 14001 / 45001 belgeleri eskiyor, denetim öncesi panik
- Müşteri kalite şikayetlerine yanıt yavaş ve genelleme yapıyor
- Tedarikçi RFQ'ları her seferinde sıfırdan yazılıyor
- Üretim sorunlarının kök neden analizi 5 dakikada bitirilip kapı kapatılıyor

## Bölüm 1 — Vardiya ve Üretim Raporları

### Vardiya Sonu Raporu

Vardiya amiri vardiya sonunda **30-60 dakika** rapor yazıyor. Claude'la bu süre **5-10 dakikaya** iner. Çalışan ham notlarını / KPI sayılarını / olayları yapıştırır, Claude yapılandırılmış rapor çıkarır:

- Vardiya özeti
- KPI tablosu (üretim, fire, OEE, mola süreleri)
- Vardiya içi olaylar ve aksiyon
- Sonraki vardiyaya devir notları

[Şablon Kütüphanesi](../claude-md/sablon-kutuphanesi/)'nde operasyon şablonu var.

### Haftalık / Aylık Üretim Raporu

Vardiya raporlarını birleştirip yönetim için aylık rapor üretir. Trend analizi, anomali işaretleme, **3 ana içgörü + 3 öneri** formatı.

### OEE / Verim Analizi

OEE (Overall Equipment Effectiveness) verilerini Claude analiz eder, **kayıp kategorileri** bazında kırılım yapar. [Code Execution](../yetenekler/code-execution/) ile gerçek hesap, halüsinasyon yok.

## Bölüm 2 — Kalite ve Belgelendirme

### ISO Belge Yönetimi

ISO 9001 / 14001 / 45001 / IATF 16949 belgelerinin **canlı** tutulması zordur. Claude:

- Mevcut prosedürleri okur, eski / çelişkili / eksik bölümleri tespit eder
- Yeni prosedür yazımında standart format uygular
- Denetim öncesi gözden geçirme listesi çıkarır
- Düzeltici / önleyici faaliyet (DÖF/DİF) raporu hazırlar

### Kalite Şikayet Yanıtı

Müşteriden kalite şikayeti geldiğinde — yanıt taslağı 1 saat içinde Claude'la hazırlanabilir. **Olgusal**, **savunmacı değil**, **önlem somut**. [Müşteri hizmetleri](musteri-hizmetleri/) sayfası genel şikayet yönetimini detaylandırır.

### 8D Raporu

Otomotiv ve diğer regulated sektörlerde 8D (8 Disciplines) raporları zorunlu. Claude 8D yapısını uygular:

1. Ekip kurma
2. Sorun tanımı
3. Acil önlem
4. Kök neden analizi
5. Kalıcı düzeltme
6. Uygulama
7. Önleme
8. Takdir / kapanış

Ham veriden başlayıp 1 saatte 8D raporu çıkar.

### FMEA (Hata Modu Etki Analizi)

Yeni ürün/süreç FMEA çalışması zaman alır. Claude geçmiş FMEA'lardan referans çıkarır, yeni FMEA için adım adım rehberlik eder.

## Bölüm 3 — Tedarikçi ve Hammadde

### RFQ (Teklif Talebi)

Standart RFQ şablonu Claude'la hazırlanır:

- Teknik şartname
- Miktar / teslimat
- Kalite gereksinimleri
- Sevkiyat / paketleme talimatı
- Ödeme şartları
- Cevap formatı (kıyaslanabilir olması için)

Birden fazla tedarikçiye gönderildiğinde **kıyaslama tablosu** Claude'la otomatik çıkarılır.

### Tedarikçi Performans Değerlendirmesi

Tedarikçi başına: zamanında teslimat, kalite, fiyat, iletişim. Çeyreklik puan kartı Claude ile.

### Hammadde Spesifikasyon Belgesi

Yeni hammadde alındığında spesifikasyon belgesi Claude'la sade ve anlaşılır.

## Bölüm 4 — Üretim Planlama ve Çizelgeleme

### Kapasite Planlama

Sipariş havuzu + kapasite + vardiya verisi → Claude haftalık çizelge önerisi çıkarır. Optimum değil belki ama 3 saat planlama 30 dakikaya iner.

### Bottleneck Analizi

Üretim verilerinden darboğaz tespiti. Hangi makine, hangi vardiya, hangi ürün — Claude hipotez üretir, [Code Execution](../yetenekler/code-execution/) ile doğrular.

## Bölüm 5 — İSG (İş Sağlığı Güvenliği)

### Risk Değerlendirmesi

İSG risk değerlendirmeleri çeyreklik / yıllık güncellenmeli. Claude:

- Eski değerlendirme dokümanını okur
- Saha gözlem notlarınızı alır
- Yeni risk maddelerini ekler, eskileri günceller
- Türkiye İSG mevzuatına uygun format

### Olay (Kaza) Raporu

İş kazası sonrası 8 saatte rapor zorunlu. Claude kaza notlarınızdan SGK formuyla uyumlu rapor çıkarır.

### Güvenlik Talimatları

Hat operatörleri için güvenlik talimatları — sade, fotoğraflı (varsa), tek sayfa. Hem Türkçe hem yabancı işçi varsa çeviri.

## Bölüm 6 — İhracat Odaklı Üretim

İhracat yapan üreticiler için ek değer:

- Yabancı dilde teknik dokümantasyon
- Müşteri spesifikasyon talebine uyum analizi
- Sevkiyat talimatları (CMR, packing list, certificate of origin) için taslaklar

[İhracat departmanı](ihracat/) sayfası ihracat-spesifik konuları detaylandırır.

## Pratik Kullanım Senaryoları

### Senaryo 1: Vardiya Amiri Pazartesi Sabah

Pazartesi 06:00. Cuma vardiya raporlarını Claude'a verir, **hafta sonu yapılan üretim, fire, duruş** özetini istemiş — Pazartesi sabah toplantısına 10 dakika içinde hazır.

### Senaryo 2: Kalite Müdürü Müşteri Şikayetinde

Otomotiv müşterisinden kritik şikayet. Claude 8D'nin ilk 4 disiplinini 1 saatte taslak çıkarır. Kalite müdürü teknik detaylarla zenginleştirir, müşteriye 4 saat içinde gönderir.

### Senaryo 3: ISO Denetim Öncesi

3 hafta sonra ISO 9001 sürveyans denetimi. Claude tüm prosedürleri tarar, son gözden geçirme tarihi 12 ayı geçen 18 belge bulur. Liste verir, sahip atanır, güncellenir.

### Senaryo 4: Yeni Ürün Lansmanı

Yeni ürün için FMEA çalıştayı yapılacak. Claude benzer ürünlerin geçmiş FMEA'larından referans çıkarır, çalıştaya başlangıç noktası oluşturur. Çalıştay süresi yarıya düşer.

## CLAUDE.md Tavsiyesi

Üretim müdürü için CLAUDE.md temel yapısı [Şablon Kütüphanesi](../claude-md/sablon-kutuphanesi/) sayfasında. Eklenmesi yararlı:

```markdown
## Tesis Bilgisi
- Üretim hatları: [hat sayısı, tipler]
- Vardiya yapısı: [örn. 3x8 saat]
- Ana ürünler: [3-4 kategori]
- Sertifikasyon: [ISO, IATF, OHSAS]
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

**Çözüm:** Tam tersi — Claude **vakit kazandırır**. İlk hafta 30 dakika öğrenme yatırımı, sonra her vardiya raporu 5 dakikada biter.

**Engel:** "Hattaki çalışanlar bilgisayarla iyi değil."

**Çözüm:** Claude'u vardiya amirleri / mühendisler kullanır, hattaki operatöre gerek yok. Onların ham notları amir tarafından Claude'a verilir.

**Engel:** "Üretim verim hassas, dışarı vermeyim."

**Çözüm:** [Şirket içi politika](../temeller/sirket-ici-politika/) ile veri sınıflandırma yapılır. Production formula girilmez, ama OEE rakamları şirket için kritik değerli kalır.

## Bireysel Kullanım — Üretim Mühendisi

Tek bir üretim mühendisi de ciddi değer alabilir. [Bireysel program](https://zamana.com.tr) sayfası katılım yolunu anlatıyor.

## İlgili Sayfalar

- [Operasyon Departmanı](operasyon/) — Genel operasyon yaklaşımı
- [İhracat Departmanı](ihracat/) — İhracat odaklı üreticiler
- [Satınalma Departmanı](satinalma/) — Tedarikçi yönetimi
- [BT Departmanı](bilgi-teknolojileri/) — Üretim sistemleri (MES, SCADA) entegrasyonu
- [Code Execution](../yetenekler/code-execution/) — KPI analizi ve grafik
- [Skills](../yetenekler/skills/) — .xlsx ve .docx rapor üretme
- [Şirket İçi Politika](../temeller/sirket-ici-politika/) — Veri sınıflandırma

