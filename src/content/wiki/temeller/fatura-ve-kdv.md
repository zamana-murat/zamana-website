---
title: "Fatura, KDV ve Türkiye'de Muhasebeleştirme"
description: "Claude aboneliğinin Türkiye'de KDV, stopaj ve muhasebe yansıması. Yurt dışı dijital hizmet vergisi, fatura formatı, gider gösterimi."
tags:
  - temeller
  - fatura
  - kdv
  - muhasebe
lastUpdated: "2026-10-05"
---

**Claude aboneliği yurt dışından alınan dijital bir hizmettir.** Türkiye'de muhasebeleştirilmesi, KDV uygulanması ve gider olarak gösterilmesi için net bir prosedür var; bunu doğru bilmek de finans direktörünün ilk sorusudur.

Bu sayfa Claude aboneliğinin Türkiye'deki vergi-muhasebe yansımasını anlatır. **Önemli not:** Bu sayfa genel rehberlik amaçlıdır; nihai uygulamayı **mali müşaviriniz** ile birlikte netleştirin. Vergi mevzuatı değişebilir.

## Temel Bilgi: Anthropic Türkiye'de Vergi Mükellefi mi?

Bildiğimiz kadarıyla hayır. **Anthropic ABD merkezli bir şirkettir; Türkiye'de bilinen bir şirketi, işyeri veya daimi temsilcisi yoktur.** Hizmet yurt dışından satın alınır. Bu, Türk firmasının **yurt dışı kaynaklı dijital hizmet alımı** olarak işlem yapmasını gerektirir. Anthropic'in Türkiye'de ayrıca KDV kaydı olup olmadığını resmi bir kaynaktan doğrulayamadık (bkz. KDV bölümündeki not).

İki temel uygulama:

1. **KDV: 2 No'lu Beyanname (Sorumlu Sıfatıyla KDV)**
2. **Stopaj: ödemenin niteliğine bağlı; hazır abonelikte genellikle kesinti yapılmaz, ama kesin hüküm yok (aşağıya bakın)**

## KDV: Sorumlu Sıfatıyla Beyan

Türk firma yurt dışından dijital hizmet aldığında, KDV'yi **kendi hesabına alıp kendi öder.** Buna **2 No'lu KDV Beyannamesi (Sorumlu Sıfatıyla KDV)** denir. Dayanak KDV Kanunu m.6 (hizmetten Türkiye'de faydalanılması) ve m.9 (alıcının sorumlu tutulması): Türkiye'de işyeri veya temsilcisi olmayan yabancıdan alınan hizmette KDV'yi alıcı beyan eder.

**Pratik akış:**

1. Anthropic'e ödeme yaparsınız (kredi kartı veya banka transferi)
2. Anthropic size bir **invoice** (fatura) gönderir, ABD formatındadır. KDV'siz mi, KDV'li mi geldiğine her seferinde bakın (aşağıdaki nota bakın)
3. Türk firma bu tutar üzerinden **%20 KDV hesaplar** ve 2 No'lu Beyanname ile beyan eder
4. Aynı KDV, eğer firma KDV mükellefiyse, **1 No'lu Beyannamede indirim** olarak gösterilebilir → net KDV yükü genelde sıfır

**Sonuç:** Çoğu KDV mükellefi firma için **net KDV yükü yoktur**, sorumlu sıfatıyla ödediği KDV'yi indirim olarak alır. Ama beyan zorunluluğu var, atlamayın.

**Önemli not (doğrulanamayan nokta):** Web üzerinden ödemede Türkiye faturalama adresiyle %20 KDV'nin ödemeye eklendiği bildiriliyor (ikincil kaynaklara göre aylık Pro için karttan 24 dolar çekilir). Anthropic'in Türkiye'ye özel resmi bir KDV sayfasını bulamadık; Pro plan sayfası yalnızca "bölgeye göre vergi fiyata dahildir ya da ödemede eklenir" diyor. Invoice'ınızda KDV zaten görünüyorsa, 2 No'lu beyanın ve çifte KDV'nin nasıl ele alınacağını mali müşavirinizle **invoice'a bakarak** netleştirin. Yukarıdaki akış, KDV'nin invoice'a eklenmediği durumu varsayar. Türkiye'de yurt dışı dijital hizmet satıcılarının KDV kaydı kuralı esas olarak KDV mükellefi olmayan tüketicilere satışı kapsar; şirket olarak vergi numaranızı girdiğinizde Anthropic'in nasıl davrandığını resmi kaynakla teyit edemedik.

## Stopaj (Tevkifat)

Stopaj, yurt dışına ödeme yaparken **sizin** kesip vergi dairesine yatırdığınız vergidir. Kesinti gerekiyorsa, ödemenin bir kısmı Anthropic'e değil Türkiye'deki vergi dairesine gider. Gerekip gerekmediği **ödemenin niteliğine** bağlıdır. Kısa cevap: hazır bir yazılımı ya da bulut hizmetini kullanmak için ödediğiniz abonelikte genellikle kesinti yapılmaz; ama bu konuda Claude'a özel bir resmi görüş bulamadık ve uygulamada farklı yorumlar var.

**Dayanak:** Kurumlar Vergisi Kanunu m.30 (Türkiye'de işyeri olmayan yabancı kurumlara yapılan bazı ödemelerde vergi kesintisi) ve oranlar için 12.01.2009 tarihli, 2009/14593 sayılı Bakanlar Kurulu Kararı (Resmi Gazete 03.02.2009, sayı 27130). Karar sonradan değişti; gayrimaddi hak bedeli oranı 2023 tarihli özelgelerde hâlâ %20 olarak uygulanıyor.

| Ödemenin niteliği | Stopaj |
|---|---|
| Hazır yazılımı veya standart bulut hizmetini olduğu gibi kullanmak (çoğaltma, değiştirme, dağıtma hakkı yok) | Kesinti yok. Yabancı firmanın kazancı "ticari kazanç" sayılır; Türkiye'de işyeri veya daimi temsilcisi yoksa vergi kesilmez |
| Yazılımın telif ve lisans haklarını (çoğaltma, değiştirme, dağıtma), marka veya know-how gibi gayrimaddi hakları almak | %20; ABD ile yapılan anlaşma uygulanırsa en çok %10 |
| Size özel yazılım yaptırmak (serbest meslek niteliği) | %20 |

**Claude için ne anlama geliyor?** Claude.ai, Team, Enterprise veya API aboneliği hazır bir hizmetin kullanımıdır; yazılımı çoğaltma, değiştirme, dağıtma hakkı satın almıyorsunuz. Bu yüzden birçok mali müşavir bunu ticari kazanç sayıp stopaj yapmıyor. Dayanak olarak Gelir İdaresi özelgeleri gösteriliyor, örneğin 28.02.2023 tarihli ve 62030549-125[30-2020/174]-258330 sayılı özelge (hazır yazılımda kesinti yok, telif/lisans devrinde %20).

**Neden kesin değil?**
- Claude veya Anthropic için yazılmış bir özelge bulamadık.
- Özelgeler bulut hizmetlerinde aynı sonuca varmıyor. İkincil kaynaklara göre İstanbul Vergi Dairesi Başkanlığı'nın 23.03.2023 tarihli bir özelgesi, yurt dışından alınan bulut depolama hizmetini gayrimaddi hak bedeli sayıp %20 stopajı (anlaşmalı ülkede en çok %10) uygun görmüştür.
- Kesmeniz gerekirken kesmezseniz, vergi sorumlu sıfatıyla sizden istenebilir. Bu yüzden yaklaşımı ödeme başlamadan önce mali müşavirinizle belirleyin ve gerekçesini yazılı tutun.

**ABD anlaşması (çifte vergilendirmeyi önleme):** Türkiye-ABD anlaşması 1998'den beri yürürlüktedir. Madde 12'ye göre gayrimaddi hak bedellerinde kaynak ülke (Türkiye) en çok **%10** vergi alabilir. **%5** oranı yalnızca sınai, ticari veya bilimsel **teçhizatın** kullanım bedeli içindir; yazılım aboneliği bu gruba genellikle girmez. İndirimli orandan yararlanmak için Anthropic'in ABD mukimi olduğunu gösteren **mukimlik belgesine** (ABD'de genellikle IRS'in verdiği belge) ve Türkçe tercümesine ödemeden önce sahip olmanız gerekir; belge yoksa iç hukuktaki %20 uygulanır. Anthropic'in bu belgeyi müşterilere verdiğini doğrulayamadık.

**Not:** Stopaj ve KDV iki ayrı konudur. Stopaj yapılsa da yapılmasa da KDV için 2 No'lu beyan ayrıca değerlendirilir. Bu bölüm genel bilgidir; kendi durumunuz için **mali müşavirinizle doğrulayın**.

## Anthropic Faturası (Invoice) Nasıl Görünür?

Anthropic her ödeme sonrası **e-posta ile invoice gönderir.** PDF formatında. İçeriği:

- Anthropic PBC, ABD adresi
- Müşteri bilgileri (kullanıcı tarafından girilmişse şirket adı, vergi numarası, VAT/Tax ID)
- Hizmet kalemi ve dönem
- Tutar (USD; KDV'li mi KDV'siz mi geldiğine bakın)
- Ödeme tarihi ve yöntemi

**Şirket bilgisini doğru girin.** Girdiğiniz şirket adı, adres ve vergi numarası invoice'a yansır ve muhasebenin işini kolaylaştırır. Nereye gireceğinizi aşağıdaki "Fatura İsteme" bölümü anlatır.

## Gider Olarak Muhasebeleştirme

Claude aboneliği şirketin operasyonel gideri olarak kayda alınır. Genel kabul gören uygulamalar:

- **Hesap kategorisi:** "Yazılım giderleri", "Bilgi teknolojisi giderleri" veya "Dijital hizmet giderleri"
- **Belgelendirme:** Anthropic invoice'ı + ödeme makbuzu (kredi kartı ekstresi veya transfer dekontu)
- **TL'ye çeviri:** Ödeme tarihindeki TCMB döviz kuru üzerinden TL karşılığı kayda alınır. Kartınızdan fiilen çekilen TL tutar bankanın kendi kuruyla belirlenir; hangisinin esas alınacağını mali müşavirinizle netleştirin

## Fatura İsteme: Anthropic Hesap Ayarları

Anthropic hesabınıza giriş yapın → **Settings → Billing**:

1. **Company name** → şirket ünvanınız
2. **Tax ID / VAT** → Türkiye Vergi Numaranız
3. **Billing address** → tam adres (il, ilçe, posta kodu, ülke)
4. **Billing email** → muhasebe e-postası

Bu bilgiler bir kez girildikten sonra her ay otomatik olarak doğru bilgilerle invoice gelir. Geçmiş invoice'ları da Settings → Billing → Invoice History'den indirebilirsiniz.

## Bireysel Kullanım: Şahıs İse?

Eğer Claude aboneliği bir **gerçek kişi (şahıs)** olarak alındıysa ve şirketle ilişkilendirilmiyorsa:

- Şahıs kredi kartından ödenir
- KDV ve stopaj sorumluluğu değişir: gelir vergisi mükellefi serbest meslek erbabı için farklı kurallar geçerlidir
- Şirkete sonradan masraf olarak yansıtılması istenirse invoice ve dekont eksiksiz saklanmalı; bu kaydın şirket giderine nasıl işleneceğini mali müşavirinizle netleştirin

Bireysel kullanıcıların çoğu Claude aboneliğini kendi adlarına alıyor. Sonradan şirketleştirmek için aşağıdaki Billing bilgilerini güncelleyin; geçmiş dönem faturalarının nasıl işleneceğini mali müşavirinize sorun.

## Plan Maliyeti: Bütçe Tahmini

[Planlar](/wiki/temeller/planlar/) sayfası fiyat detayını verir. Tipik kurumsal senaryolarda yıllık bütçe:

| Plan | Aylık (USD) | Yıllık (USD) |
|---|---|---|
| Pro × 1 kişi | $20 | $240 |
| Max 5x × 1 kişi | $100 | $1.200 |
| Pro × 6 kişi | $120 | $1.440 |
| Max 5x × 6 kişi (12 ay boyunca Max 5x'ta kalırsa) | $600 | $7.200 |
| Karma (1. ay Max 5x, sonra Pro) × 6 kişi | ~$27/kişi/ay ortalama | ~$1.920 |
| Team Standard × 5 koltuk | $125 (yıllık ödemede $100) | $1.500 (yıllık ödemede $1.200) |
| Enterprise (koltuk başı $20/ay + kullanım API fiyatıyla) | Sabit değil, kullanıma göre değişir | Sabit değil |

Tablodaki rakamlar vergi hariçtir. İki kalemi bütçede ayrıca düşünün: Pro, Max ve Team'de kota bitince açabileceğiniz **kullanım kredisi** (kullandıkça öde) ve Enterprise'ın kullanıma bağlı faturası. İkisi de önceden kesin tahmin edilemeyen değişken kalemdir; Team ve Enterprise'ta yönetici panelinden harcama tavanı koyabilirsiniz. Ayrıntı: [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/).

**Pratik öneri:** Claude'a yeni başlayanlar **ilk ay Max 5x ($100/ay)** ile başlamayı tercih ediyor. Pro plan ($20/ay) limitine yeni kullanıcı hızlı çarpar ve "çalışmıyor" hissi yaratır. İkinci aydan itibaren gerçek kullanıma göre Pro'ya inilebilir. Detay [Planlar](/wiki/temeller/planlar/).

## Mali Müşavirinizle Konuşacaklarınız

Aboneliği başlatmadan önce mali müşavirinize sormanız gereken sorular:

1. *"Yurt dışı dijital hizmet alımı için 2 No'lu KDV Beyannamesi prosedürünü kurumumuzda nasıl uyguluyoruz?"*
2. *"Claude aboneliği için stopaj yapıyor muyuz? Yapıyorsak oran ve mukimlik belgesi gerekir mi, yapmıyorsak gerekçemizi nasıl belgeliyoruz?"*
3. *"Bu kalem hangi hesap koduna gidecek?"*
4. *"USD ödemenin TL'ye çeviri kuralı (TCMB alış mı, satış mı, ödeme tarihinde mi)?"*
5. *"Yıl sonu beyan ve revizede özel bir not düşmemiz gereken bir şey var mı?"*

[Finans departmanı](/wiki/departmanlar/finans/) sayfası finans birimi açısından geniş resmi verir.

## Şirket Politikası Tavsiyesi

Claude aboneliği başlattıysanız, ödeme ve muhasebe akışını [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/) belgenizin bir parçası yapın:

- Hangi çalışana hangi plan veriliyor?
- Faturalar nereden alınır, kime iletilir?
- Aylık ödeme onayı kimde?
- Plan değişikliği (Max 5x'tan Pro'ya geçiş gibi) hangi prosedürle yapılır?

Bunlar küçük şeyler ama yıl sonunda denetimde sorun çıkartmamak için önemli.

## Yaygın İtiraz: "Yurt Dışına Para Çıkarmak Gibi mi?"

Hayır. Claude aboneliği **resmi bir hizmet alımıdır**, Anthropic invoice'ı ile belgelenir, KDV beyanı yapılır, gider olarak muhasebeleştirilir. Vergi açısından şüpheli bir akış değil.

Sadece kayıt disiplinini doğru tutmak gerekir. [Yaygın İtirazlar](/wiki/temeller/itirazlar/) sayfasında bu ve benzeri finans-muhasebe itirazlarına daha geniş cevaplar var.

## İlgili Sayfalar

- [Planlar](/wiki/temeller/planlar/): Hangi plan ne kadar
- [Takım ve Admin](/wiki/temeller/takim-ve-admin/): Team / Enterprise plan faturalandırma farkı
- [Yaygın İtirazlar](/wiki/temeller/itirazlar/): Finans direktörü itirazlarına detay
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Ödeme prosedürü
- [Finans Departmanı](/wiki/departmanlar/finans/): Finans birimi için Claude kullanımı
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Veri tarafı (vergi tarafı değil)

