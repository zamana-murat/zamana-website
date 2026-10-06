---
title: "Müşteri desteği için Claude"
seoTitle: "Müşteri Desteğinde Claude: Talep Yönetimi ve Yanıt Taslağı"
description: "Destek ekipleri Claude ile talepleri sınıflandırır, bilgi bankasından yanıt taslağı çıkarır, zor vakaları uzmana aktarır. Türkiye için KVKK ve kurulum notları."
eyebrow: "Departman"
lead: "Claude, destek ekibinin gelen kutusunu düzenler: talebi okur, konusunu ve aciliyetini belirler, şirketin bilgi bankasına dayanarak müşterinin dilinde yanıt taslağı yazar. Son sözü temsilci söyler."
heroImage: "/images/kurumsal/musteri-destegi/hero.webp"
heroAnimation: "musteri-destegi"
heroAlt: "Kurgusal bir ev tekstili şirketinin destek kutusu: mesaj, e-posta ve sohbetten gelen dört talep Claude tarafından konu ve önceliğe göre etiketleniyor, değişim talebine bilgi bankası ve sipariş kaydına dayalı yanıt taslağı yazılıyor, temsilci onaylayınca gönderiliyor ve fatura itirazı uzmana iletiliyor."
availability: "Destek ekibinin Claude kullanması: tüm ücretli planlar, ekip kullanımı için Team ve Enterprise önerilir. Müşteriyle doğrudan konuşan destek ajanı: Claude Platform (API)"
sourceUrl: "https://claude.com/solutions/customer-support"
sourceTitle: "Customer support | Claude by Anthropic"
related:
  - { label: "Müşteri hizmetleri departmanı (wiki)", href: "/wiki/departmanlar/musteri-hizmetleri/" }
  - { label: "Claude Türkçe performansı (wiki)", href: "/wiki/temeller/turkce-performansi/" }
  - { label: "@Claude: Slack'te Claude", href: "/claude/tag/" }
  - { label: "Plugin'ler", href: "/claude/plugins/" }
  - { label: "Claude Platform", href: "/kurumsal/platform/" }
  - { label: "Kurumsal program", href: "/programlar/kurumsal/" }
order: 60
lastUpdated: "2026-10-06"
---

## Nedir?

Destek ekiplerinin günü aynı döngüyle geçer: talep gelir, okunur, kategorisi belirlenir, ilgili politika ya da sipariş kaydı aranır, yanıt yazılır, bazen başka bir birime aktarılır. Claude bu döngünün okuma, sınıflandırma, bilgi bulma ve taslak yazma kısmını üstlenir. Karar ve son onay temsilcide kalır.

Anthropic'in müşteri desteği sayfası üç başlık öne çıkarıyor: talebi doğru yere hızlı yönlendirmek, her kanalda ve birden çok dilde kişiselleştirilmiş yanıt vermek, çözüm süresini ve destek maliyetini düşürürken memnuniyeti artırmak. Sayfada destek yazılımı geliştiren şirketlerin görüşleri var; örneğin Intercom'un yapay zeka yöneticisi Claude ile müşteri hizmetini "gerçekten insan kalitesine" taşıdıklarını söylüyor. Kaynak sayfa bu iddialar için rakam vermiyor, biz de vermiyoruz.

Claude'u destekte iki ayrı şekilde kullanabilirsiniz:

- **Temsilcinin yanında:** Ekip, Claude'u sohbet, Cowork ya da Slack üzerinden kullanır. Talebi yapıştırır veya bağlı sistemden okutur, taslağı alır, düzeltir, gönderir. Müşteri Claude ile doğrudan konuşmaz. Bir Türk şirketi için başlangıç noktası çoğunlukla budur.
- **Müşteriyle doğrudan konuşan ajan:** Web sohbeti, mesajlaşma hattı veya e-posta kuyruğuna bağlanan, ilk yanıtı kendisi veren ve gerektiğinde insana devreden bir destek ajanı. Bu, Claude Platform (API) üzerinde yazılım geliştirmeyi ya da Claude kullanan bir destek yazılımı satın almayı gerektirir. Ayrıntı: [Claude Platform](/kurumsal/platform/).

## Destek ekibi Claude'a neleri devreder?

Anthropic'in resmi açık depodaki müşteri desteği plugin'inde bu işler için hazır skill'ler var: talep sınıflandırma (`customer-support:ticket-triage`), yanıt taslağı (`customer-support:draft-response`), bilgi bankası makalesi (`customer-support:kb-article`) ve üst birime aktarma (`customer-support:customer-escalation`). Aşağıdaki örnekler kurgusaldır.

- **Kuyruğu sınıflandırmak:** Sabah birikmiş 120 talebi konu, aciliyet, dil ve duygu tonuna göre etiketlemek. "Kargo gecikmesi" ile "hatalı ürün" ayrı kuyruğa, ödeme itirazı doğrudan finans uzmanına.
- **Yanıt taslağı:** İade politikası, kargo süreleri, garanti şartları gibi şirket belgelerine dayanarak, müşterinin yazdığı dilde ve şirketin üslubunda taslak. Almanca yazan bir yurt dışı müşterisine Almanca, Türkçe yazana Türkçe.
- **Uzmana devir notu:** Karmaşık bir şikâyeti uzmana aktarırken "ne oldu, ne denendi, müşteri ne istiyor" özetini hazırlamak; uzman konuşmayı baştan okumak zorunda kalmaz.
- **Bilgi bankasını büyütmek:** Aynı soru haftada 40 kez geliyorsa, çözülmüş taleplerden bir yardım makalesi taslağı çıkarmak.
- **Haftalık rapor:** Hangi konular arttı, hangi ürün en çok şikâyet aldı, hangi yanıtlar tekrar açıldı. Yöneticiye her pazartesi tek sayfa.

![Kurgusal bir destek kuyruğu için Claude'un sınıflandırma çıktısı: altı talep kanal, özet, konu, öncelik, duygu tonu ve önerilen işlem sütunlarıyla listelenmiş; fatura itirazı acil olarak işaretlenip uzmana yönlendirilmiş](/images/kurumsal/musteri-destegi/siniflandirma.webp)

## Türkiye'de uyarlama notları

- **Kanallar:** Türk şirketlerinde destek çoğunlukla çağrı merkezi, mesajlaşma uygulamaları, e-posta ve şikâyet platformları arasında dağınıktır. Claude'un bir talebe yardım etmesi için metnin ona ulaşması gerekir: ya temsilci yapıştırır, ya da destek yazılımınız connector veya özel entegrasyonla bağlanır. Telefon görüşmeleri için önce yazıya dökülmüş kayıt gerekir.
- **Türkçe:** Claude Türkçe yanıtta güçlüdür, ama marka üslubunu, "siz" ve "sen" tercihini, kullanılmayacak ifadeleri yazılı bir stil rehberiyle vermeniz sonucu belirgin biçimde iyileştirir. Ayrıntı: [Türkçe performansı](/wiki/temeller/turkce-performansi/).
- **Tüketici hukuku:** Cayma hakkı, iade süresi, ayıplı mal ya da tazminat gibi konularda müşteriye yazılan cümle hukuki sonuç doğurabilir; Tüketici Hakem Heyeti veya mahkeme sürecinde delil olarak önünüze gelebilir. Bu tür yanıtlar otomatik gönderilmemeli, onaylı şablonlara dayanmalı ve temsilci onayından geçmelidir.
- **Bilgi bankası güncel olmalı:** Claude, verdiğiniz politikayı esas alır. Kargo firması değiştiyse veya iade süresi güncellendiyse belgeyi de güncelleyin; eski belge, kendinden emin ama yanlış bir yanıt demektir.

## Güvenlik ve KVKK

Destek talepleri ad, telefon, adres, sipariş ve bazen sağlık ya da ödeme bilgisi içerir. Claude'a giden her metin, model işlemesi için Anthropic'e (yurt dışına) gider. Bu yüzden:

- Ekip kullanımında Team veya Enterprise planı tercih edin: bu planlarda girdi ve çıktılar varsayılan olarak model eğitiminde kullanılmaz ve Anthropic'in veri işleme eki (DPA) ticari şartlara dahildir. Kişisel Free, Pro veya Max hesaplarıyla müşteri verisi işlemeyin.
- Müşterilere yönelik aydınlatma metninizde, taleplerin yurt dışındaki hizmet sağlayıcılarca işlenebileceğini ve aktarımın dayanağını hukuk biriminizle birlikte değerlendirin. Yurt dışına aktarım şartları KVKK'da ayrıca düzenlenmiştir; uygulamayı hukuk biriminizle teyit edin.
- Kart numarası, T.C. kimlik numarası gibi verileri Claude'a gönderilen metinden ayıklamayı veya maskelemeyi kural haline getirin.
- Hangi temsilcinin neyi gönderdiği kayıt altında olmalı. Enterprise planında denetim kayıtları ve Compliance API bulunur.

Genel çerçeve: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) ve [şirket içi kullanım politikası](/wiki/temeller/sirket-ici-politika/).

## Nasıl başlarsınız?

1. **Tek bir talep türü seçin.** Örneğin yalnız "kargom nerede" ya da yalnız iade talepleri. Hacmi yüksek, kuralı net olan tür en iyi başlangıçtır.
2. **Bilgi kaynaklarını toplayın.** İade politikası, kargo süreleri, sık sorulan sorular ve onaylı yanıt şablonlarını bir Claude projesine veya skill'e koyun.
3. **Taslak modunda çalışın.** İlk haftalarda Claude yalnız taslak yazsın, temsilci her yanıtı onaylasın. Temsilcinin ne kadar düzelttiğini ölçün.
4. **Ölçün, sonra genişletin.** İlk yanıt süresi, tekrar açılan talep oranı ve temsilci düzeltme oranı iyi göstergelerdir. Ölçüm çerçevesi: [Ölçüm ve metrikler](/wiki/temeller/olcum-metrikleri/).
5. **Doğrudan müşteriyle konuşan ajan** ancak bu adımlar oturduktan sonra, insana devir kuralları yazılı olarak tanımlanmışken gündeme gelmeli.

## Zamana'nın notu

Destekte en sık gördüğümüz hata, ilk gün "müşteriye Claude yanıt versin" hedefiyle başlamak. Daha sağlam yol, temsilcinin Claude'u taslak ve sınıflandırma için kullanmasıdır; ekip ne zaman güvenebileceğini kendi verisiyle görür. Destek ekipleri için kullanım senaryoları ve hazır prompt'lar [müşteri hizmetleri sayfasında](/wiki/departmanlar/musteri-hizmetleri/), ekip eğitimi ise [kurumsal programda](/programlar/kurumsal/).
