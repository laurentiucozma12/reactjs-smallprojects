import { Card } from '../components/Card';

export const Home = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <Card
          name={'Single Accordion'}
          route="/reactjs-smallprojects/accordion"
        />
      </div>
    </>
  );
};
