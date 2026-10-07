---
title: Sohbet Geçmişi, Arama ve Dışa Aktarma
seoTitle: "Claude Sohbet Geçmişi: Arama, Silme ve Dışa Aktarma"
description: "Claude'da sohbet geçmişi nasıl aranır, silinir, dışa aktarılır? Projects ile düzen, hafıza, Team'e geçişte neler taşınır, günlük disiplin."
tags:
  - araclar
  - gecmis
  - arama
  - export
lastUpdated: "2026-10-06"
---

**Claude'u haftalarca aktif kullanan biri için, sohbet geçmişi hızla bir bilgi arşivine dönüşür.** Onu yönetmemek, geçmişte değerli üretimleri kaybetmek demektir.

Bu sayfa Claude'un geçmiş yönetim özelliklerini, arama mantığını ve günlük disiplini anlatır.

## Sohbet Geçmişi Nasıl Saklanır?

Claude'da yaptığınız her sohbet otomatik olarak hesabınıza bağlı kalır. Sol panelde tarihe göre sıralı görürsünüz. Bir sohbete tıklayın → tam metniyle açılır, oradan devam edebilirsiniz.

**Saklama yeri:** Anthropic'in sunucularında, hesabınızla ilişkili olarak. KVKK boyutu için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasına bakın.

**Saklama süresi:** Hesabınızda görünen geçmiş siz silmedikçe kalır. Anthropic tarafındaki saklama ise plana göre değişir. Bireysel hesaplarda (Free, Pro, Max) "Help improve Claude" ayarına bağlıdır: Anthropic'in duyurusuna göre modelin eğitimine izin verirseniz 5 yıl, vermezseniz 30 gün. Ayarın varsayılan durumu birincil kaynakta net yazmıyor, bu yüzden Privacy Settings'ten kendiniz kontrol edin. Team ve Enterprise'ta girdi ve çıktılar varsayılan olarak eğitimde kullanılmaz; yöneticinin tanımladığı saklama politikası geçerli olabilir.

## Arama Yapma

claude.ai üst kısmında arama kutusu var. Buradan **tüm sohbet başlıklarınızda ve içeriklerinde** arama yaparsınız.

Arama özellikleri:

- Anahtar kelime (Türkçe ve İngilizce)
- Tarih aralığı filtresi (bazı sürümlerde)
- [Projects](/wiki/araclar/projects/) içinde sınırlama (proje seçtiğinizde sadece o proje sohbetlerinde arama)

**Pratik tavsiyeler:**

- **Sohbete açıklayıcı isim verin.** Claude varsayılan başlık verir ama elle yeniden adlandırabilirsiniz. "İK politika revizyonu, Mart 2026" gibi isimler arama sonucunda altın değerinde.
- **İlk mesajda anahtar kelime bırakın.** Başlangıçta "konu: ihracat sözleşme şablonu" gibi bir cümle yazmak, sohbeti sonradan bulmanızı kolaylaştırır.
- **Tarih disiplini.** Tarih içeren projelerde "2026-Q2" gibi etiketleri konuşmanın bir yerine yazın.

## Klasörleme: Projects ile

Claude'da geleneksel klasör sistemi yok; **organize etmenin yolu [Projects](/wiki/araclar/projects/) kullanmaktır.** Bir proje açarsınız (örn. "Ege Tekstil Müşterisi"), o projeyle ilgili tüm sohbetleri o projenin içinde tutarsınız.

Faydaları:

- Proje içi sohbetler ayrı arşivde
- Projeye özel talimatlar (proje talimatları)
- Projeye yüklediğiniz dosyalar tüm sohbetlerde erişilebilir
- Arama proje bazlı daraltılabilir

[Projects](/wiki/araclar/projects/) sayfası ayrıntıyı verir.

## Silme

Bir sohbeti silmek isterseniz: sohbetin yan menüsündeki **Delete** seçeneği. Anında silinir, geri dönüş yok.

**Toplu silme:** Tek tek silmek dışında, hesap genelinde silme için **Settings → Privacy** menüsündeki "Delete all chats" seçeneği vardır.

**Saklama dengesini kurun:**

- Hassas içerik (kişisel veri, müşteri sırrı) → işiniz biter bitmez sil
- Değerli üretim (kaliteli prompt, faydalı çıktı) → silmeyin, [Projects](/wiki/araclar/projects/)'e taşıyın

[Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/) sayfasında saklama politikası şablonu var.

## Dışa Aktarma (Export)

Claude verilerinizin tamamını indirebilmenizi sağlar. Kendi verilerinize erişmenin pratik yolu budur. Hukuki tarafta, kişisel verilerinize ilişkin bilgi talep hakkı KVKK m.11 kapsamındadır; ayrıntı için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).

**Nasıl yapılır:**

1. **Settings → Privacy** menüsüne girin
2. "Export your data" seçeneğini bulun
3. Talep edin → birkaç dakika ile saatler arasında size e-posta ile indirme linki gelir
4. Genelde JSON formatında, sohbet metinleri + meta veriler

**Pratik kullanımlar:**

- Yıllık arşiv yedeği
- Şirketten ayrılırken (eğer sohbetler kişisel hesaptaysa) kişisel arşiv
- Şirkete sözleşme/denetim için sunulacak bir veri raporu

### Hafızayı içe ve dışa aktarma

Sohbet geçmişinden ayrı olarak Claude'un **hafızası** da vardır. Hafıza içe ve dışa aktarma 2 Mart 2026'dan beri Free dahil tüm planlarda sunuluyor; ayar **Settings → Memory** altında ("Generate memory from chats"). Başka bir yapay zekâ aracındaki tercihlerinizi Claude'a taşımak ya da Claude'daki hafızanızı yedeklemek için bu yolu kullanın. Team ve Enterprise'ta hafıza yönetici kontrolündedir. Hafızanın işleyişi için [Memory](/wiki/yetenekler/memory/).

## Sık Sorulan Sorular

**Claude geçmiş sohbetlerimi arayıp kullanabilir mi?** Evet, Claude'un sohbet arama özelliği geçmiş konuşmalarınıza başvurup önceki bağlamdan yararlanabilir; Anthropic bunu hafıza özelliğiyle birlikte anlatıyor. Kapsamı planınıza ve ayarlarınıza göre değişebilir, kendi hesabınızda "geçen ay X için ne konuşmuştuk?" diye sorup deneyin. Bu, yukarıdaki arama kutusundan ayrıdır: arama kutusunda siz ararsınız, sohbet aramada Claude arar.

**Kişisel hesabımı Team'e geçirirsem sohbetlerim taşınır mı?** Hesabı yerinde yükseltirseniz sohbetler, artifact'ler, projeler (Cowork dahil), dosyalar, hafıza (kuruluş kapatmadıysa) ve tercihler taşınır. Taşınmayanlar: özel skill'ler, uygulama yetkilendirmeleri, özel connector'lar, yayınlanmış artifact'ler, halka açık paylaşım linkleri ve yerel Cowork/Claude Code oturumları. "Kişisel hesabımı ayrı tut" seçeneğini seçerseniz eski sohbetler kişisel hesapta kalır. Ekip tarafı için [Takım ve Admin](/wiki/temeller/takim-ve-admin/).

## Paylaşım

Bir sohbete *Share* butonu ile **public link** üretebilirsiniz. Linke ulaşan herkes konuşmayı okur (ama devam ettiremez, kendi hesabına kopyalar).

**Risk:** Paylaşım yaparken sohbet içinde **müşteri verisi, fiyat bilgisi, hassas iç tartışma** olmadığından emin olun. Bir kez link oluşturulduktan sonra Anthropic dışında biri o linki kaydetmiş olabilir.

**İyi kullanım:** eğitim örneği, basın için demo, kamuya açık bir analiz paylaşımı.

## Günlük Disiplin

İki haftada bir 5 dakika ayırın:

1. Son iki haftanın sohbet listesini gözden geçirin
2. **Değerli olanları** [Projects](/wiki/araclar/projects/) altına taşıyın veya iyi bir başlıkla yeniden adlandırın
3. **Bir daha bakmayacağınızı bildiklerinizi** silin
4. Hassas veri içerenler özellikle silinsin

Bu disiplin uzun vadede iki şey kazandırır:

- Aramanızda sinyal/gürültü oranı yüksek kalır
- Hassas veri yönetimi otomatikleşir

## Birden Çok Cihazda Senkron

Claude geçmişiniz hesaba bağlıdır. Web, [Claude Desktop](/wiki/araclar/claude-desktop/) veya [Claude Mobil](/wiki/araclar/claude-mobil/), hepsinde aynı sohbet listesini görürsünüz, anında senkronize olur. Bir cihazda silseniz diğerinden de gider.

## İlgili Sayfalar

- [Projects](/wiki/araclar/projects/): Sohbetleri organize etmenin doğru yolu
- [Claude Chat](/wiki/araclar/claude-chat/): Geçmiş bu arayüzde tutulur
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Veri saklama hakları
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Saklama politikası şablonu
- [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/): Geçmişten ayrı, kalıcı bellek
- [Memory](/wiki/yetenekler/memory/): Hafıza 25 Ağustos 2026'dan beri sohbet ve Cowork arasında ortak (Free, Pro, Max'te varsayılan açık; Team ve Enterprise'ta varsayılan kapalı)

