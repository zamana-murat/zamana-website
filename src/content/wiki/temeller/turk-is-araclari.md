---
title: "Türk İş Araçlarıyla Claude: Logo, Mikro, Paraşüt, e-Fatura, KEP, Excel"
seoTitle: "Claude ile Logo, Mikro, Paraşüt ve e-Fatura Kullanımı: Ne Yapılır?"
description: "Logo, Mikro, Paraşüt, e-Fatura, KEP, banka ekstresi ve Excel ile Claude nasıl çalışır? Resmi connector durumu, dışa aktarım yolu, Cowork, computer use riski ve özel bağlantı."
tags:
  - temeller
  - muhasebe
  - e-fatura
  - excel
  - kobi
lastUpdated: "2026-10-06"
---

**Kısa cevap: Logo, Mikro ve Paraşüt için Claude'un resmi bir connector'ı yok.** Yani Claude'u bu programlara tek tıkla bağlayamazsınız. Ama bu, Claude'un muhasebe ve fatura işlerinde işe yaramadığı anlamına gelmez: en pratik yol, programdan **dışa aktardığınız dosyayı** Claude'a vermek. Bu sayfa hangi işin hangi yolla yapıldığını, teknik bilgi gerektirmeyen dille anlatır.

Küçük işletme sahibiyseniz önce [KOBİ için Claude](/wiki/departmanlar/kobi/) sayfasına, sonra buraya bakın.

## Resmi connector durumu

Connector, Claude'un bir programa doğrudan bağlanıp veri okumasını (bazen yazmasını) sağlayan hazır bağlantıdır. Kısaca nedir, [Connectors](/wiki/araclar/connectors/) sayfasında.

| Araç | Resmi Claude connector'ı | Not |
|---|---|---|
| Paraşüt | Yok | Paraşüt'ün kendi REST API'si var; özel bağlantı kurulabilir (teknik ekip gerekir) |
| Logo (Tiger, Go ve diğerleri) | Yok | API ve entegrasyon seçenekleri ürüne göre değişir; yazılım sağlayıcınıza sorun |
| Mikro | Yok | Aynı |
| Netsis | Yok | Wiki'deki [Popüler MCP'ler](/wiki/mcp/populer-mcpler/) sayfasında da aynı durum yazılı |
| e-Fatura / e-Arşiv entegratörleri | Bildiğimiz kadarıyla yok | Hazır connector varsaymayın; kendiniz dizinde arayın |
| KEP | Bildiğimiz kadarıyla yok | Aynı |
| Türk bankaları | Bildiğimiz kadarıyla yok | Aynı |

Bu tablo **Ekim 2026** itibarıyladır ve resmi dizin (yaklaşık 900 connector) ile arama sonuçlarına dayanır. Durum değişebilir: karar vermeden önce [claude.com/connectors](https://claude.com/connectors) dizininde ürün adını arayın. Dizinde görünmeyen şey için "özel connector" yolu vardır, ama bu sizin sorumluluğunuzdaki bir kurulumdur (aşağıya bakın). Genel resmi connector listesi için [Bağlantı Listesi](/wiki/mcp/baglanti-listesi/) sayfasına bakın.

## En pratik yol: dışa aktar, Claude'a yükle

Bu yöntem hiçbir kurulum gerektirmez ve bugün işe yarar. Muhasebe programınız zaten Excel, CSV ya da PDF çıktısı verir. O dosyayı Claude'a yükler, ne istediğinizi yazarsınız.

| Veri | Programdan ne alırsınız | Claude'a ne yaptırırsınız | Dikkat |
|---|---|---|---|
| Cari hesap ekstresi | Müşteri/tedarikçi ekstresi (Excel ya da PDF) | Vadesi geçenleri listelemek, tahsilat hatırlatma metni yazmak, iki tarafın ekstresini karşılaştırmak | Hatırlatmayı göndermeden önce siz okuyun |
| Aylık KDV listesi ve mizan | Alış/satış faturası listesi, mizan (Excel) | Tutmayan satırları işaretlemek, beklenmedik yükselmeleri bulmak, özet yazmak | Beyan ve hesap Claude'un değil muhasebecinizin sorumluluğunda |
| e-Fatura / e-Arşiv | Gelen ve giden fatura listesi (Excel), tek tek fatura (PDF) | Faturaları kategorilere ayırmak, aynı faturanın iki kere girilip girilmediğine bakmak | Büyük XML dosyaları yerine liste hâlini deneyin; önce 10-20 satırla test edin |
| Banka ekstresi | Excel, CSV ya da PDF ekstre | Harcamaları gruplamak, cari ekstreyle eşleştirmek, nakit akışı özeti çıkarmak | IBAN ve hesap numarasını silmek iyi bir alışkanlık |
| Stok ve satış raporu | Stok hareketi, satış raporu (Excel) | Çok satanı ve yavaş dönenleri bulmak, sipariş önerisi hazırlamak | Öneri karar değil, taslaktır |
| KEP yazışmaları | Kendi hazırladığınız metin | İhtar, itiraz, yanıt metni taslağı, sade dile çevirme | Gönderim KEP üzerinden **sizin** elinizle; Claude göndermez |

Sohbette dosya başına 500 MB ve sohbet başına en çok 20 dosya yükleyebilirsiniz; PDF için üst sınır 1000 sayfadır (yaklaşık 100 sayfaya kadar PDF hem metin hem görsel olarak okunur, daha uzunlarda yalnız metin). Çok büyük dosyada işi parçalayın: "yalnız bu ayın faturaları" gibi. Ayrıntı [Dosya İşleme](/wiki/yetenekler/file-handling/) sayfasında.

### Türkçe sayı ve tarih tuzağı

Türkçe programların çıktısında sayı `1.234,56` biçimindedir (nokta binlik, virgül ondalık); İngilizce yazılımlarda ise tersidir. Tarihler de `05.10.2026` ya da `10/05/2026` gibi farklı okunabilir. Claude çoğu zaman doğru anlar, ama **ilk işte bunu kendisine söyletin:** "Bu dosyadaki sayı ve tarih biçimini nasıl okuduğunu ilk üç satır üzerinde göster." Toplam tutarlar çıktıdaki toplamla uyuşuyorsa devam edin.

## Excel ile Claude

Excel, muhasebe ile Claude'un buluştuğu yerdir. Üç yol var:

1. **Dosyayı yüklemek.** Excel dosyasını sohbete atarsınız, Claude içeriği okur, [kod çalıştırma](/wiki/yetenekler/code-execution/) ile toplama, süzme ve grafik yapabilir ve sonucu yeni bir Excel dosyası olarak verir. En kolay yol bu.
2. **Excel'in içindeki eklenti.** Claude'un Microsoft 365 için Excel eklentisi genel kullanıma açıktır (ücretli planlarda, Pro, Max, Team ve Enterprise); dosyanın içinde çalışır, formül ve tablo önerir. Ayrıntı [Office ve Chrome](/wiki/araclar/office-ve-chrome/) sayfasında. Eklenti için Microsoft 365 aboneliğiniz olması gerekir; kurulumdan önce Excel sürümünüzün destekleyip desteklemediğini kontrol edin.
3. **Google E-Tablolar.** Google Workspace connector'ı Docs, Sheets ve Slides dosyalarını okuyup yazabilir.

İyi çalışan örnekler: farklı bölgelerden gelen Excel'leri tek tabloda birleştirmek, bütçe sapmasını işaretlemek, ay sonunda tutmayan satırları listelemek. Zayıf kalan yer: **gizli sayfalar, birleştirilmiş hücreler ve elle eklenmiş renkli notlar.** Dosyayı temizleyip verin.

## Cowork ile klasör üzerinden çalışmak

[Cowork](/wiki/araclar/cowork-modu/), Claude Desktop içinde bilgisayarınızdaki bir klasörde çok adımlı iş yapar. Muhasebe için pratik kullanımı:

1. Bilgisayarınızda bir klasör açın, adı "Ay Sonu Ekim" olsun.
2. Cari ekstreleri, banka ekstresini ve fatura listesini bu klasöre **dışa aktararak** koyun.
3. Cowork'e klasörü verin ve "bu dosyalardan ay sonu mutabakat raporu çıkar, tutmayanları ayrı listele" deyin.
4. Rapor klasörde yeni bir Excel ya da belge olarak çıkar; siz kontrol edersiniz.

**Klasöre yalnız o işin dosyalarını koyun.** Cowork klasördeki dosyaları okur ve değiştirebilir; bu yüzden ana muhasebe arşivinizi değil, bu işe ayrılmış bir kopya klasörü açın. Cowork masaüstünde tüm ücretli planlarda var; Enterprise'ta yönetici etkinleştirmesi gerekebilir.

## Claude'un Logo ekranını kullanması (computer use) ve risk

Bazı eski programların API'si ya da dışa aktarım seçeneği zayıftır. Bu durumda [Computer Use](/wiki/yetenekler/computer-use/) özelliği, Claude'un ekranı görüp fare ve klavyeyle programı kullanmasına izin verir. Mümkün ama **dikkatli kullanılması gereken** bir yoldur:

- Özellik **research preview** aşamasındadır, yani denemelik; üretimde tek dayanak yapılmamalıdır.
- Yalnızca **Pro ve Max** planlarında ve masaüstü uygulamasında (Cowork ve Claude Code içinde) çalışır; **Team ve Enterprise'ta yok**, web sohbetinde de yok.
- Claude yanlış alana tıklayabilir, yanlış kaydı seçebilir. Muhasebe programında bir hatalı kayıt, geri alması en zahmetli hatadır.
- Ekranda ne varsa Claude onu görür: açık duran müşteri listesi, maaş ekranı dahil.

**Kural:** Computer use'u yalnız **okuma ve rapor alma** için düşünün (raporu açıp dışa aktarmak gibi), **kayıt girişi, fatura kesme, ödeme ve beyan için kullanmayın.** Önce deneme firması ya da test kopyasında deneyin. Çoğu işte, programdan bir kez rapor alıp dosyayı yüklemek hem daha güvenli hem daha hızlıdır.

## Özel bağlantı (MCP ya da API): ne zaman, kim yapar?

Programınızın bir API'si varsa (Paraşüt'ünki var), bir yazılımcı Claude için **özel bir connector** yazabilir. Bu, Claude'un doğrudan "geçen ayın satış faturalarını çek" demesini sağlar. Bunun için [MCP](/wiki/mcp/) denen bağlantı standardı kullanılır; ne olduğu [MCP Nedir](/wiki/mcp/nedir/) sayfasında, kurulum yolu [Kurulum Rehberi](/wiki/mcp/kurulum-rehberi/) sayfasında.

Bilmeniz gereken şeyler:

- **Teknik ekip gerekir.** Kendi başına kurabilecek bir muhasebeci ya da işletme sahibi için bu iş fazla. Bir yazılımcı ya da bilgi işlem ekibi gerekir.
- **Sorumluluk sizin.** Resmi bir connector değil; yazan ve bakımını yapan sizsiniz.
- **Salt okunur başlayın.** İlk sürümde Claude yalnızca veri okusun; kayıt yazma, fatura onaylama gibi yetkiler olmasın. Ayrı bir kullanıcı ve en düşük yetki tanımlayın.
- **Hazır "topluluk" connector'larına dikkat.** İnternette bulunan, kimin yazdığı belirsiz connector'lar muhasebe verinize erişir. Kurmadan önce [MCP Güvenlik](/wiki/mcp/guvenlik/) sayfasındaki kontrolleri okuyun.
- **Önce ihtiyacı sorun.** Ayda bir kez rapor alınıyorsa özel connector'a gerek yoktur; günde birkaç kez canlı veri gerekiyorsa değer.

## Karar rehberi

| Durumunuz | Önerilen yol |
|---|---|
| Ayda birkaç kez rapor/mutabakat | Dışa aktar, Claude'a yükle |
| Her ay aynı raporlar tekrarlanıyor | Dışa aktar + Cowork klasörü, prompt'u [skill](/wiki/yetenekler/skills/) ya da proje talimatı olarak kaydet |
| Veriniz zaten Excel'de | Excel eklentisi ya da dosya yükleme |
| Programın API'si var, günlük canlı veri lazım | Özel connector (teknik ekiple) |
| Programın dışa aktarımı yok, API de yok | Önce yazılım sağlayıcısına sorun; son çare computer use, yalnız okuma için |
| Resmi yazışma (KEP, ihtar) | Claude taslak yazar, gönderim sizde |

## Gizlilik ve kontrol

- **Kişisel veri.** Bordro, TC kimlik numarası, IBAN, müşteri telefonu içeren dosyaları yüklemeden önce gereksiz sütunları silin ya da maskeleyin. Team ve Enterprise'ta girdiler varsayılan olarak eğitimde kullanılmaz; Free, Pro ve Max'te bu bir kullanıcı ayarıdır, kendiniz kontrol edin. Ayrıntı [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasında.
- **Resmi çıktı.** Claude'un hazırladığı e-Fatura benzeri bir belge ya da beyanname taslağı hukuki geçerlilik taşımaz. Resmî çıktıyı her zaman muhasebe programınız ve entegratörünüz üretir.
- **Sayıları doğrulayın.** Claude toplamları bazen yanlış yapar ya da satırı atlar. Kontrol yöntemi basit: raporun toplamını programdaki toplamla karşılaştırın. [Sınırlamalar](/wiki/temeller/sinirlamalar/) sayfası bu riski anlatır.
- **Vergi ve hukuk kararı.** Claude yorum ve taslak hazırlar; beyan, vergi planlaması ve hukuki karar mali müşavirinizin ve avukatınızın işidir.

## Küçük bir iş akışı örneği: ay sonu mutabakat

1. Programdan ay sonu cari ekstreleri ve banka ekstresini Excel olarak alın.
2. Hepsini bir Cowork klasörüne koyun (ya da sohbete yükleyin).
3. Claude'a söyleyin: "Önce sayı ve tarih biçimini nasıl okuduğunu üç satırda göster. Sonra banka girişlerini cari ekstredeki ödemelerle eşleştir, eşleşmeyenleri ayrı sayfada listele."
4. Eşleşmeyenleri siz kontrol edin; çoğu tarih farkı ya da tek seferde yapılan toplu ödemedir.
5. Sonuç tutarsa raporu muhasebecinize iletin.

Kazancın ne kadar olduğu işletmeye göre çok değişir; kendi sürenizi bir ay boyunca [ölçün](/wiki/temeller/olcum-metrikleri/) ve sonucu [ROI Hesaplayıcı](/wiki/temeller/roi-hesaplayici/) sayfasındaki formüle koyun.

## Sık sorulan sorular

**Logo ya da Mikro'dan doğrudan veri çekebilir miyim?** Resmi connector yok. Dışa aktarımla ya da özel bağlantıyla yapılır (yukarıda).

**e-Fatura'yı Claude kesebilir mi?** Hayır. Fatura kesmek entegratörünüzün ve muhasebe programınızın işidir. Claude fatura listelerini okur, analiz eder, taslak metin yazar.

**KEP'e Claude bağlanabilir mi?** Bildiğimiz kadarıyla hazır bağlantı yok. Metni Claude yazar, gönderimi siz yaparsınız.

**Bu iş için hangi plan?** Kullanım yoğunluğuna göre Pro ya da Max; hangisinin yettiğini ilk aylarda kullanımınız gösterir. Yeni başlayanlara ilk ay Max 5x öneriyoruz (zorunlu değil). [Planlar](/wiki/temeller/planlar/) sayfasına bakın.

## İlgili sayfalar

- [MCP: Genel Bakış](/wiki/mcp/): özel bağlantıların mantığı
- [Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): resmi connector'lar
- [Popüler MCP'ler](/wiki/mcp/populer-mcpler/): yerli sistemlerin durumu
- [KOBİ için Claude](/wiki/departmanlar/kobi/): küçük işletme sahibi senaryosu
- [Finans Departmanı](/wiki/departmanlar/finans/): finans ekipleri için iş akışları
- [Cowork Modu](/wiki/araclar/cowork-modu/): klasör üzerinden çalışma
- [Computer Use](/wiki/yetenekler/computer-use/): ekrandan program kullanımı ve riskleri
- [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/): Claude aboneliğinin kendi faturası
- [Claude Connectors](/claude/connectors/): connector'ların ürün tanıtımı
