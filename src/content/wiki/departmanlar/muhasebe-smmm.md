---
title: "Muhasebeciler ve SMMM'ler İçin Claude"
seoTitle: "Muhasebeciler ve SMMM'ler İçin Claude Eğitimi"
description: "Muhasebe büroları ve SMMM'ler için Claude: beyanname öncesi kontrol, mevzuat özeti, müşteri yazışması, mutabakat, meslek sırrı ve hazır prompt'lar."
tags:
  - departmanlar
  - muhasebe
  - smmm
  - mali-musavir
lastUpdated: "2026-11-09"
---

Muhasebe ve mali müşavirlik, yapay zekanın en çok işe yarayabileceği ama en dikkatli kullanılması gereken meslek alanlarından biri. İş yoğun, tekrar eden, belge ağırlıklı; öte yandan hata maliyeti yüksek, mevzuat sürekli değişiyor ve elinizdeki veri müşterilerinizin sırrı.

> **Claude hesabı yapan ya da beyannameyi veren araç değildir. Okuyan, özetleyen, kontrol listesi çıkaran, yazan ve sizi düşünmeye zorlayan bir yardımcıdır. Rakamın, beyannamenin ve imzanın sorumluluğu meslek mensubundadır.**

Bu sayfa genel bir rol rehberidir. Finans ekiplerinin iç raporlama tarafı için [Finans ve Muhasebe](/wiki/departmanlar/finans/) sayfasına bakın.

## Yapay Zeka Muhasebeyi Bitirir mi?

Kısa ve abartısız cevap: **hayır, ama işin dağılımını değiştirir.**

Veri girişi, belge sınıflandırma, tekrar eden kontrol ve standart yazışma gibi mekanik işler giderek otomatikleşiyor. Bu işlerin payı mesleğin içinde azalabilir. Buna karşılık mevzuat yorumu, müşteriye danışmanlık, risk değerlendirmesi, vergi planlaması ve imza sorumluluğu insanda kalıyor; çünkü hata yapıldığında hukuki ve mali sorumluluğu bir model değil meslek mensubu taşıyor.

Dürüst tablo: ofisinde yapay zeka kullanan bir muhasebeci aynı zamanda daha çok müşteriye bakabilir ya da aynı müşteriye daha çok danışmanlık verebilir. Kullanmayan meslektaş rekabette zorlanabilir. Bunlar eğilimlerdir, kesin tahmin değil; hangi hızda olacağını kimse bilmiyor. Mesleğin geleceği hakkında yorum yapmak yerine, bugün işinize yarayan somut kullanımlara bakalım.

## Claude'un Çözdüğü Temel Sıkıntılar

- Beyanname dönemlerinde yoğunlaşan tekrar eden kontroller
- Mevzuat değişikliklerini takip edip müşterilere anlatmak
- Müşterilerden eksik belge toplamak için yazılan sayısız e-posta
- Cari ve banka mutabakatında satır satır karşılaştırma
- Aynı soruyu farklı müşterilere farklı dille anlatma ihtiyacı

## İş Akışı 1: Beyanname Öncesi Kontrol Listeleri

Her müşteri tipi (şahıs, limited, e-ticaret, inşaat) için dönem öncesi kontrol listesi hazırlamak ve gözden geçirmek. Claude'dan listeyi sizin tarifinizle çıkarmasını, eksik belge ve tutarsızlık sorularını sıralamasını isteyebilirsiniz. Listeyi bir kez oluşturup büronuzun şablonu olarak saklarsınız.

Sınır: Claude beyannameyi hazırlamaz, mevzuata göre doğru vergiyi hesaplamaz. Listeyi sizin mevzuat bilginizle ve resmi kaynaklarla doğrularsınız.

## İş Akışı 2: Mevzuat Değişikliği Özetleri

Yeni bir tebliğ, sirküler ya da duyuru çıktığında metni Claude'a yükleyip müşteri için sade bir özet, "kimi etkiler, ne zaman, ne yapmalı" notu çıkarttırabilirsiniz.

> **Önemli uyarı:** Claude güncel mevzuatı bilmeyebilir. Eğitim verisinin tarihinden sonraki değişiklikleri, tebliğ numaralarını, oran ve tarihleri yanlış hatırlayabilir ya da uydurabilir. Bu yüzden özeti yalnızca **kendi verdiğiniz resmi metinden** (Resmî Gazete, GİB, mevzuat sayfaları) yazdırın; web aramayı kullandırıyorsanız bile her tarihi, oranı ve madde numarasını kaynağı açıp doğrulayın. Resmi metne dayanmayan bir "mevzuat bilgisi" müşteriye gitmemeli.

Web arama özelliği için [Web Arama](/wiki/araclar/web-arama/) sayfasına bakın.

## İş Akışı 3: Müşteri Yazışmaları

Eksik belge hatırlatması, tahsilat nazik uyarısı, beyanname sonuç bildirimi, fiyat güncelleme duyurusu, "bunu neden yapmam gerekiyor" açıklaması. Müşterinin bilgi düzeyine göre dili ayarlatırsınız. Bu, zaman kazancının en kolay ve en az riskli olduğu alanlardan biri; yine de gönderen sizsiniz, göndermeden okuyun.

## İş Akışı 4: Mutabakat ve Excel

Cari ekstre, banka hareketi ve defter kaydını karşılaştırma, tekrar eden kalemleri ve uyuşmayanları işaretleme. Tablo yükleyip Claude'dan uyuşmayanların listesini ve olası nedenlerini ister, sonra kalemleri kaynağında kontrol edersiniz. Ayrıntı: [Claude ile Excel](/wiki/gorevler/claude-ile-excel/). Logo, Mikro, Paraşüt gibi programlarla doğrudan bağlantı yok; veriyi Excel ya da CSV olarak dışa aktarırsınız ([Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/)).

Sınır: Claude büyük tablolarda sayma ve toplamada hata yapabilir. Toplamları ve bakiyeleri her zaman tabloda formülle ya da muhasebe programında doğrulayın.

## İş Akışı 5: Fatura, KDV ve Yurt Dışı Hizmet Alımları

Yurt dışından alınan yazılım ve bulut hizmetlerinde (Claude aboneliği dahil) KDV ve stopaj sorusu müşterilerinizden gelen yaygın bir sorudur. Genel çerçeve ve dikkat edilecek noktalar [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/) sayfasında. Bu konuda kesin bir özelge ya da hüküm yok; mevzuat okuması mali müşavirin sorumluluğundadır, Claude yalnızca taslak ve soru listesi hazırlamaya yardımcı olur.

## Meslek Sırrı ve KVKK

Muhasebeci ve mali müşavirlerin 3568 sayılı Kanun kapsamında müşterileri hakkında edindikleri bilgileri saklama yükümlülüğü var. Bu sayfa hukuki yorum yapmaz; ancak pratik sonuç şudur: müşteri verisini hangi araca, hangi hesapla yazdığınız bir mesleki sorumluluk meselesidir.

- Müşteri adı, TCKN/VKN, banka hesabı, bordro gibi kişisel ve ticari verileri **anonimleştirerek** girin ya da gerekmiyorsa hiç girmeyin.
- Kişisel hesaba (Free, Pro, Max) müşteri verisi yazmayın. Ticari planlar (Team, Enterprise) veri işleme eki (DPA) ve varsayılan olarak eğitimde kullanılmama güvencesi sunar; yine de büro politikanızı ve müşteri sözleşmelerinizi ayrıca kontrol edin. Plan farkları [Planlar](/wiki/temeller/planlar/) sayfasında, ticari ürünlerde veri güvencesi [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasında.
- Verinin yurt dışına gitmesi konusu için [KVKK m.9 Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/) sayfasına bakın.
- Büro içi kuralları yazıya dökmek için [Şirket İçi Yapay Zeka Politikası](/wiki/temeller/sirket-ici-politika/).

Meslek sırrı ve KVKK uyumu için nihai karar odanız, hukuk müşaviriniz ve sözleşmelerinizle verilmelidir.

## Hazır Prompt'lar (Kopyala-Yapıştır)

Köşeli parantezleri kendi bilginizle doldurun. Gerçek müşteri verisini yapıştırmayın.

**1. Beyanname öncesi kontrol listesi**

```
Rolün: tecrübeli bir muhasebe büro yöneticisi.
Müşteri tipi: [örn. e-ticaret yapan limited şirket, aylık KDV mükellefi].
Dönem: [örn. KDV beyanı öncesi].
Bu müşteri için dönem öncesi kontrol listesi hazırla: toplanması gereken belgeler,
tutarlılık için bakılacak noktalar ve müşteriye sorulacak 5 soru.
Mevzuat oranı, tarih ya da madde numarası uydurma; emin olmadığın yerde
"resmi kaynaktan doğrulanmalı" diye işaretle.
```

**2. Mevzuat değişikliği özeti (yalnız verdiğiniz metinden)**

```
Aşağıya resmi bir tebliğ/duyuru metnini yapıştırıyorum.
Yalnızca bu metne dayanarak: 1) kimleri ilgilendirdiğini, 2) yürürlük tarihini,
3) müşterilerimin yapması gerekenleri sade Türkçeyle özetle.
Metinde olmayan bilgiyi ekleme. Emin olmadığın veya metinden çıkaramadığın
noktaları ayrı bir listede "doğrulanacaklar" olarak yaz.

[metin]
```

**3. Eksik belge hatırlatma e-postası**

```
Müşterimize [dönem] için eksik belgeleri isteyen kısa, nazik ama net bir e-posta yaz.
Eksikler: [liste]. Son tarih: [tarih].
Müşteri muhasebeden anlamıyor, teknik terim kullanma. Ton: saygılı, baskıcı değil.
Konu satırını ayrıca ver.
```

**4. Mutabakat farkı analizi**

```
Aşağıda iki liste var: bizim defter kayıtlarımız ve karşı tarafın ekstresi (anonimleştirilmiş).
Eşleşmeyen kalemleri bul, olası nedenleri sırala (zamanlama farkı, kur farkı, eksik kayıt,
mükerrer kayıt gibi) ve her fark için kontrol etmem gereken belgeyi yaz.
Toplamları kendin hesaplama iddiasında bulunma; farklara odaklan.

[tablo]
```

**5. Müşteriye karmaşık bir konuyu anlatma**

```
Müşterime şu konuyu anlatacağım: [konu, örn. neden dönem sonu stok sayımı gerekli].
Müşteri profili: [örn. küçük esnaf, muhasebe bilgisi yok].
Bir A4'ten kısa, örnekli ve kaygı yaratmayan bir açıklama yaz.
Sonuna "bundan sonra ne yapacağız" başlığıyla 3 adım ekle.
```

## Zaman Kazancı

| İş | Elle | Claude ile |
|---|---|---|
| Müşteri tipi için kontrol listesi hazırlama | 1-2 saat | 15-30 dakika (kontrol dahil) |
| Mevzuat metnini müşteri özetine çevirme | 1-1,5 saat | 20-30 dakika (kaynakla doğrulama dahil) |
| Eksik belge ve hatırlatma yazışmaları (haftalık) | 2-3 saat | 45-60 dakika |

Bunlar **Tahmini tipik aralık**tır; büronuzun müşteri sayısına ve belge düzenine göre değişir. Kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/) aracını kullanın.

## Sık Hatalar

- **Mevzuat bilgisine güvenmek.** Oran, tarih ve madde numarasını modelin hafızasından almak. Her zaman resmi kaynak.
- **Hesabı ona yaptırmak.** Toplam, KDV ya da stopaj hesabı programda ya da formülle yapılmalı.
- **Müşteri verisini kişisel hesaba yazmak.** Hem meslek sırrı hem KVKK açısından en riskli alışkanlık.
- **Taslağı okumadan göndermek.** Müşteriye giden her metin sizin imzanızı taşır.

## Büronuz İçin Eğitim

Ekipli büro için [kurumsal yapay zeka eğitimi](/programlar/kurumsal/), tek başına çalışan meslek mensubu için [bireysel program](/programlar/bireysel/) var. Eğitim iş eğitimidir: sizin gerçek iş akışlarınızla (anonimleştirilmiş) çalışırız. Meslek odalarının ve kurumların verdiği temel yapay zeka eğitimleri de başlangıç için faydalıdır; bizim farkımız, büronuzun kendi işine ve günlük kullanım alışkanlığına odaklanmamız. Zamana abonelik satmaz; Claude planları doğrudan sağlayıcıdan alınır.

## İlgili Sayfalar

- [Finans ve Muhasebe](/wiki/departmanlar/finans/): iç finans ekibi için
- [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/): yurt dışı hizmet alımları
- [Claude ile Excel](/wiki/gorevler/claude-ile-excel/): tablo ve mutabakat
- [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/): Logo, Mikro, Paraşüt, e-Fatura
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/)
- [Claude'un Sınırları](/wiki/temeller/sinirlamalar/)
- [ChatGPT mi, Gemini mi, Claude mu?](/wiki/temeller/hangi-yapay-zeka/)
