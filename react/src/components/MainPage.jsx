import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMenu from "./MyMenu";
import { Container } from "@mui/material";

import CadastrarAluno from "./alunos/Cadastrar";
import ListarAluno from "./alunos/Listar";
import EditarAluno from "./alunos/Editar";
import ListarAlunosAprovados from "./alunos/ListarAlunosAprovados";
import Login from "./login/Login";

const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container sx={{mt:4}}>
                <Routes>
                    {/* Login começa no path vazio */}
                    <Route path="" element={<Login />}/>
                    <Route path="cadastrarAluno" element={<CadastrarAluno />}/>
                    <Route path="listarAluno" element={<ListarAluno />}/>
                    <Route path="editarAluno/:id" element={<EditarAluno />}/>
                    {/* Rota para mostrar os alunos aprovados */}
                    <Route path="listarAlunosAprovados" element={<ListarAlunosAprovados />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage