---
title: 4D Çerçevesi — Claude ile Düşünmenin Temeli
description: Anthropic'in resmi AI Fluency çerçevesi. Delegation, Description, Discernment, Diligence — yapay zekayla etkili, verimli, etik ve güvenli çalışmanın dört temel yetkinliği.
tags:
  - prompting
  - 4d-framework
  - ai-fluency
  - anthropic-academy
---


# 4D Çerçevesi — Claude ile Düşünmenin Temeli

Yapay zekayla çalışmak bir beceridir, bir araç değil. Bu becerinin resmi adı **AI Fluency**'dir — ve Anthropic Academy'nin hem kendisi hem de University College Cork gibi üniversiteler bu beceriyi öğretirken **4D Çerçevesi**'ni kullanır.

Zamana eğitim programlarının tamamı da bu çerçeveye dayanır. Sebep basit: 4D, bir çalışanın Claude'la "dene bakalım" seviyesinden "işini buna göre yeniden tasarla" seviyesine geçmesini sağlayan düşünce yapısıdır.

> **AI Fluency, yapay zekayla etkili, verimli, etik ve güvenli biçimde etkileşim kurabilme yetkinliğidir.**

Bu sayfa çerçeveyi tanıtır. Dört D'yi, her birinin alt yetkinliklerini ve Zamana'da nasıl öğretildiğini açıklar.

## Dört D — Resmi Tanımlar

| D | Tanım |
|---|---|
| **Delegation (Devretme)** | Hangi işin insana, hangi işin yapay zekaya, hangi işin birlikte yapılacağına bilinçli karar vermek |
| **Description (Tanımlama)** | Yapay zekaya ne istediğinizi, nasıl düşünmesini istediğinizi ve nasıl davranmasını istediğinizi net biçimde iletmek |
| **Discernment (Ayırt Etme)** | Yapay zekanın ürettiği çıktıyı, süreci ve davranışı eleştirel gözle değerlendirmek |
| **Diligence (Sorumluluk)** | Yapay zeka kullanımının sonuçlarını üstlenmek; şeffaflık, doğrulama ve mesleki hesap verebilirlik |

Bu dört D sırasıyla uygulanabilir, ama zorunlu değildir. Her biri ayrı bir giriş noktası olabilir. Deneyimli bir kullanıcı hepsini aynı anda, neredeyse bilinçsizce kullanır.

## D1 — Delegation (Devretme)

> **"Hangi işin size, hangisinin yapay zekaya, hangisinin ikinize ait olduğuna bilinçli karar vermek — ve işi ona göre dağıtmak."**

Etkili devretme iki yetkinlik ister: **alan uzmanlığı** (işi bilmek) ve **platform farkındalığı** (yapay zekanın ne yapıp yapamayacağını bilmek).

Üç alt yetkinlik:

- **Problem farkındalığı:** Yapay zekayı işe dahil etmeden *önce* neyi başarmak istediğinizi netleştirmek. Tanımlamadığınız bir şeyi iyi devredemezsiniz.
- **Platform farkındalığı:** Farklı yapay zeka sistemlerinin güçlü ve zayıf yönlerini tanımak. Her işe aynı araç uygun değildir.
- **Görev dağılımı:** İşi insan, yapay zeka ve işbirliği arasında dengeli şekilde bölmek.

### Başarısızlık biçimi — "Kâbus":

> *"Ödevimi ücretsiz bir yapay zekaya yapıştırdım, çıktıyı kendi işim olarak teslim ettim — kontrol ya da atıf olmadan."*

Bu sıfır Delegation demektir. Hedef yok, görev analizi yok, bilinçli seçim yok. Tam teslimiyet.

### İdeal — "Rüya":

> *"Bir taslak yazdım, dikkatle seçtiğim bir yapay zekayla editör gibi konuşarak sesimi ve bakış açımı güçlendirdim, iyi önerilerini benimsedim, nihai metni yapay zekayla olan etkileşimim hakkında düşünceli bir yansımayla birlikte teslim ettim."*

Bu tam Delegation zekası demektir. İnsan işi sahipleniyor, yapay zeka tanımlı bir alt görev üstleniyor, çıktı insan tarafından titizlikle süzülüyor.

### Zamana'da nasıl öğretilir

1. Oturumun başında — daha Claude açılmadan — çalışan haftalık işlerini üç kategoriye böler: sadece insan, yapay zeka destekli, birlikte çalışılabilir. Bu pratik hem az-kullanımı hem aşırı-devretmeyi önler.

## D2 — Description (Tanımlama)

> **"Yapay zekayla verimli bir işbirliği ortamı yaratacak biçimde iletişim kurmak."**

İnsanların çoğu Claude'la başarısız olur, çünkü Google'a sorar gibi sorar — kısa, anahtar kelime tabanlı, bağlamsız. İyi Description bu refleksi kırar.

Üç alt yetkinlik:

- **Ürün Tanımlaması:** Çıktıyı biçim, hedef kitle ve üslup açısından tarif etmek. *Sonuç neye benzemeli?*
- **Süreç Tanımlaması:** Claude'un göreve nasıl yaklaşmasını istediğinizi belirtmek. *Nasıl düşünsün, nasıl ilerlesin?*
- **Performans Tanımlaması:** Claude'un etkileşim boyunca nasıl davranmasını istediğinizi söylemek. *Hangi ton, hangi üslup, hangi kişilik?*

### Pratik prompt yapısı

1. Ne istiyorsunuz? (çıktı + biçim + hedef kitle)
2. Claude nasıl yaklaşsın? (süreç + kısıtlar)
3. Claude nasıl davransın? (ton + üslup + kişilik)

Bu üçünü bir araya getiren bir prompt, "bana bir e-posta yaz" düzeyinin çok ötesindedir.

### Description–Discernment döngüsü

Description ve Discernment ardışık değil, **sürekli bir döngüdür**:

```text
Description → Claude üretir → Discernment
Çıktı yeterli değilse → Description'a dön → prompt'u iyileştir → tekrar
```

Çıktı Discernment'tan geçmiyorsa çözüm her zaman Description'a geri dönmektir. Kötü çıktı, Claude'u terk etme nedeni değil — prompt hakkında geri bildirimdir.

### Zamana'da nasıl öğretilir

1. Oturum, 2. Saat tamamen Description'a ayrılmıştır. Çalışan, 3 gerçek iş problemini yüksek sesle tarif eder. Murat çerçeveyi koçlar — çözümü değil. Amaç şudur: *"Neye ihtiyacım olduğunu, gerçekten istediğim sonucu getirecek şekilde nasıl anlatırım?"*

## D3 — Discernment (Ayırt Etme)

> **"Yapay zekanın ürettiğini, nasıl ürettiğini ve nasıl davrandığını titizlikle ve eleştirel biçimde değerlendirmek."**

Eleştirel düşünme yapay zeka işe girdiğinde durmaz — yer değiştirir. Üretmekten değerlendirmeye kayar.

Üç alt yetkinlik:

- **Ürün Ayırt Etme:** Çıktının kalitesi. Doğru mu, tam mı, iyi gerekçelendirilmiş mi, amaca uygun mu?
- **Süreç Ayırt Etme:** Claude'un yolu. Göreve doğru yaklaştı mı? Akıl yürütme sağlam mı? Kestirme mi gitti?
- **Performans Ayırt Etme:** Claude'un davranışı. Görevde kaldı mı? Belirsizliği işaret etti mi? Verilen davranış talimatlarına uydu mu?

### Başarısızlık biçimi — "Yapay zekayı kaynak gösterdim, sorun ne?":

> *"Bir taslak yazdım, AI ile doldurdum, tüm olguları ve kaynakları doğruluk için çift-kontrol ettim, çıkan metni aracı kaynak göstererek teslim ettim."*

Ürün Ayırt Etme yapıldı (olgu kontrolü), ama Süreç ve Performans Ayırt Etme atlandı. Çalışan yapay zekanın yaklaşımını ve davranışını değerlendirmeden kabul etti.

### Standart

Test şu değildir: *"Bu hiç yoktan iyi mi?"*

Test şudur: **"Buna adımı koyar mıyım?"**

Cevap hayırsa, Description'a geri dönülür ve iterasyon yapılır.

### Zamana'da nasıl öğretilir

Murat'ın 1. Oturum sorusu — bir iş çıktısı üretildikten sonra: *"Bunu şu an müdürüne göndermeye razı olur muydun?"*

O tek soru Discernment'ı zorla devreye sokar. 2. Oturum'un 1. Bloğu (Ödev İncelemesi) yapılandırılmış bir Discernment pratiğidir — çalışan kendi bağımsız çıktısını değerlendirir.

## D4 — Diligence (Sorumluluk)

> **"Yapay zeka etkileşimlerimizin sorumluluğunu üstlenmek."**

Yapay zeka bir araçtır. Sorumluluk, hesap verebilirlik ve profesyonel yükümlülük asla araca geçmez.

Üç alt yetkinlik:

- **Yaratım Sorumluluğu:** Hangi yapay zeka sistemlerini kullandığımız, nasıl etkileştiğimiz konusunda bilinçli olmak. Araç seçimi, veri gizliliği ve etik hatırlama — çıktı üretilmeden *önce*.
- **Şeffaflık Sorumluluğu:** Yapay zekanın işimizdeki rolünü, bilmesi gereken herkese karşı dürüstçe ifade etmek. Yapay zeka önemli katkı yaptıysa, açıklama zorunluluktur — bağlama göre biçimi değişir, yükümlülük değişmez.
- **Uygulama Sorumluluğu:** Kullandığımız ve paylaştığımız çıktıları doğrulamak, onların arkasında durmak. Çıktıyı teslim ettiğiniz anda — gönderdiğinizde, yayınladığınızda, sunduğunuzda, eyleme geçirdiğinizde — sorumluluk sizindir.

### Bir Diligence beyanı örneği

Çerçeveyi yazan akademisyenlerin kendi sunumlarında kullandıkları ifade:

> *"Bu sunumun hazırlanmasında metin oluşturma ve rafine etmede Claude Sonnet 3.7'den yararlandık. Yapay zeka tarafından üretilen tüm içerik, dikkatli bir inceleme ve seçim sürecinden geçirilmiştir. Nihai sunum bizim anlayışımızı, uzmanlığımızı ve iletmek istediklerimizi doğru biçimde yansıtmaktadır. Yapay zeka sistemleri yaratım sürecinde araç görevi görse de, içeriğin, doğruluğunun ve sunumunun tam sorumluluğu bize aittir."*

Bu bir Diligence beyanının modelidir: yapay zekanın ne yaptığı konusunda net, insan sorumluluğu konusunda açık, hedef kitleye karşı şeffaf.

### Türkiye'de profesyonel bağlam

Zamana müşterilerinin çoğu profesyonel standartlara tabidir: avukatlar Barolar Birliği'ne, finans uzmanları SPK'ya, sağlık çalışanları ilgili mevzuata, ihracatçılar GTİP ve gümrük mevzuatına. Bu profesyoneller için **Diligence iyi bir pratik değil — mesleki yükümlülüktür**. Claude bir araçtır. Yasal ve mesleki sorumluluk ehliyetli profesyonelde kalır.

### Zamana'da nasıl öğretilir

1. Oturum'un kapanış ilkesi Diligence'tır. 12 departmanın her birinde, o departmana özgü "pazarlık dışı çerçeveleme" Diligence'ın somut karşılığıdır:

> **Claude yazar. Siz karar verirsiniz. Sorumluluk asla transfer olmaz.**

## Özet Tablo

| D | Tanım | Alt yetkinlikler | Tipik başarısızlık |
|---|---|---|---|
| **Delegation** | Hangi iş kimde? | Problem · Platform · Görev | Kör teslim — yapıştır ve gönder |
| **Description** | Nasıl anlatırım? | Ürün · Süreç · Performans | Google arama tarzı sorgu |
| **Discernment** | Çıktı iyi mi? | Ürün · Süreç · Performans | Emin tonlu çıktıyı sorgusuz kabul |
| **Diligence** | Sorumluluk kimde? | Yaratım · Şeffaflık · Uygulama | Kullan ama söyleme; paylaş ama doğrulama |

## Zamana Programıyla Bağlantı

4D, Zamana curriculum'un **kavramsal bel kemiğidir**. Her pratiğin arkasındaki "neden" sorusunu yanıtlar.

| Zamana Oturum / Blok | 4D Bağlantısı |
|---|---|
| 1. Oturum — Saat 1 (Kurulum + Kimlik) | Delegation: Claude'a dokunmadan önce görev haritalama |
| 1. Oturum — Saat 2 (Soru Sorma Sanatı) | Description: üç alt yetkinlik, canlı pratik |
| 1. Oturum — Saat 3 (İlk Gerçek Kazanım) | Discernment: çıktıyı birlikte değerlendirme; Diligence: kapanış ilkesi |
| 2. Oturum — Blok 1 (Ödev İncelemesi) | Discernment: bağımsız çıktının yapılandırılmış değerlendirmesi |
| 2. Oturum — Blok 2 (CLAUDE.md Güncelleme) | Description: Performance Description iyileştirme |
| 2. Oturum — Blok 3 (Prompt Kütüphanesi) | Description + Discernment döngüsü uygulamalı |
| Tüm departmanlar — Pazarlık dışı çerçeveleme | O mesleğe özel Diligence beyanı |
| Tüm departmanlar — Canlı egzersizler | Delegation + Description gerçek iş üzerinde |
| Tüm departmanlar — Çıktı değerlendirme | Discernment: "Bunu müdürüne gönderir miydin?" |

## İlgili Sayfalar

- [Prompting Temel İlkeleri](temel-ilkeler/) — İyi bir prompt'un yapısı
- [İleri Seviye Prompt Engineering](ileri-seviye/) — Zincirleme düşünme, yapılandırılmış çıktı
- [Yaygın Prompting Hataları](yaygin-hatalar/) — Çoğu kişinin düştüğü tuzaklar
- [Claude Nedir?](../temeller/claude-nedir/) — Çerçeveden önce temel kavram

## Resmi Kaynaklar

- **AI Fluency Framework — Foundations** (Anthropic Academy): [anthropic.skilljar.com/ai-fluency-framework-foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations/291876)
- **Anthropic AI Fluency:** [anthropic.com/ai-fluency](https://anthropic.com/ai-fluency)
- **Yazarlar:** Rick Dakan (Ringling College of Art and Design), Joseph Feller (University College Cork)


