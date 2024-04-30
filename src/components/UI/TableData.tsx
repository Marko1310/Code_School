import { ReactNode } from 'react';

function TableData({ children }: { children: ReactNode }) {
  return (
    <td className="overflow-hidden border-b p-4 text-center">{children}</td>
  );
}

export default TableData;
