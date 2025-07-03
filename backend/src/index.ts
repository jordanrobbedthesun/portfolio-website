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
     res.json(projects);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
});
