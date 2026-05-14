# TrustBridge Counsel

## Containerized Deployment

The frontend and backend are containerized separately:

- Frontend: `frontend/Dockerfile` builds the React app and serves it with Nginx.
- Backend: `backend/Dockerfile` runs the FastAPI app with Uvicorn.
- Local full stack: `docker-compose.yml` runs frontend, backend, and MongoDB.

### Run Locally With Docker Compose

```bash
docker compose up --build
```

Open:

- Frontend: http://localhost:3000
- Backend API: http://localhost:8001/api/

### Build Images Separately

Frontend:

```bash
docker build \
  --build-arg REACT_APP_BACKEND_URL=https://your-api-domain.com \
  -t trustbridge-frontend \
  ./frontend
```

Backend:

```bash
docker build -t trustbridge-backend ./backend
```

### Required Runtime Environment

Backend:

```bash
MONGO_URL=mongodb://your-mongo-host:27017
DB_NAME=trustbridge
CORS_ORIGINS=https://your-frontend-domain.com
GOOGLE_SHEETS_WEBHOOK_URL=
```

Frontend:

```bash
REACT_APP_BACKEND_URL=https://your-api-domain.com
```

For Create React App, `REACT_APP_BACKEND_URL` is baked into the frontend during `docker build`, so set it with `--build-arg` for each deployment environment.
