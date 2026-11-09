---
title: "Claude ile Rapor Hazırlama: Taslaktan Teslime"
seoTitle: "Claude ile Rapor Nasıl Hazırlanır? Adım Adım"
description: "Claude ile rapor hazırlama: kaynak toplama, taslak, düzenleme ve kontrol adımları; Research, Projects ve Docs ile birlikte hazır Türkçe promptlar."
tags:
  - gorevler
  - rapor
  - arastirma
  - taslak
lastUpdated: "2026-11-09"
---

**Claude ile rapor hazırlamak en iyi, yazma işini beş küçük adıma bölünce çalışır:** hedef ve okuyucuyu netleştirmek, kaynakları toplamak, iskelet çıkarmak, bölümleri tek tek yazdırmak ve en sonda tutarlılık ile doğruluk kontrolü yapmak. Tek seferde "50 sayfalık rapor yaz" demek genelde ortalama, genel geçer bir metin verir. Kaynak toplamak için Pro ve üstü planlarda Research özelliği (web arama açık olmalı) birkaç dakikada atıflı bir tarama yapar; elinizdeki belgeler için PDF ve Excel yükleyebilir, tekrar eden raporlar için bir Claude Projesi kurabilirsiniz. Docs çıktısı Word, PDF ve Markdown olarak dışa aktarılır. Claude taslağı hızlandırır, ama rakamların ve iddiaların doğruluğundan siz sorumlusunuz; kaynaksız cümleyi rapora almayın. Şirket verisi ve kişisel veri içeren belgeleri yüklemeden önce politikanızı kontrol edin. Aşağıda adımlar, hangi yüzeyin ne zaman uygun olduğu, beş hazır Türkçe prompt, tahmini süre kazancı ve sık yapılan hatalar var.

## Adım adım: Rapor nasıl hazırlanır?

1. **Okuyucuyu ve kararı yazın.** "Genel müdür bu raporla X bütçesini onaylayacak" ile "ekip bilgilensin" farklı raporlardır.
2. **Kaynakları verin.** İç belgeleri, tabloları ve notlarınızı yükleyin. Dış bilgi gerekiyorsa Research ile atıflı tarama isteyin; kaynakları siz açıp kontrol edin.
3. **İskeleti çıkartın ve onaylayın.** Bölüm başlıkları, her bölümün sorusu, tahmini uzunluk.
4. **Bölümleri tek tek yazdırın.** Her bölüm için ilgili kaynağı ve sayıyı verin.
5. **Tutarlılık turu.** Terimler, rakamlar, tarih biçimi, ton: "Raporu baştan sona oku, çelişen rakamları ve tutarsız terimleri listele."
6. **Doğrulama.** Her rakamı ve alıntıyı kaynağıyla eşleştirin.
7. **Dışa aktarın.** Word ya da PDF.

Aylık ya da çeyreklik raporlarınız varsa şablonu ve ton talimatını bir [Claude Projesi](/wiki/araclar/projects/)ne koyun; her dönem yalnız yeni veriyi yüklersiniz.

## Hangi yüzey?

| İhtiyaç | Yol |
|---|---|
| Dış kaynaklı araştırma | Research (Pro ve üstü, web arama açık), [Research modu](/wiki/yetenekler/research-mode/) |
| İç belgelerden rapor | Sohbette dosya yükleme ya da Proje, [Dosya işleme](/wiki/yetenekler/file-handling/) |
| Klasördeki çok sayıda dosya | Cowork, [Cowork modu](/wiki/araclar/cowork-modu/) |
| Word'de yazmak | Word eklentisi, [Office ve Chrome](/wiki/araclar/office-ve-chrome/) |

## Hazır promptlar

### 1. Rapor iskeleti

Ne zaman: boş sayfadan başlarken.

```
Rol: Deneyimli bir iş raporu yazarısın.

Görev: [konu] hakkında rapor iskeleti hazırla.

Okuyucu: [rol]
Rapor sonunda alınmasını istediğim karar: [ne]
Elimdeki kaynaklar: [liste]
Toplam uzunluk: yaklaşık [sayfa/kelime]

Çıktı: Bölüm başlığı | bölümün cevapladığı soru | hangi kaynaktan beslenecek | tahmini uzunluk
Kurallar: İlk bölüm yönetici özeti olsun. Kaynağı olmayan bölümleri [KAYNAK EKSİK] diye işaretle.
```

### 2. Bölüm yazdırma

Ne zaman: iskeleti onayladıktan sonra her bölümde.

```
İskeletteki "[bölüm adı]" bölümünü yaz.

Bu bölümde cevaplanacak soru: [soru]
Kullanacağın kaynaklar: [yüklenen dosyalar ya da yapıştırdığın veri]
Uzunluk: [kelime]
Ton: [örn. resmî ama sade, pasif cümlelerden kaçın]

Kurallar:
- Her sayı ve iddia için kaynağı parantezle göster
- Kaynakta olmayan bilgi ekleme
- Varsayım yaptıysan "Varsayım:" diye ayır
```

### 3. Yönetici özeti

Ne zaman: rapor bittikten sonra, en başa koyulacak özet için.

```
Yukarıdaki raporun yönetici özetini yaz.

Yapı: 1 cümlelik ana mesaj, 3 temel bulgu (rakamla), 2 risk, istenen karar ve gerekçe.
En çok 200 kelime. Raporda geçmeyen bilgiyi ekleme.
```

### 4. Tutarlılık ve doğruluk kontrolü

Ne zaman: teslimden önce son tur.

```
Raporu baştan sona oku ve şunları listele:
1. Birbiriyle çelişen rakamlar (her ikisinin yeri ile)
2. Aynı kavram için kullanılan farklı terimler
3. Kaynağı gösterilmemiş iddialar
4. Okuyucunun soracağını tahmin ettiğin cevapsız sorular

Düzeltme yapma, sadece liste ver.
```

### 5. Dış kaynaklı araştırma (Research)

Ne zaman: sektör ya da rakip hakkında güncel veri gerektiğinde.

```
[konu] hakkında Türkiye pazarını araştır.

Odak: [örn. son 2 yılın düzenleme değişiklikleri]
Çıktı: kaynaklı bir özet; her önemli iddia için kaynak bağlantısı
Kaynak türü: tercihen resmî kurumlar ve sektör dernekleri
Emin olmadığın veya kaynakların çeliştiği yerleri ayrıca belirt.
```

## Ne kadar zaman kazandırır?

**Süre:** elle 1-2 gün (15 sayfalık bir analiz raporu), Claude ile 3-5 saat (kaynak doğrulama dahil). *Tahmini tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).* En büyük kazanç ilk taslakta ve tutarlılık turunda olur; doğrulama süresini kısaltmaya çalışmayın.

## KVKK ve veri uyarısı

- İç raporlar sıklıkla maaş, performans, müşteri ve sağlık verisi içerir; anonimleştirin ya da toplulaştırın
- Dış kaynaklı araştırma yaparken şirket adını, müşteri ismini ve gizli bilgiyi aramaya taşımayın
- Raporu başkalarına göndermeden önce Claude'un ürettiği metindeki kişi adlarının doğru olup olmadığına bakın
- Ayrıntı: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/), [Şirket içi yapay zeka politikası](/wiki/temeller/sirket-ici-politika/)

## Sık hatalar ve sınırlar

- **Uydurma kaynak.** Claude var olmayan bir rapor ya da yasa maddesine atıf verebilir. Her bağlantıyı açıp kontrol edin. Research atıflı çalışır ama atıf, iddianın doğru olduğunun garantisi değildir.
- **Genel geçer metin.** Somut veri ve örnek vermezseniz sonuç ortalama olur. Sayılarınızı, olaylarınızı yükleyin.
- **Research'ün sınırı.** Dakikalar sürer ve standart kullanım limitinizi daha hızlı tüketir; Free planda yoktur.
- **Uzun konuşma.** Çok uzun rapor oturumunda eski bölümler özetlenir; bölümleri ayrı kaydedin ve tutarlılık turunu mutlaka yapın.
- **Türkçe resmî dil.** Kurum üslubu (ör. kamu yazışması) için örnek bir önceki rapordan 1-2 sayfa verin.
- **Dosya sınırı.** Yüklenen dosya 500 MB, üretilen dosya 30 MB'a kadar; büyük ekleri ayrı tutun.

## İlgili sayfalar

- [Claude ile Excel](/wiki/gorevler/claude-ile-excel/), [Claude ile PDF](/wiki/gorevler/claude-ile-pdf/), [Claude ile sunum](/wiki/gorevler/claude-ile-sunum/)
- [Research modu](/wiki/yetenekler/research-mode/), [Dosya işleme](/wiki/yetenekler/file-handling/), [Projects](/wiki/araclar/projects/)
- [Finans](/wiki/departmanlar/finans/), [Operasyon](/wiki/departmanlar/operasyon/), [Liderlik](/wiki/departmanlar/liderlik/)
- [Prompt kataloğu](/wiki/prompting/prompt-katalogu/)
