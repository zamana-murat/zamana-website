---
title: "Prompt ve Token: Temel Kavramlar"
description: Prompt nedir, token nedir, neden önemlidir, kalan kullanım hakkınızı nereden görebilirsiniz. Yeni başlayanlar için sade açıklama.
tags:
  - temeller
  - prompt
  - token
  - kullanim
lastUpdated: "2026-10-06"
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

Aboneliğinizin bir **kullanım limiti** vardır ve harcadığınız şey sabit bir mesaj sayısı değil, işlenen metnin (token) miktarıdır. Limitin nasıl işlediği, hangi planda ne kadar olduğu ve dolunca ne yapılacağı ayrı bir sayfada anlatılıyor: [Kullanım Limitleri ve Usage Credits](/wiki/temeller/kullanim-limitleri/). Plan fiyatları için [Claude Planları](/wiki/temeller/planlar/).

> **Pratik gerçek:** Alışmış bir kullanıcı için günde 1-3 saat aktif konuşma genellikle sorun çıkarmaz. Yeni başlayanın ilk ayı daha yoğun geçer; bu yüzden ilk ay için daha yüksek bir plan öneriliyor, ayrıntısı Planlar sayfasında.

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

**Endişelenmeyin**: alışkanlık oturduktan sonra günlük iş çoğu zaman limite takılmaz. Yalnızca çok uzun belgelerle çalışırken (örn. 200 sayfalık sözleşme analizi) limite dikkat edin.

---

## Kalan Kullanım Hakkımı Nereden Görürüm?

claude.ai veya Claude Desktop'ta:

1. **Sol alt köşedeki profil ikonunuza** tıklayın
2. Açılan menüden **"Settings"** seçin
3. Sol panelden **"Usage"** sekmesine tıklayın
4. Mevcut limit + kullanılan miktar + sıfırlanma zamanı görünür (nasıl okunacağı: [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/))

Ekranınızda şuna benzer bir bilgi olur:

> *"You've used 47% of your weekly limit. Resets in 3 days."*

Bu kadar, kullanım takibi tek tıklama uzakta. Limite yaklaşırken Claude size uyarı vermeye başlar.

---

## Sıkça Sorulanlar

**"Token sayısı önemli mi? Saymalı mıyım?"**

Hayır. Tipik kullanıcı token saymaz, sadece limite çarptığında öğrenir. **Sayma, kullan.**

**"Limit dolarsa ne olur?" / "Limitlere sık çarpıyorum, ne yapmalıyım?"**

Bunlar ayrı bir sayfada ayrıntılı yanıtlanıyor: [Kullanım Limitleri ve Usage Credits](/wiki/temeller/kullanim-limitleri/).

**"Token = para mı?"**

Doğrudan değil. Aboneliğinize dahil edilen kotayı tüketirsiniz. Kota dolunca ek ücret kendiliğinden işlemez: ya beklersiniz ya da isterseniz **kullanım kredisini** (kullandıkça öde, API fiyatıyla) kendiniz açarsınız.

---

## İlgili Sayfalar

- [Kullanım Limitleri ve Usage Credits](/wiki/temeller/kullanim-limitleri/): Limit yapısı, dolunca ne yapılır
- [Claude Planları](/wiki/temeller/planlar/): Plan fiyatları
- [İlk Kurulum](/wiki/temeller/ilk-kurulum/): Hesap açma + abonelik
- [Prompting Temel İlkeleri](/wiki/prompting/temel-ilkeler/): İyi prompt nasıl yazılır

