---
title: Sağlık — Claude Uygulamaları (Hassas Sektör)
description: Sağlık kuruluşları için Claude — hasta verisi politikası, idari iş yükü, hekim notu desteği, eğitim materyali. KVKK ve özel yasal rejim altında dikkatli kullanım.
tags:
  - departmanlar
  - saglik
  - kvkk
  - hassas
---

Sağlık sektörü Türkiye'de özel yasal rejime tabidir — KVKK üstünde **özel kategori veri**, mesleki gizlilik, Sağlık Bakanlığı yönetmelikleri. Claude'un sağlıkta kullanımı **mümkün ama dikkat ister.** Bu sayfa hangi alanlarda güvenle kullanılabileceğini, neyin kesinlikle yasak olduğunu ve kurumsal politika çerçevesini anlatır.

**Önemli:** Bu sayfa hukuki tavsiye değil, genel rehberlik. Sağlık kuruluşunuzun **mesleki gizlilik, KVKK, Sağlık Bakanlığı mevzuatı** kapsamında **kendi hukuk müşaviriyle** politika kurması zorunludur.

## Yasal Çerçeve — Hızlı Özet

Sağlıkta Claude kullanımını yöneten ana mevzuat:

- **KVKK md. 6** — sağlık verisi özel kategori, açık rıza veya yasal istisnalar gerek
- **Hasta Hakları Yönetmeliği** — mahremiyet
- **Tıbbi Deontoloji** — hekim mesleki gizliliği
- **Sağlık Bakanlığı Bilişim Standartları**
- **Türk Ceza Kanunu md. 134-138** — kişisel veriyi hukuka aykırı verme

[Hukuk departmanı](hukuk/) sayfası KVKK derinleşmesi içerir.

## Yapılabilenler ve Yapılamayanlar — Net Tablo

| İş | Claude'a uygun mu? | Koşul |
|---|---|---|
| Hasta dosyası tam yükleme | ❌ Asla | TCK ihlali, mesleki gizlilik ihlali |
| Anonimleştirilmiş vaka tartışması | ⚠️ Dikkatli | Tam anonimleştirme + kurumsal onay |
| Hekim notu **ön taslak** (anonim) | ✅ | Hekim son hâle getirir |
| Tıbbi literatür araştırma | ✅ | Tanı/tedavi kararı için ek doğrulama |
| Hasta için bilgilendirme metni | ✅ | Hekim onayı |
| Randevu / idari yazışma | ✅ | Hasta ismi anonimleştirilir |
| Personel İK iş ve eğitim materyali | ✅ | Standart kurumsal kullanım |
| Maliyet, faturalama, idari yönetim | ✅ | Standart |
| Tanı kararı verme | ❌ | Hekim mesleki sorumluluk |
| Tedavi planı verme | ❌ | Hekim sorumluluk |
| Hasta direkt sohbet (chatbot) | ⚠️ | Sıkı yasal değerlendirme |

**Genel kural:** Claude **klinik karar vermez**, **idari ve eğitsel destek** sağlar.

## Bölüm 1 — Hekim İş Akışı Desteği

### Hekim Notu Ön Taslak

Hekim hasta görüşmesinden çıkar. Notlarını sözle dikte eder ([Voice Mode](../araclar/voice-mode/)) veya kısa yazılı not bırakır. Claude bunu yapılandırılmış hekim notuna çevirir:

- Şikayet
- Anamnez
- Muayene bulguları
- Değerlendirme
- Plan

**Hasta ismi yerine "Hasta A" / vaka numarası**. Final hâli hekim onaylayıp HBYS'ye girer.

### Tıbbi Literatür Araştırması

Bir vaka için literatür özeti, son tedavi yaklaşımları. [Research Mode](../yetenekler/research-mode/) ile.

**Önemli:** Claude akademik ücretli tam metin makalelere erişmez; PubMed özetleri ve açık erişim makaleler üzerinden çalışır. Final klinik karar için **TÜRKDERM, UpToDate, NEJM gibi profesyonel kaynaklar** ek olarak kullanılır.

### Hasta Bilgilendirme Yazısı

Bir tanı / işlem / tedavi sonrası hastaya verilecek bilgilendirme metni. Claude tıbbi terimi sade dile çevirir, "ne demek, ne yapmalı, ne zaman uyarı" yapısında.

Hekim onayından sonra hastaya verilir.

### Aydınlatılmış Onam Formu

Cerrahi / tıbbi işlem için aydınlatılmış onam formu taslağı. Hukuk müşaviri **mutlaka** son hâli onaylamalı.

## Bölüm 2 — İdari ve Operasyonel

### Randevu Yönetimi

Randevu hatırlatma, iptal yanıtı, çoklu dilli iletişim (turistlerin sağlık hizmeti için Türkiye'ye geldiği "sağlık turizmi" senaryosu). [Turizm ve Otelcilik](turizm-otelcilik/) sayfası benzer çoklu dilli iletişim örnekleri verir.

### Hasta Geri Bildirim Yanıtı

Olumlu / olumsuz geri bildirimlere yanıt. Hassas durumda **hukuki dikkat** — geri bildirim yanıtında bile mesleki gizlilik ihlali riski var.

### Faturalama ve SGK

SGK ile mali işler — yazışma taslakları, itiraz mektupları. Standart [finans](finans/) yaklaşımı, sağlığa özel KVKK katmanıyla.

### Personel İK ve Performans

Hekim, hemşire, idari personel İK işleri standart [İK departmanı](insan-kaynaklari/) yaklaşımıyla. Sağlık-spesifik: nöbet çizelgesi optimizasyonu, performans değerlendirme (klinik göstergeler), eğitim takibi.

## Bölüm 3 — Eğitim ve Akademik

### Personel Eğitim Materyali

Hemşire eğitimi, tıbbi sekreter eğitimi, hekim sürekli eğitim — Claude konuya göre eğitim materyali, sınav sorusu, vaka çalışması üretir. [Eğitim ve Akademi](egitim-akademi/) sayfası genel pedagojik yaklaşımı detaylandırır.

### Tıp Fakültesi / Eğitim Hastanesi

Asistan eğitimi için klinik vaka tartışmaları, makale taraması, sunum hazırlığı. **Anonimleştirilmiş** vakalarla.

### Sağlık İletişimi (Hasta Eğitimi)

Web sitesi, broşür, sosyal medya — sade tıbbi içerik. "Diyabet nedir, nasıl yönetilir" tarzı eğitsel içerik.

### Akademik Yayın

Tıbbi yayında abstract, giriş, tartışma bölümü taslağı. Final hekim/araştırmacı emeği ve sorumluluğunda.

## Bölüm 4 — Kurumsal Yönetim

### Politika Belgeleri

Hasta gizliliği politikası, KVKK aydınlatma, çalışan davranış kuralları. [Hukuk departmanı](hukuk/) onayıyla.

### Acil Durum Planları

Kriz iletişimi, hasta yakınlarına bilgi, basın açıklaması taslakları. Hassas durumda **iletişim ekibi + hukuk** son onay.

### Kalite Yönetimi

Hastane akreditasyonu (JCI, SAS) için belgeler. ISO benzeri yapı, [üretim ve imalat](uretim-imalat/) sayfasındaki ISO yaklaşımı uyarlanabilir.

### Yatırım ve Stratejik Plan

Yeni bölüm açma, cihaz satın alma kararı için iş planı, ROI analizi.

## Pratik Kullanım Senaryoları

### Senaryo 1: Polikliniğe Hekim

Sabah 9-12 yoğun poliklinik. 25 hasta. Her hasta sonrası 5 dakika not yazma → 2 saat eklenmiş iş günü. Hekim Claude'a vaka anonimleştirilmiş notları dikte eder, Claude yapılandırılmış hekim notu çıkarır. 5 dk → 1 dk.

### Senaryo 2: Hastane İdari Sekreter

Yabancı hasta yoğun bir hastanede, çoklu dilli randevu yazışması, tedavi öncesi bilgilendirme. Claude'la 5 dilde profesyonel iletişim — 3 sekreterin işini 1 sekreter yapar. [Turizm ve Otelcilik](turizm-otelcilik/) sayfasında benzer çoklu dilli pratik var.

### Senaryo 3: Hekim Akademik Çalışma

Klinik araştırma için literatür özeti, makale taslağı, istatistiksel analiz açıklaması. Claude'la hekim haftalarca süren işi 1-2 günde toplar.

### Senaryo 4: Hastane Yöneticisi

JCI akreditasyonuna 6 ay var. Claude'la mevcut prosedürlerin gözden geçirilmesi, eksik dokümantasyon listesi, yeni belge taslakları. 1 yıl yerine 4 ayda hazırlık tamamlanır.

## CLAUDE.md Tavsiyesi — Sağlık Çalışanı

Sağlık çalışanı için CLAUDE.md ekstra dikkatli:

```markdown
## Çalışan Profili
- Kurum: [hastane / poliklinik / sağlık kurumu]
- Pozisyon: [hekim / hemşire / idari]
- Branş: [varsa]

## Yasal Çerçeve
- KVKK md. 6 (özel kategori sağlık verisi)
- Hasta Hakları Yönetmeliği
- Mesleki gizlilik (TCK 134-138)

## Yapma — KESİN YASAK
- Hasta ad, TC, dosya no, iletişim bilgisi yapıştırma
- Tanı/tedavi kararını Claude'a sorma → Claude'da klinik karar yok
- Tıbbi rapor son hâlini Claude'la bitirme → mutlaka hekim onayı
- Müsteşar/yönetim hassas yazışmasını Claude'a açma

## Yap
- Anonim vaka tartışmasında "Hasta A, 45 yaş, K, [şikayet]"
- Hasta bilgilendirme metinlerini sade dile çevir
- Literatür taramasında ek profesyonel kaynak doğrulama
- İdari yazışmaları profesyonel format

## Voice
- Mesleğin saygınlığına uygun. Klişe ("değerli hastamız") yasak.
- Tıbbi terim + sade Türkçe karşılık.
```

## Kurumsal Politika — Sağlık Spesifik

[Şirket içi politika](../temeller/sirket-ici-politika/) sayfasındaki şablonu sağlık için **sıkılaştırın**:

### Sağlık Politikası Ek Maddeleri

```markdown
1. Hasta verisi - özel kategori. KVKK md. 6 + Hasta Hakları Yönetmeliği.
2. Hasta dosyasının hiçbir bölümü Claude'a yüklenmez.
3. Anonim vaka tartışması için kurum içi onaylı şablonu kullanın.
4. Klinik karar Claude'la verilmez. Claude tarama, taslak destekçidir.
5. Hekim notları Claude taslağı kullanılarak yazılır ama hekim onayıyla HBYS'ye girer.
6. Yasal/etik şüpheli durumda kurum hukuk müşaviriyle hemen görüşülür.
7. Bu politika hekim, hemşire, idari personel — herkesi kapsar.
```

## Kurumsal Plan Tavsiyesi

Sağlık kuruluşu için **mutlaka [Enterprise plan](../temeller/takim-ve-admin/)**:

- DPA (Data Processing Agreement) imzalanır
- Audit log
- SSO + SCIM
- Saklama politikası ayarlanır
- Eğitim verisi kullanım açıkça kapatılır

[Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) sayfası ek bağlam verir.

## "Hekim Yardımcısı Chatbot" Trend'i

Bazı dijital sağlık startup'ları "AI-destekli hasta soruları" yapıyor. Bu **çok hassas** bir alan:

- Klinik karar vermek hekim mesleki sorumluluğu
- AI bir teşhis koymadan "destek" sağlasa bile **yasal sorumluluk** sınırı belirsiz
- KVKK + tıp etiği iki katlı kontrol ister
- ABD'deki FDA benzeri Türkiye'de **Sağlık Bakanlığı** onayı süreci gelişiyor

**Öneri:** Doğrudan hasta-AI etkileşim ürünü için kurum içi karar değil, **dış hukuki ve etik kurul** danışmanlığı şart.

## Sağlık Turizmi

Türkiye'de büyüyen **sağlık turizmi** (saç ekimi, dental, plastik cerrahi, IVF) için Claude değerli:

- Çoklu dilde hasta iletişimi (öncesi, esnası, sonrası)
- Pre-arrival bilgilendirme
- Konaklama / transfer koordinasyonu
- Pazarlama içeriği (web sitesi, sosyal medya)
- Yorum yönetimi

[Turizm ve Otelcilik](turizm-otelcilik/) sayfası bu boyutu detaylandırır.

## Bireysel Hekim / Klinik Sahibi

Tek başına çalışan hekim, küçük poliklinik / klinik için Claude'un değeri kayda değer. İdari iş yükü hekim zamanını siz çıkarır. [Bireysel program](https://zamana.com.tr) bu profile uygun, ama sektör hassasiyeti nedeniyle **özel onboarding** önerilir.

## İlgili Sayfalar

- [Hukuk Departmanı](hukuk/) — KVKK, mesleki gizlilik, Sağlık Bakanlığı mevzuatı
- [Müşteri Hizmetleri](musteri-hizmetleri/) — Hasta iletişimi temelleri
- [Eğitim ve Akademi](egitim-akademi/) — Tıp eğitimi, asistan eğitimi
- [Turizm ve Otelcilik](turizm-otelcilik/) — Sağlık turizmi
- [Operasyon Departmanı](operasyon/) — Hastane operasyonel yönetim
- [İK Departmanı](insan-kaynaklari/) — Sağlık personeli yönetimi
- [Şirket İçi Politika](../temeller/sirket-ici-politika/) — Politika temeli
- [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) — Veri hakları
- [Takım ve Admin](../temeller/takim-ve-admin/) — Enterprise plan
- [Research Mode](../yetenekler/research-mode/) — Tıbbi literatür

