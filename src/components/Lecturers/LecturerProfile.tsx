type LecturerProfileProps = {
  name: string | null;
};

function LecturerProfile({ name }: LecturerProfileProps) {
  return (
    <div className="flex w-auto flex-col items-center justify-center gap-4 p-3 md:border-b-2 md:border-gray-300">
      <img
        src=""
        className="h-16 w-16 rounded-full border-2 border-gray-300 md:h-32 md:w-32"
      />
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
}

export default LecturerProfile;
