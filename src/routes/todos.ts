import { Router } from 'express';
import { createTodo } from '../controllers/todos';

const router = Router();

router.route('/').get().post(createTodo);

router.route('/:id').patch().delete();

export default router;
