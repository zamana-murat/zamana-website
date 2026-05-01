---
title: Claude Mobil — iOS ve Android Uygulamaları
description: "Claude'un iPhone ve Android uygulamaları. Sesli komut, fotoğraf, yoldayken kullanım. Masaüstü ile ne fark eder, hangi senaryoda hangisi?"
tags:
  - araclar
  - mobil
  - ios
  - android
---

**Claude'un mobil uygulamaları, masaüstü Claude'un cebinizdeki uzantısıdır** — App Store ve Google Play'den ücretsiz indirilir, hesabınızla giriş yaptığınız anda tüm sohbet geçmişiniz, [Projects](projects/)'iniz ve aboneliğiniz aynen orada.

Bu sayfa mobil Claude'un ne için iyi olduğunu, ne için **olmadığını** ve bir iş profesyonelinin günlük rutinine nasıl yerleştireceğini anlatır.

## Ne İşe Yarar?

Mobil Claude, **arada kalan zamanı çalışma zamanına çeviren** araçtır. Bekleme salonu, taksi koltuğu, iki toplantı arası — masaüstüne dönmeden önce yapabileceğiniz iş miktarı hatırı sayılırdır.

Tipik kullanımlar:

- **Sesli dikte ile e-posta taslağı** — yürürken konuşun, Claude düzgün bir e-posta hâline getirsin
- **Fotoğraf çekip soru sorma** — el yazısı not, kartvizit, tabela, ürün etiketi, makine ekranı
- **Toplantı öncesi hızlı brief** — "ABC Şirketi son altı ayda neler yaptı, bana üç dakikalık özet ver"
- **Yolda sohbete devam** — masaüstünde başlattığınız konuşmayı telefonda devam ettirme
- **Türkçe dikte** — Türkçe ses tanıma kalitesi yüksek, transkriptleri düzenleme zamanı bile kazandırır

## Ne Yapamaz?

Mobil uygulamaların eksikleri masaüstüne göre belirgin. Karar verirken bilin:

| Özellik | Mobil | [Claude Desktop](claude-desktop/) / Web |
|---|---|---|
| Sohbet, dosya yükleme | ✅ | ✅ |
| [Projects](projects/) erişimi | ✅ | ✅ |
| Sesli giriş | ✅ (güçlü) | ⚠️ (sınırlı) |
| Kamera ile görsel | ✅ | — |
| [Cowork modu](cowork-modu/) | — | ✅ |
| [Skills](../yetenekler/skills/) (.docx, .xlsx, .pptx üretme) | — | ✅ |
| Yerel dosya sistemi erişimi | — | ✅ (Desktop) |
| [MCP](../mcp/nedir/) ve connector'lar | — | ✅ |
| [Scheduled Tasks](scheduled-tasks/) | İzleme ✅ / Kurulum — | ✅ |
| Uzun [artifact](../yetenekler/artifacts/) önizleme | ⚠️ Küçük ekran | ✅ |

Kısaca: **mobil "tüketim ve hızlı giriş" için, masaüstü "üretim ve otomasyon" için.**

## Sesli Mod (Voice Mode)

Mobil uygulamada öne çıkan özellik **sesli moddur**. Mikrofona basıp konuşursunuz, Claude sesle cevap verir; yazıya dökülmüş hâli de paralel olarak ekrana düşer. Detay için [Voice Mode](voice-mode/) sayfasına bakın.

Pratik kullanımlar:

- Araba kullanırken sesli rapor dikte etme
- Yürüyüş esnasında brainstorm
- Toplantı sonrası "bana neyi konuştuğumuzu sözlü hatırlat" tarzı taze bellek aktarımı
- Yabancı bir kelimenin telaffuzunu öğrenme

**Türkçe performansı güçlü** ama aksanlı veya hızlı konuşmada hata payı artar — kritik metinlerde mutlaka okuyup düzeltin. Detay için [Türkçe Performansı](../temeller/turkce-performansi/).

## Kamera ve Görsel

Telefonun kamerasını doğrudan Claude'a açabilirsiniz. Bunun bazı pratik kullanımları:

- **Tabela / menü tercüme** — yurtdışında bir restoran menüsü, müzede bir levha
- **Ürün etiketi okuma** — gıda etiketi, kozmetik içerik listesi, ilaç prospektüsü
- **El yazısı not transkripsiyonu** — toplantıda alınan kâğıt notları metne dök
- **Makine paneli teşhis** — endüstriyel ekran, hata kodu, ölçüm değeri
- **Kartvizit dijitalleştirme** — fotoğraf çek, "bu kişiyi LinkedIn'de aramam için bilgileri çıkar"

Kamera kullanımının teknik tarafı için [Görsel ve Görüntü](../yetenekler/vision-image/) sayfası.

## Bildirimler ve Sürekli Görevler

Mobil uygulama, masaüstünde kurduğunuz [Scheduled Tasks](scheduled-tasks/)'in bildirimlerini telefonunuza düşürür. Pazartesi sabah 09:00'da hazırlanan haftalık raporun bittiğine dair push notification — uygulamayı açmaya gerek bile kalmaz.

[Dispatch](dispatch/) ile uzun süreli arka plan görevleri başlattıysanız, mobilden ilerlemelerini görebilirsiniz. Sonuç hazır olduğunda bildirim alır, dilediğiniz zaman bakarsınız.

## Gizlilik ve KVKK

Mobil cihazda Claude'a yüklediğiniz fotoğraf, ses kaydı, dosya — hepsi web/masaüstü ile aynı veri politikasına tabidir. Telefonun kendisi farklı bir cihaz olduğu için ek bir veri toplama yapılmaz. Detay için [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/).

**Pratik uyarılar:**

- Çalıştığınız şirket cep telefonunuza MDM (mobile device management) uygulamışsa, IT departmanı uygulamanın kurulumunu kontrol edebilir
- Hassas müşteri görsellerini telefonun yerel galerisinden Claude'a aktarmak yerine, mümkünse şirket onaylı kanaldan aktarın
- Şirket içi politika için [Şirket İçi Politika](../temeller/sirket-ici-politika/) sayfasına bakın

## Plan ve Abonelik

Mobil uygulamada hangi planı kullandığınızdan bağımsız oturum açarsınız. Pro, Max 5x veya Max 20x — hangisi varsa o limitle çalışır. Plan farkları için [Planlar](../temeller/planlar/).

**Önemli:** Yeni Zamana katılımcılarına **ilk ay Max 5x ($100/ay) zorunlu**. Pro planda mobilden yoğun kullanım kotayı hızla bitirir; mobil dikte özellikle çok prompt yapar. Detay [Planlar](../temeller/planlar/) sayfasında.

## Pratik Tavsiyeler

**Aç-kapat refleksi geliştirin.** Mobil Claude, telefonun ana sayfasında olmalı. Açma süresi 2 saniyeyi geçerse, "bu kadar zahmetin yerine kafamda halledeyim" deyip kullanmazsınız.

**Dikte için 30 saniyelik ön düşünme.** Mikrofona basmadan önce ne söyleyeceğinizin ana noktalarını kafanızda toparlayın. Aksi halde dağınık dikte → düşük kaliteli çıktı.

**Mobil dikte → masaüstü temizleme.** Yolda sesli olarak taslak çıkarın, masaya dönünce [Cowork modu](cowork-modu/)'nda parlatın. Üretim hattı gibi düşünün.

**Fotoğraf çekerken çerçeveye dikkat.** Claude görseli okuyacağı için metin net ve düz olmalı. Eğri açı, gölge, parlama — kalite düşürür.

## İlgili Sayfalar

- [Voice Mode](voice-mode/) — Sesli kullanımın teknik detayı
- [Claude Chat](claude-chat/) — Tarayıcıdan kullanım
- [Claude Desktop](claude-desktop/) — Masaüstü uygulaması ve [Cowork modu](cowork-modu/)
- [İlk Kurulum](../temeller/ilk-kurulum/) — Hesap açma ve uygulama indirme
- [Planlar](../temeller/planlar/) — Mobil hangi plan üzerinde çalışır
- [Görsel ve Görüntü](../yetenekler/vision-image/) — Kamera ile çekim mantığı

