# Brilliant Sciences

A web app for science learning: browse topic-specific content, continue courses in a video-based classroom, and (for instructors) manage courses and track learner activity. The product is **under active development**.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) 12 (Pages Router) |
| UI | [React](https://react.dev/) 17, [MUI](https://mui.com/) (Material UI v4/v5 mix), [Tailwind CSS](https://tailwindcss.com/) 3 |
| State | [Redux](https://redux.js.org/) with Redux DevTools in development |
| Backend / auth | [Firebase](https://firebase.google.com/) (Auth, Firestore usage via helpers) |
| Media | [react-player](https://github.com/cookpete/react-player) for video |

## Prerequisites

- **Node.js** 16+ recommended (LTS)
- **npm** (comes with Node)

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment variables**

   Create a `.env.local` file in the project root. Firebase expects a public API key:

   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_web_api_key
   ```

   The rest of the Firebase web config is in `helpers/firebase.js` (project `brilliant-sciences`). Use the API key from the same Firebase project in the [Firebase console](https://console.firebase.google.com/) → Project settings → Your apps → Web app.

3. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Next.js in development mode |
| `npm run build` | Production build |
| `npm run start` | Serve the production build (run `build` first) |

## Project layout (overview)

- `pages/` — Routes: home (`/`), search (`/search`), course viewer (`/class`), plans (`/plans`), about (`/about`), account (`/account/*`), password reset (`/resetpassword`).
- `components/` — Shared UI, **standard** learner views (video, description, assessment, profile), and **admin** views (courses, pricing, requests, etc.).
- `redux/` — Global store: user session, course selection, platform settings.
- `helpers/` — Firebase init, auth helpers, course CRUD and uploads.
- `styles/` — Global CSS and Tailwind entry.

Authenticated users see either a **standard** profile or an **admin** profile depending on `User.is_admin` in Redux (`pages/account/index.js`).

## Deployment

Typical hosting: **Vercel** or any Node host that supports Next.js. Set `NEXT_PUBLIC_FIREBASE_API_KEY` in the host’s environment variables for production builds.

## License

Private repository; all rights reserved unless otherwise stated by the authors.
