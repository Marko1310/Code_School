type TableButtonProps = {
  value: string;
  color: 'green' | 'red';
  onClick: () => void;
};

function TableButton({ value, color, onClick }: TableButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`mx-1 rounded-md ${color === 'green' ? 'bg-user' : 'bg-destructive'} px-3 py-1`}
    >
      {value}
    </button>
  );
}

export default TableButton;
