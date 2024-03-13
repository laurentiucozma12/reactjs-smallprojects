import { Card } from '../components/Card';

export const Home = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <Card name={'Accordion'} route="/reactjs-smallprojects/accordion" />
        <Card
          name={'Random Color Generator'}
          route="/reactjs-smallprojects/random-color-generator"
        />
        <Card name={'Star Rating'} route="/reactjs-smallprojects/star-rating" />
      </div>
    </>
  );
};
