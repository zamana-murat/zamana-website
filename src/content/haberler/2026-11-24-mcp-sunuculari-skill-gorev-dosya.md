---
title: "MCP sunucuları artık skill ve görev getiriyor"
seoTitle: "MCP'de skill, görev ve onay isteme yenilikleri"
description: "MCP sunucuları skill yayımlayabiliyor, arka planda uzun iş çalıştırabiliyor ve sizden onay isteyebiliyor. Pro ve üstünde açık."
date: "2026-11-24"
source: "https://claude.com/resources/articles/skills-over-mcp-tasks-and-more"
sourceTitle: "MCP servers can now ship skills, run tasks, and more with Claude"
image: "/images/haberler/mcp-skills-tasks.png"
imageAlt: "MCP sunucularında skill, görev ve onay özelliklerini anlatan Claude duyurusunun kapağı"
tags: ["mcp", "skill", "bağlayıcı", "claude code"]
---

## Kısaca

MCP (Model Context Protocol), Claude'un harici araçlara bağlanma standardıdır. Anthropic, bu standarda dayanan dört yeniliği Claude ve Claude Code'da kullanıma açtı: sunucuların kendi skill'lerini getirmesi (public beta), arka planda çalışan uzun görevler, iş ortasında sizden onay ya da bilgi isteme ve dosya yükleme (yakında).

## Sizin için ne değişiyor?

Bir bağlayıcı eklediğinizde artık yalnızca araç listesi gelmiyor, o aracı doğru kullanmayı öğreten skill'ler (Claude'a verilen yeniden kullanılabilir talimat paketi) de gelebiliyor. Claude bu skill'i yalnızca gerektiğinde yüklüyor, böylece bağlam alanı boşa harcanmıyor. Sunucu güncellenince skill de güncelleniyor, sizin ek bir kurulum yapmanız gerekmiyor.

Dört özelliğin gündelik karşılığı:

- **Skills over MCP:** Muhasebe ya da CRM aracınızı bağladığınızda, o aracın "en iyi kullanım şekli" Claude'a kendiliğinden geliyor.
- **Tasks (görevler):** Uzun süren bir işi (büyük bir rapor üretimi gibi) sunucu arka planda yürütüyor, Claude başka işe devam edip sonucu hazır olunca alıyor.
- **Elicitation (onay isteme):** Sunucu, işin ortasında durup bir form ya da bağlantıyla size soruyor, örneğin maliyeti ya da silme işlemini onaylatmak için.
- **File Uploads (dosya yükleme):** PDF, tablo ve görsel dosyalar bağlam penceresinden geçmeden sunucuya gidiyor. Henüz kademeli açılıyor.

Yazıda örnek olarak Shopify, HubSpot, Atlassian, ZoomInfo, Supabase, Railway ve GitHub sunucuları anılıyor, Carta yakında.

## Nasıl denersiniz?

Bağlayıcı dizininden bir aracı bağlamanız yeterli, özellikler sunucu tarafı destek verdikçe görünür. Geliştiriciler, MCP şartnamesindeki belgelere bakarak kendi eklentilerine destek ekleyebilir.

## Bilmeniz gerekenler

- Skills over MCP: Pro, Max ve Ultra'da varsayılan açık. Team'de yönetici açınca, Enterprise'da yakında.
- Tasks ve Elicitation: genel kullanımda, Pro, Max ve Ultra'da var, Team ve Enterprise'a açılıyor.
- File Uploads: Pro, Max, Ultra ve uygun Team ile Enterprise planlarında yakında.
- Kaynak, bir kullanım limiti belirtmiyor. Araç araması (tool search) özelliğinin çok sunuculu kurulumlarda araç tanımlarının bağlam kullanımını yüzde 85'ten fazla azaltabildiğini söylüyor.
- Temel bilgi için [MCP nedir](/wiki/mcp/nedir) ve [MCP güvenliği](/wiki/mcp/guvenlik) sayfalarına bakın.

*Kaynak: [MCP servers can now ship skills, run tasks, and more with Claude](https://claude.com/resources/articles/skills-over-mcp-tasks-and-more), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
