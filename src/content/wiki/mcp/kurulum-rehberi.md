---
title: MCP Kurulum Rehberi — Adım Adım
description: Claude Desktop ve claude.ai üzerinde MCP server ekleme. Yaygın sorunlar, doğrulama, ilk kullanım — pratik rehber.
tags:
  - mcp
  - kurulum
  - rehber
---

**[MCP](nedir/) (Model Context Protocol), Claude'u istediğiniz dış servise bağlamanın açık standardıdır.** Bu sayfa bir MCP server'ı Claude Desktop veya claude.ai'a nasıl ekleyeceğinizi adım adım anlatır.

[Connectors](../araclar/connectors/) ile karıştırmayın — connector Anthropic'in resmî, hazır entegrasyonu; MCP daha geniş ve özelleştirilebilir.

## Önce — MCP Mi, Connector Mu?

| Servisiniz... | Tercih |
|---|---|
| Resmî [Connector](../araclar/connectors/) listesinde (Gmail, Drive, Slack, Notion vs.) | Connector — daha kolay |
| Listede yok ama popüler bir SaaS | MCP — büyük olasılıkla bir community MCP var |
| Şirket içi sistem (CRM, ERP) | MCP — özel server yazılır |
| Hassas veriyle çalışıyor | MCP + dikkatli [Güvenlik](guvenlik/) yapılandırması |

Eğer connector seçeneğiniz varsa, MCP'ye gerek yok. Hızlı kararı [Bağlantı Listesi](baglanti-listesi/) sayfası verir.

## Kurulum Yeri — Claude Desktop mı, claude.ai mi?

İki ortamda da MCP destekleniyor:

- **[Claude Desktop](../araclar/claude-desktop/):** Kişisel bilgisayarda yerel kurulum. Daha esnek, özel server'lar buradan kullanılır.
- **claude.ai:** Web/mobil. Kurulum tek tık, ama özel server seçenekleri sınırlı.

Bu sayfa **Claude Desktop** üzerinden kurulumu odak alır — daha kuvvetli ve esnek. Web tarafı için kısa bir bölüm sonda var.

## Adım 1 — Server Seçimi

Hangi MCP server'ı kullanacağınızı belirleyin. Üç ana kaynak:

### A. Anthropic Resmî MCP Server'ları

GitHub'da `anthropic/mcp-servers` repo'su (veya benzeri). Yaygın olanlar:

- **filesystem** — yerel dosya sistemi erişimi
- **github** — GitHub repo işlemleri
- **postgres** — PostgreSQL veritabanı
- **brave-search** — web arama
- **slack** — Slack workspace

[Popüler MCP'ler](populer-mcpler/) sayfasında detay ve seçim kriterleri.

### B. Topluluk MCP'leri

Açık kaynak topluluğu yüzlerce MCP server üretti — Notion, Linear, Jira, Salesforce, AWS, vb. GitHub'da arayarak veya MCP marketplace'lerinden bulabilirsiniz.

**Dikkat:** Topluluk MCP'leri **denetlenmemiş** olabilir. [Güvenlik](guvenlik/) sayfasına bakın.

### C. Şirket İçi Özel MCP

Kendi ERP/CRM sisteminize MCP yazmak için Anthropic'in MCP SDK'sini kullanırsınız (Python veya TypeScript). Bu geliştirici işi; [BT departmanı](../departmanlar/bilgi-teknolojileri/) ile koordine edilir.

## Adım 2 — Ön Koşullar

Çoğu MCP server için şu araçlar gerekli:

- **Node.js** (v18+) veya **Python 3.10+** — server türüne bağlı
- **Claude Desktop** kurulu — claude.ai/download adresinden indirilir
- **Yetkili hesap** — server bağlanacağı servis için (örn. GitHub token, Slack access token)

Ön koşulları kurmak için terminal kullanmanız gerekir. Geliştirici değilseniz BT'den yardım alın.

## Adım 3 — Yapılandırma Dosyası

Claude Desktop, MCP yapılandırmasını bir JSON dosyasında saklar:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux:** `~/.config/Claude/claude_desktop_config.json`

Dosya yoksa yaratırsınız (Claude Desktop ilk açıldığında oluşturmuş olabilir).

Temel yapı:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/murat/Documents"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxxxxxxxxxxxxxxxxxx"
      }
    }
  }
}
```

Her server bir JSON nesnesi. Hangi komut çalışacak, ne argümanlar, hangi env değişkenleri.

## Adım 4 — Server Kuruluş Örneği

### Örnek: Filesystem MCP

Claude'un yerel `Documents` klasörünüze erişebilmesi için:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/murat/Documents"
      ]
    }
  }
}
```

Açıklama:

- `command: npx` → Node.js paket yürütücüsü
- `-y` → otomatik onay
- Paket adı → server'ın npm'deki adı
- Son arg → erişim verilen klasör (sadece bu ve alt klasörleri erişilebilir)

**Güvenlik:** "Tüm hard disk" demek yerine spesifik klasör seçin.

### Örnek: GitHub MCP

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..."
      }
    }
  }
}
```

GitHub'da Settings → Developer settings → Personal access tokens → fine-grained token oluşturun. Hangi repo'lar, hangi yetkiler — minimum verin.

### Örnek: PostgreSQL MCP

```json
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://kullanici:sifre@localhost:5432/veritabani"
      ]
    }
  }
}
```

**Şifreyi konfige yazmaktan kaçının.** Yerine env değişkeni kullanın.

## Adım 5 — Claude Desktop'ı Yeniden Başlatın

Yapılandırma dosyasını kaydettikten sonra:

1. Claude Desktop'ı tamamen kapatın (sadece pencere kapatma değil, çıkış)
2. Yeniden açın
3. Yeni sohbet başlatın

MCP server'lar Claude açılışında tetiklenir. Açılış sırasında bir terminal penceresi pop-up olabilir, normal — server süreci başlıyor.

## Adım 6 — Doğrulama

Yeni bir sohbet açın, Claude'a sorun:

> *"Hangi MCP araçların aktif?"*

Claude size aktif server'ların listesini söylemeli. Yoksa:

- Server hata vermiş olabilir → Claude Desktop loglarını kontrol edin
- Yapılandırma JSON yanlış olabilir → JSON validator ile sözdizimi kontrolü
- Env değişkeni eksik → token / şifre doğru mu

## Yaygın Sorunlar

### Sorun: "Server bağlanamadı"

**Çözüm:** 
- Komut yolu doğru mu (`npx` PATH'te mi)
- Paket adı doğru mu (yazım hatası yaygın)
- Yetkilendirme token'ı geçerli mi

### Sorun: "Claude server'ı görüyor ama çağıramıyor"

**Çözüm:**
- Server yetkisi yetersiz (örn. GitHub token'da read yok)
- Filesystem'de klasör yolu var olmayabilir

### Sorun: "JSON syntax hatası"

**Çözüm:**
- Virgül eksik / fazla
- Tırnak işareti eksik
- jsonlint.com gibi araçla kontrol

### Sorun: "Antivirus / Firewall engelliyor"

**Çözüm:**
- Kurumsal bilgisayarda IT politikası npx çalıştırmayı engelleyebilir
- BT ile konuşun, [BT Departmanı](../departmanlar/bilgi-teknolojileri/) sayfası rehber içerir

## claude.ai (Web) Üzerinde MCP

Web tarayıcısı sürümünde MCP destek **gelişiyor** — şu an Claude Desktop kadar olgun değil. Eklemek için:

1. Settings → Connectors / MCP (sürüme göre değişir)
2. "Add custom MCP" benzeri seçenek (eğer mevcutsa)
3. Server URL'si veya yapılandırma yüklenir

Çoğu durumda web'de **Anthropic onaylı** hazır server'lar gelir; özel şirket-içi MCP'leri Claude Desktop'tan kullanmak daha pratik.

## Şirket İçi MCP — Özel Geliştirme

Kendi sisteminize MCP yazmak için:

1. **Anthropic MCP SDK** seçin (Python veya TypeScript)
2. Server kapalı (resource), açık (tool) yapısını tasarlayın
3. Yetkilendirme akışını netleştirin (OAuth, API key, mTLS, vs.)
4. Test edin (Claude Desktop'ta yerel olarak)
5. Şirket içinde dağıtım (genelde dahili NPM registry, internal Docker, vs.)

[BT Departmanı](../departmanlar/bilgi-teknolojileri/) ve [Güvenlik](guvenlik/) sayfaları kurumsal pratiği detaylandırır.

## Birden Fazla Server Birlikte

Tek yapılandırma dosyasında 5-10 farklı server tutabilirsiniz:

```json
{
  "mcpServers": {
    "filesystem": { ... },
    "github": { ... },
    "postgres": { ... },
    "slack": { ... },
    "internal-crm": { ... }
  }
}
```

Hepsi Claude'a sunulur. Hangisini ne zaman kullanacağına Claude karar verir; siz "GitHub'da ABC repo'sundaki son issue'ları getir" derseniz GitHub server'a gider.

## Kullanım — İlk Test

Server kurulduktan sonra deneme:

> *"Documents klasörümde bu hafta değiştirilen dosyaları listele."* (filesystem)
>
> *"Şu repo'daki açık PR'ları getir: zamana-murat/zamana-wiki"* (github)
>
> *"Postgres'te customers tablosundan son 10 kayıt çek."* (postgres)

İlk kullanımda Claude size **izin** sormak isteyebilir — onaylayın, server çağırır.

## Sürüm ve Güncellemeler

MCP server'lar npm üzerinden geliyorsa otomatik güncel sürüm kullanılır (`-y` argümanı). Manuel sabitlemek için sürüm belirtin:

```json
"args": ["-y", "@modelcontextprotocol/server-github@1.2.3"]
```

Production kurumsal kullanımda sabitlemek **güvenlik açısından önerilir** — beklenmedik güncelleme davranış değişimi yaratabilir.

## Kurumsal Toplu Dağıtım

50+ kişiye aynı MCP yapılandırmasını dağıtmak için:

- **MDM (Mobile Device Management)** — şirket bilgisayarlarına otomatik config dağıtım
- **Internal package** — şirket içi bir kurulum scripti
- **Enterprise plan** ile organizasyon-genelinde MCP yönetimi (gelişen özellik)

[Takım ve Admin](../temeller/takim-ve-admin/) sayfası kurumsal MCP yönetimini değinir.

## Yapılandırmayı Versiyonlamak

Yapılandırma dosyanızı git'te tutarsanız:

- Değişiklik geçmişi izlenir
- Bir bilgisayardan diğerine taşınabilir
- BT'nin onayı PR ile yapılabilir

Ama **sırlarınızı (token, şifre) git'e koymayın.** Env değişkeni kullanın, .gitignore ekleyin.

## İlgili Sayfalar

- [MCP Nedir?](nedir/) — Genel kavramlar
- [Güvenlik](guvenlik/) — MCP güvenlik modeli
- [Popüler MCP'ler](populer-mcpler/) — Ne kurmaya başlamalı
- [Bağlantı Listesi](baglanti-listesi/) — MCP + connector listesi
- [Connectors](../araclar/connectors/) — Hazır alternatif
- [Claude Desktop](../araclar/claude-desktop/) — MCP'nin yaşadığı uygulama
- [BT Departmanı](../departmanlar/bilgi-teknolojileri/) — Kurumsal kurulum
- [Şirket İçi Politika](../temeller/sirket-ici-politika/) — Hangi MCP onaylı

