"use client";
import { useState } from "react";
export default function Home() {
  const [price, setPrice] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const transportCost = 3;
  const handlePriceChange = (e) => {
    e.preventDefault();
    setPrice(Number(e.target.value));
    console.log("price is: ", e.target.value);
  };
  const handleWeightChange = (e) => {
    e.preventDefault();
    setWeight(Number(e.target.value));
    console.log("Weight is: ", e.target.value);
  };
  const sum = price + (transportCost * weight) / 1000;
  return (
    <div className="flex items-center justify-center min-h-screen gap-16 sm:p-20">
      <label className="flex flex-col">
        ფასი:
        <input
          type="number"
          className="border "
          value={price}
          onChange={handlePriceChange}
        />
      </label>
      <label className="flex flex-col">
        წონა:
        <input
          type="number"
          className="border"
          value={weight}
          onChange={handleWeightChange}
        />
      </label>
      <div>
        ჯამი
        <div>{sum}</div>
      </div>
    </div>
  );
}
