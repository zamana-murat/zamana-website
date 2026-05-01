---
title: Sık Sorulan Sorular (SSS) — Bireysel ve Kurumsal Claude Kullanımı
description: "Claude'u kullanmayı düşünürken — bireysel veya şirket olarak — akla gelen yaygın sorular ve net cevaplar. Güvenlik, veri, maliyet, adaptasyon, KVKK ve Zamana programları."
tags:
  - temeller
  - sss
  - faq
---

Zamana'ya en sık gelen soruları ve net cevaplarımızı tek sayfada topladık. Hem kendiniz için okuyabilirsiniz, hem de şirket içinde Claude'u savunurken kaynak olarak kullanabilirsiniz.

<div class="wiki-admonition wiki-admonition--abstract">
  <div class="wiki-admonition__title">Özet</div>
  <div class="wiki-admonition__body" markdown>


Claude bulut tabanlı bir yapay zeka asistanıdır; Team/Enterprise planlarında verileriniz **model eğitiminde kullanılmaz** (sözleşme garanti). KVKK uyumu doğru plan + DPA + şirket politikasıyla sağlanır. **Bireysel maliyet** Pro $20/ay veya Max $100-200/ay; **6 çalışanlık ekipte** ilk ay Max 5x zorunlu ($600/ay), sonraki aylar karma kullanımla $280-380/ay'a iner. **Sonnet** modeli iş kullanımı için varsayılan tercih. **Türkçe çıktı kalitesi** profesyonel düzeydedir. Çalışan adaptasyonu için somut iş üzerinden eğitim direnci kırar; CLAUDE.md ve prompt kütüphanesi şirket mülkiyetinde kalır. **Zamana programları:** Bireysel $1.000 (3 hafta + 3 ay destek), Kurumsal $9.000 (3 ay × 6 çalışan).

  </div>
</div>

## Güvenlik ve Veri

### Claude'a girdiğimiz veriler başkasına gider mi?

**Kısa cevap: Hayır. Konuşmalarınız ne başka kullanıcılarla paylaşılır ne de varsayılan olarak model eğitiminde kullanılır.** Anthropic'in veri politikası plan tipine göre değişir ama temel ilke aynı: konuşmalarınız sizindir. **Team ve Enterprise planlarında** veriler model eğitiminde **asla kullanılmaz**, bu kural sözleşme (DPA, Data Processing Agreement) ile garanti altına alınmıştır, opsiyonel değildir. **Pro ve Max planlarında** varsayılan davranış da aynı: model eğitiminde kullanılmaz; kullanıcı açıkça opt-in ile izin verirse (ayarlardan açılır seçenek) eğitim için kullanılabilir, varsayılan kapalıdır. Hiçbir planda konuşmalarınız başka müşterilere veya kullanıcılara sızmaz, mimari olarak izole edilmiştir. Anthropic çalışanları konuşmalara yalnızca iki durumda erişebilir: açık izniniz veya Kullanım Politikası ihlali incelemesi. Enterprise'da **Zero Data Retention** seçeneği bu riski sıfırlar (konuşma tamamlanınca silinir). Detay: [Gizlilik ve KVKK](gizlilik-kvkk/).

### Şirket verilerimizi Claude'a vermek KVKK açısından güvenli mi?

**Kısa cevap: Doğru planla (Team/Enterprise) + DPA imzası + şirket içi veri politikasıyla evet, KVKK uyumlu kullanım mümkün.** Kurumsal Claude kullanımının KVKK uyumu üç bileşene dayanır. **Birincisi plan seçimi:** Team ($25/koltuk/ay, minimum 5 koltuk) veya Enterprise (özel müzakere) gerekir; Pro/Max bireysel planları KVKK Madde 12 (veri sorumlusu yükümlülükleri) açısından kurumsal kullanımda yetersiz. **İkincisi DPA:** Anthropic'le imzalanan Data Processing Agreement, KVKK Madde 9 (yurt dışına aktarım) ve GDPR Madde 28 (işleyen sözleşmesi) yükümlülüklerini karşılar. **Üçüncüsü iç politika:** çalışanların hangi veriyi paylaşıp paylaşamayacağını yazılı olarak belirleyen Yapay Zeka Kullanım Politikası şarttır. Çalışanların hassas kişisel veriyi (TC kimlik no, sağlık verisi, tam isim + finansal kayıt birleşimi) bireysel Pro hesabında işlemesi KVKK açısından risklidir, denetimde sorun yaratır. Doğru kurulumda Claude, Microsoft 365 veya Google Workspace gibi diğer bulut araçlarıyla aynı KVKK rejiminde çalışır.

### Anthropic çalışanları konuşmalarımızı okuyabilir mi?

**Kısa cevap: Varsayılan olarak hayır. Erişim sadece açık izninizle veya Kullanım Politikası ihlali incelemesinde, katı dahili kontrollerle.** Anthropic'in iç güvenlik mimarisi konuşmalara erişimi varsayılan olarak engeller. Çalışanlar "müşteri konuşmalarına bakma" yetkisine sahip değildir; bu yetki sadece iki spesifik durumda devreye girer. **Birinci durum:** Müşteri açık ve yazılı izin verirse (örneğin "şu konuşmada sorun var, inceleyebilir misiniz?" diye destek talebi açıldığında). **İkinci durum:** Otomatik sistemler Kullanım Politikası ihlali tespit ederse (CSAM, terör propagandası, kritik altyapı saldırı planı gibi) ihlal incelemesi başlatılır, bu süreçte sınırlı erişim verilir. Tüm erişimler loglanır ve audit edilir. **Enterprise planında Zero Data Retention** seçeneği daha da ileri gider: konuşma tamamlandığı an Anthropic sunucularından silinir, geriye dönük erişim teknik olarak imkansız hale gelir. Bu seçenek bankalar, sağlık kurumları ve yüksek hassasiyet gerektiren kurumsal müşteriler için önerilir. Detay: [Gizlilik ve KVKK](gizlilik-kvkk/).

### Claude offline çalışır mı?

**Kısa cevap: Hayır. Claude bulut tabanlıdır, internet bağlantısı zorunludur. Hava boşluklu (air-gapped) ortamlarda çalıştırılamaz.** Claude'un model dosyaları Anthropic'in veri merkezlerinde (AWS ve Google Cloud üzerinde) çalışır, lokal cihaza indirilemez. Bu mimari karar, model boyutu (yüz milyarlarca parametre, yüzlerce GB) ve sürekli güncelleme gereği nedeniyledir. İnternet bağlantısı kesildiğinde Claude masaüstü uygulaması, web arayüzü ve API tamamen kullanılamaz hale gelir; offline çalışan hiçbir mod yoktur. Tamamen izole ortamlar için (askeri sistemler, hava boşluklu üretim ağları, yüksek güvenlikli devlet kurumları) Claude şu an uygun değildir. Bu tip ortamlar için Anthropic, AWS GovCloud veya Azure Government gibi izole bulut bölgeleri üzerinden Enterprise dağıtım sunabilir; ama bu da "internet yok" değil "izole internet" anlamına gelir. Yerel donanımda çalışan açık kaynak alternatifler (Llama, Mistral) offline çalışır ama Claude'un yetkinlik düzeyinin altındadır. İnternet erişimi olan tüm ofis ortamları için Claude sorunsuz çalışır.

## Maliyet ve ROI

### Claude ayda ne kadar tutar?

**Kısa cevap: Bireysel Pro $20/ay, Max $100-200/ay; Kurumsal Team $25/koltuk/ay (min 5 koltuk), Enterprise özel müzakere.** Claude'un fiyatlandırması kullanım yoğunluğuna göre kademelendirilmiştir. **Pro ($20/ay):** günde 30-40 mesaj, hafif kullanım, tek kullanıcı, dosya yükleme dahil; serbest profesyoneller için yeterli. **Max 5x ($100/ay):** Pro'nun 5 katı kullanım limiti, ortalama günlük yoğun kullanım, Projects ve Cowork dahil; Zamana programının ilk ayında zorunlu (yeni öğrenen kullanıcı Pro limitine hızla çarpıyor). **Max 20x ($200/ay):** çok yoğun kullanım, gün boyu aktif AI iş yükü, geliştirici tipi senaryolar. **Team ($25/koltuk/ay):** kurumsal yönetim paneli, merkezi faturalandırma, paylaşılan Projects, KVKK uyumlu DPA, minimum 5 koltuk yani $125/ay tabanı. **Enterprise:** özel müzakere, kullanıma göre fiyat, SSO/SAML, gelişmiş audit, Zero Data Retention seçeneği, dedicated success manager. Tüm planlara KDV ek (%20 Türkiye için). Yıllık ödemede %15-20 indirim. Detay: [Claude Planları](planlar/).

### 6 çalışan için toplam maliyet nedir?

**Kısa cevap: İlk ay $600 (Max 5x zorunlu), ay 2-3 karma kullanımla $280-380. Zamana programı dahil 3 aylık toplam yatırım ~$10.300.** Maliyet ay bazında değişir çünkü Zamana yaklaşımı ilk ayda yoğun, sonraki aylarda optimize edilmiş kullanım üzerinden ilerler. **İlk ay:** 6 çalışan × Max 5x ($100) = **$600/ay** (yaklaşık 20.000 TL). Max 5x zorunluluğu Zamana'nın deneyiminden çıktı: yeni öğrenen kullanıcı Pro limitini günde birkaç saatte dolduruyor, "çalışmıyor" hissiyle vazgeçiyor; Max 5x bu ilk ay sigortasıdır. **Ay 2-3:** gerçek kullanım ritmi netleşir, ölçüm yapılır. Hafif kullananlar Pro'ya ($20) inebilir, yoğun kullananlar Max'te kalır. Tipik karma: ~2 Max + ~4 Pro = **~$280-380/ay**. **3 aylık Claude abonelik toplamı:** ilk ay $600 + ay 2 $300-380 + ay 3 $280-380 = **~$1.200-1.350**. **Zamana Kurumsal Programı ($9.000) + 3 aylık abonelik (~$1.300) = toplam ~$10.300.** Asıl yatırım eğitimdir, abonelik ikinci plandır ama yetersiz abonelik eğitimi sabote eder; bu yüzden ilk ay Max 5x pazarlık dışıdır.

### Yatırımın geri dönüşünü nasıl ölçerim?

Zamana müşterilerinde tipik ölçüler: çalışan başına haftada 8-15 saat kazanım, aynı iş kalitesini %40-60 daha hızlı üretim, yıllık dokümantasyon geriliminin ortadan kalkması. Somut ölçüm için eğitim öncesi ve 3 ay sonrasını karşılaştırın.

### Küçük şirketim için fazla mı?

Bireysel başlangıç için **Claude Max 5x ilk ay ($100)** + sonrası duruma göre Pro ($20). Wiki ve CLAUDE.md örnekleri ücretsiz — **her büyüklükteki şirkete** ve bireysel profesyonele faydalıdır.

## Çalışan Adaptasyonu

### Çalışanlarım Claude'u kullanmak istemezse?

Direnç doğaldır ve beklenir. Zamana programının tasarımı tam bu direnci çözer: her çalışan ilk oturumda **kendi gerçek işi için** gerçek bir çıktı üretir. "Buna neden ihtiyacım var?" sorusu o an cevaplanır — soyut değil, somut.

### Yaşlı çalışanlarım teknoloji fobiklerse?

Claude'un büyük avantajı **konuşma arayüzü**. Ne kod, ne karmaşık menü — sadece Türkçe konuşmak. 60 yaşındaki muhasebe müdürü için Claude, 30 yaşındaki yazılımcıdan **daha rahat** olabilir.

### Çalışanlar Claude'a bağımlı hale gelmez mi?

Bu gerçek bir risk. Zamana programının [4D Çerçevesi](../prompting/4d-cercevesi/) tam bunu hedefler: Diligence (Sorumluluk) boyutu — çalışan her çıktının arkasında durur, sorumluluğu Claude'a devretmez. "Claude yazar, siz karar verirsiniz" kuralı programın her yerinde geçerlidir.

### Claude'a öğrettiklerimiz, çalışan ayrıldığında şirketten gider mi?

**Hayır.** CLAUDE.md dosyası, prompt kütüphanesi ve workspace klasörü **şirketin mülküdür** — çalışanın değil. Bu dosyalar iş bilgisayarında durur ve çalışan ayrıldığında şirketle kalır.

## Teknik Konular

### Hangi Claude modelini kullanmalıyım?

**Kısa cevap: Sonnet. Her zaman. İş kullanımının %95'inde varsayılan tercih budur.** Anthropic üç ana model ailesi sunar (Haiku, Sonnet, Opus) ve her birinin kendi kullanım senaryosu var. **Haiku** en hızlı ve ucuz; basit sınıflandırma, kısa yanıt, otomasyon backend'i için uygun, ama derin akıl yürütme gerektiren işlerde yetersiz kalır. **Sonnet** dengeli; hız ve yetkinlik arasında en iyi nokta, kurumsal iş kullanımının %95'inde doğru tercih. Sözleşme analizi, rapor yazımı, Türkçe iş yazışması, kod inceleme, doküman özetleme, prompt iterasyonu, Cowork iş akışları, hepsi Sonnet'le yapılır. **Opus** en güçlü model; çok derin araştırma, kompleks matematiksel akıl yürütme, ileri seviye kod üretimi, agentic tasklar için. Daha pahalı ve yavaş; günlük kurumsal işlerde getirisi farkı haklı çıkarmıyor. Zamana eğitimlerinde varsayılan Sonnet'tir. Model seçimi için enerji harcamayın, çıktı kalitesi (prompt, bağlam, CLAUDE.md) için harcayın; Sonnet doğru kurulduğunda Opus'tan daha iyi sonuç verebilir. [Modeller detay](modeller/).

### Claude Türkçeyi iyi konuşur mu?

**Kısa cevap: Evet, profesyonel düzeyde. Resmi yazışma, teknik terminoloji, hukuk dili ve iş kültürü nüansları doğru yakalanır.** Claude 4.x ailesi (özellikle Sonnet 4.5+) Türkçe çıktı kalitesinde sektörün en üst seviyesinde. Test edilen kullanım alanları: **resmi yazışma** (KDV iadesi başvurusu, SGK yazışmaları, KVKK Kurumu bildirimi, vergi dairesi), **hukuk dili** (sözleşme maddesi taslağı, ihtarname, dilekçe), **teknik terminoloji** (mühendislik raporu, üretim talimatı, IT belgelendirmesi), **iş kültürü nüansları** (üst yönetimle resmi e-posta tonu, müşteri itirazına yumuşak cevap, kriz iletişimi). Türkçe karakterler (ş, ç, ı, ğ, ü, ö, İ) sorunsuz, büyük-küçük harf dönüşümü doğru. Türkçe deyim ve atasözü anlama yeterli, çeviri yapay kalmıyor. Sınırlamalar: bazı Osmanlıca/eski Türkçe terimler eksik, çok yerel dialektler (Karadeniz, Doğu Anadolu) bazen genelleştirilir. **ChatGPT ve Gemini ile karşılaştırma:** Claude, kurumsal Türkçe iş dilinde özellikle "iddia etmeden soru sorma" davranışıyla öne çıkar (uydurmuyor, bilmediğinde söylüyor). Önemli metinleri her zaman gözden geçirin, ama düzeltme süresi İngilizce çıktıyla benzer.

### Claude internete bağlı mı?

**Kısa cevap: Varsayılan olarak hayır. Web search skill'i etkinleştirilirse aktif olur, aksi halde sadece eğitim verisindeki bilgiyle çalışır.** Claude'un mimarisi statik bir "bilgi kesim tarihi"yle çalışır (Sonnet 4.6 için Mart 2025 civarı). Bu tarihten sonraki olayları, son haberleri, bugünün döviz kurunu, anlık hisse fiyatını veya yeni mevzuat değişikliklerini doğrudan bilmez. **Web search skill'i** Anthropic'in resmi eklentisi olarak Claude.ai arayüzünde, Cowork ortamında ve API üzerinden açılabilir; aktifleştirildiğinde Claude gerçek zamanlı web araması yapar, sonuçları özetler ve kaynak linki gösterir. Skill manuel açılır, varsayılan kapalıdır çünkü her sorgu web araması yapsa hız ve maliyet artar. **Pratik kullanım:** anlık bilgi gerektirmeyen işlerde (rapor yazma, sözleşme analizi, prompt geliştirme, kod inceleme) web search kapalı bırakılır, daha hızlı ve ucuzdur. Anlık veri gerektiğinde (güncel sektör haberleri, son mevzuat, fiyat araştırması, rakip analizi) skill açılır veya bilgi manuel olarak prompt'a yapıştırılır. **Kurumsal güvenlik:** web search açıldığında Claude'a girdiğiniz bilgi web aramalarında kullanılır ama Anthropic dışı sitelere veri sızmaz, sadece arama sorgusu üretilir.

### Claude kod yazabilir mi?

**Evet, ama Zamana'nın kapsamı dışıdır.** İş profesyoneli için değerli olan kısım: "Bir PowerShell script'i yaz, şunu otomatize et" diyebilmek — çalışan kod öğrenmez, Claude script'i üretir ve çalışan sonucu doğrular. [Bilgi Teknolojileri](../departmanlar/bilgi-teknolojileri/) sayfasında detay.

### Claude bilgisayarımı kontrol edebilir mi?

**Evet, [Computer Use](../yetenekler/computer-use/) özelliği ile** — ama her eylem şeffaf ve sizin onayınızla. Bu özellikle API'si olmayan eski sistemlerde (Logo, Netsis, eski ERP) otomasyon için güçlü bir araçtır.

## ChatGPT ve Diğer Alternatifler

### ChatGPT kullanıyoruz, Claude'a geçmemiz gerekir mi?

**Kısa cevap: Şart değil ama kurumsal iş kullanımında değer artışı ciddi olabilir. CLAUDE.md, uzun bağlam, KVKK netliği belirleyici farklar.** ChatGPT (OpenAI) ve Claude (Anthropic) birbirinin doğrudan rakibi olan iki büyük dil modeli. Tüketici kullanımında benzer; kurumsal iş entegrasyonunda farklılaşıyorlar. **Claude'un üstün olduğu alanlar:** CLAUDE.md şeffaflığı (model nasıl davranacağını yapılandırılmış dosyayla yönlendirme, ChatGPT'nin Custom Instructions'undan çok daha derin), uzun belge performansı (200K+ token bağlamda doküman sadakati, ChatGPT'nin 128K bağlamına göre büyük belgelerde fark açıyor), Cowork iş akışı (paralel agent koordinasyonu), KVKK ve veri politikası netliği (DPA dili daha net, Zero Data Retention seçeneği, Team planında varsayılan no-training garantisi sözleşmede). **ChatGPT'nin üstün olduğu alanlar:** yaratıcı yazım hızı, görsel üretim (DALL-E entegre), eklenti ekosistemi genişliği, kod yorumlayıcı (Code Interpreter) olgunluğu, ses arayüzü kalitesi. Karar matriksi: yaratıcı içerik ağırlıklıysa ChatGPT yetebilir; sözleşme/rapor/uzun doküman ağırlıklıysa Claude öne geçer. Çoğu kurumsal müşteri ikisini birlikte kullanır, departmana göre seçer. Detaylı karşılaştırma: [Claude vs ChatGPT](claude-vs-chatgpt/).

### Hem ChatGPT hem Claude kullanabilir miyim?

Evet. Birçok profesyonel ikisini farklı işler için kullanır. Pratikte her çalışan bir süre sonra birini ana araç olarak seçer — bu tercih role bağlıdır.

### Grok, Gemini, Mistral gibi diğer modelleri denemeli miyim?

Tüketici kullanımı için denenebilir. **Kurumsal iş akışı için** şu an Claude ve ChatGPT'nin sunduğu olgunlukta (CLAUDE.md seviyesi şeffaflık, MCP connector ekosistemi, DPA) alternatif yok. Bu değişirse wiki'yi güncelleriz.

## Zamana Programları

### Zamana eğitim programları nelerdir?

**İki program** sunuyoruz — kim olduğunuza göre seçim:

**Bireysel Program ($1.000)** — Tek kişi için. 3 hafta × 2 saat birebir eğitim + 3 ay telefon desteği. CEO, freelance profesyonel, şirketi olmadan Claude'u öğrenmek isteyen herkes. Hafta sonları veya hafta içi akşam saatlerinde yapılabilir.

**Kurumsal Program ($9.000)** — Şirket için. 6 çalışana 2'şer hafta özel eğitim + 3 ay telefon desteği. Şirket çapında transformasyon hedefleyen orta ölçekli işletmeler için.

Detay: [zamana.com.tr](https://zamana.com.tr).

### Hangi program bana uygun?

| Durum | Önerilen |
|---|---|
| Tek başıma çalışıyorum (freelance, danışman) | **Bireysel Program** |
| CEO'yum, şirkete getirmeden önce kendim öğrenmek istiyorum | **Önce Bireysel, sonra Kurumsal** |
| Şirketim Claude eğitimi sunmuyor ama kendim öğrenmek istiyorum | **Bireysel Program** |
| 6+ çalışanı eğitmek istiyorum | **Kurumsal Program** |
| Pazar sabahı evimde Claude öğrenmek istiyorum | **Bireysel Program** |
| Küçük işletmeyim (1-3 kişi) | **Her kişi için Bireysel** |

### Bireysel Program nasıl yapılıyor?

3 oturum, her biri 2 saat:

- **Oturum 1** — Sıfırdan Claude'la çalışma (kurulum, CLAUDE.md, ilk gerçek iş)
- **Oturum 2** — Rolünüze derinlemesine (skills, connector, prompt kütüphanesi)
- **Oturum 3** — İş akışı tasarımı ve otomasyon

Sonrasında 3 ay boyunca telefonla destek — 30 dakika kuralı geçerli.

### Eğitim sonrası sürdürülebilir mi?

Evet (her iki programda da). Programın tasarımı **katılımcının kendi kendini yeterli** hale gelmesine göre yapılmıştır. Prompt kütüphanesi + CLAUDE.md + iş akışları elinizde kaldığında aylar boyunca bağımsız ilerlersiniz.

### Bireysel program öncesi ne yapmalıyım?

1. Claude Max 5x aboneliği (ilk ay $100, sonrası kullanıma göre Pro'ya indirilebilir)
2. Bilgisayar (Windows 10/11 veya macOS 12+)
3. Stabil internet
4. Çalışmak isteyeceğiniz gerçek bir iş listeniz (eğitimde hayali görev yok)

### Kurumsal program öncesi ne yapmalıyım?

1. Eğitim alacak 6 çalışanı belirleyin
2. Her biri için **Claude Max 5x aboneliği** alın (ilk ay zorunlu, $100/ay × 6 = $600/ay). Ay 2-3'te kullanıma göre Pro'ya indirme opsiyonu.
3. IT ekibinizden Anthropic domain'lerini whitelist yapmalarını isteyin
4. Şirket KVKK politikanızı yazılı hale getirin

Bu dördü tamamsa 1. Oturum verimli geçer.

## Uygulama ve Güncellik

### Claude ne sıklıkla değişiyor?

Anthropic sık iterasyon yapar — genellikle haftada birkaç küçük güncelleme, ayda 1-2 önemli özellik, çeyrekte önemli yeni model. Wiki'deki bilgiler yaşayan belgelerdir; Zamana müşterileri olarak **güncellemeleri bizden haber alırsınız**.

### Yeni bir özellik çıktığında ne olur?

Zamana wiki güncellenir. Retainer müşterileri telefonda bilgilendirilir. Önemli bir geçişse (örneğin yeni model ailesi) bir iç brief dağıtılır.

### Bu wiki'yi kim güncelliyor?

Murat Özsaygılı ve Zamana ekibi. Claude ekosistemindeki gelişmeleri düzenli takip ederiz; yanlış / eksik bulduğunuz bir şey varsa [murat@zamana.com.tr](mailto:murat@zamana.com.tr) adresine bildirin.

## İlgili Sayfalar

- [Claude Nedir?](claude-nedir/) — Temel kavram
- [Claude Planları](planlar/) — Fiyat detayları
- [Claude'un Sınırları](sinirlamalar/) — Dürüst sınırlar
- [Gizlilik ve KVKK](gizlilik-kvkk/) — Veri güvenliği detayları
- [Claude vs ChatGPT](claude-vs-chatgpt/) — Alternatiflerle karşılaştırma

