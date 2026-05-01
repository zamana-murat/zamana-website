---
title: "Memory — Claude'un Kalıcı Belleği"
description: "Claude'un sohbetler arası hatırladığı bilgi sistemi. CLAUDE.md ile farkı, ne tür bilgiyi saklar, ne saklamaz, KVKK boyutu."
tags:
  - yetenekler
  - memory
  - bellek
---

**Claude'un sohbetler arası bilgiyi hatırladığı bir bellek katmanı vardır.** Sizin kim olduğunuzu, neyle uğraştığınızı, tercihlerinizi otomatik biriktirir; sonraki sohbetlerde bu bilgileri kullanır. Bu sayfa nasıl çalıştığını, [CLAUDE.md](../claude-md/nedir/) ile farkını ve kontrol mekanizmalarını anlatır.

## Memory Nedir?

Memory, Claude'un **otomatik öğrenip hatırladığı** kalıcı bilgi sistemidir. Sohbet içinde bir şey söylediğinizde — "ben pazarlama müdürüyüm", "en sık LinkedIn için yazıyorum", "şirketim X" — Claude bunu memory'e kaydeder. Sonraki sohbette tekrar söylemenize gerek kalmaz.

Pratik karşılığı: bir asistan üç ay sizinle çalıştıktan sonra rolünüzü, projenizi, tercihlerinizi bilir. Memory bunu kuran mekanizmadır.

**Önemli kapsam:** Memory **yalnızca [Claude Chat](../araclar/claude-chat/)'te** çalışır. [Cowork modu](../araclar/cowork-modu/) ve [Projects](../araclar/projects/) için **farklı mekanizmalar** vardır:

- **Cowork modu:** Her oturum [CLAUDE.md](../claude-md/nedir/) ile bağlam kurar; oturum dışı kalıcı bellek yoktur
- **Projects:** Her projenin kendi project knowledge ve özel talimatları (proje-spesifik bağlam) vardır; Memory'den ayrı çalışır

Bu sayfa Claude Chat memory'sini odak alır.

## CLAUDE.md ile Farkı

İki sistem birbirinin alternatifi değil — birlikte çalışır. Ama farklı amaçlara hizmet eder.

| | CLAUDE.md | Memory |
|---|---|---|
| Kim yazar? | Siz, elle | Claude, otomatik |
| Ne tutar? | Açık kurallar, talimatlar | Konuşma sırasında öğrenilenler |
| Görünür mü? | Evet, dosya olarak | Memory yönetim panelinde |
| Sürüm var mı? | Elle yönetilir | Claude tarafından güncellenir |
| Düzenlenir mi? | Doğrudan | Memory paneli üzerinden |
| Şirket genelinde paylaşım | Evet ([Takım CLAUDE.md](../claude-md/takim-claude-md/)) | Hayır, kişiseldir |

**Pratik kural:**

- **Bilinçli, kalıcı talimatlar** → CLAUDE.md
- **Sohbet sırasında ortaya çıkan, her seferinde tekrar etmek istemediğiniz** → Memory

## Ne Tür Bilgi Saklanır?

Memory tipik olarak şunları biriktirir:

- **Kim olduğunuz:** rol, şirket, sektör, sorumluluklar
- **Tercihleriniz:** üslup, dil seçimi, format alışkanlıkları
- **Çalıştığınız projeler:** isimler, tarihler, paydaşlar
- **Geri bildirimleriniz:** "şöyle yapma, böyle yap" şeklinde verdiklerinizi
- **Tekrar eden bilgiler:** sıkça anlattığınız bağlam

Saklamadıkları:

- Sohbetin tüm metni (sohbet geçmişi ayrı sistemdir — [Geçmiş ve Arama](../araclar/gecmis-ve-arama/))
- Hassas kişisel veri (Claude bunu memory'e koymama eğilimindedir)
- Gizli olduğunu söylediğiniz bilgi

## Nasıl Görüntülenir / Yönetilir?

Memory'i görmek ve yönetmek için:

1. Claude.ai → **Settings → Capabilities → "Generate memory from chat history"** seçeneği
2. Aynı bölümde Claude'un sizinle ilgili tuttuğu kayıtlar listelenir
3. Her madde için **Düzenle** veya **Sil** seçeneği vardır
4. Tümünü tek seferde silmek için "Clear all memory" seçeneği

**Kullanım disiplini:**

- Aydan ayda bir gözden geçirin
- Yanlış yazılmış / eskimiş kayıtları silin veya düzeltin
- Hassas içerik varsa silin

## Memory'i Açma / Kapama

Memory'in **açık veya kapalı** olması ayarlanabilir bir tercih:

- **Açık (varsayılan):** Claude öğrenip biriktirir
- **Kapalı:** Her sohbet baştan başlar, hiçbir bilgi taşınmaz

**Settings → Capabilities → "Generate memory from chat history"** seçeneği üzerinden açıp kapatılabilir.

**Ne zaman kapatmalı?**

- Hassas konularda çalışıyorsanız ve geçici sohbet yapmak istiyorsanız
- Bir başkası sizin hesabınızı kullanıyorsa
- Test / deneme amaçlı temiz bir başlangıç istiyorsanız

## "Sohbet Bu Sefer Hatırlanmasın"

Tek sefer geçici sohbet için: bazı sürümlerde **Temporary Chat / Geçici Sohbet** modu vardır. O moddayken yapılan konuşma memory'e işlemez, sohbet geçmişine de kaydedilmez. Tarayıcıda **incognito** moda benzer.

Detay için [Geçmiş ve Arama](../araclar/gecmis-ve-arama/) sayfası.

## Şirket Kullanımı — Memory Politikası

Kurumsal bağlamda memory, **çalışanın kişisel asistanı** gibi davranır. Şirket politikasında dikkat:

- **Kişisel hesap vs. Şirket hesabı:** Memory sadece o hesaba bağlıdır. Çalışan ayrılınca o memory de gider.
- **Hassas veri:** Memory'e müşteri özel bilgisi düşmemeli. [Şirket içi politika](../temeller/sirket-ici-politika/) sayfasında bu konu işleniyor.
- **Enterprise plan:** Bazı kurumsal yapılandırmalarda admin memory politikasını organizasyon çapında düzenleyebilir. [Takım ve Admin](../temeller/takim-ve-admin/) detay verir.

## KVKK ve Gizlilik

Memory, sizin Anthropic hesabınıza bağlı bilgi olarak saklanır. KVKK çerçevesinde:

- **Veri minimizasyonu:** Yalnızca işe yarayanı tutmak — gözden geçirip gereksizleri silin
- **Hak: Erişim:** Memory panelinde tüm kayıtları görme hakkınız var
- **Hak: Silme:** Tek tek veya tümünü silebilirsiniz
- **Hak: Taşınabilirlik:** [Geçmiş ve Arama](../araclar/gecmis-ve-arama/) sayfasındaki export ile dışarı aktarılabilir

[Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) sayfası genel veri haklarını anlatır.

## Hatalar ve Düzeltme

Bazen Claude memory'e **yanlış** bir şey kaydedebilir:

- "Bunu yanlış öğrenmişim, sil" diyebilirsiniz → Claude o kaydı silmeye çalışır
- Veya doğrudan Settings → Memory'den o satırı silersiniz
- "Hep şu üslupla yaz" deseniz, sonra fikriniz değişse → memory'i güncelletirsiniz

Memory bir kez yazıldı diye sonsuza kadar kalmaz; siz değiştirebilirsiniz.

## Memory + CLAUDE.md Birlikte Kullanım

İkisi birbirini tamamlar:

- **CLAUDE.md** → "ben pazarlama müdürüyüm, marka voice şu, klişe yasak" (sabit kurallar)
- **Memory** → "geçen ay X projesinde çalıştım, Y müşterisini sevmem" (sohbette ortaya çıkanlar)

Yeni sohbette CLAUDE.md zaten yüklü, memory zaten Claude'da. İkisi birlikte sizin "asistan profilinizi" oluşturur.

[Memory Yönetimi](../claude-md/memory-yonetimi/) sayfası bu ilişkiyi derinleştirir.

## Memory'in Sınırları

**Yapamayacakları:**

- Şirket-genelinde paylaşılmaz (şirket bilgisi için [Takım CLAUDE.md](../claude-md/takim-claude-md/))
- Çok uzun bilgi tutmaz (Claude eğer bağlam-yoğun bilgi almışsa o memory'e değil, [project knowledge](../araclar/projects/)'a yazılmalı)
- Otomatik olarak doğrulanmış değildir — siz yazdıysanız "doğru" sayar

## Memory mu, Project Knowledge mı?

İki farklı sistem:

- **Memory** → kişisel, otomatik, hesabınıza bağlı, az miktarda bilgi
- **Project Knowledge** → bilinçli yüklenmiş, projeye bağlı, geniş bilgi (PDF, doküman, vs.)

Tipik kullanım:

- Bir müşteri için sürekli çalışıyorsanız → o müşterinin sözleşmeleri / brifingleri **project knowledge**'a yüklenir
- "Ben bu projede onu temsil ediyorum" gibi bir bilgi → **memory**'e geçer

[Projects](../araclar/projects/) sayfası project knowledge tarafını anlatır.

## Pratik Senaryolar

### Senaryo 1: İlk gün

Yeni Claude kullanıcısı. Memory boş. Sohbette anlatıyor:

> *"Ben Pazarlama Müdürüyüm, ABC Şirketi'nde, B2B SaaS sektörü. LinkedIn ve blog için içerik üretiyorum."*

Claude bunu memory'e kaydeder. Bir hafta sonra yeni sohbet:

> *"LinkedIn için bir post yaz."*

Claude: artık biliyor — B2B SaaS'a yönelik, marka voice'u memory'de. Ek bilgi sormadan iş üretir.

### Senaryo 2: Tercih

Birkaç hafta kullandıktan sonra:

> *"Hep yarım sayfa öneriyorum, daha kısa olsun. 5 madde maksimum."*

Bu da memory'e geçer. Sonraki postlarda Claude varsayılan olarak kısa kalır.

### Senaryo 3: Düzeltme

Memory'de yanlış bilgi:

> *"Memory'de 'Şehir İstanbul' yazıyor ama Ankara'ya taşındım. Güncelle."*

Claude memory'i günceller.

## Memory İyiyse Verim Artar

Doğru kurulmuş memory + CLAUDE.md birleşimi her sohbette **uzun başlangıç** ihtiyacını ortadan kaldırır. Çalışan artık her seferinde "ben kimim, neyle çalışıyorum" anlatmaz; doğrudan göreve girer. Bu, [Ölçüm Metrikleri](../temeller/olcum-metrikleri/) sayfasındaki zaman tasarrufunun gizli kaynaklarından biridir.

## İlgili Sayfalar

- [Memory Yönetimi (CLAUDE.md ile)](../claude-md/memory-yonetimi/) — Bütünleşik görünüm
- [CLAUDE.md Nedir?](../claude-md/nedir/) — Manuel kalıcı kurallar
- [Projects](../araclar/projects/) — Project knowledge alternatifi
- [Geçmiş ve Arama](../araclar/gecmis-ve-arama/) — Sohbet geçmişi (memory'den ayrı)
- [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) — Veri hakları
- [Şirket İçi Politika](../temeller/sirket-ici-politika/) — Memory'e ne yazılmalı
- [Context ve Compaction](context-compaction/) — Sohbet içi bağlam yönetimi (memory'den ayrı)

