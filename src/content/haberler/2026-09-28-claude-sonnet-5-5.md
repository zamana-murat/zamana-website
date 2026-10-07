---
title: "Claude Sonnet 5.5 yüzde 30 daha hızlı"
description: "Sonnet 5.5, Sonnet 5'ten yüzde 30'dan fazla hızlı yazıyor; fiyat aynı, ama aynı iş daha az token harcadığı için maliyet düşebiliyor."
date: "2026-09-28"
source: "https://www.anthropic.com/claude-sonnet-5-5"
sourceTitle: "Introducing Claude Sonnet 5.5"
image: "/images/haberler/sonnet-5-5.jpg"
imageAlt: "Uzay mekiği penceresinden Dünya'nın görüldüğü karede Claude Sonnet 5.5 yazısı"
tags: ["model", "sonnet", "fiyat", "claude-code"]
---

## Kısaca

Anthropic, Claude 5.5 ailesinin ikinci modeli Claude Sonnet 5.5'i duyurdu. Model, Sonnet 5'e göre çıktıyı yüzde 30'dan fazla hızlı üretiyor. Fiyat değişmedi, ancak aynı işi daha az token (modelin okuyup yazdığı metin birimi) harcayarak yaptığı için benzer işlerde maliyet yüzde 30'a kadar düşebiliyor. Ailenin üçüncü üyesi Claude Haiku 5.5 için de "önümüzdeki haftalar" deniyor.

## Sizin için ne değişiyor?

Sonnet, günlük iş modeli olarak düşünülebilir: rapor özetleme, e-posta taslağı, tablo analizi, uzun belgeyi okuyup yorumlama gibi işlerin çoğunu o yapar. Hız artışı en çok beklediğiniz anlarda hissedilir. Örneğin 40 sayfalık bir sözleşmeyi özetletirken ya da bir Excel dosyasından çok adımlı analiz isterken Claude'un yanıt vermesi daha kısa sürer.

Anthropic'in paylaştığı bir bilgi işi testinde Sonnet 5.5, Opus 5.5'e çok yakın bir puan aldı. Duyurudaki müşteri yorumlarından biri, modelin her karmaşıklık düzeyinde Sonnet 5'ten daha iyi karar verdiğini ve belirgin biçimde daha az token harcadığını söylüyor. Bunlar şirketin kendi testleri ve müşteri alıntıları; kendi işinizde denemeden kesin sonuç saymayın.

Geliştiriciler için fiyatlar şöyle: milyon girdi tokenı 2 dolar, milyon çıktı tokenı 10 dolar, önbellekten okuma milyon token başına 0,20 dolar. Yani Sonnet 5'in fiyat listesiyle aynı; tasarruf fiyattan değil, harcanan token'ın azalmasından geliyor.

## Nasıl denersiniz?

1. Claude.ai'de ya da masaüstü uygulamasında yeni bir sohbet açın.
2. Gönder düğmesinin yanındaki model adına tıklayıp Sonnet 5.5'i seçin.
3. Aynı işi (örneğin geçen haftaki bir raporu) eski modelle de çalıştırıp süreyi ve çıktıyı karşılaştırın.

Anthropic'e göre Claude Code ve uygulamalarda varsayılan effort (çaba, modelin ne kadar derin düşüneceği) seviyesi Medium; Claude Platform'da (API) High. Seviyeyi isterseniz değiştirebilirsiniz. Ayrıntı için [Effort Control](/wiki/yetenekler/effort-control/) sayfasına bakın. API'de model kimliği `claude-sonnet-5-5`.

## Bilmeniz gerekenler

- Hangi planlarda sunulduğunu kaynak yazı ayrıntılandırmıyor. Anthropic'in Sonnet ürün sayfasında Claude.ai'de ücretsiz erişim de geçiyor; yine de model listesine kendi hesabınızdan bakmak en kesin yol.
- Siber güvenlik tarafında Opus 5.5'tekine benzer korumalar var: yüksek riskli görevlerde istek Sonnet 5'e yönlendiriliyor. Normal iş kullanımında bunu fark etmeniz beklenmez.
- API'de düşünmeyi (thinking) kapalı çalıştıran geliştiricilerin yeni `between_tools` ayarına geçmesi gerekiyor. Anthropic bunun için bir geçiş rehberi yayımlamış. Bu, yalnızca API ile kendi uygulamasını yazanları ilgilendirir.
- Sonnet 5.5 ile Opus 5.5 ve Fable 5.1 arasındaki fark ve ne zaman hangisi sorusu için [Modeller](/wiki/temeller/modeller/) sayfasına bakabilirsiniz. Token kavramı için [Prompt ve Token](/wiki/temeller/prompt-ve-token/) sayfası var.
- Fiyatlar dolar üzerinden. Türkiye'deki faturalama ve KDV ayrıntısı için [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/) sayfasına göz atın.

*Kaynak: [Introducing Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
