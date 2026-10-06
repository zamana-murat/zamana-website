---
title: "Claude Plugins: Hazır İş Paketleri"
seoTitle: "Claude Plugins: Rol Bazlı Hazır Paketler"
description: "Plugin, skill, komut ve bağlantıları tek pakette toplar. Hukuk, satış, pazarlama için hazır olanlar var. Marketplace'te 300'den fazla plugin listeleniyor."
eyebrow: "Yetenek"
lead: "Plugin, bir işin gerektirdiği skill'leri, komutları ve bağlantıları tek pakette toplar. Tek tıkla kurarsınız; Claude o role özgü bir uzman gibi çalışmaya başlar."
heroAlt: "Claude Marketplace plugin listesi"
availability: "Claude Code ve Cowork için. Plan kapsamının ayrıntısı için Anthropic yardım sayfasına bakın; Salesforce eklentisi tüm ücretli planlarda (beta)."
sourceUrl: "https://claude.com/marketplace/plugins"
sourceTitle: "Plugins | Claude Marketplace"
related:
  - { label: "Skills (wiki)", href: "/wiki/yetenekler/skills/" }
  - { label: "MCP Nedir? Plugin ve connector ilişkisi (wiki)", href: "/wiki/mcp/nedir/" }
  - { label: "MCP Bağlantı Listesi, sektörel paketler (wiki)", href: "/wiki/mcp/baglanti-listesi/" }
  - { label: "Cowork Modu (wiki)", href: "/wiki/araclar/cowork-modu/" }
  - { label: "Hukuk departmanı için Claude (wiki)", href: "/wiki/departmanlar/hukuk/" }
order: 9
lastUpdated: "2026-10-06"
---

## Nedir?

Üç kavram sık karıştırılır, kısaca ayıralım:

- **Connector:** Claude'u bir uygulamaya bağlar (Gmail, Drive, Slack). Ayrıntı [Connectors sayfasında](/claude/connectors/).
- **Skill:** Claude'a bir işin nasıl yapılacağını öğreten talimat klasörüdür. Ayrıntı [Skills sayfasında](/claude/skills/).
- **Plugin:** Bunları bir araya getiren pakettir. Bir plugin, ilgili skill'leri, komutları ve gerekiyorsa bağlantıları birlikte getirir; tek seferde kurulur.

Anthropic'in sayfası bunu "araçları, skill'leri ve entegrasyonları tek tıkla kurulan paketler" diye anlatıyor. Plugin'ler Claude Code ve Cowork için hazırlanıyor. Cowork, Claude'un dosyalarınızla ve araçlarınızla çalıştığı, bilgisayar başında bir iş arkadaşı gibi görev üstlenen çalışma biçimidir; ayrıntısı [Cowork sayfasında](/wiki/araclar/cowork-modu/).

Marketplace'te bugün 341 plugin listeleniyor. Dikkat: listenin başındakilerin çoğu yazılım geliştiriciler içindir (örneğin kod inceleme, tarayıcı testi, GitHub, Vercel, dil sunucuları). İş kullanıcısı için asıl ilgi çekici olan, Anthropic'in bilgi çalışanları için hazırladığı rol paketleridir.

## Türk şirketinde ne işe yarar?

Anthropic'in resmî açık depoda yayımladığı bilgi çalışanı plugin'lerinin klasörlerinde şunlar var: hukuk, satış, pazarlama, operasyon, finans, insan kaynakları, müşteri desteği, ürün yönetimi, veri, üretkenlik, küçük işletme gibi roller. Aşağıdaki örnekler bu paketlerdeki gerçek skill'lerden esinlenir, senaryolar varsayımsaldır.

- **Hukuk:** Bir tedarikçi sözleşmesini incelemek (`legal:review-contract`) ya da gelen bir gizlilik sözleşmesini (NDA) sınıflandırmak (`legal:triage-nda`). Burada dikkat: bu paketlerin Türk hukukuna ve Türkçe sözleşme diline göre hazırlandığını Anthropic belgelemiyor. Çıktıyı kendi avukatınız gözden geçirmeli; Claude hukuki görüş vermez.
- **Satış:** Müşteri görüşmesi öncesi hazırlık (`sales:call-prep`), hesap araştırması (`sales:account-research`) ve ilk temas e-postası taslağı (`sales:draft-outreach`). İhracat odaklı bir ekip için potansiyel alıcıyı araştırıp Türkçe ya da İngilizce taslak çıkarmak.
- **Pazarlama:** İçerik üretimi (`marketing:content-creation`) ve kampanya planı (`marketing:campaign-plan`).
- **Operasyon:** Süreç belgesi (`operations:process-doc`) ve runbook (`operations:runbook`). Örneğin depo ya da sevkiyat sürecini adım adım yazdırmak.
- **Salesforce kullanan ekipler:** Anthropic'in "Salesforce in Claude" eklentisi (15 Eylül 2026'dan beri beta) 37 satış skill'i getiriyor ve tüm ücretli planlarda sunuluyor.

Bunların hiçbiri Türkiye'ye özel kurulmuş değildir. e-Fatura, KDV beyanı ya da Türk hukuku gibi yerel işler için paketi kendi şirketinize göre özelleştirmeniz gerekir; plugin içindeki talimatları düzenleyip kendi kurallarınızı ekleyebilirsiniz. Nasıl yapıldığı [wiki'deki Skills sayfasında](/wiki/yetenekler/skills/).

## Nasıl başlarsınız?

1. [Marketplace plugin sayfasını](https://claude.com/marketplace/plugins) açın ve rolünüze uygun bir plugin seçin. "Anthropic verified" rozetli olanlarla başlamak mantıklıdır.
2. Claude Code ya da Cowork içinde plugin'i kurun. Kurulumdan sonra skill'ler `plugin-adi:skill-adi` biçiminde çağrılır, ya da Claude görev uygunsa kendiliğinden kullanır.
3. İlk görevi gerçek ama düşük riskli bir işte deneyin: kendi geçmiş bir sözleşmenizi, bir satış görüşmesini ya da bir süreç belgesini.
4. Çıktıyı kendi şablonunuzla karşılaştırın; eksikleri plugin talimatına ekleyin.

Kendi plugin'inizi yazmak ya da Marketplace'e göndermek isterseniz, sayfada "Submit a plugin" bağlantısı var; Anthropic 25 Eylül 2026'da plugin geliştirici portalını da açtı.

## Hangi planda, nelere dikkat?

**Plan.** Plugin'ler Claude Code ve Cowork üzerinden çalışır; bu yüzden Cowork'ün kapsamı belirleyicidir (masaüstü uygulamasında ücretli planlarda). Her plugin'in plan kapsamını tek tek burada veremiyoruz; kurmadan önce Anthropic yardım merkezini kontrol edin. Plan ayrıntıları için [Planlar](/wiki/temeller/planlar/).

**Güvenlik.** Üçüncü taraf bir plugin, kodu ve talimatları getirir. Kaynağını bilmediğiniz plugin'i kurmayın. Anthropic, 6 Ağustos 2026'dan itibaren Enterprise tarafında skill ve plugin için beta bir güvenlik taraması sunuyor. Kurumsal kullanımda hangi plugin'lerin onaylı olacağına IT ya da yönetici karar vermeli: [Takım ve Admin](/wiki/temeller/takim-ve-admin/).

**Sayılara dikkat.** Marketplace blogu "2.000'den fazla bağlayıcı ve eklenti" diyor; bu connector ve plugin toplamıdır. Yalnız plugin sayısı bugün 341. İkisini birbirine karıştırmayın.

**KVKK ve dil.** Plugin'in bağladığı sistemlerdeki kişisel veri için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) çerçevesini uygulayın. Anthropic'in Türkiye'de ofisi ya da temsilcisi yok, ayrıntı [Türkiye'de Claude](/wiki/temeller/turkiyede-claude/) sayfasında. Zamana, Anthropic Partner'ıdır; abonelik ya da plugin satmaz. Ekibinize rol bazlı Claude kullanımını öğretmek için [Zamana programlarına](/programlar/) bakabilirsiniz.
