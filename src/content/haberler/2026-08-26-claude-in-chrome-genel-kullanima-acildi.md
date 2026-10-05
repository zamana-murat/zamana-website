---
title: "Claude in Chrome tüm ücretli planlarda genel kullanıma açıldı"
seoTitle: "Claude in Chrome genel kullanıma açıldı"
description: "Tarayıcı eklentisi artık beta değil; Claude sitelerde gezip form doldurabiliyor ve saldırılara karşı yeni korumaları var."
date: "2026-08-26"
source: "https://claude.com/blog/claude-in-chrome-generally-available"
sourceTitle: "Claude in Chrome is generally available"
image: "/images/haberler/claude-in-chrome-genel-kullanim.jpg"
imageAlt: "Turuncu zemin üzerinde üst üste iki tarayıcı penceresi ve fare imleci çizimi"
tags: ["chrome", "tarayıcı", "güvenlik", "eklenti"]
---

## Kısaca

Claude in Chrome, 26 Ağustos 2026'dan itibaren tüm ücretli Claude planlarında genel kullanıma açık. Bu tarayıcı eklentisi (Chrome'a eklenen küçük program), API'si olmayan web sitelerinde ve şirket içi araçlarda Claude'un sizin yerinize sayfaları okumasını ve işlem yapmasını sağlıyor.

## Sizin için ne değişiyor?

Claude artık tarayıcıda bir sayfayı okuyabiliyor, bağlantılara tıklayabiliyor, sayfalar arasında gezebiliyor ve form doldurabiliyor. Siz zaten oturum açmışsanız, şifre gerektiren sitelerde Claude mevcut girişinizi kullanıyor. Pratik örnekler: bir tedarikçi portalından fatura bilgilerini çekmek, bir başvuru formunu doldurmak, bağlayıcısı (connector) olmayan bir iç aracı kullanmak.

Önemli bir yenilik: Claude artık bazı eylemleri her seferinde sormadan onaylayabiliyor. Bu, Claude Code'daki "auto mode" mantığına benziyor. Ayrıca tarayıcıda başlattığınız bir işe masaüstü, mobil ve web uygulamalarından devam edebiliyorsunuz.

## Nasıl denersiniz?

Eklentiyi Chrome Web Store'dan kuruyorsunuz ve Claude hesabınızla giriş yapıyorsunuz. Enterprise yöneticileri Organization Settings üzerinden dağıtımı yönetebiliyor ve kullanımı onaylı alan adlarıyla sınırlayabiliyor.

## Bilmeniz gerekenler

Web'de çalışan bir yapay zekanın en büyük riski prompt injection: sayfaya gizlenmiş, modeli yanıltmaya çalışan talimatlar. Anthropic bunun için üç katmanlı koruma anlatıyor: model daha geniş bir saldırı kütüphanesiyle eğitildi, "probe" adlı taramalar web içeriğini Claude işlem yapmadan kontrol ediyor ve bir sınıflandırıcı planlanan eylemin kullanıcının isteğiyle uyuşup uyuşmadığına bakıyor.

Anthropic'in profesyonel red-team (saldırı simülasyonu) saldırılarıyla yaptığı testlerde, korumalar ve otomatik onay sınıflandırıcıları açıkken saldırı başarı oranı Claude Sonnet 5, Opus 5 ve Mythos 5'te yüzde 0, Claude Fable 5'te yüzde 0,3 ölçüldü. Bu, şirketin kendi testi; sıfır, "risk yok" anlamına gelmez.

Sınırlar:

- Yalnızca masaüstünde Google Chrome'da çalışıyor; mobil tarayıcılarda ve diğer Chromium tabanlı tarayıcılarda desteklenmiyor.
- Yerel dosyalarla çalışmak veya tarayıcı dışındaki uygulamalarla bağlantı kurmak için Claude masaüstü uygulaması gerekiyor.
- Bankacılık, e-posta ve kritik kurumsal hesaplarda önce güvendiğiniz sitelerde, onay isteyen modla başlamak mantıklı.

İlgili sayfalar: [Computer Use](/wiki/yetenekler/computer-use/) ve [MCP Güvenliği](/wiki/mcp/guvenlik/).

*Kaynak: [Claude in Chrome is generally available](https://claude.com/blog/claude-in-chrome-generally-available), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
