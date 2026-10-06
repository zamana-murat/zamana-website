---
title: "Finansal hizmetler için Claude"
seoTitle: "Bankacılık, Sigorta ve Yatırımda Claude: Türkiye Rehberi"
description: "Banka, katılım bankası, sigorta ve aracı kurumlar Claude'u nerede kullanır? Excel eklentisi, veri connector'ları, BDDK ve KVKK açısından dikkat edilecekler."
eyebrow: "Sektör"
lead: "Claude, kredi analizinden sunum hazırlığına, aktüerya kontrolünden uyum taramasına kadar finans ekiplerinin metin ve tabloyla geçen işini hızlandırır. Karar ve sorumluluk kurumda kalır; veriyi hangi koşulda Claude'a vereceğinize ise uyum biriminiz karar verir."
heroImage: "/images/kurumsal/finansal-hizmetler/hero.webp"
heroAnimation: "finansal-hizmetler"
heroAlt: "Kurgusal Marmara Katılım Bankası'nda bir analist, tablo programında açık duran finansman talebi için Claude'dan tahsis memosu taslağı istiyor; Claude tabloya rasyo satırlarını ekliyor ve hücre kaynaklarını gösteren bir memo yazıyor, karar kredi komitesinde kalıyor."
availability: "Sektöre özel ayrı plan yok: Team veya Enterprise. Audit log, Compliance API ve özel veri saklama yalnız Enterprise'da. Excel, PowerPoint ve Word eklentileri tüm ücretli planlarda"
sourceUrl: "https://claude.com/solutions/financial-services"
sourceTitle: "Claude for Financial Services"
related:
  - { label: "Finans departmanı (wiki)", href: "/wiki/departmanlar/finans/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
  - { label: "Microsoft 365 için Claude", href: "/claude/microsoft-365/" }
  - { label: "Connectors", href: "/claude/connectors/" }
  - { label: "Hukuk ekipleri için Claude", href: "/kurumsal/hukuk/" }
  - { label: "Kurumsal program", href: "/programlar/kurumsal/" }
order: 100
lastUpdated: "2026-10-06"
---

## Finans ekibinde Claude ne yapar?

Finans işinin büyük kısmı, karar anından önceki hazırlıktır: mali tabloyu okumak, rasyo hesaplamak, sözleşme ve politika metnini taramak, aynı veriyi önce tabloya sonra sunuma sonra rapora taşımak. Claude bu hazırlığı hızlandırır. Anthropic'in sayfası bunu "sinyalden karara" diye özetliyor ve dört rolü öne çıkarıyor:

- **Yatırım bankacılığı:** Sunum dosyaları (pitch book), emsal şirket tabloları ve bilgi notu taslakları, doğrudan Excel ve PowerPoint içinde.
- **Kurumsal ve ticari bankacılık:** Kredi analizi ve tahsis memosu taslağı.
- **Portföy yönetimi:** Yatırım komitesi notları, performans sunumları, portföy gözden geçirmeleri.
- **Sigorta:** Aktüerya çalışma kitaplarının kontrolü ve düzenleyiciye gidecek raporlara hazırlık.

Kaynak sayfa bir de yeni bir ürün duyuruyor: **Claude for financial advisors** (finansal danışmanlar için Claude). Saklama kuruluşu, portföy, planlama ve CRM sistemlerini bağlayıp müşteri kabulü, toplantı hazırlığı, hesap açılışı, portföy gözden geçirme ve uyum kontrolü gibi hazır iş akışları sunuyor. Bağlandığı sistemler (Charles Schwab, Envestnet, Addepar, Wealthbox gibi) ABD'deki bağımsız yatırım danışmanlığı pazarına ait. Türkiye'deki aracı kurum ve portföy yönetim yazılımları için bu üründe hazır bir bağlantı göremedik; benzer akışı Türkiye'de kurmak için kendi sistemlerinize özel connector gerekir.

## Tablo ve sunum işi: Microsoft 365 eklentileri

Finans ekiplerinin günü Excel ve PowerPoint'te geçer. Claude bu programların içinde, yan panelde çalışır: formülleri okur, yeni satır ve hesap ekler, tablodan slayt üretir, Word'de memo yazar, Outlook'ta günlük özet hazırlar. Kaynak sayfa akışı şöyle anlatıyor: modeli Excel'de kurun, PowerPoint'te sunuma çevirin, memoyu Word'de yazın, sabah özetini Outlook'tan gönderin.

![Tablo programında kurgusal bir firmanın mali tablosu ve yan panelde Claude: analist "FAVÖK yüzde 15 düşerse borç oranı ne olur?" diye soruyor, Claude yeni bir senaryo sütunu ekleyip sonucu hücre kaynaklarıyla açıklıyor](/images/kurumsal/finansal-hizmetler/excel-senaryo.webp)

Bu eklentiler finans sektörüne özel değil, tüm ücretli planlarda var; Outlook eklentisi henüz beta. Ayrıntı: [Microsoft 365 için Claude](/claude/microsoft-365/).

## Veri sağlayıcılar ve connector'lar

Kaynak sayfa, Claude'un doğrudan bağlanabildiği finansal veri sağlayıcılarını sayıyor: LSEG, FactSet, S&P Global, Morningstar ve PitchBook. Moody's, Dun & Bradstreet, Verisk, Daloopa, Third Bridge gibi veri ve analiz ortakları da listede. Bunlar küresel sağlayıcılar; kurumunuzun zaten aboneliği varsa Claude'a bağlayıp verileri sohbet içinde kaynak göstererek kullanabilirsiniz. Abonelik ücreti sağlayıcıyla aranızdadır, Claude planına dahil değildir.

Türk piyasasına özgü kaynaklar (KAP bildirimleri, Borsa İstanbul verisi, kurum içi çekirdek bankacılık ve risk sistemleri) için resmi bir Claude connector'ı doğrulamadık. Bunlar için kurumun BT ekibi özel bir connector (MCP sunucusu) yazabilir; ayrıntı [Connectors](/claude/connectors/) sayfasında.

## Kaynak sayfadaki müşteri örnekleri

Anthropic'in sayfasında Citi, RBC Capital Markets, BNY, Carlyle, Mizuho, Travelers, Brex gibi kurumlar Claude kullanıcısı olarak geçiyor. Aktarılan bir rakam: Block, açık kaynak yapay zeka ajanıyla SQL sorgusu yazan mühendislerinin yüzde 75'inin her hafta 8 ila 10 saatten fazla zaman kazandığını söylüyor. Balyasny Asset Management, IMC ve Walleye Capital da Claude'un finans ve analiz değerlendirmelerindeki sonuçlarından söz ediyor. Bu örnekler ABD ve Avrupa kurumlarına ait, Türkiye'de aynı sonucun alınacağının garantisi değildir.

## Türk finans kurumunda nasıl görünür?

Aşağıdakiler kurgusal örneklerdir; her birinde Claude hazırlığı yapar, karar ve imza insanda kalır.

- **Katılım bankası, kurumsal finansman:** Analist, firmanın mali tablolarını anonim ya da kamuya açık hâliyle verir; Claude rasyoları hesaplar, önceki yılla kıyaslar, eksik bilgileri listeler ve tahsis memosu taslağı yazar. Komite kararı değişmez.
- **Sigorta şirketi, aktüerya:** Rezerv çalışma kitabındaki formül tutarsızlıklarını ve elle girilmiş sabitleri işaretler, değişiklik notunu yazar.
- **Aracı kurum, araştırma:** Halka açık şirketlerin finansal raporlarından emsal tablosu çıkarır, sunum taslağını PowerPoint'e aktarır.
- **Portföy yönetimi:** Aylık fon raporunun ilk taslağını ve yatırımcı sunumunu hazırlar; rakamlar kurumun kendi kaynağından gelir ve kontrol edilir.
- **Uyum birimi:** Yeni bir düzenleme metnini iç politikayla karşılaştırıp boşluk listesi çıkarır. Yorum ve karar hukuk ve uyum ekibinindir.
- **Yazılım ekibi:** Eski raporlama kodunu belgeler, test yazar. Kaynak sayfa bu iş için Claude Code'u ayrıca öneriyor: [Kurumlar için Claude Code](/kurumsal/claude-code/).

## Düzenleyici çerçeve: kim karar verir?

Türkiye'de finans kurumları genel kişisel veri kurallarının (KVKK) üstüne sektör düzenlemelerine de tabidir. Bankalar için BDDK'nın bilgi sistemleri ve destek hizmeti (dış hizmet alımı) düzenlemeleri, bulut hizmeti kullanımı ve bazı sistem ile verilerin yurt içinde tutulması konusunda ek yükümlülükler getirir. Bankacılık Kanunu'ndaki sır saklama yükümlülüğü müşteri bilgisinin üçüncü taraflarla paylaşılmasını sınırlar. Sermaye piyasası kurumları SPK'nın, sigorta şirketleri SEDDK'nın, ödeme ve elektronik para kuruluşları TCMB'nin düzenlemelerine bakar. Suç gelirlerinin aklanmasıyla ilgili MASAK yükümlülüklerinde karar yine yükümlü kurumdadır.

Claude bu düzenlemelerin hiçbirine özel olarak onaylanmış ya da sertifikalanmış bir hizmet değildir; Anthropic'in Türkiye'ye özgü bir izni veya onayı yok. Kaynak sayfa SOC 2 ve FedRAMP gibi ABD merkezli güvence belgelerinden söz eder; bunlar BDDK değerlendirmesinin yerine geçmez. Pratikte kurumların izlediği yol şudur:

1. **Veri sınıflandırması:** Hangi bilgi Claude'a hiç girmeyecek (müşteri sırrı, kimlik ve hesap bilgisi), hangisi anonimleştirilerek girebilir, hangisi zaten kamuya açık?
2. **Sözleşme ve DPA:** Team ve Enterprise planlarında girdi ve çıktılar varsayılan olarak model eğitiminde kullanılmaz, Anthropic'in veri işleme sözleşmesi (DPA) ticari şartlara dahildir. Kişisel veri girilecekse KVKK m.9 yurt dışı aktarım dayanağı ayrıca kurulmalıdır: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).
3. **Denetim izi:** Enterprise planında audit log ve Compliance API ile kimin ne sorduğu kurum tarafından izlenebilir. Team planında Compliance API yok.
4. **Onay:** Bu değerlendirmenin sonucunu kurumunuzun uyum, hukuk ve bilgi güvenliği birimleri verir. Bu sayfa bir hukuki görüş değildir.

## Nasıl başlarsınız?

1. Düşük riskli, kişisel veri içermeyen bir iş seçin: kamuya açık şirket analizi, sunum şablonu, iç politika taslağı.
2. Uyum biriminizle hangi verinin girilebileceğini yazılı hâle getirin.
3. Küçük bir ekiple Team ya da Enterprise üzerinde deneyin; ödeme ABD doları ile yapılır, Enterprise'da koltuk ücretinin üstüne kullanım API fiyatıyla faturalanır ([Planlar](/wiki/temeller/planlar/)).
4. Ekibinizin tablo ve memo işini Claude ile nasıl kuracağını öğrenmesi için Zamana'nın [kurumsal programına](/programlar/kurumsal/) bakabilirsiniz.
