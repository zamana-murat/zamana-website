---
title: CLAUDE.md Nedir?
seoTitle: "CLAUDE.md Nedir? Nerede Okunur, Sohbet Karşılığı"
description: "CLAUDE.md, Claude'a sizi tanıtan düz metin dosyasıdır. Cowork klasöründe ve Claude Code'da okunur, sohbette okunmaz; karşılığı profil talimatıdır."
tags:
  - claude-md
  - temel-kavram
  - cowork
lastUpdated: "2026-11-26"
---

CLAUDE.md, Claude'un sizi (ve varsa şirketinizi) her oturumda yeniden tanımak zorunda kalmaması için hazırladığınız düz metin bir dosyadır.

Markdown formatındadır ve çalıştığınız klasörde durur. Claude bu klasörle çalışan bir oturum başlattığında (masaüstündeki yerel Cowork oturumu, Claude Code) dosyayı okur ve sizi tanıyarak işe başlar.

## CLAUDE.md Nerede Çalışır?

En sık yanlış anlaşılan nokta şu: CLAUDE.md her yerde otomatik okunmaz, hangi ortamda çalıştığınıza bağlıdır.

| Ortam | CLAUDE.md okunur mu? | Karşılığı |
|---|---|---|
| **Sohbet** (claude.ai, mobil) | Hayır, dosya olarak okunmaz | **Profil talimatı** (Ayarlar > General > "Instructions for Claude") ve **proje talimatı** |
| **Yerel Cowork oturumu** (Claude Desktop, klasör bağlı) | Evet, klasördeki dosya okunur (CLAUDE.md yoksa AGENTS.md) | Cowork belgeleri "klasör talimatı" der ama dosyayı adıyla anmaz; "talimatımı 3 maddede özetle" testiyle doğrulayın |
| **Bulut Cowork oturumu** | Okunduğu belgelenmemiş | Klasörler elle eklenir; kritik kuralı profil talimatına da yazın |
| **Claude Code** | Evet, hiyerarşik olarak | Geliştiriciler için; ayrıntı [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/) sayfasının son kutusunda |

Hangi yerin nerede geçerli olduğunu ve kimin yönettiğini tek tabloda [Kalıcı Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/#kalıcı-talimat-ve-hafıza-yerleri) bölümünde görebilirsiniz. Fikir hepsinde aynıdır: kendinizi bir kez yazarsınız, kullandığınız yere koyarsınız.

> Güncel durum: Cowork ve sohbet 16 Eylül 2026'dan beri tek Claude içinde birleşiyor (kademeli yayılım; Enterprise'ta 23 Ekim 2026'da genel kullanıma açıldı, Team ve Enterprise'ta yönetici "Chat and Cowork unified" ayarıyla açar). Klasörle çalıştığınız yerde CLAUDE.md okunur; sohbet tarafında benzer işi [Projects](/wiki/araclar/projects/) talimatları, profil talimatı ve Claude'un [yerleşik hafızası](/wiki/yetenekler/memory/) görür.

Kalıcı talimat (dosya ya da sohbetteki karşılığı), Claude'u genel bir asistandan kendi tarzınıza, işinize ve varsa ekibinize uygun bir asistana çevirir.

## Neden Önemli?

Claude'un her oturumu kendi bağlamıyla başlar. Yerleşik bir hafızası da vardır (Free, Pro, Max ve Ultra'da varsayılan açık, Team ve Enterprise'ta varsayılan kapalı), ama o neyi biriktireceğine kendisi karar verir. "Şu kural her zaman geçerli" demek için güvenebileceğiniz bir yer değildir. İki hafta önce anlattığınız pazarlama stratejisinin, şirketinizin adının, sektörünüzün ve tercihlerinizin ne kadarının hatırlanacağını garanti edemezsiniz.

Bu durum iki soruna yol açar:

1. Tekrar. Her oturumda kim olduğunuzu, ne yaptığınızı, şirketin ne ürettiğini baştan anlatmanız gerekir. 5 dakika burada, 5 dakika orada, haftada saatleri bulur.
2. Tutarsızlık. Farklı oturumlarda Claude'a aynı bağlamı farklı biçimlerde verirsiniz. Çıktıların kalitesi dalgalanır. Ton değişir.

CLAUDE.md bu iki sorunu ortadan kaldırır:

> Bir kere yazarsınız, Claude her oturumda (dosyanın ya da profil talimatının geçerli olduğu yerde) sanki sizinle aylardır çalışıyormuş gibi başlar.

## CLAUDE.md Nasıl Devreye Girer?

CLAUDE.md olmadan Claude her seferinde kim olduğunuzu sıfırdan öğrenir; dosya varsa onu okur ve hazır başlar. Sohbette bu okumayı profil talimatı yapar.

## Ne İçerir?

İyi bir CLAUDE.md genellikle şu bilgileri içerir; hepsi şart değil, size ne lazımsa onu koyun:

- Kim olduğunuz: Ad, soyad, pozisyon, rol
- Şirket bilgisi: Şirket adı, sektör, ürün ve hizmetler
- Anahtar kişiler: Yöneticiniz, ekibiniz, kilit paydaşlar: kim neyle ilgileniyor
- Kullandığınız araçlar: CRM, muhasebe yazılımı, iş birliği platformları
- Ton tercihleri: Resmi mi, samimi mi; hangi kelimelerden kaçınıyorsunuz
- Tekrar eden iş akışları: "Her ay şunu yaparım, şu formatta olsun"
- Her zaman yap / Asla yapma kuralları: "Her e-postayı önce taslak göster, doğrudan göndermeye çalışma"
- Departmana özgü kelime dağarcığı ve kısaltmalar: Şirketinize özel terimler, kod adları, iç jargon
- Güncel odak: Şu an hangi projeler aktif, hangi hedefler öncelikli

## Ne Koymamalısınız?

CLAUDE.md açık yazılan, kolay okunan bir dosyadır. Bu şeffaflık işe yarar, ama bazı şeyleri dosyaya yazmamanız gerekir:

- Şifreler ya da hassas kimlik bilgileri: dosya kalıcıdır ve yedeklenebilir, kritik sırları içine yazmayın.
- Başkalarının kişisel verileri: KVKK kapsamında izinsiz kişisel bilgi saklamak risklidir, kendi bilgilerinizle sınırlı tutun.
- Çelişen talimatlar: "Her zaman resmi yaz" ile "samimi ol" aynı dosyada durursa Claude hangisine uyacağını bilemez.
- Aşırı katı kurallar: "Hiçbir zaman liste kullanma" gibi kesin yasaklar Claude'u gereksiz kısıtlar.

## Nerede Durur?

CLAUDE.md, çalıştığınız klasörün içinde durur (örneğin Cowork'te bağladığınız klasör). Basit bir metin dosyasıdır: Notepad, TextEdit, VS Code veya Word (metin olarak kaydettiğiniz sürece) gibi herhangi bir editörle açıp düzenleyebilirsiniz. Dosyaya tam olarak `CLAUDE.md` adını verin.

Yerel Cowork oturumu bu dosyayı okur; sizin bir şey yapmanız gerekmez. Yine de güvenli çizgiyi izleyin: ilk mesajda "talimatımı 3 maddede özetle" diye test edin ve kritik kuralların kısa sürümünü profil talimatına da yazın. Cowork yardım sayfaları dosyayı adıyla anmaz, bu yüzden testle doğrulamak en sağlam yoldur.

Sohbet kullanıyorsanız dosya yerine aynı metni profil talimatına koyun. Hepsi için: [Kalıcı Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/).

## Nasıl Büyür?

İlk yazdığınız CLAUDE.md eksik olur, kullandıkça tamamlanır. Pratik kural şu:

> Claude'a aynı şeyi iki kere anlattığınızı fark ettiğinizde hemen CLAUDE.md'nizi açın ve o bilgiyi dosyaya yazın.

Bu kuralı uygulayan çalışan bir iki ay içinde kendisine göre kişiselleştirilmiş, işe yarayan bir CLAUDE.md edinir. Uygulanmazsa dosya eskir ve değeri düşer.

## Şeffaflığın Kurumsal Değeri

CLAUDE.md'nin otomatik hafızaya (Claude'un yerleşik hafızası dahil) göre en büyük üstünlüğü şeffaflık ve kontroldür.

- Gördüğünüz dosya, Claude'un gördüğü bilgidir. Arka planda sizin yazmadığınız bir kayıt yoktur.
- Yanlış bir şey yazdıysanız silip düzeltirsiniz; aratmaya ya da deneme yanılmaya gerek kalmaz.
- Bir çalışan şirketten ayrılırsa CLAUDE.md'ye bakarak şirket bilgilerinin neyi içerdiğini tek bakışta görürsünüz. Otomatik biriken hafızalarda bu denetim daha zordur.

Kurumsal kullanımda şeffaflık zorunludur: KVKK, iç denetim ve bilgi güvenliği politikaları bunu gerektirir.

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


