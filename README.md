# Rakibul Islam Ashik - Personal Portfolio

![Portfolio Preview](public/preview.png) *(Add a screenshot of your portfolio in the `public` folder named `preview.png`)*

A modern, high-performance personal portfolio website built to showcase projects, skills, and professional experience. Designed with a sleek dark-mode aesthetic, smooth animations, and mathematical precision.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js (App Router) and React 19.
- **Stunning Animations**: Powered by Framer Motion for smooth scroll reveals, a custom preloader, and interactive hover states.
- **Custom UI Elements**: Features a custom cursor and a 1-100% animated loading screen.
- **Responsive Design**: Fully mobile-responsive layouts using Tailwind CSS v4.
- **Contact Form**: Integrated email functionality for reaching out directly.
- **SEO Optimized**: Includes proper metadata and semantic HTML for search engines.

## 💻 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Email Service**: Nodemailer / Resend

## 🛠️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have Node.js installed (v18 or higher is recommended).

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/rakibul875/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` file in the root directory and add the necessary variables for your email service (e.g., Resend API key or SMTP details).

4. **Run the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```text
my-portfolio/
├── public/                 # Static assets (images, icons, resume)
├── src/
│   ├── app/                # Next.js App Router (pages, layout, globals.css)
│   ├── components/         
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, About, Skills, Projects, Contact, etc.
│   │   └── ui/             # Reusable UI components (Buttons, Preloader, Cursor)
│   └── Image/              # Optimized images
├── next.config.mjs         # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Project dependencies and scripts
```

## 📬 Contact

**Rakibul Islam Ashik** - Full Stack Developer

- **GitHub**: [rakibul875](https://github.com/rakibul875)
- **LinkedIn**: [Your LinkedIn Profile URL] *(Update this link)*
- **Email**: [Your Email Address] *(Update this link)*

---

*Designed and developed by Rakibul Islam Ashik.*
