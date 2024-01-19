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
    >
      <div className="modal-box">
        <h3 className="font-bold text-md text-black">Edit player name</h3>
        <div className="modal-action">
          <form
            method="dialog"
            className="flex flex-col justify-center w-full"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full mb-4"
              value={inputName}
              onChange={handleNameChange}
            />

            <div className="flex space-x-4 justify-end">
              <button
                className="btn"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="btn bg-blue text-white hover:bg-blue-light"
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
