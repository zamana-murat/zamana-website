---
title: Slack ve Microsoft Teams Entegrasyonu
seoTitle: "Claude Slack Entegrasyonu ve Teams Durumu"
description: "Claude'u Slack ve Teams ekiplerine bağlama: Teams'te resmi uygulama yok, connector yolu, Slack'te Claude Tag, IT onayı ve kullanım örnekleri."
tags:
  - araclar
  - slack
  - teams
  - claude-tag
  - entegrasyon
lastUpdated: "2026-10-06"
---

**Çoğu kurumsal ekibin bilgi akışı Slack veya Microsoft Teams'te akar.** Claude'u bu platformlara bağlamak (geçmiş mesajları okuyabilmesi, kanal özetleyebilmesi, akışın içinde çalışabilmesi) günlük üretkenliğin en görünür kazançlarından biridir.

Bu sayfa entegrasyon seçeneklerini, kurulumu ve kurumsal IT onayını anlatır. Türk kurumlarında Teams yaygın olduğu için önce onun durumu geliyor. Claude Tag'in ürün tanıtımı ve plan kapsamı için [@Claude: Slack'te Claude](/claude/tag/), Microsoft tarafı için [Claude for Microsoft 365](/claude/microsoft-365/) sayfasına bakın.

## Teams: Resmi Uygulama Yok, Connector Var

Teams içinde resmi bir Claude uygulaması veya botu yok, Anthropic de bir Teams sürümü duyurmadı. Geçerli yol Microsoft 365 connector'ıdır (aşağıdaki Model 1). Team ve Enterprise'ta önce organizasyon sahibi (owner) etkinleştirir, Microsoft 365 admin onayı da gerekebilir.

Microsoft ekosisteminde ayrıca Excel, PowerPoint ve Word'ün içinde çalışan Claude eklentileri var (Excel, PowerPoint, Word genel kullanımda, Outlook public beta). Bunlar Teams botu değil, ofis uygulamalarının içindeki yardımcıdır: [Office ve Chrome'da Claude](/wiki/araclar/office-ve-chrome/).

## İki Entegrasyon Modeli

Slack ve Teams için iki farklı yaklaşım var:

### Model 1: Claude'a Bağlamak (Connector)

Claude.ai içinden Slack'e (Teams için Microsoft 365 connector'ı üzerinden) [connector](/wiki/araclar/connectors/) ile bağlanırsınız. Sohbet Claude'un içinde geçer; Claude sizin yerinize Slack/Teams'i okur, özetler, arar. Microsoft 365 connector'ı Teams'te yalnız arama yapmaz, yazma araçlarıyla **Teams mesajı da gönderebilir** (yönetici bu aracı açıp kapatabilir).

**Tipik kullanım:**

- *"Marketing kanalında son 3 gün ne konuşuldu, özet ver."*
- *"Bosfor Tekstil ile DM'de konuştuğum konuların aksiyon listesini çıkar."*
- *"Bu hafta ürün lansmanı kanalında alınan kararları liste hâlinde topla."*

### Model 2: Slack'in İçine Claude Eklemek (Claude Tag)

Slack'te Claude'u kanala getiren yol **Claude Tag**'dir (23 Haziran 2026'dan beri; haber metnine göre şu an beta). Kanalda `@Claude bana ...` diye etiketlersiniz, cevap kanalın içinde gelir. Claude Tag yalnızca **Team ve Enterprise** planlarında vardır; Free, Pro ve Max'te yoktur.

**Tipik kullanım:**

- Kanalın içinden hızlı soru: *"@Claude bu PR açıklamasını üç cümleye sığdır"*
- Toplantı sonrası: *"@Claude yukarıdaki konuşmadan aksiyon maddelerini çıkar"*
- Hızlı çeviri / yazım yardımı, ekip arkadaşının görmesinden çekinmeden

**24 Eylül 2026 güncellemesi:** Kanalda @Claude diyen kişi artık **kendi kişisel connector'larını** da kullanabiliyor. Örneğin fiyat verisi kişisel CRM erişiminizdeyse, o bağlayıcıyı kanalın geneline açmadan Claude'a baktırabilirsiniz. İlk ihtiyaçta Claude sizden izin ister, bağlantıyı istediğiniz zaman kaldırabilirsiniz. Özellik önce Team planlarında açılmaya başladı, Enterprise sonra geliyor.

İki çalışma modu var:

- **İnceleme modu:** Claude'un cevabı kanala düşmeden önce siz okuyup onaylarsınız.
- **Otomatik mod:** Claude cevabı doğrudan paylaşır; hassas içerik sezerse insan incelemesi bekler.

Başlangıçta inceleme modunu seçin: kanalda herkesin göreceği bir cevapta hassas veri çıkabilir.

Kişisel connector yalnızca sizin başlattığınız istekler içindir. Zamanlanmış rutinler ve Claude'un kendi başlattığı işler, yöneticinin kanala tanımladığı ortak connector'ları kullanır. Claude'un sizin connector'ınızla yaptığı işlemler, ilgili aracın kendi günlüğünde sizin hesabınız altında görünür. Ayrıntı: [Claude Tag kişisel connector'ları kullanabiliyor](/haberler/2026-09-24-claude-tag-kisisel-baglayicilar/).

İki model birlikte kullanılabilir. **Model 1 (connector)**, Claude'un tam gücüne (skills, projects, dosya yükleme) erişim verdiği için çoğu iş için daha geniş bir yoldur. Teams için Claude Tag benzeri bir sürüm yok; Teams'te connector yolunu kullanın (yukarıdaki Teams bölümüne bakın).

## Kurulum: Connector (Model 1)

claude.ai içinde:

1. **Settings → Connectors** menüsüne girin
2. Slack seçin (Teams için Microsoft 365 connector'ını seçin)
3. **Connect** → workspace OAuth ekranı açılır
4. Hangi yetkileri verdiğinizi okuyun (kanal okuma, DM okuma, vb.)
5. Onaylayın → bağlantı aktif

[Connectors](/wiki/araclar/connectors/) sayfası genel akışı açıklar.

**Kurumsal Slack/Teams'te:** OAuth onayını **workspace yöneticisi** vermelidir. Çalışan tek başına bağlayamaz. IT ile konuşulması gereken bir adım. [BT departmanı](/wiki/departmanlar/bilgi-teknolojileri/) sayfası bu süreci açıklar.

## Kurulum: Slack'te Claude Tag

Claude Tag'i workspace yöneticisi etkinleştirir. Kesin menü adımları Anthropic'in yardım merkezinde ve yönetim ekranında güncel tutulur; burada sabit adım yazmıyoruz çünkü ürün hâlâ beta ve değişiyor. Genel akış:

1. Planınızın Team veya Enterprise olduğunu doğrulayın
2. Workspace yöneticisi Claude'u Slack workspace'ine ekler ve izinleri verir
3. Yönetici, Claude'un hangi kanallarda ve hangi ortak connector'larla çalışacağını belirler
4. Çalışanlar kanalda `@Claude` ile etiketleyerek kullanmaya başlar

**Veri akışı:** Slack'e yazdığınız mesaj Claude'a (Anthropic'e) gider, cevap döner. Bu akışın gizlilik tarafı için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) ve [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/) sayfalarına bakın.

## Pratik Kullanım Senaryoları

### Sabah Brifingi

[Connector ile] *"Slack'te bu sabah açılmış kanallarımdan #marketing, #sales, #urun, son 12 saatte ne oldu, kısa özet ver."*

Çıktı: kanal başına bir paragraf, neyin önemli olduğu vurgulanmış. 200 mesajı tek tek taramak yerine kısa bir özet okursunuz. **Süre:** elle 30-45 dakika, Claude ile özet okuma yaklaşık 5 dakika. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

### Müşteri Tartışması Toplama

*"#cs-bosfor-tekstil kanalında son haftaki tüm mesajları oku, müşterinin yaşadığı 3 ana sorunu ve önerilen çözümleri özetle."*

### Karar Tutanağı

Bir toplantı kanalında konuşma bittiğinde: *"@Claude yukarıdaki son 50 mesajı oku, alınan kararları ve sorumlu kişileri tabloya çıkar."* (Claude Tag)

### Drafting

Slack'te @Claude'a (Claude Tag): *"Müşteriye gecikme bildiren nazik ama dürüst bir mesaj yaz."* Slack'ten çıkmadan iş biter.

## Kurumsal IT Açısından

Slack/Teams entegrasyonu IT ekibinin aktif onayını gerektirir. Hassas konular:

- **Veri sızıntı riski:** Çalışan kanaldaki içeriği farkında olmadan Claude'a aktarmış olur
- **DLP (data loss prevention) entegrasyonu:** Bazı kurumsal Slack/Teams'te DLP politikaları zaten kurulu olabilir; Claude entegrasyonuyla nasıl etkileşeceği kontrol edilmeli
- **Audit log:** Hangi çalışan ne zaman ne sordu, kurumsal denetim açısından log tutulması gerekiyorsa Enterprise plana ihtiyaç var (audit log ve Compliance API Enterprise'tadır; Team'de OpenTelemetry gibi kısmi izleme vardır)
- **Saklama politikası:** Slack tarafında 30 gün sonra silinen mesajlar Claude tarafında ne oluyor? Anthropic standart politikası uygulanır; net almak için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) ve [Takım ve Admin](/wiki/temeller/takim-ve-admin/) sayfalarını okuyun.

[BT departmanı](/wiki/departmanlar/bilgi-teknolojileri/) sayfası IT'nin değerlendirme listesini içerir.

## Yaygın Hatalar

**Hassas kanalı bağlama.** İK, hukuk, üst yönetim DM'lerinin bulunduğu workspace'i Claude'a bağlamak ölçüsüz risktir. Önce hangi kanalların kapsam dışı tutulacağını kararlaştırın.

**Hatalı yetki verme.** OAuth onayında "tüm kanallar" yerine seçili kanallara izin verebiliyorsanız bunu kullanın.

**"Bot her şeyi görüyor" zannı.** Slack'e eklenen Claude Tag **sadece eklendiği kanallardaki** mesajları görür. Eklenmediği kanal görünmez. Bu güvenlik özelliğidir.

**Audit yapılmaması.** Üç ayda bir Slack/Teams bağlantılarını gözden geçirin: hâlâ kullanılıyor mu, yetkiler güncel mi, kim kullanıyor.

## Plan Gereksinimi

**Bireysel kullanım:** Connector tüm planlarda vardır, kişisel Slack hesabınızı bağlayabilirsiniz.

**Kurumsal kullanım:** Claude Tag yalnız Team ve Enterprise planlarında var. Plan tablosu [@Claude: Slack'te Claude](/claude/tag/) ve [Planlar](/wiki/temeller/planlar/) sayfalarında, yönetici ayarları [Takım ve Admin](/wiki/temeller/takim-ve-admin/) sayfasında.

## İlgili Sayfalar

- [Connectors](/wiki/araclar/connectors/): Genel connector mantığı
- [@Claude: Slack'te Claude](/claude/tag/): Claude Tag ürün tanıtımı
- [Claude for Microsoft 365](/claude/microsoft-365/): Microsoft tarafı
- [MCP Nedir?](/wiki/mcp/nedir/): Slack/Teams için custom MCP de yazılabilir
- [Cowork Modu](/wiki/araclar/cowork-modu/): Bu entegrasyonlar Cowork ile birleşince güç katar
- [BT Departmanı](/wiki/departmanlar/bilgi-teknolojileri/): IT açısından değerlendirme
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Kim ne kullanabilir
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Veri akışı ve haklar

