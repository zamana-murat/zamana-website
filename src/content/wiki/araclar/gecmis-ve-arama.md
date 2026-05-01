---
title: Sohbet Geçmişi, Arama ve Dışa Aktarma
description: "Claude'da sohbet geçmişi nasıl yönetilir? Arama, klasörleme, silme, dışa aktarma — günlük disiplin tavsiyeleri."
tags:
  - araclar
  - gecmis
  - arama
  - export
---

**Claude'u haftalarca aktif kullanan biri için, sohbet geçmişi hızla bir bilgi arşivine dönüşür.** Onu yönetmemek, geçmişte değerli üretimleri kaybetmek demektir.

Bu sayfa Claude'un geçmiş yönetim özelliklerini, arama mantığını ve günlük disiplini anlatır.

## Sohbet Geçmişi Nasıl Saklanır?

Claude'da yaptığınız her sohbet otomatik olarak hesabınıza bağlı kalır. Sol panelde tarihe göre sıralı görürsünüz. Bir sohbete tıklayın → tam metniyle açılır, oradan devam edebilirsiniz.

**Saklama yeri:** Anthropic'in sunucularında, hesabınızla ilişkili olarak. KVKK boyutu için [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) sayfasına bakın.

**Saklama süresi:** Plan ve hesap ayarlarına bağlı. Çoğu kullanıcı için süresizdir, siz silmedikçe kalır. Enterprise/Team planlarında yöneticinin tanımladığı saklama politikası geçerli olabilir.

## Arama Yapma

claude.ai üst kısmında arama kutusu var. Buradan **tüm sohbet başlıklarınızda ve içeriklerinde** arama yaparsınız.

Arama özellikleri:

- Anahtar kelime (Türkçe ve İngilizce)
- Tarih aralığı filtresi (bazı sürümlerde)
- [Projects](projects/) içinde sınırlama (proje seçtiğinizde sadece o proje sohbetlerinde arama)

**Pratik tavsiyeler:**

- **Sohbete açıklayıcı isim verin.** Claude varsayılan başlık verir ama elle yeniden adlandırabilirsiniz. "İK politika revizyonu — Mart 2026" gibi isimler arama sonucunda altın değerinde.
- **İlk mesajda anahtar kelime bırakın.** Aramada ilk mesaj ağır basar; o yüzden başlangıçta "konu: ihracat sözleşme şablonu" gibi bir cümle bırakın.
- **Tarih disiplini.** Tarih içeren projelerde "2026-Q2" gibi etiketleri konuşmanın bir yerine yazın.

## Klasörleme — Projects ile

Claude'da geleneksel klasör sistemi yok; **organize etmenin yolu [Projects](projects/) kullanmaktır.** Bir proje açarsınız (örn. "ABC Müşterisi"), o projeyle ilgili tüm sohbetleri o projenin içinde tutarsınız.

Faydaları:

- Proje içi sohbetler ayrı arşivde
- Projeye özel CLAUDE.md / talimat
- Projeye yüklediğiniz dosyalar tüm sohbetlerde erişilebilir
- Arama proje bazlı daraltılabilir

[Projects](projects/) sayfası ayrıntıyı verir.

## Silme

Bir sohbeti silmek isterseniz: sohbetin yan menüsündeki **Delete** seçeneği. Anında silinir, geri dönüş yok.

**Toplu silme:** Tek tek silmek dışında, hesap genelinde silme için **Settings → Privacy** menüsündeki "Delete all chats" seçeneği vardır.

**Saklama dengesini kurun:**

- Hassas içerik (kişisel veri, müşteri sırrı) → işiniz biter bitmez sil
- Değerli üretim (kaliteli prompt, faydalı çıktı) → silmeyin, [Projects](projects/)'e taşıyın

[Şirket İçi Politika](../temeller/sirket-ici-politika/) sayfasında saklama politikası şablonu var.

## Dışa Aktarma (Export)

Claude verilerinizin tamamını indirebilmenizi sağlar. KVKK'da kullanıcının hakkı olan **veri taşınabilirliği** bu şekilde karşılanır.

**Nasıl yapılır:**

1. **Settings → Privacy** menüsüne girin
2. "Export your data" seçeneğini bulun
3. Talep edin → birkaç dakika ile saatler arasında size e-posta ile indirme linki gelir
4. Genelde JSON formatında, sohbet metinleri + meta veriler

**Pratik kullanımlar:**

- Yıllık arşiv yedeği
- Şirketten ayrılırken (eğer sohbetler kişisel hesaptaysa) kişisel arşiv
- Şirkete sözleşme/denetim için sunulacak bir veri raporu

## Paylaşım

Bir sohbete *Share* butonu ile **public link** üretebilirsiniz. Linke ulaşan herkes konuşmayı okur (ama devam ettiremez, kendi hesabına kopyalar).

**Risk:** Paylaşım yaparken sohbet içinde **müşteri verisi, fiyat bilgisi, hassas iç tartışma** olmadığından emin olun. Bir kez link oluşturulduktan sonra Anthropic dışında biri o linki kaydetmiş olabilir.

**İyi kullanım:** eğitim örneği, basın için demo, kamuya açık bir analiz paylaşımı.

## Günlük Disiplin

İki haftada bir 5 dakika ayırın:

1. Son iki haftanın sohbet listesini gözden geçirin
2. **Değerli olanları** [Projects](projects/) altına taşıyın veya iyi bir başlıkla yeniden adlandırın
3. **Bir daha bakmayacağınızı bildiklerinizi** silin
4. Hassas veri içerenler özellikle silinsin

Bu disiplin uzun vadede iki şey kazandırır:

- Aramanızda sinyal/gürültü oranı yüksek kalır
- Hassas veri yönetimi otomatikleşir

## Birden Çok Cihazda Senkron

Claude geçmişiniz hesaba bağlıdır. Web, [Claude Desktop](claude-desktop/) veya [Claude Mobil](claude-mobil/) — hepsinde aynı sohbet listesini görürsünüz, anında senkronize olur. Bir cihazda silseniz diğerinden de gider.

## İlgili Sayfalar

- [Projects](projects/) — Sohbetleri organize etmenin doğru yolu
- [Claude Chat](claude-chat/) — Geçmiş bu arayüzde tutulur
- [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) — Veri saklama hakları
- [Şirket İçi Politika](../temeller/sirket-ici-politika/) — Saklama politikası şablonu
- [Memory Yönetimi](../claude-md/memory-yonetimi/) — Geçmişten ayrı, kalıcı bellek

