---
title: MCP Nedir? — Claude'u Şirket Araçlarınıza Bağlayan Standart
description: Model Context Protocol (MCP), Claude'un Slack, Drive, CRM ve diğer servislere bağlanma standardıdır. Plugin'ler ve connector'lar bu protokol üzerinde çalışır.
tags:
  - mcp
  - plugins
  - connector
  - standart
---


# MCP Nedir?

**MCP (Model Context Protocol), Claude'un dış servislere bağlanmasını sağlayan açık bir standarttır.**

Basit çeviriyle: bir **MCP server**, Claude ile üçüncü taraf bir uygulama arasındaki köprüdür. Bir MCP connector kurulup kimlik doğrulaması yapıldığında, **Claude o servis üzerinde sizin adınıza gerçek eylemler alabilir**.

Bu, Claude'u tek başına bir sohbet aracından, **şirketinizin tüm iş yığınının üstüne oturan akıllı bir katman**a dönüştüren şeydir.

## MCP Mimarisi

Claude tek protokolle (MCP) konuşur, her servis kendi MCP server'ı üzerinden bağlanır. Yeni bir araç eklemek **yeni connector** kurmak demektir, Claude'un kendisi değişmez.

## Plugin ve Connector — İlişkisi Ne?

İki terim sık birbirine karışır:

- **Connector** = Claude ile tek bir servis arasındaki bağlantı (örn. Slack connector, Google Drive connector)
- **Plugin** = İlgili skill'leri, connector'ları ve subagent'ları tek kurulumda bir araya getiren paket

**Örnek:** Sales plugin kurduğunuzda şunlar birlikte gelir:

- call-prep skill
- account-research skill
- draft-outreach skill
- CRM connector (mevcutsa)

Tek tıkla hepsi kurulur. Ayrı ayrı uğraşmazsınız.

## Connector'lar Nasıl Çalışır?

Bir önemli teknik ayrıntı: **Cowork'teki connector'lar, dış servislere Anthropic'in bulutu üzerinden ulaşır** — yerel ağınız üzerinden değil.

Bu IT için kritiktir:

- **Standart iş araçları** (Slack, Google Workspace, Microsoft 365, Notion, Salesforce, HubSpot gibi kamuya açık servisler) için connector'lar **IT müdahalesi olmadan** kurulabilir — sadece kimlik doğrulaması yeterlidir.
- **Şirket içi özel sistemler** (internete açık olmayan dahili ERP, iç CRM) için iki seçenek vardır:
  1. Sistem internete erişilebilir hale getirilmeli, veya
  2. **Kurumsal ağ perimetresi içinde özel bir MCP server** kurulmalı

Türkiye'deki çoğu orta ölçekli şirket için **standart connector'lar** (Slack, Drive, Gmail, CRM) sorun olmadan çalışır. Dahili ERP'ler için [Computer Use](../yetenekler/computer-use/) genellikle daha pratik bir alternatiftir.

## MCP Açık Bir Standart — Ne Demek?

MCP'nin "open standard" (açık standart) olması önemli bir tasarım seçimidir:

- **Anthropic'e özel değil** — başka AI sistemleri de MCP kullanabilir
- **Özelleştirilebilir** — şirketler kendi MCP server'larını yazabilir
- **Uzun ömürlü** — bir connector bugün çalışıyorsa, protokol standart kaldığı sürece yarın da çalışacak
- **Güvenli** — kimlik doğrulama ve yetkilendirme protokolün parçası

Bu, Claude'u seçen bir şirketin **kendini Anthropic'e kilitlememiş** olduğu anlamına gelir. Claude ile geliştirdiğiniz entegrasyonlar başka bir dile taşınabilir.

## Plugin Nasıl Kurulur?

1. Cowork'ü açın → yan panelde **"Customize"** (Özelleştir)
2. Plugin kataloğunu gözden geçirin
3. İstediğiniz plugin'in üzerinde **"Install"** (Kur)
4. İçindeki connector'ların giriş gerektirenleri varsa tek seferlik kimlik doğrulaması yapın (OAuth)
5. Plugin skill'leri hemen oturumlarınızda `/` ile erişilebilir

İç şirket araçlarınız varsa **özel plugin** yükleyebilirsiniz — manuel yükleme bu amaç içindir.

## Enterprise — Özel Plugin Marketplace

Kurumsal dağıtımlarda (Enterprise planında) şirket, **özel bir plugin marketplace** kurabilir:

- Şirket-spesifik araçlarla zenginleştirilmiş, yönetici kontrollü katalog
- Çalışanlar **şirket kataloğundan** kurar — kamuya açık katalogdan değil
- IT hangi plugin'lerin onaylandığını yönetir
- Hassas entegrasyonlar için onay süreci

Bu, büyük şirketler için KVKK uyumlu ve güvenlik-denetimli bir dağıtım modeli sağlar.

## Connector'lar Niçin Önemli?

Claude, connector'lar olmadan bir **sohbet aracıdır**. Connector'larla **gerçek bir iş meslektaşı** gibi davranır — şirket sistemlerinize erişebilen, gerçek veriyi okuyan, gerçek eylem alabilen.

**Örnek — Satış çalışanı:**

- **Connector'sız:** "XYZ Gıda ile son durumum ne?" → Claude bilmez. Siz açıklarsınız.
- **Connector'lu (Salesforce + Gmail):** "XYZ Gıda ile son durumum ne?" → Claude CRM'e bakar, son yazışmaları okur, durumu özetler. Siz hiçbir şey söylememeden.

Aradaki fark çalışanın günlük deneyiminde çok büyüktür.

## Zamana'nın Yaklaşımı

Zamana eğitim programında **her çalışan için 1-2 kritik connector** belirlenir ve 2. Oturum'da kurulur:

| Rol | Tipik Connector'lar |
|---|---|
| Satış | Salesforce / HubSpot + Gmail |
| Pazarlama | Google Workspace + Slack |
| Operasyon | Slack + Asana + Google Sheets |
| İK | Microsoft 365 + Slack |
| Finans | Google Workspace (Sheets) |
| Yönetici Asistanı | Microsoft 365 tam paket + Slack |

Kurulum yaklaşık 5-10 dakika sürer. Sonuç: çalışan ertesi günden itibaren "connectorlu Claude" deneyimindedir — geri dönüşü olmayan bir seviye atlayışıdır.

## Güvenlik ve İzinler

- Her connector **ayrı izin** ister. Slack'e izin verdiniz diye Drive'a erişim kazanılmaz.
- Kimlik doğrulama **OAuth 2.0** üzerinden yapılır — şifrelerinizi Claude görmez
- Her eylem **çalışanın onayıyla** yapılabilir (yazma, silme, gönderme)
- İstediğiniz zaman bir connector'u **devre dışı** bırakabilirsiniz

Detaylar için: [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) sayfasına bakın.

## İlgili Sayfalar

- [MCP Bağlantı Listesi](baglanti-listesi/) — Mevcut connector'ların detaylı katalogu
- [Skills](../yetenekler/skills/) — Plugin'lerin içinde gelen uzmanlık paketleri
- [Cowork Modu](../araclar/cowork-modu/) — Connector'ların yaşadığı ortam
- [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) — Connector güvenlik mimarisi


