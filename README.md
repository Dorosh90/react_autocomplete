# React Autocomplete

You have an array of people. Implement the Autocomplete component
using [Bulma Dropdown](https://bulma.io/documentation/components/dropdown/)
that will suggest people matching an entered text.

- suggestions should appear after some `delay` in typing (`debounce`);
- the `delay` should be customizable via props (default value is 300ms);
- show the list of all people when input is focused but empty ([Check this](https://mui.com/material-ui/react-autocomplete/#combo-box) to see how it can work)
- show `No matching suggestions` message if there are no people containing the entered text;
- don't run filtering again if the text has not changed (a pause in typing happened when the text was the same as before)
- save selected suggestion text to the input on click and close the list;
- pass the selected person to the `onSelected` callback passed via props;
- add an `h1` to the `App` showing `Name (born - died)` of the selected person or `No selected person`.
- when the selected person is displayed in the title, but the value in the input changes, the selected person should be cleared and `No selected person` should be shown.

## Instructions
- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://Dorosh90.github.io/react_autocomplete/) and add it to the PR description.
- Don't remove the `data-qa` attributes. It is required for tests.

## Troubleshooting

If you have got an error during `npm install` like this (when it tries to install `node-sass`):

```bash
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! node-sass@6.0.1 postinstall: `node scripts/build.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the node-sass@6.0.1 postinstall script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```

Solutions:

- Install `sass` library instead of `node-sass`:

```bash
  npm uninstall node-sass
  npm install sass --save-dev
```

An alternative solution is to install `node-sass@npm:sass` version:

```bash
  npm install node-sass@npm:sass --save-dev
```
