import { UseMutateFunction } from 'react-query';
import { useEffect } from 'react';

type DeleteModalProps = {
  name: string;
  id: number;
  closeModal: () => void;
  deleteFunction: UseMutateFunction<void, unknown, number, unknown>;
  isLoading: boolean;
  title: 'Workshop' | 'Lecturer' | 'Organization';
};

function DeleteModal({
  name,
  id,
  closeModal,
  deleteFunction,
  isLoading,
  title,
}: DeleteModalProps) {
  useEffect(() => {
    if (!isLoading) {
      closeModal();
    }
  }, [isLoading, closeModal]);

  return (
    <div className="flex flex-col p-8">
      <p>{`Are you sure you want to delete ${title} ${name} ?`}</p>
      <div className="flex gap-4">
        <button
          onClick={() => deleteFunction(id)}
          disabled={isLoading}
          className="mt-6 flex h-14 w-full items-center justify-center rounded-md bg-destructive p-3 transition-all hover:bg-destructive-foreground disabled:bg-slate-300"
          type="submit"
        >
          {isLoading ? 'Deleting' : 'Delete'}
        </button>
        <button
          disabled={isLoading}
          onClick={closeModal}
          className="mt-6 flex h-14 w-full items-center justify-center rounded-md bg-disabled p-3 transition-all hover:bg-disabled-foreground disabled:bg-disabled"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
export default DeleteModal;
