---
title: "Claude Platform: kendi ürününüzü Claude üzerine kurun"
seoTitle: "Claude Platform (API) Nedir? Kurumlar İçin Türkçe Özet"
description: "Claude Platform: API, yönetilen ajanlar ve Console ile Claude'u kendi ürün ve sistemlerinize gömme yolu. Modeller, fiyatlar, bulut ve KVKK notları."
eyebrow: "Kurumsal"
lead: "Claude Platform, Claude'u bir sohbet uygulaması olarak değil, kendi yazılımınızın parçası olarak kullanmanın yolu. Modellere API ile erişir, ajan kurar, Console'dan izler ve yönetirsiniz. Bu bir yazılım ekibi işidir."
heroImage: "/images/kurumsal/platform/hero.webp"
heroAnimation: "platform"
heroAlt: "Kurgusal Anadolu Sigorta'nın hasar dosyası ajanı API üzerinden çalışıyor: solda istek kodu, sağda Claude'un poliçeyi sorguladığı, ekspertiz raporunu okuduğu ve ödeme önerisini hasar uzmanının onayına gönderdiği çalıştırma izi, altta token ve maliyet özeti."
availability: "Abonelik planı değil, kullandıkça öde: Claude Console hesabıyla ön ödemeli API kullanımı, kurumsal sözleşmede aylık fatura. Amazon Bedrock, Google Cloud Vertex AI ve Microsoft Foundry üzerinden de kullanılır"
sourceUrl: "https://claude.com/platform/api"
sourceTitle: "Claude Platform"
related:
  - { label: "Claude Enterprise genel bakış", href: "/kurumsal/" }
  - { label: "Kurumlar için Claude Code", href: "/kurumsal/claude-code/" }
  - { label: "Claude modelleri", href: "/claude/modeller/" }
  - { label: "MCP nedir? (wiki)", href: "/wiki/mcp/nedir/" }
  - { label: "Alt ajanlar (wiki)", href: "/wiki/yetenekler/agents-subagents/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
order: 20
lastUpdated: "2026-10-06"
---

## Nedir?

Claude'u kurumda kullanmanın iki yolu var. Birincisi, çalışanların her gün açıp kullandığı Claude: sohbet, Cowork, Claude Code. Bunun kurumsal karşılığı [Claude Enterprise](/kurumsal/) planı. İkincisi, Claude'u kendi yazılımınızın içine yerleştirmek: müşteri hizmetleri sisteminize, mobil uygulamanıza, belge işleme hattınıza ya da iç süreçlerinizi yürüten bir ajana. Bu ikinci yolun adı Claude Platform.

Anthropic'in sayfası bunu "Claude Platform üzerinde en ileri ajanları kurun" diye özetliyor: modeller, ajanların çalıştığı çerçeve, bağlam yönetimi ve altyapı birlikte çalışacak şekilde sunuluyor. Burada kullanıcı arayüzü yok; ürünü yazılım ekibiniz kurar, son kullanıcı Claude'u sizin ürününüz içinde görür.

## Neler var?

Anthropic, platformu üç katman olarak anlatıyor:

![Claude Platform'un üç katmanının Türkçe çizimi: altta Messages API ve araçlar, ortada yönetilen ajanlar ve altyapı, üstte yetkilendirme, yönetişim ve gözlem; yanda tüm katmanları izleyen Claude Console](/images/kurumsal/platform/katmanlar.webp)

- **Temel yapı taşları:** Messages API ile modele tam kontrolle erişim ve modele eklenebilen araçlar: kod çalıştırma, JSON şemasına uyan yapılandırılmış çıktı, dış sistemleri çağırma (tool use), tarayıcı ve masaüstü otomasyonu (computer use), kaynak gösterme, dosya yükleme, web arama, 1 milyon tokenlık bağlam penceresi (Haiku 4.5'te 200 bin) ve uzun oturumlarda bağlamı özetleme (compaction).
- **Yönetilen ajanlar (Claude Managed Agents, beta):** Uzun süren ajanları ölçekli çalıştırmak için hazır altyapı. Kaynak sayfa çoklu ajan yönetimi, ajanın kendi işini bir başarı ölçütüne göre puanlaması, oturumlar arası hafıza, zamanlanmış çalıştırma, hassas veriyi kendi altyapınızda tutan yalıtılmış ortamlar, özel ağdaki MCP sunucularına güvenli erişim ve kimlik bilgilerini koddan ayrı saklayan kasalar gibi özellikleri sayıyor. Ajanların oturumlar arasında öğrendiklerini derlemesi ("dreaming") ayrıca talep formuyla açılan bir araştırma önizlemesi.
- **Yönetim katmanı:** Yetkilendirme, yönetişim ve gözlem kontrolleri.

**Claude Console** ise bunların yönetildiği yer: istekleri deneme ve ajan yapılandırma, kullanımı, maliyeti, önbellek oranını ve hız sınırlarını model ve API anahtarı bazında izleme, çalışma alanı başına anahtar, üye ve harcama sınırı yönetimi.

Dış sistemlere bağlanmak için açık bir standart olan [MCP](/wiki/mcp/nedir/) ve tekrar kullanılabilir uzmanlık paketleri olan skill'ler de platformda kullanılır.

## Modeller ve fiyat

Fiyatlar milyon token başına, ABD doları, vergi hariç:

| Model | Girdi | Çıktı | Ne için |
|---|---|---|---|
| Fable 5.1 | 10 $ | 50 $ | En güçlü model, uzun soluklu ajan işleri |
| Opus 5.5 | 4 $ | 20 $ | Çoğu iş için başlangıç önerisi, ajan ve kodlama |
| Sonnet 5.5 | 2 $ | 10 $ | Hız ve zekâ dengesi, yüksek hacimli işler |
| Haiku 4.5 | 1 $ | 5 $ | En hızlı ve en ucuz, hafif işler |

Maliyeti düşüren yollar: toplu işleme (batch) yüzde 50 tasarruf sağlar, istem önbelleği (prompt caching) tekrar eden bağlamda maliyeti yüzde 90'a kadar düşürür. Anthropic'in sayfasına göre yalnız ABD'de işleme seçeneği 1,1 kat fiyatlanır. Modellerin ayrıntısı için [Claude modelleri](/claude/modeller/) sayfasına bakın.

Ödeme iki türlü: kendi başınıza başlarsanız Console'da ön ödemeli kredi (isteğe bağlı otomatik yükleme) ve kullanıma göre artan hız sınırları; satış ekibiyle anlaşırsanız aylık fatura, özel hız sınırları ve kurulum desteği.

## Nerede çalışır?

Claude Platform'u doğrudan Anthropic'ten kullanabileceğiniz gibi Amazon Web Services (Bedrock), Google Cloud (Vertex AI) ve Microsoft Foundry üzerinden de kullanabilirsiniz. Şirketiniz bu bulutlardan biriyle çalışıyorsa satın alma, faturalama ve güvenlik onayı mevcut sözleşmeniz üzerinden daha kolay ilerleyebilir. Anthropic'in sayfası ayrıca Asya-Pasifik, Kanada, Avrupa ve ABD için bölgesel veri yerleşimi seçeneklerinden söz ediyor. Türkiye bölgesi yok.

## Türk kurumunda ne işe yarar?

Aşağıdakiler kurgusal örneklerdir:

- **Sigorta:** Bir hasar dosyasındaki poliçe, ekspertiz raporu ve fotoğraf açıklamalarını okuyup gerekçeli bir ödeme önerisi taslağı hazırlayan, son kararı hasar uzmanına bırakan ajan.
- **E-ticaret:** Binlerce ürün için tedarikçi verisinden tutarlı Türkçe ürün açıklaması üreten toplu işleme hattı.
- **Müşteri hizmetleri:** Gelen talepleri sınıflandıran, sipariş sistemine bakıp ilk cevabı hazırlayan ve karmaşık durumu temsilciye aktaran destek ajanı.
- **Lojistik ve üretim:** İrsaliye, fatura ve gümrük belgelerinden yapılandırılmış veri çıkaran belge işleme servisi.

Kaynak sayfadaki örneklerden ikisi (rakamlar ilgili şirketlere ait): Atlassian müşteri iş akışlarında ayda 5 milyon yapay zeka ajanı çalıştırdığını, Vibecode üretime hazır ajanları 10 kat hızlı kurduğunu söylüyor.

## Güvenlik, veri ve KVKK

- **Eğitimde kullanım:** API girdileri ve çıktıları varsayılan olarak model eğitiminde kullanılmaz.
- **Saklama:** Standart düzende API girdi ve çıktıları 30 gün içinde silinir; sözleşmeyle farklı düzenlenebilir.
- **Sıfır veri saklama (ZDR):** Anthropic'in yanıt döndükten sonra veriyi saklamadığı düzenleme. Satış ekibiyle talep edilir, kuruluş başına açılır ve her API özelliği bu düzene uygun değildir.
- **DPA:** Anthropic'in veri işleme sözleşmesi (standart sözleşme maddeleri dahil) ticari şartlara otomatik olarak dahildir.
- **Uyum:** Kaynak sayfa ISO, HIPAA, AICPA (SOC) ve GDPR çerçevelerini listeliyor. Bunlar Türkiye'ye özgü bir onay anlamına gelmez.

KVKK açısından en önemli nokta tasarımdır: API'ye ne gönderdiğinize siz karar verirsiniz. Kişisel veriyi gerekmiyorsa göndermeyin, gerekiyorsa maskeleyin ya da takma adlandırın; özel nitelikli kişisel verilerde (sağlık, biyometrik vb.) ayrıca dikkatli olun. Veri Türkiye dışında işlendiği için 6698 sayılı KVKK'nın yurt dışına aktarım hükümleri ve aydınlatma yükümlülüğü gündeme gelir. Mimariyi kurmadan önce hukuk biriminizle teyit edin; ayrıntı için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

## Nasıl başlanır?

1. Yazılım ekibiniz Claude Console'da bir hesap açar, API anahtarı oluşturur ve küçük bir kredi yükler. Üretim ortamında anahtar yerine iş yükü kimlik federasyonu (Workload Identity Federation) öneriliyor.
2. Belgeler ve hazır örnekler (cookbook) Anthropic'in geliştirici belgelerinde.
3. Tek bir dar kullanım alanıyla başlayın ve başarıyı ölçecek bir değerlendirme seti kurun: hangi cevap doğru, hangisi yanlış.
4. Ölçek, özel hız sınırı ya da aylık fatura gerekiyorsa Anthropic satış ekibiyle görüşün: [claude.com/contact-sales](https://claude.com/contact-sales). Ödeme dolar cinsindendir; vergi tarafı için [Fatura, KDV ve stopaj](/wiki/temeller/fatura-ve-kdv/) sayfasına bakın.

## Zamana'nın notu

Zamana'nın eğitimleri Claude'u iş için kullanan ekiplere yöneliktir ve API'yi kapsamaz. Claude Platform üzerinde ürün geliştirmek bir yazılım ekibi işidir: mimari, güvenlik, değerlendirme ve bakım ister. Bu sayfayı, kurumunuzda "Enterprise mı alalım, API ile kendimiz mi kuralım?" sorusu sorulduğunda iki yolun farkını net görebilmeniz için hazırladık. Çoğu kurumda cevap ikisi birden olur: çalışanlar için Enterprise, ürün ve süreç otomasyonu için Platform.
