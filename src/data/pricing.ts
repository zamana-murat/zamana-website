// Zamana price list (TL, KDV hariç) and the time-limited campaign layer.
// List prices are Locked (root CLAUDE.md). The campaign shows them struck through with the
// discounted price next to them. To end the campaign: set `campaign.active = false` and rebuild.
// The check below also turns it off automatically on builds after `endsAt`.

export const campaign = {
  active: true,
  /** Share of the list price the customer pays (0.5 = %50 indirim). */
  factor: 0.5,
  percentLabel: '%50',
  /** Last valid day, Türkiye time. */
  endsAt: '2026-12-31',
  endLabel: '31 Aralık 2026',
  name: 'Yıl sonu kampanyası',
};

export const campaignOn = (now: Date = new Date()): boolean =>
  campaign.active && now.getTime() <= new Date(`${campaign.endsAt}T23:59:59+03:00`).getTime();

/** Locked list prices (TL, KDV hariç). Use these instead of typing numbers into pages. */
export const LIST = {
  retainer6: 100_000, // / ay, 6 çalışan
  retainer12: 185_000,
  retainer18: 265_000,
  retainer24: 350_000,
  retainerMin: 300_000, // minimum 3 ay toplamı
  bireysel: 40_000,
  devamDestegi: 8_000, // / ay
  yonetici: 15_000,
  ekSaat: 5_000,
  ekAy: 27_500,
  sampiyon: 80_000,
  sampiyonRetainer: 65_000,
  egitmen: 45_000,
  ihracatci: 45_000,
  hukuk: 45_000,
  ekKisi: 20_000, // ihracatçı / hukuk ekip, kişi başı
  kamuSeminer: 45_000,
  kamuIkinciSeminer: 35_000,
  kamuAtolye: 30_000,
  akademisyen: 30_000,
  akademisyenGrup: 75_000,
  yeniMezun: 7_500, // kişi başı
} as const;
export type PriceId = keyof typeof LIST;

/** Price the customer pays now (campaign applied). Works for any list amount, incl. derived totals. */
export const sale = (listAmount: number): number =>
  campaignOn() ? Math.round(listAmount * campaign.factor) : listAmount;

/** "40.000" style Turkish grouping. */
export const fmt = (n: number): string => n.toLocaleString('tr-TR');
export const tl = (n: number): string => `${fmt(n)} TL`;

/** Plain-text price for meta descriptions, FAQ schema and other places without HTML. */
export const priceText = (listAmount: number): string =>
  campaignOn() ? `${tl(sale(listAmount))} (${campaign.percentLabel} indirimle, normal fiyatı ${tl(listAmount)})` : tl(listAmount);

/** Short plain text: "20.000 TL" during the campaign, "40.000 TL" otherwise. */
export const nowText = (listAmount: number): string => tl(sale(listAmount));

/** HTML for places that take a string (props rendered with set:html, JS templates). Same markup as <Price />. */
export const priceHtml = (listAmount: number): string =>
  campaignOn()
    ? `<span class="price price--sale"><span class="price__was"><span class="price__chip" aria-hidden="true">${campaign.percentLabel} indirim</span><s class="price__old"><span class="visually-hidden">Normal fiyat: </span>${tl(listAmount)}</s></span> <span class="price__new"><span class="visually-hidden">Kampanya fiyatı: </span>${tl(sale(listAmount))}</span></span>`
    : `<span class="price">${tl(listAmount)}</span>`;

/** Schema.org Offer extras during the campaign. */
export const offerValidity = (): Record<string, string> => (campaignOn() ? { priceValidUntil: campaign.endsAt } : {});
