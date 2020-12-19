"use strict";

const fs = require("fs");
const jwt = require("jsonwebtoken");

const privateKey = fs.readFileSync("keyfile").toString();
const teamId = "text";
const keyId = "text";

const jwtToken = jwt.sign({}, privateKey, {
  algorithm: "ES256",
  expiresIn: "180d",
  issuer: teamId,
  header: {
    alg: "ES256",
    kid: keyId
  }
});

console.log(jwtToken);