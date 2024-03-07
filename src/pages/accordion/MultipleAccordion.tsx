import './accordion.css';
import { data } from './data';

export const MultipleAccordion = () => {
  return (
    <>
      <div className="accordian">
        {data && data.length > 0 ? <div>data</div> : <div>No data</div>}
        <div className="item">
          <div className="text-center">
            <h3>question</h3>
            <span className="cursor-pointer text-2xl font-extrabold">+</span>

            <div className="content">.answer</div>
          </div>
        </div>
      </div>
    </>
  );
};
