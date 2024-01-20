import React, { useRef, useState } from 'react';
import { useGameStore } from '@/app/(game)/_store/game-store';

type PlayerNameModalProps = {
  playerIndex: number;
};

export const PlayerNameModal = ({ playerIndex }: PlayerNameModalProps) => {
  const playerName = useGameStore.use.players()[playerIndex].name;
  const setPlayerName = useGameStore.use.setPlayerName();

  const [inputName, setInputName] = useState<string>(playerName);
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputName(e.currentTarget.value);
  };

  const handleCancel = () => {
    setInputName(playerName);
    modalRef?.current?.close();
  };

  const handleSubmit = () => {
    setPlayerName(playerIndex, inputName);
  };

  return (
    <dialog
      id={`player-name-${playerIndex}`}
      className="modal"
      ref={modalRef}
    >
      <div className="modal-box bg-white text-black">
        <h3 className="font-bold text-md">Player settings</h3>
        <div className="modal-action mt-1">
          <form
            method="dialog"
            className="flex flex-col justify-center w-full"
            onSubmit={handleSubmit}
          >
            <label className="form-control w-full max-w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                className="input input-bordered input-primary w-full max-w-full mb-4 "
                value={inputName}
                onChange={handleNameChange}
              />
            </label>

            <div className="flex space-x-4 justify-end">
              <button
                className="btn btn-ghost tracking-wide "
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary tracking-wide"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};
