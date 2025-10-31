import { CircleCloseIcon } from '../../icons/CircleCloseIcon';
import type { ReactNode } from 'react';

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ title, children, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-1 items-center justify-center bg-black/50 backdrop-blur-lg">
      <div className="flex min-w-80 flex-col items-center justify-center gap-2 rounded-xl bg-white p-2">
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
