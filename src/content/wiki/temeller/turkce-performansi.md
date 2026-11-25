---
title: "Claude Türkçe Performansı: Dört Register'da Derin Analiz"
seoTitle: "Claude Türkçe Biliyor mu? Dört Kayıtta Örneklerle"
description: Claude Türkçeyi nasıl yazıyor? Dört register (resmi yazışma, teknik terminoloji, hukuki dil, yaratıcı içerik), yan yana örnekler, güçlü ve zayıf yönler.
tags:
  - temeller
  - turkce
  - dil-kalitesi
  - yazim
lastUpdated: "2026-11-25"
---

Claude'un Türkçesini anlamanın en kolay yolu örneklerine bakmak. Bu sayfada dört register (dilsel kayıt) için Claude'un tipik bir çıktısı ve her birinde nerede iyi, nerede zayıf olduğu var: resmi yazışma, teknik terminoloji, hukuki dil ve yaratıcı içerik.

> **Kısa cevap:** Evet, Claude Türkçe biliyor ve profesyonel Türkçeyi çoğunlukla doğru yazıyor. En sık hatası sayı, madde numarası ve ek yazımında. Bu sayfadaki değerlendirmeler Zamana'nın kendi kullanım gözlemi; bağımsız bir ölçüm ya da Anthropic'in yayımladığı bir Türkçe karşılaştırması değil.

## Register 1: Resmi Yazışma (Kurumsal/Devlet)

Formalitenin en yüksek olduğu kayıt. Bankalara, devlet kurumlarına ve ticaret odalarına yazarken resmi yazışma standartlarına uymak gerekir.

### Prompt Örneği

> *"Türk Ticaret Kanunu'na tabi bir anonim şirket olarak, Gelir İdaresi Başkanlığı'na yazılacak, vergi incelemesi sırasında talep edilen belgelerin gönderim ek süresini talep eden resmi bir dilekçe yaz. 200 kelime altı. Resmi Türk devlet yazışma formatı."*

### Claude Tipik Çıktısı

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

- ✅ Resmi hitap kalıplarını doğru kullanıyor: "arz ederiz", "takdirlerinize", "ilgi yazınız".
- ✅ Devlet yazışmasının biçimini biliyor: T.C. başlığı, Konu, İlgi.
- ✅ Resmi metne uyan edilgen cümleler kuruyor ("talep edilmiş olan", "verilmesi hususu").
- ✅ Kurum ağzından yazmayı baştan sona sürdürüyor ("Şirketimizin", "tarafımıza").

### Zayıf Yönleri

- ⚠️ Zaman zaman "bilcümle", "işbu", "müteakiben" gibi arkaik kelimeler seçiyor; bugünkü resmi yazışmalarda bunlar eski duruyor. CLAUDE.md'ye "arkaik dil kullanma" yazmanız yeterli.
- ⚠️ Cümleleri uzun kuruyor. Resmi yazışmada uzun cümle kabul görür, ama metni okumak zorlaşır.

### Pratik Tavsiye

Resmi devlet yazışmasında Claude çok iyi bir ilk taslak yazar. İmzalamadan önce idari personel ya da muhasebeci metni okusun ve özellikle şunlara baksın:

- Sayı ve tarih alanlarını siz doldurun (Claude bunları uydurabilir)
- Kurumun tam unvanını kontrol edin
- Hukuki iddiaları avukata gösterin

---

## Register 2: Teknik Terminoloji (IT, Mühendislik, Finans)

Teknik metinler alana özgü terimlerle dolu ve İngilizce ile Türkçe sık sık karışıyor. Hangi terimin doğru olduğu sektörden sektöre değişir.

### Prompt Örneği

> *"Bir sanayi şirketinin SCADA sisteminin siber güvenlik açıklarını özetleyen 150 kelimelik bir teknik rapor paragrafı yaz. Sektör: gıda üretimi. Hedef kitle: IT direktörü + fabrika müdürü. Teknik doğruluk koru ama ikinci kitle için anlaşılır ol."*

### Claude Tipik Çıktısı

> Mevcut SCADA altyapısının güvenlik değerlendirmesi üç kritik zafiyet ortaya koymaktadır. Birincisi, PLC'ler ile operatör iş istasyonları arasındaki iletişimin **şifrelenmemiş Modbus TCP protokolü** üzerinden gerçekleşmesi; trafik yakalanırsa üretim parametrelerine müdahale mümkündür. İkincisi, HMI erişim kontrollerinin **ortak şifre** ile yönetilmesi; bu durum çalışan değişimlerinde erişim izlenebilirliğini imkansız kılar. Üçüncüsü, sistem yazılımlarının **son 18 aydır güncellenmemesi**; bilinen güvenlik yamaları uygulanmamıştır. Öncelikli eylem olarak HMI erişiminin bireysel kimlik doğrulamaya geçirilmesi ve kritik PLC iletişiminin segment ağda izole edilmesi önerilmektedir. Orta vadede şifreli protokollere (OPC UA Secure) geçiş ve aylık güvenlik yaması uygulaması standardize edilmelidir.

### Claude'un Güçlü Yönleri (Teknik Register'da)

- ✅ Hangi terimin İngilizce kalacağına hedef kitleye göre doğru karar veriyor: "PLC", "HMI", "Modbus TCP" olduğu gibi kalmış, "iş istasyonu" Türkçe yazılmış.
- ✅ Metni hem IT direktörü hem fabrika müdürü anlayabiliyor.
- ✅ Paragraf yapılacak işlerle bitiyor ("önerilmektedir", "standardize edilmelidir").

### Zayıf Yönleri

- ⚠️ Bazen fazla Türkçeleştiriyor. Bazı bağlamlarda "serbest metin alanı" yerine "text field" daha doğal durur.
- ⚠️ Sektör jargonunda seçtiği kelime sizin şirketinizde kullanılan kelime olmayabilir; her şirketin kendi iç dili var.

### Pratik Tavsiye

Şirketinizin terim tercihlerini CLAUDE.md'ye yazın: "PLC İngilizce bırak, 'iş istasyonu' Türkçe yaz, 'firewall' Türkçeleştirme."

---

## Register 3: Hukuki Dil (Sözleşme, Dilekçe, Memo)

Hata payının en dar olduğu kayıt, çünkü sözleşmede tek bir kelime hukuki sonuç doğurabilir.

### Prompt Örneği

> *"Bir tedarikçi sözleşmesinde 'Mücbir Sebep' maddesinin ilk fıkrasını yaz. Türk Borçlar Kanunu m.136 doğrultusunda. 80 kelime altı. Standart kurumsal sözleşme dili."*

### Claude Tipik Çıktısı

> **10. MÜCBİR SEBEP**
>
> 10.1. Taraflardan birinin Sözleşme'den doğan yükümlülüklerini, makul kontrolleri dışındaki ve öngörülemez nitelikteki olaylar (deprem, sel, savaş, salgın hastalık, genel grev, hükümet tasarrufları vb. dahil ancak bunlarla sınırlı olmaksızın) sebebiyle yerine getirememesi durumunda, Türk Borçlar Kanunu'nun 136. maddesi hükümleri uygulanır. Mücbir sebep halinde etkilenen Taraf, durumu diğer Tarafa yazılı olarak 7 (yedi) gün içinde bildirmekle yükümlüdür.

### Claude'un Güçlü Yönleri (Hukuki Register'da)

- ✅ Tanımlı terimleri büyük harfle yazıyor ("Sözleşme", "Taraflar", "Mücbir Sebep"); standart hukuki uygulama bu.
- ✅ Kanuna doğru biçimde atıf yapıyor: "Türk Borçlar Kanunu'nun 136. maddesi".
- ✅ Sözleşmelerde kapsamı genişletmek için kullanılan "dahil ancak bunlarla sınırlı olmaksızın" kalıbını biliyor.
- ✅ Süre ve yazılı bildirim yükümlülüğü koyuyor; hukuki riski azaltan yaygın bir uygulama.

### Zayıf Yönleri

- ⚠️ Madde numarası uydurabiliyor. Her kanun atfını avukat doğrulamalı.
- ⚠️ İngilizce hukuk şablonlarının izini taşıyor: "dahil ancak bunlarla sınırlı olmaksızın", İngilizcedeki "including but not limited to" kalıbının çevirisi ve Türk hukukunda gerekli değil.
- ⚠️ Cümleleri karmaşık kuruyor. Hukuki kesinlik bunu gerektiriyor, ama okumak zorlaşıyor.

### Pratik Tavsiye

Claude'un yazdığı her hukuki metni avukat incelemeli; bunun istisnası yok. Kanun atıflarını, tarih aralıklarını ve sayısal yükümlülükleri tek tek doğrulayın. Claude ilk taslağı çok hızlı yazar, ama hukuki otorite değildir.

Ayrıntısı [Hukuk ve Uyum](/wiki/departmanlar/hukuk/) sayfasında.

---

## Register 4: Yaratıcı İçerik (Pazarlama, Sosyal Medya)

Marka sesi ve ton isteyen metinler. Burada tek bir doğru yok; neyin doğru olduğunu markanın kendi tarzı belirler.

### Prompt Örneği

> *"Küçük butik bir kahve markası için Instagram caption'ı yaz. Yeni bir filtre kahve çeşidi lanse ediyoruz, Etiyopya Yirgacheffe çekirdeği. 80 kelime altı, samimi + entelektüel ton, kahve yapımcıları tarafından saygı gören ama meraklı kullanıcıyı da kapsayan dil. Hashtag dahil."*

### Claude Tipik Çıktısı

> Etiyopya'nın yükseklerinden sizlere geldi. Yirgacheffe çekirdeğimiz, yasemin çiçeği ve bergamot notalarının peşinden koşanlar için. Filtrelendiğinde açığa çıkan o hafif narenciye bitişi, kahveye dair tanımları sessizce yeniden çiziyor.
>
> Bu hafta bardakta.
>
> #yirgacheffe #specialitycoffee #filtrekahve #türkiyedekahve #coffeetime #morningritual

### Claude'un Güçlü Yönleri (Yaratıcı Register'da)

- ✅ CLAUDE.md'de marka sesi tarif edildiyse o sese iyi uyuyor.
- ✅ Metafor kurabiliyor: "kahveye dair tanımları sessizce yeniden çiziyor" gibi.
- ✅ Türkçe ve İngilizce hashtag'leri karıştırarak hem yerel hem uluslararası okura ulaşıyor.
- ✅ Kelimeyi kitleye göre seçiyor: "filtrelendiğinde" profesyonel bir terim, "bardakta" samimi.

### Zayıf Yönleri

- ⚠️ Bazen klişeye kayıyor: "yükseklerinden", "peşinden koşanlar" kahve pazarlamasında çok görülen ifadeler.
- ⚠️ Ton fazla "güzel" çıkabiliyor. Markanız daha kuru ya da alaycıysa metni sadeleştirmeniz gerekir.
- ⚠️ İstemezseniz emoji pek kullanmıyor; bazı markalar emoji bekler.

### Pratik Tavsiye

Pazarlama metninin kalitesini en çok CLAUDE.md'deki "Marka Sesi" bölümü belirler. Bu bölüme şunları yazın:

- Tonunuzun 3 kelimelik özeti ("sakin + dürüst + esprili" gibi)
- Kaçınılması gereken kelimeler ("eşsiz", "devrim" gibi klişeler)
- Bu tarzda yazılmış 2-3 örnek cümle
- Emoji kullanımı: evet / hayır / seçici

Detay: [Pazarlama ve İletişim](/wiki/departmanlar/pazarlama/).

---

## Dört Register Tek Bakışta

| Register | Claude Yeteneği | Ana Risk | Pratik Tavsiye |
|---|---|---|---|
| **Resmi yazışma** | Çok iyi | Arkaik ifade + sayı uydurma | Gözden geçir, sayılar sizin |
| **Teknik terminoloji** | İyi | Aşırı Türkçeleştirme | CLAUDE.md'ye terminoloji tercihleri yaz |
| **Hukuki dil** | İyi (ilk taslak) | Yanlış madde numarası | **Avukat kontrolü zorunlu** |
| **Yaratıcı içerik** | Çok iyi | Klişe + tonun yumuşak olması | CLAUDE.md'ye marka sesi detayı ekle |

## Her Register İçin Geçerli Genel Notlar

### Güçlü

- ✅ Fiil çekimi (zaman, kişi, kip) doğru.
- ✅ Ünlü uyumu doğru.
- ✅ Türkçe hitap ve unvanları doğru kullanıyor: "Murat Bey", "Ayşe Hanım", "Müdür Yardımcısı".
- ✅ Büyük-küçük harfi Türkçe kurallarına göre yazıyor (devlet kurumu, özel isim).
- ✅ Ünlem, virgül ve tireyi doğru yere koyuyor.
- ✅ Standart İstanbul Türkçesiyle yazıyor; bölgesel bir ağız istiyorsanız belirtin.

### Zayıf

- ⚠️ "de"/"da" ekini bazen yanlış yazıyor (ayrı mı, bitişik mi), özellikle karmaşık cümlelerde.
- ⚠️ "-ken"/"-iken" ekini bazen yanlış kullanıyor.
- ⚠️ Bir terimi Türkçeleştirip Türkçeleştirmeme kararı her zaman doğru çıkmıyor ("download" her bağlamda "indir" olmaz).
- ⚠️ Uzun tire (–) ile kısa tireyi (-) tutarsız kullanabiliyor.

Önemli Türkçe metinleri bir insan baştan sona okusun. Ölçüt şu soru: "Bu metnin altına adımı atabilir miyim?" ([4D Çerçevesi](/wiki/prompting/4d-cercevesi/) D3, Discernment).

## Türkçe Kalitesini CLAUDE.md İle Artırmak

Türkçe kalitesini en çok, kalıcı talimata yazılmış bir "Ton" bölümü artırır. Cowork'te klasördeki CLAUDE.md'ye, sıradan sohbette ise profil talimatına (Settings > General > "Instructions for Claude") ya da proje talimatına yazın; sohbet CLAUDE.md okumaz ([Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/)). Bölüm en azından şunları içermeli:

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

Bu 10-15 satırlık bölüm bile Türkçe çıktıyı belirgin biçimde iyileştirir.

## Çeviri: Türkçe ile İngilizce, Almanca ve Rusça Arası

İhracat yapan ya da yabancı tedarikçiyle çalışan ekiplerin en sık işi çeviri. Claude bu dillerde iş metnini iyi çevirir. Avantajı bağlamı da hesaba katabilmesi: alıcının kim olduğunu, tonun nasıl olacağını ve hangi terimin sözleşmeye bağlı olduğunu söylerseniz çeviride bunları kullanır.

### Prompt Örneği

> *"Aşağıdaki e-postayı Almancaya çevir. Alıcı: Alman bir toptancı, ton nazik ama net. 'Vade' ödeme koşulu anlamında, 'sevkiyat' gönderim tarihi anlamında. Metin: Siparişinizin sevkiyatı 14 Kasım'da yapılacaktır. Ödeme vadesi fatura tarihinden itibaren 30 gündür. Gecikme halinde sevkiyatı durdurmak zorunda kalırız."*

### Claude Tipik Çıktısı

> Ihre Bestellung wird am 14. November versandt. Das Zahlungsziel beträgt 30 Tage ab Rechnungsdatum. Bei Zahlungsverzug müssen wir weitere Lieferungen aussetzen.

### Nelere Dikkat Edin

- ✅ Terimin anlamını bağlamla birlikte verdiğinizde doğru karşılığı seçiyor ("Vade" için "Zahlungsziel" gibi).
- ✅ Rusça ve Almanca yazışmalarda taslak olarak işe yarıyor; vaka örneği için [Ölçüm Metrikleri](/wiki/temeller/olcum-metrikleri/) sayfasına bakın.
- ⚠️ Sözleşme, gümrük belgesi ve resmi başvuru gibi hukuki sonucu olan metinleri hedef dili bilen biri okumalı.
- ⚠️ Hedef dili bilmiyorsanız Claude'a çeviriyi **geri çevirtin** (Almancadan Türkçeye) ve anlamın korunup korunmadığına bakın. Bu tek başına yeterli bir kontrol değil, ama büyük kaymaları yakalar.
- 💡 Türkçeden yabancı dile çeviride (TR → EN/DE/RU) çıktı genelde daha akıcı. Yabancı dilden Türkçeye çeviride yabancı cümle yapısı Türkçeye sızabiliyor. Bu bizim gözlemimiz, ölçülmüş bir oran değil.

## Taranmış Türkçe Belge Okumak

Claude görselleri ve PDF'leri okuyabilir; taranmış fatura, sözleşme sayfası ya da dilekçe fotoğrafı da buna dahil. Türkçe karakterler (ç, ğ, ı, ö, ş, ü) temiz taramalarda genelde doğru okunur.

- ✅ **Temiz, düz tarama:** metin çıkarma, özetleme ve tablo hâline getirme iyi çalışır.
- ⚠️ **Kötü tarama:** düşük çözünürlük, eğik sayfa, metnin üstüne binen kaşe ve imza, el yazısı notlar hata oranını artırır. Tutar, tarih, vergi numarası ve IBAN gibi alanları kaynakla mutlaka karşılaştırın.
- ⚠️ **Uzun PDF:** 100 sayfaya kadar PDF'te hem metin hem sayfa görüntüsü okunur. 100 sayfadan uzun PDF'te yalnız metin katmanı okunur; taranmış (görüntü) sayfalarda metin katmanı yoksa içerik görülmez. Uzun taramaları bölün. Sınırlar değişebilir; Claude'un dosya yükleme yardım sayfasından teyit edin.

Hassas belgelerde (kimlik, sağlık, personel kaydı) önce [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasındaki kurallara bakın.

## Yazılı Türkçe ile Sesli Mod Aynı Şey Değil

Bu sayfadaki gözlemler yazılı Türkçe için. Claude'un sesli modunun (Voice mode, beta) Türkçe desteğini doğrulayamadık: yardım sayfası tam dil listesi vermiyor ve İngilizce dışındaki dilleri beta sayıyor. Sesli modu Türkçe bir iş akışında kullanmadan önce uygulamadaki dil menüsüne bakın ([Voice Mode](/wiki/araclar/voice-mode/)).

## ChatGPT ile Türkçe Karşılaştırması

Zamana gözlemimize göre iki model Türkçede yakın seviyede. Bunu destekleyen bağımsız bir Türkçe karşılaştırma yayımlamıyoruz; kendi işinizdeki metinlerle yan yana deneyin. Gözlemlediğimiz fark tonda:

- Claude ağır kurumsal tonda daha doğal duruyor.
- ChatGPT modern şirket kültürünün dilinde daha doğal.
- İkisi de kişiselleştirilmezse sıradan çıktı veriyor; bunun için Claude'da CLAUDE.md, ChatGPT'de Custom Instructions şart.

Detaylı karşılaştırma: [Claude vs ChatGPT](/wiki/temeller/claude-vs-chatgpt/).

## İlgili Sayfalar

- [Claude Nedir?](/wiki/temeller/claude-nedir/): Genel Türkçe yeteneği
- [CLAUDE.md Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/): Ton bölümünü doğru yazmak
- [Pazarlama ve İletişim](/wiki/departmanlar/pazarlama/): Yaratıcı yazım uygulamaları
- [Hukuk ve Uyum](/wiki/departmanlar/hukuk/): Hukuki Türkçe pratikleri
- [4D Çerçevesi](/wiki/prompting/4d-cercevesi/): Çıktı değerlendirme disiplini

