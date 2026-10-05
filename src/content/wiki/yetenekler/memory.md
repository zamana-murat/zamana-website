---
title: "Memory: Claude'un Kalıcı Belleği"
description: "Claude'un sohbetler arası hatırladığı bilgi sistemi. CLAUDE.md ile farkı, ne tür bilgiyi saklar, ne saklamaz, KVKK boyutu."
tags:
  - yetenekler
  - memory
  - bellek
lastUpdated: "2026-10-05"
---

**Claude'un sohbetler arası bilgiyi hatırladığı bir bellek katmanı vardır.** Sizin kim olduğunuzu, neyle uğraştığınızı, tercihlerinizi otomatik biriktirir; sonraki sohbetlerde bu bilgileri kullanır. Bu sayfa nasıl çalıştığını, [CLAUDE.md](/wiki/claude-md/nedir/) ile farkını ve kontrol mekanizmalarını anlatır.

## Memory Nedir?

Memory, Claude'un **otomatik öğrenip hatırladığı** kalıcı bilgi sistemidir. Sohbet içinde bir şey söylediğinizde ("ben pazarlama müdürüyüm", "en sık LinkedIn için yazıyorum", "şirketim X") Claude bunu memory'e kaydeder. Sonraki sohbette tekrar söylemenize gerek kalmaz.

Pratik karşılığı: bir asistan üç ay sizinle çalıştıktan sonra rolünüzü, projenizi, tercihlerinizi bilir. Memory bunu kuran mekanizmadır.

**Güncel kapsam:** Hafıza **25 Ağustos 2026'dan beri sohbet ve [Cowork](/wiki/araclar/cowork-modu/) arasında ortaktır**: birinde öğrendiğini diğerinde de kullanır. Hafıza 10 Temmuz 2026'da yeniden tasarlandı ve artık **kategorili girdiler** halinde tutuluyor.

İki ilgili mekanizma hafızadan ayrı çalışır:

- **CLAUDE.md:** Sizin yazdığınız açık talimattır; hafızanın yerine geçmez, yanında çalışır. [CLAUDE.md](/wiki/claude-md/nedir/) sayfasında ayrıntı var.
- **Projects:** Her projenin kendi project knowledge ve özel talimatları vardır. Ayrıntı için [Projects](/wiki/araclar/projects/) sayfasına bakın.

Bu sayfa kişisel hafızayı anlatır.

## CLAUDE.md ile Farkı

İki sistem birbirinin alternatifi değil, birlikte çalışır. Ama farklı amaçlara hizmet eder.

| | CLAUDE.md | Memory |
|---|---|---|
| Kim yazar? | Siz, elle | Claude, otomatik |
| Ne tutar? | Açık kurallar, talimatlar | Konuşma sırasında öğrenilenler |
| Görünür mü? | Evet, dosya olarak | Memory yönetim panelinde |
| Sürüm var mı? | Elle yönetilir | Claude tarafından güncellenir |
| Düzenlenir mi? | Doğrudan | Memory paneli üzerinden |
| Şirket genelinde paylaşım | Evet ([Takım CLAUDE.md](/wiki/claude-md/takim-claude-md/)) | Hayır, kişiseldir |

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

- Sohbetin tüm metni (sohbet geçmişi ayrı sistemdir, [Geçmiş ve Arama](/wiki/araclar/gecmis-ve-arama/))
- Hassas kişisel veri (Claude bunu memory'e koymama eğilimindedir)
- Gizli olduğunu söylediğiniz bilgi

## Nasıl Görüntülenir / Yönetilir?

Memory'i görmek ve yönetmek için:

1. Claude.ai → **Settings → Memory**; ayarın adı **"Generate memory from chats"**
2. Aynı bölümde Claude'un sizinle ilgili tuttuğu kayıtlar (konu başlıkları altında, "Topics") listelenir
3. Her madde için **Düzenle** veya **Sil** seçeneği vardır
4. Tümünü tek seferde silmek için "Clear all memory" seçeneği

**Kullanım disiplini:**

- Aydan ayda bir gözden geçirin
- Yanlış yazılmış / eskimiş kayıtları silin veya düzeltin
- Hassas içerik varsa silin

## Memory'i Açma / Kapama

Memory'in **açık veya kapalı** olması ayarlanabilir bir tercih:

- **Açık (Free, Pro, Max'te varsayılan):** Claude öğrenip biriktirir
- **Kapalı (Team ve Enterprise'ta varsayılan):** Her sohbet baştan başlar, hiçbir bilgi taşınmaz

Yeni bir ekip hesabında hafızanın çalışmadığını görürseniz sebep bu olabilir. Aynı **"Generate memory from chats"** ayarıyla açıp kapatılır; Team ve Enterprise'ta kontrol kuruluş sahibindedir ve yönetici açar.

**Ne zaman kapatmalı?**

- Hassas konularda çalışıyorsanız ve geçici sohbet yapmak istiyorsanız
- Bir başkası sizin hesabınızı kullanıyorsa
- Test / deneme amaçlı temiz bir başlangıç istiyorsanız

## "Sohbet Bu Sefer Hatırlanmasın"

Tek sefer geçici sohbet için: bazı sürümlerde **Temporary Chat / Geçici Sohbet** modu vardır. O moddayken yapılan konuşma memory'e işlemez, sohbet geçmişine de kaydedilmez. Tarayıcıda **incognito** moda benzer.

Detay için [Geçmiş ve Arama](/wiki/araclar/gecmis-ve-arama/) sayfası.

## Şirket Kullanımı: Memory Politikası

Kurumsal bağlamda memory, **çalışanın kişisel asistanı** gibi davranır. Şirket politikasında dikkat:

- **Kişisel hesap vs. Şirket hesabı:** Memory sadece o hesaba bağlıdır. Çalışan ayrılınca o memory de gider.
- **Hassas veri:** Memory'e müşteri özel bilgisi düşmemeli. [Şirket içi politika](/wiki/temeller/sirket-ici-politika/) sayfasında bu konu işleniyor.
- **Team ve Enterprise:** Hafızanın açılışını ve politikasını admin belirler. [Takım ve Admin](/wiki/temeller/takim-ve-admin/) detay verir.

## KVKK ve Gizlilik

Memory, sizin Anthropic hesabınıza bağlı bilgi olarak saklanır. KVKK çerçevesinde:

- **Veri minimizasyonu:** Yalnızca işe yarayanı tutun, gözden geçirip gereksizleri silin
- **Erişim hakkı:** Memory panelinde tüm kayıtları görebilirsiniz
- **Silme hakkı:** Tek tek veya tümünü silebilirsiniz
- **Taşınabilirlik hakkı:** [Geçmiş ve Arama](/wiki/araclar/gecmis-ve-arama/) sayfasındaki export ile dışarı aktarılabilir

[Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfası genel veri haklarını anlatır.

## Hatalar ve Düzeltme

Bazen Claude memory'e **yanlış** bir şey kaydedebilir:

- "Bunu yanlış öğrenmişim, sil" diyebilirsiniz → Claude o kaydı silmeye çalışır
- Veya doğrudan Settings → Memory'den o satırı silersiniz
- "Hep şu üslupla yaz" deseniz, sonra fikriniz değişse → memory'i güncelletirsiniz

Memory bir kez yazıldı diye sonsuza kadar kalmaz; siz değiştirebilirsiniz.

## Memory + CLAUDE.md Birlikte Kullanım

İkisi birbirini tamamlar:

- **CLAUDE.md** → "marka voice şu, klişe yasak" gibi sabit kurallar
- **Memory** → "geçen ay X projesinde çalıştım, Y müşterisini sevmem" gibi sohbette ortaya çıkanlar

Yeni sohbette ikisi de hazırdır ve birlikte sizin "asistan profilinizi" oluşturur. [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/) sayfası bu ilişkiyi derinleştirir.

## Memory'in Sınırları

**Yapamayacakları:**

- Şirket-genelinde paylaşılmaz (şirket bilgisi için [Takım CLAUDE.md](/wiki/claude-md/takim-claude-md/))
- Çok uzun bilgi tutmaz: geniş bağlam gerektiren içerik memory'e değil, [project knowledge](/wiki/araclar/projects/) alanına konmalıdır
- Doğrulanmış bilgi tutmaz: ne söylediyseniz onu "doğru" sayar, yanlışı siz düzeltmelisiniz

## Memory mu, Project Knowledge mı?

İki farklı sistem:

- **Memory** → kişisel, otomatik, hesabınıza bağlı, az miktarda bilgi
- **Project Knowledge** → bilinçli yüklenmiş, projeye bağlı, geniş bilgi (PDF, doküman, vs.)

Tipik kullanım:

- Bir müşteri için sürekli çalışıyorsanız → o müşterinin sözleşmeleri / brifingleri **project knowledge**'a yüklenir
- "Ben bu projede onu temsil ediyorum" gibi bir bilgi → **memory**'e geçer

[Projects](/wiki/araclar/projects/) sayfası project knowledge tarafını anlatır.

## Pratik Senaryolar

### Senaryo 1: İlk gün

Yeni Claude kullanıcısı. Memory boş. Sohbette anlatıyor:

> *"Ben Pazarlama Müdürüyüm, ABC Şirketi'nde, B2B SaaS sektörü. LinkedIn ve blog için içerik üretiyorum."*

Claude bunu memory'e kaydeder. Bir hafta sonra yeni sohbet:

> *"LinkedIn için bir post yaz."*

Claude artık sektörünüzü biliyor ve B2B SaaS'a yönelik yazıyor. Ek bilgi sormadan iş üretir.

### Senaryo 2: Tercih

Birkaç hafta kullandıktan sonra:

> *"Hep yarım sayfa öneriyorum, daha kısa olsun. 5 madde maksimum."*

Bu da memory'e geçer. Sonraki postlarda Claude varsayılan olarak kısa kalır.

### Senaryo 3: Düzeltme

Memory'de yanlış bilgi:

> *"Memory'de 'Şehir İstanbul' yazıyor ama Ankara'ya taşındım. Güncelle."*

Claude memory'i günceller.

## Memory İyiyse Verim Artar

Doğru kurulmuş memory + CLAUDE.md birleşimi her sohbette **uzun başlangıç** ihtiyacını ortadan kaldırır. Çalışan artık her seferinde "ben kimim, neyle çalışıyorum" anlatmaz; doğrudan göreve girer. Bu, [Ölçüm Metrikleri](/wiki/temeller/olcum-metrikleri/) sayfasındaki zaman tasarrufunun gizli kaynaklarından biridir.

## Dreaming: Kendini İyileştiren Agent Hafızası (Kurumsal / Agent)

Mayıs 2026'da Anthropic, agent tarafı için **Dreaming** adlı bir hafıza yeteneği tanıttı. **Yalnız Claude Managed Agents'ta, research preview olarak** sunuluyor ve erişim bir talep formuyla veriliyor. Burada anlatılan kişisel Claude memory'sinden farklı bir katmandır ve claude.ai kullanıcısının açabileceği bir ayar değildir.

Pratik mantığı: Dreaming bir bellek deposunu ve en çok 100 geçmiş oturumu okuyup tekrar eden kalıpları ayıklar, yeniden düzenlenmiş yeni bir bellek deposu üretir. Girdi olarak verilen depoya dokunmaz. Standart API token fiyatıyla faturalanır.

**İş profesyoneli için bugünkü karşılığı:** Doğrudan kullanmazsınız; bu özellik esas olarak kurumsal otomasyon ve [Managed Agents](/wiki/yetenekler/agents-subagents/) kuran ekipleri ilgilendirir. Ama yönü gösterir: agent'lar artık sadece o anki bağlamı değil, geçmiş çalışmalardan süzülen kalıpları da kullanmaya başlıyor.

## İlgili Sayfalar

- [Memory Yönetimi (CLAUDE.md ile)](/wiki/claude-md/memory-yonetimi/): Bütünleşik görünüm
- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Manuel kalıcı kurallar
- [Projects](/wiki/araclar/projects/): Project knowledge alternatifi
- [Geçmiş ve Arama](/wiki/araclar/gecmis-ve-arama/): Sohbet geçmişi (memory'den ayrı)
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Veri hakları
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Memory'e ne yazılmalı
- [Context ve Compaction](/wiki/yetenekler/context-compaction/): Sohbet içi bağlam yönetimi (memory'den ayrı)

