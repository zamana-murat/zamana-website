---
title: Prompt İterasyonu — Test, Geliştir, Sürümle
description: Bir promptu nasıl test eder, kalitesini ölçer, geliştirir ve uzun vadede iyileştirirsin? Sistematik iterasyon metodolojisi.
tags:
  - prompting
  - iterasyon
  - test
  - geliştirme
---

**Bir promptu ilk seferinde mükemmel yazmak nadirdir.** İyi prompt **iterasyonla** olur — yazarsın, test edersin, sorunu görürsün, düzeltirsin, tekrar test edersin. Bu sayfa o döngünün sistematik metodolojisini anlatır.

[Temel İlkeler](temel-ilkeler/) ve [4D Çerçevesi](4d-cercevesi/) sayfaları **nasıl yazarsın** sorusuna cevap verir; bu sayfa **yazdıktan sonra ne yaparsın** sorusuna.

## Neden İterasyon?

Promptu ilk yazdığınızda:

- Görevi **kafanızda olduğu gibi** anlatırsınız → ama Claude'a göre belirsiz noktalar vardır
- Beklediğiniz çıktı tipinin örneği yoktur → Claude tahmin eder
- Sınır vakaları (edge cases) düşünülmemiştir → ilk gelen verilerde patlar
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
6. Sürümle (CLAUDE.md veya şablon kütüphanesine kaydet)
```

## 1. Yaz — Taslak Prompt

İlk taslak için pratik şablon ([Prompt Kataloğu](prompt-katalogu/) sayfasında daha fazlası):

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

Mükemmel olmasına gerek yok — taslak.

## 2. Test — 3-5 Örnek Veri

Promptu **gerçek verilerle** test edin. Yapay senaryolar yetmez.

**Test seti seçimi:**

- **Tipik vaka** (1 örnek) → günlük standard vaka
- **Sınır vaka** (1 örnek) → çoğu zaman sorun çıkaran tip
- **Aykırı vaka** (1 örnek) → istisna durum, görev tanımının dışında olabilen
- **Uzun vaka** (1 örnek) → büyük veri / uzun input
- **Boş/eksik vaka** (1 örnek) → veri eksikse Claude ne yapar

5 örnek minimum. Aksi halde "şanslı geldim" ile karıştırırsınız.

## 3. Değerlendir — Üç Boyutlu Skor

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

Çıktıyı kopyala-yapıştır kullanabilir misin, yoksa düzeltmen mi gerek?

- 5: Doğrudan kullanılabilir
- 3: Küçük düzeltmelerle kullanılır
- 1: Çoğunu yeniden yazman gerek

**Toplam:** Her test için 3 boyut × 5 örnek = 15 skor. Ortalama 13+ ise prompt hazır. 10 altında ciddi iterasyon gerek.

## 4. Düzelt — Sorun Türüne Göre Çözüm

Test sonuçlarındaki yaygın sorunlar ve çözümleri:

### Sorun: "Çıktı çok genel / klişe"

**Çözüm:** Daha spesifik örnek verin ([Few-Shot Örnekleme](few-shot-ornekleme/)). Yasak kelime listesi ekleyin.

### Sorun: "Format her seferinde farklı"

**Çözüm:** Format örneği gösterin. "Yukarıdaki yapıya birebir uy" deyin. [Çıktı Formatı](cikti-formati/) sayfasındaki tekniklerle güçlendirin.

### Sorun: "Bazı verileri görmedi"

**Çözüm:** Promptu yapılandırın. "Şu veriyi mutlaka analizine kat" gibi açık talimat. Ya da girişi numaralandırın.

### Sorun: "Türkçe'den İngilizce'ye kayıyor"

**Çözüm:** [CLAUDE.md](../claude-md/nedir/)'de net dil kuralı. [Türkçe Prompt Teknikleri](turkce-prompt-teknikleri/) sayfasına bakın.

### Sorun: "Sınır vakasında sapıttı"

**Çözüm:** O sınır vakasının örneğini few-shot'a ekleyin. "Eğer veri X ise şöyle yap" gibi koşul ekleyin.

### Sorun: "Çok uzun yazıyor"

**Çözüm:** "Maksimum N kelime" katı sınır. "Sadece çıktıyı ver, açıklama yok."

### Sorun: "Halüsinasyon — uydurulmuş veri"

**Çözüm:** "Sadece verilen veriye dayan, uydurma." "Bilmediğin şey için 'veri yok' yaz." [Sınırlamalar](../temeller/sinirlamalar/) ve [Yaygın Hatalar](yaygin-hatalar/) sayfalarına bakın.

## 5. Tekrar Test — Aynı Set

Düzeltme sonrası **aynı 5 test setiyle** baştan başlayın. Yeni veri kullanmayın — düzeltmenin işe yarayıp yaramadığını ancak aynı veriyle ölçersiniz.

Skorların 13+'a çıktığında prompt **kabul edilebilir** seviyede.

## 6. Sürümle — Kalıcı Kayıt

Hazır prompta artık **kalıcı bir yer** verin:

### Seçenek A: CLAUDE.md'ye

Şirket geneli kullanım için: [Takım CLAUDE.md](../claude-md/takim-claude-md/)
Kişisel için: kendi CLAUDE.md'niz

```markdown
## Şablonlar
- "Müşteri itirazı yanıtı şablonu": [bağlantı veya inline]
- "Toplantı özeti şablonu": [...]
```

### Seçenek B: Şirket Şablon Kütüphanesi

Notion / Google Drive / paylaşılan dosyada saklayın. Tüm ekibe açık.

[Şablon Kütüphanesi](../claude-md/sablon-kutuphanesi/) sayfasında nasıl organize edilir var.

### Seçenek C: Sürüm Kontrollü Repo

Daha gelişmiş şirketler git üzerinde prompt repository'si tutar:

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

Önemli değişikliklerde **change log:**

```markdown
- v2.1 (2026-04-26): Yasak kelime listesi genişletildi
- v2.0 (2026-02-15): Few-shot örnekler eklendi, format katılaştırıldı
- v1.3 (2025-11-01): Türkçe kayma kuralı netleşti
```

## A/B Testi — Ciddi Karar İçin

Önemli bir prompt için iki sürüm karşılaştırın:

1. Prompt A (mevcut)
2. Prompt B (yeni öneri)
3. Aynı 10 test verisini her ikisine de verin
4. Üç boyutlu skor karşılaştırın
5. Her veri için "hangi çıktı daha iyi?" → kör değerlendirme (mümkünse başkası yapsın)
6. Skorca üstün olan kazanır

Bu özellikle [Pazarlama](../departmanlar/pazarlama/) içerikleri, [Müşteri hizmetleri](../departmanlar/musteri-hizmetleri/) yanıtları, [Hukuk](../departmanlar/hukuk/) sözleşme şablonları gibi yüksek hacimli iş için değer.

## Üretim Sonrası Geri Bildirim

Bir prompt CLAUDE.md'de aktif kullanımda olduktan sonra da **gözlemlenmeli**:

- Çalışan kullanıyor mu, yoksa bypass mı geçiyor?
- Çıktıyı kullanmadan önce ne kadar düzeltme yapıyor?
- Hangi durumlarda tatmin etmiyor?

Bu geri bildirimi sistematik toplayın:

- Aylık ekip toplantısında "hangi prompt iyi, hangisi sorunlu?"
- Slack'te "prompt-feedback" kanalı
- Çeyreklik kullanım anketi

Sorun çıkan promptlar yeni iterasyon turuna girer.

## Otomasyon — [Scheduled Tasks](../araclar/scheduled-tasks/) ile

Aynı promptu her hafta çalıştırıyorsanız (örn. haftalık satış raporu), bunu [Scheduled Tasks](../araclar/scheduled-tasks/) içine koyun. Prompt sürümü ayrı dosyada tutulur, scheduled task ona referans verir. Promptu güncellediğinizde ertesi hafta yeni sürümle çalışır.

## Yaygın Hata: Sürekli Yamamak

Bir prompt çalıştığında sürekli kurcalamayın. **"Tweaking"** üretkenliği öldürür. Hazır olan prompt 3 ay sabit kalsın, sonra ihtiyaca göre revize edin.

## İterasyon Disiplini — Kişisel Sistem

Kendi prompt yönetiminizi kurun:

1. **Her yeni prompt'u test edin** — minimum 3 örnekle
2. **Skor verin** — 5 üzerinden 3 boyutta
3. **Sürümleyin** — CLAUDE.md veya kişisel notlar
4. **Aylık gözden geçirin** — hangileri çalışıyor, hangileri iyileştirilmeli
5. **Çeyreklik temizlik** — kullanılmayanları silin, eskileri güncelleyin

Bu disiplin uzun vadede **AI okuryazarlığınızı** ciddi şekilde artırır. Bunu kurum çapında uygulamak için [Şirket içi politika](../temeller/sirket-ici-politika/) sayfasında çerçeve var.

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

- [Temel İlkeler](temel-ilkeler/) — Genel prompt mantığı
- [4D Çerçevesi](4d-cercevesi/) — Felsefe
- [Türkçe Prompt Teknikleri](turkce-prompt-teknikleri/) — Türkçe için
- [Prompt Kataloğu](prompt-katalogu/) — Hazır şablonlar
- [Çıktı Formatı](cikti-formati/) — Format kontrolü
- [Few-Shot Örnekleme](few-shot-ornekleme/) — Örnekle güçlendirme
- [Yaygın Hatalar](yaygin-hatalar/) — Tipik tuzaklar
- [İleri Seviye](ileri-seviye/) — Karmaşık iterasyon
- [Şablon Kütüphanesi](../claude-md/sablon-kutuphanesi/) — Kalıcı saklama
- [Ölçüm Metrikleri](../temeller/olcum-metrikleri/) — Genel kalite ölçümü

