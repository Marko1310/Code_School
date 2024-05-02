export default function TableHead({ data }: { data: string }) {
  return (
    <th className="w-12 bg-gray-100 p-2 text-center font-semibold">{data}</th>
  );
}
