import { PriceCalculator } from "../components";
import { OfficialCurrency } from "../components";
import { getExchRates } from "../lib";
import type { Currency } from "../types";

export default async function Home() {
  const { date, currencies } = await getExchRates();

  const eurCurrency = currencies.find((c) => c.code === "EUR");

  if (!eurCurrency) {
    return <div>EUR კურსი ვერ მოიძებნა</div>;
  }

  const rateEUR = eurCurrency.rate;
  console.log("page rateEUR : ", rateEUR);
  return (
    <div className="flex items-center justify-center min-h-screen gap-16 sm:p-20">
      <OfficialCurrency date={date} rateEUR={rateEUR} />
      <PriceCalculator rateEUR={rateEUR} />
    </div>
  );
}
