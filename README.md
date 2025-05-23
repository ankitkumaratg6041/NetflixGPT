# Creating our NetflixGPT Project

1. npm create vite@latest NetflixGPT
2. npm install (to initialize our project)
3. npm run dev (to run our project)
   **Now installing tailwindcss to our project**
4. npm install tailwindcss @tailwindcss/vite
5. configuring vite.config.js file

   ```jsx
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import tailwindcss from "@tailwindcss/vite";

   // https://vite.dev/config/
   export default defineConfig({
     plugins: [react(), tailwindcss()],
   });
   ```

6. Add an @import to your CSS file that imports Tailwind CSS.
   ```css
   @import "tailwindcss";
   ```
7. Start using Tailwind in your HTML. Make sure your compiled CSS is included in the <head>

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <link rel="icon" type="image/svg+xml" href="/vite.svg" />
       <link rel="stylesheet" href="/src/index.css" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Vite + React</title>
     </head>
     <body>
       <div id="root"></div>
       <script type="module" src="/src/main.jsx"></script>
     </body>
   </html>
   ```
8. Now setting up routing to be able to switch to all our pages 
    So for this we will use react-router-dom
    ```sh
    npm install -d react-router-dom
    ```

9. Form validation
10. useRef hook