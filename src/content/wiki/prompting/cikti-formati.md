---
title: Çıktı Formatı Kontrolü — Tablo, JSON, Markdown
description: "Claude'un çıktısını istediğiniz formata sokma. Tablo, JSON, madde listesi, markdown — pratik teknikler."
tags:
  - prompting
  - format
  - cikti
---

**Aynı içerik üç farklı formatta üç farklı kullanım değeri verir.** Tabloya yapıştırılması gereken veri madde listesi olarak gelirse 5 dakika daha kaybedersiniz. Bu sayfa Claude çıktısını istediğiniz formatta üretmenin pratik tekniklerini anlatır.

## Neden Format Önemli?

Claude varsayılan olarak akıcı paragraflar üretir. Ama çoğu iş çıktısı için bu en kötü format:

- Bir tabloya geçecek veri → kopyala-yapıştır cehennemi
- Bir başka yazılıma yapışacak veri → JSON gerekir
- Yöneticiye gönderilecek özet → bullet
- Slayda eklenecek madde → kısa, yapıştırılabilir

**İki yaklaşım var:** açıkça istemek veya örnek vermek. İkisi birden en güçlüsü.

## 1. Format Açıkça İste

En basit teknik: **promptta net format istemek.**

❌ *"Bu müşteri listesini özetle."*
↓ Çıktı: serbest metin paragraflar

✅ *"Bu müşteri listesini şu sütunlu tablo halinde özetle: Şirket | Ana ürün | Yıllık ciro | Notlar."*
↓ Çıktı: doğrudan kullanılabilir tablo

Format direktifi **her zaman netleştirilmeli:**

- "Tablo" → kaç sütun, hangi başlıklar
- "Liste" → numaralı mı, bullet mı, en fazla kaç madde
- "Özet" → kaç cümle, kaç paragraf
- "JSON" → şema (alan adları)

## 2. Tablo

Claude markdown tablo üretir. Word/Google Docs'a yapıştırınca otomatik tabloya çevrilir; Excel'e yapıştırma için biraz daha çalışmak gerekir.

**Talimat şablonu:**

```
Çıktı tablo halinde:
| Sütun 1 | Sütun 2 | Sütun 3 |
|---------|---------|---------|
| ...     | ...     | ...     |

Sütun 1 = [açıklama]
Sütun 2 = [açıklama]
Sütun 3 = [açıklama]
```

**Excel'e direkt geçecek veri için:**

```
Çıktı sekme ile ayrılmış (TSV) format:
şirket	ciro	sektör
ABC	1.000.000	üretim
```

TSV (tab-separated) Excel'e doğrudan yapışır. CSV (virgül) yapışmaz çünkü Excel virgülü farklı yorumlar.

## 3. JSON

Bir başka yazılıma (Python, Excel formül, başka bir API) verilecek veri için **JSON** ideal:

```
Çıktı JSON formatında:
{
  "musteriler": [
    {"isim": "...", "ciro": 0, "sektor": "..."},
    ...
  ]
}

Sadece geçerli JSON döndür, başka yorum/açıklama yok.
```

**Önemli:** "Sadece JSON, başka açıklama yok" demek kritik. Aksi halde Claude JSON'un başında ve sonunda paragraf ekleyebilir, bu da makine işlemeyi bozar.

JSON şemasını net belirtin — Claude tahmin etmesin.

## 4. Markdown

Wiki, blog, dokümantasyon için **markdown**. Çoğu durumda Claude varsayılan olarak markdown üretir, ama kontrol etmek faydalı:

```
Çıktı markdown formatında, şu yapıda:

# Başlık

## Alt başlık

**Önemli kelime kalın**

- Madde
- Madde

> Alıntı bloku

[Link](https://...)
```

## 5. Madde Listesi (Bullet)

Yöneticiye 1 sayfa özet, slayt içeriği, hızlı tarama için **bullet** kullanın:

```
Çıktı:
- Maksimum 5 madde
- Her madde 1 satır (15 kelimeyi geçmesin)
- En önemli en başta
- Numaralı değil, bullet
```

Numaralı vs bullet farkı:
- **Numaralı** → sıralı süreç, adımlar, öncelik
- **Bullet** → eşit önemde maddeler, tek başına anlamlı

## 6. E-posta Formatı

Bir e-posta üretiyorsanız format ekstra önemli — yapıştırılacak hâlde olmalı:

```
Şu format:

Subject: [konu, 5-7 kelime]

Merhaba [İsim],

[İlk paragraf — 1-2 cümle]

[Orta paragraf — değer / mesaj — en fazla 3 cümle]

[Son paragraf — net sonraki adım]

İyi günler,
[İsim]
```

Bu yapı Claude'a "subject + body" olarak iki ayrı parça döndürür.

## 7. Sunum / Slayt İçeriği

Bir slayda yapıştırılacak içerik için kısa, taranabilir olmalı:

```
Slayt başına çıktı:

# Slayt 1
Başlık: [3-5 kelime]
Subtitle: [opsiyonel]
İçerik:
- Bullet 1 (max 8 kelime)
- Bullet 2
- Bullet 3
Görsel: [varsa açıklama]
Konuşmacı notu: [varsa]

# Slayt 2
...
```

[Skills](../yetenekler/skills/) ile doğrudan .pptx üretebilirsiniz; bu format slayt-by-slayt manuel yapıştırma için.

## 8. Kısa Cevap (Tek Cümle / Tek Sayı)

Bazen sadece **bir tek şey** istiyorsunuz:

```
Cevap tek cümle. Açıklama yok, gerekçe yok, sadece cevap.
```

Ya da:

```
Sadece sayı (örn: "12.500"). Hiçbir kelime, paragraf, $ işareti, açıklama yok.
```

Bu agresif kısıt, Claude'un "yardımcı olma" eğilimini frenler.

## 9. Çok Bölümlü Çıktı

Karmaşık bir görev için birden fazla bölüm istiyorsanız:

```
Cevabını 4 bölümde ver, her bölümü H2 başlık olarak işaretle:

## 1. Mevcut Durum
[1 paragraf]

## 2. Sorunlar
[bullet liste, max 5]

## 3. Öneriler
[numaralı, max 5, her birinin yanında öncelik (yüksek/orta/düşük)]

## 4. Sonraki Adımlar
[tablo: aksiyon | sorumlu | deadline]
```

Bu yapıyla Claude her bölümü ayrı dolaşır, atlama riski azalır.

## 10. Ne Yapmamalı? Format Çarpışmaları

**Çelişen format isteği:** "Bullet liste ama paragraf gibi yaz" — Claude şaşırır.

**Çok detay format:** "Sütun 1 sola yaslı, font Helvetica 12, mavi" — Claude markdown üretir, görsel format kontrolü yok. Görsel format için [Artifacts](../yetenekler/artifacts/) veya [Skills](../yetenekler/skills/) kullanın.

**Birden çok format aynı sohbette:** "Önce tablo ver, sonra JSON ver, sonra paragraf yaz" → çıktı dağılır. Her formatı **ayrı sohbette / ayrı isteğe** ayırın.

## 11. Format Doğrulama

Format-kritik bir görev için, çıktıyı **kontrol** edin:

```
Çıktıyı verdiğin formatta doğrula:
- JSON ise: geçerli mi (parse hatası yok mu)
- Tablo ise: tüm satırlarda aynı sayıda sütun var mı
- Liste ise: tutarlı (hepsi bullet veya hepsi numaralı)

Eğer doğrulama başarısızsa düzelt ve yeniden ver.
```

Bu meta-talimat Claude'u kendi kendini kontrol etmeye zorlar.

## 12. Format + Few-Shot Birleşimi

En güçlü teknik **örnekle göstermek**. [Few-Shot Örnekleme](few-shot-ornekleme/) sayfasında detayı:

```
Çıktı şu örneğe benzer formatta:

ÖRNEK ÇIKTI:
| Müşteri | Ciro (TL) | Risk Seviyesi |
|---------|-----------|---------------|
| ABC Ltd | 1.500.000 | Orta          |
| XYZ AŞ  | 2.300.000 | Düşük         |

ŞİMDİ benim verim için aynı format:
[veri]
```

Örnek görmüş Claude çok daha tutarlı format üretir.

## 13. Türkçe Format İncelikleri

Türkçe çıktıda format kuralları biraz farklı:

- Sayı ayraçları: 1.000 (binlik nokta), 3,14 (ondalık virgül)
- Tarih: 26.04.2026 veya 26 Nisan 2026
- Para: 1.500 ₺ (₺ işareti rakamdan sonra, boşluksuz veya boşluklu)
- Saat: 14:30 (24 saat formatı)

[Türkçe Prompt Teknikleri](turkce-prompt-teknikleri/) sayfasında detay var. Promptta belirtmek gerekiyorsa belirtin.

## 14. Karşı Örnek — Format Belirtmeyince Olan

Format belirtmediğinizde Claude bazen kullanışsız çıktılar üretir. Örnek:

❌ Prompt: *"5 müşteri için satış stratejisi öner."*
↓
Claude: *"Sayın müşterimiz, satış stratejisi konusunda size yardımcı olmaktan memnuniyet duyarız. Birinci olarak..."* — 3 sayfa kaba metin

✅ Prompt: *"5 müşteri için satış stratejisi öner. Çıktı tablo: Müşteri profili | Strateji | Beklenen sonuç | Süre. Her hücre maks 15 kelime."*
↓
Claude: doğrudan kullanılabilir 5 satırlık tablo

## 15. Sahip Olduğunuz Format Şablonu

Her sıkça yaptığınız işin **bir favori format şablonu** olsun. CLAUDE.md'ye ekleyin:

```markdown
## Çıktı Format Tercihlerim
- Veri analizi → tablo + altında 3 cümle özet
- Toplantı özeti → 5 bullet aksiyon listesi
- Müşteri yanıtı → e-posta formatı (subject + body)
- Karar matrisi → tablo + altında öneri paragrafı
```

[Şablon Kütüphanesi](../claude-md/sablon-kutuphanesi/) sayfasında rol bazlı format örnekleri var.

## İlgili Sayfalar

- [Temel İlkeler](temel-ilkeler/) — Genel prompt mantığı
- [Few-Shot Örnekleme](few-shot-ornekleme/) — Örnekle format öğretme
- [Prompt Kataloğu](prompt-katalogu/) — Format dahil hazır şablonlar
- [İleri Seviye](ileri-seviye/) — Karmaşık format teknikleri
- [Yaygın Hatalar](yaygin-hatalar/) — Format hataları
- [Artifacts](../yetenekler/artifacts/) — Görsel format çıktıları
- [Skills](../yetenekler/skills/) — Word/Excel/PPT dosya üretme
- [Şablon Kütüphanesi](../claude-md/sablon-kutuphanesi/) — CLAUDE.md format kuralları

