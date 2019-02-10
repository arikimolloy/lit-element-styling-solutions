# 🔥 LitElement Styling Solutions 💄

Demonstrates different external styling solutions for [LitElement](https://lit-element.polymer-project.org/). Some of these implementations apply to vanilla Web Components as well.

## Demo

See the demo [here](https://arikimolloy.github.io/lit-element-styling-solutions/).

## Styling Solutions

\#1: [Import external CSSResult](./docs/import-external-cssresult/README.md)  
\#2:

## Todo

[ ] Create a full write-up  
[ ] Organize code better  
[ ] Add code snippets to demo  
[ ] Detail when a user would want to choose each solution, provide real-world examples  
[ ] Convert to Sass, figure out better inheritance/composition/organization of styles  
[ ] Demo Justin's idea for a solution: Walk up the shadow host tree looking for elements that have a certain property that'll contain theme styles, and apply them. This could incur some cost, but there's some memoization that can be done to reduce it. Similar to ThemableMixin I believe.  
[ ] Demo [shadow parts](https://www.w3.org/TR/css-shadow-parts-1/)

## See Also

Visit [open-wc](https://open-wc.org/) for recommendations and easy setup for writing your own Web Components.
