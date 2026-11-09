---
title: "Claude ile Excel: Formül, Tablo ve Analiz"
seoTitle: "Claude Excel'de Nasıl Kullanılır? Adım Adım"
description: "Claude ile Excel formülü yazdırma, tablo temizleme, analiz ve makro: dosya yükleme ya da Claude in Excel eklentisiyle adım adım, hazır Türkçe promptlarla."
tags:
  - gorevler
  - excel
  - formul
  - analiz
lastUpdated: "2026-11-09"
---

**Claude'u Excel'de üç yoldan kullanabilirsiniz:** sohbete .xlsx ya da .csv dosyası yükleyip soru sormak, Excel'in içinde yan panelde çalışan Claude in Excel eklentisini açmak, ya da Cowork'te bir klasördeki tabloları işletmek. En sık işler formül yazdırmak, hatalı formülü bulmak, dağınık tabloyu temizlemek, veriyi yorumlatmak ve basit bir makro (VBA) hazırlatmaktır. Pratik yol şudur: dosyayı yükleyin ya da eklentiyi açın, sütunların ne anlama geldiğini ve istediğiniz sonucu düz Türkçeyle yazın, Claude'un önerdiği formülü önce boş bir hücrede deneyin. Excel eklentisi genel kullanımdadır ve ücretli planlarda (Pro, Max, Ultra, Team, Enterprise) bulunur, Free planda yoktur. Claude hesapta hata yapabilir; toplamları ve kritik sayıları bir kez ikinci bir yoldan doğrulayın. Müşteri ve çalışan verisini yüklemeden önce anonimleştirin. Bu rehberde formül, temizleme, analiz ve makro için beş hazır Türkçe prompt, hangi yüzeyin hangi işe uygun olduğu ve sık yapılan hatalar bulunur.

## Hangi yüzeyi kullanmalıyım?

| Durum | Önerilen yol | Not |
|---|---|---|
| Tek seferlik soru, formül yazdırma | claude.ai sohbeti, dosya yükleyerek | XLSX için "Code execution and file creation" açık olmalı (varsayılan açık) |
| Elinizdeki dosyanın içinde, hücre hücre çalışmak | Claude in Excel eklentisi | Ücretli planlar; kurumsal kullanımda kurulumu BT ile konuşun |
| Aynı tabloyla her ay çalışmak | Claude Projesi | Dosya ve talimat projede kalır, [Projects](/wiki/araclar/projects/) |
| Klasördeki 10 dosyayı birleştirmek | Cowork | Masaüstü uygulaması gerekir, [Cowork modu](/wiki/araclar/cowork-modu/) |

Eklentinin kurulumu ve güvenlik sınırları için [Office ve Chrome eklentileri](/wiki/araclar/office-ve-chrome/) sayfasına bakın. Google Sheets kullanıyorsanız aynı sayfada Google Workspace eklentisi anlatılıyor.

## Adım adım: Claude ile Excel'de formül nasıl yazdırılır?

1. **Dosyayı hazırlayın.** İlk satırda sütun başlıkları olsun, birleştirilmiş hücreleri mümkünse çözün. Claude başlıklara bakarak ne yaptığınızı anlar.
2. **Dosyayı yükleyin** (sohbet) ya da Excel'de yan paneli açın (eklenti). Eklentide Claude açık dosyayı okur, yüklemeye gerek kalmaz.
3. **Sütunları tarif edin.** "C sütunu fatura tarihi, F sütunu KDV hariç tutar" gibi iki satır, hata payını belirgin düşürür.
4. **Sonucu tarif edin, formülü değil.** "Her müşteri için son 90 gündeki toplam satış" yazın; Claude uygun formülü seçer.
5. **Formülü boş bir hücrede deneyin.** Beklediğiniz sonucu 2-3 satırda elle kontrol edin, sonra sütuna yayın.
6. **Excel'in dil sürümünü söyleyin.** Türkçe Excel'de fonksiyon adları ve ayırıcı (noktalı virgül) farklı olabilir; "Türkçe Excel kullanıyorum, fonksiyon adlarını Türkçe yaz" demek ilk denemede çalışan formül ihtimalini artırır.

## Hazır promptlar

### 1. Formül yazdırma

Ne zaman: hangi fonksiyonu kullanacağınızı bilmediğinizde.

```
Rol: Excel'de uzman, açıklayıcı bir finans analistisin.

Görev: Aşağıdaki tablo için formül yaz.

Tablo yapısı:
- A: [müşteri adı], B: [fatura tarihi], C: [tutar, KDV hariç], D: [bölge]
- Veri satırı: 2'den [son satır]'a kadar

İstediğim sonuç: [örn. her bölge için son 90 gündeki toplam satış]

Kurallar:
- Türkçe Excel kullanıyorum: fonksiyon adları Türkçe, ayırıcı noktalı virgül
- Formülü tek hücreye yazılacak biçimde ver
- Formülün altında neden böyle kurduğunu 3 cümlede açıkla
- Boş hücre ya da hata gelebilecek durumları belirt
```

### 2. Hatalı formülü bulma

Ne zaman: #DEĞER!, #BAŞV! ya da yanlış sonuç aldığınızda.

```
Aşağıdaki formül [hata ya da yanlış sonuç] veriyor.

Formül: [formülü yapıştır]
Beklediğim: [ne olmalıydı]
Gördüğüm: [ne çıkıyor]
İlgili hücrelerin örnek değerleri: [3-5 örnek]

Önce sorunun nedenini bir cümleyle söyle, sonra düzeltilmiş formülü ver. Birden fazla olası neden varsa en olası olandan başla.
```

### 3. Tablo temizleme

Ne zaman: farklı kişilerin doldurduğu, yazımı tutarsız bir liste varsa.

```
Yüklediğim tabloda [sütun adı] sütunu tutarsız yazılmış (örn. "İstanbul", "ISTANBUL", "İst."). 

Görev:
1. Sütundaki farklı yazımları listele ve her biri için önerdiğin tek biçimi göster
2. Düzeltilmiş sütunu yeni bir sütun olarak ekle (eskisini silme)
3. Emin olmadığın satırları ayrıca işaretle, tahmin yürütme

Sonunda kaç satırın değiştiğini söyle.
```

### 4. Veri analizi ve yorum

Ne zaman: tabloya bakıp "ne görüyorum" diye sorduğunuzda.

```
Yüklediğim satış tablosunu incele.

Bağlam: [kısa tanım, örn. 12 aylık perakende satışı, 4 bölge]

İstediğim:
1. En belirgin 3 eğilim (sayı ile)
2. Beklenmedik ya da şüpheli görünen değerler (satır numarasıyla)
3. Karar vericiye 5 maddelik özet

Her iddia için hangi sütun ve satırlara dayandığını yaz. Tabloda olmayan bir şeyi çıkarım olarak sun ve öyle etiketle.
```

### 5. Basit makro (VBA)

Ne zaman: her gün tekrarladığınız bir tıklama dizisini otomatikleştirmek istediğinizde.

```
Excel'de şu işi her gün elle yapıyorum: [adımları sırayla yaz].

Bunun için bir VBA makrosu yaz. Kurallar:
- Mevcut veriyi silen ya da üzerine yazan satırdan önce uyarı ver
- Kodun her bölümüne kısa Türkçe yorum ekle
- Makroyu nasıl ekleyeceğimi (Alt+F11 ile) adım adım anlat
- Önce yedek dosyada deneyeceğimi varsay
```

> **Geliştiriciler için:** VBA ve Office Scripts gibi kod çıktılarını işe almadan önce yedek dosyada çalıştırın. Makro içeren dosyalar (.xlsm) şirketinizin BT politikasında kısıtlı olabilir; kurumsal ortamda BT ile teyit edin.

## Ne kadar zaman kazandırır?

**Süre:** elle 1-2 saat, Claude ile 15-30 dakika (kontrol dahil), örneğin aylık satış tablosunun temizlenip özetlenmesinde. *Tahmini tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

## KVKK ve veri uyarısı

Excel dosyaları çoğu zaman kişisel veri taşır: müşteri adı, T.C. kimlik numarası, telefon, maaş. Yüklemeden önce şunları yapın:

- Kimlik, IBAN, telefon gibi sütunları silin ya da rastgele kodla değiştirin (anonimleştirme)
- Claude'a verinin kendisi gerekmiyorsa yalnız sütun başlıklarını ve 3-5 sahte örnek satır verin; formül yine yazılır
- Şirketinizin hangi veriyi hangi araca vermeye izin verdiğini kontrol edin: [Şirket içi yapay zeka politikası](/wiki/temeller/sirket-ici-politika/)
- Yurt dışı aktarım ve saklama sorusu için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasına bakın

## Sık hatalar ve sınırlar

- **Sayıları körü körüne kabul etmek.** Claude uzun hesap zincirlerinde yanılabilir. Toplamı, satır sayısını ve bir-iki örneği kendiniz doğrulayın.
- **Başlıksız ya da birleşik hücreli tablo.** Claude yanlış sütunu okuyabilir. Önce tabloyu düzleştirin.
- **Boyut sınırı.** Sohbette dosya başına 500 MB ve sohbet başına en çok 20 dosya yüklenir; ama dosyanın yüklenebilmesi, tamamının sohbet bağlamına sığacağı anlamına gelmez. Çok büyük tablolarda önce ilgili sayfayı ya da sütunları ayırıp yükleyin ve sonuçları ayrıca doğrulayın.
- **Üretilen dosya sınırı.** Code execution ile oluşturulan dosyalar yükleme ve indirmede dosya başına 30 MB ile sınırlıdır.
- **Excel'in kendi hesabını geçmek.** Claude'un önerdiği formül Excel'in hesap motorunda çalışır; "Claude hesapladı" ile "formül hesapladı" arasındaki farkı akılda tutun. Kritik raporlarda formülü hücrede bırakın, yalnız değer yapıştırmayın.
- **Sürüm farkları.** Eski Excel sürümlerinde bazı yeni fonksiyonlar yoktur. Kullandığınız sürümü söyleyin.

## İlgili sayfalar

- [Claude ile PDF](/wiki/gorevler/claude-ile-pdf/) ve [Claude ile rapor hazırlama](/wiki/gorevler/claude-ile-rapor/)
- [Dosya işleme](/wiki/yetenekler/file-handling/) ve [Office ve Chrome eklentileri](/wiki/araclar/office-ve-chrome/)
- [Finans departmanı](/wiki/departmanlar/finans/) ve [Satış departmanı](/wiki/departmanlar/satis/)
- [Prompt kataloğu](/wiki/prompting/prompt-katalogu/)
