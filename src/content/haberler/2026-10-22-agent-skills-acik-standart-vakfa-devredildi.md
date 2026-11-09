---
title: "Agent Skills artık tarafsız bir vakfın çatısı altında"
seoTitle: "Agent Skills tarafsız vakfa devredildi"
description: "Anthropic, Agent Skills standardını Linux Foundation bünyesindeki Agentic AI Foundation'a bağışladı; beceriler araçlar arasında taşınabilir."
date: "2026-10-22"
source: "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation"
sourceTitle: "Donating Agent Skills to the Agentic AI Foundation"
image: "/images/haberler/agent-skills-aaif.jpg"
imageAlt: "Anthropic'in Agent Skills bağışı duyurusunun kapak görseli"
tags: ["skills", "standart", "mcp", "açık kaynak"]
---

## Kısaca

Anthropic, "Agent Skills" adlı açık standardı Agentic AI Foundation'a (AAIF) bağışladı. AAIF, Linux Foundation çatısı altında çalışan tarafsız bir kuruluş. Anthropic onu Block ve OpenAI ile birlikte kurmuştu ve vakıf zaten MCP'yi (yapay zekayı şirket araçlarına bağlayan protokol) barındırıyor. Anthropic standardın adını, logosunu, GitHub organizasyonunu ve agentskills.io alan adını devrediyor.

## Sizin için ne değişiyor?

Skill, Claude'a belirli bir işi nasıl yapacağını öğreten bir klasördür. İçinde `SKILL.md` adlı bir yönerge dosyası bulunur, isterse betikler ve referans belgeler de eklenebilir. Örneğin "şirketimizin teklif şablonu böyle doldurulur" diye yazdığınız bir skill'i Claude her seferinde yeniden anlatmanıza gerek kalmadan uygular.

Bu haberin gündelik anlamı şu: bir skill'i bir kez yazdığınızda yalnızca Claude'da değil, standardı destekleyen diğer araçlarda da kullanabilirsiniz. Anthropic, ChatGPT, Cursor, GitHub Copilot ve VS Code dahil 70'ten fazla ajan platformunun Agent Skills'i entegre ettiğini söylüyor. Yani emek verip hazırladığınız bir beceri tek bir ürüne bağlı kalmıyor.

Standart Aralık 2025'te yayımlandığından beri yaklaşık 1 milyon skill yayımlandı ve yaklaşık 280 milyon kez kuruldu (Anthropic'in verdiği rakamlar).

## Nasıl denersiniz?

Devir, hesabınızda yapmanız gereken bir şey getirmiyor. Skill kullanmak için:

1. Claude'da ayarlardan beceri (skill) bölümüne gidin.
2. Hazır bir skill ekleyin ya da kendi `SKILL.md` dosyanızı oluşturun.
3. Bir görevde Claude'dan o skill'i kullanmasını isteyin.

Ayrıntı için [Skills](/wiki/yetenekler/skills/) wiki sayfasına bakın.

## Bilmeniz gerekenler

- Standart açık ve tarafsız kalıyor. Kullanmak ya da katkı vermek için AAIF üyesi olmak gerekmiyor.
- Bakımını Anthropic, Google, OpenAI ve diğer şirketlerden mühendisler bireysel olarak üstleniyor. Lead Maintainer'lar David Soria Parra ve Mahesh Murag.
- Önerilen yol haritasında sürümlü yayınlar, resmi öneri süreci ve skill yazanlar ile kuranlar için güvenlik rehberi var. Henüz yayımlanmış değil.
- Güvenlik notu: kaynağını bilmediğiniz bir skill'i kurmadan önce içeriğini okuyun. Bir skill betik içerebilir.
- Türkiye'ye özgü bir kısıt yok, ancak skill'lere kişisel veri ya da müşteri sırrı yazmamaya dikkat edin.

*Kaynak: [Donating Agent Skills to the Agentic AI Foundation](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
