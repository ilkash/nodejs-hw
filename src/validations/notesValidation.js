import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).required(),
    content: Joi.string(),
    tag: Joi.string().valid(
      'Work',
      'Personal',
      'Meeting',
      'Shopping',
      'Ideas',
      'Travel',
      'Finance',
      'Health',
      'Important',
      'Todo',
    ),
  }),
};

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const noteIdSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const updateNoteSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1),
    content: Joi.string(),
    tag: Joi.string().valid(
      'Work',
      'Personal',
      'Meeting',
      'Shopping',
      'Ideas',
      'Travel',
      'Finance',
      'Health',
      'Important',
      'Todo',
    ),
  }).min(1),
};
