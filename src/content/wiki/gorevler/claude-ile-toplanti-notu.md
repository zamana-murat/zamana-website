---
title: "Claude ile Toplantı Notu ve Aksiyon Listesi"
seoTitle: "Claude ile Toplantı Notu Nasıl Çıkarılır?"
description: "Claude ile toplantı transkriptinden özet, karar ve aksiyon listesi çıkarma: adım adım yöntem, hazır Türkçe promptlar, KVKK ve katılımcı bilgilendirme notları."
tags:
  - gorevler
  - toplanti
  - ozet
  - aksiyon
lastUpdated: "2026-11-09"
---

**Claude toplantı notu için en iyi, elinizde bir transkript ya da dağınık kendi notlarınız olduğunda çalışır.** Metni sohbete yapıştırırsınız ya da dosya olarak yüklersiniz; Claude özet, alınan kararlar, açık sorular ve sorumlusu ile tarihi olan bir aksiyon listesi çıkarır. Önemli ayrım şu: transkripti Teams, Google Meet, Zoom gibi araçlar ya da kendi notlarınız sağlar; Claude'un yüklenebilir dosya türleri arasında ses kaydı yoktur ve Teams içinde resmi bir Claude uygulaması bulunmuyor. Aksiyonlarda kişi adı ve tarih yoksa Claude bunları uydurabileceği için "belirtilmemiş" yazmasını isteyin. En iyi sonuç için toplantının amacını, katılımcı rollerini ve kısaltmaları promptun başında verin. Katılımcıların kaydedilmesi ve konuşmaların yapay zekaya aktarılması için önceden bilgilendirme yapın. Rehber, özet, aksiyon tablosu, katılımcı e-postası ve dağınık not toparlama için dört hazır Türkçe prompt, tahmini süre kazancı ve sık yapılan hataları içerir; gizli konuşmalar için KVKK notu da var.

## Adım adım: Toplantı notu nasıl çıkarılır?

1. **Transkripti alın.** Toplantı aracının kendi transkript özelliği, ya da toplantı sırasında tuttuğunuz notlar. Yüklenebilir dosya türleri arasında ses kaydı sayılmıyor.
2. **Temizleyin.** Çok gürültülü bir transkriptte konuşmacı adları yoksa, ilk satırlarda kimin kim olduğunu yazın.
3. **Bağlamı verin.** Toplantı adı, tarih, amaç, katılımcı rolleri ve proje kısaltmaları.
4. **Çıktı biçimini seçin.** Yönetim özeti, aksiyon tablosu, e-posta metni, ya da üçü birden.
5. **Aksiyonları kontrol edin.** "Kim, ne, ne zamana kadar" üçlüsünü transkriptle karşılaştırın; yoksa boş bırakın.
6. **Gönderin.** Özeti katılımcılara e-postayla iletmeden önce kendiniz bir kez okuyun.

Her hafta aynı biçimde toplantı notu alıyorsanız, biçimi bir [Claude Projesi](/wiki/araclar/projects/)nin talimatına yazın; her yeni transkriptte aynı şablon uygulanır. Microsoft 365 connector'ı ile Outlook ve Teams'teki sohbet ve kanal metinlerini aramak da mümkündür (yönetici açar), ayrıntı [Office ve Chrome](/wiki/araclar/office-ve-chrome/) sayfasında.

## Hazır promptlar

### 1. Yönetici özeti ve kararlar

Ne zaman: toplantı 1 saati geçtiyse ve katılmayan birine kısa bilgi gerekiyorsa.

```
Aşağıda bir toplantının transkripti var.

Bağlam: [toplantı adı], [tarih], katılımcılar: [ad ve roller]
Amaç: [toplantı neden yapıldı]

Çıktı:
1. Özet (en çok 5 cümle)
2. Alınan kararlar (madde madde)
3. Açıkta kalan sorular
4. Bir sonraki toplantıda ele alınacaklar

Transkriptte açıkça söylenmeyen bir kararı karar olarak yazma. Emin olmadığın yerde "netleşmedi" yaz.

[transkripti yapıştır]
```

### 2. Aksiyon listesi

Ne zaman: toplantıdan sonra kim ne yapacak karışıksa.

```
Transkriptten aksiyon listesi çıkar.

Tablo: Aksiyon | Sorumlu | Tarih | Transkriptteki dayanak (kısa alıntı)

Kurallar:
- Sorumlu ya da tarih söylenmemişse "belirtilmemiş" yaz, tahmin etme
- Aynı işi tekrar eden satırları birleştir
- Sonunda "sorumlusu belli olmayan işler" başlığıyla ayrı bir liste ver

[transkripti yapıştır]
```

### 3. Katılımcılara gönderilecek e-posta

Ne zaman: özeti hemen göndermeniz gerekiyorsa.

```
Yukarıdaki özet ve aksiyon listesinden katılımcılara gidecek bir e-posta yaz.

Ton: kısa, nazik, iş yeri [resmi/samimi]
Yapı: 1 cümle teşekkür, kararlar (madde madde), aksiyonlar (kişi adıyla), son cümlede sonraki toplantı tarihi: [tarih]
En çok 150 kelime. Konu satırını da ayrıca yaz.
```

### 4. Dağınık notlardan toparlama

Ne zaman: toplantıda yarım yamalak not almışsanız.

```
Aşağıdaki notlarım toplantı sırasında aceleyle yazıldı, yarım cümleler ve kısaltmalar içeriyor.

Görev: Notları anlaşılır bir toplantı özetine çevir. Anlamını çıkaramadığın kısaltma ya da cümle varsa tahmin etme, bana sor ve listele.

Notlar:
[yapıştır]
```

## Ne kadar zaman kazandırır?

**Süre:** elle 30-45 dakika (bir saatlik toplantının notu ve aksiyon e-postası), Claude ile 5-10 dakika (kontrol dahil). *Tahmini tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

## KVKK ve veri uyarısı

Toplantı transkripti bir kayıt niteliğindedir ve içinde kişisel veri, çoğu zaman da ticari sır bulunur.

- Katılımcılara toplantının kaydedildiğini ve metnin yapay zeka aracıyla işleneceğini önceden söyleyin
- İK görüşmesi, disiplin ya da performans toplantısı gibi hassas konularda transkripti yüklemeden önce isimleri kodlayın
- Müşteri ya da tedarikçi gizlilik anlaşması varsa aracın kullanımına izin verip vermediğine bakın
- Politika ve aktarım için [Şirket içi yapay zeka politikası](/wiki/temeller/sirket-ici-politika/) ile [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/)

## Sık hatalar ve sınırlar

- **Uydurulan karar.** Konuşma yarım kalmışsa Claude bunu karar gibi yazabilir. Her kararı transkriptle eşleştirin.
- **Yanlış kişi ataması.** Aynı ada sahip iki katılımcı ya da konuşmacı etiketi olmayan transkriptte sorumlular karışır.
- **Türkçe konuşma dili.** Otomatik transkript araçları Türkçe özel adları ve teknik terimleri bozabilir; terimleri promptun başına yazın.
- **Çok uzun transkript.** Uzun konuşmada eski kısımlar özetlenebilir. Üç saatlik toplantıyı bölümlere ayırıp ayrı ayrı özetletin.
- **Ton hatası.** Alaycı ya da şaka içeren cümleleri Claude ciddi ifade olarak okuyabilir; hassas yerleri kendiniz kontrol edin.

## İlgili sayfalar

- [Claude ile rapor hazırlama](/wiki/gorevler/claude-ile-rapor/) ve [Claude ile PDF özetleme](/wiki/gorevler/claude-ile-pdf/)
- [Projects](/wiki/araclar/projects/), [Scheduled tasks](/wiki/araclar/scheduled-tasks/)
- [İdari işler](/wiki/departmanlar/idari-isler/) ve [Liderlik](/wiki/departmanlar/liderlik/)
- [Prompt kataloğu](/wiki/prompting/prompt-katalogu/)
