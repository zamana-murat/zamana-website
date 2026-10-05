---
title: "Memory Yönetimi: Claude'un Dört Hafıza Katmanı"
description: "CLAUDE.md, Projects, memory/ klasörü ve oturum içi bağlam, Claude'un yerleşik hafızasıyla birlikte: farklı hafıza mekanizmalarını bir arada kullanmak."
tags:
  - claude-md
  - memory
  - hafiza
  - bilgi-tabani
lastUpdated: "2026-10-05"
---

**Her konuşma kendi bağlamıyla başlar**: neyin bir sonraki oturuma taşınacağı, hangi hafıza mekanizmalarını kullandığınıza bağlıdır. Bu, bir iş kullanıcısı için bilinçli yönetilmesi gereken bir konudur.

Claude'un hafıza olarak davranan birkaç mekanizması vardır. Bu sayfada **sizin yönettiğiniz dört katmanı** birlikte kullanmayı anlatıyoruz; Claude'un kendi tuttuğu yerleşik hafıza ise ayrı bir bölümde. İyi yönetildiğinde Claude, aylardır size eşlik eden bir meslektaş gibi davranır.

## Temel Metafor

Önce bir zihin çerçevesi:

> **Claude'u her gece geceyarısı hafızası silinen harika bir meslektaş olarak düşünün. Sizin işiniz, geceyarısından önce önemli şeyleri yazmaktır. Ertesi sabah bunları okur ve bildiğini bilir gibi davranır.**

Claude'un yerleşik hafızası (aşağıda ayrıca anlatılıyor) bu meslektaşa küçük bir otomatik not defteri verir, ama neyi yazacağına o karar verir. CLAUDE.md, Projects ve memory/ klasörü ise sizin yazdığınız "geceyarısı notlarının" farklı formlarıdır. Ne kadar çok yazarsanız, Claude o kadar isabetli çalışır.

## Dört Hafıza Katmanı

### Katman 1: CLAUDE.md (Her Zaman Açık Bağlam)

**Nerede yaşar:** Workspace klasörünüzün kök dizini.
**Ne zaman okunur:** Claude'un klasörle çalıştığı (Cowork, Claude Code) her oturumun başında, otomatik.
**İçerik:** Değişmeyen gerçekler: kim olduğunuz, şirketiniz, rolünüz, tercihleriniz, terminolojiniz.

Bu en temel ve en kritik katmandır. Detay: [CLAUDE.md Nedir?](/wiki/claude-md/nedir/) ve [CLAUDE.md Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/).

**Güncelleme sıklığı:** Bir şey değiştiğinde. Bazı çalışanlarda bu ayda bir olur, bazılarında haftada birkaç kez.

### Katman 2: Projects (Oturum Arası Hafıza)

**Nerede yaşar:** Bir Project'in içinde ([Projects](/wiki/araclar/projects/)).
**Ne zaman okunur:** O projeye girdiğinizde otomatik aktif.
**İçerik:** O projeye özgü bilgi, önceki kararlar, tartışılan konular, kurulan bağlam, tercih edilen yaklaşımlar.

CLAUDE.md genel tarzınızı tarif eder. Project'in kendi bağlamı ise **o projeye özgü** detayları taşır. "Şirket" vs "Bu müşteri" ayrımı gibi.

> **Güncel durum:** Projects 17 Eylül 2026'da yeniden tasarlandı (beta, kademeli açılıyor). Yeni yapıda proje, paralel çalışan konuşmalardan ve bir koordinatörden oluşuyor; her konuşma projenin **ortak hafızasına** katkı yapıyor, kararlar ve tercihler orada hatırlanıyor. Pro ve Max'teki mevcut projeler olduğu gibi çalışmaya devam ediyor. Aşağıdaki anlatım, bilgi tabanı ve talimat tutan klasik proje için geçerlidir; yeni yapıda ortak hafıza bu işin bir kısmını sizin yerinize yapar. Ayrıntı: [Projects yeniden tasarlandı](/haberler/2026-09-17-projects-yeniden-tasarlandi/).

**Örnek:**

- Ana CLAUDE.md'niz: "Ben satış yöneticisiyim, müşterilerimle çalışırken..."
- "XYZ Gıda" Project'i: "Bu müşteriyle 3 yıldır çalışıyoruz, kilit karar verici Ahmet Bey, bütçe sınırları dar, teknik terminolojiye çok açık değiller..."

Claude o Project'e girdiğinde iki katmanı da birleştirir.

**Güncelleme sıklığı:** Klasik projede bilgi tabanını siz güncellersiniz. Her oturumun sonunda Claude'a "bugün neyi öğrendik, özetle" deyip çıkan özeti proje bilgi tabanına veya talimatlarına eklemeye alışın.

### Katman 3: memory/ Klasörü (Yapılandırılmış Bilgi Tabanı)

**Nerede yaşar:** `memory/` klasörü (workspace içinde).
**Nasıl çalışır:** Bir bellek yönetimi skill'i ile ya da klasörü ve dosyaları kendiniz açarak çalışır. Skill kurulu değilse CLAUDE.md'ye "uzun vadeli bilgi için `memory/` klasörüne bak" satırı eklemeniz yeterlidir.
**İçerik:** Uzun vadeli, yapılandırılmış bilgi.

CLAUDE.md ile memory/ klasörü arasındaki iş bölümü şöyledir:

- **CLAUDE.md** → çalışan hafıza (güncel odak, aktif projeler, anlık bağlam)
- **memory/ klasörü** → uzun vadeli bilgi tabanı (şirket organizasyon şeması, ekip yapısı, ürün kataloğu, müşteri profilleri, standart terminoloji)

**Tipik `memory/` içeriği:**

```
memory/
├── about-company.md      # Şirket ne yapar, ürünler, pazarlar, ana müşteriler
├── team.md               # Organizasyon şeması, kilit kişiler, roller, ilişkiler
├── brand-voice.md        # Ton, dil, kaçınılması gerekenler
├── working-preferences.md # Nasıl çalışmayı seviyorum, çıktı formatları, öncelikler
└── active-projects.md    # Aktif projeler, durum, son tarihler
```

Bu dosyalardan herhangi birini **Claude oturum sırasında kendisi güncelleyebilir**: çalışan "bugün öğrendiğin şeyi doğru dosyaya kaydet" der, Claude uygun dosyaya yazar.

Bu yapıya zaman zaman **"şirket beyni" (company brain)** denir. İleri seviye kullanıcılar için güçlü bir kurulum.

### Katman 4: Oturum İçi Bağlam

**Nerede yaşar:** O anki konuşmanın kendisi.
**Ne zaman okunur:** Sohbet süresince.
**İçerik:** O sohbette paylaştığınız belgeler, veri, anlık bilgi.

Bu katman **oturum süresince** yaşar. Konuşma bittiğinde kaybolur (eğer bilinçli olarak CLAUDE.md'ye veya Project'e aktarmadıysanız).

Her oturumda Claude'a yüklediğiniz dosyalar, konuşmanın ilerleyen kısımlarında söylediğiniz bağlam ve anlık talimatlar bu katmandadır.

## Yerleşik Hafıza: Beşinci, Otomatik Katman

Bu dört katmanın yanında Claude'un kendi **yerleşik hafızası (memory)** da çalışır. Siz yazmazsınız; Claude konuşmalardan öğrendiklerini kategorili girdiler halinde biriktirir. Hafıza 10 Temmuz 2026'da kategorili girdilere dönüştü ve 25 Ağustos 2026'dan beri sohbet ve Cowork arasında ortaktır. Free, Pro ve Max'te varsayılan olarak açıktır, Team ve Enterprise'ta varsayılan olarak kapalıdır. Ayrıntı: [Memory](/wiki/yetenekler/memory/).

Pratik ayrım şudur: **kesin ve değişmez kuralı** CLAUDE.md'ye yazın, çünkü onu siz görür ve siz düzenlersiniz. Yerleşik hafıza, "Claude beni zamanla tanısın" kolaylığıdır; kritik talimatı ona emanet etmeyin.

## Katmanlar Arasında Nasıl Seçim Yaparım?

**Basit bir karar ağacı:**

| Bilgi tipi | Uygun katman |
|---|---|
| Hep doğru olan, her oturumda geçerli ("ben satış yöneticisiyim") | **CLAUDE.md** |
| Belirli bir projeye özgü, o projede hep geçerli | **Project** |
| Büyük, yapılandırılmış, çok sayıda kategoriye bölünmüş | **memory/ klasörü** |
| Tek seferlik, bu sohbete özgü | **Oturum içi** |

**Basit bir kural:** Bir bilgiyi Claude'a iki kez söylediyseniz, onu yukarıdaki katmanlardan birine yazmanın zamanı gelmiştir. İlk haftalarda çoğu şey CLAUDE.md'ye gider. Olgunlaşan çalışan üçüncü haftadan itibaren Project'leri, ikinci aydan itibaren memory/ klasörünü etkin kullanmaya başlar (aşağıdaki "Başlangıç Önerisi" bölümüne bakın).

## Pratik Örnek: Satış Yöneticisi

Tolga, satış yöneticisi. İlk oturumunu yapıyor. Hafıza hiyerarşisi şöyle:

**CLAUDE.md (genel)**
- İsim, pozisyon, şirket
- Satış sürecim, tercih ettiğim teklif formatı
- Ton: profesyonel, mühendis dostu
- "Her zaman taslağı göster, göndermeden önce"

**Project: XYZ Gıda (müşteriye özel)**
- 3 yıllık müşteri
- Kilit karar verici: Ahmet Bey
- Son dönem ilgileri: SCADA güncelleme
- Bu müşteriyle ton: daha resmi, teknik ayrıntı ağırlıklı

**memory/ klasörü (şirket beyni)**
- `about-company.md`: Delta Endüstri ne yapar, ürün kategorileri
- `team.md`: Satış ekibi yapısı, kim hangi bölgede
- `brand-voice.md`: Dış iletişimde dilimiz
- `active-projects.md`: Tüm aktif fırsatlar + durum

**Oturum içi (bu sohbet)**
- Şu an elimdeki bu özel teklif dosyası
- Bugünkü e-posta konusu
- Ahmet Bey'in dün söylediği: "bütçe Nisan'da belirlenecek"

Hafızanın dört katmanı birlikte çalışır. Sonuç: Claude ilk dakikadan itibaren Tolga'nın bağlamında, XYZ Gıda'nın bağlamında, Delta Endüstri'nin bağlamında çalışır.

## Katmanlar Birbirine Yaklaşıyor

Manuel hafıza yönetiminin yükü zamanla azalıyor: yerleşik hafıza ile yeni proje hafızası (ikisi de yukarıda anlatıldı) işin bir kısmını sizin yerinize yapıyor. Yine de kesin kuralları, marka sesini ve "asla yapma" listesini yazılı ve sizin kontrolünüzde tutmak (CLAUDE.md) bu değişimlerden etkilenmeyen bir alışkanlıktır.

## Başlangıç Önerisi

Her çalışan için evrim:

**Hafta 1-2:** Sadece CLAUDE.md ile çalışın. Sürekli güncelleyerek büyütün.

**Hafta 3-4:** İlk Project'inizi oluşturun; haftada en az bir kez döndüğünüz bir konu veya müşteri seçin. O Project'e özgü detayları oraya yazın.

**Ay 2-3:** İhtiyaç hissederseniz `memory/` klasörünü kurun. Klasörde en az `team.md` ve `about-company.md` oluşturun.

**Ay 3+:** Zamanla bilgi tabanınız doğal olarak büyür. Claude'a "öğrendiğini doğru yere yaz" demeyi öğrenirsiniz.

Aceleniz yoksa her seviye doğal olarak gelir. Baskı yapmayın.

## İlgili Sayfalar

- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Katman 1 temeli
- [CLAUDE.md Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/): Pratik rehber
- [CLAUDE.md Örnekleri](/wiki/claude-md/ornekler/): Roller için hazır örnekler
- [Projects (claude.ai)](/wiki/araclar/projects/): Katman 2 detayı
- [Skills](/wiki/yetenekler/skills/): Memory skill dahil uzmanlık paketleri

