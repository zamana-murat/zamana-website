---
title: Claude Türkçe Performansı — Dört Registerda Derin Analiz
description: Claude Türkçeyi nasıl yazıyor? Resmi yazışma, teknik terminoloji, hukuki dil, yaratıcı içerik — dört register, yan yana örnekler, güçlü ve zayıf yönler.
tags:
  - temeller
  - turkce
  - dil-kalitesi
  - yazim
---

"Claude Türkçeyi ne kadar iyi konuşur?" soyut bir sorudur. Bu sayfa somut cevap verir: dört farklı register (dilsel kayıt) — resmi yazışma, teknik terminoloji, hukuki dil, yaratıcı içerik — için Claude'un tipik çıktılarını gösteririz, güçlü ve zayıf yönleri tartışırız.

> **Genel değerlendirme:** Claude 4.x ailesi profesyonel Türkçeyi **doğru** yazar. ChatGPT ile yakın seviyededir. Küçük ince farklar var — bu sayfa o farkları gösterir.

## Register 1: Resmi Yazışma (Kurumsal/Devlet)

En yüksek formalite seviyesi. Bankalar, devlet kurumları, ticaret odaları, resmi yazışma standartlarına uyum gerekir.

### Prompt Örneği

> *"Türk Ticaret Kanunu'na tabi bir anonim şirket olarak, Gelir İdaresi Başkanlığı'na yazılacak, vergi incelemesi sırasında talep edilen belgelerin gönderim ek süresini talep eden resmi bir dilekçe yaz. 200 kelime altı. Resmi Türk devlet yazışma formatı."*

### Claude 4.x Tipik Çıktısı

> **T.C. GELİR İDARESİ BAŞKANLIĞI**
> **[İL] VERGİ DAİRESİ BAŞKANLIĞINA**
>
> **Konu:** Ek Süre Talebi Hk.
> **İlgi:** [Tarih] tarihli ve [Sayı] sayılı yazınız.
>
> İlgi yazınız ile Şirketimizin [Dönem] dönemine ait vergi incelemesi kapsamında talep edilmiş olan belgelerin tarafımıza tebliğinden itibaren verilen süre içerisinde tamamlanamamış bulunmaktadır.
>
> Söz konusu belgelerin önemli bir kısmı geçmiş dönemlere ait olup, arşiv kayıtlarımızdan temin edilmesi gerekmektedir. Bu kapsamda talep edilen belgelerin eksiksiz şekilde hazırlanabilmesi ve tarafınıza intikal ettirilebilmesi için [15 iş günü] ek süre verilmesi hususunu takdirlerinize arz ederiz.
>
> Saygılarımızla,
>
> **[Şirket Ünvanı]**
> [Yetkili Ad Soyad]
> [İmza / Kaşe]

### Claude'un Güçlü Yönleri (Resmi Register'da)

- ✅ **Formal hitap kuralları doğru** — "arz ederiz", "takdirlerinize", "ilgi yazınız"
- ✅ **Devlet yazışma formatı** biliniyor — T.C. başlığı, Konu, İlgi
- ✅ **Pasif cümle yapısı** resmi metne uygun ("talep edilmiş olan", "verilmesi hususu")
- ✅ Üçüncü şahıs kurumsal dil tutarlı ("Şirketimizin", "tarafımıza")

### Zayıf Yönleri

- ⚠️ Çok **arkaik** ifadeler kullanabilir ("bilcümle", "işbu", "müteakiben") — bazı modern resmi yazışmalarda eski görünebilir. **Çözüm:** CLAUDE.md'de "arkaik dil kullanma" belirt.
- ⚠️ **Uzun cümle** eğilimi var — resmi yazışma uzun cümleye izin verir ama okunurluk düşebilir.

### Zamana Tavsiyesi

Resmi devlet yazışması için Claude **çok iyi bir ilk taslak üretir**. Ama imzalamadan önce idari personel veya muhasebeci gözden geçirsin — özellikle:

- Sayı ve tarih alanlarını siz doldurun (halüsinasyon riski)
- Kurum adının tam ünvanını kontrol edin
- Hukuki iddiaları avukata gösterin

---

## Register 2: Teknik Terminoloji (IT, Mühendislik, Finans)

Teknik alan spesifik terimlerle dolu. İngilizce-Türkçe karışımı sık görülür. Doğru kullanım sektöre göre değişir.

### Prompt Örneği

> *"Bir sanayi şirketinin SCADA sisteminin siber güvenlik açıklarını özetleyen 150 kelimelik bir teknik rapor paragrafı yaz. Sektör: gıda üretimi. Hedef kitle: IT direktörü + fabrika müdürü. Teknik doğruluk koru ama ikinci kitle için anlaşılır ol."*

### Claude 4.x Tipik Çıktısı

> Mevcut SCADA altyapısının güvenlik değerlendirmesi üç kritik zafiyet ortaya koymaktadır. Birincisi, PLC'ler ile operatör iş istasyonları arasındaki iletişimin **şifrelenmemiş Modbus TCP protokolü** üzerinden gerçekleşmesi — trafik yakalama durumunda üretim parametrelerine müdahale mümkündür. İkincisi, HMI erişim kontrollerinin **ortak şifre** ile yönetilmesi; bu durum çalışan değişimlerinde erişim izlenebilirliğini imkansız kılar. Üçüncüsü, sistem yazılımlarının **son 18 aydır güncellenmemesi** — bilinen güvenlik yamaları uygulanmamış durumda. Öncelikli eylem olarak HMI erişiminin bireysel kimlik doğrulamaya geçirilmesi ve kritik PLC iletişiminin segment ağda izole edilmesi önerilmektedir. Orta vadede şifreli protokollere (OPC UA Secure) geçiş ve aylık güvenlik yaması uygulaması standardize edilmelidir.

### Claude'un Güçlü Yönleri (Teknik Register'da)

- ✅ **İngilizce terimleri** hedef kitleye göre doğru karar veriyor — "PLC", "HMI", "Modbus TCP" aynen, "iş istasyonu" Türkçeleştirilmiş
- ✅ **Hibrid kitle** için denge iyi — IT direktörü de fabrika müdürü de anlar
- ✅ **Aksiyon yönlendirmeli** kapanış — "önerilmektedir", "standardize edilmelidir"

### Zayıf Yönleri

- ⚠️ **Aşırı Türkçeleştirme** zaman zaman garip sonuçlar verir ("serbest metin alanı" yerine "text field" daha doğal olabilir bazı bağlamlarda)
- ⚠️ **Sektörel jargon tercihi** her zaman yerelliğe uygun olmayabilir — her şirketin iç jargonu farklı

### Zamana Tavsiyesi

CLAUDE.md'de **şirketinizin teknik terminoloji tercihini** belirtin: "PLC İngilizce bırak, 'iş istasyonu' Türkçe yaz, 'firewall' Türkçeleştirme."

---

## Register 3: Hukuki Dil (Sözleşme, Dilekçe, Memo)

En spesifik ve en hassas register. Her kelime hukuki sonuç doğurur.

### Prompt Örneği

> *"Bir tedarikçi sözleşmesinde 'Mücbir Sebep' maddesinin ilk fıkrasını yaz. Türk Borçlar Kanunu m.136 doğrultusunda. 80 kelime altı. Standart kurumsal sözleşme dili."*

### Claude 4.x Tipik Çıktısı

> **10. MÜCBİR SEBEP**
>
> 10.1. Taraflardan birinin Sözleşme'den doğan yükümlülüklerini, makul kontrolleri dışındaki ve öngörülemez nitelikteki olaylar (deprem, sel, savaş, salgın hastalık, genel grev, hükümet tasarrufları vb. dahil ancak bunlarla sınırlı olmaksızın) sebebiyle yerine getirememesi durumunda, Türk Borçlar Kanunu'nun 136. maddesi hükümleri uygulanır. Mücbir sebep halinde etkilenen Taraf, durumu diğer Tarafa yazılı olarak 7 (yedi) gün içinde bildirmekle yükümlüdür.

### Claude'un Güçlü Yönleri (Hukuki Register'da)

- ✅ **Tanımlı terimler** büyük harfle — "Sözleşme", "Taraflar", "Mücbir Sebep" — standart hukuki uygulama
- ✅ **Kanun atıfları** doğru formatta — "Türk Borçlar Kanunu'nun 136. maddesi"
- ✅ **"Dahil ancak bunlarla sınırlı olmaksızın"** tipik sözleşme genişletici ifadesi
- ✅ **Süre + yazılı bildirim** yükümlülüğü — hukuki riski azaltan yaygın kullanım

### Zayıf Yönleri

- ⚠️ **Yanlış madde numarası riski** — Claude bir madde referansı uydurabilir. Her kanun atıfı avukat tarafından doğrulanmalı
- ⚠️ **Çok İngilizce hukuk şablonu** etkisi — "dahil ancak bunlarla sınırlı olmaksızın" İngilizce "including but not limited to" çevirisi, Türk hukuku için gerekli değil
- ⚠️ **Karmaşık cümle** yapısı — hukuki kesinlik için gerekli ama okunurluk zorlu

### Zamana Tavsiyesi

**Pazarlık dışı kural:** Claude'un yazdığı her hukuki metni avukat incelemeli. Kanun atıfları, tarih aralıkları, sayısal yükümlülükler — hepsi doğrulanmalı. Claude bir **süper hızlı ilk taslak yazarıdır** — hukuki otorite değildir.

[Hukuk ve Uyum](../departmanlar/hukuk/) sayfasında detay.

---

## Register 4: Yaratıcı İçerik (Pazarlama, Sosyal Medya)

Marka sesi, ton, yaratıcılık gerektiren content. Buradaki "doğru" esnek — markanın ruhu belirler.

### Prompt Örneği

> *"Küçük butik bir kahve markası için Instagram caption'ı yaz. Yeni bir filtre kahve çeşidi lanse ediyoruz — Etiyopya Yirgacheffe çekirdeği. 80 kelime altı, samimi + entelektüel ton, kahve yapımcıları tarafından saygı gören ama meraklı kullanıcıyı da kapsayan dil. Hashtag dahil."*

### Claude 4.x Tipik Çıktısı

> Etiyopya'nın yükseklerinden sizlere geldi. Yirgacheffe çekirdeğimiz, yasemin çiçeği ve bergamot notalarının peşinden koşanlar için. Filtrelendiğinde açığa çıkan o hafif narenciye bitişi — kahveye dair tanımları sessizce yeniden çiziyor.
>
> Bu hafta bardakta.
>
> #yirgacheffe #specialitycoffee #filtrekahve #türkiyedekahve #coffeetime #morningritual

### Claude'un Güçlü Yönleri (Yaratıcı Register'da)

- ✅ **Marka sesi** kalibrasyonu CLAUDE.md ile güçlü
- ✅ **Metaforik dil** — "kahveye dair tanımları sessizce yeniden çiziyor" gibi hoş dokunuşlar
- ✅ **Türkçe-İngilizce hashtag karışımı** doğru — yerel ve uluslararası erişim dengesi
- ✅ **Hedef kitleye özel** kelime seçimi — "filtrelendiğinde" profesyonel terim, "bardakta" samimi

### Zayıf Yönleri

- ⚠️ **Bazen klişe** üretir — "yükseklerinden", "peşinden koşanlar" tipik kahve pazarlaması
- ⚠️ **Tonu "fazla güzel"** olabilir — markanın kişiliği daha kuru/alaycı ise yumuşatılmalı
- ⚠️ **Emoji kullanımı** talep edilmezse nadirdir — bazı markalar bekler

### Zamana Tavsiyesi

Pazarlama için **CLAUDE.md "Marka Sesi" bölümü kritik.** Şunları net yazın:

- Tonunuzun 3 kelimelik özeti ("sakin + dürüst + esprili" gibi)
- Kaçınılması gereken kelimeler ("eşsiz", "devrim" gibi klişeler)
- Örnek 2-3 cümle — bu tarzda
- Emoji kullanımı: evet / hayır / seçici

Detay: [Pazarlama ve İletişim](../departmanlar/pazarlama/).

---

## Dört Register Tek Bakışta

| Register | Claude Yeteneği | Ana Risk | Zamana Tavsiyesi |
|---|---|---|---|
| **Resmi yazışma** | Çok iyi | Arkaik ifade + sayı uydurma | Gözden geçir, sayılar sizin |
| **Teknik terminoloji** | İyi | Aşırı Türkçeleştirme | CLAUDE.md'ye terminoloji tercihleri yaz |
| **Hukuki dil** | İyi (ilk taslak) | Yanlış madde numarası | **Avukat kontrolü zorunlu** |
| **Yaratıcı içerik** | Çok iyi | Klişe + tonun yumuşak olması | CLAUDE.md'ye marka sesi detayı ekle |

## Genel Türkçe Kuralları

Her register için geçerli Claude güçlü/zayıf yönleri:

### Güçlü

- ✅ **Fiil çekimi** doğru — zaman, kişi, kip
- ✅ **Ünlü uyumu** doğru
- ✅ **Türk adlandırma** doğru — "Murat Bey", "Ayşe Hanım", "Müdür Yardımcısı"
- ✅ **Büyük-küçük harf** Türk kurallarına uygun (devlet kurumu, özel isim)
- ✅ **Ünlem, virgül, tire** doğru yerde
- ✅ **İstanbul Türkçesi** standart — bölgesel tercihler istenirse belirtilmeli

### Zayıf

- ⚠️ **"de"/"da" eki** bazen yanlış yazılır (ayrı mı bitişik mi) — özellikle karmaşık cümlelerde
- ⚠️ **"-ken"/"-iken"** bazen yanlış kullanılır
- ⚠️ **Özel terim Türkçeleştirme** kararı her zaman doğru değil ("download" → "indir" her bağlamda uygun değil)
- ⚠️ **Uzun tire (–) vs kısa tire (-)** tutarsız kullanılabilir

**Çözüm:** Önemli Türkçe metinleri her zaman **insan gözüyle** baştan sona okuyun. "Bu metin benim adımı altına atabileceğim kalitede mi?" testi ([4D Çerçevesi](../prompting/4d-cercevesi/) D3 — Discernment).

## Türkçe Kalitesini CLAUDE.md İle Artırmak

En büyük kalite sıçraması CLAUDE.md'nin "Ton" bölümünde yapılır. Minimum içerik:

```markdown
## Ton

### Türkçe
- Resmi ama robot gibi değil
- Modern İstanbul Türkçesi
- Devrik cümle kullanma
- Yabancı kelime: Türkçe karşılığı varsa Türkçe kullan, yoksa orijinal
- Kaçınılacak: "eşsiz", "devrim yaratan", "mükemmel", "pazarlama klişeleri"
- İstenen: somut sayı, örnek referans, net aksiyon

### Teknik yazım (gerekirse)
- PLC, HMI gibi uluslararası terimler İngilizce
- "Firewall" İngilizce bırak; "sunucu" Türkçe
- API Türkçeleştirme yok
```

Bu 10-15 satır Claude'un Türkçe çıktı kalitesini dramatik değiştirir.

## ChatGPT ile Türkçe Karşılaştırması

Özetle: iki model Türkçede **çok yakın seviyede**. Fark kullanım biçiminde:

- **Claude** daha ağır kurumsal tonda doğal
- **ChatGPT** daha modern şirket kültüründe doğal
- **Her ikisi de** jenerik çıktı verir — kişiselleştirme için CLAUDE.md (Claude) veya Custom Instructions (ChatGPT) şart

Detaylı karşılaştırma: [Claude vs ChatGPT](claude-vs-chatgpt/).

## İlgili Sayfalar

- [Claude Nedir?](claude-nedir/) — Genel Türkçe yeteneği
- [CLAUDE.md Nasıl Yazılır?](../claude-md/nasil-yazilir/) — Ton bölümünü doğru yazmak
- [Pazarlama ve İletişim](../departmanlar/pazarlama/) — Yaratıcı yazım uygulamaları
- [Hukuk ve Uyum](../departmanlar/hukuk/) — Hukuki Türkçe pratikleri
- [4D Çerçevesi](../prompting/4d-cercevesi/) — Çıktı değerlendirme disiplini

