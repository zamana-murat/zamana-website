---
title: Agents ve Subagents — Claude Kendi Kendini Çoklar
description: "Agent, Claude'un çok adımlı otonom çalışma biçimidir. Subagent'lar paralel alt-instance'lardır. Karmaşık görevlerin arkasındaki yapı."
tags:
  - yetenekler
  - agents
  - subagents
  - otonom
---

**Bir agent, Claude'un birden fazla adım boyunca otonom çalıştığı ve araçlar kullanarak karmaşık görevleri tamamladığı modudur.** Tek bir soruya cevap vermek yerine bir dizi eylemi **planlar, uygular ve gözden geçirir**.

Subagent'lar ise Claude'un **paralel çalışan alt-instance**'larıdır — karmaşık bir işi alt görevlere bölerek aynı anda birden fazla Claude üzerinde ilerletir.

Bu sayfa bir iş profesyolenelinin bu yapıdan ne kadarını bilmesi gerektiğini anlatır. Kısa cevap: derinliğini değil, **nasıl çalıştığını**. Çünkü karmaşık bir görev verdiğinizde bu yapı zaten arka planda devreye giriyor.

## Agent Nedir?

Basit bir benzetme: **Claude'un bir iş arkadaşı gibi çalışması** — size tek cevap vermek yerine, bir planla yaklaşıp, adım adım uygulayıp, sonucu teslim ediyor.

Örnek: *"XYZ Gıda için pre-sales brief hazırla."*

Bu basit cümle karmaşık bir görevdir. Agent yaklaşımıyla Claude:

1. **Planlar:** "Önce şirket hakkında web araştırması yapayım, sonra LinkedIn'den karar vericiyi bulayım, sonra CRM'e bakayım, sonra brief yazayım."
2. **Uygular:** Web search skill'ini çağırır, CRM connector'ını kullanır, topladığı bilgiyi bir belgeye dönüştürür
3. **Teslim eder:** Yapılandırılmış brief + kaynak listesi ile

Siz *"yap"* dediniz. Claude planı kendi yaptı, adımları kendi yürüttü, kontrolü siz yaptınız.

## Subagents — Paralel Alt-Instance'lar

Büyük bir görev için Claude kendi **alt instance**'larını yaratabilir. Her biri ayrı bir alt görev üstlenir, aynı anda çalışır, sonuçları tek çıktıda birleşir.

**Örnek senaryo:**

Çalışan sorar: *"Bu 5 potansiyel müşteri için toplu brief yap."*

- **Subagent 1:** Müşteri A'nın web sitesini ve son haberlerini araştırır
- **Subagent 2:** Müşteri B için aynı
- **Subagent 3:** Mevcut dosyalarda benzer şirketlerle yapılan geçmiş işleri çıkarır
- **Subagent 4:** CRM'de bu müşterilerin geçmiş temas kayıtlarını tarar
- **Subagent 5:** Brief'i yapılandırır

Beş iş paralel ilerler. Hepsi bittiğinde ana Claude sonuçları birleştirip tek brief üretir.

Normalde sıralı çalışılsa 20 dakika süren iş, 5 dakikada biter.

## Cowork'teki Agent Tipleri

Cowork içinde birden fazla uzmanlaşmış agent tipi vardır. Çalışan doğrudan kullanmaz ama Claude uygun gördüğünde devreye alır:

- **`Explore`** — hızlı dosya / klasör inceleme agent'ı
- **`general-purpose`** — açık uçlu araştırma ve çok adımlı görevler
- **`Plan`** — mimari ve uygulama planlama
- **`claude-code-guide`** — Claude Code, API, Agent SDK hakkında sorular

**Önemli not (Zamana kapsamında):** `claude-code-guide` agent'ı geliştirici konularıyla ilgilidir ve **Zamana eğitim programlarının kapsamı dışındadır** ([Brainstorm'daki scope kilidine](../temeller/claude-nedir/) göre).

## Çalışan Ne Bilmeli?

Agent mimarisini **derinlemesine** bilmeye gerek yok. Bir iş profesyonelinin bilmesi gerekenler üç madde:

### 1. Karmaşık bir görev verdiğinde Claude birden fazla adım atar

Claude "düşünüyorum" der, sonra "dosyaları okuyorum" der, sonra "web araştırıyorum" der. Her aşamada kullandığı aracı gösterir. Bu **agent davranışıdır** — korkmayın.

### 2. Agent'ın işini bitirmesine izin verin

İlk çıktı geldiğinde "ah bu iş bitti" diye kesmeyin. Claude size "işlemi tamamladım" dediğinde bitmiştir. Araya girmek işi bozar.

### 3. Son çıktıyı dikkatlice gözden geçirin

Subagent paralel çalıştığı için her alt sonuç kaliteli olmayabilir. Ana Claude birleştirdiğinde bazı tutarsızlıklar kalabilir. **Son çıktı gözden geçirilmeli** — bu [Discernment](../prompting/4d-cercevesi/) boyutunun pratik karşılığıdır.

## Ne Zaman Agent Gücünü Talep Edersiniz?

Karmaşık görevler için açıkça söyleyebilirsiniz:

> *"Bu problem üzerinde dikkatlice düşün. Farklı alt görevleri paralel yürüt."*
> *"Önce problemi bileşenlerine ayır, sonra her birini ayrı işle."*
> *"Gerekirse paralel subagent'lar kullan — 5 müşteri için aynı anda yürüt."*

Bu cümleler Claude'a "agent moduna geç" sinyali verir. Araçları daha agresif kullanır, işi daha yapılandırılmış yürütür.

## Bir Agent Kullanım Senaryosu — Satış Yöneticisi

Ahmet, satış yöneticisi. Her hafta pazartesi sabahı şu görevi veriyor:

> *"Bu hafta kontak kurulacak 10 prospect listesini hazırla. Her biri için: şirket özeti, son haber, karar verici (LinkedIn'den), bize benzer firmalarla geçmiş çalışma, tahmini bütçe kapasitesi."*

Bu 10 şirket × 5 bileşen = 50 alt görev. Agent olmadan elle bu iş 4-5 saat sürer.

Subagent'lar paralel çalışırsa: 10 dakika içinde tablo hazırdır.

## Agent Yaklaşımının Sınırları

- **Yavaşlık:** paralel subagent bile olsa agent yaklaşımı tek bir cevaptan yavaştır — araçlar, doğrulama turları vakit alır
- **Hata yayılımı:** bir subagent hatalı çıktı üretirse ana birleştirme de etkilenir
- **Kaynak kullanımı:** Pro planda agent yoğun kullanım kotayı hızlı tüketir — [Max plan](../temeller/planlar/) bu tip iş için daha uygundur
- **Karmaşık doğrulama:** 20 alt görevin hepsini tek tek kontrol etmek zor — önemli çıktılarda beceri gerekir

## Zamana'nın Pozisyonu

Zamana eğitimi agent mimarisini **öğretmez** — iş profesyoneli için gereksiz teknik detay. Ama çalışan **agent davranışını tanımaya** başlar:

- "Claude birden fazla adım atıyorsa, düşünüyor demektir — kesintiye uğratmayın"
- "Son çıktı gözden geçirilmelidir — subagent'lar paralel çalıştığı için"
- "Karmaşık görevleri açıkça tarif edin — Claude doğru aletleri seçsin"

Bu üç refleks, iş profesyoneli için agent konusunda bilinmesi gereken her şeydir.

## İlgili Sayfalar

- [Skills](skills/) — Agent'ların içinde çağırdığı uzmanlık paketleri
- [Cowork Modu](../araclar/cowork-modu/) — Agent'ların yaşadığı ortam
- [4D Çerçevesi](../prompting/4d-cercevesi/) — Discernment boyutu: agent çıktılarının değerlendirilmesi
- [Context ve Compaction](context-compaction/) — Uzun agent oturumlarında bağlam yönetimi

