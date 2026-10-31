import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.get("/test", (req, res) => {
  try {
    res.status(200).json({ ok: true, message: "auth api test2" });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, email, password, department, role } = req.body;
    // 1. Check if email and password are provided
    if ((!email && email.length > 0) || (!password && password.length > 0)) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    // 2. Hash the password securely (salt rounds = 10)
    const saltround = 10;
    const hashedpassword = await bcrypt.hash(password, saltround);

    // 3. Save the user into PostgreSQL
    const query = `INSERT INTO employees (firstname,lastname,email,hashedpassword,department,role)VALUES($1,$2,$3,$4,$5,$6) RETURNING id, email, created_at`;
    const values = [
      firstname,
      lastname,
      email,
      hashedpassword,
      department,
      role,
    ];
    const result = await pool.query(query, values);
    const newUser = result.rows[0];

    // 4. Send back success response (Never send the password back!)
    res.status(201).json({
      message: "User registered successfully!",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
        // Handle duplicate email error code in Postgres (23505)
        if (error.code === '23505') {
            return res.status(400).json({ error: 'Email is already registered' });
        }
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
});

router.post("/login", async (req,res)=>{
    try {
        // todo: create login
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        });
  }
    }
);
export default router;
