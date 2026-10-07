---
title: "Şirket Sistemini Claude'a Bağlamak: Karar Akışı"
seoTitle: "Şirket Sistemini Claude'a Bağlamak: ERP, CRM ve İç Araçlar"
description: "ERP'nizi, iç CRM'inizi ya da muhasebe yazılımınızı Claude'a bağlayabilir misiniz? Altı adımlık karar akışı: dizin, API, BT'den istenecekler, salt okunur pilot, bakım, güvenlik."
tags:
  - mcp
  - connector
  - erp
  - entegrasyon
  - bt
lastUpdated: "2026-10-06"
---

**Kısa cevap: çoğu zaman evet, ama "bağlayalım" demeden önce altı soruya cevap vermek gerekir.** Bu sayfa, iş kullanıcısı ya da yönetici olarak "ERP'mizi, iç CRM'imizi Claude'a bağlayabilir miyiz, kim kurar, ne kadar sürer?" sorusunu sorduğunuzda izleyeceğiniz sırayı anlatır. Teknik kısım BT ekibinize ya da entegratörünüze düşer; sizin işiniz doğru soruları doğru sırayla sormaktır.

Bir kurgusal örnek üzerinden gidelim: **Marmara Dağıtım**, 40 satış temsilcisi olan bir gıda dağıtım firması. Siparişler ve müşteri kayıtları, firmanın kendi sunucusunda duran bir iç CRM'de (Sipariş Takip). Satış müdürü "Claude müşteri geçmişine bakıp ziyaret öncesi özet çıkarsın" istiyor.

## Adım 1: Resmi dizinde var mı?

Önce en ucuz yol: sisteminiz için hazır bir connector olabilir. [Bağlantı Listesi](/wiki/mcp/baglanti-listesi/) sayfasına ya da Claude'da **Customize > Connectors** bölümüne bakın. Resmi dizinde yaklaşık 900 connector var; Salesforce, HubSpot, Atlassian, Slack, Microsoft 365 gibi tanıdık adlar orada.

- **Varsa:** dizin connector'ını kullanın. Bu sayfanın geri kalanına ihtiyacınız yok; [Kurulum Rehberi](/wiki/mcp/kurulum-rehberi/) yeterli.
- **Yoksa:** dizinde olmaması "yok" demek değil, "hazır yok" demektir. Adım 2'ye geçin.

Marmara Dağıtım'ın iç CRM'i dizinde yok; yerel bir yazılım olduğu için olması da beklenmez.

**Türkiye'deki muhasebe yazılımları için not:** Logo, Mikro ve Netsis için resmi dizinde connector yok, Ekim 2026 taramamızda sağlayıcıların yayımladığı resmi bir MCP sunucusu da bulamadık. Paraşüt için yalnızca resmi olmayan, topluluk yapımı bir sunucu var; muhasebe verinize erişeceği için onu önermiyoruz ([neden](/wiki/mcp/guvenlik/)). Bu araçlarda çoğu işi, programdan dışa aktarılan dosyayla görmek mümkün; ayrıntı [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/) sayfasında. Yabancı kökenli bazı muhasebe yazılımlarının (QuickBooks, Xero) kendi connector'ı resmi dizinde var.

## Adım 2: Sağlayıcının API'si ya da kendi MCP sunucusu var mı?

Dizinde yoksa yazılımın üreticisine (ya da sistemi yazan ekibe) iki soru sorun:

1. **"Bir MCP sunucunuz var mı ya da çıkarmayı düşünüyor musunuz?"** Varsa en kolay yol budur: sunucu hazırdır, siz yalnızca bağlarsınız.
2. **"Dışarıdan veri okumaya izin veren bir API'niz var mı?"** API varsa, bir yazılımcı onun üzerine bir MCP sunucusu yazabilir. API de yoksa Claude'a doğrudan bağlantı mümkün olmaz; geriye programdan rapor alıp Claude'a yüklemek ya da yalnız okuma için [Computer Use](/wiki/yetenekler/computer-use/) kalır.

Sağlayıcı "evet" derse sorun çözülmüş sayılmaz, ama yol açılmış olur. Bu iki cevabı yazılı alın; Adım 3'te BT ekibine bu cevaplarla gidersiniz.

## Adım 3: BT ekibinden ya da entegratörden istenecekler

Claude'un bir sunucuya nasıl bağlandığı yolu belirler. İki ana yol var:

| Yol | Ne demek | Ne zaman uygun |
|---|---|---|
| **Uzak sunucu + özel connector** | MCP sunucusu internetten erişilebilir bir adreste durur; Claude'a o adresi verirsiniz | Sistem zaten internete açıksa ya da güvenli biçimde açılabiliyorsa |
| **Masaüstü uzantısı** | MCP sunucusu kullanıcının kendi bilgisayarında çalışır (`.mcpb` paketi) | Sistem yalnız ofis ağında ya da VPN arkasındaysa ve kullanıcılar o ağdayken çalışıyorsa |

Neden bu iki yol? Çünkü uzak connector'lar **Claude'un bulut altyapısından çağrılır**, sizin bilgisayarınızdan ya da ofis ağınızdan değil. Yalnız iç ağdaki bir sunucuya bu yolla doğrudan ulaşılamaz. Ağ içindeki sunucuya tünelle bağlanma yolu bugün yalnız Managed Agents (API) tarafında, araştırma önizlemesi olarak var; claude.ai için değil.

BT ekibinden ya da entegratörden şunları isteyin:

- **Salt okunur bir kullanıcı:** Claude'un kullanacağı hesap yalnız okuyabilsin. Yazma, silme, onaylama yetkisi olmasın.
- **Sunucu biçimi kararı:** uzak sunucu mu, masaüstü uzantısı mı, ve neden.
- **Kimlik doğrulama:** mümkünse OAuth ile, her kullanıcı kendi hesabıyla bağlansın. Böylece kimin neye eriştiği kaynak sistemde görünür.
- **Kayıt (log):** Claude üzerinden gelen sorgular kaynak sistemde izlenebilsin.
- **Kapsam yazısı:** hangi tablolara, hangi kayıtlara, hangi alanlara (özellikle kişisel veri) erişileceği tek sayfada.
- **Bakım sahibi:** sunucuyu kimin güncelleyeceği, hata olursa kime gidileceği.

> **BT ekibi / Geliştiriciler için.** Özel connector, Claude'da Customize > Connectors (Team ve Enterprise'ta Organization settings > Connectors) altında Add > Custom > Web ile eklenir; sunucu URL'i verilir, OAuth istemci kimliği isteğe bağlı girilir. Kimlik doğrulama OAuth, sabit anahtar ya da girişsiz olabilir. MCP spesifikasyonunda yetkilendirme isteğe bağlıdır ve OAuth 2.1 taslağına dayanır. Güvenlik duvarının arkasındaki sunucu için Anthropic'in giden (outbound) IPv4 aralığı `160.79.104.0/21` izin listesine alınır; güncel aralığı Anthropic'in IP adresleri sayfasından doğrulayın. Masaüstü uzantılarında Team ve Enterprise'ta kuruluş sahibi izin listesini (varsayılan kapalı) açabilir; açıldığında kurulu uzantılar silinir ve kullanıcılar yalnız onaylı listeden kurabilir. Araçlara `readOnlyHint` ve `destructiveHint` gibi açıklamalar eklemek, Claude'un araçları doğru kategorilemesine yardımcı olur.

## Adım 4: Salt okunur pilot

İlk sürümde Claude yalnızca **okusun**. Yazma, kayıt güncelleme ve silme sonraya kalsın.

- **Küçük grup:** Marmara Dağıtım örneğinde 40 temsilcinin tamamı değil, 3-5 kişi.
- **Net bir soru listesi:** "Bu müşterinin son 3 siparişi nedir?", "Bu bölgede vadesi geçen hesaplar hangileri?" gibi 10 civarı gerçek soru.
- **Elle karşılaştırma:** Claude'un cevabını, aynı soruyu sistemde elle sorgulayarak kontrol edin. Yanlış ya da eksik cevap varsa kapsamı daraltın.
- **Yönetici kuralı:** Team ya da Enterprise kullanıyorsanız kuruluş sahibi, araç kategorileri için **Always allow / Needs approval / Blocked** kuralı koyabilir. Bu kural yardımcıdır; asıl güvence kaynak sistemdeki salt okunur kullanıcıdır, çünkü Claude'da "izin ver" demek kaynak sistemde olmayan yetkiyi vermez.

**Süre (Tahmini tipik aralık, ölçülmüş değil):** dizinde hazır connector varsa birkaç dakika ile bir gün; sağlayıcının kendi MCP sunucusu varsa birkaç gün; BT ekibi yeni bir sunucu yazacaksa birkaç hafta. Pilotun kendisi ayrıca tipik olarak 1-2 hafta ister. Asıl belirleyici, sistemin API'sinin hazır olup olmadığı ve güvenlik onayının ne kadar sürdüğüdür.

## Adım 5: Sahiplik ve bakım

Dizinde olmayan bir connector'ı **siz** sahiplenirsiniz. Anthropic ya da yazılımın üreticisi bakımını üstlenmez.

- **Bir sahip belirleyin:** BT'den bir kişi (teknik bakım) ve iş tarafından bir kişi (hangi soruların işe yaradığı, hangi izinlerin gerektiği).
- **Güncelleme:** kaynak sistem güncellenince sunucu bozulabilir. Kimin bakacağı yazılı olsun.
- **Dağıtım:** Team ve Enterprise'ta özel connector'ı yalnız kuruluş sahibi ekler; çalışanlar kendi hesaplarıyla "Connect" der. Kullanım talimatlarını ve soru örneklerini bir [plugin](/claude/plugins/) olarak paketleyip şirket içi plugin marketplace'ten dağıtabilirsiniz (Team ve Enterprise).
- **Bırakma planı:** bir gün gereksiz kalırsa connector kapatılır ve kaynak sistemdeki kullanıcı silinir.

Kendi MCP sunucunuzu yazdırmak bir yazılım işidir ve sürekli bakım ister. Bu yükü karşılamaya değer mi sorusu, Adım 4'teki pilotun cevabıyla netleşir: günlük canlı veri gerekmiyorsa dışa aktarılan rapor çoğu zaman daha ucuz ve daha güvenli bir yoldur.

## Adım 6: Güvenlik kontrol listesi

Pilottan önce [MCP Güvenliği](/wiki/mcp/guvenlik/) sayfasındaki kontrol listesini BT ve hukuk/KVKK sorumlusuyla birlikte geçin. Özetle:

- Salt okunur kullanıcı tanımlı mı, yetkisi gereğinden geniş mi?
- Kaynak sistemde kişisel veri var mı? Varsa verinin Claude'a gitmesi [KVKK](/wiki/temeller/gizlilik-kvkk/) açısından değerlendirildi mi?
- Kayıt (log) tutuluyor mu, kim bakıyor?
- Sunucu kodunu kim yazdı, kim denetledi? Topluluktan hazır alınan bir sunucuysa kaynağı bilinen ve bakımı sürdürülen bir proje mi?
- Sunucu internete açılıyorsa yalnız gerekli adres aralığına mı izin veriliyor?
- Dizin dışı bir sunucuya Claude güvenlik uyarısı verir; bu uyarının neden çıktığı ekibe anlatıldı mı?

## Hangi Yol Bana Uyar?

| Durumunuz | Önerilen yol |
|---|---|
| Sistem dizinde var | Dizin connector'ı, [Kurulum Rehberi](/wiki/mcp/kurulum-rehberi/) |
| Dizinde yok, sağlayıcının kendi MCP sunucusu var | Özel connector olarak ekleyin (sunucu internetten erişilebilir olmalı) |
| Dizinde yok, API var, sistem internete açılabilir | BT ekibi MCP sunucusu yazar, uzak özel connector olarak eklenir |
| Sistem yalnız ofis ağında | Kullanıcının bilgisayarında çalışan masaüstü uzantısı ya da sunucuyu güvenle internete açmak |
| API yok, günlük canlı veri gerekmiyor | Programdan rapor alıp Claude'a yükleyin |
| API yok, veri gerçekten canlı lazım | Önce yazılım sağlayıcısına sorun; son çare [Computer Use](/wiki/yetenekler/computer-use/), yalnız okuma için |

## Bu Sayfa Ne Değildir?

Bu sayfa bir karar rehberidir, kurulum kılavuzu değildir. Zamana bağlantıyı sizin yerinize kurmaz ve bir yazılım ya da entegrasyon satmaz; kurulumu BT ekibiniz ya da seçeceğiniz bir entegratör yapar. Claude'un abonelik ve plan koşulları için doğrudan Anthropic'in sayfalarına bakın.

## İlgili Sayfalar

- [MCP Nedir?](/wiki/mcp/nedir/): Connector, MCP sunucusu ve masaüstü uzantısı ilişkisi
- [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): Resmi dizindeki connector'lar, role göre
- [MCP Güvenliği](/wiki/mcp/guvenlik/): Kontrol listesi
- [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/): Logo, Mikro, Paraşüt ve diğerleri
- [Claude Connectors](/claude/connectors/): Ürün tanıtımı
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/)
