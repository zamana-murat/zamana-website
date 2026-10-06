---
title: "Kurumlar için Claude Code"
seoTitle: "Kurumlar İçin Claude Code: Yönetim, Güvenlik, Fiyat"
description: "Claude Code'u şirket genelinde açmak: merkezi politika, SSO ve SCIM, katkı metrikleri, kendi bulut hesabınızla kullanım, KVKK ve kaynak kod notları."
eyebrow: "Kurumsal"
lead: "Claude Code, kod tabanınızı okuyup değişiklik yapan, test koşan ve değişiklik isteği açan bir kodlama ajanı. Kurumsal sürümde aynı araç; farkı, BT'nin onu merkezden yönetebilmesi, ölçebilmesi ve sınırlayabilmesi."
heroImage: "/images/kurumsal/claude-code/hero.webp"
heroAnimation: "claude-code"
heroAlt: "Kurgusal Ege Tekstil'de geliştirici terminalde Claude Code'a ödeme kütüphanesini yeni sürüme taşımasını söylüyor; kuruluş politikası gizli anahtar dosyasının okunmasını engelliyor, Claude düzenleme öncesi izin istiyor, testler geçiyor ve değişiklik isteği açılıyor. Yanda yönetim paneli politikaları ve haftalık katkı sayısını gösteriyor."
availability: "Tüm ücretli planlarda; kurumsal yönetim özellikleri Team ve Enterprise'da (SSO ve SCIM dahil); rol bazlı izin, denetim kaydı, özel veri saklama ve IP izin listesi yalnız Enterprise'da. Amazon Bedrock, Google Vertex AI ve Microsoft Foundry üzerinden de kullanılır"
sourceUrl: "https://claude.com/product/claude-code/enterprise"
sourceTitle: "Claude Code for Enterprise"
related:
  - { label: "Claude Code ürün tanıtımı", href: "/claude/claude-code/" }
  - { label: "Claude Enterprise genel bakış", href: "/kurumsal/" }
  - { label: "Claude Platform", href: "/kurumsal/platform/" }
  - { label: "Takım için CLAUDE.md (wiki)", href: "/wiki/claude-md/takim-claude-md/" }
  - { label: "Alt ajanlar (wiki)", href: "/wiki/yetenekler/agents-subagents/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
order: 10
lastUpdated: "2026-10-06"
---

## Nedir?

Claude Code bir otomatik tamamlama aracı değil, işi baştan sona yürüten bir kodlama ajanı. Doğal dille bir özellik ya da düzeltme tarif edersiniz; Claude Code kod tabanını tarar, ilgili dosyaları bulur, değişikliği yapar, testleri yazar ve çalıştırır, sonunda bir değişiklik isteği (pull request) açar. Tek dosyaya değil bütün depoya bakabildiği için eski sistemlerin taşınması, dosyalar arası hata ayıklama ve kod inceleme gibi işlerde güçlüdür.

Terminalde, masaüstü uygulamasında, VS Code ve JetBrains gibi IDE'lerde, Slack'te ve web'de çalışır. Ürünün kendisini [Claude Code tanıtım sayfasında](/claude/claude-code/) anlattık. Bu sayfa onu bir şirkette, onlarca ya da yüzlerce geliştiriciye açmanın tarafıyla ilgili: kim kullanıyor, neye erişebiliyor, ne üretiyor, ne kadara mal oluyor.

## Kurumsal sürümde ne değişiyor?

Anthropic'in sayfası dört yönetim özelliğini öne çıkarıyor:

- **Katkı metrikleri:** Kullanımın ve verimin bir panoda görünmesi. Claude Code yardımıyla açılan değişiklik istekleri ve gönderilen kod gibi ölçüler.
- **Sunucu tarafından yönetilen ayarlar:** Araç izinleri, dosya erişim kısıtları ve MCP sunucu ayarları kuruluş genelinde merkezden tanımlanır. Her geliştiricinin bilgisayarına ayrı ayrı cihaz yönetimi (MDM) yazılımıyla dağıtmak gerekmez.
- **OpenTelemetry ile izleme:** Oturum etkinliği, token kullanımı ve maliyet, şirketin mevcut gözlem araçlarına gerçek zamanlı aktarılır.
- **Erişim ve izinler:** SSO ve SCIM ile koltuk yönetimi ve otomatik kullanıcı açma ve kapatma Team'de de var. Enterprise'da buna rol bazlı izinler, özel roller ve denetim izleri eklenir.

![Claude Code yönetim panelinin Türkçe çizimi: solda araç izinleri, yasaklı dosyalar ve onaylı MCP sunucularından oluşan merkezi politika, sağda haftalık değişiklik isteği sayısı, etkin geliştirici sayısı ve ekip bazında token kullanımı](/images/kurumsal/claude-code/yonetim.webp)

Kuruluşun kodlama standartları için ayrıca CLAUDE.md dosyaları kullanılır. Sistem dizinine konan bir CLAUDE.md şirket genelindeki kuralları, depo içindeki CLAUDE.md o projenin mimarisini ve katkı kurallarını taşır; Claude Code bunlara her oturumda kendiliğinden bakar. Ekip için böyle bir dosyanın nasıl kurgulanacağını [Takım için CLAUDE.md](/wiki/claude-md/takim-claude-md/) sayfasında anlattık.

## Güvenlik nasıl kurgulanmış?

- **Yerelde çalışır:** Anthropic'e göre Claude Code geliştiricinin terminalinde çalışır ve doğrudan model API'siyle konuşur; kodunuz uzak bir sunucuda dizinlenmez. Dosya değiştirmeden ya da komut çalıştırmadan önce izin ister.
- **Kendi bulut hesabınızla:** Claude Code, Amazon Bedrock, Google Vertex AI veya Microsoft Foundry anahtarlarıyla, şirketin mevcut sanal ağı (VPC), kimlik yönetimi ve kayıt altyapısı içinde çalıştırılabilir.
- **Kimlik:** Okta, Azure AD ya da herhangi bir SAML 2.0 sağlayıcısıyla SSO.
- **Şifreleme:** Aktarımda TLS 1.3, depolamada AES-256; müşteri yönetimli anahtar seçeneği var.
- **Uyum:** Anthropic'in sayfası SOC 2 Type II uyumunu belirtiyor.
- **Eğitimde kullanım:** Kurumsal planlarda kodunuz ve konuşmalarınız varsayılan olarak model eğitiminde kullanılmaz.
- **Denetim:** Enterprise'da Compliance API, Claude Code oturumlarının (komut satırı ve masaüstü) içeriğini de kapsar. Claude Code'un web sürümü ve Bedrock, Vertex AI ya da Foundry üzerinden yürüyen oturumlar bu kapsamın dışındadır.

## Kaynak sayfadaki örnekler

Rakamlar Anthropic'in sayfasından, ilgili şirketlere aittir: Rakuten yeni özelliklerin pazara çıkış süresinin 24 günden 5 güne indiğini, Zapier çalışanlarının yüzde 89'unun yapay zekayı benimsediğini ve 800'den fazla ajan devreye aldığını aktarıyor. Spotify mühendislerinin büyük çaplı kod geçişlerini çok daha hızlı yürüttüğünü söylüyor. Bu sonuçların arkasında güçlü bir test altyapısı ve iyi tanımlanmış kod inceleme süreçleri olduğunu unutmayın.

## Türkiye'de kullanırken

- **Kaynak kod yurt dışında işlenir.** Claude Code'un okuduğu dosyalar model işlemesi için Anthropic'e (ya da seçtiğiniz bulut sağlayıcıya) gider. Kodda müşteri verisi, gerçek kişisel veri içeren test dosyaları ya da gizli anahtar bırakmayın; bunları merkezi politikayla Claude Code'un erişiminden çıkarın.
- **Bulut sağlayıcı yolu:** Bedrock, Vertex AI veya Foundry üzerinden kullanımda veri işleme yeri ve sözleşme şartları o sağlayıcıyla yaptığınız anlaşmaya bağlıdır. Şirketiniz zaten bu bulutlardan biriyle çalışıyorsa BT onay süreci bu yoldan daha kısa olabilir; ayrıntıyı sağlayıcınızla teyit edin.
- **KVKK ve sektör kuralları:** Kişisel veri işleyen sistemlerin kodunda çalışırken 6698 sayılı KVKK'nın yurt dışına aktarım hükümleri gündeme gelir. Bankacılık ve sağlık gibi düzenlenmiş sektörlerde dış hizmet alımına dair kendi mevzuatınız da ayrıca değerlendirilmelidir. Son kararı hukuk ve bilgi güvenliği birimlerinizle verin.
- **Dil:** Claude Code'a Türkçe talimat verebilirsiniz. Kod, değişken adları ve commit mesajları için şirketinizin mevcut kuralı neyse CLAUDE.md'ye yazın; Claude Code ona uyar.

## Hangi planda, ne kadar?

- **Tüm ücretli planlarda:** Claude Code Pro, Max, Team ve Enterprise'a dahildir; Free planda yoktur.
- **Team:** Anthropic'in sayfası ekipler için Claude Code'u kişi başı aylık 100 dolar (en az 2 kişi) fiyatıyla gösteriyor; bu, Team Premium koltuğun yıllık faturalı fiyatıdır, aylık faturada 125 dolardır. Koltuk kotası aşılırsa ek kullanım standart API fiyatıyla açılabilir. Self-serve koltuk yönetimi vardır.
- **Enterprise:** Koltuk başı aylık 20 dolar, yıllık faturalı, en az 20 koltuk; Claude Code dahil tüm kullanım ayrıca API fiyatıyla faturalanır. Team'deki her şeye ek olarak rol bazlı izinler, denetim kaydı, özel veri saklama ve IP izin listesi gelir. Kurulum rehberliği ve öncelikli destek de Enterprise kapsamında.
- **Bulut hesabıyla:** Bedrock, Vertex AI veya Foundry üzerinden kullanımda faturayı ilgili bulut sağlayıcı keser.

Fiyatlar dolar cinsindendir ve vergi hariçtir. Satın alma doğrudan Anthropic'ten (self-serve ya da [claude.com/contact-sales](https://claude.com/contact-sales)) yapılır.

## Zamana'nın notu

Zamana programları iş kullanıcılarına yöneliktir ve Claude Code'u öğretmez. Claude Code'un kurumda yaygınlaştırılması bir yazılım ekibi işidir: merkezi politikayı BT tanımlar, CLAUDE.md'yi kıdemli geliştiriciler yazar, ölçümü mühendislik yöneticileri yapar. Bu sayfayı, aynı kurumda yazılım dışındaki ekipler Claude Enterprise'a geçerken resmin tamamını görebilmeniz için hazırladık.
