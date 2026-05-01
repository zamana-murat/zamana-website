---
title: Yaygın Prompting Hataları ve Düzeltmeleri
description: "Çoğu kullanıcının Claude ile başarısız olduğu on yaygın hata ve her birinin spesifik düzeltmesi — Zamana'nın koçluk oturumlarından çıkarılmış."
tags:
  - prompting
  - hatalar
  - troubleshooting
---

Zamana oturumlarında izlenen bir gerçek: insanlar Claude'la başarısız olurken **benzer hatalarla** başarısız oluyor. Bu sayfa o on hatayı ve her birinin spesifik düzeltmesini içeriyor.

Her hatayı somut bir örneğiyle, neden başarısız olduğuyla ve düzeltmesiyle veriyoruz. Kendi promptlarınızda bunlardan birini yakaladığınızda, çözüm de yanında olacak.

## Hata 1 — Google-Tarzı Anahtar Kelime Sorgusu

**Örnek:**
> *"Tedarikçi teklifi yanıt mektubu"*

**Neden başarısız olur:**
Claude ne bağlamda olduğunuzu, ne istediğinizi, hangi tonu tercih ettiğinizi bilmez. Size jenerik bir şablon verir. 4-5 iterasyon sonra zaten elde edeceğiniz çıktıya ulaşırsınız — ama 30 saniye yerine 10 dakikada.

**Düzeltme:**
Promptu cümlelerle yazın. Claude'la konuşur gibi: "X durumundayım. Y istiyorum. Z tarzında olsun."

> *"Bir tedarikçiden gelen bitümen teklifine resmi yanıt yazmam gerekiyor. Fiyat yüksek geldi ama ilişkiyi sürdürmek istiyoruz. 150 kelimelik profesyonel bir yanıt — sıcak ama net. Müzakereyi 30 gün sonra devam ettirmeyi öneren."*

## Hata 2 — Bağlamsız Soru Sorma

**Örnek:**
> *"Bu müşteriye nasıl yaklaşmalıyım?"*

**Neden başarısız olur:**
Müşteri kim? Sektör nedir? Sorun ne? Geçmiş ne? Claude tahminde bulunmak zorunda kalır — ve genellikle yanlış tahmin eder. Çıktı pastel.

**Düzeltme:**
Soruyu sormadan **önce** Claude'un ihtiyacı olan tüm bağlamı verin. Bir danışmana "bana tavsiyende bulun" deyip arkasından durumu anlatmak gibi.

> *"Müşteri: XYZ Gıda, Konya, orta ölçekli üretici. 3 yıldır çalışıyoruz. Son 2 ay hiç yanıt vermediler. Son e-postalarında bütçe sıkıntısından söz etmişlerdi. Eski iletişim müdürleri ayrıldı, yenisi henüz tanımıyor bizi. Soru: şimdi en doğru adım nedir — doğrudan e-posta, telefon, yoksa bekle?"*

## Hata 3 — Tek Atışlık Zihniyet

**Örnek:**
Çalışan bir prompt yazar, Claude cevap verir, beğenmez, "Claude bu işte iyi değil" der ve vazgeçer.

**Neden başarısız olur:**
Claude ilk cevabı nadir mükemmel verir. İlk çıktı çoğunlukla %70'tir. Kalan %30 iterasyonla gelir.

**Düzeltme:**
İterasyonu beklentiye koyun. İlk çıktıyı hammadde olarak görün.

> *"İyi başlangıç. Üçüncü paragraf zayıf — [X] konusuna odaklanarak yeniden yaz."*
> *"Bu versiyonun konu satırını daha iyi yapabilir misin? 3 alternatif ver."*
> *"Ton biraz sert. Yumuşat ama güç kaybetme."*

İyi bir prompt, genelde 3-5 iterasyonla doğru çıktıya ulaşır. Bu başarısızlık değil, **süreç**tir.

## Hata 4 — Claude'u Google Sanma

**Örnek:**
> *"TÜSİAD başkanı kim?"*

**Neden başarısız olur:**
Claude bilgi tabanı Mayıs 2025'te kesildi (bkz: [Sınırlamalar](../temeller/sinirlamalar/)). Güncel olmayan bir isim verebilir — **emin bir tonla**. Buna "halüsinasyon" denir.

**Düzeltme:**
Claude'u düşünme ortağı olarak görün, gerçek arama motoru olarak değil.

- Güncel bilgi için [Web Search skill'ini](../yetenekler/skills/) kullanın
- Veya bilgiyi siz manuel olarak yapıştırın
- Ya da "X kim?" yerine "Bana X hakkında bildiklerini söyle, son tarih neydi?" diye sorun

## Hata 5 — Birden Fazla İlgisiz Soruyu Tek Promptta Sormak

**Örnek:**
> *"Bu teklifi değerlendir, ayrıca bu sözleşmeyi özetle, ayrıca İK politikamıza bak ve yorum yap, ayrıca Q3 hedeflerim için fikir ver."*

**Neden başarısız olur:**
Claude hepsini yapmaya çalışır ama hiçbirini derinlemesine yapamaz. Çıktı dört konuda da yüzeysel olur.

**Düzeltme:**
**Bir prompt, bir görev.** Dört ayrı soruyu dört ayrı promptta sorun. Her biri için Claude'un tüm dikkatini alın.

## Hata 6 — Format Belirtmemek

**Örnek:**
> *"Bu analizi özetle."*

**Neden başarısız olur:**
Claude varsayılan olarak madde işaretli, alt başlıklı, uzun bir özet verir. Siz tek paragraflık akıcı bir özet istiyorduysanız uygun değil.

**Düzeltme:**
Format'ı söyleyin. Kısıt koymak yerine ne istediğinizi söyleyin.

> *"200 kelimenin altında, tek paragraf, akıcı iş dilinde. Madde işareti veya alt başlık yok. Yönetim kurulu önü yazacak tarzda."*

## Hata 7 — Ton Tarif Etmemek

**Örnek:**
> *"Bir e-posta yaz bu duruma."*

**Neden başarısız olur:**
Claude varsayılan tonda yazar. "Umarım iyisinizdir", "Sizinle iletişim kurmak benim için keyifli", "Değerli müşterimiz" gibi genel iş klişeleri. Siz direkt yazarsınız belki — ortada uyumsuzluk olur.

**Düzeltme:**
Tonu özgürce belirtin, hatta kaçınılacak ifadeleri de söyleyin.

> *"Kısa ve direkt, 'umarım iyisinizdir' yok, 'keyifli' yok, 'değerli' yok. Dostça ama profesyonel. Konu sahibi gibi konuş — hizmetkâr gibi değil."*

## Hata 8 — Aşırı Kısıtlayıcı Prompt

**Örnek:**
> *"Sadece 3 kelime kullan. Sadece olumlu. Sadece tek cümle. Sadece Türkçe. Kesinlikle liste yok. Aile üyesi olmayan kelime kullanma."*

**Neden başarısız olur:**
Claude'un anlamlı cevap verme alanını kapattınız. Sonuç kötü çıkar — genellikle sıkışmış, doğal olmayan.

**Düzeltme:**
Kısıtlar gerçek kısıtlar olmalı. "İstemiyorum" listesi yerine "istiyorum" tarifi yapın. Ana fikri söyleyin, detayları Claude'a bırakın.

## Hata 9 — Yanlış Çıktıyı Kabul Etmek

**Örnek:**
Çıktı geldi. Biraz sorunlu ama "tamam, bu da iş görür" deyip gönderdik.

**Neden başarısız olur:**
Çoğu zaman Claude size daha iyisini verebilirdi — sadece söylemediniz için yapmadı. 30 saniyelik bir düzeltme turu göndermeden önce çıktıyı %20 daha iyi yapabilir.

**Düzeltme:**
Zamana'nın altın sorusu: **"Bunu şu an müdürüne göndermeye razı mısın?"**

Cevap "hayır"sa, geri dön. Basitçe: *"Üçüncü paragraf iyi değil, yeniden yaz"*, *"Konu satırı yumuşak, keskinleştir"*, *"Kapanış çok uzun, kısalt"*. Her düzeltme 30 saniye, toplam kalite farkı büyük.

## Hata 10 — Claude'un "Düşünmesini" İstemmek

**Örnek:**
Karmaşık bir stratejik karar prompt'u yazıp Claude'un hemen sonuca atlamasını beklemek.

**Neden başarısız olur:**
Karmaşık problemlerde Claude, "ne düşüneyim ki önce" demeden cevap üretmeye başlarsa, cevap yüzeysel olur. Mantık zinciri kısa kalır.

**Düzeltme:**
Claude'dan önce düşünmesini isteyin:

> *"Cevaptan önce bunu dikkatle düşün."*
> *"Önce olası senaryoları listele, sonra her birinin artılarını-eksilerini tart, sonra tavsiyeni ver."*
> *"Bu yüksek riskli bir karar. Titizlikle akıl yürüt."*

Bu tek cümle, karmaşık görevlerde çıktı kalitesini gözle görülür biçimde artırır.

## Hızlı Özet Tablosu

| Hata | Tipik Belirti | Düzeltme |
|---|---|---|
| Google-tarzı prompt | 2-3 kelime, sonuç genel | Cümlelerle açıkla |
| Bağlamsız soru | Cevap pastel | Soruya önce bağlam ver |
| Tek atışlık | "Claude iyi değil" düşüncesi | İtere et, 3-5 tur bekle |
| Claude'u Google sanma | Yanlış isim/tarih/rakam | Web search kullan veya veri yapıştır |
| Birden çok soru | Her biri yüzeysel | Bir prompt, bir görev |
| Format yok | Kullanılamaz yapı | Uzunluk + stil + yapı belirt |
| Ton yok | Genel klişelerle dolu | Tonu söyle, kaçınılacağı söyle |
| Aşırı kısıt | Sıkışmış çıktı | Gerçek kısıtlar + yaratıcılık alanı bırak |
| Yanlış çıktıyı kabul | "İmza testi" başarısız | Son bir düzeltme turu yap |
| Düşünme istememek | Yüzeysel stratejik cevap | "Önce düşün" komutu ver |

## Kendi Promptlarınızı Denetlemek İçin

Haftada bir kez, geçen haftanın 5 promptuna geri bakın. Şu sorularla:

- [ ] Yukarıdaki 10 hatadan birine düştüm mü?
- [ ] Çıktı gerçekten istediğim düzeyde miydi?
- [ ] Daha iyi bir prompt yazsaydım ne farklı olurdu?
- [ ] Bu prompt kütüphaneme kaydedilmeyi hak ediyor mu?

Bu haftalık refleksiyon, prompting becerisini sıradan kullanıcı seviyesinden profesyonel seviyeye çıkarır.

## İlgili Sayfalar

- [Prompting Temel İlkeleri](temel-ilkeler/) — Beş bileşen yapısı
- [İleri Seviye Prompt Engineering](ileri-seviye/) — XML tag'leri, few-shot prompting
- [4D Çerçevesi](4d-cercevesi/) — Description ve Discernment kavramları
- [Claude'un Sınırları](../temeller/sinirlamalar/) — Promptla çözülemeyen sınırlar

