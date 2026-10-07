---
title: "Research Mode: Derin Araştırma ve Uzun Soluklu Analiz"
seoTitle: "Claude ile Derin Araştırma: Pazar ve Rakip Analizi"
description: "Claude Research ile çok kaynaklı derin araştırma: nasıl açılır, hangi planlarda var, limite etkisi, kalite kontrol, pazar ve rakip analizi örnekleri."
tags:
  - yetenekler
  - arastirma
  - research
lastUpdated: "2026-10-06"
---

**Bazı sorular tek bir web aramasıyla cevaplanmaz.** "Türkiye'de organik gıda pazarının 5 yıllık görünümü", "rakip 5 firma için detaylı kıyaslama", "yeni mevzuatın sektör etkisi" gibi sorular saatler süren araştırma ister. Claude'un **Research** (derin araştırma) özelliği tam buna hizmet eder.

Bu sayfa derin araştırma yeteneğinin ne olduğunu, claude.ai'de nasıl açıldığını, kullanım limitine etkisini ve hangi senaryolarda iş profesyoneline değer ürettiğini anlatır.

## Research Mode Nedir?

Tek bir web araması ile karşılaştırın:

| | Hızlı Web Arama | Research Mode |
|---|---|---|
| Süre | 10-30 saniye | genelde dakikalar (kesin süre sınırı yayımlanmıyor) |
| Kaynak sayısı | 5-10 | çok daha fazla |
| Çıktı | Birkaç paragraf | Yapılandırılmış uzun rapor |
| Kullanım | Hızlı bilgi | Derin sentez, karar destek |
| Tetikleme | Otomatik | Bilinçli istek |

Research, bir arkadaşınıza "şunu araştırıp bana sun" demek gibidir. Claude:

1. Soruyu alt sorulara böler
2. Her alt soru için birden çok kaynak tarar
3. Çelişen bilgileri fark eder, doğruluk değerlendirmesi yapar
4. Yapılandırılmış bir rapor olarak sunar
5. Kaynakları ekte verir

## Hangi Senaryolarda Değer?

### Pazar Araştırması

> *"Türkiye'de B2B SaaS pazarının 2026 görünümü: pazar büyüklüğü, ana oyuncular, segment kırılımı, büyüme trendleri, yatırımcı ilgisi."*

Normalde günler süren bir analist işi. Research bunun ilk taslağını çok daha kısa sürede çıkarır; yine de bir uzmanın gözden geçirmesi gerekir.

### Rakip Analizi

> *"5 ana rakibimiz: ürün özellikleri, fiyatlandırma, müşteri profili, pazarlama yaklaşımı, son 12 aydaki haberler. Bizimle kıyaslama tablosu."*

[Pazarlama departmanı](/wiki/departmanlar/pazarlama/) ve [Satış departmanı](/wiki/departmanlar/satis/) için sürekli ihtiyaç olan iş.

### Mevzuat / Yasal Araştırma

> *"Yeni KVKK düzenlemesi (2026): değişen maddeler, sektörümüze etkisi, uygulama tarihleri, geçiş gereklilikleri."*

[Hukuk departmanı](/wiki/departmanlar/hukuk/) tarafında zaman tasarrufu büyük.

### Teknoloji Değerlendirmesi

> *"3 farklı CRM çözümünün kıyaslaması: SAP, Salesforce, MS Dynamics. Maliyet, özellik, Türkiye lokalizasyonu, müşteri yorumları."*

[BT departmanı](/wiki/departmanlar/bilgi-teknolojileri/) için satın alma kararı destek.

### Müşteri / İş Ortağı Araştırması

> *"X holding hakkında detaylı araştırma: ana iş kolları, son 3 yıl finansalları, yönetim, son haberler, satışta dikkat edilmesi gereken hassasiyetler."*

Üst düzey toplantı öncesi brief.

### Sektör Trend Raporu

> *"2026 başında lojistik sektörü: küresel ve Türkiye trendleri, teknoloji yenilikleri, fiyat baskıları, yeni iş modelleri."*

Stratejik planlama girdisi.

## Research Nasıl Açılır?

### 1. Research düğmesiyle (claude.ai)

Sohbet kutusundaki **"+" menüsünden "Research"** seçilir. Altta mavi bir gösterge belirir; tekrar tıklarsanız kapanır.

- **Planlar:** Free'de yok. Pro, Max, Team ve Enterprise'ta web, Claude Desktop ve mobilde çalışır.
- **Web arama açık olmalı.** Kapalıysa Research kullanılamaz.
- Claude birbirini izleyen çok sayıda arama yapar. **Gmail, Google Calendar veya Google Docs bağlıysa** onları da tarayabilir; bağlantıyı açmadan önce hangi hesabın bağlı olduğuna bakın ([Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/)).
- Yanıt genelde dakikalar içinde, kaynak atıflarıyla gelir; atıflar doğrulamayı kolaylaştırır.
- Team ve Enterprise'ta Research için ayrı bir yönetici anahtarı olup olmadığı belgelenmemiştir. Düğmeyi göremiyorsanız önce yöneticinize sorun.

### 2. Açıkça isteme

Düğme olmadan da isteğinizi derin araştırma diye tarif edebilirsiniz:

> *"Detaylı araştırma yap. Birden çok kaynak çakıştır, çelişkileri belirt, kaynak listesi ver. Yapılandırılmış rapor formatında."*

Bu, Research düğmesinin yaptığı kadar çok arama yapmayı garanti etmez ama çıktının biçimini ve titizliğini yönlendirir.

### 3. Uzun görevler ve telefon

Çok uzun süren işleri [Cowork](/wiki/araclar/cowork-modu/) içinde yürütebilirsiniz. Telefondan görev gönderme (Dispatch) yeni kullanıcılara kapalı bir beta olduğu için buna güvenmeyin; ayrıntı için [Claude Mobil](/wiki/araclar/claude-mobil/#telefondan-görev-mobil-cowork-ve-dispatch) sayfasına bakın.

### 4. Project Knowledge ile birleşik

Araştırılacak konunun **iç dokümanlarınız** kapsamı varsa (örn. eski raporlar, satış verisi), bunları [Projects](/wiki/araclar/projects/) altında knowledge olarak yükleyip "iç dokümanlarımla birlikte web araştırmasını birleştir" diyebilirsiniz.

## Çıktı Formatı

Tipik bir araştırma raporu (isterseniz bu iskeleti prompt'ta tarif edin):

```markdown
# [Konu]: Araştırma Raporu

## Yönetici Özeti
[1-2 paragraf, en kritik bulgular]

## Metodoloji
- Tarih aralığı: ...
- Kaynak sayısı: ...
- Sınırlamalar: ...

## 1. [Alt Konu 1]
[Detay paragraflar]

## 2. [Alt Konu 2]
[Detay paragraflar]

...

## Çelişen Bulgular
[Kaynaklar arası anlaşmazlıklar, yorumlar]

## Sonuç ve Öneriler
[Veriden çıkan tavsiyeler]

## Kaynaklar
1. [Link], [Tip], [Tarih]
2. ...
```

[Çıktı Formatı](/wiki/prompting/cikti-formati/) sayfasında nasıl şekillendirileceği detaylanır.

## Pratik İpuçları

### 1. Soruyu Spesifik Sor

❌ *"Pazar araştırması yap."*
↓ Çok geniş, sığ çıktı

✅ *"Türkiye'de yenilenebilir enerji depolama (battery storage) pazarının 2026 görünümü. Spesifik olarak: pazar büyüklüğü TL bazında, ana 5 oyuncu, mevzuat gelişmeleri, yatırım trendleri, önümüzdeki 24 ay tahmini."*

### 2. Tarih Aralığı Belirt

> *"Son 12 ay verilerine odaklan, 2025 öncesi sadece referans için."*

Aksi halde Claude eskimiş verileri ön plana çıkarabilir.

### 3. Coğrafya Belirt

> *"Türkiye-spesifik analiz. Global örnekler sadece kıyaslama için."*

Türkiye odaklı bir araştırma istiyorsanız bunu söylemezseniz Claude global bakış açısı verir.

### 4. Çıktı Uzunluğu Belirt

> *"15-20 sayfa rapor"* veya *"4 sayfa yönetici özet"*

Belirtmezseniz Claude orta uzunluk verir, sizin için fazla veya az olabilir.

### 5. Kaynak Önceliği

> *"Resmî kaynaklar (TÜİK, kamu kuruluşları) > sektör raporları > basın > blog hiyerarşisinde değerlendir."*

Kaynak kalitesi araştırma kalitesini belirler.

### 6. Çelişkileri Sor

> *"Kaynaklar arası çelişki varsa açıkça belirt, hangi kaynağın daha güvenilir olduğunu söyle."*

Bu Claude'u körü körüne sentez yapmaktan çıkarır.

[Web Arama](/wiki/araclar/web-arama/) sayfasında araştırma kalitesini artırma teknikleri var.

## Kalite Kontrol

Research çıktısı yine de doğrulama gerektirir:

- **Sayısal veriler:** Önemli olanları kaynağa gidip kontrol edin
- **Mevzuat referansları:** Yürürlük tarihini doğrulayın (resmî kaynak)
- **Şirket finansalları:** Bilanço dönemi ve para birimi tutarlı mı
- **Çelişen iddialar:** Claude çelişkiyi belirtmiş mi, yoksa birini saklayıp diğerini almış mı

[Sınırlamalar](/wiki/temeller/sinirlamalar/) sayfası halüsinasyon ve doğrulama konusunu derinleştirir.

## Maliyet Yönü: Kullanım Limiti

Research'ün **ayrı bir kotası yoktur**; standart sohbetle aynı limitten düşer. Ama çok sayıda kaynak getirdiği için limiti normal sohbetten **daha hızlı** tüketir. Limit "günlük" değil, **5 saatlik kayan pencere ve haftalık sınır** üzerinden işler; ayrıntı [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/) sayfasında.

Plana göre:

- **Pro:** Sık Research kullanırsanız pencereyi ve haftalık sınırı çabuk doldurabilirsiniz. Önce araştırmanın sorusunu daraltın.
- **Max:** Daha geniş limit verir; Research'ü çok kullanıyorsanız seçenektir ama zorunlu değildir.
- **Team:** Kullanım koltuk tipine (Standard veya Premium) göre değişir.
- **Enterprise:** Kullanım bazlı planda koltuk ücreti kullanımı içermez, kullanım standart API fiyatıyla ayrıca faturalanır; eski koltuk bazlı sözleşmelerde (legacy) ise koşullar sözleşmeye bağlıdır. Maliyeti önceden tahmin edin.

[Planlar](/wiki/temeller/planlar/) sayfası detaylar.

## Birleştirilmiş Senaryo: Research + Skills + Connectors

Karmaşık iş senaryosu örneği:

1. Araştırma Research ile başlatılır; dakikalar içinde atıflı rapor gelir
2. **[Skills](/wiki/yetenekler/skills/)** ile rapor .docx ve .pptx olarak dışa aktarılır
3. **[Connectors](/wiki/araclar/connectors/)** ile rapor Drive'a yüklenir
4. Sonucu yöneticilerle paylaşırsınız

Bu birleşik akış [Cowork](/wiki/araclar/cowork-modu/) içinde tek prompt'la kurulabilir.

## Research'e Karar Verirken

Müşteri toplantısı, yönetim raporu ve stratejik karar gibi "hazırlanma süresi olan" işlerde Claude zaman kazandırır. Kurgusal bir örnek: Yıldız Ambalaj'ın satış ekibi 5 rakibin ürün ve fiyat karşılaştırmasını hazırlıyor.

**Süre:** elle 1-2 gün, Claude ile 1-2 saat + 2-3 saat doğrulama. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

Doğrulama süresini hesaba katmadan "araştırma 1 saatte bitti" demeyin: sayıları ve kaynakları kontrol etmek işin ayrılmaz parçasıdır.

## Sınırlar

**Henüz şu işleri yapamaz:**

- Ücretli akademik dergilere erişemez (yalnızca açık kaynaklar)
- Şirket içi gizli araştırmalara erişemez (kaynak yok)
- Çok özel uzmanlık gerektiren niş alanlar (örn. roket bilimi nüansları)
- Birinci el saha araştırması (anket, mülakat)

Bu durumlar için **AI başlangıç noktası** + **insan derinleştirme** birleşimi gerekir.

## İlgili Sayfalar

- [Web Arama](/wiki/araclar/web-arama/): Hızlı arama tarafı
- [Claude Mobil](/wiki/araclar/claude-mobil/#telefondan-görev-mobil-cowork-ve-dispatch): Telefondan görev (Dispatch, yeni kullanıcıya kapalı)
- [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/): Research'ün limite etkisi
- [Cowork Modu](/wiki/araclar/cowork-modu/): Research + Skills + Connectors birleşimi
- [Türk İş Araçları](/wiki/temeller/turk-is-araclari/): Türkiye'deki sistemlerle çalışma sınırları
- [Skills](/wiki/yetenekler/skills/): Çıktıyı dosya olarak dışa aktarma
- [Projects](/wiki/araclar/projects/): İç dokümanlarla birleşik araştırma
- [Çıktı Formatı](/wiki/prompting/cikti-formati/): Rapor şekillendirme
- [Sınırlamalar](/wiki/temeller/sinirlamalar/): Halüsinasyon riski
- [Hukuk Departmanı](/wiki/departmanlar/hukuk/): Mevzuat araştırması
- [Pazarlama Departmanı](/wiki/departmanlar/pazarlama/): Pazar araştırması

