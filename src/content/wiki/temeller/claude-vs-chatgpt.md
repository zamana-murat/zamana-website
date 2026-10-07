---
title: "Claude vs ChatGPT: Dürüst Bir Karşılaştırma"
description: Claude ve ChatGPT arasındaki farkları iş kullanımı açısından inceliyoruz. Hangisi hangi durumda daha doğru seçim, Türkçe kalitesi, fiyat ve kurumsal özellikler.
tags:
  - temeller
  - claude
  - chatgpt
  - karsilastirma
lastUpdated: "2026-10-06"
---

"Claude mu ChatGPT mi?" sorusu en çok sorulan sorulardan biridir. Kısa ve dürüst cevap şu:

> **İkisi de iyi. İkisi de büyük dil modeli. İkisi de bir iş profesyoneline ciddi değer katar. Ama ikisi birbirinin yerine geçmez, farklı işlerde farklı güçleri vardır.**

Bu sayfa, marketing sloganlarının ötesine geçerek iki sistemi gerçek iş kullanımı ekseninde karşılaştırır. "Hangisi daha iyi?" sorusu yanlış sorudur. Doğru soru: **sizin işiniz için hangisi doğru seçim?**

## Ortak DNA

İkisini karşılaştırmadan önce benzerlikleri netleştirelim:

- Her ikisi de **büyük dil modelidir (LLM)**. Aynı temel teknolojiyi kullanırlar.
- Her ikisi de doğal dilde yazabilir, belge okuyabilir, kod yazabilir, görselleri analiz edebilir, sesli etkileşime girebilir.
- Her ikisi de kurumsal planlar sunar (Team, Enterprise).
- Her ikisi de Türkçeyi profesyonel düzeyde anlar ve üretir.

Karşılaştırmanın anlamlı olduğu yer, bu ortak zeminin üstündeki farklar.

## 1. Tasarım Felsefesi

Burası çoğu karşılaştırmanın atladığı, ama iş kullanımında en önemli olan eksen.

**OpenAI (ChatGPT)**: "Yapay genel zekayı (AGI) insanlığa faydalı olacak şekilde geliştirmek." Ürün hızı ve yetenek ön planda.

**Anthropic (Claude)**: "Yararlı, zararsız, dürüst." Güvenlik ve öngörülebilirlik tasarımın merkezinde.

Pratikte fark şu: Claude, emin olmadığında size bunu söyler. "Bu konuda kesin bilgim yok" veya "bu varsayıma dayalı bir cevap" gibi uyarıları doğal olarak verir. ChatGPT de bunu yapar. Fark bir derece farkıdır ve model sürümüne ve talimatınıza göre değişir; Anthropic bu davranışı özellikle hedefliyor.

**Neden önemli?** Finans, hukuk, İK gibi departmanlarda yanılgıyla ilerleyen bir yapay zeka gerçek hasar verebilir. Sözleşme taslağında yanlış ama emin bir cümle, pahalı bir kararda gözden kaçabilir. Claude'un bu konudaki tasarım yaklaşımı kurumsal kullanımda ciddi bir avantajdır.

## 2. Uzun Belge İşleme

**Claude'un güçlü olduğu alanlardan biri, ama fark eskisi kadar büyük değil.**

- Claude'un güncel modellerinde (Fable 5.1, Opus 5.5, Sonnet 5.5) bağlam penceresi (context window) tüm ücretli planlarda **1.000.000 token**'dır; plana göre fark yoktur. Bu, 150 sayfalık bir raporu tek oturumda okuyup tartışabilmek demektir.
- OpenAI'nin güncel GPT-6 ailesi de API'de 1,05 milyon token bağlam sunuyor (Ekim 2026 itibarıyla). ChatGPT uygulamasında plana göre bağlam penceresini doğrulayamadık, güncel değer için OpenAI'nin sayfasına bakın. Pencere büyüklüğü artık belirleyici değil; asıl fark uzun belgede tutarlılık. Deneyimimizde Claude uzun belgelerde daha tutarlı özet çıkarıyor, ama bu sürümden sürüme değişir, kendi belgenizle deneyin.

**Kimler için önemli:** Hukuk (uzun sözleşme analizi), finans (yıllık rapor incelemesi), operasyon (SOP arşivi), ihracat (uzun SPA dokümanları), üst yönetim (board paketleri).

## 3. Kod, Otomasyon ve Bilgisayar Kontrolü

İkisi de kod yazar. Farkı yaratan çalışma ortamıdır.

**ChatGPT**: *Code Interpreter* (Advanced Data Analysis) ile Python kodunu sandbox'ta çalıştırır. *GPTs* ile özelleştirilmiş mini-asistanlar yaratabilirsiniz. Dış servislere ChatGPT'nin kendi uygulama ve bağlayıcı katalogu üzerinden bağlanır.

**Claude**: *Cowork* ile bilgisayarınızda izin verdiğiniz klasörlerdeki dosyalara erişir, kod çalıştırır, araç kullanır; 6 Ekim 2026'dan beri Pro ve Max'te yeni Cowork görevleri bulutta da çalışır. *Skills* ile hazır uzmanlık paketleri devreye girer (PDF, Excel, PPTX, marketing, sales, hepsi hazır). *MCP* (Model Context Protocol) ile şirket içi araçlarınıza (Slack, Drive, CRM) bağlanır. *Computer Use* ile ekranı görür ve kontrol eder (research preview, yalnızca Pro ve Max planlarında; bu özelliği açtığınızda Claude klasör sınırının ötesinde ekranınızı da görebilir).

**İş akışı açısından:** ChatGPT'nin araç entegrasyonu daha uygulama-odaklı, Claude'unki daha iş-akışı-odaklı. Bir satış yöneticisi için Cowork + Skills kombinasyonu "CRM'e bak, proposal'ı hazırla, Slack'te paylaş" zincirini kuran daha akıcı bir yapı sunar.

## 4. Ekosistem ve Özelleştirme

| Özellik | Claude | ChatGPT |
|---|---|---|
| Kalıcı hafıza Profil/proje talimatı + Cowork klasöründe CLAUDE.md (açık, düzenlenebilir) + Claude hafızası (memory) | Memory (kaydedilen anılar) |
| Hazır uzmanlık | Skills (PDF, Excel, marketing, sales, legal, vb.) | GPTs (topluluk yapımı) |
| Dış araç bağlantısı | MCP (açık standart), resmi dizinde yaklaşık 900 connector | Kendi uygulama ve bağlayıcı kataloğu + GPT Actions |
| Proje alanları | Projects (claude.ai, 17 Eylül 2026'da yeniden tasarlandı) | Projects (ChatGPT) |
| Zamanlanmış ve uzaktan görev | Scheduled Tasks; Dispatch (telefondan görev atama) yeni kullanıcıya kapalı sınırlı beta | Zamanlanmış görevler |

**Önemli fark:** Claude'un kalıcı talimatları düz metindir: profil talimatını ayarlardan, Cowork klasörünüzdeki CLAUDE.md dosyasını bir editörle düzenlersiniz (sıradan sohbet CLAUDE.md okumaz, orada profil ve proje talimatı geçerlidir). ChatGPT de kaydettiklerini gösterir, ama onun hafızası proje klasöründe yaşayan, ekiple paylaşılıp sürüm kontrolüne alınabilen bir dosya değildir. Kurumsal kullanımda **şeffaflık önemlidir**, çalışanın Claude'a ne öğrettiği görülebilir olmalı.

## 5. Türkçe Kalitesi

İkisi de çok iyi. Aralarındaki fark küçüktür ve kullanım biçimine göre değişir:

- **Resmi Türkçe (sözleşme, resmi yazışma, hukuki metin):** Claude hafifçe önde. "Sayın", "takdirlerinize arz ederim", "işbu sözleşme" gibi formal kalıpları daha tutarlı kullanır.
- **Yaratıcı içerik (pazarlama kopisi, sosyal medya):** İkisi de çok iyi. Ton ayarı kalıcı talimatla (Claude'da profil talimatı veya CLAUDE.md, ChatGPT'de custom instructions) şekillenir.
- **Teknik Türkçe (IT, finans terminolojisi):** Eşit. İkisi de "bulut bilişim", "nakit akışı", "karlılık oranı" gibi terimleri doğru kullanır.

## 6. Fiyat

Bireysel kullanıcı planları benzer:

- **Claude Pro:** 20 USD/ay (Max kademeleri dahil tüm Claude fiyatları [Planlar](/wiki/temeller/planlar/) sayfasında); Sonnet 5.5 ve Opus 5.5 plana dahil, Fable 5.1 yalnızca ek kullanım kredisiyle
- **ChatGPT Plus:** 20 USD/ay, benzer kullanım. ChatGPT'de ayrıca Go (8 USD/ay) ve üç kademeli Pro (100, 200 ve 500 USD/ay) planları var

Kurumsal tarafta Claude Team ve Enterprise fiyatları ile kullanım modeli [Planlar](/wiki/temeller/planlar/) sayfasında. ChatGPT Business kullanıcı başına 20 USD/ay (yıllık faturalı, en az 2 kullanıcı); Enterprise özel fiyatlıdır. Rakip fiyatları Ekim 2026 itibarıyla geçerlidir ve hızlı değişir, güncel fiyat için resmi sayfalara bakın.

**Fiyat karar verici olmaz.** İkisi arasında ayda 5 USD fark varsa ve ikisinden biri işinizi %20 daha hızlı yapıyorsa, doğru cevap belli.

## Türk Kurumsal Kullanımı için Tipik Tercih

Birçok orta ölçekli Türk şirketi Claude'u tercih ediyor. Sebepleri:

1. **Kurumsal güven.** "Dürüst" tasarım felsefesi, finans ve hukuk bölümlerinde kritik hatalardan korur.
2. **Açık kalıcı talimat.** Çalışanın yapay zekaya ne öğrettiği (profil/proje talimatı, Cowork klasöründeki CLAUDE.md) düz metin olarak görülür. Kurumsal şeffaflık için bu tek başına önemli bir farktır.
3. **Cowork + Skills + MCP.** İş akışı odaklı ekosistem, tek bir oturumda "belgeyi oku → raporu yaz → Slack'te paylaş" zincirini akıcı kurar.
4. **Uzun belge performansı.** Türk iş dünyasında uzun sözleşmeler, tender dosyaları, denetim raporları sıradan. Claude bu tip belgelerde güçlü bir seçenektir.

**Bu, "ChatGPT kötü" demek değildir.** ChatGPT hâlâ birçok görevde harika iş çıkarır. Yukarıdaki maddeler bir tercih gerekçesidir, mutlak doğru değildir.

## Ya Google Gemini?

Google'ın yapay zekâ ürünü **Gemini**, Google Workspace (Gmail, Drive, Docs, Sheets) kullanan şirketler için doğal bir seçenek: ek hesap gerekmez, asistan zaten uygulamanın içindedir. Uzun bağlamda (1 milyon token) Claude'un güncel modelleriyle başa baş, bu başlık artık belirleyici değil. Claude'un iş akışı tarafı (Cowork, Skills, MCP) ile Gemini'nin Workspace içi yerleşikliği farklı güçler; Türkçe kalitesinde günlük kullanımda fark küçük. Gemini'nin ticari sözleşme metnini bu sayfa için incelemedik, DPA ve KVKK konusunda iki sözleşmeyi yan yana okuyun.

Güçlü ve zayıf yönler, fiyatlar, karar matrisi ve "ikisini birden kullanmak mantıklı mı" sorusu için [Claude vs Gemini](/wiki/temeller/claude-vs-gemini/) sayfasına bakın.

## Ya Mistral (Fransız)?

Mistral AI, Paris merkezli bir Avrupa yapay zeka şirketi. AB bağımsızlığı perspektifinden önemli bir oyuncu.

**Güçlü yönleri:**

- **AB menşeli**: veri gizliliği konusunda daha net GDPR uyumu, AB kaynaklı müşterilerle çalışan şirketler için siyasi olarak "güvenli tercih"
- **Açık ağırlıklı modeller** (güncel aile için Mistral'in sayfasına bakın): on-premises dağıtıma izin verir. Savunma ve finans sektörü için değerli.
- **Hızlı iterasyon**: son bir yılda rekabetçi modeller çıkardılar
- **Fiyat rekabetçiliği**: özellikle API kullanımında

**Zayıf yönleri:**

- **Kurumsal özellik olgunluğu**: Claude'un kalıcı talimat yapısı (CLAUDE.md dahil), Cowork'ü, Skills'i, MCP'si dengi yok
- **Türkiye pazarında destek sınırlı**: bu bölgede Türkçe dokümantasyon, yerel müşteri desteği, DPA süreci zayıf
- **Genel kalite**: en üst seviye modelde Claude/ChatGPT'nin bir adım gerisinde (hızla kapanıyor)

**Değerlendirme:**

**Avrupa (özellikle Fransa) iş ortaklarıyla yoğun çalışıyorsanız** Mistral siyasi bir dengeleyici olabilir. **Açık kaynak dağıtım gerekiyorsa** (hava boşluklu ortamlar) değerli. Ama **genel Türk kurumsal kullanım** için şu an daha az olgun bir seçenek.

## Ya Meta Llama (Açık Kaynak)?

Meta'nın Llama model ailesi, **açık kaynak**. Bu onu benzersiz yapar.

**Güçlü yönleri:**

- **Tamamen ücretsiz model**: şirket içi sunucularda çalıştırabilirsiniz, abonelik yok
- **Tam veri kontrolü**: verileriniz şirketinizden çıkmaz
- **İnce ayar (fine-tuning)**: kendi şirket verinizle modeli özelleştirebilirsiniz
- **Hava boşluklu ortamlar** için en uygun seçenek

**Zayıf yönleri:**

- **Kendi başınasınız**: Llama'yı çalıştırmak için GPU sunucuları, DevOps ekibi, model bakım uzmanı gerekir. Olgun bir kurumsal iş akışı için ek altyapı yatırımı şart
- **Kullanıcı deneyimi yok**: "Çalışan Llama'ya gider" gibi bir konsept yok; üstüne uygulama katmanı yazmak lazım
- **Ekosistem boş**: Cowork, Skills, Connector gibi hazır altyapı olmadığından her şey inşa edilmek zorunda
- **Kurumsal destek yok**: sorun olduğunda aranacak kimse yok, open source topluluğa bağımlısınız

**Değerlendirme:**

Llama **savunma, büyük bankalar, devlet kurumu** gibi veri egemenliği mutlak önemli olan sektörlerde değerli. Ama tipik **orta ölçekli Türk şirketi** için **uygun değil**, altyapı yükü, kurumsal destek eksikliği, ekosistem boşluğu nedeniyle.

Açık kaynak modeller hızla gelişiyor, 2-3 yıl sonra belki bu değerlendirme değişir.

## Ya Grok?

Son zamanlarda "Claude vs ChatGPT vs Grok" karşılaştırmaları popüler. Dürüst görüşümüz: **Grok şu an iş kullanımında ciddi bir üçüncü seçenek değil.**

xAI'nin ürünü Grok, daha çok tüketici ve eğlence odaklı konumlanıyor, X/Twitter entegrasyonu, gündem yorumu, mizahi ton bu tarafa yatırım yapıyor. Kurumsal tarafta ise henüz CLAUDE.md benzeri şeffaf bir talimat dosyası, MCP gibi açık bir bağlantı standardı, Cowork seviyesinde bir iş akışı ortamı veya olgun bir Team/Enterprise planı sunmuyor. Türkiye'deki kurumsal kullanım için kritik olan KVKK uyumluluğu konusunda da veri işleme konumu hâlâ belirsiz.

Bu durum değişebilir, xAI hızlı hareket ediyor. Ama bugün itibariyle, bir şirketin yapay zeka stratejisini kurarken karar Claude ile ChatGPT arasındadır. Grok zamanla ciddi bir alternatif olursa bu sayfayı güncelleriz.

## Karşılaştırma Özeti Tablosu

Tüm alternatifleri tek bakışta:

| Özellik | Claude | ChatGPT | Gemini | Grok | Mistral | Llama |
|---|---|---|---|---|---|---|
| **Kurumsal olgunluk** | Çok yüksek | Çok yüksek | Yüksek | Orta | Orta | Düşük |
| **Türkçe kalitesi** | Mükemmel | Mükemmel | İyi | Orta | Orta | Orta |
| **KVKK / DPA süreci** | Olgun | Olgun | Orta | Belirsiz | İyi (AB) | Kendi sorumluluğunuz |
| **İş akışı ekosistemi** | Çok güçlü | Güçlü | Orta | Zayıf | Zayıf | Yok (kendiniz inşa) |
| **Bağlam penceresi** | 1M (güncel modeller) | 1,05M (API) | 1M | Modele göre | Modele göre | Modele göre |
| **Fiyat (orta kullanım)** | ~$20-25 | ~$20-25 | ~$20 | Resmi sayfaya bakın | Kullanıma göre API | Ücretsiz + altyapı |
| **Açık kaynak** | Hayır | Hayır | Hayır | Kısmen | Kısmen | Evet |
| **On-premises dağıtım** | Hayır | Hayır | Hayır | Hayır | Evet (büyük) | Evet |
| **Tipik Türk kurumsalı için uygun** | ✅ Evet | ✅ Evet | ⚠️ Sınırlı | ❌ Henüz değil | ❌ Özel durumlar | ❌ Özel durumlar |

*Tablodaki rakip değerleri Ekim 2026 itibarıyla genel eğilimi gösterir; Grok, Mistral ve Llama için model bazlı rakamları doğrulamadık. Rakip modeller hızla eskir, karar öncesi güncel sayfalara bakın.*

## Türkçe Resmi Yazışma: Kafa Kafaya Örnek

"Claude ve ChatGPT Türkçeyi nasıl yazıyor?" sorusuna soyut cevap vermek yerine somut bir örnek. Aynı prompt, iki modelin tipik çıktısı. Aşağıdakiler belirli bir sürümden alınmış birebir kayıt değil, farkı göstermek için hazırlanmış tipik örneklerdir.

### Prompt

> *"Türk Ticaret Kanunu'na tabi bir anonim şirket olarak, bir tedarikçiden gelen sözleşme değişikliği teklifini reddeden resmi bir yazı yaz. Tedarikçi 3 yıllık ilişkimiz var, ilişkiyi sürdürmek istiyoruz, ama şartları kabul edemiyoruz. 150 kelimeyi aşma. Resmi Türk iş mektubu formatında."*

### Claude Tipik Çıktısı

> **Sayın [Ad] Bey/Hanım,**
>
> [Tarih] tarihli yazınızla iletmiş olduğunuz sözleşme değişikliği teklifiniz tarafımızca titizlikle incelenmiş olup, mevcut koşullarda önerilen değişikliklerin tarafımızca uygun bulunmadığını bildirmek durumundayız.
>
> Üç yılı aşkın süredir sürdürdüğümüz ticari ilişkimizin tarafımızca değer taşıdığını belirtmek isteriz. Ancak sözleşmenin mevcut hükümlerinden ayrılan önerilen koşullar, şirketimizin ticari ve operasyonel prensipleri ile örtüşmemektedir.
>
> Önümüzdeki dönemde karşılıklı faydayı koruyan alternatif bir düzenleme üzerinde görüşmelere açık olduğumuzu önemle belirtiriz.
>
> Saygılarımızla,
>
> [Ad Soyad]
> [Ünvan]
> [Şirket]

**Değerlendirme:** Türk iş mektubu formatı doğru. "Sayın" hitabı yerinde. Üçüncü şahıs kurumsal dil ("tarafımızca", "şirketimizin") tutarlı. "Kabul edemiyoruz" yerine daha diplomatik "uygun bulunmadığını bildirmek durumundayız" kullanımı. İlişki koruma tonu açık. Kelime sayısı: ~130.

### ChatGPT Tipik Çıktısı

> **Sayın [Ad],**
>
> İletmiş olduğunuz sözleşme değişikliği önerisi için teşekkür ederiz. Şirketimiz söz konusu önerileri dikkatle değerlendirmiş olup, mevcut koşullar çerçevesinde önerilen değişikliklerin kabul edilemeyeceğini bildirmek isteriz.
>
> Sizinle 3 yıldır süregelen ticari ilişkimiz bizim için önemlidir. Bu ilişkinin gelecekte de devam etmesini arzu etmekle birlikte, önerilen yeni şartların şirketimizin ticari politikalarıyla uyumlu olmadığı görülmüştür.
>
> Her iki tarafın çıkarlarını gözeten alternatif bir çözüm üzerinde görüşmeye açığız. Görüşlerinizi bekler, saygılarımızı sunarız.
>
> [Ad Soyad]
> [Ünvan]

**Değerlendirme:** Format doğru. "Sayın" hitabı var. Ton biraz daha samimi ("arzu etmekle birlikte", "teşekkür ederiz"). "3 yıldır" (rakam) yerine Claude'un "Üç yılı aşkın" (yazı) tercihi resmi yazışma kurallarına göre daha doğru. Kelime sayısı: ~120.

### Fark Analizi

- **Claude:** Daha ağır kurumsal register, daha formal, "tarafımızca" gibi üçüncü şahıs kullanımı ağırlıklı
- **ChatGPT:** Biraz daha sıcak, daha modern kurumsal ton

Her ikisi de **kullanılabilir**. Fark çıktıların kendisinde değil, **tercih ettiğiniz tonda**. Claude daha ağır kurumsal alanlarda (banka, sigorta, kamu yazışması), ChatGPT biraz daha modern şirket kültürlerinde doğal durur.

**Önemli not:** Bu tek örnek. 20 farklı resmi yazışma tipinde fark **daha incelikli**. Genel kural: ikisi de %90 doğru çıkarır, %10 insan gözüyle son rötuş gerekir.

## 2026'da Durum Ne Değişti?

Claude ve ChatGPT hızlı evrim geçiriyor. Ekim 2026 itibarıyla önemli gelişmeler:

### Claude tarafı (Nisan-Ekim 2026)

- 9 Nisan: **Cowork** masaüstünde genel kullanıma açıldı
- 16 Nisan: **Claude Opus 4.7** yayınlandı
- 17 Nisan: **Claude Design** (Anthropic Labs)
- 9 Haziran: **Fable 5** ve **Mythos 5**
- 30 Haziran: **Sonnet 5**; 24 Temmuz: **Opus 5**
- 25 Ağustos: **Hafıza** sohbet ve Cowork arasında ortak oldu
- 26 Ağustos: **Claude in Chrome** genel kullanıma açıldı
- 1 Eylül: **Fable 5.1** (Mythos 5.1 yalnızca davetle)
- 16 Eylül: **Cowork ve sohbet tek Claude** oldu; Design, Slides ve Docs her konuşmada istenebiliyor (ücretli planlarda beta, Free'de yok). Ayrıntı: [Cowork ve sohbet tek Claude oldu](/haberler/2026-09-16-cowork-ve-sohbet-tek-claude-oldu/)
- 22 Eylül: **Opus 5.5** ([haber](/haberler/2026-09-24-claude-opus-5-5/)); 28 Eylül: **Sonnet 5.5**

### ChatGPT tarafı (Ekim 2026 itibarıyla)

- OpenAI'nin amiral model ailesi GPT-6 (Astra, Sol, Luna); API'de üçünde de 1,05 milyon token bağlam penceresi var
- ChatGPT planları: Free, Go, Plus, Pro (üç kademe), Business ve Enterprise/Edu
- Hangi modelin hangi plana dahil olduğunu doğrulayamadık, ChatGPT'nin güncel plan sayfasına bakın

Güncel model ailesi için [Claude Modelleri](/wiki/temeller/modeller/) sayfasına bakın.

### Türk Kurumsal Kullanıcısını Etkileyen Eksenler

Hangi gelişme Türk kurumsal kullanıcısını doğrudan etkiler? Üç ana eksen:

1. **KVKK uyum özellikleri**: ticari planlardaki DPA şartları ve veri saklama seçenekleri
2. **Türkçe performans**: her iki modelin Türkçe kalitesinin seyri
3. **Kurumsal connector'lar**: Türkiye'de yaygın araçlar (Logo, Mikro, Paraşüt için resmi connector yok; özel connector veya API ile kurulur)

Bu eksenler değiştikçe wiki güncellenir.

## Kısa Karar Tablosu

| Sizin için öncelik... | Muhtemelen daha uygun |
|---|---|
| Uzun belge analizi, hukuk, finans | **Claude** |
| Şeffaf kalıcı talimat (CLAUDE.md, profil talimatı) | **Claude** |
| İş akışı otomasyonu (Skills + MCP) | **Claude** |
| Geniş topluluk GPT'leri | **ChatGPT** |
| Görsel üretimi | **ChatGPT** (Claude görsel üretmez veya düzenlemez, yalnızca yorumlar) |
| Ekibinizin çoğunluğu zaten alışkın | **Zaten kullandığı** |

Hâlihazırda ChatGPT kullanıyor ve Claude'a geçmeyi düşünüyorsanız, tercihlerinizi ve bağlamınızı kaybetmeden taşıma yolu için [ChatGPT'den Claude'a geçiş](/claude/gecis/) sayfasına bakın.

## İlgili Sayfalar

- [Claude Nedir?](/wiki/temeller/claude-nedir/): Temel kavram
- [Claude Modelleri](/wiki/temeller/modeller/): Fable / Opus / Sonnet / Haiku
- [Claude Planları](/wiki/temeller/planlar/): Fiyat ve özellik detayları
- [Cowork Modu](/wiki/araclar/cowork-modu/): Claude'un kurumsal çalışma ortamı
- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Şeffaf kalıcı talimat

