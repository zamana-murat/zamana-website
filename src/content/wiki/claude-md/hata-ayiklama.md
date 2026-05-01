---
title: "CLAUDE.md Hata Ayıklama — \"Yazdım Ama Dinlemedi\""
description: CLAUDE.md var ama Claude beklendiği gibi davranmıyor. Yaygın sorunlar, teşhis, düzeltme — adım adım rehber.
tags:
  - claude-md
  - hata-ayiklama
  - debugging
---

**[CLAUDE.md](nedir/) yazdınız, ama Claude hâlâ eski tarzda yanıt veriyor.** Çalışmayan kuralları, çelişen yönergeleri, düşen talimatları nasıl bulup düzelteceğinizi anlatan pratik rehber.

## Önce — Hangi Sorunla Karşılaşıyorsunuz?

Aşağıdaki sembiyolardan hangisi sizinki?

| Belirti | Olası Sebep | Bölüm |
|---|---|---|
| "Hiçbir kuralımı tanımıyor sanki" | CLAUDE.md hiç yüklenmemiş veya yanlış yerde | Bölüm 1 |
| "Bazı kuralları dinliyor, bazılarını dinlemiyor" | Çelişki veya öncelik sorunu | Bölüm 2 |
| "İlk yanıtlarda iyi, sonra unutuyor" | Konuşma uzadıkça [bağlam](../yetenekler/context-compaction/) sıkışması | Bölüm 3 |
| "Yazdığım gibi anlamadı" | Talimat belirsiz veya yanlış formülasyon | Bölüm 4 |
| "Eski sürüm CLAUDE.md kullanıyor sanki" | Önbellek veya yanlış proje | Bölüm 5 |
| "Kurallar çok uzun, Claude bunaldı" | CLAUDE.md çok uzun | Bölüm 6 |

## 1. CLAUDE.md Yüklendi mi?

İlk testin sonucu: Claude'a doğrudan sorun.

> *"CLAUDE.md'm yüklü mü? Eğer öyleyse içinden bir alıntı ver."*

**Cevap "Hayır" ise:**

- claude.ai'da: [Projects](../araclar/projects/) içindesiniz mi? CLAUDE.md o projeye bağlı mı?
- [Claude Desktop](../araclar/claude-desktop/)'ta: çalışma dizininizde `CLAUDE.md` dosyası var mı?
- Mobilde: [Claude Mobil](../araclar/claude-mobil/) projeden değilse CLAUDE.md görünmez

**Cevap "Evet" ise ama yanlış alıntı veriyorsa:** muhtemelen eski sürüm yüklenmiş veya başka bir proje CLAUDE.md'si yüklenmiş.

## 2. Çelişme ve Öncelik

Claude bazı kurallarınızı dinliyor, bazılarını dinlemiyorsa muhtemelen **çelişen kurallar** veya **öncelik karmaşası** vardır.

### Tipik Çelişme Örnekleri

```markdown
"Yanıtların kısa olsun, en fazla 3 cümle"
[devamında]
"Müşteri sorularına detaylı cevap ver, eksik bilgi bırakma"
```

İki yönerge çelişiyor — Claude hangisini tercih edeceğini şansa bırakır. Net bir öncelik koymalısınız:

```markdown
Yanıtlar varsayılan olarak kısa (3 cümle). Müşteri sorusu özellikle "detay" 
talep ediyorsa (örn. "açıklar mısın", "neden") detaylı cevap verilir.
```

### Bireysel ve Şirket CLAUDE.md Çelişmesi

[Takım CLAUDE.md](takim-claude-md/) sayfası bunu detaylandırır. Kural: **şirket genel kuralı bireyselden üstündür.** Eğer bireysel CLAUDE.md "her zaman emoji kullan" diyorsa, şirket CLAUDE.md "yasak emoji" diyorsa — şirketinki kazanır.

### Ölçü: Tek Bir Kural Tek Bir Yere

Aynı kuralı iki yerde tekrar etmeyin. Tek kaynak, tek doğru sürüm.

## 3. Bağlam Sıkışması

Konuşma uzadıkça (50+ mesaj) Claude eski talimatları unutmaya başlayabilir. Bu **[bağlam](../yetenekler/context-compaction/)** kapasitesinin sınırıdır.

**Belirtiler:**

- İlk başta uyguladığı kuralı 30. mesajda görmezden geldi
- Eski mesajlardaki bilgileri "hatırlamadı"
- Cevap kalitesi gitgide düştü

**Çözümler:**

- **Yeni sohbet aç.** En etkili yol. CLAUDE.md taze yüklenir.
- **Önemli kuralı son mesajda hatırlat.** "Unutma: yanıtların kısa olsun."
- **Çok adımlı işi parçala.** Bir sohbette her şeyi bitirme; alt sohbetlere böl.
- **Compaction'a güven.** Claude konuşmayı otomatik özetler ama her zaman doğru özetlemez.

[Context ve Compaction](../yetenekler/context-compaction/) sayfası bu mekanizmanın detayını verir.

## 4. Net Olmayan Talimatlar

Bir kural beklediğiniz gibi çalışmıyorsa, kuralın *metnini* bir yere koyup **yabancı bir gözle** okuyun. Sizin kafanızda net olan, Claude için belirsiz olabilir.

### Belirsizlik Örnekleri

❌ *"Müşteriye saygılı yaz."*
↓
Saygılı = ne kadar resmî? Ne kadar samimi?

✅ *"Müşteriye 'siz' diliyle yaz, ama mesafeli değil. 'Sayın X Bey/Hanım' yerine 'Merhaba [İsim]' tercih et. Klişe ifadelerden kaçın ('en içten saygılarımla' yerine 'iyi günler')."*

### Belirsiz Sıfatlar

"Profesyonel", "kaliteli", "uygun", "etkili" — bunların hepsi Claude için **belirsiz**. Yerine somut örnek koyun:

> *Profesyonel = iş bağlamındaki bir tonlama. Örnek: 'Toplantı için müsait olduğum saatleri ekte bulabilirsiniz.' (kabul edilebilir) vs. 'Hangi saat seni uyar?' (çok samimi).*

[Few-Shot Örnekleme](../prompting/few-shot-ornekleme/) bu yaklaşımın detayıdır.

### Negatifle Pozitif Birlikte

"Yapma X" + "Yap Y" birlikte daha güçlüdür:

```markdown
- Yasak: "Lider çözümümüz", "yenilikçi yaklaşım"
- Yerine: Sade tanımlama. Örn. "Müşteri ilişkileri için yazılım."
```

## 5. Yanlış Versiyon

Eski CLAUDE.md sürümü hâlâ aktif olabilir. Kontrol edin:

- **claude.ai Projects:** Projeye yüklenmiş knowledge base'i kontrol edin. Eski versiyon hâlâ varsa kaldırın, yenisini yükleyin.
- **Claude Desktop:** Çalışma dizininde tek bir `CLAUDE.md` olduğundan emin olun. `~/.claude/CLAUDE.md` global, dizinindeki proje-spesifik. İkisi aynı kurallarda çelişmiyor mu?
- **Birden fazla proje:** Yanlış projede çalışıyor olabilirsiniz. Sol panelde aktif projeyi kontrol edin.

[Memory Yönetimi](memory-yonetimi/) sayfası katmanlı CLAUDE.md mantığını anlatır.

## 6. Fazla Uzun CLAUDE.md

CLAUDE.md çok uzun olduğunda Claude bazı kuralları "kaybeder". Pratik kural: **300-500 kelimeyi geçmesin.**

Uzunsa ne yapmalı?

- **Bölün:** Şirket geneli kurallar [Takım CLAUDE.md](takim-claude-md/)'ye, bireysel kurallar bireysele
- **Detay yerine ilke yazın:** "Pazar araştırma raporu şu yapıda olsun:" yerine "Pazar araştırma raporları için şablonu sor."
- **Şablonları ayrı tutun:** Detay şablonlar [Şablon Kütüphanesi](sablon-kutuphanesi/)'ne, CLAUDE.md sadece "ne zaman kullanılacağını" söyler
- **Yasak listeleri kısaltın:** 50 yasak kelime → en yıpratıcı 5'i. Çok uzun yasaklar zaten ihlal edilir

## Sistematik Hata Ayıklama Süreci

Sorununuzu yukarıdaki kategorilerden birine yerleştiremediyseniz, sistemli ilerleyin:

### Adım 1 — İzole Edin

Yeni bir sohbet açın, sadece CLAUDE.md aktif. Hiçbir ek prompt vermeden Claude'a basit bir test sorusu sorun.

> *"Ben kimim? Nasıl çalışırım? CLAUDE.md'mden alıntı yaparak cevapla."*

CLAUDE.md tanınıyorsa devam edin. Tanınmıyorsa Bölüm 1'e geri dönün.

### Adım 2 — Tek Kuralı Test Edin

Sorunlu kural tek başına işliyor mu? Diğer her şeyi geçici olarak silin (yedek aldıktan sonra), sadece o kuralı bırakın. Beklenen davranışı görüyor musunuz?

### Adım 3 — Yeniden Formüle Edin

Çalışmayan kuralı 3 farklı şekilde yazın. Hangi formülasyon daha iyi sonuç veriyor?

### Adım 4 — Few-Shot Ekleyin

Soyut talimat yerine **örnek** verin:

> *"İyi yanıt örneği: [tam örnek]"*
> *"Kötü yanıt örneği: [tam örnek] — bunu yapma"*

[Few-Shot Örnekleme](../prompting/few-shot-ornekleme/) bu tekniğin detayını verir.

### Adım 5 — Dış Görüşle Doğrulayın

Bir başka çalışana CLAUDE.md'nizi gösterin. Onlar için açık mı? Dış göz çoğu çelişkiyi yakalar.

## Yaygın Spesifik Sorunlar

### "Voice'a uymuyor"

Voice ifade tarzıdır; soyutluk yüksek. Çözüm:

- En az 2 örnek verin (iyi/kötü)
- Sevdiğiniz birinin yazısından parça yapıştırın "böyle yaz"

### "Türkçe yerine İngilizce kayıyor"

CLAUDE.md başında **net dil tanımı** olsun:

```markdown
## Dil
Tüm yanıtlar Türkçe. Teknik terim için İngilizce karşılık gerekirse parantez 
içinde: örn. "akış (flow)". Türkçe karşılığı yerleşmemiş kavramlar için 
İngilizce kullanımı kabul.
```

[Türkçe Performansı](../temeller/turkce-performansi/) ve [Türkçe Prompt Teknikleri](../prompting/turkce-prompt-teknikleri/) sayfalarına bakın.

### "Çok temkinli, hep 'yapamam' diyor"

Şirket CLAUDE.md'sinde hassas konular fazla genelleştirilmiş olabilir. Örnek: "hukuki konuda ipucu verme" yerine "hukuki sözleşme yazma; ama hukuk haberlerini özetleyebilirsin" gibi netleştirin.

### "Kişisel adımı her cümlede tekrar ediyor"

CLAUDE.md'de "[Çalışan adı] şu işlerden sorumlu" gibi yazdıysanız, Claude bunu **konuşma içinde** sürekli kullanmaya çalışıyor olabilir. "İsmimi sadece resmî dokümanlarda kullan, sohbette tekrar etme" diye netleştirin.

## Düzeltme Yapıldıktan Sonra

Bir sorun çözüldükten sonra:

1. **CLAUDE.md sürümünü artırın** (1.3 → 1.4)
2. **Değişiklik notunu** ekleyin (change log)
3. **Bir hafta gözleyin** — tekrarlamıyor mu
4. Şirket CLAUDE.md'sine etki eden bir değişiklik ise [Takım CLAUDE.md](takim-claude-md/) yöneticisine bildirin

## İlgili Sayfalar

- [CLAUDE.md Nedir?](nedir/) — Temeller
- [Nasıl Yazılır?](nasil-yazilir/) — İyi CLAUDE.md kuralları
- [Örnekler](ornekler/) — Çalışan örnekler
- [Şablon Kütüphanesi](sablon-kutuphanesi/) — Hazır şablonlar
- [Takım CLAUDE.md](takim-claude-md/) — Şirket-geneli paylaşım
- [Few-Shot Örnekleme](../prompting/few-shot-ornekleme/) — Örnekle öğretme
- [Yaygın Hatalar](../prompting/yaygin-hatalar/) — Prompting tarafının hata listesi
- [Context ve Compaction](../yetenekler/context-compaction/) — Bağlam sıkışması

