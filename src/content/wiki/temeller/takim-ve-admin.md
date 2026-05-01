---
title: Takım, Admin Paneli ve Enterprise Plan
description: Birden çok kullanıcılı şirketler için Claude — Team ve Enterprise plan farkları, admin paneli, kullanıcı yönetimi, merkezi fatura.
tags:
  - temeller
  - takim
  - admin
  - enterprise
---

**Bireysel Pro plan tek kişi içindir. Şirkette Claude'u 3, 6, 20 kişi kullanmaya başladığında işler farklılaşır** — fatura merkezileşir, kullanıcı yönetimi, denetim ve veri politikası ortak olur. Bunun için **Team** ve **Enterprise** planları var.

Bu sayfa Team ve Enterprise farkını, ne zaman geçilmeli ve admin panelinde neler olduğunu anlatır.

## Plan Karşılaştırma — Bireysel mi, Takım mı?

[Planlar](planlar/) sayfasında her planın detayı var. Buradaki odak: **şirket olarak hangisini almalı?**

| Özellik | Pro × N kişi (bireysel) | Team | Enterprise |
|---|---|---|---|
| Kullanıcı sayısı | 1 / hesap | Min ~5 | Esnek (genelde 50+) |
| Fatura | Her hesap ayrı | Tek merkezi fatura | Tek merkezi, sözleşmeli |
| Kullanıcı yönetimi | Yok | Admin paneli | Gelişmiş admin paneli |
| Veri eğitime kullanılmaz garantisi | Politika geçerli | Politika geçerli | Sözleşmeli |
| SSO (tek seferlik giriş) | — | Sınırlı | ✅ |
| SCIM (otomatik kullanıcı sağlama) | — | — | ✅ |
| Audit log | — | Kısıtlı | ✅ Tam |
| Saklama politikası özel | — | — | ✅ |
| Fiyat | $20/kişi/ay | ~$30/kişi/ay (5+ min.) | Sözleşmeli |
| Onay süresi | Hemen | Hemen | Anthropic ile görüşme |

## Ne Zaman Team / Enterprise'a Geçmeli?

**3 kişiden azsa** — Pro hesaplar yeterli olabilir. Tek dezavantaj: fatura tek tek geliyor, finans muhasebeleştirmek için her birini ayrı işliyor.

**3-10 kişi → Team plan** mantıklı:

- Tek fatura
- Admin paneli (kim ne kadar kullanıyor görünür)
- Yeni başlayan çalışana hızlı kullanıcı ekleme
- Şirketten ayrılan çalışana hızlı erişim kapatma

**10+ kişi veya hassas sektör → Enterprise plan** mantıklı:

- Hukuk, finans, sağlık gibi düzenleyici denetime tabi sektörler
- KVKK çerçevesinde **işleyen sıfatıyla sözleşme** (DPA — Data Processing Agreement) gerektiğinde
- SSO + audit log gerekli olduğunda
- Kurum çapında 50+ kullanıcıda yıllık tasarruf ciddileşir

## Plan Politikası — Yeni Zamana Müşterileri İçin

Yeni Zamana katılımcısının **ilk ay Max 5x ($100/ay) zorunlu.** Sebep: Pro plandaki günlük limit yeni kullanıcı için yetersiz, çabuk dolar, kişi "Claude çalışmıyor" deyip vazgeçer.

İkinci aydan itibaren kullanım gerçek datayla görüldükçe karma plana geçilebilir:

- Yoğun kullanıcı (4+ saat/gün) → Max 5x veya Max 20x
- Orta kullanıcı (1-3 saat/gün) → Pro
- Hafif kullanıcı (haftada birkaç saat) → Pro

Bu politika tek kişilik aboneliklerde de, Team / Enterprise'a geçişte de geçerlidir. [Planlar](planlar/) detay verir.

## Admin Paneli — Ne Yapar?

Team ve Enterprise planda **admin** rolü olan kullanıcı, claude.ai → **Admin Console** üzerinden organizasyonu yönetir.

### Kullanıcı Yönetimi

- **Kullanıcı ekleme:** E-posta ile davet → kullanıcı kabul ederse hesabı organizasyona bağlanır
- **Kullanıcı kaldırma:** Çalışan ayrılınca hesabı pasifleştir; sohbet geçmişine erişimi kesilir
- **Rol atama:** Admin / üye
- **SSO ile entegrasyon (Enterprise):** Çalışan listesinin SAML/SCIM ile otomatik senkron olması

### Kullanım İzleme

- Aktif kullanıcı sayısı, son giriş tarihleri
- Toplam mesaj/sorgu hacmi (özet düzeyinde)
- Hangi özellikler kullanılıyor (Cowork, [Projects](../araclar/projects/), [Connectors](../araclar/connectors/))

**Önemli sınır:** Admin **kullanıcıların sohbet içeriğini okuyamaz** (kişisel gizlilik korunur). Sadece kullanım metriklerini görür. Bu, hem yasal hem de Anthropic'in tasarım tercihidir.

### Fatura ve Ödeme

- Tek bir kredi kartı veya kurumsal ödeme aracı
- Aylık/yıllık invoice tek e-postaya gelir
- Vergi bilgileri organizasyon adına ([Fatura ve KDV](fatura-ve-kdv/) sayfasındaki şekilde)
- Plan değişikliği, kullanıcı ekleme buradan ücretlendirme yansıması anlık görünür

### Politika Ayarları

Enterprise planda admin şu politikaları organizasyon çapında uygulayabilir:

- **Saklama süresi** — örn. tüm sohbetler 90 gün sonra otomatik silinsin
- **[Connectors](../araclar/connectors/) izinleri** — hangi connector kullanılabilir, hangisi yasak
- **[MCP](../mcp/nedir/) izinleri** — özel MCP server'lar onaylı listede mi
- **Sohbet paylaşma izni** — kullanıcılar dışarı public link üretebilsin mi
- **Eğitim için veri kullanma** — zaten varsayılan olarak kapalı, ama Enterprise sözleşmesiyle pekiştirilir

## SSO — Tek Seferlik Giriş

Enterprise planda **SAML 2.0** üzerinden SSO entegrasyonu var. Bu:

- Çalışan kurumsal e-posta + şifresiyle (Azure AD, Okta, Google Workspace) Claude'a girer
- Ayrı bir Claude şifresi olmaz
- Çalışan ayrılınca SSO'dan kapatınca Claude erişimi de kapanır
- IT'nin tek bir noktadan kontrol etmesini sağlar

[BT departmanı](../departmanlar/bilgi-teknolojileri/) sayfası SSO ve Enterprise IT entegrasyonunu detaylandırır.

## SCIM — Otomatik Kullanıcı Sağlama

SCIM (System for Cross-domain Identity Management), kurumsal kimlik sistemindeki (Azure AD, Okta) kullanıcı eklenmesi/silinmesi otomatiklerinin Claude'a yansımasını sağlar. Yeni çalışan İK sistemine eklendiğinde otomatik Claude hesabı açılır; ayrılınca otomatik kapanır.

Bu, 50+ kişilik organizasyonlarda hayati bir özelliktir.

## Audit Log

Enterprise planda admin tüm organizasyon aktivitelerinin loglarını görür:

- Kim ne zaman giriş yaptı
- Hangi connector / MCP eklendi
- Plan / üyelik değişiklikleri
- Hassas yapılandırma değişiklikleri

Bu log düzenli olarak SIEM (kurumsal güvenlik bilgi yönetim sistemi) sistemine aktarılabilir. Hukuk ve finans denetimi için gereken iz buradadır.

## Veri İşleme Sözleşmesi (DPA)

Enterprise planda Anthropic ile **Data Processing Agreement (DPA)** imzalanabilir. Bu sözleşme:

- Anthropic'in **veri işleyen** sıfatıyla rolünü tanımlar
- KVKK ve GDPR uyumluluk taahhütlerini içerir
- Olay (incident) bildirim süreçlerini düzenler
- Veri yerleşim ve silme politikalarını netleştirir

Türkiye'deki KVKK kapsamında, **kişisel veri işleyen üçüncü taraf** ile sözleşme yapma yükümlülüğü vardır. DPA bu yükümlülüğün karşılığıdır.

[Gizlilik ve KVKK](gizlilik-kvkk/) ve [Hukuk departmanı](../departmanlar/hukuk/) sayfaları bu boyutu derinleştirir.

## Geçiş Senaryoları

### Senaryo 1 — 6 Bireysel Pro'dan Team'e

Şu an 6 kişide Pro hesap var, 6 ayrı fatura geliyor. Geçiş:

1. Admin Console'da Team plan seçin
2. 6 e-posta adresini davet edin
3. Çalışanlar mevcut Pro hesaplarını organizasyona bağlasın (sohbet geçmişi korunur)
4. Eski Pro abonelikleri iptal edilir
5. Tek fatura akışı başlar

### Senaryo 2 — Team'den Enterprise'a

20+ kişi olduğunuzda, hassas veri politikası gerektiğinde:

1. Anthropic Sales ile iletişime geçin
2. Kullanıcı sayısı, sektör, gereksinimler üzerinden teklif alın
3. Sözleşme + DPA imzalanır
4. Mevcut Team hesabı Enterprise'a yükseltilir

### Senaryo 3 — Sıfırdan Enterprise

50+ kişilik organizasyonda baştan Enterprise alınır. Pilot grup (5-10 kişi) ile başlayıp 6 ay içinde tüm organizasyona yayma rotası mantıklıdır.

## Kurumsal Onboarding — Pratik Adımlar

Yeni bir çalışan organizasyona katıldığında:

1. **Davet:** Admin paneli üzerinden e-posta davet
2. **İlk giriş:** Çalışan hesabı kabul eder, Claude'a girer
3. **Bireysel CLAUDE.md:** Kendi rol ve sorumluluklarını tanımlayan [CLAUDE.md](../claude-md/nedir/) yazsın
4. **Team CLAUDE.md (varsa):** Şirket genelinde paylaşılan kural seti uygulansın ([Takım CLAUDE.md](../claude-md/takim-claude-md/))
5. **Eğitim:** [İlk 7 Gün](ilk-7-gun/) rehberini takip etsin
6. **Politika imzası:** [Şirket İçi Politika](sirket-ici-politika/) belgesini okusun ve onaylasın

Zamana retainer programı bu onboarding'i 6 kişi için sistemli yapar.

## İlgili Sayfalar

- [Planlar](planlar/) — Plan fiyat ve özellik detayı
- [Fatura ve KDV](fatura-ve-kdv/) — Türkiye'de muhasebe
- [Şirket İçi Politika](sirket-ici-politika/) — Politika şablonu
- [Gizlilik ve KVKK](gizlilik-kvkk/) — Yasal uyum
- [BT Departmanı](../departmanlar/bilgi-teknolojileri/) — IT açısından kurulum
- [Hukuk Departmanı](../departmanlar/hukuk/) — DPA ve sözleşmeler
- [Yaygın İtirazlar](itirazlar/) — "Bu yatırım büyük gelir mi" itirazına cevap

