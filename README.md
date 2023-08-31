This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Getting Started with the app

Creating A Firebase Project
To create a new Firebase Project, visit https://console.firebase.google.com/ and hit Add Project.

Give your project a name, enable/disable Google Analytics to your choosing and hit Create Project.

We  will create and configure all of the resources we'll be using in our project, on the left-hand-side menu, you can see all of the resources you can configure for your project.


Configuring The Project
Click the gear icon and navigate to Project Settings

Now we'll need to create a Web App under this Project

Give it a name and register the application.

Storing Config as Environment Variables
Leave the configuration script open; we'll now convert these key-values into environment variables in our codebase.

Create a .env.local file at the root of your project.

We need to copy these config values into our environment variables, like so:

NEXT_PUBLIC_FIREBASE_API_KEY=<your-api-key>

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-auth-domain>

NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-project-id>

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-sender-id>

NEXT_PUBLIC_FIREBASE_APP_ID=<your-firebase-app-id>

Now, change the NEXT_PUBLIC_FIREBASE_API_KEY for the path where the Firebase Service Account file is located.

Great, now we have all of our configuration values stored in Environment Variables.



