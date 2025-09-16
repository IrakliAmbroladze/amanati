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
    <label className="flex flex-col gap-1 text-sm font-medium">
      {label}
      <input
        type="number"
        className="rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
        value={value === 0 ? "" : value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        placeholder="შეიყვანე რიცხვი"
      />
    </label>
  );
};
