export default function TableHead({ value }: { value: string }) {
  return (
    <div className="col-span-1 bg-gray-100 py-2 text-center font-semibold uppercase">
      {value}
    </div>
  );
}
