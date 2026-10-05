---
title: "Office ve Chrome'da Claude"
description: "Claude'u Excel, PowerPoint, Word ve Outlook içinde, ayrıca Chrome'da kullanmak. Hangi planda çalışır, nasıl kurulur, iş örnekleri ve sınırlar."
tags:
  - araclar
  - excel
  - powerpoint
  - word
  - outlook
  - chrome
  - eklenti
lastUpdated: "2026-10-05"
---

**Çoğu iş gün boyu aynı birkaç yerde yapılır: bir Excel dosyası, bir sunum, bir Word belgesi, gelen kutusu ve tarayıcı.** Claude'un bu yerlerin içinde çalışan iki eklenti ailesi var. Birincisi Microsoft 365 eklentileri (Excel, PowerPoint, Word, Outlook), ikincisi Chrome tarayıcı eklentisi (Claude in Chrome). İkisi de dosyayı Claude'a kopyala-yapıştır yapmak yerine, Claude'u işin olduğu yere getirir.

Bu sayfa ikisini de anlatır. Cowork ve sohbet tarafı için [Cowork Modu](/wiki/araclar/cowork-modu/) sayfasına bakın.

## Microsoft 365 Eklentileri: Excel, PowerPoint, Word, Outlook

### Durum ve Plan

| Eklenti | Durum | Plan |
|---|---|---|
| Excel | Genel kullanımda (GA), Mac ve Windows | Pro, Max, Team, Enterprise |
| PowerPoint | Genel kullanımda (GA), Mac ve Windows | Pro, Max, Team, Enterprise |
| Word | Genel kullanımda (GA), Mac ve Windows | Pro, Max, Team, Enterprise |
| Outlook | Public beta | Tüm ücretli planlar |

Free planda yoktur. Önceki bir dönemde Excel eklentisi "beta" olarak anılıyordu; bu artık eskidir.

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

1. **Finans / Satış operasyon:** *"Bu satış tablosunda bölge bazlı büyümeyi hesapla, en zayıf üç bölgeyi işaretle."* Sonra aynı konuşmada: *"Bunu yönetim kuruluna 5 slaytlık özete çevir."* Excel'den PowerPoint'e veri kopyalamak gerekmez.
2. **Model güncelleme:** Kur varsayımını değiştirirsiniz, bağlı sunum grafiği ve rapor metni güncellenir. Rakamların tutarlı kalması, çok dosyalı raporlarda en sık hata kaynağıdır.
3. **Belge yazımı:** *"Ekibin teklif şablonunu kullanarak, bu Excel'deki fiyatlarla müşteri teklifi taslağı yaz."* Şablon biçimi korunur.
4. **Gelen kutusu:** Outlook'ta *"Bu sabah gelen e-postaları önem sırasına göre ayır, ilk üçüne yanıt taslağı hazırla ve bu hafta Perşembe için uygun saat öner."* Taslaklar yazma bölmesinde bekler, siz okuyup gönderirsiniz.

### Sınırlar

- **Outlook hâlâ beta.** Önemli yazışmalarda taslağı mutlaka okuyun. Claude e-postayı sizin yerinize göndermez, taslak olarak hazırlar.
- **Mac ve Windows** için GA denildi; web ve mobil Office için kapsamı bu sayfa yazılırken doğrulayamadık.
- **Rakamları kontrol edin.** Model ve formül üretimi hız kazandırır, doğruluğu sizin gözden geçirmeniz gerekir. Finansal kararlara girecek tabloyu bağımsız doğrulayın.
- **Veri akışı:** Dosya içeriği Claude'a gider. Müşteri verisi veya kişisel veri içeren dosyalar için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) ve [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/) sayfalarına bakın.
- **Connector'dan farkı:** Microsoft 365 [connector](/wiki/araclar/connectors/) Claude'un OneDrive, Outlook, takvim gibi verilerini okumasını sağlar. Eklenti ise Claude'u uygulamanın **içine** koyar. İkisi birlikte de kullanılabilir.

Kaynak ve ayrıntı için: [Claude for Excel, PowerPoint, Word ve Outlook](https://claude.com/blog/collaborate-with-claude-across-excel-powerpoint-word-and-outlook) (Anthropic).

## Claude in Chrome

### Nedir?

Claude in Chrome, tarayıcınıza eklenen küçük bir programdır (eklenti). Claude'un sizin yerinize web sayfalarını okumasını, bağlantılara tıklamasını, sayfalar arasında gezmesini ve form doldurmasını sağlar. Özellikle **API'si olmayan siteler ve şirket içi araçlar** için işe yarar: bağlayıcı (connector) olmayan yerde Claude yine de iş yapabilir. Zaten oturum açtığınız sitelerde mevcut girişinizi kullanır.

26 Ağustos 2026'dan beri **genel kullanımda**; artık beta değil. Ayrıntı: [Claude in Chrome tüm ücretli planlarda genel kullanıma açıldı](/haberler/2026-08-26-claude-in-chrome-genel-kullanima-acildi/).

### Hangi Planda?

Pro, Max, Team ve Enterprise. Free planda yoktur.

### Nasıl Kurulur?

1. Chrome Web Store'dan eklentiyi kurun
2. Claude hesabınızla giriş yapın
3. Bir sayfada yan paneli açıp isteğinizi yazın

Enterprise yöneticileri Organization Settings üzerinden dağıtımı yönetebilir ve kullanımı onaylı alan adlarıyla sınırlayabilir. Tarayıcıda başlattığınız işe masaüstü, mobil ve web uygulamalarından devam edebilirsiniz.

### İş Kullanıcısı İçin Somut Örnekler

1. **Tedarikçi portalı:** *"Bu portaldan son üç ayın fatura bilgilerini çek, tabloya dök."* Portalın API'si yoksa bile.
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
| E-posta ayıklamak, yanıt taslağı hazırlamak | **Outlook eklentisi** (beta) |
| API'si olmayan bir web sitesinde işlem yapmak | **Claude in Chrome** |
| Bilgisayarınızdaki klasörlerle çok adımlı iş | **Cowork** ([Cowork Modu](/wiki/araclar/cowork-modu/)) |
| Slack kanalında ekiple birlikte | **Claude Tag** ([Slack ve Teams](/wiki/araclar/slack-teams-entegrasyon/)) |

## İlgili Sayfalar

- [Cowork Modu](/wiki/araclar/cowork-modu/): dosya, kod ve connector'larla çalışma
- [Connectors](/wiki/araclar/connectors/): Microsoft 365 ve diğer bağlantılar
- [Slack ve Teams Entegrasyonu](/wiki/araclar/slack-teams-entegrasyon/): Claude Tag ve connector yolu
- [Computer Use](/wiki/yetenekler/computer-use/): Claude'un ekranı kullanması
- [Claude vs Copilot](/wiki/temeller/claude-vs-copilot/): Microsoft ekosisteminde karşılaştırma
- [Planlar](/wiki/temeller/planlar/): hangi planda hangi özellik
