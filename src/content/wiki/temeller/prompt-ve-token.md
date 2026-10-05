---
title: "Prompt ve Token: Temel Kavramlar"
description: Prompt nedir, token nedir, neden önemlidir, kalan kullanım hakkınızı nereden görebilirsiniz. Yeni başlayanlar için sade açıklama.
tags:
  - temeller
  - prompt
  - token
  - kullanim
lastUpdated: "2026-10-05"
---

Claude'la çalışmaya başlamadan önce iki kelimeyi bilmek yeterli: **prompt** ve **token**. İkisi de basit, ilk başta korkutucu değil.

---

## Prompt Nedir?

**Prompt, Claude'a yazdığınız mesajdır.** Bir soru, bir görev, bir talep, hepsi prompttur.

Örnekler:

- *"Bu raporun özetini çıkar."*
- *"Müşterime kibar bir takip e-postası yaz."*
- *"Şu Excel dosyasındaki sayıları tabloya çevir."*

Hepsi prompt. Düşünmek için karmaşık bir kelimeye gerek yok, Claude'a ne söylediğinizdir.

> **İyi prompt nedir?** Net, bağlamlı, ne istediğinizi söyleyen. İleride [Prompting Temel İlkeleri](/wiki/prompting/temel-ilkeler/) sayfasında detaylı işliyoruz. Şimdilik sadece "Claude'a yazdığım mesaj" olarak düşünün.

---

## Token Nedir?

**Token, Claude'un metni ölçtüğü birim.** Bir token yaklaşık **bir kelimenin parçası** kadar.

Kabaca:

- 1 İngilizce kelime ≈ 1.3 token
- 1 Türkçe kelime ≈ 1.5-2 token
- 1 sayfa metin ≈ 400 token (İngilizce) ile 500-700 token (Türkçe) arası

**Hem sizin yazdıklarınız hem Claude'un cevabı tokenle sayılır.** İkisinin toplamı kullanımınızı oluşturur.

---

## Neden Önemli?

Aboneliğinizin bir **kullanım limiti** vardır. Limit iki katmanlıdır: **5 saatlik kayan oturum penceresi** ve tüm ücretli planlarda **haftalık limit**. Harcadığınız şey sabit bir mesaj sayısı değil, işlenen metnin (token) miktarıdır.

- **Pro ($20/ay):** temel limit
- **Max 5x ($100/ay):** Pro'nun 5 katı
- **Max 20x ($200/ay):** Pro'nun 20 katı

Oturum limitine ulaştığınızda Claude size ne zaman yeniden açılacağını söyler. Korkutucu değil, pencere kayarak otomatik açılır. Haftalık limit dolarsa hafta sıfırlanana kadar beklersiniz ya da **kullanım kredisi** (kullandıkça öde) açarsınız. Ayrıntı için [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/) sayfasına bakın.

> **Pratik gerçek:** Alışmış bir kullanıcı için ([Pro planda](/wiki/temeller/planlar/)) günde 1-3 saat aktif konuşma sorun çıkarmaz. Limit dolmaya yaklaşınca Claude sizi uyarır, o zaman düşünürsünüz. Yeni başlayanın ilk ayı daha yoğun geçer, bu yüzden ilk ay için Max 5x önerilir.

---

## Hangi İşler Çok Token Harcar?

**Daha çok token = daha çok limit kullanımı.**

Token harcaması yüksek olan işler:

- Uzun belge yüklemek (100 sayfalık PDF → dile göre yaklaşık 40.000-70.000 token)
- Çok uzun bir konuşma sürdürmek (100+ mesaj)
- Claude'dan uzun, detaylı yanıtlar istemek

Token harcaması düşük olan işler:

- Kısa sorular ("Bu cümleyi düzelt")
- Kısa cevaplar
- Yeni sohbet başlatmak (geçmiş yük yok)

**Endişelenmeyin**: alışkanlık oturduktan sonra günlük iş için Pro'nun limiti yeter. Yalnızca çok uzun belgelerle çalışırken (örn. 200 sayfalık sözleşme analizi) limite dikkat edin.

---

## Kalan Kullanım Hakkımı Nereden Görürüm?

claude.ai veya Claude Desktop'ta:

1. **Sol alt köşedeki profil ikonunuza** tıklayın
2. Açılan menüden **"Settings"** seçin
3. Sol panelden **"Usage"** sekmesine tıklayın
4. Mevcut limit + kullanılan miktar + sıfırlanma zamanı görünür

Ekranınızda şuna benzer bir bilgi olur:

> *"You've used 47% of your weekly limit. Resets in 3 days."*

Bu kadar, kullanım takibi tek tıklama uzakta. Limite yaklaşırken Claude size uyarı vermeye başlar.

---

## Sıkça Sorulanlar

**"Token sayısı önemli mi? Saymalı mıyım?"**

Hayır. Tipik kullanıcı token saymaz, sadece limite çarptığında öğrenir. **Sayma, kullan.**

**"Limit dolarsa ne olur?"**

5 saatlik oturum limiti dolduğunda Claude yeniden açılma zamanını söyler. Haftalık limit dolarsa hafta sıfırlanana kadar bekleyebilir, planı yükseltebilir ya da kullanım kredisi açabilirsiniz. Aylık bir limit yoktur. Ayrıntı: [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/).

**"Limitlere sık çarpıyorum, ne yapmalıyım?"**

Pro'da iseniz ve sık limit problemi yaşıyorsanız Max 5x'e ($100/ay) yükseltmenin zamanı gelmiştir. Detay: [Planlar](/wiki/temeller/planlar/).

**"Token = para mı?"**

Doğrudan değil. Aboneliğinize dahil edilen kotayı tüketirsiniz. Kota dolunca ek ücret kendiliğinden işlemez: ya beklersiniz ya da isterseniz **kullanım kredisini** (kullandıkça öde, API fiyatıyla) kendiniz açarsınız.

---

## İlgili Sayfalar

- [Claude Planları](/wiki/temeller/planlar/): Plan limitleri ve fiyatlar
- [İlk Kurulum](/wiki/temeller/ilk-kurulum/): Hesap açma + abonelik
- [Prompting Temel İlkeleri](/wiki/prompting/temel-ilkeler/): İyi prompt nasıl yazılır

