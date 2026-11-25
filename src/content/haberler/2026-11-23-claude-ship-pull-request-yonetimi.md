---
title: "Claude Ship: pull request'leri Claude yönetiyor"
seoTitle: "Claude Ship nedir? Pull request yönetimi"
description: "Claude Ship, açılan pull request'leri inceliyor, bozuk kontrolleri düzeltiyor ve ekibin kurallarına göre onaylıyor. Team ve Enterprise'da beta."
date: "2026-11-23"
source: "https://claude.com/resources/articles/introducing-claude-ship"
sourceTitle: "Introducing Claude Ship"
image: "/images/haberler/claude-ship.png"
imageAlt: "Claude Ship duyurusunun kapak görseli"
tags: ["claude code", "geliştirici", "team", "enterprise"]
---

## Kısaca

Claude Ship, yazılım ekipleri için bir pull request (PR, yani yazılan kodun ana koda katılması için açılan değişiklik talebi) yönetim ürünü. PR açıldıktan sonraki işleri üstleniyor: inceleme, hataları düzeltme ve hangi değişikliğin birleşmeye hazır olduğuna ekip kurallarıyla karar verme. Ürün beta aşamasında.

## Sizin için ne değişiyor?

Bu haber esas olarak yazılım ekibi olan şirketleri ilgilendiriyor. Yazılımcılarınız varsa PR'larda bekleme süresinin önemli bir kısmı üç şeyden gelir: inceleme sırası, kırık otomatik testler ve çakışmalar. Claude Ship bunların üçüne birden el atıyor.

Üç parçası var:

- **Code Review** (genel kullanıma açık): PR'ı birkaç açıdan inceliyor, bulguları doğruluyor ve PR'a yazıyor. Depo başına Hızlı, Standart ya da Derin seviye seçilebiliyor.
- **PR Steward** (beta): Başarısız testlerle, birleştirme çakışmalarıyla ve inceleme yorumlarıyla ilgileniyor. Her gönderimden sonra ne yaptığını ve nasıl geri alınacağını yazıyor. PR'ı onaylamıyor ve birleştirmiyor.
- **Claude Approvals** (beta): Ekibin depoda tuttuğu onay kural dosyasını uyguluyor. Rutin değişiklikleri otomatik onaylayabiliyor, bazı durumlarda insan onayı istiyor. Kaynak, ilk başta yalnızca gözlem modunda denemeyi öneriyor.

## Nasıl denersiniz?

- **Geliştirici:** Değişiklik hazır olunca Claude Code'da `/ship` komutunu çalıştırın. Claude gönderiyor, PR'ı açıyor, inceliyor, geri bildirim ve başarısız kontroller üzerinde çalışıyor. Neyin birleşebileceği sizin yetkinize ve dal kurallarına bağlı.
- **Yönetici:** Code Review ve PR Steward'u depo bazında açın. Claude Approvals, varsayılan dalda kural dosyası bulunca başlıyor. İnceleme seviyesi, zamanlaması ve harcama limitini ayarlayabilirsiniz.

## Bilmeniz gerekenler

- Yalnızca Claude Team ve Enterprise planlarında, GitHub depoları için. `/ship` Claude Code'da ve masaüstü uygulamasında kademeli açılıyor.
- Sıfır veri saklama (ZDR), HIPAA yapılandırması veya müşteri yönetimli şifreleme anahtarı kullanan kuruluşlarda çalışmıyor.
- Kullanım token bazında faturalanıyor, yani PR sayısı, boyutu ve inceleme seviyesi maliyeti belirliyor. Code Review ve PR Steward için harcama limiti koyabilirsiniz. `/ship` normal Claude Code kullanımı sayılıyor.
- Uygun Enterprise kuruluşlar en az 10.000 dolarlık Claude Ship kredisi talep edebiliyor. Kredi talepten sonra 30 gün içinde kullanılmalı, talep için son tarih 15 Ocak 2027, koşullar geçerli.
- Claude Code'a yeniyseniz [wiki'deki araçlar bölümüne](/wiki/araclar) göz atabilirsiniz.

*Kaynak: [Introducing Claude Ship](https://claude.com/resources/articles/introducing-claude-ship), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
