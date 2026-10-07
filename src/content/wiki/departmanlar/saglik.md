---
title: "Sağlık: Claude Uygulamaları (Hassas Sektör)"
seoTitle: "Sağlıkta Claude: Hekim Notu, Hasta Bilgilendirme, KVKK ve Sınırlar"
description: "Sağlık kuruluşları için Claude: hasta verisi politikası, idari iş yükü, hekim notu desteği, eğitim materyali. KVKK ve özel mevzuatta dikkatli kullanım."
tags:
  - departmanlar
  - saglik
  - kvkk
  - hassas
lastUpdated: "2026-10-06"
---

Sağlık sektörü Türkiye'de özel bir yasal rejime tabidir: KVKK kapsamında **özel nitelikli kişisel veri**, mesleki gizlilik ve Sağlık Bakanlığı yönetmelikleri. Claude'un sağlıkta kullanımı **mümkündür ama dikkat ister.** Bu sayfa hangi alanlarda güvenle kullanılabileceğini, neyin kesinlikle yapılmaması gerektiğini ve kurumsal politika çerçevesini anlatır.

**Önemli:** Bu sayfa hukuki tavsiye değil, genel rehberlik. Sağlık kuruluşunuzun **mesleki gizlilik, KVKK, Sağlık Bakanlığı mevzuatı** kapsamında **kendi hukuk müşaviriyle** politika kurması zorunludur.

## Yasal Çerçeve: Hızlı Özet

Sağlıkta Claude kullanımını yöneten ana mevzuat:

- **KVKK md. 6**: sağlık verisi özel nitelikli kişisel veridir; açık rıza veya yasal istisnalar gerekir
- **KVKK md. 9**: Claude'a kişisel veri girmek yurt dışına aktarım sayılır; ayrıntılar [KVKK m.9: Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/) sayfasında, genel çerçeve [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasında. Hasta verisi için pratik kural değişmez: girmeyin
- **Hasta Hakları Yönetmeliği**: mahremiyet
- **Tıbbi Deontoloji**: hekim mesleki gizliliği
- **Sağlık Bakanlığı Bilişim Standartları**
- **Türk Ceza Kanunu md. 134-138**: kişisel veriyi hukuka aykırı verme

[Hukuk departmanı](/wiki/departmanlar/hukuk/) sayfası KVKK derinleşmesi içerir. Anthropic'in sağlık çözümünün (HIPAA kapsamı, sağlık connector'ları, ABD'ye özgü sınırlar) Türkiye açısından değerlendirmesi için [Sağlık kuruluşları için Claude](/kurumsal/saglik/) sayfasına bakın.

## Yapılabilenler ve Yapılamayanlar: Net Tablo

| İş | Claude'a uygun mu? | Koşul |
|---|---|---|
| Hasta dosyası tam yükleme | ❌ Asla | TCK ihlali, mesleki gizlilik ihlali |
| Anonimleştirilmiş vaka tartışması | ⚠️ Dikkatli | Tam anonimleştirme + kurumsal onay |
| Hekim notu **ön taslak** (anonim) | ✅ | Hekim son hâle getirir |
| Tıbbi literatür araştırma | ✅ | Tanı/tedavi kararı için ek doğrulama |
| Hasta için bilgilendirme metni | ✅ | Hekim onayı |
| Randevu / idari yazışma | ✅ | Hasta ismi anonimleştirilir |
| Personel İK iş ve eğitim materyali | ✅ | Standart kurumsal kullanım |
| Maliyet, faturalama, idari yönetim | ✅ | Standart |
| Tanı kararı verme | ❌ | Hekim mesleki sorumluluk |
| Tedavi planı verme | ❌ | Hekim sorumluluk |
| Hasta direkt sohbet (chatbot) | ⚠️ | Sıkı yasal değerlendirme |

**Genel kural:** Claude **klinik karar vermez**, **idari ve eğitsel destek** sağlar.

## Bölüm 1: Hekim İş Akışı Desteği

### Hekim Notu Ön Taslak

Hekim hasta görüşmesinden çıkar. Notlarını sözle dikte eder (cihazın kendi dikte özelliğiyle; Claude'un [Voice Mode](/wiki/araclar/voice-mode/) özelliği şu an Türkçe desteklemiyor) veya kısa yazılı not bırakır. Claude bunu yapılandırılmış hekim notuna çevirir:

- Şikayet
- Anamnez
- Muayene bulguları
- Değerlendirme
- Plan

**Hasta adı yerine "Hasta A" veya vaka numarası** kullanılır. Son hâlini hekim onaylayıp HBYS'ye girer.

### Tıbbi Literatür Araştırması

Bir vaka için literatür özeti ve son tedavi yaklaşımları, [Research Mode](/wiki/yetenekler/research-mode/) ile.

**Önemli:** Claude ücretli tam metin makalelere erişemez; PubMed özetleri ve açık erişim makaleler üzerinden çalışır, kaynakları uydurabilir. Her atfı kaynağından doğrulayın. Klinik karar için ek olarak **UpToDate, NEJM ve ilgili uzmanlık derneği kılavuzları** gibi profesyonel kaynaklar kullanılır.

### Hasta Bilgilendirme Yazısı

Bir tanı, işlem veya tedavi sonrası hastaya verilecek bilgilendirme metni. Claude tıbbi terimi sade dile çevirir: "ne demek, ne yapmalı, ne zaman uyarı" yapısında.

Metin, hekim onayından sonra hastaya verilir.

### Aydınlatılmış Onam Formu

Cerrahi veya tıbbi işlem için aydınlatılmış onam formu taslağı. Hukuk müşaviri son hâli **mutlaka** onaylamalıdır.

## Bölüm 2: İdari ve Operasyonel

### Randevu Yönetimi

Randevu hatırlatma, iptal yanıtı ve çok dilli iletişim (turistlerin sağlık hizmeti için Türkiye'ye geldiği "sağlık turizmi" senaryosu). [Turizm ve Otelcilik](/wiki/departmanlar/turizm-otelcilik/) sayfası benzer çok dilli iletişim örnekleri verir.

### Hasta Geri Bildirim Yanıtı

Olumlu ve olumsuz geri bildirimlere yanıt. Hassas durumlarda **hukuki dikkat** gerekir: geri bildirim yanıtında bile mesleki gizlilik ihlali riski vardır.

### Sağlık Bakanlığı Raporlama

Periyodik resmi raporlar için yapı ve anlatı desteği: Claude rapor iskeletini, açıklama metinlerini ve eksik alan kontrol listesini hazırlar. Rakamlar ve içerik hekim ya da kalite ekibinden gelir; Claude'a hasta düzeyinde veri değil, toplulaştırılmış sayılar verilir.

### Faturalama ve SGK

SGK ile mali işler, yazışma taslakları, itiraz mektupları. Standart [finans](/wiki/departmanlar/finans/) yaklaşımı geçerlidir, üzerine sağlığa özgü KVKK katmanı eklenir.

### Personel İK ve Performans

Hekim, hemşire ve idari personelin İK işleri standart [İK departmanı](/wiki/departmanlar/insan-kaynaklari/) yaklaşımıyla yürür. Sağlığa özgü başlıklar: nöbet çizelgesi planlama, performans değerlendirme (klinik göstergeler), eğitim takibi.

## Bölüm 3: Eğitim ve Akademik

### Personel Eğitim Materyali

Hemşire eğitimi, tıbbi sekreter eğitimi, hekim sürekli eğitimi: Claude konuya göre eğitim materyali, sınav sorusu ve vaka çalışması üretir. [Eğitim ve Akademi](/wiki/departmanlar/egitim-akademi/) sayfası genel pedagojik yaklaşımı detaylandırır.

### KVKK ve Hasta Hakları Eğitim Materyali

Sağlık personeline yönelik KVKK ve mesleki gizlilik farkındalık eğitimi: Claude konuyu günlük çalışmadan örneklerle ("koridorda hasta bilgisi konuşmak", "telefonda sonuç paylaşmak") anlatan bir modül ve kısa sınav hazırlar. Hasta ve yakınları için sade dille "haklarınız neler" rehberi de çıkar. Hukuk müşaviri son metni onaylar.

### Tıp Fakültesi / Eğitim Hastanesi

Asistan eğitimi için klinik vaka tartışmaları, makale taraması, sunum hazırlığı. Yalnızca **anonimleştirilmiş** vakalarla.

### Sağlık İletişimi (Hasta Eğitimi)

Web sitesi, broşür, sosyal medya için sade tıbbi içerik. "Diyabet nedir, nasıl yönetilir" tarzı eğitsel içerikler.

### Akademik Yayın

Tıbbi yayın için özet, giriş ve tartışma bölümü taslağı. Nihai metin, hekimin veya araştırmacının emeği ve sorumluluğundadır.

## Bölüm 4: Kurumsal Yönetim

### Politika Belgeleri

Hasta gizliliği politikası, KVKK aydınlatma metni, çalışan davranış kuralları. [Hukuk departmanı](/wiki/departmanlar/hukuk/) onayıyla.

### Acil Durum Planları

Kriz iletişimi, hasta yakınlarına bilgilendirme, basın açıklaması taslakları. Hassas durumlarda **iletişim ekibi ve hukuk** son onayı verir.

### Kalite Yönetimi

Hastane akreditasyonu (JCI, SAS) için belgeler. ISO benzeri bir yapı söz konusudur; [üretim ve imalat](/wiki/departmanlar/uretim-imalat/) sayfasındaki ISO yaklaşımı uyarlanabilir.

### Yatırım ve Stratejik Plan

Yeni bölüm açma veya cihaz satın alma kararı için iş planı ve ROI analizi.

## Pratik Kullanım Senaryoları

Aşağıdaki süre karşılaştırmaları örnektir; kurumdan kuruma değişir.

### Senaryo 1: Polikliniğe Hekim

Sabah 9-12 arası yoğun poliklinik, 25 hasta. Her hasta sonrası 5 dakika not yazmak iş gününe yaklaşık 2 saat ekler. Hekim, anonimleştirilmiş vaka notlarını cihazın dikte özelliğiyle yazıya çevirip Claude'a verir, Claude yapılandırılmış hekim notu çıkarır. Hekimin işi, sıfırdan yazmak yerine hasta başına yaklaşık 1-2 dakikalık bir kontrol ve düzeltmeye iner (bu süre ölçülmedi, tahminidir; kurumunuzda kendiniz ölçün).

### Senaryo 2: Hastane İdari Sekreteri

Yabancı hasta yoğun bir hastanede çok dilli randevu yazışması ve tedavi öncesi bilgilendirme gerekir. Claude ile birkaç dilde profesyonel iletişim kurulur ve sekreterlerin iş yükü belirgin biçimde azalır. [Turizm ve Otelcilik](/wiki/departmanlar/turizm-otelcilik/) sayfasında benzer bir çok dilli uygulama var.

### Senaryo 3: Hekim Akademik Çalışma

Klinik araştırma için literatür özeti, makale taslağı ve istatistiksel analiz açıklaması. Literatür taraması ve ilk taslak aşaması belirgin biçimde kısalır; atıflar ve istatistikler yine de hekim tarafından doğrulanır.

### Senaryo 4: Hastane Yöneticisi

JCI akreditasyonuna 6 ay var. Claude ile mevcut prosedürler gözden geçirilir, eksik dokümantasyon listesi çıkarılır, yeni belge taslakları hazırlanır. Hazırlık süresi kısalır, ama içerik doğruluğunun sorumluluğu kurumda kalır.

## Gerçek Örnek: Tedavi Öncesi Bilgilendirme Yazısı

Bir özel hastanenin kulak burun boğaz polikliniği, bademcik ameliyatı olacak hastalar için işlem öncesi bilgilendirme yazısını güncellemek istiyor. Metin her hasta için kullanılacak, kişisel veri içermiyor.

**Adım 1:** Sekreter ya da hemşire, hekimin onaylı klinik içeriğini (hazırlık, açlık süresi, kullanılacak ilaçlar, riskler) Claude'a verir:
> *"Aşağıdaki hekim onaylı bilgiden bademcik ameliyatı öncesi hasta bilgilendirme yazısı hazırla. 8. sınıf düzeyinde sade Türkçe. Bölümler: ameliyattan önceki 24 saatte ne yapılır, açlık, ilaçlar, ameliyat günü getirilecekler, hangi durumda hemen arayın. Tıbbi terimin yanına parantezle sade karşılığı. Ekte olmayan hiçbir tıbbi bilgi ekleme; emin olmadığın yere [hekime sor] yaz."*

**Adım 2:** Claude yazıyı üretir ve [hekime sor] işaretli yerleri listeler.

**Adım 3:** Hekim işaretli yerleri yanıtlar, metni okur ve klinik içeriği onaylar.

**Adım 4:** Hastane hukuk müşaviri ya da kalite birimi kurumsal onam ve bilgilendirme kurallarıyla uyumu kontrol eder; metin şablon olarak kaydedilir.

**Süre:** tedavi öncesi bilgilendirme yazısı için elle 20-30 dakika, Claude ile 5-10 dakika (hekim kontrolü dahil). Hekim notu için hasta başına 5 dakikalık yazımın kontrol süresine (1-2 dakika) inmesi beklenir, ama bu ölçülmedi; kurumunuzda küçük bir denemeyle sayıyı kendiniz çıkarın. *Tahmini tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

## CLAUDE.md Tavsiyesi: Sağlık Çalışanı

Sağlık çalışanı için CLAUDE.md ekstra dikkatli:

```markdown
## Çalışan Profili
- Kurum: [hastane / poliklinik / sağlık kurumu]
- Pozisyon: [hekim / hemşire / idari]
- Branş: [varsa]

## Yasal Çerçeve
- KVKK md. 6 (özel kategori sağlık verisi)
- Hasta Hakları Yönetmeliği
- Mesleki gizlilik (TCK 134-138)

## Yapma (KESİN YASAK)
- Hasta ad, TC, dosya no, iletişim bilgisi yapıştırma
- Tanı/tedavi kararını Claude'a sorma → Claude'da klinik karar yok
- Tıbbi rapor son hâlini Claude'la bitirme → mutlaka hekim onayı
- Yönetimin hassas yazışmalarını Claude'a açma

## Yap
- Anonim vaka tartışmasında "Hasta A, 45 yaş, K, [şikayet]"
- Hasta bilgilendirme metinlerini sade dile çevir
- Literatür taramasında ek profesyonel kaynak doğrulama
- İdari yazışmaları profesyonel format

## Voice
- Mesleğin saygınlığına uygun. Klişe ("değerli hastamız") yasak.
- Tıbbi terim + sade Türkçe karşılık.
```

## Kurumsal Politika: Sağlık Spesifik

[Şirket içi politika](/wiki/temeller/sirket-ici-politika/) sayfasındaki şablonu sağlık için **sıkılaştırın**:

### Sağlık Politikası Ek Maddeleri

```markdown
1. Hasta verisi - özel kategori. KVKK md. 6 + Hasta Hakları Yönetmeliği.
2. Hasta dosyasının hiçbir bölümü Claude'a yüklenmez.
3. Anonim vaka tartışması için kurum içi onaylı şablonu kullanın.
4. Klinik karar Claude'la verilmez. Claude tarama, taslak destekçidir.
5. Hekim notları Claude taslağı kullanılarak yazılır ama hekim onayıyla HBYS'ye girer.
6. Yasal/etik şüpheli durumda kurum hukuk müşaviriyle hemen görüşülür.
7. Bu politika hekim, hemşire ve idari personel dahil herkesi kapsar.
```

## Kurumsal Plan Tavsiyesi

Kurum olarak hasta ya da çalışan verisi işleyecekseniz bireysel (Free, Pro, Max) planlar yerine ticari bir plan (Team veya [Enterprise](/wiki/temeller/takim-ve-admin/)) öneriyoruz; zorunlu değil, ama merkezi kontrol ve veri ayarları açısından daha uygun. Team en az 2 koltuktur, Enterprise self-serve en az 20 koltukla alınır.

- Ticari planlarda (Team, Enterprise, API) girdiler varsayılan olarak model eğitiminde kullanılmaz; bireysel planlarda bu ayar kullanıcıya bağlıdır
- DPA (Veri İşleme Eki) ticari şartlara otomatik dahildir, ayrıca imza gerekmez; bireysel planlar DPA kapsamı dışındadır. Metni yine de kurumunuzun hukuk müşaviri gözden geçirmelidir
- SSO ve SCIM yönetimi
- Audit log, özel veri saklama ayarları ve RBAC gibi gelişmiş kontroller Enterprise planındadır
- HIPAA yapılandırması (BAA) yalnız Enterprise'da mevcuttur, Team ve bireysel planlarda açılamaz; ayrıca ABD mevzuatına dairdir ve KVKK uyumu yerine geçmez

Hangi plan olursa olsun, hasta verisini Claude'a yüklememe kuralı geçerlidir. [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfası ek bağlam verir.

## "Hekim Yardımcısı Chatbot" Trendi

Bazı dijital sağlık girişimleri "yapay zekâ destekli hasta soruları" ürünleri geliştiriyor. Bu **çok hassas** bir alandır:

- Klinik karar vermek hekimin mesleki sorumluluğudur
- Yapay zekâ teşhis koymadan "destek" sağlasa bile **yasal sorumluluk** sınırı belirsizdir
- KVKK ve tıp etiği çift katmanlı bir kontrol ister
- Bu tür ürünlerin düzenlenmesi (ABD'deki FDA yaklaşımına benzer biçimde) Türkiye'de de gelişiyor; güncel durumu hukuk danışmanınızla doğrulayın

**Öneri:** Doğrudan hasta ile yapay zekâ etkileşimi kuran bir ürün için karar kurum içinde verilmemeli; **dış hukuki ve etik danışmanlık** şarttır.

## Sağlık Turizmi

Türkiye'de büyüyen **sağlık turizmi** (saç ekimi, dental, plastik cerrahi, IVF) için Claude değerlidir:

- Birden fazla dilde hasta iletişimi (öncesi, esnası, sonrası)
- Gelişten önce bilgilendirme
- Konaklama ve transfer koordinasyonu
- Pazarlama içeriği (web sitesi, sosyal medya)
- Yorum yönetimi

[Turizm ve Otelcilik](/wiki/departmanlar/turizm-otelcilik/) sayfası bu boyutu detaylandırır.

## Bireysel Hekim / Klinik Sahibi

Tek başına çalışan hekim ya da küçük poliklinik için Claude'un katkısı kayda değerdir. İdari iş yükünü azaltarak hekimin zamanını boşaltır. Sektörün hassasiyeti nedeniyle KVKK ve mesleki gizlilik kurallarına özel dikkat gerekir. Ticari plan önerisi tek hekim için de geçerlidir, ama Team en az 2 koltuk istediğinden hekim ve bir idari çalışan birlikte alabilir. Tek kişilik bireysel planla çalışılacaksa hasta verisini hiç girmemek, yalnız idari ve eğitsel işlerde kullanmak gerekir.

## İlgili Sayfalar

- [Hukuk Departmanı](/wiki/departmanlar/hukuk/): KVKK, mesleki gizlilik, Sağlık Bakanlığı mevzuatı
- [Müşteri Hizmetleri](/wiki/departmanlar/musteri-hizmetleri/): Hasta iletişimi temelleri
- [Eğitim ve Akademi](/wiki/departmanlar/egitim-akademi/): Tıp eğitimi, asistan eğitimi
- [Turizm ve Otelcilik](/wiki/departmanlar/turizm-otelcilik/): Sağlık turizmi
- [Operasyon Departmanı](/wiki/departmanlar/operasyon/): Hastane operasyonel yönetim
- [İK Departmanı](/wiki/departmanlar/insan-kaynaklari/): Sağlık personeli yönetimi
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Politika temeli
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Veri hakları
- [Sağlık kuruluşları için Claude](/kurumsal/saglik/): Anthropic'in sağlık çözümü ve Türkiye açısından sınırları
- [KVKK m.9: Yurt Dışı Aktarım](/wiki/temeller/yurt-disi-aktarim/): Hasta verisi girmeden önce
- [Takım ve Admin](/wiki/temeller/takim-ve-admin/): Enterprise plan
- [Research Mode](/wiki/yetenekler/research-mode/): Tıbbi literatür

