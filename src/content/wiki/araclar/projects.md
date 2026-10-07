---
title: "Projects (claude.ai): Kalıcı Çalışma Alanları"
seoTitle: "Claude Projects Nedir? Kurulum ve Örnekler"
description: "Claude Projects ile her sohbette tekrar eden bağlamı kalıcı yapın: bilgi tabanı, özel talimatlar, ekip paylaşımı, plan farkları ve Türkçe örnekler."
tags:
  - araclar
  - projects
  - claude-chat
  - bilgi-tabani
lastUpdated: "2026-10-06"
---

**Projects, claude.ai'de kalıcı ve organize çalışma alanları oluşturan özelliktir.** Her sohbetin sıfırdan başladığı normal bir konuşmanın aksine, bir Project Claude'a her seferinde devam eden bağlam sağlar, **bilgi tabanı** ve **özel talimatlar** yoluyla.

Tek cümlede: bir Project, **"aynı bağlamda konuşmak istediğim her sohbetin o bağlamda başlaması"** demektir.

> **Yeni yapı duyuruldu (17 Eylül 2026):** Anthropic Projects'in baştan tasarlandığını duyurdu: yeni projelerde birden fazla konuşmanın paralel çalışması ve ortak hafıza anlatılıyor. Erişimin kademeli açıldığı ve mevcut projelerin çalışmaya devam ettiği bildirildi; kendi hesabınızda hangi yapıyı gördüğünüzü kontrol edin. Bu sayfa mevcut (klasör mantığındaki) yapıyı anlatır. Ayrıntı ve kaynak: [Projects yeniden tasarlandı](/haberler/2026-09-17-projects-yeniden-tasarlandi/).

## Bir Project Nelerden Oluşur?

### Bilgi Tabanı (Knowledge Base)

O projeye dosya, belge ve metin yüklersiniz, Claude bu içeriği projedeki **her sohbette** referans alır. Bir kere yüklersiniz, Claude hatırlar.

Faydalı kullanımlar:

- Şirket dokümanları
- Ürün katalogları, teknik özellikler
- Marka kılavuzları
- Araştırma materyalleri
- Düzenleyici çerçeveler (KVKK, TTK metinleri)
- Kişisel referans notları

Ücretli planlarda bilgi tabanı **RAG (Retrieval Augmented Generation)** kullanır, yani büyük hacimli içeriği verimli şekilde arar ve ilgili kısımları Claude'a getirir. Yüzlerce sayfa belge yükleyebilirsiniz. Proje dosyası başına sınır 30 MB; dosya sayısı sınırsızdır ama içerik bağlama sığmalıdır, sığmayınca Claude RAG moduna geçer.

### Özel Talimatlar (Custom Instructions)

Proje düzeyindeki talimatlar Claude'a bu projede nasıl davranması gerektiğini söyler: ton, rol, kısıtlar, "her zaman yap" ve "asla yapma" kuralları. Projedeki her yeni sohbet bu talimatlarla başlar. Bağlamı yeniden açıklamazsınız; zaten oradadır.

### Ayrı Konuşma Geçmişi

Her projenin kendi izole sohbet geçmişi vardır. İş konuya, müşteriye veya proje tipine göre organize kalır. İlgisiz projeler arasında veri sızması olmaz.

### Paylaşılan Projeler (Team ve Enterprise)

Projects, meslektaşlarınızla belirli izin seviyelerinde paylaşılabilir:

- **"Kullanabilir"** (Can use): sadece okur ve sohbet eder
- **"Düzenleyebilir"** (Can edit): içerik ekler/değiştirir, erişim yönetir

Birden fazla ekip üyesi aynı anda belge katabilir. Bu özellik Projects'i **hafif bir ekip bilgi tabanına** dönüştürür.

## Projects, Klasörde CLAUDE.md ve Profil Talimatı

Üç yer de "kalıcı bağlam" ihtiyacını çözer, ama farklı yerlerde yaşar ve farklı yerlerde okunur. Sohbet CLAUDE.md dosyasını okumaz; sohbetteki karşılığı proje talimatı ve profil talimatıdır:

| Özellik | Proje talimatı (claude.ai) | Klasörde CLAUDE.md (yerel Cowork) | Profil talimatı |
|---|---|---|---|
| Nerede durur | Projenin ayarlarında | Çalışma klasöründe, dosya olarak | Settings > General > "Instructions for Claude" |
| Nerede geçerli | Sohbet ve o projedeki oturumlar | Yerel Cowork oturumu (masaüstü, klasör bağlı); bulut oturumunda okunduğu belgelenmemiştir | Tüm sohbetler ve Cowork, her yerde |
| Bilgi tabanı / yüklenen dosyalar | ✅ | ✅ (klasördeki dosyalar) | Yok, yalnız kısa metin |
| Tarayıcıda çalışır (kurulum yok) | ✅ | | ✅ |
| Plugins, masaüstü klasörlerine erişim | | ✅ | |
| Yerel script ve otomasyon | | ✅ | |
| Ekiple paylaşılır | ✅ (Team/Enterprise) | Manuel dosya paylaşımı | Hayır, kişiseldir |
| RAG ile ölçeklenir | ✅ (ücretli planlar) | Manuel yönetim | Hayır |

Skills, kod çalıştırma ve dosya üretimi (.docx / .pptx / .xlsx) bu üç yerden birine bağlı değildir; kullandığınız ortamda (claude.ai ya da Cowork) açıksa çalışır. Kod çalıştırma claude.ai'de tüm planlarda vardır, Team ve Enterprise'ta yönetici kapatabilir.

### Hangisini Ne Zaman?

- **Proje talimatı**: tarayıcı merkezli, paylaşım odaklı, çok sayıda ekip üyesinin aynı bağlama erişmesi gerektiğinde
- **Klasörde CLAUDE.md**: tek çalışanın masaüstü merkezli, yerel klasör, plugin ve otomasyon gerektiren yoğun Cowork kullanımı için
- **Profil talimatı**: nerede çalışırsanız çalışın geçmesini istediğiniz kısa kurallar için (dil, ton, rol)

Üçü birlikte de kullanılır. Bir çalışan masaüstünde Cowork + klasörde CLAUDE.md ile çalışırken, ekibin genelinin eriştiği bilgileri Projects'te tutabilir. Yerlerin tam karşılaştırması için [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/) sayfasına bakın.

## Pratik Project Örnekleri

### Satış Ekibi Projesi

**Yüklenenler:**

- Ürün kataloğu ve teknik özellikler
- Fiyat listesi (güncel)
- Rakip analiz notları
- Teklif şablonu
- Müşteri itiraz kütüphanesi

**Sonuç:** Her satış temsilcisinin o projedeki Claude sohbeti, şirketin tekliflerine tam bağlamla başlar. Tekrar tekrar açıklama gerekmez.

### İhracat Projesi

**Yüklenenler:**

- Standart proforma fatura ve niyet mektubu (LOI) şablonları
- Hedef pazara göre sevkiyat ve ödeme koşulları notları
- Müşteri bazlı geçmiş teklif ve yazışma özetleri
- Teslim şekli (Incoterms) hatırlatma notu

**Sonuç:** Yeni bir alıcı için proforma ya da LOI taslağı şirketin kendi kalıbıyla başlar; her seferinde koşulları baştan anlatmazsınız. Hukuki ve gümrük yönü yine uzman kontrolünden geçer.

### Hukuk Projesi

**Yüklenenler:**

- Şirketin standart sözleşmeleri
- KVKK politikası
- Tercih edilen sözleşme maddeleri kütüphanesi
- İç hukuki görüş şablonları

**Sonuç:** Her sözleşme incelemesi şirketin hukuki standartları yüklü olarak başlar. "Bu bizim standart maddemizle uyumlu mu?" sorusu anında cevaplanır.

### İnsan Kaynakları Projesi

**Yüklenenler:**

- İş tanımı kütüphanesi
- Çalışan el kitabı
- İş Kanunu referans notları (fazla mesai, izin, ihbar süreleri gibi sık sorulanlar)
- Şirket iç prosedürleri

**Sonuç:** Her İK görevi şirkete özel bağlamda çalışır. Jenerik tavsiye yerine şirkete özel çıktı üretilir. Mevzuat yorumu için yüklediğiniz notların güncelliğini siz tutarsınız.

### Pazarlama Projesi

**Yüklenenler:**

- Marka ses kılavuzu
- Geçmiş kampanya arşivi
- Ürün mesaj dokümanları
- Hedef kitle araştırmaları

**Sonuç:** Her içerik taslağı marka standartlarıyla otomatik uyumlu olur. Jenerik pazarlama dili yerine şirketin kendi sesi konuşur.

## Hangi Planda Ne Kadar?

| Plan | Projects erişimi |
|---|---|
| **Free** | 5 projeye kadar; standart bilgi tabanı boyutu |
| **Pro / Max** | Proje sayısı için yayımlanmış üst sınır yok; bilgi tabanı bağlam sınırına yaklaşınca Claude RAG moduna geçer ve kapasiteyi 10 kata kadar artırır |
| **Team** | Pro / Max'teki RAG + **paylaşılan projeler, izin kontrolleri ile** |
| **Enterprise** | Team özellikleri + kurum çapında görünürlük, SSO, yönetici kontrolleri |

Yeni kullanıcılara **ilk ay Max 5x** öneriyoruz; bu bir öneridir, zorunlu değildir. Pro ile başlayıp gerektiğinde yükseltmek de olur. İkinci aydan itibaren kullanım ritmine göre Pro'ya inilebilir; Projects Pro'da da tam çalışır.

## İlk Project'inizi Nasıl Kurarsınız?

1. [claude.ai](https://claude.ai) → sol menü → **Projects** → **+ Create project**
2. Projeye anlamlı bir ad verin ("İhracat Departmanı", "Q2 Pazarlama" gibi)
3. **Custom instructions** alanına nasıl davranmasını istediğinizi yazın, kim olduğunuz, bağlam, ton, kurallar
4. **Knowledge base**'e ilgili dosyaları yükleyin: şirket belgeleri, kılavuzlar, örnekler
5. Projenin içinde yeni bir sohbet başlatın: Claude artık tüm bağlamla konuşur

İlk denemede 3-5 dosya yükleyin, yeter. Zamanla ekleyebilirsiniz.

**Süre:** ilk projenin kurulumu (talimat yazma ve dosya yükleme) 15-30 dakika. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

## İlgili Sayfalar

- [Claude Chat](/wiki/araclar/claude-chat/): Projects'in içinde yaşadığı arayüz
- [Skills](/claude/skills/): Projects içinde de kullanılabilen skill'lerin tanıtımı
- [Sohbet Geçmişi ve Arama](/wiki/araclar/gecmis-ve-arama/): Sohbetleri projelerle organize etmek
- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Yerel Cowork'te klasörden okunan kalıcı bağlam dosyası
- [Claude Desktop](/wiki/araclar/claude-desktop/): Cowork ve CLAUDE.md için masaüstü uygulaması
- [Araçlar Ana Sayfası](/wiki/araclar/): Tüm Claude araçlarının karar tablosu

