const fs = require("fs");
const langs = ["da", "no", "en"];
langs.forEach((lang) => {
  const f = `c:/Users/laura/OneDrive/Skrivebord/Code/Other/Wedding/src/locales/${lang}/translation.json`;
  const raw = fs.readFileSync(f, "utf8").replace(/^\uFEFF/, "");
  const data = JSON.parse(raw);
  data.speeches = Object.values(data.speeches);
  fs.writeFileSync(f, JSON.stringify(data, null, 2), "utf8");
  console.log(`Updated ${lang}`);
});
