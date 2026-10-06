---
title: "@Claude: Slack'te Claude'u ekibinize etiketleyin"
seoTitle: "@Claude (Claude Tag): Slack'te Claude Kullanımı"
description: "Claude Tag ile Slack kanalında @Claude yazarak ekip arkadaşı gibi görev verirsiniz. Nasıl çalışır, hangi planlarda, güvenlik ve KVKK notları."
eyebrow: "Ürün"
lead: "@Claude, Slack konuşmasına etiketlediğiniz bir Claude'dur. Konuşmanın bağlamını okur, işi yapar ve sonucu herkesin göreceği şekilde aynı kanala yazar. Team ve Enterprise planlarında beta."
heroImage: "/images/claude/tag/hero.webp"
heroAnimation: "tag"
heroAlt: "Satış ekibi kanalında bir çalışan @Claude'u etiketliyor; Claude iş parçacığında konuşmayı okuyup çalışıyor ve alıcı görüşmesi için hazırlık özetini aynı iş parçacığına yazıyor."
availability: "Team ve Enterprise planlarında beta, Slack üzerinde; Free, Pro ve Max'te yok. Microsoft Teams sürümü beklemede"
sourceUrl: "https://claude.com/product/tag"
sourceTitle: "Claude in Slack: Tag @Claude in any thread"
related:
  - { label: "Slack ve Teams entegrasyonu (wiki)", href: "/wiki/araclar/slack-teams-entegrasyon/" }
  - { label: "Connectors (wiki)", href: "/wiki/araclar/connectors/" }
  - { label: "Takım ve admin (wiki)", href: "/wiki/temeller/takim-ve-admin/" }
  - { label: "MCP güvenliği (wiki)", href: "/wiki/mcp/guvenlik/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
order: 30
lastUpdated: "2026-10-06"
---

## Nedir?

Çoğu ekip işin büyük bölümünü Slack'te konuşur: karar verilir, rakam sorulur, hata bildirilir. Claude Tag, Claude'u bu konuşmanın içine alır. Bir kanalda ya da herhangi bir iş parçacığında (thread) `@Claude` yazarsınız, Claude o konuşmanın tamamını okur ve istediğiniz işi yapar. Cevabı özel bir pencerede değil, aynı kanalda yazar; böylece ekibin tamamı sonucu görür ve üzerine soru sorabilir.

Aklınızda tutmanız gereken fark: bu, kişisel sohbet penceresindeki Claude'un Slack'e taşınmış hali değil, ekibin ortak bir kaynağı. Claude'un kendi hesabı ve kimliği vardır (Anthropic bunu "agent identity" olarak adlandırıyor). Sistemlere sizin hesabınızla değil, yöneticinin tanımladığı yetkilerle girer ve her kimlik bilgisi kullanımı kayda geçer. "Claude ne yaptı, kim istedi?" sorusunun cevabı hep bulunur.

Kaynak sayfaya göre @Claude şunları yapabiliyor:

- Uzun ve dağınık bir konuşmadan kararları, açık soruları ve sizi bekleyen işleri çıkarır.
- Verilerinize sorgu atıp sonucu metrik, kıyaslama veya grafik olarak kanala yazar.
- Bir hata bildirimini konuşmanın bağlamından taslak bir kod değişikliğine dönüştürür.
- Toplantı öncesi CRM notlarını, son yazışmaları ve görüşme geçmişini bir araya getirir.
- Tekrarlayan işleri zamanlar: "Her pazartesi 9'da bu ekip için bir özet yaz" gibi.
- Kendiliğinden devreye girebilir: sessizleşen bir konuyu hatırlatır, yayın tamamlandığında haber verir, sizin kararınız gereken noktayı işaretler.
- Konuşmalar ve günler arasında hafıza taşır; pazartesi toplantısında konuşulanlar perşembe günü de bilinir.

![Slack'te Claude'a verilen "her pazartesi satış hattı özeti paylaş" görevi ve pazartesi gelen Türkçe özet: 142 milyon TL açık fırsat, trend grafiği ve üç madde](/images/claude/tag/zamanlama.webp)

## Türk şirketinde ne işe yarar?

Aşağıdakiler özelliklerden türetilmiş örneklerdir. Kaynaktaki müşteri hikâyeleri yabancı şirketlere aittir.

- **Satış ve ihracat ekibi:** Alıcıyla toplantıdan önce kanala "@Claude bugün 14.00'teki görüşme için bilmem gerekenler" yazarsınız. CRM'inizi connector ile bağladıysanız notları ve son yazışmaları toparlar.
- **Finans ve muhasebe:** Haftalık tahsilat ve ödeme özetini her pazartesi kanala yazdırmak. Rakamların kaynağı sizin bağladığınız sistemdir, çıktıyı yine de kontrol edin.
- **Müşteri destek ekibi:** Kanalı izletip gelen talepleri sınıflandırmak, acil olanı ilgili kişiye etiketletmek.
- **Yazılım ve BT:** Üretimde bir hata olduğunda bildirimi okuyup ilk teşhisi ve taslak bir düzeltmeyi konuşmanın içinde çıkarmak.
- **Yönetim:** Uzun bir kanal tartışmasında "ne karar verildi, neyi hâlâ bekliyoruz?" sorusunun yanıtı.

## Nasıl başlarsınız?

1. Planınızı kontrol edin: Claude Tag Team veya Enterprise gerektirir. Kişisel Pro veya Max hesabıyla kullanılmaz.
2. Slack çalışma alanınızın yöneticisi ve Claude organizasyonunuzun yöneticisi birlikte kurulumu yapar (Slack'e ekleme düğmesi kaynak sayfada, kurulum belgesi Anthropic'in dokümantasyonunda).
3. Yönetici Claude'un hangi araçlara erişeceğini belirler. Hassas bağlantıları tek bir özel kanalla sınırlayabilir, daha geniş araçları belirli kanallara açabilir.
4. Küçük başlayın: tek bir kanalda, düşük riskli bir işle (haftalık özet, karar listesi).
5. Kanal ve ekip için talimat ve skill tanımlayın; Claude her kanalda kendisine tanımlanan yöntemle çalışsın.

Ekibinizin Slack ve Claude kurulumunu iş akışına yerleştirirken eğitim desteği arıyorsanız Zamana'nın [programlarına](/programlar/) bakabilirsiniz.

## Hangi planda, nelere dikkat?

- **Plan ve durum:** Team ve Enterprise planlarında, beta olarak. Haziran 2026'da çıktı. Free, Pro ve Max'te yok.
- **Microsoft Teams:** Kaynak sayfada Teams sürümü "yakında" olarak duyurulmuş ve bekleme listesi açılmış. Şu an Teams içinde resmi bir @Claude uygulaması yok.
- **Kullanım:** Kaynak sayfa Slack'teki kullanımın nasıl hesaplandığına dair rakam vermiyor. Kullanım bazlı Enterprise planında tüm kullanım API fiyatıyla faturalanır; ayrıntıyı satış ekibinden veya yöneticinizden teyit edin.
- **Veri ve KVKK:** Kanalda yazılanlar, bağlı araçlardan çekilen veriler ve Claude'un cevapları model işlemesi için Anthropic'e gider. Team ve Enterprise'ta girdi ve çıktılar varsayılan olarak eğitimde kullanılmaz ve DPA ticari şartlara dahildir. Kişisel veri içeren kanallarda @Claude'u açmadan önce aydınlatma ve yurt dışı aktarım konusunu şirket içinde değerlendirin: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).
- **Herkes görür:** Claude'un cevabı kanalda olduğu için, kanalın üyelerinin görmemesi gereken bir veriyi o kanalda sormayın. Erişim sınırlarını Claude'un araç erişimiyle birlikte düşünün.
- **Türkiye notları:** Ödeme ABD doları ile. Anthropic'in Türkiye'de ofisi veya temsilcisi yok. Ayrıntı: [Türkiye'de Claude](/wiki/temeller/turkiyede-claude/).
- **Eski Claude for Slack:** Önceki Slack entegrasyonunun yeni deneyimle ilişkisi Anthropic'in sayfasında ayrıca anlatılıyor. Mevcut kurulumunuz varsa oradan kontrol edin.
