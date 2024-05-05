type AdminButtonProps = {
  value: string;
  onClick: () => void;
};

function AdminButton({ value, onClick }: AdminButtonProps) {
  return (
    <button
      onClick={onClick}
      className="h-fit rounded-lg bg-admin px-6 py-3 text-text transition-all hover:bg-admin-foreground"
    >
      {value}
    </button>
  );
}

export default AdminButton;
