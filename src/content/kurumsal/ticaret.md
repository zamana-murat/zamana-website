---
title: "Ticaret: e-ticaret ve perakendede Claude ajanları"
seoTitle: "E-Ticaret ve Perakendede Claude: Alışveriş ve Satıcı Ajanları"
description: "Claude ile alışveriş asistanı ve satıcı ajanı: Anthropic'in açık kaynak ticaret ajanı şablonu, Türk e-ticaretine uyarlama, kampanya, iade ve KVKK notları."
eyebrow: "Kullanım alanı"
lead: "Anthropic, e-ticaret ve perakende şirketlerinin kendi uygulamalarına Claude tabanlı iki tür ajan kurması için açık kaynak bir şablon yayımladı: müşteriye alışverişte yardım eden ajan ve mağaza ekibine operasyonda yardım eden ajan. Bu bir hazır ürün değil, yazılım ekibinizin üzerine inşa edeceği bir başlangıç noktası."
heroImage: "/images/kurumsal/ticaret/hero.webp"
heroAnimation: "ticaret"
heroAlt: "Kurgusal bir mobilya mağazasının alışveriş asistanında müşteri 25.000 TL bütçeyle ev ofisi kurmak istediğini yazıyor; ajan stok ve fiyatı kontrol edip 22.640 TL'lik üç ürünlük set öneriyor, ürünleri sepete ekliyor ve bel desteği tercihini kaydediyor."
availability: "Hazır ürün değil, açık kaynak referans uygulama; Anthropic bakım veya SLA vermez. Çalıştırmak için Claude API kullanılır, ücret token başına"
sourceUrl: "https://claude.com/solutions/commerce"
sourceTitle: "Build commerce agents with Claude"
related:
  - { label: "Perakende ve e-ticaret departmanı (wiki)", href: "/wiki/departmanlar/perakende-eticaret/" }
  - { label: "İhracat departmanı (wiki)", href: "/wiki/departmanlar/ihracat/" }
  - { label: "Yapay zeka ajanları", href: "/kurumsal/ajanlar/" }
  - { label: "Müşteri desteği", href: "/kurumsal/musteri-destegi/" }
  - { label: "Claude Platform", href: "/kurumsal/platform/" }
  - { label: "Türkçe performansı (wiki)", href: "/wiki/temeller/turkce-performansi/" }
order: 50
lastUpdated: "2026-10-06"
---

## Nedir?

Anthropic'in "Claude Commerce agents" adını verdiği çalışma, perakende, seyahat, telekom ve etkinlik sektörlerindeki şirketlerin kendi uygulamalarına alışveriş ajanı kurmasını hızlandırmak için yayımlanmış bir **referans uygulama**. Kod GitHub'da açık; şirketler kopyalayıp (fork) kendi sistemlerine bağlar ve kendi ürünleri gibi işletir.

Kaynak sayfadaki sık sorulan sorulardan iki net cevap, Türk şirketlerinin ilk soracağı soruları da karşılıyor:

- **Ürün mü, kod mu?** Kod. Anthropic bakım yapmaz, hizmet seviyesi (SLA) taahhüdü vermez; ne kurarsanız sizindir.
- **Anthropic ticarete mi giriyor?** Hayır. Anthropic mağaza, katalog, tedarik zinciri veya teslimat işletmiyor; reklam ya da ücretli ürün öne çıkarma da yok. Claude yalnızca ajanın arkasındaki model.

Şablonda iki ajan tipi var: müşterinin karşısındaki **alışveriş ajanı** ve mağaza ekibinin yanındaki **satıcı ajanı**.

## Alışveriş ajanı: bütçeden sepete tek konuşmada

Alışveriş ajanı web sitenizin veya uygulamanızın içinde çalışır; müşteriyi başka bir pazaryerine yönlendirmez. Kataloğunuza, sepetinize, ödeme adımınıza, müşteri tercihlerine ve sipariş geçmişine bağlanır. Kaynak sayfadaki yetenekler:

- Katalogda arama ve ürün keşfi ("sırtım ağrıyor, ev ofisi kuruyorum")
- Planlama ve alışveriş listesi (bütçeye göre set oluşturma)
- Sepete ekleme ve ödeme adımı
- Sipariş ve iade sorularında müşteri hizmeti
- Kişiselleştirme ve tercihleri hatırlama

Anthropic'in blog yazısına göre Claude üzerinde alışveriş ajanı çalıştıran perakendecilerde sepetler yüzde 35'e kadar büyümüş, müşterilerin satın almayı tamamlama olasılığı yüzde 60 artmış. Sayfa ayrıca satış ajanlarıyla satış yapan küçük işletmelerde dönüşümün yüzde 40 arttığını belirten bir müşteri sonucu aktarıyor. Bunlar kaynağın rakamlarıdır; kendi mağazanızda A/B testiyle ölçmeden hedef olarak kullanmayın.

## Satıcı ajanı: sabah özeti ve operasyon

Satıcı ajanı mağaza ekibi içindir. Satış, stok, fiyat ve kampanya verinizi izler, dikkat gereken yeri işaretler ve taslak hazırlar.

![Kurgusal bir mağazanın satıcı ajanı sabah özeti: kampanya haftası öncesi stoku dört günden az kalan iki ürün, rakip fiyatların üzerinde kalan bir ürün ve iade oranı yükselen bir ürün işaretlenmiş; indirim ve sipariş taslakları onay bekliyor](/images/kurumsal/ticaret/satici-ozeti.webp)

- Satış analizi ve içgörü ("dün neden düştük?")
- Katalog ve stok yönetimi (azalan stok, yavaş dönen ürün)
- Fiyat ve kampanya önerisi (indirim fırsatı, marj kontrolü)
- Pazarlama kampanyası taslağı
- Kişiselleştirme ve hafıza

Önemli varsayılan: kaynak sayfaya göre satıcı ajanı değişiklikleri kendiliğinden yayına almaz, **taslak hazırlar ve onaya sunar**. Hangi değişikliklerin hangi kurallarla otomatik onaylanacağını siz tanımlarsınız.

## Türkiye'de uyarlama notları

Aşağıdaki örnekler kurgusaldır. Kaynaktaki müşteri hikâyeleri yabancı şirketlere aittir.

- **Kampanya dönemleri:** Kaynak sayfa yılbaşı alışveriş sezonuna yetişmeyi vurguluyor. Türkiye'de bunun karşılığı kasım ayındaki büyük indirim günleri ve yılbaşı. Bir ajanı ilk kez kampanya haftasında açmayın; en az birkaç hafta önce sınırlı trafikle deneyin.
- **Türkçe arama ve ürün açıklaması:** Müşteriler "bel destekli", "sırt ağrısına iyi gelen", "ofis koltuğu" gibi farklı ifadelerle aynı ürünü arar. Claude Türkçeyi iyi anlar, ama kataloğunuzdaki ürün bilgisi zayıfsa ajan da zayıf kalır. Önce ürün açıklamalarını ve özellik alanlarını düzeltin: [Türkçe performansı](/wiki/temeller/turkce-performansi/).
- **Pazaryeri satıcıları:** Alışveriş ajanı kendi sitenizde çalışır. Satışınızın çoğu pazaryerlerinden geliyorsa satıcı ajanı, pazaryeri panellerinden aldığınız raporlarla veya pazaryerinin satıcı arayüzü (API) üzerinden beslenebilir; bu bağlantıyı ekibiniz kurar.
- **E-ihracat:** Aynı katalogdan farklı dillerde ürün açıklaması ve müşteri yanıtı üretmek doğal bir kullanım. Fiyat, kur ve gümrük bilgisi ise her zaman sizin sisteminizden gelmeli.
- **İade ve cayma hakkı:** Ajan iade koşulunu uydurmamalı; yanıtları sizin iade politikanızdan ve sipariş kaydından üretmeli. Mesafeli satışta cayma hakkı ve iade kuralları 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve ilgili yönetmeliklere tabidir; ajanın metinlerini hukuk biriminizle teyit edin.
- **Kampanya mesajları:** Ajanın hazırladığı e-posta ve SMS kampanyaları, ticari elektronik ileti izni kurallarına (6563 sayılı Kanun) uygun gönderilmelidir. Ajan taslak yazar, gönderim izni ve listesi sizin sisteminizde kalır.

## Güvenlik, fiyat doğruluğu ve KVKK

- **Fiyat ve ürün uydurma:** Kaynak sayfaya göre şablonun altyapısı, ajanın katalogda olmayan ürün veya fiyat üretmesini yapısal olarak engelleyecek şekilde kurulu; fiyat her zaman sistemden okunur.
- **Yetki sınırları:** Sepet tutarı ve iade yetkisi için kesin sınırlar konur; sınırı aşan işlem insan incelemesine düşer.
- **Kendi kataloğunuzla test:** Şablondaki Claude Code eklentisi, kendi ürün, fiyat ve politikalarınıza karşı test senaryoları üretmek için kullanılabiliyor.
- **Demo altyapısı üretime hazır değil:** Depo bir tehdit modeli ve savunma katmanlarını belgeliyor, ama örnek arka uçlar üretim sertleştirmesinden geçmemiş. Canlıya almadan önce kendi güvenlik incelemenizi yapın.
- **Kişisel veri:** Alışveriş geçmişi, tercihler ve hafıza kişisel veridir ve model işlemesi için Anthropic'e gider. API'de girdi ve çıktılar varsayılan olarak model eğitiminde kullanılmaz, veri işleme sözleşmesi (DPA) ticari şartlara dahildir. KVKK (6698) kapsamında aydınlatma metni, açık rıza gereken durumlar ve yurt dışı aktarım konusunu hukuk biriminizle netleştirin: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

## Nasıl kurulur, ne kadar tutar?

Kaynak sayfa dört yol sayıyor; hangisinin seçileceği yazılım ekibinizin kararıdır:

1. **Messages API:** Modele doğrudan erişim, ajan döngüsünün tam kontrolü.
2. **Claude Agent SDK:** Python veya TypeScript ile hazır ajan altyapısı.
3. **Claude Managed Agents:** Sunucu tarafını yönetmeden, birleştirilebilir API'lerle üretim ajanı.
4. **Claude Code eklentisi:** Referans uygulamayı Claude Code içinde kendi sisteminize uyarlamak.

Kaynak sayfadaki müşteri görüşlerine göre kurulum hızlı: Wix mühendislerinin on beş dakikada çalışan bir ajana, Fetch ekibinin bir saatten kısa sürede iki ajanın yerel kurulumuna ulaştığı aktarılıyor. Canlıya almak ise katalog, ödeme, stok ve müşteri sistemlerinize bağlantı, test ve güvenlik incelemesi demek; asıl iş oradadır.

Ücret Claude API kullanımına göre token başına ödenir. Güncel API fiyatları milyon token başına girdi ve çıktı için Opus 5.5'te 4 ve 20 dolar, Sonnet 5.5'te 2 ve 10 dolar, Haiku 4.5'te 1 ve 5 dolar. Yoğun trafikli bir mağazada model seçimi ve önbellekleme maliyeti doğrudan belirler; kampanya dönemi trafiğiyle hesaplayın. Ödeme dolar ile, doğrudan Anthropic'e. Kurumsal görüşme için Anthropic satış ekibiyle iletişime geçilir.

## Zamana'nın notu

Zamana programları ajan geliştirmeyi öğretmez. Ama bir e-ticaret şirketinde Claude'un en hızlı geri dönüşü çoğu zaman ajan kurmadan, ekiplerin günlük işinde gelir: ürün açıklaması yazmak, kampanya planlamak, satış raporunu yorumlamak, müşteri yanıt şablonlarını iyileştirmek. Bu tarafta ekibinizi hazırlamak için [perakende ve e-ticaret sayfamıza](/wiki/departmanlar/perakende-eticaret/) ve [kurumsal programa](/programlar/kurumsal/) bakabilirsiniz.
