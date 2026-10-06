---
title: "Claude Skills: Claude'a Çalışma Usulünüzü Öğretin"
seoTitle: "Claude Skills: Çalışma Usulünüzü Öğretin"
description: "Skill, Claude'a bir işi sizin usulünüzle yapmayı öğreten talimat klasörüdür. Excel ve PowerPoint için hazır skill'ler var, kendinizinkini de yazarsınız."
eyebrow: "Yetenek"
lead: "Skill, bir işi sizin usulünüzle nasıl yapacağını Claude'a bir kez anlattığınız klasördür. Sonra aynı işte her seferinde aynı biçimde çalışır; bunu tekrar yazmanız gerekmez."
heroImage: "/images/claude/skills/hero.webp"
heroAnimation: "skills"
heroAlt: "Şirketin teklif yazım yöntemi bir skill olarak kaydediliyor, ardından tek cümlelik bir istekle Claude bu skill'i kullanıp şirket formatında fiyat teklifi hazırlıyor."
availability: "Free dahil tüm planlarda var. Claude.ai, Claude Code ve API'de aynı skill çalışır."
sourceUrl: "https://claude.com/skills"
sourceTitle: "Skills"
related:
  - { label: "Skills: Claude'un Uzmanlık Paketleri (wiki)", href: "/wiki/yetenekler/skills/" }
  - { label: "CLAUDE.md nedir? (wiki)", href: "/wiki/claude-md/" }
  - { label: "Şirket İçi Politika (wiki)", href: "/wiki/temeller/sirket-ici-politika/" }
  - { label: "Takım ve Admin (wiki)", href: "/wiki/temeller/takim-ve-admin/" }
order: 10
lastUpdated: "2026-10-06"
---

## Nedir?

Her seferinde Claude'a aynı şeyi anlatıyorsanız (rapor şablonunuz, e-posta üslubunuz, bir sözleşmeyi nasıl kontrol ettiğiniz) skill tam bunun için var. Skill, aslında içinde `SKILL.md` adlı bir talimat dosyası bulunan bir klasördür. İçine ister örnek dosyalar, ister betikler koyarsınız. Claude görevinize uygun skill'i kendisi seçip yükler; siz elle seçmezsiniz.

Anthropic'in sayfası faydayı dört başlıkta özetliyor:

- **Tutarlı sonuç:** Belge, analiz ya da iş akışı için tarzınızı bir kez tanımlarsınız, çıktı her seferinde aynı çerçevede gelir.
- **Kurumsal bilgi:** Şirketin prosedürleri ve en iyi uygulamaları paketlenir; yeni gelen biri ilk günden aynı kalitede çıktı alır.
- **Bir kere yaz, her yerde kullan:** Aynı skill Claude.ai, Claude Code ve API'de değişiklik gerektirmeden çalışır.
- **Üst üste koyma:** Karmaşık işlerde birkaç skill birlikte kullanılabilir.

Claude'un hazır skill'leri de var: çalışan formüllü Excel tabloları, markanıza uygun PowerPoint, veri analizi ve görselleştirme, dosya biçimi dönüştürme. Finansal hizmetler için de DCF modelleme ve emsal analizi gibi hazır skill'ler yayımlanıyor.

## Türk şirketinde ne işe yarar?

Aşağıdakiler örnek senaryolardır.

- **Kurumsal yazışma üslubu:** Şirketin resmî yazışma kalıplarını (hitap, kapanış, imza düzeni) bir skill'e koymak. Her çalışanın Claude'dan aldığı taslak aynı dilde başlar.
- **Aylık yönetim raporu:** Muhasebenin her ay yaptığı karşılaştırma (bütçe/gerçekleşen, anomali kontrolü) için adımları skill'e yazmak. Anthropic'in sayfasında bir şirket, yönetim muhasebesi ve finans iş akışlarında bunun bir günlük işi bir saate indirdiğini söylüyor; sizin sonucunuz sürecinize göre değişir.
- **Sözleşme kontrol listesi:** Hukuk biriminizin sözleşmelerde baktığı maddeleri (cezai şart, yetkili mahkeme, KVKK ekleri) bir skill'e sıralamak. Claude bu listeye göre tarar; nihai karar avukata aittir.
- **İhracat evrak hazırlığı:** Teklif, proforma fatura ve paketleme listesi için şirketinizin şablonunu ve kontrol adımlarını tanımlamak.
- **Satış görüşmesi hazırlığı:** Görüşme öncesi hesap araştırması ve soru listesi için sabit bir yöntem kurmak.

Dikkat: bir skill, Claude'un kuralı bilmesini sağlar; kuralı doğru yazmak sizin işiniz. Yanlış ya da eksik bir prosedür, tutarlı biçimde yanlış çıktı üretir. İlk haftalarda sonuçları gözle kontrol edin.

## Nasıl başlarsınız?

1. Claude'da basitçe "Bir skill oluşturmama yardım eder misin?" yazın. Claude'un hazır **skill-creator** skill'i klasör yapısını, `SKILL.md` dosyasını ve gerekli kaynakları sizin için hazırlar.
2. İlk skill'i dar bir işte kurun: tek bir rapor ya da tek bir e-posta türü.
3. Çıktıyı gerçek bir örnekle karşılaştırın, eksikleri talimata ekleyin.
4. Beğendiğinizde skill'i indirip saklayın. Geliştirici kontrolü isteyenler `SKILL.md` dosyasını elle de yazabilir.

Hazır paketler isterseniz, rol bazlı skill gruplarını [Plugins sayfasında](/claude/plugins/) bulabilirsiniz. Skill'in plugin, connector ve CLAUDE.md ile farkını anlamak için [wiki'deki Skills sayfasına](/wiki/yetenekler/skills/) bakın.

![Claude'dan skill oluşturmasını isteyen örnek sohbet: skill oluşturucu okunuyor, satis-gorusmesi-hazirligi adlı skill hazırlanıp İndir düğmesiyle sunuluyor](/images/claude/skills/skill-builder.webp)

## Hangi planda, nelere dikkat?

**Plan.** Skills Free dahil tüm planlarda mevcut. Ayrıntılar için [Planlar](/wiki/temeller/planlar/) sayfasına bakın.

**Geçişte kaybolanlar.** Kişisel bir Pro hesabını Team ya da Enterprise'a yükselttiğinizde sohbetleriniz ve projeleriniz taşınır, ancak özel skill'leriniz taşınmaz (geçiş yolu yok). Önce skill klasörlerinizi dışarı alıp saklayın, sonra yeniden yükleyin.

**Güvenlik.** Skill, talimat ve (varsa) betik içerir. Kaynağını bilmediğiniz skill'i yüklemeyin. Kurumsal tarafta yönetici kontrolü ve Anthropic'in beta güvenlik taraması için [Takım ve Admin](/wiki/temeller/takim-ve-admin/) sayfasına bakın. Şirket içinde hangi skill'lerin onaylı olacağını bir [şirket içi politikayla](/wiki/temeller/sirket-ici-politika/) belirlemek iyi bir pratiktir.

**KVKK.** Skill'in içine müşteri verisi ya da gizli bilgi gömmeyin; skill'ler şablon ve yöntem içindir. Veri aktarımı için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasına, Anthropic'in Türkiye'de ofisi ya da temsilcisi olmadığı bilgisi için [Türkiye'de Claude](/wiki/temeller/turkiyede-claude/) sayfasına bakın.

**Türkçe.** Skill'i Türkçe yazabilirsiniz; Claude Türkçe talimatı anlar. Çok sayıda dosyası olan karmaşık skill'lerde ilk denemeleri küçük tutun.

Ekibinizin kendi prosedürlerini skill'e çevirmesini birlikte yapmak isterseniz, [Zamana programları](/programlar/) iş kullanımına odaklıdır; Claude Code ya da API eğitimi vermez.
