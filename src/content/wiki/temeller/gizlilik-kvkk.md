---
title: "Claude Gizlilik, Veri ve KVKK Uyumu"
description: "Claude ile çalışırken veri gizliliği, eğitim verisi politikaları, KVKK uyumluluğu, DPA ve Türkiye'deki kurumsal kullanım kuralları."
tags:
  - temeller
  - gizlilik
  - kvkk
  - veri-guvenligi
  - dpa
lastUpdated: "2026-10-05"
---

Her kurumsal Claude konuşmasının bir yerinde aynı soru çıkar: **"Verilerimize ne olur?"**

Bu sayfa o soruya net, bağlamlı, Türkiye-odaklı cevap verir. Üç ana başlık altında ilerler:

1. Anthropic'in veri politikaları: plana göre ne değişir
2. Hassas veri kuralları: çalışana ne öğretmeli
3. KVKK ile uyum: Türkiye'de hukuki açıdan nasıl pozisyonlanmalı

## Anthropic Verilerinizi Ne Yapar? (Plana Göre)

**Önemli ön bilgi:** Team ve Enterprise planlarında konuşmalarınız varsayılan olarak model eğitiminde kullanılmaz. Free, Pro ve Max'te bu durum tüketici ayarına bağlıdır, yani hesabınızdaki gizlilik ayarı belirler. Hesap ayarınızı bir kez kontrol edin.

| Plan | Model eğitimi için kullanılır mı? | Konuşma saklama | Notlar |
|---|---|---|---|
| **Free** | **Tüketici ayarına bağlı** (Settings → Privacy) | Standart süre | "Claude'u geliştirmeye yardım et" ayarı açıksa konuşmalar eğitimde kullanılabilir; kendi hesabınızda kontrol edin |
| **Pro / Max** | **Tüketici ayarına bağlı** (Settings → Privacy) | Standart süre | Kurumsal kullanımda kapalı kalmasını öneriyoruz; şirket politika belirlemeli |
| **Team** | Varsayılan: **Hayır** | Standart süre | Ticari şartlar kapsamında; eğitim kullanımı varsayılan olarak kapalıdır |
| **Enterprise** | Varsayılan: **Hayır** | Özel veri saklama süresi tanımlanabilir; Zero Data Retention plana dahil değildir, API için ayrıca talep edilir (aşağıya bakın) | En sıkı veri kontrolü; DPA ticari şartlara dahil |
| **API** | Hayır, varsayılan olarak asla | Standart 30 gün (sözleşmeyle farklı olabilir) | Zero Data Retention: satış ekibiyle talep edilen, kuruluş başına etkinleştirilen sözleşme düzenlemesi |

### Tüketici Planlarında Eğitim Ayarı

Tüketici kullanıcıları (Free, Pro, Max) için **"Claude'u geliştirmeye yardım et"** (İngilizce adı "Help improve Claude") adlı bir ayar var; Anthropic 2025 Ağustos sonunda duyurdu. Bu açıksa, konuşmalarınız model eğitiminde kullanılabilir ve saklama süresi 5 yıla uzar; kapalıysa saklama 30 gündür. Ayarı istediğiniz zaman değiştirebilirsiniz. Varsayılan konumun açık mı kapalı mı olduğunu resmi kaynaklarda net bulamadık, o yüzden varsayılana güvenmeyin, her hesapta kendiniz kontrol edin.

**Pratik öneri:** Free, Pro ve Max planındaki çalışanlar ayarlarını kontrol etmeli. Şirket net bir politika belirlemeli. **Kurumsal kullanımda varsayılan: kapatın.**

Bunu nasıl yaparsınız:

1. Claude Desktop veya claude.ai'da profil ikonuna tıklayın
2. **Settings → Privacy** menüsüne gidin
3. **"Claude'u geliştirmeye yardım et"** (Help improve Claude) seçeneğini kapatın

### Şifreleme ve Erişim Kontrolleri

- Tüm veri iletimde (HTTPS/TLS) ve depolamada şifrelenir
- Anthropic çalışanları varsayılan olarak konuşmalarınıza erişemez, sadece açık izin veya Kullanım Politikası ihlali incelemesi durumunda
- Erişim katı dahili kontrollerle korunur
- **Zero Data Retention (API sözleşme düzenlemesi):** Anthropic istem ve yanıtları, yanıt döndükten sonra depolamaz. Bir plan değildir: satış ekibiyle talep edilir, kuruluş başına etkinleştirilir (başka bir organizasyona otomatik yayılmaz) ve tüm API özellikleri bu düzenlemeye uygun değildir. Enterprise planı otomatik olarak Zero Data Retention içermez

### Claude'un Yapmadığı Şeyler

- **Model oturumlar arasında kendiliğinden bilgi taşımaz.** Ama hafıza (memory) özelliği Free, Pro ve Max'te varsayılan olarak açıktır (Team ve Enterprise'da varsayılan kapalı). Açıksa Claude önceki konuşmalardan özet bilgi saklar; kurumsal kullanımda bu ayarı da politikanıza ekleyin
- **Bir kullanıcının konuşmasını başka bir kullanıcıyla paylaşmaz**
- **Açık kimlik doğrulamalı bir MCP connector kurulmadıkça hiçbir sisteme erişmez**
- Connector'lar dış servislere **Anthropic'in bulutu üzerinden** ulaşır, yerel kurumsal ağınızdan değil (IT firewall planlaması için kritik bilgi)

## Çalışana Ne Öğretmeli: Hassas Veri Kuralları

Tüketici planlarında (Free, Pro, Max) çalışanlar şunları **kesinlikle Claude'a girmemeli:**

- **Şifreler, API anahtarları, erişim bilgileri**
- **Müşterilerin tam adı + iletişim + finansal verisi** (KVKK kapsamında PII, kişisel veri)
- **Gizli M&A bilgisi, açıklanmamış mali veri, insider bilgiler**
- **Ticari sırlar veya özel formüller** (özellikle Free/Pro hesaplarında)
- **Ayrıcalıklı hukuki iletişim** (avukat-müvekkil gizliliği: ticari plan ve DPA dışında)
- **Hasta sağlık verisi** (HIPAA bağlamı: Türk hukukunda doğrudan karşılığı yok ama sağlık sektörü müşterileri için önemli. Enterprise planında HIPAA yapılandırması, yani BAA, 14 Temmuz 2026'dan beri self-serve olarak açılabiliyor)

### Pratik Test Sorusu

Çalışana öğretin:

> **"Bu metin yarın bir gazetede çıksa rahat mıyım?"**

Cevap "hayır"sa, o metni plan korumaları olmadan Claude'a vermeyin.

### Veri Hijyeni Teknikleri

Hassas veriyi Claude'la çalıştırmanız gerekiyorsa:

- **Anonimleştirin:** "Müşteri A", "çalışan B" gibi. İsim, TC kimlik no, tam adres yerine kod kullanın.
- **Örnek veri kullanın:** Gerçek finansal rakamlar yerine orantılı hayali rakamlar. Sonucu kendiniz gerçek veriye uygularsınız.
- **Parçalayın:** Sözleşmenin sadece analiz edilecek maddelerini paylaşın, tüm sözleşmeyi değil.

## KVKK: Kişisel Verilerin Korunması Kanunu

KVKK, Türkiye'nin temel kişisel veri koruma yasasıdır (Kanun No. 6698). Claude kullanırken KVKK yükümlülükleriniz hâlâ geçerlidir.

### KVKK Kapsamında "Kişisel Veri" Nedir?

Gerçek bir kişiyi tanımlayan veya tanımlayabilen her bilgi:

- İsim + iletişim bilgisi
- TC Kimlik numarası
- Finansal veri
- Sağlık bilgisi
- Konum verisi
- Çalışan performans verisi
- İK kayıtları

Bunların **Claude'a girişi, KVKK kapsamında bir veri işleme faaliyetidir** ve şirketiniz bu faaliyetin sorumlusudur.

### Risk Kategorileri: Claude Kullanımına Göre

| Risk seviyesi | Veri tipi | Claude ile nasıl kullanılır |
|---|---|---|
| **Düşük** | Şirket bilgileri, pazar araştırması, sektör bilgisi, ürün dokümantasyonu | Serbest kullanılır, kişisel veri yok |
| **Orta** | Çalışan isimlerine değinen iç raporlar, ticari bağlamda müşteri adları | DPO / KVKK sorumlusu ile gözden geçirilmeli |
| **Yüksek** | Kimlik bilgisi içeren İK belgeleri, kişisel tanımlı müşteri verisi, sağlık bilgisi, bireysel finansal kayıtlar | Dikkatli tutum gerekir, Enterprise + DPA önerilir; API kullanıyorsanız uygunsa Zero Data Retention da düşünülür |

### Önerilen Adımlar

1. **Veri haritası çıkarın.** Çalışanlar Claude'la çalışırken hangi veri kategorilerini Claude'a girecek? Önceden belirleyin.
2. **DPA'yı edinin, inceleyin, dosyalayın (Team / Enterprise müşterileri için).** Anthropic'in Veri İşleme Sözleşmesi (DPA), işleyen ilişkisini sözleşmeyle düzenlemenize yarar. Ticari şartlara otomatik dahildir, ayrıca imza gerekmez; metni KVKK dosyanızda tutun. KVKK m.9 yurt dışı aktarım güvencesi ayrı bir konudur, aşağıdaki "Yurt Dışına Aktarım" bölümüne bakın.
3. **Şirket politikası oluşturun.** Yazılı, imzalı ve eğitime dahil edilmiş olmalı: hangi veri kategorileri Claude'a girilebilir, hangileri giremez.
4. **En hassas kullanımlarda Enterprise + DPA; API kullanıyorsanız Zero Data Retention'ı ayrıca talep edin.** İK, hukuk, sağlık gibi alanlarda standart Pro/Team yetersiz kalabilir.
5. **DPO ile önceden görüşün.** Şirketinizde Veri Koruma Sorumlusu varsa, yaygın dağıtımdan önce danışın.

### Yurt Dışına Aktarım (KVKK m.9): Claude'a Kişisel Veri Yüklemeden Önce

> **Bu bölüm hukuki görüş değildir.** Mevzuat 5 Ekim 2026 itibarıyla resmî kaynaklardan derlendi. KVKK uyumunuzu mutlaka hukuk danışmanınızla doğrulayın.

**Kısa özet:** Anthropic ABD merkezli bir şirket. Claude'a kişisel veri yüklediğinizde bu veri yurt dışına aktarılmış olur. KVKK Kurumu'nun "Kişisel Verilerin Yurt Dışına Aktarılması Rehberi" (Ocak 2025), sunucuları yurt dışında olan bulut hizmetlerinin kullanımını ve yurt dışından uzaktan erişimi aktarım sayar. Kurum'un Kasım 2025 tarihli "Üretken Yapay Zekâ ve Kişisel Verilerin Korunması Rehberi" ise yurt dışındaki bir hizmet sağlayıcı üzerinden üretken yapay zekâ kullanımının Kanun m.9 ve Yönetmelik'e uygun olması gerektiğini söyler. Kişisel veri girmiyorsanız (anonim iş metni, genel araştırma, kod) bu bölüm sizi ilgilendirmez.

**Kanun ne diyor (7499 sayılı Kanun ile değişen m.9, 1 Haziran 2024'ten beri yürürlükte):**

1. **Önce yeterlilik kararı.** Kurul, bir ülke, sektör ya da uluslararası kuruluş için yeterlilik kararı verir ve Resmî Gazete'de yayımlar. Bu sayfanın yazıldığı tarihte ABD için (ya da herhangi bir ülke için) yayımlanmış bir karar bulamadık. Güncel durumu kvkk.gov.tr ve Resmî Gazete'den kontrol edin.
2. **Karar yoksa uygun güvence.** m.9/4'e göre seçenekler: Kurul'un ilan ettiği **standart sözleşme**, Kurul onaylı **bağlayıcı şirket kuralları** (yalnız aynı grup şirketleri arasında), Kurul izinli **taahhütname**, kamu kurumları arası anlaşma. Bir şirketin Claude gibi hazır bir bulut hizmetini kullanması için pratikte standart sözleşme tek gerçekçi yoldur.
3. **İkisi de yoksa arızi aktarım (m.9/6).** Açık rıza dahil altı istisna vardır, ama aktarımın **arızi** olması şarttır: düzenli olmayan, tek ya da birkaç kez olan, olağan faaliyet akışı dışındaki aktarım (Yönetmelik m.16). Ekibinizin Claude'u günlük işte kullanması olağan faaliyet akışıdır. Kurum'un üretken yapay zekâ rehberi de açık rızanın alternatif bir çözüm olmadığını, aktarımın sıradaki yasal şartlardan birine dayanması gerektiğini vurgular. Yani "çalışanlardan/müşterilerden açık rıza aldık" demek, düzenli Claude kullanımı için güvenli bir dayanak değildir.
4. **Ayrıca işleme şartı.** m.9/1 ve m.9/4 gereği, aktarım için ayrıca m.5 (ya da özel nitelikli veride m.6) işleme şartlarından biri bulunmalıdır. Yurt dışı aktarım güvencesi, işlemenin kendisini hukuka uygun yapmaz.
5. **Özel nitelikli veri (m.6).** Sağlık, biyometrik, ceza mahkûmiyeti gibi veriler için m.6/3 şartı aranır ve standart sözleşmede ek önlemler öngörülür. Pratik kural değişmez: bu verileri Claude'a girmeyin.
6. **Sonraki aktarımlar (m.9/8).** Anthropic'in veriyi alt işleyicilere iletmesinde de aynı güvenceler aranır. DPA'daki alt işleyici listesini bu yüzden okuyun.

**Standart sözleşme nasıl çalışır (Yönetmelik m.14; Resmî Gazete 10 Temmuz 2024, sayı 32598):**

- Kurul dört metin ilan etti: veri sorumlusundan veri sorumlusuna, **veri sorumlusundan veri işleyene**, veri işleyenden veri işleyene, veri işleyenden veri sorumlusuna. Ticari Claude kullanımında siz veri sorumlususunuz, Anthropic çoğunlukla veri işleyen olduğundan genelde "veri sorumlusundan veri işleyene" metni gündeme gelir. Roller somut olaya göre belirlenir; hukuk danışmanınız teyit etmeli.
- Metin **değiştirilemez**. Taraflar ya da yetkili temsilcileri **imzalar**. Sözleşme yabancı dilde de yapılırsa Türkçe metin esastır.
- İmzalar tamamlandıktan sonra **5 iş günü içinde** Kurum'a bildirilir (m.9/5). Bildirimi veri sorumlusu ya da veri işleyen yapar; yöntemler fiziki teslim, KEP ya da Kurum'un belirlediği yöntemdir (Kurum çevrimiçi bir bildirim modülü yayımladı). Bildirmemek m.18/1-d uyarınca idari para cezası gerektirir. Güncel ceza tutarını KVKK'nın yıllık duyurusundan kontrol edin.

**Anthropic tarafında ne biliyoruz, ne bilmiyoruz:**

- Anthropic'in DPA'sı (incelediğimiz sürüm: 24 Şubat 2025 tarihli) AB standart sözleşme hükümlerinin 2. ve 3. modülünü, Birleşik Krallık ekini ve İsviçre ekini içerir. Metinde Türkiye, KVKK ya da 6698 geçmiyor. Yani DPA'daki "SCC", GDPR içindir ve **KVKK m.9 için Kurul'un ilan ettiği Türk standart sözleşmesi yerine geçmez.**
- DPA, işleyen ilişkisini sözleşmeyle düzenlemeniz (m.12/2) için değerlidir. Ama tek başına yurt dışı aktarım güvencesi olduğunu savunmak tartışmalıdır. Uygulamada DPA ile yetinen şirketler var; bu yaklaşımın Kurum tarafından kabul edildiğine dair bir karar bulamadık.
- Anthropic'in Türk standart sözleşmesini imzalayıp imzalamayacağına dair kamuya açık bir bilgi bulamadık. DPA, yurt dışı aktarım gereklilikleri için Anthropic'in "makul destek" vereceğini söyler; bu bir imza taahhüdü değildir. **Bu nokta belirsiz, Anthropic'e yazılı sorarak netleştirin.**

**Claude'a kişisel veri yüklemeden önce şirketiniz ne yapmalı:**

1. **Gerçekten kişisel veri girecek misiniz?** Girmeyecekseniz politikanıza "kişisel veri yasak" yazın ve burada durun. İsim yerine kod kullansanız bile yeniden kimliklendirilebilen veri kişisel veri olarak kalabilir.
2. **Ticari plan kullanın.** Team, Enterprise ya da API. Free, Pro ve Max'te DPA yoktur ve veri işleyen ilişkisi belgesizdir.
3. **İşleme şartınızı ve aydınlatmanızı hazırlayın.** Hangi m.5 (özel nitelikli veride m.6) şartına dayandığınızı yazın. Aydınlatma metniniz (m.10) verinin kimlere ve hangi amaçla aktarılabileceğini, yurt dışı aktarımı da içerecek şekilde söylesin.
4. **Aktarım güvencenizi kurun.** Anthropic'e Türk standart sözleşmesini (veri sorumlusundan veri işleyene) imzalamaya hazır olup olmadığını yazılı sorun. İmza gelirse 5 iş günü içinde Kurum'a bildirin ve takvime işleyin.
5. **Güvence yoksa kişisel veri yüklemeyin.** Anthropic imzalamıyor ya da yanıt vermiyorsa, kişisel veri içeren işleri Claude dışında tutun ya da hukuk danışmanınızla risk kabulünü yazılı olarak değerlendirin. Açık rızayı düzenli kullanımın dayanağı yapmayın.
6. **Kaydedin.** Dayanağı, imzalı sözleşmeyi, bildirim kanıtını ve DPA'nın güncel sürümünü KVKK dosyanıza koyun. Envanterinizi ve (kaydınız varsa) VERBİS'i güncel tutun.

### VERBİS Kaydı

Belirli eşiklerin üzerinde kişisel veri işleyen şirketler faaliyetlerini **VERBİS**'e (Veri Sorumluları Sicili) kaydetmek zorundadır. Yapay zekâ aracıyla kişisel veri işliyorsanız, bu faaliyetin VERBİS kaydınıza yansıması gerekebilir. Kesin yükümlülüğü şirketin KVKK sorumlusu ya da hukuk müşaviri belirler.

### DPA: Veri İşleme Sözleşmesi

Anthropic, ticari müşterilere **Data Processing Agreement (DPA)** sunar. Bu sözleşme:

- "Veri işleyen" (processor) ilişkisini yazılı hâle getirir; KVKK m.12/2 gereği işleyenle birlikte sorumlu olduğunuz güvenlik tedbirleri için dayanak sağlar
- Verinin nasıl işleneceğini ve saklama koşullarını belgeler
- Alt-işleyicileri ve güvenlik standartlarını tanımlar
- Bir KVKK denetiminde elinizdeki temel belgelerden biridir

**Sınırı:** DPA tek başına KVKK m.9 yurt dışı aktarım güvencesi sayılmaz (ayrıntı yukarıda).

**Ticari ürünler (Team, Enterprise, API) için standarttır.** Free, Pro ve Max tüketici ürünleri DPA kapsamı dışındadır, bu KVKK kapsamında sınırlayıcıdır.

## GDPR (Uluslararası Müşteriler İçin)

Anthropic'in DPA'sı AB standart sözleşme hükümlerini (AB SCC) içerir ve ticari müşterilerin şartlarına otomatik dahildir; GDPR için ayrıca bir belge imzalamanız gerekmez. Bu hükümler yalnız GDPR içindir, KVKK m.9 için geçerli değildir.

İhracat işiniz varsa ve AB kaynaklı müşteri verisi işliyorsanız GDPR yükümlülüğünüz vardır. Bu durumda DPA'nın geçerli olduğu bir ticari plan (Team veya Enterprise) kullanın; hassas veride Enterprise güçlü öneridir.

## IT ve Ağ Gereksinimleri

Kurumsal dağıtım için IT ekibinizin yapması gerekenler:

- **Whitelist edilmesi gereken Anthropic domain'leri:**
  - `claude.ai`
  - `anthropic.com`
  - Claude Desktop backend endpoint'leri
- **Connector trafiği:** Dış servislere (Slack, Drive vb.) Anthropic'in bulutu üzerinden ulaşır, yerel kurumsal ağ üzerinden değil. Firewall planlamasında bu bilgi kritiktir.
- **VPN uyumluluğu:** Kurumsal VPN bazen Claude Desktop ile çakışır. Eğitim öncesi test edin.
- **Kurulum yetkisi:** Claude Desktop kurulumu için yönetici hakkı veya IT onayı gerekir.
- **Cowork görevleri bulutta çalışabilir:** Pro ve Max'te 6 Ekim 2026'dan itibaren yeni Cowork görevleri bulutta çalışır; "yalnızca bilgisayarınızda" seçeneği kaldırılır. Yerel dosya hassasiyeti olan ekipler bunu politikalarına işlemeli.
- **Özel dahili connector'lar:** Şirket içi sistemlere bağlanan MCP server'lar ya açık erişimli olmalı ya da kurumsal ağ perimetresi içinde barındırılmalı.

## KVKK Müfettişinin Sorabileceği 10 Soru

Bir KVKK denetimi veya iç denetim Claude kullanımını incelediğinde yöneltebileceği sorular. **Her birine cevabınız hazır olmalı.**

### 1. Claude'a hangi kişisel veri kategorileri girildi?

Şirket politikanızda net tanımlı olmalı. "Her şey yasak" ya da "her şey serbest" değil; hangi kategori hangi plan altında işlenebilir, yazılı olmalı.

### 2. Claude kullanımı VERBİS kaydınızda bir işleme faaliyeti olarak yer alıyor mu?

Kişisel veri işleyen bir AI aracı kullanımı, işleme faaliyetlerinize eklenmiş olmalı. Şirketin KVKK sorumlusu (DPO benzeri rol) bunu kontrol eder.

### 3. Çalışanların hangi plan altında Claude kullandığını nasıl biliyorsunuz?

Team veya Enterprise plan + SSO ile bu izlenebilir. Bireysel Pro hesaplarda çalışanın plan seviyesini ve opt-in ayarını görmek güçtür, dolayısıyla kurumsal kullanım için Team önerilir.

### 4. Anthropic ile imzalı DPA'nız var mı?

Team, Enterprise ve API gibi ticari ürünlerde DPA ticari şartlara otomatik dahildir. Free, Pro ve Max'te DPA yoktur; bu planlarda kurumsal veri işliyorsanız "veri işleyen" ilişkisi belgesizdir, denetimde risk.

### 5. Veri yurt dışına aktarılıyor mu? Hangi yetkili çerçevede?

Claude ABD kaynaklı (Anthropic San Francisco'da). Kişisel veri girerseniz bu veri yurt dışına aktarılmış olur ve KVKK m.9 (2024 değişikliğinden sonraki hâliyle) devreye girer. Sıra şöyledir: yeterlilik kararı (bulabildiğimiz kaynaklarda ABD için yok), yoksa uygun güvence (pratikte Kurul'un standart sözleşmesi), ikisi de yoksa yalnız arızi aktarım. Düzenli Claude kullanımı arızi sayılmaz, bu yüzden açık rıza tek başına güvenli bir cevap değildir. DPA bu güvencenin yerini tutmaz. Adım adım yol için yukarıdaki "Yurt Dışına Aktarım" bölümüne bakın; hukuk müşavirinizle teyit edin.

### 6. Verilerin saklama süreleri nedir?

Plana göre değişir (yukarıdaki tabloya bakın). DPA'da bu süreler netleştirilir. Zero Data Retention (API için ayrıca talep edilen sözleşme düzenlemesi) en sıkısıdır, yanıt sonrası depolama yok.

### 7. Bir veri sahibi talebi geldiğinde (erişim, silme) Claude'daki veriye nasıl ulaşırsınız?

Bu soru zorludur. Claude tarafında "kullanıcı X hakkında ne var" diye spesifik sorgulama zordur. Pratik cevap: **hassas kişisel veri zaten Claude'a girmemeli**, böylece sorun doğmaz.

### 8. Bir güvenlik ihlali durumunda Anthropic sizi nasıl bilgilendirir?

Anthropic'in DPA'sı (Team, Enterprise ve API'yi kapsar) ihlal bildirimi yükümlülüğünü tanımlar; süre ve kapsam için DPA metnine bakın. Free, Pro ve Max tüketici şartlarında DPA kapsamı yoktur, kurumsal ihlal bildirimi beklemeyin.

### 9. Çalışanların Claude kullanımı nasıl eğitiliyor?

Yapılandırılmış bir iç eğitim programı bu soruya güçlü cevap verir. Gayri resmi öğrenme KVKK denetim karşısında zayıftır.

### 10. Claude kullanımının iç kontrol / denetim izi nerede?

Team / Enterprise yönetici panelleri kullanım izleri sunar. Ayrıca CLAUDE.md dosyaları, workspace klasörleri ve prompt kütüphaneleri **şirket dokümantasyonudur** ve denetimde kanıt olarak sunulabilir.

## Adım Adım DPA Süreci

DPA, ticari şartlara (Commercial Terms) otomatik dahildir ve ayrıca imza gerektirmez. Yine de kurumsal olarak yapmanız gereken adımlar var:

### 1. Plan Seviyesini Belirleyin

DPA **ticari ürünlerde (Team, Enterprise, API)** geçerli. Free, Pro ve Max tüketici ürünlerinde yok. Önce plan seçilmeli.

### 2. DPA Metnini Edinin

- **Team müşterileri:** DPA'yı Anthropic'in gizlilik merkezindeki yardım makalesinden görüntüleyin ve kopyasını alın
- **Enterprise müşterileri:** Satış temsilciniz DPA'yı ve varsa özel hükümleri sunar

### 3. Standart DPA'yı İnceleyin

Anthropic'in **standart DPA şablonu** GDPR odaklıdır (AB, Birleşik Krallık ve İsviçre mekanizmaları). KVKK m.9 boşluğunu ayrıca ele almanız gerekir. Aktarım dışındaki başlıklarda standart sürüm çoğu şirket için kabul edilebilir.

### 4. Şirket İçi Hukuki İnceleme

Şirketinizin hukuk departmanı veya dış hukuk büronuz DPA'yı incelemeli. Dikkat edilecek noktalar:

- Alt-işleyiciler listesi (Anthropic hangi üçüncü taraf hizmet sağlayıcıları kullanıyor?)
- Veri saklama süreleri
- İhlal bildirim süreleri ve yolları
- Yurt dışı aktarım dayanağı (Türk standart sözleşmesi imzalanabilir mi?)
- Denetim hakkı (audit rights)

### 5. Müzakere (Enterprise İçin)

Enterprise müşterileri standart dışı hükümler müzakere edebilir. Örneğin:

- API kullanılıyorsa, uygun iş akışlarında Zero Data Retention talep edilsin
- Belirli veri tiplerinin hiç işlenmemesi
- Özel denetim hakkı
- Saklama süresinin kısaltılması

Team müşterilerinde genelde standart DPA değişmez, ama her zaman sorabilirsiniz.

### 6. Kayıt

- DPA metninin hangi tarihte geçerli olduğunu not edin
- Bir kopyasını **KVKK dosyanıza** kaydedin
- VERBİS kaydınızda Claude'un kullanımını "işleme faaliyeti" olarak güncelleyin

### 7. İç Duyuru

DPA incelendi ve dosyalandı, ekibe bildirin. Çalışanlar Claude'u kullanmaya devam ederken artık hukuki çerçeve nettir.

### Süreç Ne Kadar Sürer?

Standart DPA için Anthropic'ten beklenen bir adım yok, süreyi sizin hukuki incelemeniz belirler. Enterprise'ta özel hüküm müzakere ederseniz süre hukuk ekiplerinin hızına bağlıdır.

Yapılandırılmış bir kurulum sürecinde bu adımlar eğitimle paralel yürütülebilir.

## Sektörel Ek: Düzenlenmiş Sektörler İçin KVKK Üstü Yükümlülükler

KVKK tüm sektörler için geçerlidir. Ama bazı sektörlerde **ek düzenleyici yükümlülükler** vardır. Bu sektörlerde Claude kullanımı ek özen gerektirir.

### Finans Sektörü (BDDK, SPK, MASAK)

- **BDDK düzenlemeleri**: bankacılık verisinin işlenmesi için ek kısıtlar (bulut servislerinde veri konumu, erişim logları)
- **SPK (Sermaye Piyasası Kurulu)**: halka açık şirket veya aracı kurum çalışanlarında **insider bilgi koruması** kritik. Mali tablolar açıklanana kadar Claude'a verilmemeli.
- **MASAK (Mali Suçları Araştırma Kurulu)**: müşteri tanıma, şüpheli işlem kayıtları hassas. MASAK bildirilmesi gerekli bilgiyi Claude'a vermeyin.

**Pratik öneri:** Finans sektörü müşterileri için Enterprise plan + DPA (API kullanılıyorsa Zero Data Retention) + sıkı iç politika. Bireysel Pro yeterli değil.

### Sağlık Sektörü (HKMS, KVKK özel nitelikli veri)

- **KVKK madde 6**: sağlık verisi **özel nitelikli kişisel veri**dir. İşlenmesi için açık rıza veya diğer hukuki sebep gerekir.
- **HKMS (Hekim Kayıt Merkezi Sistemi)**: hekimlerin kayıt ve bildirim yükümlülükleri.
- **Sağlık mevzuatı**: hasta verisinin Bakanlıkça belirlenen ortamlar dışında, özellikle yurt dışı bulutlarda işlenmesi kısıtlıdır. Güncel kuralı sektörünüzün mevzuatından teyit edin.

**Pratik öneri:** Hasta verisi **asla** Claude'a girilmemeli. Claude hastane iç iletişimi, eğitim materyali, literatür özetleme gibi **hasta verisi içermeyen** işler için kullanılabilir. Enterprise + DPA + sıkı veri hijyeni zorunludur.

### Eğitim Sektörü (MEB, YÖK)

- **MEB (Milli Eğitim Bakanlığı)**: öğrenci verisi özel koruma altında. Özel okullarda öğrenci dosyaları Claude'a verilmemeli.
- **YÖK (Yükseköğretim Kurulu)**: öğrenci ve akademisyen verileri için benzer ilkeler.

**Pratik öneri:** Eğitim kurumlarında Claude akademik materyal üretimi, ders planı, araştırma desteği için güçlüdür. Öğrenci kişisel verisinden uzak durun.

### Hukuk Sektörü (Barolar Birliği, avukat-müvekkil gizliliği)

- **Avukatlık Kanunu**: avukat-müvekkil iletişim gizliliği yasal olarak korunur.
- **Barolar Birliği mesleki kuralları**: müvekkil bilgilerinin dış sistemlerde işlenmesi etik açıdan kısıtlı.

**Pratik öneri:** Müvekkil adı, dava detayı Claude'a verilmemeli. Claude sözleşme taslağı, hukuki araştırma, iç memo için kullanılabilir, ama müvekkil kimlik bilgisi olmadan. Enterprise + DPA düşünülmeli (API kullanılıyorsa Zero Data Retention de).

### Savunma ve Kritik Altyapı

- **Savunma Sanayii Başkanlığı (SSB)**: savunma projelerine dair bilgi kısıtlı.
- **Kritik altyapı (enerji, telekomünikasyon, su)**: siber güvenlik düzenlemeleri kapsamında.

**Pratik öneri:** Savunma ve kritik altyapı şirketlerinde Claude sadece **yönetsel işler** (raporlar, iletişim, eğitim materyali) için. Operasyonel hassas bilgi asla değil. Bu sektörlerde **yerel / on-premises LLM'ler** daha uygun olabilir.

### Kamuya Açık Şirketler (BIST)

- **Özel Durum Açıklamaları (KAP)**: halka açıklanmamış maddi bilgi **içeriden bilgi** tanımındadır.
- **Finansal açıklama süreçleri**: bilgi asimetrisi oluşturacak her kullanım kısıtlı.

**Pratik öneri:** Çeyreklik finansal sonuçlar açıklanmadan önce mali veri Claude'a verilmemeli. Açıklama sonrası Claude finansal anlatı üretiminde güçlü olur.

## Kurumsal Kontrol Listesi

Claude'u kurumsal kullanıma açmadan önce tamamlanması gerekenler:

- [ ] Yeni başlayan çalışanların **Claude Max 5x** aboneliği (ilk ay önerilir; ay 2+ Pro'ya indirme seçeneği)
- [ ] "Claude'u geliştirmeye yardım et" ayarı her çalışanda **kapalı** olarak ayarlandı
- [ ] Hangi veri kategorilerinin Claude'a girilebileceği yazılı politikada belirlendi
- [ ] Birden fazla çalışan varsa Team plana geçiş düşünüldü (en az 2 koltuk; SSO, merkezi yönetim ve DPA kapsamı)
- [ ] Hassas departmanlar (İK, hukuk, finans) için Enterprise değerlendirildi
- [ ] DPA metni incelendi ve KVKK dosyasına eklendi (Team / Enterprise müşterileri için)
- [ ] Kişisel veri girilecekse KVKK m.9 yurt dışı aktarım dayanağı belirlendi (standart sözleşme imzalandı ve 5 iş günü içinde bildirildi, ya da kişisel veri girişi yasaklandı)
- [ ] Şirketin DPO / KVKK sorumlusu bilgilendirildi
- [ ] IT Anthropic domain'lerini whitelist etti
- [ ] VPN Claude Desktop ile test edildi

## Özet

Claude, doğru planla ve doğru uygulamayla **Türkiye'de kurumsal olarak KVKK'ya uygun biçimde kullanılabilir**. Ancak bu otomatik değildir, şirketin bilinçli tercih ve prosedür oluşturması gerekir. Özellikle kişisel veri girecekseniz yurt dışı aktarım güvencesi (m.9) açık bir adımdır; bu sayfa onu çözülmüş saymaz.

**Kilit dört hareket:**

1. **Team veya Enterprise plana geçin.** Free, Pro ve Max bireysel kullanım içindir, kurumsal veri için değildir.
2. **DPA'yı inceleyip dosyalayın.** İşleyen ilişkisinin ve GDPR'ın sözleşme omurgası budur; KVKK yurt dışı aktarım güvencesi yerine geçmez.
3. **Veri politikası belirleyin.** "Nerede Claude'a ne veririm" sorusu yazılı cevaplanmalı.
4. **Kişisel veri yükleyecekseniz KVKK m.9 dayanağını kurun.** Standart sözleşme yolunu hukuk danışmanınızla ve Anthropic ile netleştirmeden kişisel veri yüklemeyin.

## İlgili Sayfalar

- [Claude Planları](/wiki/temeller/planlar/): Hangi plan hangi veri korumalarını sağlar
- [Claude'un Sınırları](/wiki/temeller/sinirlamalar/): Veri sınırlarının uygulama tarafı
- [Cowork Modu](/wiki/araclar/cowork-modu/): Connector'ların güvenlik mimarisi
- [4D Çerçevesi](/wiki/prompting/4d-cercevesi/): Diligence (Sorumluluk) boyutu

