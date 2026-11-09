---
title: "Claude ile Sunum Hazırlama: Slayt, İçerik ve Tasarım"
seoTitle: "Claude ile Sunum Nasıl Hazırlanır? Adım Adım"
description: "Claude ile sunum hazırlama: slayt akışı, konuşmacı notu, PowerPoint eklentisi ve Claude Slides ile adım adım yöntem, hazır Türkçe promptlar ve sık hatalar."
tags:
  - gorevler
  - sunum
  - powerpoint
  - slayt
lastUpdated: "2026-11-09"
---

**Claude ile sunum hazırlamanın en iyi yolu, işi üç aşamaya bölmektir:** önce hikâye akışını (hangi slayt hangi mesajı taşıyor), sonra her slaytın içeriğini ve konuşmacı notunu, en son görünümü hazırlatın. Görünüm için üç yol var: Claude'un oluşturduğu .pptx dosyasını indirmek, PowerPoint içinde Claude eklentisini kullanmak (ücretli planlarda, genel kullanımda) ya da Claude Slides'ı denemek (Claude Design, Slides ve Docs 8 Ekim 2026'da betadan çıktı, Free dahil tüm planlarda açık). Claude fotoğraf ya da özgün görsel üretmez; grafik, tablo ve basit diyagramı yapabilir. İlk taslak dakikalar içinde gelir, ama sunumun sizin sesinizle konuşması için sayıları, örnekleri ve vurguyu siz düzeltmelisiniz. Gizli finansal rakamları ya da müşteri bilgilerini sunuma koymadan önce kullanım politikanıza bakın. Rehberde akış, slayt içeriği, analizden sunuma geçiş ve sadeleştirme için dört hazır Türkçe prompt, süre tahmini ve sık yapılan hatalar yer alır; hepsi iş kullanıcısı için, kod bilgisi gerektirmez.

## Hangi yüzeyi kullanmalıyım?

| Durum | Yol | Not |
|---|---|---|
| Sıfırdan taslak, akış fikri | claude.ai sohbeti | Ücretsiz de çalışır; çıktıyı metin ya da .pptx olarak alırsınız |
| Mevcut şablonunuzla çalışmak | PowerPoint eklentisi | Ücretli planlar; açık sunumu okur ve düzenler |
| Excel analizinden sunum | Excel ve PowerPoint eklentileri birlikte | Aynı konuşma uygulamalar arasında sürer, [Office ve Chrome](/wiki/araclar/office-ve-chrome/) |
| Görsel ağırlıklı tasarım | Claude Design / Slides | [Claude Design](/wiki/yetenekler/claude-design/) sayfasına bakın |
| Etkileşimli tek sayfa sunum | Artifacts | [Artifacts](/wiki/yetenekler/artifacts/) |

## Adım adım: Claude ile sunum nasıl hazırlanır?

1. **Amacı ve dinleyiciyi yazın.** "Yönetim kuruluna 10 dakika, karar isteyeceğim" ile "ekibe bilgilendirme" çok farklı sunumlardır.
2. **Önce yalnız akış isteyin.** Slayt başlıkları ve her slaytın tek cümlelik mesajı. Burada oynamak, sonradan tüm slaytları baştan yazmaktan ucuzdur.
3. **Akışı onaylayın, sonra içeriği isteyin.** Her slayta en çok 3-4 madde, konuşmacı notu ayrı.
4. **Veriyi verin.** Rakamları siz yapıştırın; Claude'a "rakam uydur" şansı bırakmayın.
5. **Dosyaya çevirtin.** "Bunu 8 slaytlık .pptx olarak hazırla" ya da PowerPoint eklentisinde doğrudan sunuma yazdırın.
6. **Gözden geçirin.** Slayt başına tek mesaj var mı, metin taşıyor mu, rakamlar kaynak tablosuyla uyuşuyor mu?

## Hazır promptlar

### 1. Sunum akışı

Ne zaman: boş sayfa karşısında kaldığınızda.

```
Rol: Kıdemli bir iş sunumu danışmanısın.

Görev: [konu] hakkında sunum akışı çıkar.

Dinleyici: [rol ve sayı, örn. 6 kişilik yönetim kurulu]
Süre: [dakika]
Sunum sonunda istediğim karar/aksiyon: [ne]

Çıktı: Slayt numarası | slayt başlığı (mesaj cümlesi biçiminde) | slaytta ne anlatılacak (1 cümle)
Kurallar: En çok [8] slayt. İlk slayt sorunu, son slayt talebi anlatsın. Başlıklar konu adı değil, sonucu söyleyen cümle olsun.
```

### 2. Slayt içeriği ve konuşmacı notu

Ne zaman: akışı onayladıktan sonra.

```
Onayladığım akışa göre 3. ve 4. slaytları yaz.

Her slayt için:
- Başlık (en çok 12 kelime)
- 3 madde (her biri en çok 12 kelime)
- Konuşmacı notu (60-80 kelime, konuşma dilinde)

Kullanacağın veri: [rakamları yapıştır]
Bu verilerin dışında rakam kullanma. Eksik bilgi varsa [BİLGİ GEREKLİ] yaz.
```

### 3. Analizi sunuma çevirme

Ne zaman: Excel'deki tabloyu yönetime özetlemeniz gerektiğinde.

```
Yüklediğim tablodan 5 slaytlık yönetim özeti çıkar.

Slayt 1: ana mesaj (tek rakamla)
Slayt 2-4: en önemli üç bulgu, her biri için uygun bir grafik önerisi
Slayt 5: öneri ve sonraki adım

Her grafiğin hangi sütunlardan çizileceğini yaz. Rakamları tablodaki gibi aynen kullan.
```

### 4. Mevcut sunumu sadeleştirme

Ne zaman: 40 slaytlık eski sunumu kısaltmanız gerekiyorsa.

```
Yüklediğim sunum [dakika] dakikaya sığmıyor. 

1. Mesajı bozmadan çıkarılabilecek slaytları gerekçesiyle listele
2. Birleştirilebilecek slaytları öner
3. Kısaltılmış akışı slayt başlıklarıyla ver

Slaytları kendin silme; önce öneriyi göster, ben onaylayayım.
```

## Ne kadar zaman kazandırır?

**Süre:** elle 3-4 saat (10 slaytlık yönetim sunumu), Claude ile 45-90 dakika (veri girme ve kontrol dahil). *Tahmini tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).* Kazanç taslak ve akış aşamasında olur; son görsel düzeltme çoğu zaman yine sizdedir.

## KVKK ve veri uyarısı

- Sunuma müşteri adı, çalışan bilgisi ya da tanınabilir kişisel veri koyacaksanız önce gerekliliğini düşünün; çoğu sunum kodlanmış ya da toplulaştırılmış veriyle aynı işi görür
- Henüz açıklanmamış finansal sonuçlar ve ihale bilgileri için şirketin hangi araca hangi veriyi vermeye izin verdiğine bakın: [Şirket içi yapay zeka politikası](/wiki/temeller/sirket-ici-politika/)
- Veri aktarımı ve saklama konusu için [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/)
- Sunumdaki görselleri kendiniz ekliyorsanız telif durumlarını kontrol edin

## Sık hatalar ve sınırlar

- **Hep aynı kalıp.** Her slayt "başlık + 3 madde" olursa sunum sıkıcı olur. "Slayt 5'i soru ile aç" gibi biçim talimatı verin.
- **Metin yoğunluğu.** Claude zaman zaman fazla yazar. Madde başına kelime sınırı koyun.
- **Uydurma rakam.** Veri vermezseniz Claude makul görünen bir rakam üretebilir. Yalnız sizin verdiğiniz sayıları kullanmasını isteyin.
- **Görsel beklentisi.** Claude fotoğraf ya da özel illüstrasyon üretmez; yer tutucu isteyin, görseli siz ekleyin.
- **Şablon uyumu.** Kurumsal şablon bozulabilir; Çıktıyı yazı tipi, kayma ve taşma açısından gözle kontrol edin; PowerPoint eklentisi açık sunumda çalıştığı için dosyayı sıfırdan üretmekten daha kontrollüdür, ama kusursuzluk garantisi yoktur.
- **Dosya boyutu.** Claude'un oluşturduğu dosyalar dosya başına 30 MB ile sınırlıdır.

## İlgili sayfalar

- [Claude ile Excel](/wiki/gorevler/claude-ile-excel/) ve [Claude ile rapor hazırlama](/wiki/gorevler/claude-ile-rapor/)
- [Office ve Chrome eklentileri](/wiki/araclar/office-ve-chrome/), [Claude Design](/wiki/yetenekler/claude-design/), [Artifacts](/wiki/yetenekler/artifacts/)
- [Pazarlama departmanı](/wiki/departmanlar/pazarlama/) ve [Liderlik](/wiki/departmanlar/liderlik/)
- [Prompt kataloğu](/wiki/prompting/prompt-katalogu/)
