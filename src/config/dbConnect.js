import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://leonardoer404:JLTtCVExgcybcxXn@cluster0.sayir50.mongodb.net/almeida")

let db = mongoose.connection;

export default db