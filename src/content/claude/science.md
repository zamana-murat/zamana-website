---
title: "Claude Science: bilimsel araştırma için çalışma tezgâhı"
seoTitle: "Claude Science Nedir? Araştırmacılar İçin Uygulama"
description: "Claude Science, yaşam bilimleri araştırmacıları için analiz çalıştıran, veritabanı tarayan ve her adımı kayda geçiren beta uygulama. Planlar ve erişim."
eyebrow: "Uzmanlaşmış"
lead: "Claude Science, araştırmacıların analiz çalıştırdığı, veritabanlarını taradığı ve her sonucun hangi kodla üretildiğini izlediği bir uygulama. Yeni bir model değil, beta durumunda ve ücretli planlarda."
heroImage: "/images/claude/science/hero.webp"
heroAnimation: "science"
heroAlt: "Claude Science için Türkçe örnek animasyon: bir araştırmacı tek hücre verisinin kümelenmesini istiyor, analiz adımları çalışıyor, hücre tipi haritası çıkıyor ve şeklin hangi kodla üretildiği kayıt altında gösteriliyor. Veriler kurgusaldır."
availability: "Beta; macOS, Windows ve Linux'ta Pro, Max, Team ve Enterprise planlarında. Team ve Enterprise'ta önce yönetici etkinleştirir. Free'de yok"
sourceUrl: "https://claude.com/product/claude-science"
sourceTitle: "Claude Science (beta)"
related:
  - { label: "Skills (wiki)", href: "/wiki/yetenekler/skills/" }
  - { label: "Connectors (wiki)", href: "/wiki/araclar/connectors/" }
  - { label: "Planlar ve fiyatlar (wiki)", href: "/wiki/temeller/planlar/" }
  - { label: "Gizlilik ve KVKK (wiki)", href: "/wiki/temeller/gizlilik-kvkk/" }
  - { label: "Türkiye'de Claude (wiki)", href: "/wiki/temeller/turkiyede-claude/" }
order: 50
lastUpdated: "2026-10-06"
---

## Nedir?

Claude Science, Anthropic'in bilimsel araştırma için hazırladığı bir uygulamadır. Anthropic'in vurguladığı nokta şu: bu bir model değil. Planınızdaki aynı Claude modellerini kullanır; yeni olan, modellerin etrafındaki araçlardır: bilimsel veritabanı bağlantıları, hesaplama ortamı yönetimi ve her sonucun izlenebilir kaydı.

Sıradan bir yapay zeka asistanı biyoloji hakkında konuşabilir, ama bir analiz hattını çalıştıramaz, kümelerde iş yönetemez ve önceki oturumda ne yapıldığını takip edemez. Claude Science bu boşluğu kapatmak için tasarlanmış. Uygulama genomik, tek hücre, proteomik, yapısal biyoloji, kemoinformatik gibi alanlarda hazır uzman ayarlarıyla gelir; 60'tan fazla bilimsel veritabanına doğrudan bağlanabilir. Kaynak sayfa, uygulamanın yaşam bilimleri alanında her ana dal için hazırlandığını söylüyor.

Öne çıkan özellikler:

- **Kökeni izlenebilir çıktılar:** Her şekil, tablo ve defter (notebook), onu üreten tam kodu, ortamı, yapılan işin düz açıklamasını ve konuşmayı birlikte taşır. Aylar sonra bile aynı sonuç yeniden üretilebilir.
- **Kendi kendini denetleyen sonuçlar:** Arka planda çalışan bir gözden geçirici, yanlış atıfları, kaynağı bulunamayan rakamları ve altındaki koda uymayan şekilleri işaretler.
- **Düz dille şekil düzenleme:** Bir şeklin üzerine not yazarsınız, ajan o şekli üreten kodu okuyup doğrudan düzenler.
- **Hesaplama yönetimi:** Dizüstünüzde, Linux sunucunuzda, HPC kümenizde (SSH ile Slurm) veya Modal hesabınız üzerinden çalışır. Python ve R çekirdekleri oturum boyunca bellekte kalır.
- **Yerleşik bilimsel görüntüleyiciler:** Protein, hizalama, genomik iz, kimyasal yapı ve PDF'ler özgün biçimleriyle görülür.
- **Skills ve connectors:** Bir analiz hattını yeniden kullanılabilir skill olarak kaydedersiniz, laboratuvarınızın kendi araçlarını connector ile bağlarsınız.

![Claude Science uygulamasında bir hücre atlası şekli, yanında şekli üreten kod ve "Bu etiketler okunmuyor" düzeltme isteği (kurgusal örnek veri)](/images/claude/science/ornek-1.webp)

## Türk şirketinde ve kurumunda ne işe yarar?

Claude Science geniş bir ofis aracı değil, uzman bir araştırma ortamıdır. Aşağıdaki örnekler ürün özelliklerinden türetilmiştir, Türkiye'den bir müşteri hikâyesi değildir.

- **Üniversite ve araştırma enstitüleri:** Yaşam bilimleri laboratuvarlarında tek hücre RNA-seq verisini kümeleyip işaretlemek, her şekli üreten koda geri izlemek.
- **Biyoteknoloji ve ilaç girişimleri:** Biyoaktivite verisinde arama yapmak, kimyasal özellikleri hesaplamak, aday molekülleri karşılaştırmak. Kaynak sayfa bu alan için kaynaklı "endikasyon dosyaları" ve büyüyen bir skill kümesi içerdiğini belirtiyor.
- **Klinik ve tıbbi araştırma ekipleri:** Literatür taramalarından ilk tur, kaynaklı değerlendirme çıkarmak. Çıktıyı mutlaka uzman gözden geçirmeli.
- **Gıda, tarım veya biyoteknoloji Ar-Ge birimleri:** Genomik veya evrimsel analizde ortolog hizalama ve filogenetik ağaç çıkarma gibi tekrarlı işleri tek oturumda toplamak.

![Claude Science'ta kurgusal örnek veriden üretilmiş, doku etiketli hücre atlası ve hücre tipi belirteçleri grafiği](/images/claude/science/ornek-2.webp)

Uygulama yaşam bilimleri için ayarlı. Muhasebe, satış veya yönetim gibi genel iş kullanımı için [Claude'un genel sayfasına](/claude/) bakmak daha doğru olur. Zamana'nın eğitim programları iş kullanıcısına odaklıdır, bilimsel analiz iş akışı eğitimi vermez.

## Nasıl başlarsınız?

1. Planınızı kontrol edin: Pro, Max, Team veya Enterprise gerekir. Team ve Enterprise'ta yönetici uygulamayı önce etkinleştirmelidir.
2. Uygulamayı verinizin bulunduğu yere kurun: dizüstü bilgisayar, laboratuvar sunucusu, HPC giriş düğümü veya bulut sanal makinesi. Kurulum belgesi Anthropic'in dokümantasyonunda. macOS, Windows ve Linux desteklenir. Arayüze tarayıcınızdan bağlanırsınız.
3. Hesaplama için yerel çekirdek, SSH üzerinden Slurm kümeniz veya Modal hesabınızı bağlayın.
4. Küçük bir proje ve elinizdeki mevcut betikle başlayın. Uygulama mevcut Python, R ve kabuk betiklerinizi okuyup çalıştırabilir, yeniden yazmanızı gerektirmez.
5. Sonuçlarınızı yayından önce kendiniz doğrulayın. Arka plan denetçisi yardımcı olur, ama sorumluluk araştırmacıdadır.

## Hangi planda, nelere dikkat?

- **Durum ve erişim:** Beta. Kaynağa göre macOS, Windows ve Linux'ta Pro, Max, Team ve Enterprise planlarında kullanılabilir. Enterprise'ta SSO, SCIM, özel roller, kullanım analitiği, Compliance API ve uygulama özelliklerinin (connector, skill, uzak hesaplama, hafıza) yönetimi var. Yöneticilerin yaygınlaştırmadan önce belgeleri incelemesi öneriliyor.
- **Akademik ve kâr amacı gütmeyen indirim:** Dünyadaki akademik ve kâr amacı gütmeyen araştırma kurumlarındaki aktif bilim insanları için indirimli bir Team planı var; uygunluk grubun baş araştırmacısı üzerinden doğrulanıyor. Türkiye'deki kurumların uygunluğu için kaynakta ayrı bir ifade yok, başvurmadan önce Anthropic'ten teyit alın. Kâr amaçlı şirketler, sözleşmeli araştırma kuruluşları ve sanayi Ar-Ge ekipleri için Team ve Enterprise planları öneriliyor.
- **Veri gizliliği:** Uygulama sizin altyapınızda çalışır, ham veri kümeleri ve hesaplama yerelde kalır. Ancak komutlara dahil ettiğiniz içerik ve model cevapları Anthropic tarafından standart saklama kurallarıyla işlenir, yani yurt dışına gider. Hasta verisi veya kişisel veri içeren çalışmalarda KVKK ve etik kurul gereklilikleri önce gelir: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/). Ekibinize özel ihtiyaçlar için Anthropic satış ekibiyle görüşmeniz öneriliyor.
- **Yeni model değil:** Kullanılan modeller planınızdaki Claude modelleridir. Mevcut uzman araçların yerine geçmez, onların birlikte çalıştığı bir tezgâh olarak konumlanır.
- **Türkiye notları:** Ödeme ABD doları ile. Anthropic'in Türkiye'de ofisi veya temsilcisi yok, bkz. [Türkiye'de Claude](/wiki/temeller/turkiyede-claude/). Uygulamanın Türkçe arayüzü veya Türkçe destek hattı olup olmadığını kaynak belirtmiyor, bu yüzden doğrulanamadı.
