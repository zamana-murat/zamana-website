---
title: "Pilot ve Yaygınlaştırma: Claude'u Şirkete Nasıl Açarsınız?"
seoTitle: "Claude Pilot Uygulaması ve Kurumsal Yaygınlaştırma Rehberi"
description: "5-10 kişilik pilot, 4-8 haftalık takvim, üç karar kapısı, ölçütler ve yaygınlaştırma dalgaları. Yönetici ve kurumsal ekipler için, kurgusal Türk şirketi örneğiyle."
tags:
  - temeller
  - pilot
  - yaygınlaştırma
  - kurumsal
  - yonetici
lastUpdated: "2026-10-06"
---

**Claude'u bir anda şirketin tamamına açmak da, kimseye açmamak da yanlış.** Doğru yol küçük bir grupla, sınırlı bir sürede, ölçerek başlamak; sonra rakama bakıp karar vermek. Bu sayfa o yolu anlatır: pilot kimlerle yapılır, kaç hafta sürer, hangi noktada devam ya da dur denir, yaygınlaştırma nasıl yönetilir.

Bu rehber **yöneticiler ve kurumsal ekipler** içindir. Tek başına çalışan biriyseniz [İlk 7 Gün](/wiki/temeller/ilk-7-gun/) rehberi yeterli.

## Neden pilot?

Şirketlerde Claude çoğu zaman iki yoldan birinden girer: ya birkaç meraklı çalışan kişisel hesapla başlar ve BT haberi sonradan alır, ya da yönetim herkese birden hesap açar ve çoğu kullanılmadan kalır. İkisinde de aynı şey eksik: **"işe yarıyor mu" sorusuna sayıyla cevap**.

Pilot şu üç soruyu ucuza cevaplar:

1. **Bizim işimizde işe yarıyor mu?** Genel örnekler yerine kendi raporunuz, kendi müşteri yazışmanız üzerinde.
2. **Hangi kurallar gerekiyor?** Veri, onay, çıktı kontrolü. Politikayı gerçek kullanımdan çıkarmak, masa başında yazmaktan daha sağlam sonuç verir.
3. **Hangi plan ve yönetim seviyesi uygun?** Kullanım verisi çıkmadan Team mi Enterprise mı sorusu tahmin olarak kalır.

## Kimler dahil olmalı?

**5-10 kişi.** Daha azı örnek sayılamaz, daha fazlası pilotu yönetilemez hâle getirir.

| Rol | Kaç kişi | Neden |
|---|---|---|
| Gönüllü meraklılar | 2-3 | Hızlı öğrenir, ilk örnekleri üretir |
| Farklı iki-üç işlev | 3-4 | Tek bölüm sonucu genellemez (örn. satış, finans, operasyon) |
| Şüpheci bir çalışan | 1-2 | Gerçek itirazları erken getirir; ikna olursa en inandırıcı sestir |
| Pilot sponsoru (yönetici) | 1 | Engel kaldırır, kararı verir; kendisi de kullanmalı |
| BT veya bilgi güvenliği sorumlusu | 1 | Veri ve erişim kuralını baştan birlikte yazar |

Yalnızca gönüllülerle pilot yapmayın: sonuç, meraklı insanların sonucu olur ve "bizim herkes için geçerli" denemez. Sadece atananlarla da yapmayın: isteksiz katılımcı pilotu bozar. İkisinin karışımı en dürüst tablodur.

## Pilot öncesi hazırlık

Hazırlık, pilotun kendisinden kısa ama daha önemlidir.

1. **Hedefi bir cümleyle yazın.** Örnek: "Satış ve finansta haftalık raporlama ve yazışma süresini ölçülebilir azaltmak." Hedef belli değilse hiçbir sonuç yeterli görünmez.
2. **Baseline alın.** Pilot başlamadan 1-2 hafta önce katılımcılara [Ölçüm Metrikleri](/wiki/temeller/olcum-metrikleri/) sayfasındaki baseline sorularını sorun. Önce/sonra karşılaştırması bu veriye dayanır.
3. **Tek sayfalık bir kural yazın.** Hangi veri girmez, çıktı kim tarafından kontrol edilir, kime sorulur. [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/) sayfasındaki "Mini Versiyon: 1 Sayfa" yeterlidir; tam politikayı pilot sonrasında yazarsınız.
4. **Planı seçin.** Aşağıdaki kutuya bakın.
5. **Yönetici ayarlarını kontrol edin.** Team ya da Enterprise ise Cowork, bağlayıcılar ve kod çalıştırma gibi özelliklerin admin tarafında açık mı kapalı mı olduğuna bakın. Enterprise'ta bazı özellikler (Cowork, Claude Design ve benzerleri) yönetici açana kadar kapalı olabilir; pilot günü "bende çıkmıyor" sürprizi yaşamayın. Ayrıntı [Takım ve Admin](/wiki/temeller/takim-ve-admin/) sayfasında.
6. **Destek kanalı açın.** Ortak bir mesaj grubu ya da kanal; katılımcılar buraya prompt'larını, sorunlarını ve kazanımlarını yazar.

> **Plan önerisi.** Pilot katılımcıları için ilk ay Max 5x ($100/ay) öneriyoruz, zorunlu değil: Pro'nun limiti yeni kullanıcı için çabuk dolar ve "çalışmıyor" hissine yol açabilir. Kurumsalda **Team zorunlu değildir**; bireysel hesaplarla da pilot yapılabilir. Merkezi kontrol istiyorsanız (tek fatura, admin paneli, kullanıcı ekleme-çıkarma, varsayılan olarak eğitimde kullanılmayan girdi, DPA) Team önerilir; Team en az 2 koltuktan başlar. Enterprise self-serve en az 20 koltuk ister ve kullanım ayrıca faturalanır. Güncel rakamlar [Planlar](/wiki/temeller/planlar/) sayfasında. Zamana bayi değildir; satın alma doğrudan Anthropic'tendir.

**Veri açısından önemli bir fark:** Free, Pro ve Max hesaplarında girdilerin model eğitiminde kullanılıp kullanılmayacağı kullanıcının kendi ayarıdır ve DPA bu hesapları kapsamaz. Pilotu kişisel hesaplarla yürütüyorsanız **müşteri verisi, personel verisi ve sözleşme metni** girmeyin; gerçek veri gerekiyorsa Team ya da Enterprise ile başlayın. [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfası ayrıntıyı verir.

## Pilot takvimi: 4-8 hafta

Küçük ve tek işlevli ekipte 4 hafta, çok işlevli ya da düzenlemeye tabi ekipte 6-8 hafta düşünün.

| Hafta | Ne olur | Çıktı |
|---|---|---|
| 0 | Hazırlık: hedef, baseline, tek sayfalık kural, hesaplar | Başlama listesi tamam |
| 1 | Kurulum ve ilk alışkanlık ([İlk 7 Gün](/wiki/temeller/ilk-7-gun/)) | Herkes en az 3 gerçek iş çıktısı üretti |
| 2 | Gerçek iş akışları: her kişi kendi tekrar eden 2-3 işini seçer | **Kapı 1** |
| 3-4 | Derinleşme: [CLAUDE.md](/wiki/claude-md/nedir/), proje, ilk bağlayıcı | Haftalık ölçüm verisi birikir |
| 5-6 | Otomasyon ve paylaşım: [zamanlanmış görev](/wiki/araclar/scheduled-tasks/), ortak prompt kütüphanesi | **Kapı 2** (hafta 4 ile 6 arasında; 4 haftalık pilotta Kapı 3 ile birleşir) |
| Son hafta | Ölçüm toplama, kullanıcı görüşmeleri, rapor | **Kapı 3** |

Hafta başı kısa bir 20 dakikalık toplantı, katılımcılar arasında bilgi taşımanın en ucuz yoludur: "bu hafta işe yarayan bir şey" ve "tıkandığım yer".

## Ne ölçersiniz?

[Ölçüm Metrikleri](/wiki/temeller/olcum-metrikleri/) sayfasındaki üç birincil metrik (zaman, kalite, otomasyon) burada da geçerli. Pilot için dört şey ekleyin:

| Ölçüt | Nasıl | Ne anlatır |
|---|---|---|
| Aktif kullanım | Admin paneli ya da katılımcı beyanı | Kaç kişi haftada kaç gün kullanıyor |
| Kazanılan saat | Haftalık 5 dakikalık anket | Zaman metriği |
| Çıktı kalitesi | Ekip lideri örneklemesi | Hız kalite pahasına mı artıyor |
| Sorun ve risk olayı | Destek kanalı kaydı | Yanlış çıktı, gizli veri kaçması, itiraz |
| Katılımcı görüşü | Son hafta kısa görüşme | "Bu olmadan çalışmak ister miydin?" |

**Başarı eşiğini önceden yazın.** Aşağıdaki değerler **örnek eşiklerdir** (Zamana'nın önerisi, evrensel bir ölçü değil); hedefinize göre değiştirin, ama pilot başlamadan sabitleyin:

- Hafta 2 sonunda katılımcıların en az %80'i haftada en az 3 gün kullanıyor
- Son haftada kişi başı haftalık kazanılan saat, [ROI Hesaplayıcı](/wiki/temeller/roi-hesaplayici/) sayfasındaki **başabaş** değerinin en az iki katı
- Çıktı kalitesi "eskisinden kötü" olan iş yok ya da çok az
- Politika dışı veri kullanımı sıfır

Başabaşı kendi rakamlarınızla hesaplamak için [ROI Hesaplayıcı](/wiki/temeller/roi-hesaplayici/) sayfasındaki formülü kullanın.

## Üç karar kapısı

Her kapıda bir kişi (pilot sponsoru) karar verir ve gerekçesini yazar. Üç seçenek vardır: **devam**, **düzelt**, **dur**.

**Kapı 1, hafta 2: "Pilot yürüyor mu?"**
Kullanım var mı, kimse takılıp kalmış mı, veri kuralı çiğnenmiş mi? Bu kapı başarıyı değil, **sağlığı** sorar. Kullanım düşükse sebebi öğrenin: limit mi doluyor (plan sorunu), iş akışı mı bulunamadı (eğitim sorunu), isteksizlik mi (kültür sorunu)? Her birinin çaresi farklı.

**Kapı 2, hafta 4-6: "Kapsam genişlesin mi?"**
Kazanılan saat başabaşın üstünde mi? Bir işlev çok iyi, diğeri zayıfsa pilotu iyi çalışan işlevin etrafında derinleştirmek, düzensiz yaymaktan iyidir.

**Kapı 3, son hafta: "Yaygınlaştırma kararı"**

| Sonuç | Karar |
|---|---|
| Eşikler karşılandı, riskler yönetilebilir | Yaygınlaştırmaya geç |
| Bazı işlevler iyi, bazıları zayıf | Başarılı işlevlerle sınırlı yaygınlaştırma; zayıfları ikinci pilot |
| Kullanım var ama kazanç ölçülemedi | Ölçümü düzeltip 4 hafta daha |
| Kullanım düşük, itiraz yüksek | Dur; sebebi yazın, 6 ay sonra tekrar bakın |

"Dur" yenilgi sayılmaz. Pilotun amacı, ölçmeden büyük bütçe harcamamaktır.

## Kurgusal örnek: Marmara Tekstil

> **Kurgusal örnek.** Şirket ve rakamlar gerçek değildir; yalnızca yolu göstermek için kurgulanmıştır.

Marmara Tekstil, Bursa'da 120 çalışanlı bir hazır giyim üreticisi. Genel müdür, ihracat ve finans ekiplerinin her ay aynı raporları elle hazırladığını fark ediyor ve pilot kararı alıyor.

- **Katılımcılar (8 kişi):** 3 ihracat uzmanı, 2 finans uzmanı, 1 üretim planlama, 1 insan kaynakları, genel müdür yardımcısı (sponsor). Bilgi işlem sorumlusu da toplantılara katılıyor. Katılımcılardan biri başta kuşkucu: finans uzmanı "yanlış sayı üretirse ben sorumlu olurum" diyor.
- **Hazırlık (hafta 0):** Hedef: "İhracat yazışması ve aylık finans raporunda süreyi azaltmak." Baseline anketi yapıldı. Tek sayfalık kural: personel verisi ve banka bilgisi girmez, müşteri yazışması yalnızca şirketin Team hesabında kullanılır, çıktıyı yazan kişi kontrol eder. Plan: 8 koltuklu Team (tek fatura ve admin paneli için); en yoğun kullanacak iki kişi Premium koltukta.
- **Hafta 2, Kapı 1:** 8 kişiden 7'si haftada 3 günden fazla kullanıyor. Finans uzmanı kullanmıyor: ilk denemesinde Claude bir toplamı yanlış yapmış. Çare: Claude'a toplamı yaptırmak yerine formülü Excel'de bıraktırıp yalnızca yorum yazdırmak, her sayıyı kaynak tabloyla karşılaştırmak. Devam kararı.
- **Hafta 4-6, Kapı 2:** İhracat ekibi kişi başı haftada ortalama 6 saat, finans 3 saat kazanıyor. Üretim planlama ve İK'da kazanç belirsiz. Karar: finansa derinleşme, ihracatı büyütme, diğer ikisini yeniden tanımlama.
- **Son hafta, Kapı 3:** Sınırlı yaygınlaştırma: ihracat ve satış (14 kişi) ile finans (6 kişi) Team'e eklenir, üretim planlama ve İK ikinci bir 4 haftalık pilota girer. Pilot sırasında çıkan sorular ve prompt'lar şirket politikasına ve ortak CLAUDE.md'ye işlendi.

Dikkat edin: pilotun en değerli çıktısı "evet işe yarıyor" değil, **neyin nerede işe yaradığı**.

## Yaygınlaştırma: dalgalar halinde

Kapı 3'ten geçtiyseniz herkese tek günde hesap açmayın. Dalgalar halinde ilerleyin:

1. **Dalga 1: pilot katılımcıları ve yakın ekipleri.** Pilottaki kişiler "şampiyon" olur, kendi ekibine yöntem gösterir. Aynı işlevde çalışan kişi, dışarıdan eğitmenden daha ikna edicidir.
2. **Dalga 2: pilotta kazanç gösteren işlevlerin tamamı.** Pilottaki prompt kütüphanesi ve CLAUDE.md şablonları hazır olarak teslim edilir.
3. **Dalga 3: kalan işlevler.** Burada genellikle kazanç daha dağınıktır; bu aşamada eğitimi iş akışına göre yeniden kurun.

Her dalga başlamadan şu beş kontrolü yapın:

- **Politika yayınlandı mı?** Pilotta oturmuş tek sayfalık kural artık [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/) belgesine dönüştü mü, herkes okudu mu?
- **Plan ve yönetim seviyesi doğru mu?** Kullanıcı sayısı artınca merkezi kontrol ihtiyacı büyür: [Takım ve Admin](/wiki/temeller/takim-ve-admin/) sayfasındaki geçiş senaryolarına bakın. Pilot kişisel hesaplarla yürütüldüyse ve hesaplar Team ya da Enterprise'a taşınacaksa, sohbetler ve projeler taşınır; ama özel skills, uygulama yetkilendirmeleri ve özel connector'lar taşınmaz, bunları yeniden kurmak gerekir.
- **Kullanım bütçesi görünür mü?** Kota bitince açılan usage credits ve Enterprise'ın kullanım bazlı faturası için aylık bir tavan belirleyin ([Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/)).
- **Destek sahibi var mı?** Her dalga için bir kişi: "Claude sorusu kime sorulur?" sorusunun cevabı olmalı.
- **Ölçüm devam ediyor mu?** Yaygınlaştırma sonrasında ölçümü bırakmak, pilotun yarısını boşa harcamaktır. Çeyreklik ROI raporu için [ROI Hesaplayıcı](/wiki/temeller/roi-hesaplayici/) sayfasındaki aylık hesabı kullanabilirsiniz.

Büyük kuruluşlarda Claude Enterprise'ın ne sunduğu (kimlik, rol yönetimi, denetim kaydı) için [Claude Enterprise](/kurumsal/) sayfasına bakın.

## Tipik hatalar

1. **Hedefsiz pilot.** "Deneyelim, bakarız" dersiniz, sonunda ne bulduğunuza kimse karar veremez.
2. **Sadece meraklılarla pilot.** Sonuç iyi çıkar ama genellenemez. Yaygınlaştırmada sürpriz yaşanır.
3. **Baseline yok.** "Önce nasıldı?" sorusuna cevap yoksa kazanç hissedilir, ölçülemez.
4. **Politikasız pilot.** Pilotun ikinci haftasında biri müşteri listesini yükler. Tek sayfalık kural ilk gün hazır olmalı.
5. **Çok uzun pilot.** On iki haftayı geçen pilot, kararın ertelenmesine dönüşür. Süreyi ve kapıları önceden belirleyin.
6. **Çıktıya körü körüne güven.** Pilotta bir halüsinasyon, bütün girişimi bitirebilir. Çıktıyı kimin kontrol edeceği baştan belli olsun ([Sınırlamalar](/wiki/temeller/sinirlamalar/)).
7. **Yalnızca "tasarruf edilen saat"i ölçmek.** Kazanılan saat başka bir işe dönüşmüyorsa değer üretmez; kalite ve çıktı miktarına da bakın.
8. **Yaygınlaştırmayı tek hamlede yapmak.** Herkese aynı gün hesap açmak, desteği ve ölçümü boğar.
9. **Sponsorun kendisinin kullanmaması.** Yönetici denemezse, ekip bunun gerçekten önemsendiğine inanmaz.

## İlgili sayfalar

- [Ölçüm Metrikleri ve ROI Çerçevesi](/wiki/temeller/olcum-metrikleri/): baseline, anketler, metrikler
- [ROI Hesaplayıcı](/wiki/temeller/roi-hesaplayici/): başabaş ve aylık geri dönüş hesabı
- [Takım ve Admin](/wiki/temeller/takim-ve-admin/): Team ve Enterprise, admin paneli, geçiş senaryoları
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): politika şablonu ve 1 sayfalık mini versiyon
- [Planlar](/wiki/temeller/planlar/): güncel plan fiyatları
- [İlk 7 Gün](/wiki/temeller/ilk-7-gun/): pilot katılımcısının ilk haftası
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): hangi veri nereye girer
- [Claude Enterprise](/kurumsal/): kurumsal plan ve yönetim kontrolleri
