---
title: İdari İşler — Claude Uygulamaları
description: Yönetici asistanı ve idari personel için Claude — yazışma, toplantı tutanakları, yönetici brifingi, seyahat planı, yönetim kurulu paketi.
tags:
  - departmanlar
  - idari-isler
  - yonetici-asistani
  - toplanti
---

Yönetici asistanı ve idari personel, Claude'dan saatlerce kazanır. Bu kazancın çoğu **zaten yapmaları gereken ama zamanları yetmediği** yüksek değerli işlere harcanır.

## Claude'un Çözdüğü Temel Sıkıntılar

- Yazışma ve e-posta taslak yazımı günün çoğunu tüketiyor
- Toplantı organizasyonu, tutanakları ve takipleri zaman alıcı
- Yönetici desteği zaman baskısı altında yüksek kalite gerektiriyor
- Departmanlar arası koordinasyon sürekli iletişim taslak yazımını gerektiriyor
- Seyahat koordinasyonu ve gider raporlaması idari yük
- Uluslararası kontaklar için belge ve iletişim çevirisi yavaş

## Bölüm 1 — İletişim ve Yazışma

### Profesyonel E-posta Taslağı

Bağlam ve istenen sonuç girer → parlatılmış taslak çıkar — **asistan artık her e-posta için 20 dakika kelime seçmekle uğraşmaz**.

### Çok Partili Koordinasyon E-postaları

Karmaşık takvim ve lojistik iletişim, birden fazla kişiye farklı bilgiler net formatta.

### Yönetici Yazışması

Üst yönetim adına yazma — ton, otorite ve kesinlik **yöneticiyi yansıtır, asistanı değil**. CLAUDE.md'deki "yöneticimin iletişim tarzı" girdisi burada inşa edilir.

### Dış Yazışma

Resmi mektuplar, kurumlara (bankalar, devlet kurumları, ticaret odaları) yanıtlar, ortak iletişimi — gerektiğinde **resmi Türk iş mektubu formatı**.

### Çeviri ve Uyarlama

Uluslararası kontaklar için İngilizce (veya tersine Türkçe) iletişim taslağı — doğru profesyonel register korunur.

## Bölüm 2 — Toplantılar ve Dokümantasyon

**Toplantı hazırlığı.** Gündem oluşturma, arka plan belge derleme, brifing notları — yönetici her toplantıya gerçekten okuyacağı tek sayfalık brief'le girer.

**Toplantı tutanakları.** Kaba notlar → kararlar, eylem kalemleri, sahipler ve son tarihlerle yapılandırılmış tutanak — **toplantı bittikten 3 gün değil 30 dakika içinde** üretilir.

**Takip koordinasyonu.** Toplantı sonrası eylem takibi ve hatırlatma iletişimi — aksiyon üretecek kadar profesyonel.

**Belge formatlama ve yapılandırma.** Ham içerik → standartları olan bir şirket gibi görünen profesyonel belgeler.

**Seyahat koordinasyon dokümantasyonu.** Seyahat planı, otel onayları, vize gereksinim notları, gün bazlı gündem — tek belgede, hızla gezilebilir.

## Bölüm 3 — Yönetici Desteği

**Brifing belgeleri.** Yöneticiyi toplantı, görüşme ve sunumlara hazırlamak — kiminle buluşuyor, neden, ne bilmesi gerekir, neyi **söylememesi** gerekir, istenen sonuç ne.

**Sunum desteği.** Slayt içeriğini yapılandırma, yöneticinin okumadan güvenle sunmasına yardım eden konuşmacı notları.

**Takvim ve öncelik yönetimi.** Zamanlama, reddetme ve yeniden zamanlama için profesyonel yanıtlar — ilişkileri koruyan ama **yöneticinin zamanını da koruyan**.

**Gider raporu dokümantasyonu.** Fişleri ve giderleri finansın işleyebileceği yapılandırılmış raporlara düzenlemek — bir yığın kağıdı temiz bir başvuruya çevirir.

### Yönetim Kurulu Paket Hazırlığı

Yönetim kurulu toplantısının materyallerini toplama ve yazma büyük bir idari iştir: gündem, board pack kapak notu, destekleyici belgeler, karar taslakları.

Claude **paketi yapılandırır, kapak özetlerini yazar ve hiçbir şeyin eksik olmadığından emin olur**. Bu yönetici brifinginden ayrıdır — brief tek kişiyi hazırlar; board pack birden fazla kıdemli paydaş için **resmi belge seti**dir.

## Prompt Kütüphanesi Konuları

- Duruma göre profesyonel e-posta (talep, takip, resmi bildirim, koordinasyon)
- Yönetici yazışması şablonları
- Toplantı gündem üretici
- Kaba notlardan toplantı tutanağı
- Eylem maddesi takip e-postası
- Yönetici brifing şablonu
- Resmi Türk iş mektubu
- Seyahat planı şablonu
- Gider raporu yapısı
- Çok dilli yazışma uyarlaması
- Yönetim kurulu gündem ve paket yapısı

## Kullanılacak Skills ve Connector'lar

**Skills:**
- `docx` — resmi mektuplar, tutanaklar, brifingler
- `pdf` — yönetim kurulu paketi
- `pptx` — sunum desteği
- CLAUDE.md'de takvim bağlamı

**Connector'lar:**
1. **Microsoft 365 tam paket** (Outlook Calendar, Email, OneDrive)
2. **Slack / Teams** — iç iletişim
3. (opsiyonel) **DocuSign** — resmi belgelerin imzası
4. (opsiyonel) **Asana** — görev ve hatırlatma takibi

## İş Akışı Yeniden Tasarımı Adayları

- **Sabah e-posta yönetim seansı** — gelen kutusu → öncelikleme → taslak yanıtlar
- **Toplantı hazırlık → tutanak → takip döngüsü** — her toplantının tam döngüsü
- **Seyahat koordinasyon iş akışı** — rezervasyon → itinerer → sonrası expense raporu
- **Yönetim kurulu hazırlık döngüsü** — çeyreklik tam paket üretimi

## Gerçek Örnek — Toplantı Tutanağı

Yönetici asistan, 2 saatlik strateji toplantısının hızlı tutulmuş notlarını alır (3 sayfalık kaba notlar).

**Adım 1:** Claude'a notları + katılımcı listesini + toplantının konusunu verir:
> *"Bu 2 saatlik strateji toplantısının notlarını yapılandırılmış tutanağa çevir. Format: toplantı adı, tarih, katılımcılar, gündem sırasına göre konular, alınan kararlar (kim, ne, ne zaman), eylem kalemleri (sahip + son tarih), açık sorular. Profesyonel Türkçe, kurumsal tonda."*

**Adım 2:** Claude tutanağı üretir. Asistan geçmiş notlarıyla karşılaştırır, 2-3 yerde düzeltir.

**Adım 3:** Takip e-postası isteği: *"Bu tutanaktan her eylem sahibine özel takip e-postası taslağı yaz. Her kişiye sadece kendi eylemi, son tarihi, ve gerekirse destek isteme ifadesi."*

**Adım 4:** Asistan e-postaları gözden geçirir, yönetici adına gönderir.

Toplam süre: 35 dakika. Normal süreç: 2-3 saat (ertesi gün).

## İlgili Sayfalar

- [CLAUDE.md Örnekleri](../claude-md/ornekler/) — Yönetici asistanı için hazır CLAUDE.md
- [Scheduled Tasks](../araclar/scheduled-tasks/) — Günlük brifing otomasyonu
- [Liderlik ve Yönetim](liderlik/) — Yönetici tarafındaki Claude kullanımı
- [Görsel ve Görüntü](../yetenekler/vision-image/) — Kartvizit / fiş / tahta notları

