---
title: "Claude'a Kişisel Veri Yüklemeden Önce: KVKK m.9 Yurt Dışı Aktarım"
seoTitle: "Claude ve KVKK m.9: Yurt Dışına Veri Aktarımı Rehberi"
description: "Claude'a kişisel veri girmek yurt dışına aktarımdır. KVKK m.9 sırası (yeterlilik kararı, standart sözleşme, arızi aktarım), 5 iş günü bildirimi ve şirketin atacağı adımlar."
tags:
  - temeller
  - kvkk
  - yurt-disi-aktarim
  - gizlilik
lastUpdated: "2026-10-06"
---

Claude'a kişisel veri girmeden önce şirketlerin en sık atladığı soru: **bu veri yurt dışına aktarılıyor, dayanağınız ne?** Bu sayfa [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasının yurt dışı aktarım bölümünün ayrıntısıdır. Plan, DPA ve eğitim ayarı gibi genel başlıklar orada.

> **Bu sayfa hukuki görüş değildir.** Mevzuat 5 Ekim 2026 itibarıyla resmî kaynaklardan derlendi. KVKK uyumunuzu mutlaka hukuk danışmanınızla doğrulayın.

## Kısa özet

Anthropic ABD merkezli bir şirket. Claude'a kişisel veri yüklediğinizde bu veri yurt dışına aktarılmış olur. KVKK Kurumu'nun "Kişisel Verilerin Yurt Dışına Aktarılması Rehberi" (Ocak 2025), sunucuları yurt dışında olan bulut hizmetlerinin kullanımını ve yurt dışından uzaktan erişimi aktarım sayar. Kurum'un Kasım 2025 tarihli "Üretken Yapay Zekâ ve Kişisel Verilerin Korunması Rehberi" ise yurt dışındaki bir hizmet sağlayıcı üzerinden üretken yapay zekâ kullanımının Kanun m.9 ve Yönetmelik'e uygun olması gerektiğini söyler. Kişisel veri girmiyorsanız (anonim iş metni, genel araştırma, kod) bu sayfa sizi ilgilendirmez.

## Kanun ne diyor (7499 sayılı Kanun ile değişen m.9, 1 Haziran 2024'ten beri yürürlükte)

1. **Önce yeterlilik kararı.** Kurul, bir ülke, sektör ya da uluslararası kuruluş için yeterlilik kararı verir ve Resmî Gazete'de yayımlar. Bu sayfanın yazıldığı tarihte ABD için (ya da herhangi bir ülke için) yayımlanmış bir karar bulamadık. Güncel durumu kvkk.gov.tr ve Resmî Gazete'den kontrol edin.
2. **Karar yoksa uygun güvence.** m.9/4'e göre seçenekler: Kurul'un ilan ettiği **standart sözleşme**, Kurul onaylı **bağlayıcı şirket kuralları** (yalnız aynı grup şirketleri arasında), Kurul izinli **taahhütname**, kamu kurumları arası anlaşma. Bir şirketin Claude gibi hazır bir bulut hizmetini kullanması için pratikte standart sözleşme tek gerçekçi yoldur.
3. **İkisi de yoksa arızi aktarım (m.9/6).** Açık rıza dahil altı istisna vardır, ama aktarımın **arızi** olması şarttır: düzenli olmayan, tek ya da birkaç kez olan, olağan faaliyet akışı dışındaki aktarım (Yönetmelik m.16). Ekibinizin Claude'u günlük işte kullanması olağan faaliyet akışıdır. Kurum'un üretken yapay zekâ rehberi de açık rızanın alternatif bir çözüm olmadığını, aktarımın sıradaki yasal şartlardan birine dayanması gerektiğini vurgular. Yani "çalışanlardan/müşterilerden açık rıza aldık" demek, düzenli Claude kullanımı için güvenli bir dayanak değildir.
4. **Ayrıca işleme şartı.** m.9/1 ve m.9/4 gereği, aktarım için ayrıca m.5 (ya da özel nitelikli veride m.6) işleme şartlarından biri bulunmalıdır. Yurt dışı aktarım güvencesi, işlemenin kendisini hukuka uygun yapmaz.
5. **Özel nitelikli veri (m.6).** Sağlık, biyometrik, ceza mahkûmiyeti gibi veriler için m.6/3 şartı aranır ve standart sözleşmede ek önlemler öngörülür. Pratik kural değişmez: bu verileri Claude'a girmeyin.
6. **Sonraki aktarımlar (m.9/8).** Anthropic'in veriyi alt işleyicilere iletmesinde de aynı güvenceler aranır. DPA'daki alt işleyici listesini bu yüzden okuyun.

## Standart sözleşme nasıl çalışır (Yönetmelik m.14; Resmî Gazete 10 Temmuz 2024, sayı 32598)

- Kurul dört metin ilan etti: veri sorumlusundan veri sorumlusuna, **veri sorumlusundan veri işleyene**, veri işleyenden veri işleyene, veri işleyenden veri sorumlusuna. Ticari Claude kullanımında siz veri sorumlususunuz, Anthropic çoğunlukla veri işleyen olduğundan genelde "veri sorumlusundan veri işleyene" metni gündeme gelir. Roller somut olaya göre belirlenir; hukuk danışmanınız teyit etmeli.
- Metin **değiştirilemez**. Taraflar ya da yetkili temsilcileri **imzalar**. Sözleşme yabancı dilde de yapılırsa Türkçe metin esastır.
- İmzalar tamamlandıktan sonra **5 iş günü içinde** Kurum'a bildirilir (m.9/5). Bildirimi veri sorumlusu ya da veri işleyen yapar; yöntemler fiziki teslim, KEP ya da Kurum'un belirlediği yöntemdir (Kurum çevrimiçi bir bildirim modülü yayımladı). Bildirmemek m.18/1-d uyarınca idari para cezası gerektirir. Güncel ceza tutarını KVKK'nın yıllık duyurusundan kontrol edin.

## Anthropic tarafında ne biliyoruz, ne bilmiyoruz

- Anthropic'in DPA'sı (incelediğimiz sürüm: 24 Şubat 2025 tarihli) AB standart sözleşme hükümlerinin 2. ve 3. modülünü, Birleşik Krallık ekini ve İsviçre ekini içerir. Metinde Türkiye, KVKK ya da 6698 geçmiyor. Yani DPA'daki "SCC", GDPR içindir ve **KVKK m.9 için Kurul'un ilan ettiği Türk standart sözleşmesi yerine geçmez.**
- DPA, işleyen ilişkisini sözleşmeyle düzenlemeniz (m.12/2) için değerlidir. Ama tek başına yurt dışı aktarım güvencesi olduğunu savunmak tartışmalıdır. Uygulamada DPA ile yetinen şirketler var; bu yaklaşımın Kurum tarafından kabul edildiğine dair bir karar bulamadık.
- Anthropic'in Türk standart sözleşmesini imzalayıp imzalamayacağına dair kamuya açık bir bilgi bulamadık. DPA, yurt dışı aktarım gereklilikleri için Anthropic'in "makul destek" vereceğini söyler; bu bir imza taahhüdü değildir. **Bu nokta belirsiz, Anthropic'e yazılı sorarak netleştirin.**

## Claude'a kişisel veri yüklemeden önce şirketiniz ne yapmalı

1. **Gerçekten kişisel veri girecek misiniz?** Girmeyecekseniz politikanıza "kişisel veri yasak" yazın ve burada durun. İsim yerine kod kullansanız bile yeniden kimliklendirilebilen veri kişisel veri olarak kalabilir.
2. **Ticari plan kullanın.** Team, Enterprise ya da API. Free, Pro ve Max'te DPA yoktur ve veri işleyen ilişkisi belgesizdir.
3. **İşleme şartınızı ve aydınlatmanızı hazırlayın.** Hangi m.5 (özel nitelikli veride m.6) şartına dayandığınızı yazın. Aydınlatma metniniz (m.10) verinin kimlere ve hangi amaçla aktarılabileceğini, yurt dışı aktarımı da içerecek şekilde söylesin.
4. **Aktarım güvencenizi kurun.** Anthropic'e Türk standart sözleşmesini (veri sorumlusundan veri işleyene) imzalamaya hazır olup olmadığını yazılı sorun. İmza gelirse 5 iş günü içinde Kurum'a bildirin ve takvime işleyin.
5. **Güvence yoksa kişisel veri yüklemeyin.** Anthropic imzalamıyor ya da yanıt vermiyorsa, kişisel veri içeren işleri Claude dışında tutun ya da hukuk danışmanınızla risk kabulünü yazılı olarak değerlendirin. Açık rızayı düzenli kullanımın dayanağı yapmayın.
6. **Kaydedin.** Dayanağı, imzalı sözleşmeyi, bildirim kanıtını ve DPA'nın güncel sürümünü KVKK dosyanıza koyun. Envanterinizi ve (kaydınız varsa) VERBİS'i güncel tutun.

## İlgili Sayfalar

- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Plana göre veri politikası, DPA, VERBİS, sektör ekleri
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Kişisel veri maddesinin politika karşılığı
- [Takım ve Admin](/wiki/temeller/takim-ve-admin/): Ticari plan ve DPA kapsamı
