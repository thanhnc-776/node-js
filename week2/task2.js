const fs = require("fs");
const formatDistance = require("date-fns/formatDistance");
const viLocale = require("date-fns/locale/vi");

fs.readFile("./products.json", "utf8", (err, data) => {
  if (err) throw err;

  var result = JSON.parse(data);
  console.log(result.length);

  result.forEach((e) => {
    const now = new Date();
    var fromNow = formatDistance(new Date(e.dateUpdated), now, {
      locale: viLocale,
    });
    e.dateUpdated = now.toString();
    console.log(
      `${e.id} - ${e.name} - ${e.price.toLocaleString("vi-VN", {
        currency: "VND",
      })}VND - Cập nhật cách đây: ${fromNow}`
    );
  });
  console.log(result);
});
