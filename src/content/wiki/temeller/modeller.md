---
title: Claude Modelleri, Güncel Kılavuz
seoTitle: "Claude Modelleri: Opus mu Sonnet mi? Effort Nedir?"
description: "Opus 5.5 mi Sonnet 5.5 mi? Claude'un dört modeli Fable, Opus, Sonnet ve Haiku arasındaki farklar, effort (çaba) nedir, plan erişimi ve bağlam penceresi."
tags:
  - temeller
  - modeller
  - fable
  - sonnet
  - opus
  - haiku
lastUpdated: "2026-10-06"
---

**Kısa cevap, Opus mu Sonnet mi:** Günlük iş için **Sonnet 5.5**. Sonnet'in yetmediği uzun, zor ve çok adımlı işler için **Opus 5.5**. Fable 5.1 yalnız ikisiyle de olmayan çok zor işlerde, Haiku 4.5 hızlı ve hafif işlerde.

| İş | Model |
|---|---|
| E-posta, rapor özeti, sözleşme taslağı, sunum metni | **Sonnet 5.5** |
| Büyük belge seti, uzun otonom görev, kritik metin | **Opus 5.5** |
| Sonnet ve Opus'un yetmediği, çok uzun ufuklu iş | **Fable 5.1** |
| Sınıflandırma, kısa çeviri, yüksek hacimli basit iş | **Haiku 4.5** |

> **Bu sayfa ile Claude bölümündeki sayfanın farkı:** Burada iş kullanıcısı için seçim kuralı, plan erişimi, bağlam penceresi ve effort ayrıntısı var. Modelleri ürün olarak tanıtan kısa özet için [Claude bölümündeki Modeller sayfasına](/claude/modeller/) bakın.

## Model Nedir?

"Model" bir yapay zekanın **beynidir**. Anthropic, OpenAI veya Google gibi şirketler büyük metin koleksiyonlarıyla bir sinir ağını eğitir; ortaya çıkan sistem **bir model**'dir. Claude ile her sohbet ettiğinizde aslında bir modelle konuşursunuz.

Aynı şirket farklı amaçlar için **farklı modeller** üretir. Bunlar üç eksende farklılaşır:

- **Hız:** soruya ne kadar çabuk cevap üretir
- **Zekâ:** ne kadar karmaşık akıl yürütme yapabilir, ne kadar nüans yakalar
- **Maliyet:** kullanım kotasını ne kadar tüketir (dolayısıyla aboneliğinizin sınırlarını ne kadar zorlar)

Bu üç eksen birbirine **bağlıdır**. Daha zeki bir model genellikle daha yavaş ve daha pahalıdır. Bu nedenle Anthropic her ihtiyaç tipi için ayrı bir model çıkarır: hızlı ve ucuz, dengeli, en güçlü.

## Güncel Aile: Dört Model

Bu sayfa **5 Ekim 2026** itibarıyla doğrulanmış bilgiyle yazıldı. Claude.ai ve API'de güncel aile dört modelden oluşur:

| Model | Ne için | Bağlam penceresi | Maks. çıktı | API fiyatı (girdi / çıktı, 1 milyon token) |
|---|---|---|---|---|
| **Claude Fable 5.1** | En güçlü genel model. Uzun süren, çok adımlı ajan işleri | 1M token | 128K | $10 / $50 |
| **Claude Opus 5.5** | Ağır ve zor işler. Fable 5.1 düzeyinde performans, Opus 5'ten yaklaşık %40 ucuz | 1M token | 128K | $4 / $20 |
| **Claude Sonnet 5.5** ⭐ | Günlük iş için hız ve zekâ dengesi. Sonnet 5'ten yaklaşık %30 hızlı | 1M token | 128K | $2 / $10 |
| **Claude Haiku 4.5** | En hızlı, hafif ve yüksek hacimli işler | 200K token | 64K | $1 / $5 |

![Claude model ailesinin göreli konumu: Haiku 4.5 en hızlı ve en ucuz, Sonnet 5.5 günlük iş, Opus 5.5 ağır işler, Fable 5.1 en güçlü ve en pahalı; yetenek arttıkça hız düşer](/images/wiki/temeller-modeller.svg)

API fiyatları abonelik kullanıcısını doğrudan ilgilendirmez; plan içinde kaldığınız sürece ek ödeme yoktur. Yine de modeller arasındaki maliyet oranını gösterdikleri için tabloda yer alır: Fable, Sonnet'in yaklaşık beş katı pahalıdır.

Çıkış tarihleri: Fable 5.1 (1 Eylül 2026), Opus 5.5 (22 Eylül 2026, [haber](/haberler/2026-09-24-claude-opus-5-5/)), Sonnet 5.5 (28 Eylül 2026), Haiku 4.5 (Ekim 2025).

**Bilgi kesimi:** Fable 5.1, Opus 5.5 ve Sonnet 5.5'in güvenilir bilgi kesimi **Haziran 2026**'dır. Haiku 4.5'te güvenilir bilgi kesimi Şubat 2025'tir (eğitim verisi kesimi Temmuz 2025). Bu tarihten sonraki gelişmeleri Claude kendiliğinden bilmez; güncel bilgi için web aramasını açın veya belgeyi kendiniz verin.

**Mythos 5.1:** Fable 5.1 ile aynı yetenekte bir modeldir, ancak yalnızca Project Glasswing katılımcılarına davetle açıktır. Genel kullanıma açık değildir; bu sayfadaki hiçbir plan veya seçici onu içermez.

## Zamana'nın Çizgisi: Günlük İş İçin Sonnet

Dört modelin olması, her çalışanın dört model arasında seçim yapması gerektiği anlamına gelmez. Zamana'nın önerisi değişmedi:

> **Günlük iş için Sonnet. Ağır işler için Opus. Gerisi istisnadır.**

Gerekçe pratiktir. Sonnet 5.5 bir iş profesyonelinin haftalık işinin neredeyse tamamını karşılar: sözleşme taslağı, rapor özeti, e-posta, sunum metni, tablo yorumu. Hızlıdır, kotanızı yavaş tüketir ve 1M token bağlam penceresi vardır. Anthropic'in kendi Academy rehberi de emin değilseniz Sonnet'i önerir.

**Pratik kural:** "Sonnet'le başla, sebep çıkana kadar geçme." Sonuç yetersiz kaldığında sebep çoğu zaman prompt zayıflığıdır, model değil. İyi prompt ile Sonnet, kötü prompt ile Opus'tan genellikle daha iyi sonuç verir.

## Her Model Ne Zaman?

### Claude Haiku 4.5: En Hızlı

Haiku, ailenin en küçüğü ve en hızlısıdır. Basit ama sık tekrar eden görevlerde parlar:

- Kısa çeviriler
- Tek cümlelik özetler
- Sınıflandırma ("bu e-posta şikayet mi, soru mu?")
- Yüksek hacimli veri temizliği
- Otomasyon zincirlerinde aracı adımlar

**Sınırı:** Karmaşık yazım, uzun belge analizi ve stratejik akıl yürütme için seçilmez. Bağlam penceresi de diğerlerinin beşte biridir (200K). Çalışanın günlük işinde doğrudan Haiku seçmesi nadiren doğru karardır; Haiku genellikle skill ve plugin içinde alt görevlerde çalışır.

**Model kimliği:** `claude-haiku-4-5-20251001`. Not: API'de en erken 15 Ekim 2026'da emekliye ayrılabilir. Henüz resmi bir emeklilik duyurusu yoktur; API üzerinden kullanıyorsanız duyuruyu izleyin.

### Claude Sonnet 5.5: Günlük İş Modeli ⭐

Sonnet, bir iş profesyonelinin her gün kullanması gereken modeldir. İş açısından yapabilecekleri:

- Sözleşme taslağı yazmak (hukuki dil, tutarlı yapı)
- Uzun raporları okuyup yöneticiye uygun özet çıkarmak
- Finansal raporların anlatımını yazmak (rakamlar sizden, anlatım Claude'dan)
- Pazarlama içeriği üretmek, marka sesine göre kalibre edilmiş
- İş akışları yönetmek: belge oku, rapor yaz, Slack'te paylaş
- 12 departmanın tamamında profesyonel kalitede çıktı

**Model kimliği:** `claude-sonnet-5-5`

### Claude Opus 5.5: Ağır İşler İçin

Opus 5.5, Fable 5.1 düzeyinde performansı daha düşük maliyetle sunar. Sonnet'in yetersiz kaldığı işler için ayrılmıştır:

- **Uzun, otonom görevler.** Çok sayıda araç çağrısı ve karmaşık planlama gerektiren işler.
- **Çok büyük belge setleri.** Bir yasa paketi, dev bir due diligence dosyası, bir yıllık toplu rapor.
- **Çok katmanlı stratejik analiz.** Örneğin üç yıllık bir birleşme-satın alma senaryosu.
- **Kritik metinler.** Yatırımcı mektubu, kurul sunumunun açılışı; Sonnet'in çıktısının gerçekten yetmediği durumlarda.

Anthropic, Opus 5.5'i çoğu iş için güçlü bir başlangıç noktası olarak konumlandırıyor. Zamana'nın önerisi ise maliyet ve hız dengesi nedeniyle günlük işte Sonnet, ağır işte Opus yönündedir. Opus yaklaşık iki kat pahalıdır ve kotanızı daha hızlı tüketir; bu yüzden "her işte Opus" yerine "Sonnet yetmediğinde Opus" demek daha doğrudur.

### Claude Fable 5.1: En Güçlü Model

Fable 5.1, ailenin en yetenekli genel modelidir ve uzun ufuklu ajan işleri için konumlandırılmıştır: çok adımlı, kendi başına ilerleyen görevler. Mythos sınıfı bir modeldir.

Çoğu iş kullanıcısı için gerekmez. Sonnet veya Opus ile başarısız olmuş, gerçekten zor ve uzun bir iş varsa değerlendirin. Fable'ın maliyeti de en yüksektir ($10 / $50) ve plana göre erişimi farklıdır (aşağıya bakın).

## Plana Göre Model Erişimi

claude.ai model seçicisinde:

- **Free:** Haiku ve Sonnet. Fable yok.
- **Pro ve üstü:** Opus ve Fable de seçicide görünür.

Fable'ın plana göre durumu ayrıca önemlidir:

| Plan | Fable 5.1 erişimi |
|---|---|
| Free | Yok |
| Pro | Plana dahil değil. Yalnızca **kullanım kredisi** (usage credits) ile ($10 / $50 API fiyatından) |
| Max 5x / Max 20x | Plana dahil. Haftalık limitin **en fazla %50'sine** kadar Fable kullanılabilir |
| Team Standard koltuk | Plana dahil değil. Yalnızca kullanım kredisi ile |
| Team Premium koltuk | Plana dahil. Haftalık limitin en fazla %50'sine kadar |
| Enterprise (kullanım bazlı) | Standart API fiyatıyla faturalanır |

Eski koltuk bazlı Enterprise sözleşmelerinde standart koltuk Pro gibi (yalnızca kullanım kredisi), premium koltuk Max gibi (plana dahil, %50 sınırıyla) davranır.

> **Zamana notu:** Yeni başlayanlara ilk ay Max 5x öneriyoruz (zorunlu değil, Pro ile başlayıp yükseltmek de olur). Fable'ın Max'te plana dahil, Pro'da ise yalnızca kullanım kredisiyle gelmesi, ilk ayda üst modelleri de denemek isteyenler için ayrıca bir artıdır.

**Varsayılan model:** Hangi planda hangi modelin varsayılan geldiği resmi kaynaklarda net yazmaz ve arayüz değişebilir. Model seçicide neyin seçili olduğuna bakın, değiştirmek isterseniz oradan seçin.

Plan fiyatları ve kota ayrıntıları için [Claude Planları](/wiki/temeller/planlar/) sayfasına bakın.

## Bağlam Penceresi

Yeni modellerde (Fable 5.1, Opus 5.5, Sonnet 5.5) sohbet bağlam penceresi **1 milyon token**'dır. Bağlam penceresi **plana değil modele bağlıdır**: aynı model ücretli planlarda aynı pencereyi kullanır (Free için resmi bir değer yayımlanmıyor). Bir önceki kuşakta (Fable 5, Opus 5, Sonnet 5) 500K, daha eski modellerde 200K idi. Haiku 4.5 hâlâ 200K'dır.

Pratik anlamı: yüzlerce sayfalık bir belge setini tek oturumda yükleyip tartışabilirsiniz. Çok uzun oturumlarda yine de bağlam dolar; bunu yönetmek için [Context Compaction](/wiki/yetenekler/context-compaction/) sayfasına bakın.

## Eski (Legacy) Modeller

Önceki kuşaklar hâlâ kullanılabilir durumdadır ama artık **legacy** sayılır: Fable 5, Opus 5, Opus 4.8, 4.7, 4.6, 4.5, Sonnet 5 ve Sonnet 4.6. Sohbette özel bir nedeniniz yoksa güncel dört modeli kullanın.

Sonnet 4.5 API'de **deprecated** durumdadır ve **30 Kasım 2026**'da emekliye ayrılacaktır. Bu modele bağlı bir otomasyonunuz varsa güncel bir modele geçirin.

Wiki'deki eski örneklerde "Sonnet 4.6" veya "Opus 4.8" gibi adlar görürseniz bunlar önceki kuşaktır; yönergeler güncel modeller için de büyük oranda geçerlidir, ayrıntılar değişmiş olabilir.

## İş Kullanıcısı Model Seçmek Zorunda mı?

**Çoğu zaman hayır.**

- Sonnet ile çalışıyorsanız ve sonuç iyiyse, devam edin.
- Bir görev sırasında sistem alt görevler için Haiku kullanıyorsa müdahale etmeyin; o alt görev için uygun seçimdir.
- "Opus'a mı geçsem?" diye düşünüyorsanız, önce promptunuzu netleştirin. Hâlâ yetersizse geçin.

Manuel Opus seçimini değerlendirmek için işaretler:

- Bir oturum 30 dakikadan uzun süredir karmaşık bir görevde ilerliyor ve Sonnet kararsız kalıyor
- Çok uzun bir belgeyle çalışıyorsunuz ve özet yüzeysel çıkıyor
- Çok katmanlı bir stratejik analiz yapıyorsunuz
- Claude'un kendisi "bu görev için daha güçlü bir model uygun olabilir" sinyali veriyor

Bu işaretler yoksa Sonnet'ten ayrılmayın.

Ekip düzeyinde asıl risk, herkesin kendi kafasına göre model seçmesi ve gereksiz yere pahalı olanı kullanıp kotayı erkenden bitirmesidir. Bu kuralları bir kez birlikte oturtmak istiyorsanız [ekibinize Claude eğitimi](/programlar/kurumsal/) vermenin işe yaradığı yerlerden biri tam burasıdır.

## Effort Nedir? (Çaba Seviyesi)

**Effort**, Claude'un bir cevaba ulaşmadan önce ne kadar derin düşüneceğini belirleyen ayardır. Yüksek effort daha uzun düşünür, daha çok ara adım atar ve daha çok kota tüketir; düşük effort hızlıdır ama karmaşık işte yüzeysel kalabilir. Model seçimi "hangi beyin", effort seçimi "o beyin ne kadar uğraşsın" sorusudur.

Çoğu iş profesyoneli için kural basit: **varsayılanı bırakın**. Yalnız basit ve çok sayıda işte hız için düşürün, kritik bir çıktıda ve süre önemli değilse yükseltin. Görev başına nasıl ayarlanacağı, ne zaman yüksek ne zaman düşük kullanılacağı: [Effort Control](/wiki/yetenekler/effort-control/).

Varsayılan modele ve yüzeye göre değişir: API'de Fable 5.1 ve Sonnet 5.5 `high`, Opus 5.5 `medium`; Claude Code'da Fable 5.1 `high`, Opus 5.5 ve Sonnet 5.5 `medium`. Haiku 4.5 effort ayarını desteklemez.

## Yeni Model Çıkınca

Yeni bir Claude sürümü eski sürümün "yaması" değildir. Davranış inceden değişebilir: eskiden işe yarayan bir prompt yenide farklı sonuç verebilir. Kritik iş akışlarınızı yeni sürüm çıkınca **yeniden test edin**, "nasılsa daha iyisi" diye körü körüne güvenmeyin.

## Özet

1. **Günlük iş için Sonnet 5.5.** Varsayılan budur.
2. **Ağır işler için Opus 5.5.** Sonnet yetmediğinde.
3. **Fable 5.1** yalnızca gerçekten zor, uzun ufuklu işler için; Pro'da kullanım kredisi gerektirir.
4. **Haiku 4.5** hızlı ve hafif işler için, çoğunlukla arka planda.
5. Mythos 5.1 yalnızca davetle; genel kullanıcı için pratik karşılığı yok.
6. Modelden çok **prompt yazımına** yatırım yapın. Asıl fark oradadır.

## İlgili Sayfalar

- [Claude Nedir?](/wiki/temeller/claude-nedir/): Modellerden önce temel kavram
- [Claude Modelleri (Claude bölümü)](/claude/modeller/): Modellerin ürün olarak kısa tanıtımı
- [Effort Control](/wiki/yetenekler/effort-control/): Çaba seviyesini görev başına ayarlamak
- [Claude Planları](/wiki/temeller/planlar/): Hangi modele hangi planla erişim var
- [Claude vs ChatGPT](/wiki/temeller/claude-vs-chatgpt/): Rakip modellerle karşılaştırma
- [Anthropic ve Tarihçe](/wiki/temeller/anthropic-ve-tarihce/): Model sürümlerinin zaman çizelgesi
- [Prompting Temel İlkeleri](/wiki/prompting/temel-ilkeler/): Modelden çok daha önemli, doğru prompt
