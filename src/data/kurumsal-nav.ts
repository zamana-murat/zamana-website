// "Kurumsal" section navigation: Turkish adaptation of claude.com's Enterprise menu.
// Single source of truth for the header mega menu, the mobile accordion, the /kurumsal/
// hub grid and the footer group. Content pages live in src/content/kurumsal/<slug>.md.

import type { ClaudeNavColumn, ClaudeNavItem, MegaNavFooter } from './claude-nav';

export const kurumsalNavColumns: ClaudeNavColumn[] = [
  {
    id: 'kurumsal',
    groups: [
      {
        title: 'Kurumsal',
        items: [
          { label: 'Genel bakış', href: '/kurumsal/', slug: '', desc: 'Claude Enterprise ile kurumun tamamında Claude' },
          { label: 'Kurumlar için Claude Code', href: '/kurumsal/claude-code/', slug: 'claude-code', desc: 'Yazılım ekipleri için yönetilen kodlama ajanı' },
          { label: 'Claude Platform', href: '/kurumsal/platform/', slug: 'platform', desc: 'Kendi ürününüzü Claude üzerine kurun' },
        ],
      },
    ],
  },
  {
    id: 'kullanim',
    groups: [
      {
        title: 'Kullanım alanları',
        items: [
          { label: 'Yapay zeka ajanları', href: '/kurumsal/ajanlar/', slug: 'ajanlar', desc: 'Çok adımlı işleri uçtan uca yürüten ajanlar' },
          { label: 'Kodlama', href: '/kurumsal/kodlama/', slug: 'kodlama', desc: 'Yazılım geliştirmeyi hızlandırın' },
          { label: 'Ticaret', href: '/kurumsal/ticaret/', slug: 'ticaret', desc: 'E-ticaret ve perakendede alışveriş deneyimi' },
        ],
      },
      {
        title: 'Departmanlar',
        items: [
          { label: 'Müşteri desteği', href: '/kurumsal/musteri-destegi/', slug: 'musteri-destegi', desc: 'Daha hızlı ve tutarlı destek' },
          { label: 'Siber güvenlik', href: '/kurumsal/siber-guvenlik/', slug: 'siber-guvenlik', desc: 'Tehdit analizi ve güvenlik operasyonları' },
          { label: 'Hukuk', href: '/kurumsal/hukuk/', slug: 'hukuk', desc: 'Sözleşme inceleme ve hukuki araştırma' },
          { label: 'Satış', href: '/kurumsal/satis/', slug: 'satis', desc: 'Hazırlık, teklif ve takip işleri' },
        ],
      },
    ],
  },
  {
    id: 'sektorler',
    groups: [
      {
        title: 'Sektörler',
        items: [
          { label: 'Finansal hizmetler', href: '/kurumsal/finansal-hizmetler/', slug: 'finansal-hizmetler', desc: 'Banka, sigorta ve yatırım kuruluşları' },
          { label: 'Kamu', href: '/kurumsal/kamu/', slug: 'kamu', desc: 'Kamu kurumları ve belediyeler' },
          { label: 'Sağlık', href: '/kurumsal/saglik/', slug: 'saglik', desc: 'Hastaneler ve sağlık kuruluşları' },
          { label: 'Yükseköğretim', href: '/kurumsal/yuksekogretim/', slug: 'yuksekogretim', desc: 'Üniversiteler, öğrenciler ve akademisyenler' },
          { label: 'Öğretmenler', href: '/kurumsal/ogretmenler/', slug: 'ogretmenler', desc: 'İlkokuldan liseye öğretmenler' },
          { label: 'Yaşam bilimleri', href: '/kurumsal/yasam-bilimleri/', slug: 'yasam-bilimleri', desc: 'İlaç, biyoteknoloji ve klinik araştırma' },
          { label: 'Sivil toplum', href: '/kurumsal/sivil-toplum/', slug: 'sivil-toplum', desc: 'Vakıflar, dernekler ve STK\'lar' },
        ],
      },
    ],
  },
];

export const kurumsalNavFooter: MegaNavFooter = {
  link: { label: "Claude Marketplace'e göz atın", href: '/kurumsal/marketplace/', desc: 'Claude ile çalışan iş ortağı çözümleri' },
  buttons: [
    { label: 'Müşteri hikâyeleri', href: '/kurumsal/musteriler/' },
    { label: 'Anthropic satış ekibi', href: 'https://claude.com/contact-sales', external: true },
  ],
};

/** Hub (/kurumsal/) and footer helpers. */
export const kurumsalHubGroups: { title: string; items: ClaudeNavItem[] }[] = [
  ...kurumsalNavColumns.flatMap((c) => c.groups),
  {
    title: 'Ekosistem',
    items: [
      { label: kurumsalNavFooter.link.label, href: kurumsalNavFooter.link.href, slug: 'marketplace', desc: kurumsalNavFooter.link.desc },
      { label: 'Müşteri hikâyeleri', href: '/kurumsal/musteriler/', slug: 'musteriler', desc: 'Claude kullanan kurumlardan örnekler' },
    ],
  },
];

export const kurumsalFooterLinks: { label: string; href: string }[] = [
  { label: 'Claude Enterprise', href: '/kurumsal/' },
  { label: 'Kurumlar için Claude Code', href: '/kurumsal/claude-code/' },
  { label: 'Yapay zeka ajanları', href: '/kurumsal/ajanlar/' },
  { label: 'Finansal hizmetler', href: '/kurumsal/finansal-hizmetler/' },
  { label: 'Kamu', href: '/kurumsal/kamu/' },
  { label: 'Müşteri hikâyeleri', href: '/kurumsal/musteriler/' },
];
