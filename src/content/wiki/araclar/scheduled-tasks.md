---
title: Scheduled Tasks — Zamanlanmış Otomasyonlar
description: "Cowork'ün Scheduled Tasks özelliği, tekrar eden görevleri siz başlatmadan çalıştırır. Günlük brifing, haftalık rapor, aylık özet — otomatik."
tags:
  - araclar
  - scheduled-tasks
  - otomasyon
  - cowork
---

**Cowork, belirli aralıklarla otomatik çalışan görevler oluşturmanıza izin verir.** Bir kere kurarsınız; siz bir daha dokunmazsınız.

Her Pazartesi yazdığınız aynı rapor, her sabah yaptığınız aynı e-posta kontrolü, her ay başında hazırladığınız aynı özet — bunlar Claude'un otonom çalıştırabileceği işlerdir. Zamana programında çalışanın gördüğü en büyük zaman kazancıdır.

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

Eğer [Dispatch](dispatch/) kurduysanız, zamanlanmış görev çıktıları Dispatch konuşmanıza da düşer. Yani:

- Pazartesi sabahı 08:00'da rapor üretilir
- Rapor workspace klasörüne kaydedilir
- Aynı anda telefonunuza özet gelir

Sonuç: masaya oturduğunuzda rapor hazır, telefon açık olsa bile bilgilendirilmişsiniz.

## Zamana'da Neden Önemli?

Zamanlanmış görevler, **"Claude bensiz çalışıyor"** kavramının giriş noktasıdır. Bu, meşgul bir profesyonel için en yüksek kaldıraçlı fikirdir.

Zamana oturumlarında şu adım standarttır: **"Haftada manuel yaptığın 2-3 tekrar eden işi söyle."** Çalışan söyler. Birini Scheduled Task'e dönüştürürüz. Bir sonraki hafta iş kendi kendine biter.

ROI anlık ve görünürdür. Çalışan bu özelliği bir kez deneyimleyince başka tekrar eden işler için de kurmaya başlar.

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

## İlgili Sayfalar

- [Cowork Modu](cowork-modu/) — Scheduled Tasks'in yaşadığı yer
- [Dispatch](dispatch/) — Zamanlanmış çıktıları telefonda almak
- [Claude Desktop](claude-desktop/) — Görevlerin çalıştığı ortam
- [Claude'un Sınırları](../temeller/sinirlamalar/) — "Bilgisayar kapalıysa çalışmaz" sınırı

