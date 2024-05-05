type AdminButtonProps = {
  value: string;
  onClick: () => void;
};

function AdminButton({ value, onClick }: AdminButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-admin hover:bg-admin-foreground h-fit rounded-lg border px-6 py-3 transition-all"
    >
      {value}
    </button>
  );
}

export default AdminButton;
