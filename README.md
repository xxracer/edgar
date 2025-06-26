# Emergency Locksmith Website

This is a Next.js application for an emergency locksmith service, built with Firebase Studio. It features service pages for car, house, and safe lockouts.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Next, set up your environment variables. Copy the `.env.local.example` file to a new file named `.env.local` and add your Google AI API key. You can get a free key from [Google AI Studio](https://aistudio.google.com/app/apikey).

```
GOOGLE_API_KEY=your_api_key_here
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Generative AI:** [Firebase Genkit](https://firebase.google.com/docs/genkit)
