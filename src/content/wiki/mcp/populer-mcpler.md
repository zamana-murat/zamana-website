---
title: "Popüler MCP'ler — Kurumsal Seçim Rehberi"
description: "Hangi MCP'ler kurumsal kullanım için olgun? Resmi, topluluk, sektörel — kategori bazlı seçim ve değerlendirme."
tags:
  - mcp
  - populer
  - kurumsal
---

**MCP ekosisteminde yüzlerce server var, ama kurumsal kullanım için olgun olanlar sınırlı.** Bu sayfa Zamana metodolojisinde gözlemlenen, denenen ve yönlendirdiğimiz MCP'leri kategorilere ayırarak listeler.

[Kurulum Rehberi](kurulum-rehberi/) ile birlikte okunmalı; [Güvenlik](guvenlik/) sayfasındaki değerlendirme kontrolleri her server için geçerli.

## Önce — MCP Mi, Connector Mu?

Resmî [Connector](../araclar/connectors/) varsa öncelik orada. MCP, connector'un karşılayamadığı senaryolarda devreye girer:

- Şirket içi sistem
- Niş SaaS
- Özel yapılandırma gerekli olduğunda
- [Claude Desktop](../araclar/claude-desktop/) yerel kullanımda

[Bağlantı Listesi](baglanti-listesi/) sayfasında tüm seçenekler bir arada.

## Resmi (Anthropic) MCP Server'ları

Anthropic tarafından yayımlanan, **denetlenen** server'lar. İlk tercih.

### filesystem

Yerel dosya sistemine erişim.

**Kullanım:** Claude'un belirli bir klasördeki dosyaları okuyup yazması — proje klasörü, doküman arşivi, indirilenler.

**Risk:** Klasör seçimi geniş tutulursa hassas veri görülür.

**Tavsiye:** Sadece "Claude workspace" gibi izole bir klasör.

### github

GitHub repo işlemleri.

**Kullanım:** Repo dosyası okuma, issue / PR yönetimi, kod arama.

**Risk:** Yazma yetkisi geniş verilirse Claude beklenmedik commit yapabilir.

**Tavsiye:** Fine-grained token, sadece okuma; yazma için ayrı manuel onay.

### postgres / sqlite

Veritabanı sorgulama.

**Kullanım:** İç veritabanlarına Claude üzerinden ad-hoc sorgu — analitik, rapor.

**Risk:** Yazma yetkisi olan user kullanılırsa **DROP TABLE** vs felaket.

**Tavsiye:** Her zaman **read-only** kullanıcı, sadece belirli tablolar.

### brave-search / google-search

Web arama API'si.

**Kullanım:** Claude'un dahili web aramasına alternatif, kurumsal bütçeleme için.

**Risk:** API maliyet sorgu sayısıyla artar.

**Tavsiye:** Çoğu kullanıcı için Claude'un dahili [web araması](../araclar/web-arama/) yeterli — bu MCP genelde gereksiz.

### slack

Slack workspace erişimi.

**Kullanım:** Mesaj okuma, kanal arama, DM yönetimi.

**Karar:** Slack için resmi connector da var ([Slack ve Teams Entegrasyonu](../araclar/slack-teams-entegrasyon/)). MCP'ye sadece özel yapılandırma gerekiyorsa.

### memory

Kalıcı bellek server'ı (filesystem üzerine kurulu).

**Kullanım:** Claude'un sohbetler arası bilgi taşıması (Claude'un yerleşik [memory](../yetenekler/memory/)'sinden farklı, daha kontrollü).

**Tavsiye:** İleri düzey kullanıcılar için. Çoğu kullanıcı yerleşik memory'ye yetinir.

## Topluluk MCP'leri — Olgun Olanlar

Aşağıdaki server'lar topluluk üretimi ama **yaygın kullanılan ve test edilmiş** durumda. Yine de [Güvenlik](guvenlik/) değerlendirmesinden geçirin.

### Notion

**Kullanım:** Notion sayfaları okuma, veritabanı sorgulama, sayfa oluşturma.

**Connector:** Notion için resmî connector da var, çoğunlukla yeterli.

### Linear / Asana / Jira

**Kullanım:** Proje yönetim sistemlerinde görev sorgulama, durum güncelleme.

**Connector:** Linear için resmî connector mevcut. Asana/Jira için MCP yaygın.

### Google Drive (genişletilmiş)

**Kullanım:** Resmî connector'un karşılamadığı yapılandırmalar (örn. spesifik klasör isolasyonu, OCR'lı dosya işleme).

**Tavsiye:** Önce connector'u deneyin, yetmezse MCP.

### Salesforce / HubSpot

**Kullanım:** CRM verisine erişim — opportunity, contact, account okuma; sınırlı yazma.

**Tavsiye:** Kurumsal CRM için iyi seçenek. Token yetkilerini sınırlı tutun.

### MySQL / SQL Server / Oracle

**Kullanım:** Postgres MCP'sinin diğer veritabanları için karşılığı.

**Tavsiye:** Read-only user, belirli tablolar.

### MongoDB / Elasticsearch

**Kullanım:** NoSQL ve arama altyapısı sorgulama.

### AWS / GCP / Azure

**Kullanım:** Cloud kaynaklarını sorgulama (S3 listeleme, EC2 durum, vs.).

**Risk:** Yetkisi yüksek olur — production cloud'a Claude'un yazma yetkisi vermek genelde tehlikeli.

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
- **Mevzuat MCP:** Türkiye mevzuat MCP'si henüz olgun değil — Claude'un dahili web araması daha pratik

[Hukuk departmanı](../departmanlar/hukuk/) sayfasında alternatifler.

### Sağlık

- Kurumsal hasta verisi MCP'leri: HIPAA / KVKK kısıtları nedeniyle Türkiye'de **özel sözleşmeyle** kurulur. [Sağlık](../departmanlar/saglik/) sayfası dikkate alınmalı.

### Finans / Muhasebe

- **Logo / Mikro / Netsis:** Türkiye'nin yerli ERP sistemleri için resmî MCP yok; özel geliştirme gerekir
- **QuickBooks / Xero:** Topluluk MCP'leri var, küçük işletmeler için

[Finans departmanı](../departmanlar/finans/) sayfasında ek bağlam.

### Üretim

- **MES / SCADA:** Çoğu zaman özel MCP geliştirme gerekir; standart MCP yok
- [Üretim ve İmalat](../departmanlar/uretim-imalat/) sayfasında pratik.

## Önerilen Başlangıç Seti

Yeni bir Claude Desktop kullanıcısı için önerilen ilk MCP set:

| MCP | Kim için |
|-----|----------|
| **filesystem** | Herkes (Documents klasörü) |
| **github** | Geliştirici, BT, ürün |
| **postgres / mysql** | Veri analisti, finans, BT |
| **slack** | Kurumsal kullanıcı (workspace varsa) |

Bu dört server çoğu kullanıcı için yeterli temeli oluşturur. Diğerleri ihtiyaca göre eklenir.

## Kurulum Sonrası Audit Listesi

3 ay sonra şu soruyu sorun:

- Hangi MCP'leri **gerçekten kullandım**?
- Hangileri kurulu ama hiç çağrılmamış?
- Hangileri yetkisi gereğinden fazla?

Kullanılmayanları kapatın. Yetkileri sıkılaştırın. Bu basit disiplin uzun vadeli güvenlik için kritik.

## Kurumsal Onaylı MCP Listesi — Şablon

Şirketinizde kullanılacak MCP'lerin yazılı listesi olsun:

```markdown
# [Şirket] — Onaylı MCP Listesi (sürüm 2.1)

## Production Onaylı
- filesystem (sınırlı klasör)
- github (read-only fine-grained)
- postgres (read-only user)
- slack (resmi connector öncelikli, MCP yedek)

## Pilot — Test Aşamasında
- linear
- internal-crm-mcp (şirket içi geliştirme)

## Onay Beklemekte
- aws-s3 (BT inceliyor)

## Yasak
- Kişisel filesystem MCP (root erişimli)
- Test edilmemiş topluluk MCP'leri

Yenileme: Her çeyreğin son haftası
Sahibi: BT Müdürü + AI Governance kurulu
```

[Şirket içi politika](../temeller/sirket-ici-politika/) ve [BT departmanı](../departmanlar/bilgi-teknolojileri/) sayfaları bu listeyi politikaya bağlamayı detaylandırır.

## Yeni MCP Değerlendirme Süreci

Yeni bir MCP'yi onaylı listeye almak için:

1. **İhtiyaç beyanı** — kim, ne için kullanacak
2. **Kaynak doğrulama** — kim üretmiş, açık kaynak mı, kod incelendi mi
3. **Güvenlik değerlendirmesi** — [Güvenlik](guvenlik/) sayfasındaki kontrol listesi
4. **Pilot** — 1-2 kişide test, 2-4 hafta gözlem
5. **Onay** — BT + AI Governance imzası
6. **Yapılandırma standartlaştırma** — token, yetki, log
7. **Dağıtım** — onaylı listeye eklenir, ilgili kullanıcılara duyurulur
8. **Periyodik gözden geçirme** — 6 ayda bir

Bu süreç ağır gibi görünür ama kurumsal güven için kritiktir.

## Geleceğe Bakış

MCP ekosistemi 2025-2026'da hızla olgunlaşıyor:

- Daha fazla resmi (Anthropic) server
- Doğrulanmış marketplace gelişiyor
- Enterprise yönetim araçları (merkezi config, audit)
- Kurumsal SaaS'lar kendi resmi MCP'lerini yayımlıyor

İki yıl sonra muhtemelen ihtiyacınız olan her şey için resmi/onaylı MCP olacak. Şu an hâlâ "biraz öncülük gerekiyor" aşamasında.

## İlgili Sayfalar

- [MCP Nedir?](nedir/) — Temeller
- [Kurulum Rehberi](kurulum-rehberi/) — Adım adım kurulum
- [Güvenlik](guvenlik/) — Risk değerlendirmesi
- [Bağlantı Listesi](baglanti-listesi/) — MCP + connector listesi
- [Connectors](../araclar/connectors/) — Daha kolay alternatifler
- [Claude Desktop](../araclar/claude-desktop/) — MCP kullanım ortamı
- [BT Departmanı](../departmanlar/bilgi-teknolojileri/) — Kurumsal yapılandırma
- [Şirket İçi Politika](../temeller/sirket-ici-politika/) — Onaylı liste şablonu

