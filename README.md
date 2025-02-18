# Alitan

Alitan is a modern Discord clone built with the latest web technologies. It features a real-time chat system, voice and video calls, and various other communication tools.

![Alitan Logo](./path-to-logo.png)

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Keys](#api-keys)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Description

Alitan is a fully-featured messaging app, designed to provide the best experience for real-time text, voice, and video communication. Inspired by Discord, it integrates social features such as channels, servers, and direct messaging, making it a versatile platform for both personal and professional communication.

---

## Features

- **Text Chat:** Real-time messaging in servers or direct messages.
- **Voice and Video Calls:** One-on-one or group voice and video calling with support for live streaming.
- **Server Management:** Create, manage, and customize servers and channels.
- **User Roles and Permissions:** Role-based permissions for server and channel access.
- **File Uploads:** Send images, documents, and other files in messages.
- **Notifications:** Real-time notifications for messages, mentions, and invites.
- **Custom Emojis & Reactions:** Use custom emojis for personalized interactions.
- **Presence & Status:** See who's online and what they're up to.
- **Integrated Media Sharing:** Stream media files seamlessly within the app.
- **Bots and Integrations:** Support for bots to enhance functionality.

---

## Technologies Used

- **Frontend:** Next.js, Tailwind CSS, ShadCN
- **Backend:** Node.js
- **Database:** PostgreSQL (Supabase)
- **Authentication:** Clerk
- **Real-Time Communication:** LiveKit
- **File Uploads:** UploadThing
- **Package Manager:** pnpm

---

## Getting Started

These instructions will help you set up and run the project locally for development purposes.

### Prerequisites

You need the following installed:

- Node.js: [Install Node.js](https://nodejs.org/)
- pnpm: [Install pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rns-jey/alitan.git
   ```

2. Navigate to the project directory:

   ```bash
   cd alitan
   ```

3. You will need to provide API keys for the following services:

- Clerk: [Clerk API keys](https://clerk.com/)
- LiveKit: [LiveKit API keys](https://livekit.io/)
- UploadThing: [UploadThing API keys](https://uploadthing.com/)
- Supabase: [Supabase Database URLs](https://supabase.com/)

  ```bash
  DATABASE_URL="postgresql://[DB-USER].[PROJECT-REF]:[PRISMA-PASSWORD]@[DB-REGION].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
  DIRECT_URL="postgresql://[DB-USER].[PROJECT-REF]:[PRISMA-PASSWORD]@[DB-REGION].pooler.supabase.com:5432/postgres"
  NEXT_PUBLIC_LIVEKIT_URL=your_livekit_url
  LIVEKIT_API_KEY=your_livekit_api_key
  LIVEKIT_API_SECRET=your_livekit_api_secret
  CLERK_SECRET_KEY=your_clerk_secret_key
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
  UPLOADTHING_APP_ID=your_uploadthing_app_id
  UPLOADTHING_SECRET=your_uploadthing_secret
  ```

4. Install dependencies using pnpm:

   ```bash
   pnpm install
   ```

5. Push the schema to the database:

   ```bash
   npx prisma db push
   ```

---

## Usage

To run the app locally:

```bash
pnpm run dev
```

Visit http://localhost:3000 to access the app.

---
