---
title: "Claude artık Google Docs, Sheets ve Slides'ta"
seoTitle: "Claude Google Docs, Sheets ve Slides eklentisi"
description: "Claude eklentisi Google belgelerinin yan panelinde çalışıyor; bağlayıcılarla sohbetten Google dosyası oluşturup düzenliyorsunuz (beta)."
date: "2026-10-06"
source: "https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides"
sourceTitle: "Claude now works with Google Docs, Sheets, and Slides"
image: "/images/haberler/google-workspace-claude.png"
imageAlt: "Bej zemin üzerinde, içinde Claude yıldızı olan ampul çizimi"
tags: ["entegrasyon", "google", "baglayici", "kurumsal"]
---

## Kısaca

Anthropic, Claude'u Google Workspace içine getirdi. İki yol var: Google Docs, Sheets ve Slides'ta yan panelde açılan bir eklenti ve Claude içinden Google dosyası oluşturup düzenleyen bağlayıcılar (connector, Claude'un başka bir uygulamaya bağlanmasını sağlayan köprü). İkisi de genel beta aşamasında ve tüm ücretli Claude planlarında kullanılabiliyor.

## Sizin için ne değişiyor?

Google tarafında çalışan ekipler için dosyayı Claude'a taşımak ya da Claude'un çıktısını geri yapıştırmak gerekmiyor. Dosyanın içinden çalışıyorsunuz.

- **Docs:** Bir cümleyi düzeltmek ya da başlığın biçimini değiştirmek gibi küçük işleri çevresindeki biçimi bozmadan yapıyor. Büyük revizyonlarda değişiklikleri "öneri kartı" olarak sunuyor, siz tek tek kabul ya da reddediyorsunuz.
- **Sheets:** Formül yazıyor, özet tablo (pivot) ve grafik kuruyor, yeni sekme açıyor. Veri birleştirme ya da temizleme gibi zor işlerde aralığı Python'a alıp sonucu tabloya geri veriyor. Örneğin "üçüncü çeyrek bütçesini gerçekleşenle karşılaştır, her ekip için ayrı sekme aç" diyebilirsiniz.
- **Slides:** Sunumunuzun mevcut düzen ve temasına uygun yeni slaytlar üretiyor; üst üste binen öğeleri, taşan içeriği ve okunmayan yerleri işaretliyor.

Düzenleme için iki mod var. Varsayılan "Ask before edits": her değişiklik özet bir onay kartıyla gelir, siz onaylayınca uygulanır. "Accept all edits": Claude işi bitirip değişiklikleri durmadan uygular. Önemli bir finans tablosunda varsayılan modu bırakmanızı öneririz.

## Nasıl denersiniz?

**Eklenti:** Google Workspace Marketplace'ten Claude eklentisini kurun. Bir dosya açıp Extensions (Uzantılar) > Claude > Open Claude yolunu izleyin. Claude hesabınızla giriş yaptığınızda aynı modelleri, bağlayıcıları ve skill'leri (Claude'a kalıcı çalışma yöntemi öğreten tarifler) kullanabilirsiniz. Ekip, biçim standartlarını skill olarak kaydedip her belgede aynı üslubu yakalayabilir. Yöneticiler eklentiyi Google Admin konsolundan tüm kuruluşa ya da seçili gruplara dağıtabilir.

**Bağlayıcılar:** Google Docs, Sheets ve Slides bağlayıcılarını açın, sohbete bir dosya bağlantısı yapıştırın ya da yeni belge isteyin. Erişim, dosyanın mevcut Google paylaşım izinlerini izliyor. Team ve Enterprise planlarında önce sahip (owner) ya da birincil sahibin bağlayıcıları etkinleştirmesi gerekiyor.

## Bilmeniz gerekenler

- Free planda yok; Pro, Max, Team ve Enterprise gerekir. Şu an genel beta olduğundan davranış değişebilir.
- Enterprise planında Compliance API, müşteri yönetimli şifreleme anahtarları (CMEK) ve OpenTelemetry denetim dışa aktarımı eklentiyi de kapsıyor.
- Kaynak yazı bölge kısıtını, verinin nerede işlendiğini ve dosya boyutu sınırlarını belirtmiyor. Kişisel veri içeren belgelerde [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasındaki dikkat noktalarına bakın, şüpheniz varsa önce küçük bir deneme dosyasıyla başlayın.
- Şirketinizin Google Workspace yöneticisi üçüncü taraf uygulamaları kısıtlıyorsa eklentiyi kurmadan önce BT ekibinden izin almanız gerekebilir.
- Microsoft tarafında aynı iş için Excel, Word ve PowerPoint eklentileri var; kurulum ve güvenlik notları [Office ve Chrome'da Claude](/wiki/araclar/office-ve-chrome/) sayfasında. Bağlayıcıların genel mantığı için [Connectors](/wiki/araclar/connectors/) sayfasına bakın.

*Kaynak: [Claude now works with Google Docs, Sheets, and Slides](https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
