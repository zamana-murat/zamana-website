---
title: "Computer Use: Claude Ekranı Görür ve Kontrol Eder"
description: "Computer Use, Claude'a gözler ve eller verir. Ekrana bakar, ne göreceğini karar verir, tıklar, yazar. API olmayan eski sistemlerde bile çalışır."
tags:
  - yetenekler
  - computer-use
  - otomasyon
  - erp
lastUpdated: "2026-10-05"
---

**Computer Use, Claude'a bilgisayar ekranında gözler ve eller veren özelliktir.** Yapılandırılmış bir API veya connector kullanmak yerine Claude ekran görüntüsü alır, ne gördüğünü analiz eder, bir eylem kararı verir ve uygular: tıklar, yazar, kaydırır, gezinir. Sonra yeni bir ekran görüntüsü alır ve devam eder.

**Güncel kapsam:** Computer use bir **research preview**'dur ve yalnızca **Pro ve Max** planlarında vardır; Team ve Enterprise'ta yoktur. Yalnızca masaüstü uygulamasında (macOS 15 ve üstü, Windows) [Cowork](/wiki/araclar/cowork-modu/) ve Claude Code içinde çalışır; claude.ai web sohbetinde yoktur. Açmak için Ayarlar > General > Computer use anahtarını kullanırsınız. İlk çıkış 23 Mart 2026'dır.

Neden önemli? **Çünkü API'si olmayan yazılımlarda da çalışabilir.** Türkiye'deki birçok orta ölçekli şirket hâlâ API'si olmayan eski sistemler kullanıyor. Computer Use, Claude'u bu şirketler için **evrensel bir otomasyon katmanına** yaklaştırır; yine de research preview olduğu için her sistemde aynı güvenilirlikte çalışmaz.

## Nasıl Çalışır?

Döngü basit ama güçlü:

1. Claude ekran görüntüsünü alır (tüm ekran veya belirli bir uygulama penceresi)
2. Görsel içeriği analiz eder: metinleri okur, UI öğelerini tespit eder, düzeni anlar
3. Bir sonraki eyleme karar verir: bu düğmeye tıkla, bu alana yaz, aşağı kaydır, bu URL'ye git
4. Eylemi fare / klavye simülasyonuyla uygular
5. Sonucu doğrulamak için yeni bir ekran görüntüsü alır, sonra devam eder

Görev bitene kadar bu döngü tekrarlanır. Claude **gördüğü şey hakkında akıl yürütür**, beklenmedik bir şey (hata kutusu, farklı bir sayfa) çıkarsa çoğu zaman başarısız olmak yerine adapte olur.

## İş Dünyası İçin Neden Kritik?

Computer Use'un büyük farkı: **GUI (grafik arayüzü) olan her yazılımda çalışır**. API entegrasyonu gerektirmez. Bu da şunları içerir:

- **Eski kurumsal sistemler** (eski ERP, eski CRM, devlet portalları)
- **Şirket içi araçlar** (hiç API'si olmayan dahili yazılımlar)
- **API'si olmayan web uygulamaları**
- **Masaüstü uygulamalar** (eski Office versiyonları, sektörel özel yazılımlar)
- **Şu an insanın elle tıklayarak yaptığı her sistem**

Türkiye'deki mali müşavir programları, yerel ERP'ler, SGK portalı, GİB e-Beyanname ve Ticaret Bakanlığı portallarının çoğunda genel amaçlı bir API yoktur, ama hepsinin bir arayüzü vardır. Bu yüzden Computer Use ile otomatize edilmeleri denenebilir.

## Cowork'teki Öncelik Sırası

Claude bir görev aldığında her zaman en güvenilir yöntemi önce dener:

1. **Connector (MCP)**: en hızlı ve güvenilir; yapılandırılmış API kullanır
2. **Tarayıcı otomasyonu**: ekran etkileşimi olmadan bir web sitesinde gezinir
3. **Computer Use**: son çare; çok şey üzerinde çalışır ama daha yavaş ve daha az güvenilir

Computer Use, **kapsamı genişleten** son kademedir: yalnızca API'si olan uygulamalar değil, ekranı olan hemen her şey.

## Gerçek İş Otomasyon Örnekleri

### CRM'e Kartvizit Girişi

Claude taranmış bir kartvizit yığınını veya e-posta imzalarını okur. CRM'i açar. Tek tek kayıtları oluşturur.

Normalde 2 saatlik elle giriş işini Claude çok daha kısa sürede bitirebilir (süre kayıt sayısına ve sisteme göre değişir).

### Devlet Portalı Gönderimleri

Claude SGK, GİB veya Ticaret Bakanlığı portalına gider. Yapılandırılmış veriyi forma doldurur. Gönderir. Onay belgesini alır.

Bu portallar genellikle API sunmaz. Giriş, e-imza ve mobil onay adımlarını yine siz yaparsınız.

### Eski ERP Güncellemesi

Claude ERP'yi açar, ilgili ekrana gider, bir Excel dosyasındaki verileri girer. Entegrasyon gerektirmez.

Birçok üreticide bu iş günde yaklaşık iki saat sürer. Computer Use ile bu işi Claude'a devretmeyi deneyebilirsiniz.

### Rakip Fiyat Takibi

Claude rakip web sitelerini açar, fiyat sayfalarına gider, güncel fiyatları kaydeder, karşılaştırma tablosuna yazar.

Haftalık pazarlama istihbarat işi kısalır.

### Form İşleme

Claude bir PDF form açar, yapılandırılmış bir kaynaktan veri doldurur, kaydeder ve gönderir.

## Sınırlamalar

- **Connector'lardan daha yavaş**: her eylem ekran görüntüsü döngüsü gerektirir (saniye, milisaniye değil)
- **Dinamik UI'larda daha az güvenilir**: hızla değişen ekranlar veya animasyonlar görsel muhakemeyi karıştırabilir
- **Bilgisayar açık ve kilitsiz olmalı**: yerel olarak çalışır; makine uyanık olmalı
- **Karmaşık görevlerde tam otonom değil**: açık adım adım görevlerde en iyi çalışır; açık uçlu gezinme sapabilir
- **Research preview**: güvenilirlik artıyor ama kritik iş akışları için henüz prodüksiyon sınıfı değil

## Cowork Entegrasyonu

Cowork'te ne gerektiğini anlatırsınız; ekran etkileşimi gerekiyorsa Claude yukarıdaki sırayı izleyip Computer Use'a kendisi geçer.

Research preview döneminde **her adımda Claude'un eylemlerini onaylayabilir** veya yönlendirebilirsiniz. Bu, "yanlış yere tıklama" gibi hataları önler.

## Türk Kurumsal Kullanıcısı İçin Neden Değerli?

Türkiye'deki orta ölçekli şirketlerin çoğu **eski sistemler üzerinde çalışır**:

- 15 yıllık Logo / Mikro / Netsis
- Dahili geliştirilmiş ama hiç API'si olmayan ERP
- SGK, GİB, Ticaret Bakanlığı portalları
- Excel tabanlı makro "sistemler"

Bu şirketlerde dijital dönüşüm konuşulur, ama yeni yazılıma geçiş uzun sürer. Bu arada çalışanlar **elle tıklamaya devam eder**. Computer Use, yeni yazılım yatırımını beklemeden bazı işleri otomatize etmeyi denemenizi sağlar.

Kritik soru:

> **"Ekibiniz her gün kimsenin otomatize etmediği bir sisteme tıklayarak yaptığı bir iş var mı?"**

Cevap "evet"se, Computer Use denemeye değer. Önce küçük ve geri alınabilir bir işle başlayın.

## Güvenlik ve Kontrol

Computer Use güçlüdür, sorumluluk da öyle:

- Eylemler ekranınızda görünür çalışır
- Kritik eylemlerde (kayıt silme, form gönderme, para transferi) onay ister
- Sandbox izolasyonu yerine gerçek bilgisayarınızda çalışır: bu nedenle test ortamlarında önce deneyin
- Hassas hesap bilgileriniz CLAUDE.md veya workspace'e yazılmamalı, [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) kurallarına bakın

## İlgili Sayfalar

- [Görsel ve Görüntü](/wiki/yetenekler/vision-image/): Computer Use'un temelindeki görsel muhakeme
- [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): Computer Use'tan önce denenecek öncelikli yöntem
- [Cowork Modu](/wiki/araclar/cowork-modu/): Computer Use'un yaşadığı ortam
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Otomasyon güvenlik kuralları

