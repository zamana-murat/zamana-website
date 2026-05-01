---
title: Prompting Temel İlkeleri — İyi Bir Promptun Anatomisi
description: "Claude'a soru sormanın yapısı. Rol, bağlam, görev, format, kısıtlar ve iterasyon. Prompt yazımı çoğu kişinin düşündüğünden daha kurallıdır."
tags:
  - prompting
  - temel
  - prompt-anatomisi
---

Prompting, Claude'la çalışırken en öğretilebilir beceridir. Ve en çok hata yapılan yerdir.

Çoğu kişi Claude'la başarısız olur, çünkü **Google'a sorar gibi soruyor**: kısa, anahtar kelime bazlı, bağlamsız. İyi bir prompt bunun zıttıdır — kağıda dökülmüş yapılandırılmış düşüncedir.

Bu sayfa, her iş profesyonelinin günlük promptlarına uygulayabileceği beş temel bileşeni anlatır.

## Bir Promptun Beş Bileşeni

### 1. Rol — Claude'a Kim Olduğunu Söyleyin

Claude'un hangi uzmanlıkla yaklaşmasını istediğinizi belirtin.

> *"Deneyimli bir B2B satış profesyonelisiniz..."*
> *"İş hukukunda uzmanlaşmış, Türk İş Kanunu'na hakim bir avukatsınız..."*
> *"Kurumsal bir Cowork toplantısı moderatörüsünüz..."*

Rol, Claude'un cevabın tonunu, derinliğini ve odağını belirler. Boş bırakırsanız "genel bir asistan" gibi davranır — cevaplar pastel ve ortalama olur.

### 2. Bağlam — Arka Plan Verin

Ne kadar ilgili bağlam verirseniz çıktı o kadar iyi olur. İş bağlamı özellikle kritiktir.

> *"Lojistik sektöründe 200 çalışanlı bir firmayla toplantıya hazırlanıyorum. Ana sıkıntıları sevkiyat gecikmeleri. Üç yıldır süren bir ilişkimiz var. Son teklifimiz %12 zam içeriyordu ve henüz cevap gelmedi..."*

Bağlam üç soruya cevap verir: **Kim için**, **ne durumda**, **neden şimdi**. Bu üçü olmadan Claude tahminde bulunur — ve genellikle yanlış tahmin eder.

### 3. Görev — Ne İstediğinizi Net Söyleyin

Ne istediğinizi tam ve belirgin söyleyin.

> *"İlk toplantı sonrası 3 paragraflık bir takip e-postası yaz..."*
> *"Bu sözleşmenin cezai şart maddelerini listele, her birinin riskini 1-5 arasında puanla..."*
> *"Bu tedarikçi teklifi için 150 kelimelik bir reddetme mektubu yaz..."*

"Bir şey yaz" dersek Claude rast gele yazar. "Tam olarak ne, ne uzunlukta, hangi amaçla" dediğimizde işler netleşir.

### 4. Format — Çıktı Biçimini Söyleyin

Çıktının nasıl görüneceği önemliyse belirtin. Boş bırakırsanız Claude varsayılan formatı kullanır — genellikle madde işaretli uzun bir yanıt.

> *"Madde işareti yok. Akıcı paragraflar halinde yaz."*
> *"200 kelimeyi geçmesin. Tek paragraf."*
> *"Tablo halinde ver: sol sütun sorun, orta sütun risk, sağ sütun çözüm."*
> *"Sadece metin — başlık, alt başlık, biçimleme yok. Kopyala-yapıştır uygun olsun."*

### 5. Kısıtlar — Ne Olmaması Gerektiğini de Söyleyin

Kısıtlar pozitif talimatların yapamadığını yapar — Claude'un düşmemesi gereken tuzakları kapar.

> *"Jargon kullanma. Ton sıcak ve profesyonel olsun, sıkıştırıcı değil."*
> *"Hiçbir yerde 'sinerjik' veya 'devrim yaratan' kelimelerini kullanma."*
> *"Rakip marka isimleri dahil etme."*
> *"İçeriğe atıfta bulunmadan önce onayımı iste."*

## Beşini Birleştirmek — Bir Gerçek Örnek

**Zayıf prompt (Google-tarzı):**

> *"Bana bir satış takip e-postası yaz."*

**Güçlü prompt (5 bileşenle):**

> *"**Rol:** B2B endüstriyel ekipman satışında 10 yıllık deneyimli bir satış yöneticisisin.*
>
> ***Bağlam:** Dün bir potansiyel müşteriyle ilk Cowork toplantısı yaptık. Şirket: XYZ Gıda, orta ölçekli üretici, Konya merkezli. Onları SCADA güncelleme ihtiyaçlarından konuştuk. Karar verici Ahmet Bey, teknik geçmişi olan genel müdür. Bütçe hassasiyetleri var ama sistem kritik. Bir sonraki adımda teknik keşif istiyorlar.*
>
> ***Görev:** Toplantı sonrası bir takip e-postası yaz. Teknik keşif görüşmesi için Nisan'ın ilk haftasında randevu öner.*
>
> ***Format:** 3 kısa paragraf. Konu satırı dahil. Maksimum 180 kelime.*
>
> ***Kısıtlar:** Fiyat konuşma. Ürün özelliği saymaya başlama. Türkçe resmi ama sıcak ton. "Umarım", "keyifli" gibi hafif ifadelerden kaçın."*

İkinci prompt yaklaşık iterasyonsuz çalışır. İlki 3-4 tur geri bildirim ister ve yine de genel kalır.

## Pozitif ve Negatif Örnekler

Claude'a iyi örnek **ve** kötü örnek gösterin. Bu tek başına çıktı kalitesini çarpıcı biçimde artırır.

> *"İyi örnek şöyle olmalı: [iyi örnek metin]. Kaçınılması gereken kötü örnek: [kötü örnek metin]."*

Örnekler tarif etmekten daha güçlüdür. Claude "ne iyi" sorusunun cevabını görürse uygular; sadece tarif okursa yorumlayabilir.

## İterasyon — İlk Cevap Çoğunlukla Son Cevap Değildir

Kötü bir alışkanlık: Claude ilk cevabı verir, çalışan "olmadı" deyip yeni bir promptla baştan başlar. Doğrusu iterasyondur:

- *"İyi oldu ama daha kısa yap."*
- *"Tonu daha resmi yap."*
- *"İkinci paragraf oturmadı — [konuya] odaklanarak yeniden yaz."*
- *"3 alternatif konu başlığı ver."*
- *"Bu versiyon ile ilk versiyonun birleşimini dene — birinci ve ikinci paragraflar yeni versiyondan, üçüncü ilk versiyondan."*

İterasyon, prompt yazma becerisinin en güçlü parçasıdır. İyi bir çalışan 5-6 iterasyona alışır, rahatsız olmaz.

## Bağlamı Önce Verin Prensibi

Her zaman Claude'a **ihtiyacı olan bağlamı ÖNCE** verin, sonra sorunuzu sorun.

**Yanlış:**
> *"Bu müşteri için ne yapmalıyım? Aa, bu arada müşteri 3 yıldır bizimle çalışıyor ve son 2 ay cevap vermedi..."*

**Doğru:**
> *"Bağlam: Müşteri 3 yıldır bizimle çalışıyor, son 2 ay cevap vermedi, önceki üç toplantıda bütçe sıkıntısından bahsetmişti, kilit karar verici eski iletişim müdürümüzle ilişkisi iyiydi (kendisi ayrıldı). Soru: Bu müşteri için şimdi en doğru adım nedir?"*

İkinci versiyon Claude'a soruyu cevaplamak için gereken her şeyi veriyor. Birincisi bir danışmanı arayıp "ne yapmalıyım?" deyip sonra açıklamak gibi — kimse öyle bir danışmana cevap beklemez.

## Zincirleme Düşünme — Claude'a "Düşün" Demek

Karmaşık problemler için Claude'a cevap vermeden önce düşünmesini söyleyin. Kalite fark edilir şekilde artar.

> *"Cevaptan önce bunu dikkatle adım adım düşün."*
> *"Akıl yürütmeni önce özetle, sonra tavsiyeni ver."*
> *"Karar vermeden önce 3 alternatif senaryoyu değerlendir."*

Bu teknik özellikle strateji, müzakere, tasarım kararları, tanı ve analiz tipi görevlerde etkilidir.

## Claude'u Eleştirmen Yapın

Bir çıktı ürettirdikten sonra Claude'a **rol değiştirtin**. Şüpheci müşteri, sert CFO, rakip satıcı rolüyle kendi çıktısını eleştirsin.

> *"Şimdi şüpheci bir satın alma müdürü rolüne gir. Bu teklifin en zayıf 3 noktası nedir?"*
> *"Talep eden bir CEO olarak bu raporu oku. Hangi üç soruya cevap vermiyor?"*
> *"Bu müzakerede karşı taraf ol. Bizim teklifimizin karşılık verilebilir en zayıf noktası nedir?"*

Bu teknik, işi göndermeden önce eksikleri kendi başınıza yakalamanızı sağlar.

## Yaygın Yanlışlar ve Düzeltmeleri

| Hata | Neden Başarısız | Düzeltme |
|---|---|---|
| Çok belirsiz | Claude varsayımda bulunur | Göreve ve çıktıya özel ol |
| Bağlamsız | Genel çıktı | Şirket, hedef kitle, durum ver |
| Format yok | Çıktı kullanılamaz olabilir | Uzunluk, yapı, biçim belirt |
| Tek atışlık zihniyet | İlk çıktıdan sonra pes eder | İterasyon yap |
| Claude'u Google sanma | Yanlış zihinsel model | Düşünme ortağı olarak gör |
| Tek promptta çoklu soru | Karışık çıktı | Tek prompt, tek görev |

Bu tablo her haftada en az bir kez gözden geçirilmeli. Yaptığınız prompt'u gönderirken kendinize sorun: "Bu altı tuzaktan birine düştüm mü?"

## Hızlı Kontrol Listesi

Bir prompt yazdığınızda son bir kez göz gezdirin:

- [ ] **Rol** verdim mi?
- [ ] **Bağlam** yeterli mi? (kim, ne, neden)
- [ ] **Görev** net mi? (tam olarak ne istiyorum)
- [ ] **Format** belirttim mi? (uzunluk, yapı, üslup)
- [ ] **Kısıtlar** var mı? (kaçınılması gereken)
- [ ] Bu bir **iterasyon**a girecek mi? (ilk çıktıyı sonuç saymıyorum)

Altısı da evetse, prompt hazır. Tek sayfalık bir not olarak masanızın üstüne yazın — bir hafta sonra gözleriniz alışır.

## İlgili Sayfalar

- [4D Çerçevesi](4d-cercevesi/) — Tüm prompting'in kavramsal çerçevesi (Description boyutu)
- [İleri Seviye Prompt Engineering](ileri-seviye/) — XML tags, few-shot prompting, prompt chaining
- [Yaygın Prompting Hataları](yaygin-hatalar/) — Bu hataları derinlemesine inceliyoruz
- [CLAUDE.md Nedir?](../claude-md/nedir/) — Promptların üstüne inşa edildiği kalıcı hafıza

