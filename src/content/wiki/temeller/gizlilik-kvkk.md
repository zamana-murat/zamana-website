---
title: "Gizlilik, Veri ve KVKK — Claude'u Türkiye'de Kurumsal Kullanmak"
description: "Claude ile çalışırken veri gizliliği, eğitim verisi politikaları, KVKK uyumluluğu, DPA ve Türkiye'deki kurumsal kullanım kuralları."
tags:
  - temeller
  - gizlilik
  - kvkk
  - veri-guvenligi
  - dpa
---

Her kurumsal Claude konuşmasının bir yerinde aynı soru çıkar: **"Verilerimize ne olur?"**

Bu sayfa Zamana'nın bu soruya verdiği net, bağlamlı, Türkiye-odaklı cevabı içerir. Üç ana başlık altında ilerler:

1. Anthropic'in veri politikaları — plana göre ne değişir
2. Hassas veri kuralları — çalışana ne öğretmeli
3. KVKK ile uyum — Türkiye'de hukuki açıdan nasıl pozisyonlanmalı

## Anthropic Verilerinizi Ne Yapar? (Plana Göre)

**Önemli ön bilgi:** Hiçbir planda konuşmalarınız otomatik olarak model eğitimine alınmaz. Eğitim kullanımı her planda kontrol edilebilir — kontrol biçimi planlar arasında farklıdır.

| Plan | Model eğitimi için kullanılır mı? | Konuşma saklama | Notlar |
|---|---|---|---|
| **Free** | Varsayılan: **Hayır**. Kullanıcı opt-in ile açabilir. | Standart süre | "Claude'u geliştirmeye yardım et" ayarı kapalı geldiği için varsayılanda kullanılmaz |
| **Pro / Max** | Varsayılan: **Hayır**. Kullanıcı opt-in ile açabilir. | Standart süre | Kurumsal kullanımda kapalı kalmasını öneriyoruz; şirket politika belirlemeli |
| **Team** | **Hayır — varsayılan olarak asla** | Standart süre | Ticari sözleşme eğitim kullanımını engeller; kullanıcı ayarı ile değiştirilemez |
| **Enterprise** | **Hayır — varsayılan olarak asla** | 7 gün API log saklama; Zero Data Retention mevcut | En sıkı veri kontrolü; DPA standart |
| **API** | Hayır — varsayılan olarak asla | 7 gün (Eyl 2025'te 30 günden azaltıldı) | Zero Data Retention seçeneği uygun müşteriler için |

### Ağustos 2025 Güncellemesi — Önemli

Anthropic, tüketici kullanıcıları için opt-in bir seçenek ekledi: **"Claude'u geliştirmeye yardım et"**. Bu açıksa, konuşmalarınız kimliksizleştirilmiş biçimde 5 yıla kadar saklanabilir ve model eğitiminde kullanılabilir.

**Zamana önerisi:** Pro/Free planındaki çalışanlar ayarlarını kontrol etmeli. Eğitime başlamadan önce şirket net bir politika belirlemeli. **Varsayılan önerimiz: kapatın.**

Bunu nasıl yaparsınız:

1. Claude Desktop veya claude.ai'da profil ikonuna tıklayın
2. **Settings → Privacy** menüsüne gidin
3. **"You can help improve Claude"** (Claude'u geliştirmeye yardım et) seçeneğini kapatın

### Şifreleme ve Erişim Kontrolleri

- Tüm veri iletimde (HTTPS/TLS) ve depolamada şifrelenir
- Anthropic çalışanları varsayılan olarak konuşmalarınıza erişemez — sadece açık izin veya Kullanım Politikası ihlali incelemesi durumunda
- Erişim katı dahili kontrollerle korunur
- **Zero Data Retention (Enterprise / API):** Girdi ve çıktılar kötüye kullanım taraması dışında hiçbir yerde saklanmaz — API çağrısı bittikten sonra hiçbir şey kalmaz

### Claude'un Yapmadığı Şeyler

- **Oturumlar arasında bilgi taşımaz** (memory araçları açıkça kullanılmadıkça)
- **Bir kullanıcının konuşmasını başka bir kullanıcıyla paylaşmaz**
- **Açık kimlik doğrulamalı bir MCP connector kurulmadıkça hiçbir sisteme erişmez**
- Connector'lar dış servislere **Anthropic'in bulutu üzerinden** ulaşır — yerel kurumsal ağınızdan değil (IT firewall planlaması için kritik bilgi)

## Çalışana Ne Öğretmeli — Hassas Veri Kuralları

Tüketici planlarında (Free, Pro, Max) çalışanlar şunları **kesinlikle Claude'a girmemeli:**

- **Şifreler, API anahtarları, erişim bilgileri**
- **Müşterilerin tam adı + iletişim + finansal verisi** (KVKK kapsamında PII — kişisel veri)
- **Gizli M&A bilgisi, açıklanmamış mali veri, insider bilgiler**
- **Ticari sırlar veya özel formüller** (özellikle Free/Pro hesaplarında)
- **Ayrıcalıklı hukuki iletişim** (avukat-müvekkil gizliliği — Enterprise + DPA dışında)
- **Hasta sağlık verisi** (HIPAA bağlamı — Türk hukukunda doğrudan karşılığı yok ama sağlık sektörü müşterileri için önemli)

### Pratik Test Sorusu

Çalışana öğretin:

> **"Bu metin yarın bir gazetede çıksa rahat mıyım?"**

Cevap "hayır"sa, o metni plan korumaları olmadan Claude'a vermeyin.

### Veri Hijyeni Teknikleri

Hassas veriyi Claude'la çalıştırmanız gerekiyorsa:

- **Anonimleştirin:** "Müşteri A", "çalışan B" gibi. İsim, TC kimlik no, tam adres yerine kod kullanın.
- **Örnek veri kullanın:** Gerçek finansal rakamlar yerine orantılı hayali rakamlar. Sonucu kendiniz gerçek veriye uygularsınız.
- **Parçalayın:** Sözleşmenin sadece analiz edilecek maddelerini paylaşın — tüm sözleşmeyi değil.

## KVKK — Kişisel Verilerin Korunması Kanunu

KVKK, Türkiye'nin temel kişisel veri koruma yasasıdır (Kanun No. 6698). Claude kullanırken KVKK yükümlülükleriniz hâlâ geçerlidir.

### KVKK Kapsamında "Kişisel Veri" Nedir?

Gerçek bir kişiyi tanımlayan veya tanımlayabilen her bilgi:

- İsim + iletişim bilgisi
- TC Kimlik numarası
- Finansal veri
- Sağlık bilgisi
- Konum verisi
- Çalışan performans verisi
- İK kayıtları

Bunların **Claude'a girişi, KVKK kapsamında bir veri işleme faaliyetidir** ve şirketiniz bu faaliyetin sorumlusudur.

### Risk Kategorileri — Claude Kullanımına Göre

| Risk seviyesi | Veri tipi | Claude ile nasıl kullanılır |
|---|---|---|
| **Düşük** | Şirket bilgileri, pazar araştırması, sektör bilgisi, ürün dokümantasyonu | Serbest kullanılır — kişisel veri yok |
| **Orta** | Çalışan isimlerine değinen iç raporlar, ticari bağlamda müşteri adları | DPO / KVKK sorumlusu ile gözden geçirilmeli |
| **Yüksek** | Kimlik bilgisi içeren İK belgeleri, kişisel tanımlı müşteri verisi, sağlık bilgisi, bireysel finansal kayıtlar | Dikkatli tutum gerekir — Enterprise + DPA + Zero Data Retention önerilir |

### Zamana Müşterileri İçin Önerilen Adımlar

1. **Veri haritası çıkarın.** Çalışanlar eğitim kapsamında hangi veri kategorilerini Claude'a girecek? Önceden belirleyin.
2. **DPA imzalayın (Team / Enterprise müşterileri için).** Anthropic'in Veri İşleme Sözleşmesi (Data Processing Agreement) KVKK uyumlu çalışmayı yasal olarak düzenler.
3. **Şirket politikası oluşturun.** "Hangi veri kategorileri Claude'a girilebilir, hangileri giremez" — yazılı, imzalı, eğitime dahil edilmiş.
4. **En hassas kullanımlarda Enterprise + Zero Data Retention.** İK, hukuk, sağlık gibi alanlarda standart Pro/Team yetersiz kalabilir.
5. **DPO ile önceden görüşün.** Şirketinizde Veri Koruma Sorumlusu varsa, yaygın dağıtımdan önce danışın.

### VERBİS Kaydı

Belirli eşiklerin üzerinde kişisel veri işleyen şirketler faaliyetlerini **VERBİS**'e (Veri Sorumluları Sicili) kaydetmek zorundadır. Yapay zeka aracı kullanılarak kişisel veri işleniyorsa, bu faaliyet VERBİS kayıt altına alınması gereken bir işlem olabilir. Kesin yükümlülüğü şirketin DPO'su belirler.

### DPA — Veri İşleme Sözleşmesi

Anthropic, ticari müşterilere **Data Processing Agreement (DPA)** sunar. Bu sözleşme:

- KVKK'nın "veri işleyen" (processor) rolü gerekliliklerini karşılar
- Verinin nerede, nasıl, ne kadar süre işleneceğini belgeler
- Alt-işleyicileri ve güvenlik standartlarını tanımlar
- Bir KVKK denetiminde şirketinizi korur

**Team ve Enterprise planları için standarttır.** Pro ve Free için mevcut değildir — bu KVKK kapsamında sınırlayıcıdır.

## GDPR (Uluslararası Müşteriler İçin)

Anthropic, ticari müşterilere GDPR uyumu için ek bir DPA sunar. Eylül 2025'ten itibaren API veri saklama süresi 7 güne düşürüldü — bu Claude'u GDPR ve AB Dijital Hizmetler Yasası gibi sıkı AB çerçeveleriyle uyumlu hale getiriyor.

İhracat işiniz varsa ve AB kaynaklı müşteri verisi işliyorsanız GDPR yükümlülüğünüz vardır. Bu durumda Enterprise + DPA zorunlu değilse bile güçlü öneridir.

## IT ve Ağ Gereksinimleri

Kurumsal dağıtım için IT ekibinizin yapması gerekenler:

- **Whitelist edilmesi gereken Anthropic domain'leri:**
  - `claude.ai`
  - `anthropic.com`
  - Claude Desktop backend endpoint'leri
- **Connector trafiği:** Dış servislere (Slack, Drive vb.) Anthropic'in bulutu üzerinden ulaşır — yerel kurumsal ağ üzerinden değil. Firewall planlamasında bu bilgi kritiktir.
- **VPN uyumluluğu:** Kurumsal VPN bazen Claude Desktop ile çakışır. Eğitim öncesi test edin.
- **Kurulum yetkisi:** Claude Desktop kurulumu için yönetici hakkı veya IT onayı gerekir.
- **Özel dahili connector'lar:** Şirket içi sistemlere bağlanan MCP server'lar ya açık erişimli olmalı ya da kurumsal ağ perimetresi içinde barındırılmalı.

## KVKK Müfettişinin Sorabileceği 10 Soru

Bir KVKK denetimi veya iç denetim Claude kullanımını incelediğinde yöneltebileceği sorular. **Her birine cevabınız hazır olmalı.**

### 1. Claude'a hangi kişisel veri kategorileri girildi?

Şirket politikanızda net tanımlı olmalı. "Her şey yasak" veya "her şey serbest" değil — hangi kategori hangi plan altında işlenebilir, yazılı olmalı.

### 2. Claude kullanımı VERBİS kaydınızda bir işleme faaliyeti olarak yer alıyor mu?

Kişisel veri işleyen bir AI aracı kullanımı, işleme faaliyetlerinize eklenmiş olmalı. DPO (Veri Sorumlusu) bunu kontrol eder.

### 3. Çalışanların hangi plan altında Claude kullandığını nasıl biliyorsunuz?

Team veya Enterprise plan + SSO ile bu izlenebilir. Bireysel Pro hesaplarda çalışanın plan seviyesini ve opt-in ayarını görmek güçtür — dolayısıyla kurumsal kullanım için Team önerilir.

### 4. Anthropic ile imzalı DPA'nız var mı?

Team ve Enterprise planlarında imzalayabilirsiniz. Yoksa KVKK kapsamında "veri işleyen" ilişkisi belgesizdir — denetimde risk.

### 5. Veri yurt dışına aktarılıyor mu? Hangi yetkili çerçevede?

Claude ABD kaynaklı (Anthropic San Francisco'da). Verileriniz işlenme sırasında ABD'ye gider. KVKK madde 9 kapsamında yurt dışı aktarım yetkinizin tanımlı olması gerekir — genellikle açık rıza veya bağlayıcı kurumsal kurallar (BKKR) ile.

### 6. Verilerin saklama süreleri nedir?

Plana göre değişir (yukarıdaki tabloya bakın). DPA'da bu süreler netleştirilir. Zero Data Retention (Enterprise) en sıkısıdır — işlem sonrası saklama yok.

### 7. Bir veri sahibi talebi geldiğinde (erişim, silme) Claude'daki veriye nasıl ulaşırsınız?

Bu soru zorludur. Claude tarafında "kullanıcı X hakkında ne var" diye spesifik sorgulama zordur. Pratik cevap: **hassas kişisel veri zaten Claude'a girmemeli** — böylece sorun doğmaz.

### 8. Bir güvenlik ihlali durumunda Anthropic sizi nasıl bilgilendirir?

Enterprise DPA'da ihlal bildirim süreleri tanımlıdır (genellikle 72 saat). Team planında standart ticari şartlar geçerli. Pro / Free bireysel şartlarda spesifik kurumsal ihlal bildirimi yoktur.

### 9. Çalışanların Claude kullanımı nasıl eğitiliyor?

Yapılandırılmış bir eğitim programı (örneğin Zamana retainer) bu soruya güçlü cevap verir. Gayri resmi öğrenme KVKK denetim karşısında zayıftır.

### 10. Claude kullanımının iç kontrol / denetim izi nerede?

Team / Enterprise yönetici panelleri kullanım izleri sunar. Ayrıca CLAUDE.md dosyaları, workspace klasörleri ve prompt kütüphaneleri — bunlar **şirket dokümantasyonudur** ve denetimde kanıt olarak sunulabilir.

## Adım Adım DPA İmzalama

Anthropic ile Data Processing Agreement imzalamanın pratik süreci:

### 1. Plan Seviyesini Belirleyin

DPA **Team ve Enterprise** planlarında mevcut. Pro / Free planda yok. Önce plan seçilmeli.

### 2. Anthropic İletişimini Başlatın

- **Team müşterileri:** Anthropic'in müşteri destek portalı üzerinden veya hesap yöneticinize e-posta atarak DPA talep edin
- **Enterprise müşterileri:** Satış temsilciniz standart olarak DPA'yı sunar

### 3. Standart DPA'yı İnceleyin

Anthropic'in **standart DPA şablonu** GDPR/KVKK uyumlu olarak hazırlanmıştır. Çoğu şirket için standart sürüm kabul edilebilir.

### 4. Şirket İçi Hukuki İnceleme

Şirketinizin hukuk departmanı veya dış hukuk büronuz DPA'yı incelemeli. Dikkat edilecek noktalar:

- Alt-işleyiciler listesi (Anthropic hangi üçüncü taraf hizmet sağlayıcıları kullanıyor?)
- Veri saklama süreleri
- İhlal bildirim süreleri ve yolları
- Yurt dışı aktarım dayanağı (Adequacy decision, SCCs, vb.)
- Denetim hakkı (audit rights)

### 5. Müzakere (Enterprise İçin)

Enterprise müşterileri standart dışı hükümler müzakere edebilir. Örneğin:

- Zero Data Retention tüm iş akışlarına uygulansın
- Belirli veri tiplerinin hiç işlenmemesi
- Özel denetim hakkı
- Saklama süresinin kısaltılması

Team müşterilerinde genelde standart DPA değişmez — ama her zaman sorabilirsiniz.

### 6. İmza ve Kayıt

- Her iki taraf imzalar (genellikle DocuSign veya benzeri e-imza platformu üzerinden)
- İmzalı kopyayı **KVKK dosyanıza** kaydedin
- VERBİS kaydınızda Claude'un kullanımını "işleme faaliyeti" olarak güncelleyin

### 7. İç Duyuru

DPA imzalandı — ekibe bildirin. Çalışanlar Claude'u kullanmaya devam ederken artık hukuki çerçeve nettir.

### Süreç Ne Kadar Sürer?

- **Team planı standart DPA:** 1-2 hafta
- **Enterprise müzakereli DPA:** 4-12 hafta (hukuk büroları bağımlı)

Zamana retainer müşterilerinde bu süreç eğitim programının ilk 2 haftasında paralel yürür.

## Sektörel Ek — Düzenlenmiş Sektörler İçin KVKK Üstü Yükümlülükler

KVKK tüm sektörler için geçerlidir. Ama bazı sektörlerde **ek düzenleyici yükümlülükler** vardır. Bu sektörlerde Claude kullanımı ek özen gerektirir.

### Finans Sektörü (BDDK, SPK, MASAK)

- **BDDK düzenlemeleri** — bankacılık verisinin işlenmesi için ek kısıtlar (bulut servislerinde veri konumu, erişim logları)
- **SPK (Sermaye Piyasası Kurulu)** — halka açık şirket veya aracı kurum çalışanlarında **insider bilgi koruması** kritik. Mali tablolar açıklanana kadar Claude'a verilmemeli.
- **MASAK (Mali Suçları Araştırma Kurulu)** — müşteri tanıma, şüpheli işlem kayıtları hassas. MASAK bildirilmesi gerekli bilgiyi Claude'a vermeyin.

**Pratik öneri:** Finans sektörü müşterileri için Enterprise plan + Zero Data Retention + sıkı iç politika. Bireysel Pro yeterli değil.

### Sağlık Sektörü (HKMS, KVKK özel nitelikli veri)

- **KVKK madde 6** — sağlık verisi **özel nitelikli kişisel veri**dir. İşlenmesi için açık rıza veya diğer hukuki sebep gerekir.
- **HKMS (Hekim Kayıt Merkezi Sistemi)** — hekimlerin kayıt ve bildirim yükümlülükleri.
- **Sağlık Bakanlığı Bulut Politikası** — hasta verisinin yurt dışı bulutlarda işlenmesi kısıtlı.

**Pratik öneri:** Hasta verisi **asla** Claude'a girilmemeli. Claude hastane iç iletişimi, eğitim materyali, literatür özetleme gibi **hasta verisi içermeyen** işler için kullanılabilir. Enterprise + DPA + sıkı veri hijyeni zorunludur.

### Eğitim Sektörü (MEB, YÖK)

- **MEB (Milli Eğitim Bakanlığı)** — öğrenci verisi özel koruma altında. Özel okullarda öğrenci dosyaları Claude'a verilmemeli.
- **YÖK (Yükseköğretim Kurulu)** — öğrenci ve akademisyen verileri için benzer ilkeler.

**Pratik öneri:** Eğitim kurumlarında Claude akademik materyal üretimi, ders planı, araştırma desteği için güçlüdür. Öğrenci kişisel verisinden uzak durun.

### Hukuk Sektörü (Barolar Birliği, avukat-müvekkil gizliliği)

- **Avukatlık Kanunu** — avukat-müvekkil iletişim gizliliği yasal olarak korunur.
- **Barolar Birliği mesleki kuralları** — müvekkil bilgilerinin dış sistemlerde işlenmesi etik açıdan kısıtlı.

**Pratik öneri:** Müvekkil adı, dava detayı Claude'a verilmemeli. Claude sözleşme taslağı, hukuki araştırma, iç memo için kullanılabilir — ama müvekkil kimlik bilgisi olmadan. Enterprise + Zero Data Retention düşünülmeli.

### Savunma ve Kritik Altyapı

- **Savunma Sanayii Başkanlığı (SSB)** — savunma projelerine dair bilgi kısıtlı.
- **Kritik altyapı (enerji, telekomünikasyon, su)** — siber güvenlik düzenlemeleri kapsamında.

**Pratik öneri:** Savunma ve kritik altyapı şirketlerinde Claude sadece **yönetsel işler** (raporlar, iletişim, eğitim materyali) için. Operasyonel hassas bilgi asla değil. Bu sektörlerde **yerel / on-premises LLM'ler** daha uygun olabilir.

### Kamuya Açık Şirketler (BIST)

- **Özel Durum Açıklamaları (KAP)** — halka açıklanmamış maddi bilgi **içeriden bilgi** tanımındadır.
- **Finansal açıklama süreçleri** — bilgi asimetrisi oluşturacak her kullanım kısıtlı.

**Pratik öneri:** Çeyreklik finansal sonuçlar açıklanmadan önce mali veri Claude'a verilmemeli. Açıklama sonrası Claude finansal anlatı üretiminde güçlü olur.

## Kurumsal Kontrol Listesi

Zamana eğitim programı başlamadan önce şirketinizin tamamlaması gerekenler:

- [ ] Tüm çalışanlar **Claude Max 5x** aboneliğine sahip (ilk ay zorunlu; ay 2+ Pro'ya indirme seçeneği)
- [ ] "Claude'u geliştirmeye yardım et" opt-in ayarı her çalışanda **kapalı** olarak ayarlandı
- [ ] Hangi veri kategorilerinin Claude'a girilebileceği yazılı politikada belirlendi
- [ ] 5+ çalışan varsa Team plana geçiş düşünüldü (SSO, merkezi yönetim, DPA)
- [ ] Hassas departmanlar (İK, hukuk, finans) için Enterprise değerlendirildi
- [ ] DPA imzalandı (Team / Enterprise müşterileri için)
- [ ] Şirketin DPO / KVKK sorumlusu bilgilendirildi
- [ ] IT Anthropic domain'lerini whitelist etti
- [ ] VPN Claude Desktop ile test edildi

## Özet

Claude, doğru planla ve doğru uygulamayla **Türkiye'de kurumsal olarak KVKK-uyumlu kullanılabilir**. Ancak bu otomatik değildir — şirketin bilinçli tercih ve prosedür oluşturması gerekir.

**Kilit üç hareket:**

1. **Team veya Enterprise plana geçin.** Pro/Free bireysel kullanım içindir — kurumsal veri için değildir.
2. **DPA imzalayın.** KVKK ve GDPR için hukuki omurga budur.
3. **Veri politikası belirleyin.** "Nerede Claude'a ne veririm" sorusu yazılı cevaplanmalı.

## İlgili Sayfalar

- [Claude Planları](planlar/) — Hangi plan hangi veri korumalarını sağlar
- [Claude'un Sınırları](sinirlamalar/) — Veri sınırlarının uygulama tarafı
- [Cowork Modu](../araclar/cowork-modu/) — Connector'ların güvenlik mimarisi
- [4D Çerçevesi](../prompting/4d-cercevesi/) — Diligence (Sorumluluk) boyutu

