---
title: "Claude Fable 5.2 ve Mythos 5.2 geldi"
description: "Anthropic'in en güçlü model ailesi Fable ve Mythos 5.2'ye yükseldi: daha hızlı, daha ucuz, kodlama ve akıl yürütmede daha iyi."
date: "2026-11-09"
source: "https://www.anthropic.com/claude-fable-and-mythos-5-2"
sourceTitle: "Introducing Claude Fable 5.2 and Claude Mythos 5.2"
image: "/images/haberler/claude-fable-mythos-5-2.jpg"
imageAlt: "Anthropic logosu ve Claude Fable 5.2 ile Mythos 5.2 duyurusunun kapak görseli"
tags: ["model", "fable", "mythos", "fiyat"]
---

## Kısaca

Anthropic, en güçlü model ailesi olan Fable ve Mythos'u 5.2 sürümüne yükseltti. İkisi aynı temel model, fark güvenlik katmanında: Fable'da siber güvenlik ve biyoloji için daha sıkı korumalar var ve herkes kullanabiliyor. Mythos ise yalnızca siber güvenlik ve biyomedikal araştırmada doğrulanmış kuruluşlara açık. Şirket, kodlama, akıl yürütme ve görsel anlama alanlarında iyileşme ve 5.1'e göre yüzde 30'a varan hız artışı bildiriyor.

## Sizin için ne değişiyor?

Günlük ana model değişmiyor. Anthropic çoğu kodlama ve bilgi işi için başlangıç olarak Claude Opus 5.5'i öneriyor. Fable 5.2'yi, zor ve uzun soluklu işlerde (karmaşık bir yazılım geçişi, çok adımlı analiz, derin araştırma) bir üst vites olarak düşünebilirsiniz. Basit işleri ise Sonnet 5.5 ya da Haiku 5.5 ile daha ucuza çözmek mümkün.

Anthropic'in paylaştığı örneklerden biri: erken bir sürüm, canlıdaki bir servisi Python'dan Rust'a taşıyıp servisin açılışını yaklaşık 26 kat hızlandırmış. Şirket, kendi ana kod tabanındaki değişikliklerin yüzde 90'dan fazlasının insan yönlendirmesiyle Claude tarafından yazıldığını da söylüyor. Bunlar şirketin kendi ölçümleri, kendi işinizde sonuç farklı olabilir.

API'de (yazılımların Claude'u çağırma yolu) standart fiyat milyon token başına 8 dolar girdi, 40 dolar çıktı. İsteğe bağlı "hızlı mod" 2,5 kata kadar hızlı üretim sunuyor ve 16 / 80 dolar. Token, modelin metni işlediği küçük parçadır, kabaca bir kelimenin bir kısmı.

## Nasıl denersiniz?

1. Claude'da model seçiciyi açın ve Fable 5.2'yi seçin.
2. Zor bir işte deneyin, ardından aynı işi Opus 5.5 ile karşılaştırın.
3. Geliştiriciyseniz API'de model adı `claude-fable-5-2`. Amazon Web Services, Google Cloud ve Microsoft Azure üzerinde de var.

Fable, Pro ve standart Team koltuklarına dahil değil; bu planlarda kullanım kredisiyle açılıyor. Lansman haftasında (9-16 Kasım) Pro ve standart Team kullanıcıları Fable'ı haftalık limitlerinin en fazla yüzde 50'sine kadar deneyebildi, bu dönem bitti. Max, Ultra ve Team Premium abonelerine ise abonelik süresine göre bir ila üç Fable sıfırlaması verildi; kullanılmayanlar 8 Mart 2027'de siliniyor. Hızlı mod (2,5 kat hızlı) Claude Code'da ve Claude Platform'da var.

## Bilmeniz gerekenler

- Fable 5.2 yüksek riskli siber görevleri ve araştırma düzeyi biyolojiyi engelliyor, bu istekler daha eski modellere yönlendiriliyor. Engellemeler 5.1'e göre yaklaşık yüzde 55 azalmış.
- Mythos 5.2'ye Cyber Verification ve Life Sciences Verification programlarıyla erişiliyor. Enterprise müşterileri, Mythos 5.2 ile çalışan Claude Security'yi kod açığı taramasında kullanabiliyor.
- Anthropic, davranış testlerinde modelin riskli davranış oranının düşük olduğunu bildiriyor. Aynı zamanda modelin "test ediliyorum" şüphesini önceki modellerden daha sık dile getirdiğini, bunun ölçümü zorlaştırdığını belirtiyor.
- Kurumsal tarafta, sıfır veri saklama (ZDR) ile güvenlik izlemesini birleştiren Enterprise Frontier Safeguards 23 Kasım'da [herkese açık betaya geçti](/haberler/2026-11-23-sifir-veri-saklama-enterprise-frontier-safeguards/).
- Türkçe için ayrı bir not yok. Modellerin genel karşılaştırması için [Claude modelleri](/wiki/temeller/modeller/) sayfasına bakın.

*Kaynak: [Introducing Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
