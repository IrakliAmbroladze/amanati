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
  const sum = Number(
    (rateEUR * (price + (transportCost * weight) / 1000)).toFixed(2),
  );
  return (
    <>
      <div>
        <div>ჯამი</div>
      </div>
      <div>{sum === 0 ? "" : `${sum} ლარი`}</div>
      <div>
        {sum === 0
          ? ""
          : `დეტალურად: ${rateEUR} * (${price} + (${transportCost} * ${weight}) / 1000)`}
      </div>
    </>
  );
};
