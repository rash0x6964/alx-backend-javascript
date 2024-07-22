function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const current_year = getCurrentYear();

  const budget = {
    [`income-${current_year}`]: income,
    [`gdp-${current_year}`]: gdp,
    [`capita-${current_year}`]: capita,
  };

  return budget;
}
