import { Router } from 'express';
const router = Router();

import { get, create, update, destroy } from '../hero-service';

router.get('/heroes', (req, res) => {
  get(req, res);
});

router.put('/hero', (req, res) => {
  create(req, res);
});

router.post('/hero', (req, res) => {
  update(req, res);
});

router.delete('/hero/:id', (req, res) => {
  destroy(req, res);
});

export default router;
