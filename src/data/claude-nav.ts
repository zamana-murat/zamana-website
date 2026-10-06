// "Claude" section navigation: single source of truth for the header mega menu,
// the mobile accordion, the /claude/ hub grid and the footer group.
// Content pages live in src/content/claude/<slug>.md; hrefs here must match them.

export interface ClaudeNavItem {
  label: string;
  href: string;
  /** Short one-line Turkish description (small grey text in the menu). */
  desc: string;
  /** Content collection slug this item points to ('' = /claude/ index). */
  slug?: string;
  external?: boolean;
}

export interface ClaudeNavGroup {
  /** Small uppercase heading above the items. */
  title: string;
  items: ClaudeNavItem[];
}

export interface ClaudeNavColumn {
  id: string;
  groups: ClaudeNavGroup[];
  /** Items in this column render with a trailing arrow icon (Modeller). */
  arrow?: boolean;
}

export const claudeNavColumns: ClaudeNavColumn[] = [
  {
    id: 'urunler',
    groups: [
      {
        title: 'Ürünler',
        items: [
          { label: 'Claude', href: '/claude/', slug: '', desc: 'Yazma, analiz ve araştırma için yapay zeka asistanı' },
          { label: 'Claude Code', href: '/claude/claude-code/', slug: 'claude-code', desc: 'Yazılım ekipleri için kodlama ajanı' },
          { label: '@Claude', href: '/claude/tag/', slug: 'tag', desc: "Slack'te etiketleyerek iş verin" },
        ],
      },
      {
        title: 'Uzmanlaşmış',
        items: [
          { label: 'Claude Security', href: '/claude/security/', slug: 'security', desc: 'Kodda açık tarar, düzeltme önerir' },
          { label: 'Claude Science', href: '/claude/science/', slug: 'science', desc: 'Bilimsel araştırma için çalışma tezgâhı' },
        ],
      },
    ],
  },
  {
    id: 'yetenekler',
    groups: [
      {
        title: 'Yetenekler',
        items: [
          { label: 'Artifacts', href: '/claude/artifacts/', slug: 'artifacts', desc: 'Sohbetten belge, tablo ve mini uygulama' },
          { label: 'Design', href: '/claude/design/', slug: 'design', desc: 'Sunum, prototip ve görsel tasarım' },
          { label: 'Connectors', href: '/claude/connectors/', slug: 'connectors', desc: 'Kullandığınız uygulamalara bağlanır' },
          { label: 'Plugins', href: '/claude/plugins/', slug: 'plugins', desc: 'Rolünüze göre hazır paketler' },
          { label: 'Skills', href: '/claude/skills/', slug: 'skills', desc: 'Tekrarlanan işler için kayıtlı yöntemler' },
        ],
      },
    ],
  },
  {
    id: 'eklentiler',
    groups: [
      {
        title: 'Eklentiler',
        items: [
          { label: 'Claude for Chrome', href: '/claude/chrome/', slug: 'chrome', desc: 'Tarayıcıda sizin yerinize gezinir' },
          { label: 'Claude for Microsoft 365', href: '/claude/microsoft-365/', slug: 'microsoft-365', desc: 'Excel, Word, PowerPoint ve Outlook içinde' },
        ],
      },
    ],
  },
  {
    id: 'modeller',
    arrow: true,
    groups: [
      {
        title: 'Modeller',
        items: [
          { label: 'Mythos', href: '/claude/modeller/#mythos', slug: 'modeller', desc: 'Davetle erişilen, Fable düzeyinde model' },
          { label: 'Fable', href: '/claude/modeller/#fable', slug: 'modeller', desc: 'En güçlü genel model, uzun ajan işleri' },
          { label: 'Opus', href: '/claude/modeller/#opus', slug: 'modeller', desc: 'Çoğu iş için önerilen başlangıç' },
          { label: 'Sonnet', href: '/claude/modeller/#sonnet', slug: 'modeller', desc: 'Hız ve kalite dengesi' },
          { label: 'Haiku', href: '/claude/modeller/#haiku', slug: 'modeller', desc: 'En hızlı ve en hafif model' },
        ],
      },
    ],
  },
];

/** Bottom strip of the mega menu. */
export const claudeNavFooter = {
  migrate: { label: "Claude'a geçiş", href: '/claude/gecis/', desc: 'Başka bir asistandan geçmek için' },
  buttons: [
    { label: 'Uygulamaları indir', href: 'https://claude.com/download', external: true },
    { label: "Claude'a giriş", href: 'https://claude.ai', external: true },
  ],
};

/** Hub (/claude/) and footer helpers. */
export const claudeHubGroups: { title: string; items: ClaudeNavItem[] }[] = [
  ...claudeNavColumns.flatMap((c) => c.groups),
  {
    title: 'Geçiş',
    items: [{ label: claudeNavFooter.migrate.label, href: claudeNavFooter.migrate.href, slug: 'gecis', desc: claudeNavFooter.migrate.desc }],
  },
];

export const claudeFooterLinks: { label: string; href: string }[] = [
  { label: 'Claude nedir', href: '/claude/' },
  { label: 'Claude Code', href: '/claude/claude-code/' },
  { label: 'Artifacts', href: '/claude/artifacts/' },
  { label: 'Connectors', href: '/claude/connectors/' },
  { label: 'Claude for Microsoft 365', href: '/claude/microsoft-365/' },
  { label: 'Modeller', href: '/claude/modeller/' },
];
