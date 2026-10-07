---
title: "MCP Nedir?: Claude'u Şirket Araçlarınıza Bağlayan Standart"
seoTitle: "MCP (Model Context Protocol) Nedir? Claude İçin Basit Anlatım"
description: "MCP (Model Context Protocol) nedir? Claude'un şirket araçlarına bağlanma standardı, connector ve plugin farkı, iç sistemleri bağlama yolu sade dille."
tags:
  - mcp
  - plugins
  - connector
  - standart
lastUpdated: "2026-10-06"
---

**MCP (Model Context Protocol), Claude'un dış servislere bağlanmasını sağlayan açık bir standarttır.**

Basit çeviriyle: bir **MCP sunucusu**, Claude ile üçüncü taraf bir uygulama arasındaki köprüdür. Claude'un arayüzünde gördüğünüz **connector** (bağlayıcı) bu köprünün kendisidir: **connector, bir MCP sunucusudur.** Kurulup kimlik doğrulaması yapıldığında Claude o servis üzerinde sizin adınıza işlem yapabilir.

Bu, Claude'u tek başına bir sohbet aracından, **şirketinizin iş yığınının üstüne oturan bir katman**a dönüştüren şeydir. Aradaki farkın günlük işte nasıl göründüğünü [MCP bölümünün girişindeki](/wiki/mcp/) örnekte bulabilirsiniz.

## MCP Mimarisi

Claude tek protokolle (MCP) konuşur, her servis kendi MCP sunucusu üzerinden bağlanır. Yeni bir araç eklemek **yeni connector** eklemek demektir, Claude'un kendisi değişmez.

![MCP mimarisi: istemci olarak Claude, ortada izin katmanlı MCP connector katmanı, sağda Google Drive, Microsoft 365, Slack, CRM ve özel MCP server ile şirket veritabanı; Logo ve Mikro için resmi connector yok](/images/wiki/mcp-mimari.svg)

## Üç Tür Bağlantı

"Connector" kelimesi gündelik dilde üç farklı şeyi karşılar. Üçü de MCP sunucusudur, farkları sunucunun nerede durduğu ve kimin hazırladığıdır:

| Tür | Nedir | Sunucu nerede | Kim kurar |
|---|---|---|---|
| **Dizin connector'ı** | Resmi dizinde hazır bekleyen bağlantı (Slack, Microsoft 365, Salesforce gibi) | Sağlayıcının internetteki sunucusu | Siz tıklarsınız. Team ve Enterprise'ta bazılarını önce yönetici açar |
| **Özel connector** | Dizinde olmayan bir sistem için, sunucunun internet adresini (URL) verip eklediğiniz bağlantı | İnternetten erişilebilen bir sunucu | Bireysel planlarda kullanıcı. Team ve Enterprise'ta yalnız kuruluş sahibi (Owner) ekler, üyeler kendi hesaplarıyla bağlanır |
| **Masaüstü uzantısı** | Claude Desktop'a tek tıkla kurulan paket (`.mcpb`, eski adıyla `.dxt`) | Sizin bilgisayarınızda | Kullanıcı kurar. Team ve Enterprise'ta yönetici onaylı liste zorunlu kılabilir |

Dizindeki bağlantılar Anthropic incelemesinden geçer, özel connector geçmez. Dizinde olmayan bir sunucu için Claude güvenlik uyarısı verir. Ama "incelemeden geçti" demek sizin verinizin güvende olduğunu garanti etmez; hangi veriyi açacağınıza yine siz karar verirsiniz ([MCP Güvenliği](/wiki/mcp/guvenlik/)).

Özel connector Free dahil tüm planlarda vardır (Free'de en çok 1 tane). Ürün çerçevesi için [Claude Connectors](/claude/connectors/) sayfasına, adım adım kurulum için [Kurulum Rehberi](/wiki/mcp/kurulum-rehberi/) sayfasına bakın.

## Plugin ve Connector: İlişkisi Ne?

İki terim sık birbirine karışır:

- **Connector** = Claude ile tek bir servis arasındaki bağlantı (örn. Slack, Google Drive)
- **Plugin** = İlgili skill'leri, connector'ları ve subagent'ları tek kurulumda bir araya getiren paket

**Örnek:** Sales plugin kurduğunuzda şunlar birlikte gelir:

- call-prep skill
- account-research skill
- draft-outreach skill
- CRM connector (mevcutsa)

Tek tıkla hepsi kurulur, ayrı ayrı uğraşmazsınız. Plugin'lerin ürün tanıtımı için [Claude Plugins](/claude/plugins/) sayfasına bakın.

## Connector'lar Nereden Çağrılır?

Bu, BT ekibinizin ve sizin kararınızı değiştiren bir ayrıntıdır: **uzak connector'lar (dizin ve özel), Claude'un kendi bulut altyapısından çağrılır, sizin bilgisayarınızdan ya da ofis ağınızdan değil.**

- **Standart iş araçları** (Slack, Google Workspace, Microsoft 365, Notion, Salesforce, HubSpot gibi herkese açık servisler) için ek bir ağ ayarı gerekmez, kimlik doğrulaması yeterlidir. Team ve Enterprise'ta bazılarını önce yönetici açar.
- **Şirket içi özel sistemler** (yalnız ofis ağında duran ERP, iç CRM) sohbet ve Cowork içinde ancak iki yolla bağlanır:
  1. Sistemin MCP sunucusu internetten erişilebilir hale getirilir (güvenlik duvarında Anthropic'in yayımladığı adres aralığına izin verilir), ya da
  2. Sunucu, kullanıcının bilgisayarında çalışan bir **masaüstü uzantısı** olur.
- Yalnızca iç ağdaki ya da VPN arkasındaki bir sunucuya, doğrudan uzak connector olarak ulaşılamaz. Ağ içindeki özel MCP sunucusuna tünelle bağlanma yolu bugün yalnız Managed Agents (API) tarafında ve araştırma önizlemesi (research preview) olarak var, claude.ai için değil.

> **BT ekibi / Geliştiriciler için.** Anthropic'in giden (outbound) IPv4 aralığı `160.79.104.0/21`'dir; bu aralık güvenlik duvarında izin listesine alınır, eski `34.162.x.x` adresleri kaldırılır. Güncel aralık için Anthropic'in IP adresleri sayfasına bakın. Yerel (Desktop) MCP sunucusu bu kuralın dışındadır, çünkü kullanıcının bilgisayarında çalışır. Özel connector'ın sunucusu herkese açık internetten erişilebilir olmalıdır.

Kendi sisteminizi bağlamak istiyorsanız karar akışı [Şirket Sistemini Claude'a Bağlamak](/wiki/mcp/sirket-sistemini-baglamak/) sayfasında.

Türkiye'deki orta ölçekli şirketlerin kullandığı **standart connector'lar** (Slack, Drive, Gmail, CRM) genellikle sorunsuz çalışır. Resmi dizinde yaklaşık 900 connector bulunur; [Claude Marketplace](/haberler/2026-09-23-claude-marketplace/) ise connector'ları ve eklentileri tek yerde toplar. Kurumsal değerlendirme için [Claude Marketplace (Kurumsal)](/kurumsal/marketplace/) sayfası var.

API'si olmayan dahili programlar için [Computer Use](/wiki/yetenekler/computer-use/) bir alternatif olabilir. Yalnızca Pro ve Max planlarında, masaüstü uygulamasında ve research preview olarak çalışır.

## MCP Açık Bir Standart: Ne Demek?

MCP'nin "open standard" (açık standart) olması önemli bir tasarım seçimidir:

- **Anthropic'e özel değil**: başka AI sistemleri de MCP kullanabilir
- **Özelleştirilebilir**: şirketler kendi MCP sunucularını yazabilir
- **Uzun ömürlü**: protokol standart kaldığı sürece bir connector'un çalışmaya devam etmesi beklenir (bakımı yine sağlayıcıya bağlıdır)
- **Yetkilendirme için ortak yol var**: MCP spesifikasyonu, HTTP üzerinden çalışan sunucular için OAuth 2.1 taslağına dayanan bir yetkilendirme tarif eder. Yetkilendirme isteğe bağlıdır, her sunucu uygulamak zorunda değildir; güvenlik bu yüzden sunucuya göre değişir

Bu, Claude'u seçen bir şirketin **kendini Anthropic'e kilitlememiş** olduğu anlamına gelir. Claude için hazırlattığınız bir MCP sunucusu, MCP'yi destekleyen başka sistemlerde de kullanılabilir.

## Plugin Nasıl Kurulur?

1. Cowork'ü açın, yan panelde **"Customize"** (Özelleştir) bölümüne girin
2. Plugin kataloğunu gözden geçirin
3. İstediğiniz plugin'in üzerinde **"Install"** (Kur) deyin
4. İçindeki connector'ların giriş gerektirenleri varsa tek seferlik kimlik doğrulaması yapın (OAuth)
5. Plugin skill'leri hemen oturumlarınızda `/` ile erişilebilir

İç şirket araçlarınız varsa **özel plugin** yükleyebilirsiniz, manuel yükleme bu amaç içindir.

## Team ve Enterprise: Özel Plugin Marketplace

Team ve Enterprise planlarında kuruluş sahibi, çalışanların kuracağı plugin'leri kendi kataloğunda toplayabilir:

- Şirkete özgü plugin'lerle zenginleştirilmiş, yönetici kontrollü katalog (plugin dosyalarını elle yükleyerek ya da özel bir GitHub deposundan senkronla)
- Çalışanlar **şirket kataloğundan** kurar
- Bazı plugin'ler otomatik kurulabilir ya da zorunlu tutulabilir
- Enterprise'ta ek olarak departman gruplarına göre farklı kurallar tanımlanabilir (örn. Hukuk'ta isteğe bağlı, Mühendislik'te otomatik)

Cowork ve Skills'in kuruluşta açık olması gerekir. Bu, büyük şirketler için KVKK açısından denetlenebilir bir dağıtım modeli kurmayı kolaylaştırır; ama tek başına KVKK uyumu sağlamaz.

## Pratik Yaklaşım

İyi bir kurulum stratejisinde **her çalışan için 1-2 kritik connector** belirlenir ve önce o ikisi kurulur. Hangi rolün hangisine ihtiyaç duyduğunu [Bağlantı Listesi](/wiki/mcp/baglanti-listesi/) sayfasında bulabilirsiniz.

Dizin connector'ının kurulumu tipik olarak birkaç dakika sürer (OAuth girişi ve izin ekranları); bu süre bir tahmindir, Team ve Enterprise'ta yöneticinin connector'ı önce açması gerekebilir. Özel bir sistem söz konusuysa süre sistemin hazır olup olmamasına bağlıdır.

## Güvenlik ve İzinler

- Her connector **ayrı izin** ister. Slack'e izin verdiniz diye Drive'a erişim kazanılmaz.
- Dizin ve özel connector'ların çoğu giriş için **OAuth** kullanır: şifrenizi Claude görmez. Bazı özel sunucular bunun yerine sabit bir anahtar kullanabilir ya da girişsiz çalışabilir.
- **Araç onayını Claude uygulaması yönetir**, sunucu değil. Claude bir aracı ilk kullanacağında sohbette sorar: "Allow once" (bir kez), "Always allow" (hep izin ver) ya da "Deny" (reddet).
- Team ve Enterprise'ta kuruluş sahibi, araç kategorileri için **Always allow / Needs approval / Blocked** kuralı koyabilir (örneğin e-postayı okusun ama göndermesin). Kullanıcı bu kuralı değiştiremez.
- İstediğiniz zaman bir connector'u **devre dışı** bırakabilirsiniz.
- Claude'a "izin ver" demek, kaynak sistemde sahip olmadığınız yetkiyi size vermez; kısıtlar yalnız daraltır.

Ayrıntı için [MCP Güvenliği](/wiki/mcp/guvenlik/) ve [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfalarına bakın.

## İlgili Sayfalar

- [Şirket Sistemini Claude'a Bağlamak](/wiki/mcp/sirket-sistemini-baglamak/): ERP, CRM ve iç araçlar için karar akışı
- [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): Mevcut connector'ların rol bazlı listesi
- [Skills](/wiki/yetenekler/skills/): Plugin'lerin içinde gelen uzmanlık paketleri
- [Cowork Modu](/wiki/araclar/cowork-modu/): Connector'ların yaşadığı ortam
- [Claude Marketplace haberi](/haberler/2026-09-23-claude-marketplace/): Connector ve eklenti pazar yeri
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Connector güvenlik mimarisi
