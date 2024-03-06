// import { useState } from 'react';
import data from './data.ts';

function Accordion() {
  // const [selected, setSelected] = useState(null);
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        earum voluptatum consequuntur placeat quod dolorem quaerat et
        consequatur quae eius accusamus fugit, porro dicta temporibus beatae
        totam ipsum sunt atque!
      </p>
      <div className="wrapper">
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div className="title">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
              </div>
            ))
          ) : (
            <div>No data found!</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordion;
