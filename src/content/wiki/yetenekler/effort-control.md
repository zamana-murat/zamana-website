---
title: "Claude Effort Nedir? Çaba Seviyesini Siz Ayarlayın"
seoTitle: "Claude Effort Nedir? Çaba Seviyesi Ayarı"
description: "Claude Effort nedir? Model menüsündeki çaba kademeleri, Thinking ile farkı, hangi işte hangi seviyenin işe yaradığı ve Enterprise'ta yönetici kontrolü."
tags:
  - yetenekler
  - effort
  - caba
  - opus
  - hiz
lastUpdated: "2026-10-06"
---

**Claude Effort, Claude'un bir göreve ne kadar "çaba" harcayacağını sizin belirlemenizi sağlayan ayardır.** [Modeller](/wiki/temeller/modeller/) sayfasındaki güncel model ailesinin çoğunda vardır; Haiku 4.5 desteklemez.

Basit mantığı: bazı işler derin düşünme ister (yavaş ama kaliteli), bazıları hızlı cevap ister (yüzeysel ama anında). Effort bu dengeyi **görev başına** sizin kontrolünüze verir.

## Çaba Nedir?

"Çaba" (effort), Claude'un bir cevaba ulaşmadan önce ne kadar düşündüğü, ne kadar adım attığı, kaç alternatifi tarttığıdır:

- **Yüksek çaba:** Claude daha uzun düşünür, daha fazla ara adım atar, çıktısını kendi içinde daha çok denetler. Daha kaliteli ama daha yavaş ve **kullanım limitinizi daha hızlı bitirir**.
- **Düşük çaba:** Claude hızlıca, doğrudan cevaba gider. Basit işlerde fark yaratmaz, karmaşık işlerde yüzeysel kalabilir.

## claude.ai'de Nerede?

Mesaj gönder düğmesinin yanındaki **model adına** tıklayın. Açılan menüde üç ayar görürsünüz: **model**, **Effort** ve **Thinking** (bazı modellerde "Extended" yazar).

Effort beş kademelidir:

| Kademe | Ne zaman |
|---|---|
| Low | Rutin işler, daha az limit tüketimi |
| Medium | Rutin işler, daha az limit tüketimi |
| High | Kalite ile hız arasında denge |
| Extra high (xhigh) | Uzun kodlama ve çok adımlı ajan işleri |
| Max | En derin akıl yürütme |

Effort seçimi Sonnet 5.5, Opus 5.5, Fable 5.1, Opus 5, Sonnet 5, Fable 5, Opus 4.7, Opus 4.6 ve Sonnet 4.6'da vardır; Haiku 4.5 listede yoktur. Buradaki "Max" kademesi, Max aboneliğinden ayrı bir şeydir. Kendi menünüzde gördüğünüz kademelere bakın.

İki belirsizlik: claude.ai'deki **varsayılan kademe** Anthropic'in yardım sayfalarında belgelenmemiştir, yani "varsayılan şudur" diye yazamıyoruz. Seçicinin **Free planda** görünüp görünmediği de belgelenmemiştir; Pro, Max, Team ve Enterprise'ta vardır.

## Effort ve Extended Thinking: Aynı Şey Değil

İkisi **ayrı ayarlardır**, birbirinin yerine geçmez:

- **Effort:** Claude'un işe ne kadar emek vereceği.
- **Thinking (extended thinking):** Claude'un cevap vermeden önce kendi içinde ayrıca akıl yürütme adımı atıp atmayacağı.

İstediğiniz birleşimi seçersiniz. Örneğin hızlı bir çeviri için Low, bir yatırım sunumunun mantık denetimi için High ve Thinking açık.

**Önemli ayrıntı:** Sonnet 5.5, Opus 5.5, Fable 5.1 ve Opus 5'te Thinking **kapatılamaz**. Anahtarı bulamıyorsanız hata değildir, o modelde zaten hep açıktır. Bu durumda tek kaldıracınız Effort'tur.

**Kurumsal kullanıcılar için:** Enterprise'ta yönetici bir modeli ya da Effort kademelerini role göre gizleyebilir. Menüde bir kademeyi göremiyorsanız önce yöneticinize sorun. Ayrıntı: [Takım ve Admin](/wiki/temeller/takim-ve-admin/).

## Ne Zaman Yüksek Çaba?

- Stratejik analiz, çok katmanlı muhakeme gerektiren işler
- Uzun belge analizi, çelişkilerin yakalanması gereken durumlar
- Önemli bir metnin (yatırımcı mektubu, sözleşme taslağı) en iyi kalitede yazımı
- Karmaşık, çok adımlı [agent](/wiki/yetenekler/agents-subagents/) görevleri

## Ne Zaman Düşük Çaba?

- Kısa çeviri, hızlı özet, basit yeniden yazım
- "Şu cümleyi düzelt" gibi tek adımlık işler
- Hız önemliyse ve görev zaten basitse
- Kotayı korumak istediğiniz, yoğun ama hafif işlerde

Kurgusal bir örnek: Aksoy Lojistik'te finans ekibi her sabah gelen tahsilat e-postalarını özetletiyor, bu iş Low ya da Medium ile yeter. Aynı ekip yönetim kuruluna gidecek kur riski notunu yazdırırken High seçip sonucu yine de kendisi doğruluyor.

## Pratik Yaklaşım

Çoğu iş profesyoneli için pratik kural basittir:

> **Varsayılanı bırakın.** Varsayılan seviye çoğu iş için yeterlidir.

Çaba seviyesini iki durumda elle değiştirin:

1. **İşler basit ve çok sayıdaysa, hız ya da kota önemliyse** → düşük çabaya çekin
2. **Kritik bir çıktıda en yüksek kaliteyi istiyorsanız ve süre önemli değilse** → yüksek çabaya çıkarın

Yüksek kademeler kullanım limitini daha hızlı tüketir; limitin nasıl işlediği için [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/) sayfasına bakın.

Bu, [Modeller](/wiki/temeller/modeller/) sayfasındaki "model değil prompt önemli" felsefesinin bir uzantısıdır: artık sadece *hangi model* değil, *ne kadar çaba* da elinizde bir kaldıraçtır. Anthropic'in kendi testine göre Opus 5.5, orta çabayla Opus 5'in yüksek çaba düzeyini yakalıyor; yani daha yeni model, aynı kaliteyi daha düşük çabayla verebiliyor.

Bu ayarı bireysel olarak öğrenmek kolay, bir ekibe oturtmak daha zordur: hangi işte düşük, hangisinde yüksek çaba kullanılacağı ortak bir alışkanlık olmalı. [Kurumsal Claude programı](/programlar/kurumsal/) bu tür ekip kurallarını çalışanlarınızın kendi işleri üzerinden çalışır.

## Sık Sorulan Sorular

**Claude Effort nedir?**
Claude'un bir görevde ne kadar derin çalışacağını belirleyen çaba ayarıdır. Düşük seviye hızlı ve hafiftir, yüksek seviye daha derin ama yavaştır ve limiti daha çok harcar.

**Effort ile Thinking aynı şey mi?**
Hayır. İkisi ayrı ayarlardır. Bazı modellerde Thinking kapatılamaz, Effort ise her zaman ayarlanabilir.

**claude.ai'de varsayılan effort hangisi?**
Anthropic bunu belgelememiş. Model menüsünde seçili olanı görürsünüz.

**Yüksek effort her zaman daha doğru sonuç mu verir?**
Daha derin düşünür ama hata yapmaz demek değildir. Önemli çıktıyı yine doğrulayın.

**Free planda var mı?**
Pro, Max, Team ve Enterprise'ta vardır. Free için belgelenmemiş.

## Geliştiriciler için

> **Bu kutu yalnız teknik ekipleri ilgilendirir; iş kullanıcısı atlayabilir.**
>
> - **API:** `output_config.effort` parametresi (low, medium, high, xhigh, max). Metin, araç çağrıları ve thinking dahil **tüm** çıktı token'larını etkiler; katı bir bütçe değil, bir davranış sinyalidir. Parametreyi göndermemek varsayılanı kullanmakla aynıdır. Thinking ise ayrı bir `thinking` alanıdır.
> - **Claude Code:** `/effort` komutuyla değişir. `/effort ultracode` her görev için bir iş akışı planlar, çabayı `xhigh` düzeyine çıkarır ve çok token harcar.
> - **Varsayılanlar (model bazında):**
>
> | Model | API varsayılanı | Claude Code varsayılanı |
> |---|---|---|
> | Fable 5.1 | high | high |
> | Opus 5.5 | medium | medium |
> | Sonnet 5.5 | high | medium |
> | Haiku 4.5 | desteklenmiyor | desteklenmiyor |

## İlgili Sayfalar

- [Modeller](/wiki/temeller/modeller/): Güncel model ailesi ve hangi iş için hangi model
- [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/): Yüksek çabanın limite etkisi
- [Agents ve Subagents](/wiki/yetenekler/agents-subagents/): Yüksek çabanın en çok fark yarattığı karmaşık görevler
- [Context ve Compaction](/wiki/yetenekler/context-compaction/): Uzun oturumlarda bağlam yönetimi
- [Prompting Temel İlkeleri](/wiki/prompting/temel-ilkeler/): Çabadan önce gelen asıl kaldıraç: iyi prompt
