---
title: "Claude Modelleri: Hangisini Ne Zaman Kullanmalı?"
seoTitle: "Claude Modelleri: Mythos, Fable, Opus, Sonnet"
description: "Claude'un beş model ailesi Mythos, Fable, Opus, Sonnet ve Haiku iş kullanıcısı gözüyle: hangisi ne işe yarar, hangi planda açık, hangisini seçmeli."
eyebrow: "Model"
lead: "Claude tek bir model değil, hız ve derinlik dengesi farklı beş aile. Çoğu iş için doğru seçim Sonnet, ağır işler için Opus; geri kalanı ne zaman gerektiğini bu sayfada bulursunuz."
heroAlt: "Claude model ailesi: Mythos, Fable, Opus, Sonnet ve Haiku"
availability: "Haiku ve Sonnet Free dahil tüm planlarda. Opus ve Fable ücretli planlarda; Fable Pro ve Team Standard'da kullanım kredisiyle, Max ve Team Premium'da planın içinde. Mythos yalnız davetle."
sourceUrl: "https://www.anthropic.com/claude/opus"
sourceTitle: "Claude Opus, Sonnet, Haiku, Fable ve Mythos model sayfaları (anthropic.com/claude)"
related:
  - { label: "Claude Modelleri, Güncel Kılavuz (wiki)", href: "/wiki/temeller/modeller/" }
  - { label: "Planlar (wiki)", href: "/wiki/temeller/planlar/" }
  - { label: "Kullanım Limitleri (wiki)", href: "/wiki/temeller/kullanim-limitleri/" }
  - { label: "Effort Kontrolü (wiki)", href: "/wiki/yetenekler/effort-control/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
order: 60
lastUpdated: "2026-10-06"
---

## Nedir?

Claude ile her sohbet ettiğinizde bir **model** konuşur. Anthropic bunları aileler hâlinde sunar ve her ailenin dengesi farklıdır: bazısı çok hızlı ve ucuz, bazısı daha derin düşünür ama daha yavaş ve pahalıdır. Güncel tablo şöyle:

| Aile | Güncel sürüm | Bağlam penceresi | Kısaca |
|---|---|---|---|
| Mythos | 5.1 | 1M | En yetenekli, yalnız davetle |
| Fable | 5.1 | 1M | En güçlü genel model, uzun ve zor işler |
| Opus | 5.5 | 1M | Ağır iş ve ajanlar |
| Sonnet | 5.5 | 1M | Hız ve zekâ dengesi, günlük model |
| Haiku | 4.5 | 200K | En hızlı, hafif işler |

Bağlam penceresi, Claude'un bir konuşmada aynı anda "aklında tutabildiği" metin miktarıdır; sayı büyüdükçe uzun belgeler ve uzun yazışmalar tek konuşmaya sığar (1M, 1 milyon token demektir).

**Zamana çizgisi:** günlük iş için Sonnet, ağır işler için Opus. Fable ve Mythos çoğu iş kullanıcısının gündelik ihtiyacının ötesindedir. Aşağıda her birini, sırasıyla, kısaca tanıyın.

<a id="mythos"></a>

## Mythos

Mythos 5.1, Anthropic'in en yetenekli modelidir ve **genel kullanıma açık değildir.** Siber güvenlik ve biyoloji araştırmasında çok güçlü olduğu için yalnızca güvenilir erişim programlarıyla doğrulanmış kuruluşlara veriliyor. Anthropic'e göre erişim şu an yalnızca bir grup ABD kuruluşu için mümkün; genişletmeye çalıştıklarını söylüyor.

Mythos 5.1 ile Fable 5.1 aynı temel modeldir. Fark, Fable'ın siber güvenlik ve biyolojide risk taşıyan işleri sınırlayan güvenlik katmanlarıyla gelmesidir. Mythos kullanmak varsayılan olarak 30 günlük veri saklamayı kabul etmeyi gerektirir. Claude Security ürünü Mythos 5.1 üzerinde çalışır ([Claude Security](/claude/security/)).

**Türk bir şirket için:** Mythos'u seçeneğiniz olarak düşünmeyin. Siber savunma yapan bir güvenlik ekibi Anthropic'in doğrulama programına başvurabilir, kabul garantisi yok.

<a id="fable"></a>

## Fable

Fable 5.1, **genel kullanıma açık en güçlü modeldir.** Saatler hatta günler süren, çok adımlı ve zor işler için tasarlanmıştır: derin araştırma ve analiz, büyük kod projeleri, birden çok uygulamaya yayılan görevler. Belgelerin ve PDF'lerin içindeki tabloları, grafikleri ve diyagramları da okur. Bir adım başarısız olduğunda toparlanır ve çalışırken sizi bilgilendirir.

**Plana göre erişim farklıdır:**

- Free: yok.
- Pro ve Team Standard koltuk: plana dahil değil, **kullanım kredisi (usage credits)** ile açılır.
- Max ve Team Premium koltuk: plana dahil; haftalık limitinizin en fazla %50'sine kadar Fable kullanabilirsiniz.

**Dikkat edilecekler:**

- Siber güvenlik ve biyoloji konularındaki bazı sorular otomatik olarak Opus modellerine yönlendirilir. Yönlendirilen istekler Fable fiyatıyla ücretlendirilmez.
- Fable'ı kullanmak varsayılan olarak 30 günlük veri saklamayı gerektirir (güvenlik izlemesi için). Kişisel veri ya da gizli iş verisi işleyecekseniz [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasına ve şirket politikanıza bakın.
-

<a id="opus"></a>

## Opus

Opus 5.5, çoğu işte Fable 5.1 düzeyinde çalışır ve Opus 5'e göre yaklaşık %40 daha ucuza gelir (Anthropic'in tipik iş yükü tahmini). Uzun süren ajan işleri, ileri kodlama, finansal analiz, yoğun belgeleri ve grafikleri okuma, bilgisayar kullanımı ve **hazır kullanılabilir tablo, sunum ve belge üretimi** onun güçlü olduğu yerlerdir. Anthropic, Opus 5.5'in yanıtlarının daha net olduğunu, önemli olandan başladığını ve yazım kurallarınıza uyduğunu söylüyor.

**Ne zaman:** Bir yönetim raporunun tamamını hazırlatıyorsanız, çok kaynaklı bir araştırmayı bitirmesini istiyorsanız, karmaşık bir sözleşme ya da finansal modeli didikleyecekseniz Opus'a geçin. Pro, Max, Team ve Enterprise'ta kullanılabilir; Free'de yok. Plana göre varsayılan modelin hangisi olduğunu resmi kaynaktan doğrulayamadık; model seçiciden kendiniz seçin.

Not: Anthropic, Opus 5.5'i hem kodlama hem bilgi işi için "günlük çalışma atı" olarak öneriyor. Zamana'nın çizgisi, günlük işte Sonnet ile başlayıp işin gerektirdiği yerde Opus'a çıkmaktır.

<a id="sonnet"></a>

## Sonnet

Sonnet 5.5, Opus'un daha hızlı ve daha ucuz tamamlayıcısıdır; **iyi tanımlanmış gündelik işler** için tasarlanmıştır: yazışma ve rapor taslakları, analiz, belge ve slayt hazırlama, sınırlı kapsamlı araştırma, inceleme. Anthropic'e göre Sonnet 5'ten %30 hızlıdır ve çoğu iş için %30'a kadar daha ucuzdur. Yazısı daha net ve doğrudandır, bu yüzden taslaklar daha az temizlik ister. Şablonu verirseniz o şablona uygun slaytlar kurar.

Free dahil herkes Sonnet 5.5 ile claude.ai'de (web, iOS, Android) sohbet edebilir. Günlük işin büyük kısmı için başlangıç noktası budur. Sonuç zayıf ya da yüzeysel kalırsa aynı işi Opus ile deneyin.

<a id="haiku"></a>

## Haiku

Haiku 4.5, ailenin **en hızlı ve en hafif** modelidir (Ekim 2025). Bağlam penceresi 200K, yani öbürlerinden küçüktür. Hız kritik olan, hacmin yüksek olduğu işlerde öne çıkar: canlı müşteri sohbetleri, çok sayıda kaydı tek tek sınıflandırma, alt ajanlar. Free planda da kullanılabilir.

**Ne zaman:** Basit bir soru, kısa çeviri ya da hızlı bir özet için yeter. Derin analiz, uzun belge ya da hata kaldırmayan bir iş için Sonnet ya da Opus tercih edin. Not: API'de Haiku 4.5'in en erken 15 Ekim 2026'da emekliye ayrılabileceği belirtiliyor; henüz resmi bir duyuru yok.

## Hangi planda, nelere dikkat?

**Hangisini seçmeli?**

| İş | Seçim |
|---|---|
| E-posta, rapor taslağı, özet, sunum, analiz | Sonnet |
| Uzun ve çok kaynaklı araştırma, karmaşık model, sözleşme incelemesi | Opus |
| Günler süren, çok adımlı, en zor işler (planınız izin veriyorsa) | Fable |
| Çok hızlı, basit ve yüksek hacimli işler | Haiku |
| Siber güvenlik ya da biyoloji araştırması | Mythos (davetle) |

**Plan.** Free'de Haiku ve Sonnet; Pro ve üstünde Opus ve Fable de model seçicide görünür. Fable için yukarıdaki kullanım kredisi kuralı geçerlidir. Bağlam penceresi plana göre değişmez: yeni modellerde (Fable 5.1, Opus 5.5, Sonnet 5.5) 1M, Haiku'da 200K.

**Limit.** Kullanım limitiniz planınıza bağlıdır; Fable gibi modeller için ayrıca kredi ya da haftalık pay kuralı vardır. Ayrıntı için [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/) sayfasına bakın.

**API fiyatları** (geliştirici kullanımı, milyon token başına girdi / çıktı): Fable 5.1 $10 / $50, Opus 5.5 $4 / $20, Sonnet 5.5 $2 / $10, Haiku 4.5 $1 / $5. Abonelik (Pro, Max) fiyatlarından ayrıdır. Ödeme USD ile yapılır; Türkiye'de Anthropic ofisi ya da temsilcisi yoktur ([Türkiye'de Claude](/wiki/temeller/turkiyede-claude/)).

Hangi modelin hangi işte işinize yaradığını ekibinizle birlikte denemek isterseniz [Zamana programlarına](/programlar/) bakabilirsiniz.
