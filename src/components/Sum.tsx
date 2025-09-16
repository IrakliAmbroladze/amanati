export const Sum = ({
  price,
  weight,
  transportCost,
  rateEUR,
}: {
  price: number;
  weight: number;
  transportCost: number;
  rateEUR: number;
}) => {
  const sum = rateEUR * (price + (transportCost * weight) / 1000);
  return (
    <div>
      ჯამი <div>{sum}</div>
    </div>
  );
};
