---
title: "Connectors: Claude'u İş Sistemlerinize Bağlama"
description: "Gmail, Drive, Calendar, Notion, Slack ve daha fazlası, Claude'u günlük araçlarınıza connector ile bağlama. Kurumsal kullanımda ne kadar değer üretir?"
tags:
  - araclar
  - connectors
  - entegrasyon
lastUpdated: "2026-10-05"
---

**Connector'lar, Claude'u Gmail, Google Drive, Calendar, Notion, GitHub gibi iş sistemlerinize tek tıkla bağlayan resmi entegrasyonlardır.** Kuruluşunuzda bu sistemleri zaten kullanıyorsanız, Claude'u onlarla konuşur hâle getirmek için kod yazmanıza, kurulum yapmanıza gerek yok.

Bu sayfa connector'ların ne olduğunu, [MCP](/wiki/mcp/nedir/)'den ne farkı olduğunu ve hangi senaryolarda gerçek değer ürettiğini anlatır.

## Connector Nedir?

Connector, Claude'un sizin onayınızla belirli bir dış servise (Gmail, Drive, vb.) erişip orada okuma ve bazı durumlarda yazma işlemleri yapmasını sağlayan **Anthropic onaylı, hazır bir köprüdür**.

Mantığı şu: bir defa OAuth ile bağlarsınız (Google'a giriş yapar gibi), Claude o servise sizin yetkinizle erişir. Her sohbette tekrar giriş yapmanız gerekmez. Bağlantıyı istediğiniz zaman koparırsınız.

**Connector vs. [MCP](/wiki/mcp/nedir/):**

| | Connector | MCP |
|---|---|---|
| Kim sağlıyor? | Anthropic'in onayladığı resmi dizin | Açık ekosistem |
| Kurulum | Tek tık (OAuth) | Manuel yapılandırma |
| Güvenlik denetimi | Anthropic onay sürecinden geçer | Sizin sorumluluğunuzda |
| Kapsam | Resmi dizinde yaklaşık 900 connector | Sınırsız (her servis) |
| Kullanım yeri | claude.ai, [Claude Desktop](/wiki/araclar/claude-desktop/) ve [Cowork](/wiki/araclar/cowork-modu/) (web ve mobil dahil) | Ağırlıklı [Claude Desktop](/wiki/araclar/claude-desktop/) ve Claude Code |

Kısaca: **connector "kapı açık, gir", MCP "kendi kapını yap, gir."** Çoğu iş profesyoneli için connector yeterli; özel iç sistemleriniz varsa MCP gerekir.

## Hangi Connector'lar Var?

Resmi dizin (claude.com/connectors) Ekim 2026 itibarıyla yaklaşık 900 connector listeliyor ve sürekli genişliyor. Güncel seçki için [Bağlantı Listesi](/wiki/mcp/baglanti-listesi/) sayfasına bakın. Yaygın olanlar:

- **Google Drive / Docs / Sheets**: dosya okuma, içerik özetleme, çapraz arama
- **Gmail**: e-posta okuma, taslak hazırlama (gönderim çoğu plan kuralında onaylı)
- **Google Calendar**: toplantı listeleme, takvim analizi, brief üretme
- **Notion**: sayfa okuma, veritabanı sorgulama
- **GitHub**: repo, issue, PR okuma
- **Slack**: kanal mesajları, DM özetleme (kurumsal Slack'lerde admin onayı gerekebilir)
- **Asana / Jira / Linear**: proje yönetimi araçlarında görev sorgulama
- **Microsoft 365 (SharePoint, OneDrive, Outlook, Teams)**: Microsoft ekosistemi için karşılığı. Tüm planlarda var. Teams sohbet ve kanal mesajlarında arama yapar; yazma araçlarıyla e-posta, takvim, dosya ve **Teams mesajı gönderme** de mümkündür (yönetici bu araçları tek tek açıp kapatabilir). Team ve Enterprise'ta önce organizasyon sahibi (owner) etkinleştirir.

## Pratik Kullanım Senaryoları

### Pazartesi Sabah Brief'i

[Calendar] connector'u: *"Bu hafta toplantılarımı listele, her birinin önceden ne hazırlamam gerektiğini söyle."* Claude takvimi okur, katılımcılara bakar, hatırlatma listesi çıkarır.

### Müşteri Geçmişi Toplama

[Gmail] + [Drive] connector'u: *"X Şirketi ile son 6 aydaki tüm yazışma ve dokümanları topla, gelinen son durumu özetle."* Claude iki kaynağı birden tarar, birleşik özet üretir.

### Toplantı Sonrası Aksiyon Çıkarımı

[Calendar] + [Drive] connector'u: *"Dünkü Q2 planlama toplantısının notlarını Drive'dan al, aksiyon maddelerini ve sorumlu kişilerini liste hâlinde çıkar."*

### Bilgi Tabanı Sorgulama

[Notion] connector'u: *"Notion'daki onboarding sayfalarımıza dayanarak yeni başlayan birinin ilk hafta planını yaz."* Claude şirket içi bilgiyi okur, ona göre üretir.

### Proje Sağlık Raporu

[Linear / Asana] connector'u: *"Q1 ürün hedefleri projesindeki açık görevleri, kim üzerinde, ne kadar gecikme var, özetle."*

## Sınırlamalar

**Hız.** Büyük Drive/e-posta hesaplarında ilk arama yavaş olabilir. Claude akıllıca filtreler ama sınırsız değil.

**Yazma yetkisi sınırlı.** Çoğu connector öncelikle okuma odaklı. Yazma (e-posta gönderme, dosya oluşturma) bazı connector'larda var, bazılarında yok. Ayrıca sizin onaylamanız gereken bir adım olabilir.

**Görünürlük sınırı.** Claude yalnızca sizin yetkinizdeki içerikleri görür. Ortak Drive'da sizinle paylaşılmamış bir klasör → Claude görmez. Bu güvenlik açısından iyi haber, kullanım açısından bilinmesi gereken bir kısıt.

**Bazı kurumsal hesaplarda IT engeli.** Şirket Google Workspace yöneticisi OAuth uygulamalarını kısıtlıyorsa, connector'u onaylatmak gerekebilir. [BT departmanı](/wiki/departmanlar/bilgi-teknolojileri/) ile konuşun.

**KVKK / veri akışı.** Connector bağladığınızda o servisteki içerik Claude'a (Anthropic'e) gidip işlenir. Hassas veri sınıflandırması varsa, [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) ve [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/) sayfalarına bakın.

## Nasıl Eklenir?

claude.ai içinde:

1. **Settings → Connectors** menüsüne girin
2. Eklemek istediğiniz servisi seçin (örn. Google Drive)
3. **Connect** butonuna basın → tarayıcıda servisin OAuth ekranı açılır
4. İzinleri okuyun, onaylayın
5. Geri Claude'a dönersiniz, connector aktif

Bağlantıyı koparmak: aynı menüden **Disconnect**. O servise erişim derhâl sona erer.

[Claude Desktop](/wiki/araclar/claude-desktop/) içinde de connector'lar aynı arayüzden yönetilir.

## Plan Kapsamı

Connector'lar Free dahil tüm planlarda kullanılabilir. Team ve Enterprise'ta ise bazı connector'ları önce yönetici etkinleştirir, bazıları yönetici onayı veya üst plan gerektirebilir. Detay için [Planlar](/wiki/temeller/planlar/) ve [Takım ve Admin](/wiki/temeller/takim-ve-admin/) sayfaları.

## Connector mu, MCP mi?

Karar için basit kural:

- **Servisiniz listedeyse → connector kullanın.** Daha hızlı, daha güvenli, daha az bakım.
- **Servisiniz listede yoksa veya iç sistemlerinizi bağlayacaksanız → [MCP](/wiki/mcp/nedir/).**
- **Hem dış SaaS'lar hem de iç ERP/CRM'iniz varsa → ikisi birden.** Aynı sohbette her ikisi de çalışabilir.

[MCP Kurulum Rehberi](/wiki/mcp/kurulum-rehberi/) ve [Popüler MCP'ler](/wiki/mcp/populer-mcpler/) sayfaları MCP tarafının detayını verir.

## Kurumsal Kullanımda Tavsiyeler

**Pilot kullanıcı seçin.** Tüm şirkete birden açmadan, 2-3 kişi bağlasın, 2 hafta kullansın, geri bildirim alın.

**Yetki minimumda tutun.** OAuth onayında Claude'a verilen izinler gözden geçirilebilir; gereksiz yetkileri kapatın.

**Düzenli denetim.** Üç ayda bir kullanılmayan connector'ları koparın. Bu hem güvenlik, hem zihinsel temizlik.

**[Şirket içi politikanız](/wiki/temeller/sirket-ici-politika/) olsun.** Hangi çalışan hangi connector'u kullanabilir, hassas veri içeren servisler kapsam dışı mı, bunu yazıya dökün.

## İlgili Sayfalar

- [MCP Nedir?](/wiki/mcp/nedir/): Connector'un kuzeni, daha geniş ekosistem
- [Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): Güncel connector ve MCP listesi
- [Cowork Modu](/wiki/araclar/cowork-modu/): Connector'lar Cowork ile birlikte güç katar
- [Slack & Teams Entegrasyonu](/wiki/araclar/slack-teams-entegrasyon/): Mesajlaşma platformlarına özel
- [Claude Tag kişisel connector'ları kullanabiliyor](/haberler/2026-09-24-claude-tag-kisisel-baglayicilar/): Slack'te kişisel connector kullanımı
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Hangi connector kim için açık olmalı
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Veri akışı

