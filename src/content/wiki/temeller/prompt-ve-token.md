---
title: Prompt ve Token — Temel Kavramlar
description: Prompt nedir, token nedir, neden önemlidir, kalan kullanım hakkınızı nereden görebilirsiniz. Yeni başlayanlar için sade açıklama.
tags:
  - temeller
  - prompt
  - token
  - kullanim
---

Claude'la çalışmaya başlamadan önce iki kelimeyi bilmek yeterli: **prompt** ve **token**. İkisi de basit, ilk başta korkutucu değil.

---

## Prompt Nedir?

**Prompt, Claude'a yazdığınız mesajdır.** Bir soru, bir görev, bir talep — hepsi prompttur.

Örnekler:

- *"Bu raporun özetini çıkar."*
- *"Müşterime kibar bir takip e-postası yaz."*
- *"Şu Excel dosyasındaki sayıları tabloya çevir."*

Hepsi prompt. Düşünmek için karmaşık bir kelimeye gerek yok — Claude'a ne söylediğinizdir.

> **İyi prompt nedir?** Net, bağlamlı, ne istediğinizi söyleyen. İleride [Prompting Temel İlkeleri](../prompting/temel-ilkeler/) sayfasında detaylı işliyoruz. Şimdilik sadece "Claude'a yazdığım mesaj" olarak düşünün.

---

## Token Nedir?

**Token, Claude'un metni ölçtüğü birim.** Bir token yaklaşık **bir kelimenin parçası** kadar.

Kabaca:

- 1 İngilizce kelime ≈ 1.3 token
- 1 Türkçe kelime ≈ 1.5-2 token
- 1 sayfa metin ≈ 500-700 token
- Bu sayfanın tamamı ≈ 800 token

**Hem sizin yazdıklarınız hem Claude'un cevabı tokenle sayılır.** İkisinin toplamı kullanımınızı oluşturur.

---

## Neden Önemli?

Aboneliğinizin bir **kullanım limiti** vardır. Bu limit token cinsinden ölçülür.

- **Pro ($20/ay):** belli bir saatlik / günlük limit
- **Max 5x ($100/ay):** Pro'nun 5 katı
- **Max 20x ($200/ay):** Pro'nun 20 katı

Token limitine ulaştığınızda Claude size *"saatlik limit doldu, X dakika sonra tekrar deneyin"* der. Korkutucu değil — birkaç saat sonra otomatik açılır.

> **Pratik gerçek:** Normal iş kullanımında ([Pro planda](planlar/)) günde 1-3 saat aktif konuşma sorun çıkarmaz. Limit dolmaya başladığında uyaracaktır — ondan sonra düşünürsünüz.

---

## Token Harcanması Nedir?

Her prompt yazdığınızda ve Claude size cevap verdiğinde token harcarsınız. **Daha çok token = daha çok limit kullanımı.**

Token harcaması yüksek olan işler:

- Uzun belge yüklemek (100 sayfalık PDF → ~50.000+ token)
- Çok uzun bir konuşma sürdürmek (100+ mesaj)
- Claude'dan uzun, detaylı yanıtlar istemek

Token harcaması düşük olan işler:

- Kısa sorular ("Bu cümleyi düzelt")
- Kısa cevaplar
- Yeni sohbet başlatmak (geçmiş yük yok)

**Endişelenmeyin** — günlük iş için Pro'nun limiti yeter. Sadece çok uzun belgelerle çalışırken (örn. 200 sayfalık sözleşme analizi) limitin farkında olun.

---

## Kalan Kullanım Hakkımı Nereden Görürüm?

claude.ai veya Claude Desktop'ta:

1. **Sol alt köşedeki profil ikonunuza** tıklayın
2. Açılan menüden **"Settings"** seçin
3. Sol panelden **"Usage"** sekmesine tıklayın
4. Mevcut limit + kullanılan miktar + sıfırlanma zamanı görünür

Ekranınızda şuna benzer bir bilgi olur:

> *"You've used 47% of your weekly Sonnet limit. Resets in 3 days."*

Bu kadar — kullanım takibi tek tıklama uzakta. Limite yaklaşırken Claude size uyarı vermeye başlar.

---

## Sıkça Sorulanlar

**"Token sayısı önemli mi? Saymalı mıyım?"**

Hayır. Tipik kullanıcı token saymaz, sadece limite çarptığında öğrenir. **Sayma — kullan.**

**"Limit dolarsa ne olur?"**

Saatlik limit dolduğunda Claude bekleme süresi söyler (genelde 1-5 saat). Aylık limit dolarsa ay başına kadar bekleyebilir veya planı yükseltebilirsiniz.

**"Limitlere sık çarpıyorum, ne yapmalıyım?"**

Pro'da iseniz ve sık limit problemi yaşıyorsanız Max 5x'e ($100/ay) yükseltmenin zamanı gelmiştir. Detay: [Planlar](planlar/).

**"Token = para mı?"**

Doğrudan değil. Aboneliğinize dahil edilen kotayı tüketirsiniz. Aşırı kullanım için ayrı ücret yok — sadece bekleyip kotanız sıfırlanır.

---

## İlgili Sayfalar

- [Claude Planları](planlar/) — Plan limitleri ve fiyatlar
- [İlk Kurulum](ilk-kurulum/) — Hesap açma + abonelik
- [Prompting Temel İlkeleri](../prompting/temel-ilkeler/) — İyi prompt nasıl yazılır (ileride)

