---
title: "CLAUDE.md Nasıl Yazılır? Adım Adım Rehber"
seoTitle: "CLAUDE.md Nasıl Yazılır? Şablon ve Nereye Konur"
description: "Claude'a kalıcı talimat yazmanın beş bölümlü yöntemi: kim olduğunuz, şirket, ton, kurallar, güncel odak. Metni nereye koyacağınız da dahil."
tags:
  - claude-md
  - rehber
  - sablon
  - kurumsal-kullanim
lastUpdated: "2026-11-26"
---

[CLAUDE.md'nin ne olduğunu](/wiki/claude-md/nedir/) okuduysanız, sıradaki soru bunu nasıl yazacağınız. Sonunda kendi CLAUDE.md'nizin ilk sürümü elinizde olacak.

> Metin araçtan bağımsızdır, yalnız konduğu yer değişir. Aşağıdaki beş bölümlü metni bir kez yazarsınız; sonra kullandığınız araca göre profil talimatına, bir projenin talimatına, Cowork'te çalıştığınız klasöre ya da Claude Code'a koyarsınız. Hangisinin size uyduğunu aşağıdaki "Bu Metni Nereye Koyacağım?" bölümünde bulursunuz.

## Genel Prensip

İyi bir CLAUDE.md, işe yeni aldığınız akıllı bir asistana ilk gün aktaracağınız bilgilerin yazılı halidir.

Bu asistan zeki ve hızlı öğrenir, ama şirketinizi, rolünüzü, tonunuzu ve iş akışlarınızı bilmez. Görev verirken gereken bağlamı CLAUDE.md'ye bir kere yazarsınız.

## Beş Adımlı Temel Yapı

İyi bir CLAUDE.md şu beş bölümü içerir. Sırasıyla yazarsanız ilk sürüm 15 dakikada biter.

### 1. Kim Olduğunuz

Kısa tutun: kritik olanı yazın, gereksizi bırakın.

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

Bu bölümü düzenli güncellersiniz:

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
| Tüm sohbetlerde geçerli olsun istiyorsunuz | Settings > General > "Instructions for Claude" (profil talimatı). Tüm planlarda var, Cowork'ün genel talimatıyla aynı yerdir. Buraya uzun metnin kısa sürümünü yazın: Kim Olduğum, Ton, Her Zaman / Asla |
| Tek bir iş, müşteri ya da konu için | O işin [Projects](/wiki/araclar/projects/) talimat alanı. Şirket ve Güncel Odak bölümleri burada daha yerinde durur; yalnız o projede geçerlidir |
| [Cowork](/wiki/araclar/cowork-modu/) ile bilgisayarınızdaki bir klasörde çalışıyorsunuz | Klasörün köküne `CLAUDE.md` adıyla kaydedin. Yerel Cowork oturumunda okunur |
| Claude Code kullanıyorsunuz | `CLAUDE.md` dosyası (bkz. aşağıdaki kutu) |

Kalıcı talimat yerlerinin tam karşılaştırması (kapsam, plan, ne zaman okunur) için [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/) sayfasına bakın.

![Beş bölümlü metin (Kim Olduğum, Şirket, Ton, Her Zaman / Asla, Güncel Odak) dört yere konabilir: profil talimatı tüm sohbetlerde kısa sürümle, proje talimatı yalnız o projede, Cowork klasörünün kökünde CLAUDE.md yerel oturumda, Claude Code'da CLAUDE.md geliştiriciler için; altta "Talimatımı 3 maddede özetle" testi](/images/wiki/claude-md-talimat-yerleri.svg)

İki not:

- Bulut Cowork oturumları: Cowork görevi bulutta çalışıyorsa klasör elle eklenir ve orada CLAUDE.md okunduğu Anthropic belgelerinde yazmıyor. Cowork belgeleri klasördeki talimatı "klasör talimatı" diye anar, dosya adını açıkça vermez. Bu yüzden değişmez kuralların kısa sürümünü profil talimatına da koyun, sonra aşağıdaki testi yapın.
- Kısa sürüm: örneğin profil talimatına şu kadarı yeter:

```
Ben Elif Kaya, Mavi Lojistik'te operasyon müdürüyüm.
Türkçe yaz, sade ve dolaysız ol; devrik cümle ve "ayrıca" ile başlayan cümle kullanma.
Önemli bir metni göndermeden önce taslağı bana göster.
Müşteri kişisel verisini ve gizli mali bilgiyi dış metinlerde kullanma.
```

> Geliştiriciler için: Claude Code'da `CLAUDE.md` katmanlıdır: kullanıcı düzeyinde `~/.claude/CLAUDE.md`, proje kökünde `./CLAUDE.md`, kişisel notlar için `CLAUDE.local.md`. Dosyalar birleştirilir, biri ötekini ezmez. Ayrıntı için [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/) sayfasına bakın.

Örnek klasör yerleşimi (Cowork'te klasörle çalışıyorsanız):

```
C:\ClaudeWorkspace\
├── CLAUDE.md          ← buradadır
├── projeler\
├── belgeler\
└── arsiv\
```

## Nasıl Büyür?

İlk yazdığınızda CLAUDE.md yalnız temeldir; sonra kullandıkça büyür. Pratik kural:

> Claude'a aynı şeyi ikinci kez anlattığınızı fark ettiğinizde talimat metninizi (CLAUDE.md, proje talimatı ya da profil talimatı) açın ve o bilgiyi oraya yazın.

Böylece metniniz kullandıkça iyileşir. Kullanılmayan bir CLAUDE.md eskir; kullanılan ise her hafta biraz daha işe yarar.

## Ne Koymamalısınız?

CLAUDE.md'de bulunmaması gerekenler:

- Şifreler, API anahtarları, erişim bilgileri: bu metin düz metindir, yedeklenebilir, paylaşılabilir
- KVKK kapsamındaki kişisel veriler: başkalarının tam adları, kimlik numaraları, hassas bilgileri
- Çelişen talimatlar: "her zaman resmi yaz" ve "samimi ol" aynı dosyada durursa Claude hangisine uyacağını bilemez
- Aşırı katı kurallar: "hiçbir zaman liste kullanma" gibi yasaklar Claude'u gereksiz kısıtlar
- Geçici iş notları: bunlar konuşmaya aittir, CLAUDE.md uzun vadelidir

## Sık Yapılan Hatalar

### Hata 1: Her Şeyi Bir Kerede Yazmaya Çalışmak

İlk gün 500 satır yazmaya çalışmayın. Şablonu doldurun; birkaç yüz kelime (kabaca 40-80 kısa satır) yeter, gerisini kullandıkça eklersiniz.

### Hata 2: Çok Genel Yazmak

"Profesyonel ol" yerine "devrik cümle kullanma, modern Türkçe yaz" gibi somut yazın.

### Hata 3: Hiç Güncellememek

Üç ay önce yazılmış ama şu an geçerli olmayan bilgiler CLAUDE.md'de olduğunda Claude yanlış bağlamla çalışır. Ayda bir gözden geçirin; üç satır değiştirseniz bile yeter.

### Hata 4: Ton Tercihini Atlamak

Ton bölümü yoksa Claude varsayılan tonda yazar ve bu sizin sesiniz olmayabilir.

### Hata 5: "Her Zaman/Asla" Kuralları Yok

Bu bölüm yoksa Claude nasıl davranacağını tahmin etmek zorunda kalır.

## İlk 30 Dakika Planı

Okuduktan sonra:

1. 5 dakika: Yeni bir metin dosyası açın (klasörle çalışacaksanız adı `CLAUDE.md` olsun) ve yukarıdaki şablonu yapıştırın.
2. 15 dakika: Şablondaki bölümleri doldurun. Hızlıca, mükemmeliyetçi olmadan.
3. 5 dakika: Metni yerine koyun (profil talimatı, proje ya da klasör), yeni bir sohbet ya da oturum açın ve Claude'a "Talimatımı 3 maddede özetle" deyin. Yanlış ya da eksik anladığı yerleri metinde düzeltirsiniz. Özet hiç tutmuyorsa [Hata Ayıklama](/wiki/claude-md/hata-ayiklama/) sayfasına bakın.
4. 5 dakika: Gerçek bir görev verin: bir e-posta yazdırın. Tonunuza uyuyor mu? Uymuyorsa Ton bölümünü iyileştirin.

30 dakikanın sonunda işe yarar bir CLAUDE.md'niz olur. Mükemmel olmayacak, ama kullandıkça iyileşir.

## İlgili Sayfalar

- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Temel kavram
- [CLAUDE.md Örnekleri](/wiki/claude-md/ornekler/): Farklı roller için gerçek örnekler
- [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/): Profil talimatı, proje, klasör ve hafıza karşılaştırması
- [Projects](/wiki/araclar/projects/): Bir işe özel talimat ve dosyalar
- [Cowork Modu](/wiki/araclar/cowork-modu/): Klasörle çalışma

