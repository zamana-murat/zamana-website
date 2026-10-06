---
title: "Claude Connectors: Claude'u Araçlarınıza Bağlayın"
seoTitle: "Claude Connectors: Gmail, Drive, Slack ve ~900 Araç"
description: "Connector'lar Claude'u Gmail, Drive, Slack, HubSpot gibi araçlara bağlar. Dizinde yaklaşık 900 var; Paraşüt, Logo ve Mikro için resmi olanı yok."
eyebrow: "Yetenek"
lead: "Connector, Claude'un Gmail, Drive, takvim, Slack ya da CRM'inizdeki bilgiye sizin yetkinizle erişmesini sağlar. Dosyaları kopyalayıp yapıştırmak yerine Claude'a \"şuna bak\" dersiniz."
heroAlt: "Claude connector dizini"
availability: "Free dahil tüm planlarda var. Team ve Enterprise'ta bazı connector'ları önce yönetici etkinleştirir."
sourceUrl: "https://claude.com/marketplace/connectors-plugins"
sourceTitle: "Connectors and plugins | Claude Marketplace"
related:
  - { label: "Connectors (wiki)", href: "/wiki/araclar/connectors/" }
  - { label: "MCP Nedir? (wiki)", href: "/wiki/mcp/nedir/" }
  - { label: "MCP Bağlantı Listesi (wiki)", href: "/wiki/mcp/baglanti-listesi/" }
  - { label: "MCP Güvenlik (wiki)", href: "/wiki/mcp/guvenlik/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
order: 8
lastUpdated: "2026-10-06"
---

## Nedir?

Claude tek başına yalnız sizin yazdığınız ya da yüklediğiniz şeyi görür. Connector bu sınırı kaldırır. Claude'u kullandığınız bir uygulamaya bağlarsınız; Claude o uygulamada sizin izinlerinizle arama yapar, okur ve (izin verdiyseniz) yazar. Gmail'de bir yazışmayı özetletmek, Drive'daki sözleşmeyi bulup karşılaştırmak, takvimde müsait saat aramak ya da Slack'ten bir ekibin son konuşmalarını çekmek gibi.

Connector'lar, arka planda Model Context Protocol (MCP) adlı açık standardı kullanır. Teknik ayrıntı gerekmez; kullanıcı olarak "Ekle" düğmesine basar, hesabınıza giriş yaparsınız. İsterseniz MCP'yi [wiki'deki MCP Nedir sayfasından](/wiki/mcp/nedir/) okuyabilirsiniz.

Resmî dizin Claude Marketplace içinde duruyor. Dizin sayfası yazıldığı gün yaklaşık 900 connector gösteriyor (yardım sayfası ve bağımsız kataloglar farklı sayılar verebilir, çünkü bazıları topluluk connector'larını da sayar). En öne çıkanlar: Google Drive, Gmail, Google Calendar, Canva, Microsoft 365, Notion, Figma, Slack, HubSpot, Asana, Linear ve monday.com. Dizin; ticaret, iletişim, yaratıcı işler, veri ve analiz, geliştirici araçları, eğitim, satış ve pazarlama, seyahat gibi kategorilere ayrılıyor. Bazı connector'larda "Anthropic verified" rozeti var; rozetsizlere daha dikkatli yaklaşın.

## Türk şirketinde ne işe yarar?

Örnekler varsayımsaldır.

- **Mail ve takvim yoğunluğu:** Gmail ve Google Calendar bağlıyken "Bu hafta tedarikçilerden gelen ve cevap bekleyen maillerin listesini çıkar, Türkçe taslak cevaplar hazırla" demek. Taslakları siz okuyup gönderirsiniz.
- **Microsoft 365 kullanan kurumlar:** SharePoint, OneDrive, Outlook ve Teams'te arama yapmak. Resmî Microsoft 365 connector'ı tüm planlarda var; e-posta, takvim ve Teams mesajı gönderme gibi yazma işlemlerini yönetici tek tek açıp kapatabilir. Team ve Enterprise'ta önce kuruluş sahibinin etkinleştirmesi gerekir.
- **Satış ekibi:** HubSpot gibi bir CRM'e bağlanıp müşteri görüşmesi öncesi hesap özeti çıkarmak.
- **Proje takibi:** Asana, Linear ya da monday.com üzerinden haftalık durum raporunu hazırlatmak.
- **Tasarım ve pazarlama:** Canva connector'ıyla taslak görselleri Canva'da düzenlenebilir hâle getirmek ([Design sayfası](/claude/design/)).

**Türkiye'ye özgü boşluk.** Paraşüt, Logo ve Mikro için resmî bir Claude connector'ı bulunmuyor (resmî dizinde arattığımızda çıkmadı). Paraşüt'ün kendi REST API'si var; teknik bir ekip özel connector ile bağlayabilir, ama bu sizin sorumluluğunuzda bir kurulumdur. e-Fatura entegratörleri ve yerel bankalar için de hazır connector varsaymayın; dizinde arayıp kendiniz doğrulayın.

## Nasıl başlarsınız?

1. Claude'da connector ayarlarını açın ya da [Marketplace connector dizinine](https://claude.com/marketplace/connectors-plugins) bakın.
2. İhtiyacınız olan araç için "Add in Claude" düğmesine basın ve hesabınıza giriş yapın.
3. Sohbette ya da Cowork'te işi doğal dille isteyin; Claude gerektiğinde connector'ı kullanır ve ne yaptığını gösterir.
4. Yazma yetkisi veren connector'larda ilk haftalarda Claude'un yaptığı işi gözle kontrol edin.

Kendi iç sistemleriniz (ERP, kendi CRM'iniz) için özel connector eklenebilir; kurulum ve güvenlik ayrıntıları [MCP kurulum rehberinde](/wiki/mcp/kurulum-rehberi/).

## Hangi planda, nelere dikkat?

**Plan.** Connector'lar Free dahil tüm planlarda kullanılabilir. Team ve Enterprise'ta yönetici bazı connector'ları kapatabilir ya da kendisi etkinleştirmek isteyebilir. Pro'dan Team'e geçişte özel connector'ların yeniden eklenmesi gerekir.

**Yetki ve güvenlik.** Claude, connector ile yalnız sizin hesabınızın görebildiğini görür. Yine de bir connector bağladığınızda o uygulamadaki veri Claude'un bağlamına girer. Yönetici olarak hangi connector'ların açılacağını bilinçli seçin; güvenlik çerçevesi için [MCP güvenlik sayfasına](/wiki/mcp/guvenlik/) bakın.

**KVKK.** Müşteri ve çalışan verisi içeren sistemleri bağlamadan önce yurt dışı aktarım konusunu değerlendirin: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/). Anthropic'in Türkiye'de ofisi ya da temsilcisi yoktur; ayrıntı [Türkiye'de Claude](/wiki/temeller/turkiyede-claude/) sayfasında.

**Dizin ve plugin farkı.** Marketplace blogu "2.000'den fazla bağlayıcı ve eklenti" diyor; bu, connector'lar ile plugin'lerin toplamıdır. Yalnız connector sayısı yaklaşık 900'dür. Plugin'ler için [Plugins sayfasına](/claude/plugins/) bakın.

Ekibinize hangi connector'ı hangi iş için, hangi izinlerle açacağınızı birlikte kurgulamak isterseniz [Zamana programları](/programlar/) bu konuyu iş kullanımı açısından ele alır.
