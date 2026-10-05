---
title: "Skills: Claude'un Uzmanlık Paketleri"
description: "Skills, Claude'a spesifik görevler için hazır uzmanlık kazandırır. Word, Excel, PowerPoint, PDF, satış, hukuk, pazarlama skill'leri tek komutla."
tags:
  - yetenekler
  - skills
  - cowork
  - uzmanlik
lastUpdated: "2026-10-05"
---

**Skills, Claude'a belirli görev tipleri için hazır uzmanlık kazandıran önceden inşa edilmiş talimat setleridir.** Cowork'te `/skill-adi` komutuyla çağrılır.

Kısa benzetme: Skills, Claude'un arkasında duran uzmanlık kılavuzlarıdır. `/docx` komutunu verdiğinizde Claude profesyonel bir Word belgesi uzmanının yaklaşımıyla davranır: yıllarca oluşmuş en iyi uygulamalar, yaygın hatalar ve görsel kurallar bir anda devreye girer.

## Skills Nasıl Çalışır?

Bir skill çağrıldığında Claude, o skill'in ayrıntılı `SKILL.md` dosyasını okur. Bu dosya içinde:

- Uzman talimatları
- Dikkat edilecek noktalar
- Adım adım yapısı
- Yaygın tuzaklar ve çözümleri

yer alır. Skills, **deneme-yanılma ile kazanılmış bilgiyi metne çevirir**; böylece o görev tipinde en iyi sonucu nasıl alacağınızı tek tek keşfetmek zorunda kalmazsınız.

## Temel Skills (Hazır Gelen)

Cowork'te hazır gelen ana skill'ler (skills özelliği Free dahil tüm planlarda vardır):

| Skill | Ne Yapar |
|---|---|
| `docx` | Profesyonel Word belgeleri (.docx) oluşturur ve düzenler |
| `pptx` | PowerPoint sunumları (.pptx) oluşturur ve düzenler |
| `xlsx` | Excel tablolarını (.xlsx) oluşturur ve düzenler |
| `pdf` | PDF dosyaları oluşturur, okur, düzenler, birleştirir |
| `canvas-design` | Görsel tasarımlar, posterler, sanat, PNG / PDF olarak |
| `web-design` | Tam HTML/CSS/JS web siteleri, responsive |
| `ui-designer` | UI bileşenleri ve arayüz sistemleri |
| `foreign-trade` | Dış ticaret belgeleri (LOI, SPA, CIS, NCNDA...) |
| `schedule` | Zamanlanmış / tekrar eden otomatik görevler |

Bu liste en temel iş çıktılarını kapsar; bir çalışanın ayda ürettiği çıktıların büyük kısmı bu dokuz skill ile karşılanır.

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

Yeni plugin'ler düzenli olarak ekleniyor. Örneğin 15 Eylül 2026'da Salesforce in Claude plugin'i (beta, 37 satış skill'i) çıktı: [haberi okuyun](/haberler/2026-09-15-salesforce-claude-icinde/). Eklenti ve bağlayıcıların toplandığı [Claude Marketplace](/haberler/2026-09-23-claude-marketplace/) de açıldı. Yukarıdaki skill adları Anthropic'in resmi plugin deposunda (`anthropics/knowledge-work-plugins`) yer alır. Bağlayıcı tarafı için [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/) sayfasına bakın.

## Rol Plugin'lerini Özelleştirme

Hazır plugin'ler (Sales, Finance, Legal, Marketing) **jenerik şablonlarla** gelir. Gerçek değeri, kendi şirketinize göre kişiselleştirdiğinizde ortaya çıkar. Cowork bunu konuşarak yapmanızı sağlar:

1. **Oturumu başlatın:** Customize → Plugins → ilgili plugin → **Customize**.
2. **Bilgi verin:** Claude araçlarınızı, iş akışlarınızı ve standartlarınızı sorar. Üç şeyi net verin:
   - **Araçlarınız:** Gerçek sistem adları (Salesforce, Snowflake, HubSpot...) ki skill'ler doğru connector'a bağlansın
   - **Ekip iş akışlarınız:** Varsayılanlar, terminoloji, eskalasyon kuralları
   - **Referans belgeler:** Bitmiş iş örnekleri, şablonlar, stil kılavuzları ki çıktı sizin standardınıza benzesin
3. **Değişiklikleri gözden geçirin:** Claude neyi değiştirdiğini ve plugin'in talimat dosyalarını gösterir. Bunlar düz metin dosyalardır, kurmadan önce okuyabilirsiniz.
4. **Kaydedin ve paylaşın:** Yerel kurun veya dosya, GitHub ya da organizasyon dağıtımıyla ekibe yayın.

**Pratik ipuçları:**

- Her şeyi baştan kapsamaya çalışmayın. Bir skill'i çalıştırın, düzeltilecek bir şey görünce **aynı oturumda** Claude'a söyleyin.
- Kalan jenerik içeriği bulmak için sorun: *"Bu plugin'de hangi placeholder'lar (doldurulmamış alanlar) kaldı?"*
- Organizasyon adminleri, özelleştirilmiş plugin'leri departmanlara tek tip kurulum olarak dağıtabilir.

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

## Özel Skills: Kendi Şirketinize Özel

İleri kullanıcılar ve kuruluşlar **özel skill'ler** yaratabilir. Bir klasör ve içinde şirketinize özel talimatlar taşıyan bir `SKILL.md` dosyası yeterlidir. Yarattıktan sonra skill `/` ile tıpkı yerleşik skill'ler gibi kullanılabilir.

Özel skill oluşturma için `/skill-creator` skill'ini çağırın, yol gösterir.

**Pratik özel skill örnekleri:**

- `haftalık-rapor`: şirketin iç haftalık raporunun tam formatı, bölümleri, tonu önceden yüklü
- `teklif-yaz`: şirketin standart ticari şartları, fiyat formatı, ikna yaklaşımı
- `müşteri-mail`: şirketin e-posta ton kılavuzu ve imza formatı
- `yeni-personel-onboarding`: İK'nın yeni çalışan onboarding dokümantasyonunun birebir yapısı

Özel skill, bir ekibin yaptığı işin en tutarlı biçimde **her seferinde aynı kalitede üretilmesini** sağlar.

## Pratik Yaklaşım

Skills sihir değildir, **yapılandırılmış uzmanlığın metne çevrilmiş halidir**. Çalışan hâlâ görevi anlamak zorundadır; skill, Claude'un o görevi en yüksek seviyede yürütmesini sağlar.

Üç pratik prensip:

1. **Hangi skill hangi görev için?**: Bu sayfadaki iki tabloda 9 temel ve 11 plugin skill'i, toplam 20 skill var. Haftada bir göz atmak, doğru skill'i hatırlamanızı kolaylaştırır.
2. **Ne zaman çağrılır?**: Görevi başlamadan önce. "Bir Word raporu yazacağım" dedikten hemen sonra `/docx`. Claude'un varsayılan çıktısına razı olmayıp sonradan iyileştirmeye çalışmaktan çok daha verimli.
3. **Özel skill ne zaman yazılır?**: Aynı yapıyla bir görevi **üçüncü kez** yapıyorsanız, özel skill zamanı gelmiştir.

## Pratik Keşif Soruları

Kendinize sık sorabileceğiniz sorular:

- **Bir skill ile iyi çıktı aldığınızda:** *"Şirketimizin bu işi yapma yöntemini bir skill haline getirsek nasıl görünürdü?"* → Özel skill'in tohumu atılır.
- **Bir görev tekrar ediyorsa:** *"Bu işi bir sonraki sefer aynı kalitede yapması için Claude'a ne söylemem gerekir?"* → Cevap, SKILL.md'nin ilk taslağıdır.
- **Çıktı genel ve sıradan kaldıysa:** *"Bu işte hangi skill devreye girdi? Girmediyse girseydi ne değişirdi?"* → Skill refleksini geliştirir.

## İlgili Sayfalar

- [Artifacts](/wiki/yetenekler/artifacts/): Skill'lerin ürettiği etkileşimli çıktılar
- [Cowork Modu](/wiki/araclar/cowork-modu/): Skill'lerin yaşadığı ortam
- [MCP Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): Plugin'lerin içindeki connector'lar
- [CLAUDE.md Nedir?](/wiki/claude-md/nedir/): Skill'lerin üzerine inşa edildiği kalıcı bağlam

