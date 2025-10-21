# sveltuner

> _just a bit more... just a bit less..._

[![Netlify Status](https://api.netlify.com/api/v1/badges/70ecad19-b413-44bd-ba84-92c415a73450/deploy-status)](https://app.netlify.com/projects/sveltuner/deploys)


A simple bass / guitar tuner made with SvelteKit. It doesnt actually listen for sounds but plays back the correct note when the corresponding string is pressed.

## Testing locally

You first need to install dependencies
```sh
pnpm install
```

Then you can run the dev server
```sh
# run dev server
pnpm run dev

# same but directly open the app in a browser tab
pnpm run dev --open
```

## TODO

- "record" B0 (bass) & D4 (guitar) 
- maaaaaaybe add localstorage to save last used setting
- add styling once everything works