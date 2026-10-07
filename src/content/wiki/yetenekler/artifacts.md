---
title: "Artifacts: Interaktif ve Canlı Çıktılar"
seoTitle: "Claude Artifacts Nasıl Kullanılır? Panel ve Rapor"
description: "Artifacts, Claude'un ürettiği interaktif sayfa ve panellerdir. Yerinde düzenlenir, paylaşılır, zamanlanmış görevle yenilenir."
tags:
  - yetenekler
  - artifacts
  - dashboard
  - cowork
lastUpdated: "2026-10-06"
---

**Artifacts, Claude'un ürettiği kendi kendine yeten, interaktif çıktılardır.** Sohbetin yanında bir panelde açılır; metin cevabı yerine **dönüp bakabileceğiniz, düzenleyebileceğiniz, paylaşabileceğiniz** bir şeye dönüşür.

Sohbet ve Cowork 16 Eylül 2026'dan beri tek Claude içinde birleşiyor (Pro ve Max'te kademeli, diğer planlarda sonra). Bu yüzden artifact'i artık "sohbet artifact'i" ve "Cowork artifact'i" diye ikiye bölmek gerekmez: **standart artifact** her yerde aynı davranır. Yayılım durumu için [Cowork Modu](/wiki/araclar/cowork-modu/) sayfasına bakın.

> Claude'un ürün tanıtım sayfası için: [Claude Artifacts](/claude/artifacts/). Bu sayfa kurulum, karar ve sınırları anlatır.

## Standart Artifact Neler Yapar?

- **Düzenlenir:** taslağı yerinde düzenler, Claude'a "bu sütunu çıkar, şu grafiği ekle" diyerek iterasyon yaparsınız
- **Paylaşılır:** çıktının bağlantısını oluşturabilirsiniz; hesap ayarlarınıza ve kuruluşunuzun kurallarına göre paylaşım kapsamı değişir
- **İndirilir:** belge PDF, sunum PowerPoint olarak dışa aktarılır
- **Ücretli planlarda ve Free'de vardır:** artifacts her planda açıktır; Team ve Enterprise'ta yönetici ayarını kontrol eder

Üretilebilen tipler:

- **HTML sayfalar** (stil ve JavaScript dahil)
- **React bileşenleri** (etkileşimli arayüz)
- **Veri görselleştirmeleri** (grafikler, tablolar)
- **SVG grafikler ve diyagramlar**
- **Mermaid akış şemaları**
- **Markdown belgeleri**
- **İnteraktif hesaplayıcılar ve araçlar**

## Eski Canlı Artifact (Live Artifact) Ne Oldu?

20 Nisan 2026'da Cowork'te **live artifact** tanıtıldı: bağlı servislerden veri çeken, her açılışta tazelenen sayfalar. **19 Ağustos 2026'dan beri bu biçim "legacy" sayılıyor.** Eskiden oluşturduklarınız çalışmaya ve kuruluş içinde paylaşılmaya devam eder, ama yerinde düzenlenemez. Bu tarihten sonra oluşturduklarınız standart artifact'tir ve tam düzenlenebilir.

Pratik sonuç: "her açılışta kendiliğinden tazelenir" vaadine güvenerek yeni bir panel kurmayın. Yeni artifact'lerin veri davranışı için [Cowork'te artifact kullanımı](https://support.claude.com/en/articles/14729249-use-artifacts-in-claude-cowork) yardım sayfasına bakın.

**Güncel yöntem:** panelin her hafta taze veriyle yeniden üretilmesini istiyorsanız [zamanlanmış görev](/wiki/araclar/scheduled-tasks/) kurun. Görev her Pazartesi connector'lardan veriyi çeker ve artifact'i yeniden üretir; siz açıp bakarsınız.

## Hangi Durumda Artifact, Hangi Durumda Belge?

| Durum | Artifact | Belge |
|---|---|---|
| Veri haftalık veya günlük değişiyor | ✅ (zamanlanmış görevle yenilenir) | |
| Çalışan tekrar tekrar açacak | ✅ | |
| E-posta veya dış paylaşım gerekiyor | | ✅ Belge |
| Tek seferlik teslimat | | ✅ Belge |
| İnteraktif filtreleme gerekiyor | ✅ | |
| Resmi rapor, letterhead formatında | | ✅ Belge |

## Pratik Örnekler

Aşağıdaki şirketler kurgusaldır.

### Haftalık Satış Pipeline Paneli

Anadolu Yapı Market'in satış yöneticisi her Pazartesi pipeline raporu yazıyor. Bunun yerine bir artifact kurulur ve zamanlanmış görev her Pazartesi sabahı yeniler:

- CRM connector'ından tüm açık fırsatları çeker
- Her fırsatı aşamasına göre sıralar
- Gecikmiş olanları kırmızıyla vurgular
- "Bu hafta kapanması muhtemel" listesini ayrı bölümde gösterir

Pazartesi açılır, toplantıya girilir. Rapor yazmak yok.

**Süre:** elle 1-2 saat, Claude ile 15-20 dk (kontrol dahil). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

### Operasyon KPI Paneli

Karadeniz Gıda'nın operasyon yöneticisi günlük üretim metrikleriyle çalışıyor. Bir artifact:

- Google Sheets'teki üretim verilerinden KPI'ları okur
- Hedef karşılaştırmasını renk kodlarıyla gösterir
- "Bu hafta dikkat gerekenler" bölümünü kural tabanlı üretir

Her sabah açılır, gün planı oradan çıkar.

### Müşteri Hizmetleri Şikayet Tablosu

Ege Tekstil'in müşteri hizmetleri ekibi Slack ve CRM'de dağınık şikayet kayıtlarını tek panelde toplar:

- Slack'teki "#musteri-sikayet" kanalından son 7 günü çeker
- CRM'deki açık ticket'larla eşleştirir
- Tekrar eden şikayetleri tema bazında gruplar

Ekip lideri haftalık toplantıya tek sayfayla gelir.

## Pratik Yaklaşım

Çoğu çalışan artifact istemez, **rapor ister**. Çünkü iş dünyasında alışkanlık "rapor"dur, "dashboard" değil.

Bir çalışan "bunu haftaya yine görmek isteyeceğim" dediğinde artifact devreye girer. Belge anında eskir; artifact ise yeniden üretilerek güncel tutulabilir.

Kendinize sorabileceğiniz tek soru:

> **"Bu veriye bir hafta sonra yine bakmak isteyecek miyim?"**

Cevap "evet"se artifact, "hayır"sa belge. Basit ama hayatı değiştiren bir soru.

## İlgili Sayfalar

- [Claude Artifacts (ürün tanıtımı)](/claude/artifacts/): Ürünün Türkçe tanıtımı
- [Skills](/wiki/yetenekler/skills/): Artifact üreten skill'ler
- [Scheduled Tasks](/wiki/araclar/scheduled-tasks/): Panelin düzenli yenilenmesi
- [Cowork Modu](/wiki/araclar/cowork-modu/): Artifact'lerin ve zamanlanmış görevlerin çalıştığı ortam
- [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): Connector'lar paneli besler
- [Dispatch](/wiki/araclar/claude-mobil/#telefondan-görev-mobil-cowork-ve-dispatch): Telefondan görev atmak (yeni kullanıcılara kapalı sınırlı beta)
- [Claude Design](/wiki/yetenekler/claude-design/): Görsel tasarım, sunum ve belge odaklı kardeş yüzey
