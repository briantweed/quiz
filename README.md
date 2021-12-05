# Tailwind Theme Test

---

[https://tailwind-theme-test.vercel.app/](https://tailwind-theme-test.vercel.app/)

---

- Node *14.17.6*
- Next.js *12.0*
- Tailwind *v2.2*

---

## Setup

- Run `npm install`
- Once complete run `npm run dev`
- Visit [http:localhost:3000](http:localhost:3000)

---


Tailwind is great for styling components. It even comes with a handy dark mode.

But what if you want a 3rd or 4th theme? And how would you switch between them?

I have a solution. It involves the Context API, some hooks, a High Order Component and a few Gulp commands
to combat maintenance issues.

### 1. Tailwind

Configure `tailwind.config.js`

- Turn off dark mode by setting `darkMode: false,`
- Add the colours and variations for all your themes

### 2. Themes.css

- Add a class for each theme you want to create.
- Should include all base colour styles

```css
body.default {
    color: #333333;
    background: #FFFFFF;
    transition: all 0.5s ease;
}
```

### 3. ThemeWrapper

The ThemeWrapper component uses Context to store the selected theme 
and to make it available (along with some other properties) to any nested child component.

The selection is stored to local storage and loaded on page load.

- Wrap [./pages/_app.js](_app.js) with the component
- ThemeWrapper required 2 prop:
  - `themes` : array of theme objects `{value: "theme", label: "Theme}`
  - `storageKey` : name of local storage key

### 4. Themed Components

ThemeWrapper also contains an HOC which adds the necessary props to any component that needs to implement the selected theme.

 - `theme` (string) className of selected theme
 - `label` (string) theme text display
 - `methods: {update, implode}` (object)
   - `update` (function) store selected theme
   - `implode` (function) combine the selected theme class with any default component classes into a single string

Within the scoped `.scss` file for each component is a section for themes marked with a start and end comment tag.

** !! Each component that needs theme info must contain these comment tags !! **

```css
// ----- THEMES -----------------------------

    &.default {
        @apply bg-default;
        @apply text-default;
    }

// ----------------------------------------*-
```

### 5. Gulp

Use Gulp to create any new component. Gulp uses the template files found in the `gulp` folder and will save you having to add the theme comment tags everytime

`gulp make --component=ComponentName` - will create a component in the `app/component` folder

To add a component to a subfolder, add the folder structure before the ComponentName. Both `.` and `/` are acceptable separators

`gulp make --component=shared.ComponentName`

---

Gulp can also add a new style class to each `.scss` that contains the comment tags.

`gulp add --theme=theme-name` - will add `.theme-name` to each file found and to `themes.css`


