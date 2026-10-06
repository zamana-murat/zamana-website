---
title: "Siber güvenlik ekipleri için Claude"
seoTitle: "Siber Güvenlikte Claude: SOC, Olay Müdahalesi ve Kod Güvenliği"
description: "Güvenlik ekipleri Claude ile alarm inceler, kayıtları ilişkilendirir, açıkları önceliklendirir ve yama hazırlar. Türkiye'deki SOC ekipleri için KVKK notları."
eyebrow: "Departman"
lead: "Saldırganlar yapay zekâyı kullanmaya başladı; savunma tarafının da aynı hızda çalışması gerekiyor. Claude, güvenlik ekibinin alarm inceleme, kayıt analizi, açık doğrulama ve yama işlerinde yorulmayan bir analist gibi çalışır. Müdahale kararı analistte kalır."
heroImage: "/images/kurumsal/siber-guvenlik/hero.webp"
heroAnimation: "siber-guvenlik"
heroAlt: "Kurgusal bir lojistik şirketinin güvenlik operasyon merkezinde gece gelen bir VPN alarmı: Claude bağlam ekliyor, kayıtları ilişkilendirip etkinliği ATT&CK tekniklerine eşliyor, olayı kritik olarak işaretliyor ve analist onayını bekleyen müdahale adımları öneriyor."
availability: "Analiz ve raporlama: tüm ücretli planlar, kurum verisi için Team veya Enterprise. Claude Security: Enterprise'da beta. Mythos ailesi yalnız Project Glasswing katılımcılarına açık"
sourceUrl: "https://claude.com/solutions/cybersecurity"
sourceTitle: "Claude for Cybersecurity | Claude by Anthropic"
related:
  - { label: "Claude Security", href: "/claude/security/" }
  - { label: "Claude Code", href: "/claude/claude-code/" }
  - { label: "Bilgi teknolojileri departmanı (wiki)", href: "/wiki/departmanlar/bilgi-teknolojileri/" }
  - { label: "MCP güvenliği (wiki)", href: "/wiki/mcp/guvenlik/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
  - { label: "Kodlama", href: "/kurumsal/kodlama/" }
order: 70
lastUpdated: "2026-10-06"
---

## Nedir?

Anthropic'in siber güvenlik sayfası sert bir tespitle açılıyor: en gelişmiş yapay zekâ modelleri yazılım açıklarını bulma ve istismar etmede, en yetenekli uzmanlar dışında herkesi geride bırakmış durumda ve bu yetenek birkaç ay içinde saldırganlar dahil herkesin eline geçecek. Aynı yetenek savunmaya da yarar; sonucu kimin, nasıl kullandığı belirler.

Sayfadaki örnek bunu iyi gösteriyor. Anthropic'in aktardığına göre Mozilla, Mart 2026'da Claude Opus 4.6'nın bulduğu açıkları kapattı; Nisan'da Claude Mythos Preview ile 271 düzeltme daha yayımladı, bu da aylık ortalamalarının 20 katından fazla. Sayfadaki bir başka müşteri olan Cogent, güvenlik tehditlerini Claude ile yüzde 97 daha hızlı çözdüğünü söylüyor. Bu rakamlar kaynağa aittir.

Bu sayfa, güvenlik **departmanının** Claude'u nasıl kullandığını anlatır. Kod tabanınızı tarayan ayrı ürün için: [Claude Security](/claude/security/).

## Güvenlik ekibi Claude'a neleri devreder?

Kaynak sayfa altı iş akışı sayıyor. Aşağıda her birini bir Türk güvenlik ekibinin gündelik işine çevirdik; senaryolar kurgusaldır.

- **Tehdit bağlamı:** Ham bir göstergeyi (IP adresi, alan adı, dosya özeti) altyapı ilişkileri ve MITRE ATT&CK teknikleriyle zenginleştirmek. Gece gelen bir alarmda "bu adres daha önce görüldü mü, kullanıcının olağan davranışı ne, hangi tekniğe benziyor" sorularının ilk cevabı.
- **Alarm önceliklendirme ve doğrulama:** Aynı kök nedene dayanan alarmları birleştirmek, istismar edilebilirliği sınamak, etki ve ön koşula göre sıralamak. SOC'taki yorgunluğun büyük kısmı tekrar eden ve yanlış pozitif alarmlardan gelir.
- **Açık tespiti:** Kaynak kodu bir araştırmacı gibi okuyup açığın gerçekten erişilebilir olup olmadığını düşünmek; statik analiz araçlarının kaçırdığı mantık hatalarını yakalamak.
- **Yama:** Açığı kök nedenine kadar izlemek, aynı hatayı taşıyan diğer çağrı noktalarını bulmak, küçük bir düzeltme ve regresyon testi yazmak.
- **Geliştirme döngüsünde inceleme:** Claude Code'un kod inceleme özelliğiyle her değişiklik talebinde güvenlik açığı ve mantık hatası kontrolü.
- **Olay raporu:** Analistin notlarından olay zaman çizelgesi, kök neden özeti ve yönetim için tek sayfalık rapor taslağı.

![Claude ile sürekli güvenlik döngüsü: tehdit modeli, keşif, doğrulama, önceliklendirme ve yama aşamaları bir halka üzerinde; bağlam aşamalar arasında taşınıyor, yamanın canlıya alınması ise insan onayından geçiyor](/images/kurumsal/siber-guvenlik/dongu.webp)

## Çift kullanım ve sınırlar

Saldırı ve savunma bilgisi büyük ölçüde aynı bilgidir. Anthropic bu yüzden en güçlü siber güvenlik yeteneklerine sahip modellerini (Mythos ailesi) doğrudan model olarak genel kullanıma açmıyor; erişim Project Glasswing adlı programın katılımcılarıyla sınırlı ve kaynak sayfaya göre bir güvenilir erişim programıyla kademeli olarak genişletilecek. Kaynak sayfaya göre programda 50'den fazla kuruluş var, Anthropic katılımcılara 100 milyon dolarlık kullanım kredisi ve açık kaynak güvenlik vakıflarına 4 milyon dolar doğrudan bağış ayırdı.

Pratikte bunun anlamı şu: genel Claude modelleri sızma testi, istismar kodu ya da kötü amaçlı yazılım analizi gibi isteklerde temkinli davranabilir ve bazı istekleri reddedebilir. Kaynak sayfa, doğrulanmış güvenlik uzmanlarının çift kullanımlı çalışmalar için güvenlik ayarlarının uyarlanmasını talep edebileceğini söylüyor; bunun yolu Anthropic ile görüşmektir.

## Türkiye'de uyarlama notları

- **SOC ve olay müdahalesi:** Kurumunuzun olay bildirim yükümlülükleri (kurumsal veya sektörel SOME yapısı, USOM ile koordinasyon, sektör düzenleyicisine bildirim) yapay zekâ kullanımıyla değişmez. Claude bu süreçleri hızlandıran bir yardımcıdır, bildirim ve karar sorumluluğunu üstlenmez.
- **Kişisel veri ihlali:** Bir olay kişisel verileri etkiliyorsa KVKK kapsamındaki bildirim süreci işler; Kişisel Verileri Koruma Kurulu kararına göre Kurul'a bildirim en geç 72 saat içinde yapılmalıdır. Claude ile hazırlanan olay notları bu süreci hızlandırabilir, ama bildirim metni hukuk biriminizden geçmelidir.
- **Kamu kurumları:** 2019/12 sayılı Bilgi ve İletişim Güvenliği Tedbirleri Genelgesi, kamu verisinin yurt içindeki ve kurum kontrolündeki sistemler dışında saklanmasını kısıtlar. Kamu güvenlik ekipleri, kayıtları ve kodu yurt dışındaki bir modele göndermeden önce bu çerçeveyi kurumlarıyla değerlendirmelidir.
- **Türkçe kayıtlar ve raporlar:** Claude Türkçe olay notu ve yönetici özeti yazmada güçlüdür; teknik terimlerde ekibinizin kullandığı karşılıkları bir sözlükle vermek tutarlılığı artırır.

## Güvenlik ve KVKK

Güvenlik kayıtları hassastır: kullanıcı adları, IP adresleri, iç ağ yapısı, bazen parola özetleri. Claude'a gönderilen her şey model işlemesi için Anthropic'e (yurt dışına) gider.

- Team veya Enterprise kullanın. Bu planlarda girdi ve çıktılar varsayılan olarak eğitimde kullanılmaz ve veri işleme eki (DPA) ticari şartlara dahildir. Enterprise'da denetim kayıtları, rol bazlı erişim ve Compliance API bulunur.
- Parola, API anahtarı, özel anahtar ve oturum çerezi gibi sırları göndermeden önce maskeleyin. Bunu bir kural olarak yazın, analiste bırakmayın.
- Claude'u güvenlik araçlarınıza connector veya MCP ile bağlarken en az yetki ilkesini uygulayın; yazma ve müdahale yetkisini ayrı ve onaylı tutun. Ayrıntı: [MCP güvenliği](/wiki/mcp/guvenlik/).
- Claude'un önerdiği müdahale adımlarını (hesap kilitleme, kural silme, yama) otomatik uygulatmayın; analist onayı zorunlu olsun.

## Nasıl başlarsınız?

1. **Okuma ağırlıklı bir işle başlayın:** Geçmiş, kapanmış olayların raporlarını Claude'a özetletin ve kendi raporlarınızla karşılaştırın.
2. **Alarm önceliklendirmesini taslak modunda deneyin:** Bir hafta boyunca Claude'un önerdiği önceliği analistin kararıyla yan yana kaydedin.
3. **Kod tarafını ayrı ele alın:** Yazılım ekibiniz varsa Claude Code ile değişiklik talebi incelemesi ve [Claude Security](/claude/security/) ile depo taraması ayrı bir pilot olarak yürütülebilir.
4. **Kuralları yazılı hale getirin:** Hangi veri gönderilebilir, hangi eylem onay ister, kayıtlar nerede saklanır. Şablon: [şirket içi kullanım politikası](/wiki/temeller/sirket-ici-politika/).

## Zamana'nın notu

Güvenlik ekiplerinde Claude'un en hızlı değer ürettiği yer, analistin zamanını yiyen yazma ve okuma işleridir: alarm bağlamı, olay notu, yönetici özeti. Bu işler hem düşük riskli hem ölçülebilir. Kod taraması ve otomatik müdahale ise ayrı bir olgunluk adımıdır. BT ve güvenlik ekipleri için senaryolar [bilgi teknolojileri sayfasında](/wiki/departmanlar/bilgi-teknolojileri/), ekip eğitimi [kurumsal programda](/programlar/kurumsal/).
