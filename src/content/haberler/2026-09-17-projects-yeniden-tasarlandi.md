---
title: "Projects yeniden tasarlandı: klasörden, birlikte çalışan konuşmalara"
seoTitle: "Projects yeniden tasarlandı"
description: "Projects artık paralel çalışan konuşmalar, ortak hafıza ve bir koordinatörle iş yürüten bir yapıya dönüştü."
date: "2026-09-17"
source: "https://claude.com/blog/projects-redesigned"
sourceTitle: "Projects redesigned: from folder to conversation"
image: "/images/haberler/projects-yeniden-tasarlandi.jpg"
imageAlt: "Turuncu zemin üzerinde birbirine bağlı düğümlerden oluşan soyut bir proje çizimi"
tags: ["projects", "claude-code", "ajan", "beta"]
---

## Kısaca

Anthropic, Claude'daki Projects özelliğini baştan tasarladı. Eskiden bir proje, dosya ve talimat koyduğunuz bir klasör gibiydi. Yeni yapıda proje, birden fazla konuşmanın (thread) paralel çalıştığı ve bir koordinatörün bunları yönettiği bir çalışma alanı. Özellik 17 Eylül 2026'da beta olarak başladı.

## Sizin için ne değişiyor?

Önce hedefi söylüyorsunuz, ardından Claude yapılacak işleri öneriyor. Kaynağın anlatımıyla Claude işi dağıtıyor, paralel konuşmaları koordine ediyor, çıktıları gözden geçiriyor ve bitmiş sonucu toparlıyor.

Bu yapının parçaları:

- **Konuşmalar:** Her biri Claude Code'un bulut oturumu olarak çalışıyor. Ana ekrandan genel ilerlemeyi izliyorsunuz, isterseniz tek bir konuşmaya girip yön verebilirsiniz.
- **Ortak hafıza (memory):** Her konuşma projenin ortak hafızasına katkı yapıyor. Kararlar, takvim değişiklikleri ve iletişim tercihleri hatırlanıyor, uzun komutlar yazma ihtiyacınız azalıyor. Eklenen dosyalar ve üretilen artifact'lar proje kütüphanesinde toplanıyor.
- **Depo bağlantısı:** Kod deposu bağlıysa konuşmalar kendiliğinden değişiklik önerisi (pull request) açıyor, testleri çalıştırıyor, birleştirme çakışmalarıyla ilgileniyor. Birden fazla depoda aynı anda iş yapılabiliyor.
- **Ayarlar:** Claude'un ne sıklıkla durum bildireceğini, ne zaman yeni konuşma açacağını, güncellemelerin ne kadar ayrıntılı olacağını ve koordinatör ile çalışan konuşmalar için model ve çaba seviyesini siz belirliyorsunuz.

Kod yazmayan biri için de benzetme işe yarar: projeyi bir "iş takımı" gibi düşünebilirsiniz; hedefi verirsiniz, Claude alt işleri paralel yürütür.

## Nasıl denersiniz?

Yeni projelere claude.com/projects adresinden ulaşılıyor. Beta, başlangıçta seçili Pro ve Max abonelerine, Claude Code bulut oturumlarını kullanan ve henüz projesi olmayan kişilere açıldı. Sonraki hafta daha fazla Claude Code kullanıcısına genişledi; ardından tüm Claude, Team ve Enterprise planlarına yayılması bekleniyor. Erişiminiz yoksa bekleme listesine katılabilirsiniz. Pro ve Max'teki mevcut projeler olduğu gibi çalışmaya devam ediyor, yükseltmeler genişleme aşamalarında geliyor.

## Bilmeniz gerekenler

- Her konuşma tam bir Claude Code oturumu olduğu için paralel konuşmalar kullanımı hızlı tüketir. Proje bazlı kullanım göstergesine bakın, gerekirse daha hafif model veya düşük çaba seviyesi seçin.
- Yerel çalışma "yakında" olarak duyuruldu; şimdilik konuşmalar yalnızca bulutta çalışıyor. Şirket ağının arkasındaki kod ya da yerel araçlar için henüz uygun değil.
- Beta olduğu için davranış değişebilir; kritik işlerde çıktıyı kontrol edin.

Projects'in mevcut hâli için [Projects](/wiki/araclar/projects/) wiki sayfasına bakabilirsiniz. Bu sayfa eski yapıyı anlatır.

*Kaynak: [Projects redesigned: from folder to conversation](https://claude.com/blog/projects-redesigned), Anthropic. Bu yazı Zamana tarafından Türkçeye uyarlanmıştır.*
