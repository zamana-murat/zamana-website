---
title: "MCP Bağlantı Listesi: Claude'u İş Araçlarınıza Bağlamak"
seoTitle: "Claude Connector Listesi: Role Göre ~900 Bağlantı"
description: "Claude'un resmi dizininde yaklaşık 900 connector var. Satış, finans, İK, hukuk ve operasyon için hangileri kritik, rol bazında liste."
tags:
  - mcp
  - connector
  - entegrasyon
  - liste
lastUpdated: "2026-10-06"
---

Ekim 2026 itibarıyla Claude'un resmî dizininde yaklaşık 900 bağlayıcı (connector) bulunur. Connector, bir MCP sunucusudur ([MCP Nedir?](/wiki/mcp/nedir/)). Bu sayfa bunların hepsini değil, iş dünyasında en yaygın kullanılanları kategoriye göre listeler ve **hangi connector'un hangi rol için kritik** olduğunu gösterir.

> **Not:** Dizin düzenli olarak büyür. Güncel kataloğu Claude'da **Customize > Connectors** bölümünden veya claude.com/connectors adresinden görebilirsiniz. Ürün çerçevesi için [Claude Connectors](/claude/connectors/) sayfasına bakın. Team ve Enterprise'ta bazı connector'ları önce kuruluş sahibi (Owner) açar. 23 Eylül 2026'da açılan [Claude Marketplace](/haberler/2026-09-23-claude-marketplace/) connector'ları, eklentileri ve ortak hizmetleri tek yerde toplar ve 2.000'den fazla bağlayıcı ve eklenti sunar. Bu sayı eklentileri de kapsar; yalnızca connector sayan dizinin yaklaşık 900 rakamıyla çelişmez.

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
| **Close CRM** | Kişilere ve pipeline'a erişir (Close'un kendi connector'ı, resmi dizinde) |

**Kimler için kritik:** Satış, iş geliştirme, müşteri hizmetleri. [Satış](/wiki/departmanlar/satis/) departmanı sayfasında detayları var.

## Proje Yönetimi

| Connector | Claude Ne Yapabilir |
|---|---|
| **Atlassian** | Jira, Confluence, Bitbucket ve Loom'a erişir (Atlassian'ın kendi yaptığı connector, resmi dizinde) |
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
| **Amplitude** | Analitik verisini sorgular (Amplitude'un kendi connector'ı, resmi dizinde) |
| **Supermetrics** | Pazarlama performans verisini çeker (Supermetrics'in kendi connector'ı, resmi dizinde) |

**Kimler için kritik:** Pazarlama analitiği yapan, veri odaklı karar alan roller.

## Finans ve Muhasebe

| Connector | Claude Ne Yapabilir |
|---|---|
| **QuickBooks** | Intuit'in kendi connector'ı, resmi dizinde. Muhasebe verisine erişir |
| **Xero** | Xero'nun kendi connector'ı, resmi dizinde, salt okunur |

**Türkiye'de yaygın muhasebe yazılımları:** Logo, Mikro ve Netsis için resmi dizinde connector yok; Ekim 2026 taramamızda yazılım sağlayıcılarının yayımladığı resmi bir MCP sunucusu da bulamadık. Paraşüt için yalnızca resmi olmayan, topluluk yapımı bir sunucu var; onu iş verisi için önermiyoruz ([MCP Güvenliği](/wiki/mcp/guvenlik/)). Bu araçlarla Claude'u nasıl kullanacağınız [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/) sayfasında. Kendi sisteminizi bağlamayı düşünüyorsanız [Şirket Sistemini Claude'a Bağlamak](/wiki/mcp/sirket-sistemini-baglamak/) sayfasına bakın.

**Kimler için kritik:** Finans, muhasebe, genel müdür yardımcılığı. Bu iki yazılım yurt dışı kökenlidir; kullanmıyorsanız bu bölümdeki connector'lar size uymaz, Türk vergi ve e-Fatura düzenine uygunluklarını da ayrıca sormanız gerekir.

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
- Yurt dışı kökenli bir muhasebe yazılımı kullanıyorsanız (QuickBooks, Xero) kendi connector'ı. Logo, Mikro, Netsis ve Paraşüt için [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/) sayfasına bakın

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
| **Productivity** | Kişisel verimlilik için görev ve hafıza yönetimi skill'leri |

## Özel Connector: Şirket İçi Sistemler

Dizinde olmayan bir sistemi (iç CRM, müşteri portalı, özel veritabanı, yerel ERP) Claude'a bağlamanın yolu **özel connector** ya da **masaüstü uzantısıdır**:

- **Özel connector:** sistemin MCP sunucusunun internet adresini (URL) Claude'a verirsiniz. Sunucu internetten erişilebilir olmalıdır. Team ve Enterprise'ta yalnız kuruluş sahibi ekler, üyeler kendi hesaplarıyla bağlanır.
- **Masaüstü uzantısı:** kullanıcının bilgisayarında çalışan bir MCP sunucusu paketi (`.mcpb`).

İkisi de bir MCP sunucusunun hazır olmasını gerektirir. Bunu BT ekibiniz, yazılım sağlayıcınız ya da bir entegrasyon ortağı kurar; iş kullanıcısının kendi başına yapacağı bir iş değildir. Nereden başlanacağı, kimden ne isteneceği ve pilotun nasıl kurulacağı [Şirket Sistemini Claude'a Bağlamak](/wiki/mcp/sirket-sistemini-baglamak/) sayfasında.

Alternatif: [Computer Use](/wiki/yetenekler/computer-use/) ile API olmayan sistemleri Claude'un ekrandan kontrol etmesini denemek (research preview, yalnızca Pro ve Max, masaüstü uygulamasında).

## Kurulum İpuçları

- **OAuth akışı bir kez yapılır.** Kurarsınız, tarayıcı açılır, giriş yapıp "izin ver" dersiniz. Sonrasında connector kendiliğinden çalışır.
- **Şirket politikası:** Team ve Enterprise'ta kuruluş sahibi hangi connector'ların açık olduğunu belirler ve araç kategorileri için "Always allow / Needs approval / Blocked" kuralı koyabilir. Şirket içi plugin dağıtımı için özel plugin marketplace de Team ve Enterprise'ta vardır.
- **Test et, sonra yaygınlaştır:** bir departmanda bir çalışanla deneyin. İş akışında fayda görülürse ekibe yayın.
- **İzinleri en dar tutun:** connector'ların bazılarında okuma ve yazma araçları ayrıdır. Gerçekten gerekmiyorsa yazma araçlarına "Always allow" demeyin, yönetici iseniz yazma kategorisini "Needs approval" ya da "Blocked" yapın.

## İlgili Sayfalar

- [MCP Nedir?](/wiki/mcp/nedir/): Standart ve genel çerçeve
- [Şirket Sistemini Claude'a Bağlamak](/wiki/mcp/sirket-sistemini-baglamak/): Dizinde olmayan sistemler için karar akışı
- [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/): Logo, Mikro, Paraşüt ve diğerleri
- [Skills](/wiki/yetenekler/skills/): Plugin'lerin içinde gelen skill'ler
- [Departmanlar](/wiki/departmanlar/): Rol bazlı connector önerileri
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Connector güvenlik ve onay modeli

