"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "ContactMethod",
    embedded: false
  },
  {
    name: "Cron",
    embedded: false
  },
  {
    name: "Notification",
    embedded: false
  },
  {
    name: "Recipient",
    embedded: false
  },
  {
    name: "Reminder",
    embedded: false
  },
  {
    name: "Status",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`,
  secret: `secretlol`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "ContactMethod",
    embedded: false
  },
  {
    name: "Cron",
    embedded: false
  },
  {
    name: "Notification",
    embedded: false
  },
  {
    name: "Recipient",
    embedded: false
  },
  {
    name: "Reminder",
    embedded: false
  },
  {
    name: "Status",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
