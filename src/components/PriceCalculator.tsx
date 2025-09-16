"use client";
import { useState } from "react";
import { Input } from "./Input";
import { Sum } from "./Sum";

export const PriceCalculator = ({ rateEUR }: { rateEUR: number }) => {
  const [price, setPrice] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const transportCost = 3;

  return (
    <div className="flex items-center flex-col gap-3.5">
      <Input label="ფასი (ევრო)" value={price} onChange={setPrice} />
      <Input label="წონა (გრ)" value={weight} onChange={setWeight} />
      <Sum
        price={price}
        weight={weight}
        transportCost={transportCost}
        rateEUR={rateEUR}
      />
    </div>
  );
};
