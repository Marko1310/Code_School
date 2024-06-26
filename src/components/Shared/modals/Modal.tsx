import { forwardRef } from 'react';
import useModal from '../../../hooks/useModal';

type Props = {
  children: React.ReactNode;
};

const Modal = forwardRef<HTMLDialogElement, Props>(({ children }, ref) => {
  const { closeModal } = useModal(ref as React.RefObject<HTMLDialogElement>);

  return (
    <dialog
      className="relative max-w-max rounded-md bg-foreground pt-6 text-text backdrop:bg-black/20 backdrop:backdrop-blur-sm"
      ref={ref}
    >
      <button
        className="absolute right-4 top-2 text-base font-extrabold text-destructive ease-out hover:cursor-pointer hover:text-destructive-foreground"
        onClick={closeModal}
      >
        X
      </button>
      {children}
    </dialog>
  );
});

export default Modal;
