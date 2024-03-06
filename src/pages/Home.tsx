import { Card } from '../components/Card';

function Home() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <Card
          name={'Single Accordion'}
          route="/reactjs-smallprojects/single-accordion"
        />
        <Card
          name={'Multiple Accordion'}
          route="/reactjs-smallprojects/multiple-accordion"
        />
      </div>
    </>
  );
}

export default Home;
