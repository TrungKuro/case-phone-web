# 📱 CaseCobra - Custom Phone Case E-commerce Platform

> A modern, full-stack e-commerce web application built with Next.js 15 that allows users to create and order custom phone cases with their own images.
>
> 🙋🏻 _Hi, this is the first web project I learned to practice_ 😆
>
> 🥰 Thanks to `joschan21` for sharing a great video [📚 tutorial](https://www.youtube.com/watch?v=SG82Aqcaaa0).

![CaseCobra Banner](./public/thumbnail.png)

## 🚀 Demo

<p align="center">

| 👉🏻 [**Live Demo**](https://case-phone-web.vercel.app/) | <img src="src/app/favicon.ico" alt="Favicon" width="100" /> |
| :----------------------------------------------------: | :---------------------------------------------------------: |

</p>

### 🧩 Example Screenshot:

`Preview Page`

  <table>
    <tr>
      <td align="center" width="33.33%">
        <img src="docs/Preview-Page-1.webp" alt="Preview Page 1" width="100%" />
      </td>
      <td align="center" width="33.33%">
        <img src="docs/Preview-Page-2.webp" alt="Preview Page 2" width="100%" />
      </td>
      <td align="center" width="33.33%">
        <img src="docs/Preview-Page-3.webp" alt="Preview Page 3" width="100%" />
      </td>
    </tr>
  </table>

`Landing Page`

  <table>
    <tr>
      <td align="center" width="25%">
        <img src="docs/Landing-Page-1.webp" alt="Landing Page 1" width="100%" />
      </td>
      <td align="center" width="25%">
        <img src="docs/Landing-Page-2.webp" alt="Landing Page 2" width="100%" />
      </td>
      <td align="center" width="25%">
        <img src="docs/Landing-Page-3.webp" alt="Landing Page 3" width="100%" />
      </td>
      <td align="center" width="25%">
        <img src="docs/Landing-Page-4.webp" alt="Landing Page 4" width="100%" />
      </td>
    </tr>
  </table>

`Step Page`

- Step 1: Add Image
  <table>
    <tr>
      <td align="center" width="33.33%">
        <img src="docs/Step1-1.webp" alt="Step1 1" width="100%" />
      </td>
      <td align="center" width="33.33%">
        <img src="docs/Step1-2.webp" alt="Step1 2" width="100%" />
      </td>
      <td align="center" width="33.33%">
        <img src="docs/Step1-3.webp" alt="Step1 3" width="100%" />
      </td>
    </tr>
  </table>
- Step 2: Customize design
  <table>
    <tr>
      <td align="center" width="50%">
        <img src="docs/Step2-1.webp" alt="Step2 1" width="100%" />
      </td>
      <td align="center" width="50%">
        <img src="docs/Step2-2.webp" alt="Step2 2" width="100%" />
      </td>
    </tr>
  </table>
- Step 3: Summary
  <table>
    <tr>
      <td align="center" width="100%">
        <img src="docs/Step3-1.webp" alt="Step3 1" width="100%" />
      </td>
    </tr>
  </table>

`Service Page`

| Service       | Image                                                                  |
| ------------- | ---------------------------------------------------------------------- |
| Auth Kinde    | <img src="docs/Auth-Kinde.webp" alt="Auth Kinde" width="100%" />       |
| Pay Link      | <img src="docs/Pay-Link.webp" alt="Pay Link" width="100%" />           |
| Prisma Studio | <img src="docs/Prisma-Studio.webp" alt="Prisma Studio" width="100%" /> |

`Thank Page`

  <table>
    <tr>
      <td align="center" width="33.33%">
        <img src="docs/Thank-Page-1.webp" alt="Thank Page 1" width="100%" />
      </td>
      <td align="center" width="33.33%">
        <img src="docs/Thank-Page-2.webp" alt="Thank Page 2" width="100%" />
      </td>
      <td align="center" width="33.33%">
        <img src="docs/Thank-Page-3.webp" alt="Thank Page 3" width="100%" />
      </td>
    </tr>
  </table>

`Other Page`

| Page           | Image                                                                    |
| -------------- | ------------------------------------------------------------------------ |
| Dashboard Page | <img src="docs/Dashboard-Page.webp" alt="Dashboard Page" width="100%" /> |
| Admin Page     | <img src="docs/Admin-Page.webp" alt="Admin Page" width="100%" />         |

## ✨ Features

### 🎨 Custom Design Studio

- **Image Upload**: Upload your own photos via drag-and-drop interface
- **Interactive Design Tool**: Position, resize, and customize your image on the phone case
- **Live Preview**: Real-time preview of your custom phone case design
- **Multiple Phone Models**: Support for modern iPhone models

### 🛒 E-commerce Functionality

- **Product Configuration**: Choose phone model, case color, material, and finish
- **Secure Checkout**: Integrated payment processing with Stripe
- **Order Tracking**: Track order status from processing to shipped
- **Email Notifications**: Automated order confirmation emails

### 👤 User Management

- **Authentication**: Secure user authentication with Kinde Auth
- **User Dashboard**: View order history and status
- **Admin Panel**: Manage orders, update order statuses

### 🎯 Product Features

- High-quality, durable materials
- 5-year print guarantee
- Scratch and fingerprint-resistant coating
- Wireless charging compatible
- Multiple material options (Silicone, Polycarbonate)
- Various finishes (Smooth, Textured)

## 🏗️ Tech Stack

### Frontend

- **Framework**: Next.js 15.2.1 (React 19)
- **Styling**: Tailwind CSS 4 with custom animations
- **UI Components**:
  - Radix UI (Dialog, Dropdown, Label, Progress, Scroll Area)
  - shadcn/ui components
  - Lucide React icons
- **Animations**: Framer Motion
- **Image Handling**: React Dropzone, React RND (drag & resize)
- **State Management**: TanStack React Query

### Backend

- **Runtime**: Node.js with Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Kinde Auth
- **File Upload**: UploadThing
- **Email**: Resend with React Email
- **Payment Processing**: Stripe

### Development Tools

- **Language**: TypeScript 5
- **Code Quality**: ESLint, Prettier
- **Package Manager**: npm/yarn/pnpm
- **Build Tool**: Next.js Turbopack

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 20+
- npm/yarn/pnpm
- PostgreSQL database

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd case-phone-web
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://..."

# Kinde Auth
KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=
KINDE_SITE_URL=
KINDE_POST_LOGOUT_REDIRECT_URL=
KINDE_POST_LOGIN_REDIRECT_URL=

# UploadThing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Resend (Email)
RESEND_API_KEY=

# Admin
ADMIN_EMAIL=
```

### 4. Set up the database

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
case-phone-web/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/                  # API routes
│   │   │   ├── auth/            # Kinde Auth handlers
│   │   │   ├── uploadthing/     # File upload endpoints
│   │   │   └── webhooks/        # Stripe webhooks
│   │   ├── auth-callback/       # Auth callback handler
│   │   ├── configure/           # Product configuration flow
│   │   │   ├── upload/          # Image upload page
│   │   │   ├── design/          # Design customization page
│   │   │   └── preview/         # Order preview page
│   │   ├── dashboard/           # Admin dashboard
│   │   ├── thank-you/           # Order confirmation page
│   │   └── page.tsx             # Homepage
│   ├── components/              # React components
│   │   ├── ui/                  # UI component library
│   │   └── emails/              # Email templates
│   ├── config/                  # Configuration files
│   ├── constants/               # App constants
│   ├── db/                      # Database client
│   ├── lib/                     # Utility libraries
│   └── validators/              # Zod schemas
├── prisma/
│   └── schema.prisma            # Database schema
├── public/                      # Static assets
└── docs/                        # Documentation & diagrams
```

## 🔑 Key Features Explained

### Custom Design Configurator

The heart of the application is the interactive design configurator that allows users to:

1. **Upload**: Users upload their favorite photo
2. **Design**: Drag, resize, and position the image on a phone case template
3. **Customize**: Select phone model, case color, material, and finish
4. **Preview**: See a realistic preview of the final product
5. **Checkout**: Complete the order with secure payment

### Admin Dashboard

Administrators can:

- View all orders in real-time
- Update order status (awaiting shipment, fulfilled, shipped)
- Filter and manage orders efficiently
- Monitor revenue and order statistics

### Automated Email System

- Order confirmation emails sent automatically
- Beautiful, branded email templates using React Email
- Customer order details and expected delivery information

## 🗄️ Database Schema

The application uses Prisma with PostgreSQL, featuring the following main models:

- **User**: Customer information and authentication
- **Configuration**: Phone case design configuration
- **Order**: Order details and status
- **ShippingAddress**: Delivery information
- **BillingAddress**: Billing information

## 💳 Payment Flow

1. User completes design configuration
2. Stripe checkout session created
3. User redirected to Stripe payment page
4. Upon successful payment, webhook triggers
5. Order status updated in database
6. Confirmation email sent to customer

## 📧 Email Integration

Using Resend and React Email for transactional emails:

- Order received confirmation
- Shipping updates
- Beautiful, responsive email templates

## 🔒 Security

- Secure authentication with Kinde Auth
- Environment variables for sensitive data
- Webhook signature verification for Stripe
- Database queries protected with Prisma
- Type-safe API routes with Zod validation

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:

- Desktop computers
- Tablets
- Mobile devices

## 🎨 UI/UX Highlights

- Modern, clean interface with Tailwind CSS
- Smooth animations with Framer Motion
- Intuitive drag-and-drop interactions
- Real-time design preview
- Toast notifications for user feedback
- Loading states and error handling

## 🛠️ Development Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# Generate Prisma Client
npm run postinstall
```

## 📊 Flow Diagrams

Project documentation includes flow diagrams for:

- Authentication flow (`docs/auth-flow.png`)
- Core functionality (`docs/function-flow.png`)
- Payment processing (`docs/payment-flow.png`)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

Built with ❤️ using Next.js and modern web technologies.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting solutions
- shadcn for the beautiful UI components
- All the open-source libraries that made this project possible

---

**Note**: This is a learning/portfolio project demonstrating modern full-stack development with Next.js, TypeScript, and various third-party integrations.
