---
title: "İdari İşler: Claude Uygulamaları"
description: "Yönetici asistanı ve idari personel için Claude: yazışma, toplantı tutanakları, yönetici brifingi, seyahat planı, yönetim kurulu paketi."
tags:
  - departmanlar
  - idari-isler
  - yonetici-asistani
  - toplanti
lastUpdated: "2026-10-05"
---

Yönetici asistanı ve idari personel, Claude ile haftada saatlerce zaman kazanabilir. Bu zaman, **zaten yapmaları gereken ama vakit bulamadıkları** yüksek değerli işlere gider.

## Claude'un Çözdüğü Temel Sıkıntılar

- Yazışma ve e-posta taslak yazımı günün çoğunu tüketiyor
- Toplantı organizasyonu, tutanakları ve takipleri zaman alıcı
- Yönetici desteği zaman baskısı altında yüksek kalite gerektiriyor
- Departmanlar arası koordinasyon sürekli iletişim taslak yazımını gerektiriyor
- Seyahat koordinasyonu ve gider raporlaması idari yük
- Uluslararası kontaklar için belge ve iletişim çevirisi yavaş

## Bölüm 1: İletişim ve Yazışma

### Profesyonel E-posta Taslağı

Bağlam ve istenen sonuç girilir, parlatılmış bir taslak çıkar. **Asistan artık her e-posta için kelime seçmekle uzun uzun uğraşmaz.**

### Çok Partili Koordinasyon E-postaları

Karmaşık takvim ve lojistik iletişimi: birden fazla kişiye, her birine ait farklı bilgiler net bir formatta.

### Yönetici Yazışması

Üst yönetim adına yazarken ton, otorite ve kesinlik **yöneticiyi yansıtmalı, asistanı değil**. CLAUDE.md'deki "yöneticimin iletişim tarzı" girdisi bunun için kurulur.

### Dış Yazışma

Resmi mektuplar, kurumlara (bankalar, devlet kurumları, ticaret odaları) yanıtlar ve ortak iletişim. Gerektiğinde **resmi Türk iş mektubu formatı** kullanılır.

### Çeviri ve Uyarlama

Uluslararası kontaklar için İngilizce (veya tersine Türkçe) iletişim taslağı hazırlanır, doğru profesyonel ton korunur.

## Bölüm 2: Toplantılar ve Dokümantasyon

**Toplantı hazırlığı.** Gündem oluşturma, arka plan belgelerini derleme, brifing notları. Yönetici her toplantıya gerçekten okuyacağı tek sayfalık bir brief'le girer.

**Toplantı tutanakları.** Kaba notlar; kararlar, eylem kalemleri, sahipler ve son tarihlerle yapılandırılmış bir tutanağa dönüşür. Tutanak **toplantıdan 3 gün sonra değil, 30 dakika sonra** elinizde olur.

**Takip koordinasyonu.** Toplantı sonrası eylem takibi ve hatırlatma iletişimi, aksiyon üretecek kadar profesyonel bir dille.

**Belge formatlama ve yapılandırma.** Ham içerik, kurumsal standartları olan bir şirketin belgesi gibi görünen profesyonel bir belgeye dönüşür.

**Seyahat koordinasyon dokümantasyonu.** Seyahat planı, otel onayları, vize gereksinim notları ve gün bazlı gündem tek belgede, hızla gezilebilir biçimde.

## Bölüm 3: Yönetici Desteği

**Brifing belgeleri.** Yöneticiyi toplantı, görüşme ve sunumlara hazırlamak: kiminle buluşuyor, neden, ne bilmesi gerekir, neyi **söylememesi** gerekir, istenen sonuç ne.

**Sunum desteği.** Slayt içeriğini yapılandırmak ve yöneticinin okumadan, güvenle sunmasına yardım eden konuşmacı notları yazmak. Claude'un PowerPoint eklentisi bu işi doğrudan sunum dosyasının içinde yapabilir, bkz. [Office ve Chrome Eklentileri](/wiki/araclar/office-ve-chrome/).

**Takvim ve öncelik yönetimi.** Zamanlama, reddetme ve yeniden zamanlama için profesyonel yanıtlar: ilişkileri koruyan ama **yöneticinin zamanını da koruyan** bir dille.

**Gider raporu dokümantasyonu.** Fişleri ve giderleri finansın işleyebileceği yapılandırılmış raporlara düzenlemek; bir yığın kâğıdı temiz bir başvuruya çevirir.

### Yönetim Kurulu Paket Hazırlığı

Yönetim kurulu toplantısının materyallerini toplama ve yazma büyük bir idari iştir: gündem, board pack kapak notu, destekleyici belgeler, karar taslakları.

Claude **paketi yapılandırır, kapak özetlerini yazar ve eksik bir belge olup olmadığını kontrol etmenize yardım eder**. Bu, yönetici brifinginden ayrı bir iştir: brief tek kişiyi hazırlar, board pack ise birden fazla kıdemli paydaş için **resmi bir belge setidir**.

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
- `docx`: resmi mektuplar, tutanaklar, brifingler
- `pdf`: yönetim kurulu paketi
- `pptx`: sunum desteği
- CLAUDE.md'de takvim bağlamı

**Connector'lar:**
1. **Microsoft 365** (Outlook takvim ve e-posta, OneDrive, SharePoint, Teams araması). Resmi Microsoft 365 connector'ı tüm planlarda var; Team ve Enterprise'da önce organizasyon sahibi etkinleştirir. Ayrıca Word ve PowerPoint eklentileri genel kullanımda, Outlook eklentisi public beta aşamasındadır.
2. **Slack / Teams**: iç iletişim
3. (opsiyonel) **DocuSign**: resmi belgelerin imzası
4. (opsiyonel) **Asana**: görev ve hatırlatma takibi

## İş Akışı Yeniden Tasarımı Adayları

- **Sabah e-posta yönetim seansı**: gelen kutusu → öncelikleme → taslak yanıtlar
- **Toplantı hazırlık → tutanak → takip döngüsü**: her toplantının tam döngüsü
- **Seyahat koordinasyon iş akışı**: rezervasyon → seyahat programı → dönüş sonrası gider raporu
- **Yönetim kurulu hazırlık döngüsü**: çeyreklik tam paket üretimi

## Gerçek Örnek: Toplantı Tutanağı

Yönetici asistanı, 2 saatlik strateji toplantısının hızlıca tutulmuş notlarını alır (3 sayfalık kaba notlar).

**Adım 1:** Claude'a notları + katılımcı listesini + toplantının konusunu verir:
> *"Bu 2 saatlik strateji toplantısının notlarını yapılandırılmış tutanağa çevir. Format: toplantı adı, tarih, katılımcılar, gündem sırasına göre konular, alınan kararlar (kim, ne, ne zaman), eylem kalemleri (sahip + son tarih), açık sorular. Profesyonel Türkçe, kurumsal tonda."*

**Adım 2:** Claude tutanağı üretir. Asistan geçmiş notlarıyla karşılaştırır, 2-3 yerde düzeltir.

**Adım 3:** Takip e-postası isteği: *"Bu tutanaktan her eylem sahibine özel takip e-postası taslağı yaz. Her kişiye sadece kendi eylemi, son tarihi ve gerekirse destek isteme ifadesi."*

**Adım 4:** Asistan e-postaları gözden geçirir, yönetici adına gönderir.

Toplam süre: yaklaşık 35 dakika (örnek senaryo). Geleneksel süreç: 2-3 saat, çoğu zaman ertesi gün.

## İlgili Sayfalar

- [CLAUDE.md Örnekleri](/wiki/claude-md/ornekler/): Yönetici asistanı için hazır CLAUDE.md
- [Scheduled Tasks](/wiki/araclar/scheduled-tasks/): Günlük brifing otomasyonu
- [Liderlik ve Yönetim](/wiki/departmanlar/liderlik/): Yönetici tarafındaki Claude kullanımı
- [Görsel ve Görüntü](/wiki/yetenekler/vision-image/): Kartvizit / fiş / tahta notları

