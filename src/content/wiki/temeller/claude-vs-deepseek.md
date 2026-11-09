---
title: "Claude vs DeepSeek: KVKK ve Veri Yeri Açısından"
seoTitle: "Claude vs DeepSeek: KVKK ve Veri Yeri"
description: "DeepSeek'i kurumsal işte kullanmadan önce: veri nerede saklanıyor, KVKK ve yurt dışı aktarım ne diyor, Claude ile fark nerede? Dürüst karşılaştırma."
tags:
  - temeller
  - karsilastirma
  - deepseek
  - kvkk
lastUpdated: "2026-11-09"
---

**DeepSeek, Çin merkezli bir yapay zeka şirketidir.** Uygulaması ücretsiz, API'si çok ucuz ve modelleri teknik olarak ciddi. Bir şirketin kullanım kararında asıl soru ise modelin kalitesi değil, **verinin nereye gittiğidir.** Bu sayfa Claude ile DeepSeek'i bu açıdan karşılaştırır.

Zamana Claude eğitimi verir; yine de DeepSeek'in teknik başarısını küçümsemiyoruz. Aşağıda yazılanlar iki sağlayıcının kendi yayımladığı metinlere dayanır. Hukuki görüş değildir; kurumsal karar için hukuk müşavirinize danışın.

## DeepSeek Verinizi Nerede Saklıyor?

DeepSeek'in gizlilik politikasına göre (son güncelleme 10 Şubat 2026) kişisel veri "People's Republic of China" içinde toplanır, işlenir ve saklanır; bazı durumlarda ülke dışındaki sunucularda da işlenebilir. Politika ayrıca kullanıcı girdisi dahil verilerin modelleri eğitmek ve geliştirmek için kullanılabileceğini söylüyor. Eğitimden çıkmak (opt-out) için e-posta ile başvuru gerekiyor. Veri hesap süresince, hukuki ya da iş gerekçesi varsa daha uzun saklanıyor.

Kaynak: [DeepSeek gizlilik politikası](https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html). İş kullanımı için ayrı bir kurumsal veri sözleşmesi (DPA benzeri) görmedik; varsa DeepSeek'ten yazılı olarak isteyin.

## Hangi Ülkeler Kısıtlama Getirdi? Türkiye'de Durum Ne?

2025'te çeşitli ülke ve kurumlar DeepSeek'e kısıtlama getirdi: İtalya veri koruma kurumu uygulamayı engelledi; Tayvan kamu kurumları, Avustralya hükümet cihazları, Çekya kamu yönetimi ve ABD federal kurumları gibi alanlarda kullanım sınırlandı; Güney Kore uygulamayı geçici durdurup değişiklikle yeniden açtı ([TechCrunch derlemesi](https://techcrunch.com/2025/02/03/deepseek-the-countries-and-agencies-that-have-banned-the-ai-companys-tech)). Bunlar 2025 haberleridir ve **2026'daki güncel durumlarını doğrulayamadık.** Listeyi bugünün hükmü gibi okumayın.

Türkiye için: DeepSeek'e yönelik **resmi bir yasak ya da KVKK Kurulu kararı bulamadık.** Bu, "kullanımı serbest ve risksiz" demek değildir; yalnızca aradığımız kaynaklarda böyle bir karar çıkmadı. Ocak 2025'te Dijital İşler Bakanlığı'nın Çin menşeinden dolayı bilgi güvenliği riskine dikkat çektiği haberlerde yer aldı; bunu haber kaynaklı bilgi olarak anıyoruz, resmi metnini doğrulamadık.

## KVKK ve Yurt Dışı Aktarım Açısından Ne Değişir?

Çalışan, DeepSeek uygulamasına müşteri adı, çalışan bilgisi ya da başka kişisel veri içeren bir metin yapıştırdığında bu veri Türkiye dışına, Çin'e aktarılmış olur. Kurum açısından bu, KVKK'nın yurt dışı aktarım kurallarını devreye sokar: aktarımın bir hukuki dayanağı olmalı, sözleşme ve güvence mekanizmaları gerekebilir. Çerçeve için [KVKK m.9 Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/) ve [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfalarına bakın.

Pratik sonuç: kişisel veri, ticari sır, müşteri sözleşmesi, finansal ya da hukuki belge içeren işlerde ücretsiz tüketici uygulaması kurumsal çözüm olarak savunulması zor bir seçenektir. Kamuya açık, hassas olmayan metinlerle sınırlı kullanım ise risk açısından çok farklıdır; sınırı şirket politikanız çizmeli ([Şirket İçi Yapay Zeka Politikası](/wiki/temeller/sirket-ici-politika/)).

## Claude ile Karşılaştırma

| | Claude | DeepSeek |
|---|---|---|
| Şirket | Anthropic (ABD) | DeepSeek (Çin) |
| İş planlarında eğitim | Team, Enterprise ve API'de girdi/çıktı varsayılan olarak eğitimde kullanılmaz | Gizlilik politikası girdinin eğitimde kullanılabileceğini söyler; çıkış e-posta ile |
| Kurumsal veri sözleşmesi | DPA, Team, Enterprise ve API için Commercial Terms'e dahil (SCC dahil) | Ayrı kurumsal sözleşme görmedik |
| Veri yeri | Veri ABD merkezli bir sağlayıcıda; yurt dışı aktarım KVKK kapsamında değerlendirilir | Politikaya göre Çin |
| Saklama | Ticari/API için standart 30 gün (sözleşmeyle değişebilir) | Hesap süresince, gerekçeyle daha uzun |
| Fiyat | Pro 20 USD/ay, Team Standard 25 USD/koltuk (yıllık 20 USD) | Uygulama ücretsiz; API çok düşük fiyatlı |
| Türkiye'de resmi yasak | Yok | Bulamadık |

İki tarafta da veri Türkiye dışına çıkar, yani yurt dışı aktarım değerlendirmesi ikisi için de gereklidir. Fark; sözleşme güvencesinin, eğitim kullanımının ve sağlayıcının tabi olduğu hukuk düzeninin ne olduğunda yatar. Claude için bu değerlendirmenin nasıl yapılacağı [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasında.

## DeepSeek'in Güçlü Yanı Nedir?

Dürüst olmak gerekirse üç noktada ilgi çekici: **fiyat** (API token başına Claude ve diğerlerinden belirgin ucuz), **açık ağırlıklı modeller** (kurumun kendi altyapısında çalıştırma imkânı) ve **araştırma ivmesi**. Hassas veriyle çalışmayan bir geliştirici ya da araştırmacı için bunlar gerçek avantajlardır.

> **Geliştiriciler için:** DeepSeek'in bazı modelleri açık ağırlıklı olarak yayımlanıyor. Kurum bu modeli kendi sunucusunda ya da kendi bulutunda çalıştırırsa veri üçüncü tarafa gitmez ve politikadaki Çin'de saklama maddesi geçerli olmaz; bu yol, tüketici uygulaması ya da DeepSeek'in kendi API'sinden farklı bir risk profili taşır. Karşılığında altyapı (GPU), güvenlik güncellemesi, model değerlendirmesi ve bakım sorumluluğu size geçer. Lisans koşullarını ve modelin çıktısını kendi işinizle test etmeden üretime almayın. Bu müfredatımızın parçası değildir; yalnızca seçenek olarak anılıyor.

## Ne Zaman Hangisi?

- **Kişisel veri, müşteri bilgisi, sözleşme, finans:** DPA'lı kurumsal bir plan (ör. Claude Team/Enterprise) ya da kurum içi bir çözüm.
- **Kamuya açık içerik, hassas olmayan deneme:** DeepSeek dahil birçok seçenek kullanılabilir; yine de şirket politikanıza uyun.
- **Kendi altyapınızda çalıştırmak istiyorsanız:** açık ağırlıklı seçenekler değerlendirilebilir (yukarıdaki kutu).

Genel seçim çerçevesi için [ChatGPT mi, Gemini mi, Claude mu? İş İçin Karar Rehberi](/wiki/temeller/hangi-yapay-zeka/) sayfasına bakın. Ekibinizin hangi veriyle hangi aracı kullanabileceğini birlikte netleştirmek isterseniz [kurumsal yapay zeka eğitimi](/programlar/kurumsal/) bu konuyu da kapsar.

## İlgili Sayfalar

- [KVKK m.9 Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/)
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/)
- [Şirket İçi Yapay Zeka Politikası](/wiki/temeller/sirket-ici-politika/)
- [Claude vs ChatGPT](/wiki/temeller/claude-vs-chatgpt/)
- [Claude vs Perplexity](/wiki/temeller/claude-vs-perplexity/)
- [Yaygın İtirazlar](/wiki/temeller/itirazlar/)
