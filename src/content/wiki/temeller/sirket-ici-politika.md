---
title: Şirket İçi Claude Kullanım Politikası
description: "Çalışanlarınızın Claude'u nasıl kullanacağını yöneten politika şablonu. Hassas veri, KVKK, paylaşım, saklama, eğitim — tek bir belgede."
tags:
  - temeller
  - politika
  - kvkk
  - guvenlik
---

**"AI kullanımına dair şirket politikamız var mı?"** sorusu denetim, müşteri sözleşmesi, KVKK denetimi veya iş kazası anında çıkar. Cevap "yok" ise sorun olur. Bu sayfa pratik bir politika şablonu sunar.

Aşağıdaki içerik **şablon önerisidir** — şirketinizin sektörüne, büyüklüğüne, hassas veri durumuna göre uyarlayın. Hukuk müşaviri ile gözden geçirin. [Hukuk departmanı](../departmanlar/hukuk/) sayfası da rehber içerir.

## Politikanın Amacı

Belge, çalışanlarınızın Claude'u **iş için** kullanırken nelere uyacağını netleştirir. Üç ana hedef:

1. **Riski yönetmek** — hassas veri sızıntısı, halüsinasyon kaynaklı yanlış karar, KVKK ihlali
2. **Verimi maksimize etmek** — politika sınırlayıcı değil, *aşırı temkinli olunmadan* nasıl güvenle kullanılacağını söyleyen
3. **Denetlenebilir olmak** — yıl sonunda denetim sorulursa "evet politikamız var, çalışanlar imzaladı, ihlaller şu şekilde takip ediliyor"

## Şablon — Politika Belgesi

Aşağıdaki yapı bir Word/PDF politika belgesinin omurgasıdır. Her bölümü kendi şirket bağlamına uyarlayın.

### 1. Kapsam

Bu politika [Şirket Adı] çalışanlarının, taşeronlarının ve stajyerlerinin **iş amacıyla** AI asistanı (Claude ve benzerleri) kullanımı için geçerlidir. Kişisel kullanım (mesai dışı, kişisel cihazda, iş hesabıyla giriş yapmamış) kapsam dışıdır.

### 2. Onaylanmış Araçlar

[Şirket adı] aşağıdaki AI araçlarını **iş amaçlı kullanım için onaylar:**

- **Claude** (Anthropic) — birincil AI asistanı
  - Erişim: claude.ai web, [Claude Desktop](../araclar/claude-desktop/), [Claude Mobil](../araclar/claude-mobil/)
  - Plan: [Şirket plan adı] — kullanıcı yönetimi [admin adı] tarafından yapılır

Diğer AI araçları (ChatGPT, Gemini, Copilot, Perplexity, vb.) *kişisel hesapla* iş amaçlı kullanım **bu politika ile onaylanmamıştır**. Onay isterseniz [BT departmanı](../departmanlar/bilgi-teknolojileri/) ile başvurun.

### 3. Hassas Veri Sınıflandırması ve Kullanım

Şirket verileri üç sınıfa ayrılır:

| Sınıf | Tanım | Claude'a girilebilir mi? |
|---|---|---|
| **Açık (Public)** | Web sitesinde, basın bültenlerinde, halka açık | ✅ Evet |
| **İç (Internal)** | Şirket içi paylaşılan, ama dışarı vermek istemediğimiz | ⚠️ Sınırlı (aşağıdaki koşullarla) |
| **Gizli (Confidential)** | Müşteri verileri, finansal sırlar, hukuki süreç, sağlık bilgisi, ticari sırlar | ❌ Asla |

**İç bilgi için koşullar:**
- Sadece [Takım veya Enterprise plan](takim-ve-admin/) hesabı üzerinden girilir
- Şirket [DPA](../departmanlar/hukuk/) imzalı olmalı
- Çalışan veri girmeden önce verinin **niteliğini** kontrol eder

**Gizli veri için tek istisna:**
[Enterprise plan](takim-ve-admin/) ile özel sözleşme (DPA + yerel saklama + audit log) imzalanmış belirli senaryolarda kullanım onaylanabilir. Bu istisnayı yazılı olarak [Hukuk departmanı](../departmanlar/hukuk/) onaylar.

### 4. KVKK ve Kişisel Veri

**Kişisel veri:** TC kimlik no, ad-soyad + eposta/telefon, sağlık verisi, banka bilgisi, vb.

- **Müşteri / iş ortağı kişisel verisi:** Yazılı bilgilendirme ve gerekiyorsa açık rıza alınmadan Claude'a girilemez
- **Çalışan kişisel verisi:** İK işleri için sınırlı, anonimleştirilmiş giriş; ham veri girişi yasak
- **Kendi kişisel verim:** Çalışanın kendi adı, e-posta gibi düşük hassasiyetli bilgiler iş bağlamında girilebilir

**Anonimleştirme zorunluluğu:**

Kişisel veri içeren bir görev için Claude'a soru sormadan önce veriyi *jenerik* hâle getirin:

- ❌ "Acme A.Ş. CEO'su Ahmet Yılmaz'a yazacağım yanıt taslağı"
- ✅ "Bir orta ölçekli üretici şirketin CEO'suna yazacağım yanıt taslağı"

Detay için [Gizlilik ve KVKK](gizlilik-kvkk/) sayfası.

### 5. Yasak İçerik

Aşağıdakiler **iş amaçlı Claude kullanımında kesin yasaktır:**

- Müşteri / iş ortağının yazılı izni olmadan onlara ait gizli belgenin yüklenmesi
- Şirket finansalları, ticari sırlar, henüz kamuya açıklanmamış stratejik kararlar
- Şirket içi disiplin, performans değerlendirme, sağlık raporları gibi hassas İK belgeleri
- Hukuki süreç içindeki dosyalar (avukat-müvekkil gizliliğine tabi)
- Üretim formülleri, patent başvurusu hazırlığı, Ar-Ge çıktıları

Şüphedeyseniz: **sormadan önce, sormayın.** Yöneticinize veya [Hukuk departmanı](../departmanlar/hukuk/)'na danışın.

### 6. Çıktı Sorumluluğu

Claude **araç**tır. Çıktının doğruluğundan, uygunluğundan, etik standartlardan **çalışan sorumludur.**

Kurallar:

- Hiçbir Claude çıktısı kontrol edilmeden müşteriye / iş ortağına / kamuya gitmez
- Sayısal veri içeren çıktılar (rakam, oran, fiyat) kaynakla doğrulanır
- Hukuki / mali / sağlık / mühendislik kararları **danışman seviyesinde Claude'la** alınır, **karar seviyesinde uzman onayıyla**
- Halüsinasyon olasılığı her çıktıda var ([Sınırlamalar](sinirlamalar/))

[4D Çerçevesi](../prompting/4d-cercevesi/)'nin **Diligence (özen)** bacağı çalışanın bu sorumluluğunu somutlar.

### 7. Atıf ve Şeffaflık

İç dokümanlar için: çalışan Claude'u kullandığını gizlemez ama her cümlede belirtmez de. Şirket politikası iki yaklaşımdan birini seçmeli:

- **A modeli:** AI ile üretilen tüm içerik altında "AI ile hazırlandı, [çalışan adı] kontrol etti" notu
- **B modeli:** Sadece müşteriye giden ve hukuki bağlayıcılığı olan dokümanlarda atıf zorunlu

Müşteri sözleşmelerinde, akademik raporlarda, basın bültenlerinde **A modeli** önerilir.

### 8. Saklama ve Silme

- **Sohbet geçmişi:** Anthropic standart politikası; [Enterprise plan](takim-ve-admin/)'da özel saklama ayarı yapılabilir
- **İndirilen dosyalar:** Şirket bilgisayarında saklanan Claude çıktıları, **şirket dosya sınıflandırma standartlarına** göre saklanır
- **Hassas içerik:** İşi biten projede ilgili sohbet ve dosyalar silinir
- **Çalışan ayrılırsa:** Hesabı kapatılır, sohbet geçmişi şirket politikasına göre silinir veya arşivlenir

[Geçmiş ve Arama](../araclar/gecmis-ve-arama/) sayfası teknik akışı verir.

### 9. Eğitim Zorunluluğu

Bu politika imzalandıktan sonra çalışan, [İlk 7 Gün](ilk-7-gun/) rehberini takip etmeyi taahhüt eder. Ek olarak şirketin sağladığı eğitim:

- Yeni başlayanlar için onboarding (saat/gün tahmini)
- Çeyreklik içsel paylaşım toplantıları
- Yıllık politika tazeleme

Zamana retainer veya bireysel programa katılan çalışanlar bu kapsamda sayılır.

### 10. İhlal ve Disiplin

Politika ihlali durumunda izlenecek süreç:

1. İlk uyarı — yazılı (basit ihlaller için)
2. İkinci uyarı + zorunlu eğitim
3. Ciddi ihlaller (gizli veri sızıntısı, müşteri zararı) → İK + hukuk yönlendirmesi
4. Aşırı durumlar → İş Kanunu kapsamında değerlendirme

İhlaller için bildirim hattı: [E-posta veya kanal] — anonim de bildirilebilir.

### 11. Politika Sahipliği ve Güncelleme

- **Sahip:** [Pozisyon — örn. CIO, BT Müdürü, İK Direktörü]
- **Onaylayan:** [Üst yönetim]
- **İlk yayım:** [Tarih]
- **Sonraki gözden geçirme:** Yıllık veya AI yasal düzenlemesi değiştiğinde
- **Sürüm:** [Versiyon]

---

## Politikayı Yayınlama Süreci

1. **Şablonu uyarlayın** — bu sayfadaki yapıyı kendi şirketiniz için doldurun
2. **Hukuk + İK gözden geçirsin** — KVKK, İş Kanunu, sözleşme açısından
3. **Üst yönetim onaylasın** — politika ağırlığı için
4. **Tüm çalışanlara duyurun** — toplantı + e-posta
5. **İmza alın** — fiziksel veya dijital, dosyada saklanır
6. **Eğitim verin** — politikayı sadece duyurmak yetmez, anlatmak gerekir
7. **Yıllık tekrar gözden geçirin** — teknoloji ve mevzuat değişiyor

## Sık Yapılan Hatalar

**Çok kısıtlayıcı politika.** "Hiçbir veri girilemez" türü politikalar çalışanlar tarafından **görmezden gelinir** ve daha tehlikeli olur. Daha sınırlı ama uygulanabilir bir politika, geniş ama göz ardı edilen bir politikadan iyidir.

**Çok belirsiz politika.** "Hassas veriyi girmeyin" yetmez — "hassas veri" tanımı, örnekleri, sınıfları olmalı.

**İhlal süreci yok.** Politika varsa, ihlal süreci de olmalı. Yoksa bağlayıcı değildir.

**Tek sefer anlatma.** Çalışanlar politikayı 6 ay sonra unutur. Çeyreklik yenileyin.

**Kişisel hesap kullanımı.** Çalışan iş için kişisel ChatGPT/Gemini hesabını kullanıyorsa, politika bunu da kapsamalı.

## Politikanın Şirket İçi Yansımaları

Bu politika tek başına yetmez; aşağıdaki belgelerle uyumlu olmalı:

- **İş sözleşmesi** — gizlilik maddesi AI'a açık atıf yapsın
- **KVKK aydınlatma metni** — müşteriye Claude kullanımı bildirilirse
- **Tedarikçi sözleşmeleri** — [DPA](takim-ve-admin/) ile tutarlı
- **Bilgi güvenliği politikası** — varsa, AI bölümü eklensin

[Hukuk departmanı](../departmanlar/hukuk/) sayfası bu uyum işini detaylandırır.

## Mini Versiyon — 1 Sayfa

Küçük şirketlerde (5-15 çalışan) yukarıdaki belge fazla ağırdır. Bir sayfaya sığan basit versiyon:

```
1. Sadece [Şirket plan] üzerinden Claude kullanın.
2. Müşteri / kişisel veri girmeden önce anonimleştirin.
3. Sözleşme, finansal, sağlık, hukuki belge yüklemeyin.
4. Çıktıyı kontrol etmeden müşteriye göndermeyin.
5. Şüphede [Sorumlu kişi] ile konuşun.
6. Yıllık tazeleme eğitimi zorunludur.
```

## İlgili Sayfalar

- [Gizlilik ve KVKK](gizlilik-kvkk/) — Yasal arka plan
- [Takım ve Admin](takim-ve-admin/) — Plan ve admin paneli
- [Hukuk Departmanı](../departmanlar/hukuk/) — Politikanın hukuki yansıması
- [BT Departmanı](../departmanlar/bilgi-teknolojileri/) — IT açısından uygulama
- [İlk 7 Gün](ilk-7-gun/) — Çalışan eğitim rehberi
- [4D Çerçevesi](../prompting/4d-cercevesi/) — Çıktı sorumluluğunun felsefi karşılığı
- [Geçmiş ve Arama](../araclar/gecmis-ve-arama/) — Sohbet saklama tarafı

