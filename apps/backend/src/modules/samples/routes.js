import { Router } from 'express';
import { addSample } from './controllers/add-sample.js';
import { getAllSamples } from './controllers/get-all-samples.js';
import { getSample } from './controllers/get-sample.js';
import { deleteSample } from './controllers/delete-sample.js';

const router = new Router();

router.post('/', addSample);
router.get('/', getAllSamples);
router.get('/:id', getSample);
router.delete('/:id', deleteSample);

export default router;
