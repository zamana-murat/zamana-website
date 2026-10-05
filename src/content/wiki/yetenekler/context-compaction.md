---
title: "Context Window ve Compaction: Claude'un Çalışan Belleği"
description: "Claude'un bağlam penceresi nedir, nasıl dolar, neden önemli. Context compaction uzun oturumları ayakta tutar. Pratik bağlam yönetimi taktikleri."
tags:
  - yetenekler
  - context-window
  - compaction
  - token
lastUpdated: "2026-10-05"
---

**Context window (bağlam penceresi), Claude'un tek bir konuşmada aynı anda "görebildiği" ve üzerinde çalışabildiği toplam metin miktarıdır.**

Sizin mesajlarınız, Claude'un cevapları, yüklenen dosyalar, araç çıktıları, talimatlar, hepsi bu pencerede yaşar.

**Context compaction** ise bu pencere dolmaya yakınken eski içeriği özetleyerek **uzun oturumları ayakta tutan** otomatik mekanizmadır.

## Bağlam Penceresinin Boyutu

Güncel modellerde yaklaşık limitler (sohbet penceresi; ücretli planlarda fark yok, Free için resmi değer yayımlanmıyor):

| Model | Bağlam Penceresi | İngilizce metin karşılığı |
|---|---|---|
| Fable 5.1, Opus 5.5, Sonnet 5.5 | ~1.000.000 token | ~750.000 kelime / ~2.500 sayfa |
| Bir önceki kuşak (Fable 5, Opus 5, Sonnet 5) | ~500.000 token | ~375.000 kelime / ~1.250 sayfa |
| Claude Haiku 4.5 | ~200.000 token | ~150.000 kelime / ~500 sayfa |

**Token nedir?** Yaklaşık 0,75 İngilizce kelime veya 3-4 karakter. Türkçe metin sayfa başına daha fazla token tutar (sayfa başına ~500-700 token, İngilizcede ~400), yani tablodaki sayfa sayılarını Türkçe belgeler için yaklaşık üçte bir azaltarak düşünün. Ayrıntı: [Prompt ve Token](/wiki/temeller/prompt-ve-token/). Bir iş kullanıcısı token saymaz, ama şunu bilmesi gerekir: **pencere dolabilir**.

## Bağlam Penceresi Neden Önemli?

- **Uzun belgeler, büyük tablolar veya çok uzun konuşmalar** pencereyi doldurur
- Pencere dolduğunda **erken içerik unutulabilir** (eğer compaction devreye girmezse)
- Çok uzun konuşmalar zamanla **kalite düşüşü yaşar**, ayrıntı için [Sınırlamalar](/wiki/temeller/sinirlamalar/) sayfasına bakın.

Pratik örnek: 300 sayfalık bir PDF, 1M token'lık pencerede belirgin ama yönetilebilir yer tutar; 200K'lık Haiku 4.5'te ise pencerenin büyük kısmını işgal eder ve kalan alanda yaptığınız konuşma kısıtlı olur.

## Context Compaction Nasıl Çalışır?

Pencere dolmaya yaklaştığında:

1. Claude, konuşma geçmişinin **yapılandırılmış bir özetini** çıkarır. Özet şunları korur:
   - Alınan kararlar
   - Çözülmemiş sorular
   - Anahtar olgular
   - Görev üzerindeki ilerleme
   - Önemli çıktılar
2. Eski mesajların yerine bu özet konur
3. Çalışma özeti yeni temel alarak devam eder

Bu süreç **Cowork ve Dispatch oturumlarında otomatiktir**. Genelde farkına bile varmazsınız, iş sadece devam eder.

claude.ai sohbetinde de, code execution açıkken, bağlam penceresine yaklaşıldığında önceki mesajlar otomatik özetlenir. Bu özetleme kullanım limitinizden düşmez ve tam sohbet geçmişi korunur. Code execution kapalıysa otomatik yönetim çalışmaz. Çok büyük tek bir ilk mesaj gibi uç durumlarda sınır yine aşılabilir.

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

Özetin kalitesi yüksektir. Ama bir uyarı: çok önemli bir ayrıntı yalnızca eski konuşmada geçtiyse özete girmeyip atılabilir. Kritik bilgiyi **CLAUDE.md veya proje dosyası** gibi kalıcı yerlere yazmak en güvenli yoldur.

## İş Oturumlarında Compaction Ne Zaman Kritiktir?

Compaction özellikle şu durumlarda önemlidir:

- **Uzun belge inceleme oturumları**: büyük bir sözleşmenin çoklu alışverişte analizi
- **Çok adımlı rapor üretimi**: veri toplama, taslak yazma, iterasyon, iyileştirme
- **Çoklu dosya ve araç kullanan Cowork Project oturumları**
- **Zaman içinde birçok adım gerektiren Dispatch görevleri**

Pratik sonuç: **Cowork'te karmaşık bir işle uğraşan kişi "ortada sıfırlamak" zorunda değildir**. Sistem süreklilik yönetimini otomatik yapar.

## Manuel Bağlam Yönetimi: En İyi Uygulamalar

Bağlam kalitesi üzerinde daha fazla kontrol istiyorsanız:

### 1. İlgisiz Konuya Geçerken Yeni Oturum Açın

Alakasız yükler taşımayın. Pazarlama konuşmanızdan finans konuşmasına geçerken mevcut oturumda devam etmek yerine yeni başlatın.

### 2. Çok Uzun Projeler İçin "Özetle ve Yeniden Başla"

Claude'a "bugüne kadar önemli olan her şeyi özetle" deyin. Özeti bir dosyaya kopyalayın. Yeni oturum başlatın, o dosyayı yükleyin.

### 3. Kritik Bağlamı CLAUDE.md'ye Taşıyın

Her oturumda geçerli olması gereken bilgi **CLAUDE.md**'de olmalı, her yeni oturumda taze yüklenir, compaction'dan etkilenmez.

### 4. Cowork Projects Kullanın

Project bağlam dosyaları **her oturumda taze** yüklenir. Compaction sonrası bile Project bilgisi korunur. [Projects sayfasına](/wiki/araclar/projects/) bakın.

## Uyarı İşaretleri: "Claude Unuttu" Dediğimizde

Çalışanlar bazen "Claude konuştuğumuz şeyi unuttu" der. Neredeyse her zaman cevap bağlam yönetimidir:

- **Çok uzun oturum**: compaction olsa bile kaçınılmaz kayıp olur
- **Çok sayıda ilgisiz konu aynı oturumda**: Claude'un odağı bulanıklaşır
- **Büyük dosya yüklemesi**: pencere hızla doldu
- **Yanlış yere yazılmış bilgi**: kritik şey CLAUDE.md yerine geçici mesajda

## Pratik Kılavuz

Kısa görev: bağlamı dert etmeyin. Tek prompt, tek cevap, bitti.

Orta görev (5-10 tur alışveriş): pencere hâlâ rahat. Devam edin.

Uzun görev (30+ tur, birçok dosya): şunlara bakın:

- Önemli bilgi CLAUDE.md'de mi?
- Bu görevi bir Project altında mı yürütüyorum?
- Özetleme sırasında atlanabilecek hassas bir ayrıntı var mı?

Çok uzun proje (saatlerce, birden fazla gün): **mutlaka** Project bağlam dosyalarını ve CLAUDE.md'yi kurun. Tek bir dev oturumda ilerlemeyin.

## Tek Prensip

Bağlam **sınırlı bir kaynaktır**. Kısa görevlerde görmezden gelin. Uzun ve karmaşık projelerde en önemli bağlamı uzun bir konuşmaya gömmeyin, **CLAUDE.md veya proje dosyalarına** koyun.

Bu tek prensip, en sık duyulan "Claude bir şeyi unutuyor" şikayetini büyük ölçüde çözer.

## İlgili Sayfalar

- [Claude'un Sınırları](/wiki/temeller/sinirlamalar/): Uzun oturumlarda kalite düşüşü
- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Compaction'a dayanıklı kalıcı bağlam
- [Projects](/wiki/araclar/projects/): Oturumlar arası hafıza
- [Memory Yönetimi](/wiki/claude-md/memory-yonetimi/): Dört hafıza katmanının detayı

