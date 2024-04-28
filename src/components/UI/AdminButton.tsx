type AdminButtonProps = {
  value: string;
};

function AdminButton({ value }: AdminButtonProps) {
  return (
    <button className="h-fit rounded-lg border bg-orange-300 px-6 py-3 transition-all hover:bg-orange-400">
      {value}
    </button>
  );
}

export default AdminButton;
