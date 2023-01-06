Ce qui précède est une information générale afin de commencer. Vous pouvez trouver des directives d'utilisation Figma plus détaillées spécifiques à chaque partie du système sur leurs pages respectives sur ce site.
## Commencer

Pour installer les styles du système de conception, vous devrez exécuter la commande suivante à l'aide de [npm](https://www.npmjs.com/) :

```
npm install --save-dev @ircc-ca/ds-sdc-core
```

## Usage

Dans votre feuille de style de niveau racine, initialisez le système de conception avec ce qui suit :

**Pour les sites Web externes :**
```scss
@use '~@ircc-ca/ds-sdc-core/index' as ircc-ds;
@include ircc-ds.theme-init-required(ircc-ds.palette-journeylab(), default, large);
@include ircc-ds.element-styles();
```
**Pour les sites Web internes :**
```scss
@use '~@ircc-ca/ds-sdc-core/index' as ircc-ds;
@include ircc-ds.theme-init-required(ircc-ds.palette-journeylab(), default, large);
@include ircc-ds.element-styles();
```

## Themes

Vous pouvez définir le thème de votre projet come Light, Dark ou System. Définir le thème System appliquera le thème Light ou Dark à l'interface utilisateur de vos applications en fonction des préférences du système d'exploitation de l'utilisateur.

**Pour utiliser le thème Light :**
```
<code block/>
```
**Pour utiliser le thème Dark :**
```
<code block/>
```
**Pour utiliser la préférence du système d'exploitation des utilisateurs pour définir le thème :**
```
<code block/>
```

## Font Awesome

Le noyau du système de conception exploite l'utilisation des kits Font Awesome pour importer les icônes utilisées par le système de conception. Placez ce qui suit dans la tête de votre projet pour dérouler les icônes pertinentes.
```
<code block/>
```

## Versions

Le système de conception utilise deux types de versions : les versions de correctifs et les versions complètes. Pour cibler un type de version spécifique, utilisez le modèle approprié et spécifiez le numéro de version.

**Pour installer une version de correctif :**
```
<code block/>
```

**Pour installer une version bêta :**
```
<code block/>
```

**Pour installer une version complète :**
```
<code block/>
```
