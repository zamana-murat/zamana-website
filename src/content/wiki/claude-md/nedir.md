---
title: CLAUDE.md Nedir?
description: CLAUDE.md, Claude'un sizi ve şirketinizi her oturumda yeniden tanımasını önleyen basit bir metin dosyasıdır. Zamana eğitim programlarının kalbidir.
tags:
  - claude-md
  - temel-kavram
  - cowork
---

**CLAUDE.md, Claude'un sizi (ve varsa şirketinizi) her oturumda yeniden tanımak zorunda kalmaması için hazırlanan düz metin bir dosyadır.**

Markdown formatındadır. Workspace klasörünüzde durur. Claude, Cowork modunda bir oturum başlattığınızda bu dosyayı otomatik olarak okur ve sessiz bir şekilde "tamam, bu kullanıcıyı tanıyorum" deyip işe başlar.

Zamana eğitim programlarında bu dosyaya verdiğimiz önem bir slogan değildir: **CLAUDE.md, Claude'u genel bir asistan olmaktan çıkarıp size özel bir asistana dönüştüren mekanizmadır** — kendi tarzınıza, işinize, varsa ekibinize uygun.

## Neden Önemli?

Claude varsayılan olarak **stateless** çalışır. Her oturum sıfırdan başlar. İki hafta önce anlattığınız pazarlama stratejisini, şirketinizin adını, sektörünüzü, tercihlerinizi — hiçbirini hatırlamaz.

Bu iki sorunu doğurur:

1. **Tekrar.** Her oturumda kim olduğunuzu, ne yaptığınızı, şirketin ne ürettiğini baştan anlatmanız gerekir. 5 dakika burada, 5 dakika orada — haftada saatlere ulaşır.
2. **Tutarsızlık.** Farklı oturumlarda Claude'a aynı bağlamı farklı biçimlerde verirsiniz. Çıktıların kalitesi dalgalanır. Ton değişir.

CLAUDE.md bu iki sorunu ortadan kaldırır:

> **Bir kere yazarsınız, Claude her oturumda sanki sizinle aylardır çalışıyormuş gibi başlar.**

## CLAUDE.md Nasıl Devreye Girer?

**Stateless Claude (CLAUDE.md'siz)** vs. **Bağlamlı Claude (CLAUDE.md'li)** farkı: ilki her seferinde "kim olduğunuzu" sıfırdan öğrenir, ikincisi dosyayı sessizce okur ve hazır başlar.

## Ne İçerir?

İyi bir CLAUDE.md genellikle şu bilgileri içerir. Şart değildir — size ne lazımsa onu koyun:

- **Kim olduğunuz:** Ad, soyad, pozisyon, rol
- **Şirket bilgisi:** Şirket adı, sektör, ürün ve hizmetler
- **Anahtar kişiler:** Yöneticiniz, ekibiniz, kilit paydaşlar — kim neyle ilgileniyor
- **Kullandığınız araçlar:** CRM, muhasebe yazılımı, iş birliği platformları
- **Ton tercihleri:** Resmi mi, samimi mi; hangi kelimelerden kaçınıyorsunuz
- **Tekrar eden iş akışları:** "Her ay şunu yaparım, şu formatta olsun"
- **Her zaman yap / Asla yapma kuralları:** "Her e-postayı önce taslak göster, doğrudan göndermeye çalışma"
- **Departmana özgü kelime dağarcığı ve kısaltmalar:** Şirketinize özel terimler, kod adları, iç jargon
- **Güncel odak:** Şu an hangi projeler aktif, hangi hedefler öncelikli

## Ne Koymamalısınız?

Bir CLAUDE.md dosyası **şeffaf** bir dosyadır. Açık yazılır, kolay okunur. Bu şeffaflık onu güçlü kılar — ama aynı zamanda sınırları da belirler:

- **Şifreler veya hassas kimlik bilgileri.** Bu dosya kalıcıdır ve yedeklenebilir. Kritik sırları asla içine yazmayın.
- **Başkalarının kişisel verileri.** KVKK kapsamında izinsiz kişisel bilgi saklamak risklidir. Kendi bilgilerinizle sınırlı tutun.
- **Çelişen talimatlar.** "Her zaman resmi yaz" ile "samimi ol" aynı dosyada durursa Claude şaşırır.
- **Aşırı katı kurallar.** "Hiçbir zaman liste kullanma" gibi kesin yasaklar esnekliği öldürür. Claude'un karar alanını tamamen kapatmayın.

## Nerede Durur?

CLAUDE.md, Cowork modunda bağladığınız **workspace klasörünüzün içinde** durur. Basit bir metin dosyasıdır — Notepad, TextEdit, VS Code, Word (metin olarak kaydettiğiniz sürece) — herhangi bir editörle açıp düzenleyebilirsiniz.

Cowork her yeni oturum başlattığında bu dosyayı otomatik olarak okur. Siz bir şey yapmanız gerekmez.

## Nasıl Büyür?

İyi bir CLAUDE.md dosyası doğumundan itibaren mükemmel değildir. Büyüyerek mükemmelleşir.

Zamana'nın altın kuralı:

> **Kendinize Claude'a aynı şeyi iki kere anlattığınızı fark ettiğinizde, hemen CLAUDE.md'nizi açın ve o bilgiyi dosyaya yazın.**

Bu kuralı uygulayan bir çalışan, bir iki ay içinde kendisi için gerçekten işe yarayan, kişiselleştirilmiş bir CLAUDE.md'ye sahip olur. Kural uygulanmazsa dosya zamanla paslanır ve değeri düşer.

## Şeffaflığın Kurumsal Değeri

CLAUDE.md'nin ChatGPT'nin otomatik hafıza özelliği karşısındaki en büyük üstünlüğü **şeffaflıktır**.

- **Gördüğünüz dosya, Claude'un gördüğü bilgidir.** Sürpriz yok. Arka planda bilinmeyen bir yerde saklanan veri yok.
- **Yanlış bir şey yazdıysanız silip düzeltirsiniz.** Aratmaya, deneme yanılmaya gerek yok.
- **Kurumsal denetim mümkündür.** Bir çalışan şirketten ayrılırsa, CLAUDE.md dosyasına bakarak şirket bilgilerinin nereye kadar sızdırılmış olduğunu anlamak mümkündür. ChatGPT memory ile bu denetim güçtür.

Kurumsal kullanımda şeffaflık iyi bir özellik değil — **zorunlu bir özelliktir**. KVKK, iç denetim, bilgi güvenliği politikaları hepsi bunu gerektirir.

## Basit Bir Örnek

```markdown
# CLAUDE.md — Murat Özsaygılı

## Kim Olduğum
- İsim: Murat Özsaygılı
- Pozisyon: Kurucu ve Baş Danışman, Zamana Kurumsal Eğitim

## Ton Tercihleri
- Resmi ama robotik değil
- Kısa, direkt, lafı gevelemeyen
- Türkçe: profesyonel, modern; İngilizce: business casual

## Her Zaman / Asla
- Her zaman: önemli bir yazıyı göndermeden önce taslağı göster
- Asla: müşteri fiyat bilgisini dış iletişimde paylaşma
- Asla: çalışanlar hakkında özel yorum yapma

## Güncel Odak
- Zamana wiki içerik üretimi (Türkçe, Claude eğitimi)
- Q2 2026'da ilk kurumsal eğitim anlaşmasını imzalamak
```

Bu 20 satır, her oturumun başında Claude'un profesyonel bir meslektaş gibi davranması için yeterlidir.

## İlgili Sayfalar

- [CLAUDE.md Nasıl Yazılır?](nasil-yazilir/) — Adım adım rehber
- [CLAUDE.md Örnekleri](ornekler/) — Farklı roller için gerçek örnekler
- [Memory Yönetimi](memory-yonetimi/) — CLAUDE.md dışındaki hafıza mekanizmaları
- [Cowork Modu](../araclar/cowork-modu/) — CLAUDE.md'nin devreye girdiği ortam


