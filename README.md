# Linear Clone

A project management application built with Next.js, inspired by Linear.

## Features

- User authentication (sign up, sign in, sign out)
- Issue management (create, update, delete)
- Modern UI with Tailwind CSS
- Responsive design

## Tech Stack

- [Next.js 13+](https://nextjs.org/) with App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Prisma](https://www.prisma.io/) for database ORM
- [PostgreSQL](https://www.postgresql.org/) for database
- [NextAuth.js](https://next-auth.js.org/) for authentication

## Getting Started

![alt text](image.png)

### Prerequisites

- Node.js 16+ and npm/yarn
- PostgreSQL database (or use a service like [Neon](https://neon.tech/))

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/linear-clone.git
   cd linear-clone
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Copy the `.env.example` file to `.env.local` and update the values

   ```bash
   cp .env.example .env.local
   ```

   https://www.instagres.com/

4. Set up your database and update the `DATABASE_URL` in `.env.local`

5. Run database migrations

   ```bash
   npx prisma db push
   ```

6. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `app/api/` - API routes for authentication and issues
- `app/components/` - Reusable UI components
- `lib/` - Utility functions and libraries
- `prisma/` - Database schema and client

static routes
static information, dont change, nextjs prerendered this.

dynamic routes
typical have parameter on it

layouts
components that wrap pages and nnever change
layouts always inherits from another lyaout

route group

## Styling

use tailwind

## 05 static pages

'use client' is a directive. react feature: regular SPA application client side React.

this is how static pages works

![alt text](image-1.png)

this happens because

PAGES(static non static) are not rendered or execute(compiled) it by Next.js until I visit it in DEV mode (takes a while the first time, then it is ok to go)

static pages: regula rpages that dont fetch data or any dynamic data / not personalized to the user is looking at it
should be heavily optimized

if you want to prerender a lot of static pages (like 50 blog post, -> that they are not going to change)
you should use https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes#generating-static-params

## 06 Server Actions / server functions

Async function that gets called on the server, but usually initiated in some interaction
something in the client happens and then the server action gets fired

is a more streamline way to create API routes without actually make api routes

Zod is a runtime schemas -> we can check an schema in runtime and gert an error or not

yuo should have form validation on the cliente and also in the route

### in actions/auth.ts

'use server' directive

every action that gets exported, is essentially an api route -> get bundled with the serverwith the server modules and not with the client modules

because this functions are about to execute on the server, means that they dont have cces to the window, thing on the client

you access server things on this files.

## 07 Auth forms server ations and react hook useActionState

we will use the server actions created, calling a
when you import the server actin to your client co ponent, what you are inporting is the handler (not the function itself)

no control input, not keep tracing load state,
it gives us the status, state of inputs

in signup:
add 'use client'
to be able to use hooks
