---
title: Projects (claude.ai) — Kalıcı Çalışma Alanları
description: Claude.ai içindeki Projects özelliği, her sohbette tekrar eden bağlamı kalıcı hale getirir. Bilgi tabanı, özel talimatlar ve ekip paylaşımı.
tags:
  - araclar
  - projects
  - claude-chat
  - bilgi-tabani
---

**Projects, Claude Chat içinde kalıcı ve organize çalışma alanları oluşturan özelliktir.** Her sohbetin sıfırdan başladığı normal bir konuşmanın aksine, bir Project Claude'a her seferinde devam eden bağlam sağlar — **bilgi tabanı** ve **özel talimatlar** yoluyla.

Tek cümlede: bir Project, **"aynı bağlamda konuşmak istediğim her sohbetin o bağlamda başlaması"** demektir.

## Bir Project Nelerden Oluşur?

### Bilgi Tabanı (Knowledge Base)

O projeye dosya, belge ve metin yüklersiniz — Claude bu içeriği projedeki **her sohbette** referans alır. Bir kere yüklersiniz, Claude hatırlar.

Faydalı kullanımlar:

- Şirket dokümanları
- Ürün katalogları, teknik özellikler
- Marka kılavuzları
- Araştırma materyalleri
- Düzenleyici çerçeveler (KVKK, TTK metinleri)
- Kişisel referans notları

Ücretli planlarda bilgi tabanı **RAG (Retrieval Augmented Generation)** kullanır — yani büyük hacimli içeriği verimli şekilde arar ve ilgili kısımları Claude'a getirir. Yüzlerce sayfa belge yükleyebilirsiniz.

### Özel Talimatlar (Custom Instructions)

Proje düzeyindeki talimatlar Claude'a bu projede nasıl davranması gerektiğini söyler — ton, rol, kısıtlar, "her zaman yap" ve "asla yapma" kuralları. Projedeki her yeni sohbet bu talimatlarla başlar. Bağlamı yeniden açıklamazsınız; zaten oradadır.

### Ayrı Konuşma Geçmişi

Her projenin kendi izole sohbet geçmişi vardır. İş konuya, müşteriye veya proje tipine göre organize kalır. İlgisiz projeler arasında veri sızması olmaz.

### Paylaşılan Projeler (Team ve Enterprise)

Projects, meslektaşlarınızla belirli izin seviyelerinde paylaşılabilir:

- **"Kullanabilir"** (Can use) — sadece okur ve sohbet eder
- **"Düzenleyebilir"** (Can edit) — içerik ekler/değiştirir, erişim yönetir

Birden fazla ekip üyesi aynı anda belge katabilir. Bu özellik Projects'i **hafif bir ekip bilgi tabanına** dönüştürür.

## Projects vs CLAUDE.md (Cowork)

İki özellik de "kalıcı bağlam" ihtiyacını çözer, ama farklı yerlerde yaşarlar ve farklı güçleri vardır:

| Özellik | Projects (claude.ai) | CLAUDE.md (Cowork) |
|---|---|---|
| Kalıcı talimatlar | ✅ | ✅ |
| Bilgi tabanı / yüklenen dosyalar | ✅ | ✅ (workspace klasörü) |
| Tarayıcıda çalışır (kurulum yok) | ✅ | |
| Skills ve plugins ile çalışır | | ✅ |
| Otomasyon ve script çalıştırır | | ✅ |
| .docx / .pptx / .xlsx dosya üretir | | ✅ |
| Ekiple paylaşılır | ✅ (Team/Enterprise) | Manuel dosya paylaşımı |
| RAG ile ölçeklenir | ✅ (ücretli planlar) | Manuel yönetim |

### Hangisini Ne Zaman?

- **Projects** — tarayıcı merkezli, paylaşım odaklı, çok sayıda ekip üyesinin aynı bağlama erişmesi gerektiğinde
- **CLAUDE.md** — tek çalışanın masaüstü merkezli, yoğun Cowork kullanımı için

İkisi birlikte de kullanılır. Bir çalışan masaüstünde Cowork + CLAUDE.md ile çalışırken, ekibin genelinin eriştiği bilgileri Projects'te tutabilir.

## Pratik Project Örnekleri (Zamana Müşterileri İçin)

### Satış Ekibi Projesi

**Yüklenenler:**

- Ürün kataloğu ve teknik özellikler
- Fiyat listesi (güncel)
- Rakip analiz notları
- Teklif şablonu
- Müşteri itiraz kütüphanesi

**Sonuç:** Her satış temsilcisinin o projedeki Claude sohbeti, şirketin tekliflerine tam bağlamla başlar. Tekrar tekrar açıklama gerekmez.

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
- İş Kanunu referans notları
- Şirket iç prosedürleri

**Sonuç:** Her İK görevi şirkete özel bağlamda çalışır. Jenerik tavsiye yerine şirkete özel çıktı üretilir.

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
| **Pro / Max** | Sınırsız proje; RAG zenginleştirmeli bilgi tabanı (10× kapasite) |
| **Team** | Sınırsız + RAG + **paylaşılan projeler, izin kontrolleri ile** |
| **Enterprise** | Team özellikleri + kurum çapında görünürlük, SSO, yönetici kontrolleri |

Zamana eğitim programında çalışanlar **Max 5x plan ile ilk ay** başlar (zorunlu) — Projects'in tam özellikleri dahil hepsine erişim var. İkinci aydan itibaren kullanım ritmine göre Pro'ya inilebilir; Projects Pro'da da tam çalışır.

## İlk Project'inizi Nasıl Kurarsınız?

1. [claude.ai](https://claude.ai) → sol menü → **Projects** → **+ Create project**
2. Projeye anlamlı bir ad verin ("İhracat Departmanı", "Q2 Pazarlama" gibi)
3. **Custom instructions** alanına nasıl davranmasını istediğinizi yazın — kim olduğunuz, bağlam, ton, kurallar
4. **Knowledge base**'e ilgili dosyaları yükleyin — şirket belgeleri, kılavuzlar, örnekler
5. Projenin içinde yeni bir sohbet başlatın — Claude artık tüm bağlamla konuşur

İlk denemede 3-5 dosya yükleyin, yeter. Zamanla ekleyebilirsiniz.

## İlgili Sayfalar

- [Claude Chat](claude-chat/) — Projects'in içinde yaşadığı arayüz
- [CLAUDE.md Nedir?](../claude-md/nedir/) — Cowork'teki kalıcı bağlam dosyası
- [Claude Desktop](claude-desktop/) — Cowork ve CLAUDE.md için masaüstü uygulaması
- [Araçlar Ana Sayfası](./) — Tüm Claude araçlarının karar tablosu

