---
title: "Kurulum Sorun Giderme"
seoTitle: "Claude Sorunları: Limit Doldu, Giriş, Kurulum"
description: "Claude sorunları ve çözümleri: limit doldu ne yapmalı, limit ne zaman sıfırlanır, giriş yapamıyorum, Türkçe yanıt, Cowork görünmüyor, kurulum ve donanım."
tags:
  - temeller
  - kurulum
  - sorun-giderme
  - claude-desktop
lastUpdated: "2026-11-09"
---

Bu sayfa [İlk Kurulum](/wiki/temeller/ilk-kurulum/) rehberinin yardımcısıdır: kurulumdan önce bilgisayarınızı kontrol etmek, Linux kullanıyorsanız farkları görmek ve kurulumda takıldığınız yeri çözmek için. Kuruluma yeni başlıyorsanız önce İlk Kurulum sayfasındaki adımları izleyin, bir yerde takılırsanız buraya dönün.

## Donanım Kontrolü

Başlamadan önce bilgisayarınız uygun mu kontrol edelim. Uygun değilse Claude Desktop sorunlu çalışır.

### Minimum Gereksinimler

| Bileşen | Minimum | Önerilen | Kontrol nasıl yapılır? |
|---|---|---|---|
| **İşletim sistemi** | Windows 10 (64-bit) veya üstü, macOS 11 (Big Sur) veya üstü (Linux için aşağıdaki bölüme bakın) | Windows 11 / macOS 14+ | Windows: Sağ alt → "Hakkında" / Mac: Apple ikonu → "Bu Mac Hakkında" |
| **RAM (bellek)** | Resmi gereksinim yayımlanmıyor | Bol RAM tercih edin (Cowork ve çok sekmeli tarayıcı birlikte çalışır) | Windows: Görev Yöneticisi → Performans / Mac: Bu Mac Hakkında |
| **İşlemci** | Intel i5 / i7 (8. nesil veya üstü), AMD Ryzen 5/7, Apple M1+ | Intel i7 (11. nesil+), Ryzen 7, Apple M2+ | Sistem bilgisinden bakın |
| **Depolama** | 256 GB SSD (en az 10 GB boş) | NVMe SSD, 20+ GB boş | Sürücüler → C: sağ tık → Özellikler |
| **Ekran** | 1080p (1920×1080) | 1440p veya 4K | Ayarlar → Sistem → Ekran |
| **İnternet** | 25 Mbps stabil | 50 Mbps | speedtest.net'te ölçün |

> Resmi olarak yayımlanan gereksinim yalnızca işletim sistemi sürümüdür. Diğer satırlar Zamana'nın deneyime dayalı önerisidir.

**Donanımım uymuyorsa ne olur?**

- **Az RAM:** Cowork yavaş çalışabilir, sandbox kod çalıştırma takılabilir. Çalışır ama sinir bozucu.
- **HDD (SSD değil):** Workspace klasörü erişimi yavaş, Claude dosyalarınızı uzun sürede okur.
- **Eski işlemci:** Çoklu [skill](/wiki/yetenekler/skills/) aynı anda çalıştırılırken bilgisayar zorlanır.
- **VPN'li ofis ağı:** Kurumsal VPN bazen Claude trafiğini engeller. (IT ile konuşun.)

**Donanım yetersizse:** Önce donanımı yükseltin, sonra kuruluma geçin. Kötü donanımda kurmaya çalışmak boşa zaman.

## Linux'ta Kurulum

Claude Desktop resmi olarak Linux'u da destekler (Ubuntu 22.04+ / Debian 12+, x64 veya arm64). Linux'ta Cowork için en az 8 GB RAM ve yaklaşık 25 GB boş disk gerekir (KVM gerekli). [İlk Kurulum](/wiki/temeller/ilk-kurulum/) rehberindeki indirme ve kurulum adımları Windows ve macOS içindir; Linux için resmi kurulum sayfasındaki adımları izleyin. İsterseniz **[Claude.ai web arayüzü](/wiki/araclar/claude-chat/)** ile de devam edebilirsiniz; Cowork web'de beta aşamasındadır ve yerel dosya erişimi kısmidir, İlk Kurulum'daki workspace klasörü ve Cowork adımları (Adım 6 ve 7) masaüstü uygulaması gerektirir.

## Sık Sorunlar ve Çözümleri

### "Cowork görünmüyor"

- Hesabınız Pro veya üstü mü? (Free'de Cowork yok)
- Claude Desktop'ı yeniden başlatın
- claude.ai'da çıkış yapıp Desktop'tan tekrar giriş yapın

### "Workspace klasörü bağlanmıyor"

- Klasörü OneDrive/iCloud/Google Drive içinden çıkarın
- Yazma izni var mı? (Klasöre sağ tık → Özellikler → Güvenlik)
- Antivirüs Claude Desktop'ı engelliyor olabilir → istisna ekleyin

### "Connector OAuth tamamlanmıyor"

- Tarayıcınız güncel mi? (Chrome/Edge son sürüm)
- VPN'i geçici kapatın
- Tarayıcı pop-up'ları engelliyorsa izin verin

### "Yavaş çalışıyor"

- RAM'iniz kısıtlı mı? Diğer ağır uygulamaları (özellikle Chrome'un 50 sekmesi) kapatın
- Workspace klasörü HDD'de mi? SSD'ye taşıyın
- Çok büyük dosyalarla çalışıyorsanız parçalayın

### Email gelmiyor / Kayıt olamıyorum

- Spam klasörü
- Şirket maili güvenlik filtresi → @anthropic.com'u beyaz listeye ekletin
- Geçici olarak Gmail ile deneyin

### "Limit doldu" uyarısı geldi, ne yapmalıyım?

- Önce Settings, Usage ekranına bakın: hangi limitin dolduğu (5 saatlik oturum mu, haftalık mı) ve ne zaman açılacağı orada yazar.
- 5 saatlik pencere doluysa beklemek çoğu zaman yeterlidir. Beklerken Claude gerektirmeyen bir işe geçin.
- Sık takılıyorsanız yeni konuda yeni sohbet açın, rutin işte Sonnet kullanın, büyük belgeleri parça parça yükleyin.
- Beklemek istemiyorsanız ücretli planlarda kullanım kredisi açılabilir; kullanım API fiyatıyla ayrıca faturalanır. Ayrıntı: [Kullanım Limitleri ve Usage Credits](/wiki/temeller/kullanim-limitleri/).
- Pro'da limite haftada birkaç kez takılıyorsanız sorun alışkanlık değil plandır: [Claude Planları](/wiki/temeller/planlar/).

### Limit ne zaman sıfırlanır?

- **5 saatlik oturum limiti** sabit bir saatte (gece yarısı gibi) sıfırlanmaz. İlk mesajla başlayan kayan bir pencerededir ve yaklaşık 5 saat sonra yenilenir.
- **Haftalık limit** hesabınıza atanmış sabit bir gün ve saatte sıfırlanır; zamanı Settings, Usage ekranında görünür.
- Ultra'da doğrulanmış hesapta 5 saatlik limit yoktur, yalnız haftalık limit sürer.
- Haftalık limitin tam miktarını ve Free planın sayısal limitini Anthropic yayımlamaz; internette gördüğünüz sayılar resmî değildir.

### "Giriş yapamıyorum"

- Hangi yöntemle kayıt olduysanız (Google hesabı ya da e-posta) onunla girin; yanlış yöntem yeni, boş bir hesap açılmış gibi görünmesine yol açabilir.
- E-posta ile giriş kodu ya da bağlantı gelmiyorsa yukarıdaki "Email gelmiyor" adımlarına bakın.
- Tarayıcıyı güncelleyin, gizli pencerede deneyin, VPN'i ve reklam engelleyiciyi geçici kapatın.
- Masaüstü uygulamada takılıyorsanız çıkış yapıp web'den (claude.ai) girin, sonra uygulamaya dönün.
- Hesap askıya alındı ya da kısıtlandı gibi bir mesaj görüyorsanız kendi başınıza çözmeye çalışmayın; Anthropic yardım merkezinden (support.claude.com) destek talep edin.

### Claude'u Türkçe nasıl yaparım?

- Claude, Türkçe yazdığınıza Türkçe yanıt verir. Çoğu zaman ayar gerekmez.
- Her konuşmada Türkçe istiyorsanız profil talimatına (Settings, Profile) "Her zaman Türkçe yanıt ver, resmi ama sade bir ton kullan" yazın. Ayrıntı: [Claude Nedir?](/wiki/temeller/claude-nedir/).
- Arayüz dilinin (menüler, düğmeler) Türkçe olup olmadığı sürüme ve platforma göre değişebilir ve resmi kaynaklarda net bir dil listesi bulamadık. Settings içindeki dil seçeneğine bakın; yoksa arayüz İngilizce kalır, ama sohbet Türkçe yürür.
- Sesli konuşma (Voice mode) için Türkçe desteği doğrulanmamıştır.

### "Tool-use limit" gibi bir araç mesajı çıktı, ne demek?

- Anthropic'in bu mesajın metni ve tam anlamı için yayımladığı net bir açıklamayı doğrulayamadık, o yüzden kesin bir anlam yazmıyoruz.
- Genel olarak bu tür mesajlar, Claude'un tek bir görevde çok sayıda araç (web araması, dosya, connector) çağırdığında bir üst sınıra ya da kullanım limitine yaklaştığını gösterir. Bu yorum bize aittir, resmi bir tanım değildir.
- Pratik çözüm: görevi daha küçük adımlara bölün, "devam et" yazın, gerekmeyen connector'ları kapatın, yeni sohbette devam edin. Mesaj Usage ekranındaki bir limitle birlikte geliyorsa yukarıdaki "Limit doldu" adımlarını izleyin.

Şirket bilgisayarında kurulum engeli (yazılım kurma izni, firewall, VPN) için [İlk Kurulum](/wiki/temeller/ilk-kurulum/) sayfasındaki "Şirket Bilgisayarındaysanız" adımına ve [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasındaki IT listesine bakın.

## İlgili Sayfalar

- [İlk Kurulum](/wiki/temeller/ilk-kurulum/): Hesap, abonelik ve Claude Desktop kurulumu adım adım
- [Claude Desktop](/wiki/araclar/claude-desktop/): Uygulamanın özellikleri ve ayarları
- [Cowork Modu](/wiki/araclar/cowork-modu/): Cowork nedir, hangi planda var
- [Connectors](/wiki/araclar/connectors/): Connector kurulumu ve giriş adımları
- [Kullanım Limitleri ve Usage Credits](/wiki/temeller/kullanim-limitleri/): Limit nasıl işler, dolunca ne yapılır
- [İlk 7 Gün Rehberi](/wiki/temeller/ilk-7-gun/): Kurulumdan sonraki ilk hafta
