---
title: "Belgeyle Çalışma: Sözleşme, Şartname ve Excel için Prompt"
seoTitle: "Claude ile Uzun Belge, Sözleşme ve Excel Analizi: Prompt Rehberi"
description: "Claude'a sözleşme, ihale şartnamesi ya da Excel tablosu verirken nasıl prompt yazılır? Önce alıntı çıkarma, belgede yoksa yok dedirtme, sayı doğrulama ve KVKK anonimleştirme."
tags:
  - prompting
  - belge
  - sozlesme
  - excel
  - dogrulama
lastUpdated: "2026-10-06"
---

Claude'a bir belge verip "bunu özetle" demek kolaydır. İşin zor kısmı, aldığınız cevaba **güvenip güvenemeyeceğinizi** bilmektir. Belgeyle çalışırken üç hata türü çıkar: belgede olmayan bir şeyi var gibi anlatmak, belgedeki bir maddeyi atlamak ve tablodaki bir sayıyı yanlış okumak ya da toplamak.

Bu sayfa belgeyi **nasıl vereceğinizi ve nasıl soracağınızı** anlatır. Hangi dosya türlerinin açıldığı, yükleme sınırları ve dosyanın nerede durduğu için [Dosya İşleme](/wiki/yetenekler/file-handling/) sayfasına bakın; bu sayfa onunla çakışmaz, üstüne biner. Üç örnek kurgusaldır: bir ihale şartnamesi, bir tedarik sözleşmesi ve bir Excel satış tablosu.

## Belgeyi Yüklemeden Önce: Anonimleştirin

Belge Claude'a yüklendiğinde içeriği işlenmek üzere Anthropic'e gider. Sözleşmelerde ve tablolarda çoğu zaman kişisel veri ya da ticari sır bulunur: ad-soyad, T.C. kimlik numarası, IBAN, adres, maaş, müşteri listesi. Yüklemeden önce şunu sorun: **Bu bilgi olmadan da aynı cevabı alır mıyım?** Çoğu zaman alırsınız.

Pratik yol, gerçek adları yer tutucuyla değiştirmektir:

- "Anadolu Ambalaj A.Ş." yerine **TARAF A**, "Marmara Lojistik Ltd." yerine **TARAF B**
- Gerçek kişi adları yerine **KİŞİ 1**, **KİŞİ 2**
- T.C. kimlik numarası, IBAN ve adres satırlarını silin ya da `[SİLİNDİ]` yazın
- Excel'de kimlik içeren sütunları (ad, telefon, e-posta) yüklemeden önce çıkarın

Anonimleştirme her zaman yeterli olmayabilir; belgenin kendisi gizliyse ya da kişisel veri kalıyorsa şirketinizin politikasına bakın. Ayrıntı: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) ve yurt dışına aktarım kuralları için [KVKK m.9](/wiki/temeller/yurt-disi-aktarim/) sayfaları.

## Altın Sıra: Belge Önce, Soru Sonda

Uzun belgeyle çalışırken prompt'un sırası sonucu etkiler. Anthropic'in rehberi, uzun girdiyi **istemin başına**, sorguyu ve talimatı **sona** koymayı önerir; testlerde bu düzen, özellikle karmaşık ve çok belgeli girdilerde yanıt kalitesini en çok %30'a kadar artırmıştır. Kısa bir belgede fark küçüktür, ama alışkanlık edinmek bedava.

Belgeyi bir etiketle sarmak, Claude'un "bu kısım belge, bu kısım benim sorum" ayrımını net görmesini sağlar. Etiket adları serbesttir, Türkçe olabilir ([XML etiketleri](/wiki/prompting/ileri-seviye/) hakkında ayrıntı İleri Seviye sayfasında):

```
<belge adi="Tedarik Sözleşmesi, TARAF A - TARAF B">
[belgenin metnini yapıştır ya da dosyayı yükle]
</belge>

Yukarıdaki belgeye dayanarak aşağıdaki işi yap.

Görev: [ne istediğin]
Kural: Yalnız belgedeki bilgiyi kullan.
```

Birden çok belge varsa her birine ayrı etiket ve ad verin (`<belge adi="Teklif 1">`, `<belge adi="Teklif 2">`), cevapta hangisinden alıntı yaptığını belirtmesini isteyin.

## Teknik 1: Önce İlgili Alıntıları Çıkar, Sonra Cevapla

Uzun bir belgede cevap genellikle iki-üç paragrafta gizlidir. Claude'a önce o paragrafları **bulup alıntılatmak**, sonra cevabı yalnız o alıntılara dayandırmak, hem doğruluğu hem denetlenebilirliği artırır: alıntıyı belgeyle yan yana koyup kendiniz kontrol edebilirsiniz.

```
Rol: Kamu ihalelerine katılan bir firmanın teklif hazırlık uzmanısın.

<belge adi="Ankara Çevre Hizmetleri İdaresi, Mal Alımı İhale Şartnamesi">
[şartname]
</belge>

Görev: Firmamızın bu ihaleye katılabilmesi için gereken belgeleri ve şartları çıkar.

Adım 1: Önce `<alintilar>` etiketi içinde, yeterlik ve belge şartlarıyla ilgili
bölümleri birebir alıntıla. Her alıntının yanına madde numarasını yaz.
Adım 2: Yalnız bu alıntılara dayanarak aşağıdaki tabloyu hazırla:
| Şart | Madde no | Bize düşen iş | Son tarih (varsa) |

Belgede yazmayan hiçbir şartı ekleme.
```

Madde numarasını istemek önemlidir: "Madde 7.2'de yazıyor" diyen bir cevabı 10 saniyede doğrularsınız, "belgede geçiyor" diyeni doğrulayamazsınız.

**Süre:** şartnamenin ilk okuma ve şart çıkarma turu elle 2-3 saat, Claude ile 20-30 dakika (alıntıları belgeyle karşılaştırmak dahil). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

Claude'un şartnameyi okuması, şartnamenin **mevzuata uygunluğunu** denetlemek anlamına gelmez; teklif ve itiraz kararlarını ilgili uzmanınızla birlikte verin.

## Teknik 2: "Belgede Yoksa Yok De"

Belgeyle çalışırken en tehlikeli cevap, belgede olmayan şeyin **makul göründüğü için** eklenmiş olmasıdır. Claude yardımsever olmaya meyilli; soru "cezai şart ne kadar?" ise ve belgede cezai şart yoksa, bazen alışılmış bir oran önerebilir. Çözüm, "bilmiyorum" demeyi açıkça serbest bırakmaktır:

```
Belgede cevabı bulamazsan "Belgede bu konuda hüküm yok" yaz.
Genel bilginden ya da alışılmış sözleşme pratiğinden tamamlama yapma.
Cevabı bulursan hangi maddede olduğunu belirt.
```

Bu cümleyi kalıcı bir şablonun parçası yapın. Test etmek için bilerek belgede **olmayan** bir şeyi sorun ("Fesih bildirim süresi kaç gün?" ama belgede böyle bir madde yok). Claude "yok" derse şablon işliyor demektir; bir rakam uydurursa kuralı güçlendirin. [Prompt İterasyonu](/wiki/prompting/prompt-iterasyonu/) sayfasındaki test mantığı burada aynen geçerli.

## Örnek: Tedarik Sözleşmesi

Kurgusal bir senaryo: Anadolu Ambalaj A.Ş. (**TARAF A**), Marmara Lojistik Ltd.'den (**TARAF B**) bir yıllık taşıma hizmeti alıyor. Hukuk birimi küçük, sözleşme imzaya yaklaşıyor.

```
Rol: Türk hukuku açısından sözleşme ön incelemesi yapan deneyimli bir hukuk danışmanısın.

<belge adi="Taşıma Hizmeti Sözleşmesi, TARAF A - TARAF B">
[sözleşme]
</belge>

Biz TARAF A'yız (hizmeti alan taraf).

Görev: Sözleşmeyi bizim açımızdan incele.
Adım 1: Aşağıdaki konularda ilgili maddeleri birebir alıntıla:
cezai şart, fesih ve bildirim süresi, fiyat güncelleme, sorumluluk sınırı, uyuşmazlık çözümü.
Adım 2: Her biri için tablo: Konu | Madde no | Ne diyor (1 cümle) | Bizim için risk (düşük/orta/yüksek) | Gerekçe

Kurallar:
- Belgede olmayan konu için "Sözleşmede hüküm yok" yaz
- Bu bir ön incelemedir, hukuki görüş değildir; avukat onayı gerekeceğini sonda belirt
```

Çıktıyı iki süzgeçten geçirin: önce alıntıları sözleşme metniyle karşılaştırın, sonra "risk" yorumlarını avukatınıza gösterin. Claude'un sözleşme incelemesi hızlı bir **ilk eleme**dir, imza kararının dayanağı değildir. Hazır şablon için [Prompt Kataloğu E1](/wiki/prompting/prompt-katalogu/), sektör bakışı için [Hukuk](/wiki/departmanlar/hukuk/) sayfası.

**Süre:** sözleşmenin ilk ön okuması elle 1-2 saat, Claude ile 15-20 dakika (alıntı kontrolü dahil); avukat incelemesi bunun yerine geçmez. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

## Örnek: Excel Satış Tablosu

Tablolarda sorun farklıdır: metin gibi "yanlış anlatmak" değil, **yanlış saymak** riski vardır. Dil modelleri uzun sayı sütunlarını gözle toplarken hata yapabilir; güvenilir yol, hesabı Claude'a **kod çalıştırarak** yaptırmaktır. claude.ai'de XLSX yüklemek için [code execution](/wiki/yetenekler/code-execution/) özelliğinin açık olması gerekir.

Kurgusal bir örnek: Karadeniz Pano Sanayi'nin 2026 ilk altı ay satışlarını içeren bir tablo (sütunlar: Tarih, Bölge, Müşteri Kodu, Ürün, Adet, Tutar).

```
Rol: Satış verisini yönetime özetleyen bir satış operasyon analistisin.

Ekteki Excel dosyasını analiz et.

Önce kontrol:
1. Kaç satır ve hangi sütunlar var? İlk 5 satırı aynen yaz.
2. Boş ya da sayı olmayan hücre var mı? Varsa say, işlem dışı bırakma, bana bildir.

Sonra görev:
3. Bölge bazında toplam tutar ve adet tablosu
4. Ocak-Haziran arasında aylık toplam tutar
5. Toplam tutar en yüksek 3 müşteri kodu

Kurallar:
- Hesapları kod çalıştırarak yap, gözle toplama
- Hangi sütunu hangi işlemle kullandığını bir cümleyle yaz
- Bölge toplamlarının toplamı genel toplama eşit mi? Karşılaştır, farkı göster
- Tabloda olmayan bir veriyi (örn. hedef, geçen yıl) uydurma, "tabloda yok" yaz
```

Yanıt geldiğinde şu üç denetimi yapın:

1. **Satır sayısı ve ilk 5 satır** sizin dosyanızla aynı mı? Farklıysa Claude yanlış sayfayı ya da kesik veriyi okumuş olabilir
2. **Tek bir değeri elle doğrulayın:** Excel'de bir bölgenin toplamını filtreyle alın, Claude'unkiyle karşılaştırın
3. **Genel toplam** Excel'deki toplamla aynı mı? Küçük de olsa fark varsa nedenini sorun ("Hangi satırlar bu farka yol açıyor?")

Claude'a Excel'i doğrudan çalıştırtmak isterseniz [Office ve Chrome](/wiki/araclar/office-ve-chrome/) sayfasındaki Excel eklentisi de bir yoldur; yine aynı doğrulama alışkanlığı geçerlidir.

**Süre:** altı aylık tablodan bölge, ay ve müşteri özeti elle 1-2 saat, Claude ile 10-20 dakika (doğrulama dahil). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

## Çok Uzun Belgeyle Çalışırken

Yüzlerce sayfalık bir şartname ya da sözleşme paketinde bağlam penceresi ve yükleme sınırları devreye girer (sınırlar için [Dosya İşleme](/wiki/yetenekler/file-handling/) sayfası). Pratik düzen:

1. **Önce haritasını çıkarın:** "Belgenin bölüm başlıklarını ve her bölümün tek cümlelik özetini ver." Bu harita sonraki sorularda yol gösterir
2. **Bölüm bölüm sorun:** tüm belgeye tek bir dev soru yerine, ilgili bölümlere odaklı sorular
3. **Sayfa ya da madde numarası isteyin:** uzun belgede kaynaksız cevap denetlenemez
4. **Aynı konuşmada ilerleyin:** belge bir kez yüklenir, sorular peş peşe gelir. Konuşma çok uzarsa ve Claude ilk bölümleri kaçırmaya başlarsa yeni bir konuşma açıp özet notlarınızla devam edin ([Bağlam Sıkıştırma](/wiki/yetenekler/context-compaction/))
5. **Tekrar eden belge işi için** belgeyi bir [Projeye](/wiki/araclar/projects/) koyun; her sohbette yeniden yüklemezsiniz

## Sık Yapılan Hatalar

| Hata | Sonuç | Düzeltme |
|---|---|---|
| "Bu sözleşmeyi özetle" | Hangi maddeyi atladığını bilemezsiniz | Konu listesi verin, madde numarası isteyin |
| Soruyu belgenin önüne yazmak | Karmaşık belgede cevap kalitesi düşebilir | Belge önce, soru sonda |
| "Yoksa yok de" demeden sormak | Makul görünen uydurma cevap | Belgede yoksa "hüküm yok" yazdırın |
| Excel toplamına körü körüne güvenmek | Sessiz hesap hatası | Kodla hesaplatın, bir değeri elle doğrulayın |
| Gerçek adları ve kimlikleri yüklemek | KVKK ve gizlilik riski | Yer tutucu kullanın, kimlik sütunlarını çıkarın |
| Cevabı hukuki görüş saymak | İmza ya da teklif kararı yanlış zeminde | Ön inceleme olarak görün, uzmana gösterin |

## Hızlı Kontrol Listesi

- [ ] Kişisel veriyi ve gizli bilgiyi anonimleştirdim mi?
- [ ] Belge prompt'un başında, sorum sonda mı?
- [ ] "Belgede yoksa yok de" kuralını yazdım mı?
- [ ] Madde ya da sayfa numarası istedim mi?
- [ ] Önemli bir alıntıyı belgeyle karşılaştırdım mı?
- [ ] Sayıları kodla hesaplattım ve bir değeri elle doğruladım mı?
- [ ] Kritik karar için uzmana (avukat, mali müşavir) gösterecek miyim?

## İlgili Sayfalar

- [Dosya İşleme](/wiki/yetenekler/file-handling/): Hangi dosyalar açılır, sınırlar, dosyalar nerede durur
- [İleri Seviye Prompt Teknikleri](/wiki/prompting/ileri-seviye/): XML etiketleri ve zincirleme
- [Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/): Çıktı biçimini örnekle öğretmek
- [Prompt Kataloğu](/wiki/prompting/prompt-katalogu/): Hazır sözleşme ve veri analizi şablonları
- [Prompt İterasyonu](/wiki/prompting/prompt-iterasyonu/): Şablonu test etmek ve sürümlemek
- [Yaygın Hatalar](/wiki/prompting/yaygin-hatalar/): Tipik prompt hataları
- [Sınırlamalar](/wiki/temeller/sinirlamalar/): Claude'un hata yaptığı yerler
- [Code Execution](/wiki/yetenekler/code-execution/): Hesabı kodla yaptırmak
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Belge yüklerken veri koruma
