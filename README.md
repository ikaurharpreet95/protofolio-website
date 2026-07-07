# Harpreet Kaur Invitations - Portfolio Website

A professional portfolio website for Harpreet Kaur, a fashion and graphic designer specializing in custom invitation designs with 7+ years of experience.

## 🚀 Live Website

**Visit:** https://protofolio-website.vercel.app

## ✨ Features

- 🎨 **Professional Portfolio Gallery** - Showcase of invitation designs across multiple categories
- 📞 **Contact Integration** - Contact form with Airtable database integration
- 🤖 **Retell AI Voice Agent** - 24/7 inbound consultation booking
- 📅 **Tally Booking Form** - Direct meeting scheduling
- 📱 **Floating Action Buttons** - Quick access to book meeting, WhatsApp, and phone call
- 🎯 **Responsive Design** - Mobile, tablet, and desktop optimized
- ✨ **Smooth Animations** - Motion-powered interactive elements

## 🛠 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Framework**: TanStack Start
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form + Zod
- **Database**: Airtable
- **Integrations**: Retell AI, Tally

## 📋 Project Structure

```
src/
├── components/
│   ├── site/          # Main page sections
│   └── ui/            # Reusable UI components
├── data/              # Portfolio and configuration data
├── services/          # External integrations (Airtable)
├── lib/               # Utilities
└── main.tsx           # App entry point
```

## 🔧 Environment Variables

Required environment variables (in `.env.local`):
```
VITE_AIRTABLE_API_KEY=your_api_key
VITE_AIRTABLE_BASE_ID=your_base_id
VITE_AIRTABLE_TABLE_NAME=your_table_id
```

## 🚀 Deployment

This project is deployed on **Vercel** and automatically deploys on every push to the main branch.

**Deployment URL:** https://protofolio-website.vercel.app

### Environment Variables in Vercel

The following environment variables are configured in Vercel project settings:
- `VITE_AIRTABLE_API_KEY`
- `VITE_AIRTABLE_BASE_ID`
- `VITE_AIRTABLE_TABLE_NAME`

## 📱 Contact Information

- **Phone**: +1 (984) 302 3290
- **Email**: hello@harpreetinvites.co.nz
- **Location**: Auckland, New Zealand

## 📚 Documentation

- [Airtable Setup Guide](./AIRTABLE_SETUP.md)
- [Knowledge Base](./KNOWLEDGE_BASE.md)
- [Integration Summary](./INTEGRATION_SUMMARY.md)

## 📦 Dependencies

Key packages:
- `react` - UI library
- `typescript` - Type safety
- `tailwindcss` - Styling
- `react-hook-form` - Form handling
- `zod` - Schema validation
- `lucide-react` - Icons
- `motion` - Animations
- `sonner` - Toast notifications

## 🔐 Security

- Environment variables stored securely in Vercel
- No secrets in git history
- API keys protected in `.env.local` (not committed)

## 📄 License

Private project - Harpreet Kaur Invitations

---

**Created with ❤️ for Harpreet Kaur Invitations**
