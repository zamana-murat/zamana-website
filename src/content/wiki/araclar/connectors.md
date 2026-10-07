---
title: "Connectors: Claude'u İş Sistemlerinize Bağlama"
seoTitle: "Claude Connector Kurulumu, İzinler ve KVKK"
description: "Claude'u Gmail, Drive, Calendar ve Notion'a bağlayan connector'lar: kurulum, izinler, IT onayı, KVKK sınırı ve MCP'den farkı."
tags:
  - araclar
  - connectors
  - entegrasyon
lastUpdated: "2026-10-06"
---

**Connector'lar, Claude'u Gmail, Google Drive, Calendar, Notion, GitHub gibi iş sistemlerinize tek tıkla bağlayan resmi entegrasyonlardır.** Kuruluşunuzda bu sistemleri zaten kullanıyorsanız, Claude'u onlarla konuşur hâle getirmek için kod yazmanıza, kurulum yapmanıza gerek yok.

Bu sayfa connector'ların nasıl kurulduğunu, izin ve KVKK sınırlarını, [MCP](/wiki/mcp/nedir/)'den farkını ve hangi senaryolarda değer ürettiğini anlatır. Connector'ların ürün tanıtımı, kimler için olduğu ve plan kapsamı için [Claude Connectors](/claude/connectors/) sayfasına bakın.

## Connector Nedir?

Connector, Claude'un sizin onayınızla belirli bir dış servise (Gmail, Drive, vb.) erişip orada okuma ve bazı durumlarda yazma işlemleri yapmasını sağlayan **hazır bir köprüdür**. Teknik olarak her connector bir MCP sunucusudur; resmi dizindekiler çoğunlukla servisin kendi sağlayıcısı tarafından yapılır ve dizinde listelenir.

Mantığı şu: bir defa OAuth ile bağlarsınız (Google'a giriş yapar gibi), Claude o servise sizin yetkinizle erişir. Her sohbette tekrar giriş yapmanız gerekmez. Bağlantıyı istediğiniz zaman koparırsınız.

**Connector ve [MCP](/wiki/mcp/nedir/) aynı şeyin iki adıdır:** Claude'daki connector, bir MCP sunucusuna bağlantıdır. Fark, sunucunun nereden geldiği ve nerede çalıştığıdır:

| | Dizin connector'ı | Özel connector | Masaüstü uzantısı |
|---|---|---|---|
| Ne? | Resmi dizinde hazır duran sunucu (yaklaşık 900 tane) | Kendi uzak sunucunuzun URL'si | Claude Desktop'a tek tıkla kurulan yerel paket (.mcpb) |
| Nerede çalışır? | Sağlayıcının uzak sunucusunda | Uzak sunucuda; herkese açık internetten erişilebilir olmalı | Sizin bilgisayarınızda |
| Kurulum | Tek tık (OAuth) | Customize > Connectors, URL girilir | Settings > Extensions |
| Kim ekler? | Siz; Team ve Enterprise'ta bazılarını önce owner açar | Team ve Enterprise'ta yalnız owner, üye "Connect" ile bağlanır | Siz; owner izin listesi açabilir |
| Güvenlik denetimi | Dizine giren connector Anthropic incelemesinden geçer | Sizin sorumluluğunuzda; doğrulanmamış sunucuda Claude uyarı verir | Dizindeki uzantılar incelemeli, kendi `.mcpb` dosyanız sizin sorumluluğunuzda |
| Kullanım yeri | claude.ai, [Claude Desktop](/wiki/araclar/claude-desktop/) ve [Cowork](/wiki/araclar/cowork-modu/) (web ve mobil dahil) | Aynı yerlerde (mobilde kurulum beta) | Claude Desktop |

Kısaca: dizinde varsa hazır connector'ı bağlayın. Dizinde yoksa özel connector ya da yerel uzantı gerekir; iç sistemler için sunucunun internete açılması ya da yerel çalışması gerektiğinden bu BT işidir. Adım adım kurulum için [MCP Kurulum Rehberi](/wiki/mcp/kurulum-rehberi/), iç sistemler için [Şirket Sistemini Claude'a Bağlamak](/wiki/mcp/sirket-sistemini-baglamak/) sayfasına bakın.

## Hangi Connector'lar Var?

Resmi dizin (claude.com/connectors) Ekim 2026 itibarıyla yaklaşık 900 connector listeliyor ve sürekli genişliyor. 23 Eylül 2026'da açılan Claude Marketplace ise connector'ları, eklentileri, ajanları ve iş ortağı ürünlerini tek katalogda toplar; Anthropic "2.000'den fazla bağlayıcı ve eklenti" diyor (dizindeki connector sayısıyla çelişmez, sayılan birimler farklı). Kurumun Marketplace'ten satın alma tarafı için [Claude Marketplace](/kurumsal/marketplace/) sayfasına bakın. Güncel seçki için [Bağlantı Listesi](/wiki/mcp/baglanti-listesi/) sayfasına bakın. Yaygın olanlar:

- **Google Drive / Docs / Sheets**: dosya okuma, içerik özetleme, çapraz arama
- **Gmail**: e-posta okuma, taslak hazırlama (gönderim çoğu plan kuralında onaylı)
- **Google Calendar**: toplantı listeleme, takvim analizi, brief üretme
- **Notion**: sayfa okuma, veritabanı sorgulama
- **GitHub**: repo, issue, PR okuma
- **Slack**: kanal mesajları, DM özetleme (kurumsal Slack'lerde admin onayı gerekebilir)
- **Asana / Jira / Linear**: proje yönetimi araçlarında görev sorgulama
- **Microsoft 365 (SharePoint, OneDrive, Outlook, Teams)**: Microsoft ekosistemi için karşılığı. Teams sohbet ve kanal mesajlarında arama yapar; yazma araçlarıyla e-posta, takvim, dosya ve **Teams mesajı gönderme** de mümkündür (yönetici bu araçları tek tek açıp kapatabilir). Team ve Enterprise'ta önce organizasyon sahibi (owner) etkinleştirir. Plan ve eklenti tarafı için [Claude for Microsoft 365](/claude/microsoft-365/) sayfasına bakın.

### Türkiye'de Sık Kullanılan Araçlar

Türk şirketlerinin muhasebe ve ERP yazılımları için durum şöyle: **Paraşüt, Logo ve Mikro için resmi connector yok**; dizinde de aramada da çıkmıyor. Özel connector ya da REST API ile kurulabilir, bu BT desteği ister. Pratik yol çoğu zaman daha sadedir: sistemden Excel'e dışa aktarın, dosyayı Claude'a verin. Hangi araçta ne mümkün, [Türk İş Araçları](/wiki/temeller/turk-is-araclari/) sayfasında.

## Pratik Kullanım Senaryoları

### Pazartesi Sabah Brief'i

[Calendar] connector'u: *"Bu hafta toplantılarımı listele, her birinin önceden ne hazırlamam gerektiğini söyle."* Claude takvimi okur, katılımcılara bakar, hatırlatma listesi çıkarır.

### Müşteri Geçmişi Toplama

[Gmail] + [Drive] connector'u: *"Bosfor Tekstil ile son 6 aydaki tüm yazışma ve dokümanları topla, gelinen son durumu özetle."* Claude iki kaynağı birden tarar, birleşik özet üretir.

**Süre:** elle 45-90 dakika, Claude ile 5-10 dakika (kontrol dahil). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

### Logo Dökümünden Mutabakat ve Kur Güncelleme

Logo ya da Mikro'dan aldığınız cari hareket dökümünü Excel olarak yükleyin: *"Bu döküm ile e-Fatura listesini karşılaştır, eşleşmeyen faturaları listele."* Ya da: *"Varsayımlardaki dolar kurunu TCMB'nin güncel kuruyla değiştir, maliyet tablosunu yeniden hesapla."* Burada resmi bir Logo connector'ı yok; iş, dışa aktarılan dosya üzerinden yürür. Çıkan rakamları kaynakla karşılaştırmak sizin işiniz. Excel içinde çalışmak için [Office ve Chrome'da Claude](/wiki/araclar/office-ve-chrome/) sayfasına bakın.

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

Connector'lar Free dahil tüm planlarda kullanılabilir. Team ve Enterprise'ta bazı connector'ları önce yönetici etkinleştirir. Plan karşılaştırması için [Claude Connectors](/claude/connectors/) ve [Planlar](/wiki/temeller/planlar/), yönetici ayarları için [Takım ve Admin](/wiki/temeller/takim-ve-admin/) sayfaları.

## Dizinden mi, Özel Bağlantı mı?

Hepsi aynı teknolojiyi (MCP) kullanır; fark kimin kurduğu ve bakımıdır:

- **Servisiniz resmi dizindeyse → dizindeki connector'ı kullanın.** Kurulumu en kolay, bakımı sağlayıcıda.
- **Servisiniz dizinde yoksa ya da iç sisteminizi bağlayacaksanız → özel connector ya da masaüstü uzantısı.** Karar akışı: [Şirket Sistemini Bağlamak](/wiki/mcp/sirket-sistemini-baglamak/), kavram: [MCP Nedir?](/wiki/mcp/nedir/).
- **İkisi birden olabilir.** Aynı sohbette dizin connector'ı ve özel bağlantı birlikte çalışır.

[MCP Kurulum Rehberi](/wiki/mcp/kurulum-rehberi/) ve [Popüler MCP'ler](/wiki/mcp/populer-mcpler/) sayfaları MCP tarafının detayını verir.

## Kurumsal Kullanımda Tavsiyeler

**Pilot kullanıcı seçin.** Tüm şirkete birden açmadan, 2-3 kişi bağlasın, 2 hafta kullansın, geri bildirim alın. Pilotun nasıl kurulacağı ve yaygınlaştırma sırası için [Pilot ve Yaygınlaştırma](/wiki/temeller/pilot-ve-yayginlastirma/) sayfasına bakın.

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
- [Türk İş Araçları](/wiki/temeller/turk-is-araclari/): Logo, Mikro, Paraşüt ve e-Fatura tarafı
- [Claude Connectors](/claude/connectors/): ürün tanıtımı ve plan kapsamı

