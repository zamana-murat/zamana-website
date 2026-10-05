---
title: "Artifacts: Interaktif ve Canlı Çıktılar"
description: "Artifacts, Claude'un ürettiği interaktif HTML sayfaları, kontrol panelleri ve canlı görselleştirmelerdir. Tek seferlik rapor yerine kendini yenileyen uygulama."
tags:
  - yetenekler
  - artifacts
  - dashboard
  - cowork
lastUpdated: "2026-10-05"
---

**Artifacts, Claude'un ürettiği kendi kendine yeten, interaktif çıktılardır.** Claude Chat'te sohbet içi önizleme, Cowork'te yan panelde kalıcı sayfa olarak yaşarlar.

Tek bir kere üretilen bir cevabı **dönüp bakabileceğiniz, etkileşim kurabileceğiniz, paylaşabileceğiniz** bir şeye dönüştürürler.

> **Not:** Sohbet ve Cowork 16 Eylül 2026'dan beri tek Claude içinde birleşiyor. Aşağıdaki "Chat" ve "Cowork" ayrımını iki ayrı uygulama olarak değil, **iki çalışma biçimi** olarak okuyun: kısa sohbet içi önizleme ve uzun soluklu, kalıcı çalışma. Yayılım durumu için [Cowork Modu](/wiki/araclar/cowork-modu/) sayfasına bakın.

## İki Tip Artifact

### 1. Claude Chat Artifacts (satır içi)

Sohbetin içinde üretilir ve sohbet penceresinde render edilir. Kopyalayabilir, indirebilir veya iterasyon yapabilirsiniz. Oturumlar arası kalıcı değildir, konuşmada yaşar.

Claude Chat'te üretilebilen artifact tipleri:

- **HTML sayfalar** (stil ve JavaScript dahil)
- **React bileşenleri** (etkileşimli UI)
- **Veri görselleştirmeleri** (Recharts, Chart.js, D3)
- **SVG grafikler ve diyagramlar**
- **Mermaid akış şemaları**
- **Markdown belgeleri**
- **Matematiksel ifadeler** (LaTeX)
- **İnteraktif hesaplayıcılar ve araçlar**

### 2. Cowork Live Artifacts (kalıcı)

Cowork'ün yan panelinde saklanır ve **oturumlar arası kalıcıdır**. Asıl güçleri burada: **Live Artifacts** (20 Nisan 2026'da tanıtıldı), kurduğunuz connector'lara bağlanır ve **her açıldığında güncel veriyle tazelenir**.

Live Artifact, statik bir rapor değildir. **Veri kaynağını her açılışta yeniden sorgulayan** bir mini uygulamadır.

> **Bir kere inşa edersiniz. Her zaman günceldir.**

**Güncel durum:** 19 Ağustos 2026'dan beri Cowork'teki live artifact biçimi "legacy" sayılıyor. Mevcut olanlar çalışmaya ve kuruluş içinde paylaşılmaya devam eder, ama yerinde düzenlenemez. Bu tarihten sonra oluşturduğunuz artifact'ler standart artifact'tir ve tam düzenlenebilir. Yeni artifact'lerde veri tazeleme davranışı için [Cowork'te artifact kullanımı](https://support.claude.com/en/articles/14729249-use-artifacts-in-claude-cowork) yardım sayfasına bakın. Bu sayfada anlatılan "her açılışta tazelenme" live artifact biçimi içindir.

## Live Artifacts Neler Yapabilir?

- **Bağlı servislerden gerçek zamanlı veri çeker**: Slack, CRM, Google Drive, proje araçları
- Her açılışta güncel metrikleri, görev listelerini, pipeline durumunu, ekip güncellemelerini gösterir
- Etkileşime izin verir: filtreleme, sıralama, kayıt detayına inme, görünüm değiştirme
- **Haftalık manuel rapor üretimini** daima hazır bir kontrol paneli ile değiştirir
- Role özel mini-dashboard'lar olarak hizmet eder (Satış pipeline, Operasyon KPI, İK headcount)

## Hangi Durumda Artifact, Hangi Durumda Belge?

Kararı kolaylaştıran bir tablo:

| Durum | Artifact | Belge |
|---|---|---|
| Veri haftalık veya günlük değişiyor | ✅ Live Artifact | |
| Çalışan tekrar tekrar açacak | ✅ Artifact | |
| E-posta veya dış paylaşım gerekiyor | | ✅ Belge |
| Tek seferlik teslimat | | ✅ Belge |
| İnteraktif filtreleme gerekiyor | ✅ Artifact | |
| Resmi rapor, letterhead formatında | | ✅ Belge |

## Pratik Örnekler

### Haftalık Satış Pipeline Artifact

Satış yöneticisi her Pazartesi pipeline raporu yazıyor. Bunun yerine bir Live Artifact inşa edilir:

- CRM connector'ından tüm açık fırsatları çeker
- Her fırsatı aşamasına göre sıralar
- Gecikmiş olanları kırmızıyla vurgular
- "Bu hafta kapanması muhtemel" listesini ayrı bölümde gösterir

Her Pazartesi açılır, tazelenir, toplantıya girilir. Rapor yazmak yok.

### Operasyon KPI Paneli

Operasyon yöneticisi günlük metriklerle çalışıyor. Bir Live Artifact:

- Google Sheets'teki üretim verilerinden KPI'ları okur
- Hedef karşılaştırmasını renk kodlarıyla gösterir
- "Bu hafta dikkat gerekenler" bölümünü kural tabanlı üretir

Her sabah açılır, yöneticinin gün planı oradan çıkar.

### Müşteri Hizmetleri Şikayet Tablosu

MH ekibi Slack ve CRM'de dağınık şikayet kayıtlarını tek panelde toplar:

- Slack'teki "#musteri-sikayet" kanalından son 7 günü çeker
- CRM'deki açık ticket'larla eşleştirir
- Tekrar eden şikayetleri tema bazında gruplar

Ekip lideri haftalık toplantıya tek sayfayla gelir.

## Pratik Yaklaşım

Çoğu çalışan artifact istemez, **rapor ister**. Çünkü iş dünyasında alışkanlık "rapor"dur, "dashboard" değil.

Bir çalışan "bunu haftaya yine görmek isteyeceğim" dediğinde artifact devreye girer. Artifact kendini tazeler, belge ise anında eskir.

Kendinize sorabileceğiniz tek soru:

> **"Bu veriye bir hafta sonra yine bakmak isteyecek miyim?"**

Cevap "evet"se artifact, "hayır"sa belge. Basit ama hayatı değiştiren bir soru.

## İlgili Sayfalar

- [Skills](/wiki/yetenekler/skills/): Artifact üreten skill'ler
- [Cowork Modu](/wiki/araclar/cowork-modu/): Live Artifact'lerin kalıcı yaşadığı yer
- [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): Connector'lar Live Artifact'leri besler
- [Dispatch](/wiki/araclar/dispatch/): Artifact'leri telefondan tetiklemek (yeni kullanıcılara kapalı sınırlı beta)
- [Claude Design](/wiki/yetenekler/claude-design/): Görsel tasarım, sunum ve belge odaklı kardeş yüzey

