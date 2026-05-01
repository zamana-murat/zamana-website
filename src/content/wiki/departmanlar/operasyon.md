---
title: Operasyon ve Lojistik — Claude Uygulamaları
description: Operasyon ekibi için Claude — SOP dokümantasyonu, tedarikçi iletişimi, incident raporu, NCR, kapasite planlama. Kafalardaki bilgiyi yazılı hale getirmek.
tags:
  - departmanlar
  - operasyon
  - lojistik
  - sop
  - ncr
---

Operasyon departmanında en büyük kayıp **bilginin insanların kafasında yaşaması** ve asla yazılı hale gelmemesidir. Claude bu kaybı tek başına çözer.

## Claude'un Çözdüğü Temel Sıkıntılar

- Süreç dokümantasyonu insanların kafasında, asla yazılı hale gelmiyor
- Durum raporları yazmak çok zaman alıyor
- Tedarikçi iletişimi tutarsız
- Problem teşhisi reaktif, yapılandırılmış değil
- Gümrük ve sevkiyat dokümantasyonu yavaş ve hataya açık
- Personel değişiminde teslim dokümantasyonu yetersiz

## Bölüm 1 — Süreç Dokümantasyonu

### Süreç Yakalama

Çalışan bir süreci **yüksek sesle Claude'a anlatır**. Claude bunu bir SOP'a yapılandırır. Süreç "birinin kafasında"dan "yazılı ve transferli"ye **oturum içinde** geçer.

### Standart Operasyon Prosedürleri

Format, dil, detay düzeyi — şirket kültürüne uyan şablon. Bazı şirketler checklist ister, bazıları anlatı prosedür — Claude adapte eder.

### Süreç İyileştirme

Mevcut süreci Claude'a verirsiniz, **darboğazları, gereksizlikleri, tek hata noktalarını ve iyileştirme fırsatlarını** belirler. Yapılandırılmış düşünme, sadece görüş değil.

### Teslim Dokümantasyonu

Personel rol değiştirdiğinde veya ayrıldığında hiç yazılmayan bilgi transfer belgesi. Çalışan oturumda taslağını çıkarır.

## Bölüm 2 — Tedarikçi ve Vendor İletişimi

**Sipariş takipleri.** Profesyonel, kararlı, zaman kazandıran — ilişkiyi koruyup aciliyet yaratan yükseltme dili.

**Tedarikçi performans geri bildirimi.** Yapılandırılmış ve belgelenmiş — kağıt izi oluşturur, net beklenti kurar.

**Gecikme ve istisna yönetimi.** Tedarik aksaklıklarını yukarı yönetime ve aşağı müşterilere iletmek — net, olgusal, çözüm odaklı.

**RFQ (Teklif Talebi) yazımı.** Yapılandırılmış, tam, tutarlı — kim yazarsa yazsın her RFQ aynı kalitede.

**Gümrük ve sevkiyat talimat dokümantasyonu.** İhracat odaklı işletmeler için Claude sevkiyat talimatları, gümrük beyan destek metinleri ve freight koordinasyon e-postalarını çizer — tam ve doğru.

## Bölüm 3 — Raporlama ve Problem Çözme

**Operasyon raporları.** Ham veri ve notlar → **3 saat değil 20 dakika** süren yapılandırılmış yönetim güncellemesi.

**Incident (olay) ve istisna raporlama.** Kaotik durum → zaman çizelgesi, etki, yanıt ve önleme ile net yazılı kayıt.

**Kök neden analizi.** Ne oldu, neden oldu, nüksü ne önler — Claude yapılandırılmış düşünme ortağı, sadece yazar değil.

**KPI anlatısı.** Operasyon metriklerini yönetime sade dilde açıklamak — "zamanında teslimat %8 düştü" bağlam, sebep ve düzeltici aksiyonla hikayeye dönüşür.

**Kapasite planlama dokümantasyonu.** Ekip, ekipman veya tesis sınırlara yaklaştığında yönetime açıklama — Claude analizi ve öneriyi net biçimde yapılandırır.

### Kalite Kontrol ve NCR (Non-Conformance Report)

Ürün veya teslimat spesifikasyonu karşılamadığında **NCR yapılandırılmış, olgusal ve izlenebilir** olmak zorunda.

Claude raporu çalışanın tarifinden üretir; **çalışan her teknik detayı doğrular**. Özellikle ISO sertifikalı şirketler için kritik.

## Prompt Kütüphanesi Konuları

- SOP üretici
- Süreç iyileştirme analizi
- Teslim dokümantasyonu şablonu
- Duruma göre tedarikçi iletişim şablonları
- RFQ yapısı
- Sevkiyat talimat şablonu
- Operasyon durum raporu
- Incident raporu
- Kök neden analizi çerçevesi
- KPI anlatısı
- Kapasite planlama özeti
- Non-Conformance Report (NCR) şablonu

## Kullanılacak Skills ve Connector'lar

**Skills:**
- `docx` — SOP'lar, politikalar, raporlar
- `xlsx` — KPI tabloları, tedarikçi kıyas tabloları
- `pdf` — kurumsal raporlar, iç politika dokümanları
- `operations:process-doc` — SOP ve akış şeması üretimi
- `operations:runbook` — adım adım operasyonel prosedürler

**Connector'lar:**
1. **Slack** — ekip iletişimi ve olay bildirimi
2. **Asana / Monday.com** — süreç yönetimi
3. **Google Sheets / Excel** — operasyonel metrikler
4. **E-posta** — tedarikçi iletişimi

## İş Akışı Yeniden Tasarımı Adayları

- **Dokümantasyon kültürü** — SOP üretimini alışkanlık haline getirmek (backlog değil)
- **Haftalık ops raporlama döngüsü** — veri toplama → anlatı → dağıtım
- **Tedarikçi istisna yönetim iş akışı** — gecikme tespiti → iletişim → önleyici aksiyon
- **NCR süreci** — olay yakalama → Claude taslağı → teknik doğrulama → dağıtım

## Gerçek Örnek — SOP Tek Oturumda

Operasyon müdürü yıllardır kendi kafasında taşıdığı "yeni tedarikçi onboarding" sürecini bir SOP'a dönüştürmek istiyor.

**Adım 1:** Claude'a sesle anlatır (Voice mode ile, 10 dakika):
> *"Yeni bir tedarikçi bulduğumda ilk önce mali durum kontrolü yaparım, sonra kalite sertifikaları isterim, sonra numune ister değerlendirirmiz, sonra fiyat pazarlığı, sonra küçük deneme siparişi, sonra onaylı tedarikçi listesine alırız..."*

**Adım 2:** Claude yapılandırır:
- Başlık: Tedarikçi Onboarding SOP
- Amaç, kapsam, sorumlular
- 7 adımlı süreç (her biri eylem + kanıt + onaylayan)
- Sapma durumunda yükseltme prosedürü
- Revizyon geçmişi

**Adım 3:** Çalışan gözden geçirir, iki küçük ekleme yapar.

**Adım 4:** ISO denetçisi için hazır bir belge.

Toplam süre: 25 dakika. Normal süreç: **asla yapılmaz** — "bir gün zaman bulunca" listesinde kalır.

## İlgili Sayfalar

- [Skills](../yetenekler/skills/) — Operations plugin detayları
- [Scheduled Tasks](../araclar/scheduled-tasks/) — Haftalık ops raporu otomasyonu
- [Görsel ve Görüntü](../yetenekler/vision-image/) — Hasar fotoğrafından NCR üretimi
- [CLAUDE.md Nedir?](../claude-md/nedir/) — Süreç bilgilerini kalıcılaştırmak

