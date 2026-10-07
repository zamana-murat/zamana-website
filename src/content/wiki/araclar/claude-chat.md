---
title: "Claude Chat (claude.ai): Tarayıcıdan Claude Kullanmak"
seoTitle: "Claude Chat (claude.ai) Nasıl Kullanılır?"
description: "Claude'un tarayıcı ve mobil sohbet arayüzü: ne için uygun, hangi işlerde Cowork tarzı çalışmaya geçmeli ve 16 Eylül birleşmesi neyi değiştirdi."
tags:
  - araclar
  - claude-chat
  - web
lastUpdated: "2026-10-06"
---

**Claude Chat, Claude'un tarayıcı ve mobil uygulamalardaki standart arayüzüdür**, çoğu kişinin Claude'la ilk tanıştığı yerdir. [claude.ai](https://claude.ai) adresinden ve iOS / Android uygulamalarından erişilir.

Bu sayfa Claude Chat'in ne yaptığını, ne yapmadığını ve bir iş profesyonelinin hangi görevleri sohbet tarzında, hangilerini [Cowork](/wiki/araclar/cowork-modu/) tarzında yapması gerektiğini açıklar.

> **Güncel durum (16 Eylül 2026):** Cowork ve sohbet tek bir Claude arayüzünde birleşiyor (kademeli yayılım: önce Pro ve Max, Team ve Free için "yakında"). Aynı konuşmada hem soru sorabilir hem "bu verilerden haftalık raporu hazırla" diyebilirsiniz. Hangi iş hangi tarza yakın, [Cowork Modu](/wiki/araclar/cowork-modu/) sayfasında. Ayrıntı: [Cowork ve sohbet tek Claude oldu](/haberler/2026-09-16-cowork-ve-sohbet-tek-claude-oldu/).

## Claude Chat Nedir?

Kısaca: bir konuşma arayüzü. Siz yazarsınız, Claude cevap verir. Yazı yazmak, analiz, araştırma, belge incelemesi gibi bir dizi işte hemen sonuç üretir.

**Sohbet arayüzünde dosya yükleyebilir, web'de arayabilir, artifact üretebilir, skill ve kod çalıştırma özelliklerini kullanabilirsiniz.** Skill'ler ve code execution claude.ai'de Free dahil tüm planlarda var (Team ve Enterprise'ta yönetici kod çalıştırmayı kapatabilir). Bu yüzden .docx, .xlsx, .pptx gibi dosyaları sohbetten indirilebilir çıktı olarak üretebilirsiniz.

**Klasik sohbet arayüzünde (birleşik arayüz hesabınıza gelmediyse) olmayanlar:**

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

Voice mode beta olarak tüm planlarda, mobilde, masaüstünde ve web'de var, ama Türkçeyi desteklemiyor. Türkçe konuşmak için cihazınızın dikte özelliği kullanılır. Ayrıntı: [Voice Mode](/wiki/araclar/voice-mode/).

### Artifacts

Claude sohbet penceresi içinde interaktif HTML sayfaları, veri görselleştirmeleri, kod önizlemeleri üretir. Bu "artifacts" satır içinde render edilir, kopyalanabilir veya indirilebilir. Claude Design, Slides ve Docs ürünleri ise ücretli planlarda (Pro, Max, Team, Enterprise) beta olarak sunulur; Free planda yoktur. Free'de sohbette dosya ve artifact üretimi sürer, yalnız bu üç ürünün düzenleme arayüzü gelmez.

### Projects

Claude Chat içinde **Projects** özelliği, kalıcı ve organize çalışma alanları yaratır; her biri kendi bilgi tabanı ve özel talimatlarıyla gelir. Detay için [Projects](/wiki/araclar/projects/) sayfasına bakın.

## Soru-Cevap mı, Çalışma mı?

İş profesyonelleri için en sık sorulan sorudur. Kısa cevap: iş türüne göre değişir. Soru-cevapla başlayın; çıktının bilgisayarınızdaki klasöre yazılması, bir işin tekrar etmesi ya da şirket sistemine bağlanma gerektiğinde çalışma tarzına geçin. Karşılaştırma tablosu ve ayrıntı: [Cowork Modu → Sohbet ve Cowork](/wiki/araclar/cowork-modu/).

## Ne Zaman Soru-Cevap Tek Başına Yeterlidir?

- **Hızlı araştırma:** "X sektörünün bu yılki trendleri neler?" gibi tek-seferlik sorular
- **Belge özetleme:** Bir PDF yükleyip "özetini çıkar, ana 3 konuyu belirle" demek
- **Yazım yardımı:** Bir e-posta taslağı, bir LinkedIn yazısı, kısa bir metin
- **Görsel yorumlama:** Bir grafik, bir çizim, bir ekran görüntüsü üzerine konuşmak
- **Gezerken kullanım:** Telefondan kısa soru, fotoğraf yükleyip yorum isteme

Bunların hepsi sohbette harika çalışır. Cowork tarzı çalışma gerekmez.

## Ne Zaman Cowork Tarzı Çalışmaya Geçmelisiniz?

Çıktı bilgisayarınızdaki klasöre yazılacaksa, iş her hafta tekrar ediyorsa, şirket sistemine bağlanma ya da çok adımlı otomasyon gerekiyorsa. Ayrıntılı liste [Cowork Modu](/wiki/araclar/cowork-modu/) sayfasında.

## İlgili Sayfalar

- [Cowork Modu](/wiki/araclar/cowork-modu/): sohbetle birleşen çalışma biçimi
- [Projects](/wiki/araclar/projects/): Claude Chat içindeki kalıcı çalışma alanları
- [Claude Desktop](/wiki/araclar/claude-desktop/): Cowork'ün masaüstü uygulaması
- [Araçlar Ana Sayfası](/wiki/araclar/): Tüm Claude araçlarının karar tablosu
- [Claude nedir, ne işe yarar?](/claude/): ürüne genel bakış ve plan farkları

