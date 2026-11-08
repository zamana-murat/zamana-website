---
title: "Hukuk ekipleri için Claude"
seoTitle: "Hukukta Claude: Sözleşme İnceleme ve KVKK Uyumu"
description: "Claude for Legal plugin'leri, hukuk artifact'ları ve Word eklentisiyle sözleşme inceleme ve araştırma. Türk hukukunda doğrulama, sır saklama ve KVKK için dikkat edilecekler."
eyebrow: "Departman"
lead: "Claude, hukuk ekibinin araştırma, taslak ve karşılaştırma yükünü alır; avukat da zamanını yargı gerektiren kararlara ayırır. Claude avukatın yerini almaz: Türk mevzuatı ve içtihadında hata yapabilir, her çıktı bir hukukçu tarafından doğrulanır."
heroImage: "/images/kurumsal/hukuk/hero.webp"
heroAnimation: "hukuk"
heroAlt: "Kurgusal bir gıda şirketinin tedarik sözleşmesi değişiklik izleme açıkken inceleniyor: Claude sorumluluk sınırını izlenen değişiklikle düzeltiyor, eksik kişisel veri hükmünü ekliyor, cezai şart maddesini avukat incelemesine işaretliyor ve belge avukat onayını bekliyor."
availability: "Sohbet, Cowork ve Word eklentisi tüm ücretli planlarda; müvekkil ve şirket verisi için Team veya Enterprise. Claude for Legal plugin'leri Cowork'te, Enterprise'ta yönetici açar; diğer planlardaki durum yayımlanmıyor"
sourceUrl: "https://claude.com/solutions/legal"
sourceTitle: "Claude Legal Solutions | Claude by Anthropic"
related:
  - { label: "Hukuk ve uyum departmanı (wiki)", href: "/wiki/departmanlar/hukuk/" }
  - { label: "Claude'un sınırları (wiki)", href: "/wiki/temeller/sinirlamalar/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
  - { label: "Microsoft 365 eklentileri", href: "/claude/microsoft-365/" }
  - { label: "Plugin'ler", href: "/claude/plugins/" }
  - { label: "Haber: hukuk artifact'ları", href: "/haberler/2026-10-28-claude-hukuk-artifactlari/" }
  - { label: "Kurumsal program", href: "/programlar/kurumsal/" }
order: 80
lastUpdated: "2026-11-08"
---

## Nedir?

Hukuk işinin büyük bölümü okuma, karşılaştırma ve yazmadır: sözleşmeyi şirket standartlarıyla kıyaslamak, değişiklik önermek, mevzuat taramak, karşı tarafa yanıt taslağı hazırlamak. Anthropic'in hukuk sayfası bu yükü Claude'a vermeyi ve avukatın zamanını "yüksek riskli karar" anlarına ayırmayı öneriyor.

Kaynak sayfada beş uygulama alanı sayılıyor: hukuki araştırma, şirket satın almalarında hukuki inceleme (due diligence), sözleşme revizyonu, dış hukuk bürolarının yönetimi ve mevzuat uyumu. Sayfadaki örnekte Claude, bir AB düzenlemesi hakkında atıfları kontrol edilmiş bir araştırma notu hazırlıyor ve avukatın bakması gereken noktaları ayrıca işaretliyor. Hukuk teknolojisi şirketlerinin görüşleri de var; örneğin Harvey, Claude Opus 4.7'nin kendi BigLaw Bench testinde yüzde 90,9 puan aldığını söylüyor. Bu rakamlar ABD ve AB hukuku üzerindeki testlere aittir, Türk hukuku için bir ölçüm değildir.

## Claude for Legal nedir?

"Hukuk modu" diye ayrı bir Claude modu yok. Anthropic'in hukuk için sunduğu paketin adı **Claude for Legal** ve üç parçadan oluşuyor:

- **Pratik alan plugin'leri (Mayıs 2026):** Ticari sözleşmeler, şirketler hukuku, iş hukuku, kişisel veri, ürün hukuku, regülasyon, yapay zekâ yönetişimi, fikri mülkiyet ve dava için ayrı paketler; ayrıca hukuk öğrencisi, hukuk kliniği ve kendi aracını yapmak isteyen ekipler için üç paket. Toplam 12 plugin, açık kaynak. Her biri ilk kurulumda sizinle bir görüşme yapar: kabul ettiğiniz pozisyonlar, hangi durumda kime danışılacağı, risk eşikleri, yazım üslubu. Bu bilgilerden ekibinizin "playbook"unu, yani sözleşme kurallarını çıkarır.
- **Hukuk connector'ları:** Harvey, Docusign, Ironclad, iManage, NetDocuments, Box, Everlaw, Relativity ve Thomson Reuters CoCounsel (pilot aşamasında, ayrıca CoCounsel lisansı ister) gibi 20'den fazla hukuk sistemine bağlantı. Çoğu ABD ve AB pazarının araçları; resmi listede Türk hukuk veri tabanı ya da UYAP bağlantısı yok.
- **Hukuk artifact'ları (Ekim 2026):** Sohbetten açılan hazır etkileşimli araçlar: her satırı bir sözleşme olan inceleme tablosu, playbook sapma panosu, mevzuat takibi, hukuk talep formu, yargı alanı karşılaştırması, dosya takibi ve atıf kontrolü. Tablodaki her cevap sözleşmedeki kaynak pasaja bağlanır, böylece avukat iddiayı tek tıkla kontrol eder.

Duyuru, paketi Enterprise yöneticilerinin çalışma alanı ayarlarından açabileceğini söylüyor; Pro, Max, Ultra ve Team için ayrı bir bilgi yayımlanmadı. Daha önce çıkan ilk hukuk plugin'i (sözleşme inceleme, NDA eleme, tedarikçi kontrolü, brifing ve yanıt komutları) yayında kalıyor, yeni paket onun yerini aldığını söylemiyor.

**Türkiye açısından:** Paketin hazır playbook örnekleri Delaware, New York ve California hukukuna göre; AB tarafında GDPR ve AB Yapay Zekâ Yasası içeriği var. Türk hukuku ya da Türkçe sözleşme desteği resmi kaynakta anılmıyor. Plugin'ler yine de işe yarar, çünkü playbook'u siz yazarsınız: kendi sorumluluk tavanınızı, ödeme vadenizi, yetkili mahkemenizi ve KVKK maddenizi verdiğinizde inceleme bu kurallara göre yapılır. Model bilgisinden gelen ve bir kaynağa dayanmayan atıflar `[verify]` diye işaretlenir; Türk mevzuatı atıflarında bu işaret her zaman doğrulama demektir.

![Kurgusal bir gıda şirketinin hukuk biriminde playbook sapma panosu: beş tedarik sözleşmesi sorumluluk tavanı, ödeme vadesi, yetkili mahkeme, KVKK hükmü ve cezai şart maddelerine göre standart, yedek pozisyon, sapma ve eksik olarak işaretlenmiş; seçili hücrede sınırsız sorumluluk maddesi sayfa atfıyla gösterilip avukat incelemesine ayrılmış](/images/kurumsal/hukuk/sapma-panosu.webp)

## Hukuk ekibi Claude'u nerede kullanır?

- **Word içinde sözleşme revizyonu:** Claude'un Word eklentisi, değişiklikleri izleme açıkken sözleşmeyi düzenler. Her değişiklik görünür kalır, kabul ya da red avukattadır. Ayrıntı: [Microsoft 365 eklentileri](/claude/microsoft-365/).
- **Çok belgeli işler için Cowork:** Bir veri odasındaki 60 sözleşmeden devir, münhasırlık ve fesih hükümlerini tabloya çıkarmak gibi işleri Cowork'e verip başka işe geçebilirsiniz.
- **Hukuk plugin'leri:** Claude for Legal'in pratik alan paketleri ve ilk hukuk plugin'indeki sözleşme inceleme (`legal:review-contract`) ile NDA ön değerlendirmesi (`legal:triage-nda`) gibi skill'ler. Bu paketler Türk hukukuna göre hazırlanmamıştır; kendi sözleşme kurallarınızı ve standart maddelerinizi ekleyerek uyarlamanız gerekir. Ayrıntı: [Plugin'ler](/claude/plugins/).
- **Outlook'ta talep sınıflandırma:** İş birimlerinden gelen hukuk taleplerini konu ve aciliyete göre ayırıp yanıt taslağı hazırlamak.
- **Belge yönetim sistemleri:** Kaynak sayfa, yurt dışında yaygın belge yönetimi ve e-imza sistemleriyle entegrasyonları sayıyor. Türkiye'de kullandığınız sistem için hazır bir connector olmayabilir; bu durumda özel connector veya belgeleri bir Claude projesine yükleme yoluna gidilir.

Aşağıdaki örnekler kurgusaldır:

- **Tedarik sözleşmesi:** Karşı taraftan gelen taslağı şirketinizin kabul edilebilir sınırlarıyla (sorumluluk tavanı, ödeme vadesi, yetkili mahkeme) karşılaştırıp risk tablosu ve değişiklik önerisi çıkarmak.
- **NDA ön elemesi:** Haftada gelen 15 gizlilik sözleşmesini "standart, imzaya uygun", "küçük düzeltme" ve "avukata gitmeli" diye ayırmak.
- **KVKK dokümanları:** Aydınlatma metni, açık rıza metni ve veri işleme envanteri taslaklarını mevcut süreçlerinizden üretmek, sonra uyum ekibine kontrol ettirmek.
- **Dış büro yönetimi:** Bürolardan gelen aylık raporları ve faturaları özetleyip dosya bazında durum tablosu çıkarmak.

![Kurgusal bir tedarik sözleşmesi için Claude'un inceleme özeti: her madde şirket kuralıyla karşılaştırılmış, risk seviyesi ve önerilen değişiklik yazılmış, sayfa atıfları eklenmiş; Türk hukuku ve içtihat sorusu taşıyan iki madde avukat doğrulamasına ayrılmış](/images/kurumsal/hukuk/inceleme-ozeti.webp)

## Türk hukukunda dikkat

- **Claude hata yapabilir ve kendinden emin görünebilir.** Var olmayan bir madde numarası, yanlış künyeli bir Yargıtay kararı veya yürürlükten kalkmış bir düzenleme yazabilir. Türk mevzuatı ve içtihadı eğitim verisinde İngilizce kaynaklar kadar yoğun temsil edilmez. Her mevzuat atfı ve karar künyesi resmi kaynaktan (örneğin mevzuat.gov.tr) ve kullandığınız hukuk veri tabanından doğrulanmalıdır. Ayrıntı: [Claude'un sınırları](/wiki/temeller/sinirlamalar/).
- **Güncellik:** Claude'un bilgisinin bir kesim tarihi vardır. Son değişiklikleri, yeni yönetmelikleri ve güncel kararları ancak web araması açıksa ya da siz belgeyi verirseniz bilir. Kritik konularda metni kendiniz sağlayın.
- **Hukuki görüş değil, taslak:** Claude'un çıktısı bir çalışma taslağıdır. Müvekkile ya da yönetime giden görüşün sorumluluğu onu imzalayan hukukçudadır.
- **Türkçe hukuk dili:** Claude resmi Türkçe sözleşme dilinde iyi yazar, ama şirketinizin standart maddelerini ve tercih ettiği terimleri örnekle vermek tutarlılığı belirgin biçimde artırır.

## Sır saklama, gizlilik ve KVKK

- **Avukatın sır saklama yükümlülüğü:** Avukatlık Kanunu avukatlara sır saklama yükümlülüğü getirir. Müvekkil bilgisini bir yapay zekâ hizmetine göndermenin bu yükümlülük ve meslek kuralları açısından nasıl değerlendirileceğini büronuz ya da şirket hukuk biriminiz kendisi belirlemelidir; bu sayfa bir hukuki görüş değildir.
- **Anthropic'in hukuk çalışması notu:** Anthropic'in destek makalesi, hukuk işinde Team ya da Enterprise gibi ticari hesapları öneriyor ve ABD'de Şubat 2026'da verilen bir kararı anıyor: *United States v. Heppner* davasında, avukatı olmayan bir kişinin kişisel (tüketici) hesapla yaptığı yazışmalar avukat-müvekkil ayrıcalığıyla korunmadı. Bu bir ABD kararıdır, Türk hukukunda karşılığını kendi hukukçunuz değerlendirir; yine de mesaj açık: müvekkil işi kişisel hesapta yapılmaz.
- **Plan seçimi:** Müvekkil ve şirket verisi için kişisel Free, Pro, Max veya Ultra hesapları kullanmayın. Team ve Enterprise planlarında girdi ve çıktılar varsayılan olarak model eğitiminde kullanılmaz, Anthropic'in veri işleme eki (DPA) ticari şartlara dahildir. Enterprise'da denetim kayıtları, rol bazlı erişim ve Compliance API vardır.
- **Yurt dışına aktarım:** Claude'a gönderilen veriler model işlemesi için Anthropic'e, yani yurt dışına gider. Dava dosyalarında sık görülen özel nitelikli kişisel veriler (sağlık, ceza mahkûmiyeti gibi) ayrıca korunur. Aktarımın dayanağını hukuk biriminizle teyit edin: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).
- **Pratik kural:** Mümkün olan yerde taraf adlarını, T.C. kimlik numaralarını ve dosya numaralarını maskeleyin. İnceleme için çoğu zaman maddenin metni yeterlidir, tarafların kimliği gerekmez.

## Nasıl başlarsınız?

1. **Şirketin sözleşme kurallarını yazın:** Hangi sorumluluk tavanı kabul edilir, hangi ödeme vadesi, hangi yetkili mahkeme. Claude'un değeri, bu kuralları tutarlı uygulamasından gelir.
2. **Standart maddeleri toplayın:** KVKK, gizlilik, mücbir sebep ve uyuşmazlık maddelerinizin onaylı hallerini bir proje veya skill'e koyun.
3. **Düşük riskli bir türle başlayın:** NDA ön elemesi veya standart tedarik sözleşmeleri iyi bir ilk adımdır. Dava stratejisi ya da yüksek tutarlı işlemler ilk pilot için uygun değildir.
4. **Doğrulama adımını sürece yazın:** Her çıktıyı kim, hangi kaynakla kontrol ediyor; bu adım atlanırsa Claude'u kullanmanın riski faydasını aşar.

## Zamana'nın notu

Hukuk ekiplerinde en iyi sonucu, Claude'a "bu sözleşme iyi mi?" diye sormak değil, "bu sözleşmeyi şu kurallara göre incele ve her bulguya madde ve sayfa atfı ver" demek veriyor. Atıf istemek doğrulamayı hızlandırır. Hukuk ve uyum ekipleri için senaryolar ve hazır prompt'lar [hukuk sayfasında](/wiki/departmanlar/hukuk/), ekip eğitimi [kurumsal programda](/programlar/kurumsal/).
