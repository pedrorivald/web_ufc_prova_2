import AlunoModel from "../models/aluno.models.mongo.js"

class AlunoService {
  static list(request, response) {
    AlunoModel.find().then((alunos) => {
      response.status(201).json(alunos);
    });
  }

  static register(request, response) {
    AlunoModel.create(request.body).then((aluno) => {
      response.status(201).json(aluno);
    });
  }

  static retrieve(request, response) {
    AlunoModel.findById(request.params.id).then((aluno) => {
      response.status(201).json(aluno);
    });
  }

  static update(request, response) {
    AlunoModel.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    }).then((aluno) => {
      response.status(201).json(aluno);
    });
  }

  static delete(request, response) {
    AlunoModel.findByIdAndRemove(request.params.id).then((aluno) => {
      response.status(202).json(aluno);
    });
  }
}

export default AlunoService;
