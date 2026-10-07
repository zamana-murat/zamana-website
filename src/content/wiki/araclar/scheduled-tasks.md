---
title: "Scheduled Tasks: Zamanlanmış Otomasyonlar"
seoTitle: "Claude Zamanlanmış Görevler (Scheduled Tasks)"
description: "Cowork'ün Scheduled Tasks özelliği, tekrar eden görevleri siz başlatmadan çalıştırır: günlük brifing, haftalık rapor, aylık özet. Bulut ve yerel fark."
tags:
  - araclar
  - scheduled-tasks
  - otomasyon
  - cowork
lastUpdated: "2026-10-06"
---

**Cowork, belirli aralıklarla otomatik çalışan görevler oluşturmanıza izin verir.** Bir kere kurarsınız; siz bir daha dokunmazsınız.

Her Pazartesi yazdığınız aynı rapor, her sabah yaptığınız aynı e-posta kontrolü, her ay başında hazırladığınız aynı özet: bunlar Claude'un otonom çalıştırabileceği işlerdir. Tipik olarak en büyük zaman kazancı buradan gelir.

## Ne Zamanlanabilir?

Gerçek kullanım örnekleri:

- **Günlük brifing:** E-postayı, Slack'i, takvimi kontrol et, öncelikli sabah gündemini üret. Her sabah 08:00'da workspace klasörüne düşer. **Süre:** elle 30-45 dk, Claude ile okuma yaklaşık 5 dk. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*
- **Haftalık rapor:** Operasyon verilerini topla, durum raporu hazırla. Her Pazartesi ekip toplantısından önce hazır. Kurgusal bir örnek: Karadeniz Gıda'nın operasyon müdürü, her Pazartesi 08:00'de önceki haftanın sevkiyat gecikmelerini ve tedarikçi teslim durumunu tek sayfada bulur. **Süre:** elle 1-2 saat, Claude ile 15-20 dk kontrol. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*
- **Aylık belge:** Tekrar eden şablonu üret, güncel veriyle doldur. Her ayın 1'inde hazırlanır.
- **Tekrar eden hatırlatıcılar:** Proje yönetim aracından gecikmiş görevleri çek, hatırlatma listesi üret. Her Cuma öğleden sonra.
- **Veri çekme işlemleri:** Bağlı analitik araçlardan son metrikleri al, özet formatla. Günlük veya haftalık.

## Zamanlanmış Görev Nasıl Oluşturulur?

İki yolu vardır.

### Yol 1: Konuşmada `/schedule` Komutu

Cowork'te herhangi bir konuşmada `/schedule` yazın ve ne otomasyon istediğinizi anlatın. Claude sizi şu aşamalardan geçirir:

1. Görevin ne yapacağını netleştirir (gerekli parametreler, veri kaynağı, çıktı formatı)
2. Sıklığı belirler (saatlik, günlük, haftalık, aylık veya özel)
3. Çıktıyı nereye kaydedeceğini teyit eder
4. Programı aktifleştirir

**Süre:** görev kurulumu 5-10 dk. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).* Bir sonraki tetiklenme zamanında otomatik çalışır.

### Yol 2: Cowork Arayüzünden

**Settings → Scheduled Tasks** menüsünden mevcut görevleri yönetebilir, yenilerini oluşturabilirsiniz. Daha görsel bir kurulum tercih edenler için.

## Nerede Çalışır: Bulut mu, Bilgisayarınız mı?

**6 Ekim 2026'dan itibaren Pro ve Max'te yeni Cowork görevleri bulutta çalışıyor** ve "Only on your computer" seçeneği kalkıyor. Bu planlarda yeni kurduğunuz görevler için bilgisayarın açık ve uyanık kalması gerekmiyor. Yerel klasör erişimi, computer use ve yerleşik tarayıcı gibi masaüstüne bağlı yetenekler ise yine masaüstü uygulaması ister. Görevlerinizin hangi modda çalıştığını ayarlardan doğrulayın.

**Yerel kısıt şu durumlarda sürer:** Team, Enterprise ve eski (6 Ekim öncesi kurulmuş) görevler. Güncel durum için yardım merkezindeki duyuruya bakın. Yerel çalışan görevler **sizin makinenizde çalışır**, Anthropic'in sunucularında değil:

> **Bilgisayar kapalıysa veya uyuyorsa, yerel zamanlanmış görev çalışmaz.**

Yerel görevlerin güvenilir çalışması için:

- **Bilgisayarın güç ayarlarını değiştirin**: "uyuma" süresini çok uzun yapın veya "hiçbir zaman uyuma" seçin
- **Claude Desktop açık kalmalı**: kapalıysa görev tetiklenmez
- **İnternet bağlantısı kesintisiz olmalı** (connector çağrıları için)

Raporu Pazartesi sabahına yerel olarak zamanladıysanız ve bilgisayar o gece kapandıysa, rapor hazır olmaz. Bu yüzden Team ve Enterprise'ta kritik bir raporu yerel göreve bağlamadan önce küçük bir deneme yapın.

## Mobil Entegrasyon

Zamanlanmış görevler mobil ve web Cowork betasında da var (Pro, Max, Team; Enterprise'ta yönetici açtıysa), yani telefondan hem izleyebilir hem kurabilirsiniz. Daha önce Dispatch kurduysanız ([Claude Mobil](/wiki/araclar/claude-mobil/)) (yeni kullanıcılara kapalı), zamanlanmış görev çıktıları Dispatch konuşmanıza da düşer. Yani:

- Pazartesi sabahı 08:00'da rapor üretilir
- Rapor workspace klasörüne kaydedilir
- Aynı anda telefonunuza özet gelir

Sonuç: masaya oturduğunuzda rapor hazırdır, siz de telefonunuzdan haberdar olmuşsunuzdur.

## Neden Önemli?

Zamanlanmış görevler, **"Claude bensiz çalışıyor"** kavramının giriş noktasıdır. Bu, meşgul bir profesyonel için en yüksek kaldıraçlı fikirdir.

Pratik egzersiz: **"Haftada manuel yaptığım 2-3 tekrar eden iş hangileri?"** sorusuyla başlayın. Bunlardan birini Scheduled Task'e dönüştürün. Bir sonraki hafta iş kendi kendine biter.

ROI anlık ve görünürdür. Bu özelliği bir kez deneyimleyince başka tekrar eden işler için de kurmaya başlarsınız.

## Departmanlara Göre En İyi Adaylar

Hangi iş, hangi departmanda otomasyona uygundur?

| Departman | Otomasyon adayı |
|---|---|
| **Operasyon** | Haftalık durum raporu, tedarikçi takip listesi |
| **Finans** | Ay sonu kapanış hatırlatıcısı, vade bazlı ödeme listesi |
| **İnsan Kaynakları** | Haftalık yeni başvuru özeti, açık pozisyon durum tablosu |
| **Satış** | Haftalık pipeline özeti, takip hatırlatmaları |
| **İdari İşler** | Günlük yönetici brifingi, takvim hazırlığı |
| **Pazarlama** | Rakip içerik haftalık özeti, kampanya performans raporu |
| **İhracat** | Günlük kur ve emtia fiyatları brifingi |

Her departmanda en az bir zamanlanmış görev kurulması, programın doğal bir parçasıdır.

## Pratik Başlangıç Önerisi

İlk zamanlanmış görevinizi şöyle seçin:

1. **Haftada en az bir kez yapıyor musunuz?** Evet → aday
2. **Adımları öngörülebilir mi?** (Aynı kaynaktan aynı formatta veri) Evet → aday
3. **Çıktısı belirli bir belge veya liste mi?** Evet → aday
4. **Manuel yapmak 15 dakikadan fazla sürüyor mu?** Evet → aday

Dördü de evetse, o iş Scheduled Task'e uygundur. Kurun, bir hafta deneyin, gözden geçirin.

## İleri Kalıp: Kendini Hazırlayan Tekrarlayan Review

Zamanlanmış görevin en güçlü kullanımı tek bir raporu otomatikleştirmek değil, **kendini hazırlayan ve zamanla kendini iyileştiren bir review döngüsü** kurmaktır. Bu kalıp her tekrar eden incelemeye uyar: haftalık satış pipeline'ı, aylık finans kapanışı, pazarlama metrik review'ı, yönetim kurulu özeti.

Dört adımlı döngü:

**1. Bir "hazırlık skill'i" (prep skill) yazın.** Hangi verinin nereden çekileceğini, hangi formatta taslak hazırlanacağını **bir kez** tarif edin, Claude'dan bunu bir [skill](/wiki/yetenekler/skills/) olarak paketlemesini isteyin:

> *"Haftalık metrik review'ımı hazırlayan bir skill kur: şu kaynaklardan şu verileri çek, şu formatta bir taslak üret. Bunu skill olarak yaz."*

**2. Hazırlık adımını zamanlayın.** Skill'in sadece **veri toplama ve taslak** kısmını otomatiğe alın, yorumu değil:

> *"/schedule Her Pazar 17:00'de haftalık review skill'imin hazırlık adımını çalıştır, taslağı workspace/review/ altına kaydet."*

**3. Review'ı siz yapın.** Pazartesi masaya oturduğunuzda veriler ve taslak hazır. Siz **odağı, anlatıyı ve dışarı çıkacak mesajı** belirlersiniz. Karar insanda kalır.

> **Claude rakamları çeker, kararı siz verirsiniz: odak ne, review ne diyor, ne yayınlanıyor.**

**4. Öğrenileni skill'e geri yazın.** Her döngü sonunda:

> *"Bu hafta bir sonraki sefer için skill'e eklenmesi gereken ne öğrendik?"*

Skill her hafta biraz daha akıllanır. Bu, otomasyonun veri toplama yükünü üstlendiği, profesyonelin yalnızca yargı ve anlatıya odaklandığı **kendini iyileştiren bir iş akışıdır**.

## İlgili Sayfalar

- [Cowork Modu](/wiki/araclar/cowork-modu/): Scheduled Tasks'in yaşadığı yer
- [Claude Mobil](/wiki/araclar/claude-mobil/): Zamanlanmış çıktıları telefonda almak, mobil Cowork ve Dispatch
- [Claude Desktop](/wiki/araclar/claude-desktop/): Görevlerin çalıştığı ortam
- [Claude'un Sınırları](/wiki/temeller/sinirlamalar/): Claude'un genel sınırları
- [Cowork ve sohbet tek Claude oldu](/haberler/2026-09-16-cowork-ve-sohbet-tek-claude-oldu/): Cowork'ün sohbetle birleşmesi ve web ile mobilde yayılımı

