---
title: "Finans ve Muhasebe: Claude Uygulamaları"
description: "Finans ekibi için Claude: raporlama anlatısı, bütçe varyans açıklaması, KOSGEB/TÜBİTAK başvuruları, denetim dosyası. Rakamlar sizin, anlatım Claude'un."
tags:
  - departmanlar
  - finans
  - muhasebe
  - raporlama
lastUpdated: "2026-10-05"
---

Finans ekibi Claude'u doğru konumlandırdığında her ay saatlerce zaman kazanır. Ama kritik bir çerçeve var:

> **Claude rakamların etrafında yazar, onları hesaplamaz. Rakamlar her zaman çalışanındır. Claude bir yazma ve düşünme aracıdır, hesap makinesi değildir ve asla finansal veri kaynağı değildir.**

Bu çerçeve her finans prompt'unda aklınızda olmalı.

## Claude'un Çözdüğü Temel Sıkıntılar

- Finansal raporlar yazmak saatler alıyor, rakamlar hazır olmasına rağmen
- Sonuçları finans-dışı yönetime anlatmak zor
- Bütçe varyans anlatıları tekrarlı
- İç mali politikalar kötü dokümante edilmiş
- Belgeler arası tutarsızlık yakalamak yorucu ve hataya açık
- Denetim hazırlığı dev bir dokümantasyon yükü yaratıyor

## Bölüm 1: Raporlama ve Anlatı

### Aylık / Çeyreklik Rapor Yazımı

Siz rakamları sağlarsınız; Claude anlatıyı, açıklamayı ve yönetici özetini üretir. Deneyimimizde saatler süren bir rapor yazımı, çoğu zaman bir saatin altına iner.

### Bütçe Varyans Açıklaması

Varyans tablosundan, **rakamların arkasındaki hikâyeyi** anlatan net bir yönetim anlatısı çıkar. Yalnızca "bütçe aşıldı" demek yetmez: neden aşıldı, bu bir trend mi, ne yapılmalı.

### Yönetim ve Kurul Sunumları

Finans dışı kitleler için yapılandırılmış finansal hikâyeler. CFO'nun işi yalnızca raporlamak değil, **anlaşılmaktır**. Claude for Excel (Excel, PowerPoint ve Word eklentileri genel kullanımda) tablo ile sunum arasındaki geçişi aynı yerde yapmanızı sağlar; ayrıntılar [Office ve Chrome Eklentileri](/wiki/araclar/office-ve-chrome/) sayfasında.

### Varsayımları Test Etmek

Çalışan bir finansal varsayımı tarif eder, Claude şeytanın avukatı olur:

> *"Bu varsayımın yanlış olması için ne doğru olmak zorunda?"*

Kör noktalar yönetim toplantısında karşınıza çıkmadan önce yüzeye çıkar.

## Bölüm 2: Analiz Desteği

**Finansal senaryo düşüncesi.** Hesaplama değil, mantık ve çerçeve: Claude'a değişkenleri verirsiniz, senaryoları ve sonuçlarını haritalandırır.

**Nakit akışı anlatısı.** Nakit pozisyonunu ve tahmini, finans dışı karar vericiler için sade dille açıklamak.

**Tutarlılık kontrolü.** Raporun iki bölümünü ya da iki belgeyi yapıştırırsınız; Claude çelişen sayı, varsayım ve ifadeleri listeler. Rapor gitmeden önce hafif bir iç inceleme olur.

**Yönetim sorularının öngörüsü.** Raporu Claude'a verip "bu toplantıda CEO ne sorar?" diye sorarsınız. Cevaplarınızı önceden hazırlarsınız.

## Bölüm 3: Dokümantasyon ve İletişim

### Finansal Politika ve Prosedür Yazımı

Çalışan kuralları verir, Claude temiz ve anlaşılır dokümantasyon üretir. Dil, **iç hukukun yazdığı değil, insanların okuyacağı** türdendir.

### Tedarikçi Ödeme İletişimi

Ödeme koşulları, anlaşmazlıklar, gecikme hatırlatmaları ve onaylar için profesyonel e-postalar: kararlı ama ilişkiyi koruyan bir dille.

### İç Finansman Notları

Bütçe talepleri, gider politikası güncellemeleri, capex gerekçeleri.

### Denetim Hazırlık Dokümantasyonu

Claude kanıt paketlerini yapılandırır, denetçiler için açıklayıcı notlar yazar, denetim sorgularına yanıt taslakları hazırlar.

### KOSGEB, TÜBİTAK ve TURQUALITY Başvuruları

Türk şirketleri için **az kullanılan ama getirisi yüksek uygulamalardan biri.**

- **KOSGEB** destek programları
- **TÜBİTAK** Ar-Ge hibeleri
- **Yatırım teşvik başvuruları**
- **TURQUALITY** ihracat destek programları

Claude resmi formları doldurmaz, **destekleyici anlatıları, proje açıklamalarını ve gerekçe bölümlerini** yazar. Başvurunun başarısı bu bölümlere bağlıdır.

### FX Pozisyon Anlatısı

USD veya EUR alacağı ya da borcu yüksek şirketlerde Claude FX risk bölümünü yazar: mevcut pozisyon, hedge durumu, kur hareketine duyarlılık. Dil, **finans dışı yöneticilerin anlayacağı kadar sade** olur.

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
- `docx`: rapor ve politika belgeleri
- `xlsx`: analiz tabloları ve modelleme (formüller çalıştırılır, veri analizi yapılır, ama **orijinal sayıları siz verirsiniz**)
- `pdf`: kurumsal raporlar, başvuru dosyaları
- `pptx`: yönetim sunumları

**Connector'lar:**
1. **Google Workspace / Microsoft 365** (özellikle Sheets / Excel)
2. **Outlook / Gmail**: paydaş iletişimi
3. (opsiyonel) **DocuSign**: resmi dokümanların imzası

## İş Akışı Yeniden Tasarımı Adayları

- **Ay sonu raporlama döngüsü**: rakamlar hazırlanır → Claude anlatı üretir → iç inceleme → yönetime teslim
- **Denetim hazırlığı**: yıllık denetim öncesi kanıt paketleri ve açıklamalar
- **Bütçe döngüsü iletişimi**: yıllık bütçe sunumu, gerekçeler, varyans takibi
- **Başvuru taslağı döngüsü**: KOSGEB / TÜBİTAK / TURQUALITY için yılda 2-3 başvuru

## Gerçek Örnek: Bütçe Varyans Anlatısı

Mart ayı kapandı. Satış bütçenin %8 altında, pazarlama gideri %15 üstünde. Yönetim kurulu toplantısı cuma.

**Adım 1:** Çalışan varyans tablosunu + 3 aylık trendi Claude'a verir:
> *"Bu varyanslardan yönetim kuruluna 1 sayfalık bir anlatı yaz. Sadece rakamları tekrar etme, hikayeyi anlat. Mart'taki olağandışı olaylar (Ramazan, fuar iptali) dahil. Finansal olmayan yöneticiler anlayacak. 3 aksiyon maddesi ile bitsin."*

**Adım 2:** Claude taslak üretir. Çalışan olguları kontrol eder, tüm sayılar doğru.

**Adım 3:** "Üçüncü paragraf zayıf, Ramazan etkisini daha net göster" diye iterasyon.

**Adım 4:** Cuma toplantısı öncesi çalışan **yönetim FAQ prompt'unu** çağırır: *"CEO bu sayfayı okuduğunda hangi 5 soruyu soracak? Cevaplarıyla birlikte ver."*

Toplam süre: yaklaşık 35 dakika (örnek senaryo). Geleneksel süreç: 3 saat ve ertesi gün revizyonlar.

## Finans için Pazarlık Dışı Çerçeve

> **Claude yazar. Finans profesyoneli olguyu, sayıyı ve imzayı verir. Sorumluluk asla transfer olmaz.**

SPK, bağımsız denetim ve mali müşavir standartlarından doğan sorumluluk Claude'a devredilemez. Ehliyetli bir finans profesyoneli her çıktının arkasında durmalıdır.

> **Kişisel veri notu:** Bordro, maaş ve kişi adı içeren müşteri ya da tedarikçi tabloları kişisel veridir. Bunları Claude'a girmeden önce anonimleştirin; yurt dışı aktarım konusunda [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasındaki "Yurt Dışına Aktarım (KVKK m.9)" bölümüne bakın.

## İlgili Sayfalar

- [CLAUDE.md Örnekleri](/wiki/claude-md/ornekler/): CFO için hazır CLAUDE.md şablonu
- [Skills](/wiki/yetenekler/skills/): `xlsx` skill detayları
- [Claude'un Sınırları](/wiki/temeller/sinirlamalar/): Matematik hataları ve halüsinasyon
- [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/): Hassas finansal veri hijyeni

