import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
     res.send("Backend is running!");
});

// Get all projects
app.get("/projects", async (req, res) => {
     const projects = await prisma.project.findMany();
     // Cache for 60 seconds in CDNs and 30 seconds in browsers as a conservative default
     res.set('Cache-Control', 'public, s-maxage=60, max-age=30')
     res.json(projects);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
});
