import mysql from "mysql"

 const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "social-media"
})

// db.connect(function(err){
//     if(err) return err;
//     console.log("Database connect is establish!!");
// })

db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('db connected as id ' + db.threadId);
  });
export default db;
