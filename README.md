# PoC - API schools dashboard

## Development

### Prerequisites

- [Docker](https://docs.docker.com/engine/install/)
- [Node.js v18.15.0 (nvm)](https://github.com/nvm-sh/nvm#install--update-script)

### Instructions

- Create an `.env` file like `.env.example`
- Install the dependencies: `npm install`
- Build the project: `npm run build`
- Initialize Docker containers: `docker compose up -d`
- Run migrations: `npm run migrate`
- Start the project in development mode: `npm run dev`
