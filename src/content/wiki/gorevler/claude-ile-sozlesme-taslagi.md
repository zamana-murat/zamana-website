---
title: "Claude ile Sözleşme Taslağı ve İnceleme"
seoTitle: "Claude ile Sözleşme Taslağı Nasıl Hazırlanır?"
description: "Claude ile sözleşme taslağı ve ön inceleme: adım adım yöntem, hazır Türkçe promptlar, KVKK uyarıları. Hukuki danışmanlık değildir, avukat kontrolü şarttır."
tags:
  - gorevler
  - sozlesme
  - hukuk
  - taslak
lastUpdated: "2026-11-09"
---

> **Bu sayfa hukuki danışmanlık değildir.** Claude'un ürettiği her sözleşme metni ve inceleme notu, imzadan önce yetkili bir avukat tarafından gözden geçirilmelidir. Claude yazar, avukat kontrol eder.

**Claude sözleşme işinde iki işe yarar:** sıfırdan ilk taslak çıkarmak ve elinizdeki karşı taraf sözleşmesini ön okumadan geçirmek. İyi bir sonuç için taraf bilgilerini, işin kapsamını, bedeli, süreyi, ödeme koşullarını ve sizin için kritik maddeleri açıkça verin; Claude bunlarla yapılandırılmış bir taslak üretir. Ön incelemede ise sözleşmeyi yükleyip riskli, eksik ya da tek taraflı maddeleri, sayfa ve madde numarasıyla listelemesini isteyebilirsiniz. Claude'un Türk hukukuna uygunluğu ve güncel mevzuatı bilmesi garanti edilmez; atıf yaptığı kanun maddesini kendiniz doğrulayın. Taslak bir başlangıçtır, sözleşmenin hukuki geçerliliği ve sizi koruyup korumadığı sorusuna cevap vermez. Sözleşmeler ticari sır ve kişisel veri içerir; yüklemeden önce şirket politikanızı ve gizlilik yükümlülüklerinizi kontrol edin. Aşağıda taslak ve ön inceleme için adımlar, dört hazır Türkçe prompt, KVKK uyarıları ve sık yapılan hatalar var; hepsi, çıktının bir hukuk belgesi değil avukata gidecek bir ilk taslak olduğu varsayımıyla yazıldı.

## Adım adım: Sözleşme taslağı nasıl hazırlanır?

1. **Sözleşme türünü ve tarafları yazın.** Hizmet, tedarik, gizlilik (NDA), kira, iş sözleşmesi gibi. Taraf unvanlarını ve rollerini ekleyin.
2. **İşin ticari özünü verin.** Kapsam, bedel, süre, teslim, ödeme tarihi, fesih koşulu.
3. **Sizin için kritik maddeleri söyleyin.** Cezai şart, sorumluluk sınırı, gizlilik, fikri mülkiyet.
4. **İskeleti isteyin ve onaylayın.** Madde başlıkları önce, metin sonra.
5. **Maddeleri tek tek yazdırın.** Her madde için "sade Türkçe" ve "açık, tek anlamlı" ifade isteyin.
6. **Avukata gönderin.** Taslağı, varsa şirketin standart şablonuyla birlikte iletin; hangi maddelerde Claude'un varsayım yaptığını belirtin.

Hukuk ekibiniz varsa onaylanmış şablon ve madde kütüphanenizi bir [Claude Projesi](/wiki/araclar/projects/)ne koyun; Claude her taslakta o dili kullanır. Cowork'te hukuk eklentisi (örneğin `legal:review-contract`) de var; Türk hukuku desteği ve plan kapsamı doğrulanmış değildir, kullanmadan önce hukuk ekibinizle konuşun. Ayrıntı: [Hukuk departmanı](/wiki/departmanlar/hukuk/).

## Adım adım: Karşı tarafın sözleşmesi nasıl ön incelenir?

1. Sözleşmeyi PDF ya da Word olarak yükleyin ([Claude ile PDF](/wiki/gorevler/claude-ile-pdf/)).
2. Hangi tarafta olduğunuzu söyleyin: alıcı mı satıcı mı, hizmet veren mi alan mı.
3. Önce madde madde risk listesi, sonra pazarlık önerileri isteyin.
4. Claude'un "sorun" dediği her maddeyi avukatınızla birlikte okuyun.

## Hazır promptlar

### 1. Sözleşme iskeleti

Ne zaman: boş sayfadan başlamak istemediğinizde.

```
Rol: Türkçe ticari sözleşme hazırlayan deneyimli bir sözleşme yazarısın. Hukuki görüş vermiyorsun, taslak hazırlıyorsun.

Görev: [sözleşme türü] için madde iskeleti çıkar.

Taraflar: [A: unvan ve rol], [B: unvan ve rol]
İşin özü: [kapsam, bedel, süre]
Önemli konular: [cezai şart, gizlilik, fesih, fikri mülkiyet, vb.]

Çıktı: madde numarası | başlık | maddenin amacı (1 cümle)
Kurallar: Kanun maddesi numarası verme; "[mevzuat kontrol edilecek]" yaz. Varsayım yaptığın yeri "[VARSAYIM]" ile işaretle.
```

### 2. Madde yazdırma

Ne zaman: iskeleti onayladıktan sonra.

```
İskeletin "[madde başlığı]" maddesini yaz.

Bu maddede olması gereken: [ticari koşul, örn. ödeme 30 gün, gecikmede aylık %X]
Sözleşmeyi hangi taraf lehine yazalım: [tarafsız / bizim lehimize ama makul]
Dil: sade Türkçe, tek anlamlı cümleler, kısa

Maddenin altında: neden bu şekilde yazdığını ve avukatın bakması gereken noktaları 2-3 maddede yaz.
```

### 3. Karşı taraf sözleşmesinin ön incelemesi

Ne zaman: size gelen sözleşmeyi imzadan önce taramak için.

```
Ekteki sözleşmeyi [alıcı/satıcı/hizmet alan/hizmet veren] olarak biz adına incele.

İstediğim:
1. Bize aleyhte ya da tek taraflı görünen maddeler (madde numarası ve kısa gerekçe)
2. Eksik görünen standart hükümler (örn. gizlilik, fesih, uyuşmazlık)
3. Her sorun için pazarlıkta önerebileceğimiz bir alternatif ifade
4. Belirsiz ya da çelişkili ifadeler

Her maddeyi ayrıntılı yorumlama; kanuna dayalı kesin hüküm kurma. Emin olmadığın noktayı "avukatla teyit edilmeli" olarak işaretle.
```

### 4. İki sürümü karşılaştırma

Ne zaman: karşı taraf yeni versiyon gönderdiğinde.

```
Ekte sözleşmenin iki sürümü var: "[Önceki]" ve "[Yeni]".

Değişen her maddeyi tablo yap: madde no | önceki ifade | yeni ifade | bizim için anlamı (lehimize/aleyhimize/nötr).
Sessizce değiştirilmiş, rakamı ya da süresi farklılaşmış maddeleri ayrıca vurgula.
```

## Ne kadar zaman kazandırır?

**Süre:** elle 2-4 saat (ilk taslak ya da 15 sayfalık sözleşmenin ön okuması), Claude ile 30-60 dakika; avukat kontrolü bu süreye dahil değildir. *Tahmini tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).* Kazanç ilk taslakta ve karşılaştırma gibi mekanik işlerdedir; hukuki yorumda değil.

## KVKK ve veri uyarısı

- Sözleşmeler kişisel veri (ad, T.C. kimlik, adres, IBAN) ve ticari sır içerir; yüklemeden önce karartın ya da kodlayın
- Karşı tarafla gizlilik anlaşmanız (NDA) varsa içeriğin yapay zeka aracına verilmesine izin verilip verilmediğine bakın
- Şirket verisini hangi araca verebileceğinizi [Şirket içi yapay zeka politikası](/wiki/temeller/sirket-ici-politika/) belirlemelidir
- Aktarım ve saklama: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/), [Yurt dışı aktarım](/wiki/temeller/yurt-disi-aktarim/)

## Sık hatalar ve sınırlar

- **Uydurma mevzuat.** Claude var olmayan bir kanun maddesine ya da içtihada atıf yapabilir. Her atfı resmî kaynaktan doğrulayın.
- **Güncel olmayan bilgi.** Mevzuat değişir; Claude'un bildiği hâl eski olabilir.
- **Yabancı hukuk etkisi.** Çıktı yabancı sözleşme alışkanlıklarına (ör. İngiliz hukuku kalıpları) kayabilir; Türk hukukunda karşılığı olmayan kavramları avukatınız ayıklamalıdır.
- **"Tamam" yanılgısı.** Claude'un "bu sözleşmede sorun yok" demesi hiçbir şey kanıtlamaz. Ön inceleme yalnız avukata gidecek listeyi kısaltır.
- **Kritik madde.** Cezai şart, sorumluluk sınırı, yetkili mahkeme gibi maddeleri yalnızca Claude'a bırakmayın.
- **Dosya sınırı.** Yükleme 500 MB ve PDF için en çok 1000 sayfa; çok uzun ekli sözleşmeleri bölümlere ayırın.

## İlgili sayfalar

- [Hukuk departmanı](/wiki/departmanlar/hukuk/), [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/)
- [Claude ile PDF](/wiki/gorevler/claude-ile-pdf/), [Claude ile rapor hazırlama](/wiki/gorevler/claude-ile-rapor/)
- [Satın alma](/wiki/departmanlar/satinalma/) ve [Projects](/wiki/araclar/projects/)
- [Prompt kataloğu](/wiki/prompting/prompt-katalogu/)
