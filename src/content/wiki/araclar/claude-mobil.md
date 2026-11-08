---
title: "Claude Mobil: iOS ve Android Uygulamaları"
seoTitle: "Claude Mobil Uygulama: iOS ve Android Rehberi"
description: "Claude'un iPhone ve Android uygulamaları, mobil Cowork ve telefondan görev verme, eski Dispatch. Kamera, sesli giriş ve masaüstüyle farkı."
tags:
  - araclar
  - mobil
  - ios
  - android
  - dispatch
lastUpdated: "2026-11-08"
---

**Claude'un mobil uygulamaları, masaüstü Claude'un cebinizdeki uzantısıdır.** App Store ve Google Play'den ücretsiz indirilir. Hesabınızla giriş yaptığınız anda sohbet geçmişiniz, [Projects](/wiki/araclar/projects/)'iniz ve aboneliğiniz aynen orada olur.

Bu sayfa mobil Claude'un ne için iyi olduğunu, ne için **olmadığını**, telefondan nasıl görev verileceğini ve bir iş profesyonelinin günlük rutinine nasıl yerleştireceğini anlatır.

## Ne İşe Yarar?

Mobil Claude, **arada kalan zamanı çalışma zamanına çeviren** araçtır. Bekleme salonu, taksi koltuğu, iki toplantı arası, masaüstüne dönmeden önce yapabileceğiniz iş miktarı hatırı sayılırdır.

Tipik kullanımlar:

- **E-posta taslağı**: telefonun klavye dikte özelliğiyle konuşup yazdırın, Claude düzgün bir e-posta hâline getirsin (Claude'un kendi sesli modunda Türkçe desteği doğrulanmadı, aşağıya bakın)
- **Fotoğraf çekip soru sorma**: el yazısı not, kartvizit, tabela, ürün etiketi, makine ekranı
- **Toplantı öncesi hızlı brief**: "Demirtaş Metal son altı ayda neler yaptı, bana üç dakikalık özet ver"
- **Yolda sohbete devam**: masaüstünde başlattığınız konuşmayı telefonda devam ettirme

## Ne Yapamaz?

Mobil uygulamaların eksikleri masaüstüne göre belirgin. Karar verirken bilin:

| Özellik | Mobil | [Claude Desktop](/wiki/araclar/claude-desktop/) / Web |
|---|---|---|
| Sohbet, dosya yükleme | ✅ | ✅ |
| [Projects](/wiki/araclar/projects/) erişimi | ✅ | ✅ |
| Sesli giriş ([Voice Mode](/wiki/araclar/voice-mode/), beta, Türkçe doğrulanmadı) | ✅ | ✅ |
| Kamera ile görsel | ✅ | Yok |
| [Cowork](/wiki/araclar/cowork-modu/) | ✅ Beta (Pro, Max, Ultra, Team; Enterprise'da yönetici açtıysa; 7 Tem 2026'dan beri) | ✅ (tam sürüm masaüstünde) |
| [Skills](/wiki/yetenekler/skills/) (.docx, .xlsx, .pptx üretme) | ✅ Mobil Cowork betasında var | ✅ |
| Yerel dosya sistemi erişimi | ⚠️ Kısmi (masaüstü uygulaması açık olmalı) | ✅ (Desktop) |
| [Connector'lar](/wiki/araclar/connectors/) | ✅ Mobil Cowork betasında var | ✅ |
| [Scheduled Tasks](/wiki/araclar/scheduled-tasks/) | ✅ Mobil Cowork betasında var | ✅ |
| Uzun [artifact](/wiki/yetenekler/artifacts/) önizleme | ⚠️ Küçük ekran | ✅ |

Kısaca: **mobil "hızlı giriş ve takip" için, masaüstü "üretim ve otomasyon" için.**

Mobil Cowork 7 Temmuz 2026'dan beri beta olarak çalışıyor; telefondan görev atma Pro, Max, Ultra ve Team'de otomatik açık (aşağıda). Connector'lar, skill'ler, zamanlanmış görevler ve cihazlar arası devam mobilde de var. Yerel dosya erişimi ve tarayıcı kullanımı kısmi; sandbox'ta kod çalıştırma ve computer use masaüstü uygulamasına bağlı. Cowork ile sohbet 16 Eylül 2026'dan itibaren tek Claude içinde birleşiyor (kademeli yayılım, ayrıntı: [Cowork Modu](/wiki/araclar/cowork-modu/)). Hafıza sohbet ve Cowork arasında ortak, bkz. [Memory](/wiki/yetenekler/memory/). Mobilde etkileşimli uygulamalar (interactive apps) da 25 Mart 2026'dan beri var.

## Sesli Mod (Voice Mode)

Mobil uygulamada bir de **sesli mod** vardır (beta, tüm planlarda). Mikrofona basıp konuşursunuz, Claude sesle cevap verir; yazıya dökülmüş hâli de paralel olarak ekrana düşer. Kullanım, normal sohbet gibi planınızın limitinden düşer. Detay için [Voice Mode](/wiki/araclar/voice-mode/) sayfasına bakın.

**Türkçe notu:** Voice mode'un Türkçe desteği doğrulanmadı. Bilinen dil listesinde Türkçe yoktu; yardım sayfası artık tam liste vermiyor, ayrıntı Voice Mode sayfasında. Claude yazılı Türkçeyi iyi anlar ve yazar; Türkçe konuşarak iş vermek için telefonun kendi klavye dikte özelliğini kullanın, metni Claude'a yazılı gönderin. Genel kalite için [Türkçe Performansı](/wiki/temeller/turkce-performansi/) sayfasına bakın.

İngilizce çalışıyorsanız sesli mod şu işlerde işe yarar:

- Yürüyüş esnasında brainstorm
- Toplantı sonrası "bana neyi konuştuğumuzu sözlü hatırlat" tarzı taze bellek aktarımı
- Yabancı bir kelimenin telaffuzunu öğrenme

## Kamera ve Görsel

Telefonun kamerasını doğrudan Claude'a açabilirsiniz. Bunun bazı pratik kullanımları:

- **Tabela / menü tercüme**: yurtdışında bir restoran menüsü, müzede bir levha
- **Ürün etiketi okuma**: gıda etiketi, kozmetik içerik listesi, ilaç prospektüsü
- **El yazısı not transkripsiyonu**: toplantıda alınan kâğıt notları metne dök
- **Makine paneli teşhis**: endüstriyel ekran, hata kodu, ölçüm değeri
- **Kartvizit dijitalleştirme**: fotoğraf çek, "bu kişiyi LinkedIn'de aramam için bilgileri çıkar"

Kamera kullanımının teknik tarafı için [Görsel ve Görüntü](/wiki/yetenekler/vision-image/) sayfası.

## Telefondan görev: mobil Cowork ve Dispatch

Telefondan iş vermenin bugün geçerli yolu Cowork'ün kendisidir; eski Dispatch yalnız onu zaten kullananlarda kalıyor.

**Cowork'te telefondan görev (yeni kullanıcı için yol budur).** Telefondan görev atma Pro, Max, Ultra ve Team planlarında **otomatik açık**, Enterprise'ta kurum isterse açılır. Görev bulutta çalışır, dizüstünüz kapalıyken de sürer. Mobil ve web Cowork 7 Temmuz 2026'dan beri beta (Pro, Max, Ultra, Team; Enterprise'da yönetici açtıysa): connector'lar, skill'ler, zamanlanmış görevler ve cihazlar arası devam mobilde çalışır. Bulut görevinin bilgisayarınızdaki dosyaya ne zaman ulaşabildiği [Cowork Modu](/wiki/araclar/cowork-modu/#hangi-planda-nerede-çalışır) sayfasında anlatılır. Mobilde [Scheduled Tasks](/wiki/araclar/scheduled-tasks/) hem izlenir hem kurulur: pazartesi sabah 09:00'da hazırlanan haftalık raporun bittiğini telefonunuzdan görürsünüz.

**Dispatch (eski özellik, yeni kullanıcılara kapalı).** Dispatch, telefonunuzla masaüstü bilgisayarınız arasında kalıcı bir konuşma hattı kurar: görevi telefondan yazarsınız, işi masaüstündeki Claude kendi dosya, plugin ve connector'larınızla yapar, sonucu telefona mesaj olarak alırsınız. Bazı Pro, Max ve Ultra hesaplarında sınırlı beta olarak duruyor; Anthropic'in yardım sayfasına göre yeni kullanıcılara açık değil, zaten kullanan hesaplar devam edebiliyor. Yardım sayfası yeni kullanıcıyı bu eşleştirme yerine bulutta Cowork'e yönlendiriyor. Bu yüzden yeni bir hesapta Dispatch'e güvenerek iş akışı kurmayın; eğitimde ve ekip düzeninde telefondan görevi yukarıdaki Cowork yoluyla anlatın.

**Claude Duet (research preview, şimdilik yalnız ABD).** 21 Ekim 2026'da duyurulan Duet, ana Claude uygulamasından ayrı bir **proaktif ajan uygulamasıdır** (iOS, Android ve claude.ai). Kendi sanal makinesinde çalıştığı için telefonunuzun ya da bilgisayarınızın açık olması gerekmez; bağlı hesaplarınızı birkaç saatte bir kontrol eder, günlük özet gönderir ve yalnız dikkat gerektiren bir şey olduğunda yazar. Hafızanızı, skill'lerinizi ve bağlı uygulamalarınızı Claude hesabınızdan taşır. Mesaj göndermeden, ödeme yapmadan, belge imzalamadan ya da bir şey silmeden önce ne yapacağını gösterip onayınızı bekler; menkul kıymet alım satımı ve hesaplar arası para transferini onayla bile yapmaz. Pro, Max ve Ultra'da (Team ve Enterprise'ta yok), Opus 5.5 ile çalışır, kullanım plan limitinizden düşer; erişim **ABD'deki abonelerden başlayarak bekleme listesiyle** açılıyor. Türkiye'den kullanılabilirliği belirsiz olduğu için iş akışınızı ona göre kurmayın. Kaynak: [Introducing Claude Duet](https://claude.com/resources/articles/claude-duet) (Anthropic).

### Ne tür görevler atılır?

Genel kural: **masaüstünüzde otururken Claude'a söyleyeceğiniz bir şeyse**, telefondan da söyleyebilirsiniz. Örnekler:

- *"Tedarikçi klasöründeki fiyat dosyalarını çıkar, karşılaştırma tablosu yap"*: klasör bilgisayarınızdaysa masaüstü uygulaması açık ve bağlı olmalı, sonuç telefonunuza gelir
- *"Geçen haftaki Slack mesajlarımı tara, ihracat projesinin durumunu özetle"*: Slack connector'ından çeker
- *"Proje klasöründe bıraktığım kurul paketinden tek sayfalık özet hazırla"*
- *"Haftalık operasyon raporunu çalıştır"*: önceden kurduğunuz zamanlanmış görevi tetikler
- *"Ege Tekstil toplantı notlarından PowerPoint sunum yap"*: pptx skill'i ile dosyayı üretir

Telefondan konuşarak iş vermek istiyorsanız Türkçe için klavye diktesini kullanın; sesli modun Türkçe desteği doğrulanmadı. Sesli mod birleşik Claude arayüzünde görevlerde de çalışır, ayrı Cowork ve Claude Code ekranlarında ise yalnız dikte vardır, bkz. [Voice Mode](/wiki/araclar/voice-mode/).

### Dispatch gereksinimleri ve sınırlar (yalnız mevcut kullanıcılar)

- Pro, Max veya Ultra aboneliği ve halihazırda Dispatch erişimi olan bir hesap
- Güncel Claude Desktop (macOS ve Windows; yardım sayfası Linux'u da listeliyor) ve güncel mobil uygulama
- **Masaüstü bilgisayar açık ve uyanık, Claude Desktop çalışır durumda olmalı.** Bilgisayar uyursa veya uygulama kapanırsa Dispatch'e gönderilen görevler çalışmaz
- Dakikadan birkaç saate kadar süren görevler için uygundur, gerçek zamanlı izleme gereken işler için değil
- Kurulum bir kez yapılır (yaklaşık 5 dakika): Cowork'te "Dispatch" bölümünden başlatılır, ekrandaki QR kodu telefonla taramanız yeterlidir

**Güvenlik notu:** Telefondan gönderdiğiniz görev (Cowork ya da Dispatch), masaüstünüzdeki dosyalara ve bağlı connector'lara erişir. Telefonunuzu kilitsiz bırakmayın, görevleri yazarken içine gereksiz kişisel veri koymayın ve masaüstünde hangi klasörü Claude'a açtığınızı bilin. Genel çerçeve için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

## Gizlilik ve KVKK

Mobil cihazda Claude'a yüklediğiniz fotoğraf, ses kaydı ve dosya, web/masaüstü ile aynı hesaba ve aynı veri politikasına tabidir. Detay için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

**Pratik uyarılar:**

- Çalıştığınız şirket cep telefonunuza MDM (mobile device management) uygulamışsa, IT departmanı uygulamanın kurulumunu kontrol edebilir
- Hassas müşteri görsellerini telefonun yerel galerisinden Claude'a aktarmak yerine, mümkünse şirket onaylı kanaldan aktarın
- Şirket içi politika için [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/) sayfasına bakın

## Plan ve Abonelik

Mobil uygulamada hangi planı kullandığınızdan bağımsız oturum açarsınız. Free, Pro, Max, Ultra, Team veya Enterprise, hangisi varsa o planın limitiyle çalışır. Plan farkları için [Planlar](/wiki/temeller/planlar/).

**Pratik öneri:** Yeni başlayan kullanıcılara ilk ay **Max, eski adıyla Max 5x ($100/ay)** önerilir; öneridir, zorunlu değildir. Pro planla başlayıp gerektiğinde yükseltmek de olur. Detay [Planlar](/wiki/temeller/planlar/) sayfasında.

## Pratik Tavsiyeler

**Aç-kapat refleksi geliştirin.** Mobil Claude, telefonun ana sayfasında olmalı. Açma süresi 2 saniyeyi geçerse, "bu kadar zahmetin yerine kafamda halledeyim" deyip kullanmazsınız.

**Dikte için 30 saniyelik ön düşünme.** Telefonun klavye diktesine başlamadan önce ne söyleyeceğinizin ana noktalarını kafanızda toparlayın. Aksi halde dağınık dikte → düşük kaliteli çıktı.

**Mobil dikte → masaüstü temizleme.** Yolda diktesiyle taslak çıkarın, masaya dönünce [Cowork](/wiki/araclar/cowork-modu/)'te parlatın. Üretim hattı gibi düşünün.

**Fotoğraf çekerken çerçeveye dikkat.** Claude görseli okuyacağı için metin net ve düz olmalı. Eğri açı, gölge ve parlama okuma kalitesini düşürür.

## İlgili Sayfalar

- [Voice Mode](/wiki/araclar/voice-mode/): Sesli kullanımın teknik detayı ve Türkçe durumu
- [Claude Chat](/wiki/araclar/claude-chat/): Tarayıcıdan kullanım
- [Claude Desktop](/wiki/araclar/claude-desktop/): Masaüstü uygulaması ve [Cowork](/wiki/araclar/cowork-modu/)
- [Scheduled Tasks](/wiki/araclar/scheduled-tasks/): Zamanlanmış görevler
- [Skills](/claude/skills/) ve [Connector'lar](/claude/connectors/): Claude ürün tanıtım sayfaları
- [İlk Kurulum](/wiki/temeller/ilk-kurulum/): Hesap açma ve uygulama indirme
- [Planlar](/wiki/temeller/planlar/): Mobil hangi plan üzerinde çalışır
- [Görsel ve Görüntü](/wiki/yetenekler/vision-image/): Kamera ile çekim mantığı
