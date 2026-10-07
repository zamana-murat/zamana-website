---
title: "Few-Shot Örnekleme: Örnekle Öğretme"
seoTitle: "Few-Shot Prompting Nedir? Örnekle Claude'a Öğretmek"
description: "Few-shot prompting nedir? Claude'a soyut talimat yerine örnek vererek tutarlı çıktı alma: sıfır, tek, az ve çok örnekleme, örnek seçimi ve Türkçe örnekler."
tags:
  - prompting
  - few-shot
  - ornek
lastUpdated: "2026-10-06"
---

**Bir kavramı öğretmenin en güçlü yolu örnek göstermektir.** Claude için de öyle. Soyut bir kuralı tarif etmek yerine "şuna benzer üret" demek, sonucu daha tutarlı yapar ve sürprizleri azaltır.

Bu sayfa few-shot örnekleme yaklaşımını ve pratik kullanımını anlatır.

## Terminoloji

Prompt mühendisliğinde örnek sayısı önemlidir:

| İsim | Örnek sayısı | Kullanım |
|---|---|---|
| **Zero-shot** | 0 | Sadece talimat ver, örnek verme |
| **One-shot** | 1 | Bir örnek göster |
| **Few-shot** | 3-5 | Birkaç örnek göster (Anthropic rehberinin önerdiği aralık) |
| **Many-shot** | 6+ | Çok örnek göster (genelde 10-20) |

Kural: **görev karmaşıklaştıkça örnek sayısı artar.** Basit bir özetleme zero-shot çalışır; karmaşık bir tarz/format görevi few-shot gerektirir.

## Ne Zaman Few-Shot Gerekli?

Soyut talimat yetersiz kaldığı durumlar:

1. **Tarz / üslup üretimi**: "X yazarın tarzında yaz", "şirket marka sesi"
2. **Spesifik format**: özelleştirilmiş tablo, JSON, özel rapor şablonu
3. **Sınıflandırma**: "müşteri yorumlarını şu kategorilere böl"
4. **Çıkarım kuralı**: "şu desenleri şu şekilde dönüştür"
5. **Türkçe nüans**: sözcük seçimi, klişeden kaçınma

[Çıktı Formatı](/wiki/prompting/cikti-formati/) sayfası format-spesifik örnekleri detaylandırır.

## Sıfır vs Az Örnek: Pratik Fark

### Örnek 1: Müşteri Yorumu Sınıflandırma

**Zero-shot:**

> *"Şu müşteri yorumlarını duygu sınıflandırması yap: olumlu, olumsuz, nötr."*

→ Claude bunu yapar ama "duygu" tanımı belirsiz olduğu için **sizin** tanımladığınızdan farklı sınıflandırabilir. Örneğin "ürün geldi ama paketi yırtıktı, ürün tamam" → siz "olumsuz" derken Claude "nötr" diyebilir.

**Few-shot:**

> *"Şu müşteri yorumlarını duygu sınıflandırması yap: olumlu, olumsuz, nötr.*
>
> *Örnekler:*
>
> *Yorum: 'Harika ürün, çok memnunum.'*
> *Sınıf: olumlu*
>
> *Yorum: 'Paketi açtığımda yırtıktı, kullanılamaz halde.'*
> *Sınıf: olumsuz*
>
> *Yorum: 'Ürün geldi ama paketi yırtıktı, ürün tamam.'*
> *Sınıf: olumsuz*
>
> *Yorum: 'Sipariş geldi.'*
> *Sınıf: nötr*
>
> *Şimdi sırada:*
>
> *Yorum: '[veri]'*
> *Sınıf: ?"*

→ Claude artık sizin sınıflandırma mantığınızı öğrendi. "Paket sorunu var ama ürün tamam" → olumsuz olarak sınıflar.

### Örnek 2: Marka Sesine Uygun Yazı

**Zero-shot:**

> *"Şirketimizin marka sesinde bir LinkedIn post yaz."*

→ Claude generic "marka iletişimi" üretir, sizin ses tonunuza uygun olmaz.

**Few-shot:**

> *"Şirketimizin LinkedIn post tarzı şu örneklere benzer:*
>
> *ÖRNEK 1:*
> *'Geçen hafta bir müşteri sordu: 'Claude'la 6 ay sonra ne olacağını nasıl ölçerim?' Cevap: 3 metrik. Zaman, kalite, otomasyon. Detay yorumlarda.'*
>
> *ÖRNEK 2:*
> *'Pazartesi sabah 8 kişiden 7'si rapor yazıyordu. Şimdi 7'sinden 6'sı raporu okuyup düşünüyor. Fark: AI bir araç değil, bir saat kazandırma sistemi.'*
>
> *Şu konuda aynı tarzda bir post yaz: [konu]"*

→ Claude marka sesinizi örnekten çıkarır, taklit eder.

[Pazarlama departmanı](/wiki/departmanlar/pazarlama/) sayfasında daha fazla içerik örneği.

### Örnek 3: JSON Şema

**Zero-shot:**

> *"Bu metinden müşteri bilgilerini JSON olarak çıkar."*

→ Claude bir JSON üretir ama alan adlarını kendi seçer (`name` mi `customer_name` mi?).

**Few-shot:**

```text
Bu metinden müşteri bilgilerini JSON olarak çıkar. Örnek:

Metin: 'ABC Ltd. ile 50.000 TL'lik anlaşma yapıldı, irtibat Mehmet Yılmaz, 0532 000 00 00'

JSON:
{
  "sirket": "ABC Ltd.",
  "tutar_tl": 50000,
  "irtibat": "Mehmet Yılmaz",
  "telefon": "0532 000 00 00"
}

Şimdi şu metin için: [metin]
```

→ Claude tam olarak istediğiniz şemayı üretir.

## İyi Örnek Seçme Kuralları

Few-shot'ta örnek kalitesi her şeydir.

### 1. Çeşit-Cins Karışımı

Tek tip örnek vermeyin: Claude o tipi öğrenir ve dışına çıkamaz. Olumlu / olumsuz / nötr sınıflama için her sınıftan en az bir örnek.

### 2. Sınır Vakaları Dahil Et

En zor / belirsiz / sınırı zorlayan örnekleri özellikle koyun. Yukarıdaki "paket yırtık ama ürün tamam" gibi. Bu Claude'un "nasıl düşünmesi gerektiğini" gösterir.

### 3. Yanlış Örneği Açıkla

Kötü örnek de ekleyebilirsiniz, ama **etiketleyerek**:

```
ÖRNEK 1 (yanlış):
[kötü çıktı]
Sebep: çok klişe, "lider çözümümüz" kullanılmış.

ÖRNEK 2 (doğru):
[iyi çıktı]
```

### 4. Tutarlı Format

Tüm örnekler aynı yapıda olsun, başlık aynı, etiket aynı, alanlar aynı. Tutarsızlık Claude'u şaşırtır.

### 5. Az ama Yüksek Kalite

3 mükemmel örnek, 10 ortalama örnekten iyidir. Kalite sayıyı yener.

## Örneği Nereye Koymalı?

- **Prompt içinde:** o göreve özel örnekler.
- **Kalıcı bir yerde:** her seferinde yapıştırmak istemediğiniz örnekler (marka sesi, format örnekleri). Hangi yerin neyi kapsadığı kullandığınız araca göre değişir:
  - **Tüm sohbetleriniz için:** profil talimatı ("Instructions for Claude", Settings > General).
  - **Tek bir iş/müşteri için:** [Claude Projesi](/wiki/araclar/projects/) talimatı ya da proje dosyası; yalnız o projenin sohbetlerinde geçerlidir.
  - **Cowork'te:** global talimat ve klasör talimatı.
  - **Claude Code'da:** CLAUDE.md dosyası. CLAUDE.md Claude Code'un mekanizmasıdır, claude.ai sohbetinde okunmaz.

Çoğu durumda ikisi birlikte kullanılır: kalıcı yer genel tarzı belirler, prompt o günün işine özelleşir. Kalıcı talimat yerlerinin karşılaştırması [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/) sayfasında.

CLAUDE.md kullanıyorsanız örneklerin dosyaya nasıl gömüleceği için [Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/) sayfasına bakın.

## Daha Fazla Uygulama Örneği

### Örnek 4: Şirket İçi Sınıflandırma

Müşteri ticketlerinin önceliklendirilmesi:

```
Müşteri ticket'larını şu kategorilere ayır:

A_Acil: sistem kapanmış, milyonluk müşteri etkisi
A_Yüksek: birden fazla müşteri etkisi, gün içinde çözülmeli
B_Orta: tek müşteri etkilemiş, 24 saatte çözülmeli
B_Düşük: istek/öneri, planlamada düşünülecek
C_İçerik: bilgi sorusu, dokümana yönlendirilecek

ÖRNEKLER:

Ticket: "Sistem 5 dakikadır açılmıyor, 200 satıcımız etkilendi."
Kategori: A_Acil

Ticket: "Yeni rapor formatında bir başlık eksik gibi geldi, kontrol eder misiniz?"
Kategori: B_Düşük

Ticket: "Faturamı nasıl indiririm?"
Kategori: C_İçerik

Ticket: "Bu sabahtan beri panel açılmıyor, üç ekibim çalışamıyor."
Kategori: A_Yüksek

Şimdi sırada:
Ticket: '[veri]'
Kategori: ?
```

[Müşteri Hizmetleri](/wiki/departmanlar/musteri-hizmetleri/) sayfasında daha fazla bağlam.

### Örnek 5: Türkçe Stil Düzeltme

İçerik stilini standartlaştırma:

```
Görev: Şu cümleleri marka tarzına uygun şekilde düzelt.

ÖRNEK 1:
Önce: "Şirketimiz pazarda sektörün lideri konumundadır."
Sonra: "Türkiye'de en çok satan üç markadan biriyiz."
Neden: "lider" klişesi kaldırıldı, somut iddia geldi.

ÖRNEK 2:
Önce: "Yenilikçi yaklaşımlarımızla müşterilerimize değer katıyoruz."
Sonra: "Müşteri sorunlarına 30 günde çözüm üretiyoruz."
Neden: "yenilikçi" + "değer katmak" klişesi → ölçülebilir vaat.

ÖRNEK 3:
Önce: "Vizyoner ekibimiz geleceğin teknolojilerini tasarlıyor."
Sonra: "Ekip 2026'da [spesifik ürün] üzerinde çalışıyor."
Neden: "vizyoner" + "geleceğin teknolojileri" → spesifik bilgi.

Şimdi sırada:
Önce: "[cümle]"
Sonra: ?
```

[Türkçe Prompt Teknikleri](/wiki/prompting/turkce-prompt-teknikleri/) sayfasında bu yaklaşımı genişleten teknikler.

## Many-Shot: Çok Örnek

Bazı görevlerde 10-20 örnek vermek gerekir. Bu **many-shot** dedikleri yaklaşımdır. Pratik kullanımı:

- Çok ince nüanslı sınıflandırma (15+ kategori)
- Karmaşık karar verme (matrix mantık)
- Çok-aşamalı dönüşüm (örnek-1 → orta-form → final)

Many-shot uzun bir prompt demektir. Güncel modellerde [bağlam penceresi](/wiki/yetenekler/context-compaction/) geniş (Fable 5.1, Opus 5.5 ve Sonnet 5.5'te 1M token, ücretli planlarda plana göre fark yok), yani sınır nadiren sorun olur. Asıl maliyet kullanım limitinizden düşen token'dır.

## Örnek Aktarımı: Tek Sohbet İçinde

Aynı sohbette birden fazla benzer görev varsa, ilk birkaç görev **canlı few-shot** olur:

> Kullanıcı: *"Şu yorum hakkında ne diyorsun? [yorum 1]"*
> Claude: *"[değerlendirme 1]"*
> Kullanıcı: *"Doğru. Şu yorum?"* *[yorum 2]*
> Claude: *"[değerlendirme 2]"* (birinci örneği baz alarak)

Bu organik few-shot, manuel olarak kurulan few-shot kadar güçlüdür.

## Sınırlar ve Tuzaklar

**Tuzak 1: Aşırı örnek yüklemesi.** 30 örnek vermek tutarlılık yerine çelişki ve gürültü riskini artırır. Çoğu görevde 3-5 örnek yeter, many-shot gerektiren işlerde bile 20'yi nadiren geçmek gerekir.

**Tuzak 2: Çelişen örnekler.** İki örneğiniz birbirinin tersini söylüyorsa Claude şaşırır. Örnekleri tarayın, çakışma var mı kontrol edin.

**Tuzak 3: Yanlı örnekler.** Sadece olumlu örnek verirseniz Claude olumsuz vakaları doğru tanıyamaz. Çeşitlilik şart.

**Tuzak 4: Kişisel/hassas veri içeren örnek.** Müşteri ismi, gerçek ciro, kişisel veri içeren örnekler [KVKK](/wiki/temeller/gizlilik-kvkk/) sorunu yaratır. **Anonimleştirin** veya kurgusal örnek kurun.

## Birleşik Teknik: Format + Few-Shot + Talimat

En güçlü prompt üç bileşeni birleştirir:

```
GÖREV: [açık tanım]

KURALLAR:
- [kural 1]
- [kural 2]

FORMAT: [çıktı şekli]

ÖRNEKLER:

Ham veri: ...
Beklenen çıktı: ...

Ham veri: ...
Beklenen çıktı: ...

Şimdi sırada:
Ham veri: [gerçek veri]
Çıktı: ?
```

[Prompt Kataloğu](/wiki/prompting/prompt-katalogu/) sayfasında bu yapı çok sayıda görev için verilmiş.

## İlgili Sayfalar

- [Temel İlkeler](/wiki/prompting/temel-ilkeler/): Genel prompt mantığı
- [Çıktı Formatı](/wiki/prompting/cikti-formati/): Format kontrolü ile birleşik kullanım
- [Prompt Kataloğu](/wiki/prompting/prompt-katalogu/): Hazır şablonlar
- [Türkçe Prompt Teknikleri](/wiki/prompting/turkce-prompt-teknikleri/): Türkçe için
- [Prompt İterasyonu](/wiki/prompting/prompt-iterasyonu/): Örnekleri geliştirme döngüsü
- [İleri Seviye](/wiki/prompting/ileri-seviye/): Many-shot ve advanced teknikler
- [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/): Kalıcı talimat yerleri
- [Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/): CLAUDE.md'ye gömme (Claude Code)
- [Yaygın Hatalar](/wiki/prompting/yaygin-hatalar/): Few-shot tuzakları

