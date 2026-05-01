---
title: "MCP ve Eklentiler — Claude'u İş Sisteminize Oturtmak"
description: "MCP (Model Context Protocol) ve plugin'ler, Claude'u şirketinizin Slack, Drive, CRM, proje yönetimi araçlarına bağlar. Sohbetten iş meslektaşlığına geçiş."
tags:
  - mcp
  - plugins
  - connector
  - giris
---

**Claude, connector'lar olmadan bir sohbet aracıdır. Connector'larla gerçek bir iş meslektaşı gibi davranır.**

Bu bölüm Claude'u Slack, Drive, CRM, proje yönetimi araçlarınıza bağlayan sistemi anlatır.

## Bu Bölümdeki Sayfalar

<div class="wiki-grid">

-   <span class="wiki-icon wiki-icon--lg" data-icon="information-outline" aria-hidden="true"></span> **MCP Nedir?**

    ---

    Model Context Protocol standardı — plugin'ler, connector'lar ve Claude'un iş sistemlerine bağlanma mimarisi.

    [→ MCP Nedir?](nedir/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="view-list-outline" aria-hidden="true"></span> **Bağlantı Listesi**

    ---

    38+ hazır connector — Slack, Google, Microsoft 365, Salesforce, HubSpot, Notion, Asana, DocuSign ve diğerleri.

    [→ Bağlantı Listesi](baglanti-listesi/)

</div>

## Ana Fikir

Tüm bölümün özeti tek cümleye indirgenirse:

> **Bir connector, Claude'u sizin sohbet arkadaşınızdan çıkarıp gerçek sisteminize erişen bir iş meslektaşına çevirir.**

Satış çalışanı için: "XYZ Gıda ile son durumum ne?" sorusuna Claude — connector'suz — cevap veremez. Connector'lu Claude (Salesforce + Gmail bağlı) aynı soruyu saniyeler içinde doğru cevaplar: CRM kaydını okur, son yazışmayı tarar, özet üretir.

Bu fark küçük değil — **Claude deneyiminin tümü değişir**.

## Plugin ve Connector — Kısa Fark

Bölümde sık karıştırılan iki terim:

- **Connector** = Claude ile tek bir servis arasındaki bağlantı (örn. Slack connector)
- **Plugin** = İlgili skill'leri + connector'ları + subagent'ları tek kurulumda paketleyen bileşen (örn. Sales plugin içinde 3 skill + CRM connector birlikte gelir)

Plugin kurulumu genellikle daha pratiktir — ilgili bileşenler bir arada gelir.

## Zamana'nın Yaklaşımı

Bir çalışanın Claude deneyimini **2. Oturum'da seviye atlatıran şey** connector kurulumudur.

1. Oturum'da Claude Desktop, Cowork, CLAUDE.md kuruldu. Çalışan Claude'la konuşmayı öğrendi.

2. Oturum'da çalışanın rolüne göre **1-2 kritik connector** kurulur (örn. satış için Salesforce + Gmail). Oturumun sonunda çalışan, "oh, artık Claude gerçekten çalışma sistemimle konuşuyor" hissiyle ayrılır.

Bu geçiş tek seferlik bir seviye atlayışıdır. Bir kere yaşanınca geri dönüş olmaz.

## Hangi Connector'ları Hangi Rol İçin?

Bağlantı Listesi sayfasında role göre önerilerin detayı var. Özet:

| Rol | Kritik Connector'lar |
|---|---|
| Satış | CRM + Gmail + Google Workspace |
| Pazarlama | Google Workspace / M365 + Slack + Canva |
| Operasyon | Asana / Monday + Slack + Sheets |
| İK | M365 + Slack |
| Hukuk | M365 / Google + DocuSign |
| Yönetici Asistanı | M365 tam paket + Slack |

## Nereye Gitmeli?

MCP'yi anladıysanız:

- [**Yetenekler**](../yetenekler/) — Connector'larla birlikte çalışan skill'ler, artifacts, agent'lar
- [**Departmanlar**](../departmanlar/) — Rol bazlı connector uygulamaları
- [**Cowork Modu**](../araclar/cowork-modu/) — Connector'ların yaşadığı ortam

