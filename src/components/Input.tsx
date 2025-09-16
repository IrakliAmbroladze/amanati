export const Input = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <label className="flex flex-col">
      {label}
      <input
        type="number"
        className="border "
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
};
