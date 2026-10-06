---
title: "Anthropic ve Claude'un Tarihçesi"
description: "Claude'u yapan şirket Anthropic'i tanıyın, kurucular, ayrılış hikâyesi, Constitutional AI, model tarihçesi ve neden güvenilir bir AI ortağı."
tags:
  - temeller
  - anthropic
  - tarihce
lastUpdated: "2026-10-06"
---

**Anthropic, Claude'u yapan şirkettir.** Kurumsal bir aracı sözleşmeye bağlamadan önce arkasındaki şirketi tanımak doğaldır. Bu sayfa Anthropic'i, kuruluşunu, değerlerini ve Claude'un model tarihçesini özetler.

[Claude Nedir?](/wiki/temeller/claude-nedir/) sayfası ürünün ne olduğunu anlatır; bu sayfa **kim yapıyor, neye değer veriyor** sorularına cevap verir.

## Kuruluş: 2021, OpenAI'den Ayrılış

Anthropic, **2021 yılı başında** kuruldu. Yedi kişilik kurucu ekip OpenAI'dan ayrıldı; aralarında en bilinenleri **Dario Amodei** (CEO, eski OpenAI Araştırma Başkan Yardımcısı) ve kız kardeşi **Daniela Amodei** (Başkan). Diğer kurucular arasında Tom Brown (GPT-3 baş yazarı), Jack Clark, Sam McCandlish, Chris Olah ve Jared Kaplan var.

**Neden ayrıldılar?** Yön farkı. OpenAI'ın ticari hızla büyümesini, güvenlik araştırmalarının önüne geçmesini doğru bulmadılar. Anthropic'i **AI güvenliği önce gelen** bir araştırma şirketi olarak kurdular.

İlk yatırım: Mayıs 2021'de **124 milyon dolar Seri A**.

## Kurumsal Yapı: Public Benefit Corporation

Anthropic geleneksel bir kâr amaçlı şirket değil. **Public Benefit Corporation (PBC)** olarak yapılandırılmıştır, yani yönetim kurulu yalnızca hissedar getirisini değil, **kamu yararını** da gözetmek zorundadır.

Bunun üzerine **Long-Term Benefit Trust** adlı bir vakıf, Anthropic'in uzun vadeli kararlarını insanlık yararına yönlendirme yetkisine sahiptir. Bu yapı, ticari baskı arttıkça güvenlik tavizini kontrol altında tutmak için tasarlandı.

**Pratik anlamı:** Anthropic, hızlı kazanç uğruna risk almayacak şekilde yapılandırılmış. Bu, kurumsal alıcı için bir güven işaretidir, özellikle [KVKK](/wiki/temeller/gizlilik-kvkk/) ve veri konularında.

## Constitutional AI: Anthropic'in Ayırt Edici Yöntemi

Anthropic'in temel araştırma katkısı **Constitutional AI** (Anayasal AI) yöntemidir. Geleneksel AI eğitiminde model, insan etiketleyicilerin verdiği geri bildirimle "iyi" davranışı öğrenir (RLHF). Constitutional AI bunu bir adım ileri taşır:

1. Modele bir **"anayasa"** verilir: insan haklarına dayalı, zarar vermeme odaklı bir ilkeler seti
2. Model kendi çıktılarını bu anayasaya göre değerlendirir
3. Kendi cevaplarını eleştirir, düzeltir, daha iyi versiyonlar üretir

**Pratik sonucu:** Claude diğer modellere göre daha **dengeli, dürüst, tehlikeli içerikten kaçınan** üretim yapar. Bu Anthropic'in kendi iddiası; bağımsız güvenlik kıyaslamaları da yapılıyor, ama sıralama kıyaslamaya ve model sürümüne göre değişir.

## Yatırımcılar ve Mali Durum

- **Google**: yaklaşık 2 milyar dolar yatırım
- **Amazon**: yaklaşık 4 milyar dolar yatırım (sonradan ek turlarla daha da büyüdü)
- **Diğer:** Spark Capital, Lightspeed, Salesforce Ventures, Menlo Ventures
- **Toplam toplanan sermaye:** Şubat 2026'ya kadar 17 turda yaklaşık 67 milyar dolar (Anthropic bu toplamı kendi sayfasında vermiyor; rakam ikincil kaynaklara dayanır)
- **Series H (Mayıs 2026):** 65 milyar dolarlık tur (28 Mayıs; bunun 15 milyar doları büyük bulut sağlayıcılarından önceden taahhüt edilen yatırım), **965 milyar dolar** işlem sonrası (post-money) değerleme

**Ne anlama geliyor?** Anthropic kısa vadede kapanma veya satılma riski olan bir startup değil. Kurumsal bir alıcı için **uzun vadeli tedarikçi güvenilirliği** açısından bu önemli bir veridir.

## Sorumlu Ölçekleme: Responsible Scaling Policy (RSP)

Anthropic, AI modellerinin yetenek seviyelerini **AI Safety Levels (ASL)** sistemi ile sınıflar:

- **ASL-1:** Bariz risksiz modeller (basit chat botlar)
- **ASL-2:** Bilinen riskleri yönetilebilir modeller (önceki kuşakların düzeyi)
- **ASL-3:** Belirgin yeni risk barındıran modeller (örn. biyolojik silah ya da siber güvenlik riski). Anthropic, 2025'ten itibaren en yetenekli Claude modellerinde ASL-3 korumalarını uyguluyor
- **ASL-4 ve üzeri:** Henüz var olmayan, çok ileri yetenek seviyeleri

Şirket her seviye için **önceden tanımlanmış güvenlik kontrolleri** uygular. Bir modelin yeteneği bir üst seviyeye geçtiğinde, o seviyenin gerektirdiği güvenlik mekanizmaları kurulmadan model dağıtılmaz.

Bu yaklaşım sektörde nadirdir ve kurumsal alıcılar için **denetlenebilir bir dürüstlük taahhüdüdür**.

## 2026 Ortası Gelişmeleri

Anthropic'in kurumsal olgunlaşmasını gösteren güncel başlıklar:

- **Halka arz yolu (SEC S-1):** Anthropic, 1 Haziran 2026'da ABD menkul kıymet düzenleyicisine (SEC) **gizli taslak kayıt beyanı (S-1)** sundu. Bu, ileride halka açılma (IPO) ihtimalinin ilk resmî adımıdır. Kurumsal alıcı için anlamı: şeffaflık ve mali denetim yükümlülüğü artan, kurumsallaşan bir tedarikçi.
- **Project Glasswing:** AWS, Apple, Google, Microsoft gibi şirketlerle yürütülen, kritik yazılımın güvenliğini hedefleyen çok şirketli bir girişim. Mayıs 2026'da ~150 yeni kuruluşa genişletildi ve **Claude Security** (kod tabanı tarama + yama önerisi) eklendi.
- **Avrupa ve Asya yayılımı:** 27 Mayıs 2026'da **Milano ofisinin** açılacağı duyuruldu (İtalya kurumsal ve geliştirici topluluğu için); Kore'de Seul ofisi öncesi yerel liderlik ataması yapıldı. Anthropic'in uluslararası kurumsal varlığı büyüyor.
- **Ürün tarafı (Haziran-Eylül 2026):** Claude Tag (Slack, 23 Haziran), Cowork'ün web ve mobilde açılması (7 Temmuz), Claude in Chrome'un genel kullanıma açılması (26 Ağustos) ve 16 Eylül'de Cowork ile sohbetin tek Claude'da birleşmesi. Model tarafı için aşağıdaki tabloya bakın.

Bu gelişmeler, "Anthropic geçici bir startup mı, kalıcı bir kurumsal tedarikçi mi?" sorusuna kalıcılık yönünde cevap verir.

## Claude Model Tarihçesi

Claude'un gelişimi hızlı oldu. Ana noktalar:

| Tarih | Model | Önemi |
|---|---|---|
| Mart 2023 | **Claude 1** | İlk halka açık sürüm |
| Temmuz 2023 | **Claude 2** | Daha uzun bağlam, daha iyi muhakeme |
| Mart 2024 | **Claude 3 (Opus / Sonnet / Haiku)** | Üç katmanlı isimlendirme; görsel anlama |
| Haziran 2024 | **Claude 3.5 Sonnet** | Orta seviye, üst seviyeyi geride bıraktı; [Artifacts](/wiki/yetenekler/artifacts/) tanıtıldı |
| Ekim 2024 | **Claude 3.5 Sonnet v2** | [Computer Use](/wiki/yetenekler/computer-use/), bilgisayar arayüzü kontrolü |
| Şubat 2025 | **Claude 3.7 Sonnet** | Genişletilmiş düşünme (extended thinking), adım adım muhakeme |
| Mayıs 2025 | **Claude 4** | Profesyonel kod üretiminde sıçrama; Claude Code günlük araç oldu |
| Şubat 2026 | **Claude Sonnet 4.6** | Verimlilik kıyaslamalarında zirve |
| Nisan 2026 | **Claude Opus 4.7** (16 Nisan) | Uzun çalışan görevler, yüksek çözünürlüklü görsel |
| Mayıs 2026 | **Claude Opus 4.8** (28 Mayıs) | Daha güçlü agentic muhakeme, varsayılan yüksek çaba, dynamic workflows; üç kat ucuz Fast mode |
| Haziran 2026 | **Claude Fable 5** ve **Mythos 5** (9 Haziran) | Yeni üst model katmanı. Erişim 12 Haziran ile 1 Temmuz arası askıya alındı, 1 Temmuz'da geri geldi |
| Haziran 2026 | **Claude Sonnet 5** (30 Haziran) | Yeni kuşak Sonnet |
| Temmuz 2026 | **Claude Opus 5** (24 Temmuz) | Yeni kuşak Opus |
| Eylül 2026 | **Claude Fable 5.1** (1 Eylül) | En güçlü genel model, 1M bağlam. Mythos 5.1 aynı yetenekte ama yalnızca Project Glasswing katılımcılarına davetle |
| Eylül 2026 | **Claude Opus 5.5** (22 Eylül) | Fable 5.1 düzeyinde performans, Opus 5'ten yaklaşık %40 ucuz |
| Eylül 2026 | **Claude Sonnet 5.5** (28 Eylül) | Günlük iş modeli; Sonnet 5'ten yaklaşık %30 hızlı |

Güncel dört model (Fable 5.1, Opus 5.5, Sonnet 5.5, Haiku 4.5) ve hangisini ne zaman seçeceğiniz için [Modeller](/wiki/temeller/modeller/) sayfasına bakın.

## "Claude" İsmi Nereden?

Modelin adı büyük olasılıkla, bilgi kuramının ve dijital iletişimin babası **Claude Shannon**'dan geliyor. Anthropic bunu resmen doğrulamadı ama reddetmedi de. Shannon, bilgiyi ölçülebilir bir kavrama indirgeyerek modern hesaplama ve iletişimin matematiksel temellerini attı.

## Anthropic Kültürü

Bilinen çizgiler:

- **Araştırmacı ağırlıklı.** Şirketin önemli bir kısmı doğrudan AI güvenliği ve hizalama (alignment) araştırması yapıyor
- **Şeffaflık önceliği.** Model sınırları, [yetersizlikleri](/wiki/temeller/sinirlamalar/), hata türleri Anthropic tarafından açıkça belgeleniyor
- **Temkinli yayın.** Yeni modeller önce güvenlik değerlendirmesinden geçer; Fable 5.1 ile aynı yetenekteki Mythos 5.1 genel kullanıma açılmadı, yalnızca Project Glasswing katılımcılarına davetle veriliyor
- **CEO erişilebilir.** Dario Amodei düzenli olarak teknik yazılar yazıyor, sektörün önemli sorularına kamuoyu önünde cevap veriyor

## Türkiye'de Anthropic

Anthropic'in **Türkiye'de doğrudan ofisi yoktur.** Lokalize satış, teknik destek veya hukuki temsilci bulunmaz. Türkiye, Claude.ai ve API için desteklenen ülkeler arasındadır; kullanıcılar Claude'u doğrudan claude.ai üzerinden kullanır. Türkçe iş bağlamında uyum, faturalandırma ve KVKK tarafı ayrıca yönetilmesi gereken konulardır.

Yerel destek olmadığı için ekiplerin Claude'a geçişi çoğunlukla kendi başına kalır. Bu boşluğu Türkçe, iş odaklı ve sizin şirketinizin süreçleri üzerinden dolduran bir [şirket içi Claude eğitimi](/yapay-zeka-egitimi/) seçeneğimiz var.

[Türkçe Performansı](/wiki/temeller/turkce-performansi/) sayfası dil tarafının kalitesini, [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfası Türkiye'deki yasal duruma uyum tarafını anlatır. Erişim, satın alma, fatura ve destek sorularının tek sayfalık cevabı için [Türkiye'de Claude](/wiki/temeller/turkiyede-claude/) sayfasına bakın.

## Anthropic Neden Önemli?

Birkaç bağlamda:

**Pazar gücü.** ChatGPT'nin tek alternatifi değil; OpenAI ve Google ile birlikte üst sıradaki üç oyuncudan biri. Tek tedarikçiye kilitlenmemek için kurumların portföylerinde Claude bulundurmasının stratejik gerekçesi var.

**Güvenlik kültürü.** Constitutional AI, RSP ve PBC yapısı, "ticari hız mı güvenlik mi" tartışmasında güvenliğe ağırlık veren tasarımlardır. Hassas veriyle çalışan kurumlar için (hukuk, finans, sağlık) bu önemlidir.

**Mali sağlamlık.** Yukarıdaki finansman verileri tedarikçi sürekliliği açısından önemlidir.

## İlgili Sayfalar

- [Claude Nedir?](/wiki/temeller/claude-nedir/): Ürünün kendisi
- [Modeller](/wiki/temeller/modeller/): Fable / Opus / Sonnet / Haiku seçimi
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Veri uygulamaları
- [Sınırlamalar](/wiki/temeller/sinirlamalar/): Anthropic'in kabul ettiği kısıtlar
- [Claude vs ChatGPT](/wiki/temeller/claude-vs-chatgpt/): Rakip karşılaştırması
- [Yaygın İtirazlar](/wiki/temeller/itirazlar/): "Bu şirkete neden güvenelim?" itirazına detay cevap

