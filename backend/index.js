import express from "express";
import cors from "cors";
import { prisma } from "./config/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(express.json());

//euta matra rerouces update garnu xa vane id chainxa
//get request to user list /signle user 
//post request user create (signup , ) and form submission (login , kei create)
// put request edit/update user details () //id
//patch request edit/update specific user details (euta matra) /id
//delete request delete the resources  /id
//get post,put path ,delete
app.get("/user", (req, res) => {
  res.json({
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
  });
});
app.post("/user", async (req, res) => {
  const { email, name, password } = req.body;

  const checkEmail = await prisma.user.findUnique({ where: { email } });
  if (checkEmail) {
    return res.status(404).json({
      message: "Email already exists",
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);

  const saveData = await prisma.user.create({
    data: {
      name: name,
      password: hashpassword,
      email: email,
    },
  });

  const token = jwt.sign(
    {
      id: saveData.id,
      email: saveData.email,
    },
    "padam",
    {
      expiresIn: "1h",
    }
  );

  return res.status(200).json({
    message: "User created successfully",
    data: saveData,
    token: token,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
