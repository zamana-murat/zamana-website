---
title: "MCP Bağlantı Listesi: Claude'u İş Araçlarınıza Bağlamak"
description: "Claude'un resmî connector dizininde yaklaşık 900 connector var. Slack, Google Workspace, Microsoft 365, Salesforce, HubSpot ve diğerleri rol bazında."
tags:
  - mcp
  - connector
  - entegrasyon
  - liste
lastUpdated: "2026-10-05"
---

Ekim 2026 itibarıyla Claude'un resmî dizininde yaklaşık 900 bağlayıcı (connector) bulunur. Bu sayfa bunların hepsini değil, iş dünyasında en yaygın kullanılanları kategoriye göre listeler ve **hangi connector'un hangi rol için kritik** olduğunu gösterir.

> **Not:** Dizin düzenli olarak büyür. Güncel kataloğu Cowork → **"Customize"** menüsünden veya claude.com/connectors adresinden görebilirsiniz. 23 Eylül 2026'da açılan [Claude Marketplace](/haberler/2026-09-23-claude-marketplace/) connector'ları, eklentileri ve ortak hizmetleri tek yerde toplar ve 2.000'den fazla bağlayıcı ve eklenti sunar. Bu sayı eklentileri de kapsar; yalnızca connector sayan dizinin yaklaşık 900 rakamıyla çelişmez.

## Üretkenlik ve Belgeler

| Connector | Claude Ne Yapabilir |
|---|---|
| **Microsoft 365** | SharePoint, OneDrive, Outlook ve Teams araması yapar; e-posta, takvim, dosya ve Teams mesajı gönderebilir (yönetici tek tek açıp kapatabilir). Team ve Enterprise'ta önce organizasyon sahibi etkinleştirir. Word, Excel ve PowerPoint için ayrı [Office eklentileri](/wiki/araclar/office-ve-chrome/) vardır |
| **Google Workspace** | Docs, Sheets, Slides okur ve yazar; Drive'a erişir; Gmail ve Calendar okur |
| **Notion** | Sayfaları ve veritabanlarını okur / yazar |
| **Dropbox** | Dosyalara erişir ve yönetir |

**Kimler için kritik:** Tüm roller. Şirketin kullandığı ofis paketinin connector'ı her çalışan için kurulmalı.

## İletişim

| Connector | Claude Ne Yapabilir |
|---|---|
| **Slack** | Mesaj okur, mesaj gönderir, kanalları arar. Kanallarda Claude'u etiketlemek için [Claude Tag](/haberler/2026-09-24-claude-tag-kisisel-baglayicilar/) (Team ve Enterprise) |
| **Gmail** | E-postaları okur, taslak hazırlar, gönderir |
| **Microsoft Teams** | Ayrı bir connector değildir, Microsoft 365 connector'ının parçasıdır (yukarıya bakın). Teams içinde ayrı bir resmî Claude uygulaması da yoktur |

**Kimler için kritik:** Neredeyse herkes. Özellikle takım iletişim merkezi olan roller için vazgeçilmez.

## Satış ve CRM

| Connector | Claude Ne Yapabilir |
|---|---|
| **Salesforce** | Kişi, fırsat, hesap kayıtlarını okur / günceller |
| **HubSpot** | CRM kayıtlarını, fırsatları okur / günceller |
| **Close CRM** | Kişilere ve pipeline'a erişir |

**Kimler için kritik:** Satış, iş geliştirme, müşteri hizmetleri. [Satış](/wiki/departmanlar/satis/) departmanı sayfasında detayları var.

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
- **CRM** (Salesforce veya HubSpot): pipeline'a erişim için olmazsa olmaz
- **Gmail / Outlook**: müşteri yazışmaları için
- **Google Workspace / Microsoft 365**: teklif ve sunum belgeleri için

### Pazarlama Uzmanı
- **Google Workspace** veya **Microsoft 365**: içerik üretimi
- **Slack**: takım iletişimi
- **Canva / Figma**: tasarım
- (opsiyonel) **Supermetrics**: kampanya performansı

### Finans Direktörü
- **Google Workspace** veya **Microsoft 365** (özellikle Excel / Sheets): raporlama
- **Outlook** veya **Gmail**: paydaş iletişimi

### Operasyon Yöneticisi
- **Asana** veya **Monday.com**: süreç yönetimi
- **Slack**: olay bildirimi
- **Google Sheets** veya **Excel**: operasyonel metrikler

### İnsan Kaynakları
- **Microsoft 365**: aday ve çalışan belgeleri
- **Slack** veya **Teams**: iç iletişim
- (opsiyonel) **DocuSign**: teklif mektubu imzaları

### Hukuk Müşaviri
- **Microsoft 365** veya **Google Workspace**: sözleşme belgeleri
- **DocuSign**: imza süreçleri
- **Outlook**: resmi yazışmalar

### Yönetici Asistanı
- **Microsoft 365 tam paket** (Outlook Calendar, Email, OneDrive)
- **Slack** veya **Teams**: iç iletişim
- (rolün genişliğine göre) **DocuSign**, **Asana**

## Plugin Olarak Gelen Sektörel Paketler

Ayrıca Anthropic'in sektörel **plugin paketleri** var. Bir plugin kurduğunuzda içindeki skill'ler + connector'lar birlikte gelir:

| Plugin | İçerdiği |
|---|---|
| **Sales** | call-prep, account-research, draft-outreach + CRM connector. Salesforce için ayrıca [Salesforce in Claude](/haberler/2026-09-15-salesforce-claude-icinde/) eklentisi (beta, 37 satış skill'i) |
| **Marketing** | content-creation, campaign-plan |
| **Operations** | process-doc, runbook |
| **Legal** | review-contract, triage-nda |
| **Productivity** | task-management, memory-management (kişisel verimlilik için) |

## Özel Connector: Şirket İçi Sistemler

Standart connector'ların dışında, şirketinize özel connector geliştirilebilir:

- Dahili ERP'ye bağlantı (Paraşüt, Logo ve Mikro için resmî bir Claude connector yoktur; Paraşüt'ün REST API'si üzerinden özel connector kurulabilir)
- Şirket içi müşteri portalına bağlantı
- Özel veritabanı sistemlerine bağlantı

Bu MCP server geliştiriciliği gerektirir; iş profesyoneli kapsamı dışındadır, ama IT ekibiniz veya bir entegrasyon ortağı kurabilir. [MCP protokolü açık standarttır](/wiki/mcp/nedir/).

Alternatif: [Computer Use](/wiki/yetenekler/computer-use/) ile API olmayan sistemleri Claude'un ekrandan kontrol etmesini denemek (research preview, yalnızca Pro ve Max, masaüstü uygulamasında).

## Kurulum İpuçları

- **OAuth akışı bir kez yapılır.** Kurarsınız, tarayıcı açılır, giriş yapıp "izin ver" dersiniz. Sonrasında connector kendiliğinden çalışır.
- **Şirket politikası:** IT ekibi hangi connector'ların onaylı olduğunu belirleyebilir. Özellikle Enterprise planda private plugin marketplace kullanılır.
- **Test et, sonra yaygınlaştır:** bir departmanda bir çalışanla deneyin. İş akışında fayda görülürse ekibe yayın.
- **İzinleri en dar tutun:** connector'ların bazılarında "read" ve "write" ayrı. Gerçekten gerekmiyorsa "write" izni vermeyin.

## İlgili Sayfalar

- [MCP Nedir?](/wiki/mcp/nedir/): Standart ve genel çerçeve
- [Skills](/wiki/yetenekler/skills/): Plugin'lerin içinde gelen skill'ler
- [Departmanlar](/wiki/departmanlar/): Rol bazlı connector önerileri
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Connector güvenlik ve onay modeli

