---
title: İleri Seviye Prompt Engineering
description: "XML tag'leri, few-shot prompting, prompt chaining, adaptif düşünme — temellerden sonra çıktı kalitesini katlayan teknikler."
tags:
  - prompting
  - ileri-seviye
  - xml-tags
  - few-shot
  - prompt-chaining
---

[Prompting temel ilkelerini](temel-ilkeler/) öğrenen çalışan iş çıktılarının %80'ini zaten kapsamış olur. Kalan %20, iyi olmayı mükemmele yaklaştıran ileri tekniklerdir.

Bu sayfa tutarlı biçimde üstün çıktı üreten 6 tekniği anlatır. Zamana'nın 2. oturum koçluğunda devreye giren ve kaliteli prompt kütüphaneleri kurmanın bel kemiği olan bilgi.

## 1. XML Tag'leri — Claude'un Yapısal Dili

XML tag'leri, Claude'un karmaşık promptları ayrıştırmak için tercih ettiği formattır. Markdown (görsel) değil — **anlamsal** sınırlar çizer. Talimat, bağlam, örnek ve girdi karıştığında XML yanlış yorumlamayı önler.

**Kullanım örneği:**

```xml
<context>
Bir lojistik şirketinin operasyon yöneticisine yardım ediyorsun. Şirket
Türkiye'de endüstriyel kimyasal sevkiyatı yapıyor.
</context>

<task>
Aşağıdaki durum için bir tedarikçi gecikme bildirimi e-postası yaz.
</task>

<situation>
{{DURUM}}
</situation>

<constraints>
- Resmi Türkçe iş tonu
- Özür yok — olgu ve çözüm odaklı
- 150 kelimenin altında
- Önerilen yeni teslim tarihini dahil et
</constraints>
```

**İş kullanımı için önerilen tag isimleri:**

- `<context>` — arka plan ve durum
- `<task>` — ne istediğiniz
- `<document>` veya `<input>` — Claude'un üzerinde çalışacağı içerik
- `<constraints>` — kaçınılacak, format gereksinimleri, uzunluk
- `<example>` — takip edilecek örnek çıktı
- `<output_format>` — cevabın tam yapısı

**Altın kural:** Uzun belgeleri ve bağlamı **talimatların ÜSTÜNE** koyun. Soruyu en sona yazın. Bu yapı karmaşık görevlerde çıktı kalitesini %30'a kadar artırır.

## 2. Few-Shot Prompting — Örneklerle Öğretme

Claude'a iyi çıktının nasıl göründüğünü **tarif etmek** yerine **göstermek** daha güvenilirdir. 2-5 örneği `<examples>` tag'leri içinde verin.

Örnekler üç kriteri karşılamalı:

- **Alakalı:** gerçek kullanım senaryonuzla yakın eşleşme
- **Çeşitli:** sınır durumları ve varyasyonları kapsamalı
- **Yapılı:** talimatlardan ayrılabilecek şekilde etiketlenmeli

**Örnek yapı:**

```xml
<examples>
<example>
<input>Müşteri gecikmeden şikayet etti</input>
<output>Sayın [İsim], siparişinizin gecikmesi konusundaki bilginiz için
teşekkür ederiz. Yeni tahmini teslimat tarihiniz [Tarih]'tir. Herhangi
bir sorunuz için [İletişim] aracılığıyla bize ulaşabilirsiniz.</output>
</example>

<example>
<input>Ürün hasarlı geldi</input>
<output>Sayın [İsim], ürününüzün hasarlı ulaştığını duymak bizi üzdü.
Aynı gün kargoyla yenisini gönderiyoruz, takip numaranız [NO]. Hasarlı
ürünü iade etmenize gerek yok.</output>
</example>
</examples>
```

Bu yaklaşım, 20 paragraflık bir talimat listesinden çok daha tutarlı çalışır.

## 3. Zincirleme Düşünme (Chain-of-Thought)

Karmaşık analiz gerektiren görevlerde Claude'dan **önce düşünmesini, sonra cevap vermesini** isteyin.

**Basit tetikleyici:**
> *"Cevaptan önce bunu dikkatle düşün."*

**Yapılandırılmış tetikleyici:**
> *"Akıl yürütmeni adım adım özetle, sonra sonucunu ver."*

**Analiz görevleri için:**
> *"Yazmadan önce bilmem gereken 3 en önemli şeyi belirle. Sonra yaz."*

Bu, muhakemeyi görünür kılar — hem kalite artar hem de hata kaynağı tespit edilebilir olur.

## 4. Claude'u Eleştirmen Yapmak

Çıktı ürettikten sonra Claude'a rol değiştirterek çıktıyı eleştirmesini isteyin. Bu teknik göndermeden önce zayıflıkları yüzeye çıkarır.

> *"Bu teklifi şüpheci bir satın alma müdürü olarak oku. En zayıf üç noktası nedir?"*
> *"Talep eden bir CEO rolüne gir. Bu rapor cevaplamadığı hangi soruyu sorar?"*
> *"Bu müzakerede karşı taraf rolünde davran. Bizim karşı teklifimizin ele almadığı hangi manivelaları var?"*

İyi bir çalışan, önemli bir çıktıyı göndermeden önce bu eleştirmen turunu mutlaka yapar.

## 5. Çıktı Formatını Açıkça Kontrol Etme

Claude'a ne format istediğinizi **tahmin bırakmayın**. Format talimatları **spesifik ve pozitif** olduğunda en iyi çalışır — sadece "yapma"larla değil, "yap"larla.

**Zayıf:**
> *"Madde işareti kullanma"*

**Güçlü:**
> *"Akıcı paragraflar halinde yaz. Madde işareti yok, başlık yok. Resmi iş dili."*

**Zayıf:**
> *"Daha kısa yap"*

**Güçlü:**
> *"Maksimum 200 kelime. Tek paragraf. Önsöz yok — doğrudan ana noktayla başla."*

**Yapılandırılmış çıktı için:** Tam yapıyı söyleyin:

```text
Cevabını tam olarak şu formatta ver:

ÖZET: [Tek cümle]
TEMEL BULGULAR: [3 madde]
ÖNERİLEN EYLEM: [Tek somut tavsiye]
```

## 6. Prompt Chaining — Karmaşık Görevleri Adımlara Bölmek

Çok adımlı işler için **tek dev prompt** yerine **sıralı promptlar** kullanın. Her adım bir öncekinin üstüne inşa edilir.

**Örnek — stratejik rapor yazma:**

1. *"2026'da kükürt piyasası için en önemli 5 trendi belirle. Sadece liste."*
2. *"Belirlediğin her trend için, Türkiye'deki bir emtia tüccarına etkisini yaz."*
3. *"Bu analize dayanarak, yönetim kurulu sunumu için 3 paragraflık bir yönetici özeti yaz."*

Bu yaklaşım *"Türk tüccar için kükürt piyasası trendleri üzerine stratejik rapor yaz"* promptundan çok daha iyi sonuç verir. Çünkü her adımda Claude'un dikkati fokuslu kalır ve siz her adımda ara kontrol yapabilirsiniz.

## 7. Adaptif Düşünme — Claude'a Ne Kadar Sıkı Düşüneceğini Söylemek

Karmaşık görevlerde Claude'a daha derin düşünmesini açıkça söyleyebilirsiniz:

> *"Cevaptan önce tüm etkileri dikkatle düşün."*
> *"Bu yüksek riskli bir karar. Titizlikle akıl yürüt."*
> *"Sonuca varmadan önce birden fazla perspektifi değerlendir."*

Basit görevlerde tersini söyleyin:

> *"Doğrudan cevapla. Akıl yürütmeni açıklamana gerek yok."*

Bu, kullanım biçimi yerine kullanım niyetini iletir.

## 8. "Bağlam Önce" — İleri Seviye

Bağlam verme alışkanlığı temel prompting'te öğretilir. İleri seviyede bunu bir disiplin haline getirirsiniz. Claude'un çıktı kalitesi, aldığı bağlamın **alaka düzeyi ve tamlığıyla orantılıdır**.

**Zayıf:**
> *"Bir tedarikçi reddi mektubu yaz."*

**Güçlü:**
> *"Bir tedarikçi reddi mektubu yaz. Bağlam: Akmin Dış Ticaretiz. Bir tedarikçiden bitümen teklifi aldık, $450/MT CFR İstanbul. Bütçemiz $420/MT. 30 gün içinde yeniden müzakere kapısını açık bırakmak istiyoruz. Tedarikçi 2 yıldır güvenilir partner. Ton profesyonel ve ilişki-koruyucu olsun."*

İkinci versiyon neredeyse iterasyon gerektirmez. İlkinden 3-4 tur iyileştirme gerekir ve yine de genel bir şablon çıkar.

## Prompt Kütüphanesi — Test Edilmiş Prompt Koleksiyonunuz

Bir prompt kütüphanesi, sizin tarafınızdan test edilmiş ve iyileştirilmiş promptların kişisel koleksiyonudur. İyi çalışan her prompt kütüphanenize şunlarla kaydedilmeli:

- **Başlık:** Kullanım senaryosunu tarif eden
- **Tam prompt metni:** Yer tutucu değişkenlerle (`{{MÜŞTERİ_ADI}}`, `{{ÜRÜN}}`)
- **Kullanım notu:** Ne zaman kullanılır, neyi ayarlamak gerekir
- **Son kullanım/güncelleme tarihi**

**Cowork'te kütüphane:**

Workspace klasörünüzde bir `prompts/` klasörü yaratın. Her prompt ayrı bir `.md` dosyası olsun. Claude bu kütüphaneden talep üzerine okuyabilir.

**Zamana hedefi:**

- 2. Oturum sonunda her çalışanın **5-10 prompt**'u olmalı
- 3 aylık retainer sonunda **30-50 prompt** olmalı — tüm yaygın iş görevlerini kapsayan

Prompt kütüphanesi, programdan kalan en somut ve en değerli varlıktır. İşten ayrıldığında yanınıza alırsınız; bir sonraki işinizde çalışmaya devam eder.

## Gelişimi Ne Kadar Önemsemelisiniz?

Dürüst cevap: **orta düzeyde**.

İleri teknikler çıktı kalitesini artırır, ama temel ilkeleri atlayıp XML tag'leri öğrenmek boşa yatırımdır. Temellerin sağlam olduğunda, ileri teknikler doğal olarak ince ayar sağlar.

Önerilen sıralama:

1. **Önce:** [Temel İlkeler](temel-ilkeler/) — 5 bileşen yapısı oturtulana kadar
2. **Sonra:** [4D Çerçevesi](4d-cercevesi/) — kavramsal zemin
3. **En son:** Bu sayfa — XML, few-shot, chaining

Bir haftada üçü birden öğrenilmez. Bir ayda oturur.

## İlgili Sayfalar

- [Prompting Temel İlkeleri](temel-ilkeler/) — Bu sayfanın ön koşulu
- [4D Çerçevesi](4d-cercevesi/) — Kavramsal zemin
- [Yaygın Prompting Hataları](yaygin-hatalar/) — Hata tipleri ve düzeltmeleri
- [Cowork Modu](../araclar/cowork-modu/) — Prompt kütüphanenin yaşadığı ortam

