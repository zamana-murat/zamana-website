---
title: "MCP Bağlantı Listesi — Claude'u İş Araçlarınıza Bağlamak"
description: "Claude'un 38+ hazır connector'u — Slack, Google Workspace, Microsoft 365, Salesforce, HubSpot, Notion, Asana, Figma, DocuSign ve diğerleri."
tags:
  - mcp
  - connector
  - entegrasyon
  - liste
---

2026 itibariyle Claude 38+ hazır connector ile gelir. Bu sayfa iş dünyasında en yaygın kullanılanları kategoriye göre listeler ve **hangi connector'un hangi rol için kritik** olduğunu gösterir.

> **Not:** Bu liste zamanla büyür. Güncel katalogu Cowork → **"Customize"** menüsünden görebilirsiniz. Anthropic yeni connector'ları düzenli ekliyor.

## Üretkenlik ve Belgeler

| Connector | Claude Ne Yapabilir |
|---|---|
| **Microsoft 365** | Word, Excel, PowerPoint okur ve yazar; SharePoint'e erişir; Outlook e-posta ve takvim okur |
| **Google Workspace** | Docs, Sheets, Slides okur ve yazar; Drive'a erişir; Gmail ve Calendar okur |
| **Notion** | Sayfaları ve veritabanlarını okur / yazar |
| **Dropbox** | Dosyalara erişir ve yönetir |

**Kimler için kritik:** Tüm roller. Şirketin kullandığı ofis paketinin connector'ı her çalışan için kurulmalı.

## İletişim

| Connector | Claude Ne Yapabilir |
|---|---|
| **Slack** | Mesaj okur, mesaj gönderir, kanalları arar |
| **Gmail** | E-postaları okur, taslak hazırlar, gönderir |
| **Microsoft Teams** | Mesaj okur, güncelleme yayınlar |

**Kimler için kritik:** Neredeyse herkes. Özellikle takım iletişim merkezi olan roller için vazgeçilmez.

## Satış ve CRM

| Connector | Claude Ne Yapabilir |
|---|---|
| **Salesforce** | Kişi, fırsat, hesap kayıtlarını okur / günceller |
| **HubSpot** | CRM kayıtlarını, fırsatları okur / günceller |
| **Close CRM** | Kişilere ve pipeline'a erişir |

**Kimler için kritik:** Satış, iş geliştirme, müşteri hizmetleri. [Satış](../departmanlar/satis/) departmanı sayfasında detayları var.

## Proje Yönetimi

| Connector | Claude Ne Yapabilir |
|---|---|
| **Asana** | Görevleri ve projeleri okur / oluşturur / günceller |
| **Linear** | Issue'ları ve projeleri okur / yönetir |
| **ClickUp** | Görevlere ve projelere erişir |
| **Monday.com** | Board'ları ve kalemleri okur / günceller |

**Kimler için kritik:** Operasyon, teknoloji, pazarlama, proje bazlı çalışan her rol.

## Tasarım

| Connector | Claude Ne Yapabilir |
|---|---|
| **Figma** | Tasarımları okur, asset'lere erişir |
| **Canva** | Tasarım oluşturur ve düzenler |

**Kimler için kritik:** Pazarlama, tasarım ekibi, içerik üreticisi.

## Veri ve Analitik

| Connector | Claude Ne Yapabilir |
|---|---|
| **Amplitude** | Analitik verisini sorgular |
| **Supermetrics** | Pazarlama performans verisini çeker |

**Kimler için kritik:** Pazarlama analitiği yapan, veri odaklı karar alan roller.

## Hukuk ve Uyumluluk

| Connector | Claude Ne Yapabilir |
|---|---|
| **DocuSign** | E-imza için belge hazırlar ve yönlendirir |

**Kimler için kritik:** Hukuk, İK, satış (sözleşme imza süreçleri).

## Role Göre Önerilen Connector Seti

Her rol için "olmadan olmaz" tip connector önerileri:

### Satış Yöneticisi
- **CRM** (Salesforce veya HubSpot) — pipeline'a erişim için olmazsa olmaz
- **Gmail / Outlook** — müşteri yazışmaları için
- **Google Workspace / Microsoft 365** — teklif ve sunum belgeleri için

### Pazarlama Uzmanı
- **Google Workspace** veya **Microsoft 365** — içerik üretimi
- **Slack** — takım iletişimi
- **Canva / Figma** — tasarım
- (opsiyonel) **Supermetrics** — kampanya performansı

### Finans Direktörü
- **Google Workspace** veya **Microsoft 365** (özellikle Excel / Sheets) — raporlama
- **Outlook** veya **Gmail** — paydaş iletişimi

### Operasyon Yöneticisi
- **Asana** veya **Monday.com** — süreç yönetimi
- **Slack** — olay bildirimi
- **Google Sheets** veya **Excel** — operasyonel metrikler

### İnsan Kaynakları
- **Microsoft 365** — aday ve çalışan belgeleri
- **Slack** veya **Teams** — iç iletişim
- (opsiyonel) **DocuSign** — teklif mektubu imzaları

### Hukuk Müşaviri
- **Microsoft 365** veya **Google Workspace** — sözleşme belgeleri
- **DocuSign** — imza süreçleri
- **Outlook** — resmi yazışmalar

### Yönetici Asistanı
- **Microsoft 365 tam paket** (Outlook Calendar, Email, OneDrive)
- **Slack** veya **Teams** — iç iletişim
- (rolün genişliğine göre) **DocuSign**, **Asana**

## Plugin Olarak Gelen Sektörel Paketler

Ayrıca Anthropic'in sektörel **plugin paketleri** var. Bir plugin kurduğunuzda içindeki skill'ler + connector'lar birlikte gelir:

| Plugin | İçerdiği |
|---|---|
| **Sales** | call-prep, account-research, draft-outreach + CRM connector |
| **Marketing** | content-creation, campaign-plan + sosyal medya skill'leri |
| **Operations** | process-doc, runbook + proje yönetimi skill'leri |
| **Legal** | review-contract, triage-nda |
| **Productivity** | task-management, memory-management (kişisel verimlilik için) |

## Özel Connector — Şirket İçi Sistemler

Standart connector'ların dışında, şirketinize özel connector geliştirilebilir:

- Dahili ERP'ye bağlantı
- Şirket içi müşteri portalına bağlantı
- Özel veritabanı sistemlerine bağlantı

Bu MCP server geliştiriciliği gerektirir — Zamana kapsamı dışındadır, ama IT ekibiniz veya bir entegrasyon ortağı kurabilir. [MCP protokolü açık standarttır](nedir/).

Pratik alternatif: [Computer Use](../yetenekler/computer-use/) ile API olmayan sistemleri Claude'un ekrandan kontrol etmesi.

## Kurulum Ipuçları

- **OAuth akışları bir kez yapılır.** Kuruyor → tarayıcı açılıyor → giriş yapıyor → "izin ver" → tamam. Sonrasında sadece çalışır.
- **Şirket politikası:** IT ekibi hangi connector'ların onaylı olduğunu belirleyebilir. Özellikle Enterprise planda private plugin marketplace kullanılır.
- **Test et, sonra yaygınlaştır:** bir departmanda bir çalışanla deneyin. İş akışında fayda görülürse ekibe yayın.
- **İzinleri en dar tutun:** connector'ların bazılarında "read" ve "write" ayrı. Gerçekten gerekmiyorsa "write" izni vermeyin.

## Güncel Liste Nereden?

Bu sayfa **2026 başı itibariyle** doğru. Anthropic düzenli olarak yeni connector ekliyor. **Güncel listeyi** Cowork → **Customize** menüsünden görebilirsiniz. Zamana eğitim oturumlarında son kataloğu açarız.

## İlgili Sayfalar

- [MCP Nedir?](nedir/) — Standart ve genel çerçeve
- [Skills](../yetenekler/skills/) — Plugin'lerin içinde gelen skill'ler
- [Departmanlar](../departmanlar/) — Rol bazlı connector önerileri
- [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) — Connector güvenlik ve onay modeli

