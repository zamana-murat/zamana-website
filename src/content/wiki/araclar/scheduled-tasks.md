---
title: Scheduled Tasks — Zamanlanmış Otomasyonlar
description: "Cowork'ün Scheduled Tasks özelliği, tekrar eden görevleri siz başlatmadan çalıştırır. Günlük brifing, haftalık rapor, aylık özet — otomatik."
tags:
  - araclar
  - scheduled-tasks
  - otomasyon
  - cowork
lastUpdated: "2026-06-03"
---

**Cowork, belirli aralıklarla otomatik çalışan görevler oluşturmanıza izin verir.** Bir kere kurarsınız; siz bir daha dokunmazsınız.

Her Pazartesi yazdığınız aynı rapor, her sabah yaptığınız aynı e-posta kontrolü, her ay başında hazırladığınız aynı özet — bunlar Claude'un otonom çalıştırabileceği işlerdir. Tipik olarak en büyük zaman kazancı buradan gelir.

## Ne Zamanlanabilir?

Gerçek kullanım örnekleri:

- **Günlük brifing:** E-postayı, Slack'i, takvimi kontrol et, öncelikli sabah gündemini üret. Her sabah 08:00'da workspace klasörüne düşer.
- **Haftalık rapor:** Operasyon verilerini topla, durum raporu hazırla. Her Pazartesi ekip toplantısından önce hazır.
- **Aylık belge:** Tekrar eden şablonu üret, güncel veriyle doldur. Her ayın 1'inde hazırlanır.
- **Tekrar eden hatırlatıcılar:** Proje yönetim aracından gecikmiş görevleri çek, hatırlatma listesi üret. Her Cuma öğleden sonra.
- **Veri çekme işlemleri:** Bağlı analitik araçlardan son metrikleri al, özet formatla. Günlük veya haftalık.

## Zamanlanmış Görev Nasıl Oluşturulur?

İki yolu vardır.

### Yol 1: Cowork Konuşmasında `/schedule` Komutu

Cowork'te herhangi bir sohbette `/schedule` yazın ve ne otomasyon istediğinizi anlatın. Claude sizi şu aşamalardan geçirir:

1. Görevin ne yapacağını netleştirir (gerekli parametreler, veri kaynağı, çıktı formatı)
2. Sıklığı belirler (saatlik, günlük, haftalık, aylık veya özel)
3. Çıktıyı nereye kaydedeceğini teyit eder
4. Programı aktifleştirir

Yaklaşık 5 dakikada bir zamanlanmış görev kurulur. Bir sonraki tetiklenme zamanında otomatik çalışır.

### Yol 2: Cowork Arayüzünden

**Settings → Scheduled Tasks** menüsünden mevcut görevleri yönetebilir, yenilerini oluşturabilirsiniz. Daha görsel bir kurulum tercih edenler için.

## Kritik Kısıt — Bilgisayar Uyanık Kalmalı

Zamanlanmış görevler **yerel olarak sizin makinenizde çalışır** — Anthropic'in sunucularında değil. Bu şu anlama gelir:

> **Bilgisayar kapalıysa veya uyuyorsa, zamanlanmış görev çalışmaz.**

Güvenilir çalışması için:

- **Bilgisayarın güç ayarlarını değiştirin** — "uyuma" süresini çok uzun yapın veya "hiçbir zaman uyuma" seçin
- **Claude Desktop açık kalmalı** — kapalıysa görev tetiklenmez
- **İnternet bağlantısı kesintisiz olmalı** (connector çağrıları için)

Önemli bir Pazartesi sabahı raporu yazıldıysa ve bilgisayar o gece kapandıysa, Pazartesi rapor orada olmaz. Bu özellik için "her zaman açık" mantığı gerekir.

## Mobil Entegrasyon

Eğer [Dispatch](/wiki/araclar/dispatch/) kurduysanız, zamanlanmış görev çıktıları Dispatch konuşmanıza da düşer. Yani:

- Pazartesi sabahı 08:00'da rapor üretilir
- Rapor workspace klasörüne kaydedilir
- Aynı anda telefonunuza özet gelir

Sonuç: masaya oturduğunuzda rapor hazır, telefon açık olsa bile bilgilendirilmişsiniz.

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

## İleri Kalıp — Kendini Hazırlayan Tekrarlayan Review

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

- [Cowork Modu](/wiki/araclar/cowork-modu/) — Scheduled Tasks'in yaşadığı yer
- [Dispatch](/wiki/araclar/dispatch/) — Zamanlanmış çıktıları telefonda almak
- [Claude Desktop](/wiki/araclar/claude-desktop/) — Görevlerin çalıştığı ortam
- [Claude'un Sınırları](/wiki/temeller/sinirlamalar/) — "Bilgisayar kapalıysa çalışmaz" sınırı

