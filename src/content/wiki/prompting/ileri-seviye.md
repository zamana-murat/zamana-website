---
title: İleri Seviye Prompt Engineering
seoTitle: "İleri Prompt Teknikleri: XML Etiketi, Zincirleme, Eleştirmen"
description: "XML etiketi, uzun belge düzeni, zincirleme, eleştirmen ve düşünme derinliği: temel ilkelerden sonra çıktı kalitesini artıran Claude prompt teknikleri."
tags:
  - prompting
  - ileri-seviye
  - xml-tags
  - few-shot
  - prompt-chaining
lastUpdated: "2026-10-06"
---

[Prompting temel ilkelerini](/wiki/prompting/temel-ilkeler/) oturtmuş bir çalışan, günlük iş çıktılarının büyük bölümünü zaten karşılar. İleri teknikler kalan farkı kapatır: karmaşık girdiyi düzenler, uzun işi parçalar, çıktıyı göndermeden önce sınar.

Bu sayfa, temel ilkelerdeki kısa anlatımların **derin** halidir (zincirleme, eleştirmen, bağlam önce). Few-shot ve çıktı formatı kendi sayfalarında ayrıntılı anlatılır, burada yalnız özetlenir. Kaliteli bir prompt kütüphanesi kurmanın da zemini bu tekniklerdir.

## 1. XML Etiketleri: Karmaşık Promptun Yapısı

XML etiketleri, uzun bir promptta talimatı, bağlamı, örneği ve değişen girdiyi birbirinden ayırır. Markdown gibi görsel değil, **anlamsal** sınır çizer: Claude hangi bölümün talimat, hangisinin üzerinde çalışılacak içerik olduğunu karıştırmaz.

**Kullanım örneği:**

```xml
<baglam>
Bir lojistik şirketinin operasyon yöneticisine yardım ediyorsun. Şirket
Türkiye'de endüstriyel kimyasal sevkiyatı yapıyor.
</baglam>

<gorev>
Aşağıdaki durum için bir tedarikçi gecikme bildirimi e-postası yaz.
</gorev>

<durum>
{{DURUM}}
</durum>

<kisitlar>
- Resmi Türkçe iş tonu
- Özür yok, olgu ve çözüm odaklı
- 150 kelimenin altında
- Önerilen yeni teslim tarihini dahil et
</kisitlar>
```

**İş kullanımında sık görülen etiketler:**

- `<baglam>`: arka plan ve durum
- `<gorev>`: ne istediğiniz
- `<belge>` veya `<girdi>`: Claude'un üzerinde çalışacağı içerik
- `<kisitlar>`: kaçınılacaklar, biçim gereksinimleri, uzunluk
- `<ornek>`: takip edilecek örnek çıktı
- `<cikti_formati>`: cevabın tam yapısı

**Etiket adları serbesttir.** Anthropic'in prompt rehberi `<instructions>`, `<context>`, `<input>` gibi adları yalnız örnek olarak verir ve tek şart olarak tutarlı, açıklayıcı adlar kullanmayı söyler. Zorunlu bir ad listesi yok. Bu yüzden Türkçe etiket kullanabilirsiniz (bu bir çıkarımdır, rehber Türkçe etiketten söz etmiyor); önemli olan promptun başından sonuna aynı adı aynı işte kullanmak. Hiyerarşik içeriği iç içe etiketle koyun. Birden çok belge varsa her birini `<belge>` içine koymak da rehberin önerisidir.

### Uzun Belgelerde Düzen

Yirmi bin token'ı aşan uzun girdilerde (birkaç yüz sayfalık sözleşme, ihale dosyası, çok belgeli bir paket) üç alışkanlık fark yaratır:

1. **Belgeyi başa, sorunuzu en sona koyun.** Uzun veri promptun üst kısmında, talimat ve soru altında olsun. Anthropic, sorguyu sona koymanın özellikle karmaşık, çok belgeli girdilerde yanıt kalitesini testlerinde **en çok %30'a kadar** artırabildiğini söylüyor. Bu, uzun belge girdisi için verilmiş bir test sonucudur; kısa bir promptta aynı etkiyi beklemeyin.
2. **Önce ilgili alıntıları çıkarttırın, sonra cevaplatın.** "Önce soruyla ilgili bölümleri `<alintilar>` içine al, sonra yalnız bu alıntılara dayanarak cevapla." Cevap tüm belge yerine seçilmiş parçalara dayanınca doğrulaması kolaylaşır ve uydurma riski düşer.
3. **"Belgede yoksa yok de" deyin.** Cevabın belgede bulunmadığı durumda bunu açıkça söylemesini yazın; aksi halde Claude boşluğu makul görünen bir cümleyle doldurabilir.

Sözleşme, şartname ve Excel ile adım adım çalışma örnekleri için [Belgeyle Çalışma](/wiki/prompting/belgeyle-calisma/) sayfasına bakın.

## 2. Few-Shot: Örnekle Öğretme

Claude'a iyi çıktının nasıl göründüğünü **tarif etmek** yerine **göstermek** çoğu zaman daha tutarlıdır. Rehber en iyi sonuç için 3-5 örnek önerir; örnekler ilgili ve çeşitli olmalı, `<ornekler>` gibi bir etiketle talimattan ayrılmalı.

Örnek seçimi, sınır vakaları, yanlış örnek etiketleme ve many-shot için [Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/) sayfasına bakın.

## 3. Zincirleme Düşünme: Güncel Modellerde Ne Değişti?

Eskiden karmaşık işlerde "adım adım düşün" demek ana kaldıraçtı. Güncel modellerde (Sonnet 5.5, Opus 5.5, Fable 5.1) Thinking claude.ai'de **kapatılamıyor**; yani akıl yürütme zaten çalışıyor. Anthropic'in rehberi Thinking açıkken elle yazılmış adım planı yerine **genel talimatı** önerir: Claude'un akıl yürütmesi çoğu zaman sizin tarif edeceğiniz adımları aşıyor.

**Zayıf (adımları siz dayatıyorsunuz):**
> *"Önce şunu hesapla, sonra bunu karşılaştır, sonra üçüncü adımda..."*

**Güçlü (önemi ve ölçütü söylüyorsunuz):**
> *"Bu yüksek riskli bir bütçe kararı. Cevaptan önce tüm etkileri iyice düşün."*
> *"Yazmadan önce bilmem gereken en önemli üç şeyi belirle. Sonra yaz."*

İşe yarayan şey **neyin doğru sayılacağını** söylemektir: kriterler, kısıtlar, "bitirmeden önce sonucu şu ölçüte göre doğrula" gibi bir kontrol cümlesi. Kod ve matematik gibi işlerde böyle bir kapanış kontrolü hata yakalar.

**Elle zincirleme düşünce yedektir.** "Cevaptan önce adım adım düşün, son yanıtı `<cevap>` etiketine koy" yöntemi, Thinking'in kapalı olduğu durumlar için hâlâ geçerli. Akıl yürütmeyi yanıt metnine dökmesini istemek ise bazı modellerde reddedilebilir; ihtiyacınız olan şey denetlenebilir bir gerekçeyse "sonuca hangi verilerle vardığını kısaca açıkla" demek daha güvenli bir yoldur.

Düşünmeyi derinleştirmek ya da hızlandırmak için promptun yanında ayara da bakın: bölüm 7.

## 4. Claude'u Eleştirmen Yapmak

Çıktı ürettikten sonra Claude'a rol değiştirterek çıktıyı eleştirmesini isteyin. Bu teknik göndermeden önce zayıflıkları yüzeye çıkarır.

> *"Bu teklifi şüpheci bir satın alma müdürü olarak oku. En zayıf üç noktası nedir?"*
> *"Talepkâr bir CEO rolüne gir. Bu rapor cevaplamadığı hangi soruyu sorar?"*
> *"Bu müzakerede karşı taraf rolünde davran. Bizim karşı teklifimizin ele almadığı hangi manivelaları var?"*

İyi bir çalışan, önemli bir çıktıyı göndermeden önce bu eleştirmen turunu mutlaka yapar. Eleştirinin ardından "bu üç zayıflığı gidererek metni yeniden yaz" demek ikinci adımdır; bu iki adımlı akış küçük bir zincirdir (bölüm 6).

## 5. Çıktı Formatını Açıkça Kontrol Etme

Format talimatı **spesifik ve olumlu** olduğunda en iyi çalışır: "madde işareti kullanma" yerine "akıcı paragraflar halinde yaz, başlık yok", "daha kısa yap" yerine "en fazla 200 kelime, tek paragraf, önsöz yok".

Tablo, JSON, e-posta, slayt ve kısa cevap şablonları için [Çıktı Formatı](/wiki/prompting/cikti-formati/) sayfasına bakın.

## 6. Prompt Chaining: Karmaşık Görevleri Adımlara Bölmek

Çok adımlı işler için **tek dev prompt** yerine **sıralı promptlar** kullanın. Her adım bir öncekinin üstüne inşa edilir.

**Örnek, stratejik rapor yazma:**

1. *"2026'da kükürt piyasası için en önemli 5 trendi belirle. Sadece liste."*
2. *"Belirlediğin her trend için, Türkiye'deki bir emtia tüccarına etkisini yaz."*
3. *"Bu analize dayanarak, yönetim kurulu sunumu için 3 paragraflık bir yönetici özeti yaz."*

Bu yaklaşım *"Türk tüccar için kükürt piyasası trendleri üzerine stratejik rapor yaz"* promptundan çok daha iyi sonuç verir. Çünkü her adımda Claude'un dikkati fokuslu kalır ve siz her adımda ara kontrol yapabilirsiniz.

## 7. Düşünme Derinliği: Prompt mu, Effort mu?

Karmaşık görevlerde Claude'a daha derin düşünmesini cümleyle söyleyebilirsiniz:

> *"Cevaptan önce tüm etkileri dikkatle düşün."*
> *"Bu yüksek riskli bir karar. Titizlikle akıl yürüt."*
> *"Sonuca varmadan önce birden fazla perspektifi değerlendir."*

Basit görevlerde tersini söyleyin:

> *"Doğrudan cevapla. Akıl yürütmeni açıklamana gerek yok."*

Bu cümleler nasıl çalışacağını değil, işten ne kadar özen beklediğinizi iletir. Ama düşünme derinliğinin asıl ayarı artık cümle değil **Effort**'tur. claude.ai'de gönder düğmesinin yanındaki model adına tıklayınca model, Effort (Low'dan Max'e beş kademe) ve Thinking ayrı ayarlar olarak görünür. Rutin işte düşük, zor karar ve analizde yüksek Effort seçin; yüksek Effort kullanım limitinizi daha hızlı tüketir. Ayrıntı: [Effort Kontrolü](/wiki/yetenekler/effort-control/).

Pratik sıra: önce **ne istediğinizi ve neyin doğru sayılacağını** netleştirin, sonra gerekirse Effort'u yükseltin.

> **Geliştiriciler için:** API'de derinlik `output_config.effort` ile ayarlanır, Thinking ise ayrı bir `thinking` alanıdır. Opus 5.5'te `thinking` alanını `disabled` yapmak her kademede hata verir (400).

## 8. "Bağlam Önce": İleri Seviye

Bağlam verme alışkanlığı temel prompting'te öğretilir. İleri seviyede bunu bir disiplin haline getirirsiniz. Claude'un çıktı kalitesi, aldığı bağlamın **alaka düzeyi ve tamlığıyla orantılıdır**.

**Zayıf:**
> *"Bir tedarikçi reddi mektubu yaz."*

**Güçlü:**
> *"Bir tedarikçi reddi mektubu yaz. Bağlam: Akmin Dış Ticaret'iz. Bir tedarikçiden bitümen teklifi aldık, $450/MT CFR İstanbul. Bütçemiz $420/MT. 30 gün içinde yeniden müzakere kapısını açık bırakmak istiyoruz. Tedarikçi 2 yıldır güvenilir partner. Ton profesyonel ve ilişki-koruyucu olsun."*

İkinci versiyon neredeyse iterasyon gerektirmez. İlkinde genellikle birkaç tur iyileştirme gerekir ve yine de genel bir şablon çıkar.

## Prompt Kütüphanesi: Test Edilmiş Prompt Koleksiyonunuz

Bir prompt kütüphanesi, sizin tarafınızdan test edilmiş ve iyileştirilmiş promptların kişisel koleksiyonudur. İyi çalışan her prompt kütüphanenize şunlarla kaydedilmeli:

- **Başlık:** Kullanım senaryosunu tarif eden
- **Tam prompt metni:** Yer tutucu değişkenlerle (`{{MÜŞTERİ_ADI}}`, `{{ÜRÜN}}`)
- **Kullanım notu:** Ne zaman kullanılır, neyi ayarlamak gerekir
- **Son kullanım/güncelleme tarihi**

**Kütüphane nerede yaşasın?**

En uygun yer bir [Claude Projesi](/wiki/araclar/projects/): prompt metinlerini proje talimatına ya da proje dosyalarına (`.md`) koyarsınız, projedeki sohbetlerde Claude'un elinde olur. Proje talimatı yalnız o projede geçerlidir; tüm sohbetlerinizi ilgilendiren genel tercihler için profil talimatı ("Instructions for Claude", Settings > General) ayrıdır, ayrıntı [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/) sayfasında.

Bilgisayarınızdaki bir `prompts/` klasörü bu iş için artık iyi bir tercih değil. Cowork'te yeni görevler bulutta çalışıyor ve bulut oturumu yerel klasöre doğrudan erişemiyor; Claude Desktop'ın açık ve bağlı olması, klasörün elle eklenmesi gerekiyor.

**Sık kullandığınız bir prompt varsa onu [Skill](/wiki/yetenekler/skills/)'e çevirin.** Skill, Claude ilgili gördüğünde kendiliğinden yüklenir; her seferinde prompt'u yapıştırmanız gerekmez.

**Tipik hedefler:**

- İlk birkaç hafta sonunda her çalışanın **5-10 prompt**'u olmalı
- 3 ay sonunda **30-50 prompt** olmalı, tüm yaygın iş görevlerini kapsayan

Prompt kütüphanesi en somut ve en değerli varlıklardan biridir. Yöntemi ve yapıyı her yerde kullanırsınız; yalnız şirkete ait gizli veri ya da müşteri bilgisi içeren promptları şirket dışına taşımayın.

## İleri Teknikleri Ne Kadar Önemsemelisiniz?

Dürüst cevap: **orta düzeyde**.

İleri teknikler çıktı kalitesini artırır, ama temel ilkeleri atlayıp XML etiketlerini öğrenmek boşa yatırımdır. Temeller sağlam olduğunda, ileri teknikler doğal olarak ince ayar sağlar.

Önerilen sıralama:

1. **Önce:** [4D Çerçevesi](/wiki/prompting/4d-cercevesi/): kavramsal zemin
2. **Sonra:** [Temel İlkeler](/wiki/prompting/temel-ilkeler/): 5 bileşen yapısı oturtulana kadar
3. **En son:** Bu sayfa: XML, few-shot, chaining

Bir haftada üçü birden öğrenilmez. Bir ayda oturur.

## İlgili Sayfalar

- [Prompting Temel İlkeleri](/wiki/prompting/temel-ilkeler/): Bu sayfanın ön koşulu
- [4D Çerçevesi](/wiki/prompting/4d-cercevesi/): Kavramsal zemin
- [Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/): Örnekle öğretme
- [Çıktı Formatı](/wiki/prompting/cikti-formati/): Tablo, JSON, e-posta formatları
- [Yaygın Prompting Hataları](/wiki/prompting/yaygin-hatalar/): Hata tipleri ve düzeltmeleri
- [Projects](/wiki/araclar/projects/): Prompt kütüphanesinin yeri
- [Skills](/wiki/yetenekler/skills/): Sık kullanılan promptu yeniden kullanılabilir hale getirme
- [Effort Kontrolü](/wiki/yetenekler/effort-control/): Düşünme derinliğinin ayarı

