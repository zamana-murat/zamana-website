---
title: "Kullanım Limitleri ve Usage Credits"
description: "Claude'un 5 saatlik kayan pencere ve haftalık limiti nasıl işler, limite takılınca ne yapılır, usage credits nedir, Fable'a hangi planda erişilir."
tags:
  - temeller
  - planlar
  - limit
  - usage-credits
  - fable
lastUpdated: "2026-10-06"
---

Claude'da "limit" sorusu en sık şikayet konusudur: "Dün çalışıyordu, bugün bekle diyor." Bu sayfa limitin nasıl işlediğini, dolunca ne yapacağınızı ve hangi planın kime yettiğini sade bir dille anlatır. Plan fiyatları için [Planlar](/wiki/temeller/planlar/) sayfasına bakın.

<div class="wiki-admonition wiki-admonition--abstract">
  <div class="wiki-admonition__title">Özet</div>
  <div class="wiki-admonition__body" markdown>

Ücretli planlarda iki limit vardır: yaklaşık **5 saatlik kayan oturum penceresi** ve **haftalık limit**. İkisi de dolunca ya beklersiniz, ya planı yükseltirsiniz, ya da **kullanım kredisi** (usage credits) açıp kullandığınız kadar API fiyatıyla ödersiniz. Fable'a erişim plana göre değişir: Max ve Team Premium'da plana dahil, Pro ve Team Standard'da yalnız kredi ile. Agent SDK ve `claude -p` kullanımı da abonelik limitinden düşer.

  </div>
</div>

## Limit Nasıl İşler?

Claude'un limiti "günde şu kadar mesaj" diye sayılmaz. Harcadığınız şey, işlenen metnin miktarıdır (token). Uzun bir PDF yüklemek, uzun bir sohbeti sürdürmek veya Claude'dan uzun çıktı istemek, kısa bir soru sormaktan çok daha fazla limit tüketir. Token kavramı için [Prompt ve Token](/wiki/temeller/prompt-ve-token/) sayfasına bakın.

İki katman vardır:

### 1. Beş saatlik kayan pencere

Bir oturumda ne kadar kullanabileceğinizi belirler. "Kayan" demek, sabit bir saatte (örneğin gece yarısı) sıfırlanmadığı anlamına gelir. Kullandığınız kısım yaklaşık beş saat sonra yeniden açılır. Pratikte bunu şöyle yaşarsınız:

> **Örnek:** Sabah 09:00'da bir sözleşme setini Claude'a okutup özetlettirdiniz, ardından birkaç taslak daha yazdırdınız. 11:30'da "limitinize ulaştınız" uyarısı geldi. Claude yeniden ne zaman açılacağını söyler. Öğle yemeğine çıkıp döndüğünüzde çoğu zaman açılmış olur. Yani bu limit sizi bir gün kilitlemez, bir iki saat bekletir.

### 2. Haftalık limit

Tüm ücretli planlarda ayrıca haftalık bir limit vardır. Beş saatlik pencereyi her seferinde sonuna kadar doldurup hafta içinde çok yoğun çalışan biri, haftalık tavana çarpabilir. Bu durumda hafta sıfırlanana kadar beklersiniz.

Haftalık tavanın tam miktarını Anthropic açıklamaz ve ek sınırlar koyma hakkını saklı tutar. Bu yüzden bu sayfada "haftada şu kadar mesaj" gibi bir sayı bulamazsınız; bulduğunuz sayılar resmî değildir.

Free planda da limit vardır ve dardır. Anthropic Free için günlük sayı yayımlamaz.

### Kalan kullanımı nerede görürsünüz?

claude.ai veya Claude Desktop'ta profil ikonu, **Settings**, **Usage** yolunu izleyin. Orada kullandığınız yüzde ve sıfırlanma zamanı görünür. Limite yaklaşırken Claude sizi uyarır.

## Limite Takılınca Ne Yapılır?

Sırayla düşünün:

1. **Bekleyin.** Beş saatlik pencerede bu en ucuz ve çoğu zaman yeterli çözümdür. Beklerken Claude gerektirmeyen bir işe geçin.
2. **Tüketimi azaltın.** Yeni bir konuya geçerken yeni sohbet açın (uzun geçmiş her mesajda yeniden işlenir). Günlük işte Sonnet 5.5 kullanın; Opus ve Fable'ı yalnız gerçekten gereken işlere ayırın. Çok büyük belgeleri bölüm bölüm yükleyin.
3. **Kullanım kredisi açın.** Beklemek istemiyorsanız kullandıkça öde seçeneğini açabilirsiniz (aşağıda).
4. **Planı yükseltin.** Limite haftada birkaç kez takılıyorsanız sorun alışkanlık değil plandır. Pro'dan Max 5x'e geçmek mantıklıdır.

## Usage Credits (Kullanım Kredisi)

Kullanım kredisi (usage credits), abonelik kotanız bittikten sonra devam etmenizi sağlayan **kullandıkça öde** bakiyesidir. Pro, Max ve Team planlarında açılabilir.

- Kullanım, **API fiyatıyla** (milyon token başına) ücretlendirilir. Abonelik ücretinden ayrıdır.
- Aylık **$50, $250 veya $1.000'lık paketler** (usage bundle) alırsanız sırasıyla **%10, %20 ve %30 indirim** gelir.
- Team'de yönetici **harcama tavanı** koyabilir, böylece fatura sürpriz yapmaz.
- Fiyatlar USD ve vergi hariçtir; TL karşılığı için [Claude Planları](/wiki/temeller/planlar/) sayfasına bakın. Türkiye'deki şirket faturası için [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/) sayfasına bakın.

> **Örnek:** Pro kullanıcısı Ayşe Hanım, ay sonu kapanışında iki gün üst üste haftalık limitine takıldı. Bir hafta beklemek yerine krediyi açtı ve kalan işi API fiyatıyla yaptırdı. Bu iki gün için ödediği tutar, planı Max 5x'e yükseltmenin farkından az ya da çok olabilir. Kredi ara sıra olan zirve için iyidir, her hafta tekrarlıyorsa Max daha ucuza gelir.

Kredi, istediğiniz zaman açıp kapatabileceğiniz bir güvenlik ağıdır. Ek ödeme istemiyorsanız açmayın, limit dolunca bekleyin.

## Fable Hangi Planda?

Fable 5.1 en güçlü genel modeldir. Plana göre erişimi farklıdır:

| Plan | Fable 5.1 erişimi |
|---|---|
| Free | Yok |
| Pro | Plana dahil değil, yalnız kullanım kredisi ile (API fiyatı: $10 girdi / $50 çıktı, milyon token başına) |
| Max 5x / Max 20x | Plana dahil, haftalık limitin **en fazla %50'sine kadar** Fable kullanılabilir |
| Team Standard koltuk | Plana dahil değil, yalnız kullanım kredisi ile |
| Team Premium koltuk | Plana dahil, haftalık limitin en fazla %50'sine kadar |
| Enterprise (kullanım bazlı) | Standart API fiyatıyla faturalanır |

"Haftalık limitin %50'si" şu demek: Fable'a haftalık limitinizin en fazla yarısını harcayabilirsiniz, kalanı diğer modellere kalır. Fable en pahalı modeldir; günlük iş için değil, gerçekten zor işler için ayırın. Hangi modeli ne zaman seçeceğiniz için [Modeller](/wiki/temeller/modeller/) sayfasına bakın.

## Hangi Plan Kime?

| Plan | Aylık | Limit karakteri | Kime uygun |
|---|---|---|---|
| **Free** | $0 | Dar, sayı açıklanmaz | Denemek için |
| **Pro** | $20 | Temel limit | Günde 1-3 saat steady-state kullanım |
| **Max 5x** | $100 | Pro'nun 5 katı | Yeni başlayan ilk ay, günde birkaç saat çalışan, Fable'ı da kullanmak isteyen |
| **Max 20x** | $200 | Pro'nun 20 katı | Gün boyu yoğun, çoklu iş akışı yürüten |
| **Team Standard** | $25 koltuk (yıllıkta $20) | Pro'nun oturum başına kullanımının 1,25 katı | Merkezi fatura ve paylaşım isteyen ekip |
| **Team Premium** | $125 koltuk (yıllıkta $100) | Pro'nun oturum başına kullanımının 6,25 katı | Ekibin yoğun kullanıcıları, Fable ihtiyacı |
| **Enterprise** | $20 koltuk + kullanım API fiyatıyla | Kullanım bazlı, kota değil fatura | Uyum ve denetim gereken büyük kuruluş |

Team'de koltuk tipleri karıştırılabilir (örneğin yoğun kullanan 2 kişiye Premium, kalanlara Standard). Enterprise'ta koltuk ücreti kullanımı içermez; sohbet, Claude Code ve Cowork'teki her token API fiyatıyla ayrıca faturalanır, yani "limite takılmazsınız ama fatura büyür."

### Zamana'nın önerisi: ilk ay Max 5x

Zamana, yeni başlayanlara **ilk ay Max 5x** önerir (zorunlu değil, Pro ile başlayıp yükseltmek de olur). Neden limittir: yeni kullanıcı ilk ayda uzun belgeler yükler, connector kurar, skill dener, saatlerce çalışır. Pro'nun 5 saatlik penceresi bu tempoda hızla dolar ve kişi "Claude çalışmıyor" diye vazgeçer. Max 5x bu sürtünmeyi kaldırır, Fable'ı da plana dahil sunar. İkinci aydan itibaren gerçek kullanımınıza bakıp Pro'ya inebilir veya Max'te kalabilirsiniz. Ayrıntı: [Planlar](/wiki/temeller/planlar/).

## Programatik Kullanım Abonelikten Düşer

Claude'u sohbet arayüzü yerine kodla çağırdığınızda (Agent SDK, `claude -p` komutu, üçüncü taraf uygulamalar), bu kullanım da **aboneliğinizin limitinden düşer**. Anthropic bu kullanım için ayrı bir "programatik kredi havuzu" planlamıştı; bu plan **askıya alındı**, yani hâlâ ortak kotayı yersiniz.

Ne anlama gelir:

- Sohbet ve Cowork'ü elle kullanan bir iş profesyoneli için hiçbir şey değişmez.
- Otomasyon kuran, her gece betik çalıştıran veya ajan koşturan biri, kotasının sandığından hızlı bittiğini görebilir. Bu kullanımı da hesaba katın, gerekirse kullanım kredisi veya API anahtarı düşünün.
- Claude Code da aynı kotadan beslenir; kota bitince kullanım kredisi veya API anahtarı devreye girer.

## Sık Sorulan Sorular

**Limit her gün sıfırlanır mı?**
Hayır. Beş saatlik pencere kayan bir penceredir, haftalık limit ise ayrı bir sayaçtır.

**Haftalık limit kaç mesaj?**
Anthropic sayı vermez. İnternette dolaşan rakamlar resmî değildir, kendi kullanım ekranınıza güvenin.

**Max 20x, 5x'in tam 4 katı mı?**
Plan "Pro'nun 20 katı" olarak tanımlanır. Haftalık tavan miktarları yayımlanmadığı için kesin bir oran vaat edilemez.

**Uzun sohbet neden limiti hızlı bitirir?**
Her yeni mesajda önceki geçmiş de yeniden işlenir. Konu değişince yeni sohbet açmak ucuzlatır.

**Kullanım kredisi açık kalırsa kontrolsüz mü harcarım?**
Team'de yönetici harcama tavanı koyar. Bireysel planlarda krediyi yalnız ihtiyaç anında açmanız ve ayarlardan kapalı tutmanız en güvenlisidir.

## İlgili Sayfalar

- [Claude Planları](/wiki/temeller/planlar/): Fiyatlar ve plan özellikleri
- [Prompt ve Token](/wiki/temeller/prompt-ve-token/): Token ve kullanım limiti ilişkisi
- [Modeller](/wiki/temeller/modeller/): Hangi model ne zaman
- [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/): Türkiye'de muhasebe
- [Takım ve Admin](/wiki/temeller/takim-ve-admin/): Harcama tavanı ve Team yönetimi
- [Sık Sorulan Sorular](/wiki/temeller/sss/)
