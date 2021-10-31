import { Router } from 'express';
import { getAll, insert } from './controller';

const router = Router();

router.get('/', getAll);
router.post('/', insert);

export default router;
