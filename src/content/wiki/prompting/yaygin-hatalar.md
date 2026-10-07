---
title: Yaygın Prompting Hataları ve Düzeltmeleri
seoTitle: "Yaygın Prompt Hataları: 10 Hata ve Düzeltmesi"
description: "Claude ile en sık yapılan 10 prompt hatası: Google tarzı sorgu, bağlamsız soru, tek atış zihniyeti. Her biri için Türkçe örnekli düzeltme."
tags:
  - prompting
  - hatalar
  - troubleshooting
lastUpdated: "2026-10-06"
---

Pratikte gözlenen bir gerçek: insanlar Claude'la başarısız olurken **benzer hatalarla** başarısız oluyor. Bu sayfa o on hatayı ve her birinin spesifik düzeltmesini içeriyor.

Her hatayı somut bir örneğiyle, neden başarısız olduğuyla ve düzeltmesiyle veriyoruz. Kendi promptlarınızda bunlardan birini yakaladığınızda, çözüm de yanında olacak.

## Hata 1: Google-Tarzı Anahtar Kelime Sorgusu

**Örnek:**
> *"Tedarikçi teklifi yanıt mektubu"*

**Neden başarısız olur:**
Claude ne bağlamda olduğunuzu, ne istediğinizi, hangi tonu tercih ettiğinizi bilmez. Size jenerik bir şablon verir. 4-5 iterasyon sonra zaten elde edeceğiniz çıktıya ulaşırsınız, ama 30 saniye yerine 10 dakikada.

*Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

**Düzeltme:**
Promptu cümlelerle yazın. Claude'la konuşur gibi: "X durumundayım. Y istiyorum. Z tarzında olsun."

> *"Bir tedarikçiden gelen bitümen teklifine resmi yanıt yazmam gerekiyor. Fiyat yüksek geldi ama ilişkiyi sürdürmek istiyoruz. 150 kelimelik profesyonel bir yanıt, sıcak ama net. Müzakereyi 30 gün sonra devam ettirmeyi öneren."*

## Hata 2: Bağlamsız Soru Sorma

**Örnek:**
> *"Bu müşteriye nasıl yaklaşmalıyım?"*

**Neden başarısız olur:**
Müşteri kim? Sektör nedir? Sorun ne? Geçmiş ne? Claude tahminde bulunmak zorunda kalır ve genellikle yanlış tahmin eder. Çıktı pastel.

**Düzeltme:**
Soruyu sormadan **önce** Claude'un ihtiyacı olan tüm bağlamı verin. Bir danışmana "bana tavsiyende bulun" deyip arkasından durumu anlatmak gibi.

> *"Müşteri: XYZ Gıda, Konya, orta ölçekli üretici. 3 yıldır çalışıyoruz. Son 2 ay hiç yanıt vermediler. Son e-postalarında bütçe sıkıntısından söz etmişlerdi. Eski iletişim müdürleri ayrıldı, yenisi henüz tanımıyor bizi. Soru: şimdi en doğru adım nedir, doğrudan e-posta, telefon, yoksa bekle?"*

## Hata 3: Tek Atışlık Zihniyet

**Örnek:**
Çalışan bir prompt yazar, Claude cevap verir, beğenmez, "Claude bu işte iyi değil" der ve vazgeçer.

**Neden başarısız olur:**
Claude ilk cevabı nadiren mükemmel verir. İlk çıktı çoğu zaman iyi bir taslaktır; son cilayı iterasyon verir.

**Düzeltme:**
İterasyonu beklentiye koyun. İlk çıktıyı hammadde olarak görün.

> *"İyi başlangıç. Üçüncü paragraf zayıf: [X] konusuna odaklanarak yeniden yaz."*
> *"Bu versiyonun konu satırını daha iyi yapabilir misin? 3 alternatif ver."*
> *"Ton biraz sert. Yumuşat ama güç kaybetme."*

İyi bir prompt, genelde 3-5 iterasyonla doğru çıktıya ulaşır. Bu başarısızlık değil, **süreç**tir.

## Hata 4: Claude'u Google Sanma

**Örnek:**
> *"TÜSİAD başkanı kim?"*

**Neden başarısız olur:**
Claude'un eğitim bilgisinin bir kesim tarihi vardır (Fable 5.1, Opus 5.5 ve Sonnet 5.5 için Haziran 2026; Haiku 4.5 için güvenilir bilgi Şubat 2025'e kadar. Modeller için bkz: [Modeller](/wiki/temeller/modeller/), sınırlar için [Sınırlamalar](/wiki/temeller/sinirlamalar/)). Sonrasında değişen bir isim ya da rakamı güncel sanıp **emin bir tonla** söyleyebilir. Buna "halüsinasyon" denir.

**Düzeltme:**
Claude'u düşünme ortağı olarak görün, gerçek arama motoru olarak değil.

- Güncel bilgi için [web aramayı](/wiki/araclar/web-arama/) açın
- Veya bilgiyi siz manuel olarak yapıştırın
- Ya da "X kim?" yerine "Bana X hakkında bildiklerini söyle, son tarih neydi?" diye sorun

## Hata 5: Birden Fazla İlgisiz Soruyu Tek Promptta Sormak

**Örnek:**
> *"Bu teklifi değerlendir, ayrıca bu sözleşmeyi özetle, ayrıca İK politikamıza bak ve yorum yap, ayrıca Q3 hedeflerim için fikir ver."*

**Neden başarısız olur:**
Claude hepsini yapmaya çalışır ama hiçbirini derinlemesine yapamaz. Çıktı dört konuda da yüzeysel olur.

**Düzeltme:**
**Bir prompt, bir görev.** Dört ayrı soruyu dört ayrı promptta sorun. Her biri için Claude'un tüm dikkatini alın.

## Hata 6: Format Belirtmemek

**Örnek:**
> *"Bu analizi özetle."*

**Neden başarısız olur:**
Claude varsayılan olarak madde işaretli, alt başlıklı, uzun bir özet verir. Siz tek paragraflık akıcı bir özet istiyorduysanız uygun değil.

**Düzeltme:**
Format'ı söyleyin. Kısıt koymak yerine ne istediğinizi söyleyin.

> *"200 kelimenin altında, tek paragraf, akıcı iş dilinde. Madde işareti veya alt başlık yok. Yönetim kuruluna sunulacak tarzda."*

## Hata 7: Ton Tarif Etmemek

**Örnek:**
> *"Bir e-posta yaz bu duruma."*

**Neden başarısız olur:**
Claude varsayılan tonda yazar. "Umarım iyisinizdir", "Sizinle iletişim kurmak benim için keyifli", "Değerli müşterimiz" gibi genel iş klişeleri. Siz direkt yazarsınız belki, ortada uyumsuzluk olur.

**Düzeltme:**
Tonu özgürce belirtin, hatta kaçınılacak ifadeleri de söyleyin.

> *"Kısa ve direkt, 'umarım iyisinizdir' yok, 'keyifli' yok, 'değerli' yok. Dostça ama profesyonel. Konu sahibi gibi konuş, hizmetkâr gibi değil."*

## Hata 8: Aşırı Kısıtlayıcı Prompt

**Örnek:**
> *"Sadece 3 kelime kullan. Sadece olumlu. Sadece tek cümle. Sadece Türkçe. Kesinlikle liste yok. Hiç sıfat kullanma."*

**Neden başarısız olur:**
Claude'un anlamlı cevap verme alanını kapattınız. Sonuç kötü çıkar, genellikle sıkışmış, doğal olmayan.

**Düzeltme:**
Kısıtlar gerçek kısıtlar olmalı. "İstemiyorum" listesi yerine "istiyorum" tarifi yapın. Ana fikri söyleyin, detayları Claude'a bırakın.

## Hata 9: Yanlış Çıktıyı Kabul Etmek

**Örnek:**
Çıktı geldi. Biraz sorunlu ama "tamam, bu da iş görür" deyip gönderdik.

**Neden başarısız olur:**
Çoğu zaman Claude size daha iyisini verebilirdi, sadece söylemediniz için yapmadı. Göndermeden önce 30 saniyelik bir düzeltme turu çıktıyı belirgin biçimde iyileştirebilir.

**Düzeltme:**
Pratik altın soru: **"Bunu şu an müdürüme göndermeye razı olur muydum?"**

Cevap "hayır"sa geri dönün. Basitçe: *"Üçüncü paragraf iyi değil, yeniden yaz"*, *"Konu satırı yumuşak, keskinleştir"*, *"Kapanış çok uzun, kısalt"*. Her düzeltme 30 saniye, toplam kalite farkı büyük.

Bir tuzak daha: Claude'a "bu iyi mi?" diye sorarsanız bazen doğruyu değil, duymak istediğinizi söyleme eğilimine girer (sycophancy, onay eğilimi). Onay değil eleştiri isteyin: *"Bu metnin en zayıf üç noktası nedir?"* Ayrıntı: [Claude'un Sınırları](/wiki/temeller/sinirlamalar/).

## Hata 10: Zor İşte Kriter Vermemek ve Düşünme Derinliğini Ayarlamamak

**Örnek:**
> *"Şu üç tedarikçiden hangisiyle devam edelim?"* (kriter yok, karar yüksek riskli, düşük effort ile çalışılıyor)

**Neden başarısız olur:**
Güncel modellerde (Sonnet 5.5, Opus 5.5, Fable 5.1) Thinking kapatılamaz; "adım adım düşün" demek eskisi kadar fark yaratmaz. Cevabın yüzeysel kalmasının iki yaygın nedeni var: Claude neye göre değerlendireceğini bilmiyor ya da Effort kademesi iş için fazla düşük.

**Düzeltme:**
Önce kriterleri verin, sonra gerekirse Effort'u yükseltin:

> *"Üç tedarikçiyi şu ölçütlere göre karşılaştır: toplam maliyet, teslim süresi güvenilirliği, ödeme koşulları. Önce olası senaryoları listele, her birinin artılarını ve eksilerini tart, sonra tavsiyeni ver."*
> *"Bu yüksek riskli bir karar. Varsayımlarını açıkça yaz, emin olmadığın yeri belirt."*

Pro ve üstü planlarda model menüsünden Effort'u yükseltmek (zor karar ve analiz için High ve üstü) derinliği doğrudan artırır; ayrıntı [Effort Kontrolü](/wiki/yetenekler/effort-control/) sayfasında. Prompt tarafında düşünme tekniklerinin tamamı [İleri Seviye](/wiki/prompting/ileri-seviye/) sayfasında.

## Hızlı Özet Tablosu

| Hata | Tipik Belirti | Düzeltme |
|---|---|---|
| Google-tarzı prompt | 2-3 kelime, sonuç genel | Cümlelerle açıkla |
| Bağlamsız soru | Cevap pastel | Soruya önce bağlam ver |
| Tek atışlık | "Claude iyi değil" düşüncesi | İterasyon yap, 3-5 tur bekle |
| Claude'u Google sanma | Yanlış isim/tarih/rakam | Web search kullan veya veri yapıştır |
| Birden çok soru | Her biri yüzeysel | Bir prompt, bir görev |
| Format yok | Kullanılamaz yapı | Uzunluk + stil + yapı belirt |
| Ton yok | Genel klişelerle dolu | Tonu söyle, kaçınılacakları söyle |
| Aşırı kısıt | Sıkışmış çıktı | Gerçek kısıtlar + yaratıcılık alanı bırak |
| Yanlış çıktıyı kabul | "İmza testi" başarısız | Son bir düzeltme turu yap |
| Kriter ve derinlik yok | Yüzeysel stratejik cevap | Değerlendirme kriterlerini ver, zor işte Effort'u yükselt |

## Kendi Promptlarınızı Denetlemek İçin

Haftada bir kez, geçen haftanın 5 promptuna geri bakın. Şu sorularla:

- [ ] Yukarıdaki 10 hatadan birine düştüm mü?
- [ ] Çıktı gerçekten istediğim düzeyde miydi?
- [ ] Daha iyi bir prompt yazsaydım ne farklı olurdu?
- [ ] Bu prompt kütüphaneme kaydedilmeyi hak ediyor mu?

Bu haftalık refleksiyon, prompting becerisini sıradan kullanıcı seviyesinden profesyonel seviyeye çıkarır.

## İlgili Sayfalar

- [Prompting Temel İlkeleri](/wiki/prompting/temel-ilkeler/): Beş bileşen yapısı
- [İleri Seviye Prompt Engineering](/wiki/prompting/ileri-seviye/): XML tag'leri, few-shot prompting
- [4D Çerçevesi](/wiki/prompting/4d-cercevesi/): Description ve Discernment kavramları
- [Claude'un Sınırları](/wiki/temeller/sinirlamalar/): Promptla çözülemeyen sınırlar

