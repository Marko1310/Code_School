type LecturerProfileProps = {
  name: string | null;
  image: string | null;
};

function LecturerProfile({ name, image }: LecturerProfileProps) {
  return (
    <div className="flex w-auto flex-col items-center justify-center gap-4 p-3 md:border-b-2 md:border-gray-300">
      <img
        src={image ? image : ''}
        className="h-32 w-32 rounded-full border-2 border-gray-300"
      />
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
}

export default LecturerProfile;
