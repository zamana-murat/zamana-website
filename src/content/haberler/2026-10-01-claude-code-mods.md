---
title: "Claude Code artık mod'larla özelleştirilebiliyor"
description: "Mod'lar, Claude Code'un davranışını ve arayüzünü değiştiren küçük TypeScript fonksiyonları."
date: "2026-10-01"
source: "https://claude.com/blog/claude-code-mods"
sourceTitle: "Customize Claude Code with mods"
image: "/images/haberler/claude-code-mods.jpg"
imageAlt: "Turuncu zemin üzerinde Claude Code mod'larını simgeleyen soyut çizim"
tags: ["claude-code", "mod", "özelleştirme", "güvenlik"]
---

## Kısaca

Anthropic, Claude Code için "mod" özelliğini 1 Ekim 2026'da duyurdu. Mod, Claude Code'un çalışma biçimini değiştiren küçük bir TypeScript fonksiyonu. Bir istemi yeniden yazabilir, arayüze yeni bir parça ekleyebilir, hazır bir özelliği değiştirebilir ya da tamamen yeni bir işlev getirebilir.

## Sizin için ne değişiyor?

Claude Code çalışırken araç çağırma, izin isteme, ekrana çıktı yazma gibi olaylar üretir. Mod bu olaylara bağlanıyor. Kaynakta sayılan örnekler:

- Modele gitmeden önce istemi yeniden yazmak.
- Bir araç çağrısını engellemek, değiştirmek ya da yeniden denemek.
- İzin isteklerini onaylamak ya da reddetmek.
- Araç çıktısındaki gizli bilgileri Claude görmeden önce silmek.
- Araç sonuçlarını ya da Claude'un sorularını arayüzde düzenlemek; düğme ve giriş alanı eklemek.

Aynı olaya birden fazla mod bağlanırsa, yükleme sırasına göre çalışıyorlar. Anthropic bazı yerleşik özellikleri de mod'a çevirmeye başladı; örneğin `/diff` artık bir mod olarak geliyor ve istenirse kapatılıp değiştirilebiliyor.

Takımlar için örnek kullanımlar: CI/CD durumunu ekranda göstermek, üretim ortamı ayarlarına dokunmadan önce onay şartı koymak, mod etkileşimlerini kayıt altına alan denetim günlüğü tutmak.

## Nasıl denersiniz?

Mod'lar eklentilerin (plugin) içinde dağıtılıyor. Claude dizininden ya da komut satırında `/plugin` yazarak eklentileri kurabilirsiniz. Kendi mod'unuzu paylaşmak isterseniz bir eklentiye paketleyip dizine gönderiyorsunuz. Ayrıca Claude Code'dan sizin için TypeScript mod yazmasını isteyebilirsiniz; kodu yazıyor, kuruyor ve oturum içinde canlı yüklüyor (hot reload).

Mod'lar bugün Claude Code komut satırı sürümünde ve masaüstü uygulamasında kullanılabiliyor. Claude Code'a erişimi olan herkes mod yazıp kurabiliyor.

## Bilmeniz gerekenler

- Mod'lar sandbox içinde çalışmıyor. Claude Code ile aynı makine erişimine sahipler. Kaynağını bilmediğiniz bir mod kurmayın.
- Team ve Enterprise planlarında ve yönetilen ayarları olan makinelerde `sec-default` adlı yerleşik mod önce yükleniyor ve kullanıcının kurduğu mod'ların güvenlik kurallarını aşmasını engelliyor. Yönetici bu modun kaynağını görüp neyi kısıtladığını inceleyebiliyor.
- Anthropic zamanla daha fazla yerleşik özelliği mod'a taşımayı planlıyor.
- Bu özellik daha çok yazılım ekipleri için. Kod yazmayan bir kullanıcı olarak şimdilik bilmeniz yeterli; ekibinizde Claude Code kullanan biri varsa güvenlik ve onay kurallarını birlikte gözden geçirin.

İlgili sayfalar: [Skills](/wiki/yetenekler/skills/), [Agents ve Subagents](/wiki/yetenekler/agents-subagents/) ve [Takım ve Admin](/wiki/temeller/takim-ve-admin/).

*Kaynak: [Customize Claude Code with mods](https://claude.com/blog/claude-code-mods), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
