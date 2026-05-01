---
title: Eğitim ve Akademi — Claude Uygulamaları
description: Üniversite, okul, dershane, kurs ve eğitmenler için Claude — ders planı, sınav sorusu, ödev geri bildirimi, akademik araştırma, öğrenci iletişimi.
tags:
  - departmanlar
  - egitim
  - akademi
  - okul
---

Eğitim sektörü Türkiye'de geniş — üniversiteler, lise/ortaokul, özel okullar, dershaneler, dil okulları, online kurs platformları, bireysel eğitmenler. Her birinde **müfredat hazırlama, sınav üretme, ödev değerlendirme, öğrenci iletişimi** zaman alıcı, tekrar eden işler. Claude bunların hepsinde derinlemesine değer üretir.

## Claude'un Çözdüğü Temel Sıkıntılar

- Ders planı her dönem sıfırdan, eski plana referans yok
- Sınav sorusu üretmek saatler alıyor, çeşitlilik az
- Ödev değerlendirmek çok zaman alıyor, geri bildirim yüzeysel
- Akademik makale taraması yetişmiyor
- Öğrenci/veli iletişimi her seferinde kişiselleştirilemiyor
- Çoklu seviye için aynı konuyu farklı şekillerde anlatmak zor

## Bölüm 1 — Ders Planı ve Müfredat

### Ders Planı Hazırlama

Bir konunun haftalık / dersi başına planı. Claude:

- Öğrenme hedefleri
- Kavram açılımı sırası
- Etkinlik / örnek / uygulama önerisi
- Süre planı (50 dakikalık ders için ne kadar nereye)
- Ödev / değerlendirme önerisi

Bir öğretmen 2 saatte hazırladığı planı 30 dakikada Claude'la çıkarır.

### Müfredat Yazımı

Bir kursun yıllık müfredatı. Konu sırası, ön gerekler, kazanım listesi, ölçme planı. Claude akademik standartları (MEB için, üniversite için, Common Core için) gözeterek üretir.

### Çoklu Seviye Adaptasyonu

Aynı konuyu **6. sınıf**, **9. sınıf**, **üniversite 1. sınıf** seviyelerine göre farklı kelime, farklı örnekle anlatma. Claude seviye-uyumu konusunda güçlü.

### Ders Notu / Sunum

Konunun öğrenci dağıtım notu (handout) ve sunum slaytı. [Skills](../yetenekler/skills/) ile .pptx dosyası doğrudan çıkar.

## Bölüm 2 — Sınav ve Değerlendirme

### Sınav Sorusu Üretme

Açık uçlu, çoktan seçmeli, doğru-yanlış, eşleştirme — Claude tüm tipleri konuya göre üretir. **Yenilik:** sıkıcı klişe sorular yerine **gerçek hayat senaryosu** içeren sorular hazırlar.

[Few-Shot Örnekleme](../prompting/few-shot-ornekleme/) ile sizin sınav tarzınızı öğretebilirsiniz.

### Soru Bankası Genişletme

Mevcut soru bankanızı Claude'la 2-3 katına çıkarın — orijinal soruların **paraphrase**, varyasyon, ters versiyonları otomatik üretilir.

### Cevap Anahtarı ve Çözüm

Sorularınız için tam çözüm + alternatif çözüm yolları + yanlış cevap analizi (bu cevap neden yanlış).

### Bloom Taksonomisi Dengeleme

Sınavın hatırlama-anlama-uygulama-analiz-değerlendirme-yaratma seviyelerinde dengesini Claude analiz eder, eksik seviye varsa soru ekler.

## Bölüm 3 — Ödev ve Geri Bildirim

### Ödev Değerlendirmesi (Tarama Aşaması)

Öğrenci ödevi yüklenir. Claude:

- Ödev kalitesinin kabaca seviyesi
- En güçlü ve en zayıf yönü
- Öğretmenin odaklanması gereken 3 nokta

Bu **karar değil tarama** — son notu öğretmen verir, Claude ön gözden geçirme yapar.

### Bireyselleştirilmiş Geri Bildirim

50 ödev × bireysel geri bildirim → bir öğretmen için günler. Claude'la her ödev için 3-5 cümle kişiselleştirilmiş geri bildirim, öğretmen tarayarak onaylar.

### Plagiat / Kopya Kontrolü

Claude doğrudan plagiat detector değil, ama "bu metin sıradan değil mi, daha gelişmiş mi" sezgisi verebilir. Final karar plagiat detector + öğretmen yargısı.

### Yazma Becerileri Geri Bildirimi

Türkçe / yabancı dil kompozisyon değerlendirmesi — gramer, akış, argüman gücü, kelime dağarcığı. Claude detaylı analiz çıkarır.

## Bölüm 4 — Akademik Araştırma (Yüksek Eğitim)

### Literatür Taraması

[Research Mode](../yetenekler/research-mode/) ile bir konuda akademik literatür özeti. Akademik kaynak değil ama **tarama başlangıcı** olarak değerli.

**Önemli:** Akademik makalenin tam gizli/ücretli içeriklerine Claude erişemez. Açık kaynaklar üzerinden tarama yapar. Final akademik atıflar için DergiPark, Google Scholar, JSTOR, Web of Science manual.

### Makale Taslağı

Akademik makale yazımı için taslak — abstract, giriş, yöntem, tartışma. Claude'la hızlı, sonra **akademik üslupta öğretmen** parlatır.

### Atıf ve Bibliography

APA, MLA, Chicago, ISNAD format dönüşümleri Claude'la doğru ve hızlı.

### Tez Danışmanlığı (Öğrenciye)

Yüksek lisans / doktora öğrencisi tezinin bölümleri için Claude'dan **destek** alır — tarama, taslak, dil düzeltme. Akademik etik açısından Claude **araç**, son ürün öğrencinin emek ve düşüncesidir.

## Bölüm 5 — Öğrenci ve Veli İletişimi

### Veli E-postası

"Çocuğunuzun bu dönemki gelişimi" tarzı e-postalar her dönem yüzlerce. Claude veli başına kişiselleştirilmiş taslak çıkarır.

### Olay Bildirimi

Bir öğrenci olayı (devamsızlık, davranış, kaza). Claude olgusal, profesyonel, **abartmadan** veli bildirim metni hazırlar. Hassas durum.

### Bilgilendirme Yazıları

Müfredat değişikliği, etkinlik daveti, gezi onay formu. Claude ile profesyonel ama sıcak.

### Çoklu Dilde

Yabancı / yabancı dil ağırlıklı veli kitlesi varsa, Claude direk çeviriden öte **kültürel olarak uygun** iletişim kurar.

## Bölüm 6 — İdare ve Yönetim

### Eğitim Müfettişi Hazırlığı

MEB denetim öncesi belge hazırlığı — yıllık plan, performans dosyası, sınıf defterleri kontrolü. Claude eksiklerin listesini çıkarır.

### Performans Değerlendirme

Öğretmen performans değerlendirmesi (yıllık) — yapıcı geri bildirim çerçevesi. [İK departmanı](insan-kaynaklari/) sayfasında genel performans yaklaşımı.

### Bütçe ve Kaynak Planlama

Sınıf donanımı, materyal, kurs satın alma — gerekçeli liste Claude'la net çıkar.

## Pratik Kullanım Senaryoları

### Senaryo 1: Lise Öğretmeni — Pazartesi Sabah

Pazartesi 07:30. Öğretmen Cuma'dan kalan ödevleri unutmuş. Claude'a sınıf seviyesini söyler, Cuma konusunu hatırlatır → 10 ödev sorusu, çözüm anahtarı, 30 dakikalık tartışma planı 5 dakikada hazır.

### Senaryo 2: Üniversite Asistan

Doktora öğrencisi, dersin asistanlığını yapıyor. Bu hafta ders konusu için Claude'la **literatür taraması** yapar, **slayt seti** hazırlar, **forum sorularına** taslak yanıt verir. Asistanlık 12 saat/hafta yerine 6 saatte biter.

### Senaryo 3: Dil Okulu

Bir dil kursunda öğretmen 4 farklı seviye gruba aynı kavramı (örn. "phrasal verbs") anlatacak. Claude her seviye için farklı örnek, farklı egzersiz seti çıkarır.

### Senaryo 4: Online Kurs Hazırlığı

Bireysel eğitmen, bir Udemy kursu açacak. Konu listesi var ama içerik yok. Claude'la 8 hafta içerik 3 haftada üretilir — slayt, video senaryosu, alıştırma, sınav.

## CLAUDE.md Tavsiyesi

Eğitmen için temel yapı:

```markdown
## Eğitmen Profili
- Kurum: [okul / üniversite / kurs]
- Seviye: [öğrenci yaş aralığı]
- Branş: [matematik / İngilizce / fizik / vs.]
- Müfredat: [MEB / üniversite / IB / vb.]

## Voice
- Öğrenci-merkezli. Patronvari yok.
- Pozitif ama gerçekçi geri bildirim.

## Yap
- Sınav sorularında gerçek hayat bağlamı ver
- Ödev değerlendirmesinde 3 güçlü + 2 gelişim alanı
- Veli iletişiminde olgusal kal, abartı yok

## Yapma
- Öğrenci ismini Claude'a tam yapıştırma (anonimleştir)
- Hassas durum (psikolojik, ailevi) Claude'da işleme
- Plagiat suçlamasını otomatik üretme
```

## Kullanım Engelleri

**Engel:** "Eğitim hassas, AI ile akademik etik sorunlu olur."

**Çözüm:** Claude **araç**tır, son üretim öğretmenin/öğrencinin işidir. Şeffaf kullanım: "AI ile taslak ürettik, ben düzelttim" notu olabilir. [Şirket içi politika](../temeller/sirket-ici-politika/) sayfası kullanım sınıflarını verir.

**Engel:** "Öğrenci verisi KVKK kapsamında çok hassas."

**Çözüm:** Tüm öğrenci verisi anonimleştirilerek girilir. KVKK aydınlatma metinlerinde AI kullanımı belirtilebilir. [Hukuk departmanı](hukuk/) bağlam verir.

**Engel:** "Öğretmenler teknolojiye dirençli."

**Çözüm:** İlk hafta sadece **sınav sorusu üretme** ile başla — kazanan görünür olur, direnç çözülür. [İlk 7 Gün](../temeller/ilk-7-gun/) genel başlangıç rehberi.

## Bireysel Eğitmen / Online Kurs

Tek başına bir öğretmen / koç / kurs eğitmeni için Claude'un değeri olağanüstü. İçerik üretim hızı 3-5x artar. [Bireysel program](https://zamana.com.tr) bu profile uygun.

## Üniversite Bağlamı — Özel Notlar

- **Akademik integrity:** Öğrenciye Claude kullanımını şeffaf duyurun. Çoğu üniversite "AI tool kullanımını **belirtmek koşuluyla**" izin veriyor.
- **Araştırma etiği:** Claude'la üretilmiş araştırma içeriği akademik makalede atıfla bildirilmeli (henüz standart oturmadı; üniversitenizin politikasına bakın).
- **Uzaktan eğitim:** Online dersler için Claude öğrenci sorularına 7/24 yanıt veren bir asistan kurma temelini oluşturur.

## İlgili Sayfalar

- [Pazarlama Departmanı](pazarlama/) — Eğitim kurumu pazarlaması
- [İK Departmanı](insan-kaynaklari/) — Öğretmen yönetimi
- [Müşteri Hizmetleri](musteri-hizmetleri/) — Veli iletişimi
- [Hukuk Departmanı](hukuk/) — KVKK, eğitim mevzuatı
- [Research Mode](../yetenekler/research-mode/) — Akademik tarama
- [Skills](../yetenekler/skills/) — Sunum, çalışma kâğıdı üretme
- [Few-Shot Örnekleme](../prompting/few-shot-ornekleme/) — Sınav tarzınız öğretme
- [Şablon Kütüphanesi](../claude-md/sablon-kutuphanesi/) — Eğitim şablonları

