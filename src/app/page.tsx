"use client";
import { useState } from "react";
import { Input } from "../components";
export default function Home() {
  const [price, setPrice] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const transportCost = 3;
  const sum = price + (transportCost * weight) / 1000;

  return (
    <div className="flex items-center justify-center min-h-screen gap-16 sm:p-20">
      <Input label="ფასი (ევრო)" value={price} onChange={setPrice} />
      <Input label="წონა (გრ)" value={weight} onChange={setWeight} />
      <div>
        ჯამი
        <div>{sum}</div>
      </div>
    </div>
  );
}
