---
title: "Claude ile PDF Özetleme ve Analiz"
seoTitle: "Claude ile PDF Özetleme: Adım Adım Rehber"
description: "Claude ile PDF yükleyip özetletme, madde çıkarma ve soru sorma: sayfa sınırları, taranmış belge uyarısı, KVKK notları ve hazır Türkçe promptlar."
tags:
  - gorevler
  - pdf
  - ozetleme
  - belge
lastUpdated: "2026-11-09"
---

**Claude ile PDF okumak için dosyayı sohbete sürükleyip ne istediğinizi yazmanız yeterlidir.** Claude PDF'in metnini okur; 100 sayfaya kadar olan PDF'lerde sayfalardaki grafik, tablo ve görselleri de görür, 101-1000 sayfa arasında ise yalnız metni okur. Sohbette dosya başına 500 MB ve en çok 20 dosya yüklenebilir. En iyi sonuç için sadece "özetle" demeyin: kim okuyacak, kaç maddelik özet istediğiniz, hangi bölümün önemli olduğu ve hangi soruya cevap aradığınızı yazın. Uzun belgelerde sorunuzu belgeden sonra, en sona koyun. Claude sayfa numarası vererek alıntı yapabilir, ama alıntıyı belgede kontrol etmek sizin işinizdir. Taranmış (fotoğraf gibi) PDF'lerde sonuçlar zayıflayabilir. Gizli sözleşme, müşteri ya da çalışan verisi içeren belgeleri yüklemeden önce şirket politikanızı ve KVKK kurallarını kontrol edin. Bu rehber, tek belgeyi özetlemekten iki belgeyi karşılaştırmaya kadar dört hazır Türkçe prompt, sayfa ve boyut sınırları ve sık yapılan hataları içerir.

## Adım adım: PDF nasıl özetlenir?

1. **claude.ai'de yeni sohbet açın** ve PDF'i mesaj kutusuna sürükleyin ya da ataş simgesiyle seçin. Free dahil tüm planlarda çalışır.
2. **Önce amacı yazın.** "Bu raporu yönetim kuruluna sunacağım, 10 maddelik özet ve 3 risk çıkar" gibi.
3. **Çıktı biçimini belirtin.** Madde, tablo ya da kısa paragraf.
4. **Soru sorarak derinleşin.** "Üçüncü bölümdeki maliyet tablosunu açıkla", "bu iddianın dayanağı hangi sayfada?"
5. **Alıntıyı kontrol edin.** Claude'un verdiği sayfa numarasını açıp cümlenin orada olduğunu doğrulayın.

Aynı belgelerle sürekli çalışıyorsanız (örneğin her ay gelen tedarikçi raporları) dosyaları bir [Claude Projesi](/wiki/araclar/projects/)ne koyun. Projede dosya başına 30 MB sınırı vardır; çok büyük dosyalarda proje kapasitesi RAG moduyla genişler.

## Birden çok PDF'i karşılaştırma

Aynı sohbete 20 dosyaya kadar yükleyebilirsiniz. Karşılaştırma için dosyaları adlandırın ("Teklif A", "Teklif B") ve hangi ölçütlere göre kıyaslayacağınızı yazın. Belgeler çok uzunsa Claude'un bağlamına sığması gerektiğini unutmayın; sığmayan kısım için belgeyi bölümlere ayırın.

## Hazır promptlar

### 1. Yönetici özeti

Ne zaman: uzun rapor, ihale şartnamesi ya da araştırma elinizdeyse ve 10 dakikada ne olduğunu anlamak istiyorsanız.

```
Ekteki PDF'i oku.

Okuyacak kişi: [rol, örn. genel müdür], teknik ayrıntıya vakti yok.

İstediğim:
1. Belgenin amacı (2 cümle)
2. En önemli 7 bulgu ya da karar noktası (her biri tek cümle, sayfa numarasıyla)
3. Dikkat çeken 3 risk ya da belirsizlik
4. Okuyucunun vermesi gereken kararlar varsa liste

Belgede olmayan bir şeyi çıkarım olarak yaz ve "Çıkarım:" ile başlat.
```

### 2. Belgeden belirli bilgi çıkarma

Ne zaman: tarih, tutar, yükümlülük gibi somut bilgileri tek tek aramak istemiyorsanız.

```
Ekteki PDF'ten şu bilgileri çıkar ve tablo yap:
- [bilgi 1, örn. teslim tarihi]
- [bilgi 2, örn. toplam tutar ve para birimi]
- [bilgi 3, örn. cezai şart oranı]

Her satır için: değer | sayfa numarası | belgedeki ifadenin kısa alıntısı.
Bulamadığın bilgi için "belgede yok" yaz, tahmin etme.
```

### 3. Belgeye soru sorma

Ne zaman: 80 sayfalık dokümanda tek bir sorunun cevabı lazımsa.

```
Ekteki belgeye dayanarak şu soruyu cevapla: [soru]

Cevabı önce 2-3 cümleyle ver. Sonra dayandığın bölümleri sayfa numarasıyla listele. Belge soruyu net cevaplamıyorsa bunu açıkça söyle ve ne eksik olduğunu yaz.
```

### 4. İki PDF'i karşılaştırma

Ne zaman: iki teklif, iki sürüm ya da iki raporu kıyaslarken.

```
Ekte iki belge var: "[Belge A adı]" ve "[Belge B adı]".

Karşılaştır:
- Ölçütler: [fiyat, süre, kapsam, yükümlülükler]
- Çıktı: ölçüt satırları, A ve B sütunları olan bir tablo
- Tabloyu bitirdikten sonra: bir belgede olup diğerinde olmayan maddeler, ve karar için dikkat etmem gereken 3 nokta

Rakamları belgedeki gibi aynen yaz, yuvarlama.
```

## Ne kadar zaman kazandırır?

**Süre:** elle 1-2 saat (40 sayfalık bir rapor), Claude ile 10-20 dakika (özet ve doğrulama dahil). *Tahmini tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

## KVKK ve veri uyarısı

PDF'ler kimlik bilgisi, sağlık verisi, maaş ya da ticari sır taşıyabilir.

- Mümkünse yüklemeden önce kişisel verileri karartın ya da silin
- Sözleşme, ihale ve müşteri belgelerini yüklemeden önce gizlilik yükümlülüğünüzü kontrol edin
- Geçici sohbet (Incognito) sohbet geçmişine kaydedilmez; ama bu, belgeyi gizli yapmaz
- Şirket politikanız ve yurt dışı aktarım için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) ile [Şirket içi yapay zeka politikası](/wiki/temeller/sirket-ici-politika/) sayfalarına bakın

## Sık hatalar ve sınırlar

- **Taranmış PDF.** Fotoğraf ya da tarayıcı çıktısı PDF'lerde metin katmanı yoksa sonuç kalitesi düşer. Mümkünse metin seçilebilen sürümünü kullanın. 100 sayfadan uzun taranmış belgede Claude yalnız metni okuduğu için görüntü olarak gömülü içerik atlanabilir.
- **Sayfa sınırı.** Bir PDF en çok 1000 sayfa olabilir; 100 sayfanın üstünde grafikler ve görseller okunmaz.
- **Uydurma alıntı.** Nadir de olsa Claude olmayan bir cümleyi alıntılayabilir. Hukuki, mali ya da teknik karar öncesi alıntıyı belgede açın.
- **Rakam dönüşümü.** Tablo içindeki sayıları kaydırabilir, binlik ayracını karıştırabilir. Kritik rakamı belgede kontrol edin.
- **Bağlam dolması.** Çok uzun belge ve uzun konuşma birleşince eski kısımlar özetlenir; belirli bir ayrıntı kaybolduysa yeniden sorun ve sayfa verin.

## İlgili sayfalar

- [Claude ile rapor hazırlama](/wiki/gorevler/claude-ile-rapor/), [Claude ile sözleşme taslağı](/wiki/gorevler/claude-ile-sozlesme-taslagi/)
- [Dosya işleme](/wiki/yetenekler/file-handling/) ve [Belgeyle çalışma](/wiki/prompting/belgeyle-calisma/)
- [Projects](/wiki/araclar/projects/)
- [Prompt kataloğu](/wiki/prompting/prompt-katalogu/)
