---
title: "Sağlık kuruluşları için Claude"
seoTitle: "Hastaneler ve Sağlık Kuruluşlarında Claude: KVKK ve Kullanım"
description: "Hastane ve sağlık grupları Claude'u idari işte nasıl kullanır? Sağlık verisi ve KVKK, HIPAA'nın Türkiye'deki yeri, sağlık connector'ları ve sınırları."
eyebrow: "Sektör"
lead: "Claude, sağlık kuruluşlarında idari yükü azaltmak için kullanılır: hasta mesajlarını ayırmak, belge ve politika metni taramak, rapor taslağı yazmak. Klinik karar aracı değildir. Türkiye'de sağlık verisi özel nitelikli kişisel veridir; hasta bilgisini Claude'a girmeden önce hukuk ve bilgi güvenliği biriminizin onayı gerekir."
heroImage: "/images/kurumsal/saglik/hero.webp"
heroAnimation: "saglik"
heroAlt: "Kurgusal Ege Şifa Hastanesi'nin kimlik bilgisi çıkarılmış hasta mesaj kutusu: Claude mesajları sekreterya, sonuç sorusu, ilaç ve reçete diye ayırıyor, göğüs baskısından söz eden mesajı en üste alıp nöbetçi hekime iletiyor ve triyaj özetini gösteriyor."
availability: "Sektöre özel plan yok: Enterprise ve Claude Platform (API). Claude planları arasında HIPAA kapsamı (BAA) yalnız Enterprise'da; API için ayrı bir HIPAA-ready düzenlemesi var. Her ikisi de ABD düzenlemesidir ve KVKK uyumu yerine geçmez"
sourceUrl: "https://claude.com/solutions/healthcare"
sourceTitle: "Claude for Healthcare"
related:
  - { label: "Sağlık sektörü (wiki)", href: "/wiki/departmanlar/saglik/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
  - { label: "Claude'un sınırlamaları (wiki)", href: "/wiki/temeller/sinirlamalar/" }
  - { label: "Claude Science", href: "/claude/science/" }
  - { label: "Yaşam bilimleri için Claude", href: "/kurumsal/yasam-bilimleri/" }
  - { label: "Kurumsal program", href: "/programlar/kurumsal/" }
order: 120
lastUpdated: "2026-10-06"
---

## Kaynak sayfa ne anlatıyor?

Anthropic'in sağlık sayfasının ana fikri şu: sağlıkta zamanın büyük kısmı hastayla değil, evrakla geçiyor. Claude bu idari yükü azaltmak için konumlandırılıyor. Sayfadaki dört örnek iş akışı:

- **Ön onay (prior authorization) incelemesi:** Bir işlem için sigorta ön onay dosyasını kapsam politikası, hekim kaydı ve kodlarla karşılaştırıp eksikleri göstermek.
- **Reddedilen sigorta taleplerine itiraz:** İtiraz dosyasını hazırlamak.
- **Hasta mesajı triyajı:** Günde yüzlerce hasta mesajını konuya ve aciliyete göre ayırıp doğru kişiye yönlendirmek.
- **Ortam dinleme ile klinik not (ambient scribing):** Muayene konuşmasından not taslağı çıkaran ürünler. Bu, sağlık girişimlerinin Claude Platform (API) üzerine kurduğu bir uygulama türü, Claude'un kendi özelliği değil.

İlk iki örnek ABD sağlık sigortası sistemine özgüdür (Medicare, ABD kodlama standartları). Türkiye'de SGK provizyonu ve özel sağlık sigortası onay süreçleri farklı işler; mantık benzer olsa da kaynak sayfadaki akışlar birebir uygulanmaz.

Sayfa ayrı bir "sağlık ürünü" satmıyor. Kaynakta açıkça yazdığı gibi sağlık kuruluşları Claude'a **Claude Enterprise** ve **Claude Platform** (API) üzerinden erişiyor.

## Kaynak sayfadaki müşteri örnekleri

Anthropic'in sayfasına göre Carta Healthcare, klinik veri işleme süresini yüzde 66 kısaltırken yüzde 99 doğruluk elde etmiş; Elation Health, birinci basamak hekimlerinin dosya inceleme süresini yüzde 61 azaltmış. Banner Health, Commure, Flatiron Health, Heidi Health gibi kuruluşlar da kullanıcı olarak geçiyor. Bu örnekler ABD ve Avustralya'daki kuruluşlara ait; Türkiye'de aynı sonucun alınacağının garantisi değildir ve çoğu, Claude'u API üzerinden kendi ürünlerine yerleştirmiş şirketlerdir.

## Sağlık connector'ları: çoğu ABD kaynaklı

Kaynak sayfa, Claude'un sağlık veri kaynaklarına bağlandığını anlatıyor. Bunları Türkiye açısından ayırmak gerekiyor:

| Connector | Ne işe yarar | Türkiye'de durumu |
|---|---|---|
| CMS Coverage Database | ABD Medicare kapsam politikaları | ABD'ye özgü, Türkiye'de karşılığı yok |
| NPI Registry | ABD hekim ve sağlayıcı sicili | ABD'ye özgü |
| ICD-10 | Tanı kodları | ICD-10 Türkiye'de de kullanılır; connector'ın ABD sürümüne dayanıp dayanmadığını kontrol edin |
| PubMed | Tıbbi literatür taraması | Ülkeden bağımsız, kullanılabilir |
| HealthKit, Health Connect, Function Health, HealthEx | Kişinin kendi sağlık verisini bağlaması | Bireysel kullanıcı içindir, kurumsal kullanımın konusu değil; Türkiye'de kullanılabilirliği ayrıca kontrol edilmeli |

e-Nabız, MEDULA, hastane bilgi yönetim sistemleri (HBYS) gibi Türkiye'ye özgü sistemler için resmi bir Claude connector'ı yok. Bunlara bağlanmak kurumun kendi BT ekibinin işidir ve hasta verisini dışarı çıkaracağı için önce hukuki değerlendirme gerekir.

Araştırma tarafında Anthropic'in ayrı bir ürünü var: veri analizi ve bilimsel çalışma için [Claude Science](/claude/science/) (beta). İlaç ve klinik araştırma kuruluşları için: [Yaşam bilimleri](/kurumsal/yasam-bilimleri/).

## HIPAA ve KVKK: aynı şey değil

Kaynak sayfa Claude'un "HIPAA'ya hazır altyapı" üzerinde çalıştığını söylüyor. Enterprise planında HIPAA yapılandırması (Anthropic ile iş ortağı sözleşmesi, BAA) 14 Temmuz 2026'dan beri yöneticinin kendisinin açabileceği bir seçenek.

HIPAA, ABD'nin sağlık verisi düzenlemesidir. Türkiye'de doğrudan karşılığı yoktur ve BAA imzalamak KVKK uyumu anlamına gelmez. Türk sağlık kuruluşu için çerçeve şöyle:

- **KVKK m.6:** Sağlık verisi özel nitelikli kişisel veridir. İşlenmesi için Kanun'da sayılan şartlardan birinin bulunması gerekir.
- **KVKK m.9:** Claude'a hasta verisi girmek yurt dışına aktarımdır; ayrıca aktarım güvencesi kurulmalıdır. Ayrıntı: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).
- **Sağlık mevzuatı ve meslek kuralları:** Sağlık Bakanlığı'nın kişisel sağlık verilerine ilişkin düzenlemeleri ve hekimin sır saklama yükümlülüğü ek sınırlar getirir.
- **Veri işleme sözleşmesi:** Enterprise ve API ticari şartlarında girdi ve çıktılar varsayılan olarak model eğitiminde kullanılmaz, DPA ticari şartlara dahildir. Bu da tek başına yeterli güvence değildir.

Anthropic'in Türkiye'ye özgü bir sağlık sertifikası ya da onayı yok. Hangi verinin hangi koşulda kullanılabileceğine kurumunuzun hukuk birimi, KVKK irtibat kişisi ve bilgi güvenliği ekibi karar verir. Bu sayfa hukuki görüş değildir.

## Hasta verisini girmeden çalışmak

Sağlıkta güvenli başlangıç, Claude'a hiç hasta kimliği vermemektir. Çoğu idari iş buna izin verir: protokol numarasıyla çalışmak, adları ve kimlik bilgilerini çıkarmak, nadir hastalık gibi kişiyi dolaylı olarak tanınır kılan ayrıntıları genelleştirmek.

![Anonimleştirme örneği: solda ad, T.C. kimlik numarası, telefon ve doğum tarihi içeren kurgusal bir hasta notu, sağda aynı notun kimlik bilgileri çıkarılmış, yaş aralığı ve protokol numarası kullanılan hâli; yalnız sağdaki sürüm Claude'a gider](/images/kurumsal/saglik/anonimlestirme.webp)

Anonimleştirmeyi Claude'a yaptırmayın: veri ancak anonimleştirildikten sonra Claude'a gitmelidir. Bunu kurum içindeki sistemde ya da çalışanın kendisi yapar.

## Türk sağlık kuruluşunda nasıl görünür?

Aşağıdakiler kurgusal örneklerdir. Hiçbirinde Claude tanı koymaz, tedavi önermez; tıbbi karar hekimdedir.

- **Hasta iletişim merkezi:** Kimlik bilgisi çıkarılmış mesajları randevu, sonuç sorusu, ilaç ve reçete diye ayırmak, uyarı işareti taşıyan mesajı hemen sağlık personeline yönlendirmek, sekreterya için yanıt taslağı hazırlamak.
- **Kalite ve akreditasyon:** Hastanenin prosedür ve talimat belgelerini Sağlıkta Kalite Standartları ya da uluslararası akreditasyon ölçütleriyle karşılaştırıp eksik listesi çıkarmak.
- **Hasta bilgilendirme metinleri:** Ameliyat öncesi bilgilendirme ve taburcu sonrası bakım metinlerini sade Türkçeye çevirmek. Tıbbi doğruluğu hekim onaylar.
- **Faturalama ve sigorta birimi:** Özel sağlık sigortası anlaşma koşullarını ve iade gerekçelerini özetlemek; kişisel veri içermeyen sözleşme ve tarifelerle çalışmak.
- **Eğitim birimi:** Hemşirelik hizmet içi eğitim materyali, vaka tartışması için kurgusal senaryo hazırlamak.
- **Yönetim:** Bölüm doluluk ve bekleme süresi raporlarını (toplu, kişisel veri içermeyen) yorumlayıp yönetim kurulu özeti yazmak.

Claude Türkçe tıbbi metinlerle çalışabilir, ama ilaç adı, doz ve terim hatası riskini sıfırlamaz. Neden insan kontrolü şart: [Claude'un sınırlamaları](/wiki/temeller/sinirlamalar/).

## Nasıl başlarsınız?

1. Hasta verisi içermeyen bir idari iş seçin: prosedür belgesi, bilgilendirme metni, kalite kontrol listesi.
2. KVKK irtibat kişiniz ve hukuk biriminizle hangi verinin hangi biçimde girebileceğini yazın.
3. Enterprise ile pilot yapın; ödeme ABD doları ile Anthropic'e yapılır, Anthropic'in Türkiye'de ofisi ya da temsilcisi yok.
4. Personelin kişisel ücretsiz hesaplarla hasta bilgisi paylaşmasını yasaklayan net bir kural koyun.
5. Ekiplerin Claude'u bu sınırlar içinde kullanmayı öğrenmesi için Zamana'nın [kurumsal programına](/programlar/kurumsal/) bakabilirsiniz. Sektöre özgü örnekler: [Sağlık sektörü (wiki)](/wiki/departmanlar/saglik/).
