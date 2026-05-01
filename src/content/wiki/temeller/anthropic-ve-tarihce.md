---
title: "Anthropic ve Claude'un Tarihçesi"
description: "Claude'u yapan şirket Anthropic'i tanıyın — kurucular, ayrılış hikâyesi, Constitutional AI, model tarihçesi ve neden güvenilir bir AI ortağı."
tags:
  - temeller
  - anthropic
  - tarihce
---

**Anthropic, Claude'u yapan şirkettir.** Kurumsal bir aracı sözleşmeye bağlamadan önce arkasındaki şirketi tanımak doğal — bu sayfa Anthropic'i, kuruluşunu, değerlerini ve Claude'un model tarihçesini özetler.

[Claude Nedir?](claude-nedir/) sayfası ürünün ne olduğunu anlatır; bu sayfa **kim yapıyor, neye değer veriyor** sorularına cevap verir.

## Kuruluş — 2021, OpenAI'den Ayrılış

Anthropic, **2021 yılı başında** kuruldu. Yedi kişilik kurucu ekip OpenAI'dan ayrıldı; aralarında en bilinenleri **Dario Amodei** (CEO, eski OpenAI Araştırma Başkan Yardımcısı) ve kız kardeşi **Daniela Amodei** (Başkan). Diğer kurucular arasında Tom Brown (GPT-3 baş yazarı), Jack Clark, Sam McCandlish, Chris Olah ve Jared Kaplan var.

**Neden ayrıldılar?** Yön farkı. OpenAI'ın ticari hızla büyümesini, güvenlik araştırmalarının önüne geçmesini doğru bulmadılar. Anthropic'i **AI güvenliği önce gelen** bir araştırma şirketi olarak kurdular.

İlk yatırım: Mayıs 2021'de **124 milyon dolar Seri A**.

## Kurumsal Yapı — Public Benefit Corporation

Anthropic geleneksel bir kâr amaçlı şirket değil. **Public Benefit Corporation (PBC)** olarak yapılandırılmıştır — yani yönetim kurulu yalnızca hissedar getirisini değil, **kamu yararını** da gözetmek zorundadır.

Bunun üzerine **Long-Term Benefit Trust** adlı bir vakıf, Anthropic'in uzun vadeli kararlarını insanlık yararına yönlendirme yetkisine sahiptir. Bu yapı, ticari baskı arttıkça güvenlik tavizini kontrol altında tutmak için tasarlandı.

**Pratik anlamı:** Anthropic teorik olarak hızlı para için risk almayacak şekilde yapılandırılmış. Bu kurumsal alıcı için bir güven sinyalidir — özellikle [KVKK](gizlilik-kvkk/) ve veri uygulamaları açısından.

## Constitutional AI — Anthropic'in Ayırt Edici Yöntemi

Anthropic'in temel araştırma katkısı **Constitutional AI** (Anayasal AI) yöntemidir. Geleneksel AI eğitiminde model, insan etiketleyicilerin verdiği geri bildirimle "iyi" davranışı öğrenir (RLHF). Constitutional AI bunu bir adım ileri taşır:

1. Modele bir **"anayasa"** verilir — insan haklarına dayalı, zarar vermeme odaklı bir ilkeler seti
2. Model kendi çıktılarını bu anayasaya göre değerlendirir
3. Kendi cevaplarını eleştirir, düzeltir, daha iyi versiyonlar üretir

**Pratik sonucu:** Claude diğer modellere göre daha **dengeli, dürüst, tehlikeli içerikten kaçınan** üretim yapar. Bu sadece pazarlama değil — bağımsız değerlendirmelerde Claude güvenlik kıyaslamalarında üstte çıkar.

## Yatırımcılar ve Mali Durum

- **Google** — yaklaşık 2 milyar dolar yatırım
- **Amazon** — yaklaşık 4 milyar dolar yatırım (sonradan ek turlarla daha da büyüdü)
- **Diğer:** Spark Capital, Lightspeed, Salesforce Ventures, Menlo Ventures
- **Toplam toplanan sermaye:** ~67 milyar dolar (17 turda, Şubat 2026 itibariyle)
- **Tahmini değerleme:** ~380 milyar dolar (Şubat 2026)

**Ne anlama geliyor?** Anthropic kısa vadede kapanma veya satılma riski olan bir startup değil. Kurumsal bir alıcı için **uzun vadeli tedarikçi güvenilirliği** açısından bu önemli bir veridir.

## Sorumlu Ölçekleme — Responsible Scaling Policy (RSP)

Anthropic, AI modellerinin yetenek seviyelerini **AI Safety Levels (ASL)** sistemi ile sınıflar:

- **ASL-1:** Bariz risksiz modeller (basit chat botlar)
- **ASL-2:** Şu anki Claude — bilinen riskler yönetilebilir
- **ASL-3:** Belirgin yeni risk barındıran modeller (örn. siber güvenlik)
- **ASL-4 ve üzeri:** Henüz var olmayan, çok ileri yetenek seviyeleri

Şirket her seviye için **önceden tanımlanmış güvenlik kontrolleri** uygular. Bir modelin yeteneği bir üst seviyeye geçtiğinde, o seviyenin gerektirdiği güvenlik mekanizmaları kurulmadan model dağıtılmaz.

Bu yaklaşım sektörde nadirdir ve kurumsal alıcılar için **denetlenebilir bir dürüstlük taahhüdüdür**.

## Claude Model Tarihçesi

Claude'un gelişimi hızlı oldu. Ana noktalar:

| Tarih | Model | Önemi |
|---|---|---|
| Mart 2023 | **Claude 1** | İlk halka açık sürüm |
| Temmuz 2023 | **Claude 2** | Daha uzun bağlam, daha iyi muhakeme |
| Mart 2024 | **Claude 3 (Opus / Sonnet / Haiku)** | Üç katmanlı isimlendirme; görsel anlama |
| Haziran 2024 | **Claude 3.5 Sonnet** | Orta seviye, üst seviyeyi geride bıraktı; [Artifacts](../yetenekler/artifacts/) tanıtıldı |
| Ekim 2024 | **Claude 3.5 Sonnet v2** | [Computer Use](../yetenekler/computer-use/) — bilgisayar arayüzü kontrolü |
| Şubat 2025 | **Claude 3.7 Sonnet** | Genişletilmiş düşünme (extended thinking) — adım adım muhakeme |
| Mayıs 2025 | **Claude 4** | Profesyonel kod üretiminde sıçrama; Claude Code günlük araç oldu |
| Şubat 2026 | **Claude Sonnet 4.6** | Verimlilik kıyaslamalarında zirve |
| Nisan 2026 | **Claude Opus 4.7** (1M context) | En güçlü Opus; uzun çalışan görevler, yüksek çözünürlüklü görsel |

İsimlendirme mantığı için [Modeller](modeller/) sayfasına bakın — Haiku/Sonnet/Opus seçimi pratik fark yaratır.

## "Claude" İsmi Nereden?

Modelin adı, bilgi kuramı ve dijital iletişimin babası **Claude Shannon**'dan geliyor. Bilgiyi ölçülebilir bir kavrama indirgeyen Shannon, modern hesaplama ve iletişimin matematiksel temellerini attı. Anthropic ismi seçerken hem entelektüel saygı hem de AI'ın kökleri olan bilgi kuramına bir göndermede bulundu.

## Anthropic Kültürü

Bilinen çizgiler:

- **Araştırmacı ağırlıklı.** Şirketin önemli bir kısmı doğrudan AI güvenliği ve hizalama (alignment) araştırması yapıyor
- **Şeffaflık önceliği.** Model sınırları, [yetersizlikleri](sinirlamalar/), hata türleri Anthropic tarafından açıkça belgeleniyor
- **Yavaş ilerleme.** Yeni özellik çıkarma hızı OpenAI veya Google'a göre daha temkinli
- **CEO erişilebilir.** Dario Amodei düzenli olarak teknik yazılar yazıyor, sektörün önemli sorularına kamuoyu önünde cevap veriyor

## Türkiye'de Anthropic

Anthropic'in **Türkiye'de doğrudan ofisi yoktur.** Lokalize satış, teknik destek veya hukuki temsilci bulunmaz. Bu boşluğu Zamana köprülemek için kuruldu — Türkçe dilinde, Türkiye'nin iş bağlamında Claude'u öğretip kurumlara entegre eden eğitim ve danışmanlık.

[Türkçe Performansı](turkce-performansi/) sayfası dil tarafının kalitesini, [Gizlilik ve KVKK](gizlilik-kvkk/) sayfası Türkiye'deki yasal duruma uyum tarafını anlatır.

## Anthropic Neden Önemli?

Birkaç bağlamda:

**Pazar gücü.** ChatGPT'nin (OpenAI) tek alternatifi değil ama Google'la birlikte üst sıradaki üç oyuncudan biri. Tek tedarikçiye kilitlenmemek için kurumların portföylerinde Claude bulundurmasının stratejik gerekçesi var.

**Güvenlik kültürü.** Constitutional AI, RSP, PBC yapısı — hepsi "ticari hız vs güvenlik" tartışmasında güvenlik tarafına ağırlık koyan tasarımlardır. Hassas veriyle çalışan kurumlar için (hukuk, finans, sağlık) bu önemlidir.

**Mali sağlamlık.** Onlarca milyar dolar fonlanmış bir şirketin yarın kapanma riski düşük. Tedarikçi sürekliliği için bu önemli.

## İlgili Sayfalar

- [Claude Nedir?](claude-nedir/) — Ürünün kendisi
- [Modeller](modeller/) — Haiku / Sonnet / Opus seçimi
- [Gizlilik ve KVKK](gizlilik-kvkk/) — Veri uygulamaları
- [Sınırlamalar](sinirlamalar/) — Anthropic'in kabul ettiği kısıtlar
- [Claude vs ChatGPT](claude-vs-chatgpt/) — Rakip karşılaştırması
- [Yaygın İtirazlar](itirazlar/) — "Bu şirkete neden güvenelim?" itirazına detay cevap

