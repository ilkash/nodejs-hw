import { Note } from './models/note.js';

export const getNotes = async (req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
};

export const getNoteById = async (req, res) => {
  const { noteId } = req.params;
  const note = await Note.findById(noteId);
  if (!note) {
    res.status(404).json({ message: 'note is not faund' });
    return;
  }
  res.status(200).json(note);
};
