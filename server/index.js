const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("./public"));

// Caminho para o arquivo de dados
const dataFile = "/data/tasks.json";

// Ler tarefas do arquivo
app.get("/tarefas", (req, res) => {
    fs.readFile(dataFile, (err, data) => {
        if (err) return res.status(500).json({ error: "Erro ao ler dados" });
        res.json(JSON.parse(data));
    });
});

// Adicionar nova tarefa
app.post("/tarefas", (req, res) => {
    const novaTarefa = req.body;

    fs.readFile(dataFile, (err, data) => {
        if (err) return res.status(500).json({ error: "Erro ao ler dados" });

        const tarefas = JSON.parse(data);
        novaTarefa.id = tarefas.length ? tarefas[tarefas.length - 1].id + 1 : 1;
        tarefas.push(novaTarefa);

        fs.writeFile(dataFile, JSON.stringify(tarefas), (err) => {
            if (err) return res.status(500).json({ error: "Erro ao salvar dados" });
            res.json(novaTarefa);
        });
    });
});

// Deletar tarefa
app.delete("/tarefas/:id", (req, res) => {
    const id = parseInt(req.params.id);

    fs.readFile(dataFile, (err, data) => {
        if (err) return res.status(500).json({ error: "Erro ao ler dados" });

        const tarefas = JSON.parse(data).filter((tarefa) => tarefa.id !== id);

        fs.writeFile(dataFile, JSON.stringify(tarefas), (err) => {
            if (err) return res.status(500).json({ error: "Erro ao salvar dados" });
            res.json({ message: "Tarefa deletada" });
        });
    });
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
