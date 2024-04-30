type TableButtonProps = {
  value: string;
  color: 'green' | 'red';
};

function TableButton({ value, color }: TableButtonProps) {
  return (
    <button className={`mx-1 rounded-md bg-${color}-400 px-3 py-1`}>
      {value}
    </button>
  );
}

export default TableButton;
