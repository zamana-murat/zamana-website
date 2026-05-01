---
title: "Context Window ve Compaction — Claude'un Çalışan Belleği"
description: "Claude'un bağlam penceresi nedir, nasıl dolar, neden önemli. Context compaction uzun oturumları ayakta tutar. Pratik bağlam yönetimi taktikleri."
tags:
  - yetenekler
  - context-window
  - compaction
  - token
---

**Context window (bağlam penceresi), Claude'un tek bir konuşmada aynı anda "görebildiği" ve üzerinde çalışabildiği toplam metin miktarıdır.**

Sizin mesajlarınız, Claude'un cevapları, yüklenen dosyalar, araç çıktıları, talimatlar — hepsi bu pencerede yaşar.

**Context compaction** ise bu pencere dolmaya yakınken eski içeriği özetleyerek **uzun oturumları ayakta tutan** otomatik mekanizmadır.

## Bağlam Penceresinin Boyutu

Claude 4.x'te yaklaşık limitler:

| Model | Bağlam Penceresi | Kelime Karşılığı |
|---|---|---|
| Claude Sonnet / Opus (standart) | ~200.000 token | ~150.000 kelime / ~500 sayfa |
| Claude Opus 4.7 (Enterprise) | ~1.000.000 token | ~750.000 kelime / ~2.500 sayfa |
| Claude Haiku | ~200.000 token | ~150.000 kelime |

**Token nedir?** Yaklaşık 0.75 İngilizce kelime veya 3-4 karakter. Bir iş kullanıcısı token saymaz — ama şunu bilmesi gerekir: **pencere dolabilir**.

## Bağlam Penceresi Neden Önemli?

- **Uzun belgeler, büyük tablolar veya çok uzun konuşmalar** pencereyi doldurur
- Pencere dolduğunda **erken içerik unutulabilir** (eğer compaction devreye girmezse)
- Çok uzun konuşmalar zamanla **kalite düşüşü yaşar** — bkz: [Sınırlamalar](../temeller/sinirlamalar/)

Pratik örnek: 300 sayfalık bir PDF yüklediğinizde bu, pencerenin büyük kısmını hemen işgal eder. Kalan alanda yaptığınız konuşma daha kısıtlı olur.

## Context Compaction Nasıl Çalışır?

Pencere dolmaya yaklaştığında:

1. Claude bir özetleme prompt'u alır
2. Tüm konuşma geçmişinin **yapılandırılmış bir özetini** üretir — şunları korur:
   - Alınan kararlar
   - Çözülmemiş sorular
   - Anahtar olgular
   - Görev üzerindeki ilerleme
   - Önemli çıktılar
3. Orijinal mesaj geçmişi bu özetle (bir `<summary>` etiketiyle sarılarak) değiştirilir
4. Çalışma bu özeti yeni temel alarak devam eder

Bu süreç **Cowork ve Dispatch oturumlarında otomatiktir**. Çalışan genelde farkında olmaz — iş sadece devam eder.

## Ne Saklanır, Ne Atılır?

| Saklanır | Atılır |
|---|---|
| Mimari kararlar | Tekrarlayan alışverişler |
| Nihai çıktılar | Yerine yenisi konan ara taslaklar |
| Çözülmemiş sorular | Çözülmüş hata mesajları |
| Görev durumu | Sonuca bağlanmayan keşif düşüncesi |
| Kilit olgular ve veri | Geçici notlar |
| Daha önce verilen açık talimatlar | |
| Kritik bağlam | |

Özetlemenin kalitesi yüksektir. Ama bir uyarı: eğer çok önemli bir detay sadece eski konuşmada geçmişse, özet sırasında değerlendirmeye alınmayıp atılabilir. Kritik bilgiyi **CLAUDE.md veya proje dosyası** gibi "kalıcı" yerlere yazmak güvenli yöntemdir.

## İş Oturumlarında Compaction Ne Zaman Kritiktir?

Zamana müşterileri için compaction özellikle şunlarda önemlidir:

- **Uzun belge inceleme oturumları** — büyük bir sözleşmenin çoklu alışverişte analizi
- **Çok adımlı rapor üretimi** — veri toplama, taslak yazma, iterasyon, iyileştirme
- **Çoklu dosya ve araç kullanan Cowork Project oturumları**
- **Zaman içinde birçok adım gerektiren Dispatch görevleri**

Pratik sonuç: **Cowork'te karmaşık bir işte çalışan çalışan "ortada sıfırlamak" zorunda değildir**. Sistem süreklilik yönetimini otomatik yapar.

## Manuel Bağlam Yönetimi — En İyi Uygulamalar

Çalışan bağlam kalitesi üzerinde daha fazla kontrol isterse:

### 1. İlgisiz Konuya Geçerken Yeni Oturum Açın

Alakasız yükler taşımayın. Pazarlama konuşmanızdan finans konuşmasına geçerken mevcut oturumda devam etmek yerine yeni başlatın.

### 2. Çok Uzun Projeler İçin "Özetle ve Yeniden Başla"

Claude'a "bugüne kadar önemli olan her şeyi özetle" deyin. Özeti bir dosyaya kopyalayın. Yeni oturum başlatın, o dosyayı yükleyin.

### 3. Kritik Bağlamı CLAUDE.md'ye Taşıyın

Her oturumda geçerli olması gereken bilgi **CLAUDE.md**'de olmalı — her yeni oturumda taze yüklenir, compaction'dan etkilenmez.

### 4. Cowork Projects Kullanın

Project bağlam dosyaları **her oturumda taze** yüklenir. Compaction sonrası bile Project bilgisi korunur. [Projects sayfasına](../araclar/projects/) bakın.

## Uyarı İşaretleri — "Claude Unuttu" Dediğimizde

Çalışanlar bazen "Claude konuştuğumuz şeyi unuttu" der. Neredeyse her zaman cevap bağlam yönetimidir:

- **Çok uzun oturum** — compaction olsa bile kaçınılmaz kayıp olur
- **Çok sayıda ilgisiz konu aynı oturumda** — Claude'un odağı bulanıklaşır
- **Büyük dosya yüklemesi** — pencere hızla doldu
- **Yanlış yere yazılmış bilgi** — kritik şey CLAUDE.md yerine geçici mesajda

## Pratik Kılavuz

Kısa görev: bağlamı dert etme. Tek prompt, tek cevap — bitti.

Orta görev (5-10 tur alışveriş): pencere hâlâ rahat. Devam et.

Uzun görev (30+ tur, birçok dosya): şu adımları düşün:

- Önemli bilgi CLAUDE.md'de mi?
- Bu görevi bir Project altında mı yapıyorum?
- Compaction tetiklendiğinde atlaması mümkün hassas detay var mı?

Çok uzun proje (saatlerce, birden fazla gün): **kesinlikle** Project bağlam dosyaları ve CLAUDE.md yapılandırılmalı. Tek bir monolitik oturum tercih etme.

## Zamana'nın Öğretme Yaklaşımı

Bağlam bir **sınırlı kaynaktır**. Kısa görevlerde görmezden gelin. Uzun ve karmaşık projelerde, en önemli bağlamın **CLAUDE.md veya proje dosyalarında** bulunması için işi yapılandırın — uzun bir konuşmanın içine gömülmesin.

Bu tek prensip, çalışanların en sık şikayet ettiği "Claude bir şeyi unutuyor" problemini büyük ölçüde çözer.

## İlgili Sayfalar

- [Claude'un Sınırları](../temeller/sinirlamalar/) — Uzun oturumlarda kalite düşüşü
- [CLAUDE.md Nedir?](../claude-md/nedir/) — Compaction'a dayanıklı kalıcı bağlam
- [Projects](../araclar/projects/) — Oturumlar arası hafıza
- [Memory Yönetimi](../claude-md/memory-yonetimi/) — Dört hafıza katmanının detayı

