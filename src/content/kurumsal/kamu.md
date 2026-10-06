---
title: "Kamu kurumları için Claude"
seoTitle: "Kamu Kurumları ve Belediyelerde Claude: Türkiye'de Gerçekçi Tablo"
description: "Claude'un kamu teklifleri ABD odaklıdır. Türk kamu kurumu ve belediyesi için veri sınıflandırması, 2019/12 Genelgesi, satın alma yolu ve kullanım örnekleri."
eyebrow: "Sektör"
lead: "Anthropic'in kamu sayfası ağırlıkla ABD kurumlarına yönelik: FedRAMP yetkisi, ABD'ye özel ürün ve fiyatlandırma. Bunların Türkiye'de karşılığı yok. Türk kamu kurumu Claude'u ancak ticari planlarla, kamuya açık ya da anonimleştirilmiş veriyle ve kendi bilgi güvenliği kurallarının izin verdiği ölçüde kullanabilir."
heroImage: "/images/kurumsal/kamu/hero.webp"
heroAnimation: "kamu"
heroAlt: "Kurgusal Kuzey Belediyesi başvuru masası: vatandaş başvurularındaki ad, telefon ve adres önce maskeleniyor, sonra Claude başvuruları birimlere ayırıyor, günün özetini çıkarıyor ve memur onayı bekleyen bir yanıt taslağı hazırlıyor."
availability: "Türkiye için kamuya özel plan yok. ABD'deki Claude for Government ve FedRAMP seçenekleri Türk kurumlarında geçerli değil; ticari Team veya Enterprise, ABD doları ile"
sourceUrl: "https://claude.com/solutions/government"
sourceTitle: "Claude for Government"
related:
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
  - { label: "Türkiye'de Claude (wiki)", href: "/wiki/temeller/turkiyede-claude/" }
  - { label: "Fatura ve KDV (wiki)", href: "/wiki/temeller/fatura-ve-kdv/" }
  - { label: "Şirket içi yapay zeka politikası (wiki)", href: "/wiki/temeller/sirket-ici-politika/" }
  - { label: "Kodlama için Claude", href: "/kurumsal/kodlama/" }
  - { label: "Kurumsal program", href: "/programlar/kurumsal/" }
order: 110
lastUpdated: "2026-10-06"
---

## Kaynak sayfa ne anlatıyor?

Anthropic'in kamu sayfası, Claude'u "kamu kurumlarının güvenlik ve uyum ihtiyacına göre kurulmuş yapay zeka" olarak tanıtıyor. Öne çıkan üç vaat var: kuruma kapasite eklemek (belge inceleme, araştırma, taslak yazma, dosya işleme, kodlama), eski sistemlerin teknik borcunu eritmek (örneğin COBOL ile yazılmış yazılımların belgelenip yenilenmesi) ve "güvenle kurulup hızla onaylanabilmek".

Sayfada farklı ülkelerden örnekler de var: ABD'de Kaliforniya eyaleti, Afrika'da Ruanda hükümeti (eğitim ve sağlık alanında iş birliği), Kanada'da Alberta eyaleti (siber güvenlik açıklarının saatler içinde bulunması). Yani Anthropic yalnız ABD ile çalışmıyor. Ama Türkiye için duyurulmuş bir kamu programı, anlaşması ya da özel bir teklif yok.

## ABD'ye özel olanlar: Türkiye'de geçerli değil

Sayfanın asıl teklifleri ABD kamu sistemine bağlı. Bir Türk kurumunun bunları okurken yanlış beklentiye girmemesi için açıkça yazalım:

- **Claude for Government:** ABD federal, eyalet ve yerel kurumları ile onlara hizmet veren yükleniciler için ayrı bir ürün. FedRAMP High yetkisine sahip, masaüstü uygulaması ve Claude Code içeriyor.
- **FedRAMP ve DoD IL4/IL5:** ABD federal hükümetinin bulut güvenlik yetkilendirmeleridir. Türk mevzuatında karşılığı yoktur, Türk kurumu için bir onay anlamı taşımaz. Kaynak sayfa, ticari Claude Enterprise ve Anthropic'in doğrudan sunduğu API'nin bugün FedRAMP yetkili olmadığını da ayrıca belirtiyor.
- **Kamuya özel fiyat:** Claude for Government'ta koltuk ücreti yok, önceden ödenen kullanım ve aşılamaz harcama tavanı var. Bu fiyat modeli ABD kurumları içindir.
- **ABD bulut kanalları:** Claude API'nin Amazon Bedrock (AWS GovCloud) ve Google Vertex AI (Assured Workloads) üzerinden FedRAMP High yetkili kullanımı da ABD kamu sistemine yöneliktir.

Türk kamu kurumunun önünde olan seçenekler, herkese açık ticari planlardır: Team veya Enterprise. Bu planlarda girdi ve çıktılar varsayılan olarak model eğitiminde kullanılmaz, Anthropic'in veri işleme sözleşmesi (DPA) ticari şartlara dahildir. Enterprise'da koltuk başına aylık 20 dolar ödenir, kullanım ayrıca API fiyatıyla faturalanır ([Planlar](/wiki/temeller/planlar/)).

## Veri: neyi verebilirsiniz?

Kamu kurumu için asıl soru plan değil, veridir. Claude'a yazdığınız her şey Anthropic'in yurt dışındaki altyapısında işlenir. Bu yüzden önce kurumun kendi veri sınıflandırması devreye girer.

![Bir kamu kurumu için örnek veri sınıflandırma şeması: kamuya açık bilgi Claude ile kullanılabilir, kurum içi bilgi birim onayıyla ve kişisel veri çıkarılarak kullanılabilir, kişisel veri ile hizmete özel bilgi anonimleştirilmeden girilmez, gizli ve kritik bilgi hiç girilmez](/images/kurumsal/kamu/veri-siniflandirma.webp)

Göz önünde bulundurulması gereken çerçeveler:

- **2019/12 sayılı Bilgi ve İletişim Güvenliği Tedbirleri Genelgesi:** Kamu verisinin, kurumun kendi sistemleri ya da kurum kontrolündeki yerli hizmet sağlayıcıların bulutları dışında saklanmamasını ve kritik verinin yurt içinde tutulmasını öngörür. Claude yurt dışında işleyen bir bulut hizmetidir; hangi verinin bu kapsama girdiğini kurumunuzun bilgi güvenliği birimi belirler.
- **Bilgi ve İletişim Güvenliği Rehberi:** Cumhurbaşkanlığı Dijital Dönüşüm Ofisi'nin yayımladığı rehber, bilgi varlıklarının kritiklik derecesine göre sınıflandırılmasını ve buna bağlı güvenlik tedbirlerini tarif eder. Kurumunuzun bu rehbere göre yaptığı sınıflandırma, Claude kullanımının da sınırını çizer.
- **KVKK:** Kamu kurumları da veri sorumlusudur. Vatandaşa ait kişisel veriyi Claude'a girmek yurt dışına aktarım sayılır ve KVKK m.9 şartlarını gerektirir: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

Bu sayfa hukuki görüş değildir. Mevzuatın kurumunuza nasıl uygulanacağına hukuk müşavirliğiniz ve bilgi işlem birimi karar verir. Pratik başlangıç noktası: yalnız kamuya açık ya da tamamen anonimleştirilmiş metinle çalışmak.

## Satın alma: gerçekçi yol

Kamu kurumlarının en çok takıldığı yer burası:

- **Ödeme ABD doları ile, Anthropic'e yapılır.** Anthropic'in Türkiye'de ofisi ya da resmi temsilcisi yok. Türkiye'de Claude koltuklarını yeniden satmaya yetkili bir bayi de doğrulayamadık.
- **TL faturalı bir satın alma yolunu doğrulayamadık.** Team ve Enterprise'ın üçüncü taraf üzerinden yeniden satışı Anthropic'in yazılı onayına bağlı ve Türkiye'de yetkili bir bayi doğrulanmadı. Zamana, Anthropic'in temsilcisi ya da bayisi değildir ve abonelik satmaz.
- **Yurt dışı hizmet alımı:** Doğrudan temin, kredi kartıyla yurt dışı ödeme, sorumlu sıfatıyla KDV ve kur farkı gibi konuları kurumun mali hizmetler birimiyle önceden netleştirin. Vergi tarafı için: [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/).
- **Kurumsal sözleşme:** Enterprise için Anthropic'in satış ekibiyle doğrudan görüşülür; sözleşme tarafı Anthropic'tir.

## Belediye ve kamu kurumunda nasıl görünür?

Aşağıdakiler kurgusal örneklerdir. Hepsinde ortak kural aynı: kişisel veri çıkarılır, çıktıyı bir memur kontrol eder, karar ve imza kurumdadır.

- **Belediye başvuru masası:** Kimlik bilgileri maskelenmiş vatandaş başvurularını Fen İşleri, Zabıta, Park ve Bahçeler gibi birimlere ayırmak ve standart yanıt taslağı hazırlamak. Taslak, memur onayı olmadan gönderilmez.
- **Meclis ve encümen işleri:** Kamuya açıklanan meclis kararlarından konu bazında özet, önceki kararlarla karşılaştırma, vatandaşa yönelik sade dilde duyuru metni.
- **Mevzuat takibi:** Resmî Gazete'de yayımlanan yeni bir yönetmeliğin kurumun iç yönergesine etkisini listelemek. Yorum hukuk müşavirliğinindir.
- **İhale hazırlığı:** Yayımlanacak teknik şartname taslağında belirsiz, çelişkili ya da rekabeti daraltabilecek ifadeleri işaretlemek. Gizli yaklaşık maliyet ve teklif bilgisi girilmez.
- **Kamu iktisadi teşekkülü:** Yıllık faaliyet raporunun kamuya açık bölümlerinden sunum ve özet hazırlamak; teknik el kitaplarını sade Türkçeye çevirmek.
- **Bilgi işlem:** Eski bir yazılımın kaynak kodunu belgelemek ve yenileme planı çıkarmak. Kaynak sayfadaki COBOL örneğinin Türkiye'deki karşılığı. Kod gizli sınıftaysa önce bilgi güvenliği onayı gerekir: [Kodlama için Claude](/kurumsal/kodlama/).

## Nasıl başlarsınız?

1. Bilgi güvenliği biriminizle Claude'a hangi sınıftaki verinin girebileceğini yazılı hâle getirin.
2. Kamuya açık metinle çalışan küçük bir pilot seçin: duyuru yazımı, mevzuat özeti, şartname kontrolü.
3. Satın alma yolunu mali hizmetler birimiyle netleştirin; ödeme USD ile Anthropic'e yapılır.
4. Personelin kişisel ücretsiz hesaplarla kurum verisi kullanmaması için kısa bir iç kural yazın: [Şirket içi yapay zeka politikası](/wiki/temeller/sirket-ici-politika/).
5. Ekiplerin Claude'u bu sınırlar içinde verimli kullanmasını öğrenmek için Zamana'nın [kurumsal programına](/programlar/kurumsal/) bakabilirsiniz.
