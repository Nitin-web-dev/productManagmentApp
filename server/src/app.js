import express from "express";
import pool from "./db.js";
import auth from "./routes/auth.js"
export function createApp() {
  const app = express();

  app.use(express.json());

  app.use('/api/v1/auth', auth);





  app.get("/api/health", (req, res) => {
    res.status(200).json({ ok: true });
  });


//   extra code for checking testing pg
  app.get("/api/setupdb", async (req, res) => {
    try {
      await pool.query(`CREATE TABLE employees (
                id SERIAL PRIMARY KEY,
                firstname VARCHAR(100),
                lastname VARCHAR(100),
                email VARCHAR(255) UNIQUE NOT NULL,
                hashedpassword VARCHAR(255) NOT NULL,
                department VARCHAR(100),
                role VARCHAR(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`);
      res.status(200).json({ ok: true });
    } catch (error) {
      res
        .status(500)
        .json({ message: "something went wrong", err: error.message });
    }
  });

//   app.post("/api/insertData", async (req, res) => {
//     try {
//       const { firstname, lastname, email, department, role } = req.body;
//       await pool.query(
//         `INSERT INTO employees (
//                 firstname,
//                 lastname,
//                 email,
//                 department,
//                 role
//             )   VALUES($1,$2,$3,$4,$5)`,
//         [firstname, lastname, email, department, role],
//       );
//       res.status(201).json({ ok: true ,message: 'created'});
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "something went wrong", err: error.message });
//     }
//   });

//     app.get("/api/fetchData", async (req, res) => {
//     try {
//       let data = await pool.query(`SELECT * FROM employees`);
//       res.status(200).json({ ok: true, data: data.rows });
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "something went wrong", err: error.message });
//     }
//   });
  return app;
}
