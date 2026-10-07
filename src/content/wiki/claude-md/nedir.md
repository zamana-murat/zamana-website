---
title: CLAUDE.md Nedir?
seoTitle: "CLAUDE.md Nedir? Nerede Okunur, Sohbetteki Karşılığı"
description: "CLAUDE.md, Claude'a sizi tanıtan düz metin dosyasıdır. Cowork klasöründe ve Claude Code'da okunur, sohbette okunmaz; karşılığı profil talimatıdır."
tags:
  - claude-md
  - temel-kavram
  - cowork
lastUpdated: "2026-10-06"
---

**CLAUDE.md, Claude'un sizi (ve varsa şirketinizi) her oturumda yeniden tanımak zorunda kalmaması için hazırlanan düz metin bir dosyadır.**

Markdown formatındadır. Çalıştığınız klasörde durur. Claude, bu klasörle çalışan bir oturum başlattığında (masaüstündeki yerel Cowork oturumu, Claude Code) dosyayı okur ve sessiz bir şekilde "tamam, bu kullanıcıyı tanıyorum" deyip işe başlar.

## CLAUDE.md Nerede Çalışır?

Önce en sık yanlış anlaşılan nokta: CLAUDE.md her yerde otomatik okunan bir dosya değildir. Hangi ortamda çalıştığınıza bağlıdır.

| Ortam | CLAUDE.md okunur mu? | Karşılığı |
|---|---|---|
| **Sohbet** (claude.ai, mobil) | Hayır, dosya olarak okunmaz | **Profil talimatı** (Ayarlar > General > "Instructions for Claude") ve **proje talimatı** |
| **Yerel Cowork oturumu** (Claude Desktop, klasör bağlı) | Evet, klasördeki dosya okunur | Cowork yardım sayfaları buna "klasör talimatı" der |
| **Bulut Cowork oturumu** | Okunduğu belgelenmemiş | Klasörler elle eklenir; kritik kuralı profil talimatına da yazın |
| **Claude Code** | Evet, hiyerarşik olarak | Geliştiriciler için; ayrıntı [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/) sayfasının son kutusunda |

Hangi yerin nerede geçerli olduğunu ve kimin yönettiğini tek tabloda [Kalıcı Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/#kalıcı-talimat-ve-hafıza-yerleri) bölümünde görebilirsiniz. Bu sayfada anlatılan fikir ise hepsinde aynıdır: **kendinizi bir kez yazarsınız, kullandığınız yere koyarsınız.**

> **Güncel durum:** Cowork ve sohbet 16 Eylül 2026'dan beri tek Claude içinde birleşiyor (kademeli yayılım). Klasörle çalıştığınız yerde CLAUDE.md okunur; sohbet tarafında benzer işi [Projects](/wiki/araclar/projects/) talimatları, profil talimatı ve Claude'un [yerleşik hafızası](/wiki/yetenekler/memory/) görür.

Bu dosyanın (ya da sohbetteki karşılığının) değeri pratikte hızla görünür: **Claude'u genel bir asistan olmaktan çıkarıp size özel bir asistana dönüştüren mekanizma, kalıcı talimattır**: kendi tarzınıza, işinize, varsa ekibinize uygun bir asistan.

## Neden Önemli?

Claude'un her oturumu kendi bağlamıyla başlar. Yerleşik bir hafızası da vardır (Free, Pro ve Max'te varsayılan açık, Team ve Enterprise'ta varsayılan kapalı), ama o neyi biriktireceğine kendisi karar verir. "Şu kural her zaman geçerli" demek için güvenebileceğiniz bir yer değildir. İki hafta önce anlattığınız pazarlama stratejisinin, şirketinizin adının, sektörünüzün ve tercihlerinizin ne kadarının hatırlanacağını garanti edemezsiniz.

Bu durum iki soruna yol açar:

1. **Tekrar.** Her oturumda kim olduğunuzu, ne yaptığınızı, şirketin ne ürettiğini baştan anlatmanız gerekir. 5 dakika burada, 5 dakika orada, haftada saatlere ulaşır.
2. **Tutarsızlık.** Farklı oturumlarda Claude'a aynı bağlamı farklı biçimlerde verirsiniz. Çıktıların kalitesi dalgalanır. Ton değişir.

CLAUDE.md bu iki sorunu ortadan kaldırır:

> **Bir kere yazarsınız, Claude her oturumda (dosyanın ya da profil talimatının geçerli olduğu yerde) sanki sizinle aylardır çalışıyormuş gibi başlar.**

## CLAUDE.md Nasıl Devreye Girer?

CLAUDE.md'siz Claude ile CLAUDE.md'li Claude arasındaki fark şudur: ilki her seferinde "kim olduğunuzu" sıfırdan öğrenir, ikincisi dosyayı sessizce okur ve hazır başlar. Sohbette bu okumayı profil talimatı yapar.

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

CLAUDE.md, çalıştığınız **klasörün içinde** durur (örneğin Cowork'te bağladığınız klasör). Basit bir metin dosyasıdır: Notepad, TextEdit, VS Code veya Word (metin olarak kaydettiğiniz sürece) gibi herhangi bir editörle açıp düzenleyebilirsiniz. Dosyaya tam olarak `CLAUDE.md` adını verin.

Yerel Cowork oturumu bu dosyayı okur; siz bir şey yapmanız gerekmez. Yine de **güvenli çizgiyi** izleyin: ilk mesajda "talimatımı 3 maddede özetle" diye test edin ve kritik kuralların kısa sürümünü profil talimatına da yazın. Cowork yardım sayfaları dosyayı adıyla anmaz, bu yüzden testle doğrulamak sağlam yoldur.

Sohbet kullanıyorsanız dosya yerine aynı metni profil talimatına koyun. Hepsi için: [Kalıcı Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/).

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

Bu 20 satır, dosyanın okunduğu (ya da profil talimatına konduğu) her yerde Claude'un profesyonel bir meslektaş gibi davranması için yeterlidir.

## İlgili Sayfalar

- [CLAUDE.md Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/): Adım adım rehber
- [CLAUDE.md Örnekleri](/wiki/claude-md/ornekler/): Farklı roller için gerçek örnekler
- [Kalıcı Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/): Hangisi nerede geçerli, tek tabloda
- [Hata Ayıklama](/wiki/claude-md/hata-ayiklama/): Yazdım ama okunmadı
- [Cowork Modu](/wiki/araclar/cowork-modu/): Klasörle çalışan ortam


