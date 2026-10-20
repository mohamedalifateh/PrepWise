from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from database import Base, engine
from routers import users, posts


@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    await engine.dispose()


app = FastAPI(lifespan=lifespan)

# CORS configuration
origins = [
    "http://localhost:5173",
    "http://localhost:5176",
    "https://vfgpg7wh-5176.inc1.devtunnels.ms/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve uploaded profile pictures
app.mount("/media", StaticFiles(directory="media"), name="media")

# API Routes
app.include_router(users.router, prefix="/api/users", tags=["users"])
app.include_router(posts.router, prefix="/api/posts", tags=["posts"])


@app.get("/")
async def root():
    return {
        "message": "PrepWise Backend is running"
    }