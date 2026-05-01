---
title: Voice Mode — Claude ile Sesli Etkileşim
description: "Claude'un ses özelliği, yazı yerine konuşarak etkileşim kurmanıza izin verir. Dikte, hızlı brainstorm, mobil kullanım için uygundur."
tags:
  - araclar
  - voice-mode
  - mobil
  - dikte
---

**Claude'un ses özelliği, yazı yerine konuşarak etkileşim kurmanıza izin verir.** Hem web arayüzünde hem mobil uygulamalarda çalışır — eller serbest, doğal bir sesli konuşma deneyimi sağlar.

Bu bir gösteriş özelliği değildir. Doğru kullanım durumlarında — özellikle satış ve yönetim pozisyonlarında — ciddi sürtünme azaltır.

## Nasıl Çalışır?

Voice mode üç adımda işler:

1. Konuştuğunuz ses metne dönüşür (speech-to-text)
2. Metin Claude'a gönderilir
3. Claude'un cevabı size sesli okunur (text-to-speech)

Sonuç: akıcı bir sesli konuşma, ama aslında yazılı bir metin konuşmasıdır. Bağlam korunur, sesle girdiğiniz bir konuyu yazıyla devam ettirebilir veya tam tersini yapabilirsiniz.

## Nasıl Aktifleştirilir?

**Web ([claude.ai](https://claude.ai)):** Sohbet penceresinin sağ alt köşesindeki ses dalgası simgesine tıklayın.

**Mobil (iOS / Android):** Sohbet arayüzünde aynı simge.

### İki Dinleme Modu

- **Hands-free (varsayılan):** Claude sürekli dinler, doğal duraklardan sonra cevap verir. Konuşma gibi akar.
- **Push-to-talk:** Konuşurken düğmeyi basılı tutarsınız, bırakınca Claude cevap üretir. Gürültülü ortamlarda tercih edilir.

### Ses Tercihleri

**Settings → General → Voice Settings** menüsünden Claude'un sesini seçebilirsiniz.

### Metinle Sesi Karıştırmak

Aynı konuşma içinde her an metinden sese veya tersine geçiş yapabilirsiniz — bağlam korunur. Yolda sesli başlayıp masada yazıyla devam edebilirsiniz.

## Voice Mode Neye Uygundur?

- **Yazmanın zor olduğu anlarda dikte:** araba yolu, yürüyüş, elleriniz doluyken
- **Uzun sözlü açıklamalar:** yazması dakikalar alacak karmaşık bir bağlamı 30 saniyede anlatmak
- **Başka iş yaparken hızlı beyin fırtınası:** Claude'la kafanızı dağıtmayacak akışkan bir konuşma
- **Eller serbest belge incelemesi:** "Bu raporun özetini söyle" — dinlerken başka iş yaparsınız
- **Mobil kullanım:** [Dispatch](dispatch/) görevlerini sesle atamak

## Türkçe Desteği

Ses transkripsiyonu birçok dili destekler. **Claude Türkçeyi iyi anlar** — Zamana müşterilerinden özellikle konuşmayı yazmaya tercih edenler için pratik bir seçenektir.

Birkaç pratik not:

- Konuşma hızınız normal olsun — çok yavaş veya çok hızlı transkripsiyon kalitesini düşürür
- Özel isimler (şirket adı, kişi adı, teknik terim) bazen yanlış yazılabilir — konuşma sonrası metni kontrol edin veya yazıya geçip düzeltin
- Gürültülü ortamlarda push-to-talk kullanın

## Sınırlamalar

Voice mode bir konuşma arayüzüdür — yani:

- **Cowork araçlarını veya skill'leri tetiklemez.** Bir `docx` dosyası üretemez, `/schedule` komutu çalıştırmaz.
- **Dosyalara erişemez, script çalıştıramaz, otomasyon yapamaz.**
- **Cevap kalitesi yazıyla aynıdır** — fark sadece giriş/çıkış biçimidir.
- **Uzun ve karmaşık çıktılar** sesli dinlemektense okumak genelde daha verimlidir.

Kısaca: Voice mode **Claude Chat'in sesli sürümüdür**. Cowork'ün tüm gücü ses üzerinden kullanılamaz.

## Voice Mode + Dispatch Kombinasyonu

En değerli kullanım şekli: **telefonla Dispatch'e sesli komut vermek.**

Örnek: yolda direksiyondasınız, aklınıza bir iş gelir.

> *"Hey Claude, Perşembeki tedarikçi toplantısı için hazırlık notları çıkar. Şirket ABC Metal. Son 3 ay yazışmalarımıza bak, öne çıkan konuları listele, önerilen gündemi hazırla, Projects/Supplier-ABC klasörüne kaydet."*

Siz toplantıya varmadan, belge hazır. Klavye kullanmadan.

## Zamana'daki Yeri

Voice mode kritik bir özellik değildir — **yaşam kalitesi özelliğidir**. Kimi çalışan doğal yazıcıdır, kimi doğal konuşmacıdır. Doğal konuşmacı olanlar için — özellikle satış, iş geliştirme ve üst yönetimde — yazmak daima bir yavaşlatıcıdır.

Zamana birinci oturumunda voice mode'u bir seçenek olarak tanıtırız. Çalışanın doğal eğilimi varsa kullanır. Yoksa varsayılanı yazı olarak bırakırız — zorlamayız.

## İlgili Sayfalar

- [Claude Chat](claude-chat/) — Voice mode'un içinde yaşadığı ana arayüz
- [Dispatch](dispatch/) — Sesli komutların en güçlü kullanım alanı
- [Claude Nedir?](../temeller/claude-nedir/) — Temel yetenek seti
- [Araçlar Ana Sayfası](./) — Tüm Claude araçlarının karar tablosu

