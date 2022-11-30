export interface colorSample {
  style: string,
  tokenName: string,
  colorRole: string,
  figmaStyle: string
}

export const colorSamples: colorSample[] = [
  {
    style: '<div class="color-sample" style="background: var(--background);"></div>',
    tokenName: '--background',
    colorRole: 'CTA, Hue 700<br/>#2A4980',
    figmaStyle: 'button-primary / CTA /<br/> background'
  },
  {
    style: '<div class="color-sample" style="background: var(--background-hover);"></div>',
    tokenName: '--background-hover',
    colorRole: 'CTA, Hue 800<br/>#233F71',
    figmaStyle: 'button-primary / CTA /<br/> background'
  },
  {
    style: '<div class="color-sample" style="background: var(--border);"></div>',
    tokenName: '--border',
    colorRole: 'CTA, Hue 800<br/>#233F71',
    figmaStyle: 'button-primary / CTA /<br/> background'
  },
  {
    style: '<div class="color-sample" style="background: var(--border-disabled);"></div>',
    tokenName: '--border-disabled',
    colorRole: 'CTA, Hue 800<br/>#233F71',
    figmaStyle: 'button-primary / CTA /<br/> background'
  },
];

export const spacingsFixed: number[] = [4, 8, 12, 16, 24, 32, 40, 56, 72, 88, 100];

export interface breakpoint {
  svgPath: string,
  varName: string,
  width: number,
}

export const breakpoints: breakpoint[] = [
  {
    svgPath: 'assets/svg/icon-bp-1.svg',
    varName: '$bp-width-phone',
    width: 360,
  },
  {
    svgPath: 'assets/svg/icon-bp-2.svg',
    varName: '$bp-width-tablet',
    width: 768,
  },
  {
    svgPath: 'assets/svg/icon-bp-3.svg',
    varName: '$bp-width-tablet',
    width: 1366,
  },
];

export interface typography {
  tag: string,
  class: string | null // Use null if tag name is same as class name
  fontNWeight: string,
  size: string,
  lineHeight: string,
  textStyle: string, // ['key_for_style_name', 'tag_name']
  description: string | null // translation key or null if no description
}

export const typographys: typography[] = [
  {
    tag: 'h1',
    class: null,
    fontNWeight: 'Lato<br/>Regular',
    size: '36px / 2.25rem',
    lineHeight: '52px / 3.25rem<br/>16px / 1 rem',
    textStyle: 'Default / H1',
    description: null
  },
  {
    tag: 'h2',
    class: null,
    fontNWeight: 'Lato<br/>Regular',
    size: '32px / 2rem',
    lineHeight: '44px / 2.75rem<br/>16px / 1 rem',
    textStyle: 'Default / H2',
    description: null
  },
  {
    tag: 'h3',
    class: null,
    fontNWeight: 'Lato<br/>Regular',
    size: '28px / 1.75rem',
    lineHeight: '40px / 2.5rem<br/>12px / 0.75 rem',
    textStyle: 'Default / H3',
    description: null
  },
  {
    tag: 'h4',
    class: null,
    fontNWeight: 'Lato<br/>Regular',
    size: '24px / 1.5rem',
    lineHeight: '36px / 2.25rem<br/>12px / 0.75 rem',
    textStyle: 'Default / H4',
    description: null
  },
  {
    tag: 'h5',
    class: null,
    fontNWeight: 'Lato<br/>Regular',
    size: '20px / 1.25rem',
    lineHeight: '28px / 1.75rem<br/>12px / 0.75 rem',
    textStyle: 'Default / H5',
    description: null
  },
  {
    tag: 'h1-emphasis',
    class: 'h1 emphasis',
    fontNWeight: 'Lato<br/>Regular',
    size: '36px / 2.25rem',
    lineHeight: '52px / 3.25rem<br/>16px / 1 rem',
    textStyle: 'Default / H1',
    description: null
  }
];
