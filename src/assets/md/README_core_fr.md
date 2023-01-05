Ce package contient la fonctionnalité de thème pour le Journey Design System
## Getting started

To install the IRCC Digital Journey Labs Design System styles, you will need to run the following command using [npm](https://www.npmjs.com/):

```
npm install --save-dev @ircc-ca/ds-sdc-core
```

## Usage

In your root-level stylesheet, initialize the design system with the following:

**For external websites:**
```scss
@use '~@ircc-ca/ds-sdc-core/index' as ircc-ds;
@include ircc-ds.theme-init-required(ircc-ds.palette-journeylab(), default, large);
@include ircc-ds.element-styles();
```
**For internal websites:**
```scss
@use '~@ircc-ca/ds-sdc-core/index' as ircc-ds;
@include ircc-ds.theme-init-required(ircc-ds.palette-journeylab(), default, large);
@include ircc-ds.element-styles();
```

## Themes

You can set the theme for your project to either Light, Dark or System. Setting the theme to System will apply the Light or Dark theme to your applications UI based on the users Operating System preferences.
**To use the Light theme:**
```
<code block/>
```
**To use the Dark theme:**
```
<code block/>
```
**To use the users Operating System preference to set the theme:**
```
<code block/>
```

## Font Awesome

The Design System core leverages the use of Font Awesome kits to import icons used by the design system. Place the following in the head of your project to pull down the relevant icons.
```
<code block/>
```

## Releases

The Design System utilizes three different types of releases: patch releases, beta releases and full releases. To target a specific release type use the relevant pattern and specify the release number.

**To install a patch release:**
```
<code block/>
```

**To install a beta release:**
```
<code block/>
```

**To install a full release:**
```
<code block/>
```
