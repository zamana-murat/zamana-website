---
title: "Claude'a Kalıcı Talimat Vermek: CLAUDE.md ve Profil Talimatı"
seoTitle: "Claude'a Kalıcı Talimat: Profil, Proje, CLAUDE.md"
description: "Claude'a kendinizi bir kez tanıtın: profil talimatı, proje ve CLAUDE.md dosyası. Hangisi nerede geçerli, nasıl yazılır, örnekler ve hata ayıklama."
tags:
  - claude-md
  - giris
lastUpdated: "2026-10-06"
---

**Ciddi Claude kullanımının kalbinde kalıcı talimat vardır.**

Claude'u genel bir yapay zeka asistanından çıkarıp size özel bir asistana (kendi tarzınıza, işinize, varsa ekibinize uygun) dönüştüren şey, ona kendinizi **bir kez** anlatmış olmanızdır. Yazdığınız metin aynıdır; konduğu yer, kullandığınız araca göre değişir:

- **Sohbette** (claude.ai, mobil): profil talimatı (Ayarlar > General > "Instructions for Claude") ve proje talimatı
- **Masaüstünde Cowork'te**: çalıştığınız klasörün içindeki `CLAUDE.md` dosyası (yerel oturumda okunur) ve kritik kuralların kısa sürümü profil talimatında
- **Claude Code'da** (geliştiriciler): `CLAUDE.md` hiyerarşisi

Bölüm adını taşıyan **CLAUDE.md**, bu fikrin klasörle çalışan ortamlardaki biçimidir: düz bir metin dosyası. Sohbet CLAUDE.md dosyasını okumaz; orada aynı işi profil talimatı ve proje görür. Bu bölüm bütün yerleri ve aralarındaki farkı anlatır.

## Bu Bölümdeki Sayfalar

<div class="wiki-grid">

-   <span class="wiki-icon wiki-icon--lg" data-icon="file-document-outline" aria-hidden="true"></span> **CLAUDE.md Nedir?**

    ---

    Temel kavram, nerede çalıştığı (sohbet, Cowork, Claude Code), neden önemli olduğu.

    [→ Nedir?](/wiki/claude-md/nedir/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="pencil-outline" aria-hidden="true"></span> **Nasıl Yazılır?**

    ---

    Beş bölümlü "kendinizi tanıtın" metni, kopyalanabilir şablon, sık yapılan hatalar ve ilk 30 dakika planı.

    [→ Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="format-list-checks" aria-hidden="true"></span> **Örnekler**

    ---

    Satış yöneticisi, CFO, hukuk müşaviri ve 2 rol daha, hazır örnek metinler.

    [→ Örnekler](/wiki/claude-md/ornekler/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="memory" aria-hidden="true"></span> **Talimat ve Hafıza Yerleri**

    ---

    Profil talimatı, proje, klasörde CLAUDE.md ve yerleşik hafıza: hangisi nerede geçerli, kim yönetir. "Hangisini kullanayım" karar akışı.

    [→ Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="view-list-outline" aria-hidden="true"></span> **Şablon Kütüphanesi**

    ---

    Satıştan BT'ye rol bazlı hazır şablonlar.

    [→ Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="account-group-outline" aria-hidden="true"></span> **Takım CLAUDE.md**

    ---

    Şirket ya da ekip genelinde paylaşılan kural seti.

    [→ Takım CLAUDE.md](/wiki/claude-md/takim-claude-md/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="alert-circle-outline" aria-hidden="true"></span> **Hata Ayıklama**

    ---

    Yazdınız ama Claude dinlemiyorsa: önce okunuyor mu, sonra çelişki ve uzunluk.

    [→ Hata Ayıklama](/wiki/claude-md/hata-ayiklama/)

</div>

## Öğrenme Sırası

Bu bölüme yeni başlıyorsanız önerilen okuma sırası:

1. **[Nedir?](/wiki/claude-md/nedir/)**: Kavramı oturtun, hangi ortamda neyin okunduğunu anlayın
2. **[Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/)**: Şablonu alın, **kendi metninizin** ilk sürümünü yazın (30 dk)
3. **[Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/)**: Metni nereye koyacağınızı seçin ve "talimatımı 3 maddede özetle" testini yapın
4. **[Örnekler](/wiki/claude-md/ornekler/)**: Rolünüze en yakın örneği görün, kendi sürümünüzü iyileştirin

Örnekler sayfasını körü körüne kopyalamayın. Önce Nedir ve Nasıl Yazılır sayfalarını okuyun, çünkü kalıcı talimatın gücü kişiselleştirilmiş olmasındadır. Jenerik bir örneği kopyalamak genel bir çıktı verir.

## Ana Fikir

Tüm bölüm tek bir ilkeyi farklı açılardan anlatır:

> **Claude'u her gece geceyarısı hafızası silinen harika bir meslektaş olarak düşünün. Sizin işiniz, geceyarısından önce önemli şeyleri yazmaktır.**

Profil talimatı, proje ve klasördeki CLAUDE.md bu "geceyarısı notlarının" farklı biçimleridir. Claude'un kendi biriktirdiği yerleşik hafıza bunlara ek olarak çalışır (Free, Pro ve Max'te varsayılan açık), ama o sizin yazdığınız açık kuralın yerini tutmaz.

Kullandıkça büyür. Büyüdükçe Claude daha akıllı hale gelir ve bu akıllılık **sizde kalır**: metin sizin elinizdedir, yeni bir bilgisayara ya da yeni bir araca taşırsınız. Ekibinize katılan başka biri kendi metnini yazar, ama sizinkinden öğrenir.

## Nereye Gitmeli?

Kalıcı talimatı anladıysanız:

- [**Prompting**](/wiki/prompting/): Kalıcı talimatın üzerine iyi promptla Claude'u gerçekten kullanışlı yapmak
- [**Cowork Modu**](/wiki/araclar/cowork-modu/): Klasörle çalışan ortam; CLAUDE.md'nin yerel oturumda okunduğu yer
- [**Yetenekler**](/wiki/yetenekler/): Skills, Artifacts, Agents ve yerleşik hafıza; kalıcı talimatın üzerine inşa edilen özellikler
