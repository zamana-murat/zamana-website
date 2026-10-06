---
title: "Claude Code: yazılım ekipleri için kodlama ajanı"
seoTitle: "Claude Code Nedir? Yazılım Ekipleri İçin Rehber"
description: "Claude Code, kod tabanınızı okuyan, dosya düzenleyen, komut çalıştıran ve test koşan kodlama ajanı. Hangi planda, kimler için, nasıl başlanır?"
eyebrow: "Ürün"
lead: "Claude Code, Anthropic'in yazılımcılar için geliştirdiği kodlama ajanı. Terminalde, IDE'de, masaüstünde, web'de ve Slack'te çalışır. Zamana programları bu aracı öğretmez, bu sayfa yalnızca tanıtım içindir."
availability: "Pro, Max, Team ve Enterprise planlarında; Free planda yok. Claude Console hesabıyla API fiyatından da kullanılır"
sourceUrl: "https://claude.com/product/claude-code"
sourceTitle: "Claude Code by Anthropic | AI Coding Agent, Terminal, IDE"
related:
  - { label: "Claude Desktop (wiki)", href: "/wiki/araclar/claude-desktop/" }
  - { label: "CLAUDE.md nedir? (wiki)", href: "/wiki/claude-md/nedir/" }
  - { label: "Alt ajanlar (wiki)", href: "/wiki/yetenekler/agents-subagents/" }
  - { label: "Planlar ve fiyatlar (wiki)", href: "/wiki/temeller/planlar/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
order: 20
lastUpdated: "2026-10-06"
---

## Nedir?

Claude Code, bir yazılım projesinin içinde çalışan bir kodlama ajanıdır. Sohbet penceresinde kod parçası üretmekten farkı şudur: projenizin dosyalarını kendisi okur, gerekli yerleri düzenler, komut satırında komut çalıştırır, testleri koşar ve sonucu size gösterir. Bir hata düzeltmesi, bir test paketi ya da günler süren bir geçiş (migration) işi verebilirsiniz. Siz yönü belirler ve çıktıyı gözden geçirirsiniz, o planı çıkarır, gerektiğinde soru sorar ve işi yürütür.

Nasıl çalıştığına dair kaynak sayfadaki örnek: çift tıklamada müşteriye iki kez ödeme çektiren bir hata. Claude Code sorunu yeniden üretir, kök nedeni bulur (her çağrıda yeni bir tekrar önleme anahtarı üretilmesi), düzeltmeyi yapar ve düğmeyi işlem sürerken devre dışı bırakır. Siz değişikliği inceler, onaylarsınız.

Claude Code şu yüzeylerde çalışır: terminal, VS Code (Cursor dahil) ve JetBrains eklentileri, Claude masaüstü uygulaması, web, iOS ve Android uygulaması, GitHub ve Slack. macOS, Linux ve Windows desteklenir. GitHub gibi araçlarla ve Git gibi komut satırı araçlarıyla çalışır, MCP sunucularıyla yeteneklerini genişletir.

## Zamana programlarıyla ilişkisi

Dürüst olalım: Zamana'nın eğitim programları iş kullanıcısına odaklıdır. Claude'u sohbette, Excel ve Word'de, Cowork'te ve bağlı araçlarda gündelik işe yerleştirmeyi öğretiriz. Claude Code ve API geliştirme programlarımızın kapsamında değil. Yazılım ekibiniz için Claude Code eğitimi arıyorsanız Anthropic'in kendi kaynakları daha doğru adres:

- Claude Code dokümantasyonu: [code.claude.com/docs](https://code.claude.com/docs)
- Claude Academy kursları ve eğitim videoları: [academy.claude.com](https://academy.claude.com)
- Anthropic'in "Introduction to agentic coding" ve "How Anthropic teams use Claude Code" yazıları, claude.com blogunda.

## Türk şirketinde ne işe yarar?

Aşağıdakiler araç özelliklerinden türetilmiş tipik örneklerdir, kaynak sayfadaki müşteri hikâyeleri değildir:

- **Yazılım evleri ve KOBİ'ler:** Yıllardır büyüyen bir ERP veya muhasebe entegrasyonunu yeni gelen bir geliştiriciye "bu depo ne yapıyor?" sorusuyla anlatmak. Kaynak sayfa, Claude Code'un kod tabanını saniyeler içinde haritalayıp açıklayabildiğini söylüyor.
- **Entegrasyon projeleri:** e-Fatura, e-Arşiv veya banka entegrasyonu gibi sıkıcı ve tekrarlı kodlarda taslak çıkarmak, testleri yazdırmak. Resmi servis kurallarını mutlaka siz doğrulayın.
- **Bakım ve geçiş işleri:** Eski bir kütüphane sürümünden yenisine geçiş, bağımlılık güncellemeleri gibi saatlerce süren işler. Claude Code importları takip eder, testleri koşar, bir şey bozulduğunda devam eder.
- **Destek ve operasyon ekipleri:** Gelen hata bildirimlerini ayıklayıp ilk teşhisi çıkarmak (Slack üzerinden de tetiklenebilir).
- **Küçük ekipte "ikinci çift göz":** Tek geliştiricinin olduğu şirkette yazılan kodu gözden geçirtmek. Yine de üretime çıkan her değişikliğin insan onayından geçmesi şarttır.

Claude Code kod yazmayan bir çalışanın yerine kullanacağı bir araç değildir. Kod yazmıyorsanız Claude'un [genel sayfasına](/claude/) ve sohbet, Excel, Word gibi iş araçlarına bakın.

## Nasıl başlarsınız?

1. Planınızı belirleyin: Claude Code, Pro, Max, Team ve Enterprise planlarının hepsinde dahildir. Kullanım kotası sohbetle ortaktır. Alternatif olarak Claude Console hesabıyla API fiyatından token harcayarak kullanabilirsiniz.
2. Claude Code'u indirin ve Claude (ya da Console) hesabınızla giriş yapın. Kurulum komutu kaynak sayfada tek satırdır, ayrıntıyı dokümantasyon verir.
3. Önce küçük, riskli olmayan bir işle deneyin: depoyu açıklatın, bir test yazdırın.
4. Projenize bir `CLAUDE.md` dosyası ekleyin; derleme komutlarınızı, kod standartlarınızı ve kurallarınızı Claude her oturumda buradan okur. Ayrıntı için [CLAUDE.md bölümü](/wiki/claude-md/nedir/).
5. Claude Code değişiklik yapmadan veya komut çalıştırmadan önce izin ister. Bu izinleri gevşetmeden önce ekip içinde kuralları netleştirin.

Kaynak sayfa şu yeni özellikleri duyuruyor: Projeler (masaüstünde birden çok oturumu gruplayıp denetleme), Pro, Max ve Team'de varsayılan "auto mode" (riskli komutları yakalayarak daha uzun süre çalışma), kendi altyapınızda çalışan ortamlar (herkese açık beta) ve oturum bağlamından canlı artifact üretme. Hepsini kullanmadan önce güncel dokümantasyona bakın, bu özellikler hızlı değişiyor.

## Hangi planda, nelere dikkat?

- **Planlar:** Free'de yok. Pro bireysel kullanım için, Max daha büyük kod tabanları ve yoğun kullanım için. Team ve Enterprise ekip yönetimi sunar. Güncel fiyatlar için [Planlar](/wiki/temeller/planlar/) sayfası. Kota bitince kullandıkça öde krediler veya API anahtarı devreye girer; haftalık limit rakamları yayımlanmıyor.
- **Uzun görevler kotayı hızlı tüketir.** Alt ajanlar ve çok ajanlı iş akışları çok sayıda token harcar, abonelik limitinden düşer.
- **Veri ve KVKK:** Claude Code yerelde çalışır ve doğrudan model API'leriyle konuşur, ancak kodunuz ve komut çıktılarınız model işlemesi için Anthropic'e gider, yani yurt dışına aktarılır. Team, Enterprise ve API'de girdi ve çıktılar varsayılan olarak eğitimde kullanılmaz; tüketici hesaplarında (Pro, Max) bu bir kullanıcı ayarıdır. Müşteri verisi, kişisel veri veya gizli anahtarları depoda tutuyorsanız önce şirket politikanızı oluşturun: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/).
- **Türkiye notları:** Ödeme ABD doları ile, Anthropic'in Türkiye'de ofisi veya temsilcisi yok. Ayrıntı: [Türkiye'de Claude](/wiki/temeller/turkiyede-claude/).
- **Yazılımcı olmayanlar için:** İş kullanıcısı odaklı eğitimden önce gündelik işlerde Claude'u verimli kullanmayı öğrenmek gerekiyorsa Zamana'nın [programlarına](/programlar/) bakabilirsiniz. Claude Code için ise yukarıdaki Anthropic kaynakları öncelikli.
