import { useState } from 'react';
import data from './data.ts';
import './accordion.css';

interface DataItem {
  id: number;
  question: string;
  answer: string;
}

function SingleAccordion() {
  const [selected, setSelected] = useState<number | null>(null);

  function handleSingleSelection(getCurrentId: number) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  console.log(selected);

  return (
    <>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem: DataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="text-center"
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span className="cursor-pointer text-2xl font-extrabold">
                  +
                </span>
                {selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </>
  );
}

export default SingleAccordion;
