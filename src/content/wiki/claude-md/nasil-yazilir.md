---
title: "CLAUDE.md Nasıl Yazılır? Adım Adım Rehber"
seoTitle: "CLAUDE.md Nasıl Yazılır? Şablon ve Nereye Konur"
description: "Claude'a kalıcı talimat yazmanın beş bölümlü yöntemi: kim olduğunuz, şirket, ton, kurallar, güncel odak. Metni nereye koyacağınız da dahil."
tags:
  - claude-md
  - rehber
  - sablon
  - kurumsal-kullanim
lastUpdated: "2026-10-06"
---

[CLAUDE.md'nin ne olduğunu](/wiki/claude-md/nedir/) okuduysanız, sıradaki soru doğal: **peki bunu ben nasıl yazarım?**

Bu sayfa adım adım bir rehberdir. Sonunda kendi CLAUDE.md'nizin ilk sürümü elinizde olur.

> **Metin araçtan bağımsızdır, konduğu yer değişir.** Aşağıdaki beş bölümlü metni bir kez yazarsınız; sonra kullandığınız araca göre profil talimatına, bir projenin talimatına, Cowork'te çalıştığınız klasöre ya da Claude Code'a koyarsınız. Hangisinin size uyduğunu aşağıdaki "Bu Metni Nereye Koyacağım?" bölümünde bulursunuz.

## Genel Prensip

Önce mantıksal çerçeve:

> **İyi bir CLAUDE.md, sizi işe yeni aldığınız akıllı bir asistana ilk gün hangi bilgileri aktaracağınızın yazılmış halidir.**

Bu asistan zeki. Hızlı öğreniyor. Ama sizin şirketinizi, sizin rolünüzü, sizin tonunuzu, sizin iş akışlarınızı bilmiyor. Görev verirken gereken bağlamı CLAUDE.md'ye bir kere yazarsınız.

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
- Büyüklük: [Kişi sayısı veya ciro aralığı, referans olması için]
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

## Tam Şablon: Kopyalanabilir

Aşağıdaki şablonu kopyalayın ve kendinize göre uyarlayın. Nereye koyacağınız bir sonraki bölümde; klasörle çalışacaksanız dosyayı `CLAUDE.md` adıyla kaydedin:

```markdown
# CLAUDE.md: [Ad Soyad]

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

## Bu Metni Nereye Koyacağım?

Sohbet ekranındaki Claude, bilgisayarınızdaki bir `CLAUDE.md` dosyasını kendiliğinden okumaz. Aynı metin, nasıl çalıştığınıza göre farklı yere konur:

| Nasıl çalışıyorsunuz? | Metni nereye koyarsınız? |
|---|---|
| **Tüm sohbetlerde** geçerli olsun istiyorsunuz | Settings > General > **"Instructions for Claude"** (profil talimatı). Tüm planlarda var, Cowork'ün genel talimatıyla aynı yerdir. Buraya uzun metnin **kısa sürümünü** yazın: Kim Olduğum, Ton, Her Zaman / Asla |
| Tek bir **iş, müşteri ya da konu** için | O işin [Projects](/wiki/araclar/projects/) talimat alanı. Şirket ve Güncel Odak bölümleri burada daha yerinde durur; yalnız o projede geçerlidir |
| [Cowork](/wiki/araclar/cowork-modu/) ile **bilgisayarınızdaki bir klasörde** çalışıyorsunuz | Klasörün köküne `CLAUDE.md` adıyla kaydedin. Yerel Cowork oturumunda okunur |
| **Claude Code** kullanıyorsunuz | `CLAUDE.md` dosyası (bkz. aşağıdaki kutu) |

Kalıcı talimat yerlerinin tam karşılaştırması (kapsam, plan, ne zaman okunur) için [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/) sayfasına bakın.

İki not:

- **Bulut Cowork oturumları.** Cowork görevi bulutta çalışıyorsa klasör elle eklenir ve orada CLAUDE.md okunduğu Anthropic belgelerinde yazmıyor. Cowork belgeleri klasördeki talimatı "klasör talimatı" diye anar, dosya adını açıkça vermez. Bu yüzden değişmez kuralların kısa sürümünü profil talimatına da koyun, sonra aşağıdaki testi yapın.
- **Kısa sürüm nasıl görünür?** Örneğin profil talimatına şu kadarı yeter:

```
Ben Elif Kaya, Mavi Lojistik'te operasyon müdürüyüm.
Türkçe yaz, sade ve dolaysız ol; devrik cümle ve "ayrıca" ile başlayan cümle kullanma.
Önemli bir metni göndermeden önce taslağı bana göster.
Müşteri kişisel verisini ve gizli mali bilgiyi dış metinlerde kullanma.
```

> **Geliştiriciler için.** Claude Code'da `CLAUDE.md` katmanlıdır: kullanıcı düzeyinde `~/.claude/CLAUDE.md`, proje kökünde `./CLAUDE.md`, kişisel notlar için `CLAUDE.local.md`. Dosyalar birleştirilir, biri ötekini ezmez. Bu bir iş eğitimi sayfası olduğu için ayrıntıya girmiyoruz; ayrıntı için [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/) sayfasına bakın.

Örnek klasör yerleşimi (Cowork'te klasörle çalışıyorsanız):

```
C:\ClaudeWorkspace\
├── CLAUDE.md          ← buradadır
├── projeler\
├── belgeler\
└── arsiv\
```

## Nasıl Büyür?

Bir CLAUDE.md ilk yazıldığında temelini kurmuş olur. Sonra yaşar ve büyür. Pratik altın kural:

> **Claude'a aynı şeyi ikinci kez anlattığınızı fark ettiğinizde, durun ve talimat metninizi (CLAUDE.md, proje talimatı ya da profil talimatı) açın. O bilgiyi oraya yazın.**

Bu kural bir şeyi yapar: metniniz kullandıkça daha iyi hale gelir. Kullanmayan bir çalışanın CLAUDE.md'si paslanmış kalır; kullanan çalışanın her geçen hafta daha güçlü olur.

## Ne Koymamalısınız?

Her CLAUDE.md'de olmaması gerekenler:

- **Şifreler, API anahtarları, erişim bilgileri**: bu metin düz metindir, yedeklenebilir, paylaşılabilir
- **KVKK kapsamındaki kişisel veriler**: başkalarının tam adları, kimlik numaraları, hassas bilgileri
- **Çelişen talimatlar**: "her zaman resmi yaz" ve "samimi ol" aynı dosyada durursa Claude şaşırır
- **Aşırı katı kurallar**: "hiçbir zaman liste kullanma" gibi yasaklar Claude'un esnekliğini öldürür
- **Geçici iş notları**: bunlar konuşma bazlı, CLAUDE.md uzun vadeli

## Sık Yapılan Hatalar

### Hata 1: Her Şeyi Bir Kerede Yazmaya Çalışmak

İlk gün CLAUDE.md'nizi 500 satır yazmaya çalışmayın. Şablonu doldurun; birkaç yüz kelime (kabaca 40-80 kısa satır) yeterli. Sonra büyüyecek.

### Hata 2: Çok Genel Yazmak

"Profesyonel ol" yerine "devrik cümle kullanma, modern Türkçe yaz", somut olun.

### Hata 3: Hiç Güncellememek

Üç ay önce yazılmış ama şu an geçerli olmayan bilgiler CLAUDE.md'de olduğunda Claude yanlış bağlamla çalışır. Ayda bir gözden geçirin. Üç satır değiştirseniz bile yeterlidir.

### Hata 4: Ton Tercihini Atlamak

Ton bölümünü yazmayan kullanıcılar Claude'un çıktılarından şikayet eder. Ton yoksa Claude varsayılan tonda yazar, bu sizin sesiniz olmayabilir.

### Hata 5: "Her Zaman/Asla" Kuralları Yok

Bu bölüm yoksa Claude nasıl davranacağını tahmin etmek zorunda kalır. Kurallar olduğunda Claude daha sağlam çalışır.

## İlk 30 Dakika Planı

Bu sayfayı okuduktan sonra:

1. **5 dakika:** Yeni bir metin dosyası açın (klasörle çalışacaksanız adı `CLAUDE.md` olsun) ve yukarıdaki şablonu yapıştırın.
2. **15 dakika:** Şablondaki bölümleri doldurun. Hızlıca, mükemmeliyetçi olmadan.
3. **5 dakika:** Metni yerine koyun (profil talimatı, proje ya da klasör), yeni bir sohbet ya da oturum açın ve Claude'a "Talimatımı 3 maddede özetle" deyin. Yanlış ya da eksik anladığı yerleri metinde düzeltirsiniz. Özet hiç tutmuyorsa [Hata Ayıklama](/wiki/claude-md/hata-ayiklama/) sayfasına bakın.
4. **5 dakika:** Gerçek bir görev verin: bir e-posta yazdırın. Tonunuza uyuyor mu? Uymuyorsa Ton bölümünü iyileştirin.

Bu 30 dakikada işe yarar bir CLAUDE.md'niz olur. Mükemmel olmayacak. Ama yaşayan bir dosya olacak.

## İlgili Sayfalar

- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Temel kavram
- [CLAUDE.md Örnekleri](/wiki/claude-md/ornekler/): Farklı roller için gerçek örnekler
- [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/): Profil talimatı, proje, klasör ve hafıza karşılaştırması
- [Projects](/wiki/araclar/projects/): Bir işe özel talimat ve dosyalar
- [Cowork Modu](/wiki/araclar/cowork-modu/): Klasörle çalışma

