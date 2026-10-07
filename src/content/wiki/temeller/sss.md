---
title: "Claude Sık Sorulan Sorular (SSS)"
description: "Claude'u kullanmayı düşünürken, bireysel veya şirket olarak akla gelen yaygın sorular ve net cevaplar. Güvenlik, veri, maliyet, adaptasyon ve KVKK."
tags:
  - temeller
  - sss
  - faq
lastUpdated: "2026-10-06"
---

Claude'u kullanmayı düşünenlerden en sık gelen sorular ve net cevaplar. Hem kendiniz için okuyabilirsiniz, hem de şirket içinde Claude'u savunurken kaynak olarak kullanabilirsiniz.

<div class="wiki-admonition wiki-admonition--abstract">
  <div class="wiki-admonition__title">Özet</div>
  <div class="wiki-admonition__body" markdown>

Claude bulut tabanlı bir yapay zeka asistanıdır. Team ve Enterprise planlarında verileriniz varsayılan olarak **model eğitiminde kullanılmaz** (sözleşme güvencesi). KVKK uyumu doğru plan, DPA, şirket politikası ve (kişisel veri girilecekse) KVKK m.9 yurt dışı aktarım dayanağıyla sağlanır. **Bireysel maliyet** Pro $20/ay veya Max $100-200/ay; yeni başlayanlara ilk ay Max 5x önerilir (zorunlu değil). Ekip maliyeti örneği [Claude Planları](/wiki/temeller/planlar/) sayfasındadır. İş kullanımı için varsayılan model **Sonnet**'tir. **Türkçe çıktı kalitesi** profesyonel düzeydedir. Çalışan adaptasyonunda somut iş üzerinden eğitim direnci kırar; CLAUDE.md ve prompt kütüphanesi şirket mülkiyetinde kalır.

  </div>
</div>

## Güvenlik ve Veri

### Claude'a girdiğimiz veriler başkasına gider mi?

**Kısa cevap: Hayır. Konuşmalarınız başka kullanıcılarla veya müşterilerle paylaşılmaz, mimari olarak izole edilmiştir.**

Model eğitiminde kullanılıp kullanılmaması plana göre değişir:

- **Team ve Enterprise:** Veriler varsayılan olarak eğitimde **kullanılmaz**. Bu, ticari sözleşmenin (DPA dahil) güvencesidir.
- **Free, Pro ve Max:** Karar sizdedir. "Claude'u geliştirmeye yardım et" ayarı Settings → Privacy altındadır ve istediğiniz zaman değiştirilir. Kurumsal kullanımda kapalı tutun.

Anthropic çalışanlarının erişimi için aşağıdaki sorulara bakın. API tarafında, satış ekibiyle kuruluş başına talep edilen **Zero Data Retention** düzenlemesi riski daha da azaltır: istem ve yanıtlar, yanıt döndükten sonra depolanmaz. Detay: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

### Şirket verilerimizi Claude'a vermek KVKK açısından güvenli mi?

**Kısa cevap: Kişisel veri girmiyorsanız sorun küçüktür. Kişisel veri giriyorsanız doğru plan, DPA ve iç politika yetmez; ayrıca KVKK m.9 yurt dışı aktarım dayanağı gerekir ve bu nokta bugün tam netleşmiş değildir.**

Kurumsal Claude kullanımının KVKK uyumu dört bileşene dayanır:

1. **Plan seçimi:** Şirket verisi işleyen ekipler için Team veya Enterprise önerilir (fiyatlar: [Claude Planları](/wiki/temeller/planlar/)). Zorunlu değildir, ama merkezi yönetim, faturalama ve veri kontrolü ticari planlarda vardır. Pro ve Max bireysel plandır: DPA kapsamı dışındadır, bu da KVKK m.12 (veri sorumlusunun yükümlülükleri) açısından kurumsal veri için zayıf noktadır.
2. **DPA:** Team, Enterprise ve API'de ticari şartlara otomatik dahil olan (ayrıca imza gerekmeyen) Data Processing Agreement, işleyen ilişkisini belgeler (KVKK m.12/2, GDPR m.28). DPA'daki standart sözleşme hükümleri AB içindir, KVKK m.9 için Kurul'un Türk standart sözleşmesinin yerine geçmez.
3. **Yurt dışı aktarım dayanağı:** Kişisel veri girecekseniz Kurul'un standart sözleşmesi (imzadan sonra 5 iş günü içinde Kurum'a bildirilir) ya da eşdeğer bir dayanak gerekir. Anthropic'in bunu imzalayıp imzalamadığı belirsizdir, yazılı sorun.
4. **İç politika:** Çalışanların hangi veriyi paylaşıp paylaşamayacağını yazılı belirleyen bir Yapay Zeka Kullanım Politikası şarttır ([Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/)).

Çalışanların hassas kişisel veriyi (TC kimlik no, sağlık verisi, tam isim ile finansal kayıt birleşimi) bireysel Pro hesabında işlemesi risklidir ve denetimde sorun yaratır. Doğru kurulumda Claude, Microsoft 365 veya Google Workspace gibi diğer bulut araçlarıyla aynı KVKK rejiminde çalışır. Ayrıntı: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/). Bu hukuki görüş değildir, hukuk danışmanınızla doğrulayın.

### Anthropic çalışanları konuşmalarımızı okuyabilir mi?

**Kısa cevap: Varsayılan olarak hayır. Erişim yalnızca açık izninizle veya Kullanım Politikası ihlali incelemesinde, katı dahili kontrollerle olur.**

Anthropic'in iç güvenlik mimarisi konuşmalara erişimi varsayılan olarak engeller; çalışanların "müşteri konuşmalarına bakma" yetkisi yoktur. Yetki yalnızca iki durumda devreye girer:

1. **Açık ve yazılı izin:** Örneğin "şu konuşmada sorun var, inceleyebilir misiniz?" diye destek talebi açtığınızda.
2. **Kullanım Politikası ihlali:** Otomatik sistemler bir ihlal tespit ederse (CSAM, terör propagandası, kritik altyapı saldırı planı gibi) inceleme başlar ve sınırlı erişim verilir.

Tüm erişimler loglanır ve denetlenir. **Zero Data Retention** (API için sözleşme düzenlemesi, plan değil; satış ekibiyle kuruluş başına talep edilir) daha da ileri gider: istem ve yanıtlar, yanıt döndükten sonra Anthropic tarafında depolanmaz. Bankalar, sağlık kurumları ve yüksek hassasiyetli kurumsal müşteriler için önerilir. Detay: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

### Claude offline çalışır mı?

**Kısa cevap: Hayır. Claude bulut tabanlıdır, internet bağlantısı zorunludur ve hava boşluklu (air-gapped) ortamlarda çalıştırılamaz.**

Model Anthropic'in veri merkezlerinde (AWS ve Google Cloud üzerinde) çalışır ve cihaza indirilemez. Nedeni model boyutu (yüz milyarlarca parametre, yüzlerce GB) ve sürekli güncellemedir. Bağlantı kesilirse masaüstü uygulaması, web arayüzü ve API kullanılamaz; offline modu yoktur.

Askeri sistemler, hava boşluklu üretim ağları ve yüksek güvenlikli devlet kurumları için Claude şu an uygun değildir. Bu tip ortamlar için Anthropic'in izole bir dağıtım seçeneği olup olmadığını doğrulayamadık; ihtiyacınız varsa Anthropic satış ekibine yazılı sorun. Yerel donanımda çalışan açık kaynak alternatifler (Llama, Mistral) offline çalışır, ancak Claude'un yetkinlik düzeyinin altındadır. İnternet erişimi olan ofis ortamlarında sorun yoktur.

## Maliyet ve ROI

### Claude ayda ne kadar tutar?

**Kısa cevap: Bireysel Pro $20/ay, Max $100-200/ay. Team ve Enterprise koltuk başına fiyatlanır; güncel rakamlar [Claude Planları](/wiki/temeller/planlar/) sayfasındadır.**

Fiyat, kullanım yoğunluğuna göre kademelidir. Anthropic mesaj sayısı vermez; kullanım 5 saatlik kayan pencere ve haftalık limitle ölçülür ([Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/)).

- **Pro ($20/ay):** Tek kullanıcı, hafif ve orta kullanım. Serbest profesyoneller için yeterli.
- **Max 5x ($100/ay):** Pro'nun 5 katı limit, Fable plana dahil. Yeni öğrenen kullanıcı Pro limitine çabuk çarptığı için yeni başlayanlara ilk ay öneriyoruz; zorunlu değildir.
- **Max 20x ($200/ay):** Çok yoğun kullanım, gün boyu aktif AI iş yükü, geliştirici tipi senaryolar.
- **Team Standard:** Yönetim paneli, merkezi fatura, paylaşılan Projects, SSO, ticari şartlara dahil DPA. En az 2 koltuk. Pro'nun 1,25 katı kullanım.
- **Team Premium:** Pro'nun 6,25 katı kullanım, Fable plana dahil.
- **Enterprise:** Koltuk ücreti kullanımı içermez, kullanım ayrıca API fiyatıyla faturalanır, yani aylık tutar sabit değildir. RBAC, audit log, Compliance API. Zero Data Retention gerekiyorsa API için ayrıca talep edilir.

Fiyatlar vergi hariçtir; Türkiye faturalama adresiyle web ödemesinde %20 KDV eklendiği bildirilir ([Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/)). Yıllık ödemede Pro'da yaklaşık %15, Team'de %20 indirim vardır. Kota bitince **kullanım kredisi** (kullandıkça öde) açılabilir, ayrıntı [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/) sayfasında. Plan detayı: [Claude Planları](/wiki/temeller/planlar/).

### 6 çalışan için toplam abonelik maliyeti nedir?

**Kısa cevap: Koltuk türüne ve kullanım yoğunluğuna göre değişir. Hesaplı ekip örneği tek yerde, [Claude Planları](/wiki/temeller/planlar/) sayfasında.**

Maliyet ay bazında değişir: yeni başlayanlar ilk ay daha yoğun kullanır, sonraki aylarda kullanım oturur.

- **İlk ay:** Yeni başlayan kullanıcılar için ilk ay Max 5x öneriyoruz (zorunlu değil). Pratikte yeni kullanıcı Pro limitini günde birkaç saatte doldurur ve "çalışmıyor" hissiyle vazgeçer; Max 5x bunu önler.
- **Sonraki aylar:** Gerçek kullanım ritmi netleşir. Hafif kullananlar Pro'ya iner, yoğun kullananlar Max'te kalır.
- **Şirket verisi işleyen ekipler:** Karma bireysel hesaplar yerine Team veya Enterprise önerilir; merkezi yönetim, faturalama ve veri kontrolü bunlarda vardır.

### Yatırımın geri dönüşünü nasıl ölçerim?

Claude'a başlamadan önce çalışan başına haftalık süre için bir baseline alın, 3 ay sonra aynı anketi tekrarlayın. [Ölçüm Metrikleri ve ROI](/wiki/temeller/olcum-metrikleri/) sayfasındaki tipik değerlere göre 90. günde çalışan başına ortalama 5-9 saat/hafta tasarruf beklenir; yoğun kullanıcılarda 8-15 saate çıkar. Kendi rakamlarınızla hesaplamak için [ROI Hesaplayıcı](/wiki/temeller/roi-hesaplayici/) sayfasına bakın.

### Küçük şirketim için fazla mı?

Bireysel başlangıç için ilk ay **Max 5x** önerilir (zorunlu değil), sonrasında duruma göre Pro. Wiki ve CLAUDE.md örnekleri ücretsizdir ve her büyüklükteki şirkete, bireysel profesyonele faydalıdır.

## Çalışan Adaptasyonu

### Çalışanlarım Claude'u kullanmak istemezse?

Direnç doğaldır ve beklenir. Çözüm: her çalışanın **kendi gerçek işi üzerinden** Claude'la ilk gerçek çıktıyı üretmesi. "Buna neden ihtiyacım var?" sorusu o an cevaplanır, soyut değil somut.

### Yaşça büyük çalışanlarım teknolojiden çekiniyorsa?

Claude'un büyük avantajı **konuşma arayüzüdür**: kod yok, karmaşık menü yok, sadece Türkçe konuşmak. 60 yaşındaki bir muhasebe müdürü için Claude, 30 yaşındaki bir yazılımcıdan **daha rahat** olabilir.

### Çalışanlar Claude'a bağımlı hale gelmez mi?

Bu gerçek bir risk. [4D Çerçevesi](/wiki/prompting/4d-cercevesi/) tam bunu hedefler: Diligence (Sorumluluk) boyutu, çalışanın her çıktının arkasında durmasını ve sorumluluğu Claude'a devretmemesini söyler. **Claude yazar, siz karar verirsiniz** ilkesi sürekli geçerlidir.

### Claude'a öğrettiklerimiz, çalışan ayrıldığında şirketten gider mi?

**Hayır.** CLAUDE.md dosyası, prompt kütüphanesi ve workspace klasörü **şirketin mülküdür**, çalışanın değil. Bu dosyalar iş bilgisayarında durur ve çalışan ayrıldığında şirketle kalır.

## Teknik Konular

### Hangi Claude modelini kullanmalıyım?

**Kısa cevap: Sonnet 5.5. Günlük işte varsayılan tercih budur.**

Anthropic dört model sunar ve her birinin kendi kullanım senaryosu vardır:

- **Haiku 4.5:** En hızlı ve hafif. Basit sınıflandırma, kısa yanıt, otomasyon arka planı için uygundur; derin akıl yürütme gerektiren işlerde yetersiz kalır.
- **Sonnet 5.5:** Dengeli; hız ve yetkinlik arasındaki en iyi nokta. Kurumsal günlük işin büyük çoğunluğunda doğru tercihtir: sözleşme analizi, rapor yazımı, Türkçe iş yazışması, kod inceleme, doküman özetleme, Cowork iş akışları.
- **Opus 5.5:** Daha güçlü ve daha pahalı. Çok derin araştırma, karmaşık akıl yürütme, ileri kod üretimi ve ajan işleri gibi ağır işler için ayırın.
- **Fable 5.1:** En güçlü genel model; erişimi plana göre değişir. Max ve Team Premium'da plana dahil (haftalık limitin en fazla yarısına kadar), Pro ve Team Standard'da yalnız kullanım kredisiyle, Free'de yok ([Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/)).

Model seçimine değil çıktı kalitesine (prompt, bağlam, CLAUDE.md) enerji harcayın; Sonnet doğru kurulduğunda çoğu işte yeter. [Modeller detay](/wiki/temeller/modeller/).

### Claude Türkçeyi iyi konuşur mu?

**Kısa cevap: Evet, profesyonel düzeyde. Resmi yazışma, teknik terminoloji, hukuk dili ve iş kültürü nüansları doğru yakalanır.**

Güncel modeller (Sonnet 5.5, Opus 5.5, Fable 5.1) Türkçe çıktıda üst seviyededir. Test edilen kullanım alanları:

- **Resmi yazışma:** KDV iadesi başvurusu, SGK yazışmaları, KVKK Kurumu bildirimi, vergi dairesi
- **Hukuk dili:** Sözleşme maddesi taslağı, ihtarname, dilekçe
- **Teknik terminoloji:** Mühendislik raporu, üretim talimatı, IT belgelendirmesi
- **İş kültürü nüansları:** Üst yönetimle resmi e-posta tonu, müşteri itirazına yumuşak cevap, kriz iletişimi

Türkçe karakterler (ş, ç, ı, ğ, ü, ö, İ) ve büyük-küçük harf dönüşümü sorunsuzdur; deyim ve atasözleri anlaşılır, çeviri yapay kalmaz.

**Sınırlar:** Bazı Osmanlıca ve eski Türkçe terimler eksiktir, çok yerel şiveler (Karadeniz, Doğu Anadolu) bazen genelleştirilir. ChatGPT ve Gemini ile karşılaştırıldığında Claude kurumsal iş dilinde ton ve nezaket ayarında güçlüdür, ama halüsinasyon riski Türkçede de geçerlidir ([Sınırlamalar](/wiki/temeller/sinirlamalar/)). Önemli metinleri her zaman gözden geçirin; düzeltme süresi İngilizce çıktıyla benzerdir. Ayrıntı: [Türkçe Performansı](/wiki/temeller/turkce-performansi/).

### Claude internete bağlı mı?

**Kısa cevap: Modelin kendisi hayır, ama web araması açıkken Claude gerektiğinde internette arama yapar.**

Model, statik bir "bilgi kesim tarihiyle" çalışır (güncel modellerde Haziran 2026, Haiku 4.5'te Şubat 2025). Bu tarihten sonraki olayları, son haberleri, bugünün döviz kurunu, anlık hisse fiyatını veya yeni mevzuat değişikliklerini kendiliğinden bilmez. **Web arama** claude.ai arayüzünde ve Cowork'te vardır; açıkken Claude gerçek zamanlı arama yapar, sonuçları özetler ve kaynak linki gösterir ([Web Arama](/wiki/araclar/web-arama/)).

- **Web arama gerekmez:** Rapor yazma, sözleşme analizi, prompt geliştirme, kod inceleme gibi anlık bilgi gerektirmeyen işler. Çıktı daha hızlı gelir.
- **Web arama gerekir:** Güncel sektör haberi, son mevzuat, fiyat araştırması, rakip analizi. Aramayı açın veya bilgiyi prompt'a kendiniz yapıştırın.
- **Güvenlik:** Arama sorgusu dışarı gider, o yüzden gizli bilgiyi sorgunun içine koymayın.

### Claude kod yazabilir mi?

**Evet.** İş profesyoneli için değerli olan kısım şudur: "Bir PowerShell script'i yaz, şunu otomatize et" diyebilirsiniz. Çalışan kod öğrenmez, Claude script'i üretir ve çalışan sonucu doğrular. [Bilgi Teknolojileri](/wiki/departmanlar/bilgi-teknolojileri/) sayfasında detay.

### Claude bilgisayarımı kontrol edebilir mi?

**Evet, [Computer Use](/wiki/yetenekler/computer-use/) özelliğiyle, ama sınırlı.** Bu özellik **research preview** aşamasındadır, yalnızca Pro ve Max planlarında, Claude Desktop uygulaması (macOS, Windows) içinde Cowork ve Claude Code ile çalışır; Team ve Enterprise'ta yoktur. Eylemler şeffaftır ve sizin kontrolünüzdedir. API'si olmayan eski sistemlerde (Logo, Netsis, eski ERP) otomasyon için denenebilir, ama üretimde ona güvenmeden önce test edin.

## ChatGPT ve Diğer Alternatifler

### ChatGPT kullanıyoruz, Claude'a geçmemiz gerekir mi?

**Kısa cevap: Şart değil, ama kurumsal iş kullanımında değer artışı ciddi olabilir. CLAUDE.md, uzun bağlam ve KVKK netliği belirleyici farklardır.**

ChatGPT (OpenAI) ve Claude (Anthropic) birbirinin doğrudan rakibidir. Tüketici kullanımında benzerler, kurumsal iş entegrasyonunda ayrışırlar.

**Claude'un üstün olduğu alanlar:**

- **Kalıcı talimat şeffaflığı:** Modelin nasıl davranacağını profil/proje talimatı ve (Cowork'te) klasördeki CLAUDE.md gibi düz metin kurallarla yönlendirirsiniz; bu, ChatGPT'nin Custom Instructions'undan çok daha derindir.
- **Uzun belge performansı:** Güncel modellerde 1M token bağlam. OpenAI'nin güncel API modelleri de benzer bağlam sunduğu için fark boyuttan çok doküman sadakatinde ve çalışma biçiminde aranmalıdır.
- **Cowork iş akışı:** Paralel agent koordinasyonu.
- **KVKK ve veri politikası netliği:** DPA dili daha net, Zero Data Retention seçeneği var, Team planında varsayılan no-training güvencesi sözleşmede.

**ChatGPT'nin üstün olduğu alanlar:** Yaratıcı yazım hızı, görsel üretim (Claude görsel üretmez), eklenti ekosisteminin genişliği, kod yorumlayıcı (Code Interpreter) olgunluğu, ses arayüzü kalitesi.

**Karar özeti:** Yaratıcı içerik ağırlıklıysa ChatGPT yetebilir; sözleşme, rapor ve uzun doküman ağırlıklıysa Claude öne geçer. Çoğu kurumsal müşteri ikisini birlikte kullanır, departmana göre seçer. Detaylı karşılaştırma: [Claude vs ChatGPT](/wiki/temeller/claude-vs-chatgpt/). Geçmeye karar verirseniz tercihlerinizi ve hafızanızı tek kopyala-yapıştırla taşımak için [ChatGPT'den Claude'a geçiş](/claude/gecis/) sayfasına bakın.

### Hem ChatGPT hem Claude kullanabilir miyim?

Evet. Birçok profesyonel ikisini farklı işler için kullanır. Pratikte her çalışan bir süre sonra birini ana araç olarak seçer, bu tercih role bağlıdır.

### Grok, Gemini, Mistral gibi diğer modelleri denemeli miyim?

Tüketici kullanımı için denenebilir. Kurumsal tarafta Google (Gemini) ve Microsoft (Copilot) da ciddi planlar sunuyor; bu iki rakibi [Claude vs Gemini](/wiki/temeller/claude-vs-gemini/) ve [Claude vs Copilot](/wiki/temeller/claude-vs-copilot/) sayfalarında karşılaştırdık. Grok ve Mistral için kurumsal olgunluk değerlendirmemiz henüz yok.

## Uygulama ve Güncellik

### Claude ne sıklıkla değişiyor?

Anthropic çok sık iterasyon yapar: 2026'da yeni model sürümleri neredeyse her ay geldi, özellikler ise haftalık değişiyor. Wiki'deki bilgiler yaşayan belgelerdir, önemli değişiklikler burada güncellenir; yeni gelişmeler için [Haberler](/haberler/) sayfasına bakın.

## İlgili Sayfalar

- [Claude Nedir?](/wiki/temeller/claude-nedir/): Temel kavram
- [Claude Planları](/wiki/temeller/planlar/): Fiyat detayları
- [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/): 5 saatlik pencere, haftalık limit, kullanım kredisi
- [Claude'un Sınırları](/wiki/temeller/sinirlamalar/): Dürüst sınırlar
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Veri güvenliği detayları
- [Claude vs ChatGPT](/wiki/temeller/claude-vs-chatgpt/): Alternatiflerle karşılaştırma
