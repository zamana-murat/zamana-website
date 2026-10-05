---
title: "Effort Control: Çaba Seviyesini Siz Ayarlayın"
description: "Claude'a bir görevde ne kadar derin çalışacağını söyleyen ayar: kalite ile hız arasında bilinçli denge. Varsayılan seviye modele ve yüzeye göre değişir."
tags:
  - yetenekler
  - effort
  - caba
  - opus
  - hiz
lastUpdated: "2026-10-05"
---

**Effort Control, Claude'un bir göreve ne kadar "çaba" harcayacağını sizin belirlemenizi sağlayan bir ayardır.** [Modeller](/wiki/temeller/modeller/) sayfasındaki güncel model ailesinde kullanılır; Haiku 4.5 desteklemez.

Basit mantığı: bazı işler derin düşünme ister (yavaş ama kaliteli), bazıları hızlı cevap ister (yüzeysel ama anında). Effort Control bu dengeyi **görev başına** sizin kontrolünüze verir.

## Çaba Nedir?

"Çaba" (effort), Claude'un bir cevaba ulaşmadan önce ne kadar düşündüğü, ne kadar adım attığı, kaç alternatifi tarttığıdır:

- **Yüksek çaba:** Claude daha uzun düşünür, daha fazla ara adım atar, çıktısını kendi içinde daha çok denetler. Daha kaliteli ama daha yavaş ve daha çok kota tüketir.
- **Düşük çaba:** Claude hızlıca, doğrudan cevaba gider. Basit işlerde fark yaratmaz, karmaşık işlerde yüzeysel kalabilir.

Effort Control, varsayılan seviyeyi görevin niteliğine göre aşağı veya yukarı çekmenizi sağlar. **Varsayılan seviye modele ve yüzeye göre değişir:**

| Model | API varsayılanı | Claude Code varsayılanı |
|---|---|---|
| Fable 5.1 | yüksek (high) | yüksek (high) |
| Opus 5.5 | orta (medium) | orta (medium) |
| Sonnet 5.5 | yüksek (high) | orta (medium) |
| Haiku 4.5 | desteklenmiyor | desteklenmiyor |

claude.ai sohbet arayüzündeki varsayılan seviye doğrulanamadı; arayüzdeki seçicide ne gördüğünüze bakın. Anthropic'in testine göre Opus 5.5, orta çabayla Opus 5'in yüksek çaba düzeyini yakalıyor veya geçiyor.

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

## Nerede Bulunur?

Çaba seviyesini API'de ve Claude Code'da ayarlayabilirsiniz. Claude Code'da `/effort` komutuyla değişir; `/effort ultracode` her görev için bir iş akışı planlar, çabayı `xhigh` düzeyine çıkarır ve çok token harcar. claude.ai ve [Cowork](/wiki/araclar/cowork-modu/) arayüzünde seçici varsa model seçicinin ve mesaj alanının yakınındadır; konumu arayüz sürümüne göre değişebilir.

## Pratik Yaklaşım

Çoğu iş profesyoneli için pratik kural basittir:

> **Varsayılanı bırakın.** Varsayılan seviye çoğu iş için yeterlidir.

Çaba seviyesini iki durumda elle değiştirin:

1. **İşler basit ve çok sayıdaysa, hız ya da kota önemliyse** → düşük çabaya çekin
2. **Kritik bir çıktıda en yüksek kaliteyi istiyorsanız ve süre önemli değilse** → yüksek çabaya çıkarın (varsayılanınız orta ise özellikle)

Bu, [Modeller](/wiki/temeller/modeller/) sayfasındaki "model değil prompt önemli" felsefesinin bir uzantısıdır: artık sadece *hangi model* değil, *ne kadar çaba* da elinizde bir kaldıraçtır.

## İlgili Sayfalar

- [Modeller](/wiki/temeller/modeller/): Güncel model ailesi ve hangi iş için hangi model
- [Agents ve Subagents](/wiki/yetenekler/agents-subagents/): Yüksek çabanın en çok fark yarattığı karmaşık görevler
- [Context ve Compaction](/wiki/yetenekler/context-compaction/): Uzun oturumlarda bağlam yönetimi
- [Prompting Temel İlkeleri](/wiki/prompting/temel-ilkeler/): Çabadan önce gelen asıl kaldıraç: iyi prompt
