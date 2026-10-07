---
title: "Küçük İşletme (KOBİ) için Claude: Tek Kişi, Bütün Şapkalar"
seoTitle: "KOBİ İçin Claude: Nakit Akışı, Tahsilat, Ay Sonu Kapanış"
description: "Küçük işletme sahibi için Claude: nakit akışı, kampanya, ay sonu kapanış, tahsilat takibi. Her işi tek başına yürüten KOBİ sahibinin iş akışı."
tags:
  - departmanlar
  - kobi
  - kucuk-isletme
  - nakit-akisi
  - otomasyon
lastUpdated: "2026-10-06"
---

Bu sayfa bir departman değil, bir **senaryo**: satışı da pazarlamayı da muhasebeyi de tek başına yürüten **küçük işletme sahibi**. Diğer departman sayfaları tek bir role odaklanır; KOBİ sahibi hepsini aynı gün yapar. Claude'un en büyük kaldıraç sağladığı yer tam burasıdır, çünkü ayrı ekiplerin yaptığı işi tek kişiye sığdırır.

Anthropic bu profile özel bir paket de sunuyor: Eylül 2026'da genişleyen Claude for Small Business, 43 hazır iş akışı (Monday Brief, Proposal Builder, Close the Month gibi) ve 27 yeni entegrasyon içeriyor. Aşağıdaki akışların birçoğu bu paketin kapsadığı işlerle örtüşüyor. Paketin Türkiye'deki muhasebe yazılımlarıyla uyumu için aşağıdaki Connector'lar bölümündeki nota bakın. Ayrıntılar için [haberi okuyun](/haberler/2026-09-15-claude-for-small-business-genisledi/). Anthropic'in Cowork için hazırladığı eklenti deposunda da bir `small-business` klasörü bulunur ([knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)); hangi iş akışının Türkiye'de işe yaradığını denemeden varsaymayın.

> **Pazarlık dışı çerçeve:** Hiçbir şey siz onaylamadan **gönderilmez, yayınlanmaz, ödenmez.** Claude taslak hazırlar ve önerir; göndermek, yayınlamak veya para hareketi yapmak her zaman sizin onayınızla olur. Vergi, hukuk ve finans gibi kritik kararlar ehliyetli danışmanınızdadır; Claude mali müşavirin ya da avukatın onayının yerine geçmez.

## Claude'un Çözdüğü Temel Sıkıntılar

- Her sabah "bugün neye odaklanmalıyım?" sorusuna dağınık kaynaklardan cevap aramak
- Nakit akışını ve vadeleri kafada tutmaya çalışmak
- Pazarlama yapmaya vakit bulamamak
- Ay sonu mutabakatının her seferinde panik yaratması
- Geciken tahsilatları takip edecek zaman olmaması
- Tek kişi olarak her işi yapıp hiçbirine tam yetişememek

## Bölüm 1: Pazartesi Sabah Brifingi

Dağınık bilgiyi (banka bakiyesi, gelen ödemeler, açık teklifler, takvim) **tek bir öncelik sayfasına** indirin. Claude bağlı kaynaklardan veriyi toplar ve bu haftanın **en acil üç işini** belirler.

> *"Bağlı banka/ön muhasebe ve takvimimden bu sabahın brifingini hazırla: nakit pozisyonu, bu hafta gelmesi beklenen tahsilatlar, açık teklifler, bugünkü randevular. Sonunda bu haftaki en kritik 3 işi sırala."*

[Scheduled Task](/wiki/araclar/scheduled-tasks/) ile her Pazartesi 08:00'de otomatik hazırlanır.

## Bölüm 2: Kampanya Yönetimi

Yavaş bir dönem yaklaşıyorsa Claude kampanya kurar: stratejiyi taslaklar, görseli üretir, müşteri listesini segmentler, gönderimi **onayınıza** hazırlar.

- Satış verisinden durgun dönemi tespit eder
- Promosyon fikri + mesaj taslağı üretir
- Canva ile görsel üretir ([Skills](/wiki/yetenekler/skills/) → `canvas-design`)
- CRM'de müşteri listesini segmentler
- Gönderimi hazırlar, **siz onaylayana kadar göndermez**

## Bölüm 3: Ay Sonu Kapanış

KOBİ sahibinin en sevmediği iş. Claude, ön muhasebe kayıtlarını banka ve tahsilat hareketleriyle karşılaştırır, **uyuşmayanları işaretler** ve mali müşavir için sade bir gelir-gider anlatısı çıkarır.

- Muhasebe ile ödeme/tahsilat mutabakatı
- Tutmayan kalemleri işaretler (siz kontrol edersiniz)
- Mali müşavire gidecek özet anlatıyı üretir

> **Önemli:** Bu, mali müşavirin yerine geçmez. Claude ön hazırlığı yapar, **resmi beyan ve karar mali müşavirdedir.** Bkz: [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/), [Sınırlamalar](/wiki/temeller/sinirlamalar/).

## Bölüm 4: Tahsilat ve Nakit Akışı Takibi

- Önümüzdeki 30 günün nakit akışını tahmin eder
- Vadesi geçen faturaları çıkarır
- Müşterinin ödeme geçmişine göre **kişiselleştirilmiş** hatırlatma taslakları yazar (kibar / net / son uyarı tonları)
- Hiçbir hatırlatma siz onaylamadan gitmez

## Tipik Günlük / Haftalık Ritim

| Zaman | İş | Claude Yardımı |
|---|---|---|
| Pazartesi sabah | Hafta brifingi + 3 öncelik | Scheduled Task ile otomatik |
| Gün içi | Müşteri yazışması, teklif | Claude sohbetinde hızlı taslak |
| Ay sonu | Kapanış ön hazırlığı | Muhasebe + banka mutabakatı |
| Haftalık | Geciken tahsilat hatırlatmaları | Vade + ödeme geçmişi analizi |
| Durgun dönem | Kampanya | Strateji + görsel + segment |

## Kullanılacak Skills ve Connector'lar

**Skills:**
- `docx`: teklif, sözleşme, resmi yazı
- `xlsx`: basit nakit akışı / fiyat tabloları
- `pdf`: gelen fatura ve belgelerin okunması
- `canvas-design`: sosyal medya ve kampanya görselleri

**Connector'lar:**
1. **Banka / ön muhasebe** (Paraşüt, Logo ve Mikro için resmî bir Claude connector'ı yoktur; özel connector ya da yazılımın REST API'si gerekir), nakit ve mutabakat. Çoğu işletme için pratik yol, dışa aktarılmış Excel/CSV dosyasıyla çalışmaktır. Hangi programda hangi yolun işlediği, Türkçe sayı ve tarih tuzakları ve ay sonu mutabakat örneği için [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/) sayfasına bakın.
2. **Gmail / Outlook**: müşteri yazışmaları, hatırlatmalar
3. **Google Workspace / Microsoft 365**: belgeler
4. (opsiyonel) **CRM / HubSpot**: müşteri listesi ve segment
5. (opsiyonel) **Canva**: görsel üretim

> **Not:** Mevcut araç izinleriniz aynen geçerlidir; Claude erişiminiz olmayan veriyi göremez. Free, Pro ve Max'te verilerinizin model eğitiminde kullanılıp kullanılmayacağı Privacy Settings'ten sizin yapacağınız bir seçimdir, ayarı kendiniz kontrol edin. Team ve Enterprise'ta girdiler varsayılan olarak eğitimde kullanılmaz. Müşteri adı, telefon gibi kişisel veri içeren tabloları yüklemeden önce anonimleştirin; yurt dışı aktarım için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasına bakın.

## Gerçek Örnek: Geciken Tahsilat

Bir KOBİ sahibinin 3 müşterisinde vadesi geçmiş fatura var, ama takip edecek vakti yok.

**Adım 1:** *"Ön muhasebemden vadesi geçmiş faturaları çıkar. Her müşteri için ödeme geçmişine bakarak uygun tonda bir hatırlatma e-postası taslağı yaz: düzenli ödeyene kibar, ilk kez geciktirene net, kronik geciktirene resmi son uyarı."*

**Adım 2:** Claude üç farklı tonda üç taslak üretir, her birini ilgili müşterinin geçmişine göre kalibre eder.

**Adım 3:** Siz okur, gerekirse düzeltir, **onaylayıp** gönderirsiniz.

Toplam süre: yaklaşık 10 dakika. Eskiden bu iş ya hiç yapılmıyordu ya da yarım saat üzülerek yazılıyordu.

**Süre:** 3 tahsilat hatırlatması için elle 30-45 dakika, Claude ile yaklaşık 10 dakika (okuyup onaylamak dahil). Pazartesi brifingi elle toplanırsa 30-60 dakika alır; zamanlanmış görevle hazırlık sıfıra iner, geriye yaklaşık 5 dakikalık okuma kalır. Brifing her hafta yapılıyorsa ayda kabaca 2-4 saat fark eder. *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

## İş Akışı Yeniden Tasarımı Adayları

- **Pazartesi brifingi**: tam otomatik, her hafta hazır
- **Aylık kapanış ön hazırlığı**: mutabakat + mali müşavir özeti
- **Tahsilat takibi**: haftalık otomatik geciken-fatura taraması + taslak hatırlatma
- **Durgun dönem kampanyası**: tetik bazlı (satış düşünce öneri gelsin)

## İlgili Sayfalar

- [İlk 7 Gün Rehberi](/wiki/temeller/ilk-7-gun/): Claude'u alışkanlığa çevirmek
- [Scheduled Tasks](/wiki/araclar/scheduled-tasks/): Pazartesi brifingi otomasyonu
- [Fatura ve KDV](/wiki/temeller/fatura-ve-kdv/): Türkiye'de faturalandırma
- [Türk İş Araçlarıyla Claude](/wiki/temeller/turk-is-araclari/): Logo, Mikro, Paraşüt, e-Fatura ve Excel ile çalışma yolları
- [Finans](/wiki/departmanlar/finans/): Daha derin finans iş akışları
- [Satış](/wiki/departmanlar/satis/): Müşteri iletişimi ve teklif
- [Sınırlamalar](/wiki/temeller/sinirlamalar/): Claude'a neyi bırakmamalı
