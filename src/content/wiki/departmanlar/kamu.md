---
title: "Kamu Kurumları: Claude Uygulamaları (Hassas Sektör)"
seoTitle: "Kamu Kurumlarında ve Belediyelerde Claude Nasıl Kullanılır?"
description: "Kamu kurumu ve belediye çalışanı için Claude: resmi yazı taslağı, mevzuat özeti, toplantı tutanağı, vatandaş başvurusu yanıtı. 2019/12 Genelgesi ve KVKK sınırları."
tags:
  - departmanlar
  - kamu
  - belediye
  - kvkk
  - hassas
lastUpdated: "2026-10-06"
---

Kamu kurumunda iş büyük ölçüde yazıdır: resmi yazı, mevzuat okuma, tutanak, vatandaş başvurusuna yanıt. Claude bu işlerde zaman kazandırır. Ama kamu kurumunun önünde özel sektörden farklı bir sınır vardır: **verinin nerede durduğu**. Bu sayfa hangi işlerin güvenle yapılabileceğini, hangilerinin yapılmaması gerektiğini ve kararı kimin vermesi gerektiğini anlatır.

**Önemli:** Bu sayfa hukuki tavsiye değil, genel rehberlik. Hangi verinin Claude'a girebileceğine **kurumunuzun bilgi güvenliği birimi ve hukuk müşavirliği** karar verir. Aşağıdaki çerçeve bir başlangıç noktasıdır, izin değildir.

## Yasal Çerçeve: Hızlı Özet

- **2019/12 sayılı Bilgi ve İletişim Güvenliği Tedbirleri Genelgesi (Cumhurbaşkanlığı):** özetle, kamu verisi kurumun kendi sistemlerinde ya da kurumun kontrolündeki yerli sağlayıcılarda saklanır, kritik veri yurt içinde tutulur. Claude yurt dışı bir hizmet olduğundan, bu kuralın kapsamına giren veriyi Claude'a girmek **yasak sayılabilecek bir alandır**. Genelgenin güncel metnini ve kurumunuzdaki uygulamasını bilgi güvenliği biriminizle teyit edin.
- **KVKK:** kamu kurumları da veri sorumlusudur. Claude'a kişisel veri girmek yurt dışına aktarım olabilir; ayrıntılar [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) ve [Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/) sayfalarında.
- **Gizlilik dereceli bilgi:** "hizmete özel", "gizli" gibi derece taşıyan hiçbir belge Claude'a girmez.
- **Kurumun kendi mevzuatı ve iç genelgeleri:** pek çok kurumda yapay zekâ araçları için ayrıca bir iç düzenleme ya da yasak olabilir. Önce onu öğrenin.

Anthropic'in kamu sayfası ağırlıkla ABD kurumlarına yöneliktir (FedRAMP yetkisi, ABD'ye özel ürünler). Bunların Türkiye'de karşılığı yoktur. Ayrıntı: [Kurumsal: Kamu Kurumları](/kurumsal/kamu/).

## Yapılabilenler ve Yapılamayanlar: Net Tablo

| İş | Claude'a uygun mu? | Koşul |
|---|---|---|
| Gizlilik dereceli belge | ❌ Asla | Genelge ve mevzuat ihlali |
| Vatandaşın ad, TC, adres, telefon içeren başvurusu (ham hâliyle) | ❌ | Kişisel veri; önce maskeleme |
| Maskelenmiş başvurudan yanıt taslağı | ⚠️ Dikkatli | Kurum onayı + bilgi güvenliği birimi izni |
| Yayımlanmış mevzuat metninin özeti | ✅ | Metni siz yapıştırın, madde numaralarını doğrulayın |
| Resmi yazı **şablonu** ve dil düzeltme (kişisel veri yok) | ✅ | Amir onaylar |
| Kamuya açık duyuru, basın bülteni, kılavuz metni | ✅ | Yayın öncesi birim onayı |
| Toplantı tutanağı (iç, derecesiz, kişisel veri içermeyen) | ⚠️ | Kurum politikasına bağlı |
| İhale dosyasında teknik şartname taslağı (kamuya açık bilgiyle) | ⚠️ | Mevzuata uygunluğu uzman kontrol eder |
| Karar verme, mevzuat yorumuna dayalı işlem tesisi | ❌ | Yetki ve sorumluluk görevlidedir |

**Genel kural:** Claude **yetki kullanmaz, işlem tesis etmez**. Metin hazırlığında ve bilgi derlemede yardımcı olur; imza, onay ve sorumluluk görevlide kalır.

## Bölüm 1: Resmi Yazı ve Yazışma

### Resmi Yazı Taslağı

Üst makama, başka kuruma ya da vatandaşa gidecek yazının ilk taslağı: konu, ilgi, gerekçe, talep. Claude yazıyı kurumunuzun kullandığı dil ve biçimde (Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'teki düzen) hazırlar. Kişi adı, sayı ve tarih gibi bilgileri köşeli parantezle bırakın, EBYS'de siz doldurun.

### Dil Sadeleştirme

Kamu yazısının sorunu çoğu zaman uzun cümlelerdir. Claude resmi tonu bozmadan cümleleri kısaltır, vatandaşın anlayacağı bir yanıt çıkarır. "Kısa, net, saygılı, tek anlamlı" istemek yeterlidir.

### Vatandaş Başvurusu Yanıtı

CİMER, bilgi edinme ya da dilekçe ile gelen başvuruya yanıt taslağı. **Başvurudaki kişisel veri önce maskelenir** (ad "Başvuran", adres "[adres]", TC yok). Claude başvurunun konusunu çıkarır, ilgili birimi önerir, yanıt taslağını yazar. Yanıt süresini ve gerekçesini görevli kontrol eder.

## Bölüm 2: Mevzuat ve Araştırma

### Mevzuat Özeti

Yayımlanmış bir kanun, yönetmelik ya da genelgeyi sade dille özetletmek: "Bu yönetmelik birimimizi hangi işlerde bağlıyor?" Metni **siz yapıştırın**, Claude'un kendi hafızasındaki mevzuata güvenmeyin: madde numarası, tarih ve geçerlilik uydurulabilir. Özeti [mevzuat.gov.tr](https://www.mevzuat.gov.tr) ile karşılaştırın.

### Karşılaştırma ve Fark Tespiti

İki sürüm arasındaki değişiklikler, eski ve yeni yönetmelik arasındaki farklar. Claude bunu tablo olarak çıkarır; farkların doğruluğunu metin üzerinden kontrol edin.

### İç Rehber ve SSS

Personel için "izin işlemleri nasıl yürür", "harcırah belgeleri neler" gibi iç rehberler. Kaynak olarak yalnız kurumun yayımladığı derecesiz belgeler kullanılır.

## Bölüm 3: Toplantı ve Raporlama

### Toplantı Tutanağı

Karar, görev ve süre içeren tutanak taslağı. Toplantı notları kişisel veri ya da gizlilik dereceli içerik taşıyorsa girilmez. Taşımıyorsa Claude notları "alınan kararlar / görevliler / tarih" biçimine sokar. Tutanağı toplantı başkanı onaylar.

### Faaliyet Raporu ve Brifing

Birim faaliyet raporunun anlatı bölümü, üst yönetim için bir sayfalık özet. Rakamları kendi sisteminizden siz verirsiniz, Claude anlatıyı kurar. Rakamların her birini kaynağa karşı kontrol edin.

### Eğitim Materyali

Personel eğitim sunumu, sınav soruları, kurum içi duyuru. [Eğitim ve Akademi](/wiki/departmanlar/egitim-akademi/) sayfasındaki yaklaşım uygulanır.

## Gerçek Örnek: Vatandaş Başvurusuna Yanıt Taslağı

(Kurgusal örnek.) Kuzey Belediyesi Fen İşleri Müdürlüğü'ne, bir mahalledeki kaldırım çökmesi hakkında başvuru geldi. Müdürlük günde onlarca benzer başvuruyu yanıtlıyor.

**Adım 1:** Görevli başvuruyu EBYS'den açar, ad, telefon, adres ve TC bilgisini siler. Yerine "[Başvuran]" ve "[Mahalle]" yazar.

**Adım 2:** Claude'a verir:
> *"Aşağıdaki vatandaş başvurusuna belediye adına yanıt taslağı hazırla. Resmi ve saygılı bir dil kullan, en fazla 150 kelime. Başvuru alındı, konu Fen İşleri Müdürlüğü'nün yetkisinde, ekip yönlendirilecek, süre [X iş günü]. Bilmediğin bilgiyi uydurma, köşeli parantez bırak. Başvuru: [maskelenmiş metin]"*

**Adım 3:** Claude taslağı yazar, hangi bilgilerin boş bırakıldığını da listeler.

**Adım 4:** Görevli süreyi, birimi ve adı doldurur, taslağı müdüre sunar. Amir onayından sonra yanıt EBYS'den gider.

**Süre:** elle 45-60 dakika, Claude ile 10-15 dakika (kontrol dahil). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

Benzer başvurular için bir kez iyi bir şablon kurarsanız ([Projects](/wiki/araclar/projects/) içine "yanıt ilkeleri" notu olarak), her yeni başvuruda yalnız maskeleme ve kontrol kalır.

## Sık Hatalar

1. **Maskelemeden yapıştırmak.** En sık hata: ad ve TC'nin kalması. Maskelemeyi bir adım olarak sürece yazın, hafızaya bırakmayın.
2. **Mevzuatı Claude'un hafızasına sormak.** "Şu kanunun şu maddesi ne diyor?" diye sormayın; metni yapıştırın, madde atfını kaynaktan doğrulayın.
3. **Kurumun iç düzenlemesine bakmamak.** Genelge izin verse bile kurumunuzun yapay zekâ kullanımını kısıtlayan bir iç kararı olabilir. Önce bilgi güvenliği birimi.

## CLAUDE.md Tavsiyesi: Kamu Çalışanı

```markdown
## Çalışan Profili
- Kurum: [belediye / il müdürlüğü / kurum]
- Birim: [birim adı]
- Görev: [uzman / şef / müdür]

## Yasal Çerçeve
- 2019/12 sayılı Bilgi ve İletişim Güvenliği Tedbirleri Genelgesi
- KVKK
- Kurumun iç yapay zekâ ve bilgi güvenliği düzenlemeleri

## Yapma (KESİN YASAK)
- Gizlilik dereceli belge yapıştırma
- Vatandaş ad, TC, adres, telefon yapıştırma
- Mevzuat madde numarasını Claude'un hafızasından alma
- Claude çıktısını onaysız gönderme

## Yap
- Yapıştırdığım mevzuat metni dışında madde atfı yapma
- Bilmediğin bilgiyi uydurma, köşeli parantez bırak
- Resmi, sade, tek anlamlı Türkçe

## Voice
- Resmi ama okunabilir. Gereksiz kalıp ve uzun cümle yok.
```

## Plan ve Satın Alma

Bireysel plan (Free, Pro, Max) yerine **Team ya da Enterprise öneriyoruz** (merkezi kontrol, veri ayarları); **zorunlu değildir**. Team en az 2 koltuk, Enterprise self-serve en az 20 koltuktur. Ticari planlarda girdiler varsayılan olarak model eğitiminde kullanılmaz; DPA yalnız ticari ürünlere dahildir. Bunlar KVKK ya da 2019/12 uyumu yerine geçmez: hangi plan olursa olsun, kuralın sınırındaki veri Claude'a girmez.

Satın alma tarafı kamuda ayrı bir meseledir. Kamu kurumları genellikle yurt dışından doğrudan alım yapamaz ve "TL fatura" ister. Anthropic'in Türkiye'de ofisi ya da resmi temsilcisi yoktur; Zamana da bayi ya da temsilci değildir, abonelik satmaz. Aboneliğin üçüncü bir tarafça yeniden satışı Anthropic'in yazılı onayına bağlıdır. Satın alma yolunu kurumunuzun satın alma ve hukuk birimleriyle birlikte çözün.

## Eğitim

Kamu kurumları için Zamana'nın ayrı bir programı var: [Kamu Kurumları programı](/programlar/kamu-kurumlari/) (genel bakış için [programlar](/programlar/)). Program, kurumun veri sınırları içinde, kamuya açık ve anonim örneklerle çalışır.

## İlgili Sayfalar

- [Kurumsal: Kamu Kurumları](/kurumsal/kamu/): Anthropic'in kamu tekliflerinin Türkiye'deki gerçek durumu
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Veri hakları ve sektör notları
- [Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/): KVKK m.9
- [Hukuk Departmanı](/wiki/departmanlar/hukuk/): Mevzuat ve KVKK talepleri
- [İdari İşler](/wiki/departmanlar/idari-isler/): Yazışma ve tutanak
- [Müşteri Hizmetleri](/wiki/departmanlar/musteri-hizmetleri/): Şikayet ve başvuru yanıtı temelleri
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Politika temeli
- [Takım ve Admin](/wiki/temeller/takim-ve-admin/): Team ve Enterprise plan
