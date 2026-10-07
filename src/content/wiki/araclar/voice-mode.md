---
title: "Voice Mode: Claude ile Sesli Etkileşim"
seoTitle: "Claude Sesli Mod: Nasıl Açılır, Türkçe Destekliyor mu?"
description: "Claude sesli mod nasıl açılır, hangi planlarda var, Türkçe destekliyor mu? Desteklenen diller, sınırlar ve Türkçe için dikte alternatifi."
tags:
  - araclar
  - voice-mode
  - mobil
  - dikte
lastUpdated: "2026-10-06"
---

**Claude'un ses özelliği, yazı yerine konuşarak etkileşim kurmanıza izin verir.** Beta olarak tüm planlarda (Free, Pro, Max, Team, Enterprise) mobil uygulamalarda, masaüstünde ve web'de çalışır. Eller serbest, doğal bir sesli konuşma deneyimi sağlar.

Free'de Haiku modeli ve tek bağlı araç kullanılır; ücretli planlarda daha fazla model ve tüm bağlı araçlar açıktır. Kullanım, normal sohbet gibi planınızın limitinden düşer.

Bu bir gösteriş özelliği değildir. Doğru kullanım durumlarında, özellikle satış ve yönetim pozisyonlarında, ciddi sürtünme azaltır.

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

Aynı konuşma içinde her an metinden sese veya tersine geçiş yapabilirsiniz, bağlam korunur. Yolda sesli başlayıp masada yazıyla devam edebilirsiniz.

## Voice Mode Neye Uygundur?

- **Yazmanın zor olduğu anlarda dikte:** yürüyüş, elleriniz doluyken (desteklenen dillerde, Türkçe için aşağıya bakın)
- **Uzun sözlü açıklamalar:** yazması dakikalar alacak karmaşık bir bağlamı 30 saniyede anlatmak
- **Başka iş yaparken hızlı beyin fırtınası:** Claude'la kafanızı dağıtmayacak akışkan bir konuşma
- **Eller serbest belge incelemesi:** "Bu raporun özetini söyle": dinlerken başka iş yaparsınız
- **Mobil kullanım:** yoldayken Claude'la sesli konuşmak ([Claude Mobil](/wiki/araclar/claude-mobil/))

## Türkçe Desteği

**Voice mode Türkçe desteklemiyor.** Anthropic'in yardım sayfasındaki dil listesinde (İngilizce, Fransızca, Almanca, Hintçe, Endonezyaca, İtalyanca, Japonca, Korece, Brezilya Portekizcesi, İspanyolca) Türkçe yok. Bu liste bir arama özetinden alındı; güncel hâli için yardım sayfasına bakın. Claude yazılı Türkçeyi iyi anlar ve yazar, sorun yalnızca sesli konuşma tarafındadır.

**Türkçe için alternatif:** telefonun klavye dikte özelliğiyle (iOS ve Android'de klavyedeki mikrofon simgesi) konuşup metni Claude'a yazılı göndermek. Dikteyi telefon yapar, Claude yazılı metinle çalışır; Türkçede kalite telefonun dikteine bağlıdır. İngilizce çalışıyorsanız aşağıdaki notlar geçerli.

İngilizce sesli kullanım için birkaç pratik not:

- Konuşma hızınız normal olsun, çok yavaş veya çok hızlı transkripsiyon kalitesini düşürür
- Özel isimler (şirket adı, kişi adı, teknik terim) bazen yanlış yazılabilir, konuşma sonrası metni kontrol edin veya yazıya geçip düzeltin
- Gürültülü ortamlarda push-to-talk kullanın

## Sınırlamalar

Voice mode bir konuşma arayüzüdür, yani:

- **Sohbet arayüzüdür, Cowork değildir.** Dosya üretme, zamanlanmış görev ve masaüstü otomasyonu için [Cowork](/wiki/araclar/cowork-modu/) kullanın; sesli konuşmanın bunları tetikleyeceğini varsaymayın.
- **Bağlı araçlardan (connector) yararlanabilir:** Free'de tek araç, ücretli planlarda tüm bağlı araçlar açıktır. Masaüstünüzdeki yerel dosyalarla çalışma Cowork'ün işidir.
- **Cevap kalitesi yazıyla aynıdır**: fark sadece giriş/çıkış biçimidir.
- **Uzun ve karmaşık çıktılar** sesli dinlemektense okumak genelde daha verimlidir.

Kısaca: Voice mode **sohbetin sesli sürümüdür**. Cowork'ün dosya üretme ve otomasyon gücü ses üzerinden doğrudan kullanılamaz. Cowork ve sohbet 16 Eylül 2026'dan itibaren tek Claude içinde birleşiyor (kademeli yayılım). Birleşik arayüzde sesli girişin hangi işleri tetikleyebildiğini doğrulayamadık, kendi hesabınızda deneyin.

## Sesle Görev Vermek (Mobil Cowork ve Dispatch)

Konuşarak iş vermek değerlidir, ama Türkçede bunu Claude'un sesli modu değil, telefonun klavye diktesi sağlar. Voice mode'un kendisi Cowork görevi başlatmaz; diktesiyle yazdırdığınız görevi mobil Cowork betasına ya da (mevcut kullanıcılar için, yeni kullanıcılara kapalı) Dispatch'e gönderirsiniz. Ayrıntı: [Telefondan görev: mobil Cowork ve Dispatch](/wiki/araclar/claude-mobil/#telefondan-görev-mobil-cowork-ve-dispatch).

Örnek: yolda direksiyondasınız, aklınıza bir iş gelir. Kenara çekince dikte edin:

> *"Perşembeki tedarikçi toplantısı için hazırlık notları çıkar. Şirket Ege Metal. Son 3 ay yazışmalarımıza bak, öne çıkan konuları listele, önerilen gündemi hazırla, Tedarikçi-Ege klasörüne kaydet."*

Siz toplantıya varmadan, belge hazır olabilir. Klavye kullanmadan.

## Pratik Kullanım

Voice mode kritik bir özellik değildir, **yaşam kalitesi özelliğidir**. Kimi çalışan doğal yazıcıdır, kimi doğal konuşmacıdır. Doğal konuşmacı olanlar için (özellikle satış, iş geliştirme ve üst yönetimde) yazmak daima bir yavaşlatıcıdır.

Doğal eğiliminiz varsa kullanın, yoksa varsayılanı yazı olarak bırakın. Zorlama gerektirmez.

## İlgili Sayfalar

- [Claude Chat](/wiki/araclar/claude-chat/): Voice mode'un içinde yaşadığı ana arayüz
- [Claude Mobil](/wiki/araclar/claude-mobil/): Mobil uygulama, mobil Cowork ve Dispatch (yeni kullanıcılara kapalı)
- [Claude Nedir?](/wiki/temeller/claude-nedir/): Temel yetenek seti
- [Araçlar Ana Sayfası](/wiki/araclar/): Tüm Claude araçlarının karar tablosu

