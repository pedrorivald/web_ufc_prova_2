import mongoose from "mongoose";

var AlunoSchema = mongoose.Schema({
  nome: { type: String, required: true },
  curso: { type: String, required: true },
  ira: { type: Number, required: true }
});

const AlunoModel = mongoose.model("alunos", AlunoSchema);
export default AlunoModel;
