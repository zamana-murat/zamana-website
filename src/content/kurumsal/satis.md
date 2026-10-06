---
title: "Satış ekipleri için Claude"
seoTitle: "Satışta Claude: Görüşme Hazırlığı, Teklif ve Satış Tahmini"
description: "Satış ekipleri Claude ile müşteri araştırır, görüşmeye hazırlanır, teklif ve tahmin hazırlar, CRM'i günceller. Türkiye'de bayi ağı, TL ve döviz teklif notları."
eyebrow: "Departman"
lead: "Satış temsilcisinin haftasının önemli bir kısmı müşteriyle değil, hazırlıkla geçer: araştırma, not toplama, teklif, CRM girişi. Claude bu hazırlık işini üstlenir; temsilci zamanını görüşmeye ve kapanışa ayırır."
heroImage: "/images/kurumsal/satis/hero.webp"
heroAnimation: "satis"
heroAlt: "Kurgusal bir endüstriyel tedarikçinin satış temsilcisi görüşme hazırlığı komutunu yazıyor; Claude CRM kaydını, son e-postaları ve şirket haberlerini tarıyor, açık fırsat, son 90 gün, risk ve konuşma noktalarını içeren görüşme özetini hazırlıyor ve onayla CRM'e not ekliyor."
availability: "Satış skill'leri ve Salesforce eklentisi (beta) tüm ücretli planlarda. Slack'te @Claude Team ve Enterprise'da; denetim kayıtları ve Compliance API yalnız Enterprise'da"
sourceUrl: "https://claude.com/solutions/sales"
sourceTitle: "Claude for Sales | Claude by Anthropic"
related:
  - { label: "Satış ve iş geliştirme departmanı (wiki)", href: "/wiki/departmanlar/satis/" }
  - { label: "İhracat ve uluslararası ticaret (wiki)", href: "/wiki/departmanlar/ihracat/" }
  - { label: "@Claude: Slack'te Claude", href: "/claude/tag/" }
  - { label: "Plugin'ler", href: "/claude/plugins/" }
  - { label: "Microsoft 365 eklentileri", href: "/claude/microsoft-365/" }
  - { label: "Kurumsal program", href: "/programlar/kurumsal/" }
order: 90
lastUpdated: "2026-10-06"
---

## Nedir?

Anthropic'in satış sayfasının özeti tek cümle: daha çok satış hattı, daha az hazırlık işi. Temsilci haftada saatlerce sürdüğü hesap araştırmasını, görüşme hazırlığını ve CRM girişini Claude'a devreder; yönetici ise kaynakları gösterilmiş, savunulabilir bir satış tahmini alır.

Claude bunu kendi başına değil, bağlı araçlarınızla yapar. Kaynak sayfa CRM, görüşme kaydı, potansiyel müşteri verisi ve e-imza alanlarında bir dizi entegrasyon sayıyor; en yaygın örnekler Salesforce ve HubSpot. Eylül 2026'da beta olarak çıkan **Salesforce in Claude** eklentisi, yenileme hazırlığından görüşme sonrası takibe kadar 37 hazır satış skill'i getiriyor ve tüm ücretli planlarda sunuluyor; Claude'un Salesforce'taki işlemleri temsilcinin kendi yetkileriyle kaydediliyor. Kaynak sayfadaki müşteri görüşlerinden birinde, bir hukuk teknolojisi şirketinin finans direktörü bu eklentiyle görüşme özetlerinin "saatler yerine saniyeler içinde" hazırlandığını söylüyor.

## Satış ekibi Claude'a neleri devreder?

Anthropic'in resmi açık depodaki satış plugin'inde bu işler için hazır skill'ler var. Aşağıdaki örnekler kurgusaldır.

- **Hesap araştırması (`sales:account-research`):** Web, yayımlanmış finansal bilgiler, haberler ve CRM kaydından kaynak bağlantılı tek sayfalık hesap özeti ya da tam hesap planı.
- **Görüşme hazırlığı (`sales:call-prep`):** Yarınki toplantı için açık fırsat, son yazışmalar, katılımcılar, son 90 günde değişenler, riskler ve konuşma noktaları. Zamanlanmış görevle her sabah o günün görüşmeleri için bu özet hazır gelebilir.
- **İlk temas (`sales:draft-outreach`):** Potansiyel müşteriye, onu araştırarak yazılmış kişisel bir e-posta taslağı. İhracat ekipleri için Türkçe, İngilizce ya da alıcının dilinde.
- **Görüşme sonrası (`sales:call-summary`):** Görüşme dökümünden takip e-postası, sonraki adımlar ve CRM alanları (kullanım senaryosu, rakip, karar süreci, riskler).
- **Satış hattı ve tahmin (`sales:pipeline-review`, `sales:forecast`):** Takılan fırsatları ve aykırı kayıtları işaretlemek; iyi, olası ve kötü senaryolu tahmin ve risk altındaki fırsatlar için önerilen eylemler.
- **Teklif ve şartname yanıtı:** PowerPoint eklentisiyle şirket şablonunda teklif sunumu, Word eklentisiyle değişiklik izleme açıkken şartname yanıtı. Ayrıntı: [Microsoft 365 eklentileri](/claude/microsoft-365/).
- **Fırsat kanalında @Claude:** Slack'teki fırsat kanalında Claude'u etiketleyip durum sormak, müşteri talebini özetletmek, eylem planı taslağı istemek. Ayrıntı: [@Claude](/claude/tag/).

![Kurgusal bir sanayi şirketinin çeyrek sonu satış tahmini: iyi, olası ve kötü senaryolar TL olarak gösterilmiş, hedefe uzaklık yazılmış; risk altındaki üç fırsat nedeni ve önerilen eylemiyle listelenmiş, her rakam CRM kaydına bağlanmış](/images/kurumsal/satis/tahmin.webp)

## Türkiye'de uyarlama notları

- **Bayi ve distribütör ağı:** Türk şirketlerinde satışın önemli kısmı bayiler üzerinden yürür. Claude bayilerden gelen dağınık aylık raporları tek tabloya çevirmek, bayi bazında hedef sapmasını yorumlamak ve bayi toplantısı için özet hazırlamak için kullanılabilir. Bayi verisinin Claude'a nasıl ulaşacağı (dosya, paylaşılan klasör, CRM) önceden planlanmalı.
- **TL ve döviz teklifleri:** Claude güncel döviz kurunu, fiyat listenizi ve iskonto yetkinizi bilmez; bunları siz vermelisiniz. Teklif tutarları, KDV ve tevkifat hesapları ERP'den ya da onaylı fiyat tablosundan gelmeli, Claude'un yazdığı rakam gönderilmeden önce kontrol edilmelidir. Kur maddesi ve geçerlilik süresi gibi ticari şartlar şirketinizin standart metninden alınmalıdır.
- **Yerli CRM ve ERP:** Türkiye'de yaygın bazı CRM ve ERP sistemleri için Claude'un hazır connector'ı olmayabilir. Bu durumda özel connector, sistemin API'si ya da dışa aktarılmış raporlar kullanılır. Ayrıntı: [Connector'lar](/claude/connectors/).
- **İhracat:** Yabancı alıcı araştırması, alıcının dilinde ilk temas e-postası ve fuar sonrası takip için Claude güçlü bir yardımcıdır. Senaryolar: [İhracat ve uluslararası ticaret](/wiki/departmanlar/ihracat/).
- **Ticari elektronik ileti:** Claude'un yazdığı kampanya e-postası veya SMS taslaklarını toplu gönderirken ticari elektronik ileti izni ve İleti Yönetim Sistemi (İYS) kurallarına uyun. Taslağı yazmak Claude'un, gönderme izni ise sizin sorumluluğunuzdadır.

## Güvenlik ve KVKK

CRM kayıtları müşteri temsilcilerinin adlarını, telefonlarını ve yazışmalarını içerir; bunlar kişisel veridir ve Claude'a gönderildiğinde model işlemesi için Anthropic'e (yurt dışına) gider.

- Ekip kullanımında Team veya Enterprise planı tercih edin: girdi ve çıktılar varsayılan olarak model eğitiminde kullanılmaz, veri işleme eki (DPA) ticari şartlara dahildir, Enterprise'da tam denetim kaydı vardır.
- Claude'un CRM'e yazma yetkisini temsilcinin kendi yetkileriyle sınırlı tutun ve kritik alanlarda (aşama, tutar, kapanış tarihi) değişikliği temsilci onayına bağlayın.
- Aydınlatma metninizin ve yurt dışına aktarım dayanağınızın bu kullanımı kapsadığını hukuk biriminizle teyit edin: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

## Nasıl başlarsınız?

1. **Tek bir hazırlık işiyle başlayın:** En kolay kazanım görüşme hazırlığıdır. Bir ekip iki hafta boyunca her önemli görüşmeden önce Claude'a özet hazırlatsın.
2. **CRM'i bağlayın:** Salesforce kullanıyorsanız Salesforce in Claude eklentisi en kısa yoldur. Başka bir CRM'de connector veya dışa aktarılmış raporlarla başlanır.
3. **Satış yönteminizi skill'e yazın:** Hesap planı şablonunuz, nitelendirme kriterleriniz, teklif dili ve iskonto kuralları. Anthropic'in satış skill'leri kendi oyun kitabınızla özelleştirilmek üzere tasarlanmış.
4. **Tahmini sonra ekleyin:** Satış hattı ve tahmin işleri CRM verisinin temizliğine bağlıdır. Önce verinin güncel tutulması alışkanlığı oturmalı; bunda da Claude'un görüşme sonrası CRM özetleri yardımcı olur.

## Zamana'nın notu

Satış ekiplerinde Claude'un benimsenmesini en çok hızlandıran şey, temsilcinin ilk hafta somut bir zaman kazancı görmesi. Görüşme hazırlığı bunun için idealdir: sonuç ertesi sabah görüşmede kendini gösterir. Satış ve iş geliştirme ekipleri için senaryolar ve hazır prompt'lar [satış sayfasında](/wiki/departmanlar/satis/), ekip eğitimi [kurumsal programda](/programlar/kurumsal/).
