export const OfficialCurrency = async ({
  date,
  rateEUR,
}: {
  date: string;
  rateEUR: number;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div>
        {new Date(date).toLocaleDateString("ka-GE", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div>1 ევრო = {rateEUR} ლარი</div>
    </div>
  );
};
