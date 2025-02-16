import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import dispositivosRoutes from "./routes/dispositivos.routes.js";
import localidadesRoutes from "./routes/localidades.routes.js";
import fichasRoutes from "./routes/fichas.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", usersRoutes);
app.use("/api", tasksRoutes);
app.use("/api", dispositivosRoutes);
app.use("/api", localidadesRoutes);
app.use("/api", fichasRoutes);

export default app;