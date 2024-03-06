# <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="react" width="30" height="30"/> ReactJS Small Projects <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="react" width="30" height="30"/>

- This project is just for learning purpose.

## Commands

### Create React Vite App (with Typescript + SWC)

```
npm create vite@latest
```

### Add Tailwind:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Configure Tailwind:

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Add in index.css:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Add Prettier

- Add Prettier:

```
npm add --include=dev prettier prettier-plugin-tailwindcss
npm add eslint-config-prettier@^9.1.0
```

- Format .prettierrc.json:

```
{
    "singleQuote": true,
    "plugins": ["prettier-plugin-tailwindcss"]
}
```

## Resources

- [Build 25 React Projects – Tutorial](https://www.youtube.com/watch?v=5ZdHfJVAY-s)
