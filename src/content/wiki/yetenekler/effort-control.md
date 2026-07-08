---
title: "Effort Control — Çaba Seviyesini Siz Ayarlayın"
description: "Claude'a bir görevde ne kadar derinlemesine çalışacağını söyleyen ayar. Kalite ile hız arasında bilinçli denge. Opus 4.8 ile claude.ai ve Cowork'e geldi."
tags:
  - yetenekler
  - effort
  - caba
  - opus
  - hiz
lastUpdated: "2026-06-03"
---

**Effort Control, Claude'un bir göreve ne kadar "çaba" harcayacağını sizin belirlemenizi sağlayan bir ayardır.** Mayıs 2026'da [Opus 4.8](/wiki/temeller/modeller/) ile birlikte claude.ai ve [Cowork](/wiki/araclar/cowork-modu/) arayüzüne geldi.

Basit mantığı: bazı işler derin düşünme ister (yavaş ama kaliteli), bazıları hızlı cevap ister (yüzeysel ama anında). Effort Control bu dengeyi **görev başına** sizin kontrolünüze verir.

## Çaba Nedir?

"Çaba" (effort), Claude'un bir cevaba ulaşmadan önce ne kadar düşündüğü, ne kadar adım attığı, kaç alternatifi tarttığıdır:

- **Yüksek çaba:** Claude daha uzun düşünür, daha fazla ara adım atar, çıktısını kendi içinde daha çok denetler. Daha kaliteli ama daha yavaş ve daha çok kota tüketir.
- **Düşük çaba:** Claude hızlıca, doğrudan cevaba gider. Basit işlerde fark yaratmaz, karmaşık işlerde yüzeysel kalabilir.

Opus 4.8 **varsayılan olarak yüksek çaba** seviyesinde çalışır. Effort Control, bu varsayılanı görevin niteliğine göre aşağı veya yukarı çekmenizi sağlar.

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

Çaba seviyesi, claude.ai ve Cowork arayüzünde görev başında ayarlanabilir bir kontroldür. Model seçici / mesaj alanı yakınında yer alır (arayüz sürümüne göre konumu değişebilir). Ayarladığınız seviye, o oturumdaki sonraki isteklere uygulanır.

## Pratik Yaklaşım

Çoğu iş profesyoneli için pratik kural basittir:

> **Varsayılanı bırakın.** Opus 4.8 zaten yüksek çabada gelir, bu çoğu iş için doğrudur.

Çaba seviyesini iki durumda elle değiştirin:

1. **Çok basit, çok sayıda iş yapıyorsanız ve hız/kota önemliyse** → düşük çabaya çekin
2. **Kritik bir çıktıda en yüksek kaliteyi istiyorsanız ve süre önemli değilse** → yüksek çabada kaldığınızdan emin olun

Bu, [Modeller](/wiki/temeller/modeller/) sayfasındaki "model değil prompt önemli" felsefesinin bir uzantısıdır: artık sadece *hangi model* değil, *ne kadar çaba* da elinizde bir kaldıraçtır.

## İlgili Sayfalar

- [Modeller](/wiki/temeller/modeller/) — Opus 4.8 ve çaba varsayılanı
- [Agents ve Subagents](/wiki/yetenekler/agents-subagents/) — Yüksek çabanın en çok fark yarattığı karmaşık görevler
- [Context ve Compaction](/wiki/yetenekler/context-compaction/) — Uzun oturumlarda bağlam yönetimi
- [Prompting Temel İlkeleri](/wiki/prompting/temel-ilkeler/) — Çabadan önce gelen asıl kaldıraç: iyi prompt
