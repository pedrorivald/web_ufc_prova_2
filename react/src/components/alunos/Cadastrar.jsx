import { TextField, Typography, Box, Button } from "@mui/material"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cadastrar = () => {

  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
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

        <TextField
          margin="normal"
          required
          fullWidth
          id="curso"
          name="curso"
          label="Curso"
          onChange={(event) => setCurso(event.target.value)}
        />

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