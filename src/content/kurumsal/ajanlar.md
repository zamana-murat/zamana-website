---
title: "Yapay zeka ajanları: işi uçtan uca yürüten Claude"
seoTitle: "Yapay Zeka Ajanları (AI Agents): Claude ile Kurumsal Kullanım"
description: "Yapay zeka ajanı nedir, iş akışından farkı ne? Claude ile planlayan, araç kullanan ve onay soran ajanlar: Türk şirketi senaryoları, KVKK notları ve planlar."
eyebrow: "Kullanım alanı"
lead: "Ajan, kendisine verilen bir hedef için adımları kendisi planlayan, sistemlerinize bağlı araçları kullanan ve karar gereken yerde insana soran bir Claude'dur. Sohbetten farkı, cevap vermekle kalmayıp işi yürütmesidir."
heroImage: "/images/kurumsal/ajanlar/hero.webp"
heroAnimation: "ajanlar"
heroAlt: "Bir finans çalışanı ajana Eylül e-faturalarını banka hareketleriyle eşleştirme görevi veriyor; ajan dört adımlık plan çıkarıp her adımı bir araç çağrısıyla yürütüyor ve fazla ödeme görünen kalem için insan onayı istiyor."
availability: "Hazır ajanlar: Cowork ve Claude Code tüm ücretli planlarda, Claude Tag Team ve Enterprise'ta. Kendi ajanınız: Claude Platform (API), kullanım başına ücret"
sourceUrl: "https://claude.com/solutions/agents"
sourceTitle: "Make AI agents your unfair advantage"
related:
  - { label: "Ajanlar ve alt ajanlar (wiki)", href: "/wiki/yetenekler/agents-subagents/" }
  - { label: "MCP nedir? (wiki)", href: "/wiki/mcp/nedir/" }
  - { label: "Cowork modu (wiki)", href: "/wiki/araclar/cowork-modu/" }
  - { label: "Claude Platform", href: "/kurumsal/platform/" }
  - { label: "Kodlama", href: "/kurumsal/kodlama/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
order: 30
lastUpdated: "2026-10-06"
---

## Nedir?

Sohbette Claude'a bir soru sorarsınız, o da cevap verir; sonraki adımı siz atarsınız. Ajanda ise Claude'a bir **hedef** verirsiniz: "Eylül faturalarını banka hareketleriyle eşleştir, farkları çıkar." Claude hangi verilere bakacağını, hangi sırayla ilerleyeceğini kendisi belirler, sistemlerinize bağlı araçları çağırır, her adımın sonucuna bakıp bir sonrakine karar verir ve iş bitince ya da sizin kararınız gerektiğinde durur.

Anthropic'in mühendislik ekibi, müşterileriyle yaptığı çalışmalardan çıkardığı "Building effective agents" yazısında iki yapıyı ayırıyor:

- **İş akışı (workflow):** Adımlar önceden kodla belirlenmiştir. Claude her adımda kendisine verilen işi yapar, sırayı değiştirmez. Öngörülebilir, tekrar eden işler için yeterlidir.
- **Ajan (agent):** Claude süreci ve araç kullanımını kendisi yönetir. Adım sayısı baştan belli olmayan, duruma göre yol değiştirmesi gereken işler için uygundur.

Aynı yazının temel tavsiyesi Türk şirketleri için de geçerli: en basit çözümle başlayın, karmaşıklığı yalnızca ölçülebilir bir fayda getiriyorsa artırın. Her otomasyonun ajan olması gerekmez.

![İş akışı ile ajan arasındaki fark: solda adımları önceden belli dört kutuluk bir iş akışı, sağda Claude'un planlayıp araç çağırdığı, sonucu değerlendirip yeniden karar verdiği ve sınırda insana sorduğu ajan döngüsü](/images/kurumsal/ajanlar/is-akisi-ve-ajan.webp)

## Claude'u ajanlar için öne çıkaran ne?

Anthropic'in sayfası üç noktayı vurguluyor. Bunlar üreticinin kendi iddiasıdır, kendi işinizde küçük bir pilotla sınamanız gerekir:

- **Ajan senaryolarında performans:** Müşteri desteği ve kodlama gibi ajan işlerinde rakiplerinin önünde olduğunu söylüyor.
- **İnsanla birlikte çalışma:** Konuşma üslubunun, ajanın ne yaptığını açıklamasını ve kullanıcıyla gerçek bir iş birliği kurmasını kolaylaştırdığını belirtiyor.
- **Markayı koruma:** Dürüstlük, kötüye kullanım girişimlerine (jailbreak) direnç ve marka güvenliği değerlendirmelerinde en yüksek sırada olduğunu iddia ediyor.

Kaynak sayfadaki müşteri görüşleri ağırlıkla yazılım tarafından. Örneğin GitHub, Opus 5.5'in testlerinde en az token ve adım kullanan modeller arasında olduğunu, Red Hat ise Claude Code ile Fable 5.1'in test ettikleri bozuk derlemelerin tamamında kök nedeni doğru bulduğunu aktarıyor.

## Ajanı nerede kurarsınız?

İki yol var ve çoğu kurum ikisini birlikte kullanır:

1. **Hazır ajanlar (plan dahilinde):** Cowork masaüstünde dosyalarınız ve bağlı uygulamalarınız üzerinde çok adımlı işleri yürütür. Claude Code yazılım ekiplerinin kodlama ajanıdır. Claude Tag, Slack kanalında etiketlediğiniz ortak bir ajandır. Kod yazmadan, kurumsal plan içinde kullanılırlar.
2. **Kendi ajanınız (Claude Platform):** Yazılım ekibiniz ajanı kendi ürününüze ya da iç sisteminize gömer. Doğrudan model erişimi için Messages API, hazır ajan altyapısı için Claude Agent SDK, sunucu tarafını Anthropic'in yönettiği seçenek için Claude Managed Agents kullanılır. Ücret token başına, API fiyatıyla ödenir. Ayrıntı: [Claude Platform](/kurumsal/platform/).

Ajanın sistemlerinize erişimi çoğunlukla **MCP** (Model Context Protocol) bağlantılarıyla kurulur. Türkiye'de yaygın bazı muhasebe ve ERP yazılımları için Claude'un bağlantı dizininde hazır bir connector bulunmuyor; bu durumda yazılımın kendi API'si üzerinden özel bir bağlantı yazılır. Ayrıntı: [MCP nedir?](/wiki/mcp/nedir/)

## Türk şirketinde örnek senaryolar

Aşağıdakiler kurgusal örneklerdir. Kaynaktaki müşteri hikâyeleri yabancı şirketlere aittir.

- **E-fatura mutabakatı (finans):** Ajan ay sonunda e-fatura listesini ve banka hareketlerini çeker, eşleştirir, tutmayan kalemleri gerekçesiyle listeler. Ödeme, mahsup veya iade gibi para hareketi doğuran her adımı insana onaylatır.
- **Tedarik zinciri:** Bir dağıtım şirketinde ajan her sabah stok, açık sipariş ve tedarikçi teslim tarihlerini karşılaştırır, gecikme riski taşıyan kalemleri ve alternatif tedarikçileri satın alma ekibine taslak olarak sunar.
- **Bayi ağı:** Yüzlerce bayisi olan bir üretici, bayilerden gelen sipariş ve şikâyet e-postalarını ajanla sınıflandırır, eksik bilgi olanlara Türkçe dönüş taslağı hazırlatır, bölge müdürüne haftalık özet çıkartır.
- **Çağrı merkezi:** Ajan çağrı kaydının yazıya dökülmüş metnini okur, talebi ilgili birime yönlendirir, müşteri kaydını günceller ve temsilciye bir sonraki adımı önerir. Müşteriye doğrudan söz veren yanıtlar onaydan geçer.

Ortak çizgi: ajan veri toplar, karşılaştırır, taslak hazırlar; geri alınamayan ya da müşteriye giden adımda bir insan son kararı verir.

## Güvenlik, KVKK ve insan onayı

- **Yetkiyi dar tutun:** Ajanın erişebildiği her sistem, yanlış bir adımda etkilenebilecek bir sistemdir. Okuma yetkisiyle başlayın, yazma yetkisini tek tek ve gerekçesiyle açın.
- **Onay noktalarını baştan tanımlayın:** Para hareketi, müşteriye giden mesaj, kayıt silme gibi adımlarda ajanın durup onay istemesi tasarımın parçası olmalı.
- **Kayıt tutun:** Hangi ajanın, kimin isteğiyle, hangi aracı çağırdığı izlenebilir olmalı. Enterprise planında denetim kaydı (audit log) ve Compliance API bunun için var.
- **Kişisel veri:** Ajanın işlediği müşteri, çalışan veya tedarikçi verisi Anthropic'e model işlemesi için gider. Team, Enterprise ve API'de girdi ve çıktılar varsayılan olarak model eğitiminde kullanılmaz ve veri işleme sözleşmesi (DPA) ticari şartlara dahildir. KVKK (6698) kapsamında aydınlatma, yurt dışı aktarım ve özel nitelikli kişisel veri konularını hukuk biriminizle teyit edin: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

## Hangi planda, nasıl başlanır?

- **Plan:** Cowork ve Claude Code Pro, Max, Team ve Enterprise'ta; Claude Tag yalnız Team ve Enterprise'ta. Kurum içinde yönetim, SSO ve denetim kaydı gerekiyorsa Team veya Enterprise.
- **Fiyat:** Enterprise kullanım bazlıdır: koltuk başına aylık 20 dolar, yıllık faturalı; sohbet, Cowork ve Claude Code kullanımı ayrıca API fiyatıyla faturalanır. Kendi ajanınızı API ile kurarsanız yalnız token kullanımı ödenir. Ajanlar uzun işlerde çok token harcar; pilotta maliyeti ölçün.
- **Satın alma:** Doğrudan Anthropic'ten, dolar ile. Anthropic'in Türkiye'de ofisi veya resmi temsilcisi yok. Kurumsal teklif için Anthropic satış ekibiyle görüşülür.
- **Başlangıç:** Tekrar eden, kuralları belli, yanlışı kolay fark edilen tek bir işle başlayın (ör. aylık mutabakat ön kontrolü). Ajanın çıktısını birkaç hafta insan çıktısıyla yan yana karşılaştırın, sonra kapsamı genişletin.

## Zamana'nın notu

Zamana programları API ile ajan geliştirmeyi öğretmez. Odak, ekiplerin Cowork, Claude Tag ve bağlı uygulamalarla çok adımlı işleri güvenle Claude'a devretmesidir: hedefi doğru tarif etmek, onay noktası koymak, çıktıyı denetlemek. Bu, ajan kullanımının teknik kurulumdan daha sık atlanan yarısıdır. Ayrıntı için [kurumsal programa](/programlar/kurumsal/) bakabilirsiniz.
