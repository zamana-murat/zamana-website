/**
 * Wiki navigation tree, mirrored from wiki/mkdocs.yml.
 * Each entry's `slug` matches the folder/file name in src/content/wiki/.
 * The slug becomes part of the URL: /wiki/<slug>/.
 * Section landings have slug `<section>` (resolves to <section>/index.mdx).
 */

export interface WikiNavItem {
  label: string;
  slug: string; // empty string = wiki root
  external?: boolean;
}

export interface WikiNavSection {
  label: string;
  landingSlug: string; // section landing page (index.mdx)
  items: WikiNavItem[];
}

export const wikiHomeSlug = '';

export const wikiNav: WikiNavSection[] = [
  {
    label: 'Temeller',
    landingSlug: 'temeller',
    items: [
      { label: 'Genel Bakış', slug: 'temeller' },
      { label: 'Claude Nedir?', slug: 'temeller/claude-nedir' },
      { label: 'Anthropic ve Tarihçe', slug: 'temeller/anthropic-ve-tarihce' },
      { label: 'Modeller', slug: 'temeller/modeller' },
      { label: 'Planlar', slug: 'temeller/planlar' },
      { label: 'Takım ve Admin', slug: 'temeller/takim-ve-admin' },
      { label: 'Fatura ve KDV', slug: 'temeller/fatura-ve-kdv' },
      { label: 'Prompt ve Token', slug: 'temeller/prompt-ve-token' },
      { label: 'İlk Kurulum', slug: 'temeller/ilk-kurulum' },
      { label: 'İlk 7 Gün Rehberi', slug: 'temeller/ilk-7-gun' },
      { label: 'Türkçe Performansı', slug: 'temeller/turkce-performansi' },
      { label: 'Sınırlamalar', slug: 'temeller/sinirlamalar' },
      { label: 'Gizlilik ve KVKK', slug: 'temeller/gizlilik-kvkk' },
      { label: 'Şirket İçi Politika', slug: 'temeller/sirket-ici-politika' },
      { label: 'Claude vs ChatGPT', slug: 'temeller/claude-vs-chatgpt' },
      { label: 'Claude vs Gemini', slug: 'temeller/claude-vs-gemini' },
      { label: 'Claude vs Copilot', slug: 'temeller/claude-vs-copilot' },
      { label: 'Yaygın İtirazlar', slug: 'temeller/itirazlar' },
      { label: 'Ölçüm Metrikleri', slug: 'temeller/olcum-metrikleri' },
      { label: 'Sık Sorulan Sorular', slug: 'temeller/sss' },
    ],
  },
  {
    label: 'Araçlar',
    landingSlug: 'araclar',
    items: [
      { label: 'Genel Bakış', slug: 'araclar' },
      { label: 'Claude Chat', slug: 'araclar/claude-chat' },
      { label: 'Claude Mobil', slug: 'araclar/claude-mobil' },
      { label: 'Voice Mode', slug: 'araclar/voice-mode' },
      { label: 'Web Arama', slug: 'araclar/web-arama' },
      { label: 'Geçmiş ve Arama', slug: 'araclar/gecmis-ve-arama' },
      { label: 'Projects', slug: 'araclar/projects' },
      { label: 'Claude Desktop', slug: 'araclar/claude-desktop' },
      { label: 'Cowork Modu', slug: 'araclar/cowork-modu' },
      { label: 'Connectors', slug: 'araclar/connectors' },
      { label: 'Slack & Teams', slug: 'araclar/slack-teams-entegrasyon' },
      { label: 'Dispatch', slug: 'araclar/dispatch' },
      { label: 'Scheduled Tasks', slug: 'araclar/scheduled-tasks' },
    ],
  },
  {
    label: 'CLAUDE.md',
    landingSlug: 'claude-md',
    items: [
      { label: 'Genel Bakış', slug: 'claude-md' },
      { label: 'CLAUDE.md Nedir?', slug: 'claude-md/nedir' },
      { label: 'Nasıl Yazılır?', slug: 'claude-md/nasil-yazilir' },
      { label: 'Örnekler', slug: 'claude-md/ornekler' },
      { label: 'Şablon Kütüphanesi', slug: 'claude-md/sablon-kutuphanesi' },
      { label: 'Takım CLAUDE.md', slug: 'claude-md/takim-claude-md' },
      { label: 'Hata Ayıklama', slug: 'claude-md/hata-ayiklama' },
      { label: 'Memory Yönetimi', slug: 'claude-md/memory-yonetimi' },
    ],
  },
  {
    label: 'Prompting',
    landingSlug: 'prompting',
    items: [
      { label: 'Genel Bakış', slug: 'prompting' },
      { label: '4D Çerçevesi', slug: 'prompting/4d-cercevesi' },
      { label: 'Temel İlkeler', slug: 'prompting/temel-ilkeler' },
      { label: 'Türkçe Teknikler', slug: 'prompting/turkce-prompt-teknikleri' },
      { label: 'Çıktı Formatı', slug: 'prompting/cikti-formati' },
      { label: 'Few-Shot Örnekleme', slug: 'prompting/few-shot-ornekleme' },
      { label: 'İleri Seviye', slug: 'prompting/ileri-seviye' },
      { label: 'Prompt İterasyonu', slug: 'prompting/prompt-iterasyonu' },
      { label: 'Prompt Kataloğu', slug: 'prompting/prompt-katalogu' },
      { label: 'Yaygın Hatalar', slug: 'prompting/yaygin-hatalar' },
    ],
  },
  {
    label: 'Yetenekler',
    landingSlug: 'yetenekler',
    items: [
      { label: 'Genel Bakış', slug: 'yetenekler' },
      { label: 'Skills', slug: 'yetenekler/skills' },
      { label: 'Artifacts', slug: 'yetenekler/artifacts' },
      { label: 'Dosya İşleme', slug: 'yetenekler/file-handling' },
      { label: 'Görsel ve Görüntü', slug: 'yetenekler/vision-image' },
      { label: 'Code Execution', slug: 'yetenekler/code-execution' },
      { label: 'Research Mode', slug: 'yetenekler/research-mode' },
      { label: 'Memory', slug: 'yetenekler/memory' },
      { label: 'Context ve Compaction', slug: 'yetenekler/context-compaction' },
      { label: 'Computer Use', slug: 'yetenekler/computer-use' },
      { label: 'Agents ve Subagents', slug: 'yetenekler/agents-subagents' },
    ],
  },
  {
    label: 'MCP ve Eklentiler',
    landingSlug: 'mcp',
    items: [
      { label: 'Genel Bakış', slug: 'mcp' },
      { label: 'MCP Nedir?', slug: 'mcp/nedir' },
      { label: 'Kurulum Rehberi', slug: 'mcp/kurulum-rehberi' },
      { label: 'Güvenlik', slug: 'mcp/guvenlik' },
      { label: "Popüler MCP'ler", slug: 'mcp/populer-mcpler' },
      { label: 'Bağlantı Listesi', slug: 'mcp/baglanti-listesi' },
    ],
  },
  {
    label: 'Departmanlar',
    landingSlug: 'departmanlar',
    items: [
      { label: 'Genel Bakış', slug: 'departmanlar' },
      { label: 'Satış', slug: 'departmanlar/satis' },
      { label: 'Pazarlama', slug: 'departmanlar/pazarlama' },
      { label: 'Müşteri Hizmetleri', slug: 'departmanlar/musteri-hizmetleri' },
      { label: 'Perakende ve E-Ticaret', slug: 'departmanlar/perakende-eticaret' },
      { label: 'Turizm ve Otelcilik', slug: 'departmanlar/turizm-otelcilik' },
      { label: 'Operasyon', slug: 'departmanlar/operasyon' },
      { label: 'Üretim ve İmalat', slug: 'departmanlar/uretim-imalat' },
      { label: 'Satınalma', slug: 'departmanlar/satinalma' },
      { label: 'İhracat', slug: 'departmanlar/ihracat' },
      { label: 'Finans', slug: 'departmanlar/finans' },
      { label: 'İnsan Kaynakları', slug: 'departmanlar/insan-kaynaklari' },
      { label: 'Hukuk', slug: 'departmanlar/hukuk' },
      { label: 'Bilgi Teknolojileri', slug: 'departmanlar/bilgi-teknolojileri' },
      { label: 'İdari İşler', slug: 'departmanlar/idari-isler' },
      { label: 'Liderlik', slug: 'departmanlar/liderlik' },
      { label: 'Eğitim ve Akademi', slug: 'departmanlar/egitim-akademi' },
      { label: 'Sağlık', slug: 'departmanlar/saglik' },
    ],
  },
  {
    label: 'Sözlük',
    landingSlug: 'sozluk',
    items: [
      { label: 'Sözlük', slug: 'sozluk' },
    ],
  },
];

/**
 * Flat list of all wiki page slugs (excluding duplicates from landings).
 * Used by sitemap and OG generator.
 */
export function allWikiSlugs(): string[] {
  const slugs = new Set<string>();
  slugs.add(''); // homepage
  slugs.add('okuma-sirasi');
  for (const section of wikiNav) {
    for (const item of section.items) {
      slugs.add(item.slug);
    }
  }
  return Array.from(slugs);
}

/**
 * Find a slug's parent section + neighbors (for prev/next + breadcrumb).
 */
export function findNav(slug: string): {
  section?: WikiNavSection;
  current?: WikiNavItem;
  prev?: WikiNavItem;
  next?: WikiNavItem;
} {
  for (const section of wikiNav) {
    const idx = section.items.findIndex((i) => i.slug === slug);
    if (idx !== -1) {
      return {
        section,
        current: section.items[idx],
        prev: idx > 0 ? section.items[idx - 1] : undefined,
        next: idx < section.items.length - 1 ? section.items[idx + 1] : undefined,
      };
    }
  }
  return {};
}
