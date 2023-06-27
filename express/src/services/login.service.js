//login e senha em memoria

const LOGIN = "web";
const SENHA = "123";

class LoginService {
  static login(request, response) {
    const { login, senha } = request.body;

    // se o login e senha forem iguais, entao retorna true
    if(login === LOGIN && senha === SENHA) {
      response.status(200).json(true);
    } else {
      //se forem diferentes retorna false
      response.status(404).json(false);
    }

  }
}

export default LoginService;
