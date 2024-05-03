type AdminButtonProps = {
  value: string;
  onClick: () => void;
};

function AdminButton({ value, onClick }: AdminButtonProps) {
  return (
    <button
      onClick={onClick}
      className="h-fit rounded-lg border bg-orange-300 px-6 py-3 transition-all hover:bg-orange-400"
    >
      {value}
    </button>
  );
}

export default AdminButton;
