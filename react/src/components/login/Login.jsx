import { Container, Box, Typography, TextField, Button } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

	//controles para guardar login e senha
	const [login, setLogin] = useState("");
	const [senha, setSenha] = useState("");

	const navigate = useNavigate();

	function handleSubmit(event) {
    event.preventDefault();
    const body = { login, senha };
		//faço um post na rota de login passando login e senha
    axios.post("http://localhost:3001/login", body)
      .then(
        (response) => {
					//se o retorno for true então redireciono para listarAluno
					if(response.data === true) {
						//navego para a rota listarAluno
						navigate("/listarAluno")
					} else {
						alert("Oops, login ou senha incorretos!")
					}
        }
      )
      .catch(error => console.log(error));
  }

	return (
		<Container maxWidth="xs">

			{/* ao pressionar o botão submit a função handleSubmit sera chamada */}
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					mt: 10
				}}
			>
				<Typography component="h1" variant="h5">
					Login
				</Typography>
				<TextField
					required
					margin="normal"
					fullWidth
					id="login"
					label="Login"
					name="login"
					autoComplete="login"
					autoFocus
					onChange={(event) => setLogin(event.target.value)}
				/>
				<TextField
					required
					margin="normal"
					fullWidth
					name="senha"
					label="Senha"
					type="password"
					id="senha"
					onChange={(event) => setSenha(event.target.value)}
				/>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					Entrar
				</Button>

			</Box>
		</Container>
	)

}

export default Login;