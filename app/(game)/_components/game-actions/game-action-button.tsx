import { PropsWithChildren } from 'react';

type GameActionButtonProps = {
  label: string;
  show: boolean;
  onClick: () => void;
};

export const GameActionButton = ({
  children,
  label,
  show,
  onClick,
}: PropsWithChildren<GameActionButtonProps>) => {
  if (!show) return null;

  return (
    <button
      name={label}
      type="button"
      className="btn btn-ghost text-primary rounded-full btn-md border-2 min-w-24"
      onClick={onClick}
    >
      <div className="relative flex flex-col justify-center items-center">
        {children}
        <div className="-bottom-12 uppercase min-w-12 text-[.7em]">{label}</div>
      </div>
    </button>
  );
};
