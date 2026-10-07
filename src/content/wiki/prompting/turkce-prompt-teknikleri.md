---
title: "Türkçe Prompt Yazma: Dile Özgü Teknikler"
seoTitle: "Türkçe Prompt Yazma: Claude İçin 12 Teknik ve Şablon"
description: "Türkçe prompt yazarken kayıt seçimi, sen/siz, sayı ve tarih yazımı, klişe iş dili ve İngilizceye kayma sorunları için teknikler ve şablon."
tags:
  - prompting
  - turkce
  - dil
lastUpdated: "2026-10-06"
---

**Türkçe prompt yazmak İngilizce yazmaktan farklı dikkat ister.** Claude Türkçe'yi iyi anlar, ama Türkçe yazılan prompt İngilizce yazılan prompttan farklı tepki üretebilir: sondan eklemeli yapı, tonlama nüansları ve iş hayatındaki kalıplar farklıdır. Bu sayfa on iki Türkçe'ye özgü tekniği ve bir şablonu anlatır.

Fark tek cümleyle: [Türkçe Performansı](/wiki/temeller/turkce-performansi/) sayfası Claude'un Türkçe'de **ne kadar iyi** olduğunu gösterir; bu sayfa **prompt yazarken neye dikkat edeceğinizi** anlatır.

## Önce Genel Prensip

Claude'un Türkçe çıktı kalitesi yüksek. Ama:

- Bazı **iş kalıpları** İngilizce kaynak materyallerden öğrenildiği için "tercüme kokusu" verebilir
- **Kayıt (register)** seçimi (resmî / samimi / orta) açıkça söylenmediğinde tutarsız olur
- Uzun [bağlam](/wiki/yetenekler/context-compaction/) içinde Türkçe'den İngilizce'ye **kayma** olabilir

Üç temel teknik bunları çözer.

## 1. Kayıt (Hitap Düzeyi) Açıkça Belirt

Türkçe'de iletişim kayıtları İngilizce'den daha katı:

| Kayıt | Örnek hitap | Kullanım |
|---|---|---|
| Çok resmî | "Sayın [Unvan] [Soyadı] Bey/Hanım" | Resmî mektup, hukuki belge |
| Resmî-iş | "Sayın [Ad] [Soyadı]" | Müşteri yazışması, iş ortağı |
| Samimi-iş | "Merhaba [Ad]" | Tanıdık iş ortağı, kolega |
| Çok samimi | "Selam [Ad]", "Hey" | Yakın takım arkadaşı, sosyal medya |

Claude'a kayıt seçtirmeyin, **siz seçin, açıkça söyleyin:**

> ❌ *"Müşteriye saygılı bir yanıt yaz."*
>
> ✅ *"Müşteriye **resmî-iş kaydında** bir yanıt yaz: 'Merhaba [Ad]' ile başla, 'iyi günler dilerim' ile bitir, 'sayın' kullanma."*

## 2. "İngilizce Kayma"yı Engelle

Uzun bir Türkçe sohbette Claude bazen İngilizce'ye kayar, özellikle teknik terim yoğunlaştığında:

- Kullanıcı **Türkçe** soru → Claude **Türkçe** yanıt → kullanıcı yine Türkçe → Claude bir cümle İngilizce, sonra geri Türkçe → 5 mesaj sonra çıktı yarı-İngilizce

**Önleme:**

Net bir dil kuralını **kalıcı talimata** yazın. Nereye yazacağınız, Claude'u nerede kullandığınıza bağlıdır:

- **Claude sohbetinde** (web, masaüstü, mobil): Settings > General altındaki "Instructions for Claude" alanı tüm sohbetlerde geçerlidir. Kural yalnız bir iş için gerekiyorsa o işin [Projesi](/wiki/araclar/projects/)ndeki proje talimatına yazın
- **Cowork'te:** global talimat (her oturumda) ya da klasör talimatı (o klasörle çalışırken)
- **Claude Code'da:** [CLAUDE.md](/wiki/claude-md/nedir/) dosyası (Claude Code'un mekanizmasıdır)

Hangi talimatın nerede geçerli olduğu ve hafızayla farkı için [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/) sayfasına bakın. Talimat metni şöyle olabilir:

```
Dil
Tüm yanıtların Türkçe. Teknik terim için İngilizce karşılık parantez içinde
verilir (örn. "akış (flow)"). Kullanıcı Türkçe yazdığı sürece İngilizce'ye geçilmez.
```

Sohbet içinde kayma görürseniz hemen düzeltin:

> *"Hatırlatma: lütfen Türkçe yanıtla. Teknik terim için Türkçe + parantez İngilizce."*

[Hata Ayıklama](/wiki/claude-md/hata-ayiklama/) sayfasında bu ve benzer dil sorunları detaylanır.

## 3. Eklemeli Yapı: Net Kelime Seçimi

Türkçe sondan eklemeli olduğu için aynı kavram farklı eklerle ifade edilir:

- "Yapıldı" / "Yapılmıştır" / "Yapılmış olur": hepsi pasif geçmiş, ama tonlamaları farklı
- "Söylüyorum" / "Söylemekteyim" / "Diyebilirim ki": aktiviteyi farklı yumuşatır

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

> *"Tarihler 'GG Ay YYYY' formatında. Para Türk Lirası ile sonda, '1.500 ₺'. Ondalık virgül, binlik nokta."*

## 5. Klişe Türkçe İş Dilini Engelleme

Claude'un eğitim verisindeki Türkçe iş dili klişe yüklü. Aşağıdakiler sıkça çıkar, ama profesyonel iletişimde **anlamsız**dır:

- "Sayın değerli müşterimiz"
- "İlginiz için teşekkür ederiz"
- "En içten saygılarımla"
- "Hoş bir gün geçirmenizi dileriz"
- "Ekibimiz konuyla ilgilenmektedir"

[Pazarlama departmanı](/wiki/departmanlar/pazarlama/) ve [Müşteri Hizmetleri](/wiki/departmanlar/musteri-hizmetleri/) sayfalarında alternatif kalıplar var.

Yasak kelime listesini kalıcı talimata (profil talimatı, proje talimatı, Cowork talimatı ya da Claude Code'da CLAUDE.md; yerler için 2. teknikteki listeye bakın) koymak en pratik çözümdür:

```
Yasak Kalıplar
- "Sayın değerli", "ilginiz için teşekkür"
- "En içten saygılarımla", "hoş bir gün"
- Yerine: "Merhaba [İsim]", "İyi günler", "Soruların için teşekkürler"
```

[Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/) sayfasında rol bazlı doğru kalıplar var.

## 6. "Sen" mi "Siz" mi?

Türkçe "siz" hem çoğul hem nezaket. Promptta net olun:

> *"Tek müşteriye yazıyorum: 'siz' diliyle, ama mesafeli değil. 'Sayın' yok, 'Merhaba [Ad]' var."*
>
> *"Şirketin web sitesinde: '[müşteriler]' çoğul, 'siz' diliyle ('biz size yardım ederiz')."*

Claude'a tercih bırakırsanız her seferinde farklı seçer.

## 7. Türkçe Karakterler

Bazı durumlarda Claude Türkçe karakterleri (ç, ğ, ı, ö, ş, ü) kaybedebilir veya yanlış kullanabilir, özellikle:

- Çok uzun çıktılarda
- Kod blokları içinde
- Türkçe-İngilizce kayma anında

Önemli yazılarda final kontrolü kendiniz yapın. Otomatik üretimlerde (örn. [Scheduled Tasks](/wiki/araclar/scheduled-tasks/) çıktısı) bir post-process kontrol ekleyin.

## 8. Cinsiyet Belirsizliği: Avantaj

Türkçe'de gramatik cinsiyet yok ("o" eril/dişil ayırmaz). Bu Claude'un cinsiyet-tarafsız yazmasını **kolaylaştırır**:

- İngilizce: "she/he" ve "their" seçimi çoğu zaman tartışmalıdır
- Türkçe: "o" doğal olarak nötrdür

İK, hukuk, akademik yazılarda bu avantaj kullanılır:

> *"İK belgesinde tüm referanslar 'çalışan' veya 'kişi' olarak. 'Bay/Bayan' yerine 'Sayın'. 'O' zamiri gerektiğinde sorun değil, Türkçe nötr."*

## 9. Sektörel Türkçe: Şirket İçi Jargon

Türkiye'deki şirketlerin iç jargonu çok sektörel:

- Finans: "kapama", "valör", "rep", "swap"
- Hukuk: "harç", "vekalet", "icra", "tedbir"
- Üretim: "fire", "vardiya", "kademe", "OEE"
- IT: "patch", "deploy", "uptime", "downtime"

Kalıcı talimatınıza (2. tekniğin sonundaki yerler) bir **şirket içi sözlük** koyun:

```
Şirket Akronimleri ve Jargon
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

Ne istediğinizi sezmesinden değil, **soruyu doğru sormaktan** kalite çıkar. [Temel İlkeler](/wiki/prompting/temel-ilkeler/) ve [4D Çerçevesi](/wiki/prompting/4d-cercevesi/) bunu derinleştirir.

## 11. Vurgu ve Önem

Türkçe'de vurgu için sözcük sırası önemlidir:

- "Bu raporu **yarın** vermeliyim.": yarın vurgulu
- "Bu raporu yarın **vermeliyim**.": vermek vurgulu
- "**Bu** raporu yarın vermeliyim.": bu spesifik rapor

Promptta önemli olanı **kalın** yazın veya başa alın:

> *"**Yarın saat 17:00'a kadar** [müşteri] için sözleşme taslağı hazırla."*

## 12. Hızlı Test

Yeni bir prompt yazdığınızda Türkçe kalitesini test edin:

1. Promptu yazın, Claude'a verin
2. İlk yanıtı okuyun: **3 sorun arayın:**
   - Klişe / pazarlama dili var mı?
   - Kayıt tutarlı mı (samimi-resmî kayma yok mu)?
   - Türkçe karakter kaybı var mı?
3. Bulduğunuz sorunları promptta düzeltin
4. Bu süreci 2-3 kez yineleyin → kalıcı şablon oluşur

[Prompt İterasyonu](/wiki/prompting/prompt-iterasyonu/) sayfası bu döngüyü detaylandırır.

## Pratik Şablon

Türkçe iş prompt'u için temel iskelet:

```
Rol: [Claude'un rolü: örn. kıdemli satış yöneticisi, iş hukuku danışmanı]

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

- [Türkçe Performansı](/wiki/temeller/turkce-performansi/): Genel kalite tablosu
- [Temel İlkeler](/wiki/prompting/temel-ilkeler/): Genel prompt mantığı
- [4D Çerçevesi](/wiki/prompting/4d-cercevesi/): Delegation/Description/Discernment/Diligence
- [Prompt Kataloğu](/wiki/prompting/prompt-katalogu/): Hazır Türkçe şablonlar
- [Çıktı Formatı](/wiki/prompting/cikti-formati/): Format kontrolü
- [Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/): Örnekle öğretme
- [Yaygın Hatalar](/wiki/prompting/yaygin-hatalar/): Tipik prompting hataları
- [CLAUDE.md / Hata Ayıklama](/wiki/claude-md/hata-ayiklama/): Dil sorunları çözümü
- [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/): Kalıcı talimat ve hafıza katmanları

