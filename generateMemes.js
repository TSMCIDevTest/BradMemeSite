import fs from "fs";
import path from "path";

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const memeData = {};

for (const day of days) {
  const dir = path.join("./public", day);
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(f =>
      /\.(jpg|jpeg|png|gif)$/i.test(f)
    );
    memeData[day] = files.map(file => `${day}/${file}`);
  } else {
    memeData[day] = [];
  }
}

// Save JSON file to public folder
fs.writeFileSync("./public/memes.json", JSON.stringify(memeData, null, 2));
console.log("✅ memes.json generated!");