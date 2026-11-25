---
title: "Scheduled Tasks: Zamanlanmış Otomasyonlar"
seoTitle: "Claude Zamanlanmış Görevler (Scheduled Tasks)"
description: "Cowork'ün Scheduled Tasks özelliği, tekrar eden görevleri siz başlatmadan çalıştırır: günlük brifing, haftalık rapor, aylık özet. Bulut ve yerel fark."
tags:
  - araclar
  - scheduled-tasks
  - otomasyon
  - cowork
lastUpdated: "2026-11-26"
---

Cowork, belirli aralıklarla otomatik çalışan görevler kurmanıza izin verir. Bir kere kurarsınız, sonra dokunmanız gerekmez.

Her Pazartesi yazdığınız aynı rapor, her sabah yaptığınız aynı e-posta kontrolü, her ay başında hazırladığınız aynı özet Claude'un kendi başına yapabileceği işlerdir. Zaman kazancı en çok bu tekrar eden işlerde çıkar.

## Ne Zamanlanabilir?

Kullanım örnekleri:

- Günlük brifing: E-postayı, Slack'i, takvimi kontrol et, öncelikli sabah gündemini üret. Her sabah 08:00'da hazır olur (yerel görevde workspace klasörüne düşer). **Süre:** elle 30-45 dk, Claude ile okuma yaklaşık 5 dk. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*
- Haftalık rapor: Operasyon verilerini topla, durum raporu hazırla. Her Pazartesi ekip toplantısından önce hazır. Kurgusal bir örnek: Karadeniz Gıda'nın operasyon müdürü, her Pazartesi 08:00'de önceki haftanın sevkiyat gecikmelerini ve tedarikçi teslim durumunu tek sayfada bulur. **Süre:** elle 1-2 saat, Claude ile 15-20 dk kontrol. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*
- Aylık belge: Tekrar eden şablonu üret, güncel veriyle doldur. Her ayın 1'inde hazırlanır.
- Tekrar eden hatırlatıcılar: Proje yönetim aracından gecikmiş görevleri çek, hatırlatma listesi üret. Her Cuma öğleden sonra.
- Veri çekme işlemleri: Bağlı analitik araçlardan son metrikleri al, özet formatla. Günlük veya haftalık.

## Zamanlanmış Görev Nasıl Oluşturulur?

İki yolu var.

### Yol 1: Konuşmada `/schedule` Komutu

Cowork'te herhangi bir konuşmada `/schedule` yazın ve hangi otomasyonu istediğinizi anlatın. Claude sizi şu aşamalardan geçirir:

1. Görevin ne yapacağını netleştirir (gerekli parametreler, veri kaynağı, çıktı formatı)
2. Sıklığı belirler (saatlik, günlük, haftalık, aylık veya özel)
3. Çıktıyı nereye kaydedeceğini teyit eder
4. Programı aktifleştirir

**Süre:** görev kurulumu 5-10 dk. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).* Bir sonraki tetiklenme zamanında otomatik çalışır.

### Yol 2: Cowork Arayüzünden

Daha görsel bir kurulum isterseniz Settings → Scheduled Tasks menüsünden mevcut görevleri yönetir, yenilerini oluşturursunuz.

## Nerede Çalışır: Bulut mu, Bilgisayarınız mı?

6 Ekim 2026'dan itibaren Pro, Max ve Ultra'da yeni Cowork görevleri bulutta çalışıyor; bilgisayarın açık kalması gerekmiyor (genel anlatım: [Cowork Modu](/wiki/araclar/cowork-modu/#hangi-planda-nerede-çalışır)). Zamanlanmış görev için önemli sınır şu: bulutta kurulan zamanlanmış görev yerel klasör ve yerel connector kullanamaz. Görev veriyi bulut connector'larından (Drive, Gmail, Slack, CRM gibi) çekmeli, çıktıyı da oraya ya da görevin kendi çıktısına bırakmalıdır. Görevlerinizin hangi modda çalıştığını ayarlardan doğrulayın.

Yerel kısıt Team, Enterprise ve yerel klasör kullanan eski (6 Ekim öncesi kurulmuş) görevlerde sürer; bu eski görevler yerelde çalışmaya devam eder. Güncel durum için yardım merkezindeki duyuruya bakın. Yerel görevler Anthropic'in sunucularında değil, sizin makinenizde çalışır:

> Bilgisayar kapalıysa ya da uyuyorsa yerel zamanlanmış görev çalışmaz.

Yerel görevlerin güvenilir çalışması için:

- Bilgisayarın güç ayarlarını değiştirin: "uyuma" süresini çok uzun yapın ya da "hiçbir zaman uyuma" seçin
- Claude Desktop açık kalmalı, kapalıysa görev tetiklenmez
- İnternet bağlantısı kesintisiz olmalı (connector çağrıları için)

Raporu Pazartesi sabahına yerel olarak zamanladıysanız ve bilgisayar o gece kapandıysa, rapor hazır olmaz. Bu yüzden Team ve Enterprise'ta kritik bir raporu yerel göreve bağlamadan önce küçük bir deneme yapın.

## Mobil Entegrasyon

Zamanlanmış görevler mobil ve web Cowork betasında da var (Pro, Max, Ultra, Team; Enterprise'ta yönetici açtıysa), yani telefondan hem izleyebilir hem kurabilirsiniz ([Claude Mobil](/wiki/araclar/claude-mobil/)). Örneğin:

- Pazartesi sabahı 08:00'da rapor üretilir
- Rapor bulut görevinde ya da bağlı Drive klasöründe hazır olur
- Telefonunuzdan görevin bittiğini görüp özete bakarsınız

Masaya oturduğunuzda rapor hazırdır. Eski Dispatch'i kullanan hesaplarda görev çıktıları Dispatch konuşmasına da düşer; Dispatch yeni kullanıcılara kapalıdır.

## Neden Önemli?

Zamanlanmış görev, Claude'un siz yokken çalıştığı ilk yerdir ve meşgul biri için en çok zaman kazandıran özelliklerden biridir.

Önce kendinize şunu sorun: "Haftada elle yaptığım 2-3 tekrar eden iş hangileri?" Bunlardan birini Scheduled Task'e çevirin; ertesi hafta iş kendi kendine biter. Kazancı hemen görürsünüz, sonra başka tekrar eden işleri de kurmak istersiniz.

## Departmanlara Göre En İyi Adaylar

Departmana göre otomasyona uygun işler:

| Departman | Otomasyon adayı |
|---|---|
| Operasyon | Haftalık durum raporu, tedarikçi takip listesi |
| Finans | Ay sonu kapanış hatırlatıcısı, vade bazlı ödeme listesi |
| İnsan Kaynakları | Haftalık yeni başvuru özeti, açık pozisyon durum tablosu |
| Satış | Haftalık pipeline özeti, takip hatırlatmaları |
| İdari İşler | Günlük yönetici brifingi, takvim hazırlığı |
| Pazarlama | Rakip içerik haftalık özeti, kampanya performans raporu |
| İhracat | Günlük kur ve emtia fiyatları brifingi |

Eğitim programında her departman için en az bir zamanlanmış görev kurulur.

## Pratik Başlangıç Önerisi

İlk zamanlanmış görevinizi şöyle seçin:

1. Haftada en az bir kez yapıyor musunuz? Evet ise aday
2. Adımları öngörülebilir mi (aynı kaynaktan aynı formatta veri)? Evet ise aday
3. Çıktısı belirli bir belge ya da liste mi? Evet ise aday
4. Elle yapmak 15 dakikadan fazla sürüyor mu? Evet ise aday

Dördü de evetse o iş Scheduled Task'e uygundur. Kurun, bir hafta deneyin, gözden geçirin.

## İleri Kalıp: Kendini Hazırlayan Tekrarlayan Review

Zamanlanmış görevi tek bir raporu otomatikleştirmekten öteye taşıyıp kendini hazırlayan ve zamanla iyileşen bir review döngüsü kurabilirsiniz. Bu kalıp her tekrar eden incelemeye uyar: haftalık satış pipeline'ı, aylık finans kapanışı, pazarlama metrik review'ı, yönetim kurulu özeti.

Dört adımlı döngü:

1. Bir "hazırlık skill'i" (prep skill) yazın. Hangi verinin nereden çekileceğini ve hangi formatta taslak hazırlanacağını bir kez tarif edin, Claude'dan bunu bir [skill](/wiki/yetenekler/skills/) olarak paketlemesini isteyin:

> *"Haftalık metrik review'ımı hazırlayan bir skill kur: şu kaynaklardan şu verileri çek, şu formatta bir taslak üret. Bunu skill olarak yaz."*

2. Hazırlık adımını zamanlayın. Skill'in yalnız veri toplama ve taslak kısmını otomatiğe alın, yorumu siz yapın:

> *"/schedule Her Pazar 17:00'de haftalık review skill'imin hazırlık adımını çalıştır, taslağı Drive'daki Review klasörüne kaydet."* (Görev yerelde çalışıyorsa bilgisayarınızdaki bir klasör de olur.)

3. Review'ı siz yapın. Pazartesi masaya oturduğunuzda veriler ve taslak hazır. Odağı, anlatıyı ve dışarı çıkacak mesajı siz belirlersiniz; Claude rakamları çeker, kararı siz verirsiniz.

4. Öğrenileni skill'e geri yazın. Her döngü sonunda:

> *"Bu hafta bir sonraki sefer için skill'e eklenmesi gereken ne öğrendik?"*

Skill her hafta biraz daha iyileşir. Veri toplamayı otomasyon üstlenir, siz yalnızca yargıyı ve anlatıyı yaparsınız.

## İlgili Sayfalar

- [Cowork Modu](/wiki/araclar/cowork-modu/): Scheduled Tasks'in yaşadığı yer
- [Claude Mobil](/wiki/araclar/claude-mobil/): Zamanlanmış çıktıları telefonda almak, mobil Cowork ve Dispatch
- [Claude Desktop](/wiki/araclar/claude-desktop/): Görevlerin çalıştığı ortam
- [Claude'un Sınırları](/wiki/temeller/sinirlamalar/): Claude'un genel sınırları
- [Cowork ve sohbet tek Claude oldu](/haberler/2026-09-16-cowork-ve-sohbet-tek-claude-oldu/): Cowork'ün sohbetle birleşmesi ve web ile mobilde yayılımı

