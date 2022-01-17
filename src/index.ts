require("dotenv").config();

import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const app = express();

app.post("/trip", async (req, res) => {
  const number = Number(req.body.number);
  const departure = req.body.departure;
  const arrival = req.body.arrival;
  const busType = req.body.busType;
  const capacity = Number(req.body.capacity);
  const ticketPrice = Number(req.body.ticketPrice);

  console.log(req.body);
  

  const trip = await prisma.trip.create({
    data: {
      number,
      departure,
      arrival,
      busType,
      capacity,
      ticketPrice,
      status: "ongoing",
    },
  });
  res.json(trip);
});

app.get("/trip/:id", async (req, res) => {
  const id = Number(req.params.id);

  const trip = await prisma.trip.findUnique({ where: { id: id } });
  res.json(trip);
});



app.listen(3000, () => {
  console.log("Server listening port 3000");
});
