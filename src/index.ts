require('dotenv').config();

import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get('/trip', async (req, res) => {
  const trips = await prisma.trip.findMany();
  res.json({ trips });
  res.end();
});

app.post('/trip', async (req, res) => {
  const number = Number(req.body.number);
  const departure = new Date(Date.now());
  const arrival = new Date(Date.now());
  const busType = req.body.busType;
  const capacity = Number(req.body.capacity);
  const ticketPrice = Number(req.body.ticketPrice);

  const trip = await prisma.trip.create({
    data: {
      number,
      departure,
      arrival,
      busType,
      capacity,
      ticketPrice,
      status: 'ongoing',
    },
  });

  console.log(trip);
  res.json(trip);
});

app.get('/trip/:id', async (req, res) => {
  const id = Number(req.params.id);

  const trip = await prisma.trip.findUnique({ where: { id } });
  res.json(trip);
});

app.listen(3000, () => {
  console.log('Server listening http://localhost:3000');
});
