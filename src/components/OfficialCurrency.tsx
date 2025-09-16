export const OfficialCurrency = async ({
  date,
  rateEUR,
}: {
  date: string;
  rateEUR: number;
}) => {
  return (
    <div>
      OfficialCurrency:
      <div>
        {new Date(date).toLocaleDateString("ka-GE", {
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
