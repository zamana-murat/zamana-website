---
title: Türkçe Prompt Teknikleri — Dile Özgü İpuçları
description: "Türkçe prompt yazarken karşılaşılan sorunlar ve çözümleri. Tonlama, eklemeli yapı, kod-anahtarlama ve \"İngilizce kayma\" tuzağı."
tags:
  - prompting
  - turkce
  - dil
---

**Claude Türkçe'yi iyi anlar, ama Türkçe yazılan prompt İngilizce yazılan prompttan farklı tepki üretebilir.** Türkçe'nin sondan eklemeli yapısı, tonlama nüansları, iş hayatındaki kalıpları farklıdır. Bu sayfa Türkçe-spesifik teknikleri anlatır.

[Türkçe Performansı](../temeller/turkce-performansi/) sayfası genel kalite tablosunu gösterir; bu sayfa **prompt yazarken neye dikkat etmeli** sorusuna odaklanır.

## Önce Genel Prensip

Claude'un Türkçe çıktı kalitesi yüksek. Ama:

- Bazı **iş kalıpları** İngilizce kaynak materyallerden öğrenildiği için "tercüme kokusu" verebilir
- **Kayıt (register)** seçimi (resmî / samimi / orta) açıkça söylenmediğinde tutarsız olur
- Uzun [bağlam](../yetenekler/context-compaction/) içinde Türkçe'den İngilizce'ye **kayma** olabilir

Üç temel teknik bunları çözer.

## 1. Kayıt (Register) Açıkça Belirt

Türkçe'de iletişim kayıtları İngilizce'den daha katı:

| Kayıt | Örnek hitap | Kullanım |
|---|---|---|
| Çok resmî | "Sayın [Unvan] [Soyadı] Bey/Hanım" | Resmî mektup, hukuki belge |
| Resmî-iş | "Sayın [Ad] [Soyadı]" | Müşteri yazışması, iş ortağı |
| Samimi-iş | "Merhaba [Ad]" | Tanıdık iş ortağı, kolega |
| Çok samimi | "Selam [Ad]", "Hey" | Yakın takım arkadaşı, sosyal medya |

Claude'a kayıt seçtirmeyin — **siz seçin, açıkça söyleyin:**

> ❌ *"Müşteriye saygılı bir yanıt yaz."*
>
> ✅ *"Müşteriye **resmî-iş kayıdında** bir yanıt yaz: 'Merhaba [Ad]' ile başla, 'iyi günler dilerim' ile bitir, 'sayın' kullanma."*

## 2. "İngilizce Kayma"yı Engelle

Uzun bir Türkçe sohbette Claude bazen İngilizce'ye kayar — özellikle teknik terim yoğunlaştığında:

- Kullanıcı **Türkçe** soru → Claude **Türkçe** yanıt → kullanıcı yine Türkçe → Claude bir cümle İngilizce, sonra geri Türkçe → 5 mesaj sonra çıktı yarı-İngilizce

**Önleme:**

[CLAUDE.md](../claude-md/nedir/) içine net bir dil kuralı:

```markdown
## Dil
Tüm yanıtların Türkçe. Teknik terim için İngilizce karşılık parantez içinde 
verilir (örn. "akış (flow)"). Kullanıcı Türkçe yazdığı sürece İngilizce'ye geçilmez.
```

Sohbet içinde kayma görürseniz hemen düzeltin:

> *"Hatırlatma: lütfen Türkçe yanıtla. Teknik terim için Türkçe + parantez İngilizce."*

[Hata Ayıklama](../claude-md/hata-ayiklama/) sayfasında bu ve benzer dil sorunları detaylanır.

## 3. Eklemeli Yapı — Net Kelime Seçimi

Türkçe sondan eklemeli olduğu için aynı kavram farklı eklerle ifade edilir:

- "Yapıldı" / "Yapılmıştır" / "Yapılmış olur" — hepsi pasif geçmiş, ama tonlamaları farklı
- "Söylüyorum" / "Söylemekteyim" / "Diyebilirim ki" — aktiviteyi farklı yumuşatır

Promptta **istediğiniz tarzı** belirtmek faydalı:

> *"Resmî yazı: 'yapılmıştır', 'edilmiştir' kullan; 'yapıldı' kullanma."*
>
> *"Samimi yazı: 'yaptım', 'gönderdim' gibi kısa formlarda kal; '-mıştır' kalıbı yasak."*

## 4. Sayı, Tarih, Birim Yazımı

Türkçe ve İngilizce yazım kuralları farklıdır:

| Kavram | Türkçe doğru | Yaygın hata (İngilizce kaynaklı) |
|---|---|---|
| Tarih | 26 Nisan 2026 | 04/26/2026 |
| Para | 1.500 ₺ | $1,500 |
| Ondalık ayraç | 3,14 | 3.14 |
| Binlik ayraç | 1.000.000 | 1,000,000 |
| Saat | 14:30 | 2:30 PM |

Claude bu kuralları **çoğunlukla** doğru uygular ama %100 değil. Önemli yazışmalarda kontrol edin veya promptta belirtin:

> *"Tarihler 'GG Ay YYYY' formatında. Para Türk Lirası ile sonda — '1.500 ₺'. Ondalık virgül, binlik nokta."*

## 5. Klişe Türkçe İş Dilini Engelleme

Claude'un eğitim verisindeki Türkçe iş dili klişe yüklü. Aşağıdakiler sıkça çıkar, ama profesyonel iletişimde **anlamsız**dır:

- "Sayın değerli müşterimiz"
- "İlginiz için teşekkür ederiz"
- "En içten saygılarımla"
- "Hoş bir gün geçirmenizi dileriz"
- "Ekibimiz konuyla ilgilenmektedir"

[Pazarlama departmanı](../departmanlar/pazarlama/) ve [Müşteri Hizmetleri](../departmanlar/musteri-hizmetleri/) sayfalarında alternatif kalıplar var.

[CLAUDE.md](../claude-md/nedir/) içine yasak kelime listesi koymak en pratik çözüm:

```markdown
## Yasak Kalıplar
- "Sayın değerli", "ilginiz için teşekkür"
- "En içten saygılarımla", "hoş bir gün"
- Yerine: "Merhaba [İsim]", "İyi günler", "Soruların için teşekkürler"
```

[Şablon Kütüphanesi](../claude-md/sablon-kutuphanesi/) sayfasında rol bazlı doğru kalıplar var.

## 6. "Sen" mi "Siz" mi?

Türkçe "siz" hem çoğul hem nezaket. Promptta net olun:

> *"Tek müşteriye yazıyorum — 'siz' diliyle, ama mesafeli değil. 'Sayın' yok, 'Merhaba [Ad]' var."*
>
> *"Şirketin web sitesinde — '[müşteriler]' çoğul, 'siz' diliyle ('biz size yardım ederiz')."*

Claude'a tercih bırakırsanız her seferinde farklı seçer.

## 7. Türkçe Karakterler ve Şapka

Bazı durumlarda Claude Türkçe karakterleri (ç, ğ, ı, ö, ş, ü) kaybedebilir veya yanlış kullanabilir — özellikle:

- Çok uzun çıktılarda
- Kod blokları içinde
- Türkçe-İngilizce kayma anında

Önemli yazılarda final kontrolü kendiniz yapın. Otomatik üretimlerde (örn. [Scheduled Tasks](../araclar/scheduled-tasks/) çıktısı) bir post-process kontrol ekleyin.

## 8. Cinsiyet Belirsizliği — Avantaj

Türkçe'de gramatik cinsiyet yok ("o" eril/dişil ayırmaz). Bu Claude'un cinsiyet-tarafsız yazmasını **kolaylaştırır**:

- İngilizce: "she/he", "their" — çoğu zaman tartışmalı
- Türkçe: "o" — doğal olarak nötr

İK, hukuk, akademik yazılarda bu avantaj kullanılır:

> *"İK belgesinde tüm referanslar 'çalışan' veya 'kişi' olarak. 'Bay/Bayan' yerine 'Sayın'. 'O' zamiri gerektiğinde sorun değil — Türkçe nötr."*

## 9. Sektörel Türkçe — Şirket İçi Jargon

Türkiye'deki şirketlerin iç jargonu çok sektörel:

- Finans: "kapama", "valör", "rep", "swap"
- Hukuk: "harç", "vekalet", "icra", "tedbir"
- Üretim: "fire", "vardiya", "kademe", "OEE"
- IT: "patch", "deploy", "uptime", "downtime"

[CLAUDE.md](../claude-md/nedir/) içine **şirket içi sözlük** koyun:

```markdown
## Şirket Akronimleri ve Jargon
- PMV: Proje Müdürü Vekâleti
- "Kara Hat": Anadolu üretim tesisi
- "Yumuşak deadline": tarih önemli ama bir gün kaymak suç değil
- "Sıkı deadline": kaymaz, müşteri sözleşmesinde geçer
```

## 10. Soru Tipinin Etkisi

Türkçe soru tipleri farklı yanıt çağrıştırır:

| Soru tipi | Örnek | Claude'un eğilimi |
|---|---|---|
| Açık uçlu | "Bu konuda ne düşünüyorsun?" | Uzun, dağınık |
| Yapılandırılmış | "3 ana açıdan değerlendir: maliyet, risk, hız" | Net, tabloya yatkın |
| Karşılaştırmalı | "X mi Y mi, hangisini neden?" | Argümanlı |
| "Nasıl" sorusu | "Nasıl yaparım?" | Adım adım |
| "Neden" sorusu | "Neden böyle?" | Açıklayıcı |

Ne istediğinizi sezmesinden değil, **soruyu doğru sormaktan** kalite çıkar. [Temel İlkeler](temel-ilkeler/) ve [4D Çerçevesi](4d-cercevesi/) bunu derinleştirir.

## 11. Vurgu ve Önem

Türkçe'de vurgu için sözcük sırası önemlidir:

- "Bu raporu **yarın** vermeliyim." — yarın vurgulu
- "Bu raporu yarın **vermeliyim**." — vermek vurgulu
- "**Bu** raporu yarın vermeliyim." — bu spesifik rapor

Promptta önemli olanı **kalın** yazın veya başa alın:

> *"**Yarın saat 17:00'a kadar** [müşteri] için sözleşme taslağı hazırla."*

## 12. Hızlı Test

Yeni bir prompt yazdığınızda Türkçe kalitesini test edin:

1. Promptu yazın, Claude'a verin
2. İlk yanıtı okuyun — **3 sorun arayın:**
   - Klişe / pazarlama dili var mı?
   - Kayıt tutarlı mı (samimi-resmî kayma yok mu)?
   - Türkçe karakter kaybı var mı?
3. Bulduğunuz sorunları promptta düzeltin
4. Bu süreci 2-3 kez yineleyin → kalıcı şablon oluşur

[Prompt İterasyonu](prompt-iterasyonu/) sayfası bu döngüyü detaylandırır.

## Pratik Şablon

Türkçe iş prompt'u için temel iskelet:

```
Görev: [Ne istiyorsun]

Bağlam:
- Kim için: [müşteri / iç ekip / kamu]
- Hangi kayıt: [resmî-iş / samimi-iş / nötr]
- Hangi format: [e-posta / rapor / liste / tablo]
- Uzunluk: [3 cümle / 1 paragraf / 2 sayfa]

Kurallar:
- Türkçe-first, klişe yasak
- [özel kurallar]

Şu örneklere benzeyen tarz:
[1-2 referans örnek]

Üret.
```

## İlgili Sayfalar

- [Türkçe Performansı](../temeller/turkce-performansi/) — Genel kalite tablosu
- [Temel İlkeler](temel-ilkeler/) — Genel prompt mantığı
- [4D Çerçevesi](4d-cercevesi/) — Delegation/Description/Discernment/Diligence
- [Prompt Kataloğu](prompt-katalogu/) — Hazır Türkçe şablonlar
- [Çıktı Formatı](cikti-formati/) — Format kontrolü
- [Few-Shot Örnekleme](few-shot-ornekleme/) — Örnekle öğretme
- [Yaygın Hatalar](yaygin-hatalar/) — Tipik prompting hataları
- [CLAUDE.md / Hata Ayıklama](../claude-md/hata-ayiklama/) — Dil sorunları çözümü

