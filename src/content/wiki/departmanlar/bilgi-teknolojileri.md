---
title: "Bilgi Teknolojileri: Claude Uygulamaları"
seoTitle: "BT Ekibinde Claude: Script, Runbook, Post-mortem"
description: "IT ekibi için Claude: teknik dokümantasyon, incident raporu, PowerShell script'leri, KVKK teknik uyum. Kod yazmayan sysadmin için bile değerli."
tags:
  - departmanlar
  - it
  - bilgi-teknolojileri
  - powershell
  - kvkk
lastUpdated: "2026-11-26"
---

IT departmanının Claude'a iki açıdan bakması gerekir:

1. Claude yalnız bir kod aracı sayılmamalı. IT için değerinin çoğu dokümantasyonda, iletişimde ve düşünceyi yapıya oturtmakta: ekibin her gün yaptığı, kod içermeyen işlerde.
2. Kod yazmayan personel de Claude'la basit script'ler, sorgular ve otomasyonlar yazabilir. İhtiyacını sade dilde anlatabilen bir sysadmin kısa sürede çalışan bir PowerShell script'i alır. Geliştiricilerin işini üstlenmez, ama IT operasyon personelinin geliştirici kuyruğunda beklemesini azaltır.

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

Teknik olarak doğru, ama sistemi hiç görmemiş biri okuyacakmış gibi erişilebilir bir dille.

### Sistem Mimarisi Dokümantasyonu

Kişilerin kafasındaki bilgiyi, personel değişikliklerinden etkilenmeyen yazılı açıklamalara dönüştürmek.

### Runbook Oluşturma

Tekrar eden görevler için adım adım operasyonel prosedürler. On-call personel gece yarısı doğaçlama yapmak zorunda kalmamalı.

### Basit Scripting Yardımı

Sysadmin neyi otomatize etmek istediğini tarif eder, Claude çalışan bir PowerShell, Bash veya Python script'i üretir. Script'i çalıştırmadan önce siz doğrular ve test edersiniz.

**Zamana notu:** eğitim materyalimizde bu tek yetenek IT ekibine haftada saatler kazandıran kalem olarak geçer; örnek aşağıda (Gerçek Örnek).

> **Script çalıştırma notu:** Claude'un kod çalıştırma ve dosya oluşturma özelliği Claude'un kendi ortamında çalışır; Team ve Enterprise'ta ağ erişimi varsayılan kapalıdır. Yani 50 sunucunuza bağlanan script'i Claude değil, siz kendi ağınızda çalıştırırsınız. Pratik kural: "İhtiyacınızı anlatın, Claude script'i yazar; siz sonucu doğrularsınız." Kod yazmayı öğrenmeniz gerekmez; sonucun işe yaradığını doğrulamanız yeter.

## Bölüm 2: İletişim ve Raporlama

**Teknikten teknik olmayana çeviri.** Teknik durumu Claude'a verirsiniz; karşılığında mühendislik bilgisi gerektirmeyen ama doğru bir yönetim düzeyi açıklama alırsınız.

**Incident raporları.** Suçlamasız post-mortem formatı: ne oldu, ne zaman, etki, kök neden, çözüm, önleme. **Süre:** elle 2-3 saat, Claude ile 30-45 dakika (kontrol dahil). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

**IT proje durum raporları.** Okuru mühendislik ekibi değil, zaman çizelgesine, maliyete ve risklere bakan iş paydaşları.

**Change request dokümantasyonu.** Net iş etkisi, teknik kapsam, geri alma planı, risk değerlendirmesi.

**Güvenlik farkındalık iletişimi.** Oltalama farkındalık güncellemeleri, güvenlik politikası hatırlatmaları, ihlal bildirim taslakları: kimsenin okumadığı standart metin yerine, ne yapılacağını söyleyen net bir metin.

## Bölüm 3: Analiz ve Planlama

**Vendor teknik değerlendirmesi.** Claude tutarlı kriterlerle RFP ve değerlendirme çerçeveleri kurar; vendor'lar aynı boyutlarda karşılaştırılır.

**Teknoloji karar memoları.** Claude seçenekleri analiz eder, riskleri adlandırır, öneri yapar. Memo karar vermesi gereken CTO ya da CFO için yazılır, tez okumak isteyen biri için değil.

**IT bütçe anlatıları.** IT yatırımını iş diliyle açıklama, "yeni firewall lazım" değil, "mevcut güvenlik duruşumuz X riskine maruz bırakıyor; bu yatırım Y'ye indiriyor."

**Güvenlik politika dokümantasyonu.** İnsan diliyle yazılmış, uygulanabilir politikalar. İnsanlar anladıkları politikaya uyar.

### KVKK Teknik Etki Dokümantasyonu

IT, kişisel veri işleyen bir sistem kurduğunda ya da değiştirdiğinde KVKK uyumu için veri akışlarını, depolama konumlarını, erişim kontrollerini ve saklama sürelerini dokümante etmek zorundadır.

Claude, IT personelinin teknik bilgisinden bu veri işleme faaliyet kayıtlarının taslağını çıkarır; kayıtlar VERBİS'e girilen bilgilerin dayandığı veri envanteriyle aynı alanları (veri kategorisi, amaç, saklama süresi, aktarım) kapsayacak biçimde yapılandırılır. VERBİS kaydını ve güncellemesini Claude yapmaz; hukuk ekibi ya da KVKK uyum sorumlusu inceler ve kaydı kendisi yapar.

### Help Desk Ticket Kalitesi

IT ekipleri kötü yazılmış ticket'lara saat kaybeder: yetersiz detay, eksik adımlar, belirsiz öncelik.

Claude bir "iyi ticket nasıl yazılır" rehberi ve yaygın talep tipleri için şablonlar hazırlar. Şablonlar, IT'nin hızlı çözmek için ihtiyaç duyduğu bilgiyi baştan ister.

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

- Dokümantasyon kültürü: dokümantasyonu backlog'a atmak yerine alışkanlık yapmak
- Incident yönetim süreci: olay → tespit → kök neden → rapor → önleme
- Change request iş akışı: her değişiklik yapılandırılmış dokümantasyonla
- KVKK teknik uyum dokümantasyonu: sistem değişikliğinde veri envanteri taslağının güncellenmesi, VERBİS değişikliği gerekiyorsa hukuk/uyum sorumlusuna iletilmesi

## Gerçek Örnek: Script Yardımı

Sysadmin her Pazartesi sabahı 50 sunucunun disk kullanım durumunu elle kontrol ediyor. Claude'a anlatır:

> *"Bir PowerShell script'i istiyorum: aşağıdaki IP listesindeki 50 sunucuya bağlanıp C: diskinin kullanım yüzdesini çekecek, %80 üstündeyse kırmızı işaretleyecek. Sonucu Excel'e yazacak, alarm kriterlerine uyan satırları vurgulayacak."*

**Adım 1:** Claude script'i yazar (yaklaşık 30 saniye).

**Adım 2:** Sysadmin script'i gözden geçirir, PowerShell'i az da olsa bilir, bariz hataları tespit eder.

**Adım 3:** Test ortamında 3 sunucuda çalıştırır, çalışıyor.

**Adım 4:** Gerçek ortamda çalıştırır, Excel raporu üretilir.

**Adım 5:** Script'i Windows Zamanlanmış Görev olarak kurar; her Pazartesi sabah 08:00'da otomatik çalışır ve raporu e-postayla gönderir.

**Süre:** elle her hafta 60-90 dakika (50 sunucu varsayımıyla), Claude ile script bir kereye mahsus 45-60 dakika (yazım, gözden geçirme ve test dahil); bundan sonra rapor kendiliğinden gelir. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).* Bu kontrol her hafta yapılıyorsa yılda kabaca 50-80 saat, script'in bakımı hariç.

## Kurumsal Güvenlik Kontrolleri

BT ekibinin Claude'u şirkete açarken sorduğu ilk sorular genelde "DLP'miz araya girebilir mi, kişisel hesapla girişi engelleyebilir miyiz, uç nokta güvenliği Cowork'ü görür mü" olur. 5 Kasım 2026'dan beri Enterprise'ta prompt hook'larıyla istemler kendi DLP aracınızdan geçer (genel kullanımda), yönetilen bilgisayarlarda Claude Desktop'a dış hesapla giriş engellenir, IP izin listesi panelden kurulur ve güvenlik merkezi ayarları Anthropic'in önerdiği yapılandırmayla karşılaştırır (bu üçü ve yönetim araçlarının çoğu beta ya da duyuruda durumu belirtilmemiş). EDR sensörünün Cowork sanal makinesinde çalışması Team'de de var. Team ve Enterprise'ta ayrıca masaüstü uzantıları (yerel [MCP](/wiki/sozluk/#mcp) sunucuları) için izin listesi açılabilir; varsayılan kapalıdır, açılınca onaylanmamış kurulu uzantılar kaldırılır ve kullanıcı yalnız onaylı listeden kurar ([MCP Güvenlik](/wiki/mcp/guvenlik/)). Tam liste: [Takım ve Admin, Enterprise Güvenlik Araçları](/wiki/temeller/takim-ve-admin/#enterprise-güvenlik-araçları-kasım-2026).

## Sık Hatalar

Eğitimlerde BT ekiplerinin en çok takıldığı üç nokta (Zamana eğitim materyali):

- **Script'i körü körüne çalıştırmak.** Claude'un ürettiği script test edilmeden canlı ortama girmez; özellikle silme ve değiştirme komutlarında.
- **Var olmayan komut ya da kütüphane.** Claude olmayan bir modül, parametre ya da fonksiyon önerebilir. Derleme ve çalıştırma testi şarttır.
- **Hassas yapılandırma.** Şifre, API anahtarı ve iç IP adreslerini prompt'a yazmadan önce temizleyin. Şirket yapılandırması işliyorsanız Team ya da Enterprise öneriyoruz (merkezi kontrol, ticari veri ayarları); zorunlu değil.

BT ekibinde güvenlik ve veri kurallarını baştan konuşun; [kurumsal yapay zeka eğitimimizde](/programlar/kurumsal/) bunu ekibinizin kendi araçlarıyla çalışıyoruz.

## İlgili Sayfalar

- [Cowork](/wiki/araclar/cowork-modu/): dosya ve görev otomasyonu
- [Scheduled Tasks](/wiki/araclar/scheduled-tasks/): Script'lerin otomasyonu
- [Computer Use](/wiki/yetenekler/computer-use/): API olmayan sistemlerde (beta, yalnız Pro, Max ve Ultra; Team ve Enterprise'ta yok)
- [Office, Google ve Chrome Eklentileri](/wiki/araclar/office-ve-chrome/): Tarayıcı ve Microsoft 365 içinde Claude
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): KVKK genel çerçevesi
- [KVKK m.9 Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/): Claude'a kişisel veri girmeden önce
- [Kodlama: yazılım ekiplerinde Claude](/kurumsal/kodlama/): geliştirici ekipler için kurumsal sayfa
- [Kurumlar için Claude Code](/kurumsal/claude-code/): merkezi yönetim, SSO, politika
- [ROI Hesaplayıcı](/wiki/temeller/roi-hesaplayici/): kendi zaman kazancınızı hesaplayın

