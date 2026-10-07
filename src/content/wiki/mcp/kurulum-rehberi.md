---
title: "MCP Kurulum Rehberi: Adım Adım"
seoTitle: "Claude'a MCP Ekleme: Özel Connector Nasıl Kurulur?"
description: "Claude'a MCP nasıl eklenir? Özel connector (sunucu URL'si), masaüstü uzantıları, yönetici onayı, BT'ye düşen adımlar ve yaygın hatalar."
tags:
  - mcp
  - kurulum
  - rehber
lastUpdated: "2026-10-06"
---

**[MCP](/wiki/mcp/nedir/) (Model Context Protocol), Claude'u istediğiniz dış servise bağlamanın açık standardıdır; Claude'daki "connector" bir MCP sunucusudur.** Bu sayfa dizinde olmayan bir MCP sunucusunu Claude'a nasıl ekleyeceğinizi anlatır: özel connector (uzak sunucu URL'si) ve masaüstü uzantısı (yerel).

Dizinde hazır duran connector'lar da aynı protokolü kullanır; onları bağlamak tek tıktır ve [Connectors](/wiki/araclar/connectors/) sayfasında anlatılır. Ürün çerçevesi ve plan kapsamı için [Claude Connectors](/claude/connectors/) sayfasına bakın.

## Önce: Hangi Yol?

| Servisiniz... | Yol |
|---|---|
| Resmî dizinde var (yaklaşık 900 connector) | Dizin connector'ı, tek tık: [Connectors](/wiki/araclar/connectors/) |
| Dizinde yok | Özel connector (uzak sunucu URL'si) ya da masaüstü uzantısı (yerel), bu sayfa |

Kendi iç sisteminizi (ERP, iç CRM) bağlamak istiyorsanız kim kurar, ne istenir, nasıl pilot yapılır sorularını [Şirket Sistemini Claude'a Bağlamak](/wiki/mcp/sirket-sistemini-baglamak/) sayfası ele alır. Hızlı seçki için [Bağlantı Listesi](/wiki/mcp/baglanti-listesi/).

## Üç Yol, Tek Protokol

| | Dizin connector'ı | Özel connector | Masaüstü uzantısı |
|---|---|---|---|
| Nerede çalışır | Sağlayıcının uzak sunucusunda | Uzak sunucuda; herkese açık internetten erişilebilir olmalı | Sizin bilgisayarınızda |
| Kurulum yeri | Customize > Connectors | Customize > Connectors | Claude Desktop, Settings > Extensions |
| Ne gerekir | Hesap girişi (OAuth) | Sunucunun URL'si | `.mcpb` paketi (eski adı `.dxt`) |
| Kim ekler | Siz; Team ve Enterprise'ta bazılarını önce owner açar | Team ve Enterprise'ta yalnız owner | Siz; Team ve Enterprise'ta owner izin listesi açabilir |

## Yol 1: Özel Connector (Uzak Sunucu URL'si)

Sağlayıcının ya da sizin barındırdığınız bir MCP sunucusunun adresi elinizdeyse bu yol yeterlidir. Claude'da, Claude Desktop'ta, Cowork'te ve mobilde çalışır; mobilde kurulum beta aşamasındadır, asıl yol web ve Desktop'tır.

**Bireysel planlarda (Free, Pro, Max):**

1. **Customize > Connectors** bölümünü açın.
2. Özel connector ekleme seçeneğini seçin, sunucunun URL'sini girin.
3. Gerekiyorsa gelişmiş ayarlardan OAuth Client ID ve Secret girin.
4. Sunucunun giriş ekranında kendi hesabınızla onay verin.

Free planda en çok 1 özel connector eklenir. Menü adları arayüz güncellemelerinde değişebilir; ekranda görünen ad esastır.

**Team ve Enterprise'ta:**

1. Owner (Primary Owner dahil), **Organization settings > Connectors** altında **Add > Custom > Web** yolunu izler, URL'yi girer.
2. Üyeler özel connector ekleyemez; **Customize > Connectors** bölümünde ilgili connector'ın yanındaki **Connect** ile kendi hesaplarını bağlar. Kimlik doğrulama kişi başına ayrı yapılır.

**Kimlik doğrulama seçenekleri:** OAuth (Claude'un yayımlanmış kimliği önerilen seçenek; ayrıca otomatik kayıt ya da kendi OAuth istemciniz), sabit API anahtarı veya bearer başlığı, ya da hiç giriş yok. Anthropic'in doğrulamadığı bir sunucuya özel connector eklerken Claude güvenlik uyarısı verir; uyarıyı okuyun.

> **BT'ye düşen:** Uzak connector'a Claude, cihazınızdan değil **Anthropic'in bulut altyapısından** bağlanır. Sunucu bir güvenlik duvarı ya da VPN arkasındaysa ve yalnız iç ağdan erişiliyorsa bu yolla ulaşılmaz. Sunucuyu internete açıyorsanız Anthropic'in giden IPv4 aralığını (`160.79.104.0/21`) güvenlik duvarında izin listesine alın; eski `34.162.x.x` adresleri kullanım dışıdır ve silinmelidir. Güncel aralık için [Anthropic IP adresleri sayfasına](https://platform.claude.com/docs/en/api/ip-addresses) bakın.

## Yol 2: Masaüstü Uzantısı (Yerel)

Masaüstü uzantısı, Claude Desktop'a tek tıkla kurulan yerel MCP sunucusu paketidir (`.mcpb`, eski adıyla `.dxt`). Claude Desktop'ta Node.js gömülü gelir, JSON yapılandırması gerekmez. Dosya ya da klasör gibi bilgisayarınızdaki şeylere erişecek bir sunucu için doğru yol budur.

1. [Claude Desktop](/wiki/araclar/claude-desktop/) içinde **Settings > Extensions** bölümünü açın.
2. **Browse extensions** ile Anthropic incelemeli dizinden uzantıyı seçip kurun.
3. Dizinde olmayan bir `.mcpb` dosyanız varsa **Advanced settings > Extension Developer > Install Extension** yolunu kullanın.
4. İstenen ayarları (klasör yolu, API anahtarı) girin. Hassas olarak işaretli alanlar işletim sisteminin kasasında şifrelenir (macOS Keychain, Windows Credential Manager).

Dosya erişimi veren bir uzantıda tüm diski değil, tek bir çalışma klasörünü seçin.

**Team ve Enterprise'ta yönetici kontrolü** (owner, Organization settings > Connectors > Desktop sekmesi):

- Herkese açık uzantı dizini açılıp kapatılabilir.
- **İzin listesi (allowlist) anahtarı varsayılan olarak kapalıdır.** Açıldığında kurulu uzantılar **zorla silinir**; kullanıcılar yalnız onaylı uygulama içi kayıt defterinden kurabilir, `.mcpb` dosyasını sürükleyip kuramaz. Açmadan önce çalışanları uyarın. İzin listesi Claude Desktop 0.13.91 ve üstünü ister.
- Kurum kendi `.mcpb` uzantısını yükleyip tek tıkla dağıtabilir. Manifest'teki `name` benzersiz olmalı, güncelleme için `version` artırılır.
- Cihaz yönetimi (MDM) politikası, uygulama içi ayarı **ezer**.

## Kurulumdan Önce: Sunucu Seçimi

### A. Sağlayıcının Kendi Sunucusu

Birçok SaaS kendi uzak MCP sunucusunu yayımlar. Mümkünse bu yolu seçin: bakımı sağlayıcıdadır. Dizinde "Anthropic verified" olarak görünenler bu türdendir.

### B. Resmî Referans Sunucuları

GitHub'daki MCP referans deposu (`modelcontextprotocol/servers`) bugün yalnızca `filesystem`, `fetch`, `git`, `memory`, `sequentialthinking`, `time` ve `everything` sunucularını bakımda tutar. `github`, `postgres`, `slack` ve `brave-search` gibi eski referans sunucular bakımı yapılmayan `modelcontextprotocol/servers-archived` deposuna taşındı. Bunların yerine sağlayıcının resmî uzak MCP sunucusunu ya da güncel paketini seçin.

[Popüler MCP'ler](/wiki/mcp/populer-mcpler/) sayfasında seçim kriterleri var.

### C. Topluluk Sunucuları

Açık kaynak topluluğu yüzlerce sunucu üretti, ama bunlar **denetlenmemiş** olabilir. Örneğin Paraşüt için bulunan tek MCP sunucusu resmî değil, topluluk işidir; deneme dışında önerilmez. [Güvenlik](/wiki/mcp/guvenlik/) sayfasındaki kontrol listesinden geçirmeden kurmayın.

### D. Şirket İçi Sistemler

ERP ve iç CRM için sunucuyu bir geliştirici yazar ya da entegratör kurar; bu BT ile koordine edilir. Karar akışı için [Şirket Sistemini Claude'a Bağlamak](/wiki/mcp/sirket-sistemini-baglamak/) sayfasına bakın.

## Doğrulama

Kurulumdan sonra yeni bir sohbet açıp sorun:

> *"Hangi araçların aktif?"*

Claude bağlı connector ve uzantıların araçlarını saymalı. Sohbetteki **Search and tools** menüsünden hangi connector'ın açık olduğunu da görür, ilgisiz olanı kapatabilirsiniz. İlk kullanımda Claude araç için izin sorar (**Allow once**, **Always allow** ya da **Deny**); ayrıntı için [Güvenlik](/wiki/mcp/guvenlik/) sayfasındaki "Onay Mekanizması" bölümüne bakın.

## Yaygın Sorunlar

### "Sunucuya ulaşılamıyor" (özel connector)

- Sunucu herkese açık internetten erişilebilir mi? Yalnız şirket ağında çalışıyorsa Anthropic bulutu ulaşamaz.
- Güvenlik duvarı varsa Anthropic'in IP aralığı izin listesinde mi?
- URL doğru mu, sunucu ayakta mı?

### "Giriş (OAuth) tamamlanmıyor"

- Sunucunun OAuth ayarları ile Claude'da seçtiğiniz kimlik seçeneği uyuşuyor mu?
- Hesabınızın o servis tarafında gerekli yetkisi var mı?

### "Üye olarak connector ekleyemiyorum" (Team ve Enterprise)

Beklenen davranıştır: özel connector'ı yalnız owner ekler. Üyenin yapacağı **Connect** ile kendi hesabını bağlamaktır. Connector listede yoksa owner'dan ekletin.

### "Uzantıyı kuramıyorum" (Team ve Enterprise)

İzin listesi açıksa yalnız onaylı kayıt defterindeki uzantılar kurulur. Gerekirse owner'dan uzantıyı onaylatmasını isteyin.

### "Kurumsal bilgisayarda engelleniyor"

Antivirüs ya da BT politikası uzantı kurulumunu veya dış bağlantıyı engelleyebilir. [BT Departmanı](/wiki/departmanlar/bilgi-teknolojileri/) ile konuşun.

## Kurumsal Toplu Dağıtım

50+ kişiye aynı bağlantıyı vermek için:

- **Özel connector:** owner bir kez ekler, üyeler **Connect** ile bağlanır. Adresi ve kimlik doğrulamayı herkes elle girmez.
- **Kurum uzantısı:** owner kendi `.mcpb` paketini yükler, tek tıkla dağıtır.
- **İzin listesi ve MDM:** hangi uzantıların kurulabileceğini sınırlayın; MDM politikası uygulama içi ayarı ezer.
- **Araç izinleri:** owner, connector başına araç kategorilerini (salt okunur, yazma ve silme) kuruluş genelinde sınırlar, kullanıcı geçersiz kılamaz. Ayrıntı [Güvenlik](/wiki/mcp/guvenlik/) sayfasında.

Kurumsal yönetimin geneli için [Takım ve Admin](/wiki/temeller/takim-ve-admin/) sayfasına bakın.

> **Geliştiriciler için: JSON yapılandırma ve komut satırı sunucuları**
>
> Bu bölüm iş kullanıcısı için gerekli değildir; masaüstü uzantısı ya da özel connector çoğu durumda yeterlidir. Yerel bir sunucuyu elle kaydetmek isteyen geliştiriciler için Claude Desktop yapılandırmasını bir JSON dosyasında tutar:
>
> - **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
> - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
> - **Linux:** `~/.config/Claude/claude_desktop_config.json`
>
> Temel yapı (yalnız bakımı süren `filesystem` sunucusu örneği):
>
> ```json
> {
>   "mcpServers": {
>     "filesystem": {
>       "command": "npx",
>       "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/kullanici/Documents"]
>     }
>   }
> }
> ```
>
> - `command: npx` Node.js paket yürütücüsüdür; Node.js (v18+) ya da Python 3.10+ kurulu olmalıdır.
> - `-y` npm'in kurulum onayı sorusunu otomatik geçer. Sürümü güncel tutmaz; sürümü paket adının sonuna `@1.2.3` yazarak sabitlersiniz. Kurumsal kullanımda sürümü sabitlemek önerilir, çünkü beklenmedik bir güncelleme davranışı değiştirebilir.
> - Son argüman erişim verilen klasördür; tüm disk yerine tek bir çalışma klasörü seçin.
> - Parola ve token'ı yapılandırma dosyasına yazmayın, ortam değişkeni kullanın; dosyayı git'te tutuyorsanız sırları dışarıda bırakın.
> - Dosyayı kaydettikten sonra Claude Desktop'ı tamamen kapatıp yeniden açın (yalnız pencereyi kapatmak yetmez).
> - Sorun halinde sırayla bakın: `npx` PATH'te mi, paket adı doğru mu, JSON sözdizimi geçerli mi (virgül ve tırnak hataları yaygındır), token geçerli mi, Claude Desktop günlükleri ne diyor.
>
> Bir yapılandırma dosyasında birden çok sunucu tutulabilir; Claude hangisini çağıracağına isteğe göre karar verir. Kendi MCP sunucunuzu yazmak için resmî MCP SDK'larını (Python veya TypeScript) kullanırsınız; yetkilendirme akışını (OAuth, API anahtarı) baştan netleştirin.

## İlgili Sayfalar

- [MCP Nedir?](/wiki/mcp/nedir/): Genel kavramlar
- [Şirket Sistemini Claude'a Bağlamak](/wiki/mcp/sirket-sistemini-baglamak/): ERP ve iç CRM için karar akışı
- [Güvenlik](/wiki/mcp/guvenlik/): izinler, riskler, KVKK
- [Popüler MCP'ler](/wiki/mcp/populer-mcpler/): Ne kurmaya başlamalı
- [Bağlantı Listesi](/wiki/mcp/baglanti-listesi/): MCP ve connector listesi
- [Connectors](/wiki/araclar/connectors/): Dizin connector'ı nasıl bağlanır
- [Claude Connectors](/claude/connectors/): ürün tanıtımı ve plan kapsamı
- [Claude Desktop](/wiki/araclar/claude-desktop/): Uzantıların yaşadığı uygulama
- [BT Departmanı](/wiki/departmanlar/bilgi-teknolojileri/): Kurumsal kurulum
- [Şirket İçi Politika](/wiki/temeller/sirket-ici-politika/): Hangi bağlantı onaylı
