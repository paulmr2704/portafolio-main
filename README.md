# Paulo Cesar Meza Rojas — Portafolio Profesional (SOC, IA & Psicología UX)

Plataforma web profesional construida con **Next.js 16 (App Router, Server-First RSC)**, **TypeScript estricto**, **Tailwind CSS v4** y **Neon Serverless PostgreSQL**, diseñada bajo lineamientos **Zero Trust**, **OWASP** y **WCAG 2.1 AA**.

## Arquitectura del Proyecto

```text
src/
├── proxy.ts                     # Perímetro HTTP en Next.js 16 (CSP, HSTS, Security Headers)
├── app/                         # Enrutamiento App Router, SEO (Sitemap, Robots, OG, JSON-LD) y Casos de Estudio
├── config/                      # Configuración global y navegación (Single Source of Truth)
├── types/                       # Contratos de dominio TypeScript estrictos
├── data/                        # Contenido desacoplado de la interfaz
├── lib/                         # Esquemas Zod compartidos y constructores Schema.org JSON-LD
├── components/
│   ├── layout/                  # Navbar flotante con ScrollSpy y Footer técnico
│   ├── sections/                # Secciones Server-First con islas interactivas mínimas
│   └── ui/                      # Primitivas reutilizables y accesibles
└── server/                      # Capa backend protegida con `server-only` (Env, Rate Limit, Guard, DAL Neon)
```

## Controles de Seguridad Implementados
- **Cabeceras Perimetrales (`src/proxy.ts`)**: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy` y `Permissions-Policy`.
- **Protección de API (`/api/contact`)**: Validación de `Origin === Host`, verificación `Content-Type`, límite de payload (`8 KB`), **Rate Limiting real en servidor** (`HTTP 429` con ventana deslizante por IP hasheada), **Honeypot** anti-bot y validación estricta con **Zod (`.strict()`)**.
- **Data Access Layer (`server-only`)**: Consultas SQL parametrizadas sobre Neon PostgreSQL y migración DDL desacoplada en `db/migrations/001_create_contact_messages.sql`.
- **Estándares Abiertos**: Política de divulgación responsable en `/.well-known/security.txt` (RFC 9116) y perfil para motores generativos en `/llms.txt`.

## Ejecución Local

1. Copia `.env.example` a `.env.local` y configura `DATABASE_URL` si deseas persistencia en Neon PostgreSQL.
2. Inicia el servidor de desarrollo:

```bash
npm run dev
```

3. Verificación de calidad y compilación:

```bash
npm run lint
npm run build
```
