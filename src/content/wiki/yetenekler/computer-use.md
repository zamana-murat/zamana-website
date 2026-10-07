---
title: "Computer Use: Claude Ekranı Görür ve Kontrol Eder"
seoTitle: "Claude Computer Use: Eski Sistemlerde Otomasyon"
description: "Computer Use, Claude'un ekranı görüp tıklaması ve yazmasıdır. API'si olmayan eski programlarda okuma ve rapor alma için, research preview olarak."
tags:
  - yetenekler
  - computer-use
  - otomasyon
  - erp
lastUpdated: "2026-10-06"
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

- **Eski kurumsal sistemler** (eski ERP, eski CRM)
- **Şirket içi araçlar** (hiç API'si olmayan dahili yazılımlar)
- **API'si olmayan web uygulamaları**
- **Masaüstü uygulamalar** (eski Office versiyonları, sektörel özel yazılımlar)
- **Şu an insanın elle tıklayarak yaptığı her sistem**

Türkiye'deki mali müşavir programlarının ve yerel ERP'lerin çoğunda genel amaçlı bir API yoktur, ama hepsinin bir arayüzü vardır. Yine de bu, her işi onlara devretmek demek değildir: **yalnız okuma ve rapor alma** için düşünün; kayıt girişi, fatura, ödeme ve beyan için kullanmayın. Gerekçe ve alternatifler [Türk İş Araçları](/wiki/temeller/turk-is-araclari/) sayfasında.

## Hangi Yöntemi Önce Denemeli?

Aynı işi birkaç yolla yapabiliyorsanız şu sırayı öneririz:

1. **Connector (MCP):** en hızlı ve güvenilir; yapılandırılmış API kullanır
2. **Tarayıcı işi için Claude in Chrome:** web sitesinde gezinmek ve form işlemek için ayrı bir yol; ayrıntı [Office ve Chrome](/wiki/araclar/office-ve-chrome/#claude-in-chrome) sayfasında
3. **Dışa aktar ve yükle:** programdan rapor alıp dosyayı Claude'a vermek çoğu zaman en güvenli yoldur
4. **Computer Use:** son çare; çok şey üzerinde çalışır ama daha yavaş ve daha az güvenilir

Computer Use, **kapsamı genişleten** son kademedir: yalnızca API'si olan uygulamalar değil, ekranı olan hemen her şey.

## Gerçek İş Otomasyon Örnekleri

### Kartvizit Listesini CRM'e Taşıma

Claude kartvizit fotoğraflarını okuyup tablo hâline getirir ([Görsel ve Görüntü](/wiki/yetenekler/vision-image/)). CRM'inizin içe aktarma (import) seçeneği varsa tabloyu oradan yükleyin: daha hızlı ve daha güvenlidir. Aktarma seçeneği yoksa Computer Use ile kayıt açtırmayı önce birkaç test kaydıyla deneyin ve sonuçları gözle kontrol edin.

### Eski Programdan Rapor Alma

Claude eski ERP'yi veya mali müşavir programını açar, ilgili rapor ekranına gider, raporu dışa aktarır ve dosyayı size verir. Sonra analizi sohbette yaparsınız. Burada Claude yalnız okur; programa kayıt yazmaz.

### Devlet Portalından Belge İndirme

SGK, GİB veya Ticaret Bakanlığı portalında **sizin hesabınızla** görüntülenen bir belgeyi (örneğin bir dökümü) indirmek okuma işidir ve denenebilir. Beyan, bildirge veya form **göndermek** ise Claude'un işi değildir: bunları siz ya da mali müşaviriniz yapar. Giriş, e-imza ve mobil onay adımları zaten sizdedir.

### Rakip Fiyat Takibi

Claude rakip web sitelerini açar, fiyat sayfalarına gider, güncel fiyatları not eder, karşılaştırma tablosuna yazar. Yalnız tarayıcıda yapılacaksa [Claude in Chrome](/wiki/araclar/office-ve-chrome/#claude-in-chrome) de bir seçenektir.

### Form İşleme

Claude bir PDF form açar ve yapılandırılmış bir kaynaktan veri doldurur. Göndermeden önce formu siz kontrol edersiniz.

## Sınırlamalar

- **Connector'lardan daha yavaş**: her eylem ekran görüntüsü döngüsü gerektirir (saniye, milisaniye değil)
- **Dinamik UI'larda daha az güvenilir**: hızla değişen ekranlar veya animasyonlar görsel muhakemeyi karıştırabilir
- **Bilgisayar açık ve kilitsiz olmalı**: yerel olarak çalışır; makine uyanık olmalı
- **Karmaşık görevlerde tam otonom değil**: açık adım adım görevlerde en iyi çalışır; açık uçlu gezinme sapabilir
- **Research preview**: güvenilirlik artıyor ama kritik iş akışları için henüz prodüksiyon sınıfı değil

## Cowork Entegrasyonu

Cowork'te ne gerektiğini anlatırsınız; ekran etkileşimi gerekiyorsa Claude yukarıdaki sırayı izleyip Computer Use'a kendisi geçer.

Claude gerçek ekranınızda çalıştığı için eylemleri izleyebilir ve gerektiğinde durdurabilirsiniz. Onay istenen adımlar sürüme ve ayara göre değişebilir; bu yüzden onay davranışına güvenip kontrolü bırakmayın.

## Türk Kurumsal Kullanıcısı İçin Neden Değerli?

Türkiye'deki orta ölçekli şirketlerin çoğu **eski sistemler üzerinde çalışır**:

- 15 yıllık Logo / Mikro / Netsis
- Dahili geliştirilmiş ama hiç API'si olmayan ERP
- Excel tabanlı makro "sistemler"

Bu şirketlerde dijital dönüşüm konuşulur, ama yeni yazılıma geçiş uzun sürer. Bu arada çalışanlar **elle tıklamaya devam eder**. Computer Use, yeni yazılım yatırımını beklemeden bazı **okuma ve raporlama** işlerini denemenizi sağlar. Kazanılan süre sisteme ve işe göre çok değişir; küçük bir işi hem elle hem Claude ile yapıp kendi sürecinizde ölçün.

Kritik soru:

> **"Ekibiniz her gün kimsenin otomatize etmediği bir sisteme tıklayarak yaptığı bir iş var mı?"**

Cevap "evet"se, Computer Use denemeye değer. Önce küçük ve geri alınabilir bir işle başlayın.

## Güvenlik ve Kontrol

Computer Use güçlüdür, sorumluluk da öyle:

- Eylemler ekranınızda görünür çalışır
- Kritik eylemlerde (kayıt silme, form gönderme, para transferi) onay istenip istenmeyeceğine güvenmeyin; bu tür işleri baştan Claude'a vermeyin
- Sandbox izolasyonu yerine gerçek bilgisayarınızda çalışır: bu nedenle test ortamlarında önce deneyin
- Hassas hesap bilgileriniz CLAUDE.md veya workspace'e yazılmamalı, [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) kurallarına bakın

## İlgili Sayfalar

- [Türk İş Araçları](/wiki/temeller/turk-is-araclari/): Logo, Mikro, e-Fatura için hangi yol, computer use kuralı
- [Görsel ve Görüntü](/wiki/yetenekler/vision-image/): Computer Use'un temelindeki görsel muhakeme
- [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): Computer Use'tan önce denenecek öncelikli yöntem
- [Cowork Modu](/wiki/araclar/cowork-modu/): Computer Use'un yaşadığı ortam
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Otomasyon güvenlik kuralları

