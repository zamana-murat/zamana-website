---
title: "Claude Haiku 5.5: hızlı ve ucuz model geldi"
seoTitle: "Claude Haiku 5.5 geldi"
description: "Haiku 5.5, yüksek hacimli işler için en ucuz ve en hızlı Claude modeli; şimdilik Claude Platform ve bulut sağlayıcılarında."
date: "2026-10-07"
source: "https://www.anthropic.com/claude-haiku-5-5"
sourceTitle: "Introducing Claude Haiku 5.5"
image: "/images/haberler/claude-haiku-5-5.jpg"
imageAlt: "Anthropic'in Claude Haiku 5.5 duyuru görseli"
tags: ["model", "haiku", "api", "fiyat"]
---

## Kısaca

Anthropic, küçük model ailesinin yeni üyesi Claude Haiku 5.5'i duyurdu. Şirket onu bugüne kadarki en ucuz, en hızlı ve en yetenekli küçük modeli olarak tanıtıyor. Model Claude Platform'da (geliştiricilerin Claude'u kendi yazılımlarına bağladığı API hizmeti) ve Amazon Web Services, Google Cloud, Microsoft Azure üzerinde kullanıma açıldı. Duyuru sayfası, Claude.ai uygulamalarında sunulup sunulmadığını belirtmiyor.

## Sizin için ne değişiyor?

Günlük sohbette modeli büyük ihtimalle kendiniz seçmiyorsunuz, bu yüzden doğrudan bir fark görmeyebilirsiniz. Asıl etki, şirketinizin Claude'u arka planda çalıştıran araçlarında ortaya çıkar: müşteri destek botları, e-posta sınıflandırma, özet çıkarma, veritabanı sorguları gibi çok sayıda küçük işin bir arada koştuğu yerler.

Fiyat farkı belirgin. Bir milyon token (kabaca 750 bin kelime) başına giriş 0,10 dolar, çıkış 0,50 dolardan başlıyor (100 bin token'a kadar olan istemler için). Eski Haiku 4.5'te bu rakamlar 1 ve 5 dolardı. Anthropic ortalamada yüzde 75 tasarruf bildiriyor. Yeni sürümün tokenizer'ı (metni parçalara bölen bileşen) aynı iş için biraz daha fazla token harcıyor, yani gerçek tasarruf iş yüküne göre değişir.

Örnek: günde binlerce müşteri mesajını konulara ayıran bir e-ticaret ekibi, daha büyük model yerine Haiku 5.5'e geçerek maliyeti ciddi biçimde düşürebilir.

Haiku 5.5, bu ailede ilk kez ayarlanabilir "efor" düzeyi sunuyor (Low, Med, High, Xhigh, Max). Hız ve maliyet ile zeka arasındaki dengeyi siz belirliyorsunuz.

## Nasıl denersiniz?

1. Geliştirici ekibinizden ya da BT biriminizden model adını `claude-haiku-5-5` olarak denemesini isteyin.
2. Mevcut bir Haiku 4.5 işini aynı örneklerle iki modelde karşılaştırın.
3. Sonuç yeterliyse maliyet ve hız kazancını ölçüp geçişe karar verin.

Anthropic'in müşteri örnekleri de var: Asana görev tamamlama gecikmesinde yüzde 30'dan fazla düşüş, Box ise Haiku 4.5'e göre yaklaşık yarı gecikmeyle 11 puan daha yüksek skor bildirdi. Bunlar şirketlerin kendi testleridir.

## Bilmeniz gerekenler

- Karmaşık, çok adımlı kodlama işleri için Anthropic, Haiku yerine Sonnet 5.5 ya da Opus 5.5 öneriyor.
- Siber güvenlik korumaları Haiku 4.5'ten sıkı, son modellerden gevşek. Sızma testi gibi saldırgan teknikleri yine engelliyor. Daha geniş ihtiyacı olan kurumlar Cyber Verification ve Life Sciences Verification programlarına başvurabilir.
- Aynı duyuruda Sonnet 5.5'in önbellekten okuma fiyatı yarıya indirildi. Anthropic bunun çoğu ajan işinde yaklaşık yüzde 20 tasarruf sağladığını söylüyor.
- Aylık API kredisi alan Max, Ultra ve Team planlarında kredi her modelde kullanılabiliyor.
- Türkiye için özel bir kısıt belirtilmiyor. Fiyatlar dolar bazlıdır ve vergi hariçtir.

Model ve planlar için [Modeller](/wiki/temeller/modeller) ve [Planlar](/wiki/temeller/planlar) sayfalarına bakabilirsiniz.

*Kaynak: [Introducing Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
