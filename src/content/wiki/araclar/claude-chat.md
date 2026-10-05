---
title: "Claude Chat (claude.ai): Tarayıcıdan Claude Kullanmak"
description: "Claude'un tarayıcı ve mobil sohbet arayüzü: ne için uygun, hangi işlerde Cowork tarzı çalışmaya geçmeli, 16 Eylül birleşmesi neyi değiştirdi."
tags:
  - araclar
  - claude-chat
  - web
lastUpdated: "2026-10-05"
---

**Claude Chat, Claude'un tarayıcı ve mobil uygulamalardaki standart arayüzüdür**, çoğu kişinin Claude'la ilk tanıştığı yerdir. [claude.ai](https://claude.ai) adresinden ve iOS / Android uygulamalarından erişilir.

Bu sayfa Claude Chat'in ne yaptığını, ne yapmadığını ve bir iş profesyonelinin hangi görevleri sohbet tarzında, hangilerini [Cowork](/wiki/araclar/cowork-modu/) tarzında yapması gerektiğini açıklar.

> **Güncel durum (16 Eylül 2026):** Cowork ve sohbet tek bir Claude arayüzünde birleşiyor. Artık "sohbet mi, Cowork mu?" diye seçim yapmıyorsunuz; Claude görevin neye ihtiyaç duyduğunu kendisi anlıyor. Aynı konuşmada hem soru sorabilir hem "bu verilerden haftalık raporu hazırla" diyebilirsiniz. Yayılım kademeli: önce Pro ve Max, Team ve Free için "yakında". Enterprise yöneticilerine en az 30 gün önceden haber verilecek. Aşağıdaki "sohbet ayrı, Cowork ayrı" anlatımı, birleşik arayüz hesabınıza henüz gelmediyse ekranınızı; geldiyse **iş türü ayrımını** tarif eder. Ayrıntı: [Cowork ve sohbet tek Claude oldu](/haberler/2026-09-16-cowork-ve-sohbet-tek-claude-oldu/).

## Claude Chat Nedir?

Kısaca: bir konuşma arayüzü. Siz yazarsınız, Claude cevap verir. Yazı yazmak, analiz, araştırma, belge incelemesi gibi bir dizi işte hemen sonuç üretir.

**Klasik sohbet arayüzünde (birleşik arayüz hesabınıza gelmediyse):**

- **Yerel dosya sisteminize erişmez.** Bilgisayarınızdaki klasörü göremez.
- **Kalıcı otomasyon çalıştırmaz.** Zamanlanmış görev, arka plan süreci yok.
- **Plugins desteklemez.** Cowork'teki rol bazlı uzmanlık paketleri tam hâliyle burada yoktur.

Birleşik arayüzde bu işler aynı konuşmadan yapılabiliyor; yerel klasör erişimi ve sandbox gibi masaüstüne bağlı parçalar yine [Claude Desktop](/wiki/araclar/claude-desktop/) ister.

Claude Chat'i şöyle düşünün: **"kurulum gerektirmeyen Claude giriş kapısı."** Başlangıç için mükemmel, ama iş akışınızın merkezi olmak için yeterli değil.

## Temel Özellikler

### Konuşma Geçmişi

Tüm sohbetleriniz sol panelde kaydedilir ve aranabilir. Geçmişe dönebilir, devam ettirebilir, paylaşabilirsiniz. Claude bir sohbete geri döndüğünüzde o konuşmanın bağlamından devam eder. Hafıza özelliği de sohbet ve Cowork arasında ortaktır (Free, Pro ve Max'te varsayılan açık, Team ve Enterprise'ta varsayılan kapalı), bkz. [Memory](/wiki/yetenekler/memory/). Hafıza, CLAUDE.md gibi sizin yazdığınız bir talimat dosyası değildir.

### Dosya Yükleme

Bir konuşmaya doğrudan dosya ekleyebilirsiniz: PDF, Word, görsel, Excel, CSV ve daha fazlası. Claude dosyanın içeriğini okur ve o konuşma boyunca onunla çalışır. Konuşma kapandığında dosya da erişim dışına çıkar.

### Web Araması

Claude, ihtiyaç duyduğunda gerçek zamanlı olarak web'de arama yapar: güncel fiyatlar, haberler, şirket bilgileri, yeni çıkan yönetmelikler. Bu özellik gerektiğinde otomatik olarak devreye girer, sizin açmanıza gerek yoktur. Ayrıntı: [Web Arama](/wiki/araclar/web-arama/).

### Görsel Anlama

Claude görselleri okur, analiz eder ve tarif eder. Ürün fotoğrafı, grafik, ekran görüntüsü, plan, sözleşme sayfası: yükleyin, Claude'la üzerinde konuşun. claude.ai'de mesaj başına en çok 20 görsel yüklenebilir, görsel başına sınır 10 MB'dır. Claude görsel yorumlar; görsel üretmez veya düzenlemez.

### Sesli Giriş

Claude'a konuşabilirsiniz. Voice mode beta olarak tüm planlarda, mobilde, masaüstünde ve web'de var; yoldayken çabuk görevler için pratiktir. Ayrıntı ve Türkçe notu: [Voice Mode](/wiki/araclar/voice-mode/).

### Artifacts

Claude sohbet penceresi içinde interaktif HTML sayfaları, veri görselleştirmeleri, kod önizlemeleri üretir. Bu "artifacts" satır içinde render edilir, kopyalanabilir veya indirilebilir. Claude Design, Slides ve Docs ürünleri ise ücretli planlarda (Pro, Max, Team, Enterprise) beta olarak sunulur; Free planda yoktur. Free'de sohbette dosya ve artifact üretimi sürer, yalnız bu üç ürünün düzenleme arayüzü gelmez.

### Projects

Claude Chat içinde **Projects** özelliği, kalıcı ve organize çalışma alanları yaratır; her biri kendi bilgi tabanı ve özel talimatlarıyla gelir. Detay için [Projects](/wiki/araclar/projects/) sayfasına bakın.

## Soru-Cevap mı, Çalışma mı?

İş profesyonelleri için en sık sorulan sorudur. Kısa cevap, iş türüne göre değişir:

| Durum | Sohbet tarzı | Cowork tarzı |
|---|---|---|
| Hızlı soru, tek seferlik görev | ✅ | |
| Belge inceleme, yüklediğiniz dosya | ✅ | ✅ |
| Taslak yazma, e-posta, rapor | ✅ | ✅ |
| .docx / .pptx / .xlsx dosyası üretme | ✅ (indirilir) | ✅ (skills, doğrudan workspace klasörüne) |
| Script veya otomasyon çalıştırma | | ✅ |
| Slack, CRM, Drive'a bağlanma | ✅ (connector'lar, hesap ayarlarından) | ✅ (connector'lar) |
| Tekrar eden zamanlanmış görevler | | ✅ |
| Çok adımlı otonom iş akışları | | ✅ |
| Kurulum gerektirmez | ✅ | |
| Mobilde çalışır | ✅ | ✅ Beta (7 Tem 2026'dan beri; Pro, Max, Team) ve Dispatch (yeni kullanıcılara kapalı) |

### Pratik Yaklaşım

**Çalışan soru-cevapla başlar, çalışma tarzı işlerde seviye atlar.**

Çoğu kişi ilk Claude deneyimini sohbette yaşar. Bu normal ve doğru. Ama profesyonel iş akışlarını gerçek anlamda sisteme oturtmak için **Cowork tarzı çalışma kaçınılmazdır**, çünkü değerin büyük kısmı oradadır.

Hızlı soru-cevap ortadan kalkmaz. "Akşam evde kafeyi içerken hızlıca bir şey sorma" anlarında hâlâ en pratik kullanımdır. Ama ana çalışma biçimi Cowork tarzı olur.

## Ne Zaman Soru-Cevap Tek Başına Yeterlidir?

- **Hızlı araştırma:** "X sektörünün bu yılki trendleri neler?" gibi tek-seferlik sorular
- **Belge özetleme:** Bir PDF yükleyip "özetini çıkar, ana 3 konuyu belirle" demek
- **Yazım yardımı:** Bir e-posta taslağı, bir LinkedIn yazısı, kısa bir metin
- **Görsel yorumlama:** Bir grafik, bir çizim, bir ekran görüntüsü üzerine konuşmak
- **Gezerken kullanım:** Mobil uygulamada sesli komut, sürücü koltuğunda dikte

Bunların hepsi sohbette harika çalışır. Cowork tarzı çalışma gerekmez.

## Ne Zaman Cowork Tarzı Çalışmaya Geçmelisiniz?

- **Çıktının bilgisayarınızdaki klasöre yazılması gerekiyorsa** (Word raporu, Excel modeli, PPT sunumu)
- **Bir iş akışı tekrar ediyorsa** (her Pazartesi aynı raporu üretmek)
- **Şirket sisteminize bağlanma gerekiyorsa** (Slack'e mesaj, Drive'a yükleme, CRM'e kayıt)
- **Çok adımlı otomasyon lazımsa** (oku → analiz et → yaz → gönder zinciri)
- **Aynı projede tekrar tekrar dönüyorsanız** (proje klasörü + CLAUDE.md kombinasyonu)

## İlgili Sayfalar

- [Cowork Modu](/wiki/araclar/cowork-modu/): sohbetle birleşen çalışma biçimi
- [Projects](/wiki/araclar/projects/): Claude Chat içindeki kalıcı çalışma alanları
- [Claude Desktop](/wiki/araclar/claude-desktop/): Cowork'ün masaüstü uygulaması
- [Araçlar Ana Sayfası](/wiki/araclar/): Tüm Claude araçlarının karar tablosu

