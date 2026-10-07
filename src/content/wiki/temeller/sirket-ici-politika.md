---
title: Şirket İçi Claude Kullanım Politikası
description: "Çalışanlarınızın Claude'u nasıl kullanacağını yöneten politika şablonu. Hassas veri, KVKK, paylaşım, saklama ve eğitim tek bir belgede."
tags:
  - temeller
  - politika
  - kvkk
  - guvenlik
lastUpdated: "2026-10-06"
---

**"AI kullanımına dair şirket politikamız var mı?"** sorusu denetim, müşteri sözleşmesi, KVKK denetimi veya iş kazası anında çıkar. Cevap "yok" ise sorun olur. Bu sayfa pratik bir politika şablonu sunar.

Aşağıdaki içerik bir **şablon önerisidir**. Şirketinizin sektörüne, büyüklüğüne ve hassas veri durumuna göre uyarlayın, hukuk müşaviriyle gözden geçirin. [Hukuk departmanı](/wiki/departmanlar/hukuk/) sayfası da rehber içerir.

## Politikanın Amacı

Belge, çalışanlarınızın Claude'u **iş için** kullanırken nelere uyacağını netleştirir. Üç ana hedef:

1. **Riski yönetmek**: hassas veri sızıntısı, halüsinasyon kaynaklı yanlış karar, KVKK ihlali
2. **Verimi maksimize etmek**: politika sınırlayıcı değil, *aşırı temkinli olunmadan* nasıl güvenle kullanılacağını söyleyen
3. **Denetlenebilir olmak**: yıl sonunda denetim sorulursa "evet politikamız var, çalışanlar imzaladı, ihlaller şu şekilde takip ediliyor"

## Şablon: Politika Belgesi

Aşağıdaki yapı bir Word/PDF politika belgesinin omurgasıdır. Her bölümü kendi şirket bağlamına uyarlayın.

### 1. Kapsam

Bu politika [Şirket Adı] çalışanlarının, taşeronlarının ve stajyerlerinin **iş amacıyla** AI asistanı (Claude ve benzerleri) kullanımı için geçerlidir. Kişisel kullanım (mesai dışı, kişisel cihazda, iş hesabıyla giriş yapmamış) kapsam dışıdır.

### 2. Onaylanmış Araçlar

[Şirket adı] aşağıdaki AI araçlarını **iş amaçlı kullanım için onaylar:**

- **Claude** (Anthropic): birincil AI asistanı
  - Erişim: claude.ai web, [Claude Desktop](/wiki/araclar/claude-desktop/), [Claude Mobil](/wiki/araclar/claude-mobil/)
  - Plan: [Şirket plan adı]; kullanıcı yönetimi [admin adı] tarafından yapılır
  - Bireysel hesapla (Pro/Max) kullanılıyorsa Settings → Privacy altındaki "Claude'u geliştirmeye yardım et" ayarı kapalı olmalıdır

Diğer AI araçları (ChatGPT, Gemini, Copilot, Perplexity, vb.) *kişisel hesapla* iş amaçlı kullanım **bu politika ile onaylanmamıştır**. Onay isterseniz [BT departmanı](/wiki/departmanlar/bilgi-teknolojileri/) ile başvurun.

### 3. Hassas Veri Sınıflandırması ve Kullanım

Şirket verileri üç sınıfa ayrılır:

| Sınıf | Tanım | Claude'a girilebilir mi? |
|---|---|---|
| **Açık (Public)** | Web sitesinde, basın bültenlerinde, halka açık | ✅ Evet |
| **İç (Internal)** | Şirket içi paylaşılan, ama dışarı vermek istemediğimiz | ⚠️ Sınırlı (aşağıdaki koşullarla) |
| **Gizli (Confidential)** | Müşteri verileri, finansal sırlar, hukuki süreç, sağlık bilgisi, ticari sırlar | ❌ Asla |

**İç bilgi için koşullar:**
- Şablonun tercihi: yalnız [Team veya Enterprise plan](/wiki/temeller/takim-ve-admin/) hesabı üzerinden girilir (merkezi yönetim ve veri kontrolü için önerilir; şirketiniz farklı karar verebilir)
- Planın [DPA](/wiki/departmanlar/hukuk/) kapsamında olması gerekir (Team ve Enterprise'ta DPA ticari şartlara otomatik dahildir, ayrıca imza gerekmez; Free, Pro ve Max kapsam dışıdır)
- Çalışan veri girmeden önce verinin **niteliğini** kontrol eder

**Gizli veri için tek istisna:**
[Enterprise plan](/wiki/temeller/takim-ve-admin/) ile özel sözleşme (DPA + özel veri saklama süresi + audit log) imzalanmış belirli senaryolarda kullanım onaylanabilir. Bu istisnayı yazılı olarak [Hukuk departmanı](/wiki/departmanlar/hukuk/) onaylar.

### 4. KVKK ve Kişisel Veri

**Kişisel veri:** TC kimlik no, ad-soyad + eposta/telefon, sağlık verisi, banka bilgisi, vb.

- **Müşteri / iş ortağı kişisel verisi:** Aydınlatma metni, KVKK m.5 işleme şartı ve hukuk departmanının onayladığı yurt dışı aktarım dayanağı (KVKK m.9) üçü birden yoksa Claude'a girilemez. Açık rıza, düzenli kullanım için tek başına yeterli dayanak sayılmaz
- **Çalışan kişisel verisi:** İK işleri için sınırlı, anonimleştirilmiş giriş; ham veri girişi yasak
- **Kendi kişisel verim:** Çalışanın kendi adı, e-posta gibi düşük hassasiyetli bilgiler iş bağlamında girilebilir

**Anonimleştirme zorunluluğu:**

Kişisel veri içeren bir görev için Claude'a soru sormadan önce veriyi *jenerik* hâle getirin:

- ❌ "Acme A.Ş. CEO'su Ahmet Yılmaz'a yazacağım yanıt taslağı"
- ✅ "Bir orta ölçekli üretici şirketin CEO'suna yazacağım yanıt taslağı"

Detay için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfası.

### 5. Yasak İçerik

Aşağıdakiler **iş amaçlı Claude kullanımında kesin yasaktır** (Bölüm 3'teki yazılı Enterprise istisnası hariç):

- Müşteri / iş ortağının yazılı izni olmadan onlara ait gizli belgenin yüklenmesi
- Şirket finansalları, ticari sırlar, henüz kamuya açıklanmamış stratejik kararlar
- Şirket içi disiplin, performans değerlendirme, sağlık raporları gibi hassas İK belgeleri
- Hukuki süreç içindeki dosyalar (avukat-müvekkil gizliliğine tabi)
- Üretim formülleri, patent başvurusu hazırlığı, Ar-Ge çıktıları

Şüphedeyseniz **Claude'a girmeden önce sorun.** Yöneticinize veya [Hukuk departmanı](/wiki/departmanlar/hukuk/)'na danışın.

### 6. Bağlantılar, Tarayıcı ve Bilgisayar Kontrolü

Claude'a araç yetkisi verdikçe risk de büyür. Bu bölüm o yetkilerin kim tarafından, hangi koşulda açılacağını belirler:

- **Connector, MCP ve eklentiler:** Yalnız [BT departmanı](/wiki/departmanlar/bilgi-teknolojileri/) onaylı listedeki olanlar kurulur. Connector'lar dış servislere Anthropic'in bulutu üzerinden ulaşır. Yazma yetkisi (e-posta, mesaj ya da dosya gönderme, düzenleme) okuma yetkisinden ayrı onaylanır. Yeni connector isteği BT'ye başvuruyla açılır
- **Claude in Chrome:** [Rol veya birim listesi] kullanabilir. Bankacılık, sağlık kayıtları ve başkasıyla paylaşılmayacak şifreler gibi işlerde kullanılmaz. Claude'un sorduğu her onay okunur, beklenmedik davranışta işlem durdurulur ([Claude for Chrome](/claude/chrome/))
- **Computer use (bilgisayar kontrolü):** Research preview aşamasındadır ve yalnız Pro ve Max'te vardır. [Rol listesi] dışında kullanılmaz, ekranda gizli sınıfta veri açıkken başlatılmaz
- **Prompt injection:** Claude'un okuduğu bir web sayfası, e-posta ya da PDF içine gizlenmiş talimat olabilir. Güvenilmeyen kaynaklar üzerinde Claude'a eylem yetkisi verilmez; para, veri gönderme ya da silme gibi geri dönüşü olmayan adımlar insan onayı olmadan yapılmaz ([Sınırlamalar](/wiki/temeller/sinirlamalar/))

### 7. Hafıza, Paylaşım Linkleri ve Bulutta Çalışan Görevler

- **Hafıza:** Free, Pro ve Max'te varsayılan açık, Team ve Enterprise'ta varsayılan kapalıdır (owner kontrolünde). Şirket tercihini yazın: [açık / kapalı]. Açıksa hafızaya müşteri adı, kişisel veri ve gizli bilgi kaydettirilmez; hafıza listesi [üç ayda bir] gözden geçirilir
- **Herkese açık paylaşım linkleri:** Sohbet ve artifact'ler link ile dışarı açılabilir. İç ya da gizli sınıf içerik için herkese açık link üretilmez; kurumsal planlarda bu izin admin ayarıdır ([Takım ve Admin](/wiki/temeller/takim-ve-admin/))
- **Bulutta çalışan Cowork görevleri:** 6 Ekim 2026'dan itibaren Pro ve Max'te yeni Cowork görevleri bulutta çalışır, "yalnızca bilgisayarınızda" seçeneği kalkar. Yerel dosyalarda gizli sınıf veri bulunan bilgisayarlarda bireysel Pro/Max hesabıyla Cowork görevi başlatılmaz

### 8. Çıktı Sorumluluğu

Claude **araç**tır. Çıktının doğruluğundan, uygunluğundan, etik standartlardan **çalışan sorumludur.**

Kurallar:

- Hiçbir Claude çıktısı kontrol edilmeden müşteriye / iş ortağına / kamuya gitmez
- Sayısal veri içeren çıktılar (rakam, oran, fiyat) kaynakla doğrulanır
- Hukuki / mali / sağlık / mühendislik kararları **danışman seviyesinde Claude'la** alınır, **karar seviyesinde uzman onayıyla**
- Halüsinasyon olasılığı her çıktıda var ([Sınırlamalar](/wiki/temeller/sinirlamalar/))

[4D Çerçevesi](/wiki/prompting/4d-cercevesi/)'nin **Diligence (özen)** bacağı çalışanın bu sorumluluğunu somutlar.

### 9. Atıf ve Şeffaflık

İç dokümanlar için: çalışan Claude'u kullandığını gizlemez ama her cümlede belirtmez de. Şirket politikası iki yaklaşımdan birini seçmeli:

- **A modeli:** AI ile üretilen tüm içerik altında "AI ile hazırlandı, [çalışan adı] kontrol etti" notu
- **B modeli:** Sadece müşteriye giden ve hukuki bağlayıcılığı olan dokümanlarda atıf zorunlu

Müşteri sözleşmelerinde, akademik raporlarda, basın bültenlerinde **A modeli** önerilir.

### 10. Saklama ve Silme

- **Sohbet geçmişi:** Anthropic standart politikası (silinen sohbet 30 gün içinde arka uçtan temizlenir, ayrıntı [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/)); [Enterprise plan](/wiki/temeller/takim-ve-admin/)'da özel saklama ayarı yapılabilir
- **İndirilen dosyalar:** Şirket bilgisayarında saklanan Claude çıktıları, **şirket dosya sınıflandırma standartlarına** göre saklanır
- **Hassas içerik:** İşi biten projede ilgili sohbet ve dosyalar silinir
- **Çalışan ayrılırsa:** Hesabı kapatılır, sohbet geçmişi şirket politikasına göre silinir veya arşivlenir

[Geçmiş ve Arama](/wiki/araclar/gecmis-ve-arama/) sayfası teknik akışı verir.

### 11. Eğitim Zorunluluğu

Bu politika imzalandıktan sonra çalışan, [İlk 7 Gün](/wiki/temeller/ilk-7-gun/) rehberini takip etmeyi taahhüt eder. Ek olarak şirketin sağladığı eğitim:

- Yeni başlayanlar için onboarding ([süre])
- Çeyreklik içsel paylaşım toplantıları
- Yıllık politika tazeleme

### 12. İhlal ve Disiplin

Politika ihlali durumunda izlenecek süreç:

1. İlk uyarı: yazılı (basit ihlaller için)
2. İkinci uyarı + zorunlu eğitim
3. Ciddi ihlaller (gizli veri sızıntısı, müşteri zararı) → İK + hukuk yönlendirmesi
4. Aşırı durumlar → İş Kanunu kapsamında değerlendirme

İhlaller için bildirim hattı: [E-posta veya kanal], anonim de bildirilebilir.

### 13. Politika Sahipliği ve Güncelleme

- **Sahip:** [Pozisyon: örn. CIO, BT Müdürü, İK Direktörü]
- **Onaylayan:** [Üst yönetim]
- **İlk yayım:** [Tarih]
- **Sonraki gözden geçirme:** Yıllık veya AI yasal düzenlemesi değiştiğinde
- **Sürüm:** [Versiyon]

---

## Politikayı Yayınlama Süreci

1. **Şablonu uyarlayın**: bu sayfadaki yapıyı kendi şirketiniz için doldurun
2. **Hukuk + İK gözden geçirsin**: KVKK, İş Kanunu, sözleşme açısından
3. **Üst yönetim onaylasın**: politika ağırlığı için
4. **Tüm çalışanlara duyurun**: toplantı + e-posta
5. **İmza alın**: fiziksel veya dijital, dosyada saklanır
6. **Eğitim verin**: politikayı sadece duyurmak yetmez, anlatmak gerekir
7. **Yıllık tekrar gözden geçirin**: teknoloji ve mevzuat değişiyor

## Sık Yapılan Hatalar

**Çok kısıtlayıcı politika.** "Hiçbir veri girilemez" türü politikalar çalışanlar tarafından **görmezden gelinir** ve daha tehlikeli olur. Daha sınırlı ama uygulanabilir bir politika, geniş ama göz ardı edilen bir politikadan iyidir.

**Çok belirsiz politika.** "Hassas veriyi girmeyin" yetmez; "hassas veri" için tanım, örnek ve sınıflar olmalı.

**İhlal süreci yok.** Politika varsa, ihlal süreci de olmalı. Yoksa bağlayıcı değildir.

**Tek sefer anlatma.** Çalışanlar politikayı 6 ay sonra unutur. Çeyreklik yenileyin.

**Kişisel hesap kullanımı.** Çalışan iş için kişisel ChatGPT/Gemini hesabını kullanıyorsa, politika bunu da kapsamalı.

## Politikanın Şirket İçi Yansımaları

Bu politika tek başına yetmez; aşağıdaki belgelerle uyumlu olmalı:

- **İş sözleşmesi**: gizlilik maddesi AI'a açık atıf yapsın
- **KVKK aydınlatma metni**: müşteriye Claude kullanımı bildirilirse
- **Tedarikçi sözleşmeleri**: [DPA](/wiki/temeller/takim-ve-admin/) ile tutarlı
- **Bilgi güvenliği politikası**: varsa, AI bölümü eklensin

[Hukuk departmanı](/wiki/departmanlar/hukuk/) sayfası bu uyum işini detaylandırır.

## Kopyala-Yapıştır Şablon

Aşağıdaki metni kendi belgenize yapıştırıp `[köşeli parantez]` alanlarını doldurun. Sektörünüze göre uyarlayın, hukuk müşaviriyle gözden geçirin.

```text
[ŞİRKET ADI] YAPAY ZEKA (CLAUDE) KULLANIM POLİTİKASI
Sürüm: [versiyon] | Sahip: [pozisyon] | Onaylayan: [üst yönetim]
İlk yayım: [tarih] | Sonraki gözden geçirme: yıllık

1. KAPSAM
Politika, çalışanların, taşeronların ve stajyerlerin iş amacıyla AI
asistanı kullanımı için geçerlidir. Kişisel kullanım kapsam dışıdır.

2. ONAYLI ARAÇLAR
Onaylı araç: Claude ([plan adı]). Kullanıcı yönetimi: [admin adı].
Kişisel hesapla iş amaçlı AI kullanımı onaylı değildir.
Bireysel hesaplarda "Claude'u geliştirmeye yardım et" ayarı kapalı olmalıdır.

3. VERİ SINIFLARI
Açık: Claude'a girilebilir.
İç: yalnız [Team/Enterprise] hesabıyla ve DPA kapsamında girilebilir.
Gizli: girilemez. Tek istisna: [Hukuk]'un yazılı onayladığı Enterprise senaryoları.

4. KİŞİSEL VERİ (KVKK)
Müşteri ve iş ortağı kişisel verisi; aydınlatma metni, KVKK m.5 işleme şartı
ve hukukun onayladığı yurt dışı aktarım dayanağı (m.9) yoksa girilemez.
Çalışan kişisel verisi anonimleştirilerek girilir.

5. YASAK İÇERİK
Müşteri gizli belgeleri (yazılı izin olmadan), finansal sırlar, açıklanmamış
kararlar, İK disiplin ve sağlık belgeleri, hukuki süreç dosyaları, Ar-Ge çıktıları.

6. BAĞLANTILAR, TARAYICI, BİLGİSAYAR KONTROLÜ
Yalnız BT onaylı connector, MCP ve eklentiler kurulur; yazma yetkisi ayrıca onaylanır.
Claude in Chrome: [roller]; bankacılık, sağlık kaydı, paylaşılmayacak şifre işlerinde yasak.
Computer use: [roller]; ekranda gizli veri varken başlatılmaz.
Güvenilmeyen kaynakta eylem yetkisi verilmez; geri dönüşsüz adımlar insan onayı ister.

7. HAFIZA, PAYLAŞIM, BULUT GÖREVLERİ
Hafıza: [açık/kapalı]; açıksa kişisel veri ve gizli bilgi kaydettirilmez.
İç ve gizli içerik için herkese açık paylaşım linki üretilmez.
Gizli veri bulunan bilgisayarda bireysel Pro/Max ile Cowork görevi başlatılmaz.

8. ÇIKTI SORUMLULUĞU
Çıktıdan çalışan sorumludur. Kontrolsüz çıktı müşteriye, iş ortağına veya
kamuya gitmez. Rakamlar kaynakla doğrulanır.

9. ATIF
[A modeli / B modeli].

10. SAKLAMA VE SİLME
Biten projedeki hassas sohbet ve dosyalar silinir. Ayrılan çalışanın
hesabı kapatılır, geçmişi [sil/arşivle].

11. EĞİTİM
Yeni başlayanlar onboarding alır; çeyreklik paylaşım, yıllık tazeleme yapılır.

12. İHLAL
Yazılı uyarı, ikinci uyarı ve eğitim, ciddi ihlalde İK ve hukuk yönlendirmesi.
Bildirim hattı: [e-posta/kanal] (anonim bildirim mümkündür).

Okudum, anladım, kabul ediyorum.
Ad-soyad: [ ]  Tarih: [ ]  İmza: [ ]
```

## Mini Versiyon: 1 Sayfa

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

- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Yasal arka plan
- [Takım ve Admin](/wiki/temeller/takim-ve-admin/): Plan ve admin paneli
- [Hukuk Departmanı](/wiki/departmanlar/hukuk/): Politikanın hukuki yansıması
- [BT Departmanı](/wiki/departmanlar/bilgi-teknolojileri/): IT açısından uygulama
- [İlk 7 Gün](/wiki/temeller/ilk-7-gun/): Çalışan eğitim rehberi
- [4D Çerçevesi](/wiki/prompting/4d-cercevesi/): Çıktı sorumluluğunun felsefi karşılığı
- [Geçmiş ve Arama](/wiki/araclar/gecmis-ve-arama/): Sohbet saklama tarafı

