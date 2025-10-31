import { CircleCloseIcon } from '../../icons/CircleCloseIcon';
import type { ReactNode } from 'react';

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ title, children, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-1 items-end justify-center bg-black/50 backdrop-blur-lg md:items-center">
      <div className="flex w-full flex-col items-center justify-center gap-2 rounded-t-xl bg-white px-2 py-4 md:w-fit md:min-w-80 md:rounded-xl md:p-2">
        <button
          onClick={onClose}
          aria-label="Close modal button"
          className="hover:text-primary self-end text-neutral-500 hover:cursor-pointer"
        >
          <CircleCloseIcon />
        </button>
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex w-full">{children}</div>
      </div>
    </div>
  );
};
