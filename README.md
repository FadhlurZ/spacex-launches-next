# SpaceX Launches - Next

Developed by Muhammad Fadhlurrohman

This is the repository of SpaceX Launches. The frontend is developed using [Next.js 15](https://nextjs.org/). This is a simple webapp to display SpaceX launches from this [SpaceX GraphQL API](https://studio.apollographql.com/public/SpaceX-pxxbxen/variant/current/home).

## First time setup

- Make sure you use the current Node version (found in .nvmrc) by running the following command. If have [nvm](https://github.com/nvm-sh/nvm) installed, you can use the following command to switch to the correct node version: `nvm use`
- Install packages using `npm install`
- Make sure the `.env` has the [API Endpoint](https://spacex-production.up.railway.app/) filled in
- After successful install run the development environment using `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

A quick overview of the project is seen below

```text
spacex-launches-next
├─ node_modules/
├─ src/
│  ├─ app                   Layout and pages of the website
│  ├─ components            Reusable components used within the app
│  ├─ gql                   GraphQL Codegen generated files
│  ├─ hooks                 Hooks used within the app
│  ├─ i18n                  next-intl configuration files
│  ├─ lib                   Methods and API options used troughout the app
│  ├─ messages              Translations used by next-intl
├─ package.json
├─ README.md
```

## Commands

The following commands are found in `package.json` are used as follows.

`npm run dev` - Starts the development server and runs the graphql-codegen watcher to automatically regenerate typings for GraphQL-related code

`npm run build` - Create a Next build

## Next.js

This application uses the `app` router of Next.js.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Styling

[Tailwind](https://tailwindcss.com/) is used for all styling. The theme is defined in `src/app/globals.css` and is used troughout the application.

## Techstack overview

- Styling: Tailwind
- Component Library: shadcn
- Internationalization: next-intl
- Client state management: Tanstack Query
- GraphQL Typings: GraphQL Codegen
