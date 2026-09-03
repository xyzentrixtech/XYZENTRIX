# XYZENTRIX Deployment Guide

This document explains how to deploy the XYZENTRIX production website.

---

# Production Stack

| Service    | Provider            |
| ---------- | ------------------- |
| Frontend   | Vercel              |
| Backend    | Render              |
| Database   | PostgreSQL (Render) |
| Repository | GitHub              |

---

# Project Structure

```text
XYZENTRIX/
├── backend/
├── frontend/
├── CHANGELOG.md
├── DEPLOYMENT.md
├── README.md
└── .gitignore
```

---

# Backend Deployment (Render)

## Repository

* GitHub Repository: `xyzentrixtech/XYZENTRIX`

## Root Directory

`backend`

## Build Command

```bash
pip install -r requirements.txt && python manage.py migrate --noinput && python manage.py createsuperuser --noinput || true && python manage.py collectstatic --noinput
```

## Start Command

```bash
gunicorn config.wsgi:application
```

---

# Required Environment Variables

| Variable               | Purpose             |
| ---------------------- | ------------------- |
| `SECRET_KEY`           | Django Secret Key   |
| `DEBUG`                | Production False    |
| `DB_NAME`              | PostgreSQL Database |
| `DB_USER`              | PostgreSQL User     |
| `DB_PASSWORD`          | PostgreSQL Password |
| `DB_HOST`              | PostgreSQL Host     |
| `DB_PORT`              | 5432                |
| `OPENAI_API_KEY`       | XAi Assistant       |
| `ALLOWED_HOSTS`        | Django Hosts        |
| `CSRF_TRUSTED_ORIGINS` | Trusted Origins     |

---

# Frontend Deployment (Vercel)

Repository:

* `xyzentrixtech/XYZENTRIX`

Root Directory:

`frontend`

Build Command:

```bash
npm run build
```

Output Directory:

```text
dist
```

---

# Local Development

## Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Runs on:

```text
http://127.0.0.1:8000
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

# Deployment Workflow

Every update follows:

1. Develop locally.
2. Test locally.
3. `git add`
4. `git commit`
5. `git push`
6. Vercel auto-deploys frontend.
7. Render auto-deploys backend.
8. Perform production QA.

---

# Live URLs

| Service    | URL                                          |
| ---------- | -------------------------------------------- |
| Website    | https://xyzentrix.vercel.app                 |
| Backend    | https://xyzentrix-5.onrender.com             |
| Admin      | https://xyzentrix-5.onrender.com/admin/      |
| Health API | https://xyzentrix-5.onrender.com/api/health/ |

---

# Recovery Checklist

If setting up on a new laptop:

* Install Git
* Install Python 3.12
* Install Node.js LTS
* Clone repository
* Configure Git identity
* Create `.env`
* Install backend dependencies
* Install frontend dependencies
* Run Django
* Run React
* Deploy using GitHub → Vercel → Render
