import mongoose from "mongoose";

const fichasSchema = new mongoose.Schema({
    localidad: {
        type: String,
        required: true
    },
    pv: {
        type: String,
        required: true
    },
    recibio: {
        type: String,
        required: true
    },
    hrs1: {
        type: String,
        required: true
    },
    hrs3: {
        type: String,
        required: true
    },
    hrs5: {
        type: String,
        required: true
    },
    hrs10: {
        type: String,
        required: true
    },
    hrs25: {
        type: String,
        required: true
    },
    d7: {
        type: String,
        required: true
    },
    d30: {
        type: String,
        required: true
    },
    responsable: {
        type: String,
        required: true
    },
    tecnico: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now,
      },
});

export default mongoose.model("Fichas", fichasSchema);