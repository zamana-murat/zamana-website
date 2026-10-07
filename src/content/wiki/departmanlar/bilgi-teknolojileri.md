---
title: "Bilgi Teknolojileri: Claude Uygulamaları"
seoTitle: "BT Ekibinde Claude: Script, Runbook, Post-mortem ve KVKK Dokümanı"
description: "IT ekibi için Claude: teknik dokümantasyon, incident raporu, PowerShell script'leri, KVKK teknik uyum. Kod yazmayan sysadmin için bile değerli."
tags:
  - departmanlar
  - it
  - bilgi-teknolojileri
  - powershell
  - kvkk
lastUpdated: "2026-10-06"
---

IT departmanı Claude konusunda iki yeni bakış açısıyla tanışmalıdır:

1. **Claude sadece bir kod aracı değildir.** IT için değerinin çoğu dokümantasyon, iletişim ve yapılandırılmış düşünmededir: IT ekibinin her gün yaptığı, kod olmayan işler.
2. **Claude kod yazmayan personelin basit script'ler, sorgular ve otomasyonlar yazmasına yardım eder.** İhtiyacını sade dilde anlatabilen bir sysadmin kısa sürede çalışan bir PowerShell script'i alır. Bu, geliştiricilerin yerini almaz; **IT operasyon personelini engellerinden kurtarır.**

## Claude'un Çözdüğü Temel Sıkıntılar

- Teknik dokümantasyon her zaman geride ve kötü yazılmış
- Teknik problemleri teknik olmayan yönetime iletmek zor
- Incident raporları ve post-mortem'ler zaman alıcı
- IT politika ve prosedürleri ihmal edilmiş
- Basit otomasyon ve scripting talepleri biriker (geliştiriciler meşgul)
- Güvenlik farkındalık eğitim materyali jenerik ve etkisiz

## Bölüm 1: Dokümantasyon

### Teknik Dokümantasyon Akışı

Mühendis sistemi sade dille anlatır; Claude net ve sürdürülebilir bir dokümantasyon yapılandırır: mimari, bağımlılıklar, yapılandırma, bilinen sorunlar.

### Kullanıcı Rehberleri ve Kılavuzları

Teknik olarak doğru ama erişilebilir bir dil, sanki **sistemi hiç görmemiş biri** için yazılmış gibi.

### Sistem Mimarisi Dokümantasyonu

Kişilerin kafasındaki bilgiyi, personel değişikliklerinden etkilenmeyen yazılı açıklamalara dönüştürmek.

### Runbook Oluşturma

Tekrar eden görevler için adım adım operasyonel prosedürler. **On-call personel asla doğaçlama yapmak zorunda kalmamalı.**

### Basit Scripting Yardımı

Sysadmin neyi otomatize etmek istediğini tarif eder, Claude çalışan bir PowerShell, Bash veya Python script'i üretir. **Script'i çalıştırmadan önce siz doğrular ve test edersiniz, körü körüne çalıştırmazsınız.**

**Zamana notu:** eğitim materyalimizde bu tek yetenek IT ekibine haftada saatler kazandıran kalem olarak geçer; örnek aşağıda (Gerçek Örnek).

> **Script çalıştırma notu:** Claude'un kod çalıştırma ve dosya oluşturma özelliği Claude'un kendi ortamında çalışır; Team ve Enterprise'ta ağ erişimi varsayılan kapalıdır. Yani 50 sunucunuza bağlanan script'i Claude değil, siz kendi ağınızda çalıştırırsınız. Pratik kural: "İhtiyacınızı anlatın, Claude script'i yazar; siz sonucu doğrularsınız." Kod yazmayı öğrenmeniz gerekmez, sonucun işe yaradığını doğrularsınız.

## Bölüm 2: İletişim ve Raporlama

**Teknik → teknik olmayan çeviri.** Teknik gerçekliği Claude'a verirsiniz; karşılığında bilgisayar mühendisliği bilgisi gerektirmeyen ama doğru bir yönetim düzeyi açıklama alırsınız.

**Incident raporları.** Yapılandırılmış, net, suçlamasız post-mortem formatı: ne oldu, ne zaman, etki, kök neden, çözüm, önleme. **Süre:** elle 2-3 saat, Claude ile 30-45 dakika (kontrol dahil). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

**IT proje durum raporları.** Mühendislik ekibi için değil, **zaman çizelgesi, maliyet ve risklerle ilgilenen iş paydaşları** için yazılmış.

**Change request dokümantasyonu.** Net iş etkisi, teknik kapsam, geri alma planı, risk değerlendirmesi.

**Güvenlik farkındalık iletişimi.** Oltalama farkındalık güncellemeleri, güvenlik politikası hatırlatmaları, ihlal bildirim taslakları: net ve eyleme geçirilebilir, **kimsenin okumadığı standart metin değil.**

## Bölüm 3: Analiz ve Planlama

**Vendor teknik değerlendirmesi.** Tutarlı kriterlerle RFP ve değerlendirme çerçeveleri yapılandırılır; vendor'lar aynı boyutlarda karşılaştırılır.

**Teknoloji karar memoları.** Seçenekler analiz edilir, riskler adlandırılır, öneri yapılır. Memo, karar vermesi gereken CTO ya da CFO için yazılır, tez okumak isteyen biri için değil.

**IT bütçe anlatıları.** IT yatırımını iş diliyle açıklama, "yeni firewall lazım" değil, "mevcut güvenlik duruşumuz X riskine maruz bırakıyor; bu yatırım Y'ye indiriyor."

**Güvenlik politika dokümantasyonu.** Net, uygulanabilir, insan diliyle yazılmış politikalar. İnsanlar ancak anladıkları politikaya uyar.

### KVKK Teknik Etki Dokümantasyonu

IT, kişisel veri işleyen bir sistem dağıttığında veya değiştirdiğinde **KVKK uyumu için veri akışlarını, depolama konumlarını, erişim kontrollerini ve saklama sürelerini dokümante etmek zorundadır**.

Claude, IT personelinin teknik bilgisinden bu veri işleme faaliyet kayıtlarının **taslağını** üretmesine yardım eder; kayıtlar, VERBİS'e girilen bilgilerin dayandığı veri envanteriyle aynı alanları (veri kategorisi, amaç, saklama süresi, aktarım) kapsayacak biçimde yapılandırılır. VERBİS kaydını ve güncellemesini Claude yapmaz; hukuk ekibi ya da KVKK uyum sorumlusu inceler ve kaydı kendisi yapar. Son kontrol onlarındır.

### Help Desk Ticket Kalitesi

Birçok IT ekibi **kötü yazılmış ticket'lara** saat kaybeder: yetersiz detay, eksik adımlar, belirsiz öncelik.

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
- `docx`: politikalar, runbook'lar, raporlar
- `pdf`: kurumsal dokümantasyon
- **Kod çalıştırma** (code execution): script mantığını küçük örnek veriyle denemek; gerçek sunucularda test sizin ortamınızda yapılır
- `operations:runbook`: adım adım operasyon prosedürleri

**Connector'lar:**
1. **Slack / Teams**: olay iletişimi
2. **Microsoft 365 / Google Workspace**: dokümantasyon
3. **Linear / Jira** (opsiyonel): ticket sistemi
4. **Web search**: vendor araştırma, güvenlik haberleri
5. **Claude in Chrome** (opsiyonel): API'si olmayan iç araçlarda sayfa okuma ve form doldurma. 26 Ağustos 2026'dan beri tüm ücretli planlarda genel kullanımda, Enterprise yöneticisi onaylı alan adlarıyla sınırlayabilir ([haber](/haberler/2026-08-26-claude-in-chrome-genel-kullanima-acildi/)).
6. **Claude Marketplace** (opsiyonel): IT aracınız için hazır connector/eklenti varsa önce oraya bakın ([haber](/haberler/2026-09-23-claude-marketplace/)). Kurmadan önce güvenlik ekibiniz inceler.

## İş Akışı Yeniden Tasarımı Adayları

- **Dokümantasyon kültürü değişimi**: dokümantasyonu backlog değil alışkanlık yapmak
- **Incident yönetim süreci**: olay → tespit → kök neden → rapor → önleme
- **Change request iş akışı**: her değişiklik yapılandırılmış dokümantasyonla
- **KVKK teknik uyum dokümantasyonu**: sistem değişikliğinde veri envanteri taslağının güncellenmesi, VERBİS değişikliği gerekiyorsa hukuk/uyum sorumlusuna iletilmesi

## Gerçek Örnek: Script Yardımı

Sysadmin her Pazartesi sabahı 50 sunucunun disk kullanım durumunu elle kontrol ediyor. Claude'a anlatır:

> *"Bir PowerShell script'i istiyorum: aşağıdaki IP listesindeki 50 sunucuya bağlanıp C: diskinin kullanım yüzdesini çekecek, %80 üstündeyse kırmızı işaretleyecek. Sonucu Excel'e yazacak, alarm kriterlerine uyan satırları vurgulayacak."*

**Adım 1:** Claude script'i yazar (yaklaşık 30 saniye).

**Adım 2:** Sysadmin script'i gözden geçirir, PowerShell'i az da olsa bilir, bariz hataları tespit eder.

**Adım 3:** Test ortamında 3 sunucuda çalıştırır, çalışıyor.

**Adım 4:** Gerçek ortamda çalıştırır, Excel raporu üretilir.

**Adım 5:** Script'i Windows Zamanlanmış Görev olarak kurar; her Pazartesi sabah 08:00'da otomatik çalışır ve raporu e-postayla gönderir.

**Süre:** script bir kereye mahsus 45-60 dakika (yazım, gözden geçirme ve test dahil). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).* Haftalık elle kontrol 60-90 dakika sürüyordu (50 sunucu varsayımıyla); bundan sonra rapor kendiliğinden gelir. Bu kontrol her hafta yapılıyorsa yılda kabaca 50-80 saat, script'in bakımı hariç.

## Sık Hatalar

Eğitimlerde BT ekiplerinin en çok takıldığı üç nokta (Zamana eğitim materyali):

- **Script'i körü körüne çalıştırmak.** Claude'un ürettiği script test edilmeden canlı ortama girmez; özellikle silme ve değiştirme komutlarında.
- **Var olmayan komut ya da kütüphane.** Claude olmayan bir modül, parametre ya da fonksiyon önerebilir. Derleme ve çalıştırma testi şarttır.
- **Hassas yapılandırma.** Şifre, API anahtarı ve iç IP adreslerini prompt'a yazmadan önce temizleyin. Şirket yapılandırması işliyorsanız Team ya da Enterprise öneriyoruz (merkezi kontrol, ticari veri ayarları); zorunlu değil.

## İlgili Sayfalar

- [Cowork](/wiki/araclar/cowork-modu/): dosya ve görev otomasyonu
- [Scheduled Tasks](/wiki/araclar/scheduled-tasks/): Script'lerin otomasyonu
- [Computer Use](/wiki/yetenekler/computer-use/): API olmayan sistemlerde (research preview, yalnız Pro ve Max; Team ve Enterprise'ta yok)
- [Office ve Chrome Eklentileri](/wiki/araclar/office-ve-chrome/): Tarayıcı ve Microsoft 365 içinde Claude
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): KVKK genel çerçevesi
- [KVKK m.9 Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/): Claude'a kişisel veri girmeden önce
- [Kodlama: yazılım ekiplerinde Claude](/kurumsal/kodlama/): geliştirici ekipler için kurumsal sayfa
- [Kurumlar için Claude Code](/kurumsal/claude-code/): merkezi yönetim, SSO, politika
- [ROI Hesaplayıcı](/wiki/temeller/roi-hesaplayici/): kendi zaman kazancınızı hesaplayın

