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
    setPlayerName(playerIndex.toString(), inputName);
  };

  return (
    <dialog
      id={`player-name-${playerIndex}`}
      className="modal"
      ref={modalRef}
      data-theme="jprdy"
    >
      <div className="modal-box bg-white text-black">
        <h3 className="font-bold text-md">Edit player name</h3>
        <div className="modal-action">
          <form
            method="dialog"
            className="flex flex-col justify-center w-full"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="input input-bordered w-full max-w-full mb-4 bg-white focus:outline-2 focus:outline-blue-light"
              value={inputName}
              onChange={handleNameChange}
            />

            <div className="flex space-x-4 justify-end">
              <button
                className="btn bg-gray-light hover:bg-gray/60 border-none tracking-wide text-gray-dark"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="btn bg-blue hover:bg-blue-light text-white/90 tracking-wide border-none"
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
