---
title: "Claude Desktop: Kurumsal Kullanımın Kapısı"
seoTitle: "Claude Desktop İndirme ve Kurulum (Windows, Mac)"
description: "Claude Desktop, Cowork ve yerel dosya erişiminin en eksiksiz ortamıdır. Kurulum, sistem gereksinimleri, web arayüzünden farkı ve ilk adımlar."
tags:
  - araclar
  - claude-desktop
  - kurulum
  - cowork
lastUpdated: "2026-10-06"
---

**Claude Desktop, Claude'un Windows, macOS ve Linux için yerel uygulamasıdır.** Kağıt üzerinde başka bir arayüz gibi görünse de pratikte çok daha fazlasıdır: bilgisayarınızdaki gerçek klasörlerle çalışan [Cowork](/wiki/araclar/cowork-modu/)'ün en eksiksiz ortamıdır ve iş kullanımı için web arayüzünden ciddi ölçüde daha güçlüdür.

Tek cümleyle: yerel dosyalarla ciddi Claude kullanımı Claude Desktop ile başlar. Cowork web ve mobilde de (beta) var, ama yerel workspace klasörü, sandbox'ta kod çalıştırma, Dispatch ve yerleşik tarayıcı masaüstü uygulamasına bağlıdır.

## Claude Desktop Web Arayüzünden Ne Farkı Var?

[Claude.ai web arayüzü](/wiki/araclar/claude-chat/) iyidir, ama belirli bir noktaya kadar. Claude Desktop şunları ekler:

- **[Cowork](/wiki/araclar/cowork-modu/)'ün tam sürümü**: en büyük fark
- **Yerel dosya sistemi erişimi**: bağlı workspace klasörü üzerinden
- **Bilgisayarınızda kod çalıştırma**: Cowork'te güvenli sanal makinede Python / PowerShell / Bash
- **Oturumlar arası kalıcı workspace klasörü**: her şey yerinde kalır, bir dahaki sefere aynı bağlamla başlar
- **Masaüstüne bağlı yetenekler**: Dispatch, yerleşik tarayıcı ve computer use
- **Computer use (research preview):** Claude ekranınızı görüp fare ve klavyeyi kullanabilir. Yalnız Pro ve Max'te, masaüstü uygulamasında (macOS 15+ veya Windows) Cowork ve Claude Code içinde çalışır. Web sohbetinde ve Team/Enterprise'ta yoktur. Ayarlar → General → Computer use anahtarından açılır. Ayrıntı: [Computer Use](/wiki/yetenekler/computer-use/)

Skill'ler, connector'lar, Projects ve kod çalıştırma/dosya oluşturma claude.ai'de de var; bunlar için masaüstü uygulaması şart değildir. Masaüstünün asıl farkı, bunların bilgisayarınızdaki gerçek klasörlerle birleşmesidir.

> **6 Ekim 2026'dan itibaren:** Pro ve Max'te yeni Cowork görevleri bulutta çalışıyor. Yerel klasör erişimi ve computer use gibi masaüstüne bağlı yetenekler ise yine masaüstü uygulaması ister. Ayrıntı: [Cowork Modu](/wiki/araclar/cowork-modu/).

## Sistem Gereksinimleri

| Bileşen | Gereksinim |
|---|---|
| **İşletim sistemi** | Windows 10 veya üstü, macOS 11 (Big Sur) veya üstü, Linux (Ubuntu 22.04+ / Debian 12+, x64 veya arm64) |
| **RAM ve depolama** | Genel bir resmi gereksinim yayımlanmıyor. Yalnız Linux'ta Cowork için en az 8 GB RAM ve yaklaşık 25 GB boş disk gerekir (KVM desteği şart) |
| **İnternet** | Resmi bir hız değeri yayımlanmıyor. Zamana önerisi: kesintisiz, kararlı bir bağlantı |

Güncel gereksinim için resmi kurulum sayfasına bakın: [Claude Desktop kurulumu](https://support.claude.com/en/articles/10065433-installing-claude-desktop).

**Önemli:** Cowork için **en az Pro ($20/ay)** gerekir. Yeni başlayan kullanıcılar için **ilk ay Max 5x ($100/ay)** önerilir (öneri, zorunlu değil): keşif döneminde Pro limiti çabuk dolar ve "çalışmıyor" izlenimi oluşur. İkinci aydan itibaren gerçek kullanıma göre Pro'ya ($20) inebilirsiniz.

## Kurulum

1. **[claude.ai](https://claude.ai) adresine gidin** → indirme bağlantısını bulun
2. İşletim sisteminize uygun sürümü indirin (Windows `.exe` veya macOS `.dmg`; Linux için resmi kurulum sayfasındaki yönergeler)
3. İndirilen dosyaya çift tıklayın, kurulum adımlarını izleyin
4. Claude Desktop açılınca Claude hesabınızla giriş yapın
5. İlk açılışta (birleşik arayüz henüz yoksa) **Cowork'ü etkinleştirin**; Enterprise'ta bunun için yönetici etkinleştirmesi gerekebilir
6. Bir **workspace klasörü** seçin, bilgisayarınızda Claude'un çalışacağı gerçek klasör (öneri: `C:\ClaudeWorkspace` veya `~/ClaudeWorkspace`)
7. Bu klasörün içine **CLAUDE.md** dosyasını oluşturun (bkz: [CLAUDE.md Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/)). Yerel Cowork oturumu bu dosyayı okur; ilk mesajda "talimatımı 3 maddede özetle" diye test edin. Sohbet sekmesi CLAUDE.md okumaz, orada kalıcı talimat için Settings > General > "Instructions for Claude" kullanılır

**Süre:** kurulum ve ilk ayar 15-30 dk, IT onayı ayrı. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

Bu 7 adım sağlıklı bir başlangıç noktası verir.

## IT ve Kurumsal Ağ

Şirket içi kullanımda IT ekibinizin genellikle şunları yapması gerekir:

- **Yönetici hakkı veya ön-onaylı kurulum.** Çalışanlar kendi bilgisayarlarına serbestçe uygulama yükleyemiyorsa IT'nin Claude Desktop'ı onaylaması gerekir.
- **Firewall izni:** Claude'un çalışması için gereken adreslerin açık olması gerekir. Güncel adres listesi için resmi kurulum sayfasına ve Anthropic'in yardım merkezine bakın; liste zamanla değişebilir.
- **VPN testi:** Kurumsal VPN bazen Claude Desktop ile çakışır. Eğitim öncesi test edin.
- **MCP connector güvenlik incelemesi:** Slack, Drive gibi bağlantılar kuruluyorsa bilgi güvenliği politikanıza göre onay süreci gerekebilir.

Detaylı IT ve KVKK gereksinimleri için: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/). Team ve Enterprise'ta yönetici ayarları için [Takım ve Admin](/wiki/temeller/takim-ve-admin/); ekibe dağıtım sırası için [Pilot ve Yaygınlaştırma](/wiki/temeller/pilot-ve-yayginlastirma/). Kurumsal sürüm özeti: [Claude Enterprise](/kurumsal/).

## Claude Desktop Açıldığında Ne Görünür?

Cowork ve sohbet 16 Eylül 2026'dan beri tek Claude arayüzünde birleşiyor (kademeli yayılım, önce Pro ve Max). Birleşik arayüz hesabınızda açıldıysa tek bir konuşma görürsünüz. Henüz açılmadıysa uygulamada iki ayrı alan olur: hızlı görevler için [sohbet alanı](/wiki/araclar/claude-chat/) ve workspace klasörünüzle çalışan Cowork alanı. Hangi iş hangisine yakın: [Cowork Modu](/wiki/araclar/cowork-modu/).

## Güncelleme

Claude Desktop kendi kendini günceller, arka planda yeni sürüm indirir, yeniden başlatma istediğinde uygularsınız. Anthropic hızlı iterasyon yapıyor; yeni özellikler düzenli geliyor. **Güncellemeleri geciktirmeyin.**

## Sorun Giderme: Sık Karşılaşılan Durumlar

- **"Cowork görünmüyor":** Hesabınızda Pro veya üstü (Max/Team/Enterprise) abonelik aktif mi? Free hesapla Cowork çalışmaz. Birleşik arayüz açıldıysa ayrı bir Cowork simgesi görmezsiniz, tek konuşmadan çalışırsınız.
- **"Workspace klasörü bağlanmıyor":** Cowork ayarlarındaki workspace klasörü bölümüne bakın. Klasörün var olduğundan ve yazma izniniz olduğundan emin olun.
- **"Connector'lar açılmıyor":** IT firewall Claude'un adreslerini engelliyor olabilir. IT ile izin listesini kontrol edin.
- **"VPN'de çalışmıyor":** Bazı kurumsal VPN'ler Claude Desktop trafiğini kısıtlar. VPN'i geçici kapatın veya IT ile konuşun.

## İlgili Sayfalar

- [Cowork Modu](/wiki/araclar/cowork-modu/): Claude Desktop'ın ana gücü
- [Claude Chat](/wiki/araclar/claude-chat/): Claude Desktop içindeki sohbet alanı
- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): İlk kurulumun kritik parçası (yerel Cowork için)
- [Claude Planları](/wiki/temeller/planlar/): Pro minimum, plan detayları
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): IT gereksinimleri ve veri uyumu

