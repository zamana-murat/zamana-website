---
title: "Takım CLAUDE.md: Paylaşılan Kural Seti"
seoTitle: "Takım CLAUDE.md: Ekip İçin Paylaşılan Talimat Seti"
description: "Ekip için paylaşılan CLAUDE.md ve talimat seti: paylaşılan proje, kuruluş talimatı, skill, klasör dosyası. Kim editler, sürümü nasıl tutarsınız?"
tags:
  - claude-md
  - takim
  - paylasimli
lastUpdated: "2026-10-06"
---

**[CLAUDE.md](/wiki/claude-md/nedir/) bireysel başlar, ama şirkette 6 kişi aynı yönergeyi paylaşmak istediğinde takım versiyonu gerekir.** Bu sayfa paylaşılan kural setinin nasıl kurulduğunu, kimin editlediğini, sürüm sorunlarının nasıl yönetildiğini anlatır.

> **Takımda tek bir yer yok, birkaç yol var.** Aynı kural seti, kullanılan araca göre şu yerlere konur: Team ya da Enterprise'ta paylaşılan bir proje, yöneticinin yazdığı kuruluş talimatı, yöneticinin dağıttığı skill ve Cowork'te çalışılan klasördeki ortak `CLAUDE.md`. Her yolun gücü ve sınırı aşağıda ("Takım Kural Seti Çalışana Nasıl Ulaşır?").

## Bireysel mi Takım mı?

Çoğu şirkette **iki katman** birden vardır:

| Katman | Sahibi | Kapsam |
|---|---|---|
| **Şirket / Takım kural seti** | Yönetim / İK / takım lideri | Marka sesi, KVKK kuralları, yasak kelimeler, müşteri tarzı |
| **Bireysel talimat** (profil talimatı ya da klasördeki CLAUDE.md) | Çalışanın kendisi | Rol, kişisel tercihler, projeler, çalışma saatleri |

Bunlar çelişmemeli. Bireysel, takımı **tamamlar**, değiştirmez. Şirket "asla X yapma" diyorsa, çalışan kendi talimatında "ama bazen X yap" diyemez.

## Takım CLAUDE.md Ne İçerir?

Tipik bölümler:

### 1. Şirket Bağlamı

> *Biz [Şirket Adı]'yız. [Sektör]'de faaliyet gösteren [büyüklük] bir kurumuz. Müşterilerimiz [kategori]. Konumlanmamız [değer önerisi].*

Claude'un sektörel doğru hizalanması için temel.

### 2. Marka Sesi

> *Yazışmalarımızda dürüst, doğrudan ve sıcak bir dil kullanırız. Pazarlama klişeleri, abartılı sıfatlar, "lider", "yenilikçi", "vizyoner" gibi içi boş kelimeler yasaktır. Müşteriye saygılı ama eşit konuşuruz.*

[Pazarlama departmanı](/wiki/departmanlar/pazarlama/) sayfasıyla uyumlu olmalı.

### 3. KVKK ve Veri Politikası

> *Müşteri kişisel verisi, ticari sırlar, hukuki süreç dosyaları Claude'a yüklenmez. Yüklenecek belgeler önce hassas bilgi açısından kontrol edilir.*

[Şirket içi politika](/wiki/temeller/sirket-ici-politika/) ve [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfalarındaki politikayla tutarlı.

### 4. Sektör / Hukuk / Mevzuat Notları

> *Sözleşme örnekleri Türk Ticaret Kanunu çerçevesinde olmalı. ABD/AB hukuk sistemi referans alınmaz. Vergi rakamları için her seferinde güncel TCMB kuru kontrol edilir.*

### 5. Yaygın Görev Şablonları

> *Müşteri yanıtları için şu yapı kullanılır: 1) Selamlama, 2) Kısa onay, 3) Cevap, 4) Sıradaki adım, 5) Kapanış.*

[Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/) sayfasında genişletilebilir.

### 6. Yasak Kelimeler / Cümleler

> *Şu ifadeler kullanılmayacak: "lider çözümümüz", "yenilikçi yaklaşım", "vizyoner ekip", "pazarın lideri".*

Marka diliyle ilgili keskin sınırlar burada.

### 7. Şirket İçi Dil ve Akronimler

> *"PMV" = "Proje Müdürü Vekâleti", "K1 / K2" = İlk ve ikinci çeyrek müşteri kategorileri, "Ankara hattı" = Anadolu üretim tesisleri.*

Claude'un cümlelerinizi anlaması için iç jargonu açıklamak gerekir.

## Nerede Saklanır?

Önce **kaynak metnin** nerede duracağına karar verin. Bu, çalışanların Claude'da gördüğü yer değil, "doğru sürüm hangisi" sorusunun cevabıdır. Birkaç seçenek var, her birinin avantajı farklı:

### Seçenek 1: Paylaşılan Bulut Dosyası

Google Drive / OneDrive / SharePoint'te tek bir CLAUDE.md dosyası. Çalışanlar [Projects](/wiki/araclar/projects/) içine kopyalar veya klasörlerine indirir.

**Avantaj:** Her çalışan en güncel versiyonu görür.
**Dezavantaj:** Sürüm/değişiklik kontrolü zayıf.

### Seçenek 2: Git Repository

Şirket içi GitHub/GitLab repository'sinde CLAUDE.md. Değişiklikler PR ile yönetilir, geçmiş izlenir.

**Avantaj:** Sürüm kontrolü, değişiklik geçmişi, onay süreci güçlü.
**Dezavantaj:** Git bilen birinin sahiplenmesi gerekir.

### Seçenek 3: Wiki / Notion Sayfası

İç wiki'de CLAUDE.md sayfası. Çalışanlar oradan kopyalar.

**Avantaj:** Kolay erişim, yorum sistemi.
**Dezavantaj:** Format değişikliği (Notion → Markdown) bazen kayıp yaratır.

## Takım Kural Seti Çalışana Nasıl Ulaşır?

Kaynak metin hazırsa, onu çalışanın Claude'una ulaştıran dört yol var. Birini seçmeniz gerekmez; çoğu şirkette kısa bir kuruluş talimatı ile paylaşılan bir proje birlikte kullanılır.

| Yol | Kim kurar | Nerede geçerli | Sınırı |
|---|---|---|---|
| **Paylaşılan proje** (Team ve Enterprise) | Proje sahibi | O projedeki sohbetler | Çalışan doğru projede çalışmalı; izin düzeyi paylaşımda belirlenir |
| **Kuruluş talimatı** | Yönetici | Sohbet, Cowork ve Claude Code oturumları | En çok 3.000 karakter; **zorlayıcı değil**, modele rehberdir |
| **Yöneticinin dağıttığı skill** | Yönetici | Skill'i yüklemiş ya da kendisine açılmış kullanıcılar | Claude skill'i ilgili gördüğünde yükler, her mesaja sabit uygulanmaz |
| **Klasörde ortak CLAUDE.md** | Takım lideri | Cowork'te o klasörle çalışılan **yerel** oturumlar | Her çalışanın klasörde güncel kopyası olmalı; bulut Cowork oturumunda okunduğu belgelenmemiş |

Hangi yönetici özelliklerinin planınızda açık olduğu ([Team ve Enterprise plan](/wiki/temeller/takim-ve-admin/)) güncel yönetici ayarlarına bağlıdır; bu sayfada bunu garanti etmiyoruz. Kurmadan önce admin panelinden veya Anthropic satış ekibinden teyit edin.

### Paylaşılan Proje

Şirket kurallarını proje talimatı olarak, uzun başvuru metinlerini (marka kılavuzu, KVKK politikası) proje bilgisi olarak ekleyin. Ayrıntı: [Projects](/wiki/araclar/projects/). Kural değiştiğinde tek noktada güncellenir.

### Kuruluş Talimatı

Yöneticinin yazdığı kısa bir metindir ve oturumların sistem istemine eklenir. Yalnızca 3.000 karaktere sığar, yani kabaca yarım sayfa. Bu yüzden buraya en kritik 5-10 kuralı yazın: dil, ton, "müşteri kişisel verisi yüklenmez" gibi mutlaklar. Zorlayıcı olmadığı için KVKK gibi bağlayıcı bir yükümlülüğü **yalnızca** buraya yazıp işi bitmiş saymayın; asıl denetim [şirket içi politika](/wiki/temeller/sirket-ici-politika/) ve yönetici ayarlarıyla yapılır.

### Skill

Tekrar eden görev yapıları (müşteri yanıtı formatı, toplantı özeti, teklif iskeleti) için en uygun yol skill'dir. Yöneticiler özelleştirilmiş skill ve eklentileri departmanlara dağıtabilir. Ayrıntı: [Skills](/wiki/yetenekler/skills/). Her zaman geçerli olması gereken kurallar için skill değil, kuruluş talimatı ya da proje talimatı kullanın.

### Klasörde Ortak CLAUDE.md

Takım Cowork ile ortak bir klasörde çalışıyorsa (örneğin her çalışanın bilgisayarındaki aynı yapıdaki proje klasörü) klasör köküne `CLAUDE.md` koyun. Yerel oturumda okunur. Dosyanın güncel kopyasının herkeste olması sizin sorumluluğunuzdadır; bu yüzden kaynak metni yukarıdaki seçeneklerden birinde tutun.

> **Geliştiriciler için.** Claude Code kullanan ekiplerde iki ek katman var. BT ekibi **yönetilen politika** dosyasını (`CLAUDE.md`) çalışanların makinelerine kurabilir; bu dosya kullanıcının `~/.claude/CLAUDE.md` ve projenin `./CLAUDE.md` dosyalarıyla birleştirilir. Projenin dosyası kod deposunda durduğu için sürüm kontrolü hazır gelir. Ayrıntı: [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/).

## Çalışan Bireysel Talimatıyla Birleştirme

Çalışan iki metni birleştirme yaklaşımı seçer:

### A: Tek Bir Metin (kopyala + ekle)

Şirket metnini kopyala, kendi bireysel kısmını altına ekle. Tek dosya, basit; çalışan bu metni profil talimatına ya da kendi klasöründeki CLAUDE.md'ye koyar.

```markdown
# Şirket Kısmı (kopyalandı, değiştirilmemeli)
[şirket içeriği]

# Bireysel Kısım: [Çalışan Adı]
[bireysel içerik]
```

**Risk:** Şirket güncellendiğinde çalışan kopyasını güncellemez → eskisi kalır.

### B: Paylaşılan Projede Şirket, Profil Talimatında Bireysel

[Projects](/wiki/araclar/projects/) içinde bir "Şirket Bilgisi" projesi açın ve şirket metnini proje talimatı ya da proje bilgisi olarak yükleyin. Çalışanın bireysel talimatı (Settings > General > "Instructions for Claude", ya da klasöründeki CLAUDE.md) ayrı kalır. (Projects 17 Eylül 2026'da yeniden tasarlandı; mevcut projeler olduğu gibi çalışıyor, yeni yapı kademeli açılıyor. Ayrıntı: [Projects yeniden tasarlandı](/haberler/2026-09-17-projects-yeniden-tasarlandi/).)

**Avantaj:** Şirket güncellendiğinde tek noktada güncellenir.
**Dezavantaj:** Çalışan her sohbette doğru proje altında olduğundan emin olmalı.

### C: Merkezi Dağıtım (planınız destekliyorsa)

Yönetici özellikleriniz organizasyon genelinde talimat dağıtımına izin veriyorsa ([Takım ve Admin](/wiki/temeller/takim-ve-admin/)), kısa şirket talimatı (kuruluş talimatı) ile bireysel talimat birlikte kullanılır ve çalışanın elle kopyalama yapmasına gerek kalmaz. Kuruluş talimatı 3.000 karakterle sınırlı olduğundan uzun kuralları paylaşılan projeye ya da skill'e bırakın. Desteklenip desteklenmediğini önce teyit edin; desteklenmiyorsa A veya B'ye dönün.

## Kim Editler?

Şirket kural setinin **sahibi** olmalı. Genelde:

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

Metnin başına bilgi ekleyin:

```markdown
---
sürüm: 2.3
güncelleme: 2026-04-26
sahip: İK Direktörü
sonraki gözden geçirme: 2026-07-26
---
```

Önemli değişikliklerde **değişiklik geçmişi** tutun:

```markdown
## Değişiklik Geçmişi

- **v2.3 (2026-04-26):** KVKK güncellemesi, "Anonim müşteri verisi" tanımı eklendi
- **v2.2 (2026-02-15):** Yasak kelimelere "yenilikçi" eklendi
- **v2.1 (2025-12-01):** İlk yayın
```

## Çalışan Onboarding'inde Yer Alması

Yeni çalışan ilk haftasında:

1. [Şirket içi politika](/wiki/temeller/sirket-ici-politika/)'yı okur ve imzalar
2. Şirket kural setinin son sürümünü alır
3. Kendi bireysel talimatını yazar (rolü, alışkanlıkları, projeleri; profil talimatı ya da klasör için CLAUDE.md)
4. İki metni birleştirir
5. İlk haftada yöneticiyle birlikte bir deneme oturumu yapılır: talimat test edilir, gerekirse iyileştirilir. Çalışan klasörle yerel bir [Cowork](/wiki/araclar/cowork-modu/) oturumunda çalışıyorsa "Talimatımı 3 maddede özetle" testi o klasörde yapılır; sohbet kullanıyorsa aynı test paylaşılan projede, yeni bir sohbette yapılır

[İlk 7 Gün](/wiki/temeller/ilk-7-gun/) sayfası bu süreci genel hatlarıyla anlatır.

## Yaygın Sorunlar

### "Şirket metni çok uzun, Claude bunalıyor"

Talimat çok uzunsa Claude bazı kuralları görmezden gelmeye başlar. **Birkaç yüz kelimeyi geçmemesi** pratiktir; kuruluş talimatında zaten 3.000 karakter sınırı var. Detaylar yerine **mutlaklar** yazılsın.

Detaylı şablonlar [Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/)'nde, Claude'a "şu şablonu kullan" diye hitap ederek çağrılır.

### "Çalışan şirket kurallarına uymadı"

Üç olasılık:

1. Metin çok uzun veya çelişkili → kısaltın, netleştirin
2. Bireysel talimat şirketle çelişiyor → çalışanla görüşün, [Hata Ayıklama](/wiki/claude-md/hata-ayiklama/) sayfasına bakın
3. Metin çalışanın o sohbetine hiç ulaşmamış olabilir: yanlış projede mi, klasör bağlı mı, bulutta mı çalışıyor? Kuruluş talimatı da zorlayıcı değil, modele rehberdir; "Talimatımı 3 maddede özetle" testi hangi katmanın geldiğini gösterir

### "Şirket metnini kim güncellesin, kimse sahiplenmiyor"

Sahipsiz politika belgeleri 6 ay sonra eskimiş ve etkisizdir. **Bir kişiyi resmi sahibi atayın**, KPI'sının bir kısmı bu olsun.

### "İki çalışan farklı sürüm kullanıyor"

Sürüm yönetimi yoksa olur. **Her metnin başında sürüm numarası** kuralı bunu önler.

## Mini Şablon: Başlangıç İçin

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

## Ton ve Dil
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

Bu taslak kısa olduğu için kuruluş talimatının 3.000 karakterine de sığar; uzun kısımlarını paylaşılan projeye taşıyın. [Örnekler](/wiki/claude-md/ornekler/) sayfasında daha kapsamlı örnekler var.

## İlgili Sayfalar

- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Bireysel başlangıç
- [Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/): Yazım rehberi ve metni nereye koyacağınız
- [Örnekler](/wiki/claude-md/ornekler/): Hazır şablonlar
- [Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/): Rol bazlı şablonlar
- [Hata Ayıklama](/wiki/claude-md/hata-ayiklama/): Talimat işe yaramıyorsa
- [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/): Profil talimatı, proje, klasör ve hafıza karşılaştırması
- [Projects](/wiki/araclar/projects/): Paylaşılan projeler
- [Skills](/wiki/yetenekler/skills/): Yöneticinin dağıttığı görev yapıları
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Politika belgesiyle uyum
- [Takım ve Admin](/wiki/temeller/takim-ve-admin/): Team ve Enterprise yönetici özellikleri
