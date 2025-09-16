const url = "https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json";
import type { Currency } from "../types";

type ExchangeRates = {
  date: string;
  currencies: Currency[];
};

export const getExchRates = async (): Promise<ExchangeRates> => {
  try {
    const response = await fetch(url, { cache: "no-store" });
    const json = await response.json();
    const { date, currencies } = json[0];
    return { date, currencies };
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    return { date: "", currencies: [] };
  }
};
