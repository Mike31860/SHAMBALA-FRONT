## Getting Started

Creating A Firebase Project
To create a new Firebase Project, visit https://console.firebase.google.com/ and hit Add Project.

Give your project a name, enable/disable Google Analytics to your choosing and hit Create Project.

We  will create and configure all of the resources we'll be using in our project, on the left-hand-side menu, you can see all of the resources you can configure for your project.

The ones we'll be using are:

Authentication
Firestore Database
Functions
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









