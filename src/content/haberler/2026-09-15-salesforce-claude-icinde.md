---
title: "Salesforce artık Claude'un içinde: satış ekipleri için 37 beceri"
seoTitle: "Salesforce artık Claude'un içinde"
description: "Salesforce eklentisi beta olarak geldi; hesap, fırsat ve pipeline verisi mevcut yetkilerle Claude'a bağlanıyor."
date: "2026-09-15"
source: "https://claude.com/blog/salesforce-in-claude"
sourceTitle: "Bringing Salesforce into Claude"
image: "/images/haberler/salesforce-in-claude.jpg"
imageAlt: "Turuncu zemin üzerinde Salesforce ve Claude entegrasyonunu simgeleyen soyut çizim"
tags: ["salesforce", "crm", "eklenti", "satış"]
---

## Kısaca

Anthropic ve Salesforce birlikte "Salesforce in Claude" eklentisini beta olarak yayınladı. Eklenti, satışçıların hesaplarını, fırsatlarını ve pipeline verisini Claude'a getiriyor ve satış ekibinin günlük işleri için 37 beceri (skill) içeriyor. Salesforce'taki mevcut yetkiler aynen geçerli kalıyor.

## Sizin için ne değişiyor?

Kaynakta anlatılan başlıca akışlar:

- **Günlük özet:** Claude her sabah toplantıları, kapanmak üzere olan fırsatları, risk altındaki anlaşmaları ve okunmamış yazışmaları özetliyor. Özetin içinden "kapanış tarihini değiştir" ya da "takip görevi ekle" diyebiliyorsunuz.
- **Görüşme hazırlığı:** Salesforce, Slack ve e-postadan açık fırsatları, hesap ekibi konuşmalarını ve cevapsız soruları topluyor. Yazışmalarda yeni bir karar vericiyi fark ederse onu hesaba kişi olarak ekleyebiliyor.
- **Anlaşma analizi ve kapanış planı:** Fırsatı satış metodolojinize göre puanlıyor, eksik nitelendirme alanlarını gösteriyor, iş gerekçesi ve karşılıklı kapanış planı taslağı yazıyor.
- **Toplantı sonrası güncelleme:** Görüşme dökümünü veya notunu takip e-postasına, Slack özetine ve fırsat güncellemesine çeviriyor. Yayınlamadan önce sizin onayınıza sunuyor.
- **Pipeline incelemesi:** Aşamaya göre kapsama, kayma riski olan anlaşmalar ve hesap bazında ayrıntı gösteren etkileşimli panolar çıkarıyor. Satış yöneticisi aynısını ekibi için üretip tahmin anlatısı paylaşabiliyor.

## Nasıl denersiniz?

Eklenti tüm ücretli Claude planlarında beta olarak kullanılabiliyor. Kurulum için organizasyon yöneticisi Salesforce'u AgentExchange üzerinden bir kez bağlıyor ve eklentiyi belirli gruplar için açabiliyor. Bir kurulum becerisi deneyimi kişinin rolüne ve müşteri portföyüne göre ayarlıyor. Beta erişimi Salesforce'un AgentExchange platformundan isteniyor; destek dokümantasyonunda kurulum adımları var. Salesforce MCP'si ayrıca Claude Marketplace'ten doğrudan kurulabiliyor.

## Bilmeniz gerekenler

- Güvenlik: Kullanıcı Salesforce kimlik bilgileriyle giriş yapıyor ve Claude yalnızca o kişinin erişebildiği veriyi okuyor. Varsayılan olarak kayıtlarda değişiklik yapmadan önce onay istiyor. Team ve Enterprise planlarında Anthropic müşteri verisiyle model eğitmiyor.
- Kullanım: Kaynağa göre GitLab, Siemens ve Legora gibi kurumlar eklentiyi devreye aldı ve 7.000 Salesforce satışçısı şu an kullanıyor. Bunlar şirketin paylaştığı erken benimseme verileri.
- Beta olduğu için kapsam ve davranış değişebilir. Kayıt güncelleyen işlemlerde onay adımını kapatmadan başlayın.
- Salesforce kullanmıyorsanız bu haber doğrudan size uymaz; ama aynı mantık (mevcut yetkiler, onaylı değişiklik) diğer CRM bağlayıcıları (connector) için de ölçüt olabilir.

İlgili sayfalar: [Connectors](/wiki/araclar/connectors/) ve [Slack ve Teams Entegrasyonu](/wiki/araclar/slack-teams-entegrasyon/).

*Kaynak: [Bringing Salesforce into Claude](https://claude.com/blog/salesforce-in-claude), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
