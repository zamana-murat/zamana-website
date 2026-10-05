---
title: "Yaygın İtirazlar ve Cevapları: Bireysel ve Kurumsal"
description: "Claude'u kullanmaya başlarken yönetimden, IT'den, hukuktan ve çalışandan gelen tipik itirazlar ve dürüst cevapları."
tags:
  - temeller
  - itirazlar
lastUpdated: "2026-10-05"
---

Claude'u profesyonel hayatınıza getirirken karşılaşılan tipik itirazlar ve dürüst cevapları. Şirket içinde bir karar oturumundan önce, ya da kendi kendinize "değer mi, riski ne, başarabilir miyim" diye sorarken bu sayfa kaynak olabilir.

Bölümler paydaşa göre düzenlendi: yönetim, IT, hukuk, finans, IT güvenlik ve çalışanlar.

---

## Yönetim Kurulu / CEO'dan Gelen İtirazlar

### "Bu bir moda, geçer."

**Cevap:**

Yapay zeka bir moda değil, **üretkenlik altyapısının bir katmanı**. Nasıl 1995'te internet moda değildi, 2010'da bulut bilişim moda değildi. Claude veya bir rakibi (ChatGPT, Gemini) yıllarca var olmaya devam edecek. Soru "bu geçer mi?" değil, **"biz hangi tarafta olacağız, erken mi yoksa geç mi adapte edenler?"**

Erken adapte edenler zamanla birikmiş bir öğrenme avantajı kazanır. Saha gözlemimize göre Türkiye'deki orta ölçekli şirketlerin çoğu henüz sistematik başlamadı, **pencere şu an açık**.

### "Personelimiz zaten meşgul. Bir yazılıma zaman harcayamazlar."

**Cevap:**

Doğru tasarlanan bir Claude eğitiminde çalışanın **mevcut işleri üzerinde** çalışılır, hayali egzersizlerde değil. İlk oturumdan itibaren çalışan gerçek bir teklifi, gerçek bir raporu Claude'la üretir. 30 dakika eğitim, 30 dakika tasarruf.

İki hafta sonra çalışan **eğitim öncesi harcadığı zamanın fazlasını kazanmaya başlar**.

### "Bu yatırımın geri dönüşünü nasıl ölçeceğim?"

**Cevap:**

Üç somut metrik öneriyoruz:

1. **Çalışan başına haftalık zaman tasarrufu**: eğitim öncesi ve 3 ay sonrası karşılaştırma (saat bazında)
2. **Tekrar eden görevlerin kaçı otomatize oldu** (scheduled task sayısı)
3. **Çıktı kalitesi**: ekip liderlerinin subjektif değerlendirmesi

Örnek senaryo (bir garanti değil, kendi ölçümünüzle doğrulayın): çalışan başına haftada **8-15 saat** kazanım varsayalım. 6 çalışan × 10 saat = haftada 60 saat × aylık 4 hafta = **aylık 240 saat**. Ortalama çalışan maliyetinizle çarpın, yatırım geri dönüşü genelde ilk çeyrekte karşılanır.

### "Rakiplerimiz de kullanacak. Fark neresinde?"

**Cevap:**

Rakipler Claude'u **kullanacak**, şüphesiz. Fark **ne kadar iyi kullandığınızda**. "Claude var, deneyin" yaklaşımı yetmez, **ne zaman, ne için, nasıl kullanacağınızı** sistematik olarak öğrenmek gerekir.

Türkiye'de Claude'u stratejik öğrenerek kullanan şirket sayısı **düşük**. Tipik kullanım halen "ChatGPT'ye bir şey yazdır" seviyesinde. Derinlemesine iş akışı entegrasyonuyla şirketiniz bu farkı büyütür.

---

## IT Direktörü'nden Gelen İtirazlar

### "Verilerimiz yurt dışına gidiyor. KVKK açısından risk."

**Cevap:**

Doğru tespit. Kişisel veri girmiyorsanız risk küçüktür. Kişisel veri giriyorsanız yurt dışına aktarım olur ve KVKK m.9 uyarınca bir güvence gerekir: bugün yeterlilik kararı bulamadık, pratik yol Kurul'un standart sözleşmesidir (imzadan sonra 5 iş günü içinde Kurum'a bildirilir). Anthropic'in Türk standart sözleşmesini imzalayıp imzalamadığı belirsiz, yazılı sorulmalı. Ticari planlarda şunlar var:

- **DPA (Veri İşleme Sözleşmesi)** ticari şartlara otomatik dahildir: "veri işleyen" ilişkisini belgeler (AB standart sözleşme hükümlerini içerir, Türk standart sözleşmesini içermez)
- **Zero Data Retention** yalnızca API için: kuruluş başına talep edilen bir sözleşme düzenlemesidir, istem ve yanıtlar yanıt döndükten sonra depolanmaz
- **SSO ve yönetim kontrolleri**: Team'de SSO ve harcama tavanı; Enterprise'da ayrıca denetim günlüğü (audit log) ve Compliance API

Konuyu gerçekten kapsamlı ele almak için: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasındaki yurt dışı aktarım bölümünü ve **sektörel ek** bölümünü okuyun. Bu hukuki görüş değildir, hukuk danışmanınızla doğrulayın. KVKK müfettişinin sorabileceği 10 soru ve cevapları hazır.

### "Şirket verilerimiz AI eğitiminde kullanılır mı?"

**Cevap:**

Net cevap: **Team, Enterprise ve API'de hayır, varsayılan olarak eğitimde kullanılmaz** (ticari şartlarda böyle). Free, Pro ve Max planlarında bu, kullanıcının "Claude'u geliştirmeye yardım et" ayarına bağlıdır; varsayılanını resmi kaynaklar net yazmıyor, hesabınızda kontrol edin. Kurumsal kullanımda ayarın kapalı tutulması önerilir.

Yaygın yanlış anlaşılma: "AI'ya verilen her şey eğitimde kullanılır." Claude'un ticari planlarında bu **doğru değildir**. Rakiplerin kurumsal planları için kendi şartlarını ayrıca kontrol edin.

### "Mevcut sistemlerimizle nasıl entegre olacak?"

**Cevap:**

Üç seviye entegrasyon var:

1. **Hazır connector'lar**: Slack, Google Workspace, Microsoft 365, Salesforce, HubSpot ve resmi dizinde yaklaşık 900 connector. Tek tıkla, OAuth ile, IT müdahalesi minimum.
2. **API'si olmayan eski sistemler**: [Computer Use](/wiki/yetenekler/computer-use/) ile Claude ekrandan kullanabilir (Logo, Netsis, eski ERP'ler için). Dikkat: Computer Use research preview aşamasında ve yalnızca Pro ve Max planlarında, masaüstü uygulamasında çalışıyor; Team ve Enterprise'ta yok. Kritik üretim süreçlerinde tek dayanak yapmayın.
3. **Özel şirket içi sistemler**: MCP protokolü açık standarttır, IT ekibiniz veya entegrasyon ortağınız özel connector yazabilir.

Türkiye'deki orta ölçekli şirketlerin çoğu için birinci seviye yeterli.

### "Başka bir yazılımı öğrenmek için zaman yok."

**Cevap:**

Claude bir "yazılım" değil, **konuşma arayüzü**. Menü yok, karmaşık ayar yok. Türkçe konuşursunuz, Claude cevap verir. Eğitim eğrisi **Excel'den çok daha düşük**.

Doğru rehberlikle çalışanın **birinci oturum sonunda** gerçek bir iş çıktısı üretmesi mümkündür. İki hafta sonra çalışan Claude'u doğal refleksle kullanıyor olur.

---

## Hukuk Müşaviri'nden Gelen İtirazlar

### "Çalışan Claude'a bir şey anlatırken gizlilik ihlali yaparsa?"

**Cevap:**

Gerçek bir risk ve eğitim programının kritik bir parçası. Çözüm **üç katmanlı**:

1. **Plan seçimi**: Team/Enterprise varsayılan olarak eğitim kullanımı yok
2. **DPA kapsamı**: işleyen ilişkisi sözleşmeyle belgelenir (yurt dışı aktarım güvencesi ayrıca ele alınır, bkz. yukarıdaki IT cevabı)
3. **Çalışan eğitimi**: "Hangi veri kategorisi Claude'a girilebilir, hangisi giremez" yazılı politika

Claude'a "müvekkil adı + dava detayı" girmek **hukuk bürosu için hata** olur. Bunu çalışana hem eğitimde hem CLAUDE.md'de kuralla yazmış olursunuz.

Detay: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/), sektörel ek bölümü avukatlar için özel.

### "Claude'un ürettiği bir hukuki metinde hata olursa kim sorumlu?"

**Cevap:**

**Ehliyetli profesyonel.** Bu pazarlık dışı bir kuraldır, [4D Çerçevesi](/wiki/prompting/4d-cercevesi/)'nin D4 (Diligence, Sorumluluk) boyutunda yazılıdır.

Claude hukuki metinler için **süper hızlı ilk-taslak yazıcıdır**. Avukat her kelimeyi inceler, imzasını atar, sorumluluğu üstlenir. Bu "Claude kullanıyoruz o zaman iş rahat" değil, "Claude sayesinde avukat saatlerini yazım yerine yargı ve değerlendirmeye ayırıyor" demektir.

Detay: [Claude'un Sınırları](/wiki/temeller/sinirlamalar/).

### "Bir müfettiş 'Claude'u kullanıyor musunuz' diye sorarsa ne cevap vereceğiz?"

**Cevap:**

"Evet, kullanıyoruz. Şu plan seviyesinde (Team/Enterprise), şu DPA kapsamında, şu veri politikamıza göre, şu kategorilerde, VERBİS'te kayıtlı." Bu cevabı verebilmek için önceden hazırlık gerekir.

Müfettişin sorabileceği 10 standart soru ve cevapları: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

---

## Finans Direktörü'nden Gelen İtirazlar

### "Bu kadar abonelik + eğitim = toplam maliyet çok yüksek."

**Cevap:**

3 aylık abonelik hesabı (6 çalışan):

- İlk ay: 6 Claude **Max 5x** aboneliği × $100 = **$600**
- Ay 2-3: Kullanıma göre karma yapı (tipik ~2 Max 5x + ~4 Pro aylık $280; 3 Max 5x + 3 Pro aylık $360) × 2 ay ≈ **$560-720**
- Toplam abonelik (3 ay): **~$1.160-1.320**

**"Neden Pro değil, Max 5x?"** Yeni kullanıcı ilk ayda agresif keşfeder, connector kurar, skill dener, saatlerce oturur. Pro limiti birkaç saatlik yoğun kullanımda dolar, "çalışmıyor" yanlış algısı vazgeçirir. Max 5x bu ilk ay kritiktir; sonra hafif kullananlar Pro'ya iner.

Karşılığında:

- Çalışan başına haftada 10 saat tasarruf × 6 çalışan × 12 hafta = **720 saat**
- Ortalama çalışan maliyeti 300 TL/saat = **216.000 TL kazanım**

Çalışan yeterliliği **kalıcı**, bir yıl sonra Claude aboneliği devam ederse kazanç birikir.

### "Rakamlar iyimser. Gerçek ROI ne olur?"

**Cevap:**

En kötü senaryo tahminini yapalım:

- Çalışanlardan 2 tanesi programa gerçekten dahil olmazsa (direnç, meşguliyet)
- Kalan 4 çalışan haftada 5 saat (yarı tahmin) kazanırsa
- 4 × 5 × 12 hafta = 240 saat × 300 TL = **72.000 TL**

Bu senaryoda bile **abonelik maliyeti karşılanır** ve öğrenilen bilgi şirkette kalır.

**Gerçekçi orta senaryoda** (6 çalışan × 8 saat/hafta × 12 hafta × 300 TL = 172.800 TL) yatırım geri dönüşü birinci çeyreğin sonunda sağlanır.

### "Bu paraya başka şeyler yapabiliriz."

**Cevap:**

Doğru. Fırsat maliyeti gerçek. Karşılaştırma için:

- Bir kurumsal yazılımın yıllık lisans ücreti (çoğu ERP, CRM) çoğu zaman bu tür eğitim yatırımının **katlarca** üstünde olur ve çoğu çalışanın iş akışını dönüştürmez
- Orta ölçekli bir Google Ads kampanyası bütçesi 2-3 ay içinde tükenir ve kalıcı bilgi bırakmaz

AI yetkinliği eğitimi **kalıcı yeterlilik** yaratır. Reklam kampanyası bittiğinde tüm yatırım gider; eğitimle öğrendikleri çalışanda kalır.

---

## IT / Güvenlik Ekibi'nden Gelen İtirazlar

### "Claude Desktop şirket bilgisayarlarına ne kurabilir?"

**Cevap:**

Claude Desktop standart bir uygulama, özel yetki istemez, arka planda izleme yapmaz, şirket dosyalarınıza rıza olmadan erişmez. Cowork'te **sadece bağlanan workspace klasörünü** görür. Diğer disk, diğer klasör, erişilmez.

Kod çalıştırma **izole sanal makinede** yapılır, işletim sisteminizden ayrıdır.

### "Claude'u şirket ağına bağlamak güvenli mi?"

**Cevap:**

Claude bulut tabanlıdır, trafik HTTPS üzerinden Anthropic'in sunucularına gider. IT için gereksinimler:

- `claude.ai`, `anthropic.com` ve Claude Desktop backend domain'leri whitelist
- VPN uyumluluk testi

Yerel ağınızda Claude "yayın yapmaz." Dış bağlantı kurumsal internetle aynı güvenlik katmanından geçer.

### "Personel yanlışlıkla kritik veriyi paylaşırsa?"

**Cevap:**

İnsan hatası hep olası. Üç koruma:

1. **Eğitim**: çalışan hangi veriyi nereye girebilir bilir
2. **Plan seçimi**: Team/Enterprise verinin zaten eğitimde kullanılmamasını sağlar
3. **Gerektiğinde Zero Data Retention**: API kullanımında satış ekibiyle talep edilir, yanıt sonrası depolama olmaz

Herkesin kabul etmesi gereken: "güvenlik mutlak değildir, risk yönetilir." Doğru bir kurulum bu riski düşürür ama sıfırlamaz. Riski kabul edilemez görüyorsanız yerel LLM (Llama, Mistral) alternatifi düşünülmeli.

---

## Çalışanlardan Gelen İtirazlar

### "Beni işsiz bırakacak."

**Cevap:**

Bu samimi bir korku, ciddiye almalıyız. Dürüst cevap: hiçbir araç iş güvencesi veremez, bu şirketin kararıdır. Sahada gördüğümüz ise şu:

Claude **rutin işleri** ortadan kaldırıyor; raporlama, e-posta yazımı ve tekrar eden teklifler gibi. Bu işleri yapmak için zaten çalışan tutulmuyor: yöneticisine e-posta yazan biri "e-posta yazarı" değildir.

Rutin ortadan kalktıkça çalışanın **yüksek değer işlere** zamanı açılır: müşteri ilişkileri, karmaşık karar alma, yaratıcı çalışma. **Bu işleri Claude yapamaz**, çünkü insan yargısı ve ilişki gerekir.

Tarihsel paralel: bilgisayarlar sekreterleri işsiz bırakmadı, sekreterleri **proje yöneticilerine** dönüştürdü.

### "Teknolojiden anlamıyorum."

**Cevap:**

Claude'un büyük avantajı **konuşma arayüzü**. Türkçe konuşursunuz, Türkçe cevap alırsınız. Kod yok, karmaşık menü yok, teknik jargon yok.

Pratikte **60 yaşındaki muhasebe müdürü** de **28 yaşındaki pazarlama uzmanı** da aynı hızla öğrenebiliyor. Fark: kim daha **dürüst** iş problemini anlatır.

### "Çok fazla yapay zeka aracı var, hangisi kalıcı olacak bilmiyorum."

**Cevap:**

Gerçek ve meşru soru. Cevabımız:

Öğrendiğiniz beceriler **modele özel değil**:

- **Prompting disiplini**: 4D çerçevesi Claude'a da ChatGPT'ye de Gemini'ye de uygulanır
- **CLAUDE.md benzeri yaklaşım**: ChatGPT'nin Memory, Gemini'nin kişisel bağlam özellikleri gibi karşılıkları var
- **İş akışı tasarımı**: hangi işin insan, hangi işin AI olduğuna karar vermek

Öğreniyor olacağınız şey **düşünme biçimi**. Model değişse de beceri yaşar.

Bizim değerlendirmemizde Claude kurumsal kullanımda en olgun seçeneklerden biri; başka bir model daha iyi olduğunda da çerçeve aynı kalır.

### "Patronum bir sürü yazılım öğrenmemi istedi, sonuna kadar götüremedik."

**Cevap:**

Haklı endişe. Başarılı bir Claude adaptasyonu için tasarım kuralları:

- Eğitim grubunu sınırlı tutun (bir kerede aşırı yaygınlaştırmayın)
- Her çalışan için **özel eğitim** (toplu lansman değil)
- Eğitim sonrası destek (ilk ay sonrası "yalnız bırakılma" hissi olmasın)
- **Her çalışan kendi gerçek işinde** kullanır (hayali kurs değil)

Bu tasarım benimsenmediğinde teknoloji adaptasyonu büyük olasılıkla sönümlenir.

---

## Bu Sayfayı Nasıl Kullanırsınız?

Şirket içi Claude savunucusuysanız:

1. Yapılacak toplantıdan önce ilgili bölümü açın
2. Hangi itirazı bekliyorsanız cevabını okuyun
3. Kendi bağlamınıza uyarlayın, genel cevap değil "bizim şirkette" versiyonu

## İlgili Sayfalar

- [Sık Sorulan Sorular](/wiki/temeller/sss/): Daha genel sorular
- [Claude Planları](/wiki/temeller/planlar/): Maliyet ve ROI detayı
- [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/): Muhasebe ve vergi tarafı
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Hukuki/güvenlik itirazlarının derinliği
- [Claude'un Sınırları](/wiki/temeller/sinirlamalar/): Ne yapamaz dürüstçe
- [4D Çerçevesi](/wiki/prompting/4d-cercevesi/): D4 Diligence, sorumluluk

