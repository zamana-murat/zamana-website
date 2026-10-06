---
title: "Claude Marketplace: iş ortağı çözümlerini kuruma almak"
seoTitle: "Claude Marketplace: Kurumlar İçin Değerlendirme Rehberi"
description: "Claude Marketplace'te connector, eklenti, Claude tabanlı ürünler ve hizmet ortakları var. Türk kurumu için satın alma, veri akışı, KVKK ve BT onayı notları."
eyebrow: "Ekosistem"
lead: "Claude Marketplace, Claude ile çalışan üçüncü taraf çözümlerin tek vitrini: araçlarınızı bağlayan connector ve eklentiler, iş ortaklarının Claude tabanlı ürünleri ve kurulum yapan hizmet ortakları. Kurumsal tarafta asıl yenilik, bazı ürünlerin Anthropic taahhüdünüzden ödenebilmesi."
heroImage: "/images/kurumsal/marketplace/hero.webp"
heroAnimation: "marketplace"
heroAlt: "Kurgusal bir katalogda muhasebe aranıyor, bir muhasebe bağlayıcısının istediği izinler inceleniyor, BT onayına gönderiliyor ve onaylandıktan sonra finans ekibine açılıyor."
availability: "Connector'lar Free dahil tüm planlarda; eklentiler (plugin) Claude Code ve Cowork içinde, yani ücretli planlarda. Team ve Enterprise'ta yönetici açar. Ürünleri taahhütle almak, Anthropic ile taahhütlü sözleşmesi olan kurumlar için"
sourceUrl: "https://claude.com/marketplace"
sourceTitle: "Claude Marketplace"
related:
  - { label: "Connectors", href: "/claude/connectors/" }
  - { label: "Plugins", href: "/claude/plugins/" }
  - { label: "MCP güvenliği (wiki)", href: "/wiki/mcp/guvenlik/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
  - { label: "Takım ve admin (wiki)", href: "/wiki/temeller/takim-ve-admin/" }
  - { label: "Müşteri hikâyeleri", href: "/kurumsal/musteriler/" }
order: 170
lastUpdated: "2026-10-06"
---

## Nedir?

Claude Marketplace, Anthropic'in claude.com/marketplace adresinde topladığı iş ortağı kataloğu. 23 Eylül 2026'da bugünkü haliyle açıldı ([haberimiz](/haberler/2026-09-23-claude-marketplace/)). Üç bölümü var:

- **Connector ve eklentiler:** Claude'u Google, Microsoft, Atlassian, Notion, Salesforce gibi araçlara bağlayan bileşenler. Anthropic'in duyurusuna göre 2.000'den fazla. Bu sayı bağlayıcı ve eklentinin toplamı; yalnız connector dizini yaklaşık 900 kayıt. Ayrıntı için [Connectors](/claude/connectors/) ve [Plugins](/claude/plugins/) sayfalarımıza bakın.
- **Ajanlar ve ürünler:** İş ortaklarının Claude üzerine kurduğu hazır yazılımlar. Kaynak sayfada kod (Cursor, GitLab, Vercel, Factory), veri (Snowflake, Gamma), hukuk (Harvey, Legora), finans (Hebbia) ve güvenlik (CrowdStrike) kategorileri listeleniyor.
- **Hizmet ortakları:** Claude'u kurumun geneline yaymak için kurulum ve danışmanlık yapan firmalar (Claude Partner Network). Global Premier, Preferred ve Select diye üç kademe var.

Bu sayfa kurumsal tarafa odaklanıyor: ikinci ve üçüncü bölümü bir Türk kurumu nasıl değerlendirir.

## Taahhütten ödeme ne demek?

Anthropic ile yıllık harcama taahhüdü olan kurumlar, bu taahhüdün bir kısmını Marketplace'teki iş ortağı ürünlerine ayırabiliyor. Kaynak sayfanın ifadesiyle ürünler "mevcut Anthropic taahhüdünüze sayılabilir". Satın alma "Request to buy" düğmesiyle Anthropic'in satış ekibi üzerinden başlıyor.

Bu ne kazandırır: bütçesi zaten ayrılmış bir taahhüdü, ayrı bir tedarikçi süreci açmadan başka bir araca yönlendirebilirsiniz. Ne kazandırmaz: Anthropic'in sayfası ürün fiyatını, hangi oranın taahhütten düşülebildiğini ve iş ortağıyla hangi sözleşmeyi imzalayacağınızı yazmıyor. Bunlar teklif aşamasında netleşir.

Türkiye açısından iki not:

- Kişisel ya da self-serve Team hesabıyla çalışan bir kurumun genellikle böyle bir taahhüdü yoktur; bu yol fiilen satış ekibiyle anlaşmış Enterprise müşterileri içindir.
- Anthropic'in Türkiye'de ofisi veya resmi temsilcisi yok, faturalama ABD doları ile. Kamu kurumları ve yurt dışından doğrudan alım yapamayan kurumlar için bu kanal ayrıca değerlendirilmeli: [Türkiye'de Claude](/wiki/temeller/turkiyede-claude/).

## Türk kurumu bir çözümü nasıl değerlendirir?

Marketplace'te listelenmek bir çözümün sizin için uygun olduğu anlamına gelmez. Aşağıdaki akış, bir ihtiyacı satın almaya kadar götürmenin sade bir yolu.

![Claude Marketplace çözümü değerlendirme akışı: ihtiyacı tanımla, ürün ve istenen izinleri incele, veri akışını ve KVKK durumunu çıkar, BT ve hukuk onayı al, dar kapsamlı pilotla başla](/images/kurumsal/marketplace/degerlendirme-akisi.webp)

1. **İhtiyaç:** Hangi iş, hangi ekip, başarıyı neyle ölçeceksiniz? "Hukuk ekibi sözleşme taslaklarını daha hızlı incelesin" gibi tek cümleyle yazın.
2. **Ürün ve izinler:** Çözüm neye erişmek istiyor? Okuma mı, yazma mı? Hangi sistemler? Connector ve eklentilerde "Anthropic verified" işaretine bakın, ama bunun sizin güvenlik değerlendirmenizin yerine geçmediğini unutmayın.
3. **Veri akışı ve KVKK:** Veri yalnız Claude'a mı gidiyor, yoksa iş ortağının kendi sunucularına da mı? İkinci durumda karşınızda Anthropic'ten ayrı bir veri işleyen vardır.
4. **BT ve hukuk onayı:** Sözleşme, veri işleme sözleşmesi, saklama süresi, alt işleyenler ve çıkış planı.
5. **Pilot:** Tek ekip, sınırlı veri, belirli süre. Sonra genişletin.

## Veri akışı ve KVKK

Claude Team ve Enterprise'ta girdi ve çıktılar varsayılan olarak model eğitiminde kullanılmaz ve Anthropic'in veri işleme eki (DPA) ticari şartlara dahildir. Bu güvence **Anthropic** içindir. Bir iş ortağının ürününü kullandığınızda veya bir connector üçüncü taraf bir hizmete veri taşıdığında, o firmanın kendi şartları devreye girer.

Pratikte sorulacaklar:

- İş ortağı kişisel veriyi nerede işliyor ve saklıyor? Türkiye dışına aktarım varsa KVKK kapsamında aktarım dayanağınız ne?
- İş ortağıyla ayrı bir veri işleme sözleşmesi gerekiyor mu? Taahhütten ödeme bu ihtiyacı ortadan kaldırmaz.
- Aydınlatma metninizde bu yeni alıcı grubu yer alıyor mu?
- Erişim yetkileri kullanıcı bazında mı, yoksa tüm kurum adına tek bir hesapla mı?

Bunlar genel çerçeve; kurumunuza özgü yükümlülükleri hukuk biriminizle teyit edin. Ayrıntı: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/), [MCP güvenliği](/wiki/mcp/guvenlik/).

## BT tarafında neye dikkat?

- **Yönetici kontrolü:** Team ve Enterprise'ta pek çok connector'ı önce organizasyon yöneticisi etkinleştirir. Enterprise'ta skill ve eklentiler için güvenlik taraması beta olarak sunuluyor. Kimin neyi kurabileceğini baştan belirleyin: [Takım ve admin](/wiki/temeller/takim-ve-admin/).
- **Yerli sistemler:** Paraşüt, Logo ve Mikro gibi Türkiye'de yaygın muhasebe ve ERP yazılımlarının resmi Claude connector'ı dizinde bulunmuyor. Bu sistemler için özel connector ya da yazılımın kendi API'si gerekir.
- **Hizmet ortağı:** Kaynak sayfada Türkiye'ye yerleşik bir Claude hizmet ortağı göremedik. Global ortakların Türkiye'de ofisi olabilir; Claude Partner Network kapsamında çalışıp çalışmadıklarını ayrıca sorun.

Kurumunuzda bir çözümü seçtikten sonra ekiplerin onu doğru kullanması ayrı bir iştir. Zamana'nın [Kurumsal programı](/programlar/kurumsal/) bu kısma odaklanır; satın alma ve lisans Anthropic veya iş ortağıyla yapılır.
