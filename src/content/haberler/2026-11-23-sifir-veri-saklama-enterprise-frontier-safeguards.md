---
title: "Sıfır veri saklamada güvenlik izleme betada"
seoTitle: "Sıfır veri saklama ve güvenlik izleme (EFS)"
description: "Enterprise Frontier Safeguards herkese açık betada: veriniz saklanmadan kötüye kullanım örüntüleri izleniyor. Hedef: regüle sektörler."
date: "2026-11-23"
source: "https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards"
sourceTitle: "Zero data retention with Enterprise Frontier Safeguards is now in beta"
image: "/images/haberler/efs-sifir-veri-saklama.png"
imageAlt: "Sıfır veri saklama ve Enterprise Frontier Safeguards duyurusunun kapak görseli"
tags: ["güvenlik", "gizlilik", "enterprise", "api"]
---

## Kısaca

Enterprise Frontier Safeguards (EFS), özel betadan herkese açık betaya geçti. Amaç, sıfır veri saklama (ZDR, yani istek ve yanıtların Anthropic'te tutulmaması) ile otomatik güvenlik izlemesini bir arada sunmak. Daha önce bu ikisi birbirine zor uyuyordu: veriyi saklamayan kuruluş, güvenlik izlemesinin dışında kalıyordu.

## Sizin için ne değişiyor?

Bu haber, Claude'u API üzerinden ya da bulut sağlayıcıları aracılığıyla kullanan ve verisinin saklanmasını istemeyen kuruluşlara yönelik. Sağlık, finans ve hukuk gibi veri hassasiyeti yüksek sektörler hedefleniyor.

Sistem tek tek isteklere değil, birçok isteğin oluşturduğu örüntülere bakıyor. Bir risk görürse ekibinize bir Güvenlik Vakası (Safety Case) açıyor. Vakalar SIEM araçlarınıza (güvenlik olaylarını toplayan sistemler) aktarılabiliyor. Vakalarda istek ve yanıtların içeriği yer almıyor.

İzleme için gereken kayıtlar sizin kendi depolama alanınızda (Amazon S3 ya da Google Cloud Storage) tutuluyor. Anthropic ve bulut sağlayıcınız veriyi saklamıyor, operatör tarafında insan incelemesi yapılmıyor ve veri eğitim için kullanılmıyor.

## Nasıl denersiniz?

1. Uygun müşterilere Anthropic kurulum talimatıyla bildirim gönderiyor, başvuru formu yok.
2. Geliştirici belgelerini ve güvenlik teknik raporunu inceleyin.
3. İsterseniz Accenture, Deloitte, KPMG veya PwC gibi danışmanlık ortaklarıyla kurulum yaptırın.

## Bilmeniz gerekenler

- Kullanılabildiği yerler: Claude Platform, AWS üzerinde Claude Platform, Amazon Bedrock ve Google Cloud'da Claude. Microsoft Foundry desteği "yakında".
- Depolama maliyetini (okuma, yazma, anahtar işlemleri, ağ aktarımı) bulut sağlayıcınız size normal tarifeyle faturalıyor.
- Bedrock ve Google Cloud'da (Google yönetimli) izlemeyi bulut sağlayıcısı işletiyor ve veri o bulutun sınırları içinde kalıyor.
- Kapsam, ciddi zarara yol açabilecek kasıtlı kötüye kullanım (örneğin saldırgan siber operasyonlar) ve ajanların kullanıcı niyetinin dışına çıkması. Genel içerik denetimi değil.
- Yazı kesin uygunluk ölçütlerini vermiyor. KVKK ve veri aktarımı açısından değerlendirme için [gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasına bakın.

*Kaynak: [Zero data retention with Enterprise Frontier Safeguards is now in beta](https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
