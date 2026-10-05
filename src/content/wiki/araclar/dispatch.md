---
title: "Dispatch: Telefonunuzdan Uzaktan Görev Atamak"
description: "Claude'un Dispatch özelliği, telefonunuzdan masaüstü Cowork oturumunuza görev göndermenizi sağlar. Siz toplantıdayken Claude işi bitirir."
tags:
  - araclar
  - dispatch
  - mobil
  - cowork
lastUpdated: "2026-10-05"
---

**Dispatch, Cowork'ün bir özelliğidir ve telefonunuzla masaüstü bilgisayarınız arasında kalıcı bir konuşma hattı kurar.** Her yerden bir görev gönderirsiniz, iş bittiğinde sonucu teslim alırsınız.

> **Güncel durum (Ekim 2026):** Dispatch, **Pro ve Max** planlarında Cowork için **sınırlı beta** olarak duruyor ve **yeni kullanıcılara kapalı**. Anthropic'in yardım sayfasına göre zaten kullanan hesaplar şimdilik kullanmaya devam edebiliyor. Yani bu sayfadaki kurulum adımları mevcut Dispatch kullanıcıları içindir; yeni bir hesap açıp Dispatch'e güvenerek iş akışı kurmayın.

> **Cowork artık telefonda da var.** Cowork 7 Temmuz 2026'dan beri web ve mobilde de çalışıyor (beta; Pro, Max, Team). Mobilde connector'lar, skill'ler ve zamanlanmış görevler var; yerel dosya erişimi kısmi. Dispatch'in farkı, işi kendi masaüstünüzdeki dosya ve araçlarla yaptırmasıdır. Yeni kullanıcı için telefondan görev atmanın yolu mobil Cowork'tür. Bkz. [Cowork Modu](/wiki/araclar/cowork-modu/).

## Ne İşe Yarar?

Cowork'ü mobilleştirmenin bir yoludur, ama deneyimi telefon için yeniden kurmaz. Bunun yerine:

- **Masaüstü bilgisayarınız ağır işi yapar** (Claude çalıştırır, dosyalara erişir, kod çalıştırır, connector'ları çağırır)
- **Telefonunuz uzaktan kumandadır:** görev atar, iş bittiğinde haber alırsınız

Bir benzetme: Dispatch, masaüstünüzde sürekli çalışan bir Claude oturumuna **telsiz** gibidir. Siz toplantıdayken, yoldayken veya başka bir şey yaparken iş arka planda bitiyor.

## Nasıl Çalışır?

### Kurulum (bir kere, ~5 dakika)

1. Claude Desktop'ı indirin veya güncelleyin (macOS veya Windows x64)
2. Claude mobil uygulamasını indirin veya güncelleyin (iOS veya Android)
3. İki cihazdan birinde Cowork'ü açın → sol menüden **"Dispatch"** → **"Get started"**
4. Dosya erişimi ve "uyanık kal" ayarlarını etkinleştirin
5. Ekrandaki QR kodu telefonla tarayın, eşleştirme 30 saniyede tamamlanır

Artık iki cihaz arasında kalıcı bir konuşma hattınız var.

### Bir Görev Gönderdiğinizde Ne Olur?

1. Telefonunuzdan görevi yazarsınız veya seslendirirsiniz
2. Masaüstündeki Claude görevi alır
3. Görevin ne gerektirdiğini anlar
4. Mevcut kurulumunuzu kullanır: workspace klasörü, plugins, connector'lar
5. İşi bitirir ve size sonucunu mesaj atar, adım adım süreci değil, **çıktıyı**

**Kalıcılık:** Konuşma bağlamı görevler arasında korunur. Claude daha önce ne atadığınızı, tercihlerinizi, aktif projelerinizi hatırlar.

## Ne Tür Görevler Atayabilirsiniz?

Gerçek dünya örnekleri:

- *"Procurement klasörümdeki tedarikçi fiyat dosyasındaki verileri çıkar, karşılaştırma tablosu yap"* → masaüstünde yapılır, sonuç telefonunuza gelir
- *"Geçen haftaki Slack mesajlarımı tara, XYZ projesinin durumunu özet halinde çıkar"* → Slack connector'ından çeker, workspace'e yazar
- *"Proje klasöründe bıraktığım kurul paketinden tek sayfalık özet hazırla"* → dosyayı okur, özeti üretir
- *"Haftalık operasyon raporunu çalıştır"* → önceden kurduğunuz scheduled task'i tetikler
- *"Project ABC'deki notlardan PowerPoint sunum yap"* → pptx skill'i ile dosyayı üretir

Genel kural: **eğer masaüstünüzde oturduğunuzda Claude'a söyleyeceğiniz bir şeyse**, Dispatch'le de söyleyebilirsiniz.

## Gereksinimler

- Claude **Pro veya Max** aboneliği ve halihazırda Dispatch erişimi olan bir hesap
- Güncel Claude Desktop (macOS veya Windows x64; yardım sayfası Linux'u da listeliyor, biz Linux'ta denemedik)
- Güncel Claude mobil uygulaması (iOS veya Android)
- **Masaüstü bilgisayar açık ve uyanık, Claude Desktop çalışır durumda kalmalı**

## Sınırlamalar

- **Bilgisayar uyursa veya uygulama kapanırsa** Dispatch karanlığa geçer, görevler çalışmaz
- Dakikadan birkaç saate kadar süren görevler için idealdir, gerçek zamanlı izleme gereken işler için değil
- Eğitimde veya iş akışı tasarımında "herkes kullanabilir" varsayımıyla Dispatch'e bağımlı olmayın

**Pratik tavsiye:** Güç ayarlarında "uyuma" süresini uzatın veya "hiçbir zaman uyuma" yapın. Dispatch kullanırken bilgisayar açık kalmalı.

> **6 Ekim 2026 notu:** Pro ve Max'te yeni Cowork görevleri bulutta çalışmaya başlıyor, "masaüstü açık kalmalı" şartı bu görevler için kalkıyor. Dispatch'in kendi çalışma biçiminin bundan nasıl etkilendiği henüz duyurulmadı; yardım merkezinden kontrol edin.

## "Vay Be" Anı

Dispatch'i kullanan kişiler için bu, Claude'un en güçlü anlarından biridir. Normalde masa başında yapacağınız gerçek bir işi telefonunuzdan gönderirsiniz ve masaya döndüğünüzde işin bitmiş olarak sizi beklediğini görürsünüz. Aynı his mobil Cowork'te de yaşanabilir.

O an, kullanıcının kafasındaki algı değişir:

> **"Bu bir araç değil, benim için çalışan bir asistan."**

Bu psikolojik geçiş bir kerede olur. Sonrasında Claude'u farklı bir gözle kullanırsınız.

## İlgili Sayfalar

- [Cowork Modu](/wiki/araclar/cowork-modu/): Dispatch'in altında çalışan ortam
- [Scheduled Tasks](/wiki/araclar/scheduled-tasks/): Otomatik çalışan zamanlanmış görevler
- [Claude Desktop](/wiki/araclar/claude-desktop/): Dispatch için masaüstü tarafı
- [Claude Planları](/wiki/temeller/planlar/): Pro ve Max arasında fark

