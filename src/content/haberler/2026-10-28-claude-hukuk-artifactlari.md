---
title: "Claude'a hukuk işleri için hazır artifact'lar eklendi"
seoTitle: "Claude hukuk artifact'ları: hazır araç galerisi"
description: "Claude for Legal'e sözleşme tablosu, atıf kontrolü ve mevzuat takibi gibi hazır araçlar geldi; kaynak Enterprise der, Türk hukuku yazılmıyor."
date: "2026-10-28"
source: "https://claude.com/resources/articles/introducing-artifacts-for-legal-work"
sourceTitle: "Introducing Artifacts for Legal Work with Claude"
image: "/images/haberler/hukuk-artifactlari.png"
imageAlt: "Hukuku simgeleyen bir tokmak çizimi, Claude hukuk artifact'ları duyurusunun kapak görseli"
tags: ["özellik", "hukuk", "artifact", "kurumsal"]
---

## Kısaca

Anthropic, mayıs ayında duyurduğu Claude for Legal paketine hazır "artifact" galerisi ekledi. Artifact, Claude içinde açılan, kullanıp uyarlayabileceğiniz ve paylaşabileceğiniz etkileşimli araçtır (takip tablosu, pano gibi). Galeride sözleşme tablosu, atıf kontrolü, mevzuat takibi ve sapma panosu gibi araçlar var. Anthropic süreci şöyle tarif ediyor: siz belgelerinizi ve kaynaklarınızı getirirsiniz, Claude ilk turu yapar, avukat sonucu kendi muhakemesiyle değerlendirir.

## Sizin için ne değişiyor?

Hukuk ekibinde ya da hukuk bürosunda çalışıyorsanız, her seferinde sıfırdan istem (prompt) yazmak yerine hazır bir araçla başlayabilirsiniz. Galerideki başlıca araçlar:

- **Tablolu inceleme:** Bir sözleşme setinde seçtiğiniz şartlar (kıdem, rekabet yasağı gibi) için tablo kurar, her hücre ilgili madde metnine bağlanır.
- **Playbook sapma panosu:** Sözleşmeleri şirketin standart şartlarıyla karşılaştırır, sapmaları istisnayı onaylayan kişiye yönlendirir.
- **Atıf kontrolü:** Bir belgeyi kaynaklarıyla karşılaştırır, tutmayan alıntıyı, yanlış sayfa numarasını ve iddiayı desteklemeyen kaynağı işaretler.
- **Mevzuat radarı:** Yaklaşan düzenlemeleri iş ve konumunuza göre zaman çizelgesinde sıralar.
- **Dosya panosu ve yargı alanı matrisi:** Açık işleri sorumlu ve sonraki tarihle gösterir; bir konuyu birden çok ülke veya eyalette tek tabloda karşılaştırır.

Ortak firmaların yaptığı araçlar da var, örneğin Harvey'in iç talep girişi ve PwC'nin celp yanıtı taslak aracı. Anthropic mayıstan bu yana 60'tan fazla hukuk connector'ı (Claude'u dış sistemlere bağlayan bağlantı) eklediğini söylüyor.

## Nasıl denersiniz?

1. Claude'da `claude.ai/artifacts?templates=legal` adresindeki galeriyi açın.
2. Bir araç seçin ve kendi belgelerinizi ya da playbook'unuzu ekleyin.
3. Claude'dan aracı iş akışınıza göre uyarlamasını isteyin.
4. Sonucu paylaşmadan önce bir avukat gözüyle kontrol edin.

Makale ürünü "Claude Enterprise" olarak etiketliyor ve plan ya da fiyat listelemiyor. Paketin Team, Pro, Max veya Ultra'da açık olup olmadığı yazmıyor. Kurulum için satış ekibi ya da uygulama ortakları öneriliyor. Paylaşım ayarları gizliliği ve ekipler arası "etik duvarı" korumak için tasarlanmış.

## Bilmeniz gerekenler

- **Türk hukuku:** Resmi kaynakta Türk hukuku ve Türkçe sözleşme desteği yazmıyor. Playbook örnekleri ABD eyaletleri (Delaware, New York, California) üzerine kurulu, bazı araçlar da yer bağımlı (New York, Washington D.C.). Türkiye'de kullanmak için kendi playbook'unuzu ve mevzuat kaynaklarınızı sizin tanımlamanız gerekir.
- **Her çıktı avukat kontrolünden geçer:** Araçlar ilk tur taslak üretir, hukuki görüş değildir. Dosyalama ya da gönderme öncesi insan onayı gerekir.
- **Müvekkil verisi:** Müvekkil bilgisi için kişisel hesap kullanmayın, Team ya da Enterprise tercih edin. İçerikle model eğitilmemesi varsayılan olarak yalnız bu iki planda söz konusu. Meslek sırrı ve KVKK açısından [gizlilik ve KVKK rehberine](/wiki/temeller/gizlilik-kvkk/) bakın.
- **Erişim adaleti araçları** (kira defteri, sicil temizleme) ABD yerel hukukuna dayanıyor, Türkiye için karşılığı yok.

Sektör sayfaları: [Claude hukuk çözümleri](/kurumsal/hukuk/), [Hukuk departmanında Claude](/wiki/departmanlar/hukuk/), [Hukuk Büroları programı](/programlar/hukuk-burolari/).

*Kaynak: [Introducing Artifacts for Legal Work with Claude](https://claude.com/resources/articles/introducing-artifacts-for-legal-work), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
