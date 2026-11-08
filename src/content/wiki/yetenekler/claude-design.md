---
title: "Claude Design: Claude ile Görsel İş Üretimi"
seoTitle: "Claude Design Nasıl Kullanılır? Slides ve Docs"
description: "Claude Design, Slides, Docs ve Dashboards ile konuşarak tasarım, sunum, belge ve canlı veri panosu üretin. Hangi planda açık, ne zaman Skills daha uygun?"
tags:
  - yetenekler
  - claude-design
  - tasarim
  - sunum
  - gorsel
lastUpdated: "2026-11-08"
---

**Claude Design, Claude ile birlikte görsel iş ürettiğiniz bir Anthropic Labs ürünüdür.** 17 Nisan 2026'da tanıtıldı. Metin yerine **tasarım, prototip, sunum ve one-pager** gibi görsel çıktıları konuşarak, adım adım birlikte oluşturmanızı sağlar.

> **16 Eylül 2026 güncellemesi:** Cowork ve sohbet tek Claude olunca **Claude Design** (tasarım), **Claude Slides** (sunum) ve **Claude Docs** (belge) ayrı bir ürüne girmeden **her konuşmanın içinden** kullanılabilir oldu. Taslağı doğrudan düzenler, belgeyi Word, PDF ya da Google Docs, sunumu PowerPoint olarak dışa aktarır ve çıktının paylaşılabilir bağlantısını oluşturabilirsiniz. Ayrıntı: [Cowork ve sohbet tek Claude oldu](/haberler/2026-09-16-cowork-ve-sohbet-tek-claude-oldu/).
>
> **8 Ekim 2026 güncellemesi:** Design, Slides ve Docs **betadan çıktı** ve Free dahil **tüm planlarda** kullanılabilir. Aynı gün iki yeni beta geldi: bağlı verinizden canlı pano kuran **Claude Dashboards** ve animasyonlu anlatım videosu üreten **Claude Motion** (aşağıda).

[Artifacts](/wiki/yetenekler/artifacts/) interaktif veri çıktıları üretirken, Claude Design **görsel tasarım** odaklıdır: bir fikri ekranda gösterilebilir, sunulabilir bir biçime dökmek için. Ürünün Türkçe tanıtımı için: [Claude Design](/claude/design/).

## Ne Üretir?

- **Tasarımlar:** görsel düzenler, konsept çalışmaları
- **Prototipler:** bir fikrin tıklanabilir / görülebilir taslağı
- **Sunumlar (slaytlar):** bir konuyu görsel olarak anlatan deck
- **One-pager'lar:** tek sayfalık özet / tanıtım dokümanları

İş profesyoneli için çekiciliği: tasarım aracı bilmeden, Claude'la konuşarak sunulabilir görsel çıktıya ulaşmak.

## Nasıl Çalışır?

Claude Design **işbirlikçi**dir. Siz niyeti söylersiniz, Claude bir taslak üretir, siz geri bildirim verirsiniz, birlikte iyileştirirsiniz. "Şu başlığı büyüt", "renkleri kurumsal kimliğimize çek", "bu slaytı ikiye böl" gibi yönlendirmelerle ilerler. Tek seferlik bir çıktı değil, üzerinde dönülen bir tasarım yüzeyidir.

## Sunum ve Slayt Üretimi

İş kullanıcısı için en sık senaryo budur. İhtiyacı sade dille tarif edersiniz, Claude tam bir slayt destesi taslağı üretir; şablon seçimi, biçimleme ve düzen otomatiktir.

**Süre:** 10 slaytlık bir deste için elle 3-4 saat, Claude ile 30-60 dk (kontrol ve düzeltme dahil). *Zamana gözlemi, tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

**Öne çıkanlar:**

- **Marka tutarlılığı:** Kurumsal renk ve yazı tipini baştan söylersiniz, Claude deste boyunca aynı stili korumaya çalışır. Sonucu kendi şablonunuzla karşılaştırıp düzeltin.
- **Doğrudan düzenleme:** Taslağı konuşmanın içinde düzenler, "şu slaytı ikiye böl" diyerek iterasyon yaparsınız.
- **Dışa aktarma ve paylaşım:** Sunumu **PowerPoint (PPTX)**, belgeyi **Word (DOCX), PDF, Markdown ya da Google Docs** olarak dışa aktarır, çıktının paylaşılabilir bağlantısını oluşturabilirsiniz.

**Örnek prompt'lar:**

- *"Karadeniz Gıda'nın 2026 üçüncü çeyrek sonuçları için 10 slaytlık bir deste hazırla: ciro, ürün güncellemeleri ve ekip başarıları bölümleriyle."*
- *"Yönetim kurulu için ürün yol haritamızın 15 slaytlık bir özetini yap."*
- *"Bir iş ortağıyla iki logolu 5 slaytlık teklif destesi oluştur."*

İş akışı: tarif et → Claude ilk desteyi üretir → slayt slayt düzenle (içerik ekle/çıkar, görsel/grafik ekle) → dışa aktar veya paylaş.

## Prototip ve UX

Ürün tasarımcıları ve yöneticileri için Claude Design, fikirden tıklanabilir prototipe hızlı geçiş sağlar. Bu taraf, iş profesyoneli müfredatımızın çekirdeğinden çok ürün/tasarım ekiplerini ilgilendirir, kısaca:

- **Hızlı özellik prototipi:** Mühendislik kaynağı ayırmadan önce somut bir taslak.
- **Tasarım review'ı:** Aynı anda 2-3 alternatif yaklaşım üretip karşılaştırma.
- **Kullanıcı akışı:** Tek ekran değil, baştan sona bir yolculuğu prototiplemek.

Örnek: *"Yeni kullanıcılar için 5 ekranlık bir onboarding akışı tasarla: veri kaynağı bağlama, panel yapılandırma ve ekip daveti."*

## Claude Design mı, Sunum Skill'i mi?

Karışmaması için:

| İhtiyaç | Tercih |
|---|---|
| Konuşarak görsel tasarlamak, prototip, konsept | **Claude Design** |
| Hazır içeriği `.pptx` / `.docx` dosyasına dökmek | [Skills](/wiki/yetenekler/skills/) (pptx, docx) |
| Bağlı veri kaynağından (Snowflake, BigQuery, Salesforce gibi) kendini güncelleyen pano | **Claude Dashboards** (beta, ücretli planlar) |
| Yüklediğiniz dosyadan filtrelenebilir interaktif sayfa | [Artifacts](/wiki/yetenekler/artifacts/) (düzenli yenileme için [zamanlanmış görev](/wiki/araclar/scheduled-tasks/)) |

Her biri farklı bir iş için vardır; biri diğerinin yerine geçmez.

## İş Kullanım Senaryoları

- **Satış:** bir teklifin görsel one-pager'ı, hızlı pitch deck taslağı
- **Pazarlama:** kampanya konsepti, sosyal medya görsel düzeni taslağı
- **Liderlik:** kurul sunumu iskeleti, strateji özet sayfası
- **Operasyon:** süreç akışının görsel anlatımı

Bunların hepsi sonra bir tasarımcıyla rafine edilebilir; Claude Design **ilk taslağı** hızlandırır.

> **Geliştiriciler için:** Tasarımı koda dökmek geliştirici işidir ve bu wiki'nin kapsamı dışındadır. Ayrıntı için [Claude Code](/claude/claude-code/) tanıtımına bakın.

## Erişim

Design, Slides ve Docs 8 Ekim 2026'dan beri **beta değil** ve **Free, Pro, Max, Ultra, Team ve Enterprise** planlarının hepsinde varsayılan olarak açık. Ayrı bir ücret gerektirmez; kullanım plan limitinizden düşer, limit dolunca sıfırlanana kadar bu araçlar da kullanılamaz.

- **Team ve Enterprise:** Owner ve Primary Owner, Organization settings > Artifacts'tan açar ya da kapatır. Enterprise'ta varsayılan açılış tarihi 15 Ekim 2026'ydı (HIPAA etkin kuruluşlar hariç; bu araçlar BAA kapsamında değil); Enterprise owner özel rollerle aracı belirli gruplara sınırlayabilir.
- **Bireysel planlar:** Ayar Settings > Capabilities altında.
- **Ayrı claude.ai/design sitesi kapanıyor:** Claude Design'ın bağımsız sürümü (claude.ai/design) **14 Aralık 2026**'da kapanır. Oradaki projeler o tarihe kadar yerinde kalır; Claude'a taşınma ücretli planlarda kademeli yapılıyor. Eski bağımsız sürümde çalışan ekipler önemli projelerini bu tarihten önce kontrol etmeli.

## Claude Slides ve Claude Docs

- **Claude Slides:** Konuşma içinde sunum taslağı üretir. Slaytları sohbette düzenler, PowerPoint olarak dışa aktarırsınız.
- **Claude Docs:** Konuşma içinde belge yazar. Doğrudan düzenler; Word, PDF, Markdown ya da Google Docs olarak indirirsiniz. Bir belgeyi Slides ile sunuma çevirmesini de isteyebilirsiniz.

Örnek: bir toplantı notunu yapıştırıp *"bundan yönetim kuruluna 8 slaytlık özet sunumu hazırla"* demek Slides'ın tipik kullanımıdır. Dosya biçimini komutla üreten [Skills](/wiki/yetenekler/skills/) (pptx, docx) ayrı bir seçenek olarak durmaya devam eder.

**Docs'un bilinen sınırları:** Yalnız yorum yapma yetkisi yok, grafikler kendiliğinden güncellenmez, silinen belge çöp kutusuna gitmez (kalıcı silinir), mobil uygulamadan paylaşım ayarı değiştirilemez. Kurumsal denetim için not: Docs içindeki etkinlik henüz Compliance API kayıtlarına girmiyor.

## Claude Dashboards ve Claude Motion (beta)

8 Ekim 2026'da aynı ailenin iki yeni üyesi beta olarak geldi.

**Claude Dashboards: canlı veri panosu.** Ayrı bir menü aramanıza gerek yok: Claude'u açıp ne istediğinizi sade dille yazarsınız, isteğe bağlı olarak önce bir veri platformu ya da CRM connector'ı bağlarsınız. Örneğin *"Bölge bazında aylık ciro ve tahsilat gecikmesini gösteren bir pano kur"* dersiniz; Claude bağlı veri kaynağınızdan yanıtı çeker, panoyu kurar ve veri değiştikçe güncel tutar. Her grafik verinin en son ne zaman yenilendiğini gösterir; bir sayıya tıklayınca arkasındaki sorguyu görürsünüz, Claude'a o sayıyı açıklatabilirsiniz.

- **Veri kaynağı:** Amazon Redshift, BigQuery, ClickHouse, Databricks, Snowflake gibi veri platformları ve Salesforce gibi CRM'ler; diğer [connector](/wiki/araclar/connectors/)'larla da çalışır. Logo, Mikro gibi yerli ERP'ler için hazır bağlantı yok, bu sistemlerde veri yine dışa aktarılan dosya üzerinden gelir ([Türk İş Araçları](/wiki/temeller/turk-is-araclari/)).
- **Plan:** ücretli planlarda (Pro, Max, Ultra, Team, Enterprise) beta. Enterprise'ta varsayılan kapalı, yönetici Organization settings > Artifacts'tan açar.
- **Paylaşım:** Panoyu Amplitude, Grafana, Hex, Mixpanel, PostHog, Sigma gibi BI araçlarına gönderebilirsiniz (Looker, Tableau, monday.com "yakında"). Yönetici izin verirse kuruluş dışına ya da bağlantıya sahip herkese paylaşılır; müşteri ve kişisel veri içeren panolarda bu izni dar tutun ([Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/)).
- **Ne değildir:** Hızlı soruya hızlı pano içindir; şirketin onaylı, denetlenen raporlama sisteminin yerine geçmez. Yönetime gidecek rakamı kaynağında doğrulayın.

**Süre:** haftalık satış özet panosunu elle hazırlamak 2-3 saat, Claude Dashboards ile 20-40 dakika (veri bağlıysa, kontrol dahil). *Tahmini tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

**Claude Motion: animasyonlu anlatım.** Bir rapordan, veriden ya da görselden kısa video gibi oynayan animasyonlu anlatım üretir (ör. çeyrek sonuçlarını anlatan 60 saniyelik animasyonlu grafik). Video üretim modeli kullanmaz; Claude metni, grafiği ve şekilleri hareketlendiren kodu yazar, bu yüzden yapay zekâ üretimi insan ya da görüntü yoktur ve kelime, sayı, zamanlama sonradan düzenlenebilir. MP4 olarak indirilir. Başlatmak için mesaj kutusuna `/motion` yazıp çıkan Motion seçeneğiyle istediğiniz animasyonu tarif edersiniz; editörde ya da Claude'a söyleyerek değiştirir, sonra indirirsiniz. **Yalnız Team ve Enterprise'ta beta**; Enterprise'ta Dashboards ve Motion varsayılan kapalıdır, yönetici Organization settings > Artifacts'tan açar.

## İlgili Sayfalar

- [Claude Design (ürün tanıtımı)](/claude/design/): Ürünün Türkçe tanıtımı
- [Artifacts](/wiki/yetenekler/artifacts/): İnteraktif veri çıktıları
- [Skills](/wiki/yetenekler/skills/): `.pptx` / `.docx` dosya üretimi
- [Planlar](/wiki/temeller/planlar/): Hangi planda dahil
- [Build live dashboards and animate explainers with Claude](https://www.claude.com/resources/articles/dashboards-and-motion) (Anthropic, 8 Ekim 2026): Dashboards ve Motion duyurusu
- [Cowork ve Sohbet Tek Claude Oldu](/haberler/2026-09-16-cowork-ve-sohbet-tek-claude-oldu/): Design, Slides ve Docs'un geldiği duyuru
