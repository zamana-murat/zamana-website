---
title: Slack ve Microsoft Teams Entegrasyonu
description: "Claude'u Slack ve Teams ekiplerine bağlama. Resmî connector'lar, bot kullanımı, kurumsal IT onayı ve günlük kullanım rehberi."
tags:
  - araclar
  - slack
  - teams
  - entegrasyon
---

**Çoğu kurumsal ekibin bilgi akışı Slack veya Microsoft Teams'te akar.** Claude'u bu platformlara bağlamak — geçmiş mesajları okuyabilmesi, kanal özetleyebilmesi, akışın içinde çalışabilmesi — günlük üretkenliğin en görünür kazançlarından biridir.

Bu sayfa entegrasyon seçeneklerini, kurulumu ve kurumsal IT onayını anlatır.

## İki Entegrasyon Modeli

Slack ve Teams için iki farklı yaklaşım var:

### Model 1 — Claude'a Bağlamak (Connector)

Claude.ai içinden Slack/Teams'e [connector](connectors/) ile bağlanırsınız. Sohbet Claude'un içinde geçer; Claude sizin yerinize Slack/Teams'i okur, özetler, arar.

**Tipik kullanım:**

- *"Marketing kanalında son 3 gün ne konuşuldu, özet ver."*
- *"Acme Şirketi ile DM'de konuştuğum konuların aksiyon listesini çıkar."*
- *"Bu hafta ürün lansmanı kanalında alınan kararları liste hâlinde topla."*

### Model 2 — Slack/Teams'in İçine Claude Eklemek

Claude'u Slack/Teams workspace'inize **bot** olarak eklersiniz. Mesajlaşma içinden `@Claude bana ...` diye soru sorarsınız, cevap kanalın içinde gelir.

**Tipik kullanım:**

- Kanalın içinden hızlı soru: *"@Claude bu PR açıklamasını üç cümleye sığdır"*
- Toplantı sonrası: *"@Claude yukarıdaki konuşmadan aksiyon maddelerini çıkar"*
- Hızlı çeviri / yazım yardımı, ekip arkadaşının görmesinden çekinmeden

İki model birlikte kullanılabilir. Çoğu kurumsal müşteride **Model 1 (connector)** daha sık kullanılır çünkü Claude'un tam gücüne (skills, projects, dosya yükleme) erişim verir.

## Kurulum — Connector (Model 1)

claude.ai içinde:

1. **Settings → Connectors** menüsüne girin
2. Slack veya Microsoft Teams seçin
3. **Connect** → workspace OAuth ekranı açılır
4. Hangi yetkileri verdiğinizi okuyun (kanal okuma, DM okuma, vb.)
5. Onaylayın → bağlantı aktif

[Connectors](connectors/) sayfası genel akışı açıklar.

**Kurumsal Slack/Teams'te:** OAuth onayını **workspace yöneticisi** vermelidir. Çalışan tek başına bağlayamaz. IT ile konuşulması gereken bir adım. [BT departmanı](../departmanlar/bilgi-teknolojileri/) sayfası bu süreci açıklar.

## Kurulum — Slack Bot

Anthropic'in resmî Slack uygulaması Slack App Directory'de mevcut. İşleyiş:

1. Workspace yöneticiniz Slack App Directory'den **Claude** uygulamasını arar
2. Workspace'e ekler, gerekli izinleri verir
3. Kanallara `@Claude` ekleme yetkisi (ayrı izin) verilir
4. Çalışanlar `/claude` komutu veya `@Claude` mention ile kullanmaya başlar

**Veri akışı:** Slack'e yazdığınız mesaj Claude'a (Anthropic'e) gider, cevap döner. Bu akışın gizlilik tarafı için [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) ve [Şirket İçi Politika](../temeller/sirket-ici-politika/) sayfalarına bakın.

## Kurulum — Teams Bot

Microsoft Teams için karşılığı Microsoft AppSource veya Teams App Store üzerinden eklenir. Süreç Slack'e benzer; Microsoft 365 admin onayı gerekir.

## Pratik Kullanım Senaryoları

### Sabah Brifingi

[Connector ile] *"Slack'te bu sabah açılmış kanallarımdan #marketing, #sales, #urun — son 12 saatte ne oldu, kısa özet ver."*

Çıktı: kanal başına bir paragraf, neyin önemli olduğu vurgulanmış. 5 dakikada okuduğunuz 200 mesajdan kurtarır.

### Müşteri Tartışması Toplama

*"#cs-acme-musterisi kanalında son haftaki tüm mesajları oku, müşterinin yaşadığı 3 ana sorunu ve önerilen çözümleri özetle."*

### Karar Tutanağı

Bir toplantı kanalında konuşma bittiğinde: *"@Claude yukarıdaki son 50 mesajı oku, alınan kararları ve sorumlu kişileri tabloya çıkar."* (Slack bot)

### Drafting

Slack içinde özel mesaj olarak Claude'a: *"Müşteriye gecikme bildiren nazik bir mesaj yaz, beyaz şapkalı dürüstlükle."* — Slack'i terk etmeden iş.

## Kurumsal IT Açısından

Slack/Teams entegrasyonu IT ekibinin aktif onayını gerektirir. Hassas konular:

- **Veri sızıntı riski:** Çalışan kanaldaki içeriği farkında olmadan Claude'a aktarmış olur
- **DLP (data loss prevention) entegrasyonu:** Bazı kurumsal Slack/Teams'te DLP politikaları zaten kurulu olabilir; Claude entegrasyonuyla nasıl etkileşeceği kontrol edilmeli
- **Audit log:** Hangi çalışan ne zaman ne sordu — kurumsal denetim açısından log tutulması gerekiyorsa Team / Enterprise plana ihtiyaç var
- **Saklama politikası:** Slack tarafında 30 gün sonra silinen mesajlar Claude tarafında ne oluyor? Anthropic standart politikası uygulanır; net almak için [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) ve [Takım ve Admin](../temeller/takim-ve-admin/) sayfalarını okuyun.

[BT departmanı](../departmanlar/bilgi-teknolojileri/) sayfası IT'nin değerlendirme listesini içerir.

## Yaygın Hatalar

**Hassas kanalı bağlama.** İK, hukuk, üst yönetim DM'lerinin bulunduğu workspace'i Claude'a bağlamak ölçüsüz risktir. Önce hangi kanalların kapsam dışı tutulacağını kararlaştırın.

**Hatalı yetki verme.** OAuth onayında "tüm kanallar" yerine seçili kanallar seçilebilir mi — Slack'in yeni sürümünde bu kontrol genişledi. Kullanın.

**"Bot her şeyi görüyor" zannı.** Slack bot olarak eklenen Claude **sadece kendisinin eklendiği kanallardaki** mesajları görür. Eklenmediği kanal görünmez. Bu güvenlik özelliğidir.

**Audit yapılmaması.** Üç ayda bir Slack/Teams bağlantılarını gözden geçirin: hâlâ kullanılıyor mu, yetkiler güncel mi, kim kullanıyor.

## Plan Gereksinimi

**Bireysel kullanım:** Pro plan yeterlidir, connector'la kişisel Slack hesabınızı bağlayabilirsiniz.

**Kurumsal kullanım:** Slack bot kurmak ve organizasyon genelinde dağıtmak için **Team veya Enterprise plan** gerekir. Detay [Planlar](../temeller/planlar/) ve [Takım ve Admin](../temeller/takim-ve-admin/) sayfalarında.

## İlgili Sayfalar

- [Connectors](connectors/) — Genel connector mantığı
- [MCP Nedir?](../mcp/nedir/) — Slack/Teams için custom MCP de yazılabilir
- [Cowork Modu](cowork-modu/) — Bu entegrasyonlar Cowork ile birleşince güç katar
- [BT Departmanı](../departmanlar/bilgi-teknolojileri/) — IT açısından değerlendirme
- [Şirket İçi Politika](../temeller/sirket-ici-politika/) — Kim ne kullanabilir
- [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) — Veri akışı ve haklar

