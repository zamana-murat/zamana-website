---
title: Artifacts — Interaktif ve Canlı Çıktılar
description: "Artifacts, Claude'un ürettiği interaktif HTML sayfaları, kontrol panelleri ve canlı görselleştirmelerdir. Tek seferlik rapor yerine kendini yenileyen uygulama."
tags:
  - yetenekler
  - artifacts
  - dashboard
  - cowork
---

**Artifacts, Claude'un ürettiği kendi kendine yeten, interaktif çıktılardır.** Claude Chat'te sohbet içi önizleme, Cowork'te yan panelde kalıcı sayfa olarak yaşarlar.

Tek bir kere üretilen bir cevabı **dönüp bakabileceğiniz, etkileşim kurabileceğiniz, paylaşabileceğiniz** bir şeye dönüştürürler.

## İki Tip Artifact

### 1. Claude Chat Artifacts (satır içi)

Sohbetin içinde üretilir ve sohbet penceresinde render edilir. Kopyalayabilir, indirebilir veya iterasyon yapabilirsiniz. Oturumlar arası kalıcı değildir — konuşmada yaşar.

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

Cowork'ün yan panelinde saklanır ve **oturumlar arası kalıcıdır**. Asıl güçleri burada: **Live Artifacts** (Nisan 2026'da tanıtıldı) — kullanıcının kurduğu connector'lara bağlanır ve **her açıldığında güncel veriyle tazelenir**.

Live Artifact, statik bir rapor değildir — **veri kaynağını her açılışta yeniden sorgulayan** bir mini uygulamadır.

> **Bir kere inşa edersiniz. Her zaman günceldir.**

## Live Artifacts Neler Yapabilir?

- **Bağlı servislerden gerçek zamanlı veri çeker** — Slack, CRM, Google Drive, proje araçları
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

Her Pazartesi açılır — tazelenir — toplantıya girilir. Rapor yazmak yok.

### Operasyon KPI Paneli

Operasyon yöneticisi günlük metriklerle çalışıyor. Bir Live Artifact:

- Google Sheets'teki üretim verilerinden KPI'ları okur
- Hedef karşılaştırmasını renk kodlarıyla gösterir
- "Bu hafta dikkat gerekenler" bölümünü kural tabanlı üretir

Her sabah açılır — yöneticinin gün planı oradan çıkar.

### Müşteri Hizmetleri Şikayet Tablosu

MH ekibi Slack ve CRM'de dağınık şikayet kayıtlarını tek panelde toplar:

- Slack'teki "#musteri-sikayet" kanalından son 7 günü çeker
- CRM'deki açık ticket'larla eşleştirir
- Tekrar eden şikayetleri tema bazında gruplar

Ekip lideri haftalık toplantıya tek sayfayla gelir.

## Hangi Çalışan Hangisini Tercih Etmeli?

Basit bir kurallar dizisi:

- **Tek sefer bakacak:** Belge (Word, PDF)
- **Her hafta bakacak:** Artifact
- **Birisine göndereceksin:** Belge
- **Sadece sen kullanacaksın ve veriyi güncel isteyeceksin:** Live Artifact
- **Birden fazla kişi aynı şeye bakacak ve interaktif olmalı:** Live Artifact

## Zamana'nın Yaklaşımı

Çoğu çalışan artifact istemez — **rapor ister**. Çünkü iş dünyasında "rapor" alışkanlığı vardır, "dashboard" değil.

Claude bir veri üretip çalışan "bunu haftaya yine görmek isteyeceğim" dediğinde, **Live Artifact önerisi devreye girer**. Artifact otomatik tazelenir; belge anında eskir.

Zamana'nın koçluk sorusu:

> **"Bu veriye bir hafta sonra yine bakmak isteyecek misin?"**

Cevap "evet"se — artifact. Cevap "hayır"sa — belge. Basit ama hayatı değiştiren bir soru.

## İlgili Sayfalar

- [Skills](skills/) — Artifact üreten skill'ler
- [Cowork Modu](../araclar/cowork-modu/) — Live Artifact'lerin kalıcı yaşadığı yer
- [MCP Bağlantı Listesi](../mcp/baglanti-listesi/) — Connector'lar Live Artifact'leri besler
- [Dispatch](../araclar/dispatch/) — Artifact'leri telefondan tetiklemek

