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
  return (
    <div className="flex flex-col items-center min-h-screen gap-10 pt-30">
      <OfficialCurrency date={date} rateEUR={rateEUR} />
      <PriceCalculator rateEUR={rateEUR} />
    </div>
  );
}
