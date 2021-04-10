const fs = require("fs");
const format = require("date-fns/format");
const XLSX = require("xlsx");

fs.readFile("./products.json", "utf8", (err, data) => {
  if (err) throw err;

  result = JSON.parse(data);
  result.forEach((e) => {
    const update = format(new Date(e.dateUpdated), "MM/dd/yyyy");
    e.updated = update.toString();
    delete e.dateUpdated;
  });

  const file = XLSX.readFile("./excel/report-product.xlsx");
  const ws = XLSX.utils.json_to_sheet(result);
  ws["!cols"] = [
    { width: 10 },
    { width: 25 },
    { width: 15 },
    { width: 15 },
    { width: 15 },
  ];

  XLSX.utils.book_append_sheet(file, ws, "Products");
  XLSX.writeFile(file, "./excel/report-product.xlsx");
});
