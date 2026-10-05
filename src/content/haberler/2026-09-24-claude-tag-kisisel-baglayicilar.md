---
title: "Slack'teki Claude Tag artık kişisel bağlayıcılarını da kullanabiliyor"
seoTitle: "Claude Tag kişisel bağlayıcıları kullanabiliyor"
description: "Claude Tag, kanallarda kişinin kendi takvimine, Drive'ına ve CRM'ine erişerek onun adına bilgi getirebiliyor."
date: "2026-09-24"
source: "https://claude.com/blog/claude-tag-now-supports-personal-connectors-in-channels"
sourceTitle: "Claude Tag now supports personal connectors in channels"
image: "/images/haberler/claude-tag-kisisel-baglayicilar.jpg"
imageAlt: "Turuncu zemin üzerinde konuşma balonu çizimi"
tags: ["slack", "claude-tag", "bağlayıcı", "gizlilik"]
---

## Kısaca

Claude Tag, Claude'u Slack kanallarına getiren bir entegrasyon (şu an beta). 24 Eylül 2026'daki güncellemeyle, kanalda @Claude diyen kişi artık kendi kişisel bağlayıcılarını (connectors, yani Claude'u takvim, Drive, CRM gibi araçlara bağlayan köprüler) kullanabiliyor.

## Sizin için ne değişiyor?

Önceden Claude kanalda yalnızca yöneticinin o kanala açıkça bağladığı connector'lara erişebiliyordu. Bu, rol bazlı erişim kontrolü için bilinçli bir sınırdı. Şimdi siz kanalda bir şey istediğinizde Claude sizin adınıza sizin takviminize, Google Drive'ınıza, CRM hesabınıza ya da test ortamınıza bakabiliyor.

Somut örnek: Satış kanalında bir müşteriye fiyat teklifi cevabı yazıyorsunuz. Fiyat verisi sizin kişisel CRM erişiminizde duruyor. @Claude'dan o veriye bakıp cevap taslağı hazırlamasını istiyorsunuz; kanalın geneline bu connector'ı açmanız gerekmiyor.

İki çalışma modu var:

- **İnceleme modu:** Claude'un cevabı kanala düşmeden önce siz okuyup onaylıyorsunuz. Kanaldaki kişilerin neyi göreceğini siz kontrol ediyorsunuz.
- **Otomatik mod:** Claude, hassas içerik fark etmediği sürece cevabı doğrudan paylaşıyor. Hassas bir içerik sezerse insan incelemesi bekliyor.

## Nasıl denersiniz?

Kurulum gerekmiyor. İlk kez kişisel connector'a ihtiyaç duyulduğunda Claude sizden izin istiyor, sonra o konuşma dizisinde kullanıyor. Özellik 24 Eylül 2026'da önce Team planlarında kullanıma açılmaya başladı, Enterprise sonra geliyor. Yapmanız gereken, kanalda @Claude'a kişisel araçlarınızdaki bir bilgiyi sormak; DM'lerde nasıl yapıyorsanız aynı şekilde.

## Bilmeniz gerekenler

- Kayıt düzeni: Claude'un sizin connector'ınız üzerinden yaptığı her şey, ilgili aracın kendi günlüğünde sizin hesabınız altında görünüyor, tıpkı DM'de yaptığınızda olduğu gibi. Kanal etkinliği ise kanalın ayrı servis hesabı altında kalıyor, mevcut denetim izleri bozulmuyor.
- Sınır: Kişisel connector'lar yalnızca sizin kanalda kendinizin başlattığı istekler için geçerli. Zamanlanmış rutinler ve Claude'un kendi başına başlattığı işler yöneticinin kanala tanımladığı ortak connector'ları kullanmaya devam ediyor.
- Kontrol: Kişisel connector'larınızı istediğiniz zaman bağlantıdan çıkarabiliyorsunuz.
- Kaynağın tarif ettiği ideal kullanım "yakından izlenen ortak çalışma". Kanalda herkesin göreceği bir cevapta hassas veri çıkabileceğinden, başlangıçta inceleme modunu seçin.

İlgili sayfalar: [Slack ve Teams Entegrasyonu](/wiki/araclar/slack-teams-entegrasyon/) ve [Connectors](/wiki/araclar/connectors/).

*Kaynak: [Claude Tag now supports personal connectors in channels](https://claude.com/blog/claude-tag-now-supports-personal-connectors-in-channels), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
