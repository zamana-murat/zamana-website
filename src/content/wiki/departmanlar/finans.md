---
title: Finans ve Muhasebe — Claude Uygulamaları
description: "Finans ekibi için Claude — raporlama anlatısı, bütçe varyans açıklaması, KOSGEB/TÜBİTAK başvuruları, denetim dosyası. Rakamlar sizin, anlatım Claude'un."
tags:
  - departmanlar
  - finans
  - muhasebe
  - raporlama
---

Finans ekibi Claude'u doğru konumlandırdığında ayda 10-20 saat kazanır. Ama kritik bir çerçeve var:

> **Claude rakamların etrafında yazar, onları hesaplamaz. Rakamlar her zaman çalışanındır. Claude bir yazma ve düşünme aracıdır — hesap makinesi değildir ve asla finansal veri kaynağı değildir.**

Bu çerçeve her finans prompt'unda aklınızda olmalı.

## Claude'un Çözdüğü Temel Sıkıntılar

- Finansal raporlar yazmak saatler alıyor, rakamlar hazır olmasına rağmen
- Sonuçları finans-dışı yönetime anlatmak zor
- Bütçe varyans anlatıları tekrarlı
- İç mali politikalar kötü dokümante edilmiş
- Belgeler arası tutarsızlık yakalamak yorucu ve hataya açık
- Denetim hazırlığı dev bir dokümantasyon yükü yaratıyor

## Bölüm 1 — Raporlama ve Anlatı

### Aylık / Çeyreklik Rapor Yazımı

Çalışan sayıları sağlar, Claude anlatı, açıklama, yönetici özeti üretir. **4 saat sürmesi gereken iş 45 dakikaya iner.**

### Bütçe Varyans Açıklaması

Varyans tablosu → **rakamların arkasındaki hikayeyi** anlatan net yönetim anlatısı. Sadece "bütçe aşıldı" değil — "neden aşıldı, bu bir trend mi, ne yapılmalı."

### Yönetim ve Kurul Sunumları

Finans-dışı kitleler için yapılandırılmış finansal hikayeler. CFO'nun işi sadece raporlamak değil — **anlaşılmaktır**.

### Varsayımları Test Etmek

Çalışan bir finansal varsayım tarif eder, Claude şeytanın avukatı olur:

> *"Bu varsayımın yanlış olması için ne doğru olmak zorunda?"*

Kör noktalar yönetim toplantısında karşınıza çıkmadan önce yüzeye çıkar.

## Bölüm 2 — Analiz Desteği

**Finansal senaryo düşüncesi.** Hesaplama değil, mantık ve çerçeve — Claude'a değişkenleri verirsiniz, senaryoları ve sonuçlarını haritalandırır.

**Nakit akışı anlatısı.** Pozisyon ve tahmini finans-dışı karar vericiler için sade dille açıklama.

**Tutarlılık kontrolü.** Raporun iki bölümünü veya iki belgeyi yapıştırırsınız, Claude çelişen sayı, varsayım veya ifadeleri listeler — rapor gitmeden önce hafif iç inceleme.

**Yönetim sorularının öngörüsü.** Raporu Claude'a verir, "bu toplantıda CEO ne sorar?" diye sorarsınız. Cevaplarınızı önceden hazırlarsınız.

## Bölüm 3 — Dokümantasyon ve İletişim

### Finansal Politika ve Prosedür Yazımı

Çalışan kuralları verir, Claude temiz, anlaşılır dokümantasyon üretir. **İç hukukun yazdığı değil, insanların okuyacağı** dilde.

### Tedarikçi Ödeme İletişimi

Ödeme koşulları, anlaşmazlıklar, gecikme hatırlatmaları, onaylar için profesyonel e-postalar — kararlı ama ilişki-koruyucu.

### İç Finansman Notları

Bütçe talepleri, gider politikası güncellemeleri, capex gerekçeleri.

### Denetim Hazırlık Dokümantasyonu

Claude kanıt paketlerini yapılandırır, denetçiler için açıklayıcı notlar yazar, denetim sorgularına yanıt taslakları hazırlar.

### KOSGEB, TÜBİTAK ve TURQUALITY Başvuruları

Türk şirketleri için **en az kullanılan yüksek-ROI uygulamalardan biri.**

- **KOSGEB** destek programları
- **TÜBİTAK** Ar-Ge hibeleri
- **Yatırım teşvik başvuruları**
- **TURQUALITY** ihracat destek programları

Claude resmi formları doldurmaz — **destekleyici anlatıları, proje açıklamalarını ve gerekçe bölümlerini** yazar. Başvurunun başarısı bu bölümlere bağlıdır.

### FX Pozisyon Anlatısı

USD veya EUR alacak / borcu yüksek şirketlerde Claude FX risk bölümünü yazar: mevcut pozisyon, hedge durumu, kur hareketi duyarlılığı — **finans-dışı yöneticilerin anlayacağı sade dilde**.

## Prompt Kütüphanesi Konuları

- Aylık rapor anlatısı
- Bütçe varyans açıklaması
- Yönetici finansal özet
- Kurul sunum yapısı
- Varsayım stres testi
- Yönetim FAQ öngörüsü
- Tutarlılık denetleyicisi
- Tedarikçi iletişim şablonları
- Finansal politika dokümantasyonu
- Nakit akışı anlatısı
- Denetim hazırlık notu
- Capex gerekçesi
- KOSGEB / TÜBİTAK başvuru anlatısı
- FX pozisyon anlatısı

## Kullanılacak Skills ve Connector'lar

**Skills:**
- `docx` — rapor ve politika belgeleri
- `xlsx` — analiz tabloları ve modelleme (formüller çalıştırılır, veri analizi yapılır — ama **orijinal sayıları siz verirsiniz**)
- `pdf` — kurumsal raporlar, başvuru dosyaları
- `pptx` — yönetim sunumları

**Connector'lar:**
1. **Google Workspace / Microsoft 365** (özellikle Sheets / Excel)
2. **Outlook / Gmail** — paydaş iletişimi
3. (opsiyonel) **DocuSign** — resmi dokümanların imzası

## İş Akışı Yeniden Tasarımı Adayları

- **Ay sonu raporlama döngüsü** — rakamlar hazırlanır → Claude anlatı üretir → iç inceleme → yönetime teslim
- **Denetim hazırlığı** — yıllık denetim öncesi kanıt paketleri ve açıklamalar
- **Bütçe döngüsü iletişimi** — yıllık bütçe sunumu, gerekçeler, varyans takibi
- **Başvuru taslağı döngüsü** — KOSGEB / TÜBİTAK / TURQUALITY için yılda 2-3 başvuru

## Gerçek Örnek — Bütçe Varyans Anlatısı

Mart ayı kapandı. Satış bütçenin %8 altında, pazarlama gideri %15 üstünde. Yönetim kurulu toplantısı cuma.

**Adım 1:** Çalışan varyans tablosunu + 3 aylık trendi Claude'a verir:
> *"Bu varyanslardan yönetim kuruluna 1 sayfalık bir anlatı yaz. Sadece rakamları tekrar etme — hikayeyi anlat. Mart'taki olağandışı olaylar (Ramazan, fuar iptali) dahil. Finansal olmayan yöneticiler anlayacak. 3 aksiyon maddesi ile bitsin."*

**Adım 2:** Claude taslak üretir. Çalışan olguları kontrol eder — tüm sayılar doğru.

**Adım 3:** "Üçüncü paragraf zayıf, Ramazan etkisini daha net göster" diye iterasyon.

**Adım 4:** Cuma toplantısı öncesi çalışan **yönetim FAQ prompt'unu** çağırır: *"CEO bu sayfayı okuduğunda hangi 5 soruyu soracak? Cevaplarıyla birlikte ver."*

Toplam süre: 35 dakika. Normal süreç: 3 saat + 1 gün sonra revizyonlar.

## Zamana'nın Finansa Özel Duruşu

> **Claude yazar. Finans profesyoneli olguyu, sayıyı ve imzayı verir. Sorumluluk asla transfer olmaz.**

SPK, bağımsız denetim, mali müşavir standartları — hiçbiri Claude'a devredilemez. Ehliyetli finans profesyoneli her çıktının arkasında durmalı.

## İlgili Sayfalar

- [CLAUDE.md Örnekleri](../claude-md/ornekler/) — CFO için hazır CLAUDE.md şablonu
- [Skills](../yetenekler/skills/) — `xlsx` skill detayları
- [Claude'un Sınırları](../temeller/sinirlamalar/) — Matematik hataları ve halüsinasyon
- [Gizlilik ve KVKK](../temeller/gizlilik-kvkk/) — Hassas finansal veri hijyeni

