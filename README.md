# QUADLY — Your Campus, Your Community
## About QUADLY

**QUADLY** is a campus-focused web application built to make college life more organized, accessible, and connected.

From exploring campus locations to managing academic information and connecting with fellow students, QUADLY aims to bring essential campus experiences into a unified digital platform.

The application combines a premium dark interface, elegant golden accents, interactive UI elements, and a student-focused experience.

**Your Campus. Your Community. Your QUADLY.**

## Features

### Campus World
- Interactive campus-inspired home interface.
- Visual campus locations and navigation.
- Dedicated sections for important campus resources.

### Student Passport
- Centralized student profile interface.
- Quick access to student-related information.
- Shortcuts to important campus sections.

### Attendance
- Attendance overview.
- Subject-wise attendance information.
- Organized attendance interface.

### Fee Structure
- Dedicated fee information page.
- Structured presentation of fee details.

### Cadence
- Calendar-based campus experience.
- Monthly navigation.
- Visual indicators for holidays, weekends, and academic events.

### Vault
- Organized academic resource interface.
- Separate sections for Notes, Previous Year Questions (PYQ), and Class News.
- Course categories: BCA, BBA, and LLB.
- Year-wise resource navigation.

### Huddle
- Dedicated Text Room and Meeting Room interfaces.
- Message composition and display.
- Invite-link copying.
- Meeting interface prepared for future real-time communication integration.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend UI |
| TypeScript | Type safety |
| Vite | Development server and build tool |
| React Router | Client-side navigation |
| CSS | Styling and responsive layouts |
| Lucide React | Icons |
| Supabase | Authentication and backend services |

## Design Philosophy

QUADLY uses a distinctive visual identity:

- **Dark aesthetic:** Charcoal and black backgrounds.
- **Golden accents:** Elegant borders, highlights, and interactive effects.
- **Glass-inspired UI:** Translucent surfaces and subtle reflections.
- **Custom typography:** Riesling font for the QUADLY identity.
- **Interactive elements:** Hover effects, glowing borders, and smooth transitions.
- **Responsive layouts:** Designed to adapt to different screen sizes.

## Project Structure

```text
QUADLY/
│
├── public/
│   └── fonts/
│       └── riesling.ttf
│
├── src/
│   ├── assets/
│   │
│   ├── pages/
│   │   ├── Attendance.tsx
│   │   ├── Attendance.css
│   │   ├── Cadence.tsx
│   │   ├── Cadence.css
│   │   ├── FeeStructure.tsx
│   │   ├── FeeStructure.css
│   │   ├── Huddle.tsx
│   │   ├── Huddle.css
│   │   ├── Passport.tsx
│   │   ├── Passport.css
│   │   ├── Vault.tsx
│   │   └── Vault.css
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
│
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
```

*The structure above highlights the main files; additional components and configuration files may also be present.*

## Getting Started

Follow these steps to run QUADLY locally.

### 1. Clone the repository

```bash
git clone https://github.com/mdzeeshan767/QUADLY.git
```

### 2. Navigate to the project directory

```bash
cd QUADLY
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root and add your Supabase configuration if required:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Never commit private credentials or secret service-role keys to GitHub.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to access QUADLY.

## Current Development Status

QUADLY is actively being developed.

| Module | Status |
|---|---|
| Campus Home Interface | In development |
| Student Passport | UI implemented |
| Attendance | Initial implementation |
| Fee Structure | Initial implementation |
| Cadence Calendar | Initial implementation |
| Vault | Resource navigation UI |
| Huddle | Initial messaging UI |
| Real-time Messaging | Planned |
| Video / Voice Meetings | Planned |
| QR-based Campus Entry | Planned |

Some modules currently use sample data or frontend-only interactions. Backend integration and additional functionality are ongoing.

## Future Roadmap

- [ ] Complete Supabase integration across modules.
- [ ] Student profile and account management.
- [ ] Real-time student messaging.
- [ ] Video and voice meeting integration.
- [ ] Academic resource uploads and downloads.
- [ ] Dynamic attendance and fee records.
- [ ] QR-based campus entry.
- [ ] Notifications and campus announcements.
- [ ] Improved mobile experience.

## Contributing

QUADLY is currently an actively developed project.

Suggestions, ideas, and feedback are welcome. If you would like to contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Submit a pull request.

## Developer

**Mohd Zeeshan**

- GitHub: [@mdzeeshan767](https://github.com/mdzeeshan767)
- Project: [QUADLY](https://github.com/mdzeeshan767/QUADLY)

---
"center">
  Built with passion for a better campus experience.
</p>
