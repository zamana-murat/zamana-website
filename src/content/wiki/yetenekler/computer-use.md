---
title: Computer Use — Claude Ekranı Görür ve Kontrol Eder
description: "Computer Use, Claude'a gözler ve eller verir. Ekrana bakar, ne göreceğini karar verir, tıklar, yazar. API olmayan eski sistemlerde bile çalışır."
tags:
  - yetenekler
  - computer-use
  - otomasyon
  - erp
---

**Computer Use, Claude'a bilgisayar ekranında gözler ve eller veren özelliktir.** Yapılandırılmış bir API veya connector kullanmak yerine Claude ekran görüntüsü alır, ne gördüğünü analiz eder, bir eylem kararı verir ve uygular — tıklar, yazar, kaydırır, gezinir. Sonra yeni bir ekran görüntüsü alır ve devam eder.

Şu an Cowork içinde **research preview** aşamasındadır.

Neden önemli? **Çünkü API'si olmayan her yazılımda çalışır.** Türkiye'deki orta ölçekli şirketlerin %80'i hâlâ API'si olmayan eski sistemler kullanıyor. Computer Use, Claude'u bu şirketler için **evrensel otomasyon katmanı** haline getirir.

## Nasıl Çalışır?

Döngü basit ama güçlü:

1. Claude ekran görüntüsünü alır (tüm ekran veya belirli bir uygulama penceresi)
2. Görsel içeriği analiz eder — metinleri okur, UI öğelerini tespit eder, düzeni anlar
3. Bir sonraki eyleme karar verir: bu düğmeye tıkla, bu alana yaz, aşağı kaydır, bu URL'ye git
4. Eylemi fare / klavye simülasyonuyla uygular
5. Sonucu doğrulamak için yeni bir ekran görüntüsü alır, sonra devam eder

Görev bitene kadar bu döngü tekrarlanır. Claude **gördüğü şey hakkında akıl yürütür** — beklenmedik bir şey (hata kutusu, CAPTCHA, farklı bir sayfa) çıkarsa başarısız olmak yerine adapte olur.

## İş Dünyası İçin Neden Kritik?

Computer Use'un büyük farkı: **GUI (grafik arayüzü) olan her yazılımda çalışır**. API entegrasyonu gerektirmez. Bu da şunları içerir:

- **Eski kurumsal sistemler** (eski ERP, eski CRM, devlet portalları)
- **Şirket içi araçlar** (hiç API'si olmayan dahili yazılımlar)
- **API'si olmayan web uygulamaları**
- **Masaüstü uygulamalar** (eski Office versiyonları, sektörel özel yazılımlar)
- **Şu an insanın elle tıklayarak yaptığı her sistem**

Türkiye'deki mali müşavir programları, yerel ERP'ler, SGK portalı, GİB e-Beyanname, Ticaret Bakanlığı portalları — hiçbirinde API yok. Ama hepsi GUI. Hepsi Computer Use ile otomatize edilebilir.

## Cowork'teki Öncelik Sırası

Claude bir görev aldığında her zaman en güvenilir yöntemi önce dener:

1. **Connector (MCP)** — en hızlı ve güvenilir; yapılandırılmış API kullanır
2. **Tarayıcı otomasyonu** — ekran etkileşimi olmadan bir web sitesinde gezinir
3. **Computer Use** — son çare; her şey üzerinde çalışır ama daha yavaş ve daha az güvenilir

Computer Use, **Claude'u evrensel yapan** son kademedir — sadece API'si olan uygulamalar değil, her şey.

## Gerçek İş Otomasyon Örnekleri

### CRM'e Kartvizit Girişi

Claude taranmış bir kartvizit yığınını veya e-posta imzalarını okur. CRM'i açar. Tek tek kayıtları oluşturur.

Normalde 2 saatlik elle giriş işi, Claude 10 dakika içinde bitirir.

### Devlet Portalı Gönderimleri

Claude SGK, GİB veya Ticaret Bakanlığı portalına gider. Yapılandırılmış veriyi forma doldurur. Gönderir. Onay belgesini alır.

Bu portallar API sunmaz. Computer Use olmasa her görev elle yapılmak zorunda.

### Eski ERP Güncellemesi

Claude ERP'yi açar, ilgili ekrana gider, bir Excel dosyasındaki verileri girer. Entegrasyon gerektirmez.

Orta büyüklükteki Türk üreticilerin çoğunda bu iki saatlik bir günlük iş. Computer Use ile arka planda çalışır.

### Rakip Fiyat Takibi

Claude rakip web sitelerini açar, fiyat sayfalarına gider, güncel fiyatları kaydeder, karşılaştırma tablosuna yazar.

Haftalık pazarlama istihbarat işi, 20 dakikaya iner.

### Form İşleme

Claude bir PDF form açar, yapılandırılmış bir kaynaktan veri doldurur, kaydeder ve gönderir.

## Sınırlamalar

- **Connector'lardan daha yavaş** — her eylem ekran görüntüsü döngüsü gerektirir (saniye, milisaniye değil)
- **Dinamik UI'larda daha az güvenilir** — hızla değişen ekranlar veya animasyonlar görsel muhakemeyi karıştırabilir
- **Bilgisayar açık ve kilitsiz olmalı** — yerel olarak çalışır; makine uyanık olmalı
- **Karmaşık görevlerde tam otonom değil** — açık adım adım görevlerde en iyi çalışır; açık uçlu gezinme sapabilir
- **Research preview** — güvenilirlik artıyor ama kritik iş akışları için henüz prodüksiyon sınıfı değil

## Cowork Entegrasyonu

Cowork'te Computer Use **daha iyi bir yöntem yoksa otomatik olarak devreye girer**. Çalışan ne gerektiğini anlatır; eğer ekran etkileşimi gerekiyorsa Claude onu halleder.

Research preview döneminde çalışan **her adımda Claude'un eylemlerini onaylayabilir** veya yönlendirebilir. "Yanlış yere tıklama" gibi durumları önler.

## Zamana İçin Neden Değerli?

Türkiye'deki orta ölçekli şirketlerin çoğu **eski sistemler üzerinde çalışır**:

- 15 yıllık Logo / Mikro / Netsis
- Dahili geliştirilmiş ama hiç API'si olmayan ERP
- SGK, GİB, Ticaret Bakanlığı portalları
- Excel tabanlı makro "sistemler"

Bu şirketlerin çoğunda dijital dönüşüm konuşmaları yapılır ama yeni yazılım geçişi 2-3 yıl sürer. Bu arada çalışanlar **elle tıklamaya devam eder**.

Computer Use bu yatırımı beklemeden şu an otomatize eder.

Zamana'nın müşterilere sorduğu kritik soru:

> **"Ekibiniz her gün kimsenin otomatize etmediği bir sisteme tıklayarak yaptığı bir iş var mı?"**

Cevap "evet"se (genellikle öyledir), Computer Use'un zamanı gelmiştir.

## Güvenlik ve Kontrol

Computer Use güçlüdür, sorumluluk da öyle:

- Her eylem size görünür olarak çalışır — arka planda gizli eylem yok
- Kritik eylemlerde (kayıt silme, form gönderme, para transferi) onay ister
- Sandbox izolasyonu yerine gerçek bilgisayarınızda çalışır — bu nedenle test ortamlarında önce deneyin
- Hassas hesap bilgileriniz CLAUDE.md veya workspace'e yazılmamalı — [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) kurallarına bakın

## İlgili Sayfalar

- [Görsel ve Görüntü](vision-image/) — Computer Use'un temelindeki görsel muhakeme
- [MCP Bağlantı Listesi](../mcp/baglanti-listesi/) — Computer Use'tan önce denenecek öncelikli yöntem
- [Cowork Modu](../araclar/cowork-modu/) — Computer Use'un yaşadığı ortam
- [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) — Otomasyon güvenlik kuralları

