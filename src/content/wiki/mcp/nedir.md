---
title: "MCP Nedir?: Claude'u Şirket Araçlarınıza Bağlayan Standart"
description: Model Context Protocol (MCP), Claude'un Slack, Drive, CRM ve diğer servislere bağlanma standardıdır. Plugin'ler ve connector'lar bu protokol üzerinde çalışır.
tags:
  - mcp
  - plugins
  - connector
  - standart
lastUpdated: "2026-10-05"
---

**MCP (Model Context Protocol), Claude'un dış servislere bağlanmasını sağlayan açık bir standarttır.**

Basit çeviriyle: bir **MCP server**, Claude ile üçüncü taraf bir uygulama arasındaki köprüdür. Bir MCP connector kurulup kimlik doğrulaması yapıldığında, **Claude o servis üzerinde sizin adınıza gerçek eylemler alabilir**.

Bu, Claude'u tek başına bir sohbet aracından, **şirketinizin tüm iş yığınının üstüne oturan akıllı bir katman**a dönüştüren şeydir.

## MCP Mimarisi

Claude tek protokolle (MCP) konuşur, her servis kendi MCP server'ı üzerinden bağlanır. Yeni bir araç eklemek **yeni connector** kurmak demektir, Claude'un kendisi değişmez.

## Plugin ve Connector: İlişkisi Ne?

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

Önemli bir teknik ayrıntı: **Cowork'teki connector'lar, dış servislere Anthropic'in bulutu üzerinden ulaşır**, yerel ağınız üzerinden değil.

Bu IT için kritiktir:

- **Standart iş araçları** (Slack, Google Workspace, Microsoft 365, Notion, Salesforce, HubSpot gibi kamuya açık servisler) için connector'lar **IT müdahalesi olmadan** kurulabilir, sadece kimlik doğrulaması yeterlidir.
- **Şirket içi özel sistemler** (internete açık olmayan dahili ERP, iç CRM) için iki seçenek vardır:
  1. Sistem internete erişilebilir hale getirilmeli, veya
  2. **Kurumsal ağ perimetresi içinde özel bir MCP server** kurulmalı

Türkiye'deki orta ölçekli şirketlerin kullandığı **standart connector'lar** (Slack, Drive, Gmail, CRM) genellikle sorunsuz çalışır. Resmî connector dizininde yaklaşık 900 connector bulunur; [Claude Marketplace](/haberler/2026-09-23-claude-marketplace/) ise connector'ları ve eklentileri tek yerde toplar.

Dahili ERP'ler için [Computer Use](/wiki/yetenekler/computer-use/) bir alternatif olabilir. Yalnızca Pro ve Max planlarında, masaüstü uygulamasında ve research preview olarak çalışır.

## MCP Açık Bir Standart: Ne Demek?

MCP'nin "open standard" (açık standart) olması önemli bir tasarım seçimidir:

- **Anthropic'e özel değil**: başka AI sistemleri de MCP kullanabilir
- **Özelleştirilebilir**: şirketler kendi MCP server'larını yazabilir
- **Uzun ömürlü**: protokol standart kaldığı sürece bir connector'un çalışmaya devam etmesi beklenir (bakımı yine sağlayıcıya bağlıdır)
- **Güvenli**: kimlik doğrulama ve yetkilendirme protokolün parçası

Bu, Claude'u seçen bir şirketin **kendini Anthropic'e kilitlememiş** olduğu anlamına gelir. Claude için geliştirdiğiniz entegrasyonlar, MCP'yi destekleyen başka sistemlere de taşınabilir.

## Plugin Nasıl Kurulur?

1. Cowork'ü açın → yan panelde **"Customize"** (Özelleştir)
2. Plugin kataloğunu gözden geçirin
3. İstediğiniz plugin'in üzerinde **"Install"** (Kur)
4. İçindeki connector'ların giriş gerektirenleri varsa tek seferlik kimlik doğrulaması yapın (OAuth)
5. Plugin skill'leri hemen oturumlarınızda `/` ile erişilebilir

İç şirket araçlarınız varsa **özel plugin** yükleyebilirsiniz, manuel yükleme bu amaç içindir.

## Enterprise: Özel Plugin Marketplace

Kurumsal dağıtımlarda (Enterprise planında) şirket, **özel bir plugin marketplace** kurabilir:

- Şirket-spesifik araçlarla zenginleştirilmiş, yönetici kontrollü katalog
- Çalışanlar **şirket kataloğundan** kurar: kamuya açık katalogdan değil
- IT hangi plugin'lerin onaylandığını yönetir
- Hassas entegrasyonlar için onay süreci

Bu, büyük şirketler için KVKK uyumlu ve güvenlik-denetimli bir dağıtım modeli sağlar.

## Connector'lar Niçin Önemli?

Claude, connector'lar olmadan bir **sohbet aracıdır**. Connector'larla **gerçek bir iş meslektaşı** gibi davranır: şirket sistemlerinize erişir, gerçek veriyi okur, gerçek eylem alabilir.

**Örnek, satış çalışanı:**

- **Connector'sız:** "XYZ Gıda ile son durumum ne?" → Claude bilmez. Siz açıklarsınız.
- **Connector'lu (Salesforce + Gmail):** "XYZ Gıda ile son durumum ne?" → Claude CRM'e bakar, son yazışmaları okur, durumu özetler. Siz hiçbir şey anlatmak zorunda kalmazsınız.

Aradaki fark çalışanın günlük deneyiminde çok büyüktür.

## Pratik Yaklaşım

İyi bir kurulum stratejisinde **her çalışan için 1-2 kritik connector** belirlenir ve önce o ikisi kurulur. Hangi rolün hangisine ihtiyaç duyduğunu [MCP bölümünün girişindeki](/wiki/mcp/) tabloda ve [Bağlantı Listesi](/wiki/mcp/baglanti-listesi/) sayfasında bulabilirsiniz.

Kurulum genellikle kısa sürer (OAuth girişi ve izin ekranları). Çalışan ertesi günden itibaren connector'lu Claude ile çalışabilir.

## Güvenlik ve İzinler

- Her connector **ayrı izin** ister. Slack'e izin verdiniz diye Drive'a erişim kazanılmaz.
- Kimlik doğrulama **OAuth 2.0** üzerinden yapılır: şifrelerinizi Claude görmez
- Her eylem **çalışanın onayıyla** yapılabilir (yazma, silme, gönderme)
- İstediğiniz zaman bir connector'u **devre dışı** bırakabilirsiniz

Detaylar için: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasına bakın.

## İlgili Sayfalar

- [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): Mevcut connector'ların detaylı katalogu
- [Skills](/wiki/yetenekler/skills/): Plugin'lerin içinde gelen uzmanlık paketleri
- [Cowork Modu](/wiki/araclar/cowork-modu/): Connector'ların yaşadığı ortam
- [Claude Marketplace haberi](/haberler/2026-09-23-claude-marketplace/): Connector ve eklenti pazar yeri
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Connector güvenlik mimarisi


