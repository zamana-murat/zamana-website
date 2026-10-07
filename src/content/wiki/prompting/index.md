---
title: "Prompting: Claude'la Düşünmenin Temeli"
seoTitle: "Claude Prompt Rehberi: Prompting Nedir, Nasıl Öğrenilir?"
description: "Prompt nasıl yazılır? 4D Çerçevesi, beş bileşenli yapı, Türkçe teknikler, hazır şablonlar ve yaygın hatalarla Claude prompt rehberi."
tags:
  - prompting
  - giris
lastUpdated: "2026-10-06"
---

Claude'la çalışmanın en öğretilebilir becerisi. Ve en yaygın şekilde kötü kullanılan.

Çoğu kişi Claude'la başarısız olur çünkü ona **Google'a sorar gibi sorar**: kısa, anahtar kelimeli, bağlamsız. İyi bir prompt bu reflekse direnen, yapılandırılmış bir düşünce metnidir.

Bu bölüm, prompting becerisini kavramsal çerçeveden (4D) başlayıp temel yapıya, Türkçe ve çıktı biçimine, ileri tekniklere, test etmeye ve hazır şablonlara kadar dokuz sayfada kapsar.

## Bu Bölümdeki Sayfalar

<div class="wiki-grid">

-   <span class="wiki-icon wiki-icon--lg" data-icon="compass-outline" aria-hidden="true"></span> **4D Çerçevesi**

    ---

    Anthropic'in resmi AI Fluency çerçevesi: Delegation, Description, Discernment, Diligence. Bütün promptingin kavramsal zemini.

    [→ 4D Çerçevesi](/wiki/prompting/4d-cercevesi/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="text-box-outline" aria-hidden="true"></span> **Temel İlkeler**

    ---

    Bir promptun beş bileşeni: rol, bağlam, görev, format, kısıtlar. Pratik şablon ve gerçek örneklerle.

    [→ Temel İlkeler](/wiki/prompting/temel-ilkeler/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="code-tags" aria-hidden="true"></span> **İleri Seviye**

    ---

    XML etiketleri, zincirleme, eleştirmen ve düşünme derinliği. Temellerin üstüne inşa edilen teknikler.

    [→ İleri Seviye](/wiki/prompting/ileri-seviye/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="alert-circle-outline" aria-hidden="true"></span> **Yaygın Hatalar**

    ---

    Çoğu kullanıcının düştüğü on tuzak ve her birinin spesifik düzeltmesi.

    [→ Yaygın Hatalar](/wiki/prompting/yaygin-hatalar/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="translate" aria-hidden="true"></span> **Türkçe Prompt Teknikleri**

    ---

    Kayıt seçimi, sen/siz, sayı ve tarih yazımı, İngilizceye kayma sorunu.

    [→ Türkçe Prompt Teknikleri](/wiki/prompting/turkce-prompt-teknikleri/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="format-list-checks" aria-hidden="true"></span> **Çıktı Formatı**

    ---

    Tablo, JSON, e-posta, slayt ve madde listesi: kullanıma hazır çıktı almak.

    [→ Çıktı Formatı](/wiki/prompting/cikti-formati/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="layers-triple" aria-hidden="true"></span> **Few-Shot Örnekleme**

    ---

    Örnek vererek öğretmek: iyi örnek seçimi ve yaygın tuzaklar.

    [→ Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="pencil-outline" aria-hidden="true"></span> **Prompt İterasyonu**

    ---

    Test et, puanla, geliştir, sürümle. Promptu bir kez yazıp bırakmamak.

    [→ Prompt İterasyonu](/wiki/prompting/prompt-iterasyonu/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="view-list-outline" aria-hidden="true"></span> **Prompt Kataloğu**

    ---

    Kopyalayıp dolduracağınız hazır Türkçe prompt şablonları.

    [→ Prompt Kataloğu](/wiki/prompting/prompt-katalogu/)

</div>

## Öğrenme Sırası

Bu bölümü yeni okuyorsanız:

1. **[4D Çerçevesi](/wiki/prompting/4d-cercevesi/)**: Kavramsal zemini oturtun. Neden, nasıldan önce gelir.
2. **[Temel İlkeler](/wiki/prompting/temel-ilkeler/)**: Beş bileşen yapısı. Ezberleyene kadar, bir hafta kullanın.
3. **[Yaygın Hatalar](/wiki/prompting/yaygin-hatalar/)**: Kendi promptlarınızı bu listeye karşı denetleyin.
4. **[Türkçe Prompt Teknikleri](/wiki/prompting/turkce-prompt-teknikleri/)**: Türkçeye özgü tuzaklar: kayıt, sayı ve tarih yazımı, İngilizceye kayma.
5. **[Çıktı Formatı](/wiki/prompting/cikti-formati/)**: Tablo, e-posta, JSON gibi çıktıyı istediğiniz biçimde almak.
6. **[Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/)**: Anlatmak yetmediğinde örnek göstermek.
7. **[İleri Seviye](/wiki/prompting/ileri-seviye/)**: Temelleri oturtana kadar bekleyin. Erken dönmek boşa yatırımdır.
8. **[Prompt İterasyonu](/wiki/prompting/prompt-iterasyonu/)**: Promptlarınızı test edin, puanlayın, sürümleyin.
9. **[Prompt Kataloğu](/wiki/prompting/prompt-katalogu/)**: Hazır şablonlar. En sona bırakın: önce kendi promptunuzu yazmayı öğrenin.

**Önce kendiniz deneyin.** Hazır şablonu kopyalayıp geçmek hızlı görünür ama öğretmez. Aynı işi önce kendi cümlelerinizle yazın, zorlanın, sonra kataloga bakın. Prompt yazmayı öğreten şey, ilk denemelerdeki o zorlanmadır.

Bir çalışanın prompting becerisi eğitim programının birinci saatinde başlar, **haftalarca gelişmeye devam eder**. Bu bölüm bir kere okunup kapanan değil, aylar boyunca geri dönülen bir kaynaktır.

## Ana Fikir

Bölümün özeti tek cümleye indirgenirse:

> **Prompt, Claude'la konuştuğunuz metinden fazlasıdır: Claude'un düşünmesi için ona kurduğunuz çerçevedir. Çerçeveyi ne kadar iyi kurarsanız, çıktı o kadar iyi olur.**

Bu, Claude'u "sihirli kutu" olarak görmekten çok uzaktır. Claude bir düşünme ortağıdır. İyi bir düşünme ortağı, **iyi bir sohbet partneri** gerektirir. Siz o partner olursunuz.

## 4D, Temel ve İleri Arasında

Ana üç sayfanın ilişkisini netleştirmek gerekirse:

- **4D Çerçevesi** → **NE?** (Neye dikkat ediyorum? Ne için sorumluyum?)
- **Temel İlkeler** → **NASIL?** (Promptu pratik olarak nasıl yazarım?)
- **İleri Seviye** → **DAHA İYİ NASIL?** (Kaliteyi katlayan teknikler nelerdir?)

Üçü birlikte tam resmi verir. Biri olmadan diğeri eksik kalır, ama **temel ilkeler** zeminine basmayan ileri teknik havada kalır. Sırayı atlamayın.

## Pratik Öğrenme Yolu

Prompting öğrenmek bir oturumda olmaz, katmanlı ilerler:

- **İlk hafta:** Description pratiği (4D'nin D2'si). Üç gerçek iş problemini yüksek sesle çerçevelemeyi öğrenmek.
- **Sonraki haftalar:** Gerçek iş çıktıları üretmek. Her başarılı prompt kişisel kütüphanenize eklenir (kütüphaneyi nasıl kuracağınız ve hedefler: [İleri Seviye](/wiki/prompting/ileri-seviye/)).
- **Aylar içinde:** Çoğu prompt sorunu iki kategoriye girer: bağlam eksikliği veya iterasyon eksikliği.

Bu kütüphane Claude öğrenme sürecinin en somut kalıntısıdır.

## Nereye Gitmeli?

Prompting'i okuduysanız:

- [**Effort Kontrolü**](/wiki/yetenekler/effort-control/): Zor işlerde düşünme derinliğini model menüsünden ayarlamak
- [**Projects**](/wiki/araclar/projects/): Aynı talimatı ve dosyaları her sohbette yeniden yazmamak
- [**Yetenekler**](/wiki/yetenekler/): Promptların üstüne Skills, Artifacts, Agents
- [**CLAUDE.md ve Kalıcı Talimat**](/wiki/claude-md/): Yerel Cowork ve Claude Code'da klasörden okunan kalıcı bağlam; sohbet CLAUDE.md okumaz, orada karşılığı proje talimatı ve profil talimatıdır ([Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/))
- [**Departmanlar**](/wiki/departmanlar/): Rolünüze göre gerçek prompt örnekleri
- [**ChatGPT'den Claude'a Geçiş**](/claude/gecis/): Başka bir asistandan geliyorsanız tercihlerinizi taşıyın

