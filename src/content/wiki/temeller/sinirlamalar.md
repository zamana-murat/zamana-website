---
title: "Claude'un Sınırları — Ne Yapamaz, Ne Zaman Hata Yapar?"
description: "Claude'un ne yapamadığı, hangi durumlarda hata yaptığı ve bir iş profesyonelinin hangi konularda ona güvenmemesi gerektiği — dürüstçe anlatılmış."
tags:
  - temeller
  - sinirlamalar
  - hallucination
  - hata-yonetimi
---

**Claude güçlüdür, ama yanılmaz değildir.** Bu sayfa Zamana'nın iş kullanıcılarına en değerli verebildiği bilgilerden birini içerir: **nerede güvenmemeniz gerektiği.**

Yapay zeka satıcılarının çoğu sınırlardan kaçınır. Biz tersini yapıyoruz — çünkü güven abartıyla değil, doğrulukla inşa edilir. Claude'u ne kadar iyi tanırsanız, onu o kadar iyi kullanırsınız.

## Temel Sınırlar

### 1. Halüsinasyon (Emin ama Yanlış)

Claude bazen **bilmediği bir şeyi emin bir tonla söyler**. Yapay zeka literatüründe buna "halüsinasyon" denir. Örneğin:

- Var olmayan bir yasa maddesi alıntılar
- Var olmayan bir kitabın ISBN'ini verir
- Gerçek bir kişiye yanlış bir pozisyon atfeder
- Bir istatistiği uydurur

**Bu nadir değildir** — özellikle Claude'un eğitim verisinde yeterince bulunmayan, dar uzmanlık konularında.

**Çözüm:**

- **Kritik olguları her zaman bağımsız kaynaktan doğrulayın.** Claude'un verdiği her sayıyı, her alıntıyı, her yasa referansını.
- Claude'dan kaynak isteyin: "Bu bilgi için kaynak göster." Eğer kaynak veremiyor veya kaynaklar güvenilir değilse — o bilgi şüphelidir.
- Resmi belgelerde (sözleşme, rapor, hukuki görüş) Claude'un çıktısını gözden geçirmeden kullanmayın.

### 2. Matematik Hataları

Claude, matematik üzerine **düşünebilir**, ama basit aritmetikte bile hata yapabilir. 4 haneli bir çarpım işleminde bile yanlış cevap verebileceğini bildikten sonra, finansal bir modele Claude'u hesap makinesi olarak kullanmamalısınız.

**Çözüm:**

- **Ciddi hesaplamalar için Excel, Python veya gerçek bir hesap makinesi kullanın.**
- Cowork modunda Claude, Python/Bash çalıştırarak hesaplama yapabilir — bu güvenli bir yoldur çünkü hesap makinesi gibi davranır, zihinsel aritmetik yapmaz.
- Finansal raporda "Claude'un yaptığı bir hesap" yoktur. Rakam sizden, anlatım Claude'dan.

### 3. Eğitim Verisi Kesme Tarihi

Claude'un bilgi tabanı belli bir tarihte donar. Bu tarih **bilgi kesim tarihidir (knowledge cutoff)**. Claude 4.x için kesim tarihi yaklaşık **Mayıs 2025** civarıdır.

Bundan sonraki olaylar, haberler, yasalar, fiyatlar — Claude bilmez.

**Bu ne anlama geliyor?**

- Bugünün döviz kuru, altın fiyatı, hisse fiyatı: **bilmez**
- Yeni çıkan KVKK kararları, TTK değişiklikleri (Haziran 2025 sonrası): **bilmez**
- Son haftaki piyasa hareketi: **bilmez**

**Çözüm:**

- Güncel bilgi için **Web Search skill'ini** etkinleştirin — Claude bu şekilde internetten arar.
- Ya da ilgili bilgiyi (haber yazısı, rapor) **kendiniz yapıştırın** — Claude buradan çalışır.
- Yalnız **"Bu yıl..." sorusunu** sormadan önce Claude'un hangi yılı bildiğini kontrol edin.

### 4. Uzun Konuşmalarda Kalite Düşüşü

Claude'un bağlam penceresi geniştir, ama sonsuz değil. Çok uzun bir sohbet belirli bir noktadan sonra kaliteyi kaybetmeye başlar. Claude:

- Erken söylediği bir şeyi unutur
- Talimatlarınıza daha az dikkat eder
- Çıktı tutarsızlaşır

**Çözüm:**

- Bir görev uzun sürüyorsa, yeni bir oturum başlatın. Özeti yeni oturuma taşıyın.
- Cowork'teki Context Compaction özelliği bu sorunu kısmen çözer ama mükemmel değildir.
- **Pratik kural:** Aynı konuşmada 30+ prompt olduysa ve çıktı kalitesi düşüyorsa — yeni oturum açın.

### 5. Aynı Prompt, Farklı Cevaplar

Claude **deterministik değildir**. Aynı prompt'u iki kere çalıştırırsanız, iki farklı cevap alabilirsiniz. Bu bir hata değil — dil modellerinin doğal çalışma biçimidir.

**Çözüm:**

- Kritik içerikte, prompt'u iki kez çalıştırıp çıktıları karşılaştırın. İyi olanı seçin veya iki iyi kısmı birleştirin.
- Çok önemli bir sözleşme maddesi için iki farklı Claude oturumunda aynı prompt'u deneyin — tutarlılığı görün.

### 6. Gerçek Zamanlı Veri Yok

Claude'un kendisi internete, veritabanlarınıza veya şirket sistemlerinize **bağlı değildir** — bağlantı (connector) kuruluncaya dek.

- Kendi CRM'inizdeki müşteri kayıtları: bilmez
- E-posta kutunuz: bilmez
- Slack mesajlarınız: bilmez
- Google Drive'daki dosyalarınız: bilmez

**Çözüm:**

- Cowork modunda **connector'ları kurun** — Slack, Drive, Gmail, CRM. Bir kere bağlayın, Claude onlara okur ve yazar.
- Bir bağlantı yoksa ilgili bilgiyi **manuel olarak prompt'a yapıştırın**.

### 7. Dosya Boyutu Sınırları

Çok büyük dosyalar (500+ sayfalık bir rapor, gigabyte'lık veri setleri) Claude'un bağlam penceresine sığmayabilir.

**Çözüm:**

- Büyük belgeleri **parçalara bölün** — bölüm bölüm işleyin.
- Enterprise plandaki 500K tokenluk bağlam penceresi bu sorunu büyük ölçüde çözer.
- Çok büyük veri setleri için Claude'dan Python ile parçalı işlem yapmasını isteyin — her seferinde bir bölümünü okur.

### 8. Türkçede İnce Dil Hataları

Claude profesyonel Türkçe yazar — ama mükemmel değildir. Özellikle:

- Resmi yazışmalarda ince ton bozuklukları
- Devrik cümle tercihleri
- Nadir kullanılan Türkçe eşanlamlıların seçimi
- Hukuki terimlerin kullanım bağlamı

**Çözüm:**

- **Her önemli Türkçe çıktıyı gözden geçirin.** Bu bir kural, istisna değildir.
- CLAUDE.md dosyanızda Türkçe ton tercihlerinizi net yazın: "Sade, modern, devrik cümle kullanma."

## Claude'un Reddedeceği Şeyler

Claude, Anthropic'in güvenlik politikaları kapsamında bazı talepleri açıkça reddeder. Bunlar:

- Kitlesel zarar potansiyeli olan içerik (silah tasarımı, zararlı yazılım vb.)
- Küçüklerle ilgili cinsel içerik
- Açıkça yasa dışı faaliyetlerin kolaylaştırılması
- Gerçek kişileri zararlı biçimde taklit eden içerik

Bunlar bir hata değil — bilinçli tasarım sınırlarıdır. İş kullanımında bu sınırlara rastlamanız çok nadirdir.

## Claude'un Kurumsal Olarak Yapamayacakları

Başka bir kategori: Claude yapmaya çalışabilir ama **bir iş kullanımında asla tek başına yapmamalı** olduğu işler. Bunlar Claude'un yetersiz olduğu değil, sizin sorumlu olduğunuz konulardır:

- **Bağlayıcı hukuki karar vermek.** Claude hukuki analiz yapar, taslak yazar. Bir avukat onaylamadan yasal süreç başlatmaz.
- **Finansal karar almak.** Claude analiz üretir, senaryolar çizer. Bir finans profesyoneli onaylamadan para hareketi yapılmaz.
- **Tıbbi tavsiye vermek.** Claude tıbbi literatürü özetler. Bir hekim onaylamadan tedavi kararı alınmaz.
- **İK disiplin süreci yürütmek.** Claude taslak yazabilir. Bir İK profesyoneli ve hukuk ekibi onaylamadan işten çıkarma yapılmaz.
- **Vergi beyanı doldurmak.** Claude hesaplama yardımı sunabilir. Bir mali müşavir onaylamadan beyan verilmez.

Bu liste asla Claude'un "yapamadığı" değil — **profesyonel sorumluluğun asla yapay zekaya transfer olmadığı** alanları belirler.

## Altın Kural

> **Claude yazar. Siz karar verirsiniz. Sorumluluk asla transfer olmaz.**

Bu tek cümleyi unutursanız tüm sınırları unutabilirsiniz.

Önemli bir şeyde — sözleşme, finansal karar, hukuki görüş, tıbbi tavsiye, İK aksiyonu — Claude ilk taslağı üretir ve doğru soruları sorar. **Nihai kararı** her zaman o mesleğin ehliyetli profesyoneli verir ve sorumluluğu taşır.

[4D Çerçevesi](../prompting/4d-cercevesi/) içindeki **Diligence** (Sorumluluk) boyutu bu kuralın kavramsal adıdır.

## Pratik Kontrol Listesi

Her önemli çıktıda kendinize sorun:

- [ ] **Olgu doğrulaması:** Her sayı, alıntı, referans bağımsız kaynaktan teyit edildi mi?
- [ ] **Matematik kontrolü:** Tüm hesaplamalar Excel/Python veya hesap makinesinde yapıldı mı?
- [ ] **Güncellik:** Kritik bilgi Claude'un kesim tarihinden sonra değişmiş olabilir mi?
- [ ] **Türkçe gözden geçirme:** Metni baştan sona insan gözüyle okudum mu?
- [ ] **Sorumluluk:** Bu çıktının arkasında doğru ehliyetli profesyonel var mı?
- [ ] **İmza testi:** Bu metnin altına kendi adımı atmaya razı mıyım?

Son soru en önemlisidir. Cevap "hayır"sa, geri dönün, iyileştirin, tekrar sorun.

## İlgili Sayfalar

- [Claude Nedir?](claude-nedir/) — Temel kavram
- [4D Çerçevesi](../prompting/4d-cercevesi/) — Diligence (Sorumluluk) boyutu
- [Gizlilik ve KVKK](gizlilik-kvkk/) — Veri sınırları ve uyumluluk
- [Yaygın Prompting Hataları](../prompting/yaygin-hatalar/) — Sınırları zorlayan prompt biçimleri

