---
title: Takım, Admin Paneli ve Enterprise Plan
description: Birden çok kullanıcılı şirketler için Claude. Team ve Enterprise plan farkları, admin paneli, kullanıcı yönetimi, merkezi fatura.
tags:
  - temeller
  - takim
  - admin
  - enterprise
lastUpdated: "2026-10-06"
---

**Bireysel Pro plan tek kişi içindir. Şirkette Claude'u 3, 6, 20 kişi kullanmaya başladığında işler farklılaşır**: fatura merkezileşir, kullanıcı yönetimi, denetim ve veri politikası ortak olur. Bunun için **Team** ve **Enterprise** planları var.

Bu sayfa Team ve Enterprise farkını, ne zaman geçilmeli ve admin panelinde neler olduğunu anlatır.

## Plan Karşılaştırma: Bireysel mi, Takım mı?

[Planlar](/wiki/temeller/planlar/) sayfasında her planın detayı var. Buradaki odak: **şirket olarak hangisini almalı?**

| Özellik | Pro × N kişi (bireysel) | Team | Enterprise |
|---|---|---|---|
| Kullanıcı sayısı | 1 / hesap | Min 2, en çok 150 koltuk | Self-serve min 20 koltuk |
| Fatura | Her hesap ayrı | Tek merkezi fatura | Tek merkezi, yıllık faturalı |
| Kullanıcı yönetimi | Yok | Admin paneli | Gelişmiş admin paneli |
| Veri eğitime kullanılmaz garantisi | Hesap ayarına bağlı | Varsayılan olarak kullanılmaz | Varsayılan olarak kullanılmaz, sözleşmeli |
| SSO (tek seferlik giriş) | Yok | ✅ | ✅ |
| SCIM / JIT (otomatik kullanıcı sağlama) | Yok | ✅ | ✅ |
| Harcama tavanı | Yok | ✅ | ✅ |
| Audit log | Yok | Yok | ✅ Tam |
| Saklama politikası özel | Yok | Yok | ✅ |
| Onay süresi | Hemen | Hemen | Self-serve veya Anthropic ile görüşme |

Team'de koltuk tipleri karıştırılabilir. Standard koltuk Pro'nun oturum başına kullanımının 1,25 katı, Premium koltuk 6,25 katıdır.

Enterprise'ta koltuk ücreti kullanımı içermez; sohbet, Claude Code ve Cowork'teki her token API fiyatıyla ayrıca faturalanır. Bu yüzden aylık fatura sabit değildir, kullanıma göre değişir. Eski sözleşmelerde koltuk bazlı (standard/premium) Enterprise hâlâ görülebilir.

Fiyatlar ve ekip maliyeti örneği tek yerde tutulur: [Claude Planları](/wiki/temeller/planlar/). Güncel hâli için [claude.com/pricing](https://claude.com/pricing) sayfasına da bakabilirsiniz.

## Ne Zaman Team / Enterprise'a Geçmeli?

**Birkaç kişiyse** bireysel Pro hesaplar yeterli olabilir. Tek dezavantajı, faturaların tek tek gelmesi ve finansın her birini ayrı işlemesidir. Team 2 koltuktan başladığı için ayrım kişi sayısından çok yönetim ihtiyacına bağlıdır.

**Merkezi yönetim istiyorsanız (2 kişiden itibaren) → Team plan:**

- Tek fatura
- Admin paneli (kim ne kadar kullanıyor görünür)
- Yeni çalışana hızlı kullanıcı ekleme
- Şirketten ayrılan çalışanın erişimini hızlı kapatma

**20+ kişi veya hassas sektör → Enterprise plan:**

- Hukuk, finans, sağlık gibi düzenleyici denetime tabi sektörler
- Audit log, RBAC ve özel veri saklama gerektiğinde (SSO ve SCIM Team'de de var)
- Standart DPA'nın ötesinde özel sözleşme şartları gerektiğinde (standart DPA Team'de de var)
- Kullanım bazlı faturayı yönetecek bütçe disiplini varsa (maliyet sabit değil, kullanımla değişir)

## Yeni Kullanıcı Plan Önerisi

Claude'a yeni başlayan bir kullanıcı için **ilk ay Max 5x** öneriyoruz; zorunlu değildir. Pro'nun limiti yeni kullanıcı için çabuk dolar, kişi "Claude çalışmıyor" deyip vazgeçer. Limitlerin nasıl işlediği için [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/) sayfasına bakın.

İkinci aydan itibaren gerçek kullanım görüldükçe karma plana geçilebilir:

- Yoğun kullanıcı (günde 4+ saat) → Max 5x veya Max 20x
- Orta ve hafif kullanıcı (günde 1-3 saat veya daha az) → Pro

Bu öneri bireysel aboneliklerde geçerlidir. Şirket verisi işleyen ekipler için **Team planı zorunlu değildir; merkezi yönetim, faturalama ve veri kontrolü için öneriyoruz.** Team'e geçişte yeni başlayanın koltuk tipi (Standard ya da Premium) kullanım yoğunluğuna göre seçilir. Ayrıntı: [Planlar](/wiki/temeller/planlar/).

## Admin Paneli: Ne Yapar?

Team ve Enterprise planda **admin** rolü olan kullanıcı, claude.ai → **Organization settings** (yönetici ayarları) üzerinden organizasyonu yönetir.

### Kullanıcı Yönetimi

- **Kullanıcı ekleme:** E-posta ile davet → kullanıcı kabul ederse hesabı organizasyona bağlanır
- **Kullanıcı kaldırma:** Çalışan ayrılınca hesabını pasifleştirin; sohbet geçmişine erişimi kesilir
- **Rol atama:** Admin / üye
- **SSO ile entegrasyon (Team ve Enterprise):** Çalışan listesinin SAML/SCIM ile otomatik senkron olması
- **Harcama tavanı:** Kullanım kredisi ve kullanıma bağlı kalemler için üst sınır koyma

### Kullanım İzleme

- Aktif kullanıcı sayısı, son giriş tarihleri
- Toplam mesaj/sorgu hacmi (özet düzeyinde)
- Hangi özellikler kullanılıyor (Cowork, [Projects](/wiki/araclar/projects/), [Connectors](/wiki/araclar/connectors/))

**Önemli sınır:** Admin panelinde varsayılan olarak yalnız kullanım metrikleri görünür. Sohbet, dosya ve proje içeriğine programatik erişim veren Compliance API yalnızca Enterprise'tadır (Team'de yok) ve kapsamı sözleşmeye ve yapılandırmaya bağlıdır. Çalışanlarınıza neyin izlendiğini baştan söyleyin ([Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/)).

### Fatura ve Ödeme

- Tek bir kredi kartı veya kurumsal ödeme aracı
- Aylık/yıllık invoice tek e-postaya gelir
- Vergi bilgileri organizasyon adına ([Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/) sayfasındaki şekilde)
- Plan değişikliği ve kullanıcı ekleme, ücrete yansımasıyla birlikte buradan anlık görünür

### Politika Ayarları

Enterprise planda admin şu politikaları organizasyon çapında uygulayabilir:

- **Saklama süresi**: örn. tüm sohbetler 90 gün sonra otomatik silinsin
- **[Connectors](/wiki/araclar/connectors/) izinleri**: hangi connector kullanılabilir, hangisi yasak
- **[MCP](/wiki/mcp/nedir/) izinleri**: özel MCP server'lar onaylı listede mi
- **Sohbet paylaşma izni**: kullanıcılar dışarı public link üretebilsin mi
- **Eğitim için veri kullanma**: zaten varsayılan olarak kapalı, ama Enterprise sözleşmesiyle pekiştirilir

### Varsayılan Ayarlar ve Admin Anahtarları

Aşağıdaki varsayılanlar 6 Ekim 2026 itibarıyla geçerlidir; Claude hızlı değiştiği için ayarı kendi panelinizde doğrulayın.

| Özellik | Team | Enterprise | Admin ne yapar? |
|---|---|---|---|
| **Hafıza** (Generate memory from chats) | Varsayılan kapalı | Varsayılan kapalı | Owner kontrolünde; açarsanız sohbet ve Cowork arasında ortak çalışır, [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/)'ya ekleyin |
| **Claude Design, Slides, Docs** (beta) | Varsayılan açık | Owner açana kadar kapalı | Owner anahtarıyla açılır ya da kapatılır |
| **Kod çalıştırma ve dosya oluşturma** | Açık, owner kapatabilir | Açık, owner kapatabilir | Kod çalıştırmada ağ erişimi varsayılan olarak kapalıdır |
| **Cowork** | Tüm ücretli planlarda masaüstünde var | Admin etkinleştirmesi gerekebilir | Web ve mobil Cowork'te de admin açar |
| **Microsoft 365 connector** | Owner açar | Owner açar | Teams mesajı gönderme gibi yazma araçlarını araç bazında açıp kapatır |
| **Model yetkilendirme** | Duyuruda yalnız Enterprise | Var (1 Temmuz 2026) | Hangi modellerin kullanılabileceğini belirler |
| **Claude Tag** (Slack'te Claude'u etiketleme) | Var | Var | Slack üzerinden Claude etiketlenir |
| **Skill ve eklenti güvenlik taraması** (beta) | Duyuruda yalnız Enterprise | Var (6 Ağustos 2026) | Kurulacak skill ve eklentileri taratır |
| **Compliance API, audit log, RBAC** | Yok (OpenTelemetry kısmi) | Var | Yalnız Primary Owner Compliance API'yi açar |

Bu tablo, "Ne zaman Team'e geçmeli?" kararını da besler: kod çalıştırma ağı, hafıza ve Design anahtarları Team'de de var, ama model yetkilendirme, RBAC ve denetim kayıtları Enterprise'a özgü.

### Örnek: 25 Kişilik Bir Türk Üretim Şirketi

Varsayımsal örnek; kendi durumunuza uyarlayın. 25 kişi (yönetim, satış, ihracat, muhasebe, üretim planlama) Claude kullanacak, bir kişisel veri ve müşteri sözleşmesi akışı var.

1. **Plan:** 25 koltuk Team'in sınırları içinde (en çok 150), Enterprise'ın self-serve alt sınırının (20 koltuk) da üstünde. Audit log, RBAC ya da özel saklama gerekmiyorsa Team yeter; gerekiyorsa Enterprise. Enterprise'ta kullanım API fiyatıyla ayrıca faturalandığı için aylık tutar sabit olmaz. Rakam örneği için [Claude Planları](/wiki/temeller/planlar/).
2. **Kimlik:** SSO ve SCIM ile kurumsal e-postayla giriş, çalışan ayrılınca erişim otomatik kapanır.
3. **Ayarlar:** Hafıza kapalı bırakılır (ihtiyaç doğarsa bilinçli açılır), kod çalıştırmada ağ kapalı kalır, M365 connector'ında Teams mesajı gönderme yetkisi gerekmedikçe kapalı tutulur.
4. **Hukuk:** DPA ticari şartlara dahildir; kişisel veri girilecekse KVKK m.9 dayanağı ayrıca kurulur ([Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/)).
5. **Politika:** [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/) imzalatılır, ilk hafta [İlk 7 Gün](/wiki/temeller/ilk-7-gun/) ile başlanır.
6. **Ölçüm:** 90 gün sonra [Ölçüm Metrikleri](/wiki/temeller/olcum-metrikleri/) ile geri dönüş değerlendirilir.

## SSO: Tek Seferlik Giriş

Team ve Enterprise planlarında **SAML 2.0** üzerinden SSO entegrasyonu var. Bu:

- Çalışan kurumsal e-posta + şifresiyle (Microsoft Entra ID, eski adıyla Azure AD; Okta; Google Workspace) Claude'a girer
- Ayrı bir Claude şifresi olmaz
- Çalışan ayrılınca SSO'dan kapatınca Claude erişimi de kapanır
- IT'nin tek bir noktadan kontrol etmesini sağlar

[BT departmanı](/wiki/departmanlar/bilgi-teknolojileri/) sayfası SSO ve Enterprise IT entegrasyonunu detaylandırır.

## SCIM: Otomatik Kullanıcı Sağlama

SCIM (System for Cross-domain Identity Management), kurumsal kimlik sistemindeki (Microsoft Entra ID, Okta) kullanıcı ekleme ve silme işlemlerinin Claude'a otomatik yansımasını sağlar. Yeni çalışan İK sistemine eklendiğinde otomatik Claude hesabı açılır; ayrılınca otomatik kapanır.

Bu, kalabalık organizasyonlarda hayati bir özelliktir. SCIM/JIT hem Team'de hem Enterprise'ta mevcuttur.

## Audit Log

Enterprise planda admin tüm organizasyon aktivitelerinin loglarını görür:

- Kim ne zaman giriş yaptı
- Hangi connector / MCP eklendi
- Plan / üyelik değişiklikleri
- Hassas yapılandırma değişiklikleri

Bu log düzenli olarak SIEM (kurumsal güvenlik bilgi yönetim sistemi) sistemine aktarılabilir. Hukuk ve finans denetimi için gereken iz buradadır.

## Veri İşleme Sözleşmesi (DPA)

Anthropic'in **Data Processing Agreement (DPA)** belgesi yalnızca ticari ürünlerde (Team, Enterprise, API) geçerlidir ve ticari şartlara otomatik dahildir, ayrıca imza gerekmez. Free, Pro ve Max DPA kapsamı dışındadır. Bu sözleşme:

- Anthropic'in **veri işleyen** sıfatıyla rolünü tanımlar
- Veri koruma ve GDPR çerçevesindeki taahhütleri içerir
- Olay (incident) bildirim süreçlerini düzenler
- Veri saklama ve silme politikalarını netleştirir

KVKK'ya göre kişisel veri işleten bir üçüncü tarafla (veri işleyen) sözleşme yapmanız gerekir; DPA bu sözleşmenin yerini tutar. Yurt dışına aktarım için KVKK m.9 kapsamında ayrıca bir dayanak gerekir. DPA'daki standart hükümler Kurul'un Türk standart sözleşmesinin yerine geçmez ([Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/)).

[Hukuk departmanı](/wiki/departmanlar/hukuk/) sayfası bu boyutu derinleştirir.

## Geçiş Senaryoları

### Senaryo 1: 6 Bireysel Pro'dan Team'e

Şu an 6 kişide Pro hesap var, 6 ayrı fatura geliyor. Geçiş:

1. Organization settings üzerinden Team planı seçin
2. 6 e-posta adresini davet edin
3. Çalışanlar daveti kabul eder (kişisel hesabın organizasyona taşınması için aşağıdaki nota bakın)
4. Eski Pro abonelikleri iptal edilir
5. Tek fatura akışı başlar

**Kişisel hesap Team'e taşındığında ne olur?** Hesap "yerinde yükseltilirse" şunlar taşınır: sohbetler, sohbetlerdeki artifact'ler, projeler (talimat ve dosyalarıyla), yüklenen dosyalar ve Claude hafızası (kuruluş kapatmadıysa). Şunlar taşınmaz: özel skills (geçiş yolu yok), özel connector'lar (yeniden eklenir), yayınlanmış artifact'ler, sohbet paylaşım linkleri (kalıcı olarak kapanır) ve masaüstü oturumları (yerelde kalır). "Kişisel hesabımı ayrı tut" seçilirse eski sohbetler kişisel hesapta kalır. Çalışanlarınızdan skills'lerini ve paylaşım linklerini önceden dışa aktarmalarını isteyin.

### Senaryo 2: Team'den Enterprise'a

20+ koltuk olduğunuzda veya audit log, RBAC, özel saklama gibi hassas veri politikası gerektiğinde:

1. Self-serve Enterprise (min 20 koltuk) veya Anthropic Sales ile iletişime geçin
2. Kullanıcı sayısı, sektör, gereksinimler üzerinden teklif alın
3. Enterprise sözleşmesi yapılır (DPA ticari şartlara zaten dahildir)
4. Mevcut Team hesabı Enterprise'a yükseltilir

### Senaryo 3: Sıfırdan Enterprise

Büyük organizasyonda ve uyum yükü yüksekse baştan Enterprise alınabilir. Pilot grup (5-10 kişi) ile başlayıp tüm organizasyona yayma rotası mantıklıdır. Pilotu Team ile yapıp sonra Enterprise'a geçmek de mümkündür.

## Kurumsal Onboarding: Pratik Adımlar

Yeni bir çalışan organizasyona katıldığında:

1. **Davet:** Admin paneli üzerinden e-posta davet
2. **İlk giriş:** Çalışan hesabı kabul eder, Claude'a girer
3. **Bireysel talimat:** Kendi rol ve sorumluluklarını tanımlayan kısa bir profil talimatı (Settings > General > "Instructions for Claude") yazsın; masaüstünde klasörle çalışacaksa aynı metnin ayrıntılı hâlini [CLAUDE.md](/wiki/claude-md/nedir/) olarak klasörüne koysun
4. **Şirket kural seti (varsa):** Şirket genelinde paylaşılan kurallar Team/Enterprise'ta paylaşılan proje talimatı ve (cihaz yönetimiyle yapılandırılan) kuruluş talimatı olarak verilir; kuruluş talimatı en çok 3.000 karakterdir (27 Ağustos 2026'dan beri), sohbet, Cowork ve Code oturumlarında geçerlidir ve zorlayıcı değil, modele yol gösterir. Ayrıntı: [Takım Kural Seti](/wiki/claude-md/takim-claude-md/), [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/)
5. **Eğitim:** [İlk 7 Gün](/wiki/temeller/ilk-7-gun/) rehberini takip etsin
6. **Politika imzası:** [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/) belgesini okusun ve onaylasın

## İlgili Sayfalar

- [Planlar](/wiki/temeller/planlar/): Plan fiyat ve özellik detayı
- [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/): Türkiye'de muhasebe
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Politika şablonu
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Yasal uyum
- [BT Departmanı](/wiki/departmanlar/bilgi-teknolojileri/): IT açısından kurulum
- [Hukuk Departmanı](/wiki/departmanlar/hukuk/): DPA ve sözleşmeler
- [Yaygın İtirazlar](/wiki/temeller/itirazlar/): "Bu yatırım büyük gelir mi" itirazına cevap

