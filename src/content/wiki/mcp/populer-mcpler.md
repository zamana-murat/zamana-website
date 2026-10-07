---
title: "Popüler MCP'ler: Kurumsal Seçim Rehberi"
seoTitle: "Kurumsal MCP Sunucuları: Hangisi Olgun, Hangisi Riskli?"
description: "Hangi MCP sunucuları kurumsal kullanıma hazır? Resmi, sağlayıcı ve topluluk sunucuları, arşivlenen paketler, Türk muhasebe yazılımlarının durumu."
tags:
  - mcp
  - populer
  - kurumsal
lastUpdated: "2026-10-06"
---

**MCP ekosisteminde yüzlerce sunucu var, ama kurumsal kullanım için olgun olanlar sınırlı.** Bu sayfa MCP sunucularını kategorilere ayırır ve her biri için olgunluk ve risk notu verir. Claude'daki connector'lar da birer MCP sunucusudur; sayfadaki bazı sunucuların dizinde hazır connector karşılığı vardır.

[Kurulum Rehberi](/wiki/mcp/kurulum-rehberi/) ile birlikte okunmalı; [Güvenlik](/wiki/mcp/guvenlik/) sayfasındaki değerlendirme kontrolleri her sunucu için geçerli. Ürün çerçevesi için [Claude Connectors](/claude/connectors/) sayfasına bakın.

## Önce: Dizinde Var mı?

| Durum | Yol |
|---|---|
| Servis resmî dizinde var | Hazır connector, tek tık: [Connectors](/wiki/araclar/connectors/) |
| Dizinde yok | Özel connector ya da masaüstü uzantısı: [Kurulum Rehberi](/wiki/mcp/kurulum-rehberi/) |

Kendi iç sisteminiz için [Şirket Sistemini Claude'a Bağlamak](/wiki/mcp/sirket-sistemini-baglamak/) sayfasına, tüm seçeneklerin listesi için [Bağlantı Listesi](/wiki/mcp/baglanti-listesi/) sayfasına bakın.

## Resmi (Anthropic) MCP Server'ları

Anthropic'in yayımladığı referans sunucular; çoğu geliştirici içindir. Bunlardan `filesystem`, `memory`, `fetch`, `git` gibileri hâlâ bakımdadır. `github`, `postgres`, `sqlite`, `slack` ve `brave-search` ise `modelcontextprotocol/servers-archived` deposuna taşındı ve artık bakımı yapılmıyor. Bu beşi için sağlayıcının güncel, bakımı yapılan sunucusunu ya da paketini kurun.

### filesystem

Yerel dosya sistemine erişim.

**Kullanım:** Claude'un belirli bir klasördeki dosyaları okuyup yazması: proje klasörü, doküman arşivi, indirilenler.

**Risk:** Klasör seçimi geniş tutulursa hassas veri görülür.

**Tavsiye:** Sadece "Claude workspace" gibi izole bir klasör.

### github

GitHub repo işlemleri. GitHub'ın kendi güncel MCP sunucusunu tercih edin.

**Kullanım:** Repo dosyası okuma, issue / PR yönetimi, kod arama.

**Risk:** Yazma yetkisi geniş verilirse Claude beklenmedik commit yapabilir.

**Tavsiye:** Fine-grained token, sadece okuma; yazma için ayrı manuel onay.

### postgres / sqlite

Veritabanı sorgulama. Güncel, bakımı yapılan bir paketle kurun.

**Kullanım:** İç veritabanlarına Claude üzerinden ad-hoc sorgu, analitik, rapor.

**Risk:** Yazma yetkisi olan user kullanılırsa **DROP TABLE** vs felaket.

**Tavsiye:** Her zaman **read-only** kullanıcı, sadece belirli tablolar.

### brave-search / google-search

Web arama API'si.

**Kullanım:** Claude'un dahili web aramasına alternatif; kurumsal bütçeleme için.

**Risk:** API maliyet sorgu sayısıyla artar.

**Tavsiye:** Çoğu kullanıcı için Claude'un dahili [web araması](/wiki/araclar/web-arama/) yeterlidir, bu MCP genelde gereksizdir.

### slack

Slack workspace erişimi.

**Kullanım:** Mesaj okuma, kanal arama, DM yönetimi.

**Karar:** Slack için resmi connector da var ([Slack ve Teams Entegrasyonu](/wiki/araclar/slack-teams-entegrasyon/)). MCP'ye sadece özel yapılandırma gerekiyorsa.

### memory

Kalıcı bellek server'ı (filesystem üzerine kurulu).

**Kullanım:** Claude'un sohbetler arası bilgi taşıması (Claude'un yerleşik [memory](/wiki/yetenekler/memory/)'sinden farklı, daha kontrollü).

**Tavsiye:** İleri düzey kullanıcılar için. Çoğu kullanıcı yerleşik memory'ye yetinir.

## Topluluk MCP'leri: Olgun Olanlar

Aşağıdaki server'lar topluluk üretimi ama **yaygın kullanılan ve test edilmiş** durumda. Yine de [Güvenlik](/wiki/mcp/guvenlik/) değerlendirmesinden geçirin.

### Notion

**Kullanım:** Notion sayfaları okuma, veritabanı sorgulama, sayfa oluşturma.

**Connector:** Notion için resmî connector da var, çoğunlukla yeterli.

### Linear / Asana / Jira

**Kullanım:** Proje yönetim sistemlerinde görev sorgulama, durum güncelleme.

**Connector:** Linear ve Asana için resmî connector mevcut, önce onu deneyin. Jira için Atlassian'ın kendi connector'ı dizinde (Jira, Confluence, Bitbucket ve Loom'u kapsar, Atlassian yapımı, "Anthropic verified"); topluluk sunucusuna gerek yok.

### Google Drive (genişletilmiş)

**Kullanım:** Resmî connector'un karşılamadığı yapılandırmalar (örn. belirli bir klasörü izole etme, OCR'lı dosya işleme).

**Tavsiye:** Önce connector'u deneyin, yetmezse MCP.

### Salesforce / HubSpot

**Kullanım:** CRM verisine erişim, opportunity, contact, account okuma; sınırlı yazma.

**Connector:** Her ikisi için resmî connector var, önce onu deneyin.

**Tavsiye:** Kurumsal CRM için iyi seçenek. Token yetkilerini sınırlı tutun.

### MySQL / SQL Server / Oracle

**Kullanım:** Postgres MCP'sinin diğer veritabanları için karşılığı.

**Tavsiye:** Read-only user, belirli tablolar.

### MongoDB / Elasticsearch

**Kullanım:** NoSQL ve arama altyapısı sorgulama.

### AWS / GCP / Azure

**Kullanım:** Cloud kaynaklarını sorgulama (S3 listeleme, EC2 durum, vs.).

**Risk:** Bu hesaplar çoğu zaman yüksek yetkilidir. Production cloud'a Claude'un yazma yetkisi vermek genelde tehlikelidir.

**Tavsiye:** Read-only IAM rolüyle, sadece belirli kaynaklarda.

### Stripe

**Kullanım:** Fatura, ödeme, müşteri verisi okuma.

**Risk:** Finansal veri hassas. KVKK ve PCI-DSS açısından dikkat.

### Sentry / Datadog

**Kullanım:** Hata logları ve metrik sorgulama.

**Tavsiye:** Olay araştırma sırasında Claude'un hızla insight çıkarması için pratik.

## Sektörel / Niş MCP'ler

### Hukuki

- **CourtListener / Judicial APIs:** Yargı kararları aramak (ABD odaklı; Türkiye için karşılığı yok)
- **Mevzuat MCP:** Türkiye mevzuatı için olgun bir MCP bulunamadı; Claude'un dahili web araması daha pratiktir

[Hukuk departmanı](/wiki/departmanlar/hukuk/) sayfasında alternatifler.

### Sağlık

- Kurumsal hasta verisi MCP'leri: HIPAA / KVKK kısıtları nedeniyle Türkiye'de **özel sözleşmeyle** kurulur. [Sağlık](/wiki/departmanlar/saglik/) sayfası dikkate alınmalı.

### Finans / Muhasebe

- **Paraşüt / Logo / Mikro / Netsis:** Türkiye'nin yerli muhasebe ve ERP sistemleri için Claude dizininde connector yok ve sağlayıcı yayımlı resmî MCP sunucusu bulunamadı (Ekim 2026 araması). Özel connector (herkese açık HTTPS adresli bir MCP sunucusu gerekir) ya da sağlayıcının REST API'si ile kurulur; özel geliştirme ister. Paraşüt için tek bulunan sunucu **resmî olmayan topluluk işidir** (Paraşüt ile bağı yok); müşteri verisi için önerilmez, en fazla deneme içindir. Logo, Mikro ve Netsis için topluluk sunucusu da bulunamadı. Çoğu zaman dışa aktarılan dosyayla çalışmak daha güvenlidir: [Türk İş Araçları](/wiki/temeller/turk-is-araclari/)
- **QuickBooks / Xero:** İkisinin de sağlayıcı yapımı connector'ı dizinde (QuickBooks Intuit'ten, Xero Xero Limited'den ve salt okunur). Bu yazılımları kullanıyorsanız (örneğin yurt dışı iştirakinizde) işe yarar; Türk muhasebe yazılımlarının karşılığı değildir

[Finans departmanı](/wiki/departmanlar/finans/) sayfasında ek bağlam.

### Üretim

- **MES / SCADA:** Çoğu zaman özel MCP geliştirme gerekir; standart MCP yok
- [Üretim ve İmalat](/wiki/departmanlar/uretim-imalat/) sayfasında pratik.

## Önerilen Başlangıç Seti

Çoğu iş kullanıcısı için üç parça yeter:

| Parça | Kim için |
|---|---|
| **Ofis paketi connector'ı** (Microsoft 365 ya da Google Drive, Gmail, Calendar) | Herkes |
| **CRM connector'ı** (kullandığınız CRM dizindeyse) | Satış, müşteri ilişkileri |
| **Dosya uzantısı** (Claude Desktop, Settings > Extensions; tek bir çalışma klasörüyle sınırlı) | Dosya üzerinde çalışanlar |

Diğerleri ihtiyaca göre eklenir; bağlantı sayısını az tutmak hem güvenliği hem doğruluğu korur.

> **Geliştiriciler için: başlangıç seti**
>
> | Sunucu | Kim için |
> |---|---|
> | `filesystem` | Herkes (tek çalışma klasörü) |
> | `github` | Geliştirici, BT, ürün |
> | `postgres` / `mysql` | Veri analisti, BT (yalnız salt okunur kullanıcıyla) |
> | `slack` | Kurumsal kullanıcı (workspace varsa) |
>
> `github`, `postgres` ve `slack` için yukarıdaki arşiv uyarısına uyun ve güncel sağlayıcı sunucusunu kurun.

## Kurulum Sonrası Audit Listesi

3 ay sonra şu soruyu sorun:

- Hangi MCP'leri **gerçekten kullandım**?
- Hangileri kurulu ama hiç çağrılmamış?
- Hangileri yetkisi gereğinden fazla?

Kullanılmayanları kapatın. Yetkileri sıkılaştırın. Bu basit disiplin uzun vadeli güvenlik için kritik.

## Kurumsal Onaylı MCP Listesi: Şablon

Şirketinizde kullanılacak MCP'lerin yazılı listesi olsun:

```markdown
# [Şirket]: Onaylı Bağlantı Listesi (sürüm 2.1)

## Production Onaylı
- Microsoft 365 connector (SharePoint, OneDrive; araçlar: salt okunur Always allow, yazma Needs approval)
- Google Drive connector (yalnız "Claude-calisma" klasörü)
- CRM connector'ı (salt okunur kullanıcı)
- Dosya uzantısı (tek çalışma klasörü)

## Pilot: Test Aşamasında
- Linear connector
- İç CRM için özel connector (şirket içi geliştirme)

## Onay Beklemekte
- Muhasebe yazılımı için özel connector (BT inceliyor)

## Yasak
- Kök klasöre erişimli uzantılar
- Test edilmemiş topluluk sunucuları
- Kişisel hesapla kurum verisine bağlantı

Yenileme: Her çeyreğin son haftası
Sahibi: BT Müdürü + AI Governance kurulu
```

Team ve Enterprise'ta owner, uzantılar için izin listesini ve connector araçları için kuruluş geneli izinleri açarak bu listeyi teknik olarak da uygulayabilir ([Güvenlik](/wiki/mcp/guvenlik/)). [Şirket içi politika](/wiki/temeller/sirket-ici-politika/) ve [BT departmanı](/wiki/departmanlar/bilgi-teknolojileri/) sayfaları listeyi politikaya bağlamayı detaylandırır.

## Yeni MCP Değerlendirme Süreci

Yeni bir MCP'yi onaylı listeye almak için:

1. **İhtiyaç beyanı**: kim, ne için kullanacak
2. **Kaynak doğrulama**: kim üretmiş, açık kaynak mı, kod incelendi mi
3. **Güvenlik değerlendirmesi**: [Güvenlik](/wiki/mcp/guvenlik/) sayfasındaki kontrol listesi
4. **Pilot**: 1-2 kişide test; gözlem süresi tahmini tipik aralıkla 2-4 hafta, kuruluşa göre değişir
5. **Onay**: BT + AI Governance imzası
6. **Yapılandırma standartlaştırma**: token, yetki, log
7. **Dağıtım**: onaylı listeye eklenir, ilgili kullanıcılara duyurulur
8. **Periyodik gözden geçirme**: 3 ayda bir

Bu süreç ağır gibi görünür ama kurumsal güven için kritiktir.

## Geleceğe Bakış

MCP ekosistemi 2025-2026'da hızla olgunlaşıyor:

- Resmî connector dizini yaklaşık 900 connector'a ulaştı; [Claude Marketplace](/haberler/2026-09-23-claude-marketplace/) connector'ları, eklentileri ve ortak hizmetleri tek yerde topluyor (kurumun satın alma tarafı için [Marketplace](/kurumsal/marketplace/))
- Kurumsal SaaS'lar kendi resmî MCP sunucularını yayımlıyor
- Enterprise yönetim araçları (merkezi config, audit) gelişiyor

İhtiyacınız olan çoğu şey için yakında resmî veya onaylı bir MCP bulunması muhtemel, ama özel ve yerel sistemlerde hâlâ biraz öncülük gerekiyor.

## İlgili Sayfalar

- [MCP Nedir?](/wiki/mcp/nedir/): Temeller
- [Kurulum Rehberi](/wiki/mcp/kurulum-rehberi/): Adım adım kurulum
- [Güvenlik](/wiki/mcp/guvenlik/): Risk değerlendirmesi
- [Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): MCP + connector listesi
- [Connectors](/wiki/araclar/connectors/): Daha kolay alternatifler
- [Claude Connectors](/claude/connectors/): ürün tanıtımı ve plan kapsamı
- [Şirket Sistemini Claude'a Bağlamak](/wiki/mcp/sirket-sistemini-baglamak/): iç ERP ve CRM için karar akışı
- [Claude Desktop](/wiki/araclar/claude-desktop/): MCP kullanım ortamı
- [BT Departmanı](/wiki/departmanlar/bilgi-teknolojileri/): Kurumsal yapılandırma
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Onaylı liste şablonu

