---
title: "İlk 7 Gün Rehberi: Claude'u Alışkanlığa Çevirin"
description: "Kurulum sonrası ilk 7 gün, gün gün: ne yapacağınız, neyi öğreneceğiniz, ne üreteceğiniz. Claude'u günlük iş akışınızın kalıcı parçası yapan program."
tags:
  - temeller
  - baslangic
  - checklist
  - onboarding
lastUpdated: "2026-10-06"
---

[İlk Kurulum](/wiki/temeller/ilk-kurulum/) tamam. Claude Desktop kurulu, abonelik aktif, Cowork çalışıyor. **Şimdi asıl iş başlıyor, bilgiyi alışkanlığa çevirmek.**

İlk haftayı **doğru** geçirirseniz Claude günlük iş akışınızın kalıcı bir parçası olur. Yanlış geçirirseniz, "denedim, işe yaramadı" grubuna katılırsınız. Aradaki fark mucizevi bir kabiliyet değil, yapılandırılmış bir hafta.

Bu sayfa, ilk haftayı yapılandırılmış geçirmek için bir rehberdir. Her gün **30-60 dakika**, hafta sonunda elinizde gerçek çıktılar ve refleks olmuş bir alışkanlık.

> **Bu hafta neler kazanacaksınız:**
>
> - 7+ gerçek iş çıktısı (taslaklar, raporlar, e-postalar: gerçekten kullanılan)
> - Yaşayan bir [CLAUDE.md](/wiki/claude-md/nedir/) dosyası
> - 3-5 prompt'tan oluşan kişisel kütüphane
> - Bir [connector](/wiki/mcp/baglanti-listesi/) kurulu ve çalışır
> - Bir [scheduled task](/wiki/araclar/scheduled-tasks/) otomasyonda
> - **Discernment refleksi**: çıktıyı eleştirel değerlendirme alışkanlığı

## 7 Günlük Yol Haritası

Toplam yatırım: **~5 saat** (haftada 7 gün × ortalama 40 dk). Çıktı: kalıcı alışkanlık.

![İlk 7 gün zaman çizelgesi: iş çıktısı, CLAUDE.md, skill ile belge, connector, prompt kütüphanesi, iterasyon ve otomasyon](/images/wiki/temeller-ilk-7-gun.svg)

---

## Gün 1: İlk Gerçek İş Çıktısı (45 dk)

**Amaç:** Claude'la **bugün gerçekten yapmanız gereken** bir işi birlikte halledin. Hayali egzersiz değil, gerçek bir iş.

### Yapılacaklar

**1. Gerçek bir iş seçin (5 dk)**

Bu hafta yapmanız gereken yazılı bir çıktı: müşteri e-postası, rapor özeti, teklif yazısı, politika taslağı, sunum planı, toplantı brifingi. Listedeki en kolayını seçin.

**2. 5 bileşenli prompt yazın (15 dk)**

> **Önce: Hangi modda, hangi modelle?**
>
> - **Mod: Cowork.** Claude Desktop sol üstte üç ikon gösterir: 💬 Chats, **Cowork** (ortadaki, küçük yatay çizgili liste ikonu) ve `</> Code`. **Ortadaki Cowork ikonuna tıklayın.** Sebep: workspace klasörünü bağladığınız yerel Cowork oturumu klasördeki CLAUDE.md dosyanızı okur, çıktıyı da workspace klasörüne kaydedebilirsiniz; Chats'te ikisi de yok. Hesabınızda birleşik arayüz açıldıysa ([Cowork ve sohbet tek Claude oldu](/haberler/2026-09-16-cowork-ve-sohbet-tek-claude-oldu/), yayılım kademeli) ayrı bir Cowork ikonu görmeyebilirsiniz; doğrudan yeni bir konuşma açıp görevi yazın.
> - **Model: Sonnet**, sağ üstte veya sohbet kutusunun yanında model seçici var. **Sonnet 5.5** seçili olduğunu kontrol edin, değilse seçin. Bu hafta hep Sonnet kullanın, model seçimiyle uğraşmayın. Detay: [Modeller](/wiki/temeller/modeller/).
> - **İlk devretme refleksi:** Cowork bir işe başlamadan önce sık sık **ne yapacağına dair bir plan önerir**. Bu planı okuyun, doğruysa onaylayın. Devretmenin kalbi "yap" demek değil, planı onaylamaktır. Detay: [Cowork → İlk Görevi Devretmek](/wiki/araclar/cowork-modu/).

İyi kurulmuş bir prompt şu beş bileşeni birlikte taşır:

| Bileşen | Açıklama | Örnek |
|---|---|---|
| **Rol** | Claude'un kim olduğu | "Sen kıdemli bir B2B satış yöneticisisin" |
| **Bağlam** | Durum, geçmiş, kısıtlar | "XYZ Gıda ile 3 ay görüşme yapıyoruz, son 2 ay yanıt yok..." |
| **Görev** | Tam ne istiyorsun | "Yeniden bağlantı kurmak için 150 kelimelik e-posta yaz" |
| **Format** | Çıktı biçimi | "Konu satırı + 3 paragraf, samimi ama profesyonel" |
| **Kısıtlar** | Ne olmasın | "Pazarlama klişesi yok, 'umarım' kelimesi yok" |

İlk denemede mükemmel çıkmazsa normal, yarın iyileştirirsiniz.

**3. İterasyon (15 dk)**

Claude ilk çıktıyı verir. Okuyun. Spesifik geri bildirim verin:

- *"İkinci paragraf zayıf, [X konuya] odaklan"*
- *"Ton fazla resmi, biraz yumuşat"*
- *"Konu satırı düz, daha cazip 3 alternatif ver"*

3-5 iterasyon ile sonuca varın.

**4. Gönderin / kullanın (5 dk)**

Çıktıyı **gerçekten** gönderin veya kullanın. Çekmeceye atmayın, bu egzersiz değil.

**5. Notu alın (5 dk)**

Bir not defterine yazın:

- Bu iş Claude olmadan kaç dakika sürerdi?
- Şimdi kaç dakika sürdü?
- En çok zorlandığım kısım neydi?

### Yeni Öğrenilen

- **Prompt anatomisi**: 5 bileşen yapısı
- **İterasyon refleksi**: ilk çıktıyı son cevap sayma

### Daha Detay

Konu derinleşirse: [Prompting Temel İlkeleri](/wiki/prompting/temel-ilkeler/)

---

## Gün 2: CLAUDE.md'yi Yaşatın (40 dk)

**Amaç:** Dün Claude'a tekrar tekrar açıkladığınız her şeyi [CLAUDE.md](/wiki/claude-md/nedir/)'ye taşıyın. Bir kez yazın, çalışma klasörünüzde (bağlı Cowork oturumlarında) her seferinde geçerli olsun; kısa sürümü profil talimatına yazarsanız sıradan sohbetlerde de geçerli olur.

### Yapılacaklar

**1. Dün ne tekrar ettiniz? (10 dk)**

Dünkü oturumu hatırlayın. Claude'a ne **tekrar tekrar** anlatmak zorunda kaldınız? Şirket adı, sektör, müşterilerin tipi, ton tercihiniz, kaçındığınız kelimeler...

Listeleyin, kağıda veya nota.

**2. CLAUDE.md'yi açın ve doldurun (20 dk)**

Workspace klasöründeki `CLAUDE.md` dosyasını bir editörle açın. [5 bölümü](/wiki/claude-md/nasil-yazilir/) sırayla doldurun:

```markdown
# CLAUDE.md: [Adınız]

## Kim Olduğum
- İsim, pozisyon, şirket
- Hangi sektör, hangi rol

## Şirket Bilgisi
- Ürünler / hizmetler
- Hedef müşteri tipi
- Anahtar müşteriler (varsa)

## Ton Tercihleri
- Türkçe: profesyonel ama robot gibi değil
- Kaçınılacak kelimeler
- İstenen üslup

## Her Zaman / Asla
- Her zaman: önemli yazıları göndermeden önce taslağı göster
- Asla: rakip marka isimlerini negatif kullan
- (kendi kurallarınızı ekleyin)

## Güncel Odak
- Bu çeyrek ne üzerinde çalışıyorsunuz
- 2-3 aktif proje
```

**3. Kısa sürümü profil talimatına yazın (5 dk)**

Settings > General > "Instructions for Claude" alanına dosyanın en kritik 3-4 satırını (ton, "her zaman / asla" kuralları) yapıştırın. Bu alan tüm sohbetlerde geçerlidir. Hangi talimatın nerede çalıştığı: [Talimat ve Hafıza Yerleri](/wiki/claude-md/memory-yonetimi/).

**4. Test edin (5 dk)**

Workspace klasörünü bağlayarak Cowork'te yeni oturum açın:

```
Talimatımı 3 maddede özetle.
```

Yanlış veya eksik bir şey varsa CLAUDE.md'ye (ya da profil talimatına) dönün, düzeltin, tekrar test edin.

### Yeni Öğrenilen

- **Yaşayan dosya kavramı**: CLAUDE.md statik değil, sürekli güncellenen
- **"İki kez söyleme" kuralı**: Claude'a aynı şeyi ikinci kez anlatırsanız, dosyaya yazın

### Daha Detay

[CLAUDE.md Nasıl Yazılır?](/wiki/claude-md/nasil-yazilir/) | [CLAUDE.md Örnekleri](/wiki/claude-md/ornekler/)

---

## Gün 3: İlk Skill ile Belge Üretimi (50 dk)

**Amaç:** Claude'un [skill](/wiki/yetenekler/skills/) sistemini deneyin. Word, Excel veya PowerPoint dosyası **doğrudan** üretin.

### Yapılacaklar

**1. Skill nedir hızlı tanışma (5 dk)**

Skill, Claude'un belirli bir görev tipi için hazır uzmanlık paketidir. Cowork'te `/` yazınca skill listesi açılır.

Bu hafta odak: `docx`, `xlsx`, `pptx`, `pdf` skill'leri.

**2. Bir gerçek belge ihtiyacı seçin (5 dk)**

- Bu hafta hazırlamanız gereken bir Word raporu var mı?
- Bir Excel tablosu (örn. tedarikçi karşılaştırması)?
- Bir PowerPoint sunum?

Birini seçin.

**3. Skill'i çağırın ve üretin (30 dk)**

Cowork'te `/` yazın → ilgili skill'i seçin (örneğin `/docx`) → talebinizi yazın:

```
Geçen ay Mart performansından bir özet Word raporu hazırla:
- Toplam satış, ciro, gerçekleşme oranı (rakamlar [tablodan])
- 3 ana başarı, 3 ana zorluk
- Nisan için 3 öneri
- Yönetim kuruluna sunulacak, ciddi ton
- 1.5 sayfa, başlıklar var
```

Claude `docx` skill'ini çağırır, belgeyi workspace klasörünüze yazar, açmak için bağlantı verir.

**4. Belgeyi açın, gözden geçirin, gerçekten kullanın (10 dk)**

Çıktıyı kontrol edin. Eksik varsa Claude'a düzelttirin. Sonuçta gerçek bir Word dosyası elinizde, kaydedin, kullanın.

### Yeni Öğrenilen

- **Skill kavramı**: Claude'un uzmanlık paketleri
- **Doğrudan dosya üretimi**: kopyala-yapıştır değil, gerçek `.docx`
- **Workspace içinde kalıcı çıktı**: workspace klasörünüzde her zaman duruyor

### Daha Detay

[Skills](/wiki/yetenekler/skills/) | [Dosya İşleme](/wiki/yetenekler/file-handling/)

---

## Gün 4: İlk Connector Kurulumu (45 dk)

**Amaç:** Claude'u günlük kullandığınız bir araca ([Slack, Drive, Gmail, CRM](/wiki/mcp/baglanti-listesi/)) bağlayın. Artık Claude **gerçek verinizle** çalışır.

### Yapılacaklar

**1. Doğru connector'u seçin (5 dk)**

Rolünüze göre en kritik olan:

| Rol | Önerilen ilk connector |
|---|---|
| Satış | **CRM** (Salesforce / HubSpot) veya **Gmail** |
| Pazarlama | **Google Workspace** veya **Slack** |
| Finans | **Microsoft 365** (özellikle Excel) |
| Operasyon | **Slack** veya **Asana** |
| İK | **Microsoft 365** |
| Yönetici Asistanı | **Microsoft 365** tam paket |

**Türkiye'de sık kullanılan araçlar (Logo, Mikro, Paraşüt):** Bu üç muhasebe/ERP aracı için Claude'un resmi bir connector'ı yok (Ekim 2026). Bu yüzden Gün 4'te bunlardan birini bağlamaya çalışmayın. Finans ve muhasebe rolündeyseniz bugünün connector'ı olarak **Microsoft 365** (Excel) ya da dosya tabanlı akış yeterlidir: araçtan Excel/CSV dışa aktarın, Claude'a yükleyin ya da Excel eklentisiyle çalıştırın. Özel bağlantı seçenekleri için [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/) sayfasına bakın.

**2. Cowork → Customize → Connector kurulumu (15 dk)**

Cowork sol panelde **"Customize"** veya **"Settings → Connectors"** sekmesi.

- Listede ilgili connector'u bulun
- **"Install"** veya **"Connect"**
- Tarayıcı açılır → ilgili servise giriş yapın
- **OAuth onay ekranı**: Claude'a hangi izinleri vereceğinizi gösterir → onaylayın
- Cowork'e geri dönersiniz, connector aktif

**3. Test sorgusu (10 dk)**

Cowork'te yeni sohbet:

- (Slack ile) *"#genel kanalında bu hafta neler konuşuldu, kısa özet ver"*
- (Gmail ile) *"Bu hafta okumadığım önemli e-postaları listele, üçer cümle özet"*
- (Drive ile) *"Q1-rapor.xlsx dosyasını oku, 3 öne çıkan rakamı söyle"*
- (CRM ile) *"Açık fırsatları listele, en yüksek tutarlı ilk 5'i ver"*

Claude veriyi çeker, özetler. Test başarılıysa connector çalışıyor.

**4. Bir gerçek görev (15 dk)**

Connector kurulu olduğuna göre, **bugün gerçekten yapacağınız bir işi** bu connector ile yapın:

- "Geçen hafta gönderdiğim e-postalardan takip etmem gerekenleri listele"
- "Slack'te sorulup cevapsız kalan teknik soruları topla"
- "CRM'deki Q2 fırsatları için durum raporu özeti yaz"

### Yeni Öğrenilen

- **MCP / Connector kavramı**: Claude'u şirket araçlarınıza bağlamak
- **OAuth akışı**: güvenli kimlik doğrulama
- **Gerçek veri ile çalışma**: kopyala-yapıştır değil, canlı bağlantı

### Daha Detay

[MCP Nedir?](/wiki/mcp/nedir/) | [Bağlantı Listesi](/wiki/mcp/baglanti-listesi/)

---

## Gün 5: Prompt Kütüphanesi Başlangıcı (40 dk)

**Amaç:** İlk 4 günde çalıştığını fark ettiğiniz promptları yapılandırılmış olarak kaydedin. Bu hafta ürettiğiniz en değerli kalıcı varlık.

### Yapılacaklar

**1. Kütüphanenin yerini seç (2 dk)**

Önerilen yer bir **Claude Projesi**: "Prompt Kütüphanem" adlı bir proje açın, aşağıda hazırlayacağınız `.md` dosyalarını projeye yükleyin, proje talimatına "bu projedeki şablonlardan birini seçip değişkenleri benden sor" yazın. Proje hem sohbette hem Cowork'te aynı şekilde çalışır. Yalnızca bilgisayardaki bir klasöre (örn. `C:\ClaudeWorkspace\prompts\`) güvenmeyin: 6 Ekim 2026'dan beri Pro ve Max'te yeni Cowork görevleri bulutta çalışır ve bulut görevleri yerel klasöre doğrudan erişemez. Aşağıdaki adımlarda geçen `prompts/` klasörünü dosyalarınızın yerel yedeği olarak tutun, asıl kütüphane projede dursun. Sık kullandığınız bir prompt zamanla sabitlenirse onu [Skill](/wiki/yetenekler/skills/)'e çevirmek de bir yoldur.

**2. Bu hafta çalışan promptları topla (15 dk)**

Cowork sohbet geçmişinizi gözden geçirin. **Sonucu çok beğendiğiniz** prompt'ları bulun. En az 3 tane.

Tipik adaylar:
- Gün 1'deki o e-posta promptu
- Gün 3'teki Word rapor promptu
- Gün 4'teki connector + analiz promptu

**3. Her birini ayrı .md dosyasına kaydedin (15 dk)**

Şablon:

```markdown
# Prompt: [Konu, örneğin "Müşteri Yeniden Bağlantı E-postası"]

## Ne zaman kullanırım?
2 ay+ yanıt vermeyen müşteriye yeniden bağlantı kurarken.

## Tam prompt

Sen kıdemli bir B2B satış yöneticisisin.

Bağlam: {{MÜŞTERİ_ADI}} ile {{İLİŞKİ_SÜRESİ}} aydır görüşme yapıyoruz.
Son {{SESSIZ_AY}} ay yanıt yok. Önceki teklifimiz: {{TEKLİF_DETAY}}.

Görev: 150 kelimelik bir yeniden bağlantı e-postası yaz.
Format: Konu satırı + 3 paragraf
Ton: Samimi ama profesyonel, baskı yapmayan
Kaçın: "umarım", "rica ederim", pazarlama klişeleri

## Notlar
- {{MÜŞTERİ_ADI}}, {{İLİŞKİ_SÜRESİ}} gibi değişkenleri her seferinde değiştirin
- Çıktıyı 1-2 turla iyileştirin, ilk versiyon nadiren son
- En son güncellendi: 2026-10-05
```

3-5 prompt için tekrarla. Claude Projende `musteri-yeniden-baglanti`, `aylik-rapor-anlatisi` gibi anlamlı isimlerle (Cowork ile yerel klasörde çalışıyorsan `prompts/` klasöründe).

**4. README.md ekle (8 dk)**

Proje talimatında ya da bir liste dosyasında (Cowork'te `prompts/README.md`) kütüphanedeki promptların listesi:

```markdown
# Prompt Kütüphanem

## Satış
- musteri-yeniden-baglanti.md
- toplanti-sonrasi-ozet.md

## Raporlama
- aylik-rapor-anlatisi.md

## (zamanla genişler)
```

### Yeni Öğrenilen

- **Prompt kalıcı varlıktır**: bir kez kalitesini bulun, hep kullanın
- **Değişken ({{VAR}}) kullanımı**: şablon mantığı
- **Kütüphane disiplini**: ne zaman kullanılır + güncellik notu

### Daha Detay

[İleri Seviye Prompt Engineering](/wiki/prompting/ileri-seviye/): XML tag'leri, few-shot, prompt chaining

---

## Gün 6: İterasyon ve Discernment (40 dk)

**Amaç:** Çıktıyı **eleştirel değerlendirme** refleksi kurun. Claude'un dediğini körü körüne kabul etmek yerine süzgeçten geçirmek.

Bu hafta görsel olmayan ama en önemli adımdır. [4D Çerçevesi](/wiki/prompting/4d-cercevesi/)'nin **D3 (Discernment)** boyutudur.

### Yapılacaklar

**1. Bu haftaki 5 çıktıyı yan yana koyun (10 dk)**

Hafta boyunca ürettiklerinizi bir araya getirin:
- Gün 1'in e-postası
- Gün 3'ün Word raporu
- Gün 4'ün connector çıktısı
- Gün 5'in promptlarıyla üretilenler
- Diğer denedikleriniz

**2. Her birine "İmza Testi" uygula (15 dk)**

Her çıktıya sırayla bakın ve sorun:

> **"Bu metnin altına kendi adımı koymaya razı mıyım?"**

Üç kategori:

- ✅ **"Evet, gönderdim / kullandım"**: başarılı
- 🟡 **"Evet ama şunu düzelttim"**: kısmen başarılı, neyi düzelttiğiniz önemli
- ❌ **"Hayır, atladım / kullanmadım"**: başarısız, sebep ne?

**3. Başarısızlık sebeplerini kategorize edin (10 dk)**

❌ ve 🟡 kategorisindeki çıktılarda neyi düzelttiniz / neden atladınız?

Tipik sebepler:

- **Bağlam eksik:** Claude şirketin gerçek durumunu bilmiyordu → CLAUDE.md eksiği, ekleyin
- **Ton kayması:** Çok resmi / çok samimi → CLAUDE.md ton bölümü güçlendirilecek
- **Olgu hatası:** Yanlış sayı, hayali alıntı → her zaman doğrula refleksi
- **Çok jenerik:** Spesifik değildi → prompt'ta daha çok bağlam vermek
- **İterasyon yapmadım:** İlk çıktıyı kabul ettim → 2. veya 3. tur denemek

**4. CLAUDE.md ve prompt kütüphanesini güncelle (5 dk)**

Bulduğunuz her gerçek eksikliği:
- Şirkete dair bilgi → CLAUDE.md
- Ton tercihi → CLAUDE.md "Ton" bölümü
- Yapısal sorun → ilgili prompt'un notlar bölümü

### Yeni Öğrenilen

- **Discernment**: çıktıyı değerlendirmek üretmek kadar önemli
- **İmza Testi**: basit ama güçlü gözden geçirme sorusu
- **Düzeltme döngüsü**: eksik gördüğünüz → kalıcı dosyaya işleyin

### Daha Detay

[4D Çerçevesi](/wiki/prompting/4d-cercevesi/) | [Yaygın Prompting Hataları](/wiki/prompting/yaygin-hatalar/) | [Sınırlamalar](/wiki/temeller/sinirlamalar/)

---

## Gün 7: Otomasyon ve Yansıma (60 dk)

**Amaç:** Bu haftanın bir tekrar eden işini **otomatize** edin. Sonra haftayı toplu değerlendirin.

### Bölüm A: İlk Scheduled Task (35 dk)

**1. Otomatize edilecek tekrar eden bir iş seçin (5 dk)**

Bu hafta, **her hafta yapacağınız** bir işi düşünün:

- Pazartesi sabah haftalık pipeline özeti
- Her sabah Slack özeti + öncelikli e-postalar
- Cuma akşam haftalık aktivite raporu
- Aylık rapor şablonu hazırlama

Birini seçin.

**2. /schedule komutuyla kurun (20 dk)**

Cowork'te yeni sohbet:

```
/schedule

Her Pazartesi sabah 08:00'de:
- CRM'den geçen haftaki yeni fırsatları çek
- Açılan toplam değer ve sayısını hesapla
- 3 dikkat gereken anlaşmayı listele
- Workspace/raporlar/ altına "haftalik-pipeline-YYYY-MM-DD.md" olarak kaydet
- Bana özet bildirim gönder
```

Claude netleştirmek için sorabilir:
- Hangi CRM connector'u kullansın
- Çıktı formatını netleştir
- İlk çalışma zamanını teyit

Cevaplayın, kurulumu tamamlayın.

**3. Test ve onay (10 dk)**

Bir kere "şimdi çalıştır" diye tetikleyin. Çıktıyı görün. Beklediğiniz gibi mi?

Değilse: prompt'u düzeltin → tekrar test → tatmin olunca otomasyon aktif.

### Bölüm B: Hafta Yansıması (25 dk)

**1. Çıktı envanteri (10 dk)**

7 günde ne ürettiniz? Listeleyin:

- Kaç gerçek iş çıktısı? (e-posta, rapor, sunum, vb.)
- Kaç saat tasarruf ettiğinizi düşünüyorsunuz?
- En değerli 1 çıktınız hangisiydi?

**2. CLAUDE.md final güncelleme (5 dk)**

CLAUDE.md'yi açın. Hafta boyunca öğrendiğiniz **kalıcı bilgileri** ekleyin:
- Yeni connector'lar
- Düzelttiğiniz ton tercihleri
- "Her zaman / asla" listesindeki yeni kurallar

**3. Bir sonraki hafta hedefleri (5 dk)**

CLAUDE.md'nin "Güncel Odak" bölümüne **bir sonraki haftanın 2-3 hedefini** yazın:

- "Tüm Pazartesi sabah pipeline raporu otomatik yapılacak"
- "Tedarikçi yazışmaları için yeni bir prompt geliştir"
- "İK departmanı için ayrı bir klasör ve kendi CLAUDE.md'sini kur"

**4. Soru: Bu Claude bende kalıcı bir parça oldu mu? (5 dk)**

Dürüstçe cevaplayın:

- **Evet**: günlük açıyorum, alışkanlık kuruldu → harika, devam
- **Yarım**: bazı işlerde kullanıyorum ama tam değil → hangi alışkanlıklar oturmadı? Bir sonraki hafta ona odaklanın
- **Hayır**: döndüm eski yöntemlerime → engel ne? CLAUDE.md eksik mi, prompt yapısı zayıf mı, yoksa motivasyon mu? Sorunu adlandırın → çözün

### Yeni Öğrenilen

- **Scheduled Task**: Claude bensiz çalışıyor
- **Yansıma alışkanlığı**: haftalık değerlendirme + bir sonraki haftaya hedef
- **Sürdürülebilirlik**: alışkanlık tek seferlik egzersiz değil

### Daha Detay

[Scheduled Tasks](/wiki/araclar/scheduled-tasks/) | [Dispatch](/wiki/araclar/claude-mobil/#telefondan-görev-mobil-cowork-ve-dispatch): telefondan görev atama (sınırlı beta, yeni kullanıcılara kapalı; yalnızca bilgi için)

---

## Hafta Sonu: Elde Olanlar Listesi

Bu rehberi takip ettiyseniz, 7 gün sonra elinizde olması gerekenler:

- [ ] Gerçek işinize göre genişlemiş, yaşayan bir [CLAUDE.md](/wiki/claude-md/nedir/)
- [ ] Claude Projenizde (ya da `prompts/` klasöründe) **3-5** test edilmiş prompt
- [ ] **1+ connector** aktif ve çalışıyor
- [ ] **1 scheduled task** otomatik çalışıyor
- [ ] **7+ gerçek iş çıktısı** üretilmiş ve kullanılmış
- [ ] **İmza Testi** refleksi: her çıktıda otomatik soruyor olmak
- [ ] CLAUDE.md "Güncel Odak"ta bir sonraki haftanın hedefleri

Hepsini işaretliyorsanız, başarıyla atlattınız. Claude artık günlük iş akışınızın bir parçası.

---

## İlk Hafta Yaygın Hataları

### "Hayali görev üzerinde çalıştım"

Eğitim egzersizi gibi yapay görevler yerine **gerçek işiniz** üzerinde çalışın. Bir e-posta yazdırıp göndermediyseniz, zamanı boşa harcamışsınız demektir.

### "İterasyon yapmadım"

İlk çıktıyı kabul ettiniz mi? Çoğunlukla yanlış karar. 2-3 tur düzeltme ile çıktı niteliksel atlama yapar.

### "CLAUDE.md'yi unuttum"

Gün 2'de yazdınız ama hafta boyunca güncellemediyseniz dosyanız yarın paslanır. **İki kez söyleme kuralı** her gün geçerli.

### "Connector kurarken zorlandım, vazgeçtim"

OAuth akışı 5 dakikalık iş, vazgeçmeyin. Şirket VPN'i sorun çıkarıyorsa IT'ye sorun. Bu yatırım haftalarca geri döner.

### "Prompt'ları kaydetmedim"

İyi çalışan promptlar parmak izleriniz. Kaydetmezseniz her seferinde yeniden uğraşırsınız. 5 dakikalık kayıt ileride saatler kazandırır.

### "Hafta sonu yansıma yapmadım"

Yansıma olmazsa öğrenme yarım kalır. 25 dakikalık yansıma, bir sonraki haftayı niteliksel olarak değiştirir.

---

## Sıradaki: Derinleşme

İlk hafta tamam, temel refleks oturdu. Şimdi sırada:

- **[Departmanlar](/wiki/departmanlar/)**: Kendi rolünüze özel iş akışları (18 alan)
- **[Yetenekler](/wiki/yetenekler/)**: Skills, Artifacts, Computer Use, Agents
- **[Prompting derinleşmesi](/wiki/prompting/)**: 4D Çerçevesi, ileri teknikler
- **[Kalıcı talimat derinleşmesi](/wiki/claude-md/)**: Talimat ve hafıza yerleri, dört katman

İkinci hafta bunlardan birine odaklanın, kendi rolünüze en yakın olanı seçin.

---

## İlgili Sayfalar

- [İlk Kurulum](/wiki/temeller/ilk-kurulum/): Bu rehberden önce yapılması gerekenler
- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Kalıcı talimat dosyasının kavramı
- [Prompting Temel İlkeleri](/wiki/prompting/temel-ilkeler/): 5 bileşen yapısı
- [Skills](/wiki/yetenekler/skills/): Uzmanlık paketleri
- [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): Tüm connector seçenekleri
- [Scheduled Tasks](/wiki/araclar/scheduled-tasks/): Otomasyon detayları
- [4D Çerçevesi](/wiki/prompting/4d-cercevesi/): Discernment derinleşmesi
- [Yaygın Prompting Hataları](/wiki/prompting/yaygin-hatalar/): İterasyon ipuçları
- [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/): Logo, Mikro, Paraşüt gibi araçlar için seçenekler
- [Pilottan Yaygınlaştırmaya](/wiki/temeller/pilot-ve-yayginlastirma/): Kişisel haftadan ekip düzeyine geçiş


