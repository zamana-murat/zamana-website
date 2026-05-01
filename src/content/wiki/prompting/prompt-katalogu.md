---
title: Prompt Kataloğu — Hazır Şablonlar
description: Toplantı özeti, müşteri yanıtı, sözleşme analizi, rapor — günlük iş için kullanıma hazır Türkçe prompt şablonları.
tags:
  - prompting
  - sablon
  - katalog
---

**Çoğu profesyonel her gün benzer 5-10 işle uğraşır.** Toplantı özeti, müşteri e-postası, rapor taslağı, veri analizi, hızlı araştırma — bunların her biri için **kullanıma hazır prompt şablonu** olması, her seferinde yeniden düşünmekten kurtarır.

Bu sayfa Zamana eğitim programının pratiklerinden derlenmiş prompt şablonları sunar. **Kopyalayın, [köşeli parantezli yerleri] kendi bilgilerinizle doldurun, kullanın.**

## Nasıl Kullanılır

1. Aşağıdan ihtiyacınıza yakın şablonu seçin
2. Köşeli parantezli yerleri (`[müşteri adı]` gibi) doldurun
3. Claude'a verin
4. Çıktıyı kontrol edin, gerekirse iterasyonla geliştirin
5. Düzenli kullandığınız şablonları kişisel CLAUDE.md / [Şablon Kütüphanesi](../claude-md/sablon-kutuphanesi/)'ne ekleyin

İterasyon süreci için [Prompt İterasyonu](prompt-iterasyonu/) sayfası.

---

## A. Müşteri ve Satış

### A1. Soğuk E-posta

```
Görev: Yeni bir prospect'e ilk temas e-postası yaz.

Hedef kitle: [Sektör] sektöründe [pozisyon] kişi, [şehir]'de.
Şirket: [Şirket adı], [çalışan sayısı], [kısa tanım].

Değer önerimiz: [bir cümle]
Ortak referans veya bağlantı: [varsa]

Kurallar:
- En fazla 100 kelime
- Subject line 5-7 kelime
- İlk cümle: hooks (sorularına değen bir gözlem)
- Orta: değer önerisi (1 cümle)
- Son: net, küçük bir sonraki adım (örn. "15 dk konuşalım mı?")
- Pazarlama klişesi yasak ("lider çözümümüz", "yenilikçi" vs.)
- Resmî-samimi kayıt: "Merhaba [Ad]" ile başla

İki versiyon yaz: A versiyonu daha doğrudan, B versiyonu daha hikâyeyle.
```

### A2. Müşteri İtirazına Yanıt

```
Görev: Müşterinin şu itirazına yanıt taslağı çıkar.

Müşteri itirazı (orijinal mesajı):
[mesajı yapıştır — kişisel veriyi anonimleştir]

Bizim durumumuz:
- Ürün/hizmet: [tanım]
- İtirazın haklı tarafları: [kabul ettiğin]
- İtirazın yanlış varsayımları: [açıklama]
- Önerimiz: [çözüm]

Kurallar:
- Müşterinin haklı kısmını önce kabul et (defansif olma)
- Yanlış varsayımları açıkla, ama doğru-yanlış üzerinden değil veriyle
- Net bir çözüm öner
- Resmî-iş kayıt
- En fazla 200 kelime
```

[Yaygın İtirazlar](../temeller/itirazlar/) sayfasında genel itiraz kalıpları var.

### A3. Quarterly Pipeline Review

```
Görev: Şu pipeline verilerinden bir çeyreklik review hazırla.

Veri (Excel/CSV):
[yapıştır veya yükle]

Üret:
1. Toplam pipeline değeri ve önceki çeyrekle değişim
2. Stage bazında breakdown (her stage'te kaç fırsat, toplam değer)
3. Risk fırsatları (close date geçmiş, son 30 gündür hareketsiz)
4. Top 5 yüksek değerli fırsatın durumu
5. Sonraki 30 günde aksiyon gereken 3 fırsat

Format: yönetim için 1 sayfa özet — başlıklar, kısa paragraflar, gerekirse tablo
```

[Satış departmanı](../departmanlar/satis/) sayfası ek detay verir.

---

## B. Toplantı ve İletişim

### B1. Toplantı Sonrası Özet

```
Görev: Şu toplantı transkripsiyonundan / notlarından özet çıkar.

Notlar:
[transkript veya elle yazılmış notları yapıştır]

Üret:
1. Toplantının amacı (1 cümle)
2. Katılımcılar (varsa)
3. Tartışılan ana 3-5 konu (bullet, her biri 1-2 cümle)
4. Alınan kararlar (varsa) — net, kim, ne, ne zaman
5. Aksiyon maddeleri tablo:
   | Aksiyon | Sorumlu | Deadline |
6. Çözülmemiş sorular / sonraki toplantıya kalan

Kurallar: Türkçe-first, klişe yasak, en fazla 1 sayfa
```

### B2. Toplantı Öncesi Brief

```
Görev: Yarın saat [zaman]'daki [müşteri / iç toplantı] için brief hazırla.

Toplantı bilgisi:
- Konu: [konu]
- Katılımcılar: [isim ve rolleri]
- Süre: [dakika]
- Hedefimiz: [ne çıkarmak istiyoruz]

Bende olan veri:
- Önceki toplantı notları: [özet veya yükle]
- Müşteri/şirket profili: [özet veya yükle]
- Önceki yazışmalar: [özet]

Üret:
1. Toplantının stratejik önemi (1 paragraf)
2. Katılımcı profilleri — kim, neyle ilgili, ne ister
3. Hazırlamam gereken 3 ana nokta
4. Olası 3 zor soru ve kısa cevap taslağı
5. Toplantı sonrası muhtemel aksiyon adımları

Format: yarım sayfa, hızlı taranabilir
```

### B3. Şirket İçi Duyuru

```
Görev: Şu konuda tüm çalışanlara duyuru e-postası yaz.

Konu: [örn. yeni AI politika, ofis taşınma, tatil duyurusu]

Bağlam:
- Neden yapılıyor: [sebep]
- Ne değişiyor: [değişiklik]
- Çalışanlardan ne bekleniyor: [aksiyon]
- Soru için: [sorumlu]

Kurallar:
- Açık, doğrudan, 250 kelime altı
- "Sayın değerli çalışanlarımız" yasak — "Merhaba ekip"
- Klişe pazarlama dili yasak
- Net aksiyon ile bitir
- İmza: [İsim, Pozisyon]
```

---

## C. Yazı ve İçerik

### C1. LinkedIn Post

```
Görev: LinkedIn için bir post yaz.

Konu: [konu]
Hedef kitle: [örn. orta-büyük şirket karar vericileri, satış müdürleri]
Tarz: [örn. kişisel hikâye + içgörü, vaka analizi, listicle]

Kurallar:
- En fazla 1300 karakter
- İlk satır hook olmalı (scroll durduran)
- Ortada değer (gerçek bir içgörü, klişe değil)
- Sonda CTA — yorum, paylaş, görüşelim, blog'a yönlen — net
- Pazarlama klişesi yasak ("lider", "yenilikçi", "vizyoner")
- Hashtag 3-5 tane, alakalı
- Türkçe, samimi-iş kayıt

3 farklı versiyon üret: A) hikâye-temelli, B) veri-temelli, C) kontrarian görüş
```

### C2. Blog Yazısı Outline

```
Görev: Şu konuda blog yazısı için detaylı outline çıkar.

Konu: [konu]
Hedef anahtar kelime: [SEO için]
Hedef okur: [kim — sektör, pozisyon, sorun]
Kelime hedefi: [örn. 1500-2000]

Üret:
1. 5 alternatif başlık önerisi (SEO + clickability dengesi)
2. Meta description (155 karakter)
3. Tam outline:
   - Giriş (problem, hook, kim için)
   - Ana bölümler (en az 4, her biri H2)
   - Her ana bölüm altında 2-3 alt başlık (H3)
   - Sonuç + CTA
4. Her bölüm için anahtar nokta (cümle)
5. İçerikte kullanılabilecek 3 örnek/vaka önerisi

Format: hiyerarşik liste
```

### C3. Müşteri Vaka Çalışması (Case Study)

```
Görev: Şu müşteri için vaka çalışması yaz.

Müşteri (anonimleştirilmiş): [örn. "Trakya'da orta ölçekli gıda üreticisi, 8 çalışan"]
Sorun: [sorun]
Bizim çözümümüz: [çözüm]
Sonuç (sayısal): [örn. "haftada 40 saat tasarruf"]

Yapı:
1. Müşteri kim (1 paragraf)
2. Hangi sorunla geldi (1 paragraf)
3. Ne denedi, ne işe yaramadı (yarım paragraf)
4. Bizim yaklaşımımız (1 paragraf)
5. Süreç ve dönüm noktaları (2-3 paragraf)
6. Sonuçlar — sayısal ve niteliksel (1 paragraf)
7. Müşteri alıntısı (varsa) veya benzeri sonuç bekleyenlere not

Kurallar: 
- Maksimum 800 kelime
- Sayısal verilerde hep aralık veya yaklaşık
- Müşteri ismi varsa anonimleştir
- Pazarlama klişesi yasak
```

---

## D. Analiz ve Karar

### D1. Veri Analizi (CSV / Excel)

```
Görev: Şu veriyi analiz et.

Veri:
[CSV/Excel yükle]

Beklediğim:
1. Veri yapısının özet açıklaması (kaç satır, hangi sütunlar, ne tarz)
2. 3 ana içgörü — her biri 1-2 cümle, gerekirse hesapla destekli
3. Dikkat çeken anomali / aykırı değer (varsa)
4. Veriden hareketle 3 öneri / aksiyon
5. Görselleştirme önerisi (hangi grafiği nereye)

Format: yönetim raporu, 1 sayfa
Görselleştirme istersen [Artifact](../yetenekler/artifacts/) olarak çıkar
```

[Artifacts](../yetenekler/artifacts/) sayfası görselleştirme detayını verir.

### D2. Karar Matrisi (Çok Seçenek)

```
Görev: [Karar konusu] için karar matrisi hazırla.

Seçenekler:
- A: [seçenek]
- B: [seçenek]
- C: [seçenek]

Değerlendirme kriterleri ve ağırlıkları:
- [Kriter 1] (ağırlık %X)
- [Kriter 2] (ağırlık %X)
- [Kriter 3] (ağırlık %X)
[ağırlıklar toplam %100]

Üret:
1. Kriter × seçenek matrisi (her hücrede 1-10 puan + kısa gerekçe)
2. Ağırlıklı toplam skor
3. En yüksek skorlu seçeneği öner
4. Bu önerinin riski nedir, nasıl yönetilir
5. Karar verici için "tek satır" özet

Format: tablo + altında 1 sayfa yorum
```

### D3. SWOT / Risk Analizi

```
Görev: [Konu / proje / şirket] için SWOT (veya risk) analizi yap.

Bağlam:
[konunun arka planını anlat]

Üret SWOT:
- Güçlü yönler (en az 4)
- Zayıf yönler (en az 4)
- Fırsatlar (en az 4)
- Tehditler (en az 4)

Her madde için:
- 1-2 cümle açıklama
- Hangi veriye dayandığı
- Önemini 1-5 arası skor

Sonuç: stratejik öneriler (3 öneri)
```

---

## E. Hukuk ve Sözleşme

### E1. Sözleşme İnceleme

```
Görev: Şu sözleşmeyi (Türk hukuku açısından) incele.

Sözleşme:
[yükle]

Bizim rolümüz: [satıcı / alıcı / iş ortağı]

Üret:
1. Genel değerlendirme (3-4 cümle)
2. Maddeler bazında inceleme:
   | Madde | Risk seviyesi (Düşük/Orta/Yüksek) | Yorumum | Önerim |
3. Türk Borçlar Kanunu emredici hükümleriyle çelişme riski olan maddeler
4. Müzakere edilebilir maddeler ve bizim öneri pozisyonumuz
5. Genel öneri: imzala / şu maddeler düzeltilmeden imzalama / red

UYARI: Bu hukuki tavsiye değil, ön inceleme. Final için avukat onayı gerekli.
```

[Hukuk departmanı](../departmanlar/hukuk/) sayfasında sözleşme tarafının detayı.

### E2. KVKK Aydınlatma Metni

```
Görev: Şu durum için KVKK aydınlatma metni taslağı hazırla.

Veri sahibi: [örn. müşteri / çalışan / iş ortağı]
İşlenen kişisel veri kategorisi: [ad, e-posta, telefon, IP, vs.]
İşleme amacı: [hizmet sunumu, pazarlama, vb.]
Hukuki sebep: [açık rıza / sözleşme / yasal yükümlülük]
Saklama süresi: [örn. 5 yıl]
Aktarım: [yurt içi / yurt dışı, hangi 3. taraflara]

Üret:
- KVKK md. 10 (aydınlatma yükümlülüğü) gerektirdiği tüm unsurları içeren tam metin
- Sade dil — hukuk dili yerine müşteri okuyup anlayabileceği
- Veri sahibi haklarına net atıf (md. 11)
- İletişim kanalı

UYARI: Şirketin hukuk müşaviri ile son hali onaylanacak.
```

---

## F. Operasyon ve İK

### F1. Haftalık Operasyon Raporu

```
Görev: Şu haftanın operasyon raporunu hazırla.

Veri:
[KPI'ler, üretim sayıları, fire oranı, vs.]

Format:
1. Hafta özeti (2 cümle)
2. KPI durumu (tablo: KPI / Hedef / Gerçekleşen / Sapma %)
3. Bu haftanın 3 başarısı
4. Bu haftanın 3 zorluğu / engeli
5. Sonraki hafta için 3 öncelik
6. Üst yönetimin haberdar olması gereken bir şey (varsa)

Kurallar:
- 1 sayfa
- Belirsiz ifade yasak ("biraz iyi", "fena değil") — sayısal
- Türkçe-first
```

### F2. İş İlanı

```
Görev: Şu pozisyon için iş ilanı yaz.

Pozisyon: [pozisyon adı]
Departman: [departman]
Konum: [şehir / uzaktan / hibrit]
Deneyim: [yıl aralığı]

Görev tanımı:
- [3-5 ana sorumluluk]

Aranan nitelikler:
- [zorunlu]
- [tercih edilen]

Şirket pitch (hızlıca anlat):
[1-2 paragraf]

Kurallar:
- Geniş aday havuzu için inclusive dil
- "Genç dinamik ekip" gibi yaş ayrımcılığı içeren ifade yasak
- "Erkek aday" gibi cinsiyet talebi yasak (yasal sorun)
- Maaş aralığı belirt (Türkiye'de yasal olarak zorunlu değil ama iyi pratik)
- Başvuru süreci net: nereye, ne zamana kadar, ne ile
```

[İK departmanı](../departmanlar/insan-kaynaklari/) sayfasında daha fazla şablon.

### F3. Performans Değerlendirme Geri Bildirimi

```
Görev: Çalışanın yıllık performans değerlendirmesi için yapıcı geri bildirim 
taslağı hazırla.

Çalışan rolü (anonimleştir): [pozisyon]
Yıl içi başarıları:
- [3-5 madde]

Yıl içi gelişim alanları:
- [2-3 madde, dürüst]

Görev:
- Başarıları somut örneklerle yaz (2 paragraf)
- Gelişim alanlarını yapıcı dille yaz (defansif olmadan, somut örnek + öneri)
- 2026 hedefleri için 3 öneri
- Maaş/terfi konusunu (varsa) ayrı paragrafta
- Pozitif ama dürüst kapanış

Kurallar:
- Kişisel saldırı yok, davranış üzerinden konuş
- "Daha iyi yapabilir" yerine "Şu spesifik alanda gelişebilir + nasıl"
- Dürüst — sahte övgü yok
- 1 sayfa
```

---

## G. Hızlı Görevler

### G1. Türkçeden İngilizce'ye Profesyonel Çeviri

```
Görev: Şu Türkçe metni İngilizce'ye profesyonel çevir.

Metin:
[yapıştır]

Bağlam: [örn. müşteriye e-posta / sözleşme maddesi / sunum slaytı]

Kurallar:
- Direkt çeviri değil, İngilizce iş dilinde doğal
- Ton: [resmî / samimi-iş / nötr]
- Türkçe deyim/atasözü varsa İngilizce karşılığı veya yumuşat
- Şirket adı ve özel isimler aynı kalsın

İki versiyon: A) çok yakın çeviri, B) doğal İngilizce yeniden yazım
```

### G2. Uzun Metin Özeti

```
Görev: Şu metni özetle.

Metin:
[yapıştır]

İhtiyaç:
- Uzunluk: [tek cümle / 1 paragraf / yarım sayfa]
- Hedef okur: [örn. yöneticim / müşterim / kendim için arşiv]
- Format: [düz metin / bullet / başlık+alt madde]

Kurallar:
- Ana iddiaları kaybetme
- Yan örnekleri çıkar (özet için)
- Sayısal veri varsa koru
- "Yazının ana fikri şudur" gibi meta cümle yasak — direkt özet
```

### G3. Hızlı Bilgi Sorgu (Web Arama Tetikli)

```
Görev: Şu sorunun cevabını bul, kaynak link ile.

Soru: [soru]

Tercih:
- Türkçe ve İngilizce kaynaklara bak
- Türkiye-spesifik veri için resmi kaynaklara öncelik ver
- En az 2 bağımsız kaynak çakıştır
- Kaynaklar arasında çelişki varsa söyle

Format:
- 1 paragraf cevap
- Kaynak listesi (link + 1 cümle açıklama)
- Belirsizlik kalıyorsa ne kalıyor
```

[Web Arama](../araclar/web-arama/) sayfası bu yaklaşımı detaylandırır.

---

## Şablonu CLAUDE.md'ye Yerleştirme

Bu kataloğun her şablonunu **her seferinde kopyalamak** uzun vadede yorucudur. Sıkça kullandıklarınız için:

1. CLAUDE.md'nize "şablonlarım" bölümü ekleyin
2. Şablonu çağırma kısa adı tanımlayın: "soğuk e-posta şablonu", "haftalık rapor şablonu"
3. Sonra basitçe deyin: *"Soğuk e-posta şablonunu kullan, müşteri X için, sektör Y."*

[Şablon Kütüphanesi](../claude-md/sablon-kutuphanesi/) bunu organize eder.

## Şablonların Sınırı

Şablonlar **başlangıç noktasıdır**. Aşağıdaki durumlar için yeterli değildir:

- Çok hassas, sektör-spesifik nüanslı işler (örneğin tıp tedavi planı)
- Sıfırdan yaratıcı çıktı (yeni marka kimliği)
- Karmaşık çok adımlı stratejik analiz

Bu işler için [4D Çerçevesi](4d-cercevesi/) ve [İleri Seviye](ileri-seviye/) sayfaları ile derinleşin.

## İlgili Sayfalar

- [Temel İlkeler](temel-ilkeler/) — Genel prompt mantığı
- [4D Çerçevesi](4d-cercevesi/) — Felsefe
- [Türkçe Prompt Teknikleri](turkce-prompt-teknikleri/) — Türkçe için
- [Çıktı Formatı](cikti-formati/) — Tablo/JSON/markdown kontrolü
- [Few-Shot Örnekleme](few-shot-ornekleme/) — Örnekle öğretme
- [Prompt İterasyonu](prompt-iterasyonu/) — Şablonu geliştirme
- [Şablon Kütüphanesi](../claude-md/sablon-kutuphanesi/) — CLAUDE.md rol şablonları
- [Departmanlar](../departmanlar/) — Rol bazlı uygulamalar

