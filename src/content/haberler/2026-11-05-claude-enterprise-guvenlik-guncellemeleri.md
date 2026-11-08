---
title: "Claude Enterprise'a güvenlik ekipleri için yeni kontroller"
seoTitle: "Claude Enterprise güvenlik güncellemeleri"
description: "Güvenlik merkezi, çıkarım kancaları, merkezi yönetim ve Cowork'te EDR desteği, Claude Enterprise yöneticilerine daha fazla görünürlük veriyor."
date: "2026-11-05"
source: "https://claude.com/resources/articles/claude-enterprise-security-updates"
sourceTitle: "More visibility and control over Claude Enterprise for security teams"
image: "/images/haberler/enterprise-guvenlik.png"
imageAlt: "Claude Enterprise güvenlik güncellemelerinin duyuru görseli"
tags: ["enterprise", "güvenlik", "yönetim", "dlp"]
---

## Kısaca

Anthropic, Claude Enterprise için güvenlik ve yönetim özelliklerini genişletti. Yeni paket bir güvenlik merkezi, mevcut DLP (veri sızıntısı önleme) araçlarınızla çalışan kancalar, birden çok kuruluşu tek yerden yönetme ve Cowork'te uç nokta koruma yazılımı (EDR) desteği içeriyor. Bazıları genel kullanımda, bazıları beta.

## Sizin için ne değişiyor?

Bilgi güvenliği sorumlusu ya da BT yöneticisiyseniz Claude'u izlemek için artık ayrı bir araç kurmanız gerekmeyebilir.

- **Güvenlik merkezi (beta):** Sohbet, Cowork ve Claude Code ayarlarınızı Anthropic'in önerdiği yapılandırmayla karşılaştırır. Yöneticiler beyan kaydı tutup denetçiler için rapor indirebilir. Anthropic bunun sertifika değil, tavsiyeye dayalı rehber olduğunu vurguluyor.
- **Çıkarım kancaları (genel kullanım):** İstemler güvenlik aracınıza kontrol için gönderilir, araç çağrıları çalışmadan önce denetlenir. Mevcut DLP politikalarınız Claude'a da uygulanır.
- **Merkezi yönetim (beta):** Ana kuruluş, admin.claude.com üzerinden SSO, SCIM, alan adı doğrulama, gruplar ve Compliance API anahtarlarını tek konsoldan yönetir. Kurulum geri alınamaz.
- **Erişim kontrolleri:** Admin API ile üyelerin oturumunu kapatma, kendi yönettiğiniz IP izin listesi, yönetilen bilgisayarlarda kişisel Claude hesaplarını engelleme, çalışma klasörü kısıtı.
- **Cowork'te EDR (beta):** EDR sensörünüz Cowork'ün sanal makinesinde çalışır. Sensör algılama modundadır, raporlar ama engellemez.

## Nasıl denersiniz?

Her özelliğin adımları Anthropic yardım merkezindeki ayrı makalelerde. Genel yol: yönetici olarak admin konsoluna girin, ilgili özelliği açın, önce küçük bir grupla deneyin. Merkezi yönetim geri alınamadığı için önceden planlayın.

## Bilmeniz gerekenler

- Özellikler Claude Enterprise içindir; beta olanların istisnaları yardım merkezinde listeli. Cowork'te EDR, macOS ve Windows'ta Team ve Enterprise için beta; Amazon Bedrock, Google Cloud Vertex AI ve Microsoft Foundry üzerindeki masaüstü uygulaması için MDM ile kurulur.
- Oturum kapatma API anahtarlarını ve çalışan bulut oturumlarını sonlandırmaz.
- Adım adım kurulum ve sınırlar duyuruda verilmiyor.
- Kurumsal güvenlik yaklaşımı için [Takım ve admin](/wiki/temeller/takim-ve-admin) ve [Şirket içi politika](/wiki/temeller/sirket-ici-politika) sayfalarına bakın.

*Kaynak: [More visibility and control over Claude Enterprise for security teams](https://claude.com/resources/articles/claude-enterprise-security-updates), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
