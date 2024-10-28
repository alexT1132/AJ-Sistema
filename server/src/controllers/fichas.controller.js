import Ficha from "../models/fichas.model.js";

export const getFichas = async (req, res) => {
  try {
    const fichas = await Ficha.find();
    res.json(fichas);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createFicha = async (req, res) => {
  try {
    const { localidad, pv, recibio, hrs1, hrs3, hrs5, hrs10, hrs25, d7, d30, responsable, tecnico, fecha } = req.body;

    const newFicha = new Ficha({ 
      localidad,
      pv,
      recibio,
      hrs1,
      hrs3,
      hrs5,
      hrs10,
      hrs25,
      d7,
      d30,
      responsable,
      tecnico,
      fecha,
    });
    const savedFicha = await newFicha.save();
    
    res.json(savedFicha);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getFicha = async (req, res) => {
  try {
    const ficha = await Ficha.findById(req.params.id);
    if (!ficha)
      return res.status(404).json({ message: "Ficha no encontrada" });
  } catch (error) {
    return res.status(404).json({ message: "Ficha no encontrada" });
  }
};

export const deleteFicha = async (req, res) => {
  try {
    const ficha = await Ficha.findByIdAndDelete(req.params.id);
    if (!ficha) return res.status(404).json({ message: "Ficha not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Ficha not found" });
  }
};

export const updateFicha = async (req, res) => {
  try {
    const ficha = await Ficha.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!ficha)
      return res.status(404).json({ message: "Ficha no encontrada" });
    res.json(ficha);
  } catch (error) {
    return res.status(404).json({ message: "Ficha no encontrada" });
  }
};