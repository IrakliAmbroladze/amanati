export const Sum = ({
  price,
  weight,
  transportCost,
}: {
  price: number;
  weight: number;
  transportCost: number;
}) => {
  const sum = price + (transportCost * weight) / 1000;
  return (
    <div>
      ჯამი
      <div>{sum}</div>
    </div>
  );
};
