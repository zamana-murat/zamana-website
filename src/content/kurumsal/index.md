---
title: "Claude Enterprise: kurumun tamamında Claude"
seoTitle: "Claude Enterprise Nedir? Kurumlar İçin Türkçe Rehber"
description: "Claude Enterprise nedir? Sohbet, Cowork ve Claude Code tek koltukta; SSO, rol yönetimi, denetim kaydı, fiyat modeli ve Türkiye'den satın alma yolu."
eyebrow: "Kurumsal"
lead: "Claude Enterprise, Claude'u şirketin tüm çalışanlarına BT'nin kontrolünde açmak için tasarlanmış plan. Sohbet, Cowork, Claude Code ve bağlayıcılar tek koltukta; kimlik, erişim, kayıt ve veri kontrolleri yöneticide."
heroImage: "/images/kurumsal/index/hero.webp"
heroAnimation: "index"
heroAlt: "Kurgusal Anadolu Lojistik şirketinde finans, satış, yazılım ve insan kaynakları ekipleri Claude'a aynı anda iş veriyor; her iş tamamlanıp yönetici panelindeki denetim kaydına düşüyor."
availability: "Enterprise planı: koltuk başı aylık 20 dolar, yıllık faturalı, en az 20 koltuk; kullanım ayrıca API fiyatıyla faturalanır. Daha küçük ekipler için Team planı var"
sourceUrl: "https://claude.com/solutions/enterprise"
sourceTitle: "Claude Enterprise Plan | Claude by Anthropic"
related:
  - { label: "Kurumlar için Claude Code", href: "/kurumsal/claude-code/" }
  - { label: "Claude Platform", href: "/kurumsal/platform/" }
  - { label: "Planlar ve fiyatlar (wiki)", href: "/wiki/temeller/planlar/" }
  - { label: "Takım ve admin (wiki)", href: "/wiki/temeller/takim-ve-admin/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
  - { label: "Fatura, KDV ve stopaj (wiki)", href: "/wiki/temeller/fatura-ve-kdv/" }
order: 0
lastUpdated: "2026-10-06"
---

## Claude Enterprise nedir?

Bir şirkette Claude genelde birkaç meraklı çalışanın kişisel Pro hesabıyla başlar. Bir noktada BT ve hukuk birimi aynı soruları sorar: Kim neyi kullanıyor, şirket verisi nereye gidiyor, biri işten ayrılınca hesabı ne oluyor, hangi sisteme bağlandı? Claude Enterprise bu soruların cevabı olarak kurgulanmış plan. Anthropic'in sayfası bunu "her masada en ileri yapay zeka" diye özetliyor: herkes aynı Claude'u kullanır, ama kimlik, erişim, kayıt ve veri kuralları merkezden yönetilir.

Pratikte üç şey değişir. Çalışanlar şirket e-postası ve tek oturum açma (SSO) ile girer. Yönetici kimin hangi özelliği, hangi modeli ve hangi bağlayıcıyı kullanacağını rol bazında belirler. Yapılan her şey kayda geçer ve gerekirse denetim ya da uyum birimine aktarılır.

## İki yol: Enterprise planı ve Claude Platform

Anthropic kurumlara iki ayrı kapı açıyor. İkisi farklı ihtiyaçlara cevap verir ve çoğu zaman farklı birimler satın alır.

![Claude'u kuruma almanın iki yolu: çalışanlar için Claude Enterprise planı (sohbet, Cowork, Claude Code, bağlayıcılar, yönetim kontrolleri) ve yazılım ekipleri için Claude Platform (API, yönetilen ajanlar, Console, bulut sağlayıcılar)](/images/kurumsal/index/iki-yol.webp)

- **Claude Enterprise planı:** Çalışanların her gün kullandığı Claude. Sohbet, Cowork, Claude Code ve bağlayıcılar, BT kontrolleri ve görünürlükle birlikte. Bu sayfanın konusu bu.
- **Claude Platform:** Kendi ürününüze, müşteri hizmetinize ya da iç sistemlerinize Claude'u API ile gömmek için. Bu bir yazılım projesidir, ayrıntısı [Claude Platform](/kurumsal/platform/) sayfasında.

## Bir koltukta neler var?

Anthropic'in sayfasına göre Enterprise'da tek koltuk şunları kapsar:

- **Sohbet:** Araştırma, yazım, analiz ve fikir geliştirme için günlük çalışma ortağı.
- **Cowork:** Dosyalarınıza ve araçlarınıza bağlanıp çok adımlı işi arka planda yürüten ve bitmiş bir çıktı teslim eden Claude. Enterprise'da yöneticinin açması gerekebilir.
- **Claude Code:** Yazılım ekipleri için kodlama ajanı. Kurumsal tarafı [Kurumlar için Claude Code](/kurumsal/claude-code/) sayfasında.
- **Claude Design, Slides ve Docs:** Beta. Enterprise'da kuruluş sahibi açana kadar kapalıdır.
- **Microsoft 365 ve Chrome:** Excel, Word ve PowerPoint eklentileri, Outlook eklentisi (beta) ve Chrome uzantısı.
- **Bağlayıcılar ve skill'ler:** Google Drive, Gmail, Slack, Microsoft 365 gibi araçlara bağlanma, şirkete özel bağlayıcı ve skill tanımlama. Slack'te Claude'u etiketlemek (@Claude) de Team ve Enterprise'a özel.

İki not: Hafıza özelliği Team ve Enterprise'da varsayılan olarak kapalı gelir, açıp açmamak yöneticinin kararıdır. Claude'un bilgisayarı doğrudan kullanması (computer use) şu an yalnız Pro ve Max'te var, Enterprise'da yok.

## Yönetim ve güvenlik kontrolleri

Enterprise'ı Team'den ayıran asıl şey bu katman. BT ve bilgi güvenliği biriminin onay sürecinde soracağı soruların çoğu burada cevaplanır.

![Claude Enterprise yönetici panelinin Türkçe çizimi: kimlik ve erişim, kayıt ve görünürlük, veri kontrolleri ve ağ kontrolleri başlıkları altında SSO, SCIM, rol bazlı erişim, denetim kaydı, Compliance API, özel veri saklama ve IP izin listesi](/images/kurumsal/index/kontroller.webp)

- **Kimlik ve erişim:** SSO (SAML) ve alan adı sahiplenme, SCIM ile otomatik kullanıcı açma ve kapatma (SSO ve SCIM Team'de de var), rol bazlı erişim (RBAC), özel roller ve model yetkilendirme.
- **Kayıt ve görünürlük:** Denetim kaydı (audit log), OpenTelemetry ile izleme, kullanım analitiği ve raporlar. Compliance API ile sohbet, dosya, Cowork ve Claude Code oturum içeriği programatik olarak çekilebilir. Compliance API yalnız Enterprise'da var, Team'de yok.
- **Veri kontrolleri:** Özel veri saklama süresi, müşteri yönetimli şifreleme anahtarı, yalnız ABD'de işleme (US-only inference) seçeneği.
- **Ağ ve bağlayıcı yönetimi:** IP izin listesi, hangi bağlayıcının kimde açık olacağına dair merkezi yönetim.
- **Uyum:** Anthropic'in sayfası SOC 2, ISO 27001, GDPR ve CCPA uyumunu listeliyor. Sağlık verisi işleyen kurumlar için HIPAA yapılandırması (BAA ile) Enterprise'da var. Bunlar ABD ve AB çerçeveleridir, Türkiye'ye özgü bir sertifika ya da onay anlamına gelmez.

## Kaynak sayfadaki örnekler

Anthropic'in sayfasında paylaşılan sonuçlardan birkaçı (rakamlar Anthropic'e ve ilgili şirketlere aittir): Spotify karmaşık kod geçişlerinde harcanan sürenin yüzde 90 azaldığını, Moody's bir kredi notu hazırlığının 40 saatten 2 dakikaya indiğini, Slack kullanıcı başına haftada 97 dakika kazanıldığını söylüyor. Avrupa'dan adı verilmeyen bir yaşam bilimleri şirketi, klinik çalışma belgelerinin hazırlanmasının 10 haftadan 10 dakikaya indiğini aktarıyor. Bu sonuçlar büyük ölçüde bu şirketlerin kendi iş akışlarını yeniden kurmasından geliyor, lisans almakla kendiliğinden ortaya çıkmıyor.

## Fiyat modeli

- **Koltuk ücreti:** Koltuk başı aylık 20 dolar, yıllık faturalı ve yıllık taahhütlü. Self-serve alımda en az 20 koltuk.
- **Kullanım ayrıca:** Koltuk ücreti kullanımı içermez. Sohbet, Claude Code ve Cowork'te harcanan her token standart API fiyatıyla ayrıca faturalanır. Model fiyatları için [Claude modelleri](/claude/modeller/) sayfasına bakın.
- **Bütçe:** Bu modelde aylık tutar sabit değildir, ekibin ne kadar ve hangi modelle çalıştığına göre değişir. Harcama tavanı ve kullanım raporları yönetici panelinde bulunur. Enterprise'a geçmeden önce birkaç ay Team'de ölçülmüş kullanım verisi, bütçe tahminini çok kolaylaştırır.
- **Ödeme:** Anthropic'in sayfasına göre self-serve alımda kredi kartı, satış ekibiyle yapılan sözleşmelerde fatura ile ödeme mümkün. Enterprise ayrıca AWS Marketplace üzerinden de alınabiliyor.
- **Daha küçük ekipler için:** Team planı 2 ile 150 koltuk arasıdır ve kullanım koltuk ücretine dahildir. Hangisinin size uyduğunu [Planlar ve fiyatlar](/wiki/temeller/planlar/) sayfasındaki karar akışıyla görebilirsiniz.

## Türkiye'den nasıl satın alınır?

Claude Enterprise doğrudan Anthropic'ten alınır: self-serve olarak claude.com üzerinden ya da Anthropic satış ekibiyle görüşerek ([claude.com/contact-sales](https://claude.com/contact-sales)). Türk kurumları için bilinmesi gerekenler:

- **Para birimi:** Fiyatlar ABD doları. Türkiye'ye özel TL fiyat listesi ya da TL ile ödeme yolu bulunamadı.
- **Muhatap:** Anthropic'in Türkiye'de ofisi veya resmi temsilcisi yok. "Türkiye temsilcisiyiz" diyen biriyle karşılaşırsanız Anthropic'in yazılı yetkilendirmesini isteyin; ödemenin kime gittiğine bakın.
- **Vergi:** Yurt dışından alınan hizmette sorumlu sıfatıyla KDV beyanı ve stopaj sorusu gündeme gelir. Claude'a özel bir özelge bulunmadığı için mali müşavirinizle netleştirin: [Fatura, KDV ve stopaj](/wiki/temeller/fatura-ve-kdv/).
- **Kamu kurumları:** Yurt dışından doğrudan alım ve kamu verisinin yurt dışı bulutta işlenmesi ayrı kısıtlara tabidir (ör. 2019/12 sayılı Bilgi ve İletişim Güvenliği Tedbirleri Genelgesi). Bu kurumlar karar öncesi kendi bilgi güvenliği ve hukuk birimleriyle değerlendirme yapmalıdır.

## KVKK ve veri

- **Eğitimde kullanım:** Enterprise'da girdi ve çıktılarınız varsayılan olarak model eğitiminde kullanılmaz.
- **DPA:** Anthropic'in veri işleme sözleşmesi (standart sözleşme maddeleri dahil) ticari şartlara otomatik olarak dahildir, ayrıca imza gerekmez.
- **Veri nerede işleniyor:** Veriler Türkiye dışında işlenir. Bu nedenle 6698 sayılı KVKK'nın yurt dışına aktarım hükümleri, aydınlatma metinleri ve özellikle özel nitelikli kişisel veriler (sağlık, biyometrik vb.) için ayrı bir değerlendirme gerekir.
- **Sıfır veri saklama (ZDR):** Enterprise planına otomatik dahil değildir; API tarafında kuruluş başına talep edilen bir düzenlemedir.

DPA ve "eğitimde kullanılmama" güvencesi KVKK dosyanız için sağlam bir temel, ama uyumun yerine geçmez. Son kararı hukuk biriminizle verin. Ayrıntı: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

## Türkçe

Claude Türkçeyi resmi yazışmada da teknik terminolojide de iyi kullanır, ama her dilde olduğu gibi kurumsal metinde gözden geçirme ister. Kurumsal metinlerde dikkat edilecek noktalar için [Türkçe performansı](/wiki/temeller/turkce-performansi/) sayfasına bakabilirsiniz.

## Zamana'nın notu

Enterprise lisansı bir satın alma kararıdır, verim ise kullanımdan gelir. Sık görülen tablo şu: kurum lisansı alır, SSO'yu kurar, ama çalışanların çoğu Claude'u bir arama motoru gibi kullanmaya devam eder. Bizim önerimiz önce iki ya da üç departmanla, ölçülebilir işlerle küçük başlamak, kullanım verisi ve iç politika (hangi veri girilir, hangisi girilmez) netleştikten sonra yaygınlaştırmak. Ekiplerin bu süreçte işe dönük kullanım alışkanlığı kazanması için [Kurumsal Program](/programlar/kurumsal/) tam bu aşamaya göre tasarlandı.
