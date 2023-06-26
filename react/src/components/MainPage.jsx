import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMenu from "./MyMenu";
import { Container } from "@mui/material";

import CadastrarAluno from "./alunos/Cadastrar";
import ListarAluno from "./alunos/Listar";
import EditarAluno from "./alunos/Editar";

const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container sx={{mt:4}}>
                <Routes>
                    <Route path="cadastrarAluno" element={<CadastrarAluno />}/>
                    <Route path="listarAluno" element={<ListarAluno />}/>
                    <Route path="editarAluno/:id" element={<EditarAluno />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage