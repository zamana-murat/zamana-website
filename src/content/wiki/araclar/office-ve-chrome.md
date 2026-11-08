---
title: "Office, Google ve Chrome'da Claude"
seoTitle: "Claude Office, Google ve Chrome Eklentileri"
description: "Claude'u Excel, Word, PowerPoint, Outlook, Google Docs, Sheets, Slides ve Chrome içinde kullanmak: kurulum, KVKK, güvenlik sınırları, hangi işte hangisi."
tags:
  - araclar
  - excel
  - powerpoint
  - word
  - outlook
  - google-workspace
  - chrome
  - eklenti
lastUpdated: "2026-11-08"
---

**Çoğu iş gün boyu aynı birkaç yerde yapılır: bir Excel dosyası, bir sunum, bir Word belgesi, gelen kutusu ve tarayıcı.** Claude'un bu yerlerin içinde çalışan üç eklenti ailesi var: Microsoft 365 eklentileri (Excel, PowerPoint, Word, Outlook), Google Workspace eklentisi (Docs, Sheets, Slides) ve Chrome tarayıcı eklentisi (Claude in Chrome). Üçü de dosyayı Claude'a kopyala-yapıştır yapmak yerine, Claude'u işin olduğu yere getirir.

Bu sayfa kurulumu, IT tarafını, güvenlik sınırlarını ve hangi işte hangisinin seçileceğini anlatır. Ürün tanıtımı ve plan kapsamı için [Claude for Microsoft 365](/claude/microsoft-365/), [Claude for Google Workspace](/claude/google-workspace/) ve [Claude for Chrome](/claude/chrome/) sayfalarına bakın. Cowork ve sohbet tarafı için [Cowork Modu](/wiki/araclar/cowork-modu/) sayfası var.

## Microsoft 365 Eklentileri: Excel, PowerPoint, Word, Outlook

### Durum ve Plan

Excel, PowerPoint ve Word eklentileri genel kullanımda (GA), Outlook eklentisi public beta. Eklentiler ücretli planlarda var, Free planda yok. Önceki bir dönemde Excel eklentisi "beta" olarak anılıyordu; bu artık eskidir. Plan ve durum tablosunun güncel hâli [Claude for Microsoft 365](/claude/microsoft-365/) sayfasında.

### Ne İşe Yarar?

- **Excel:** Analitik modeller kurar ve günceller, veriyi analiz eder, varsayımlarınızı zorlayarak test eder. Başka bir araca geçmeden.
- **PowerPoint:** Sunum üretir, bir analizi sunuma çevirir. Diğer uygulamalardaki bağlamı taşır.
- **Word:** Ekibinizin şablonlarında belge taslağı yazar. Bağlı Excel tablosu ve PowerPoint sunumundan gelen değişiklikleri belgeye yansıtır.
- **Outlook:** Gelen kutusunu ayıklar, yanıtları yazma bölmesine **taslak** olarak hazırlar, takvim uygunluğuna bakar. Word veya Excel'de açık olan ekleri de görebilir.

### Uygulamalar Arası Koordinasyon

En dikkat çekici nokta bu: Claude, uygulamalar arasında **tek bir kalıcı konuşma** sürdürür. Excel'de bir varsayımı değiştirdiğinizde, ona bağlı PowerPoint grafiği ve Word belgesi güncellenebilir. Yan paneli kapatıp açtığınızda konuşma kaldığı yerden devam eder.

### Nasıl Kurulur?

Eklentiler Microsoft AppSource üzerinden, Microsoft yönetim merkezi (admin center) aracılığıyla dağıtılır. Kurumsal ortamda IT yöneticisi dört eklentiyi tek yerden dağıtabilir. Bireysel kullanıcıysanız ve şirket Microsoft 365'iniz yönetici kontrolündeyse, önce IT'den eklenti kurulumuna izin isteyin. Ayrıntılı adımlar Anthropic ve Microsoft belgelerinde güncel tutulur; burada sabit menü yolu vermiyoruz.

Yöneticiler OpenTelemetry ile güvenlik izlemesi yapılandırabilir ve Analytics API ile kullanımı kullanıcı, uygulama ve gün bazında izleyebilir.

### İş Kullanıcısı İçin Somut Örnekler

1. **Finans / Satış operasyon:** *"Bu satış tablosunda bölge bazlı büyümeyi hesapla, en zayıf üç bölgeyi işaretle."* Sonra aynı konuşmada: *"Bunu yönetim kuruluna 5 slaytlık özete çevir."* Excel'den PowerPoint'e veri kopyalamak gerekmez. **Süre:** elle 1-2 saat, Claude ile 15-25 dakika (kontrol dahil). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*
2. **Model güncelleme:** Kur varsayımını değiştirirsiniz, bağlı sunum grafiği ve rapor metni güncellenir. Rakamların tutarlı kalması, çok dosyalı raporlarda en sık hata kaynağıdır.
3. **Belge yazımı:** *"Ekibin teklif şablonunu kullanarak, bu Excel'deki fiyatlarla müşteri teklifi taslağı yaz."* Şablon biçimi korunur.
4. **Gelen kutusu:** Outlook'ta *"Bu sabah gelen e-postaları önem sırasına göre ayır, ilk üçüne yanıt taslağı hazırla ve bu hafta Perşembe için uygun saat öner."* Taslaklar yazma bölmesinde bekler, siz okuyup gönderirsiniz. **Süre:** elle 30-45 dakika, Claude ile yaklaşık 10 dakika. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*
5. **Muhasebe dökümü:** Logo ya da Mikro'dan dışa aktardığınız cari hareket Excel'ini yükleyip *"Bu dökümü e-Fatura listesiyle karşılaştır, eşleşmeyenleri işaretle"* diyebilir, ya da *"Varsayımlardaki kuru TCMB'nin güncel kuruyla değiştir"* isteyebilirsiniz. Logo, Mikro ve Paraşüt için resmi connector yok; iş dosya üzerinden yürür. Ayrıntı: [Türk İş Araçları](/wiki/temeller/turk-is-araclari/).

### Sınırlar

- **Outlook hâlâ beta.** Önemli yazışmalarda taslağı mutlaka okuyun. Claude e-postayı sizin yerinize göndermez, taslak olarak hazırlar.
- **Mac ve Windows** için GA denildi; web ve mobil Office için kapsamı bu sayfa yazılırken doğrulayamadık.
- **Rakamları kontrol edin.** Model ve formül üretimi hız kazandırır, doğruluğu sizin gözden geçirmeniz gerekir. Finansal kararlara girecek tabloyu bağımsız doğrulayın.
- **Veri akışı:** Dosya içeriği Claude'a gider. Müşteri verisi veya kişisel veri içeren dosyalar için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) ve [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/) sayfalarına bakın.
- **Connector'dan farkı:** Microsoft 365 [connector](/wiki/araclar/connectors/) Claude'un OneDrive, Outlook, takvim gibi verilerini okumasını sağlar. Eklenti ise Claude'u uygulamanın **içine** koyar. İkisi birlikte de kullanılabilir.

Kaynak ve ayrıntı için: [Claude for Excel, PowerPoint, Word ve Outlook](https://claude.com/blog/collaborate-with-claude-across-excel-powerpoint-word-and-outlook) (Anthropic).

## Google Docs, Sheets ve Slides Eklentisi

### Durum ve Plan

**Claude for Google Workspace** 6 Ekim 2026'da **genel beta** olarak çıktı. Tek bir Google Workspace Marketplace eklentisidir: bir kez kurarsınız, Docs, Sheets ve Slides'ın üçüne birden gelir (menüde Extensions > Claude). **Pro, Max, Ultra, Team ve Enterprise** planlarında var, Free planda yok.

### Ne İşe Yarar?

Yan panelde açılır, **açık olan dosyayı** okur ve yerinde düzenler. Yaptığı her değişiklik dosyanın sürüm geçmişinde görünür, yani geri almak kolaydır. Varsayılan ayar **"Ask before edits"**: Claude her düzenlemeden önce onayınızı ister. İsterseniz "Accept all edits" ile onaysız çalıştırırsınız; önemli belgelerde varsayılanda kalın. Yanıtlarında dosyanın hangi bölümüne dayandığını gösterir.

### İş Kullanıcısı İçin Somut Örnekler

1. **Sheets:** *"Bu tahsilat tablosunda vadesi 30 günü geçenleri işaretle, müşteri bazında toplamı yeni bir sekmeye çıkar."* **Süre:** elle 45-60 dakika, Claude ile 10-15 dakika (kontrol dahil). *Tahmini tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*
2. **Docs:** *"Bu teklif metnini kurumsal dile çek, fiyat tablosundaki KDV satırını kontrol et, değişiklikleri onayıma sun."*
3. **Slides:** *"Bu sunumdaki 12 slaytı 6'ya indir, her slayta tek ana mesaj bırak."*

### Kurulum ve IT Tarafı

**Adım adım (Anthropic yardım sayfasına göre):**

1. Google Workspace Marketplace'teki Claude sayfasını açıp **Install**'a basın (yönetici sizin için kurduysa bu adımı atlayın)
2. Kurulum akışında Google hesabınızı seçin, **Continue**, izinleri okuyup **Allow**
3. Açık duran Docs, Sheets, Slides dosyalarını yenileyin
4. Bir dosyada **Extensions > Claude > Open Claude** deyin; ilk seferde Google iki izin ister, onaylayın
5. Yan panelde Claude hesabınızla giriş yapın (connector açmak isteğe bağlı)

"This application is not allowed by your administrator" uyarısı çıkarsa Google Workspace yöneticisinin Claude'u izin listesine alması ya da sizin için kurması gerekir.

- Şirket hesabında **Google Workspace yöneticisi** eklentiyi kuruluşa dağıtır ya da izin listesine alır. Kullanıcının Google hesabı Marketplace uygulaması kurabiliyor olmalı; "kuramıyorum" diyorsanız IT'ye sorun.
- **Team ve Enterprise'ta** Docs, Sheets ve Slides connector'larını owner ya da primary owner önce açar.
- Eklenti yalnız açık dosyada çalışır. Drive'daki başka dosyalara ulaşması için Google Drive bağlantısının ayrıca açık olması gerekir (varsayılan kapalı).
- **Enterprise:** Compliance API, müşteri yönetimli anahtar (CMEK) ve OpenTelemetry denetim aktarımı eklentiyi de kapsar. Zero data retention ve üçüncü taraf çıkarım henüz desteklenmez.

### Sınırlar

- **Beta.** Kritik dosyada değişiklikleri tek tek onaylayın.
- Chrome, Edge ve Safari'de çalışır, Firefox'ta çalışmaz. Yan panel açık kalmalı; tek işlem en çok 6 dakika sürer.
- **Connector'dan farkı:** Google Workspace [connector](/wiki/araclar/connectors/)'ı Claude'un sohbetten Drive dosyalarını bulup okumasını ya da yeni dosya oluşturmasını sağlar. Eklenti ise Claude'u dosyanın **içine** koyar. Microsoft 365 tarafındaki ayrımın aynısıdır.

Kaynak: [Use Claude in Google Docs, Sheets, and Slides](https://support.claude.com/en/articles/16951679-use-claude-in-google-docs-sheets-and-slides) (Anthropic).

## Claude in Chrome

### Nedir?

Claude in Chrome, tarayıcınıza eklenen küçük bir programdır (eklenti). Ürün tanıtımı için [Claude for Chrome](/claude/chrome/) sayfası var. Claude'un sizin yerinize web sayfalarını okumasını, bağlantılara tıklamasını, sayfalar arasında gezmesini ve form doldurmasını sağlar. Özellikle **API'si olmayan siteler ve şirket içi araçlar** için işe yarar: bağlayıcı (connector) olmayan yerde Claude yine de iş yapabilir. Zaten oturum açtığınız sitelerde mevcut girişinizi kullanır.

26 Ağustos 2026'dan beri **genel kullanımda**; artık beta değil. Ayrıntı: [Claude in Chrome tüm ücretli planlarda genel kullanıma açıldı](/haberler/2026-08-26-claude-in-chrome-genel-kullanima-acildi/).

### Hangi Planda?

Tüm ücretli planlarda; Free planda yok. Eklentideki Cowork tabanlı yan panel ayrı bir özelliktir: Max, Ultra ve Team'de var, Pro'ya kademeli açılıyor, Enterprise'ta yönetici açtıysa gelir. Güncel plan tablosu [Claude for Chrome](/claude/chrome/) sayfasında.

### Nasıl Kurulur?

1. Chrome Web Store'dan eklentiyi kurun
2. Claude hesabınızla giriş yapın
3. Bir sayfada yan paneli açıp isteğinizi yazın

Enterprise yöneticileri Organization Settings üzerinden dağıtımı yönetebilir ve kullanımı onaylı alan adlarıyla sınırlayabilir. Tarayıcıda başlattığınız işe masaüstü, mobil ve web uygulamalarından devam edebilirsiniz.

### İş Kullanıcısı İçin Somut Örnekler

1. **Tedarikçi portalı:** *"Bu portaldan son üç ayın fatura bilgilerini çek, tabloya dök."* Portalın API'si yoksa bile. **Süre:** elle 1-2 saat, Claude ile 15-30 dakika (kontrol dahil). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*
2. **Başvuru ve form işleri:** Aynı bilgileri tekrar tekrar giriyorsanız (kurum başvurusu, tedarikçi kayıt formu), Claude formu sizin verdiğiniz bilgilerle doldurur, siz gönderme öncesi kontrol edersiniz.
3. **İç araç:** Connector'ı olmayan bir iç raporlama panelinden rakam alıp özet çıkarmak.
4. **Araştırma:** Birkaç sayfayı gezip karşılaştırma tablosu çıkarmak (fiyat, özellik, şartlar).

### Güvenlik ve Sınırlar

- **Prompt injection riski.** Web'de çalışan bir yapay zekanın en büyük riski, sayfaya gizlenmiş yanıltıcı talimatlardır. Anthropic bunun için üç katmanlı koruma anlatıyor: bilinen saldırılarla eğitim, web içeriğini işlemeden önce tarayan kontroller ve planlanan eylemin sizin isteğinizle uyuşup uyuşmadığına bakan bir sınıflandırıcı. Anthropic'in kendi testinde saldırı başarı oranı Sonnet 5, Opus 5 ve Mythos 5 için %0, Fable 5 için %0,3 çıktı; kırılmalar düşük şiddetli senaryolarda kaldı. Karşılaştırma: Opus 4.5 ile Kasım 2025 korumalarında oran %16,7 idi. Yine de bu şirketin kendi testidir. "Risk yok" demek değildir ve yardım makalesi eklentiyi hâlâ riskli bir yüzey olarak anlatır.
- **Eylem başına onay mantığı:** Her adımda sormak yerine, güvenlik sınıflandırıcısı eylem başına karar verir. Bankacılık, e-posta ve kritik kurumsal hesaplarda önce güvendiğiniz sitelerle ve onay isteyen modla başlayın.
- **Yalnız masaüstü Google Chrome.** Diğer Chromium tabanlı tarayıcılarda (Edge, Brave gibi) ve mobil tarayıcıda desteklenmez.
- **Yerel dosyalar ve tarayıcı dışı uygulamalar** için Claude masaüstü uygulaması gerekir.
- **Gizlilik tercihi:** Kişisel tarayıcınıza dokunulmasını istemiyorsanız, Cowork masaüstü uygulamasındaki yerleşik tarayıcı ayrı bir seçenektir. Kendi sekmelerinizi ve şifrelerinizi görmeden çalışır. Ayrıntı: [Cowork'e kendi tarayıcısı geldi](/haberler/2026-08-26-cowork-yerlesik-tarayici/).

Daha geniş bağlam için: [Computer Use](/wiki/yetenekler/computer-use/) ve [MCP Güvenliği](/wiki/mcp/guvenlik/).

## Hangisini Ne Zaman Seçmeli?

| İhtiyaç | Seçim |
|---|---|
| Elinizdeki Excel/Word/PowerPoint dosyasının içinde çalışmak | **Office eklentisi** |
| Google Docs, Sheets ya da Slides dosyasının içinde çalışmak | **Google Workspace eklentisi** (beta) |
| E-posta ayıklamak, yanıt taslağı hazırlamak | **Outlook eklentisi** (beta) |
| API'si olmayan bir web sitesinde işlem yapmak | **Claude in Chrome** |
| Bilgisayarınızdaki klasörlerle çok adımlı iş | **Cowork** ([Cowork Modu](/wiki/araclar/cowork-modu/)) |
| Slack kanalında ekiple birlikte | **Claude Tag** ([Slack ve Teams](/wiki/araclar/slack-teams-entegrasyon/)) |

## İlgili Sayfalar

- [Cowork Modu](/wiki/araclar/cowork-modu/): dosya, kod ve connector'larla çalışma
- [Connectors](/wiki/araclar/connectors/): Microsoft 365, Google Workspace ve diğer bağlantılar
- [Türk İş Araçları](/wiki/temeller/turk-is-araclari/): Logo, Mikro, Paraşüt, e-Fatura
- [Claude for Microsoft 365](/claude/microsoft-365/), [Claude for Google Workspace](/claude/google-workspace/) ve [Claude for Chrome](/claude/chrome/): ürün tanıtımı
- [Slack ve Teams Entegrasyonu](/wiki/araclar/slack-teams-entegrasyon/): Claude Tag ve connector yolu
- [Computer Use](/wiki/yetenekler/computer-use/): Claude'un ekranı kullanması
- [Claude vs Copilot](/wiki/temeller/claude-vs-copilot/): Microsoft ekosisteminde karşılaştırma
- [Planlar](/wiki/temeller/planlar/): hangi planda hangi özellik
