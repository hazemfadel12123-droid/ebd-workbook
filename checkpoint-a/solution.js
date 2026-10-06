// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter((order) => order.city === "Giza" && order.status === "paid");
}

export function summarize(orders) {
  return orders.reduce((highest, order) => Math.max(highest, order.price), 0);
}

export async function describeOrder(id) {
  try {
    const { student, quantity, item } = await findOrderById(id);
    return `${student} ordered ${quantity} x ${item}`;
  } catch {
    return `Could not find order ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(orders.map(({ student, item }) => ({ student, item })));
}
