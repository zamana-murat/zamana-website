---
title: "Claude for Microsoft 365: Excel, PowerPoint, Word, Outlook"
seoTitle: "Claude for Microsoft 365: Excel, Word, Outlook"
description: "Claude, Excel, PowerPoint, Word ve Outlook'un içinde çalışır. Hangi planda, ne işe yarar, Türkiye'deki iş örnekleri ve Teams hakkında dürüst not."
eyebrow: "Eklenti"
lead: "Claude, Excel, PowerPoint, Word ve Outlook'un yan panelinde çalışır. Gelen kutusunda başlayıp sunumda bitirirsiniz; aradaki bağlamı Claude hatırlar."
heroImage: "/images/claude/microsoft-365/hero.webp"
heroAnimation: "microsoft-365"
heroAlt: "Claude yan panelinde tek konuşma: Excel'de bölgelere göre değişim hesaplanıyor, PowerPoint'e özet slayt ekleniyor, Outlook'ta gönderilmeyen bir e-posta taslağı hazırlanıyor"
availability: "Excel, PowerPoint ve Word tüm ücretli planlarda genel kullanımda; Outlook tüm ücretli planlarda beta. Free'de yok."
sourceUrl: "https://claude.com/claude-for-microsoft-365"
sourceTitle: "Claude for Microsoft 365: Work without the window shuffle"
related:
  - { label: "Office ve Chrome'da Claude (wiki)", href: "/wiki/araclar/office-ve-chrome/" }
  - { label: "Connectors (wiki)", href: "/wiki/araclar/connectors/" }
  - { label: "Slack ve Teams Entegrasyonu (wiki)", href: "/wiki/araclar/slack-teams-entegrasyon/" }
  - { label: "Claude vs Copilot (wiki)", href: "/wiki/temeller/claude-vs-copilot/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
order: 51
lastUpdated: "2026-10-06"
---

## Nedir?

Çoğu iş gün boyu aynı birkaç uygulamada yapılır: bir Excel dosyası, bir sunum, bir Word belgesi, gelen kutusu. Claude for Microsoft 365, Claude'u bu uygulamaların **içine** yan panel olarak yerleştirir. Dosyayı sohbete kopyalayıp sonucu geri yapıştırmanız gerekmez.

- **Excel:** Herhangi bir hücre hakkında soru sorarsınız, varsayımları formülleri bozmadan güncellersiniz, sıfırdan model kurdurursunuz.
- **PowerPoint:** Slaytları kendi şablonunuzda hazırlar, seçtiğiniz bölümü düzenler, yerel (native) grafik ve diyagram üretir.
- **Word:** Değişiklikleri izleme (tracked changes) ile düzenler, yorum dizilerine yanıt verir, içeriği şirketinizin stillerine göre günceller.
- **Outlook (beta):** Gelen kutusunu tek istekle ayıklar, yanıt taslakları hazırlar ve takvimlerde ortak boşluk bulur.

En önemli fark, **tek bir konuşmanın uygulamalar arasında sürmesidir.** Outlook'ta başladığınız bağlam Word'e, oradan Excel'e ve PowerPoint'e taşınır. Birini değiştirdiğinizde açık diğer dosyalar yetişir. Panele bir PDF ya da belge bıraktığınızda Claude onu açık dosyanızla birlikte okur ve diğer uygulamalarda da kullanır. İşi doğru yaptığınız bir süreci skill olarak kaydedersiniz; ekip aynısını dört uygulamada kullanır. Konuşarak (dikte) yazmak ve connector'lardan veri çekmek de panelden yapılır.

## Türk şirketinde ne işe yarar?

Örnekler varsayımsaldır; kendi akışınıza göre uyarlayın.

- **İhracat teklifi:** Alıcıdan gelen talep e-postasını Outlook'ta açın, Word'de firma şablonunuzla teklif metnini başlatın, fiyat tablosunu Excel'de kurdurun, aynı bağlamla müşteriye gidecek kısa sunumu PowerPoint'te çıkartın. Her adımda önceki adımın bilgisi hazırdır.
- **Aylık yönetim raporu:** Mali işler ekibi Excel'deki gerçekleşen/bütçe farklarını Claude'a analiz ettirir, en sapan kalemleri işaretletir, sonucu yönetim kurulu sunumuna çevirtir. Rakamları sunumdan önce mutlaka kendiniz doğrulayın.
- **Sözleşme revizyonu:** Hukuk ya da satın alma, Word'deki sözleşmeyi değişiklikleri izleme açıkken Claude'a düzenletir. Her değişiklik görünür kalır, kabul ya da reddi sizin elinizdedir.
- **Satış e-postaları:** Sabah Outlook'ta "önemli olanları ayıkla, ilk üçüne taslak hazırla" demek. Taslaklar yazma penceresinde bekler, siz okuyup gönderirsiniz.
- **KOBİ ofis işleri ve yönetici asistanlığı:** Kurumsal kimliğe uygun slayt şablonu ve başlık stilleriyle tutarlı belgeler üretmek. Kaynaktaki bir müşteri örneğine göre, yöneticinin eski yazışmalarından bir üslup rehberi çıkarıp asistanların e-postaları yöneticinin diliyle hazırlaması da mümkün.

## Nasıl başlarsınız?

1. Ücretli bir Claude planınız olduğundan emin olun (Pro, Max, Team ya da Enterprise).
2. Excel, PowerPoint ve Word için "Microsoft 365 için yükle" bağlantısından, Outlook için ayrı olan "Outlook için yükle" bağlantısından eklentileri kurun. Kurumsal Microsoft 365'te IT yöneticisinin eklenti kurulumuna izin vermesi gerekebilir.
3. Claude hesabınızla giriş yapın. Bulut sağlayıcınız üzerinden bağlanmak istiyorsanız, Microsoft Foundry, Amazon Bedrock ya da Google Cloud Vertex AI kimlik bilgileriyle de bağlanabilirsiniz.
4. Önce kendi şablonlarınız üzerinde küçük bir iş deneyin: bir slayt, bir bölüm, bir tablo.

Güvenlik tasarımı şöyle: her düzenleme gözden geçirilebilir. Word'de değişiklikleri izleme, Excel'de vurgulanan hücreler, Outlook'ta gönderilmeyi bekleyen taslaklar. Siz onaylamadan hiçbir şey gönderilmez ya da kaydedilmez. Claude e-postayı sizin görmeden göndermez; taslak ve takvim daveti Outlook'un normal yazma penceresinde sizi bekler.

## Hangi planda, nelere dikkat?

**Plan.** Excel, PowerPoint ve Word tüm ücretli planlarda genel kullanımda (GA); Outlook tüm ücretli planlarda beta. Free planda yok. Outlook beta olduğu için önemli yazışmalarda taslağı mutlaka okuyun.

**Teams hakkında dürüst not.** Teams içinde Claude'un resmi bir uygulaması yok. Teams'i Claude'a bağlamanın yolu ayrı bir şey olan **Microsoft 365 connector'ıdır**: SharePoint, OneDrive, Outlook ve Teams sohbet ve kanal mesajlarında arama yapar, yazma araçlarıyla Teams mesajı da gönderebilir (yönetici tek tek açıp kapatabilir). Team ve Enterprise'ta önce kuruluş sahibi etkinleştirir. Eklenti Claude'u uygulamanın içine koyar, connector ise Claude'un verilerinize ulaşmasını sağlar; ikisi birlikte kullanılabilir. Ayrıntı için [Slack ve Teams](/wiki/araclar/slack-teams-entegrasyon/) sayfasına bakın.

**Excel'in Türkçe sürümü.** Türkçe Excel'de formül adları ve ayraçlar farklıdır. Kaynakta bu konuda bir açıklama yok; üretilen formülleri kendi sürümünüzde mutlaka deneyin.

**Veri ve KVKK.** Açık dosyanızın içeriği Claude'a gider. Müşteri ya da çalışan verisi içeren dosyalar için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasını okuyun. Türkiye'de Anthropic ofisi ya da temsilcisi yoktur ([Türkiye'de Claude](/wiki/temeller/turkiyede-claude/)); ödeme USD ile yapılır. Kurumsal tarafta bulut sağlayıcı üzerinden bağlanma seçeneği, veri yönetişimi için BT ekibinizle konuşmaya değer bir yoldur.

Zamana'nın programları, ekibinizin bu araçları günlük işe oturtması içindir; Claude Code ya da API öğretmeyiz. [Programlarımıza](/programlar/) bakabilirsiniz.
