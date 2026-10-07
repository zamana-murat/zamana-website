---
title: "CLAUDE.md Hata Ayıklama: \"Yazdım Ama Dinlemedi\""
seoTitle: "CLAUDE.md Çalışmıyor mu? Claude Talimatımı Dinlemiyor Çözümü"
description: "CLAUDE.md ya da profil talimatı var ama Claude dinlemiyor. Önce okunuyor mu diye kontrol edin, sonra çelişki, uzunluk ve belirsizlik sorunlarını düzeltin."
tags:
  - claude-md
  - hata-ayiklama
  - debugging
lastUpdated: "2026-10-06"
---

**[CLAUDE.md](/wiki/claude-md/nedir/) yazdınız, ama Claude hâlâ eski tarzda yanıt veriyor.** Çalışmayan kuralları, çelişen yönergeleri, düşen talimatları nasıl bulup düzelteceğinizi anlatan pratik rehber.

## Önce: Hangi Sorunla Karşılaşıyorsunuz?

Aşağıdaki belirtilerden hangisi sizinki?

| Belirti | Olası Sebep | Bölüm |
|---|---|---|
| "Hiçbir kuralımı tanımıyor sanki" | Talimat hiç yüklenmemiş (yanlış yer, yanlış ortam) | Bölüm 1 |
| "Bazı kuralları dinliyor, bazılarını dinlemiyor" | Çelişki veya öncelik sorunu | Bölüm 2 |
| "İlk yanıtlarda iyi, sonra unutuyor" | Konuşma uzadıkça [bağlam](/wiki/yetenekler/context-compaction/) sıkışması | Bölüm 3 |
| "Yazdığım gibi anlamadı" | Talimat belirsiz veya yanlış formülasyon | Bölüm 4 |
| "Eski sürüm kullanıyor sanki" | Eski kopya ya da yanlış proje | Bölüm 5 |
| "Kurallar çok uzun, Claude bunaldı" | CLAUDE.md çok uzun | Bölüm 6 |

## 1. Talimat Yüklendi mi?

CLAUDE.md her ortamda okunmaz. Önce **nerede çalıştığınızı** bulun, çünkü çoğu "dinlemiyor" şikâyeti aslında "hiç okumadı"dır. Şu sırayla kontrol edin:

1. **Sohbette misiniz?** (claude.ai, mobil) Sohbet CLAUDE.md dosyasını okumaz. Profil talimatınız (Ayarlar > General > "Instructions for Claude") dolu mu? Bir projedeyseniz doğru projedesiniz ve metin proje talimatında ya da dosyalarında mı?
2. **Masaüstünde Cowork'te misiniz?** Klasör gerçekten bağlı mı, doğru klasör mü? Dosyanın adı tam olarak `CLAUDE.md` mi, klasörün kökünde mi?
3. **Oturum yerel mi, bulut mu?** Yerel Cowork oturumunda klasördeki CLAUDE.md okunur. Bulut Cowork oturumunda okunduğu belgelenmemiştir ve klasörler elle eklenir; orada talimatı profil talimatına da yazın.
4. **Dosya adı ve içerik:** `CLAUDE.md` yerine `claude.md.txt` ya da `Claude.md` gibi bir ad, boş dosya ya da yanlış dizin en sık nedenlerdir.

Sonra Claude'a doğrudan sorun:

> *"Talimatımı 3 maddede özetle."*

**Özet gelmiyorsa ya da yanlışsa**, yukarıdaki dört adıma geri dönün. **Doğru özet geliyorsa** talimat yüklenmiştir; sorun içeriktedir, Bölüm 2'den devam edin.

Ortamların tam karşılaştırması: [Kalıcı Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/#kalıcı-talimat-ve-hafıza-yerleri).

> **Not:** Mobilde yerel klasör erişimi kısmidir; [Claude Mobil](/wiki/araclar/claude-mobil/) uygulamasında talimatın görünmesi için profil talimatı ya da proje talimatı kullanın.

## 2. Çelişme ve Öncelik

Claude bazı kurallarınızı dinliyor, bazılarını dinlemiyorsa muhtemelen **çelişen kurallar** veya **öncelik karmaşası** vardır.

### Tipik Çelişme Örnekleri

```markdown
"Yanıtların kısa olsun, en fazla 3 cümle"
[devamında]
"Müşteri sorularına detaylı cevap ver, eksik bilgi bırakma"
```

İki yönerge çelişiyor, Claude hangisini tercih edeceğini şansa bırakır. Net bir öncelik koymalısınız:

```markdown
Yanıtlar varsayılan olarak kısa (3 cümle). Müşteri sorusu özellikle "detay" 
talep ediyorsa (örn. "açıklar mısın", "neden") detaylı cevap verilir.
```

### Bireysel ve Şirket CLAUDE.md Çelişmesi

[Takım CLAUDE.md](/wiki/claude-md/takim-claude-md/) sayfası bunu detaylandırır. Claude iki kuralı gördüğünde hangisinin üstün olduğunu kendiliğinden bilmez; öncelik **kendi yazdığınız kuralla** belirlenir. Örneğin bireysel dosyada "her zaman emoji kullan", şirket kural setinde "emoji yasak" yazıyorsa, bireysel dosyaya "şirket kural setiyle çelişen yerde şirket kuralı geçerlidir" satırını ekleyin ya da çelişen satırı silin.

### Ölçü: Tek Bir Kural Tek Bir Yere

Aynı kuralı iki yerde tekrar etmeyin. Tek kaynak, tek doğru sürüm.

## 3. Bağlam Sıkışması

Konuşma çok uzadığında Claude eski talimatları gözden kaçırmaya başlayabilir. Bağlam penceresi büyüdü (yeni modellerde tüm ücretli planlarda 1M token), ama çok uzun konuşmalarda **[bağlam](/wiki/yetenekler/context-compaction/)** otomatik özetlenir ve ilk mesajlardaki ince talimatlar bu sırada zayıflayabilir.

**Belirtiler:**

- İlk başta uyguladığı kuralı 30. mesajda görmezden geldi
- Eski mesajlardaki bilgileri "hatırlamadı"
- Cevap kalitesi gitgide düştü

**Çözümler:**

- **Yeni sohbet (ya da yeni oturum) aç.** En etkili yol. Profil talimatı ve proje talimatı baştan yüklenir; klasörle çalışıyorsanız yeni oturumda dosya yeniden okunur.
- **Önemli kuralı son mesajda hatırlat.** "Unutma: yanıtların kısa olsun."
- **Çok adımlı işi parçala.** Bir sohbette her şeyi bitirme; alt sohbetlere böl.
- **Otomatik özetlemeye (compaction) tam güvenmeyin.** Claude uzun konuşmayı özetler ama her ayrıntıyı doğru taşımayabilir.

[Context ve Compaction](/wiki/yetenekler/context-compaction/) sayfası bu mekanizmanın detayını verir.

## 4. Net Olmayan Talimatlar

Bir kural beklediğiniz gibi çalışmıyorsa, kuralın *metnini* bir yere koyup **yabancı bir gözle** okuyun. Sizin kafanızda net olan, Claude için belirsiz olabilir.

### Belirsizlik Örnekleri

❌ *"Müşteriye saygılı yaz."*
↓
Saygılı = ne kadar resmî? Ne kadar samimi?

✅ *"Müşteriye 'siz' diliyle yaz, ama mesafeli değil. 'Sayın X Bey/Hanım' yerine 'Merhaba [İsim]' tercih et. Klişe ifadelerden kaçın ('en içten saygılarımla' yerine 'iyi günler')."*

### Belirsiz Sıfatlar

"Profesyonel", "kaliteli", "uygun", "etkili" gibi sözcüklerin hepsi Claude için **belirsizdir**. Yerine somut örnek koyun:

> *Profesyonel = iş bağlamındaki bir tonlama. Örnek: 'Toplantı için müsait olduğum saatleri ekte bulabilirsiniz.' (kabul edilebilir) vs. 'Hangi saat seni uyar?' (çok samimi).*

[Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/) bu yaklaşımın detayıdır.

### Negatifle Pozitif Birlikte

"Yapma X" + "Yap Y" birlikte daha güçlüdür:

```markdown
- Yasak: "Lider çözümümüz", "yenilikçi yaklaşım"
- Yerine: Sade tanımlama. Örn. "Müşteri ilişkileri için yazılım."
```

## 5. Yanlış Versiyon

Eski bir kopya hâlâ aktif olabilir. Kontrol edin:

- **Profil talimatı ve projeler:** Ayarlar > General'daki metin güncel mi? Projeye yüklenmiş dosyalarda ve proje talimatında eski versiyon varsa kaldırın, yenisini yükleyin. Aynı metni birden fazla yere koyduysanız hepsini güncelleyin.
- **Cowork klasörü:** Çalışma klasöründe tek bir `CLAUDE.md` olduğundan emin olun; üst ya da alt klasörde eski bir kopya kalmış olabilir.
- **Claude Code (geliştiriciler):** `~/.claude/CLAUDE.md` tüm projeler için geçerli kullanıcı dosyası, çalışma klasöründeki ise projeye özgüdür; ikisi birleştirilir, biri ötekini ezmez. Çelişmiyor mu?
- **Birden fazla proje:** Yanlış projede çalışıyor olabilirsiniz. Sol panelde aktif projeyi kontrol edin.

[Kalıcı Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/) sayfası hangi talimatın nerede geçerli olduğunu anlatır.

## 6. Fazla Uzun CLAUDE.md

CLAUDE.md çok uzun olduğunda Claude bazı kuralları "kaybeder". Pratik kural: **kısa tutun, birkaç ekranı geçmesin.** (Claude Code belgesi kendi dosyası için yaklaşık 200 satırın altını önerir; iş kullanıcısı için de iyi bir tavandır.)

Uzunsa ne yapmalı?

- **Bölün:** Şirket geneli kurallar [Takım CLAUDE.md](/wiki/claude-md/takim-claude-md/)'ye, bireysel kurallar bireysele
- **Detay yerine ilke yazın:** "Pazar araştırma raporu şu yapıda olsun:" yerine "Pazar araştırma raporları için şablonu sor."
- **Şablonları ayrı tutun:** Detay şablonlar [Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/)'ne, CLAUDE.md sadece "ne zaman kullanılacağını" söyler
- **Yasak listeleri kısaltın:** 50 yasak kelime → en yıpratıcı 5'i. Çok uzun yasaklar zaten ihlal edilir

## Sistematik Hata Ayıklama Süreci

Sorununuzu yukarıdaki kategorilerden birine yerleştiremediyseniz, sistemli ilerleyin:

### Adım 1: İzole Edin

Yeni bir sohbet ya da oturum açın ve yalnızca test ettiğiniz talimat yeri aktif olsun (örneğin yalnız klasördeki CLAUDE.md ya da yalnız profil talimatı). Hiçbir ek prompt vermeden Claude'a basit bir test sorusu sorun.

> *"Ben kimim? Nasıl çalışırım? Talimatımdan alıntı yaparak cevapla."*

Talimat tanınıyorsa devam edin. Tanınmıyorsa Bölüm 1'e geri dönün.

### Adım 2: Tek Kuralı Test Edin

Sorunlu kural tek başına işliyor mu? Diğer her şeyi geçici olarak silin (yedek aldıktan sonra), sadece o kuralı bırakın. Beklenen davranışı görüyor musunuz?

### Adım 3: Yeniden Formüle Edin

Çalışmayan kuralı 3 farklı şekilde yazın. Hangi formülasyon daha iyi sonuç veriyor?

### Adım 4: Few-Shot Ekleyin

Soyut talimat yerine **örnek** verin:

> *"İyi yanıt örneği: [tam örnek]"*
> *"Kötü yanıt örneği: [tam örnek] (bunu yapma)"*

[Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/) bu tekniğin detayını verir.

### Adım 5: Dış Görüşle Doğrulayın

Bir başka çalışana CLAUDE.md'nizi gösterin. Onlar için açık mı? Dış göz çoğu çelişkiyi yakalar.

## Yaygın Spesifik Sorunlar

### "Üslubuma uymuyor"

Üslup ifade tarzıdır; soyutluk yüksek. Çözüm:

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

[Türkçe Performansı](/wiki/temeller/turkce-performansi/) ve [Türkçe Prompt Teknikleri](/wiki/prompting/turkce-prompt-teknikleri/) sayfalarına bakın.

### "Çok temkinli, hep 'yapamam' diyor"

Şirket CLAUDE.md'sinde hassas konular fazla genelleştirilmiş olabilir. Örnek: "hukuki konuda ipucu verme" yerine "hukuki sözleşme yazma; ama hukuk haberlerini özetleyebilirsin" gibi netleştirin.

### "Kişisel adımı her cümlede tekrar ediyor"

CLAUDE.md'de "[Çalışan adı] şu işlerden sorumlu" gibi yazdıysanız, Claude bunu **konuşma içinde** sürekli kullanmaya çalışıyor olabilir. "İsmimi sadece resmî dokümanlarda kullan, sohbette tekrar etme" diye netleştirin.

## Düzeltme Yapıldıktan Sonra

Bir sorun çözüldükten sonra:

1. **CLAUDE.md sürümünü artırın** (1.3 → 1.4)
2. **Değişiklik notunu** ekleyin (değişiklik günlüğü)
3. **Bir hafta gözleyin**: tekrarlamıyor mu
4. Şirket CLAUDE.md'sine etki eden bir değişiklik ise [Takım CLAUDE.md](/wiki/claude-md/takim-claude-md/) yöneticisine bildirin

## İlgili Sayfalar

- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Temeller
- [Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/): İyi CLAUDE.md kuralları
- [Örnekler](/wiki/claude-md/ornekler/): Çalışan örnekler
- [Şablon Kütüphanesi](/wiki/claude-md/sablon-kutuphanesi/): Hazır şablonlar
- [Takım CLAUDE.md](/wiki/claude-md/takim-claude-md/): Şirket-geneli paylaşım
- [Kalıcı Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/): Hangisi nerede geçerli
- [Few-Shot Örnekleme](/wiki/prompting/few-shot-ornekleme/): Örnekle öğretme
- [Yaygın Hatalar](/wiki/prompting/yaygin-hatalar/): Prompting tarafının hata listesi
- [Context ve Compaction](/wiki/yetenekler/context-compaction/): Bağlam sıkışması

