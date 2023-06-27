import { TextField, Typography, Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cadastrar = () => {

  const [nome, setNome] = useState("");
  // o select de curso começa com ES por padrão
  const [curso, setCurso] = useState("ES");
  const [ira, setIra] = useState(0);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const novoAluno = { nome, curso, ira };
    axios.post("http://localhost:3001/alunos/register", novoAluno)
      .then(
        (response) => {
          alert(`Aluno ID ${response.data._id} adicionado!`)
          navigate("/listarAluno")
        }
      )
      .catch(error => console.log(error));
  }

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Cadastrar Aluno
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="nome"
          name="nome"
          label="Nome Completo"
          autoFocus
          onChange={(event) => setNome(event.target.value)}
        />

        {/* Controle responsavel pelo select de cursos */}

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="select-tit-label">Curso</InputLabel>
          <Select
            labelId="select-tit-label"
            label="Curso"
            value={curso}
            onChange={(event) => setCurso(event.target.value)}
          >
            <MenuItem value="DD">Design Digital</MenuItem>
            <MenuItem value="SI">Sistemas da Informação</MenuItem>
            <MenuItem value="CC">Ciência da Computação</MenuItem>
            <MenuItem value="ES">Engenharia de Software</MenuItem>
            <MenuItem value="EC">Engenharia da Computação</MenuItem>
            <MenuItem value="RC">Redes de Computadores</MenuItem>
          </Select>
        </FormControl>

        <TextField
          margin="normal"
          required
          fullWidth
          id="ira"
          name="ira"
          label="Ira"
          onChange={(event) => setIra(Number(event.target.value))}
        />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ my: 3 }}
          >
            Cadastrar
          </Button>
        </Box>

      </Box>
    </>
  )
}
export default Cadastrar;