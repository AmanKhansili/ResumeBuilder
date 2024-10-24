# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## **shadcn/ui**

A modern UI component library for React focused on design consistency and accessibility, enabling developers to build visually appealing and user-friendly interfaces quickly.

---

## **React Routing**

A library for managing navigation in React applications that allows for dynamic route rendering, facilitating single-page application (SPA) behavior without full page reloads.

---

## **`<Outlet />`**

A component in React Router that acts as a placeholder for rendering nested child routes within a parent route, indicating where the child components should appear in the parent component.

---

---

## **Explanation of the Code**

### **Code Overview**

It organizes the application into a hierarchical structure, allowing for nested routing.

### **Code**

```javascript
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
]);
```

### **Components**

- **`<App />`**: The main application component that serves as the root for nested routes.
- **`<Home />`**: The component rendered at the root path ("/").
- **`<Dashboard />`**: The component rendered at the "/dashboard" path.
- **`<SignInPage />`**: The component rendered at the "/auth/sign-in" path.

### **Hierarchy and Routing**

1. **Root Route**:

   - The root route is defined with `element: <App />`, meaning that when the application starts, the `<App />` component will be rendered.
   - This component typically includes an `<Outlet />` to render child routes.

2. **Child Routes**:
   - Inside the `children` array, two routes are defined:
     - The root path ("/") renders the `<Home />` component.
     - The "/dashboard" path renders the `<Dashboard />` component.
   - When users navigate to either of these paths, the respective components will be displayed in the `<Outlet />` of the `<App />` component.

### **Usage of `<Outlet />`**

- The `<Outlet />` component within `<App />` allows the application to dynamically render either the `<Home />` or `<Dashboard />` components based on the current URL. When the user navigates to "/" or "/dashboard", the corresponding component will render at the location of the `<Outlet />`.

---

# Step-by-Step Guide to Set Up Clerk

1. **Install Clerk SDK**: First, you need to install the Clerk SDK in your React application. You can do this using npm:

   ```bash
   npm install @clerk/clerk-react
   ```

2. **Create a Clerk Application**: Go to [Clerk's website](https://clerk.dev) and sign up for an account. After logging in, create a new application. Clerk will provide you with a **frontend API key** which you'll need for your application.

3. **Set Up Environment Variables**: Create a `.env.local` file in your project root and add your Clerk frontend API key:

   ```plaintext
   REACT_APP_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   ```

4. **Wrap Your Application with ClerkProvider**: In your `index.js` or `App.js`, wrap your application with the `ClerkProvider`. This makes Clerk's context available throughout your application.

   ```javascript
   import React from "react";
   import ReactDOM from "react-dom/client";
   import { ClerkProvider } from "@clerk/clerk-react";
   import App from "./App";

   const rootElement = document.getElementById("root");
   const root = ReactDOM.createRoot(rootElement);

   root.render(
     <ClerkProvider frontendApi={process.env.REACT_APP_CLERK_FRONTEND_API}>
       <App />
     </ClerkProvider>
   );
   ```

5. **Implement Authentication**: You can now use Clerk's authentication components. For example, to add a sign-in button:

   ```javascript
   import React from "react";
   import { SignIn } from "@clerk/clerk-react";

   const SignInPage = () => {
     return (
       <div>
         <h1>Sign In</h1>
         <SignIn />
       </div>
     );
   };

   export default SignInPage;
   ```

6. **Protecting Routes**: To protect your routes and ensure that only authenticated users can access certain pages, you can use the `RequireAuth` component:

   ```javascript
   import { RedirectToSignIn, RequireAuth } from "@clerk/clerk-react";

   const ProtectedPage = () => {
     return (
       <RequireAuth>
         <h1>This is a protected page!</h1>
       </RequireAuth>
     );
   };
   ```

### Explanation

- **ClerkProvider**: This component provides the authentication context to your application. It initializes Clerk with your API key.
- **SignIn Component**: This built-in component handles the sign-in UI for you, allowing users to log in using various methods, such as email/password or social logins.
- **RequireAuth Component**: This component checks if the user is authenticated. If not, it redirects them to the sign-in page.

With this setup, you can easily manage user authentication in your React application using Clerk.

Sure! Here’s how to connect Strapi with Neon PostgreSQL, formatted similarly to your example:

---

# Setting Up Neon PostgreSQL and Strapi

#### Neon PostgreSQL Setup:

1. **Create a Database**:

   - Sign in to your Neon account and create a new PostgreSQL database. Make sure to note down the connection details.

2. **User Permissions**:
   - Neon typically manages user permissions for you, but ensure you have the necessary credentials (username and password) for the database you created.

#### Strapi Setup:

1. **Installation**:

   - Install Strapi globally using npm:

     ```bash
     npm install -g create-strapi-app
     ```

2. **Create a Strapi Project**:

   - Create a new Strapi project and specify PostgreSQL as the database:

     ```bash
     npx create-strapi-app my-project --quickstart --database client=postgres
     ```

3. **Configuration**:

   - Modify the `config/database.js` file in your Strapi project to include your Neon PostgreSQL connection details:

     ```javascript
     module.exports = ({ env }) => ({
       defaultConnection: "default",
       connections: {
         default: {
           connector: "bookshelf",
           settings: {
             client: "postgres",
             host: env("DATABASE_HOST", "your_neon_host"),
             port: env.int("DATABASE_PORT", 5432),
             database: env("DATABASE_NAME", "your_database_name"),
             username: env("DATABASE_USERNAME", "your_username"),
             password: env("DATABASE_PASSWORD", "your_password"),
           },
           options: {
             ssl: {
               rejectUnauthorized: false, // Required for Neon
             },
           },
         },
       },
     });
     ```

4. **Run Strapi**:

   - Start your Strapi application to see it in action:

     ```bash
     cd my-project
     npm run develop
     ```

---
