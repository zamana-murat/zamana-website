---
title: "Memory: Claude'un Kalıcı Belleği"
seoTitle: "Claude Hafızası (Memory): Ayarlar ve KVKK"
description: "Claude hafızası neyi saklar ve neyi saklamaz: CLAUDE.md'den farkı, ayarlar, geçici sohbet, ChatGPT'den hafıza taşıma ve KVKK boyutu."
tags:
  - yetenekler
  - memory
  - bellek
lastUpdated: "2026-10-06"
---

**Claude'un sohbetler arası bilgiyi hatırladığı bir bellek katmanı vardır.** Sizin kim olduğunuzu, neyle uğraştığınızı, tercihlerinizi otomatik biriktirir; sonraki sohbetlerde bu bilgileri kullanır. Bu sayfa nasıl çalıştığını, [CLAUDE.md](/wiki/claude-md/nedir/) ile farkını ve kontrol mekanizmalarını anlatır.

## Memory Nedir?

Memory, Claude'un **otomatik öğrenip hatırladığı** kalıcı bilgi sistemidir. Sohbet içinde bir şey söylediğinizde ("ben pazarlama müdürüyüm", "en sık LinkedIn için yazıyorum", "şirketim X") Claude bunu memory'e kaydeder. Sonraki sohbette tekrar söylemenize gerek kalmaz.

Pratik karşılığı: bir asistan üç ay sizinle çalıştıktan sonra rolünüzü, projenizi, tercihlerinizi bilir. Memory bunu kuran mekanizmadır.

**Güncel kapsam:** Sohbet hafızası **25 Ağustos 2026'dan beri [Cowork](/wiki/araclar/cowork-modu/) ile bağlantılıdır, ama kapsam dardır**: sohbet hafızası bulut Cowork görevlerinde kullanılır; yerel Cowork oturumları (masaüstü, klasör bağlı) sohbet hafızasını kullanmaz. Cowork projesinin ayrı bir hafızası vardır. Hafıza 10 Temmuz 2026'da yeniden tasarlandı ve artık **kategorili girdiler** halinde tutuluyor.

İki ilgili mekanizma hafızadan ayrı çalışır:

- **Yazdığınız kalıcı talimat:** Hafızanın yerine geçmez, yanında çalışır. Sohbet CLAUDE.md dosyasını okumaz; sohbette bunun yeri profil talimatıdır (Settings > General > "Instructions for Claude") ya da proje talimatıdır. Yerel Cowork oturumu klasördeki [CLAUDE.md](/wiki/claude-md/nedir/) dosyasını okur. Yerlerin karşılaştırması için [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/).
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

Tablodaki CLAUDE.md sütunu, sohbette profil talimatı ya da proje talimatı olarak okunabilir; fark yalnız kaydın yeridir.

**Pratik kural:**

- **Bilinçli, kalıcı talimatlar** → CLAUDE.md (yerel Cowork) ya da profil talimatı ve proje talimatı (sohbet)
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
- Sizin hafızada tutulmasını istemediğiniz bilgi: hangi kaydın tutulduğunu panelden siz denetlersiniz, hassas bir şeyi görürseniz silin
- Geçici sohbette konuştuğunuz hiçbir şey (aşağıda "Sohbet Bu Sefer Hatırlanmasın" bölümü)

## Nasıl Görüntülenir / Yönetilir?

Memory'i görmek ve yönetmek için:

1. Claude.ai → **Settings → Memory**; ayarın adı **"Generate memory from chats"**
2. Aynı bölümde Claude'un sizinle ilgili tuttuğu kayıtlar (konu başlıkları altında, "Topics") listelenir
3. Her madde için **Düzenle** veya **Sil** seçeneği vardır
4. Tümünü tek seferde silme seçeneği de aynı bölümdedir; arayüzdeki adı ve konumu sürüme göre değişebilir

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

Tek seferlik konuşmalar için **geçici sohbet (Incognito chat)** vardır. Free dahil tüm planlarda bulunur. Yeni bir sohbette sağ üstteki **hayalet simgesiyle** açılır; ekranda siyah bir çerçeve ve "Incognito chat" etiketi görünür.

Geçici sohbette:

- Konuşma sohbet geçmişine ve hafızaya kaydedilmez, mevcut hafızanız kullanılmaz, yeni hafıza girdisi oluşmaz
- Sonraki sohbetlerde aramada çıkmaz
- **Modelin eğitiminde kullanılmaz**
- Profil tercihleriniz ve ayarlarınız yine uygulanır

Bilmeniz gereken sınırlar:

- **Hiç saklanmaz demek doğru olmaz:** konuşma yine de 30 gün saklanır (Enterprise'ta kuruluşun özel saklama süresi daha uzun olabilir)
- Dosya oluşturma ve kod çalıştırma yoktur
- Normal sohbete çevrilemez, kapatınca yeniden açılamaz, proje içinde başlatılamaz
- Team ve Enterprise'ta kuruluş sahibi veri dışa aktarımında bu sohbetlere erişebilir; Enterprise'ta Compliance API'ye de girer

Yani geçici sohbet "hafızayı ve geçmişi kirletmeyin" aracıdır, "kayıt dışı" aracı değildir. Gizli işler için yine [şirket politikanız](/wiki/temeller/sirket-ici-politika/) geçerlidir. Sohbet geçmişi tarafı için [Geçmiş ve Arama](/wiki/araclar/gecmis-ve-arama/) sayfası.

## Şirket Kullanımı: Memory Politikası

Kurumsal bağlamda memory, **çalışanın kişisel asistanı** gibi davranır. Şirket politikasında dikkat:

- **Kişisel hesap vs. Şirket hesabı:** Memory sadece o hesaba bağlıdır. Çalışan ayrılınca şirket hesabındaki memory de gider.
- **Kişisel hesabı Team'e taşırsanız:** hafıza, kuruluş hafızayı kapatmadıysa taşınır; sohbetler, projeler ve tercihler de taşınır. Özel skills ve özel connector'lar gibi bazı şeyler taşınmaz. Kuruluş hafızayı kapalı tutuyorsa taşınan hafıza çalışmaz, önce yöneticinize sorun.
- **Başka asistandan geliyorsanız:** ChatGPT'deki hafızanızı Claude'a aktarmak için [ChatGPT'den Claude'a Geçiş](/claude/gecis/) sayfasına bakın. Aktarmadan önce listeyi okuyup müşteri ya da çalışan bilgisi içeren satırları ayıklayın.
- **Hassas veri:** Memory'e müşteri özel bilgisi düşmemeli. [Şirket içi politika](/wiki/temeller/sirket-ici-politika/) sayfasında bu konu işleniyor.
- **Team ve Enterprise:** Hafızanın açılışını ve politikasını admin belirler. [Takım ve Admin](/wiki/temeller/takim-ve-admin/) detay verir.

## KVKK ve Gizlilik

Memory, sizin Anthropic hesabınıza bağlı bilgi olarak saklanır. KVKK çerçevesinde:

- **Veri minimizasyonu:** Yalnızca işe yarayanı tutun, gözden geçirip gereksizleri silin
- **Bilgi talep hakkı (KVKK m.11):** Hangi verinizin tutulduğunu öğrenme hakkınızın pratik karşılığı, Memory panelinde tüm kayıtları görebilmenizdir
- **Silme:** Tek tek veya tümünü silebilirsiniz
- **Eğitim ve saklama:** Free, Pro ve Max'te "Help improve Claude" ayarını kendiniz kontrol edin; ayarın varsayılanına güvenmeyin. Geçici sohbet eğitimde kullanılmaz ama 30 gün saklanır

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

Yerel Cowork oturumunda CLAUDE.md klasörden okunur; sohbette sabit kurallar profil talimatından gelir, hafıza ise ayarınız açıksa devreye girer. İkisi birlikte sizin "asistan profilinizi" oluşturur. [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/) sayfası bu ilişkiyi derinleştirir.

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

> *"Ben Pazarlama Müdürüyüm, Bora Gıda'da çalışıyorum, ihracata yönelik paketli gıda üretiyoruz. LinkedIn ve blog için içerik üretiyorum."*

Claude bunu memory'e kaydeder. Bir hafta sonra yeni sohbet:

> *"LinkedIn için bir post yaz."*

Claude artık sektörünüzü biliyor ve ihracatçı gıda markasının diliyle yazıyor. Ek bilgi sormadan iş üretir.

### Senaryo 2: Tercih

Birkaç hafta kullandıktan sonra:

> *"Hep yarım sayfa öneriyorum, daha kısa olsun. 5 madde maksimum."*

Bu da memory'e geçer. Sonraki postlarda Claude varsayılan olarak kısa kalır.

### Senaryo 3: Düzeltme

Memory'de yanlış bilgi:

> *"Memory'de 'Şehir İstanbul' yazıyor ama Ankara'ya taşındım. Güncelle."*

Claude memory'i günceller.

## Memory İyiyse Verim Artar

Doğru kurulmuş memory + kalıcı talimat (profil talimatı ya da klasörde CLAUDE.md) birleşimi her oturumda **uzun başlangıç** ihtiyacını ortadan kaldırır. Çalışan artık her seferinde "ben kimim, neyle çalışıyorum" anlatmaz; doğrudan göreve girer. Bu, [Ölçüm Metrikleri](/wiki/temeller/olcum-metrikleri/) sayfasındaki zaman tasarrufunun gizli kaynaklarından biridir.

## Dreaming: Kendini İyileştiren Agent Hafızası (Kurumsal / Agent)

Mayıs 2026'da Anthropic, agent tarafı için **Dreaming** adlı bir hafıza yeteneği tanıttı. **Yalnız Claude Managed Agents'ta, research preview olarak** sunuluyor ve erişim bir talep formuyla veriliyor. Burada anlatılan kişisel Claude memory'sinden farklı bir katmandır ve claude.ai kullanıcısının açabileceği bir ayar değildir.

Pratik mantığı: Dreaming bir bellek deposunu ve en çok 100 geçmiş oturumu okuyup tekrar eden kalıpları ayıklar, yeniden düzenlenmiş yeni bir bellek deposu üretir. Girdi olarak verilen depoya dokunmaz. Standart API token fiyatıyla faturalanır.

**İş profesyoneli için bugünkü karşılığı:** Doğrudan kullanmazsınız; bu özellik esas olarak kurumsal otomasyon ve [Managed Agents](/wiki/yetenekler/agents-subagents/) kuran ekipleri ilgilendirir (kurumsal tarafın tanıtımı için [Claude Ajanları](/kurumsal/ajanlar/)). Ama yönü gösterir: agent'lar artık sadece o anki bağlamı değil, geçmiş çalışmalardan süzülen kalıpları da kullanmaya başlıyor.

## İlgili Sayfalar

- [Memory Yönetimi (CLAUDE.md ile)](/wiki/claude-md/memory-yonetimi/): Bütünleşik görünüm
- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Manuel kalıcı kurallar
- [Projects](/wiki/araclar/projects/): Project knowledge alternatifi
- [Geçmiş ve Arama](/wiki/araclar/gecmis-ve-arama/): Sohbet geçmişi (memory'den ayrı)
- [ChatGPT'den Claude'a Geçiş](/claude/gecis/): Hafızanızı Claude'a taşıma adımları
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Veri hakları
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Memory'e ne yazılmalı
- [Context ve Compaction](/wiki/yetenekler/context-compaction/): Sohbet içi bağlam yönetimi (memory'den ayrı)

