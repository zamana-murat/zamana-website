---
title: "Memory Yönetimi — Claude'un Dört Hafıza Katmanı"
description: "CLAUDE.md, Cowork Projects, Memory skill ve oturum içi bağlam — Claude'un farklı hafıza mekanizmalarını bir arada kullanmak."
tags:
  - claude-md
  - memory
  - hafiza
  - bilgi-tabani
---

**Claude varsayılan olarak stateless çalışır** — her oturum sıfırdan başlar, önceki oturumu hatırlamaz. Bu bir tasarım tercihidir, ve bir iş kullanıcısı için aktif olarak yönetilmesi gereken bir kısıttır.

Neyse ki Claude'un hafıza olarak davranan birkaç mekanizması vardır. Bu sayfada **dört hafıza katmanını** birlikte kullanmayı anlatıyoruz. İyi yönetildiğinde Claude ekibinizin aylardır size eşlik eden bir meslektaşı gibi davranır.

## Temel Metafor

Önce bir zihin çerçevesi:

> **Claude'u her gece geceyarısı hafızası silinen harika bir meslektaş olarak düşünün. Sizin işiniz, geceyarısından önce önemli şeyleri yazmaktır. Ertesi sabah bunları okur ve bildiğini bilir gibi davranır.**

CLAUDE.md, Projects ve memory/ klasörü — bunlar o "geceyarısı notları" nın farklı formlarıdır. Ne kadar çok yazarsanız, Claude o kadar akıllı hale gelir — kalıcı olarak.

## Dört Hafıza Katmanı

### Katman 1 — CLAUDE.md (Her Zaman Açık Bağlam)

**Nerede yaşar:** Workspace klasörünüzün kök dizini.
**Ne zaman okunur:** Her Cowork oturumunun başında, otomatik.
**İçerik:** Değişmeyen gerçekler — kim olduğunuz, şirketiniz, rolünüz, tercihleriniz, terminolojiniz.

Bu en temel ve en kritik katmandır. Zamana eğitiminde ilk oturumda kurulur. Detay: [CLAUDE.md Nedir?](nedir/) ve [CLAUDE.md Nasıl Yazılır?](nasil-yazilir/).

**Güncelleme sıklığı:** Bir şey değiştiğinde. Bazı çalışanlarda bu ayda bir olur, bazılarında haftada birkaç kez.

### Katman 2 — Cowork Projects (Oturum Arası Hafıza)

**Nerede yaşar:** Bir Cowork Project'in içinde.
**Ne zaman okunur:** O projeye girdiğinizde otomatik aktif.
**İçerik:** O projeye özgü bilgi — önceki kararlar, tartışılan konular, kurulan bağlam, tercih edilen yaklaşımlar.

CLAUDE.md genel tarzınızı tarif eder. Project'in kendi hafızası ise **o projeye özgü** detayları taşır. "Şirket" vs "Bu müşteri" ayrımı gibi.

**Örnek:**

- Ana CLAUDE.md'niz: "Ben satış yöneticisiyim, müşterilerimle çalışırken..."
- "XYZ Gıda" Project'i: "Bu müşteriyle 3 yıldır çalışıyoruz, kilit karar verici Ahmet Bey, bütçe sınırları dar, teknik terminolojiye çok açık değiller..."

Claude o Project'e girdiğinde iki katmanı da birleştirir.

**Güncelleme sıklığı:** Her oturumun sonunda Claude'a "bugün neyi öğrendik, Project bilgi tabanına ekle" demeye alışın.

### Katman 3 — Memory Skill (Yapılandırılmış Bilgi Tabanı)

**Nerede yaşar:** `memory/` klasörü (workspace içinde).
**Nasıl çalışır:** `productivity:memory-management` skill'i devreye girdiğinde aktif.
**İçerik:** İki katmanlı yapılandırılmış bilgi.

İki katman vardır:

- **CLAUDE.md** → çalışan hafıza (güncel odak, aktif projeler, anlık bağlam)
- **memory/ klasörü** → uzun vadeli bilgi tabanı (şirket organizasyon şeması, ekip yapısı, ürün kataloğu, müşteri profilleri, standart terminoloji)

**Tipik `memory/` içeriği:**

```
memory/
├── about-company.md      — Şirket ne yapar, ürünler, pazarlar, ana müşteriler
├── team.md               — Organizasyon şeması, kilit kişiler, roller, ilişkiler
├── brand-voice.md        — Ton, dil, kaçınılması gerekenler
├── working-preferences.md — Nasıl çalışmayı seviyorum, çıktı formatları, öncelikler
└── active-projects.md    — Aktif projeler, durum, son tarihler
```

Bu dosyalardan herhangi birini **Claude oturum sırasında kendisi güncelleyebilir** — çalışan "bugün öğrendiğin şeyi doğru klasöre kaydet" der, Claude uygun dosyaya yazar.

Bu, Zamana'nın **"şirket beyni" (company brain)** dediği yapıdır. İleri seviye kullanıcılar için güçlü bir yapı.

### Katman 4 — Oturum İçi Bağlam

**Nerede yaşar:** O anki konuşmanın kendisi.
**Ne zaman okunur:** Sohbet süresince.
**İçerik:** O sohbette paylaştığınız belgeler, veri, anlık bilgi.

Bu katman **oturum süresince** yaşar. Konuşma bittiğinde kaybolur (eğer bilinçli olarak CLAUDE.md'ye veya Project'e aktarmadıysanız).

Her oturumda Claude'a yüklediğiniz dosyalar, konuşmanın ilerleyen kısımlarında söylediğiniz bağlam, anlık talimatlar — hepsi bu katmandadır.

## Katmanlar Arasında Nasıl Seçim Yaparım?

**Basit bir karar ağacı:**

| Bilgi tipi | Uygun katman |
|---|---|
| Hep doğru olan, her oturumda geçerli ("ben satış yöneticisiyim") | **CLAUDE.md** |
| Belirli bir projeye özgü, o projede hep geçerli | **Cowork Project** |
| Büyük, yapılandırılmış, çok sayıda kategoriye bölünmüş | **memory/ klasörü** |
| Tek seferlik, bu sohbete özgü | **Oturum içi** |

**Basit bir kural:** Bir bilgiyi Claude'a iki kez söylediyseniz, onu yukarıdaki katmanlardan birine yazmanın zamanı gelmiştir. İlk iki aya kadar çoğu şey CLAUDE.md'ye gider. Olgunlaşan çalışan üçüncü aydan itibaren Project'leri ve memory/ klasörünü etkin kullanmaya başlar.

## Pratik Örnek — Satış Yöneticisi

Ahmet, satış yöneticisi. İlk oturumunu yapıyor. Hafıza hiyerarşisi şöyle:

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
- Bugünkü e-mail konusu
- Ahmet Bey'in dün söylediği: "bütçe Nisan'da belirlenecek"

Hafızanın dört katmanı birlikte çalışır. Sonuç: Claude ilk dakikadan itibaren Ahmet'in bağlamında, XYZ Gıda'nın bağlamında, Delta Endüstri'nin bağlamında çalışır.

## Gelecek — Knowledge Bases (Bilgi Kutuları)

Anthropic, Cowork için **Knowledge Bases (KB)** adı verilen yeni bir özellik geliştiriyor. Bu özellik:

- Kalıcı, konu-spesifik hafıza konteynerleri sağlar
- Claude otomatik olarak referans verir ve günceller
- Kullanıcı tercihleri, kararlar, dersler ve olguları kendi kendini koruyan bilgi depoları olarak saklar
- Manuel hafıza yönetimini birçok senaryoda gereksiz kılar

Şu an memory skill'inin manuel yaptığını KB'ler otomatik yapacak. Yayınlandığında bu sayfayı güncelleriz.

## Başlangıç Önerisi

Her çalışan için evrim:

**Hafta 1-2:** Sadece CLAUDE.md ile çalışın. Sürekli güncelleyerek büyütün.

**Hafta 3-4:** İlk Project'inizi oluşturun — haftada en az bir konuda tekrar tekrar konuştuğunuz bir konu. O Project'e özgü detayları oraya yazın.

**Ay 2-3:** İhtiyaç hissederseniz memory skill'ini devreye alın. `memory/` klasöründe en az `team.md` ve `about-company.md` oluşturun.

**Ay 3+:** Zamanla bilgi tabanınız doğal olarak büyür. Claude'a "öğrendiğini doğru yere yaz" demeyi öğrenirsiniz.

Aceleniz yoksa her seviye doğal olarak gelir. Baskı yapmayın.

## İlgili Sayfalar

- [CLAUDE.md Nedir?](nedir/) — Katman 1 temeli
- [CLAUDE.md Nasıl Yazılır?](nasil-yazilir/) — Pratik rehber
- [CLAUDE.md Örnekleri](ornekler/) — Roller için hazır örnekler
- [Projects (claude.ai)](../araclar/projects/) — Katman 2 detayı
- [Skills](../yetenekler/skills/) — Memory skill dahil uzmanlık paketleri

