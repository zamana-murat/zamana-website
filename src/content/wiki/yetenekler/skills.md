---
title: "Skills — Claude'un Uzmanlık Paketleri"
description: "Skills, Claude'a spesifik görevler için hazır uzmanlık kazandırır. Word, Excel, PowerPoint, PDF, satış, hukuk, pazarlama skill'leri tek komutla."
tags:
  - yetenekler
  - skills
  - cowork
  - uzmanlik
---

**Skills, Claude'a belirli görev tipleri için hazır uzmanlık kazandıran önceden inşa edilmiş talimat setleridir.** Cowork'te `/skill-adi` komutuyla çağrılır.

Kısa benzetme: Skills, Claude'un arkasında duran uzmanlık kılavuzlarıdır. `/docx` komutunu verdiğinizde Claude profesyonel bir Word belgesi uzmanının yaklaşımıyla davranır — yıllarca kurulmuş en iyi uygulamalar, yaygın hatalar, görsel kurallar bir anda aktif olur.

## Skills Nasıl Çalışır?

Bir skill çağrıldığında Claude, o skill'in ayrıntılı `SKILL.md` dosyasını okur. Bu dosya içinde:

- Uzman talimatları
- Dikkat edilecek noktalar
- Adım adım yapısı
- Yaygın tuzaklar ve çözümleri

yer alır. Skills, **deneme-yanılma ile kazanılmış bilgiyi metne çevirir** — çalışan Claude'u o görev tipinde nasıl optimize edeceğini tek tek keşfetmek zorunda kalmaz.

## Temel Skills (Hazır Gelen)

Claude Desktop'ta Pro veya Max aboneliğiyle doğrudan erişilebilen ana skill'ler:

| Skill | Ne Yapar |
|---|---|
| `docx` | Profesyonel Word belgeleri (.docx) oluşturur ve düzenler |
| `pptx` | PowerPoint sunumları (.pptx) oluşturur ve düzenler |
| `xlsx` | Excel tablolarını (.xlsx) oluşturur ve düzenler |
| `pdf` | PDF dosyaları oluşturur, okur, düzenler, birleştirir |
| `canvas-design` | Görsel tasarımlar, posterler, sanat — PNG / PDF olarak |
| `web-design` | Tam HTML/CSS/JS web siteleri — responsive |
| `ui-designer` | UI bileşenleri ve arayüz sistemleri |
| `foreign-trade` | Dış ticaret belgeleri (LOI, SPA, CIS, NCNDA...) |
| `schedule` | Zamanlanmış / tekrar eden otomatik görevler |

Bu liste en temel iş çıktıları için örtüşür — bir çalışanın ayda ürettiği çıktıların büyük kısmı bu dokuz skill ile kapsanır.

## Plugin Skills (Eklenti Üzerinden Gelen)

Plugins, ilgili skill'leri + connector'ları + subagent'ları tek pakette kurar. Yüklediğinizde bir dizi skill erişilebilir hale gelir:

| Skill | Plugin | Ne Yapar |
|---|---|---|
| `sales:call-prep` | Sales | Satış görüşmesi hazırlığı |
| `sales:account-research` | Sales | Şirket / kişi derinlemesine araştırma |
| `sales:draft-outreach` | Sales | Kişiselleştirilmiş outreach e-postaları |
| `marketing:content-creation` | Marketing | Blog, sosyal medya, e-posta içeriği |
| `marketing:campaign-plan` | Marketing | Tam kampanya brief'i |
| `operations:process-doc` | Operations | SOP, akış şemaları, RACI |
| `operations:runbook` | Operations | Adım adım operasyonel prosedürler |
| `legal:review-contract` | Legal | Sözleşme incelemesi ve redline |
| `legal:triage-nda` | Legal | Hızlı NDA sınıflandırması |
| `productivity:task-management` | Productivity | TASKS.md üzerinden görev takibi |
| `productivity:memory-management` | Productivity | İki-katmanlı hafıza sistemi |

Yeni plugin'ler düzenli olarak Anthropic tarafından ekleniyor. [Plugins & MCP](../mcp/baglanti-listesi/) sayfası güncel listeyi takip eder.

## Skill Nasıl Çağrılır?

Cowork'te iki yol vardır:

**Yol 1: Manuel çağrı.** Herhangi bir sohbette `/` yazın. Mevcut skill'ler listelenir. Hangisini istiyorsanız tıklayın veya adını doğrudan yazın:

```
/docx
/pptx
/foreign-trade
```

**Yol 2: Otomatik çağrı.** Claude, görevi tanıdığında skill'i kendiliğinden çağırır. Örneğin:

> *"Bu verilerden profesyonel bir Excel raporu hazırla"*

Claude `xlsx` skill'ini otomatik devreye alır. Siz komut vermezsiniz.

## Özel Skills — Kendi Şirketinize Özel

İleri kullanıcılar ve kuruluşlar **özel skill'ler** yaratabilir. Bir klasör, içinde `SKILL.md` dosyası — o dosyada şirketinize özel talimatlar. Yarattıktan sonra skill `/` ile tıpkı yerleşik skill'ler gibi kullanılabilir.

Özel skill oluşturma için `/skill-creator` skill'ini çağırın — yol gösterir.

**Zamana müşterilerinin yapabileceği örnekler:**

- `haftalık-rapor` — şirketin iç haftalık raporunun tam formatı, bölümleri, tonu önceden yüklü
- `teklif-yaz` — şirketin standart ticari şartları, fiyat formatı, ikna yaklaşımı
- `müşteri-mail` — şirketin e-posta ton kılavuzu ve imza formatı
- `yeni-personel-onboarding` — İK'nın yeni çalışan onboarding dokümantasyonunun birebir yapısı

Özel skill, bir ekibin yaptığı işin en tutarlı biçimde **her seferinde aynı kalitede üretilmesini** sağlar.

## Zamana'nın Yaklaşımı

Skills sihir değildir — **yapılandırılmış uzmanlığın metne çevrilmiş halidir**. Çalışan hâlâ görevi anlamak zorundadır; skill, Claude'un o görevi en yüksek seviyede yürütmesini sağlar.

Zamana eğitim programında çalışana üç şey öğretilir:

1. **Hangi skill hangi görev için?** — 9 temel + 11 plugin skill = 20 skill. Bir tablo, bir sayfa. Çalışan haftada bir bakıp refleksleştirir.
2. **Ne zaman çağrılır?** — Görevi başlamadan önce. "Bir Word raporu yazacağım" dedikten hemen sonra `/docx`. Claude'un varsayılan çıktısına razı olmayıp sonradan iyileştirmeye çalışmaktan çok daha verimli.
3. **Özel skill ne zaman yazılır?** — Aynı yapıyla bir görevi **üçüncü kez** yapıyorsanız, özel skill zamanı gelmiştir.

## Pratik Keşif Soruları

Eğitim oturumlarında çalışana sık sorulan sorular:

- **Skill kullanıp iyi bir çıktı aldığında:** *"Eğer şirketinin bu işi yaptığı özel yöntemi bir skill haline getirsek, nasıl görünürdü?"* → Özel skill tohumu atılır.
- **Bir görev tekrar ediyorsa:** *"Bu işi bir sonraki kez aynı kalitede yapmak için Claude'a ne söylemen gerekir?"* → SKILL.md'nin ilk taslağıdır.
- **Genel bir çıktıyla karşılaşıldığında:** *"Bu işi çağırdığında hangi skill devreye girdi? Girmediyse, ne olurdu?"* → Skill refleksini geliştirir.

## İlgili Sayfalar

- [Artifacts](artifacts/) — Skill'lerin ürettiği etkileşimli çıktılar
- [Cowork Modu](../araclar/cowork-modu/) — Skill'lerin yaşadığı ortam
- [MCP Bağlantı Listesi](../mcp/baglanti-listesi/) — Plugin'lerin içindeki connector'lar
- [CLAUDE.md Nedir?](../claude-md/nedir/) — Skill'lerin üzerine inşa edildiği kalıcı bağlam

