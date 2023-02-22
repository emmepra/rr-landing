# Notes

## NPM dependencies to be installed

### node-fetch
Current version doesn't allow to be loaded by `require()` statements, used in out `fetch-google.cjs`. To let it work we should install its latest working version:

```bash
npm i node-fetch@2.6.1
```

### archieml

### scrollama

### LayerCake

## Structure

### config.js
Configuration file storing all of the needed info like `paths` or `parameters`.

## To Remember

### Svelte Components

1. `components/`
Main folder. Every file contained is a reusable page element, being it a **chart**, **paragraph** or **scroller**.
    1. `./charts`
    Contains complex charts, build starting from pieces brought from `./shared`
        1. `./shared`
        Basic charts elements that are **common** and **shared** across all the complex ones.
        
    1. `./layout`
    Stores base components, non-tuned ones. Actually they could be tuned for the needs of the page, but their scructure will be pretty much the same across multiple projects.
    1. `./parts` (*name to be reviewed*)
    Specific project components, designed to realize single and tailored site elements.
    **NB:** these components also include `charts` ones in order to guarantee a clean and readable `+page.svelte` main page!

### `setContect()`and `getContext()`
Way to globally share parameters across Svelte components!
