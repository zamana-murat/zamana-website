---
title: Takım CLAUDE.md — Paylaşılan Kural Seti
description: "Şirket veya ekip içinde paylaşılan CLAUDE.md kullanımı. Sürüm yönetimi, kim editler, çakışmalar, onboarding'e dahil etme."
tags:
  - claude-md
  - takim
  - paylasimli
---

**[CLAUDE.md](nedir/) bireysel başlar, ama şirkette 6 kişi aynı yönergeyi paylaşmak istediğinde takım versiyonu gerekir.** Bu sayfa paylaşılan CLAUDE.md'nin nasıl kurulduğunu, kimin editlediğini, sürüm sorunlarının nasıl yönetildiğini anlatır.

## Bireysel mi Takım mı?

Çoğu şirkette **iki katman** birden vardır:

| Katman | Sahibi | Kapsam |
|---|---|---|
| **Şirket / Takım CLAUDE.md** | Yönetim / İK / takım lideri | Marka voice, KVKK kuralları, yasak kelimeler, müşteri tarzı |
| **Bireysel CLAUDE.md** | Çalışanın kendisi | Rol, kişisel tercihler, projeler, çalışma saatleri |

Bunlar çelişmemeli. Bireysel, takımı **tamamlar** — değiştirmez. Şirket "asla X yapma" diyorsa, çalışan kendi CLAUDE.md'sinde "ama bazen X yap" diyemez.

## Takım CLAUDE.md Ne İçerir?

Tipik bölümler:

### 1. Şirket Bağlamı

> *Biz [Şirket Adı]'yız. [Sektör]'de faaliyet gösteren [büyüklük] bir kurumuz. Müşterilerimiz [kategori]. Konumlanmamız [değer önerisi].*

Claude'un sektörel doğru hizalanması için temel.

### 2. Marka Voice

> *Yazışmalarımızda dürüst, doğrudan ve sıcak bir dil kullanırız. Pazarlama klişeleri, abartılı sıfatlar, "lider", "yenilikçi", "vizyoner" gibi içi boş kelimeler yasaktır. Müşteriye saygılı ama eşit konuşuruz.*

[Pazarlama departmanı](../departmanlar/pazarlama/) sayfasıyla uyumlu olmalı.

### 3. KVKK ve Veri Politikası

> *Müşteri kişisel verisi, ticari sırlar, hukuki süreç dosyaları Claude'a yüklenmez. Yüklenecek belgeler önce hassas bilgi açısından kontrol edilir.*

[Şirket içi politika](../temeller/sirket-ici-politika/) ve [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) sayfalarındaki politikayla tutarlı.

### 4. Sektör / Hukuk / Mevzuat Notları

> *Sözleşme örnekleri Türk Ticaret Kanunu çerçevesinde olmalı. ABD/AB hukuk sistemi referans alınmaz. Vergi rakamları için her seferinde güncel TCMB kuru kontrol edilir.*

### 5. Yaygın Görev Şablonları

> *Müşteri yanıtları için şu yapı kullanılır: 1) Selamlama, 2) Kısa onay, 3) Cevap, 4) Sıradaki adım, 5) Kapanış.*

[Şablon Kütüphanesi](sablon-kutuphanesi/) sayfasında genişletilebilir.

### 6. Yasak Kelimeler / Cümleler

> *"Lider çözümümüz", "yenilikçi yaklaşım", "vizyoner ekip", "pazarın lideri" — bu cümleler kullanılmayacak.*

Marka diliyle ilgili keskin sınırlar burada.

### 7. Şirket İçi Dil ve Akronimler

> *"PMV" = "Proje Müdürü Vekâleti", "K1 / K2" = İlk ve ikinci çeyrek müşteri kategorileri, "Ankara hattı" = Anadolu üretim tesisleri.*

Claude'un cümlelerinizi anlaması için iç jargonu açıklamak gerekir.

## Nerede Saklanır?

Birkaç seçenek var, her birinin avantajı farklı:

### Seçenek 1: Paylaşılan Bulut Dosyası

Google Drive / OneDrive / SharePoint'te tek bir CLAUDE.md dosyası. Çalışanlar [Projects](../araclar/projects/) içine kopyalar veya doğrudan referans verir.

**Avantaj:** Her çalışan en güncel versiyonu görür.
**Dezavantaj:** Sürüm/değişiklik kontrolü zayıf.

### Seçenek 2: Git Repository

Şirket içi GitHub/GitLab repository'sinde CLAUDE.md. Değişiklikler PR ile yönetilir, geçmiş izlenir.

**Avantaj:** Sürüm kontrolü, change log, onay süreci güçlü.
**Dezavantaj:** Git bilen birinin sahiplenmesi gerekir.

### Seçenek 3: Wiki / Notion Sayfası

İç wiki'de CLAUDE.md sayfası. Çalışanlar oradan kopyalar.

**Avantaj:** Kolay erişim, yorum sistemi.
**Dezavantaj:** Format değişikliği (Notion → Markdown) bazen kayıp yaratır.

### Seçenek 4: Anthropic Enterprise Plan'da Organizasyon Düzeyi

[Enterprise plan](../temeller/takim-ve-admin/) bazı senaryolarda admin'in tüm kullanıcılara organizasyon-genelinde talimatlar göndermesini destekler. Bu özellik gelişiyor; Anthropic Sales ile konuşulması gerekiyor.

## Çalışan Bireysel CLAUDE.md ile Birleştirme

Çalışan iki dosyayı birleştirme yaklaşımı seçer:

### A — Tek Bir CLAUDE.md (kopyala + ekle)

Şirket CLAUDE.md'sini kopyala, kendi bireysel kısmını altına ekle. Tek dosya, basit.

```markdown
# Şirket Kısmı (kopyalandı, değiştirilmemeli)
[şirket içeriği]

# Bireysel Kısım — [Çalışan Adı]
[bireysel içerik]
```

**Risk:** Şirket güncellendiğinde çalışan kopyasını güncellemez → eskisi kalır.

### B — Project Knowledge'a Şirket, CLAUDE.md'ye Bireysel

[Projects](../araclar/projects/) içinde bir "Şirket Bilgisi" projesi → şirket CLAUDE.md'si project knowledge olarak yüklü. Çalışanın kişisel CLAUDE.md'si ayrı.

**Avantaj:** Şirket güncellendiğinde tek noktada güncellenir.
**Dezavantaj:** Çalışan her sohbette doğru proje altında olduğundan emin olmalı.

### C — Cowork / Team Plan'da Otomatik

[Enterprise plan](../temeller/takim-ve-admin/) gelişmiş yapılandırmalarında, organizasyon-genelinde talimat ile bireysel CLAUDE.md birleşir, çalışanın hiçbir manuel kopyalama yapmasına gerek kalmaz.

## Kim Editler?

Şirket CLAUDE.md'sinin **sahibi** olmalı. Genelde:

- **Küçük şirket (5-15):** İK direktörü veya kurucu
- **Orta şirket (15-50):** İletişim/marka müdürü + İK direktörü ortak
- **Büyük şirket (50+):** Ayrı bir AI Governance kurulu (CIO + Hukuk + İK + Marka temsilcisi)

Editleme süreci:

1. Değişiklik talebi yazılı (e-posta, ticket, PR)
2. İlgili kurullar gözden geçirir
3. Onaylanırsa belge güncellenir, sürüm numarası artar
4. Çalışanlara duyurulur (Slack/Teams + e-posta)
5. 30 gün içinde herkes bireysel kopyasını günceller

## Sürüm Yönetimi

CLAUDE.md başına bilgi ekleyin:

```markdown
---
sürüm: 2.3
güncelleme: 2026-04-26
sahip: İK Direktörü
sonraki gözden geçirme: 2026-07-26
---
```

Önemli değişikliklerde **change log** tutun:

```markdown
## Değişiklik Geçmişi

- **v2.3 (2026-04-26):** KVKK güncellemesi, "Anonim müşteri verisi" tanımı eklendi
- **v2.2 (2026-02-15):** Yasak kelimelere "yenilikçi" eklendi
- **v2.1 (2025-12-01):** İlk yayın
```

## Çalışan Onboarding'inde Yer Alması

Yeni çalışan ilk haftasında:

1. [Şirket içi politika](../temeller/sirket-ici-politika/)'yı okur ve imzalar
2. Şirket CLAUDE.md'sinin son sürümünü alır
3. Kendi bireysel CLAUDE.md'sini yazar (rolü, alışkanlıkları, projeleri)
4. İki dosyayı birleştirir
5. İlk haftada bir [Cowork](../araclar/cowork-modu/) oturumu — yöneticiyle birlikte CLAUDE.md test edilir, gerekirse iyileştirilir

[İlk 7 Gün](../temeller/ilk-7-gun/) sayfası bu süreci genel hatlarıyla anlatır.

## Yaygın Sorunlar

### "Şirket CLAUDE.md çok uzun, Claude bunalıyor"

CLAUDE.md çok uzunsa Claude bazı kuralları görmezden gelmeye başlar. **300 kelimeyi geçmesin** kuralı pratiktir. Detaylar yerine **mutlaklar** yazılsın.

Detaylı şablonlar [Şablon Kütüphanesi](sablon-kutuphanesi/)'nde, Claude'a "şu şablonu kullan" diye hitap ederek çağrılır.

### "Çalışan şirket CLAUDE.md'sine uymadı"

İki olasılık:

1. CLAUDE.md çok uzun veya çelişkili → kısaltın, netleştirin
2. Bireysel CLAUDE.md şirketle çelişiyor → çalışanla görüşün, [Hata Ayıklama](hata-ayiklama/) sayfasına bakın

### "Şirket CLAUDE.md'sini kim güncellesin, kimse sahiplenmiyor"

Sahipsiz politika belgeleri 6 ay sonra eskimiş ve etkisizdir. **Bir kişiyi resmi sahibi atayın** — KPI'sının bir kısmı bu olsun.

### "İki çalışan farklı sürüm CLAUDE.md kullanıyor"

Sürüm yönetimi yoksa olur. **Her CLAUDE.md başında sürüm numarası** kuralı, bunu önler.

## Mini Şablon — Başlangıç İçin

Kısa bir şirket CLAUDE.md taslağı (kullanıma uyarlayın):

```markdown
---
sürüm: 1.0
güncelleme: 2026-04-26
sahip: [Pozisyon]
---

# [Şirket] Şirket-Geneli Claude Talimatı

## Biz Kimiz
[Şirket bağlamı 2-3 cümle]

## Voice ve Dil
- Dürüst, doğrudan, sıcak. Pazarlama klişesi yasak.
- Türkçe-first. İngilizce karşılık gerekli olduğu yerde parantez içinde verilir.

## Yasaklar
- Müşteri kişisel verisi yüklenmez (anonimleştir)
- Sözleşme/finansal/sağlık dosyası yasak
- "Lider", "yenilikçi", "vizyoner" kelimeleri kullanılmaz

## Yapılacaklar
- Müşteri yanıtlarına şu yapıyı uygula: Selamlama → Onay → Cevap → Sonraki adım → Kapanış
- Sayısal verilerde mutlaka kaynak belirt
- Şüphe varsa cevabı vermeden sor

## Şirket Akronimleri
- PMV: Proje Müdürü Vekâleti
- K1/K2: İlk/ikinci çeyrek müşteri kategorisi
- [vs.]
```

[Örnekler](ornekler/) sayfasında daha kapsamlı örnekler var.

## İlgili Sayfalar

- [CLAUDE.md Nedir?](nedir/) — Bireysel başlangıç
- [Nasıl Yazılır?](nasil-yazilir/) — Yazım rehberi
- [Örnekler](ornekler/) — Hazır şablonlar
- [Şablon Kütüphanesi](sablon-kutuphanesi/) — Rol bazlı şablonlar
- [Hata Ayıklama](hata-ayiklama/) — CLAUDE.md işe yaramıyorsa
- [Memory Yönetimi](memory-yonetimi/) — CLAUDE.md ile kalıcı bellek farkı
- [Şirket İçi Politika](../temeller/sirket-ici-politika/) — Politika belgesiyle uyum
- [Takım ve Admin](../temeller/takim-ve-admin/) — Enterprise plan organizasyon düzeyi

