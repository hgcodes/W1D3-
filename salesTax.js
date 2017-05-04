var finalResult = {};
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
// companySalesData[0, 1, 2];


function calculateSales(companySalesData) {
    var totalSales = 0;
    var totalSalesTax = 0;

  for (var i = 0; i < companySalesData.sales.length; i++) {
    totalSales += companySalesData.sales[i];
  }

switch(companySalesData.province) {
  case "AB":
    totalSalesTax = totalSales * salesTaxRates.AB;
    break;
  case "BC":
    totalSalesTax = totalSales * salesTaxRates.BC;
    break;
  case "SK":
    totalSalesTax = totalSales * salesTaxRates.SK;
}

    if (finalResult.hasOwnProperty(companySalesData.name)) {
         finalResult[companySalesData.name].totalSales += totalSales;
         finalResult[companySalesData.name].totalTaxes += totalSalesTax;
      } else {
          finalResult[companySalesData.name] = {'totalSales': totalSales, 'totalTaxes': totalSalesTax};
      }
}

for (var i = 0; i < companySalesData.length; i++) {
  calculateSales(companySalesData[i]);
}

console.log(finalResult);

