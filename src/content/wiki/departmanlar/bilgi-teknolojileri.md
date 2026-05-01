---
title: Bilgi Teknolojileri — Claude Uygulamaları
description: "IT ekibi için Claude — teknik dokümantasyon, incident rapor, PowerShell script'leri, KVKK teknik uyum. Kod yazmayan sysadmin için bile değerli."
tags:
  - departmanlar
  - it
  - bilgi-teknolojileri
  - powershell
  - kvkk
---

IT departmanı Claude konusunda iki yeni bakış açısıyla tanışmalıdır:

1. **Claude sadece bir kod aracı değildir.** IT için değerinin çoğu dokümantasyon, iletişim ve yapılandırılmış düşünmedir — IT insanlarının her gün yaptığı kod olmayan iş.
2. **Claude kod yazmayan personelin basit script'ler, sorgular ve otomasyonlar yazmasına yardım eder.** İhtiyacını sade dilde anlatabilen bir sysadmin, 60 saniye içinde çalışan bir PowerShell script'i alır. Bu geliştiricilerin yerini almaz — **IT operasyon personelini engellerinden kurtarır.**

## Claude'un Çözdüğü Temel Sıkıntılar

- Teknik dokümantasyon her zaman geride ve kötü yazılmış
- Teknik problemleri teknik olmayan yönetime iletmek zor
- Incident raporları ve post-mortem'ler zaman alıcı
- IT politika ve prosedürleri ihmal edilmiş
- Basit otomasyon ve scripting talepleri biriker (geliştiriciler meşgul)
- Güvenlik farkındalık eğitim materyali jenerik ve etkisiz

## Bölüm 1 — Dokümantasyon

### Teknik Dokümantasyon Akışı

Mühendis sistemi sade dille anlatır, Claude net ve sürdürülebilir dokümantasyon yapılandırır — mimari, bağımlılıklar, yapılandırma, bilinen sorunlar.

### Kullanıcı Rehberleri ve Kılavuzları

Teknik doğrulukla erişilebilir dil — **sistemi hiç görmemiş biri** için yazılmış gibi.

### Sistem Mimarisi Dokümantasyonu

Kabile bilgisini personel değişikliklerinden sağ çıkan yazılı açıklamalara dönüştürmek.

### Runbook Oluşturma

Tekrar eden görevler için adım adım operasyonel prosedürler — **on-call personel asla doğaçlama yapmak zorunda kalmamalı**.

### Basit Scripting Yardımı

Sysadmin neyi otomatize etmek istediğini tarif eder, Claude çalışan bir PowerShell, Bash veya Python script'i üretir. **Çalışan doğrular ve test eder — körü körüne çalıştırmaz.**

Bu tek yetenek IT'ye haftada saatler kazandırır.

> **Bash tool exception:** Cowork'teki Bash tool script çalıştırmaya izin verir. Zamana'nın kural çerçevesi: "İhtiyacını anlat, Claude script'i yazar; sen sonucu doğrularsın." Çalışan kod öğrenmez — sonucun işe yaradığını doğrular.

## Bölüm 2 — İletişim ve Raporlama

**Teknik → teknik olmayan çeviri.** Teknik gerçekliği Claude'a verir, CS diploması gerektirmeyen ama doğru olan yönetim düzeyi açıklama alırsınız.

**Incident raporları.** Yapılandırılmış, net, suçlamasız post-mortem format — ne oldu, ne zaman, etki, kök neden, çözüm, önleme.

**IT proje durum raporları.** Mühendislik ekibi için değil, **zaman çizelgesi, maliyet ve risklerle ilgilenen iş paydaşları** için yazılmış.

**Change request dokümantasyonu.** Net iş etkisi, teknik kapsam, geri alma planı, risk değerlendirmesi.

**Güvenlik farkındalık iletişimi.** Oltalama farkındalık güncellemeleri, güvenlik politikası hatırlatmaları, ihlal bildirim taslakları — net ve eyleme geçirilebilir. **Kimsenin okumadığı standart metin değil.**

## Bölüm 3 — Analiz ve Planlama

**Vendor teknik değerlendirmesi.** Tutarlı kriterlerle RFP ve değerlendirme çerçeveleri yapılandırma — aynı boyutlarda vendor karşılaştırması.

**Teknoloji karar memoları.** Seçenekler analiz edilir, riskler adlandırılır, öneri yapılır — karar vermesi gereken CTO veya CFO için yazılmış, tez okumak isteyen biri için değil.

**IT bütçe anlatıları.** IT yatırımını iş diliyle açıklama — "yeni firewall lazım" değil, "mevcut güvenlik duruşumuz X riskine maruz bırakıyor; bu yatırım Y'ye indiriyor."

**Güvenlik politika dokümantasyonu.** Net, uygulanabilir, insan dili — insanların anladığı politikalar, insanların uyduğu politikalardır.

### KVKK Teknik Etki Dokümantasyonu

IT bir sistem dağıttığında veya değiştirdiğinde (kişisel veri işleyen), **KVKK uyumu için veri akışlarını, depolama konumlarını, erişim kontrollerini ve saklama sürelerini dokümante etmek zorundadır**.

Claude IT personeline bu veri işleme faaliyet kayıtlarını (**VERBİS-uyumlu**) teknik bilgisinden üretmeye yardım eder — yapılandırılmış, tam ve DPO ya da hukuk ekibinin inceleyebileceği durumda.

### Help Desk Ticket Kalitesi

Birçok IT ekibi **kötü yazılmış ticket'lara** saat kaybeder — yetersiz detay, eksik adımlar, belirsiz öncelik.

Claude yardımcı olur: "iyi ticket nasıl yazılır" rehberi + yaygın talep tipleri için ticket şablonları. IT'nin hızlı çözmek için ihtiyacı olan bilgiyi içeren şablonlar.

## Prompt Kütüphanesi Konuları

- Teknik dokümantasyon şablonu
- Kullanıcı rehberi yapısı
- Runbook şablonu
- PowerShell / Bash / Python script üretici
- Incident post-mortem formatı
- IT proje durum raporu
- Yönetim düzeyi teknik açıklama
- Vendor değerlendirme çerçevesi
- Teknoloji karar memosu
- IT güvenlik politika şablonu
- Change request dokümantasyonu
- Güvenlik farkındalık iletişimi
- KVKK veri işleme faaliyet kaydı
- Talep tipine göre help desk ticket şablonu

## Kullanılacak Skills ve Connector'lar

**Skills:**
- `docx` — politikalar, runbook'lar, raporlar
- `pdf` — kurumsal dokümantasyon
- **Bash tool** (Cowork'te) — script yazım ve test
- `operations:runbook` — adım adım operasyon prosedürleri

**Connector'lar:**
1. **Slack / Teams** — olay iletişimi
2. **Microsoft 365 / Google Workspace** — dokümantasyon
3. **Linear / Jira** (opsiyonel) — ticket sistemi
4. **Web search** — vendor araştırma, güvenlik haberleri

## İş Akışı Yeniden Tasarımı Adayları

- **Dokümantasyon kültürü değişimi** — dokümantasyonu backlog değil alışkanlık yapmak
- **Incident yönetim süreci** — olay → tespit → kök neden → rapor → önleme
- **Change request iş akışı** — her değişiklik yapılandırılmış dokümantasyonla
- **KVKK teknik uyum dokümantasyonu** — sistem değişikliklerinde otomatik VERBİS güncellemesi

## Gerçek Örnek — Script Yardımı

Sysadmin her Pazartesi sabahı 50 sunucunun disk kullanım durumunu elle kontrol ediyor. Claude'a anlatır:

> *"Bir PowerShell script'i istiyorum: aşağıdaki IP listesindeki 50 sunucuya bağlanıp C: diskinin kullanım yüzdesini çekecek, %80 üstündeyse kırmızı işaretleyecek. Sonucu Excel'e yazacak, alarm kriterlerine uyan satırları vurgulayacak."*

**Adım 1:** Claude script'i yazar (yaklaşık 30 saniye).

**Adım 2:** Sysadmin script'i gözden geçirir — PowerShell'i az da olsa bilir, bariz hataları tespit eder.

**Adım 3:** Test ortamında 3 sunucuda çalıştırır — çalışıyor.

**Adım 4:** Gerçek ortamda çalıştırır, Excel raporu üretilir.

**Adım 5:** Script'i Scheduled Task yapar — her Pazartesi sabah 08:00'da otomatik çalışır, raporu e-posta ile gönderir.

Toplam süre: 45 dakika (bir kereye mahsus). Bundan sonra her hafta sıfır dakika — rapor kendiliğinden gelir.

## İlgili Sayfalar

- [Cowork Modu](../araclar/cowork-modu/) — Bash tool ve script çalıştırma
- [Scheduled Tasks](../araclar/scheduled-tasks/) — Script'lerin otomasyonu
- [Computer Use](../yetenekler/computer-use/) — API olmayan sistemlerde
- [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) — VERBİS uyum detayları

