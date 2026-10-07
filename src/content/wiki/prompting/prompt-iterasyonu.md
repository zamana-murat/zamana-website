---
title: "Prompt İterasyonu: Test, Geliştir, Sürümle"
seoTitle: "Prompt Nasıl Test Edilir? Puanlama ve Sürümleme"
description: "Promptu nasıl test eder, üç boyutta puanlar, düzeltir ve sürümlersiniz? 3-5 örnekli test seti, puan tablosu ve Claude'a promptu iyileştirtme yöntemi."
tags:
  - prompting
  - iterasyon
  - test
  - geliştirme
lastUpdated: "2026-10-06"
---

**Bir promptu ilk seferinde mükemmel yazmak nadirdir.** İyi prompt **iterasyonla** olur: yazarsınız, test edersiniz, sorunu görürsünüz, düzeltirsiniz, tekrar test edersiniz. Bu sayfa o döngünün sistematik metodolojisini anlatır.

[Temel İlkeler](/wiki/prompting/temel-ilkeler/) ve [4D Çerçevesi](/wiki/prompting/4d-cercevesi/) sayfaları **nasıl yazarsınız** sorusuna cevap verir; bu sayfa **yazdıktan sonra ne yaparsınız** sorusuna.

## Neden İterasyon?

Promptu ilk yazdığınızda:

- Görevi **kafanızda olduğu gibi** anlatırsınız → ama Claude'a göre belirsiz noktalar vardır
- Beklediğiniz çıktı tipinin örneği yoktur → Claude tahmin eder
- Sınır vakaları düşünülmemiştir → ilk gelen verilerde patlar
- Form / kayıt / dil tutarsızlıkları yakalanmamıştır

İterasyon bu boşlukları doldurur.

## İterasyon Döngüsü

```
1. Yaz (taslak prompt)
   ↓
2. Test (3-5 örnek veriyle çalıştır)
   ↓
3. Değerlendir (çıktıların kalitesi, tutarlılığı)
   ↓
4. Düzelt (promptu iyileştir)
   ↓
5. Tekrar test et
   ↓
(çıktı kabul edilebilir kalitede)
   ↓
6. Sürümle (Proje, Skill veya şablon kütüphanesine kaydet)
```

## 1. Yaz: Taslak Prompt

İlk taslak için pratik şablon ([Prompt Kataloğu](/wiki/prompting/prompt-katalogu/) sayfasında daha fazlası):

```
Görev: [bir cümle]

Bağlam:
- [kim için]
- [hangi kayıt]
- [ne format]

Kurallar:
- [3-5 madde]

Çıktı: [istediğin yapı]
```

Mükemmel olmasına gerek yok, bu bir taslak.

## 2. Test: 3-5 Örnek Veri

Promptu **gerçek verilerle** test edin. Yapay senaryolar yetmez.

**Test seti seçimi:**

- **Tipik vaka** (1 örnek) → günlük standard vaka
- **Sınır vaka** (1 örnek) → çoğu zaman sorun çıkaran tip
- **Aykırı vaka** (1 örnek) → istisna durum, görev tanımının dışında olabilen
- **Uzun vaka** (1 örnek) → büyük veri / uzun input
- **Boş/eksik vaka** (1 örnek) → veri eksikse Claude ne yapar

En az 3, ideali 5 örnek kullanın. Tek örnekle "şansa iyi çıktı" ile gerçekten iyi promptu birbirinden ayıramazsınız.

**Süre:** bir test turu (5 örnek çalıştırmak ve skorlamak) elle 20-40 dakika. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

## 3. Değerlendir: Üç Boyutlu Skor

Her test çıktısını üç eksende skorlayın:

### Boyut 1: Doğruluk

Çıktı doğru bilgi içeriyor mu? Halüsinasyon var mı?

- 5: Tamamen doğru
- 3: Çoğu doğru, küçük yanlışlıklar
- 1: Önemli yanlışlık var

### Boyut 2: Form / Format

Çıktı istenen formatta mı? Kayıt tutarlı mı? Türkçe doğru mu?

- 5: Format mükemmel uygulandı
- 3: Format çoğunlukla doğru ama bazı yerler kaymış
- 1: Format tamamen kayıp

### Boyut 3: Kullanılabilirlik

Çıktıyı kopyala-yapıştır kullanabilir misiniz, yoksa düzeltmeniz mi gerekir?

- 5: Doğrudan kullanılabilir
- 3: Küçük düzeltmelerle kullanılır
- 1: Çoğunu yeniden yazmanız gerek

**Toplam:** Her test çıktısı en çok 15 puan alır (3 boyut × en çok 5). Test örneklerinin ortalaması 13 ve üzerindeyse prompt hazırdır. Ortalama 10'un altındaysa ciddi iterasyon gerekir.

## 4. Düzelt: Sorun Türüne Göre Çözüm

Test sonuçlarındaki yaygın sorunlar ve çözümleri:

### Sorun: "Çıktı çok genel / klişe"

**Çözüm:** Daha spesifik örnek verin ([Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/)). Yasak kelime listesi ekleyin.

### Sorun: "Format her seferinde farklı"

**Çözüm:** Format örneği gösterin. "Yukarıdaki yapıya birebir uy" deyin. [Çıktı Formatı](/wiki/prompting/cikti-formati/) sayfasındaki tekniklerle güçlendirin.

### Sorun: "Bazı verileri görmedi"

**Çözüm:** Promptu yapılandırın. "Şu veriyi mutlaka analizine kat" gibi açık talimat. Ya da girişi numaralandırın.

### Sorun: "Türkçe'den İngilizce'ye kayıyor"

**Çözüm:** Kalıcı talimatta (profil, proje ya da Cowork talimatı; Claude Code'da CLAUDE.md) net dil kuralı. [Türkçe Prompt Teknikleri](/wiki/prompting/turkce-prompt-teknikleri/) sayfasına bakın.

### Sorun: "Sınır vakasında sapıttı"

**Çözüm:** O sınır vakasının örneğini few-shot'a ekleyin. "Eğer veri X ise şöyle yap" gibi koşul ekleyin.

### Sorun: "Çok uzun yazıyor"

**Çözüm:** "Maksimum N kelime" katı sınır. "Sadece çıktıyı ver, açıklama yok."

### Sorun: "Halüsinasyon: uydurulmuş veri"

**Çözüm:** "Sadece verilen veriye dayan, uydurma." "Bilmediğin şey için 'veri yok' yaz." [Sınırlamalar](/wiki/temeller/sinirlamalar/) ve [Yaygın Hatalar](/wiki/prompting/yaygin-hatalar/) sayfalarına bakın.

## 5. Tekrar Test: Aynı Set

Düzeltme sonrası **aynı test setiyle** baştan başlayın. Yeni veri kullanmayın, düzeltmenin işe yarayıp yaramadığını ancak aynı veriyle ölçersiniz.

Ortalama skor 13+/15'e çıktığında prompt **kabul edilebilir** seviyededir.

## 6. Sürümle: Kalıcı Kayıt

Hazır prompta artık **kalıcı bir yer** verin:

### Seçenek A: Claude Projesi (sohbet ve Cowork kullanıcıları için)

Hazır promptu bir [Claude Projesi](/wiki/araclar/projects/)ne koyun: şablon dosyalarını projeye yükleyin, proje talimatına "bu projedeki şablonlardan birini kullan, eksik bilgiyi bana sor" yazın. Proje her sohbette sabit arka plan bilgisidir. Cowork'te de aynı proje çalışır. Yalnızca bilgisayardaki bir klasöre güvenmeyin: Pro ve Max'te yeni Cowork görevleri 6 Ekim 2026'dan beri bulutta çalışır ve bulut görevleri yerel klasöre doğrudan erişemez.

Çok sık kullandığınız ve artık değişmeyen bir prompt için bir sonraki adım [Skill](/wiki/yetenekler/skills/)'e çevirmektir; Claude ilgili gördüğünde onu kendisi yükler.

Her sohbette geçerli olması gereken kısa kurallar (dil, ton, yasak kalıplar) için profil talimatı ("Instructions for Claude", Settings > General) daha uygundur; şablonların kendisini oraya doldurmayın.

### Seçenek B: Claude Code kullananlar için CLAUDE.md

Claude Code kullanıyorsanız şablon adlarını ve nerede durduklarını [CLAUDE.md](/wiki/claude-md/nedir/) dosyasına yazabilirsiniz (CLAUDE.md Claude Code'un mekanizmasıdır; Cowork'te klasör talimatı kullanın).

- Şirket geneli kullanım için: [Takım CLAUDE.md](/wiki/claude-md/takim-claude-md/)
- Kişisel kullanım için: kendi CLAUDE.md'niz

```markdown
## Şablonlar
- "Müşteri itirazı yanıtı şablonu": [bağlantı veya inline]
- "Toplantı özeti şablonu": [...]
```

Notion, Google Drive ya da paylaşılan klasör de olur; önemli olan tüm ekibin aynı sürüme erişmesi. Düzenleme için [Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/) sayfasına, hangi talimatın nerede geçerli olduğu için [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/) sayfasına bakın.

### Seçenek C: Sürüm Kontrollü Depo

Daha olgun şirketler git üzerinde prompt deposu tutar:

```
prompts/
├── musteri-itirazi/
│   ├── README.md
│   ├── v1.md
│   ├── v2.md (current)
│   └── changelog.md
├── toplanti-ozeti/
└── ...
```

## Sürüm Yönetimi

Bir prompt 6 ay sonra hâlâ doğru çalışsın diye sürüm bilgisi ekleyin:

```markdown
---
şablon: Müşteri itirazı yanıtı
sürüm: 2.1
güncelleme: 2026-04-26
test seti: tests/musteri-itirazi-test.md
ortalama skor: 14.2/15
sahip: Pazarlama Müdürü
---
```

Önemli değişikliklerde **değişiklik günlüğü:**

```markdown
- v2.1 (2026-04-26): Yasak kelime listesi genişletildi
- v2.0 (2026-02-15): Few-shot örnekler eklendi, format katılaştırıldı
- v1.3 (2025-11-01): Türkçe kayma kuralı netleşti
```

## Claude'a Promptu İyileştirtmek ve Prompt Yazdırmak

"Promptumu Claude'a iyileştirtebilir miyim?" Evet, ve çoğu zaman iyi sonuç verir. İki ayrı kullanım var.

**1. Yazdığınız promptu iyileştirtmek.** Taslağı yapıştırın, test sonuçlarında gördüğünüz sorunu da ekleyin:

> *"Aşağıdaki promptu iyileştir. Bu promptla aldığım çıktılarda sorun şu: [örn. çıktılar çok genel, format her seferinde değişiyor]. Promptun neresi bu sorunu yaratıyor olabilir, açıkla; sonra düzeltilmiş halini yaz. Anlamını değiştirme, yalnız belirsiz yerleri netleştir ve eksik bilgi için bana soru sor.*
>
> *Prompt: [promptu yapıştır]"*

Çıktıyı yine kendi test setinizle deneyin. Claude'un "iyileştirilmiş" hali kâğıt üstünde düzgün görünür ama sizin verinizde daha kötü çıkabilir; karar test skorunun, Claude'un beğenisinin değil.

**2. Sıfırdan prompt yazdırmak.** Görevi birkaç cümleyle anlatın ve Claude'dan prompt isteyin:

> *"[Görev: örn. müşteri şikâyet e-postalarını kategorilere ayırmak] için kullanabileceğim bir prompt yaz. Girdi: [ne vereceğim]. Çıktı: [ne bekliyorum]. Değişken yerleri köşeli parantezle göster. Yazmaya başlamadan önce bana ihtiyacın olan bilgileri sor."*

**"Başlamadan önce bana 3 netleştirici soru sor" tekniği.** Prompt yazdırırken de, doğrudan iş yaptırırken de işe yarar. Prompta şunu ekleyin:

> *"Başlamadan önce bana en fazla 3 netleştirici soru sor. Cevaplarımı aldıktan sonra devam et."*

Claude eksik bilgiyi tahmin etmek yerine sorar; ilk çıktı hedefe yaklaşır. Soru sayısını sınırlamak önemli, yoksa uzun bir anket çıkar. Genellikle kayıt (resmî mi samimi mi), hedef okur ve çıktı biçimi sorulur; bu cevapları sonra şablonun içine yerleştirin ki bir daha sorması gerekmesin.

> **Geliştiriciler için:** Anthropic'in Console'unda (geliştirici paneli) "prompt improver" ve "prompt generator" adlı araçlar bulunur; improver 2024'te çıktı ve verilen promptu yeniden yazarak akıl yürütme adımı ve düzenli örnek biçimi ekler. Bunlar API kullanan ekipler içindir; dokümandaki özel sayfaları bugün genel prompt rehberine yönleniyor ve araçların güncel arayüzdeki yeri doğrulanmadı. İş kullanıcısı için yukarıdaki sohbet yöntemi yeterlidir.

## A/B Testi: Ciddi Karar İçin

Önemli bir prompt için iki sürüm karşılaştırın:

1. Prompt A (mevcut)
2. Prompt B (yeni öneri)
3. Aynı 10 test verisini her ikisine de verin
4. Üç boyutlu skor karşılaştırın
5. Her veri için "hangi çıktı daha iyi?" → kör değerlendirme (mümkünse başkası yapsın)
6. Skorca üstün olan kazanır

Bu özellikle [Pazarlama](/wiki/departmanlar/pazarlama/) içerikleri, [Müşteri hizmetleri](/wiki/departmanlar/musteri-hizmetleri/) yanıtları, [Hukuk](/wiki/departmanlar/hukuk/) sözleşme şablonları gibi yüksek hacimli işlerde değer taşır.

## Üretim Sonrası Geri Bildirim

Bir prompt (proje, skill ya da paylaşılan kütüphane) aktif kullanımda olduktan sonra da **gözlemlenmeli**:

- Çalışan kullanıyor mu, yoksa bypass mı geçiyor?
- Çıktıyı kullanmadan önce ne kadar düzeltme yapıyor?
- Hangi durumlarda tatmin etmiyor?

Bu geri bildirimi sistematik toplayın:

- Aylık ekip toplantısında "hangi prompt iyi, hangisi sorunlu?"
- Slack'te "prompt-feedback" kanalı
- Çeyreklik kullanım anketi

Sorun çıkan promptlar yeni iterasyon turuna girer.

## Otomasyon: Scheduled Tasks ile

Aynı promptu her hafta çalıştırıyorsanız (örn. haftalık satış raporu), bunu [Scheduled Tasks](/wiki/araclar/scheduled-tasks/) içine koyun. Prompt sürümü ayrı dosyada tutulur, scheduled task ona referans verir. Promptu güncellediğinizde ertesi hafta yeni sürümle çalışır.

## Yaygın Hata: Sürekli Yamamak

Bir prompt çalıştığında sürekli kurcalamayın. **Sürekli ince ayar** üretkenliği öldürür. Hazır olan prompt 3 ay sabit kalsın, sonra ihtiyaca göre revize edin.

## İterasyon Disiplini: Kişisel Sistem

Kendi prompt yönetiminizi kurun:

1. **Her yeni prompt'u test edin**: minimum 3 örnekle
2. **Skor verin**: 5 üzerinden 3 boyutta
3. **Sürümleyin**: proje dosyası, skill ya da kişisel notlar
4. **Aylık gözden geçirin**: hangileri çalışıyor, hangileri iyileştirilmeli
5. **Çeyreklik temizlik**: kullanılmayanları silin, eskileri güncelleyin

Bu disiplin uzun vadede **AI okuryazarlığınızı** ciddi şekilde artırır. Bunu kurum çapında uygulamak için [Şirket içi politika](/wiki/temeller/sirket-ici-politika/) sayfasında çerçeve var.

## Hızlı Test Checklist

Yeni prompt yazdığınızda kullanın:

- [ ] 3-5 gerçek veri örneğiyle test ettim mi?
- [ ] Sınır vakası test ettim mi?
- [ ] Çıktıyı 3 boyutta (doğruluk / form / kullanılabilirlik) skorladım mı?
- [ ] Sorunlu noktaları yakaladım mı?
- [ ] Tekrar test sonrası skor 13+/15 mi?
- [ ] Bir yere kalıcı kaydettim mi?
- [ ] Sürüm numarası verdim mi?
- [ ] Bir başkasına gösterdim mi (gözden geçirme)?

## İlgili Sayfalar

- [Temel İlkeler](/wiki/prompting/temel-ilkeler/): Genel prompt mantığı
- [4D Çerçevesi](/wiki/prompting/4d-cercevesi/): Felsefe
- [Türkçe Prompt Teknikleri](/wiki/prompting/turkce-prompt-teknikleri/): Türkçe için
- [Prompt Kataloğu](/wiki/prompting/prompt-katalogu/): Hazır şablonlar
- [Çıktı Formatı](/wiki/prompting/cikti-formati/): Format kontrolü
- [Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/): Örnekle güçlendirme
- [Yaygın Hatalar](/wiki/prompting/yaygin-hatalar/): Tipik tuzaklar
- [İleri Seviye](/wiki/prompting/ileri-seviye/): Karmaşık iterasyon
- [Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/): Kalıcı saklama
- [Projects](/wiki/araclar/projects/): Prompt kütüphanesi için proje
- [Skills](/wiki/yetenekler/skills/): Sık kullanılan promptu skill'e çevirmek
- [Belgeyle Çalışma](/wiki/prompting/belgeyle-calisma/): Uzun belge, sözleşme ve tabloda prompt
- [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/): Kalıcı talimat ve hafıza
- [Ölçüm Metrikleri](/wiki/temeller/olcum-metrikleri/): Genel kalite ölçümü

