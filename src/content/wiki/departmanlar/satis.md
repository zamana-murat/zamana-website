---
title: "Satış ve İş Geliştirme: Claude Uygulamaları"
seoTitle: "Satışta Claude: Teklif, Takip E-postası ve Anlaşma Teşhisi"
description: "Satış yöneticisi için Claude: teklif, müşteri iletişimi, pipeline analizi, tender yanıtları. Gerçek iş akışları ve prompt kütüphanesi önerileri."
tags:
  - departmanlar
  - satis
  - is-gelistirme
  - crm
lastUpdated: "2026-10-06"
---

Bu sayfa, satış ekibinin Claude ile en çok zaman kazandığı yerleri ve bu departmanda kurulan tipik iş akışlarını anlatır. Salesforce kullanıyorsanız ilgili eklenti için Skills bölümündeki nota bakın.

## Claude'un Çözdüğü Temel Sıkıntılar

- Teklif ve öneri yazımı çok zaman alıyor
- Takip e-postaları tekrarlı ve jenerik
- Prospect ve pazar araştırması yavaş
- Toplantı hazırlığı tutarsız
- Kaybedilen anlaşmalar doğru analiz edilmiyor
- Ekip içinde fiyat ve teklif dokümantasyonu tutarsız
- Tender / RFP yanıtları zorlu ve zaman alıcı

## Bölüm 1: İletişim

**Kişiselleştirilmiş outreach e-postaları.** Claude'a prospect'in bağlamı (sektör, sıkıntı noktası, geçmiş) verildikten sonra yazılır: gerçek kişiselleştirme, mail-merge değil.

**Takip dizileri.** Farklı senaryolar için çok dokunuşlu bir takip kütüphanesi kurulur: yanıt yok, ilgili ama yavaş, itiraz geldi.

**Teklif yazımı.** Çalışan rakamları ve özel şartları verir; Claude yapıyı, dili ve ikna akışını kurar. Sonuç, özenle yazılmış gibi okunan profesyonel bir tekliftir.

**Fiyat ve teklif dokümantasyonu.** Standart fiyat girdilerinden; şartlar, geçerlilik ve ödeme koşulları eklenmiş profesyonel bir teklif belgesi çıkar.

**Tender / RFP yanıtları.** Çalışan tender gereksinimlerini açar; Claude yanıtı bölüm bölüm yapılandırır. **Zamana notu:** Yanıt hazırlama süresi belirgin biçimde kısalır, ama her bölümü teknik ve hukuki olarak sizin doğrulamanız gerekir.

**Kamu ihalesi (EKAP) teklif dosyası.** Kamu ihalelerinde dosya hacmi yüksektir: idari şartname, teknik şartname, belge listesi, uygunluk beyanları. Claude'a şartnameyi verip önce madde madde bir **uygunluk matrisi** ("şartname maddesi, karşıladığımız kanıt, eksik belge") çıkarttırırsınız; sonra teknik yanıt bölümlerini bu matrise göre yazdırırsınız. Zamana eğitim materyalinde ihale/RFP yanıt süresinin yaklaşık %60-70 kısalabileceği varsayılır; bu tahmini bir orandır, kendi sürenizi ölçün. Tarihleri, teminat ve yeterlik koşullarını, belge geçerlilik sürelerini Claude'dan değil şartnameden ve EKAP'tan doğrulayın; teklif bedeli ve maliyet kalemlerini yapıştırırken şirket verisi kurallarınıza uyun. İhale mevzuatı ayrıntıları için hukuk ya da ihale uzmanınıza danışın.

## Bölüm 2: Araştırma ve İstihbarat

**Toplantı öncesi şirket analizi.** Claude'a neyin verileceği, ne sorulacağı ve neyin doğrulanmadan güvenilmemesi gerektiği anlatılır. Prospect'in web sitesi, LinkedIn sayfası ve son haberlerden tek sayfalık bir bilgi notu çıkar.

**Rekabet istihbaratı.** Rakipler hakkında bildiklerinizi yaşayan bir referans belgesine dönüştürmek.

**Pazar özetleri.** Ham bilgiden (haberler, fiyatlar, sektör verisi) özet bir yönetim brifingi.

**Win/loss analizi.** Kapanan bir anlaşmanın geçmişini Claude'a verirsiniz; sonucu hangi faktörün belirlediğini çıkarır. Öğrenme kurumsallaşır.

## Bölüm 3: Pipeline ve Anlaşma İşleri

**Takılan anlaşma analizi.** Anlaşma geçmişinden Claude bir teşhis ve önerilen bir sonraki eylemi çıkarır.

**Toplantı hazırlık brifingi şablonu.** Güvenle toplantıya girmek için gereken her şey: şirket geçmişi, paydaş profilleri, açık sorular, olası itirazlar.

**Toplantı sonrası notlar.** Kaba notlar; yapılandırılmış özet, eylem kalemleri, sahip ve son tarihle düzenlenir.

**İtiraz yanıt kütüphanesi.** İtiraz tipine göre düzenlenmiş (fiyat, zamanlama, rakip tercihi, iç direnç) kişisel bir yanıt kütüphanesi.

**Kaybedilen anlaşma dokümantasyonu.** Kaybı kurumsal öğrenmeye çevirmek: ne oldu, gelecekte ne yapılmalı, benzer prospect'lerde neye dikkat edilmeli.

**Referans isteği yazımı.** Memnun müşterilerden doğal ve yanıt alan bir tanıştırma istemek. Çoğu satışçı bunu yapamaz, çünkü nasıl söyleyeceğini bilmez.

**Account ve territory mapping.** Hesaplarınız ve bölgeniz hakkında bildiklerinizi yapılandırmak: boş alanlar (white space), penetrasyon derinliği, risk yoğunluğu, büyüme fırsatları. Hepsi yaşayan bir referans belgesi olarak tutulur.

## Tipik Günlük İş Akışı

Bir satış yöneticisinin Claude ile kurabileceği tipik bir ritim:

| Zaman | İş | Claude Yardımı |
|---|---|---|
| Pazartesi sabah | Haftalık pipeline özeti | Scheduled Task ile otomatik |
| Günlük sabah | Gün başı brifingi (takvim + yeni e-posta) | Scheduled Task ile her sabah otomatik |
| Toplantı öncesi | Prospect araştırması ve brief | Web search + CRM connector |
| Toplantı sonrası | Tutanak + takip e-postası | Toplantı notunu okur, özet ve e-posta çıkarır |
| Hafta sonu | Takılan anlaşmaların teşhisi | CRM verisi üzerinde analiz |

## Prompt Kütüphanesi Konuları

Bu departman için önerilen prompt koleksiyonu:

- Sektöre göre prospect outreach
- Senaryoya göre takip dizileri
- Teklif yapısı şablonu
- Teklif / fiyat belgesi
- Tender yanıt çerçevesi
- Toplantı öncesi araştırma brifingi
- Toplantı sonrası özet
- İtiraz yanıt kütüphanesi
- Anlaşma teşhisi
- Win/loss analizi
- Pipeline review özeti
- İlişki tipine göre referans isteği
- Hesap ve territory map

## Kullanılacak Skills ve Connector'lar

**Skills:**
- `docx`: teklif belgeleri
- `pdf`: imzalı teklif PDF'leri
- Artifacts: (nadiren) özel landing page taslağı
- `sales:call-prep`: satış görüşmesi hazırlığı
- `sales:account-research`: şirket / kişi derinlemesine araştırma
- `sales:draft-outreach`: kişiselleştirilmiş outreach
- Görüşme sonrası debrief için benzer bir skill (aksiyon maddeleri, ekip mesajı, müşteri takip e-postası): adı plugin sürümüne göre değişir, Skills listenizden kontrol edin

> **Salesforce in Claude (beta, 15 Eylül 2026):** Salesforce kullanan ekipler için 37 satış becerisi içeren, tüm ücretli planlarda kullanılabilen bir eklenti. Günlük özet, görüşme hazırlığı, anlaşma analizi ve kapanış planı, toplantı sonrası güncelleme ve pipeline incelemesi gibi akışları kapsıyor; Salesforce'taki mevcut yetkiler aynen geçerli. Kurulumu organizasyon yöneticisi yapar, ayrıntı haberde. Yukarıdaki `sales:*` skill adları plugin sürümüne göre değişebilir, kurulu olanları Skills listenizden kontrol edin. Bu ürün Salesforce ve Anthropic'in eklentisidir; Zamana bayi değildir, satın alma doğrudan Anthropic'ten yapılır. Bkz: [haber](/haberler/2026-09-15-salesforce-claude-icinde/).

**Connector'lar (öncelik sırasıyla):**
1. **CRM** (Salesforce veya HubSpot): pipeline için olmazsa olmaz
2. **Gmail / Outlook**: müşteri yazışmaları
3. **Google Workspace / Microsoft 365**: teklif belgeleri
4. (opsiyonel) **Slack**: ekip iç iletişimi
5. (opsiyonel) **LinkedIn** entegrasyonu: prospect araştırma (zamanla eklenecek)

## İş Akışı Yeniden Tasarımı Adayları

Yeniden tasarlanabilecek iş akışları:

- **Teklif üretim süreci**: bilgi toplama → taslak → inceleme → teslim, her adım Claude destekli
- **Toplantı hazırlık rutini**: her toplantıdan önce otomatik brifing üretimi
- **Tender yanıt iş akışı**: gereksinim analizi → bölüm yazımı → tutarlılık kontrolü
- **Aylık hesap incelemesi**: hesap bazlı sağlık durumu + önerilen aksiyonlar

## Gerçek Örnek: Takılan Anlaşma Teşhisi

Bir satış yöneticisi XYZ Gıda ile 3 ay önce aktif görüşmedeydi. 2 aydır cevap yok. Ne yapmalı?

**Adım 1:** CRM'den tüm geçmişi Claude'a verir:
> *"Bu hesabın tüm geçmişini ekte veriyorum. Son 12 ayın yazışmaları, toplantı notları, teklif revizyonları. Durumu teşhis et: bu anlaşma neden durdu? En olası 3 neden?"*

**Adım 2:** Claude bir teşhis verir. Örneğin: "Mart teklifinizdeki fiyat artışı, karar vericinin bütçe dönemine denk geldi; şu an yıl sonu kapanışıyla meşguller, Q2'de geri dönebilirler."

**Adım 3:** Çalışan sorar: *"Bu 3 senaryo için 3 farklı takip stratejisi düşünelim. Hangi durumda hangisi uygun?"*

**Adım 4:** Çalışan bir strateji seçer, Claude takip e-postası taslağını yazar.

Toplam süre: yaklaşık 15 dakika (örnek senaryo). Geleneksel yaklaşımda ("durumu analiz etmek için bir ara oturayım") bu iş çoğunlukla ertelenir ve atlanır.

**Süre:** takılan anlaşma teşhisi elle 45-90 dakika, Claude ile 15-25 dakika (kontrol dahil); teklif taslağı elle 2-3 saat, Claude ile 30-45 dakika (kontrol dahil). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/). Haftada 4 anlaşma teşhis ediyorsanız fark yaklaşık 1,5-5 saattir.*

## Pratik Refleks: Hesap Geçmişini Biriktirin

Görüşme öncesi brief ile görüşme sonrası debrief çıktılarını her hesap için **özel bir klasörde** biriktirin (örn. `workspace/hesaplar/XYZ-Gida/`). Zamanla bu klasör o hesabın yaşayan hafızası olur: her yeni görüşme öncesi Claude geçmiş brief ve debrief'leri okuyup bağlamı toparlar. İkinci görüşmeye "sıfırdan" değil, tüm geçmişle girersiniz.

Aynı yaklaşım satışın ötesinde de işe yarar: müşteri başarısı, iş ortaklıkları, işe alım, kurumsal geliştirme ve kişi/şirket araştırması gereken her rol için.

## Sık Hatalar

- **Hassas veriyi olduğu gibi yapıştırmak.** Müşteri adı ve anlaşma rakamını anonimleştirin ya da `[MÜŞTERİ]` gibi bir yer tutucu kullanın. Şirket verisi işliyorsanız Team ya da Enterprise öneriyoruz (merkezi kontrol, veri ayarları); zorunlu değil.
- **Claude'un müşteri ve pazar hakkında söylediğini doğrulamamak.** Bilmediği şeyi uydurabilir, özellikle pazar verilerinde. Rakam ve iddiayı toplantıya girmeden kaynağından kontrol edin.
- **Kütüphaneyi kurup bırakmak.** 5 prompt eklendiğinde "yine de elle yazarım" refleksi doğaldır; yatırımın karşılığı genellikle birkaç hafta sonra görünür, vazgeçmeyin. *(Zamana eğitim materyali)*

## İlgili Sayfalar

- [CLAUDE.md Örnekleri](/wiki/claude-md/ornekler/): Satış yöneticisi için hazır CLAUDE.md
- [Prompting Temel İlkeleri](/wiki/prompting/temel-ilkeler/): Kaliteli prompt yazma
- [Skills](/wiki/yetenekler/skills/): Sales plugin detayları
- [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): CRM + Gmail connector kurulumu
- [Satış ekipleri için Claude](/kurumsal/satis/): Kurumsal ölçekte görüşme hazırlığı, teklif ve satış tahmini
- [Ölçüm Metrikleri ve ROI Çerçevesi](/wiki/temeller/olcum-metrikleri/): Kazancı kendi ekibinizde nasıl ölçersiniz

