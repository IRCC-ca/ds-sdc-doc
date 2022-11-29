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

export const spacingsFixed: number[] = [4, 8, 12, 16, 24, 32, 40, 56, 72, 88, 100, 400];

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
  textStyle: [string, string], // ['key_for_style_name', 'tag_name']
  description: string | null // translation key or null if no description
}

export const typographys: typography[] = [
  {
    tag: 'h1',
    class: null,
    fontNWeight: 'Utilities.content.lato-regular',
    size: '36px / 2.25rem',
    lineHeight: '52px / 3.25rem<br/>16px / 1 rem',
    textStyle: ['Utilities.content.default', 'H1'],
    description: null
  },
  {
    tag: 'h2',
    class: null,
    fontNWeight: 'Utilities.content.lato-regular',
    size: '32px / 2rem',
    lineHeight: '44px / 2.75rem<br/>16px / 1 rem',
    textStyle: ['Utilities.content.default', 'H2'],
    description: null
  },
  {
    tag: 'h1-emphasis',
    class: 'h1 emphasis',
    fontNWeight: 'Utilities.content.lato-regular',
    size: '36px / 2.25rem',
    lineHeight: '52px / 3.25rem<br/>16px / 1 rem',
    textStyle: ['Utilities.content.emphasis', 'H1'],
    description: null
  }
];
