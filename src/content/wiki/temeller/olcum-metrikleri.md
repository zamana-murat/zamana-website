---
title: Ölçüm Metrikleri ve ROI Çerçevesi
description: "Claude'un şirketinizdeki etkisini nasıl ölçersiniz? Zaman, kalite, otomasyon — üç birincil metrik, baseline kurma ve aralıklı denetim rehberi."
tags:
  - temeller
  - olcum
  - roi
  - metrikler
---

**"Claude işe yaradı mı?" sorusunun cevabı duygusal değil sayısal olmalı.** Çoğu şirket Claude'u 6 ay kullanıyor, faydasını "hissediyor" ama ölçemiyor. İlk yıl sonunda yenileme kararı tartışmalı oluyor. Bu sayfa bunu önler.

## Üç Birincil Metrik

Zamana metodolojisinde Claude etkisi üç eksende ölçülür:

1. **Zaman tasarrufu** — kaç saat geri kazanıldı
2. **Kalite** — üretilenin değeri arttı mı
3. **Otomasyon** — daha önce hiç yapılamayanlardan kaç tanesi otomatik yapılır oldu

Üçü birden ölçülmeli; sadece birine bakmak yanıltır.

### 1. Zaman Tasarrufu

**Ölçüm birimi:** Çalışan başına haftalık saat tasarrufu

**Toplama yöntemi:**

- Her çalışan haftalık 5 dakikalık bir **mini anket** doldurur
- "Bu hafta Claude bana yaklaşık kaç saat kazandırdı?" tek soru
- Aralık olarak yanıt: 0-2, 3-5, 6-10, 11-15, 16+

**Tipik aralıklar (Zamana müşteri gözlemleri):**

| Kullanıcı tipi | Hafta başına tasarruf |
|---|---|
| Hafif kullanıcı (haftada 2-3 saat Claude'da) | 2-4 saat |
| Orta kullanıcı (günde 30-60 dk Claude'da) | 5-8 saat |
| Yoğun kullanıcı (günde 1-3 saat Claude'da) | 8-15 saat |

**TL karşılığı:** Çalışan saatlik maliyetiyle çarpılır. Bordro + işveren payları + dolaylı maliyet (ofis, eğitim, vb.) toplam **yüklü maliyet** kullanılmalı, sadece brüt maaş değil.

### 2. Kalite

**Ölçüm birimi:** Subjektif ama yapılandırılmış skor

**Toplama yöntemi:**

- Ekip lideri her hafta 5 çalışan üretiminden örnek alır
- Önceki ay (Claude öncesi) ile mukayese: "Eskiye göre kaç katı kalitede?"
- Skor aralığı: 0.5x (daha kötü), 1x (aynı), 1.5x, 2x, 3x, 5x

**Pratik örnekler:**

- Müşteri e-postasına yanıt → eskiden 1 sayfa düz cevap, şimdi 1.5 sayfa nüanslı, müşteri için özel kişiselleştirilmiş cevap → **1.5x**
- Pazar araştırma raporu → eskiden 3 saatte tek paragraflık 5 maddelik özet, şimdi 1 saatte 5 sayfa derinlikli analiz → **3-5x** (zaman + kalite birleşik)

**Önemli:** Kalite "Claude yazdı, ben kontrol ettim" sürecinin çıktısıdır — ham Claude çıktısı değil. Bu süreç [4D Çerçevesi](../prompting/4d-cercevesi/)'nin **Diligence** bacağıdır.

### 3. Otomasyon

**Ölçüm birimi:** Daha önce hiç yapılmayan veya manuel yapılan iş — kaç tanesi sistemli ve tekrarlanabilir oldu

**Örnekler:**

- Pazartesi sabah haftalık satış raporu → [Scheduled Task](../araclar/scheduled-tasks/) olarak otomatikleşti, manuel saat = 0
- Her yeni başlayan çalışan için onboarding dökümanları → [CLAUDE.md](../claude-md/nedir/) ile yarı otomatikleşti
- Müşteri sözleşmelerinde madde çapraz kontrolü → [Skills](../yetenekler/skills/) ile sistemli süreç

**Sayım:** Ay sonu *"Bu ay kaç manuel iş otomatikleşti?"* sorusu. Aralık: 0-2 / 3-5 / 6-10 / 11+

## Baseline Ölçümü — Eğitim Öncesi Veri

ROI ölçümü Claude eğitiminden **2-3 hafta önce** baseline ile başlar. Bu olmazsa karşılaştırma kayıp.

**Baseline soruları (her çalışana):**

1. Şu an haftada kaç saat *yazma* işi yapıyorsun (rapor, e-posta, içerik)?
2. Kaç saat *araştırma* (haber, müşteri, pazar)?
3. Kaç saat *analiz* (veri yorumlama, karar üretme)?
4. Kaç saat *tekrar eden işler* (haftalık raporlar, formaliter)?
5. Hangi iki işi yapmaktan en çok çekiniyorsun (zaman/zorluk açısından)?

**Toplam baseline:** Bireysel ve ekip ortalaması olarak kayda alınır. 90 gün sonra aynı anketle tekrar bakılır.

## Şirket Büyüklüğüne Göre Beklenen Sonuçlar

Aşağıdaki tablo Zamana retainer programı 6 ay sonu gözlemlerine dayanır:

| Şirket büyüklüğü | Pilot kullanıcı | 90 gün sonra ortalama | 180 gün sonra |
|---|---|---|---|
| Küçük (5-15 çalışan) | 2-3 kişi | 5-8 saat/hafta tasarruf | 8-12 saat/hafta + 3-5 otomasyon |
| Orta (15-50 çalışan) | 6 kişi | 6-9 saat/hafta tasarruf | 9-13 saat/hafta + 5-8 otomasyon |
| Büyük (50+) | 10+ kişi | 5-7 saat/hafta tasarruf (yavaş onboarding) | 8-12 saat/hafta + 8-15 otomasyon |

**Not:** Büyük şirketlerde başlangıç yavaş. Pilot 6 ayda olgunlaştıktan sonra organizasyon çapına yayılır → ikinci yıl ROI'si daha yüksek.

## ROI Hesaplama Formülü

Basitleştirilmiş 6 ay ROI:

```
Tasarruf = (Çalışan sayısı × Haftalık tasarruf saati × 26 hafta × Saatlik yüklü maliyet)
Maliyet = Claude abonelik (6 ay) + Zamana retainer + İç eğitim zamanı

ROI = (Tasarruf - Maliyet) / Maliyet × 100
```

**Örnek hesap — İlk 6 ay (6 kişilik şirket):**

- 6 çalışan × 8 saat/hafta × 26 hafta = 1.248 saat
- Saatlik yüklü maliyet 500 ₺ → tasarruf = 624.000 ₺
- Claude Max 5x maliyeti ($100/kişi/ay × 6 kişi × 6 ay = $3.600 ≈ 144.000 ₺)
- Zamana retainer ($9.000 ≈ 360.000 ₺)
- İç eğitim zamanı (~80 saat × 500 ₺ = 40.000 ₺)
- Toplam yatırım: ~544.000 ₺
- **ROI: (624.000 - 544.000) / 544.000 = ~%15 ilk 6 ayda**

**Örnek hesap — İkinci 6 ay (6 kişilik şirket):**

İkinci 6 ayda Zamana retainer ve iç eğitim maliyeti olmaz, sadece Claude Max 5x abonelik maliyeti kalır.

- 6 çalışan × 8 saat/hafta × 26 hafta = 1.248 saat
- Saatlik yüklü maliyet 500 ₺ → tasarruf = 624.000 ₺
- Claude Max 5x maliyeti ($100/kişi/ay × 6 kişi × 6 ay = $3.600 ≈ 144.000 ₺)
- Toplam yatırım: ~144.000 ₺
- **ROI: (624.000 - 144.000) / 144.000 = ~%333 ikinci 6 ayda**

**Not:** Çalışan başı saatlik yüklü maliyeti kendi ortalama çalışan maliyetinize göre değiştirip yeniden hesaplayabilirsiniz.

[Yaygın İtirazlar](itirazlar/) ve [Fatura ve KDV](fatura-ve-kdv/) sayfalarında bu hesabın detayı var.

## Ölçüm Disiplini — Kim, Nasıl, Ne Sıklıkla

| Aktivite | Kim | Sıklık |
|---|---|---|
| Bireysel zaman tasarrufu anketi | Her çalışan | Haftalık (5 dk) |
| Kalite skoru örneklemesi | Ekip lideri | Haftalık (15 dk) |
| Otomasyon sayımı | Ekip lideri | Aylık |
| ROI raporu | Yönetim / İK | Çeyreklik |
| Anthropic Admin Console kullanım metrikleri | IT / Admin | Aylık |
| Çalışan tatmin anketi (NPS benzeri) | İK | Çeyreklik |

[Takım ve Admin](takim-ve-admin/) sayfasında Anthropic admin paneli üzerinden gelen metrikler anlatılır.

## Kalite Tuzakları — Ölçümde Düzeltilecekler

**1. "Hızlı = İyi" yanılgısı.** Bir işin Claude ile 10 dakikada bitmesi onu otomatik daha kaliteli yapmaz. Daha hızlı yapılmış kalitesiz iş, hâlâ kalitesiz iştir.

**2. Halüsinasyon riski.** Claude bazı verileri uydurabiliyor. [Sınırlamalar](sinirlamalar/) sayfası bunu açıklıyor. Ölçümün kalite tarafında **hata oranı** da takip edilmeli.

**3. Aşırı bağımlılık.** Çalışan Claude olmadan çalışamaz hâle gelirse, bu da bir risk. Ara sıra "Claude'suz gün" denenebilir.

**4. Fake productivity.** Çalışan haftada 8 saat tasarruf ettiğini söylüyor ama gerçekte sadece kahve içmeye fazla zaman ayırıyor. **Çıktı miktarı + kalitesi** ile birlikte ölçülmeli, salt "tasarruf" sayısı yanıltır.

## Geliştirme Döngüsü — PDCA

Ölçüm yalnızca rakam toplamak değil, eylem doğurmalıdır:

- **Plan:** Hedef metrikleri belirle (örn. ortalama 8 saat/hafta)
- **Do:** Eğitim + retainer ile uygulama
- **Check:** 90 günde ölçüm, hedeften sapma analizi
- **Act:** Düşük kalan kullanıcılarla bireysel görüşme, kullanım engelleri çıkarma, ek eğitim

Zamana retainer programının arka planı bu döngüdür.

## Müşteri Vaka Örnekleri (Kapalı İsim)

> **Trakya bölgesinde gıda üreticisi, 8 çalışan.** 6 ay önce başladılar, ilk ay Max 5x zorunlu plan. 90 gün sonu ortalaması: çalışan başı 9 saat/hafta tasarruf. En büyük kazanç [İhracat](../departmanlar/ihracat/) için müşteri yazışmalarında — Almanca ve Rusça yazışmalar Claude tarafından taslak çıkarılıyor, satış müdürü 15 dk yerine 4 saat harcıyordu.

> **İstanbul'da hukuk bürosu, 12 çalışan.** Başlangıçta dirençliydiler ("hukuk hassas, AI riskli"). 3 ay sonra avukat başına 7 saat/hafta tasarruf. Sözleşme inceleme, içtihat araştırma, müvekkile rapor yazma — hepsinde Claude taslak çıkarıyor, avukat doğrulayıp gönderiyor. [Hukuk departmanı](../departmanlar/hukuk/) sayfası yaklaşımı detaylandırır.

> **Ankara'da otomotiv yan sanayi, 35 çalışan.** İlk pilot 6 kişi, 90 gün sonra organizasyon geneline açıldı. Ana kazanç: [Operasyon](../departmanlar/operasyon/) tarafında haftalık üretim raporları ve [Müşteri Hizmetleri](../departmanlar/musteri-hizmetleri/) tarafında çoklu dilde yazışma. Yaklaşık 18-22 saat/hafta toplam tasarruf (organizasyon geneli).

İsimsiz örnekler genel rakamlar verir; spesifik veri için Murat'la görüşme önerilir.

## Tek Sayıyla Anlatma — CFO İçin

Yönetim raporlarında tek satırlık özet için:

> *"6 kişiyle 6 ayda 1.250 saat kazanım. Yatırım 470 bin TL, getiri 940 bin TL. İkinci yıl artıştan ROI üç haneli."*

Detayları [Yaygın İtirazlar](itirazlar/) ve [Finans Departmanı](../departmanlar/finans/) sayfaları derinleştirir.

## İlgili Sayfalar

- [Yaygın İtirazlar](itirazlar/) — Finans direktörü itirazlarına detay
- [Fatura ve KDV](fatura-ve-kdv/) — Maliyet tarafının muhasebesi
- [Planlar](planlar/) — Plan maliyetleri
- [Takım ve Admin](takim-ve-admin/) — Admin paneli üzerinden kullanım metriği
- [Şirket İçi Politika](sirket-ici-politika/) — Ölçüm politikasını yazıya dökme
- [4D Çerçevesi](../prompting/4d-cercevesi/) — Kalite üretimi felsefesi
- [Sınırlamalar](sinirlamalar/) — Halüsinasyon ve kalite riskleri

