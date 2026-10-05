---
title: "Claude Mobil: iOS ve Android Uygulamaları"
description: "Claude'un iPhone ve Android uygulamaları. Sesli komut, fotoğraf, yoldayken kullanım. Masaüstü ile ne fark eder, hangi senaryoda hangisi?"
tags:
  - araclar
  - mobil
  - ios
  - android
lastUpdated: "2026-10-05"
---

**Claude'un mobil uygulamaları, masaüstü Claude'un cebinizdeki uzantısıdır.** App Store ve Google Play'den ücretsiz indirilir. Hesabınızla giriş yaptığınız anda sohbet geçmişiniz, [Projects](/wiki/araclar/projects/)'iniz ve aboneliğiniz aynen orada olur.

Bu sayfa mobil Claude'un ne için iyi olduğunu, ne için **olmadığını** ve bir iş profesyonelinin günlük rutinine nasıl yerleştireceğini anlatır.

## Ne İşe Yarar?

Mobil Claude, **arada kalan zamanı çalışma zamanına çeviren** araçtır. Bekleme salonu, taksi koltuğu, iki toplantı arası, masaüstüne dönmeden önce yapabileceğiniz iş miktarı hatırı sayılırdır.

Tipik kullanımlar:

- **Sesli dikte ile e-posta taslağı**: yürürken konuşun, Claude düzgün bir e-posta hâline getirsin
- **Fotoğraf çekip soru sorma**: el yazısı not, kartvizit, tabela, ürün etiketi, makine ekranı
- **Toplantı öncesi hızlı brief**: "ABC Şirketi son altı ayda neler yaptı, bana üç dakikalık özet ver"
- **Yolda sohbete devam**: masaüstünde başlattığınız konuşmayı telefonda devam ettirme
- **Türkçe dikte**: telefonun kendi klavye dikte özelliğiyle yazdırıp Claude'a gönderebilirsiniz (Voice mode'un Türkçe durumu için aşağıya bakın)

## Ne Yapamaz?

Mobil uygulamaların eksikleri masaüstüne göre belirgin. Karar verirken bilin:

| Özellik | Mobil | [Claude Desktop](/wiki/araclar/claude-desktop/) / Web |
|---|---|---|
| Sohbet, dosya yükleme | ✅ | ✅ |
| [Projects](/wiki/araclar/projects/) erişimi | ✅ | ✅ |
| Sesli giriş ([Voice Mode](/wiki/araclar/voice-mode/), beta) | ✅ | ✅ |
| Kamera ile görsel | ✅ | — |
| [Cowork](/wiki/araclar/cowork-modu/) | ✅ Beta (Pro, Max, Team; 7 Tem 2026'dan beri) | ✅ (tam sürüm masaüstünde) |
| [Skills](/wiki/yetenekler/skills/) (.docx, .xlsx, .pptx üretme) | ✅ Mobil Cowork betasında var | ✅ |
| Yerel dosya sistemi erişimi | ⚠️ Kısmi (masaüstü uygulaması açık olmalı) | ✅ (Desktop) |
| [Connector'lar](/wiki/araclar/connectors/) | ✅ Mobil Cowork betasında var | ✅ |
| [Scheduled Tasks](/wiki/araclar/scheduled-tasks/) | ✅ Mobil Cowork betasında var | ✅ |
| Uzun [artifact](/wiki/yetenekler/artifacts/) önizleme | ⚠️ Küçük ekran | ✅ |

Kısaca: **mobil "hızlı giriş ve takip" için, masaüstü "üretim ve otomasyon" için.**

Mobil Cowork 7 Temmuz 2026'dan beri beta olarak çalışıyor. Connector'lar, skill'ler, zamanlanmış görevler ve cihazlar arası devam mobilde de var. Yerel dosya erişimi ve tarayıcı kullanımı kısmi; sandbox'ta kod çalıştırma ve computer use masaüstü uygulamasına bağlı. Cowork ile sohbet 16 Eylül 2026'dan itibaren tek Claude içinde birleşiyor (kademeli yayılım, ayrıntı: [Cowork Modu](/wiki/araclar/cowork-modu/)). Hafıza sohbet ve Cowork arasında ortak, bkz. [Memory](/wiki/yetenekler/memory/). Mobilde etkileşimli uygulamalar (interactive apps) da 25 Mart 2026'dan beri var.

## Sesli Mod (Voice Mode)

Mobil uygulamada öne çıkan özellik **sesli moddur** (beta, tüm planlarda). Mikrofona basıp konuşursunuz, Claude sesle cevap verir; yazıya dökülmüş hâli de paralel olarak ekrana düşer. Kullanım, normal sohbet gibi planınızın limitinden düşer. Detay için [Voice Mode](/wiki/araclar/voice-mode/) sayfasına bakın.

Pratik kullanımlar:

- Araba kullanırken sesli rapor dikte etme
- Yürüyüş esnasında brainstorm
- Toplantı sonrası "bana neyi konuştuğumuzu sözlü hatırlat" tarzı taze bellek aktarımı
- Yabancı bir kelimenin telaffuzunu öğrenme

**Türkçe notu:** Claude yazılı Türkçeyi iyi anlar ve yazar. Ancak Voice mode'un resmi dil listesinde Türkçe görünmüyor. Türkçe sesli konuşmayı kendi hesabınızda deneyin, kritik metinlerde okuyup düzeltin. Dil listesi için [Voice Mode](/wiki/araclar/voice-mode/), genel kalite için [Türkçe Performansı](/wiki/temeller/turkce-performansi/) sayfasına bakın.

## Kamera ve Görsel

Telefonun kamerasını doğrudan Claude'a açabilirsiniz. Bunun bazı pratik kullanımları:

- **Tabela / menü tercüme**: yurtdışında bir restoran menüsü, müzede bir levha
- **Ürün etiketi okuma**: gıda etiketi, kozmetik içerik listesi, ilaç prospektüsü
- **El yazısı not transkripsiyonu**: toplantıda alınan kâğıt notları metne dök
- **Makine paneli teşhis**: endüstriyel ekran, hata kodu, ölçüm değeri
- **Kartvizit dijitalleştirme**: fotoğraf çek, "bu kişiyi LinkedIn'de aramam için bilgileri çıkar"

Kamera kullanımının teknik tarafı için [Görsel ve Görüntü](/wiki/yetenekler/vision-image/) sayfası.

## Bildirimler ve Sürekli Görevler

Mobil Cowork betasında [Scheduled Tasks](/wiki/araclar/scheduled-tasks/) hem izlenir hem kurulur. Pazartesi sabah 09:00'da hazırlanan haftalık raporun bittiğini telefonunuzdan görürsünüz.

[Dispatch](/wiki/araclar/dispatch/) kullanan bir hesabınız varsa (yeni kullanıcılara kapalı), uzun süreli arka plan görevlerinin ilerlemesini mobilden izleyebilirsiniz.

## Gizlilik ve KVKK

Mobil cihazda Claude'a yüklediğiniz fotoğraf, ses kaydı ve dosya, web/masaüstü ile aynı hesaba ve aynı veri politikasına tabidir. Detay için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

**Pratik uyarılar:**

- Çalıştığınız şirket cep telefonunuza MDM (mobile device management) uygulamışsa, IT departmanı uygulamanın kurulumunu kontrol edebilir
- Hassas müşteri görsellerini telefonun yerel galerisinden Claude'a aktarmak yerine, mümkünse şirket onaylı kanaldan aktarın
- Şirket içi politika için [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/) sayfasına bakın

## Plan ve Abonelik

Mobil uygulamada hangi planı kullandığınızdan bağımsız oturum açarsınız. Free, Pro, Max, Team veya Enterprise, hangisi varsa o planın limitiyle çalışır. Plan farkları için [Planlar](/wiki/temeller/planlar/).

**Pratik öneri:** Yeni başlayan kullanıcılara ilk ay **Max 5x ($100/ay)** önerilir. Pro planda mobilden yoğun kullanım kotayı hızla bitirir; mobil dikte özellikle çok prompt yapar. Detay [Planlar](/wiki/temeller/planlar/) sayfasında.

## Pratik Tavsiyeler

**Aç-kapat refleksi geliştirin.** Mobil Claude, telefonun ana sayfasında olmalı. Açma süresi 2 saniyeyi geçerse, "bu kadar zahmetin yerine kafamda halledeyim" deyip kullanmazsınız.

**Dikte için 30 saniyelik ön düşünme.** Mikrofona basmadan önce ne söyleyeceğinizin ana noktalarını kafanızda toparlayın. Aksi halde dağınık dikte → düşük kaliteli çıktı.

**Mobil dikte → masaüstü temizleme.** Yolda sesli olarak taslak çıkarın, masaya dönünce [Cowork](/wiki/araclar/cowork-modu/)'te parlatın. Üretim hattı gibi düşünün.

**Fotoğraf çekerken çerçeveye dikkat.** Claude görseli okuyacağı için metin net ve düz olmalı. Eğri açı, gölge ve parlama okuma kalitesini düşürür.

## İlgili Sayfalar

- [Voice Mode](/wiki/araclar/voice-mode/): Sesli kullanımın teknik detayı
- [Claude Chat](/wiki/araclar/claude-chat/): Tarayıcıdan kullanım
- [Claude Desktop](/wiki/araclar/claude-desktop/): Masaüstü uygulaması ve [Cowork](/wiki/araclar/cowork-modu/)
- [İlk Kurulum](/wiki/temeller/ilk-kurulum/): Hesap açma ve uygulama indirme
- [Planlar](/wiki/temeller/planlar/): Mobil hangi plan üzerinde çalışır
- [Görsel ve Görüntü](/wiki/yetenekler/vision-image/): Kamera ile çekim mantığı

