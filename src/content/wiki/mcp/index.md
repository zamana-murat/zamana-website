---
title: "MCP ve Eklentiler: Claude'u İş Sisteminize Oturtmak"
seoTitle: "Claude MCP ve Connector Rehberi: İş Araçlarını Bağlama"
description: "MCP ve connector'lar Claude'u Slack, Drive, Microsoft 365 ve CRM'inize bağlar. Ne işe yarar, kim kurar, güvenli mi, hangi rol için hangisi?"
tags:
  - mcp
  - plugins
  - connector
  - giris
lastUpdated: "2026-10-06"
---

**Claude, connector'lar olmadan bir sohbet aracıdır. Connector'larla gerçek bir iş meslektaşı gibi davranır.**

Bu bölüm Claude'u Slack, Drive, CRM, proje yönetimi araçlarınıza bağlayan sistemi anlatır.

## Bu Bölümdeki Sayfalar

<div class="wiki-grid">

-   <span class="wiki-icon wiki-icon--lg" data-icon="information-outline" aria-hidden="true"></span> **MCP Nedir?**

    ---

    Model Context Protocol standardı, connector türleri (dizin, özel, masaüstü uzantısı) ve plugin farkı.

    [→ MCP Nedir?](/wiki/mcp/nedir/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="sitemap-outline" aria-hidden="true"></span> **Şirket Sistemini Bağlamak**

    ---

    ERP, CRM ve iç araçlar için karar akışı: dizinde var mı, BT'den ne istenir, salt okunur pilot.

    [→ Şirket Sistemini Bağlamak](/wiki/mcp/sirket-sistemini-baglamak/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="view-list-outline" aria-hidden="true"></span> **Bağlantı Listesi**

    ---

    Resmî dizinde yaklaşık 900 connector. Rol bazında en yaygınlar ve role göre önerilen setler.

    [→ Bağlantı Listesi](/wiki/mcp/baglanti-listesi/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="shield-lock-outline" aria-hidden="true"></span> **Güvenlik**

    ---

    İzinler, prompt injection, aşırı yetki ve kurumsal onaylı liste için kontrol listesi.

    [→ Güvenlik](/wiki/mcp/guvenlik/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="toolbox-outline" aria-hidden="true"></span> **Popüler MCP'ler**

    ---

    Hangi sunucular olgun, hangileri riskli: resmî, sağlayıcı ve topluluk sunucuları.

    [→ Popüler MCP'ler](/wiki/mcp/populer-mcpler/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="format-list-checks" aria-hidden="true"></span> **Kurulum Rehberi**

    ---

    Özel connector, masaüstü uzantıları ve yönetici onayı: adım adım kurulum ve yaygın hatalar.

    [→ Kurulum Rehberi](/wiki/mcp/kurulum-rehberi/)

</div>

## Ana Fikir

Tüm bölümün özeti tek cümleye indirgenirse:

> **Bir connector, Claude'u sizin sohbet arkadaşınızdan çıkarıp gerçek sisteminize erişen bir iş meslektaşına çevirir.**

Satış çalışanı için: "XYZ Gıda ile son durumum ne?" sorusuna Claude connector'suz cevap veremez. Connector'lu Claude (Salesforce + Gmail bağlı) aynı soruyu saniyeler içinde doğru cevaplar: CRM kaydını okur, son yazışmayı tarar, özet üretir.

Bu fark küçük değildir: **Claude deneyiminin tümü değişir**.

## Plugin ve Connector: Kısa Fark

- **Connector** = Claude ile tek bir servis arasındaki bağlantı. Teknik adıyla bir MCP sunucusu.
- **Plugin** = İlgili skill'leri, connector'ları ve subagent'ları tek kurulumda paketleyen bileşen.

Ayrıntı için [MCP Nedir?](/wiki/mcp/nedir/) sayfasına bakın. Ürün tanıtımları: [Claude Connectors](/claude/connectors/) ve [Claude Plugins](/claude/plugins/).

## Pratik Yaklaşım

Bir çalışanın Claude deneyimini **gerçekten dönüştüren şey** connector kurulumudur.

İlk hafta: Claude uygulaması (masaüstünde Cowork dahil) ve kalıcı talimat (klasörde CLAUDE.md, profil talimatı) kurulur. Çalışan Claude'la konuşmayı öğrenir.

İkinci hafta: rolüne göre **1-2 kritik connector** kurulur (örn. satış için Salesforce + Gmail). "Artık Claude gerçekten çalışma sistemimle konuşuyor" hissi oluşur.

Bu, tek seferlik bir seviye atlayışıdır. Bir kez yaşayan çalışan genelde geri dönmek istemez.

Hangi rolün hangi connector'a ihtiyaç duyduğu [Bağlantı Listesi](/wiki/mcp/baglanti-listesi/) sayfasındaki rol bazlı önerilerde. Kullandığınız sistem dizinde yoksa (örneğin yerel bir ERP), [Şirket Sistemini Claude'a Bağlamak](/wiki/mcp/sirket-sistemini-baglamak/) sayfasından başlayın.

## Nereye Gitmeli?

MCP'yi anladıysanız:

- [**Yetenekler**](/wiki/yetenekler/): Connector'larla birlikte çalışan skill'ler, artifacts, agent'lar
- [**Departmanlar**](/wiki/departmanlar/): Rol bazlı connector uygulamaları
- [**Cowork Modu**](/wiki/araclar/cowork-modu/): Connector'ların yaşadığı ortam
