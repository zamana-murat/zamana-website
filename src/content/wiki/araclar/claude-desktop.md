---
title: "Claude Desktop: Kurumsal Kullanımın Kapısı"
description: "Claude Desktop, Cowork ve yerel dosya erişiminin en eksiksiz ortamıdır. Kurulum, sistem gereksinimleri, web arayüzüne göre avantajlar ve ilk adımlar."
tags:
  - araclar
  - claude-desktop
  - kurulum
  - cowork
lastUpdated: "2026-10-05"
---

**Claude Desktop, Claude'un Windows, macOS ve Linux için yerel uygulamasıdır.** Kağıt üzerinde başka bir arayüz gibi görünse de pratikte çok daha fazlasıdır: bilgisayarınızdaki gerçek klasörlerle çalışan [Cowork](/wiki/araclar/cowork-modu/)'ün en eksiksiz ortamıdır ve iş kullanımı için web arayüzünden ciddi ölçüde daha güçlüdür.

Tek cümleyle: yerel dosyalarla ciddi Claude kullanımı Claude Desktop ile başlar. Cowork web ve mobilde de (beta) var, ama yerel workspace klasörü, sandbox'ta kod çalıştırma, Dispatch ve yerleşik tarayıcı masaüstü uygulamasına bağlıdır.

## Claude Desktop Web Arayüzünden Ne Farkı Var?

[Claude.ai web arayüzü](/wiki/araclar/claude-chat/) iyidir, ama belirli bir noktaya kadar. Claude Desktop şunları ekler:

- **[Cowork](/wiki/araclar/cowork-modu/)'ün tam sürümü**: en büyük fark
- **Yerel dosya sistemi erişimi**: bağlı workspace klasörü üzerinden
- **[Plugin](/wiki/yetenekler/skills/) ve MCP connector kurulumu**: şirket araçlarına bağlantı
- **Skill çağırma**: `/docx`, `/pptx`, `/xlsx`, `/pdf` ve diğerleri
- **Sandbox'ta kod çalıştırma**: güvenli sanal makinede Python / PowerShell / Bash
- **Oturumlar arası kalıcı workspace klasörü**: her şey yerinde kalır, bir dahaki sefere aynı bağlamla başlar
- **Computer use (research preview):** Claude ekranınızı görüp fare ve klavyeyi kullanabilir. Yalnız Pro ve Max'te, masaüstü uygulamasında (macOS 15+ veya Windows) Cowork ve Claude Code içinde çalışır. Web sohbetinde ve Team/Enterprise'ta yoktur. Ayarlar → General → Computer use anahtarından açılır. Ayrıntı: [Computer Use](/wiki/yetenekler/computer-use/)

> **6 Ekim 2026'dan itibaren:** Pro ve Max'te yeni Cowork görevleri bulutta çalışıyor. Yerel klasör erişimi ve computer use gibi masaüstüne bağlı yetenekler ise yine masaüstü uygulaması ister. Ayrıntı: [Cowork Modu](/wiki/araclar/cowork-modu/).

## Sistem Gereksinimleri

| Bileşen | Gereksinim |
|---|---|
| **İşletim sistemi** | Windows 10 veya üstü, macOS 11 (Big Sur) veya üstü, Linux (Ubuntu 22.04+ / Debian 12+, x64 veya arm64) |
| **RAM ve depolama** | Genel bir resmi gereksinim yayımlanmıyor. Yalnız Linux'ta Cowork için en az 8 GB RAM ve yaklaşık 25 GB boş disk gerekir (KVM desteği şart) |
| **İnternet** | Resmi bir hız değeri yayımlanmıyor. Zamana önerisi: kesintisiz, kararlı bir bağlantı |

Güncel gereksinim için resmi kurulum sayfasına bakın: [Claude Desktop kurulumu](https://support.claude.com/en/articles/10065433-installing-claude-desktop).

**Önemli:** Cowork için **en az Pro ($20/ay)** gerekir. Yeni başlayan kullanıcılar için **ilk ay Max 5x ($100/ay)** önerilir: keşif döneminde Pro limiti çabuk dolar ve "çalışmıyor" izlenimi oluşur. İkinci aydan itibaren gerçek kullanıma göre Pro'ya ($20) inebilirsiniz.

## Kurulum

1. **[claude.ai](https://claude.ai) adresine gidin** → sağ üst menüden **"Download"** seçeneğini bulun
2. İşletim sisteminize uygun sürümü indirin (Windows `.exe` veya macOS `.dmg`; Linux için resmi kurulum sayfasındaki yönergeler)
3. İndirilen dosyaya çift tıklayın, kurulum adımlarını izleyin
4. Claude Desktop açılınca Claude hesabınızla giriş yapın
5. İlk açılışta (birleşik arayüz henüz yoksa) **Cowork'ü etkinleştirin**; Enterprise'ta bunun için yönetici etkinleştirmesi gerekebilir
6. Bir **workspace klasörü** seçin, bilgisayarınızda Claude'un çalışacağı gerçek klasör (öneri: `C:\ClaudeWorkspace` veya `~/ClaudeWorkspace`)
7. Bu klasörün içine **CLAUDE.md** dosyasını oluşturun (bkz: [CLAUDE.md Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/))

Bu 7 adım yaklaşık 20 dakika sürer ve sağlıklı bir başlangıç noktası verir.

## IT ve Kurumsal Ağ

Şirket içi kullanımda IT ekibinizin genellikle şunları yapması gerekir:

- **Yönetici hakkı veya ön-onaylı kurulum.** Çalışanlar kendi bilgisayarlarına serbestçe uygulama yükleyemiyorsa IT'nin Claude Desktop'ı onaylaması gerekir.
- **Domain whitelist:** `claude.ai`, `anthropic.com` ve Claude Desktop backend endpoint'leri firewall'da açık olmalı
- **VPN testi:** Kurumsal VPN bazen Claude Desktop ile çakışır. Eğitim öncesi test edin.
- **MCP connector güvenlik incelemesi:** Slack, Drive gibi bağlantılar kuruluyorsa bilgi güvenliği politikanıza göre onay süreci gerekebilir.

Detaylı IT ve KVKK gereksinimleri için: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasına bakın.

## Claude Desktop Açıldığında Ne Görünür?

> **16 Eylül 2026'dan beri:** Cowork ve sohbet tek Claude arayüzünde birleşiyor. Yayılım kademeli (önce Pro ve Max). Hesabınızda birleşik arayüz açıldıysa iki ayrı alan yerine tek bir konuşma görürsünüz ve Claude görevin ihtiyacına göre kendisi davranır. Ayrıntı: [Cowork Modu](/wiki/araclar/cowork-modu/).

Birleşik arayüz henüz hesabınızda açılmadıysa uygulamada iki çalışma alanı görürsünüz.

### Sohbet Alanı

Web arayüzüyle aynı deneyim: bir konuşma, soru-cevap formatı. Hızlı görevler için uygundur. [Claude Chat](/wiki/araclar/claude-chat/) sayfasında detayları vardır.

### Cowork Alanı

Ayrı bir simgeyle işaretli. Bağladığınız workspace klasörüyle birlikte Claude'un yerel dosyalarınıza erişebildiği, skills ve plugins kullanabildiği, connector çağırabildiği alandır. **Gerçek iş buradadır.**

Sohbetten Cowork'e geçiş bir tıklamadır. Birleşme tamamlandığında bu ayrım kalkacak.

## Güncelleme

Claude Desktop kendi kendini günceller, arka planda yeni sürüm indirir, yeniden başlatma istediğinde uygularsınız. Anthropic hızlı iterasyon yapıyor; yeni özellikler düzenli geliyor. **Güncellemeleri geciktirmeyin.**

## Sorun Giderme: Sık Karşılaşılan Durumlar

- **"Cowork görünmüyor":** Hesabınızda Pro veya üstü (Max/Team/Enterprise) abonelik aktif mi? Free hesapla Cowork çalışmaz. Birleşik arayüz açıldıysa ayrı bir Cowork simgesi görmezsiniz, tek konuşmadan çalışırsınız.
- **"Workspace klasörü bağlanmıyor":** Ayarlar → Cowork → Workspace klasörü. Klasörün var olduğundan ve yazma izniniz olduğundan emin olun.
- **"Connector'lar açılmıyor":** IT firewall Anthropic domain'lerini engelliyor olabilir. Whitelist kontrol edin.
- **"VPN'de çalışmıyor":** Bazı kurumsal VPN'ler Claude Desktop trafiğini kısıtlar. VPN'i geçici kapatın veya IT ile konuşun.

## İlgili Sayfalar

- [Cowork Modu](/wiki/araclar/cowork-modu/): Claude Desktop'ın ana gücü
- [Claude Chat](/wiki/araclar/claude-chat/): Claude Desktop içindeki sohbet alanı
- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): İlk kurulumun kritik parçası
- [Claude Planları](/wiki/temeller/planlar/): Pro minimum, plan detayları
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): IT gereksinimleri ve veri uyumu

