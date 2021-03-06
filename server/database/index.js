import * as mysql from "mysql";
import chirpr from "./chirpr";

export const Connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "Nate",
  password: "password",
  database: "chirpr",
});

export const Query = (query, values) => {
  return new Promise((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) return reject(err);
      resolve(results)
    });
  });
};


export default {
  chirpr,
};