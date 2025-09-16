export const OfficialCurrency = async () => {
  const data = await fetch(
    "https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json",
    { cache: "no-store" },
  );
  const exchange = await data.json();
  console.log(exchange[0]);
  const date = new Date(exchange[0].date);
  const { currencies } = exchange[0];
  const rateEUR = currencies.find((c) => c.code === "EUR").rate;
  return (
    <div>
      OfficialCurrency:
      <div>
        {date.toLocaleDateString("ka-GE", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div>1 EUR = {rateEUR} GEL</div>
    </div>
  );
};
