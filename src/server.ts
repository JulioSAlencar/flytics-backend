import express from "express";
import cors from "cors";
import flightsRouter from "./routes/flights"; // nome correto do arquivo de rotas

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// ✅ Rota raiz — responde na URL principal (Render)
app.get("/", (req, res) => {
  res.send("🚀 Flytics Backend API is running!");
});

// ✅ Rotas da API
app.use("/api/flights", flightsRouter);

// ✅ Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
