---
title: "Agents ve Subagents: Claude Kendi Kendini Çoklar"
seoTitle: "Claude Ajanları ve Subagents: İş Kullanıcısı İçin"
description: "Agent, Claude'un çok adımlı otonom çalışma biçimidir; subagent'lar işi paralel yürütür. İş kullanıcısının bilmesi gereken kısım."
tags:
  - yetenekler
  - agents
  - subagents
  - otonom
lastUpdated: "2026-10-06"
---

**Bir agent, Claude'un birden fazla adım boyunca otonom çalıştığı ve araçlar kullanarak karmaşık görevleri tamamladığı modudur.** Tek bir soruya cevap vermek yerine bir dizi eylemi **planlar, uygular ve gözden geçirir**.

Subagent'lar ise Claude'un **aynı anda çalışan yardımcı kopyalarıdır**. Karmaşık bir işi alt görevlere bölüp birden fazla Claude üzerinde birlikte ilerletirler.

Bu sayfa bir iş profesyonelinin bu yapıdan ne kadarını bilmesi gerektiğini anlatır. Kısa cevap: teknik derinliği değil, **nasıl çalıştığını**. Karmaşık bir görev verdiğinizde bu yapı zaten arka planda devreye girer.

## Agent Nedir?

Basit bir benzetme: **Claude bir iş arkadaşı gibi çalışır.** Size tek cevap vermek yerine bir plan kurar, adım adım uygular ve sonucu teslim eder.

Örnek: *"XYZ Gıda için pre-sales brief hazırla."*

Bu basit cümle karmaşık bir görevdir. Agent yaklaşımıyla Claude:

1. **Planlar:** "Önce şirket hakkında web araştırması yapayım, sonra LinkedIn'den karar vericiyi bulayım, sonra CRM'e bakayım, sonra brief yazayım."
2. **Uygular:** Web aramasını kullanır, CRM connector'ını çağırır, topladığı bilgiyi bir belgeye dönüştürür
3. **Teslim eder:** Yapılandırılmış brief + kaynak listesi ile

Siz *"yap"* dediniz. Claude planı kendi yaptı, adımları kendi yürüttü, kontrolü siz yaptınız.

## Subagents: Aynı Anda Çalışan Yardımcılar

Büyük bir görev için Claude kendi yardımcı kopyalarını (subagent) başlatabilir. Her biri ayrı bir alt görev üstlenir, aynı anda çalışır, sonuçlar tek çıktıda birleşir.

**Örnek senaryo:**

Çalışan sorar: *"Bu 5 potansiyel müşteri için toplu brief yap."*

- **Subagent 1:** Müşteri A'nın web sitesini ve son haberlerini araştırır
- **Subagent 2:** Müşteri B için aynı
- **Subagent 3:** Mevcut dosyalarda benzer şirketlerle yapılan geçmiş işleri çıkarır
- **Subagent 4:** CRM'de bu müşterilerin geçmiş temas kayıtlarını tarar
- **Subagent 5:** Brief'i yapılandırır

Beş iş paralel ilerler. Hepsi bittiğinde ana Claude sonuçları birleştirip tek brief üretir.

Paralel çalışma toplam bekleme süresini kısaltır. Çıktıyı gözden geçirme süresi ise aynı kalır.

## Çalışan Ne Bilmeli?

Agent mimarisini **derinlemesine** bilmeye gerek yok. Bir iş profesyonelinin bilmesi gerekenler üç madde:

### 1. Karmaşık bir görev verdiğinde Claude birden fazla adım atar

Claude "düşünüyorum" der, sonra "dosyaları okuyorum" der, sonra "web araştırıyorum" der. Her aşamada kullandığı aracı gösterir. Bu **agent davranışıdır**, korkmayın.

### 2. Agent'ın işini bitirmesine izin verin

İlk çıktı geldiğinde "ah bu iş bitti" diye kesmeyin. Claude size "işlemi tamamladım" dediğinde bitmiştir. Araya girmek işi bozar.

### 3. Son çıktıyı dikkatlice gözden geçirin

Subagent paralel çalıştığı için her alt sonuç kaliteli olmayabilir. Ana Claude birleştirdiğinde bazı tutarsızlıklar kalabilir. **Son çıktı gözden geçirilmeli**, bu [Discernment](/wiki/prompting/4d-cercevesi/) boyutunun pratik karşılığıdır.

## Ne Zaman Agent Gücünü Talep Edersiniz?

Karmaşık görevler için açıkça söyleyebilirsiniz:

> *"Bu problem üzerinde dikkatlice düşün. Farklı alt görevleri paralel yürüt."*
> *"Önce problemi bileşenlerine ayır, sonra her birini ayrı işle."*
> *"Gerekirse paralel subagent'lar kullan: 5 müşteri için aynı anda yürüt."*

Bu cümleler Claude'a "agent moduna geç" sinyali verir. Araçları daha agresif kullanır, işi daha yapılandırılmış yürütür.

## Bir Agent Kullanım Senaryosu: Satış Yöneticisi

Ahmet, satış yöneticisi. Her hafta pazartesi sabahı şu görevi veriyor:

> *"Bu hafta kontak kurulacak 10 prospect listesini hazırla. Her biri için: şirket özeti, son haber, karar verici (LinkedIn'den), bize benzer firmalarla geçmiş çalışma, tahmini bütçe kapasitesi."*

Bu 10 şirket × 5 bileşen = 50 alt görev.

**Süre:** elle 4-5 saat, Claude ile 30-45 dakika + 30 dakika kontrol. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

## Agent Yaklaşımının Sınırları

- **Yavaşlık:** paralel subagent bile olsa agent yaklaşımı tek bir cevaptan yavaştır; araç çağrıları ve doğrulama turları vakit alır
- **Hata yayılımı:** bir subagent hatalı çıktı üretirse ana birleştirme de etkilenir
- **Kaynak kullanımı:** agent yoğun kullanım kotayı hızlı tüketir (5 saatlik pencere ve haftalık limit, bkz. [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/)); Pro'da sık dolarsa [Max plan](/wiki/temeller/planlar/) bir seçenektir, ama zorunlu değil
- **Karmaşık doğrulama:** 20 alt görevin hepsini tek tek kontrol etmek zordur, önemli çıktılarda dikkat ister

## Geliştiriciler için

> **Bu kutu yalnız teknik ekipleri ilgilendirir; iş kullanıcısı atlayabilir.**
>
> - **Subagents** Claude Code'da genel kullanıma açıktır. Cowork için ayrı bir subagents belgesi doğrulanamadı, orada aynı davranışı varsaymayın.
> - **Dynamic workflows** (28 Mayıs 2026'da duyuruldu): Claude Code'da bir görevi arka planda onlarca, hatta yüzlerce agent arasında dağıtır. Çalışma başına en çok 1.000 agent, varsayılan olarak aynı anda 16. Tüm ücretli planlarda vardır (Pro'da `/config` içindeki "Dynamic workflows" satırından açılır). Çok token harcar ve abonelik limitinizden düşer.
> - **Managed Agents** (API tarafı, kurumsal otomasyon kuran BT ekipleri için): [Kurumsal: Ajanlar](/kurumsal/ajanlar/) sayfasında ve [Claude Code mod'ları](/haberler/2026-10-01-claude-code-mods/) haberinde ayrıntı var.

## Kısacası

Agent mimarisinin teknik ayrıntısı iş profesyoneli için gerekmez. Yukarıdaki üç refleks yeter: işi bitirmesine izin verin, son çıktıyı gözden geçirin ve karmaşık görevi açıkça tarif edin ki Claude doğru araçları seçsin.

## İlgili Sayfalar

- [Skills](/wiki/yetenekler/skills/): Agent'ların içinde çağırdığı uzmanlık paketleri
- [Cowork Modu](/wiki/araclar/cowork-modu/): Agent'ların yaşadığı ortam
- [4D Çerçevesi](/wiki/prompting/4d-cercevesi/): Discernment boyutu: agent çıktılarının değerlendirilmesi
- [Context ve Compaction](/wiki/yetenekler/context-compaction/): Uzun agent oturumlarında bağlam yönetimi
- [Kurumsal: Ajanlar](/kurumsal/ajanlar/): Claude'un kurumsal ajan olarak kullanımı
- [Kullanım Limitleri](/wiki/temeller/kullanim-limitleri/): Ağır agent işinin limite etkisi

