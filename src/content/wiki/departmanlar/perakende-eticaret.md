---
title: Perakende ve E-Ticaret — Claude Uygulamaları
description: Perakende ve e-ticaret işletmeleri için Claude — ürün açıklaması, müşteri yorum analizi, kampanya, fiyat takibi, marketplace yönetimi.
tags:
  - departmanlar
  - perakende
  - eticaret
  - urun-aciklamasi
---

Türkiye'de perakende ve e-ticaret hızla büyüyor — Trendyol, Hepsiburada, Amazon TR, kendi siteleri, fiziksel mağaza zincirleri. Her gün **binlerce ürün açıklaması, müşteri yorumu, kampanya metni** gerekir. Claude bu içerik üretim makinesini ölçeklendirir; üstüne veri analizi de katar.

## Claude'un Çözdüğü Temel Sıkıntılar

- Ürün açıklamaları aynı şablon, satış dönüşümü düşük
- Müşteri yorumları okunmuyor, içgörü kaybediliyor
- Marketplace başına ayrı içerik üretmek zaman alıyor
- Kampanya metinleri klişe ve etkisiz
- Fiyat-rekabet takibi manuel ve eskimiş
- Müşteri sorularına yanıt yavaş

## Bölüm 1 — Ürün İçeriği

### Ürün Açıklaması Yazımı

Bir ürün ekleyeceksiniz. Hammaddeler, ölçüler, fotoğraflar var ama **satan** açıklama yok. Claude:

- Ürün özelliklerinden satış faydası türetir
- Hedef kitle dilini kullanır (genç anne, profesyonel sporcu, hobici, vb.)
- SEO için anahtar kelime entegrasyonu
- Bullet liste + akıcı paragraf birleşimi
- Marketplace başına farklı uzunluk (Trendyol kısa, kendi site uzun)

[Few-Shot Örnekleme](../prompting/few-shot-ornekleme/) ile **"satan" örneklerinizi** Claude'a vererek tarzınızı öğretirsiniz.

### Çoklu Marketplace İçerik

Aynı ürün için Trendyol, Hepsiburada, Amazon TR varyasyonları. Karakter sınırları farklı, format farklı, anahtar kelime stratejisi farklı. Claude tek prompttan üç versiyon üretir.

### Çeviri ve Lokalizasyon

İhracat satışı yapan e-ticaret için ürün açıklaması çevirisi. İngilizce, Almanca, Arapça, Rusça — Claude profesyonel ton tutar, kültürel uyumluluk gözetir. [İhracat departmanı](ihracat/) sayfası bu boyutu detaylandırır.

### Ürün Özellik Tablosu

Teknik özelliklerden müşteri-anlaşılır tablo: "Pamuk %95" → "Yumuşak, nefes alır kumaş" tarzı çeviri. [Çıktı Formatı](../prompting/cikti-formati/) sayfasında tablo yapımı detaylı.

## Bölüm 2 — Müşteri Yorum Analizi

### Yorum Sınıflandırma

Aylık binlerce yorum geliyor. Çoğu okunmadı bile. Claude:

- Yorumları kategorilere ayırır: kalite, kargo, fiyat, hizmet, ürün uyumu
- Duygu skoru (olumlu, olumsuz, nötr)
- En sık geçen şikâyet konularını öne çıkarır
- Memnun müşterilerin neyi övdüğünü çıkarır (pazarlama içeriği için altın)

[Few-Shot Örnekleme](../prompting/few-shot-ornekleme/) ile sınıflandırma kalitesi yükselir.

### Trend Tespiti

"Geçen ay yoktu, bu ay 20 yorumda görünüyor" gibi yeni trendleri Claude tespit eder — yeni bir kalite sorunu mu, lojistik aksaklık mı, yeni rakipten kıyas mı.

### Yorum-Ürün Eşleme

Yorumdan **ürün açıklamasına** bilgi geri akışı. "Müşteriler sürekli 'kıvrılmıyor' diye övüyor — bunu açıklamada vurgulamamış mıyız?"

## Bölüm 3 — Kampanya ve Pazarlama

### Kampanya Metni

İndirim kampanyası, yeni ürün lansmanı, sezon değişimi. Claude'la:

- Hook (dikkat çekme)
- Değer önerisi (neden satın al)
- Aciliyet (son tarih)
- CTA (net aksiyon)

[Pazarlama departmanı](pazarlama/) sayfası genel pazarlama yaklaşımını detaylandırır.

### E-posta Newsletter

Müşteri listesine haftalık / aylık newsletter. Claude segment başına farklı versiyonlar üretir — VIP, dormant, yeni kayıt.

### Sosyal Medya Postları

Instagram, TikTok metin kısımları. Görseli siz üretirsiniz, metni Claude. Hashtag stratejisi dahil.

### Push Notification

Mobil app push mesajları — 60 karakter sınırı, hook + neden + aksiyon. Claude varyantlar üretir A/B test için.

## Bölüm 4 — Fiyat ve Rekabet Takibi

### Rakip Analizi

[Research mode](../yetenekler/research-mode/) ile rakip ürünlerin fiyat-özellik analizi. Sezonluk olarak çıkarın, fiyatlandırma kararlarınızı destekleyin.

### Fiyat Önerisi

Maliyet + rakip fiyat + pazar konumu → Claude fiyat aralığı önerir. Final karar size ait, ama analiz hızlı.

### Sepet Terk Analizi

Sepet terk verileriyle Claude'a sorun: hangi ürünlerde, hangi adımda, hangi sebeple. [Code Execution](../yetenekler/code-execution/) ile gerçek hesap.

## Bölüm 5 — Müşteri Hizmetleri

### Sıkça Sorulan Cevaplar

E-ticaret destek genelde aynı 30 soruyu farklı şekillerde sorar. Claude bunlar için doğal, kişiselleştirilmiş yanıt taslakları üretir.

[Müşteri hizmetleri](musteri-hizmetleri/) sayfası bu boyutu derinleştirir.

### İade / Şikayet Yanıtı

Hassas durumlarda Claude diplomatic + çözüm odaklı taslak hazırlar. Müşteri temsilcisi düzenler, gönderir.

### Çoklu Dil Destek

İhracat yapan e-ticaret için 5+ dilde müşteri yanıtı.

## Bölüm 6 — İçerik Çoğaltma

### Ürün Kataloğu

Yıllık ürün kataloğu basımı. 200 ürün × kısa açıklama × özellik tablosu = haftalarca iş. Claude'la 3-5 günde biter.

### Blog ve SEO İçerik

E-ticaret SEO'nun yarısı blog. "Hangi ayakkabı hangi mevsimde", "kahve fincanı nasıl seçilir" tarzı bilgi içerikleri Claude'la haftalık üretilir.

### Video Senaryosu

Ürün tanıtım videolarınızın senaryoları. 30 saniye TikTok, 1 dakika Reels, 5 dakika YouTube — formata göre.

## Pratik Kullanım Senaryoları

### Senaryo 1: Sezon Lansmanı

Yaz koleksiyonu lansmanı. 80 ürün, her birinin Trendyol+Hepsiburada+kendi site açıklaması, kampanya metni, e-posta, sosyal medya seti. Claude'sız 3 hafta. Claude'la 4 gün.

### Senaryo 2: Müşteri Yorum Krizi

"Bu ay olumsuz yorum patladı" şikayeti. Claude tüm bu ay yorumları analiz eder, **kök sebep tespit eder** — meğer kargonun bir bayisinde sorun var. Operasyon hızla müdahale.

### Senaryo 3: Fiyat Savaşı

Rakip büyük indirim açtı. Claude pazar koşulu analizi yapar, taktik öneriler sıralar — sadece düşürmeye değil, alternatif değer önerisi geliştirmeye.

### Senaryo 4: SKU Çoğaltma

Bir ürün serisinin 20 yeni renk varyasyonu eklenecek. Her birinin açıklamasını Claude bir sohbette üretir, [Skills](../yetenekler/skills/) ile Excel'e dökülür, marketplace'lere yüklemeye hazır.

## CLAUDE.md Tavsiyesi

E-ticaret çalışanı için temel:

```markdown
## Marketplace Bilgileri
- Ana marketplace: [örn. Trendyol Premium]
- Karakter sınırları: ürün başlık 50, açıklama 1500
- Kategori: [moda, elektronik, vs.]

## Marka Voice
- Genç-pratik. Klişe yok ("kalite garantili" gibi).
- Müşteriye "siz" diliyle yaz, "değerli müşterimiz" yasak.

## Yapma
- Sahte özellik iddiası yapma (bilmediğin şey yazma)
- Rakip marka ismini ürün açıklamasında anma
- Türkçe karakter kaybı kabul edilemez

## Yap
- Her ürün açıklamasında: hook → 3 fayda → CTA
- Müşteri yorum yanıtlarında ad kullan, klişe açış yok
```

[Şablon Kütüphanesi](../claude-md/sablon-kutuphanesi/) sayfasında pazarlama şablonu var.

## Kullanım Engelleri

**Engel:** "Hep aynı şablon çıkıyor."

**Çözüm:** [Few-Shot Örnekleme](../prompting/few-shot-ornekleme/) ile en iyi 3-5 ürün açıklamanızı örnek verin. Claude tarzı taklit eder, monotonluk kalkar.

**Engel:** "Sahte iddia üretmiyor mu?"

**Çözüm:** "Sadece verdiğim özelliklere göre yaz, ek özellik uydurma" kuralı her promptta. CLAUDE.md'de zaten yazılı tutulabilir.

**Engel:** "SEO için anahtar kelime stratejimiz var, Claude bilmiyor."

**Çözüm:** Anahtar kelime listesini her ürün için Claude'a verin: "Şu kelimeler doğal şekilde geçsin." [Pazarlama departmanı](pazarlama/) SEO derinleşmesi.

## Bireysel ve Küçük İşletme

Tek kişilik e-ticaret işletmesi için Claude'un değeri olağanüstü. 1 kişiyle 50 kişi gibi içerik üretmek mümkün. [Bireysel program](https://zamana.com.tr) bu profile uygun.

## İlgili Sayfalar

- [Pazarlama Departmanı](pazarlama/) — Pazarlama derinliği
- [Müşteri Hizmetleri](musteri-hizmetleri/) — Destek tarafı
- [Satış Departmanı](satis/) — B2B perakende
- [İhracat Departmanı](ihracat/) — Sınır ötesi e-ticaret
- [Few-Shot Örnekleme](../prompting/few-shot-ornekleme/) — Marka voice öğretme
- [Code Execution](../yetenekler/code-execution/) — Yorum / satış analizi
- [Research Mode](../yetenekler/research-mode/) — Rakip araştırma
- [Skills](../yetenekler/skills/) — Excel, ürün listesi üretme
- [Connectors](../araclar/connectors/) — Shopify, marketplace API entegrasyonu

