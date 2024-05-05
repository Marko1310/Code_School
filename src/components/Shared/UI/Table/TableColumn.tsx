import { ReactNode } from 'react';

function TableColumn({ children }: { children: ReactNode }) {
  return (
    <div className="col-span-1 flex items-center justify-center border-b p-5">
      {children}
    </div>
  );
}

export default TableColumn;
