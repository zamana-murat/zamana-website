---
title: "Hukuk ekipleri için Claude"
seoTitle: "Hukukta Claude: Sözleşme İnceleme, Araştırma ve KVKK Uyumu"
description: "Hukuk ekipleri Claude ile sözleşme inceler, değişiklik önerir, araştırma notu hazırlar. Türk hukukunda doğrulama, sır saklama ve KVKK için dikkat edilecekler."
eyebrow: "Departman"
lead: "Claude, hukuk ekibinin araştırma, taslak ve karşılaştırma yükünü alır; avukat da zamanını yargı gerektiren kararlara ayırır. Claude avukatın yerini almaz: Türk mevzuatı ve içtihadında hata yapabilir, her çıktı bir hukukçu tarafından doğrulanır."
heroImage: "/images/kurumsal/hukuk/hero.webp"
heroAnimation: "hukuk"
heroAlt: "Kurgusal bir gıda şirketinin tedarik sözleşmesi değişiklik izleme açıkken inceleniyor: Claude sorumluluk sınırını izlenen değişiklikle düzeltiyor, eksik kişisel veri hükmünü ekliyor, cezai şart maddesini avukat incelemesine işaretliyor ve belge avukat onayını bekliyor."
availability: "Sohbet, Cowork ve Word eklentisi tüm ücretli planlarda; müvekkil ve şirket verisi için Team veya Enterprise. Hukuk plugin'i Cowork ve Claude Code'da"
sourceUrl: "https://claude.com/solutions/legal"
sourceTitle: "Claude Legal Solutions | Claude by Anthropic"
related:
  - { label: "Hukuk ve uyum departmanı (wiki)", href: "/wiki/departmanlar/hukuk/" }
  - { label: "Claude'un sınırları (wiki)", href: "/wiki/temeller/sinirlamalar/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
  - { label: "Microsoft 365 eklentileri", href: "/claude/microsoft-365/" }
  - { label: "Plugin'ler", href: "/claude/plugins/" }
  - { label: "Kurumsal program", href: "/programlar/kurumsal/" }
order: 80
lastUpdated: "2026-10-06"
---

## Nedir?

Hukuk işinin büyük bölümü okuma, karşılaştırma ve yazmadır: sözleşmeyi şirket standartlarıyla kıyaslamak, değişiklik önermek, mevzuat taramak, karşı tarafa yanıt taslağı hazırlamak. Anthropic'in hukuk sayfası bu yükü Claude'a vermeyi ve avukatın zamanını "yüksek riskli karar" anlarına ayırmayı öneriyor.

Kaynak sayfada beş uygulama alanı sayılıyor: hukuki araştırma, şirket satın almalarında hukuki inceleme (due diligence), sözleşme revizyonu, dış hukuk bürolarının yönetimi ve mevzuat uyumu. Sayfadaki örnekte Claude, bir AB düzenlemesi hakkında atıfları kontrol edilmiş bir araştırma notu hazırlıyor ve avukatın bakması gereken noktaları ayrıca işaretliyor. Hukuk teknolojisi şirketlerinin görüşleri de var; örneğin Harvey, Claude Opus 4.7'nin kendi BigLaw Bench testinde yüzde 90,9 puan aldığını söylüyor. Bu rakamlar ABD ve AB hukuku üzerindeki testlere aittir, Türk hukuku için bir ölçüm değildir.

## Hukuk ekibi Claude'u nerede kullanır?

- **Word içinde sözleşme revizyonu:** Claude'un Word eklentisi, değişiklikleri izleme açıkken sözleşmeyi düzenler. Her değişiklik görünür kalır, kabul ya da red avukattadır. Ayrıntı: [Microsoft 365 eklentileri](/claude/microsoft-365/).
- **Çok belgeli işler için Cowork:** Bir veri odasındaki 60 sözleşmeden devir, münhasırlık ve fesih hükümlerini tabloya çıkarmak gibi işleri Cowork'e verip başka işe geçebilirsiniz.
- **Hukuk plugin'i:** Anthropic'in resmi açık depodaki hukuk plugin'inde sözleşme inceleme (`legal:review-contract`), gizlilik sözleşmesi (NDA) ön değerlendirmesi (`legal:triage-nda`), uyum kontrolü (`legal:compliance-check`) ve hukuki risk değerlendirmesi (`legal:legal-risk-assessment`) gibi skill'ler var. Bu paketler Türk hukukuna göre hazırlanmamıştır; kendi sözleşme kurallarınızı ve standart maddelerinizi ekleyerek uyarlamanız gerekir. Ayrıntı: [Plugin'ler](/claude/plugins/).
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
- **Plan seçimi:** Müvekkil ve şirket verisi için kişisel Free, Pro veya Max hesapları kullanmayın. Team ve Enterprise planlarında girdi ve çıktılar varsayılan olarak model eğitiminde kullanılmaz, Anthropic'in veri işleme eki (DPA) ticari şartlara dahildir. Enterprise'da denetim kayıtları, rol bazlı erişim ve Compliance API vardır.
- **Yurt dışına aktarım:** Claude'a gönderilen veriler model işlemesi için Anthropic'e, yani yurt dışına gider. Dava dosyalarında sık görülen özel nitelikli kişisel veriler (sağlık, ceza mahkûmiyeti gibi) ayrıca korunur. Aktarımın dayanağını hukuk biriminizle teyit edin: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).
- **Pratik kural:** Mümkün olan yerde taraf adlarını, T.C. kimlik numaralarını ve dosya numaralarını maskeleyin. İnceleme için çoğu zaman maddenin metni yeterlidir, tarafların kimliği gerekmez.

## Nasıl başlarsınız?

1. **Şirketin sözleşme kurallarını yazın:** Hangi sorumluluk tavanı kabul edilir, hangi ödeme vadesi, hangi yetkili mahkeme. Claude'un değeri, bu kuralları tutarlı uygulamasından gelir.
2. **Standart maddeleri toplayın:** KVKK, gizlilik, mücbir sebep ve uyuşmazlık maddelerinizin onaylı hallerini bir proje veya skill'e koyun.
3. **Düşük riskli bir türle başlayın:** NDA ön elemesi veya standart tedarik sözleşmeleri iyi bir ilk adımdır. Dava stratejisi ya da yüksek tutarlı işlemler ilk pilot için uygun değildir.
4. **Doğrulama adımını sürece yazın:** Her çıktıyı kim, hangi kaynakla kontrol ediyor; bu adım atlanırsa Claude'u kullanmanın riski faydasını aşar.

## Zamana'nın notu

Hukuk ekiplerinde en iyi sonucu, Claude'a "bu sözleşme iyi mi?" diye sormak değil, "bu sözleşmeyi şu kurallara göre incele ve her bulguya madde ve sayfa atfı ver" demek veriyor. Atıf istemek doğrulamayı hızlandırır. Hukuk ve uyum ekipleri için senaryolar ve hazır prompt'lar [hukuk sayfasında](/wiki/departmanlar/hukuk/), ekip eğitimi [kurumsal programda](/programlar/kurumsal/).
