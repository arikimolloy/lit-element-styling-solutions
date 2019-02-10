# 🔥 LitElement Styling Solutions 💄

Demonstrates different external styling solutions for [LitElement](https://lit-element.polymer-project.org/). Some of these implementations apply to vanilla Web Components as well.

**These are special-case solutions** and should probably only be used internally in an organization, where the organization has a suite of complex Web Components to be reused across projects which each might require a completely different look-and-feel via complex CSS rules.

For simple theming (e.g. color schemes and fonts), CSS properties (and [shadow parts](https://www.w3.org/TR/css-shadow-parts-1/), when implemented) should suffice.

For Web Components with complex business logic, it may be better for you to abstract functionality into a "base" Web Component which consumers can extend and implement their own DOM and styling and define in the custom element registry.

Publicly published web components likely should not use any of these solutions, most of these solutions are hacky/fragile/undesirable.

## Demo

See the demo [here](https://arikimolloy.github.io/lit-element-styling-solutions/).

## Styling Solutions

\#1: [Import external CSSResult](./docs/import-external-cssresult/README.md)  
\#2: [Link to external stylesheet](./docs/link-to-external-stylesheet/README.md)  
\#3: [Render to the light DOM](./docs/render-to-light-dom/README.md)  
\#4: [Extend the web component](./docs/extend-web-component/README.md)  
\#5: [Use a global styles object](./docs/global-styles-object/README.md)

## Todo
 
[ ] Convert to Sass, figure out better inheritance/composition/organization of styles  
[ ] Demo Justin's idea for a solution: Walk up the shadow host tree looking for elements that have a certain property that'll contain theme styles, and apply them. This could incur some cost, but there's some memoization that can be done to reduce it. Similar to ThemableMixin I believe.  
[ ] Demo [shadow parts](https://www.w3.org/TR/css-shadow-parts-1/)

## See Also

Visit [open-wc](https://open-wc.org/) for recommendations and easy setup for writing your own Web Components.
