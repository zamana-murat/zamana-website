---
title: "Finansal Hizmetler: Claude Uygulamaları (Hassas Sektör)"
seoTitle: "Banka, Sigorta ve Aracı Kurumda Claude: BDDK, SPK, MASAK Çerçevesi"
description: "Banka, sigorta, aracı kurum ve faktoring için Claude: kredi dosyası özeti, müşteri yazışması, poliçe karşılaştırma, iç denetim taslağı. BDDK, SPK, MASAK ve müşteri verisi sınırları."
tags:
  - departmanlar
  - finansal-hizmetler
  - bddk
  - kvkk
  - hassas
lastUpdated: "2026-10-06"
---

Banka, sigorta şirketi, aracı kurum ve faktoring şirketinde iş büyük ölçüde belgedir: kredi dosyası, poliçe, rapor, müşteri yazışması, denetim bulgusu. Claude bu belge işlerinde zaman kazandırır. Ama finansal hizmetler Türkiye'de düzenleyicisi olan, müşteri sırrı ve bilgi sistemleri kuralları bulunan bir sektördür; Claude kullanımı **önce uyum biriminin, sonra kullanıcının işidir**.

**Önemli:** Bu sayfa hukuki tavsiye değil, genel rehberlik. Kurumunuzun Claude kullanımını **uyum, hukuk ve bilgi güvenliği birimleri** onaylamadan müşteri verisini Claude'a girmeyin.

## Düzenleyici Çerçeve: Hızlı Özet

- **BDDK:** bankalar için bilgi sistemleri, bulut kullanımı ve destek hizmeti alımı düzenlemeleri vardır; bazı sistem ve verilerin yurt içinde tutulması gerekebilir. Bankacılık Kanunu'ndaki sır saklama yükümlülüğü, müşteri bilgisinin üçüncü taraflarla paylaşımını sınırlar. Anthropic'in Türkiye'ye özgü bir BDDK onayı yoktur, değerlendirme kuruma aittir. Düzenleme adları ve madde metinleri için ilgili BDDK düzenlemelerini kurumunuzun uyum birimiyle teyit edin. Genel çerçeve: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasındaki "Finans Sektörü" bölümü.
- **SPK:** halka açık şirket ve aracı kurum çalışanlarında **içeriden öğrenenlerin ticareti ve bilgi koruması** kritiktir. Açıklanmamış mali tablo ve işlem bilgisi Claude'a girmez.
- **MASAK:** müşteri tanıma ve şüpheli işlem kayıtları hassastır. Bildirime konu olabilecek bilgi Claude'a verilmez.
- **Sigorta ve faktoring:** sigorta mevzuatı ve faktoring şirketlerinin tabi olduğu düzenlemeler sektöre göre değişir; hangi düzenleyicinin hangi kuralı koyduğunu uyum biriminizden öğrenin.
- **KVKK:** müşteri verisi kişisel veridir. Claude'a girmek yurt dışına aktarım olabilir, ayrıntılar [Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/) sayfasında. Hesap, kart, bakiye ve kredi bilgisi aynı zamanda sır niteliğindedir.

Anthropic'in finansal hizmetler tarafındaki ürün ve connector'ları (Excel eklentisi, finans veri sağlayıcıları) için sektör sayfası: [Kurumsal: Finansal Hizmetler](/kurumsal/finansal-hizmetler/).

## Yapılabilenler ve Yapılamayanlar: Net Tablo

| İş | Claude'a uygun mu? | Koşul |
|---|---|---|
| Müşteri kimliği, hesap no, bakiye, işlem dökümü (ham) | ❌ | Müşteri sırrı, KVKK, BDDK |
| Şüpheli işlem / MASAK bildirimi içeriği | ❌ Asla | Gizlilik yükümlülüğü |
| Açıklanmamış mali tablo, içeriden bilgi | ❌ Asla | SPK |
| Kredi dosyası özeti (kodlanmış, kimliksiz) | ⚠️ | Uyum birimi onayı + onaylı ortam |
| Yayımlanmış bilanço ve KAP verisiyle analiz | ✅ | Rakamlar kaynağa karşı kontrol edilir |
| Standart müşteri yazışma şablonu (kişisel veri yok) | ✅ | Hukuk ve uyum onaylı ton |
| Poliçe ve genel şart karşılaştırma (şablon metin) | ✅ | Müşteri poliçesi değil, ürün metni |
| İç denetim raporu taslağı (bulgu anlatısı) | ⚠️ | Bulgudaki müşteri verisi maskelenir |
| Kredi / sigorta karar verme | ❌ | Yetki ve sorumluluk kurumda |

**Genel kural:** Claude **karar vermez, müşteri hakkında hüküm kurmaz**. Belge hazırlığı, özet ve anlatıda yardımcı olur; kredi, tazminat, risk ve uyum kararı yetkili kişi ve kurulda kalır.

## Bölüm 1: Kredi ve Analiz

### Kredi Dosyası Özeti

Bir kredi talebi için mali tablolar, sektör bilgisi ve teminat bilgisi tek bir memoda toplanır. Claude rasyoları açıklar, risk ve güçlü yanları sıralar, memo taslağını yazar. Müşteri adı kodlanır ("Firma A"), kimlik ve vergi numarası çıkarılır. **Memo, karar önerisi değil bilgi özetidir**; öneri analistten, karar komiteden gelir.

### Sektör ve Rakip Analizi

Yayımlanmış faaliyet raporu, KAP bildirimi ve sektör raporlarından karşılaştırma tablosu. Veri sağlayıcı connector'ları ya da dosya yükleme ile çalışır; her rakamı kaynağında kontrol edin. Claude rakamı yanlış okuyabilir ya da eksik bırakabilir.

### Excel ve Model Kontrolü

Karmaşık bir iş modelinde formül tutarlılığı, hatalı hücre ve varsayım taraması. Modelin sahibi sonuçları teyit eder.

## Bölüm 2: Müşteri Yazışması ve Sigorta

### Müşteri Yazışması

Şikayet yanıtı, bilgilendirme mektubu, ürün duyurusu. Şablonu uyum birimi onaylar, Claude kişisel veri içermeyen taslağı yazar, görevli müşteri bilgisini kendi sisteminde ekler. Ton açık ve sade olur; "değerli müşterimiz" kalıplarına gerek yok. [Müşteri Hizmetleri](/wiki/departmanlar/musteri-hizmetleri/) sayfasındaki şikayet yanıtı yaklaşımı uygulanır.

### Poliçe Karşılaştırma

İki ürünün genel şartlarındaki farkları (teminat, istisna, muafiyet) tablo olarak çıkarmak. Bu iş **ürün metni** üzerinde yapılır, bir müşterinin poliçesi üzerinde değil. Sonuç satış ya da hasar kararı değil, bilgi notudur.

### Hasar Dosyası ve Sağlık Verisi

Hasar dosyaları ve sağlık sigortası dosyaları özel nitelikli kişisel veri içerebilir. Bu veriler Claude'a girmez. Mevzuat ve süreç özetleri için yalnız genel metinler kullanılır. Sağlık verisi kuralları: [Sağlık](/wiki/departmanlar/saglik/).

## Bölüm 3: Uyum ve İç Denetim

### İç Denetim Raporu Taslağı

Denetçinin saha notlarından bulgu anlatısı ("tespit, risk, öneri, yönetim yanıtı") yazmak. Müşteri ve çalışan adları çıkarılır. Bulguların doğruluğu denetçidedir.

### Politika ve Prosedür

İç yönetmelik, süreç dokümanı, eğitim materyali ve mevzuat değişikliği özeti. Yayımlanmış metni yapıştırıp "birimimizi hangi işlerde bağlıyor" diye sorabilirsiniz; madde numarasını Claude'un hafızasına bırakmayın, metinden doğrulayın.

### Eğitim

Çalışan farkındalık eğitimi, sahte e-posta ve dolandırıcılık örnekleri, uyum sınavı soruları. [Eğitim ve Akademi](/wiki/departmanlar/egitim-akademi/) yaklaşımı geçerlidir.

## Gerçek Örnek: Kredi Dosyası Özeti

(Kurgusal örnek.) Ege Faktoring A.Ş.'de bir analist, bir müşteri için yeni limit talebinin dosya özetini hazırlıyor. Uyum birimi bu kullanımı kodlanmış veri ve onaylı hesapla yapılmasına izin vermiş durumda.

**Adım 1:** Analist müşteri adını "Firma A" yapar, vergi numarası ve unvanı siler. Son üç yılın mali tablo rakamlarını ve talep edilen limiti ekler.

**Adım 2:** Claude'a verir:
> *"Aşağıdaki rakamlarla bir faktoring limit talebi için bir sayfalık memo taslağı hazırla: likidite ve borçluluk rasyoları, 3 yıllık trend, güçlü yanlar, riskler, açık sorular. Karar önerisi verme. Her rasyonun hangi rakamdan çıktığını göster. Rakamlar: [...]"*

**Adım 3:** Claude rasyoları hesaplar, trendi yazar, "açık sorular" başlığında eksik bilgileri listeler.

**Adım 4:** Analist her rasyoyu kendi hesabıyla kontrol eder, memoya kendi değerlendirmesini ve öneriyi ekler. Müşteri adı ve kimlik bilgisi kurum sisteminde eklenir, dosya komiteye gider.

**Süre:** elle 2-3 saat, Claude ile 40-60 dakika (kontrol dahil). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

## Sık Hatalar

1. **Müşteri verisini "geçici" diye yapıştırmak.** Hesap dökümü ya da kimlik bilgisi bir kez girdi mi geri alınamaz. Kodlama, sürecin ilk adımı olmalı.
2. **Rasyo ve rakamı kontrol etmeden kullanmak.** Claude hesabı doğru yapsa bile girdiyi yanlış okuyabilir; her rakamı kaynağında kontrol edin.
3. **Düzenleme adını ezberden yazmak.** Yönetmelik adı, madde ve tarih uydurulabilir. Metni yapıştırın, uyum birimiyle teyit edin.

## Plan Önerisi

Bireysel plan (Free, Pro, Max) yerine **Team ya da Enterprise öneriyoruz**; **zorunlu değildir**. Team en az 2 koltuk, Enterprise self-serve en az 20 koltuktur. Ticari planlarda girdiler varsayılan olarak model eğitiminde kullanılmaz, DPA yalnız ticari ürünlere dahildir. Denetim günlüğü ve Compliance API gibi izleme araçları yalnız Enterprise'tadır; bir bankanın ya da aracı kurumun denetim ihtiyacı varsa bunlar belirleyicidir. Ayrıntı: [Takım ve Admin](/wiki/temeller/takim-ve-admin/). API kullanılıyorsa Zero Data Retention bir API düzenlemesidir ve satış ekibiyle talep edilir.

Hangi plan olursa olsun, müşteri sırrı ve BDDK/SPK/MASAK kapsamındaki veri için kural aynıdır: uyum birimi izin vermeden girmeyin.

## İlgili Sayfalar

- [Kurumsal: Finansal Hizmetler](/kurumsal/finansal-hizmetler/): Excel eklentisi, veri connector'ları, sektör notları
- [Finans ve Muhasebe](/wiki/departmanlar/finans/): Rapor anlatısı, bütçe varyansı, kapanış
- [Hukuk ve Uyum](/wiki/departmanlar/hukuk/): KVKK talepleri, sözleşme, uyum
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Finans sektörü bölümü ve veri hakları
- [Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/): KVKK m.9
- [Müşteri Hizmetleri](/wiki/departmanlar/musteri-hizmetleri/): Şikayet yanıtı
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Politika şablonu
