# Lorena's Portfolio

Personal portfolio site built with React and Vite for COMP229 – Web Application Development (Assignment 1).

## Pages

- **Home** – welcome message, mission statement and links to the rest of the site
- **About Me** – who I am, photo and skills
- **Projects** – three highlighted projects with screenshots and links
- **Education** – Centennial College and high school
- **Services** – what I can help with
- **Contact** – contact info and a message form (opens your email app, then returns to Home)

## Run locally

```bash
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Project structure

```
src/
  components/   Navbar and Footer shared by every page
  pages/        One component per page
  assets/       Project screenshots and profile photo
  logo/         Custom site logo
  index.css     All site styles
```
