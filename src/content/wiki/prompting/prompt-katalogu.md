---
title: "Prompt Kataloğu: Hazır Şablonlar"
seoTitle: "Hazır Türkçe Prompt Şablonları: İş İçin 26 Örnek"
description: "Toplantı özeti, müşteri e-postası, sözleşme ön incelemesi, KVKK metni ve rapor için kopyalayıp dolduracağınız 26 hazır Türkçe prompt şablonu."
tags:
  - prompting
  - sablon
  - katalog
lastUpdated: "2026-10-06"
---

**Çoğu profesyonel her gün benzer 5-10 işle uğraşır.** Toplantı özeti, müşteri e-postası, rapor taslağı, veri analizi, hızlı araştırma, bunların her biri için **kullanıma hazır prompt şablonu** olması, her seferinde yeniden düşünmekten kurtarır.

Bu sayfa pratik kullanımdan derlenmiş prompt şablonları sunar. **Kopyalayın, [köşeli parantezli yerleri] kendi bilgilerinizle doldurun, kullanın.**

## Nasıl Kullanılır

1. Aşağıdan ihtiyacınıza yakın şablonu seçin
2. Köşeli parantezli yerleri (`[müşteri adı]` gibi) doldurun
3. Claude'a verin
4. Çıktıyı kontrol edin, gerekirse iterasyonla geliştirin
5. Düzenli kullandığınız şablonları bir [Claude Projesi](/wiki/araclar/projects/)ne ya da [Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/)'ne ekleyin (ayrıntı sayfanın sonunda)

İterasyon süreci için [Prompt İterasyonu](/wiki/prompting/prompt-iterasyonu/) sayfasına bakın.

---

## A. Müşteri ve Satış

### A1. Soğuk E-posta

```
Rol: B2B satış e-postaları yazan, kısa ve doğrudan konuşan deneyimli bir satış yöneticisisin.

Görev: Yeni bir potansiyel müşteriye ilk temas e-postası yaz.

Hedef kitle: [Sektör] sektöründe [pozisyon] kişi, [şehir]'de.
Şirket: [Şirket adı], [çalışan sayısı], [kısa tanım].

Değer önerimiz: [bir cümle]
Ortak referans veya bağlantı: [varsa]

Kurallar:
- En fazla 100 kelime
- Konu satırı 5-7 kelime
- İlk cümle: açılış cümlesi (okurun sorununa değen bir gözlem)
- Orta: değer önerisi (1 cümle)
- Son: net, küçük bir sonraki adım (örn. "15 dk konuşalım mı?")
- Pazarlama klişesi yasak ("lider çözümümüz", "yenilikçi" vs.)
- Resmî-samimi kayıt: "Merhaba [Ad]" ile başla

İki versiyon yaz: A versiyonu daha doğrudan, B versiyonu daha hikâyeyle.
```

Not: Soğuk e-posta ticari elektronik ileti sayılabilir ve alıcının izni, İYS kaydı gibi kuralları gündeme getirebilir (6563 sayılı Kanun). Hangi alıcıya, hangi koşulda gönderebileceğinizi hukuk biriminizle teyit edin. Alıcı bilgisini Claude'a yazarken de [KVKK](/wiki/temeller/gizlilik-kvkk/) kurallarını gözetin.

### A2. Müşteri İtirazına Yanıt

```
Rol: Müşteri ilişkilerinde itirazı yumuşak ama net karşılayan kıdemli bir müşteri yöneticisisin.

Görev: Müşterinin şu itirazına yanıt taslağı çıkar.

Müşteri itirazı (orijinal mesajı):
[mesajı yapıştır; kişisel veriyi anonimleştir]

Bizim durumumuz:
- Ürün/hizmet: [tanım]
- İtirazın haklı tarafları: [kabul ettiğin]
- İtirazın yanlış varsayımları: [açıklama]
- Önerimiz: [çözüm]

Kurallar:
- Müşterinin haklı kısmını önce kabul et (defansif olma)
- Yanlış varsayımları açıkla, ama doğru-yanlış üzerinden değil veriyle
- Net bir çözüm öner
- Resmî-iş kayıt
- En fazla 200 kelime
```

[Yaygın İtirazlar](/wiki/temeller/itirazlar/) sayfasında genel itiraz kalıpları var.

### A3. Çeyreklik Satış Hattı Değerlendirmesi

```
Rol: Satış verisini yönetime özetleyen bir satış operasyon analistisin.

Görev: Şu satış hattı (pipeline) verilerinden bir çeyreklik değerlendirme hazırla.

Veri (Excel/CSV):
[yapıştır veya yükle]

Üret:
1. Toplam satış hattı değeri ve önceki çeyrekle değişim
2. Aşama bazında döküm (her aşamada kaç fırsat, toplam değer)
3. Riskli fırsatlar (kapanış tarihi geçmiş, son 30 gündür hareketsiz)
4. En yüksek değerli 5 fırsatın durumu
5. Sonraki 30 günde aksiyon gereken 3 fırsat

Format: yönetim için 1 sayfa özet (başlıklar, kısa paragraflar, gerekirse tablo)
```

[Satış departmanı](/wiki/departmanlar/satis/) sayfası ek detay verir.

---

## B. Toplantı ve İletişim

### B1. Toplantı Sonrası Özet

```
Rol: Toplantı notlarını kısa ve eyleme dönük özetleyen deneyimli bir yönetici asistanısın.

Görev: Şu toplantı transkripsiyonundan / notlarından özet çıkar.

Notlar:
[transkript veya elle yazılmış notları yapıştır]

Üret:
1. Toplantının amacı (1 cümle)
2. Katılımcılar (varsa)
3. Tartışılan ana 3-5 konu (bullet, her biri 1-2 cümle)
4. Alınan kararlar (varsa): net, kim, ne, ne zaman
5. Aksiyon maddeleri tablo:
   | Aksiyon | Sorumlu | Son tarih |
6. Çözülmemiş sorular / sonraki toplantıya kalan

Kurallar: Türkçe yaz, klişe yasak, en fazla 1 sayfa
```

**Süre:** elle 30-45 dakika, Claude ile 5-10 dakika (kontrol için ayrıca yaklaşık 10 dakika). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

### B2. Toplantı Öncesi Brief

```
Rol: Toplantı öncesi kısa ve işe yarar brief hazırlayan bir stratejik destek uzmanısın.

Görev: Yarın saat [zaman]'daki [müşteri / iç toplantı] için brief hazırla.

Toplantı bilgisi:
- Konu: [konu]
- Katılımcılar: [isim ve rolleri]
- Süre: [dakika]
- Hedefimiz: [ne çıkarmak istiyoruz]

Bende olan veri:
- Önceki toplantı notları: [özet veya yükle]
- Müşteri/şirket profili: [özet veya yükle]
- Önceki yazışmalar: [özet]

Üret:
1. Toplantının stratejik önemi (1 paragraf)
2. Katılımcı profilleri: kim, neyle ilgili, ne ister
3. Hazırlamam gereken 3 ana nokta
4. Olası 3 zor soru ve kısa cevap taslağı
5. Toplantı sonrası muhtemel aksiyon adımları

Format: yarım sayfa, hızlı taranabilir
```

### B3. Şirket İçi Duyuru

```
Rol: Şirket içi iletişimde açık ve sade yazan bir kurumsal iletişim uzmanısın.

Görev: Şu konuda tüm çalışanlara duyuru e-postası yaz.

Konu: [örn. yeni AI politika, ofis taşınma, tatil duyurusu]

Bağlam:
- Neden yapılıyor: [sebep]
- Ne değişiyor: [değişiklik]
- Çalışanlardan ne bekleniyor: [aksiyon]
- Soru için: [sorumlu]

Kurallar:
- Açık, doğrudan, 250 kelime altı
- "Sayın değerli çalışanlarımız" yasak, yerine "Merhaba ekip"
- Klişe pazarlama dili yasak
- Net aksiyon ile bitir
- İmza: [İsim, Pozisyon]
```

---

## C. Yazı ve İçerik

### C1. LinkedIn Post

```
Rol: İş dünyası için LinkedIn paylaşımı yazan, klişeden kaçınan bir içerik yazarısın.

Görev: LinkedIn için bir post yaz.

Konu: [konu]
Hedef kitle: [örn. orta-büyük şirket karar vericileri, satış müdürleri]
Tarz: [örn. kişisel hikâye + içgörü, vaka analizi, madde madde liste]

Kurallar:
- En fazla 1300 karakter
- İlk satır dikkat çekmeli (okuru durduran)
- Ortada değer (gerçek bir içgörü, klişe değil)
- Sonda net bir çağrı (yorum yap, paylaş, görüşelim, yazıya yönlen)
- Pazarlama klişesi yasak ("lider", "yenilikçi", "vizyoner")
- Hashtag 3-5 tane, alakalı
- Türkçe, samimi-iş kayıt

3 farklı versiyon üret: A) hikâye temelli, B) veri temelli, C) yaygın görüşe karşı çıkan
```

### C2. Blog Yazısı Taslağı (İskelet)

```
Rol: Arama motoru uyumlu blog içeriği planlayan deneyimli bir içerik editörüsün.

Görev: Şu konuda blog yazısı için ayrıntılı bir iskelet çıkar.

Konu: [konu]
Hedef anahtar kelime: [SEO için]
Hedef okur: [kim: sektör, pozisyon, sorun]
Kelime hedefi: [örn. 1500-2000]

Üret:
1. 5 alternatif başlık önerisi (arama görünürlüğü ve tıklanma dengesi)
2. Meta açıklama (155 karakter)
3. Tam iskelet:
   - Giriş (problem, açılış cümlesi, kim için)
   - Ana bölümler (en az 4, her biri H2)
   - Her ana bölüm altında 2-3 alt başlık (H3)
   - Sonuç + okura çağrı
4. Her bölüm için anahtar nokta (cümle)
5. İçerikte kullanılabilecek 3 örnek/vaka önerisi

Format: hiyerarşik liste
```

### C3. Müşteri Vaka Çalışması

```
Rol: B2B vaka çalışması yazan, sayıya dayanan ve abartmayan bir içerik yazarısın.

Görev: Şu müşteri için vaka çalışması yaz.

Müşteri (anonimleştirilmiş): [örn. "Trakya'da orta ölçekli gıda üreticisi, 8 çalışan"]
Sorun: [sorun]
Bizim çözümümüz: [çözüm]
Sonuç (sayısal): [örn. "haftada 40 saat tasarruf"]

Yapı:
1. Müşteri kim (1 paragraf)
2. Hangi sorunla geldi (1 paragraf)
3. Ne denedi, ne işe yaramadı (yarım paragraf)
4. Bizim yaklaşımımız (1 paragraf)
5. Süreç ve dönüm noktaları (2-3 paragraf)
6. Sonuçlar: sayısal ve niteliksel (1 paragraf)
7. Müşteri alıntısı (varsa) veya benzeri sonuç bekleyenlere not

Kurallar: 
- Maksimum 800 kelime
- Sayısal verilerde hep aralık veya yaklaşık
- Müşteri ismi varsa anonimleştir
- Pazarlama klişesi yasak
```

---

## D. Analiz ve Karar

### D1. Veri Analizi (CSV / Excel)

```
Rol: Tablo verisinden yönetim için içgörü çıkaran bir veri analistisin.

Görev: Şu veriyi analiz et.

Veri:
[CSV/Excel yükle]

Beklediğim:
1. Veri yapısının özet açıklaması (kaç satır, hangi sütunlar, ne tarz)
2. 3 ana içgörü: her biri 1-2 cümle, gerekirse hesapla destekli
3. Dikkat çeken anomali / aykırı değer (varsa)
4. Veriden hareketle 3 öneri / aksiyon
5. Görselleştirme önerisi (hangi grafiği nereye)

Format: yönetim raporu, 1 sayfa
Görselleştirme istersem Artifact olarak çıkar
```

[Artifacts](/wiki/yetenekler/artifacts/) sayfası görselleştirme detayını verir.

### D2. Karar Matrisi (Çok Seçenek)

```
Rol: Karar vericilere seçenekleri ağırlıklı kriterlerle karşılaştıran bir strateji danışmanısın.

Görev: [Karar konusu] için karar matrisi hazırla.

Seçenekler:
- A: [seçenek]
- B: [seçenek]
- C: [seçenek]

Değerlendirme kriterleri ve ağırlıkları:
- [Kriter 1] (ağırlık %X)
- [Kriter 2] (ağırlık %X)
- [Kriter 3] (ağırlık %X)
[ağırlıklar toplam %100]

Üret:
1. Kriter × seçenek matrisi (her hücrede 1-10 puan + kısa gerekçe)
2. Ağırlıklı toplam skor
3. En yüksek skorlu seçeneği öner
4. Bu önerinin riski nedir, nasıl yönetilir
5. Karar verici için "tek satır" özet

Format: tablo + altında 1 sayfa yorum
```

### D3. SWOT / Risk Analizi

```
Rol: Stratejik analiz yapan, her iddiayı veriye bağlayan bir iş analistisin.

Görev: [Konu / proje / şirket] için SWOT (veya risk) analizi yap.

Bağlam:
[konunun arka planını anlat]

Üret SWOT:
- Güçlü yönler (en az 4)
- Zayıf yönler (en az 4)
- Fırsatlar (en az 4)
- Tehditler (en az 4)

Her madde için:
- 1-2 cümle açıklama
- Hangi veriye dayandığı
- Önemini 1-5 arası skor

Sonuç: stratejik öneriler (3 öneri)
```

---

## E. Hukuk ve Sözleşme

### E1. Sözleşme İnceleme

```
Rol: Türk hukuku açısından sözleşme ön incelemesi yapan deneyimli bir hukuk danışmanısın.

Görev: Şu sözleşmeyi (Türk hukuku açısından) incele.

Sözleşme:
[yükle]

Bizim rolümüz: [satıcı / alıcı / iş ortağı]

Üret:
1. Genel değerlendirme (3-4 cümle)
2. Maddeler bazında inceleme:
   | Madde | Risk seviyesi (Düşük/Orta/Yüksek) | Yorumum | Önerim |
3. Türk Borçlar Kanunu emredici hükümleriyle çelişme riski olan maddeler
4. Müzakere edilebilir maddeler ve bizim öneri pozisyonumuz
5. Genel öneri: imzala / şu maddeler düzeltilmeden imzalama / red

UYARI: Bu hukuki tavsiye değil, ön inceleme. Final için avukat onayı gerekli.
```

[Hukuk departmanı](/wiki/departmanlar/hukuk/) sayfasında sözleşme tarafının detayı.

### E2. KVKK Aydınlatma Metni

```
Rol: KVKK aydınlatma metinlerini sade Türkçeyle hazırlayan bir veri koruma danışmanısın.

Görev: Şu durum için KVKK aydınlatma metni taslağı hazırla.

Veri sahibi: [örn. müşteri / çalışan / iş ortağı]
İşlenen kişisel veri kategorisi: [ad, e-posta, telefon, IP, vs.]
İşleme amacı: [hizmet sunumu, pazarlama, vb.]
Hukuki sebep: [açık rıza / sözleşme / yasal yükümlülük]
Saklama süresi: [örn. 5 yıl]
Aktarım: [yurt içi / yurt dışı, hangi 3. taraflara]

Üret:
- KVKK md. 10 (aydınlatma yükümlülüğü) gerektirdiği tüm unsurları içeren tam metin
- Sade dil: hukuk dili yerine müşterinin okuyup anlayabileceği
- Veri sahibi haklarına net atıf (md. 11)
- İletişim kanalı

UYARI: Şirketin hukuk müşaviri ile son hali onaylanacak.
```

Aktarım satırında yurt dışı geçiyorsa [KVKK m.9 Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/) sayfasına bakın.

---

## F. Operasyon ve İK

### F1. Haftalık Operasyon Raporu

```
Rol: Haftalık operasyon performansını sayılarla raporlayan bir operasyon yöneticisisin.

Görev: Şu haftanın operasyon raporunu hazırla.

Veri:
[KPI'ler, üretim sayıları, fire oranı, vs.]

Format:
1. Hafta özeti (2 cümle)
2. KPI durumu (tablo: KPI / Hedef / Gerçekleşen / Sapma %)
3. Bu haftanın 3 başarısı
4. Bu haftanın 3 zorluğu / engeli
5. Sonraki hafta için 3 öncelik
6. Üst yönetimin haberdar olması gereken bir şey (varsa)

Kurallar:
- 1 sayfa
- Belirsiz ifade yasak ("biraz iyi", "fena değil"), sayısal ol
- Türkçe yaz
```

### F2. İş İlanı

```
Rol: Kapsayıcı ve net iş ilanı yazan deneyimli bir işe alım uzmanısın.

Görev: Şu pozisyon için iş ilanı yaz.

Pozisyon: [pozisyon adı]
Departman: [departman]
Konum: [şehir / uzaktan / hibrit]
Deneyim: [yıl aralığı]

Görev tanımı:
- [3-5 ana sorumluluk]

Aranan nitelikler:
- [zorunlu]
- [tercih edilen]

Şirket tanıtımı (kısaca):
[1-2 paragraf]

Kurallar:
- Geniş aday havuzu için kapsayıcı dil
- "Genç dinamik ekip" gibi yaş ayrımcılığı içeren ifade yasak
- "Erkek aday" gibi cinsiyet talebi yasak (yasal sorun)
- Maaş aralığı: [ilanda belirtilsin / belirtilmesin; şirket politikanıza göre doldurun]
- Başvuru süreci net: nereye, ne zamana kadar, ne ile
```

İlanda maaş aralığı yazıp yazmama ve ilan metnindeki yasal sınırlar için hukuk biriminizle teyit edin. [İK departmanı](/wiki/departmanlar/insan-kaynaklari/) sayfasında daha fazla şablon.

### F3. Performans Değerlendirme Geri Bildirimi

```
Rol: Dürüst ve yapıcı performans geri bildirimi yazan deneyimli bir İK iş ortağısın.

Görev: Çalışanın yıllık performans değerlendirmesi için yapıcı geri bildirim 
taslağı hazırla.

Çalışan rolü (anonimleştir): [pozisyon]
Yıl içi başarıları:
- [3-5 madde]

Yıl içi gelişim alanları:
- [2-3 madde, dürüst]

Görev:
- Başarıları somut örneklerle yaz (2 paragraf)
- Gelişim alanlarını yapıcı dille yaz (defansif olmadan, somut örnek + öneri)
- Gelecek dönem hedefleri için 3 öneri
- Maaş/terfi konusunu (varsa) ayrı paragrafta
- Pozitif ama dürüst kapanış

Kurallar:
- Kişisel saldırı yok, davranış üzerinden konuş
- "Daha iyi yapabilir" yerine "Şu spesifik alanda gelişebilir + nasıl"
- Dürüst ol, sahte övgü yok
- 1 sayfa
```

---

## G. Hızlı Görevler

### G1. Türkçeden İngilizce'ye Profesyonel Çeviri

```
Rol: Türkçeden İngilizceye iş yazışması çeviren profesyonel bir çevirmensin.

Görev: Şu Türkçe metni İngilizce'ye profesyonel çevir.

Metin:
[yapıştır]

Bağlam: [örn. müşteriye e-posta / sözleşme maddesi / sunum slaytı]

Kurallar:
- Direkt çeviri değil, İngilizce iş dilinde doğal
- Ton: [resmî / samimi-iş / nötr]
- Türkçe deyim/atasözü varsa İngilizce karşılığı veya yumuşat
- Şirket adı ve özel isimler aynı kalsın

İki versiyon: A) çok yakın çeviri, B) doğal İngilizce yeniden yazım
```

### G2. Uzun Metin Özeti

```
Rol: Uzun metinleri ana iddiaları kaybetmeden özetleyen bir editörsün.

Görev: Şu metni özetle.

Metin:
[yapıştır]

İhtiyaç:
- Uzunluk: [tek cümle / 1 paragraf / yarım sayfa]
- Hedef okur: [örn. yöneticim / müşterim / kendim için arşiv]
- Format: [düz metin / bullet / başlık+alt madde]

Kurallar:
- Ana iddiaları kaybetme
- Yan örnekleri çıkar (özet için)
- Sayısal veri varsa koru
- "Yazının ana fikri şudur" gibi meta cümle yasak, doğrudan özet
```

### G3. Hızlı Bilgi Sorgu (Web Arama Tetikli)

```
Rol: Kaynaklı ve temkinli araştırma yapan bir araştırma analistisin.

Görev: Şu sorunun cevabını bul, kaynak link ile.

Soru: [soru]

Tercih:
- Türkçe ve İngilizce kaynaklara bak
- Türkiye-spesifik veri için resmi kaynaklara öncelik ver
- En az 2 bağımsız kaynak çakıştır
- Kaynaklar arasında çelişki varsa söyle

Format:
- 1 paragraf cevap
- Kaynak listesi (link + 1 cümle açıklama)
- Belirsizlik kalıyorsa ne kalıyor
```

[Web Arama](/wiki/araclar/web-arama/) sayfası bu yaklaşımı detaylandırır.

---

## H. Finans, İhracat, Satınalma ve Kamu

### H1. Tahsilat Hatırlatma E-postası

```
Rol: Müşteri ilişkisini bozmadan alacak takibi yapan deneyimli bir finans uzmanısın.

Görev: Vadesi geçmiş bir fatura için hatırlatma e-postası yaz.

Bilgiler:
- Müşteri: [firma adı, yetkili adı]
- Fatura no ve tutar: [no, tutar ₺]
- Vade tarihi ve geçen gün: [tarih, gün]
- Önceki hatırlatma: [yok / 1. / 2.]
- İlişkinin durumu: [uzun süreli / yeni / hassas]

Kurallar:
- Hatırlatma sırasına göre ton: 1. hatırlatma nazik, 2. net, 3. kesin ama saygılı
- Fatura numarası, tutar ve vade tarihi metinde açıkça geçsin
- Net bir sonraki adım ve tarih ver ("[tarih]'e kadar ödeme planınızı paylaşır mısınız?")
- Suçlama, tehdit ve hukuki işlem imasında bulunma
- Rakam uydurma, yalnız verdiklerimi kullan
- Resmî-iş kayıt, en fazla 120 kelime
```

Sözleşme ya da ihtar gerektiren aşamalarda hukuk biriminize danışın. [Finans departmanı](/wiki/departmanlar/finans/) sayfasında ek şablonlar var.

### H2. Bütçe Sapma Açıklaması

```
Rol: Yönetime bütçe sapmasını sayılarla anlatan bir mali analistsin.

Görev: Şu dönemin bütçe-gerçekleşen karşılaştırmasından sapma açıklaması hazırla.

Veri:
[bütçe ve gerçekleşen tablosunu yükle: kalem, bütçe, gerçekleşen]

Üret:
1. Toplam sapma (tutar ve %)
2. Sapması en büyük 5 kalem (tutar, %, olası neden)
3. Her kalem için: bu sapma tek seferlik mi, süregelen mi? (veride dayanak göster; dayanak yoksa "veri yok" yaz)
4. Dönem sonuna kadar beklenen sapma için 2 senaryo (iyimser, kötümser)
5. Yönetimin karar vermesi gereken 2-3 konu

Kurallar:
- Hesapları ayrıca göster, yönetimin yeniden hesaplayabilmesi için
- Nedeni bilmiyorsan tahmin yürütme, "ek bilgi gerekiyor" yaz
- Tablo + en fazla yarım sayfa yorum
```

Hesapları mutlaka kendiniz örnekleyin; ayrıntı için [Belgeyle Çalışma](/wiki/prompting/belgeyle-calisma/) sayfasındaki tablo doğrulama bölümüne bakın.

### H3. İngilizce Teklif Mektubu (İhracat)

```
Rol: Türk üreticiler adına yurt dışı alıcılara yazan deneyimli bir ihracat satış temsilcisisin.

Görev: Aşağıdaki bilgilerle İngilizce bir teklif mektubu yaz.

Alıcı: [firma, ülke, yetkili adı]
Ürün: [ürün, miktar, özellik]
Fiyat ve teslim şekli: [birim fiyat, para birimi, teslim şekli (örn. FOB, CIF) ve limanı]
Ödeme şekli: [peşin / akreditif / vadeli]
Teklif geçerlilik süresi: [tarih]
Tanışma bağlamı: [fuar / referans / önceki yazışma]

Kurallar:
- Doğal iş İngilizcesi, çeviri kokusu yok
- Ton: nazik ama net, abartılı övgü yok
- Fiyat, teslim şekli ve geçerlilik tarihi ayrı satırlarda açık yazılsın
- Verdiğim bilgilerin dışında şart, sertifika ya da teslim süresi ekleme
- Sonda net bir sonraki adım iste (örnek, numune, görüşme)
- En fazla 200 kelime
```

[İhracat departmanı](/wiki/departmanlar/ihracat/) sayfası daha fazla örnek verir. Fiyat, teslim şekli ve ödeme koşullarını göndermeden kendiniz kontrol edin.

### H4. Proforma Fatura Yazışması

```
Rol: İhracat operasyonunda alıcıyla yazışan titiz bir dış ticaret uzmanısın.

Görev: Alıcının proforma fatura talebine İngilizce yanıt yaz.

Alıcının talebi (orijinal e-posta):
[yapıştır; kişisel veriyi anonimleştir]

Bizim bilgilerimiz:
- Proforma no ve tarih: [no, tarih]
- Ürün ve miktar: [liste]
- Toplam tutar ve para birimi: [tutar]
- Banka bilgileri ve ödeme şartı: [yalnız şirket içi onaylı metin]
- Hazırlık ve sevk süresi: [gün]

Kurallar:
- Alıcının sorduğu her soruya sırayla cevap ver
- Bilgisi olmayan soruya "bu konuda teyit edip döneceğiz" de, tahmin etme
- Proformayı ekte gönderdiğimizi belirt (dosyayı ben eklerim)
- En fazla 150 kelime, resmî-iş kayıt
```

Banka bilgileri gibi hassas veriyi Claude'a yazmadan önce şirket politikanıza bakın.

### H5. Satınalma Teklif Karşılaştırması

```
Rol: Tedarikçi tekliflerini ağırlıklı kriterlerle karşılaştıran deneyimli bir satınalma uzmanısın.

Görev: Aşağıdaki tedarikçi tekliflerini karşılaştır.

Teklifler:
[her teklifi yapıştır ya da PDF olarak yükle; tedarikçi adı + fiyat + vade + teslim süresi + ödeme koşulu + garanti]

Kriterler ve ağırlıklar:
- Toplam maliyet (%[X])
- Teslim süresi (%[X])
- Ödeme vadesi (%[X])
- Garanti ve servis (%[X])
- Tedarikçi güvenilirliği (%[X])

Üret:
1. Teklif × kriter tablosu (her hücrede somut değer, tekliften alınan)
2. Ağırlıklı skor ve sıralama
3. Tekliflerde eksik ya da birbirine uymayan bilgi (örn. biri KDV dahil, diğeri hariç)
4. Pazarlıkta istenebilecek 3 madde
5. Karar vericiye tek paragraf öneri

Kurallar:
- Teklifte yazmayan değeri uydurma, "teklifte yok" yaz
- Para birimi ve KDV durumunu aynı zemine getir, nasıl getirdiğini söyle
```

[Satınalma departmanı](/wiki/departmanlar/satinalma/) sayfasında ek şablonlar var.

### H6. Resmî Yazı Taslağı (Kamu)

```
Rol: Kamu kurumunda resmî yazı hazırlayan deneyimli bir idari destek personelisin.

Görev: Şu konuda resmî yazı taslağı hazırla.

Kurum ve muhatap: [yazının yazıldığı birim ve makam]
Konu: [kısa konu]
İlgi: [varsa önceki yazı tarih ve sayısı]
Anlatılacak içerik: [kısa, madde madde]
İstenen işlem: [ne yapılması isteniyor, hangi tarihe kadar]

Kurallar:
- Resmî yazışma dili: "bilgilerinize arz/rica ederim" kalıpları, edilgen anlatım, kısa ve açık cümleler
- Kurumun kendi yazı biçimi ve yönetmeliğine göre yerleşimi ben ayarlayacağım; sen yalnız metni yaz
- Sayı, tarih ve mevzuat atfını ben vermedikçe uydurma, yer tutucu bırak: [sayı], [tarih]
- Kişisel veri ve gizlilik dereceli bilgi içermesin
- En fazla 1 sayfa
```

Kamu kullanımında kurumunuzun yapay zekâ ve veri politikasına uyun; çerçeve için [Kamu departmanı](/wiki/departmanlar/kamu/) sayfasına bakın.

---

## Şablonu Kalıcı Hale Getirme

Bu kataloğun her şablonunu **her seferinde kopyalamak** uzun vadede yorucudur. Sık kullandıklarınız için:

1. **Claude Projesi:** şablonları bir [Projeye](/wiki/araclar/projects/) dosya olarak yükleyin, proje talimatına "şablonlarım bu projede; adıyla çağırırsam o şablonu kullan, eksik bilgiyi sor" yazın. Sonra basitçe deyin: *"Soğuk e-posta şablonunu kullan, müşteri X için, sektör Y."* Cowork bulut görevleri bilgisayardaki klasöre doğrudan erişemediği için kütüphaneyi yerel klasörde değil projede tutmak daha güvenlidir
2. **Sık kullanılan ve değişmeyen şablon:** [Skill](/wiki/yetenekler/skills/)'e çevirin; Claude ilgili gördüğünde yükler
3. **Her sohbette geçerli kısa kurallar** (dil, ton, yasak kalıplar): profil talimatı ("Instructions for Claude", Settings > General)
4. **Claude Code kullanıyorsanız:** [CLAUDE.md](/wiki/claude-md/nedir/) dosyası bu iş için kullanılan mekanizmadır

Talimat türlerinin kapsamı için [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/), organize etmek için [Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/) sayfasına bakın.

## Şablonların Sınırı

Şablonlar **başlangıç noktasıdır**. Aşağıdaki durumlar için yeterli değildir:

- Çok hassas, sektör-spesifik nüanslı işler (örneğin tıp tedavi planı)
- Sıfırdan yaratıcı çıktı (yeni marka kimliği)
- Karmaşık çok adımlı stratejik analiz

Bu işler için [4D Çerçevesi](/wiki/prompting/4d-cercevesi/) ve [İleri Seviye](/wiki/prompting/ileri-seviye/) sayfaları ile derinleşin.

## İlgili Sayfalar

- [Temel İlkeler](/wiki/prompting/temel-ilkeler/): Genel prompt mantığı
- [4D Çerçevesi](/wiki/prompting/4d-cercevesi/): Felsefe
- [Türkçe Prompt Teknikleri](/wiki/prompting/turkce-prompt-teknikleri/): Türkçe için
- [Çıktı Formatı](/wiki/prompting/cikti-formati/): Tablo/JSON/markdown kontrolü
- [Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/): Örnekle öğretme
- [Prompt İterasyonu](/wiki/prompting/prompt-iterasyonu/): Şablonu geliştirme
- [Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/): CLAUDE.md rol şablonları
- [Belgeyle Çalışma](/wiki/prompting/belgeyle-calisma/): Uzun belge, sözleşme ve tablo ile çalışırken prompt
- [Departmanlar](/wiki/departmanlar/): Rol bazlı uygulamalar

