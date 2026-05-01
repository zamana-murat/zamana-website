---
title: Claude Desktop — Kurumsal Kullanımın Kapısı
description: Claude Desktop, Cowork moduna erişimin tek yoludur. Kurulumu, sistem gereksinimleri, web arayüzüne göre avantajları ve ilk kurulum adımları.
tags:
  - araclar
  - claude-desktop
  - kurulum
  - cowork
---

**Claude Desktop, Claude'un Windows ve macOS için yerel uygulamasıdır.** Kağıt üzerinde başka bir arayüz gibi görünse de pratikte çok daha fazlasıdır: **Cowork moduna erişimin tek yoludur**, ve iş kullanımı için web arayüzünden ciddi ölçüde daha güçlüdür.

Tek cümleyle: Zamana eğitim programı Claude Desktop olmadan başlamaz. Çünkü programın kalbindeki Cowork, Skills, Plugins, CLAUDE.md — hepsi Desktop'ta yaşar.

## Claude Desktop Web Arayüzünden Ne Farkı Var?

[Claude.ai web arayüzü](claude-chat/) iyidir, ama belirli bir noktaya kadar. Claude Desktop şunları ekler:

- **[Cowork moduna](cowork-modu/) erişim** — en büyük fark
- **Yerel dosya sistemi erişimi** — bağlı workspace klasörü üzerinden
- **[Plugin](../yetenekler/skills/) ve MCP connector kurulumu** — şirket araçlarına bağlantı
- **Skill çağırma** — `/docx`, `/pptx`, `/xlsx`, `/pdf` ve diğerleri
- **Sandbox'ta kod çalıştırma** — güvenli sanal makinede Python / PowerShell / Bash
- **Oturumlar arası kalıcı workspace klasörü** — her şey yerinde kalır, bir dahaki sefere aynı bağlamla başlar

## Sistem Gereksinimleri

| Bileşen | Minimum | Önerilen |
|---|---|---|
| **İşletim sistemi** | Windows 10/11 (64-bit) veya macOS 12 Ventura+ | Windows 11 veya macOS 14 |
| **RAM** | 8 GB | 16 GB |
| **Depolama** | 2 GB boş alan | SSD üzerinde 10 GB |
| **İnternet** | 10 Mbps | 25 Mbps, kararlı |
| **Abonelik** | Claude Pro ($20/ay) | **Claude Max 5x ($100/ay)** — Zamana eğitim ilk ayı zorunlu |

**Önemli:** Claude Desktop'ın en güçlü özellikleri (özellikle Cowork) için **en az Pro ($20/ay)** gerekir. Ancak **Zamana eğitim programı katılımcıları için ilk ay Max 5x ($100/ay) zorunludur** — yeni kullanıcının keşif ritminde Pro limiti çabuk dolar, "çalışmıyor" yanlış izlenimi oluşturur. İkinci aydan itibaren gerçek kullanıma göre Pro'ya ($20) indirme opsiyonu vardır.

## Kurulum

1. **[claude.ai](https://claude.ai) adresine gidin** → sağ üst menüden **"Download"** seçeneğini bulun
2. İşletim sisteminize uygun sürümü indirin (Windows `.exe` veya macOS `.dmg`)
3. İndirilen dosyaya çift tıklayın, kurulum adımlarını izleyin
4. Claude Desktop açılınca Claude hesabınızla giriş yapın (Max 5x önerilir, en az Pro)
5. İlk açılışta **Cowork modunu etkinleştirin**
6. Bir **workspace klasörü** seçin — bilgisayarınızda Claude'un çalışacağı gerçek klasör (öneri: `C:\ClaudeWorkspace` veya `~/ClaudeWorkspace`)
7. Bu klasörün içine **CLAUDE.md** dosyasını oluşturun (bkz: [CLAUDE.md Nasıl Yazılır?](../claude-md/nasil-yazilir/))

Zamana'nın ilk oturum prosedürü bu 7 adımdır ve yaklaşık 20 dakika sürer.

## IT ve Kurumsal Ağ

Şirket içi kullanımda IT ekibinizin genellikle şunları yapması gerekir:

- **Yönetici hakkı veya ön-onaylı kurulum.** Çalışanlar kendi bilgisayarlarına serbestçe uygulama yükleyemiyorsa IT'nin Claude Desktop'ı onaylaması gerekir.
- **Domain whitelist:** `claude.ai`, `anthropic.com` ve Claude Desktop backend endpoint'leri firewall'da açık olmalı
- **VPN testi:** Kurumsal VPN bazen Claude Desktop ile çakışır. Eğitim öncesi test edin.
- **MCP connector güvenlik incelemesi:** Slack, Drive gibi bağlantılar kuruluyorsa bilgi güvenliği politikanıza göre onay süreci gerekebilir.

Detaylı IT ve KVKK gereksinimleri için: [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) sayfasına bakın.

## Claude Desktop Açıldığında Ne Görünür?

Uygulama açıldığında iki ana çalışma alanı vardır:

### Chat Modu (varsayılan)

Web arayüzüyle aynı deneyim — bir konuşma, soru-cevap formatı. Hızlı görevler için uygundur. [Claude Chat](claude-chat/) sayfasında detayları vardır.

### Cowork Modu

Ayrı bir simgeyle işaretli — bağladığınız workspace klasörüyle birlikte Claude'un yerel dosyalarınıza erişebildiği, skills ve plugins kullanabildiği, connector çağırabildiği mod. **Gerçek iş buradadır.**

Chat'ten Cowork'e geçiş bir tıklamadır. Aynı uygulamanın iki modu olarak düşünün.

## Güncelleme

Claude Desktop kendi kendini günceller — arka planda yeni sürüm indirir, yeniden başlatma istediğinde uygularsınız. Anthropic hızlı iterasyon yapıyor; yeni özellikler düzenli geliyor. **Güncellemeleri geciktirmeyin.**

## Sorun Giderme — Sık Karşılaşılan Durumlar

- **"Cowork görünmüyor":** Hesabınızda Pro veya üstü (Max/Team/Enterprise) abonelik aktif mi? Free hesapla Cowork çalışmaz.
- **"Workspace klasörü bağlanmıyor":** Ayarlar → Cowork → Workspace klasörü. Klasörün var olduğundan ve yazma izniniz olduğundan emin olun.
- **"Connector'lar açılmıyor":** IT firewall Anthropic domain'lerini engelliyor olabilir. Whitelist kontrol edin.
- **"VPN'de çalışmıyor":** Bazı kurumsal VPN'ler Claude Desktop trafiğini kısıtlar. VPN'i geçici kapatın veya IT ile konuşun.

## İlgili Sayfalar

- [Cowork Modu](cowork-modu/) — Claude Desktop'ın ana gücü
- [Claude Chat](claude-chat/) — Claude Desktop içindeki sohbet modu
- [CLAUDE.md Nedir?](../claude-md/nedir/) — İlk kurulumun kritik parçası
- [Claude Planları](../temeller/planlar/) — Pro minimum, plan detayları
- [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) — IT gereksinimleri ve veri uyumu

