---
title: Claude Modelleri — Haiku, Sonnet, Opus
description: Claude'un üç modeli Haiku, Sonnet ve Opus arasındaki farkları açıklıyoruz. Zamana'nın iş kullanımı için varsayılan model önerisi ve her birinin doğru kullanım alanları.
tags:
  - temeller
  - modeller
  - sonnet
  - opus
  - haiku
---


# Claude Modelleri — Haiku, Sonnet, Opus

## Model Nedir?

"Model" bir yapay zekanın **beynidir**. Anthropic, OpenAI veya Google gibi şirketler büyük metin koleksiyonlarıyla bir sinir ağını eğitir; ortaya çıkan sistem **bir model**'dir. Claude ile her sohbet ettiğinizde aslında bir modelle konuşursunuz.

Aynı şirket farklı amaçlar için **farklı modeller** üretir. Bunlar üç eksende farklılaşır:

- **Hız** — soruya ne kadar çabuk cevap üretir
- **Zekâ** — ne kadar karmaşık akıl yürütme yapabilir, ne kadar nüans yakalar
- **Maliyet** — kullanım kotasını ne kadar tüketir (dolayısıyla aboneliğinizin sınırlarını ne kadar zorlar)

Bu üç eksen birbirine **bağlıdır** — daha zeki bir model genellikle daha yavaş ve daha pahalıdır. Bu nedenle Anthropic her ihtiyaç tipi için ayrı bir model çıkarır: hızlı + ucuz, dengeli, en güçlü.

**Claude tek bir model değil, bir model ailesidir.** Hız, zekâ ve maliyet arasında farklı noktalarda duran üç ana modeli vardır: **Haiku**, **Sonnet** ve **Opus**.

Erken 2026 itibariyle aktif aile **Claude 4.x**'dir. Her modelin güçlü olduğu iş türü farklıdır, ama iş profesyoneli için Zamana'nın pozisyonu nettir:

> **Sonnet, bir iş profesyonelinin ihtiyaç duyduğu her şeyi yapar. Varsayılan olarak Sonnet kullanın. Her zaman.**

Bu sayfa üç modeli tanıtır, birini diğerine tercih etme gerekçelerini açıklar ve en önemlisi — çoğu iş kullanıcısının neden hiçbir zaman model seçmeye ihtiyaç duymayacağını anlatır.

## Üç Model — Karşılaştırma Tablosu

| Model | Hız | Zekâ | En Uygun Kullanım |
|---|---|---|---|
| **Claude Haiku** | En hızlı | İyi | Basit sorgular, hızlı arama, yüksek hacimli hafif görevler |
| **Claude Sonnet** ⭐ | Hızlı | Mükemmel | **Her şey — her türlü iş kullanımı için ana model** |
| **Claude Opus** | Yavaş | Maksimum | Sadece istisnai durumlar: saatlerce süren otonom görevler, 1M token belge analizi |

Bu tabloyu iki kez okuyun. Satır başı "Sonnet" ve satır içi "her şey" Zamana'nın tüm curriculum'unun altına atılmış imzadır.

## Hangi Modeli Seçmeliyim?

**Pratik kural:** "Sonnet'le başla, sebep çıkana kadar geçme." Sebep çıktığında genelde sebep prompt zayıflığıdır, model değil; iyi prompt + Sonnet, kötü prompt + Opus'tan daha iyi sonuç verir.

## Claude Haiku — En Hızlı

Haiku, modellerin en küçüğü ve en hızlısıdır. Basit ama sık tekrar eden görevlerde parlar:

- Kısa çeviriler
- Tek cümlelik özetler
- Sınıflandırma ("bu e-posta şikayet mi, soru mu?")
- Yüksek hacimli veri temizliği
- Otomasyon zincirlerinde aracı adımlar

**İş kullanımı için sınırları:** Karmaşık yazım, uzun belge analizi, stratejik akıl yürütme istemez. Bir çalışanın günlük işinde doğrudan Haiku seçmesi nadiren doğru karardır. Haiku genellikle **arka planda**, skill'lerin veya plugin'lerin içinde sessizce çalışır — alt-görevlerde.

**Güncel model kimliği:** `claude-haiku-4-5-20251001`

## Claude Sonnet — Ana İş Modeli ⭐

Sonnet, bir iş profesyonelinin günlük hayatında kullanması gereken modeldir. **Çoğu Zamana oturumu sadece Sonnet ile çalışır.** Başka bir model seçme ihtiyacı neredeyse hiç doğmaz.

Sonnet'in yapabildikleri — iş açısından:

- Sözleşme taslağı yazmak (hukuki dil, tutarlı yapı)
- 100-150 sayfalık raporları okuyup yöneticiye uygun özet çıkarmak
- Finansal raporların anlatımını yazmak (rakamlar sizden, anlatım Claude'dan)
- Pazarlama içeriği üretmek — marka sesine göre kalibre edilmiş
- İş akışları yönetmek: belge oku → rapor yaz → Slack'te paylaş
- 12 departmanın tamamında profesyonel kalitede çıktı

**Zamana'nın net pozisyonu:** Sonnet ile Opus arasındaki fark benchmark testlerinde ölçülebilir, gerçek iş hayatında neredeyse görünmez. Opus'un ekstra zekâsı çoğu iş görevinde ek değer katmaz — sadece oturumu yavaşlatır ve maliyet farkı yaratır.

**Güncel model kimliği:** `claude-sonnet-4-6`

## Claude Opus — Maksimum Zekâ, İstisnai Durumlar İçin

Opus en güçlü Claude modelidir. Ama bu "her zaman en iyi seçim" demek değildir.

Opus şunlar için vardır:

- **Saatlerce süren otonom görevler.** Yüzlerce araç çağrısı gerektiren, karmaşık planlama isteyen uzun süreli işler.
- **150.000 kelimenin üzerinde belge analizi.** Bir yasa paketi, dev bir due diligence dosyası, bir yıllık toplu rapor seti.
- **Piksel düzeyinde görsel inceleme.** Teknik çizim, karmaşık diyagram, mühendislik belgesi.
- **En yüksek kalitede yazım gerektiren kritik metinler.** Önemli bir yatırımcı mektubu, kurul sunumu açılış konuşması — ve sadece Sonnet'in çıktısının gerçekten yetmediği hissiyle.

Bunlar tipik bir çalışanın haftalık işi değildir. Bir çalışan "Opus mu kullansam?" diye düşünüyorsa cevap neredeyse her zaman: **Sonnet yeterlidir.**

**Güncel model kimlikleri:** `claude-opus-4-6`, `claude-opus-4-7`

## İş Kullanıcısı Model Seçmek Zorunda mı?

**Hayır.** Ve bu önemli.

Claude Desktop'ın Cowork modu ve Claude.ai web arayüzü, **çoğu oturumda en uygun modeli otomatik seçer**. Çalışanın model seçim ekranıyla uğraşmasına gerek yoktur.

Çalışanlar sorduğunda cevap basittir:

- Claude Pro veya Max aboneliğiniz varsa — **Sonnet kullanıyorsunuz demektir. Yeterlidir.**
- Bir görev sırasında Cowork otomatik olarak Haiku'ya düşerse — **merak etmeyin, o alt-görev için doğru seçim.**
- "Opus'a mı geçsem?" diye düşünüyorsanız — **muhtemelen geçmenize gerek yok.**

Bu bilinçli bir tasarımdır. Anthropic, iş kullanıcısının model aritmetiği yapmasını istemiyor. Zamana da aynı felsefeyi uygular: **Çalışana model öğretmeyiz. Çalışana düşünmeyi öğretiriz. Model seçimi arka planda halloluyor.**

Kısacası: **"Hangi modeli kullanmalıyım?" diye soruyorsanız, cevap Sonnet'tir.**

## Ne Zaman Manuel Model Seçmek Gerekir?

Nadir durumlardır. Aşağıdaki işaretler varsa manuel Opus seçimi değerlendirilebilir:

- Bir oturum 30+ dakikadır karmaşık bir görev üzerinde çalışıyor ve Sonnet kararsız kalıyor
- 120+ sayfalık bir belgeyle konuşuyorsunuz ve özet yüzeysel çıkıyor
- Çok katmanlı bir stratejik analiz yapıyorsunuz (örn. 3-yıllık M&A senaryosu)
- Claude'un kendisi "bu görev için Opus daha uygun olabilir" sinyali veriyor

Bu işaretler yoksa Sonnet'ten ayrılmayın.

## Model Fiyatları ve Planlar

Model seçimi doğrudan fiyata bağlıdır, ama iş kullanıcısının plan içinde kalması durumunda **ek ödeme yoktur**. Planların hangi modellere erişim verdiği aşağıdaki gibidir (genel kural):

- **Free plan:** Haiku + sınırlı Sonnet kullanımı
- **Pro plan ($20/ay):** Sonnet'e bol kullanım + sınırlı Opus
- **Max plan:** Opus'a yüksek kullanım + öncelikli erişim
- **Team / Enterprise planları:** Tüm modellere kullanıcı başına erişim + kurumsal özellikler

Plan detayları hızla değişir. Güncel fiyat ve kotaları [Claude Planları](planlar/) sayfasından kontrol edin.

## Özet

Bir iş profesyoneli için Claude modelleri konusu neredeyse kararsız bir sorudur:

1. **Sonnet kullanın.** Varsayılan budur, doğru seçimdir.
2. Sistemin sizin için otomatik seçtiği Haiku alt-görevlerine müdahale etmeyin — iş yapılıyor.
3. Opus'u sadece gerçek istisnai durumlar için saklayın.
4. Hangi modeli kullandığınızla ilgili endişelenmek yerine, **Claude'a nasıl iyi prompt yazacağınızla** ilgilenin. Asıl fark oradadır.

Zamana'nın 12 departmanında üretilmiş binlerce saat iş çıktısı Sonnet ile yapıldı ve profesyonel kalitede. Siz de öyle yapın.

## İlgili Sayfalar

- [Claude Nedir?](claude-nedir/) — Modellerden önce temel kavram
- [Claude Planları](planlar/) — Hangi modellere hangi planla erişim var
- [Claude vs ChatGPT](claude-vs-chatgpt/) — Rakip modellerle karşılaştırma
- [Prompting Temel İlkeleri](../prompting/temel-ilkeler/) — Modelden çok daha önemli: doğru prompt


