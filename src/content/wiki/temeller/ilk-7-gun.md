---
title: İlk 7 Gün Rehberi — Claude'u Alışkanlığa Çevirin
description: Kurulum sonrası ilk 7 gün — gün gün ne yapacağınız, neyi öğreneceğiniz, ne üreteceğiniz. Claude'u günlük iş akışınızın kalıcı parçası yapacak yapılandırılmış program.
tags:
  - temeller
  - baslangic
  - checklist
  - onboarding
---


# İlk 7 Gün Rehberi

[İlk Kurulum](ilk-kurulum/) tamam. Claude Desktop kurulu, abonelik aktif, Cowork çalışıyor. **Şimdi asıl iş başlıyor — bilgiyi alışkanlığa çevirmek.**

İlk haftayı **doğru** geçirirseniz Claude günlük iş akışınızın kalıcı bir parçası olur. Yanlış geçirirseniz — "denedim, işe yaramadı" grubuna katılırsınız. Aradaki fark mucizevi bir kabiliyet değil, yapılandırılmış bir hafta.

Bu sayfa, Zamana eğitim programlarının birinci haftasının damıtılmış halidir. Her gün **30-60 dakika**, hafta sonunda elinizde gerçek çıktılar ve refleks olmuş bir alışkanlık.

> **Bu hafta neler kazanacaksınız:**
>
> - 7+ gerçek iş çıktısı (taslaklar, raporlar, e-postalar — gerçekten kullanılan)
> - Yaşayan bir [CLAUDE.md](../claude-md/nedir/) dosyası
> - 3-5 prompt'tan oluşan kişisel kütüphane
> - Bir [connector](../mcp/baglanti-listesi/) kurulu ve çalışır
> - Bir [scheduled task](../araclar/scheduled-tasks/) otomasyonda
> - **Discernment refleksi** — çıktıyı eleştirel değerlendirme alışkanlığı

## 7 Günlük Yol Haritası

Toplam yatırım: **~5 saat** (haftada 7 gün × ortalama 40 dk). Çıktı: kalıcı alışkanlık.

---

## Gün 1 — İlk Gerçek İş Çıktısı (45 dk)

**Amaç:** Claude'la **bugün gerçekten yapman gereken** bir işi birlikte halledin. Hayali egzersiz değil — gerçek bir iş.

### Yapılacaklar

**1. Gerçek bir iş seçin (5 dk)**

Bu hafta yapmanız gereken yazılı bir çıktı: müşteri e-postası, rapor özeti, teklif yazısı, politika taslağı, sunum planı, toplantı brifingi. Listede en kolayını seç.

**2. 5 bileşenli prompt yazın (15 dk)**

> **Önce: Hangi modda, hangi modelle?**
>
> - **Mod: Cowork** — Claude Desktop sol üst köşesinde 3 ikon var. Soldan sağa: 💬 Chats (konuşma balonu), **Cowork** (ortadaki, küçük yatay çizgili liste ikonu), `</> Code`. **Ortadaki Cowork ikonuna tıklayın.** Sebep: CLAUDE.md dosyanız burada otomatik okunur, çıktıyı workspace klasörüne kaydedebilirsiniz. Chats'te bu yok.
> - **Model: Sonnet (varsayılan)** — sağ üstte veya sohbet kutusunun yanında model seçici var. **Sonnet 4.6** seçili olduğunu kontrol edin. Bu hafta hep Sonnet kullanın — model seçimiyle uğraşmayın. Detay: [Modeller](modeller/).

Bir promptu doğru kurmanın yapısı şu — hepsini birden ver:

| Bileşen | Açıklama | Örnek |
|---|---|---|
| **Rol** | Claude'un kim olduğu | "Sen kıdemli bir B2B satış yöneticisisin" |
| **Bağlam** | Durum, geçmiş, kısıtlar | "XYZ Gıda ile 3 ay görüşme yapıyoruz, son 2 ay yanıt yok..." |
| **Görev** | Tam ne istiyorsun | "Yeniden bağlantı kurmak için 150 kelimelik e-posta yaz" |
| **Format** | Çıktı biçimi | "Konu satırı + 3 paragraf, samimi ama profesyonel" |
| **Kısıtlar** | Ne olmasın | "Pazarlama klişesi yok, 'umarım' kelimesi yok" |

İlk denemede mükemmel çıkmazsa normal — yarın iyileşeceksin.

**3. İterasyon (15 dk)**

Claude ilk çıktıyı verir. Okuyun. Spesifik geri bildirim verin:

- *"İkinci paragraf zayıf, [X konuya] odaklan"*
- *"Ton fazla resmi, biraz yumuşat"*
- *"Konu satırı düz, daha cazip 3 alternatif ver"*

3-5 iterasyon ile sonuca varın.

**4. Gönderin / kullanın (5 dk)**

Çıktıyı **gerçekten** gönderin veya kullanın. Çekmeceye atmayın — bu egzersiz değil.

**5. Notu alın (5 dk)**

Bir not defterine yazın:

- Bu iş Claude olmadan kaç dakika sürerdi?
- Şimdi kaç dakika sürdü?
- En çok zorlandığım kısım neydi?

### Yeni Öğrenilen

- **Prompt anatomisi** — 5 bileşen yapısı
- **İterasyon refleksi** — ilk çıktıyı son cevap sayma

### Daha Detay

Konu derinleşirse: [Prompting Temel İlkeleri](../prompting/temel-ilkeler/)

---

## Gün 2 — CLAUDE.md'yi Yaşatın (40 dk)

**Amaç:** Dün Claude'a tekrar tekrar açıkladığın her şeyi [CLAUDE.md](../claude-md/nedir/)'ye taşı. Bir kez yaz, her zaman geçerli olsun.

### Yapılacaklar

**1. Dün ne tekrar ettin? (10 dk)**

Dünkü oturumu hatırla. Claude'a ne **tekrar tekrar** anlatmak zorunda kaldın? Şirket adı, sektör, müşterilerin tipi, ton tercihin, kaçındığın kelimeler...

Listele — kağıda veya nota.

**2. CLAUDE.md'yi aç ve doldur (20 dk)**

Workspace klasöründeki `CLAUDE.md` dosyasını bir editörle aç. [5 bölümü](../claude-md/nasil-yazilir/) sırayla doldur:

```markdown
# CLAUDE.md — [Adınız]

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
- Bu çeyrek ne üzerinde çalışıyorsun
- 2-3 aktif proje
```

**3. Test et (10 dk)**

Cowork'te yeni sohbet açın:

```
CLAUDE.md dosyamı okudun mu? Beni özetle.
```

Yanlış veya eksik bir şey varsa CLAUDE.md'ye dön, düzelt, tekrar test et.

### Yeni Öğrenilen

- **Yaşayan dosya kavramı** — CLAUDE.md statik değil, sürekli güncellenen
- **"İki kez söyleme" kuralı** — Claude'a aynı şeyi ikinci kez anlatırsan, dosyaya yaz

### Daha Detay

[CLAUDE.md Nasıl Yazılır?](../claude-md/nasil-yazilir/) | [CLAUDE.md Örnekleri](../claude-md/ornekler/)

---

## Gün 3 — İlk Skill ile Belge Üretimi (50 dk)

**Amaç:** Claude'un [skill](../yetenekler/skills/) sistemini deneyin. Word, Excel veya PowerPoint dosyası **doğrudan** üretin.

### Yapılacaklar

**1. Skill nedir hızlı tanışma (5 dk)**

Skill, Claude'un belirli bir görev tipi için hazır uzmanlık paketidir. Cowork'te `/` yazınca skill listesi açılır.

Bu hafta odak: `docx`, `xlsx`, `pptx`, `pdf` skill'leri.

**2. Bir gerçek belge ihtiyacı seç (5 dk)**

- Bu hafta hazırlamanız gereken bir Word raporu var mı?
- Bir Excel tablosu (örn. tedarikçi karşılaştırması)?
- Bir PowerPoint sunum?

Birini seç.

**3. Skill'i çağır ve üret (30 dk)**

Cowork'te `/` yaz → ilgili skill'i seç (`/docx` örneğin) → talebinizi yazın:

```
Geçen ay Mart performansından bir özet Word raporu hazırla:
- Toplam satış, ciro, gerçekleşme oranı (rakamlar [tablodan])
- 3 ana başarı, 3 ana zorluk
- Nisan için 3 öneri
- Yönetim kuruluna sunulacak — ciddi ton
- 1.5 sayfa, başlıklar var
```

Claude `docx` skill'ini çağırır, belgeyi workspace klasörünüze yazar, açmak için bağlantı verir.

**4. Belgeyi açın, gözden geçirin, gerçekten kullanın (10 dk)**

Çıktıyı kontrol edin. Eksik varsa Claude'a düzelttirin. Sonuçta gerçek bir Word dosyası elinizde — kaydedin, kullanın.

### Yeni Öğrenilen

- **Skill kavramı** — Claude'un uzmanlık paketleri
- **Doğrudan dosya üretimi** — kopyala-yapıştır değil, gerçek `.docx`
- **Workspace içinde kalıcı çıktı** — workspace klasörünüzde her zaman duruyor

### Daha Detay

[Skills](../yetenekler/skills/) | [Dosya İşleme](../yetenekler/file-handling/)

---

## Gün 4 — İlk Connector Kurulumu (45 dk)

**Amaç:** Claude'u günlük kullandığınız bir araca ([Slack, Drive, Gmail, CRM](../mcp/baglanti-listesi/)) bağlayın. Artık Claude **gerçek verinizle** çalışır.

### Yapılacaklar

**1. Doğru connector'u seç (5 dk)**

Rolünüze göre en kritik olan:

| Rol | Önerilen ilk connector |
|---|---|
| Satış | **CRM** (Salesforce / HubSpot) veya **Gmail** |
| Pazarlama | **Google Workspace** veya **Slack** |
| Finans | **Microsoft 365** (özellikle Excel) |
| Operasyon | **Slack** veya **Asana** |
| İK | **Microsoft 365** |
| Yönetici Asistanı | **Microsoft 365** tam paket |

**2. Cowork → Customize → Connector kurulumu (15 dk)**

Cowork sol panelde **"Customize"** veya **"Settings → Connectors"** sekmesi.

- Listede ilgili connector'u bul
- **"Install"** veya **"Connect"**
- Tarayıcı açılır → ilgili servise giriş yapın
- **OAuth onay ekranı** — Claude'a hangi izinleri vereceğinizi gösterir → onaylayın
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

- **MCP / Connector kavramı** — Claude'u şirket araçlarınıza bağlamak
- **OAuth akışı** — güvenli kimlik doğrulama
- **Gerçek veri ile çalışma** — kopyala-yapıştır değil, canlı bağlantı

### Daha Detay

[MCP Nedir?](../mcp/nedir/) | [Bağlantı Listesi](../mcp/baglanti-listesi/)

---

## Gün 5 — Prompt Kütüphanesi Başlangıcı (40 dk)

**Amaç:** İlk 4 günde çalıştığını fark ettiğin promptları yapılandırılmış olarak kaydet. Bu hafta üretmiş olduğun en değerli kalıcı varlık.

### Yapılacaklar

**1. prompts/ klasörünü kur (2 dk)**

Workspace klasörünüzde (örn. `C:\ClaudeWorkspace`) **`prompts/`** adlı yeni klasör oluşturun. (Kurulum sayfasında zaten önerdiyseniz var.)

**2. Bu hafta çalışan promptları topla (15 dk)**

Cowork sohbet geçmişinizi gözden geçirin. **Sonucu çok beğendiğin** prompt'ları bul. En az 3 tane.

Tipik adaylar:
- Gün 1'deki o e-posta promptu
- Gün 3'teki Word rapor promptu
- Gün 4'teki connector + analiz promptu

**3. Her birini ayrı .md dosyasına kaydet (15 dk)**

Şablon:

```markdown
# Prompt: [Konu — örneğin "Müşteri Yeniden Bağlantı E-postası"]

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
- {{MÜŞTERİ_ADI}}, {{İLİŞKİ_SÜRESİ}} gibi değişkenleri her seferinde değiştir
- Çıktıyı 1-2 turla iyileştir, ilk versiyon nadiren son
- En son güncellendi: 2026-04-26
```

3-5 prompt için tekrarla. `prompts/` klasöründe `musteri-yeniden-baglanti.md`, `aylik-rapor-anlatisi.md` gibi anlamlı isimlerle.

**4. README.md ekle (8 dk)**

`prompts/README.md` dosyası — kütüphanedeki promptların listesi:

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

- **Prompt kalıcı varlıktır** — bir kez kalitesini bulun, hep kullanın
- **Değişken ({{VAR}}) kullanımı** — şablon mantığı
- **Kütüphane disiplini** — ne zaman kullanılır + güncellik notu

### Daha Detay

[İleri Seviye Prompt Engineering](../prompting/ileri-seviye/) — XML tag'leri, few-shot, prompt chaining

---

## Gün 6 — İterasyon ve Discernment (40 dk)

**Amaç:** Çıktıyı **eleştirel değerlendirme** refleksi kurun. Claude'un dediğini körü körüne kabul etmek yerine süzgeçten geçirmek.

Bu hafta görsel olmayan ama en önemli adımdır — [4D Çerçevesi](../prompting/4d-cercevesi/)'nin **D3 (Discernment)** boyutu.

### Yapılacaklar

**1. Bu haftaki 5 çıktıyı yan yana koy (10 dk)**

Hafta boyunca ürettiklerini bir araya getir:
- Gün 1'in e-postası
- Gün 3'ün Word raporu
- Gün 4'ün connector çıktısı
- Gün 5'in promptlarıyla üretilenler
- Diğer denediklerin

**2. Her birine "İmza Testi" uygula (15 dk)**

Her çıktıya sırayla bak ve sor:

> **"Bu metnin altına kendi adımı koymaya razı mıyım?"**

Üç kategori:

- ✅ **"Evet, gönderdim / kullandım"** — başarılı
- 🟡 **"Evet ama şunu düzelttim"** — kısmen başarılı, neyi düzelttiğin önemli
- ❌ **"Hayır, atladım / kullanmadım"** — başarısız, sebep ne?

**3. Başarısızlık sebeplerini kategorize et (10 dk)**

❌ ve 🟡 kategorisindeki çıktılarda neyi düzelttiniz / neden atladınız?

Tipik sebepler:

- **Bağlam eksik:** Claude şirketin gerçek durumunu bilmiyordu → CLAUDE.md eksiği, ekleyin
- **Ton kayması:** Çok resmi / çok samimi → CLAUDE.md ton bölümü güçlendirilecek
- **Olgu hatası:** Yanlış sayı, hayali alıntı → her zaman doğrula refleksi
- **Çok jenerik:** Spesifik değildi → prompt'ta daha çok bağlam vermek
- **İterasyon yapmadım:** İlk çıktıyı kabul ettim → 2. veya 3. tur denemek

**4. CLAUDE.md ve prompt kütüphanesini güncelle (5 dk)**

Bulduğun her gerçek eksikliği:
- Şirkete dair bilgi → CLAUDE.md
- Ton tercihi → CLAUDE.md "Ton" bölümü
- Yapısal sorun → ilgili prompt'un notlar bölümü

### Yeni Öğrenilen

- **Discernment** — çıktıyı değerlendirmek üretmek kadar önemli
- **İmza Testi** — basit ama güçlü gözden geçirme sorusu
- **Düzeltme döngüsü** — eksik gördüğün → kalıcı dosyaya işle

### Daha Detay

[4D Çerçevesi](../prompting/4d-cercevesi/) | [Yaygın Prompting Hataları](../prompting/yaygin-hatalar/) | [Sınırlamalar](sinirlamalar/)

---

## Gün 7 — Otomasyon ve Yansıma (60 dk)

**Amaç:** Bu haftanın bir tekrar eden işini **otomatize** edin. Sonra haftayı toplu değerlendirin.

### Bölüm A — İlk Scheduled Task (35 dk)

**1. Otomatize edilecek tekrar eden bir iş seç (5 dk)**

Bu hafta, **her hafta yapacağınız** bir işi düşünün:

- Pazartesi sabah haftalık pipeline özeti
- Her sabah Slack özeti + öncelikli e-postalar
- Cuma akşam haftalık aktivite raporu
- Aylık rapor şablonu hazırlama

Birini seç.

**2. /schedule komutuyla kur (20 dk)**

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

Cevapla, kurulumu tamamla.

**3. Test ve onay (10 dk)**

Bir kere "şimdi çalıştır" diye tetikle. Çıktıyı gör. Beklediğin gibi mi?

Değilse: prompt'u düzelt → tekrar test → tatmin olunca otomasyon aktif.

### Bölüm B — Hafta Yansıması (25 dk)

**1. Çıktı envanteri (10 dk)**

7 günde ne ürettin? Listele:

- Kaç gerçek iş çıktısı? (e-posta, rapor, sunum, vb.)
- Kaç saat tasarruf ettiğini düşünüyorsun?
- En değerli 1 çıktı hangisiydi?

**2. CLAUDE.md final güncelleme (5 dk)**

CLAUDE.md'yi aç. Hafta boyunca öğrendiğin **kalıcı bilgileri** ekle:
- Yeni connector'lar
- Düzelttiğin ton tercihleri
- "Her zaman / asla" listesindeki yeni kurallar

**3. Bir sonraki hafta hedefleri (5 dk)**

CLAUDE.md'nin "Güncel Odak" bölümüne **bir sonraki haftanın 2-3 hedefini** yaz:

- "Tüm Pazartesi sabah pipeline raporu otomatik yapılacak"
- "Tedarikçi yazışmaları için yeni bir prompt geliştir"
- "İK departmanı için bir CLAUDE.md alt klasörü kur"

**4. Soru: Bu Claude bende kalıcı bir parça oldu mu? (5 dk)**

Dürüstçe cevapla:

- **Evet** — günlük açıyorum, alışkanlık kuruldu → harika, devam
- **Yarım** — bazı işlerde kullanıyorum ama tam değil → hangi alışkanlıklar oturmadı? Bir sonraki hafta odaklan
- **Hayır** — döndüm eski yöntemlerime → engel ne? CLAUDE.md eksik mi, prompt yapısı zayıf mı, yoksa motivasyon mu? Sorunu adlandır → çöz

### Yeni Öğrenilen

- **Scheduled Task** — Claude bensiz çalışıyor
- **Yansıma alışkanlığı** — haftalık değerlendirme + bir sonraki haftaya hedef
- **Sürdürülebilirlik** — alışkanlık tek seferlik egzersiz değil

### Daha Detay

[Scheduled Tasks](../araclar/scheduled-tasks/) | [Dispatch](../araclar/dispatch/) — telefondan görev atama

---

## Hafta Sonu — Elde Olanlar Listesi

Bu rehberi takip ettiyseniz, 7 gün sonra elinizde olması gerekenler:

- [ ] Yaşayan, en az 100 satırlık bir [CLAUDE.md](../claude-md/nedir/)
- [ ] `prompts/` klasöründe **3-5** test edilmiş prompt
- [ ] **1+ connector** aktif ve çalışıyor
- [ ] **1 scheduled task** otomatik çalışıyor
- [ ] **7+ gerçek iş çıktısı** üretilmiş ve kullanılmış
- [ ] **İmza Testi** refleksi — her çıktıda otomatik soruyor olmak
- [ ] CLAUDE.md "Güncel Odak"ta bir sonraki haftanın hedefleri

Hepsini işaretliyorsanız — başarıyla atlattınız. Claude artık günlük iş akışınızın bir parçası.

---

## İlk Hafta Yaygın Hataları

### "Hayali görev üzerinde çalıştım"

Eğitim egzersizi gibi yapay görevler yerine **gerçek işiniz** üzerinde çalışın. "Bir e-posta yazdırıp atmadım" — bu zamanı boşa harcadığınız anlamına gelir.

### "İterasyon yapmadım"

İlk çıktıyı kabul ettiniz mi? Çoğunlukla yanlış karar. 2-3 tur düzeltme ile çıktı niteliksel atlama yapar.

### "CLAUDE.md'yi unuttum"

Gün 2'de yazdınız ama hafta boyunca güncellemediyseniz dosyanız yarın paslanır. **İki kez söyleme kuralı** her gün geçerli.

### "Connector kurarken zorlandım, vazgeçtim"

OAuth akışı 5 dakikalık iş — vazgeçmeyin. Şirket VPN'i sorun çıkarıyorsa IT'ye sorun. Bu yatırım haftalarca geri döner.

### "Prompt'ları kaydetmedim"

İyi çalışan promptlar parmak izleriniz. Kaydetmezseniz her seferinde yeniden uğraşırsınız. 5 dakikalık kayıt ileride saatler kazandırır.

### "Hafta sonu yansıma yapmadım"

Yansıma olmazsa öğrenme yarım kalır. 25 dakikalık yansıma — bir sonraki haftayı niteliksel olarak değiştirir.

---

## Sıradaki: Derinleşme

İlk hafta tamam — temel refleks oturdu. Şimdi sırada:

- **[Departmanlar](../departmanlar/)** — Kendi rolünüze özel iş akışları (12 alan)
- **[Yetenekler](../yetenekler/)** — Skills, Artifacts, Computer Use, Agents
- **[Prompting derinleşmesi](../prompting/)** — 4D Çerçevesi, ileri teknikler
- **[CLAUDE.md derinleşmesi](../claude-md/)** — Memory yönetimi, dört katman

İkinci hafta bunlardan birine odaklanın — kendi rolünüze en yakın olanı seçin.

---

## İlgili Sayfalar

- [İlk Kurulum](ilk-kurulum/) — Bu rehberden önce yapılması gerekenler
- [CLAUDE.md Nedir?](../claude-md/nedir/) — Hafıza dosyasının kavramı
- [Prompting Temel İlkeleri](../prompting/temel-ilkeler/) — 5 bileşen yapısı
- [Skills](../yetenekler/skills/) — Uzmanlık paketleri
- [MCP Bağlantı Listesi](../mcp/baglanti-listesi/) — Tüm connector seçenekleri
- [Scheduled Tasks](../araclar/scheduled-tasks/) — Otomasyon detayları
- [4D Çerçevesi](../prompting/4d-cercevesi/) — Discernment derinleşmesi
- [Yaygın Prompting Hataları](../prompting/yaygin-hatalar/) — İterasyon ipuçları


