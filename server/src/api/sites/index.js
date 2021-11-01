import { Router } from 'express';
import { getAll, insert, update } from './controller';

const router = Router();

router.get('/', getAll);
router.post('/', insert);
router.put('/', update);

export default router;
