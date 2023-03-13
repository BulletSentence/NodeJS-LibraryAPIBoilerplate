import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  cpf: { type: String, required: true },
  endereco: { type: String, required: true },
});

const clients = mongoose.model("clients", bookSchema);

export default clients;
