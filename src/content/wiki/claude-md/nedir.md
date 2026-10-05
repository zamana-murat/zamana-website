---
title: CLAUDE.md Nedir?
description: CLAUDE.md, Claude'un sizi ve şirketinizi her oturumda yeniden tanımasını önleyen basit bir metin dosyasıdır. Ciddi Claude kullanımının kalbidir.
tags:
  - claude-md
  - temel-kavram
  - cowork
lastUpdated: "2026-10-05"
---

**CLAUDE.md, Claude'un sizi (ve varsa şirketinizi) her oturumda yeniden tanımak zorunda kalmaması için hazırlanan düz metin bir dosyadır.**

Markdown formatındadır. Workspace klasörünüzde durur. Claude, Cowork'te bir oturum başlattığınızda bu dosyayı otomatik olarak okur ve sessiz bir şekilde "tamam, bu kullanıcıyı tanıyorum" deyip işe başlar.

> **Güncel durum:** Cowork ve sohbet 16 Eylül 2026'dan beri tek Claude içinde birleşiyor (kademeli yayılım). CLAUDE.md'nin işlevi değişmedi: Claude'un bir çalışma klasörüyle çalıştığı yerde, yani Cowork tarzı işlerde ve Claude Code'da, klasördeki dosya okunur. Sohbet tarafında benzer işi [Projects](/wiki/araclar/projects/) talimatları ve Claude'un [yerleşik hafızası](/wiki/yetenekler/memory/) görür. Ayrıntı için [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/) sayfasına bakın.

Bu dosyanın değeri pratikte hızla görünür: **CLAUDE.md, Claude'u genel bir asistan olmaktan çıkarıp size özel bir asistana dönüştüren mekanizmadır**: kendi tarzınıza, işinize, varsa ekibinize uygun bir asistan.

## Neden Önemli?

Claude'un her oturumu kendi bağlamıyla başlar. Yerleşik bir hafızası da vardır (Free, Pro ve Max'te varsayılan açık, Team ve Enterprise'ta varsayılan kapalı), ama o neyi biriktireceğine kendisi karar verir. "Şu kural her zaman geçerli" demek için güvenebileceğiniz bir yer değildir. İki hafta önce anlattığınız pazarlama stratejisinin, şirketinizin adının, sektörünüzün ve tercihlerinizin ne kadarının hatırlanacağını garanti edemezsiniz.

Bu durum iki soruna yol açar:

1. **Tekrar.** Her oturumda kim olduğunuzu, ne yaptığınızı, şirketin ne ürettiğini baştan anlatmanız gerekir. 5 dakika burada, 5 dakika orada, haftada saatlere ulaşır.
2. **Tutarsızlık.** Farklı oturumlarda Claude'a aynı bağlamı farklı biçimlerde verirsiniz. Çıktıların kalitesi dalgalanır. Ton değişir.

CLAUDE.md bu iki sorunu ortadan kaldırır:

> **Bir kere yazarsınız, Claude her oturumda sanki sizinle aylardır çalışıyormuş gibi başlar.**

## CLAUDE.md Nasıl Devreye Girer?

CLAUDE.md'siz Claude ile CLAUDE.md'li Claude arasındaki fark şudur: ilki her seferinde "kim olduğunuzu" sıfırdan öğrenir, ikincisi dosyayı sessizce okur ve hazır başlar.

## Ne İçerir?

İyi bir CLAUDE.md genellikle şu bilgileri içerir. Şart değildir, size ne lazımsa onu koyun:

- **Kim olduğunuz:** Ad, soyad, pozisyon, rol
- **Şirket bilgisi:** Şirket adı, sektör, ürün ve hizmetler
- **Anahtar kişiler:** Yöneticiniz, ekibiniz, kilit paydaşlar: kim neyle ilgileniyor
- **Kullandığınız araçlar:** CRM, muhasebe yazılımı, iş birliği platformları
- **Ton tercihleri:** Resmi mi, samimi mi; hangi kelimelerden kaçınıyorsunuz
- **Tekrar eden iş akışları:** "Her ay şunu yaparım, şu formatta olsun"
- **Her zaman yap / Asla yapma kuralları:** "Her e-postayı önce taslak göster, doğrudan göndermeye çalışma"
- **Departmana özgü kelime dağarcığı ve kısaltmalar:** Şirketinize özel terimler, kod adları, iç jargon
- **Güncel odak:** Şu an hangi projeler aktif, hangi hedefler öncelikli

## Ne Koymamalısınız?

Bir CLAUDE.md dosyası **şeffaf** bir dosyadır. Açık yazılır, kolay okunur. Bu şeffaflık onu güçlü kılar, ama aynı zamanda sınırları da belirler:

- **Şifreler veya hassas kimlik bilgileri.** Bu dosya kalıcıdır ve yedeklenebilir. Kritik sırları asla içine yazmayın.
- **Başkalarının kişisel verileri.** KVKK kapsamında izinsiz kişisel bilgi saklamak risklidir. Kendi bilgilerinizle sınırlı tutun.
- **Çelişen talimatlar.** "Her zaman resmi yaz" ile "samimi ol" aynı dosyada durursa Claude şaşırır.
- **Aşırı katı kurallar.** "Hiçbir zaman liste kullanma" gibi kesin yasaklar esnekliği öldürür. Claude'un karar alanını tamamen kapatmayın.

## Nerede Durur?

CLAUDE.md, Cowork'te bağladığınız **workspace klasörünüzün içinde** durur. Basit bir metin dosyasıdır: Notepad, TextEdit, VS Code veya Word (metin olarak kaydettiğiniz sürece) gibi herhangi bir editörle açıp düzenleyebilirsiniz.

Cowork her yeni oturum başlattığında bu dosyayı otomatik olarak okur. Siz bir şey yapmanız gerekmez.

## Nasıl Büyür?

İyi bir CLAUDE.md dosyası doğumundan itibaren mükemmel değildir. Büyüyerek mükemmelleşir.

Pratik altın kural:

> **Claude'a aynı şeyi iki kere anlattığınızı fark ettiğinizde, hemen CLAUDE.md'nizi açın ve o bilgiyi dosyaya yazın.**

Bu kuralı uygulayan bir çalışan, bir iki ay içinde kendisi için gerçekten işe yarayan, kişiselleştirilmiş bir CLAUDE.md'ye sahip olur. Kural uygulanmazsa dosya zamanla paslanır ve değeri düşer.

## Şeffaflığın Kurumsal Değeri

CLAUDE.md'nin otomatik hafıza özellikleri (Claude'un yerleşik hafızası dahil) karşısındaki en büyük üstünlüğü **şeffaflık ve kontroldür**.

- **Gördüğünüz dosya, Claude'un gördüğü bilgidir.** Sürpriz yok. Arka planda sizin yazmadığınız bir kayıt yok.
- **Yanlış bir şey yazdıysanız silip düzeltirsiniz.** Aratmaya, deneme yanılmaya gerek yok.
- **Kurumsal denetim mümkündür.** Bir çalışan şirketten ayrılırsa, CLAUDE.md dosyasına bakarak şirket bilgilerinin neyi içerdiğini tek bakışta anlamak mümkündür. Otomatik biriken hafızalarda bu denetim daha zordur.

Kurumsal kullanımda şeffaflık iyi bir özellik değil, **zorunlu bir özelliktir**. KVKK, iç denetim, bilgi güvenliği politikaları hepsi bunu gerektirir.

## Basit Bir Örnek

```markdown
# CLAUDE.md: Ayşe Kaya

## Kim Olduğum
- İsim: Ayşe Kaya
- Pozisyon: Pazarlama Direktörü, ABC Tekstil A.Ş.

## Ton Tercihleri
- Resmi ama robotik değil
- Kısa, direkt, lafı gevelemeyen
- Türkçe: profesyonel, modern; İngilizce: business casual

## Her Zaman / Asla
- Her zaman: önemli bir yazıyı göndermeden önce taslağı göster
- Asla: müşteri fiyat bilgisini dış iletişimde paylaşma
- Asla: çalışanlar hakkında özel yorum yapma

## Güncel Odak
- 2026 son çeyrek ihracat kampanyası içerik üretimi
- Yeni katalog tasarımının pazara hazırlanması
```

Bu 20 satır, her oturumun başında Claude'un profesyonel bir meslektaş gibi davranması için yeterlidir.

## İlgili Sayfalar

- [CLAUDE.md Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/): Adım adım rehber
- [CLAUDE.md Örnekleri](/wiki/claude-md/ornekler/): Farklı roller için gerçek örnekler
- [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/): CLAUDE.md dışındaki hafıza mekanizmaları
- [Cowork Modu](/wiki/araclar/cowork-modu/): CLAUDE.md'nin devreye girdiği ortam


