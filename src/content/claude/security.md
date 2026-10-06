---
title: "Claude Security: kod tabanınızda güvenlik açığı taraması"
seoTitle: "Claude Security Nedir? Kod Güvenlik Taraması"
description: "Claude Security, kod tabanınızı tarar, bulguları doğrular ve inceleyip onaylayacağınız yama önerileri sunar. Enterprise için herkese açık beta."
eyebrow: "Uzmanlaşmış"
lead: "Claude Security, yazılım depolarınızı bir güvenlik araştırmacısı gibi okuyup açıkları bulur, bulguları kendi içinde sınar ve düzeltme önerisi sunar. Şu an Claude Enterprise için herkese açık beta."
heroImage: "/images/claude/security/hero.webp"
heroAnimation: "security"
heroAlt: "Claude Security için Türkçe örnek animasyon: bir kod deposu taranıyor, bulgular Kritik, Yüksek ve Orta olarak listeleniyor, bir SQL enjeksiyonu bulgusu açılıp önerilen düzeltme kod farkı olarak gösteriliyor. Depo ve kod kurgusaldır."
availability: "Claude Enterprise'da herkese açık beta, yönetici etkinleştirir. Claude Code eklentisi tüm Claude Code kullanıcılarına beta. Fiyat yayımlanmıyor"
sourceUrl: "https://claude.com/product/claude-security"
sourceTitle: "Claude Security | Claude by Anthropic"
related:
  - { label: "Takım ve admin (wiki)", href: "/wiki/temeller/takim-ve-admin/" }
  - { label: "MCP güvenliği (wiki)", href: "/wiki/mcp/guvenlik/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
  - { label: "Türkiye'de Claude (wiki)", href: "/wiki/temeller/turkiyede-claude/" }
order: 40
lastUpdated: "2026-10-06"
---

## Nedir?

Claude Security, yazılım güvenliği ekipleri için hazırlanmış özel bir üründür. Genel amaçlı Claude'dan farkı, bir GitHub deposuna bağlanıp kodu baştan sona taramak üzere kurgulanmış olması. Anthropic, taramayı en siber güvenlik odaklı modeli olan Claude Mythos 5.1 ile yaptığını söylüyor. Bulgular güven derecesi ve önerilen yamayla birlikte geri gelir.

Geleneksel tarama araçları çoğunlukla bilinen kalıpları kurallarla arar; bu yöntem bilinen açıkları yakalar ama çok sayıda yanlış alarm üretir ve birden çok dosyaya yayılan karmaşık açıkları kaçırabilir. Anthropic'in anlatımına göre Claude Security kodu bir araştırmacı gibi okur: Git geçmişine bakar, veri akışlarını dosyalar arasında izler, iş mantığını anlamaya çalışır. Odağı yüksek önem derecesindeki açıklardır: bellek bozulması, enjeksiyon hataları, kimlik doğrulamayı atlatma ve karmaşık mantık hataları.

Üründe üç aşama öne çıkıyor:

- **Paralel tarama:** Bağlam anlayan, çok bileşenli açık kalıplarını arar.
- **Düşmanca doğrulama:** Her bulgu, Claude'un kendi sonucunu çürütmeye çalıştığı bir kontrolden geçer. Amaç, analistin zamanını alan yanlış alarmları azaltmak.
- **Yama önerisi:** Her bulguya kodunuzun yapısına ve stiline uygun bir düzeltme eşlik eder. Yamayı siz inceler ve onaylarsınız, hiçbir yama kendiliğinden uygulanmaz.

## Türk şirketinde ne işe yarar?

Bunlar ürün özelliklerinden türetilmiş senaryolardır, Türkiye'deki müşteri örneği değildir.

- **Fintech, ödeme ve e-ticaret şirketleri:** Kimlik doğrulama, ödeme akışı ve kullanıcı verisi işleyen kodda enjeksiyon ve yetki atlatma açıklarını sürüm öncesi taramak.
- **Yazılım evleri:** Müşteriye teslim edilen projelerin kod incelemesine bir ek tarama katmanı eklemek.
- **Büyük kurumsal BT ekipleri:** Yıllardır büyüyen iç sistemlerde birikmiş riskleri önceliklendirmek, düzenli taramaları zamanlayıp bulguları ticket sistemine akıtmak.
- **KVKK ve veri güvenliği yükümlülüğü:** Kişisel veri işleyen uygulamalarda teknik tedbirlerin bir parçası olarak kullanılabilir. Ancak bir tarama aracı tek başına uyum sağlamaz, hukuki değerlendirmenin yerini tutmaz.

Mevcut güvenlik araçlarınızla çalışacak biçimde tasarlanmıştır: bulguları webhook ile Slack, Jira veya herhangi bir ticket sistemine gönderebilir, CSV veya Markdown olarak dışa aktarabilirsiniz. Yalnızca bir dizini taratabilir ve düzenli taramalar zamanlayabilirsiniz. Belgelenmiş reddedilen bulgular sonraki taramalarda taşınır.

## Nasıl başlarsınız?

1. Claude Enterprise planınız olmalı. Enterprise sözleşmesi yoksa Anthropic satış ekibiyle konuşmanız gerekir, ürün sayfasındaki yönlendirme "Contact sales" biçiminde.
2. Organizasyonunuzun yöneticisi Claude Security'yi yönetim konsolundan etkinleştirir.
3. Bir GitHub deposu bağlarsınız. Tarama Claude.ai içindeki Claude Security uygulamasında Mythos 5.1 ile çalışır.
4. Bulguları güven derecesi, açıklama ve önerilen yamayla birlikte incelersiniz. Yamayı web üzerindeki Claude Code'da açıp hesabınızdaki modellerle uygulayabilirsiniz.
5. Önce önemsiz bir depoyla deneyin, çıkan sonuçları güvenlik ekibinizin mevcut bulgularıyla karşılaştırın, sonra kapsamı büyütün.

Claude Code kullanıcıları için ayrı bir seçenek var: Claude Security eklentisi beta olarak Claude Code içinde tarama, doğrulama ve yama yapmanızı sağlıyor ve kod ortamınızdan çıkmıyor. Dikkat: Mythos 5.1 ile taramalar yalnızca Claude.ai'deki Claude Security uygulamasında geçerli; eklenti ise Claude Code hesabınızdaki modelleri kullanır.

## Hangi planda, nelere dikkat?

- **Durum:** Herkese açık beta. Kaynağa göre Enterprise müşterileri doğrudan model erişimi olmadan Mythos kalitesinde bulgu alıyor. Mythos 5.1'in kendisi genel kullanıma açık bir model değildir, yalnızca davetle seçili katılımcılara verilir.
- **Plan:** Kaynak sayfa uygulamanın Enterprise için sunulduğunu söylüyor. Pro, Max veya Team'de kullanılabildiğine dair bir ifade yok, bu yüzden varsaymayın. Fiyat yayımlanmıyor, satış ekibiyle konuşulur.
- **İnsan incelemesi şart:** Claude hata yapabilir. Önerilen yamaları, özellikle kritik sistemlerde, uygulamadan önce mutlaka inceleyin. Bulgu sayısı, doğruluk oranı ve kapsam gibi ölçümler için kaynakta rakam verilmiyor; kendi deneme sonuçlarınıza güvenin.
- **Veri ve KVKK:** Tarama için kaynak kodunuz Anthropic'e gönderilir. Enterprise'ta girdi ve çıktılar varsayılan olarak model eğitiminde kullanılmaz ve veri işleme eki (DPA) ticari şartlara dahildir. Yine de kaynak kodun yurt dışında işlenmesi, ticari sır ve müşteri sözleşmeleri açısından şirketinizde onaylanmalıdır. Ayrıntı: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).
- **Türkiye notları:** Ödeme ve sözleşme Anthropic ile doğrudan, Türkiye'de ofis veya resmi temsilci yok. Bkz. [Türkiye'de Claude](/wiki/temeller/turkiyede-claude/). Zamana'nın programları iş kullanıcısına odaklıdır, güvenlik taraması eğitimi vermez.
