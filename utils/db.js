const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// mongoose.connect(
//   "mongodb+srv://muhfikz04:muhfikz04@cluster0.won67pc.mongodb.net/",
//   (error) => {
//     if (!error) {
//       console.log("DB is connected...");
//     }
//   }
// );

const DBconnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(
      "mongodb+srv://muhfikz04:muhfikz04@cluster0.won67pc.mongodb.net/",
      {
        dbName: "TESTING",
        user: "muhfikz04",
        pass: "muhfikz04",
      }
    );
    console.log("DB connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = DBconnect;
