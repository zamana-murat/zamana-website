---
title: "Kalıcı Talimat ve Hafıza Yerleri: Hangisi Nerede Geçerli?"
seoTitle: "Claude'da Kalıcı Talimat ve Hafıza Yerleri: Karşılaştırma Tablosu"
description: "Claude'a kalıcı talimat nereye yazılır? Profil talimatı, proje, klasörde CLAUDE.md, yerleşik hafıza: hangisi nerede geçerli, kim yönetir, karşılaştırma."
tags:
  - claude-md
  - memory
  - hafiza
  - kalici-talimat
  - bilgi-tabani
lastUpdated: "2026-10-06"
---

**Claude'a "beni bir kez tanı" demenin tek bir yolu yoktur.** Her konuşma kendi bağlamıyla başlar; neyin bir sonraki konuşmaya taşınacağı, talimatı **nereye yazdığınıza** bağlıdır. Bu sayfa, Claude'un kalıcı talimat ve hafıza yerlerinin hepsini tek tabloda toplar: hangisi nerede ayarlanır, nerede geçerli, kim yönetir.

Bölümün diğer sayfaları buraya bağlanır. Prompting sayfalarında geçen "kalıcı talimat yerlerinin karşılaştırması" da bu sayfadaki tablodur.

## Hangisini Kullanayım?

Önce sorunuza karşılık gelen satırı bulun:

| Durum | Nereye yazın |
|---|---|
| Her sohbette geçerli olsun (dil, ton, rolünüz, "taslağı göster, gönderme" gibi kurallar) | **Profil talimatı** (Ayarlar > General > "Instructions for Claude") |
| Yalnız bir müşteri, bir iş ya da bir konu için geçerli olsun | **Proje** (talimat ve dosyalar) |
| Masaüstünde bir klasörle, dosyalarla çalışıyorsunuz (Cowork) | **O klasörün içine CLAUDE.md** ve kritik kuralların kısa sürümünü profil talimatına |
| Sadece bu konuşma için | **Sohbete yazın**, kalıcı yere koymayın |
| Şirketin tamamı için ortak kural | **Takım kural seti**: [Takım CLAUDE.md](/wiki/claude-md/takim-claude-md/) |
| Terminalde kod yazıyorsunuz (Claude Code) | Aşağıdaki [Geliştiriciler için](#geliştiriciler-için-claude-codeda-claudemd) kutusu |

İki kural işinizi görür. Birincisi: **Claude'a bir şeyi ikinci kez söylediğinizde, o bilgiyi yukarıdaki yerlerden birine yazın.** İkincisi: **sohbet (claude.ai) CLAUDE.md dosyasını okumaz**; sohbette aynı işi profil talimatı ve proje görür.

## Kalıcı Talimat ve Hafıza Yerleri

![Kalıcı talimat ve hafıza katmanları, geniş kapsamdan dara: profil talimatı, proje, klasörde CLAUDE.md, oturum içi bağlam; altta otomatik çalışan yerleşik hafıza](/images/wiki/claude-md-hafiza-katmanlari.svg)

| Yer | Nerede ayarlanır | Nerede geçerli | Kim yönetir | Not |
|---|---|---|---|---|
| **Profil talimatı** ("Instructions for Claude") | Ayarlar > General | Tüm sohbetlerde, tüm planlarda (Free dahil); Cowork'te de aynı ayar (eski "Global instructions" buna birleşti); geçici sohbette de uygulanır | Siz | Sabit ton, dil ve değişmez kurallar için en geniş yer |
| **Proje talimatı ve dosyaları** | Projects içinde | Yalnız o projedeki sohbetlerde; her sohbette sabit yüklü arka plan bilgisi olur. Free'de en çok 5 proje | Siz | Müşteriye veya konuya özgü bilgi. Ayrıntı: [Projects](/wiki/araclar/projects/) |
| **Proje hafızası** | Ayarlar > Memory açıksa kendiliğinden oluşur | Yalnız o projede; her projenin ayrı hafıza alanı ve özeti var, proje dışı sohbetlerden ayrıdır | Claude biriktirir; siz sohbette söyleyerek ya da düzenleyerek değiştirirsiniz | Yeni proje yapısında ortak hafıza daha da öne çıkıyor: [Projects yeniden tasarlandı](/haberler/2026-09-17-projects-yeniden-tasarlandi/) |
| **Klasörde CLAUDE.md** | Çalıştığınız klasörün içine düz metin dosyası | Yerel Cowork oturumunda (Claude Desktop, klasör bağlı) ve Claude Code'da okunur. Sohbette okunmaz. Bulut Cowork oturumunda okunduğu belgelenmemiş | Siz (Claude oturumda güncelleyebilir) | Cowork yardım sayfaları buna "klasör talimatı" der; dosya adı ve sınırı belgelenmemiş, o yüzden testle doğrulayın (aşağıda) |
| **Cowork projesi** | Cowork içinde | Yalnız bilgisayarınızda; klasörler, talimat, bağlantılar ve kendi proje hafızası var | Siz | claude.ai projesi değildir, paylaşılmaz. [Cowork Modu](/wiki/araclar/cowork-modu/) |
| **Yerleşik hafıza** | Ayarlar > Memory ("Generate memory from chats") | Sohbette ve bulutta çalışan Cowork görevlerinde (görev başına "+" menüsünden kapatılır). Bilgisayarda yerel çalışan Cowork oturumları sohbet hafızasını kullanmaz. Geçici sohbette kullanılmaz | Claude biriktirir; siz düzenler | Free, Pro, Max'te varsayılan açık; Team ve Enterprise'ta yönetici açar, üye ayrıca onaylar. Ayrıntı: [Memory](/wiki/yetenekler/memory/) |
| **Kuruluş talimatı** | Yönetici, cihaz yönetimi veya yerel yapılandırma dosyasıyla | Sohbet, Cowork ve Code oturumlarının hepsinde sistem istemine eklenir | Kuruluş yöneticisi | En çok 3.000 karakter. Model için bir rehberdir, zorlayıcı değildir: kritik kuralı tek başına buna emanet etmeyin |
| **Oturum içi bağlam** | Konuşmanın kendisi | Yalnız o konuşmada | Siz | Yüklediğiniz dosyalar ve söyledikleriniz; konuşma bitince kaybolur |
| **`memory/` klasörü** (ileri kurulum) | Çalışma klasörünüzde kendi açtığınız dosyalar | Klasörle çalışılan oturumlarda, CLAUDE.md'den "bak" denirse | Siz, Claude'un yardımıyla | İsteğe bağlıdır; aşağıda anlatılıyor |

> **Not:** "Sohbette neden okunmadı?" sorusunun cevabı çoğunlukla bu tablodadır: CLAUDE.md dosyası, klasörle çalışan ortamlar içindir. Sohbette aynı bilgiyi profil talimatına ya da projeye koyarsınız. Tanılama için [Hata Ayıklama](/wiki/claude-md/hata-ayiklama/) sayfasındaki sırayı izleyin.

## Temel Fikir: Bir Kez Yazın, Kullandığınız Yere Koyun

Claude'u her gece geceyarısı hafızası silinen harika bir meslektaş olarak düşünün. Sizin işiniz, geceyarısından önce önemli şeyleri yazmaktır. Yerleşik hafıza bu meslektaşa küçük bir otomatik not defteri verir, ama neyi yazacağına o karar verir; yukarıdaki diğer yerler ise sizin yazdığınız notlardır.

Yöntem her yerde aynıdır. [Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/) sayfasındaki beş bölümlü "kendinizi tanıtın" metnini (kim olduğunuz, şirket, ton, her zaman/asla, güncel odak) **bir kez** yazarsınız. Sonra aynı metni kullandığınız yere koyarsınız:

- Sohbetle çalışıyorsanız: profil talimatına (ve bir işe özgü kısmı projeye)
- Masaüstünde klasörle çalışıyorsanız (Cowork): klasörün içine `CLAUDE.md` olarak
- Claude Code kullanıyorsanız: aşağıdaki kutudaki dosyalara

Metin değişmez, yalnızca durduğu yer araca göre değişir. Birden fazla yer kullanıyorsanız ana metni tek bir dosyada tutun, öbürlerine kopyalayın; sürüm numarasını başlığa yazın ki hangisinin güncel olduğunu bilin.

## Güvenli Çizgi

> **Kritik kuralı tek bir yere emanet etmeyin.** Cowork'te CLAUDE.md'nin okunması için en sağlam dayanak dolaylıdır (Cowork, Claude Code motorunda çalışır); Cowork yardım sayfaları dosyayı adıyla anmaz. Bu yüzden üç adım:
>
> 1. **CLAUDE.md'yi çalıştığınız klasörün içine koyun.**
> 2. **İlk mesajda test edin:** "Talimatımı 3 maddede özetle." Claude doğru özeti veriyorsa dosya okunuyor demektir. Vermiyorsa yanlış klasördesiniz, dosya adı hatalı ya da oturum dosyayı görmüyor olabilir.
> 3. **Kritik kuralların kısa sürümünü profil talimatına da yazın** (örneğin "Her e-postayı önce taslak göster, gönderme"). Dosya okunmasa bile bu kurallar işler.

## Yerler Tek Tek

### Profil Talimatı

En geniş ve en kolay yerdir. Hangi uygulamada olursanız olun sohbetlerinizde geçerli olur. Dil, ton ve değişmez kurallar için uygundur. İş bağlamının tamamını buraya yığmayın: her sohbette yüklendiği için müşteriye veya konuya özgü ayrıntıyı projeye bırakın.

### Proje

Bir projeye girdiğinizde proje talimatı ve dosyaları o projedeki her sohbette hazırdır. "XYZ Gıda ile 3 yıldır çalışıyoruz, karar verici Ahmet Bey, bütçe dar" gibi bilgiler profil talimatına değil, o müşterinin projesine aittir. Profil talimatı genel tarzınızı, proje ise o işin ayrıntısını taşır; Claude ikisini birleştirir.

> **Güncel durum:** Projects 17 Eylül 2026'da yeniden tasarlandı (beta, kademeli açılıyor). Yeni yapıda proje, paralel çalışan konuşmalardan ve bir koordinatörden oluşuyor; her konuşma projenin **ortak hafızasına** katkı yapıyor. Pro ve Max'teki mevcut projeler olduğu gibi çalışmaya devam ediyor. Ayrıntı: [Projects yeniden tasarlandı](/haberler/2026-09-17-projects-yeniden-tasarlandi/).

Klasik projede bilgi tabanını siz güncellersiniz. Her oturumun sonunda Claude'a "bugün neyi öğrendik, özetle" deyip çıkan özeti proje talimatına eklemeye alışın.

### Klasörde CLAUDE.md (Cowork)

Masaüstünde Cowork ile bir klasörle çalışıyorsanız, klasörün içindeki `CLAUDE.md` yerel oturumda okunur. Basit bir metin dosyasıdır, Notepad ile bile düzenlenir. Bulut Cowork oturumlarında klasörler elle eklenir ve dosyanın okunduğu belgelenmemiştir; orada güvenli çizgideki üç adıma güvenin. Ayrıntı: [CLAUDE.md Nedir?](/wiki/claude-md/nedir/).

### Yerleşik Hafıza

Siz yazmazsınız; Claude konuşmalardan öğrendiklerini kategorili girdiler halinde biriktirir. Hafıza 10 Temmuz 2026'da kategorili girdilere dönüştü ve 25 Ağustos 2026'dan beri sohbet ve bulut Cowork görevleri arasında ortaktır. Pratik ayrım şudur: **kesin ve değişmez kuralı** profil talimatına ya da klasördeki CLAUDE.md'ye yazın, çünkü onu siz görür ve siz düzenlersiniz. Yerleşik hafıza "Claude beni zamanla tanısın" kolaylığıdır; kritik talimatı ona emanet etmeyin.

### `memory/` Klasörü (İleri Kurulum)

Klasörle çalışan ileri kullanıcılar için isteğe bağlı bir yapıdır. Bir bellek yönetimi skill'iyle ya da klasörü ve dosyaları kendiniz açarak çalışır. Skill kurulu değilse CLAUDE.md'ye "uzun vadeli bilgi için `memory/` klasörüne bak" satırı eklemeniz yeterlidir. İş bölümü şöyledir:

- **CLAUDE.md:** çalışan hafıza (değişmeyen gerçekler, güncel odak)
- **`memory/` klasörü:** uzun vadeli bilgi tabanı (organizasyon şeması, ürün kataloğu, müşteri profilleri, terminoloji)

```
memory/
├── about-company.md      # Şirket ne yapar, ürünler, pazarlar, ana müşteriler
├── team.md               # Organizasyon şeması, kilit kişiler, roller
├── brand-voice.md        # Ton, dil, kaçınılması gerekenler
├── working-preferences.md # Çıktı formatları, öncelikler
└── active-projects.md    # Aktif projeler, durum, son tarihler
```

Claude klasöre yazma izni olan bir oturumda bu dosyaları kendisi güncelleyebilir: "bugün öğrendiğin şeyi doğru dosyaya kaydet" dersiniz. Bu yapıya zaman zaman "şirket beyni" denir. Sohbet kullanıcısı için gerekli değildir: orada proje dosyaları aynı işi görür.

### Oturum İçi Bağlam

O konuşmada paylaştığınız belgeler, veri ve anlık talimatlar. Konuşma bitince kaybolur; kalmasını istiyorsanız profil talimatına, projeye ya da klasördeki dosyaya aktarın.

## Pratik Örnek: Satış Yöneticisi

Tolga, Delta Endüstri'de satış yöneticisi. Sohbette ve masaüstünde çalışıyor.

**Profil talimatı (her sohbette):** ad, pozisyon, şirket; ton "profesyonel, mühendis dostu"; kural "her zaman taslağı göster, göndermeden önce".

**Proje: XYZ Gıda (müşteriye özel):** 3 yıllık müşteri, karar verici Ahmet Bey, son ilgi SCADA güncellemesi; bu müşteriyle ton daha resmi.

**Teklif klasörü, içinde CLAUDE.md (Cowork):** teklif formatı, fiyat tablosu kuralları, aktif fırsat listesi. İlk mesajda "talimatımı 3 maddede özetle" diye test ediyor; "göndermeden önce taslağı göster" kuralı ayrıca profil talimatında da duruyor.

**Oturum içi:** bugünkü teklif dosyası ve Ahmet Bey'in dün söylediği "bütçe Nisan'da belirlenecek".

Sonuç: Claude ilk dakikadan itibaren Tolga'nın, XYZ Gıda'nın ve Delta Endüstri'nin bağlamında çalışır.

## Başlangıç Önerisi

**Hafta 1-2:** Yalnızca profil talimatıyla başlayın (masaüstünde klasörle çalışıyorsanız klasöre aynı metni CLAUDE.md olarak koyun). Sürekli güncelleyerek büyütün.

**Hafta 3-4:** İlk projenizi oluşturun; haftada en az bir kez döndüğünüz bir müşteri ya da konu seçin.

**Ay 2-3:** İhtiyaç hissederseniz `memory/` klasörünü kurun.

Aceleniz yoksa her seviye doğal olarak gelir.

## Geliştiriciler için: Claude Code'da CLAUDE.md

> Bu wiki iş kullanıcıları için yazılmıştır; bu kutu yalnızca terminalde Claude Code kullananlara. Claude Code CLAUDE.md'yi bir hiyerarşi olarak okur: yönetilen politika, kullanıcı dosyası (`~/.claude/CLAUDE.md`), proje dosyası (`./CLAUDE.md`), kişisel `./CLAUDE.local.md`. Çalışma dizininin üstündekiler açılışta, alt klasörlerdekiler Claude orada dosya açınca yüklenir; hepsi birleştirilir, biri ötekini ezmez. `@yol/dosya` ile içe aktarma en çok 4 atlama derinliğindedir. Kökte CLAUDE.md yoksa AGENTS.md okunur. Claude Code'un kendi otomatik hafızası da ayrıdır ve bilgisayara yereldir: CLAUDE.md'yi siz yazarsınız, otomatik hafızayı Claude. Ayrıntı için Claude Code belgelerine bakın.

## İlgili Sayfalar

- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Kavram ve nerede çalıştığı
- [CLAUDE.md Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/): Beş bölümlü metin ve şablon
- [CLAUDE.md Örnekleri](/wiki/claude-md/ornekler/): Roller için hazır örnekler
- [Hata Ayıklama](/wiki/claude-md/hata-ayiklama/): Yazdım ama okunmadı
- [Takım CLAUDE.md](/wiki/claude-md/takim-claude-md/): Şirket geneli kural seti
- [Projects (claude.ai)](/wiki/araclar/projects/): Proje talimatı ve dosyaları
- [Memory](/wiki/yetenekler/memory/): Claude'un yerleşik hafızası
- [Skills](/wiki/yetenekler/skills/): Görev bazlı biçim ve uzmanlık paketleri
