import './accordion.css';
import { data } from './data';
import { useState } from 'react';

interface DataItem {
  id: number;
  question: string;
  answer: string;
}

export const Accordion = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState<number[]>([]);

  function handleSingleSelection(getCurrentId: number) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId: number) {
    const cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMultiple);
  }

  return (
    <>
      <div>
        <div className="flex">
          <button
            onClick={() => setEnableMultiSelection(!enableMultiSelection)}
            className="mb-3 mr-3 rounded-lg border-4 border-cyan-500 bg-slate-800 p-3 text-lg font-bold duration-700 hover:bg-slate-700"
          >
            Enable Multi Selection
          </button>
          <div className="mb-3 flex rounded-lg border-4 border-cyan-500 bg-slate-800 p-3 text-lg font-bold duration-700 hover:bg-slate-700">
            Status:&nbsp;
            {enableMultiSelection ? (
              <p className=" text-green-500"> Enabled</p>
            ) : (
              <p className="text-red-600">Disabled</p>
            )}
          </div>
        </div>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem: DataItem) => (
              <div className="item cursor-pointer">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="acc-content ">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="acc-content ">{dataItem.answer}</div>
                    )}
              </div>
            ))
          ) : (
            <div>No data found !</div>
          )}
        </div>
      </div>
    </>
  );
};
