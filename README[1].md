# Namma Web AI Genius — K–12 Foundation + NEET/CET/JEE

Premium static frontend architecture inspired by the editorial hierarchy, whitespace and section-based experience of modern Squarespace education/business sites. This repository does **not** copy Squarespace source code, proprietary templates, text or assets.

## Architecture

```text
                    ┌───────────────────────────┐
                    │        STUDENT/PARENT      │
                    │     Mobile / Desktop       │
                    └─────────────┬─────────────┘
                                  │ HTTPS
                    ┌─────────────▼─────────────┐
                    │       GitHub Pages         │
                    │ HTML + CSS + JavaScript    │
                    │ SEO + JSON-LD + responsive │
                    └─────────────┬─────────────┘
                                  │ REST API
                    ┌─────────────▼─────────────┐
                    │         Supabase           │
                    │ PostgreSQL + RLS + Auth    │
                    │ Storage + Edge Functions   │
                    └─────────────┬─────────────┘
                                  │
                    ┌─────────────▼─────────────┐
                    │     Admissions / Admin     │
                    │ authenticated access only  │
                    └───────────────────────────┘
```

## Learning architecture

1. **AI Genius K–12 Foundation**
   - Grade 6: AI awareness, logic, digital thinking
   - Grade 7: prompt thinking, data basics, computational reasoning
   - Grade 8: Python foundations, problem solving, responsible AI
   - Grades 9–10: advanced AI, coding, analytics, generative AI, projects

2. **Competitive pathways**
   - AI for NEET
   - AI for CET
   - AI for JEE

3. **Conversion**
   - Student/parent chooses grade/exam
   - Enquiry form
   - Supabase stores enquiry
   - Authenticated admissions team handles follow-up

## Deploy today

1. Create a GitHub repository, e.g. `nammaweb-ai-genius`.
2. Upload this repository to GitHub.
3. Go to **Settings → Pages → Source → GitHub Actions**.
4. Push to `main`. The included workflow deploys the site automatically.
5. GitHub will provide the live Pages URL.

GitHub documents this exact Actions + Pages deployment model.

## Supabase setup

1. Create a Supabase project.
2. Open SQL Editor.
3. Run `supabase/schema.sql`.
4. Copy `config.example.js` to `config.js`.
5. Add the project's URL and **anon/public** key.
6. Add `<script src="config.js"></script>` before `app.js` in `index.html`.
7. Never expose the `service_role` key in browser code.

## Production next phase

- Authenticated student/parent dashboard
- Course/module database
- Progress tracking
- Test/question bank
- AI mentor layer through a server-side Edge Function
- Payments
- Admin admissions dashboard
- Analytics
- Blog/CMS
- Image/video storage
- Schema.org Course and FAQ structured data
- Consent/privacy and rate limiting

## Important

GitHub Pages is ideal for the public frontend. It should not be treated as a private backend. Supabase is the backend/data layer. Keep secrets and privileged API keys server-side.
