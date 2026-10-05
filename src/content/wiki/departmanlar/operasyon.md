---
title: "Operasyon ve Lojistik: Claude Uygulamaları"
description: "Operasyon ekibi için Claude: SOP dokümantasyonu, tedarikçi iletişimi, incident raporu, NCR, kapasite planlama. Kafalardaki bilgiyi yazılı hale getirmek."
tags:
  - departmanlar
  - operasyon
  - lojistik
  - sop
  - ncr
lastUpdated: "2026-10-05"
---

Operasyon departmanında en büyük kayıp, **bilginin insanların kafasında yaşaması** ve hiç yazılı hale gelmemesidir. Claude bu kaybı gidermenin en kolay yollarından biridir.

## Claude'un Çözdüğü Temel Sıkıntılar

- Süreç dokümantasyonu insanların kafasında, asla yazılı hale gelmiyor
- Durum raporları yazmak çok zaman alıyor
- Tedarikçi iletişimi tutarsız
- Problem teşhisi reaktif, yapılandırılmış değil
- Gümrük ve sevkiyat dokümantasyonu yavaş ve hataya açık
- Personel değişiminde teslim dokümantasyonu yetersiz

## Bölüm 1: Süreç Dokümantasyonu

### Süreç Yakalama

Çalışan bir süreci **yüksek sesle Claude'a anlatır**. Claude bunu bir SOP'a yapılandırır. Süreç, "birinin kafasında"dan "yazılı ve devredilebilir" hale **tek oturumda** geçer.

### Standart Operasyon Prosedürleri

Şirket kültürüne uyan format, dil ve detay düzeyi. Bazı şirketler checklist ister, bazıları anlatı biçiminde prosedür; Claude ikisine de uyum sağlar.

### Süreç İyileştirme

Mevcut süreci Claude'a verirsiniz; **darboğazları, gereksizlikleri, tek hata noktalarını ve iyileştirme fırsatlarını** belirler. Bu yapılandırılmış bir düşünmedir, yalnızca bir görüş değil.

### Teslim Dokümantasyonu

Personel rol değiştirdiğinde veya ayrıldığında genellikle hiç yazılmayan bilgi transfer belgesi. Çalışan taslağı oturumda çıkarır.

## Bölüm 2: Tedarikçi ve Vendor İletişimi

**Sipariş takipleri.** Profesyonel, kararlı, zaman kazandıran bir dil: ilişkiyi koruyarak aciliyet yaratan yükseltme mesajları.

**Tedarikçi performans geri bildirimi.** Yapılandırılmış ve belgelenmiş geri bildirim, yazılı bir iz bırakır ve net beklenti kurar.

**Gecikme ve istisna yönetimi.** Tedarik aksaklıklarını yukarıya (yönetime) ve aşağıya (müşterilere) iletmek: net, olgusal, çözüm odaklı.

**RFQ (Teklif Talebi) yazımı.** Yapılandırılmış, eksiksiz, tutarlı: kim yazarsa yazsın her RFQ aynı kalitede olur.

**Gümrük ve sevkiyat talimat dokümantasyonu.** İhracat odaklı işletmeler için Claude; sevkiyat talimatlarını, gümrük beyanı destek metinlerini ve freight koordinasyon e-postalarını taslaklar.

## Bölüm 3: Raporlama ve Problem Çözme

**Operasyon raporları.** Ham veri ve notlar, çoğu zaman saatler yerine yaklaşık yirmi dakikada yapılandırılmış bir yönetim güncellemesine dönüşür.

**Incident (olay) ve istisna raporlama.** Kaotik bir durumdan zaman çizelgesi, etki, yanıt ve önleme içeren net bir yazılı kayıt çıkar.

**Kök neden analizi.** Ne oldu, neden oldu, tekrarını ne önler. Claude burada yalnızca yazar değil, yapılandırılmış bir düşünme ortağıdır.

**KPI anlatısı.** Operasyon metriklerini yönetime sade dille açıklamak: "zamanında teslimat %8 düştü" cümlesi; bağlam, sebep ve düzeltici aksiyonla bir hikâyeye dönüşür.

**Kapasite planlama dokümantasyonu.** Ekip, ekipman veya tesis sınırlara yaklaştığında yönetime yapılacak açıklama: Claude analizi ve öneriyi net biçimde yapılandırır.

### Kalite Kontrol ve NCR (Non-Conformance Report)

Ürün veya teslimat spesifikasyonu karşılamadığında **NCR yapılandırılmış, olgusal ve izlenebilir** olmak zorundadır.

Claude raporu çalışanın tarifinden üretir; **çalışan her teknik detayı doğrular**. Özellikle ISO sertifikalı şirketler için kritiktir.

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
- `docx`: SOP'lar, politikalar, raporlar
- `xlsx`: KPI tabloları, tedarikçi kıyas tabloları
- `pdf`: kurumsal raporlar, iç politika dokümanları
- `operations:process-doc`: SOP ve akış şeması üretimi
- `operations:runbook`: adım adım operasyonel prosedürler

**Connector'lar:**
1. **Slack**: ekip iletişimi ve olay bildirimi
2. **Asana / Monday.com**: süreç yönetimi
3. **Google Sheets / Excel**: operasyonel metrikler
4. **E-posta**: tedarikçi iletişimi

## İş Akışı Yeniden Tasarımı Adayları

- **Dokümantasyon kültürü**: SOP üretimini alışkanlık haline getirmek (backlog değil)
- **Haftalık ops raporlama döngüsü**: veri toplama → anlatı → dağıtım
- **Tedarikçi istisna yönetim iş akışı**: gecikme tespiti → iletişim → önleyici aksiyon
- **NCR süreci**: olay yakalama → Claude taslağı → teknik doğrulama → dağıtım

## Gerçek Örnek: SOP Tek Oturumda

Operasyon müdürü yıllardır kendi kafasında taşıdığı "yeni tedarikçi onboarding" sürecini bir SOP'a dönüştürmek istiyor.

**Adım 1:** Süreci sesle anlatır (cihazın dikte özelliği ya da Claude'un ses özelliği; Türkçe desteğini önceden deneyin) ve çıkan metni Claude'a verir. Bu yaklaşık 10 dakika sürer:
> *"Yeni bir tedarikçi bulduğumda önce mali durum kontrolü yaparım, sonra kalite sertifikalarını isterim, sonra numune isteyip değerlendiririz, sonra fiyat pazarlığı, sonra küçük bir deneme siparişi, sonra onaylı tedarikçi listesine alırız..."*

**Adım 2:** Claude yapılandırır:
- Başlık: Tedarikçi Onboarding SOP
- Amaç, kapsam, sorumlular
- 7 adımlı süreç (her biri eylem + kanıt + onaylayan)
- Sapma durumunda yükseltme prosedürü
- Revizyon geçmişi

**Adım 3:** Çalışan gözden geçirir, iki küçük ekleme yapar.

**Adım 4:** ISO denetçisi için hazır bir belge.

Toplam süre: yaklaşık 25 dakika (örnek senaryo). Geleneksel süreçte bu iş çoğu zaman hiç yapılmaz, "bir gün zaman bulunca" listesinde kalır.

## İlgili Sayfalar

- [Skills](/wiki/yetenekler/skills/): Operations plugin detayları
- [Scheduled Tasks](/wiki/araclar/scheduled-tasks/): Haftalık ops raporu otomasyonu
- [Görsel ve Görüntü](/wiki/yetenekler/vision-image/): Hasar fotoğrafından NCR üretimi
- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Süreç bilgilerini kalıcılaştırmak

