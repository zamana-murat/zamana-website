---
title: Dispatch — Telefonunuzdan Uzaktan Görev Atamak
description: "Claude'un Dispatch özelliği, telefonunuzdan masaüstü Cowork oturumunuza görev göndermenizi sağlar. Siz toplantıdayken Claude işi bitirir."
tags:
  - araclar
  - dispatch
  - mobil
  - cowork
---

**Dispatch, Cowork'ün bir özelliğidir — telefonunuzla masaüstü bilgisayarınız arasında kalıcı bir konuşma hattı kurar.** Her yerden bir görev gönderirsiniz, iş bittiğinde sonucu teslim alırsınız.

Dispatch şu anda research preview aşamasındadır ve **Pro ile Max** abonelerinin erişimine açıktır.

## Ne İşe Yarar?

Cowork'ü mobilleştirmenin bir yoludur — ama deneyimi mobil için yeniden inşa etmeye çalışmaz. Yerine:

- **Masaüstü bilgisayarınız ağır işi yapar** (Claude çalıştırır, dosyalara erişir, kod çalıştırır, connector'ları çağırır)
- **Telefonunuz uzaktan kumandadır** — görev atar, iş bittiğinde haber alırsınız

Bir benzetme: Dispatch, masaüstünüzde sürekli çalışan bir Claude oturumuna **telsiz** gibidir. Siz toplantıdayken, yoldayken veya başka bir şey yaparken iş arka planda bitiyor.

## Nasıl Çalışır?

### Kurulum (bir kere, ~5 dakika)

1. Claude Desktop'ı indirin veya güncelleyin (macOS veya Windows x64)
2. Claude mobil uygulamasını indirin veya güncelleyin (iOS veya Android)
3. İki cihazdan birinde Cowork'ü açın → sol menüden **"Dispatch"** → **"Get started"**
4. Dosya erişimi ve "uyanık kal" ayarlarını etkinleştirin
5. Ekrandaki QR kodu telefonla tarayın — eşleştirme 30 saniyede tamamlanır

Artık iki cihaz arasında kalıcı bir konuşma hattınız var.

### Bir Görev Gönderdiğinizde Ne Olur?

1. Telefonunuzdan görevi yazarsınız veya seslendirirsiniz
2. Masaüstündeki Claude görevi alır
3. Görev tipini analiz eder — Cowork mu gerekli, başka bir mod mu?
4. Mevcut kurulumunuzu kullanır: workspace klasörü, plugins, connector'lar
5. İşi bitirir ve size sonucunu mesaj atar — adım adım süreci değil, **çıktıyı**

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

- Claude **Pro veya Max** aboneliği
- Güncel Claude Desktop (macOS veya Windows x64)
- Güncel Claude mobil uygulaması (iOS veya Android)
- **Masaüstü bilgisayar açık ve Claude Desktop çalışır durumda kalmalı**

## Sınırlamalar

- **Bilgisayar uyursa veya uygulama kapanırsa** Dispatch karanlığa geçer, görevler çalışmaz
- Dakikadan birkaç saate kadar süren görevler için idealdir — gerçek zamanlı izleme gereken işler için değil
- Linux henüz desteklenmiyor

**Pratik tavsiye:** Bilgisayarınızı gün boyunca uyanık tutmak için güç ayarlarında "uyuma" süresini uzatın veya "hiçbir zaman uyuma" yapın. Dispatch kullandığınızda bilgisayar her zaman açık kalmalı.

## Zamana'nın "Vay Be" Anı

Dispatch, Zamana'nın ikinci oturumda gösterdiği en güçlü özelliklerden biridir. Çalışan gerçek bir işi telefonundan gönderir — normalde masa başında yapacağı bir şey — ve masaya döndüğünde işin bitmiş olarak kendisini beklediğini görür.

O an, çalışanın kafasındaki algı değişir:

> **"Bu bir araç değil — benim için çalışan bir asistan."**

Bu psikolojik geçiş bir kerede olur. Sonrasında çalışan Claude'u farklı bir gözle kullanır.

## İlgili Sayfalar

- [Cowork Modu](cowork-modu/) — Dispatch'in altında çalışan ortam
- [Scheduled Tasks](scheduled-tasks/) — Otomatik çalışan zamanlanmış görevler
- [Claude Desktop](claude-desktop/) — Dispatch için masaüstü tarafı
- [Claude Planları](../temeller/planlar/) — Pro ve Max arasında fark

