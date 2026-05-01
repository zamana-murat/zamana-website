---
title: Satış ve İş Geliştirme — Claude Uygulamaları
description: Satış yöneticisi için Claude — teklif, müşteri iletişimi, pipeline analizi, tender yanıtları. Gerçek iş akışları ve prompt kütüphanesi önerileri.
tags:
  - departmanlar
  - satis
  - is-gelistirme
  - crm
---

Satış ekibinin Claude'la en çok zaman kazandığı yerler ve Zamana eğitim programlarının bu departmanda öğrettiği gerçek iş akışları.

## Claude'un Çözdüğü Temel Sıkıntılar

- Teklif ve öneri yazımı çok zaman alıyor
- Takip e-postaları tekrarlı ve jenerik
- Prospect ve pazar araştırması yavaş
- Toplantı hazırlığı tutarsız
- Kaybedilen anlaşmalar doğru analiz edilmiyor
- Ekip içinde fiyat ve teklif dokümantasyonu tutarsız
- Tender / RFP yanıtları zorlu ve zaman alıcı

## Bölüm 1 — İletişim

**Kişiselleştirilmiş outreach e-postaları.** Claude'a prospect'in bağlamı (sektör, sıkıntı noktası, geçmiş) verildikten sonra yazılır — gerçek kişiselleştirme, mail-merge değil.

**Takip dizileri.** Farklı senaryolar için çok-dokunuşlu takip kütüphanesi kurulur: yanıt yok, ilgili ama yavaş, itiraz geldi.

**Teklif yazımı.** Çalışan sayıları ve spesifikleri verir; Claude yapı, dil, ikna kurar. Sonuç: özenle yazılmış gibi okunan profesyonel bir teklif.

**Fiyat ve teklif dokümantasyonu.** Standart fiyat girdileri → şartlar, geçerlilik, ödeme koşulları eklenmiş profesyonel teklif belgesi.

**Tender / RFP yanıtları.** Çalışan tender gereksinimlerini açar; Claude bölüm bölüm yanıtı yapılandırır — yanıt süresi **%60-70 azalır**.

## Bölüm 2 — Araştırma ve İstihbarat

**Toplantı öncesi şirket analizi.** Claude'a ne verileceği, ne sorulacağı, doğrulamadan güvenilmeyeceği anlatılır. Prospect'in web sitesi + LinkedIn sayfası + son haberler → tek sayfalık bilgi notu.

**Rekabet istihbaratı.** Rakipler hakkında bildiklerinizi yaşayan bir referans belgesine dönüştürmek.

**Pazar özetleri.** Ham bilgi (haberler, fiyatlar, sektör verisi) → özet yönetim brifingi.

**Win/loss analizi.** Kapanan bir anlaşmanın geçmişini Claude'a verirsiniz, sonucu hangi faktörün belirlediğini çıkarır. Öğrenme kurumsallaşır.

## Bölüm 3 — Pipeline ve Anlaşma İşleri

**Takılan anlaşma analizi.** Anlaşma geçmişi → Claude teşhis + önerilen bir sonraki eylem.

**Toplantı hazırlık brifingi şablonu.** Güven dolu toplantıya girmek için gerekli her şey: şirket geçmişi, paydaş profilleri, açık sorular, olası itirazlar.

**Toplantı sonrası notlar.** Kaba notlar → yapılandırılmış özet + eylem kalemleri + sahip + son tarih.

**İtiraz yanıt kütüphanesi.** İtiraz tipine göre düzenlenmiş (fiyat, zamanlama, rakip tercihi, iç direnç) kişisel yanıt kütüphanesi.

**Kaybedilen anlaşma dokümantasyonu.** Kaybı kurumsal öğrenmeye çevirmek — ne oldu, gelecekte ne yapılmalı, benzer prospect'lerde neye dikkat edilmeli.

**Referans isteği yazımı.** Memnun müşterilerden doğal ve yanıt alan tanıştırma istemek — çoğu satışçı bunu yapamıyor çünkü nasıl söyleyeceğini bilmiyor.

**Account ve territory mapping.** Hesaplarınız ve bölgeniz hakkında bildiklerinizi yapılandırmak — white space, penetrasyon derinliği, risk yoğunluğu, büyüme fırsatları — yaşayan referans belgesi olarak.

## Tipik Günlük İş Akışı

Bir satış yöneticisinin Claude'la kurabileceği tipik bir ritim:

| Zaman | İş | Claude Yardımı |
|---|---|---|
| Pazartesi sabah | Haftalık pipeline özeti | Scheduled Task ile otomatik |
| Günlük sabah | Gün başı brifingi (takvim + yeni e-posta) | Dispatch ile telefondan tetiklenir |
| Toplantı öncesi | Prospect araştırması ve brief | Web search + CRM connector |
| Toplantı sonrası | Minute + takip e-postası | Meeting notu oku → çıkar |
| Hafta sonu | Takılan anlaşmaların teşhisi | CRM verisi üzerinde analiz |

## Prompt Kütüphanesi Konuları

Bu departman için önerilen prompt koleksiyonu:

- Sektöre göre prospect outreach
- Senaryoya göre takip dizileri
- Teklif yapısı şablonu
- Teklif / fiyat belgesi
- Tender yanıt çerçevesi
- Toplantı öncesi araştırma brifingi
- Toplantı sonrası özet
- İtiraz yanıt kütüphanesi
- Anlaşma teşhisi
- Win/loss analizi
- Pipeline review özeti
- İlişki tipine göre referans isteği
- Hesap ve territory map

## Kullanılacak Skills ve Connector'lar

**Skills:**
- `docx` — teklif belgeleri
- `pdf` — imzalı teklif PDF'leri
- `web-design` — (nadiren) özel landing page
- `sales:call-prep` — satış görüşmesi hazırlığı
- `sales:account-research` — şirket / kişi derinlemesine araştırma
- `sales:draft-outreach` — kişiselleştirilmiş outreach

**Connector'lar (öncelik sırasıyla):**
1. **CRM** (Salesforce veya HubSpot) — pipeline için olmazsa olmaz
2. **Gmail / Outlook** — müşteri yazışmaları
3. **Google Workspace / Microsoft 365** — teklif belgeleri
4. (opsiyonel) **Slack** — ekip iç iletişimi
5. (opsiyonel) **LinkedIn** entegrasyonu — prospect araştırma (zamanla eklenecek)

## İş Akışı Yeniden Tasarımı Adayları

Programa sonunda yeniden tasarlanacak iş akışları:

- **Teklif üretim süreci** — bilgi toplama → taslak → inceleme → teslim, her adım Claude destekli
- **Toplantı hazırlık rutini** — her toplantıdan önce 15 dakikalık brifing üretimi, otomatik
- **Tender yanıt iş akışı** — gereksinim analizi → bölüm yazımı → tutarlılık kontrolü
- **Aylık hesap incelemesi** — hesap bazlı sağlık durumu + önerilen aksiyonlar

## Gerçek Örnek — Takılan Anlaşma Teşhisi

Bir satış yöneticisi XYZ Gıda ile 3 ay önce aktif görüşmedeydi. 2 aydır cevap yok. Ne yapmalı?

**Adım 1:** CRM'den tüm geçmişi Claude'a verir:
> *"Bu hesabın tüm geçmişini ekte veriyorum. Son 12 ayın yazışmaları, toplantı notları, teklif revizyonları. Durumu teşhis et: bu anlaşma neden durdu? En olası 3 neden?"*

**Adım 2:** Claude teşhis verir — örneğin "Mart teklifinizdeki fiyat artışı karar verici için bütçe dönemine denk geldi, şu an yıl sonu kapanışla meşguller, Q2'de geri dönebilirler."

**Adım 3:** Çalışan sorar: *"Hadi bu 3 senaryoya 3 farklı takip stratejisi düşünelim. Hangi durumda hangisi?"*

**Adım 4:** Çalışan bir strateji seçer, Claude takip e-postası taslağı yazar.

Toplam süre: 15 dakika. Geleneksel yaklaşımla ("durumu analiz etmek için oturayım") bu iş yapılmaz — atlanır.

## İlgili Sayfalar

- [CLAUDE.md Örnekleri](../claude-md/ornekler/) — Satış yöneticisi için hazır CLAUDE.md
- [Prompting Temel İlkeleri](../prompting/temel-ilkeler/) — Kaliteli prompt yazma
- [Skills](../yetenekler/skills/) — Sales plugin detayları
- [MCP Bağlantı Listesi](../mcp/baglanti-listesi/) — CRM + Gmail connector kurulumu

