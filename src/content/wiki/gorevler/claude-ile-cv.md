---
title: "Claude ile CV Hazırlama ve Aday Değerlendirme"
seoTitle: "Claude ile CV Nasıl Hazırlanır? Adım Adım"
description: "Claude ile kendi CV'nizi hazırlama ve İK'da özgeçmiş değerlendirme: adım adım yöntem, hazır Türkçe promptlar, KVKK ve önyargı uyarıları."
tags:
  - gorevler
  - cv
  - insan-kaynaklari
  - kariyer
lastUpdated: "2026-11-09"
---

**Claude ile CV iki farklı biçimde kullanılır:** kendi CV'nizi yazmak ya da düzeltmek (aday olarak) ve gelen CV'leri ön değerlendirmek (İK olarak). Kendi CV'nizde işe yarayan yol şu: eski CV'nizi, başvuracağınız ilanı ve kendi başarılarınızı verin; Claude CV'yi ilana göre yeniden düzenler, zayıf cümleleri somut sonuçlara çevirir ve bir ön yazı taslağı hazırlar. İK tarafında Claude, CV'den özet çıkarmak ve ilan kriterlerine göre eşleştirme tablosu hazırlamak için kullanılabilir; ama aday hakkında nihai karar insanındır. Claude CV'ye sizin yaşamadığınız bir deneyim ya da beceri ekleyebilir; yazılan her cümle sizin için doğru olmalıdır. Aday verisi kişisel veridir ve KVKK kapsamındadır: başkalarının CV'sini yüklemeden önce hukuki dayanağı ve şirket politikasını kontrol edin. Bu rehber her iki taraf için adımları, dört hazır Türkçe promptu, tahmini süre kazancını ve en sık yapılan hataları, özellikle uydurulan deneyim ve önyargı risklerini içerir.

## Adım adım: Kendi CV'nizi Claude ile nasıl hazırlarsınız?

1. **Ham malzemeyi toplayın.** Eski CV, LinkedIn özeti, projeler, rakamlı başarılarınız. Düzensiz olabilir.
2. **İlanı yapıştırın.** Başvuracağınız pozisyonun metnini ekleyin.
3. **Hedefi söyleyin.** Pozisyon, sektör, kıdem, tek sayfa mı iki sayfa mı.
4. **Taslağı isteyin, sonra sorgulayın.** "Hangi cümleyi kanıtlayamam?" diye sorun; kanıtlayamayacağınız iddiaları çıkarın.
5. **Biçimi ayırın.** Metni Claude ile yazın, biçimlendirmeyi Word ya da Docs'ta yapın. ATS (başvuru takip sistemi) için sade yapı, tablo ve görsel olmadan.

Claude kişisel olarak sizi tanıdıktan sonra CV'yi güncel tutmak için bir [Claude Projesi](/wiki/araclar/projects/)ne kariyer notlarınızı koyabilirsiniz.

## Adım adım: İK'da CV'ler nasıl ön değerlendirilir?

1. **Önce kriterleri yazın.** Zorunlu ve tercih edilen nitelikler; hiç kimse için değerlendirme kriteri olmayan unsurlar (yaş, cinsiyet, medeni hâl, fotoğraf) ayrı tutulur.
2. **Anonimleştirin.** Mümkünse ad, adres, telefon, fotoğraf ve doğum tarihini çıkarıp CV'yi öyle yükleyin.
3. **Özet ve eşleştirme isteyin.** Claude her CV için kriter karşılama tablosu çıkarsın, puan yerine "gerekçeli gözlem" versin.
4. **Kararı insan verir.** Claude'un çıktısı mülakat listesini belirlemez, mülakatta sorulacak soruları belirlemeye yardım eder.
5. **Kayıt tutun.** Hangi araçla, hangi kriterle, kimin karar verdiğini belgeleyin.

Ayrıntı için [İnsan Kaynakları departmanı](/wiki/departmanlar/insan-kaynaklari/) sayfasına bakın.

## Hazır promptlar

### 1. CV'yi ilana göre uyarlama (aday)

Ne zaman: belirli bir ilana başvururken.

```
Rol: Deneyimli bir kariyer danışmanısın.

Görev: Aşağıdaki CV'mi ilana göre uyarla.

İlan: [ilan metni]
Mevcut CV: [yapıştır]

Kurallar:
- Yalnız CV'de ya da altına yazdığım ek bilgilerde bulunan deneyimleri kullan; yeni deneyim, unvan ya da rakam ekleme
- Eksik rakam gereken yerlerde [RAKAM EKLE] yaz, sonra bana sor
- Her deneyimi "ne yaptım, sonuç ne oldu" biçiminde yaz
- En çok iki sayfa, sade biçim (tablo ve görsel yok)
- Sonunda ilandaki hangi gereksinimlerin CV'de zayıf kaldığını listele
```

### 2. Başarıları güçlendirme (aday)

Ne zaman: CV'nizde "sorumluydum" gibi soluk cümleler varsa.

```
Aşağıdaki CV maddelerini yeniden yaz. Her madde: fiille başlasın, ne yaptığımı ve etkisini göstersin.

Yapamıyorsan rakam uydurma; bana şu soruyu sor: "Bu işin sonucu ölçülebilir mi, nasıl?"

Maddeler:
[yapıştır]
```

### 3. Ön yazı (aday)

Ne zaman: başvuru ön yazısı gerektiğinde.

```
Bu ilana başvuru için en çok 180 kelimelik bir ön yazı yaz.

İlan: [metin]
CV'mden öne çıkarmak istediğim 2 başarı: [A], [B]
Ton: samimi ama profesyonel, klişe giriş cümlesi ("Başvurmaktan memnuniyet duyarım") yok.
```

### 4. Aday CV'sinden mülakat sorusu (İK)

Ne zaman: anonimleştirilmiş bir CV'ye göre mülakat hazırlarken.

```
Aşağıda anonimleştirilmiş bir CV ve pozisyon kriterleri var.

Kriterler: [zorunlu ve tercih edilen nitelikler]
CV: [anonim metin]

Çıktı:
1. Her kriter için CV'deki kanıt (alıntı) ya da "CV'de görünmüyor"
2. Mülakatta netleştirilmesi gereken 5 soru
3. Dikkat edilecek boşluk ya da belirsizlik

Aday hakkında genel yargı ya da puan verme; yaş, cinsiyet, medeni hâl, uyruk gibi niteliklere dayalı çıkarım yapma.
```

## Ne kadar zaman kazandırır?

**Süre:** elle 2-3 saat (bir CV'nin ilana göre yeniden yazılması), Claude ile 20-40 dakika; İK'da 20 CV'nin ön okuması elle 2-3 saat, Claude ile 30-45 dakika (kontrol dahil). *Tahmini tipik aralık; kendi rakamınız için [ROI hesaplayıcı](/wiki/temeller/roi-hesaplayici/).*

## KVKK ve veri uyarısı

- **Aday verisi kişisel veridir.** Ad, iletişim bilgisi, eğitim, iş geçmişi, bazen sağlık ve aile bilgisi içerir. Başkasına ait CV'yi yapay zekaya vermek için hukuki dayanağınız ve adayın bilgilendirilmesi gerekir; işlemi aydınlatma metninizde belirtmeniz gerekebilir
- Mümkün olduğunca anonimleştirerek çalışın
- Otomatik karar sistemlerinde adayın itiraz hakkı gündeme gelir; son kararı insan verir ve kaydını tutar
- Şirket politikası: [Şirket içi yapay zeka politikası](/wiki/temeller/sirket-ici-politika/); KVKK ayrıntıları: [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/). Kendi CV'nizde yalnızca kendi verinizi paylaşırsınız; referans kişi bilgilerini onların iznine bağlı tutun.

## Sık hatalar ve sınırlar

- **Uydurma deneyim.** Claude CV'yi "güçlendirirken" olmayan bir sertifika, rakam ya da unvan ekleyebilir. Mülakatta açığa çıkar; güven kaybettirir.
- **Önyargı.** Claude, eğitim verisinden gelen önyargıları taşıyabilir. Aday değerlendirmesinde koruma sınıflarına dayalı çıkarım istemeyin ve sonuçları tutarlılık için örnekle sınayın.
- **Tek kriterle eleme.** Claude'un eşleştirmesi mülakat listesini otomatik belirlemek için kullanılmaz.
- **ATS uyumu.** Claude'un önerdiği anahtar kelimeler her başvuru sisteminde işe yaramaz; sade biçimi koruyun.
- **Taranmış CV.** Fotoğraf biçimindeki CV'de okuma hataları olabilir; metin seçilebilen sürümü verin.
- **Aynılaşma.** Herkes aynı kalıpla CV yazdırırsa metinler birbirine benzer. Kendi sesinizi bir paragrafla örnekleyin.

## İlgili sayfalar

- [İnsan Kaynakları departmanı](/wiki/departmanlar/insan-kaynaklari/), [Gizlilik ve KVKK](/wiki/temeller/gizlilik-kvkk/)
- [Claude ile PDF](/wiki/gorevler/claude-ile-pdf/), [Claude ile sözleşme taslağı](/wiki/gorevler/claude-ile-sozlesme-taslagi/)
- [Projects](/wiki/araclar/projects/), [Prompt kataloğu](/wiki/prompting/prompt-katalogu/)
