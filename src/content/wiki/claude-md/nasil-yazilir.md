---
title: CLAUDE.md Nasıl Yazılır? — Adım Adım Rehber
description: Etkili bir CLAUDE.md dosyası nasıl yazılır — yapısı, bölümleri, zamanla nasıl büyür ve hangi hatalardan kaçınılmalı. Kopyalanabilir şablonla.
tags:
  - claude-md
  - rehber
  - sablon
  - kurumsal-kullanim
---

[CLAUDE.md'nin ne olduğunu](nedir/) okuduysanız, sıradaki soru doğal: **peki bunu ben nasıl yazarım?**

Bu sayfa adım adım bir rehberdir. Sonunda kendi CLAUDE.md'nizin ilk sürümünü elinizde olmuş olur.

## Genel Prensip

Önce mantıksal çerçeve:

> **İyi bir CLAUDE.md, sizi işe yeni aldığınız akıllı bir asistana ilk gün hangi bilgileri aktaracağınızın yazılmış halidir.**

Bu asistan zeki. Hızlı öğreniyor. Ama sizin şirketinizi, sizin rolünüzü, sizin tonunuzu, sizin iş akışlarınızı bilmiyor. Sizin görev vermeniz gereken bağlamı CLAUDE.md'ye yazarsınız — bir kere.

## Beş Adımlı Temel Yapı

Her iyi CLAUDE.md şu beş bölümü içerir. Sırasıyla yazarsanız ilk sürüm 15 dakikada biter.

### 1. Kim Olduğunuz

Kısa. Kritik olanı yazın, gereksizini bırakın.

```markdown
## Kim Olduğum
- İsim: [Ad Soyad]
- Pozisyon: [Pozisyon, Şirket]
- Rol özeti: Tek cümleyle ne yaptığınız
```

### 2. Şirket ve İş Bağlamı

Claude'un çalıştığı dünyayı anlaması için:

```markdown
## Şirket
- Ad: [Şirket adı]
- Sektör: [Kısa tanım]
- Ürünler / hizmetler: [İki-üç cümlede ne satıyorsunuz]
- Hedef müşteri: [Kime satıyorsunuz]
- Büyüklük: [Kişi sayısı veya ciro aralığı — referans olması için]
```

### 3. Ton Tercihleri

Claude'un nasıl yazması, nasıl konuşması gerektiğine dair:

```markdown
## Ton
- Türkçe yazım: Profesyonel ama robot gibi değil
- İngilizce yazım: Business casual
- Devrik cümle: Kaçın
- Yabancı kelime: Türkçe karşılığı varsa Türkçeyi tercih et
- Özel olarak kaçınılacak kelimeler: [liste]
```

### 4. Her Zaman / Asla

En güçlü bölüm. Sınırlar ve varsayılan davranışlar.

```markdown
## Her Zaman / Asla
- Her zaman: önemli bir metni göndermeden önce taslağı göster
- Her zaman: rakamları ben veririm, sen yorum üretirsin
- Asla: gizli mali bilgiyi dış metinlerde kullanma
- Asla: çalışanlar hakkında özel yorum yapma
- Asla: bana "ayrıca" veya "öte yandan" ile başlayan cümleler yazma
```

### 5. Güncel Odak

Bu, düzenli güncellenen bir bölümdür:

```markdown
## Güncel Odak
- Aktif projeler: [2-3 kalemlik liste]
- Bu çeyreğin hedefleri: [en fazla 3 tane]
- Bu hafta öncelik: [en fazla 2 tane]
```

## Tam Şablon — Kopyalanabilir

Aşağıdaki şablonu workspace klasörünüzde `CLAUDE.md` adıyla kaydedin ve kendinize göre uyarlayın:

```markdown
# CLAUDE.md — [Ad Soyad]

## Kim Olduğum
- İsim:
- Pozisyon:
- Rol özeti:

## Şirket
- Ad:
- Sektör:
- Ürünler / hizmetler:
- Hedef müşteri:
- Büyüklük:

## Kullandığım Araçlar ve Sistemler
- CRM:
- Muhasebe:
- İletişim:
- Proje yönetimi:
- Diğer:

## Anahtar Kişiler
- Yöneticim:
- Doğrudan ekibim:
- Kilit paydaşlar:

## Ton
- Türkçe:
- İngilizce:
- Kaçınılacak kelimeler:

## Her Zaman / Asla
- Her zaman:
- Asla:

## Tekrar Eden İş Akışları
- [Haftada/ayda yaptığım tekrar eden işler]

## Departmana Özgü Kelime Dağarcığı
- [Şirket içi kısaltmalar, iç jargon, ürün kod adları]

## Güncel Odak
- Aktif projeler:
- Bu çeyreğin hedefleri:
- Bu hafta öncelik:

## Not
- Bu dosya [tarih] itibariyle günceldir. Düzenli güncellemek benim sorumluluğum.
```

## Nereye Kaydedilir?

CLAUDE.md, **workspace klasörünüzün kök dizinine** kaydedilir. Cowork mod açıldığında Claude bu dosyayı otomatik olarak okur.

Örnek yerleşim:

```
C:\ClaudeWorkspace\
├── CLAUDE.md          ← buradadır
├── projeler\
├── belgeler\
└── arsiv\
```

## Nasıl Büyür?

Bir CLAUDE.md ilk yazıldığında temelini kurmuş olur. Sonra yaşar ve büyür. Zamana'nın altın kuralı:

> **Claude'a aynı şeyi ikinci kez anlattığınızı fark ettiğinizde, durun ve CLAUDE.md'yi açın. O bilgiyi dosyaya yazın.**

Bu kural bir şeyi yapar: dosyanız kullandıkça daha iyi hale gelir. Kullanmayan bir çalışanın CLAUDE.md'si paslanmış kalır; kullanan çalışanın her geçen hafta daha güçlü olur.

## Ne Koymamalısınız?

Her CLAUDE.md'de olmaması gerekenler:

- **Şifreler, API anahtarları, erişim bilgileri** — bu dosya düz metindir, yedeklenebilir, paylaşılabilir
- **KVKK kapsamındaki kişisel veriler** — başkalarının tam adları, kimlik numaraları, hassas bilgileri
- **Çelişen talimatlar** — "her zaman resmi yaz" ve "samimi ol" aynı dosyada durursa Claude şaşırır
- **Aşırı katı kurallar** — "hiçbir zaman liste kullanma" gibi yasaklar Claude'un esnekliğini öldürür
- **Geçici iş notları** — bunlar konuşma bazlı, CLAUDE.md uzun vadeli

## Sık Yapılan Hatalar

### Hata 1: Her Şeyi Bir Kerede Yazmaya Çalışmak

İlk gün CLAUDE.md'nizi 500 satır yazmaya çalışmayın. Şablonu doldurun, 80-120 satır yeterli. Sonra büyüyecek.

### Hata 2: Çok Genel Yazmak

"Profesyonel ol" yerine "devrik cümle kullanma, modern Türkçe yaz" — somut olun.

### Hata 3: Hiç Güncellememek

Üç ay önce yazılmış ama şu an geçerli olmayan bilgiler CLAUDE.md'de olduğunda Claude yanlış bağlamla çalışır. Ayda bir gözden geçirin. Üç satır değiştirseniz bile yeterlidir.

### Hata 4: Ton Tercihini Atlamak

Ton bölümünü yazmayan kullanıcılar Claude'un çıktılarından şikayet eder. Ton yoksa Claude varsayılan tonda yazar — bu sizin sesiniz olmayabilir.

### Hata 5: "Her Zaman/Asla" Kuralları Yok

Bu bölüm yoksa Claude nasıl davranacağını tahmin etmek zorunda kalır. Kurallar olduğunda Claude daha sağlam çalışır.

## İlk 30 Dakika Planı

Bu sayfayı okuduktan sonra:

1. **5 dakika:** Workspace klasörünüzü açın, `CLAUDE.md` adında yeni bir dosya oluşturun. Yukarıdaki şablonu yapıştırın.
2. **15 dakika:** Şablondaki bölümleri doldurun. Hızlıca, mükemmeliyetçi olmadan.
3. **5 dakika:** Cowork'ü açın, Claude'a "CLAUDE.md'yi okudun mu, özetini çıkar" deyin. Yanlış anladığı yerler varsa düzeltirsiniz.
4. **5 dakika:** Gerçek bir görev verin — bir e-posta yazdırın. Tonunuza uyuyor mu? Uymuyorsa Ton bölümünü iyileştirin.

Bu 30 dakikada işe yarar bir CLAUDE.md'niz olur. Mükemmel olmayacak. Ama yaşayan bir dosya olacak.

## İlgili Sayfalar

- [CLAUDE.md Nedir?](nedir/) — Temel kavram
- [CLAUDE.md Örnekleri](ornekler/) — Farklı roller için gerçek örnekler
- [Memory Yönetimi](memory-yonetimi/) — CLAUDE.md dışındaki hafıza mekanizmaları
- [Cowork Modu](../araclar/cowork-modu/) — CLAUDE.md'nin yaşadığı yer

