import { useState } from 'react';

export const RandomColor = () => {
  const [bgColor, setBgColor] = useState('red');

  function changeBgColor() {
    // prettier-ignore
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hex.length);
      hexColor += hex[randomIndex];
    }

    setBgColor(`${hexColor}`);
  }

  return (
    <>
      <div className="">
        <button
          onClick={() => changeBgColor()}
          className="mb-10 w-40 rounded-lg bg-slate-600 p-4"
        >
          Change color
        </button>
        <div
          className="flex h-40 w-40 justify-center rounded-lg align-middle text-xl font-bold text-black"
          style={{ backgroundColor: bgColor }}
        ></div>
      </div>
    </>
  );
};
