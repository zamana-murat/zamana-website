---
title: "Fatura, KDV ve Türkiye'de Muhasebeleştirme"
description: "Claude aboneliğinin Türkiye'de KDV, stopaj ve muhasebe yansıması. Yurt dışı dijital hizmet vergisi, fatura formatı, gider gösterimi."
tags:
  - temeller
  - fatura
  - kdv
  - muhasebe
---

**Claude aboneliği yurt dışından alınan dijital bir hizmettir.** Türkiye'de muhasebeleştirilmesi, KDV uygulanması ve gider olarak gösterilmesinde net bir prosedür var — ama doğru bilmek finans direktörünün ilk sorusudur.

Bu sayfa Claude aboneliğinin Türkiye'deki vergi-muhasebe yansımasını anlatır. **Önemli not:** Bu sayfa genel rehberlik amaçlıdır; nihai uygulamayı **mali müşaviriniz** ile birlikte netleştirin. Vergi mevzuatı değişebilir.

## Temel Bilgi — Anthropic Türkiye'de Vergi Mükellefi mi?

Hayır. **Anthropic'in Türkiye'de tüzel kişiliği veya vergi mükellefiyeti yoktur.** Hizmet ABD merkezli bir şirketten satın alınır. Bu, Türk firmasının ödeme yaptıktan sonra **yurt dışı kaynaklı dijital hizmet alımı** olarak işlem yapmasını gerektirir.

İki temel uygulama:

1. **KDV — 2 No'lu Beyanname (Sorumlu Sıfatıyla KDV)**
2. **Stopaj — Şartlara bağlı; çoğu durumda yazılım hizmeti için stopaj uygulanır**

## KDV — Sorumlu Sıfatıyla Beyan

Türk firma yurt dışından dijital hizmet aldığında, KDV'yi **kendi hesabına alıp kendi öder.** Buna **2 No'lu KDV Beyannamesi (Sorumlu Sıfatıyla KDV)** denir.

**Pratik akış:**

1. Anthropic'e ödeme yaparsınız (kredi kartı veya banka transferi)
2. Anthropic size bir **invoice** (fatura) gönderir — bu KDV'siz, ABD formatındadır
3. Türk firma bu tutar üzerinden **%20 KDV hesaplar** ve 2 No'lu Beyanname ile beyan eder
4. Aynı KDV, eğer firma KDV mükellefiyse, **1 No'lu Beyannamede indirim** olarak gösterilebilir → net KDV yükü genelde sıfır

**Sonuç:** Çoğu KDV mükellefi firma için **net KDV yükü yoktur** — sorumlu sıfatıyla ödediği KDV'yi indirim olarak alır. Ama beyan zorunluluğu var, atlamayın.

## Stopaj (Tevkifat)

Yurt dışına yazılım hizmeti karşılığı yapılan ödemelerde **kurumlar vergisi stopajı** uygulanması gerekebilir. Oran ve uygulama, ödemenin niteliğine göre değişir:

- Genel yazılım/hizmet alımı için tipik oran: **%5–%20** arası (mevzuat ve çifte vergilendirme anlaşmasına göre)
- ABD ile Türkiye arasında **çifte vergilendirme önleme anlaşması** vardır; bazı kalemler için stopaj oranı düşürülmüş olabilir

**Pratik tavsiye:** Stopaj uygulaması firma yapınız ve hizmetin niteliği (lisans mı, hizmet mi, abonelik mi) açısından **mali müşavire danışılmalı.** Bazı firmalarda Claude aboneliği "yazılım kullanım hizmeti" olarak değerlendirilip stopaj uygulanır; bazılarında uygulanmayabilir.

## Anthropic Faturası (Invoice) Nasıl Görünür?

Anthropic her ödeme sonrası **e-posta ile invoice gönderir.** PDF formatında. İçeriği:

- Anthropic PBC, ABD adresi
- Müşteri bilgileri (kullanıcı tarafından girilmişse şirket adı, vergi numarası — VAT/Tax ID)
- Hizmet kalemi ve dönem
- Tutar (USD, KDV'siz)
- Ödeme tarihi ve yöntemi

**Şirket bilgisini doğru girin.** Anthropic hesap ayarlarında "Billing" bölümünden:

- Şirket adı
- Tam adres
- Türkiye Vergi Numaranızı (Tax ID)
- Fatura e-postası

Bu bilgiler invoice'a yansır ve muhasebenin işini kolaylaştırır.

## Gider Olarak Muhasebeleştirme

Claude aboneliği şirketin operasyonel gideri olarak kayda alınır. Genel kabul gören uygulamalar:

- **Hesap kategorisi:** "Yazılım giderleri", "Bilgi teknolojisi giderleri" veya "Dijital hizmet giderleri"
- **Belgelendirme:** Anthropic invoice'ı + ödeme makbuzu (kredi kartı ekstresi veya transfer dekontu)
- **TL'ye çeviri:** Ödeme tarihindeki TCMB döviz kuru üzerinden TL karşılığı kayda alınır

## Fatura İsteme — Anthropic Hesap Ayarları

Anthropic hesabınıza giriş yapın → **Settings → Billing**:

1. **Company name** → şirket ünvanınız
2. **Tax ID / VAT** → Türkiye Vergi Numaranız
3. **Billing address** → tam adres (il, ilçe, posta kodu, ülke)
4. **Billing email** → muhasebe e-postası

Bu bilgiler bir kez girildikten sonra her ay otomatik olarak doğru bilgilerle invoice gelir. Geçmiş invoice'ları da Settings → Billing → Invoice History'den indirebilirsiniz.

## Bireysel Kullanım — Şahıs İse?

Eğer Claude aboneliği bir **gerçek kişi (şahıs)** olarak alındıysa ve şirketle ilişkilendirilmiyorsa:

- Şahıs kredi kartından ödenir
- KDV ve stopaj sorumluluğu değişir — gelir vergisi mükellefi serbest meslek erbabı için farklı kurallar geçerlidir
- Şirkete sonradan masraf olarak yansıtılması istenirse bu **çalışan adına gider değil, ödenen fatura** olarak fatura/dekont yedekli olarak işlenmeli

[Bireysel program](https://zamana.com.tr) katılımcılarının çoğu Claude aboneliğini kendi adlarına alıyor. Sonradan şirketleştirmek için yukarıdaki Billing bilgilerini güncellemek yeterli.

## Plan Maliyeti — Bütçe Tahmini

[Planlar](planlar/) sayfası fiyat detayını verir. Tipik kurumsal senaryolarda yıllık bütçe:

| Plan | Aylık (USD) | Yıllık (USD) |
|---|---|---|
| Pro × 1 kişi | $20 | $240 |
| Max 5x × 1 kişi | $100 | $1.200 |
| Pro × 6 kişi | $120 | $1.440 |
| Max 5x × 6 kişi (zorunlu ilk ay) | $600 | $7.200 (1. ay × 12) |
| Karma (1. ay Max, sonra Pro) × 6 kişi | ~$28/kişi/ay ortalama | ~$2.000 |
| Team × 5 kullanıcı | ~$150 | ~$1.800 |

**Plan politikası:** Yeni Zamana katılımcısı **ilk ay Max 5x ($100/ay) zorunlu**. İkinci aydan itibaren gerçek kullanıma göre Pro'ya inilebilir. Detay [Planlar](planlar/).

## Mali Müşavirinizle Konuşacaklarınız

Aboneliği başlatmadan önce mali müşavirinize sormanız gereken sorular:

1. *"Yurt dışı dijital hizmet alımı için 2 No'lu KDV Beyannamesi prosedürünü kurumumuzda nasıl uyguluyoruz?"*
2. *"Yazılım abonelik gideri stopaja tabi midir? Bizim durumumuzda oran ne?"*
3. *"Bu kalem hangi hesap koduna gidecek?"*
4. *"USD ödemenin TL'ye çeviri kuralı (TCMB alış mı, satış mı, ödeme tarihinde mi)?"*
5. *"Yıl sonu beyan ve revizede özel bir not düşmemiz gereken bir şey var mı?"*

[Finans departmanı](../departmanlar/finans/) sayfası finans birimi açısından geniş resmi verir.

## Şirket Politikası Tavsiyesi

Claude aboneliği başlattıysanız, ödeme ve muhasebe akışını [Şirket İçi Politika](sirket-ici-politika/) belgenizin bir parçası yapın:

- Hangi çalışana hangi plan veriliyor?
- Faturalar nereden alınır, kime iletilir?
- Aylık ödeme onayı kimde?
- Plan değişikliği (Max 5x'tan Pro'ya geçiş gibi) hangi prosedürle yapılır?

Bunlar küçük şeyler ama yıl sonunda denetimde sorun çıkartmamak için önemli.

## Yaygın İtiraz: "Yurt Dışına Para Çıkarmak Gibi mi?"

Hayır. Claude aboneliği **resmi bir hizmet alımıdır** — Anthropic invoice'ı ile belgelenir, KDV beyanı yapılır, gider olarak muhasebeleştirilir. Vergi açısından şüpheli bir akış değil.

Sadece kayıt disiplinini doğru tutmak gerekir. [Yaygın İtirazlar](itirazlar/) sayfasında bu ve benzeri finans-muhasebe itirazlarına daha geniş cevaplar var.

## İlgili Sayfalar

- [Planlar](planlar/) — Hangi plan ne kadar
- [Takım ve Admin](takim-ve-admin/) — Team / Enterprise plan faturalandırma farkı
- [Yaygın İtirazlar](itirazlar/) — Finans direktörü itirazlarına detay
- [Şirket İçi Politika](sirket-ici-politika/) — Ödeme prosedürü
- [Finans Departmanı](../departmanlar/finans/) — Finans birimi için Claude kullanımı
- [Gizlilik ve KVKK](gizlilik-kvkk/) — Veri tarafı (vergi tarafı değil)

