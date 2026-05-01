---
title: Departmanlar — 12 İş Alanı İçin Claude Uygulamaları
description: Satış, pazarlama, finans, operasyon, İK, hukuk, IT, müşteri hizmetleri, idari işler, liderlik, satınalma ve ihracat için gerçek iş akışları.
tags:
  - departmanlar
  - giris
  - rol-bazli
---

Claude her departmanda farklı çalışır. **Aynı araç, farklı rollerde farklı değer üretir** — çünkü iş akışları farklı, çıktılar farklı, hukuki hassasiyetler farklı.

Bu bölüm Zamana eğitim programlarının **kalbi**dir: 12 iş alanı için özel olarak hazırlanmış, gerçek iş akışlarına dayanan Claude kullanım senaryoları.

## 12 Departman

<div class="wiki-grid">

-   <span class="wiki-icon wiki-icon--lg" data-icon="handshake" aria-hidden="true"></span> **Satış ve İş Geliştirme**

    ---

    Teklif, müşteri iletişimi, pipeline analizi, tender yanıtları, anlaşma teşhisi.

    [→ Satış](satis/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="bullhorn-outline" aria-hidden="true"></span> **Pazarlama ve İletişim**

    ---

    İçerik üretimi, kampanya planlama, kriz iletişimi, influencer brief'leri.

    [→ Pazarlama](pazarlama/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="calculator-variant-outline" aria-hidden="true"></span> **Finans ve Muhasebe**

    ---

    Rapor anlatısı, bütçe varyansı, KOSGEB/TÜBİTAK başvuruları, denetim dosyası.

    [→ Finans](finans/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="factory" aria-hidden="true"></span> **Operasyon ve Lojistik**

    ---

    SOP dokümantasyonu, tedarikçi yönetimi, incident raporu, NCR.

    [→ Operasyon](operasyon/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="account-group-outline" aria-hidden="true"></span> **İnsan Kaynakları**

    ---

    İş ilanı, performans değerlendirme, politika yazımı, onboarding.

    [→ İnsan Kaynakları](insan-kaynaklari/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="scale-balance" aria-hidden="true"></span> **Hukuk ve Uyum**

    ---

    Sözleşme taslağı, madde çıkarımı, KVKK veri sahibi talepleri, iç memolar.

    [→ Hukuk](hukuk/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="laptop" aria-hidden="true"></span> **Bilgi Teknolojileri**

    ---

    Teknik dokümantasyon, incident rapor, PowerShell script'leri, KVKK teknik uyum.

    [→ Bilgi Teknolojileri](bilgi-teknolojileri/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="headset" aria-hidden="true"></span> **Müşteri Hizmetleri**

    ---

    Şikayet yanıtları, sosyal medya krizi, VIP iletişimi, FAQ.

    [→ Müşteri Hizmetleri](musteri-hizmetleri/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="briefcase-outline" aria-hidden="true"></span> **İdari İşler**

    ---

    Yazışma, toplantı tutanağı, yönetici brifingi, yönetim kurulu paketi.

    [→ İdari İşler](idari-isler/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="crown-outline" aria-hidden="true"></span> **Liderlik ve Yönetim**

    ---

    Stratejik düşünme ortağı, bilgi sentezi, yönetim kurulu iletişimi, M&A.

    [→ Liderlik](liderlik/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="cart-outline" aria-hidden="true"></span> **Satınalma**

    ---

    RFP, tedarikçi değerlendirme, pazarlık hazırlığı, TCO analizi.

    [→ Satınalma](satinalma/)

-   <span class="wiki-icon wiki-icon--lg" data-icon="earth" aria-hidden="true"></span> **İhracat ve Uluslararası Ticaret**

    ---

    LOI, FCO, SPA, CIS, pazar istihbaratı, LC uyuşmazlıkları — Zamana'nın net farklılaştırıcısı.

    [→ İhracat](ihracat/)

</div>

## Her Departman Sayfasının İçeriği

Her departman sayfasında tutarlı bir yapı bulacaksınız:

- **Claude'un çözdüğü temel sıkıntılar** — o rolün günlük acıları
- **Üç bölümlük uygulama rehberi** — iletişim, analiz, dokümantasyon
- **Prompt Kütüphanesi konuları** — o rol için inşa edilecek promptlar listesi
- **Kullanılacak Skills ve Connector'lar** — hangi araçlar öncelikli
- **İş akışı yeniden tasarımı adayları** — otomasyona uygun süreçler
- **Gerçek örnek** — tipik bir iş akışının anlık uygulaması
- **İlgili sayfalar** — wiki içinde mantıklı bağlantılar

## Ana Fikir

Bu bölümün özeti tek cümleye indirgenirse:

> **Aynı Claude, farklı roller için farklı iş akışları kurar. Zamana eğitim programlarının 2. oturumu her çalışanın kendi departman uygulamasını canlı olarak kurmasıdır.**

Zamana bu 12 departmanı tesadüfen seçmedi. Her biri Türkiye'deki orta ölçekli şirketlerin fonksiyonel yapısına karşılık gelir. Sizin şirketinizde bazıları birleştirilmiş olabilir (örneğin satınalma + operasyon tek kişide) ya da bazıları yoktur (örneğin şirket içi hukuk yerine dış danışman). Eğitim **çalışanın rolüne göre** değil, **yaptığı işe göre** uyarlanır.

## Nasıl Kullanın?

**Kendi rolünüze en yakın sayfa(lar)dan başlayın.** Birden fazla departmanda çalışıyorsanız, en çok zaman harcadığınız alana öncelik verin.

Her sayfa ~1500-2500 kelime. 15-25 dakikada bir sayfa okunur. Tamamı için 3-6 saat — ama **kendi rolünüzle sınırlarsanız** 30 dakika yeter.

## Zamana'nın 2. Oturum Yaklaşımı

Her müşteri çalışanının rolüne göre:

1. **Departman sayfasını birlikte açarız** — içeriği canlı gezeriz
2. **3-5 prompt kütüphanesi girdisi** gerçek zamanlı inşa edilir
3. **İlk iş akışı** canlı kurulur — o gün çalışan ilk gerçek çıktısını alır
4. **Bir scheduled task veya connector** o rol için devreye girer

Oturum sonunda çalışan o departmanın sayfasını referans alacak, **ama kendi örnekleriyle zenginleştirilmiş kişisel bir sürüm** elinde olacak.

## Nereye Gitmeli?

Departmanınızı tanıdıysanız:

- [**CLAUDE.md Örnekleri**](../claude-md/ornekler/) — Rolünüze uygun hazır CLAUDE.md
- [**Prompting**](../prompting/) — Kaliteli prompt yazma
- [**Yetenekler**](../yetenekler/) — Skills, Artifacts, Computer Use
- [**MCP Bağlantı Listesi**](../mcp/baglanti-listesi/) — Rolünüze göre connector'lar

