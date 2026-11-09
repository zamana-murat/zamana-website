---
title: "ChatGPT mi, Gemini mi, Claude mu? İş İçin Karar Rehberi"
seoTitle: "ChatGPT mi Gemini mi Claude mu? İş Karar Rehberi"
description: "ChatGPT, Gemini, Copilot ve Claude arasında iş için nasıl seçilir? Karar tablosu, Microsoft 365 ve Google Workspace senaryoları, KVKK ve fiyat."
tags:
  - temeller
  - karsilastirma
  - chatgpt
  - gemini
  - copilot
lastUpdated: "2026-11-09"
---

**Hangi yapay zeka daha iyi?** Tek bir doğru cevap yok, çünkü dördü de iş için yeterince iyi. Karar çoğunlukla modelin zekâsından değil, ekibinizin zaten kullandığı altyapıdan ve veri politikanızdan çıkar. Microsoft 365 kullanıyorsanız Copilot, Google Workspace kullanıyorsanız Gemini ofis araçlarının içinde hazır gelir ve kurulumu en kolay olandır. ChatGPT en geniş kullanıcı kitlesine ve geniş bir uygulama kataloğuna sahiptir. Claude ise uzun ve düzgün yazı, belge analizi, çok adımlı muhakeme ve dosya üretimi gibi işlerde güçlü bir seçimdir. Dördünün de iş planlarında veri varsayılan olarak eğitimde kullanılmaz; asıl risk, çalışanın şirket verisini kişisel hesaba yapıştırmasıdır. Pratik yol şu: işinizin türünü belirleyin, anonimleştirilmiş gerçek bir belgeyle her adayı bir hafta deneyin, ekibin çoğu zaten bir ekosistemdeyse onu başlangıç alın. Çoğu ekip için tek tedarikçi yeterlidir. İkinci aracı ancak somut bir nedeniniz varsa ekleyin.

Zamana Claude eğitimi verir, bu yüzden bu sayfada tarafsızlık iddiamız yok. Ama "her işte Claude" demiyoruz da: aşağıdaki tablo hangi işte hangisinin mantıklı olduğunu dürüstçe yazar.

## Karar Tablosu: Hangi Durumda Hangisi?

| Durum | Öne çıkan | Neden |
|---|---|---|
| Uzun rapor, hukuki taslak, sözleşme analizi | **Claude** | Üslup tutarlılığı, uzun belgede dikkat, emin olmadığını söyleme eğilimi |
| .docx, .xlsx, .pptx üretimi ve çok adımlı iş akışı | **Claude** | [Skills](/wiki/yetenekler/skills/) ve [Cowork](/wiki/araclar/cowork-modu/) |
| Şirket Microsoft 365 kullanıyor | **Copilot** (yanına Claude) | Word, Excel, Outlook, Teams içinde yerleşik |
| Şirket Google Workspace kullanıyor | **Gemini** (yanına Claude) | Gmail, Docs, Sheets içinde yerleşik |
| Geniş uygulama kataloğu, görsel üretimi, bireysel çok amaçlı kullanım | **ChatGPT** | Geniş kullanıcı kitlesi, uygulama ve GPTs ekosistemi |
| Video ve çok kipli (multimodal) işler | **Gemini** | Görüntü ve video anlamada güçlü |
| Kaynaklı web araştırması | **Perplexity** ya da web aramalı herhangi biri | Bkz. [Claude vs Perplexity](/wiki/temeller/claude-vs-perplexity/) |
| Kurumsal veri sözleşmesi (DPA), KVKK hazırlığı | **Fark kısmen planda** | Aşağıdaki bölüme bakın |

Tabloyu kural olarak değil, başlangıç hipotezi olarak okuyun. Model sürümleri birkaç ayda bir değişir ve bugünkü sıralama yarın tersine dönebilir.

## Ekip Altyapısı Neden Belirleyici?

Gündelik iş çoğunlukla e-posta, tablo ve belge içinde geçer. Yapay zeka bu araçların içindeyse çalışanın bir sekme daha açması gerekmez ve benimsenme kolaylaşır. Bu yüzden "en iyi model" sorusu çoğu zaman yanlış sorudur; doğru soru "ekip hangi araçta yaşıyor" sorusudur.

### Zaten Microsoft 365 Kullanıyorsanız

[Copilot](/wiki/temeller/claude-vs-copilot/) Word, Excel, PowerPoint, Outlook ve Teams içinde çalışır, kurumsal kimlik ve izin yapınıza bağlanır. Microsoft 365 Copilot kullanıcı başına 30 USD/ay (yıllık, nitelikli M365 lisansı gerekir); küçük işletmeler için daha ucuz bir Copilot Business eklentisi de var. Microsoft'un gizlilik sayfasına göre istemler, yanıtlar ve Graph verisi temel modelleri eğitmek için kullanılmıyor. Dikkat edilecek bir nokta: aynı sayfa, Anthropic'in sağladığı modellerin şu an AB Veri Sınırı (EU Data Boundary) dışında olduğunu belirtiyor. Yurt dışı aktarımı gündeminiz varsa bu ayrıntıyı BT ve hukuk ekibinizle netleştirin.

Pratikte iyi çalışan düzen: günlük Office içi hızlı işler Copilot'ta, derin yazı, analiz ve dosya üretimi Claude'da. Claude'un Word, Excel ve PowerPoint eklentileri de var; ayrıntı [Office, Google ve Chrome Eklentileri](/wiki/araclar/office-ve-chrome/) sayfasında.

### Google Workspace Kullanıyorsanız

[Gemini](/wiki/temeller/claude-vs-gemini/) Gmail, Docs, Sheets ve Slides içinde yerleşiktir ve ek kurulum istemez. Google'ın belgelerine göre Workspace (iş) hesaplarında müşteri verisi, önceden izin olmadan Workspace üretken yapay zeka modellerini eğitmek için kullanılmıyor. Kişisel Google hesabında ise etkinlik kaydı varsayılan olarak açık ve model eğitimi ile insan incelemesi için kullanılabiliyor; kapatılabilir. Yani iş verisini kişisel hesapla değil, Workspace hesabıyla işlemek önemli.

Claude'un Google Docs, Sheets ve Slides eklentisi genel beta aşamasında ve ücretli planlarda. Gmail, Drive ve Calendar için [connector](/wiki/araclar/connectors/) kullanılır. Yani iki ekosistemde de Claude'u kullanabilirsiniz, ama yerleşik olanın kolaylığı yerleşikte kalır.

### Hiçbirini Kullanmıyorsanız ya da Karmaysa

Karma ekiplerde (kimi Microsoft, kimi Google, kimi hiçbiri) ekosistem avantajı kaybolur ve karar iş türüne döner. Bu durumda tek bir sohbet asistanı ve connector'lar çoğu zaman en az karmaşıklıkla en çok iş görür.

## KVKK ve Veri Politikası Açısından Fark Var mı?

Kısa cevap: iş planlarında üç büyük sağlayıcı da veriyi varsayılan olarak eğitimde kullanmadığını söylüyor; farkı **plan** yaratıyor, marka değil.

- **Claude:** Team, Enterprise ve API'de girdi ve çıktı varsayılan olarak eğitimde kullanılmaz; veri işleme eki (DPA) bu ticari ürünlerde Commercial Terms'e dahildir. Free, Pro ve Max kişisel planlardır ve DPA kapsamı dışındadır.
- **ChatGPT:** Business, Enterprise, Edu ve API verisi varsayılan olarak eğitimde kullanılmaz. Ücretsiz ve bireysel planların (Free, Plus, Pro) varsayılanını OpenAI'nin sayfasından doğrulayamadık, kendiniz kontrol edin.
- **Gemini ve Copilot:** İş hesaplarında yukarıda yazıldığı gibi.

Hepsinde ortak risk aynı: çalışanın şirket verisini **kişisel hesaba** yapıştırması. Bu, hangi aracı seçtiğinizden bağımsız bir politika sorunudur. Kişisel veri ve yurt dışı aktarım için [KVKK m.9 Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/) ve [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfalarına, politika çerçevesi için [Şirket İçi Yapay Zeka Politikası](/wiki/temeller/sirket-ici-politika/) sayfasına bakın. Bunlar hukuki görüş değildir; kararı hukuk müşavirinizle verin.

## Türkçe Kalitesi Karar Verdirir mi?

Dördünde de günlük iş Türkçesi iyi düzeyde. Fark, uzun ve resmî metinde, ton tutarlılığında ve hukuki ya da teknik terimde ortaya çıkar. Bu farkı genel yorumlara bakarak değil, kendi tip belgenizle ölçün. Ayrıntı için [Türkçe Performansı](/wiki/temeller/turkce-performansi/) sayfası var.

## Fiyat Karşılaştırması (USD, Kasım 2026)

Fiyatlar vergi hariç, ABD sayfalarındandır; hızla değişir, karar öncesi sağlayıcının sayfasına bakın.

| | Bireysel giriş | Bireysel üst | Ekip / iş planı |
|---|---|---|---|
| **Claude** | Pro 20 USD/ay | Max 100 USD, Ultra 200 USD | Team Standard koltuk 25 USD/ay (yıllık 20 USD) |
| **ChatGPT** | Plus 20 USD/ay (Go 8 USD) | Pro 100, 200 ve 500 USD | Business 20 USD/kullanıcı/ay yıllık, 25 USD aylık, en az 2 kullanıcı |
| **Gemini** | Google AI Pro 19,99 USD/ay | Ultra 99,99 USD'den | Workspace planlarıyla birlikte; ayrıntı Google'da |
| **Copilot** | Tüketici fiyatını doğrulayamadık | | M365 Copilot 30 USD/kullanıcı/ay (yıllık) |

Planların içeriği için [Planlar](/wiki/temeller/planlar/) sayfasına, kendi kullanımınıza uygun planı bulmak için [Plan Seçici](/wiki/temeller/plan-secici/) aracına bakabilirsiniz. Zamana abonelik satmaz ve Anthropic'in bayisi değildir; satın alma doğrudan sağlayıcıdan yapılır.

## Birden Fazla Araç Kullanmak Mantıklı mı?

Bireysel olarak evet: birçok kişi hızlı iş için ofis içi aracı, derin iş için ayrı bir asistanı kullanıyor. Kurum olarak her ek araç ek sözleşme, ek eğitim ve ek veri riski demek. Önerimiz: önce bir ana araçta ekibi olgunlaştırın, ikinciyi yalnızca ölçebildiğiniz bir ihtiyaç için ekleyin.

## Nasıl Karar Verilir? (Pratik Yol)

1. En sık yapılan üç işi yazın (rapor, e-posta, tablo analizi gibi).
2. Her iş için anonimleştirilmiş bir gerçek örnek hazırlayın.
3. Aynı örnekleri aday araçlarda deneyin, çıktıyı iş sahibine kör değerlendirtin.
4. Veri sözleşmesi ve plan kısıtlarını ölçüye ekleyin.
5. Küçük bir pilotla başlayın ([Pilot ve Yaygınlaştırma](/wiki/temeller/pilot-ve-yayginlastirma/)).

Ekibinizin bu seçimi birlikte yapması ve doğru kullanım alışkanlığını kazanması için [kurumsal yapay zeka eğitimi](/programlar/kurumsal/) var; tek başınıza ilerlemek isterseniz [bireysel program](/programlar/bireysel/) seçeneğine bakabilirsiniz.

## İlgili Sayfalar

- [Claude vs ChatGPT](/wiki/temeller/claude-vs-chatgpt/): OpenAI tarafı
- [Claude vs Gemini](/wiki/temeller/claude-vs-gemini/): Google tarafı
- [Claude vs Copilot](/wiki/temeller/claude-vs-copilot/): Microsoft tarafı
- [Claude vs Perplexity](/wiki/temeller/claude-vs-perplexity/): araştırma ve arama odaklı
- [Claude vs DeepSeek](/wiki/temeller/claude-vs-deepseek/): veri yeri ve KVKK açısından
- [Planlar](/wiki/temeller/planlar/): Claude planları ve fiyatlar
- [Yaygın İtirazlar](/wiki/temeller/itirazlar/): "Zaten ChatGPT kullanıyoruz" itirazı
