---
title: "Kurulum Sorun Giderme"
seoTitle: "Claude Kurulum Sorunları: Donanım, Linux, Çözüm"
description: "Claude Desktop kurulumunda donanım kontrolü, Linux gereksinimleri ve sık sorunlar: Cowork görünmüyor, klasör bağlanmıyor, connector girişi, yavaşlık."
tags:
  - temeller
  - kurulum
  - sorun-giderme
  - claude-desktop
lastUpdated: "2026-11-08"
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

Şirket bilgisayarında kurulum engeli (yazılım kurma izni, firewall, VPN) için [İlk Kurulum](/wiki/temeller/ilk-kurulum/) sayfasındaki "Şirket Bilgisayarındaysanız" adımına ve [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasındaki IT listesine bakın.

## İlgili Sayfalar

- [İlk Kurulum](/wiki/temeller/ilk-kurulum/): Hesap, abonelik ve Claude Desktop kurulumu adım adım
- [Claude Desktop](/wiki/araclar/claude-desktop/): Uygulamanın özellikleri ve ayarları
- [Cowork Modu](/wiki/araclar/cowork-modu/): Cowork nedir, hangi planda var
- [Connectors](/wiki/araclar/connectors/): Connector kurulumu ve giriş adımları
- [İlk 7 Gün Rehberi](/wiki/temeller/ilk-7-gun/): Kurulumdan sonraki ilk hafta
