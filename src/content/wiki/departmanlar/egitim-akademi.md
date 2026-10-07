---
title: "Eğitim ve Akademi: Claude Uygulamaları"
seoTitle: "Eğitimde Claude: Ders Planı, Sınav, Ödev Geri Bildirimi, Akademik Kullanım"
description: "Üniversite, okul, dershane, kurs ve eğitmenler için Claude: ders planı, sınav sorusu, ödev geri bildirimi, akademik araştırma, öğrenci iletişimi."
tags:
  - departmanlar
  - egitim
  - akademi
  - okul
lastUpdated: "2026-10-06"
---

Eğitim sektörü Türkiye'de geniş: üniversiteler, liseler ve ortaokullar, özel okullar, dershaneler, dil okulları, online kurs platformları, bireysel eğitmenler. Her birinde **müfredat hazırlama, sınav üretme, ödev değerlendirme ve öğrenci iletişimi** zaman alıcı, tekrar eden işlerdir. Claude bunların hepsinde somut destek sağlar.

## Claude'un Çözdüğü Temel Sıkıntılar

- Ders planı her dönem sıfırdan, eski plana referans yok
- Sınav sorusu üretmek saatler alıyor, çeşitlilik az
- Ödev değerlendirmek çok zaman alıyor, geri bildirim yüzeysel
- Akademik makale taraması yetişmiyor
- Öğrenci/veli iletişimi her seferinde kişiselleştirilemiyor
- Çoklu seviye için aynı konuyu farklı şekillerde anlatmak zor

## Bölüm 1: Ders Planı ve Müfredat

### Ders Planı Hazırlama

Bir konunun haftalık / dersi başına planı. Claude:

- Öğrenme hedefleri
- Kavram açılımı sırası
- Etkinlik / örnek / uygulama önerisi
- Süre planı (50 dakikalık ders için ne kadar nereye)
- Ödev / değerlendirme önerisi

Bir ders planı elle yaklaşık 2 saat sürer; Claude ile yaklaşık 30 dakikada ilk taslağa iner (Zamana eğitim materyali). Sonrası öğretmenin düzeltmesidir.

### Müfredat Yazımı

Bir kursun yıllık müfredatı. Konu sırası, ön gerekler, kazanım listesi, ölçme planı. Claude akademik standartları (MEB için, üniversite için, Common Core için) gözeterek üretir. Birden çok standart çelişebilir; hangisini gözetmesini istediğinizi açıkça yazın.

### Çoklu Seviye Adaptasyonu

Aynı konuyu **6. sınıf**, **9. sınıf** ve **üniversite 1. sınıf** seviyelerine göre farklı kelime ve farklı örnekle anlatmak. Claude seviyeye uyum konusunda güçlüdür.

### Ders Notu / Sunum

Konunun öğrenci dağıtım notu (handout) ve sunum slaytı. [Skills](/wiki/yetenekler/skills/) ile .pptx dosyası doğrudan çıkar. Ücretli planlarda beta olan [Claude Design / Slides](/wiki/yetenekler/claude-design/) de bu iş için denenebilir.

## Bölüm 2: Sınav ve Değerlendirme

### Sınav Sorusu Üretme

Açık uçlu, çoktan seçmeli, doğru-yanlış, eşleştirme: Claude tüm tipleri konuya göre üretir. Sıkıcı klişe sorular yerine **gerçek hayat senaryosu** içeren sorular da hazırlayabilir.

[Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/) ile sizin sınav tarzınızı öğretebilirsiniz.

### Soru Bankası Genişletme

Mevcut soru bankanızı Claude ile genişletin: orijinal soruların **yeniden ifade edilmiş**, varyasyon ve ters versiyonları hızla üretilir.

### Cevap Anahtarı ve Çözüm

Sorularınız için tam çözüm + alternatif çözüm yolları + yanlış cevap analizi (bu cevap neden yanlış).

### Rubrik Üretimi

Açık uçlu soru ve projeler için tutarlı bir değerlendirme rubriği: kriterler, düzey tanımları ve puan aralıkları. Rubriği öğrencilerle ödevden önce paylaşırsanız hem geri bildirim hem itiraz süreci kolaylaşır. Taslağı öğretmen kendi dersine göre ayarlar.

### Bloom Taksonomisi Dengeleme

Sınavın hatırlama-anlama-uygulama-analiz-değerlendirme-yaratma seviyelerinde dengesini Claude analiz eder, eksik seviye varsa soru ekler.

## Bölüm 3: Ödev ve Geri Bildirim

### Ödev Değerlendirmesi (Tarama Aşaması)

Öğrenci ödevi yüklenir. Claude:

- Ödev kalitesinin kabaca seviyesi
- En güçlü ve en zayıf yönü
- Öğretmenin odaklanması gereken 3 nokta

Bu **karar değil tarama**: son notu öğretmen verir, Claude yalnızca ön gözden geçirme yapar.

### Bireyselleştirilmiş Geri Bildirim

50 ödev için bireysel geri bildirim yazmak elle yaklaşık 7-8 saat sürer. Claude her ödev için 3-5 cümlelik kişiselleştirilmiş bir geri bildirim taslağı çıkarır, öğretmen tarayarak onaylar.

### Plagiat / Kopya Kontrolü

Claude bir plagiat tespit aracı değildir. Bir metnin üslubunun öğrencinin önceki çalışmalarından belirgin biçimde farklı olduğunu fark edebilir, ama bu yalnızca bir ipucudur. Karar, plagiat tespit aracı ve öğretmenin yargısıyla verilir.

### Yazma Becerileri Geri Bildirimi

Türkçe veya yabancı dilde kompozisyon değerlendirmesi: gramer, akış, argüman gücü, kelime dağarcığı. Claude ayrıntılı bir analiz çıkarır.

## Bölüm 4: Akademik Araştırma (Yüksek Eğitim)

### Literatür Taraması

[Research Mode](/wiki/yetenekler/research-mode/) ile bir konuda akademik literatür özeti çıkarılır. Bu akademik bir kaynak değildir, ama **tarama başlangıcı** olarak değerlidir.

**Önemli:** Claude, akademik makalelerin ücretli veya kısıtlı tam metinlerine erişemez; açık kaynaklar üzerinden tarama yapar. Her atıfı kaynağından kendiniz doğrulayın. Final akademik atıflar için DergiPark, Google Scholar, JSTOR ve Web of Science'ı elle tarayın.

### Makale Taslağı

Akademik makale için taslak, özet, giriş, yöntem ve tartışma bölümleri Claude ile hızlıca çıkar. Sonrasında **akademik üslubu öğretmen veya araştırmacı** parlatır.

### Atıf ve Bibliography

APA, MLA, Chicago ve ISNAD gibi biçimler arasında dönüşüm Claude ile hızlıdır. Dönüştürülen atıfları yine de bir kez kontrol edin.

### Tez Danışmanlığı (Öğrenciye)

Yüksek lisans veya doktora öğrencisi, tezinin bölümleri için Claude'dan **destek** alabilir: tarama, taslak, dil düzeltme. Akademik etik açısından Claude bir **araçtır**; son ürün öğrencinin emeği ve düşüncesidir.

## Bölüm 5: Öğrenci ve Veli İletişimi

### Veli E-postası

"Çocuğunuzun bu dönemki gelişimi" tarzı e-postalar her dönem yüzlerce kişiye gider. Claude, veli başına kişiselleştirilmiş taslak çıkarır.

### Olay Bildirimi

Bir öğrenci olayı (devamsızlık, davranış, kaza) için Claude olgusal, profesyonel ve **abartmasız** bir veli bildirimi hazırlar. Bu hassas bir durumdur, gönderen kişi mutlaka gözden geçirir.

### Bilgilendirme Yazıları

Müfredat değişikliği, etkinlik daveti, gezi onay formu. Claude ile profesyonel ama sıcak bir dil kurulur.

### Çoklu Dilde

Yabancı uyruklu veya yabancı dil ağırlıklı bir veli kitlesi varsa Claude, birebir çeviriden öte **kültürel olarak uygun** bir iletişim kurar.

## Bölüm 6: İdare ve Yönetim

### Eğitim Müfettişi Hazırlığı

MEB denetimi öncesi belge hazırlığı: yıllık plan, performans dosyası, sınıf defterleri kontrolü. Claude eksiklerin listesini çıkarır.

### Performans Değerlendirme

Öğretmenlerin yıllık performans değerlendirmesi için yapıcı geri bildirim çerçevesi. [İK departmanı](/wiki/departmanlar/insan-kaynaklari/) sayfasında genel performans yaklaşımı var.

### Bütçe ve Kaynak Planlama

Sınıf donanımı, materyal ve kurs satın alma için gerekçeli listeyi Claude ile net biçimde çıkarabilirsiniz.

## Pratik Kullanım Senaryoları

### Senaryo 1: Lise Öğretmeni: Pazartesi Sabah

Pazartesi 07:30. Öğretmen Cuma'dan kalan ödevleri unutmuş. Claude'a sınıf seviyesini söyler, Cuma konusunu hatırlatır. Birkaç dakika içinde 10 ödev sorusu, çözüm anahtarı ve 30 dakikalık bir tartışma planı hazırdır.

### Senaryo 2: Üniversite Asistanı

Doktora öğrencisi bir dersin asistanlığını yapıyor. Bu haftanın ders konusu için Claude ile **literatür taraması** yapar, **slayt seti** hazırlar, **forum sorularına** taslak yanıt verir. Asistanlık yükü belirgin biçimde hafifler.

### Senaryo 3: Dil Okulu

Bir dil kursunda öğretmen, aynı kavramı (örn. "phrasal verbs") 4 farklı seviye gruba anlatacak. Claude her seviye için farklı örnek ve farklı egzersiz seti çıkarır.

### Senaryo 4: Online Kurs Hazırlığı

Bireysel eğitmen bir Udemy kursu açacak. Konu listesi var ama içerik yok. Claude ile her ders için slayt, senaryo, alıştırma ve sınav taslakları yaklaşık yarım saatte (ders planındaki aralıkla) ilk hâline gelir; eğitmen hepsini kendi sesiyle düzeltir.

## Gerçek Örnek: 50 Ödev İçin Geri Bildirim

Bir lise edebiyat öğretmeni 50 kompozisyon ödevi topladı. Her öğrenciye kısa, kişisel bir geri bildirim yazması gerekiyor ama hafta sonuna 7-8 saatini ayıramıyor.

**Adım 1:** Rubriği ve birkaç örnek geri bildirimi (kendi yazdıklarınız) Claude'a verir, ardından ilk 10 ödevi ekler (öğrenci adları çıkarılmış, "Ödev 01, 02..."):
> *"Ekteki rubriğe göre her ödev için 3-5 cümlelik geri bildirim taslağı yaz: bir güçlü yön, iki gelişim alanı, bir sonraki ödev için tek öneri. Notu sen verme, yalnız rubrikteki hangi düzeye yakın olduğunu söyle. Tonum örneklerdeki gibi: net, destekleyici, abartısız."*

**Adım 2:** Claude 10 taslağı üretir. Öğretmen 2-3 tanesini okur, tonu düzeltmek için bir kez geri bildirim verir ("daha kısa olsun, 'harika' kelimesini az kullan").

**Adım 3:** Kalan 40 ödev aynı yönergeyle partiler hâlinde işlenir.

**Adım 4:** Öğretmen her taslağı ödevle birlikte okur, yanlış okunmuş olanları düzeltir, notu kendisi verir ve ödevleri öğrencilere iletir.

**Süre:** 50 ödev için elle 7-8 saat, Claude ile 2-3 saat (okuma ve düzeltme dahil). Ödevler her dönem birkaç kez toplanıyorsa her turda 5 saat civarı fark eder. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

## Sık Hatalar

- **Akademik dürüstlük:** Öğrenci ödevini Claude'a "yaz" diye veriyorsa bu öğrencinin sorumluluğudur; öğretmenin kullanımı farklıdır (taslak, tarama, geri bildirim). Hangi kullanımın serbest olduğunu dönem başında yazılı duyurun.
- **Uydurma kaynak:** Claude makale referansı uydurabilir. DOI, yazar ve yıl her zaman kaynağından doğrulanmalı.
- **Standart karışması:** MEB, üniversite ve uluslararası standartlar çelişebilir. Claude'a hangi standardı gözetmesini istediğinizi söyleyin.

## CLAUDE.md Tavsiyesi

Eğitmen için temel yapı:

```markdown
## Eğitmen Profili
- Kurum: [okul / üniversite / kurs]
- Seviye: [öğrenci yaş aralığı]
- Branş: [matematik / İngilizce / fizik / vs.]
- Müfredat: [MEB / üniversite / IB / vb.]

## Voice
- Öğrenci-merkezli. Patronvari yok.
- Pozitif ama gerçekçi geri bildirim.

## Yap
- Sınav sorularında gerçek hayat bağlamı ver
- Ödev değerlendirmesinde 3 güçlü + 2 gelişim alanı
- Veli iletişiminde olgusal kal, abartı yok

## Yapma
- Öğrenci ismini Claude'a tam yapıştırma (anonimleştir)
- Hassas durum (psikolojik, ailevi) Claude'da işleme
- Plagiat suçlamasını otomatik üretme
```

## Kullanım Engelleri

**Engel:** "Eğitim hassas, AI ile akademik etik sorunlu olur."

**Çözüm:** Claude **araç**tır, son üretim öğretmenin/öğrencinin işidir. Şeffaf kullanım: "AI ile taslak ürettik, ben düzelttim" notu olabilir. [Şirket içi politika](/wiki/temeller/sirket-ici-politika/) sayfası kullanım sınıflarını verir.

**Engel:** "Öğrenci verisi KVKK kapsamında çok hassas."

**Çözüm:** Tüm öğrenci verisi anonimleştirilerek girilir. KVKK aydınlatma metinlerinde AI kullanımı belirtilebilir. [Hukuk departmanı](/wiki/departmanlar/hukuk/) bağlam verir; yurt dışı aktarım için [KVKK m.9: Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/) sayfasına, genel çerçeve için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasına bakın.

**Engel:** "Öğretmenler teknolojiye dirençli."

**Çözüm:** İlk hafta yalnızca **sınav sorusu üretme** ile başlayın. Kazanç hemen görünür olur, direnç çözülür. [İlk 7 Gün](/wiki/temeller/ilk-7-gun/) genel başlangıç rehberidir.

## Bireysel Eğitmen / Online Kurs

Tek başına çalışan bir öğretmen, koç ya da kurs eğitmeni için Claude'un katkısı büyüktür. **Zamana notu:** bu çalışma biçiminde ilk taslak üretimi belirgin biçimde hızlanır; kalite yine eğitmenin düzeltmesine bağlıdır.

## Akademik Kullanım: Hangi Plan, Hangi Program

Eğitim için Anthropic'in ayrı programları var, ama hepsi Türkiye'de olduğu gibi geçerli değil:

- **Claude for Education (yükseköğretim):** Kurum çapında plan; öğrenci, akademisyen ve personeli kapsar. Fiyat yayımlanmıyor, Anthropic'in eğitim ekibiyle görüşülerek alınıyor, bireysel satın alma yok. SSO ve yönetim paneli gibi kurumsal özellikler içerir. Bir Türk üniversitesinin bu programa alınıp alınmadığı doğrulanmadı; ülke kısıtı yazılı değil, ama Türkiye'den örnek de yok. Ayrıntı: [Yükseköğretim için Claude](/kurumsal/yuksekogretim/).
- **Claude for Teachers (K-12):** Ücretsiz program yalnız ABD'deki okul ve eğitimciler için. Türkiye'deki öğretmen kendi hesabıyla başlar. Claude 18 yaş altı için ürün sunmaz, yani öğrenciler Claude hesabı açamaz; öğretmen kendi hazırlık işinde kullanır. Ayrıntı: [Öğretmenler için Claude](/kurumsal/ogretmenler/).
- **Team plan for scientists:** Akredite üniversitelerde ve kâr amacı gütmeyen enstitülerde doğa bilimleri, matematik, bilgisayar bilimi ve mühendislik alanındaki araştırmacılara 12 ay promosyonlu Team planı. Şirket ve sanayi Ar-Ge'si uygun değil. Türk üniversitesinin onaylanıp onaylanmadığı doğrulanmadı; başvuru sayfasından kendiniz deneyin.
- **Bireysel akademisyen:** Kurum planı yoksa Pro ile başlanabilir. Atıf doğrulama, literatür ve makale yazımı için uygulamalı eğitim: [Akademisyenler programı](/programlar/akademisyenler/).

Öğrenci verisi ve araştırma verisini planınızın veri ayarlarına göre değerlendirin; ticari planlarda (Team, Enterprise) girdiler varsayılan olarak model eğitiminde kullanılmaz, kişisel planlarda bu bir kullanıcı ayarıdır.

## Üniversite Bağlamı: Özel Notlar

- **Akademik dürüstlük:** Öğrencilere Claude kullanımını şeffaf biçimde duyurun. Birçok üniversite yapay zekâ araçlarının kullanımına, **belirtilmesi koşuluyla** izin veriyor.
- **Araştırma etiği:** Claude ile üretilmiş araştırma içeriği akademik makalede bildirilmeli. Bu konuda henüz yerleşik bir standart yok, üniversitenizin politikasına bakın.
- **Uzaktan eğitim:** Online derslerde Claude, öğrenci sorularına gün boyu yanıt veren bir asistan kurmanın temelini oluşturabilir.

## İlgili Sayfalar

- [Pazarlama Departmanı](/wiki/departmanlar/pazarlama/): Eğitim kurumu pazarlaması
- [İK Departmanı](/wiki/departmanlar/insan-kaynaklari/): Öğretmen yönetimi
- [Müşteri Hizmetleri](/wiki/departmanlar/musteri-hizmetleri/): Veli iletişimi
- [Hukuk Departmanı](/wiki/departmanlar/hukuk/): KVKK, eğitim mevzuatı
- [Yükseköğretim için Claude](/kurumsal/yuksekogretim/) ve [Öğretmenler için Claude](/kurumsal/ogretmenler/): Anthropic'in eğitim programları
- [Akademisyenler programı](/programlar/akademisyenler/): Uygulamalı eğitim
- [Ölçüm Metrikleri](/wiki/temeller/olcum-metrikleri/): Kazancı nasıl ölçersiniz
- [Research Mode](/wiki/yetenekler/research-mode/): Akademik tarama
- [Skills](/wiki/yetenekler/skills/): Sunum, çalışma kâğıdı üretme
- [Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/): Sınav tarzınız öğretme
- [Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/): Eğitim şablonları

