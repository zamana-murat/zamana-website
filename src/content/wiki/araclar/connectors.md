---
title: "Connectors — Claude'u İş Sistemlerinize Bağlama"
description: "Gmail, Drive, Calendar, Notion, Slack ve daha fazlası — Claude'u günlük araçlarınıza connector ile bağlama. Kurumsal kullanımda ne kadar değer üretir?"
tags:
  - araclar
  - connectors
  - entegrasyon
---

**Connector'lar, Claude'u Gmail, Google Drive, Calendar, Notion, GitHub gibi iş sistemlerinize tek tıkla bağlayan resmi entegrasyonlardır.** Kuruluşunuzda bu sistemleri zaten kullanıyorsanız, Claude'u onlarla konuşur hâle getirmek için kod yazmanıza, kurulum yapmanıza gerek yok.

Bu sayfa connector'ların ne olduğunu, [MCP](../mcp/nedir/)'den ne farkı olduğunu ve hangi senaryolarda gerçek değer ürettiğini anlatır.

## Connector Nedir?

Connector, Claude'un sizin onayınızla belirli bir dış servise (Gmail, Drive, vb.) erişip orada okuma — bazı durumlarda yazma — işlemleri yapmasını sağlayan **Anthropic onaylı, hazır bir köprüdür**.

Mantığı şu: bir defa OAuth ile bağlarsınız (Google'a giriş yapar gibi), Claude o servise sizin yetkinizle erişir. Her sohbette tekrar giriş yapmanız gerekmez. Bağlantıyı istediğiniz zaman koparırsınız.

**Connector vs. [MCP](../mcp/nedir/):**

| | Connector | MCP |
|---|---|---|
| Kim sağlıyor? | Anthropic | Açık ekosistem |
| Kurulum | Tek tık (OAuth) | Manuel yapılandırma |
| Güvenlik denetimi | Anthropic tarafından | Sizin sorumluluğunuzda |
| Kapsam | Popüler iş servisleri | Sınırsız (her servis) |
| Kullanım yeri | claude.ai | claude.ai + [Claude Desktop](claude-desktop/) |

Kısaca: **connector "kapı açık, gir" — MCP "kendi kapını yap, gir."** Çoğu iş profesyoneli için connector yeterli; özel iç sistemleriniz varsa MCP gerekir.

## Hangi Connector'lar Var?

Liste sürekli genişliyor; en güncel hâli için [Bağlantı Listesi](../mcp/baglanti-listesi/) sayfasına bakın. Yaygın olanlar:

- **Google Drive / Docs / Sheets** — dosya okuma, içerik özetleme, çapraz arama
- **Gmail** — e-posta okuma, taslak hazırlama (gönderim çoğu plan kuralında onaylı)
- **Google Calendar** — toplantı listeleme, takvim analizi, brief üretme
- **Notion** — sayfa okuma, veritabanı sorgulama
- **GitHub** — repo, issue, PR okuma
- **Slack** — kanal mesajları, DM özetleme (kurumsal Slack'lerde admin onayı gerekebilir)
- **Asana / Jira / Linear** — proje yönetimi araçlarında görev sorgulama
- **Microsoft 365 (OneDrive, Outlook, Calendar)** — Microsoft ekosistemi için karşılığı

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

[Linear / Asana] connector'u: *"Q1 ürün hedefleri projesindeki açık görevleri, kim üzerinde, ne kadar gecikme var — özetle."*

## Sınırlamalar

**Hız.** Büyük Drive/e-posta hesaplarında ilk arama yavaş olabilir. Claude akıllıca filtreler ama sınırsız değil.

**Yazma yetkisi sınırlı.** Çoğu connector öncelikle okuma odaklı. Yazma (e-posta gönderme, dosya oluşturma) bazı connector'larda var, bazılarında yok. Ayrıca sizin onaylamanız gereken bir adım olabilir.

**Görünürlük sınırı.** Claude yalnızca sizin yetkinizdeki içerikleri görür. Ortak Drive'da sizinle paylaşılmamış bir klasör → Claude görmez. Bu güvenlik açısından iyi haber, kullanım açısından bilinmesi gereken bir kısıt.

**Bazı kurumsal hesaplarda IT engeli.** Şirket Google Workspace yöneticisi OAuth uygulamalarını kısıtlıyorsa, connector'u onaylatmak gerekebilir. [BT departmanı](../departmanlar/bilgi-teknolojileri/) ile konuşun.

**KVKK / veri akışı.** Connector bağladığınızda o servisteki içerik Claude'a (Anthropic'e) gidip işlenir. Hassas veri sınıflandırması varsa, [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) ve [Şirket İçi Politika](../temeller/sirket-ici-politika/) sayfalarına bakın.

## Nasıl Eklenir?

claude.ai içinde:

1. **Settings → Connectors** menüsüne girin
2. Eklemek istediğiniz servisi seçin (örn. Google Drive)
3. **Connect** butonuna basın → tarayıcıda servisin OAuth ekranı açılır
4. İzinleri okuyun, onaylayın
5. Geri Claude'a dönersiniz, connector aktif

Bağlantıyı koparmak: aynı menüden **Disconnect**. O servise erişim derhâl sona erer.

[Claude Desktop](claude-desktop/) içinde de connector'lar aynı arayüzden yönetilir.

## Plan Kapsamı

Connector'ların büyük kısmı tüm planlarda mevcut. Bazı kurumsal connector'lar (örn. Salesforce, ServiceNow) **Team / Enterprise** planları gerektirebilir. Detay için [Planlar](../temeller/planlar/) ve [Takım ve Admin](../temeller/takim-ve-admin/) sayfaları.

## Connector mu, MCP mi?

Karar için basit kural:

- **Servisiniz listedeyse → connector kullanın.** Daha hızlı, daha güvenli, daha az bakım.
- **Servisiniz listede yoksa veya iç sistemlerinizi bağlayacaksanız → [MCP](../mcp/nedir/).**
- **Hem dış SaaS'lar hem de iç ERP/CRM'iniz varsa → ikisi birden.** Aynı sohbette her ikisi de çalışabilir.

[MCP Kurulum Rehberi](../mcp/kurulum-rehberi/) ve [Popüler MCP'ler](../mcp/populer-mcpler/) sayfaları MCP tarafının detayını verir.

## Kurumsal Kullanımda Tavsiyeler

**Pilot kullanıcı seçin.** Tüm şirkete birden açmadan, 2-3 kişi bağlasın, 2 hafta kullansın, geri bildirim alın.

**Yetki minimumda tutun.** OAuth onayında Claude'a verilen izinler gözden geçirilebilir; gereksiz yetkileri kapatın.

**Düzenli denetim.** Üç ayda bir kullanılmayan connector'ları koparın. Bu hem güvenlik, hem zihinsel temizlik.

**[Şirket içi politikanız](../temeller/sirket-ici-politika/) olsun.** Hangi çalışan hangi connector'u kullanabilir, hassas veri içeren servisler kapsam dışı mı — bunu yazıya dökün.

## İlgili Sayfalar

- [MCP Nedir?](../mcp/nedir/) — Connector'un kuzeni, daha geniş ekosistem
- [Bağlantı Listesi](../mcp/baglanti-listesi/) — Güncel connector ve MCP listesi
- [Cowork Modu](cowork-modu/) — Connector'lar Cowork ile birlikte güç katar
- [Slack & Teams Entegrasyonu](slack-teams-entegrasyon/) — Mesajlaşma platformlarına özel
- [Şirket İçi Politika](../temeller/sirket-ici-politika/) — Hangi connector kim için açık olmalı
- [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) — Veri akışı

