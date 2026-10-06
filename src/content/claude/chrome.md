---
title: "Claude for Chrome: Tarayıcınızdaki Yardımcı"
seoTitle: "Claude for Chrome: Tarayıcıda İş Yapan Claude"
description: "Claude for Chrome, giriş yaptığınız siteleri okur, tıklar ve form doldurur. Hangi planda, nasıl kurulur, Türkiye'deki iş örnekleri ve güvenlik notları."
eyebrow: "Eklenti"
lead: "Claude for Chrome, açık sekmenizdeki sayfayı okur, bağlantılara tıklar, form doldurur ve sonunda kararı size bırakır. API'si olmayan portallar ve iç araçlar için biçilmiş kaftan."
heroImage: "/images/claude/chrome/hero.webp"
heroAnimation: "chrome"
heroAlt: "Tarayıcı yan panelinde Claude, tedarikçi portalındaki son 3 faturayı takip tablosuna işliyor ve kaydetmeden önce kullanıcıdan onay istiyor"
availability: "Tüm ücretli planlarda (Pro, Max, Team, Enterprise); Free'de yok. Yalnız masaüstü Google Chrome."
sourceUrl: "https://claude.com/claude-in-chrome"
sourceTitle: "Claude in Chrome: A helping hand across all your tabs"
related:
  - { label: "Office ve Chrome'da Claude (wiki)", href: "/wiki/araclar/office-ve-chrome/" }
  - { label: "Computer Use (wiki)", href: "/wiki/yetenekler/computer-use/" }
  - { label: "Cowork Modu (wiki)", href: "/wiki/araclar/cowork-modu/" }
  - { label: "MCP Güvenliği (wiki)", href: "/wiki/mcp/guvenlik/" }
  - { label: "Claude in Chrome genel kullanıma açıldı (haber)", href: "/haberler/2026-08-26-claude-in-chrome-genel-kullanima-acildi/" }
order: 50
lastUpdated: "2026-10-06"
---

## Nedir?

Claude for Chrome, tarayıcınıza eklediğiniz küçük bir uzantıdır. Claude, oturum açtığınız sayfayı okur; sonra sizin adınıza tıklar, yazar, formları doldurur. Siz her adımı izlersiniz ya da başka işe geçip Claude'un arka planda bitirmesini beklersiniz.

Asıl değeri, **API'si olmayan web'e** ulaşabilmesidir. Eski tip tedarikçi portalları, şirket içi yönetim panelleri, fatura sistemleri: bunlara hazır bir bağlayıcı (connector) yoktur. Claude orada, sizin zaten sahip olduğunuz girişle ve önünüzdeki sekmede çalışır. Aynı pencereye başka sekmeler sürüklerseniz hepsinde birlikte çalışabilir.

Yan panel artık tam bir Claude Cowork oturumu çalıştırıyor. Daha önce hazırladığınız skill'ler, eklentiler ve connector'lar panelde hazır gelir, tarayıcıda ayrıca kurulum yapmazsınız. Konuşmalar hesabınıza kaydolur: Chrome'da başlayıp masaüstü ya da mobil uygulamada devam edebilirsiniz.

26 Ağustos 2026'da genel kullanıma açıldı, artık beta değil. Ayrıntı için [haber sayfamıza](/haberler/2026-08-26-claude-in-chrome-genel-kullanima-acildi/) bakabilirsiniz.

## Türk şirketinde ne işe yarar?

Aşağıdaki örnekler varsayımsaldır; kendi iş akışınıza göre uyarlayın.

- **Tedarikçi ve bayi portalları:** Bir tedarikçinin sipariş portalında son üç ayın sipariş ve fatura kalemlerini tek tek açıp tabloya dökmek. Dışa aktarma düğmesi yoksa bile iş görür. Sonucu Excel'e çevirmek için Claude Cowork ile birlikte kullanılabilir.
- **İhracat ve fiyat araştırması:** Rakip ve alıcı sitelerini gezip fiyat, özellik ve koşulları karşılaştırma tablosuna toplamak; ardından Cowork ile yönetim toplantısı için sunuma çevirmek. Kaynağın kendi örneği de bu yönde: rakip sitelerinden fiyat çekip karşılaştırma sunumu çıkarmak.
- **Satış operasyonu:** Takvimdeki görüşmeleri okuyup katılımcıları CRM'deki kişilerle eşleştirmek, her görüşme için kayıt taslağı hazırlamak. Siz not eklersiniz, onaylamadan hiçbir şey oluşturulmaz.
- **Muhasebe ve mali işler:** Portalda duran gelen fiyat teklifleri, ekstreler ya da fatura listelerini okuyup özet tablo çıkarmak. Kayıt değiştiren işlemleri (ödeme, beyan) Claude'a bırakmayın; yalnız okuma ve derleme işlerinde başlayın.
- **Yönetici asistanlığı:** Her akşam takvimi ve ilgili e-posta yazışmalarını tarayıp ertesi gün hazırlık gerektiren toplantıları işaretletmek. Google Drive'da dosya düzenlemek, yinelenenleri ve eski dosyaları gözden geçirmeniz için listelemek de aynı türden bir iş.

![Claude'un yan panelde bir tedarikçi portalındaki aylık ekstreyi okuyup ay sonu kapanışını hazırlaması](/images/claude/chrome/dashboard.webp)

## Nasıl başlarsınız?

1. Google Chrome masaüstü sürümünde Chrome Web Store'dan Claude uzantısını ekleyin.
2. Claude hesabınızla giriş yapın (ücretli bir plan gerekir).
3. Yapmak istediğiniz işin olduğu sayfada yan paneli açın ve ne istediğinizi yazın.
4. Başlangıçta güvendiğiniz siteleri ve iyi bildiğiniz iş akışlarını seçin.
5. Çalışma biçimini belirleyin. İsterseniz Claude, her adımı onayınızı beklemeden ilerler; bu modda eylemi yapmadan önce ayrı bir güvenlik denetimi riski ve sayfaya gizlenmiş talimatları gözden geçirir. Daha sıkı kontrol istiyorsanız **İzinler (Permissions) Moduna** geçip erişimi site site verirsiniz. Onayladığınız yere Claude giremez.

Claude Cowork'e artık yerleşik bir tarayıcı da geldi: kurulum gerektirmez ve kendi gezinmenizden tamamen ayrıdır. Chrome uzantısını zaten kullanıyorsanız o varsayılan kalır; ayarı Ayarlar, Cowork, Tercih edilen tarayıcı (Preferred browser) altından değiştirirsiniz.

![Claude'un yan panelde haftalık takvimi gözden geçirip oda gereken toplantılara uygun oda araması](/images/claude/chrome/calendar.webp)

## Hangi planda, nelere dikkat?

**Plan.** Pro, Max, Team ve Enterprise. Free planda yok. Yalnız **masaüstü Google Chrome** desteklenir; Edge, Brave gibi diğer Chromium tarayıcılarda ve mobilde çalışmaz.

**Güvenlik.** Web'de çalışan her yapay zekanın ortak riski, sayfaya gizlenmiş talimatla yönlendirilmeye çalışılmasıdır (prompt injection). Anthropic koruma katmanları kurduğunu ve gerçek saldırılarla test ettiğini söylüyor; ama kendi sayfasında da bunların kusursuz olmadığını, Claude'un yanlış şey yapabileceğini açıkça yazıyor. Satın alma gibi geri dönüşü olmayan adımlarda Claude durup size sorar. Anthropic'in önerisi: bankacılık, sağlık kayıtları ve paylaşmayacağınız şifrelerle ilgili işlerde kullanmayın, Claude'un onay isteklerini dikkatle okuyun, beklenmedik davranışta durup inceleyin. Test sonuçları ve ayrıntı için [Office ve Chrome sayfası](/wiki/araclar/office-ve-chrome/) ile [MCP Güvenliği](/wiki/mcp/guvenlik/) sayfasına bakın.

**Yönetici kontrolü.** Team ve Enterprise'ta yöneticiler uzantıyı kuruluş genelinde açıp kapatabilir, izinli ve yasaklı site listeleri belirleyebilir.

**Veri ve KVKK.** Claude'un okuduğu sayfa içeriği Anthropic'e gider. Müşteri ya da çalışan verisi içeren portallarda önce [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/) sayfasını okuyun ve şirket politikanıza bakın. Ödeme USD ile yapılır; Türkiye'de Anthropic ofisi ya da temsilcisi yoktur, ayrıntısı [Türkiye'de Claude](/wiki/temeller/turkiyede-claude/) sayfasında.

**Beklenti.** Türkçe arayüzlü sitelerde çalışıp çalışmadığı konusunda Anthropic'in ayrı bir belgesi yok; kendi portallarınızda küçük bir deneme yapıp sonucu kontrol edin.

Zamana'nın programları iş kullanımına odaklıdır; ekibinizin bu tür araçları günlük işe oturtması için [programlarımıza](/programlar/) göz atabilirsiniz.
