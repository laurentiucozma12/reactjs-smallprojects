import { Link } from 'react-router-dom';

interface Props {
  name?: string;
  route?: string;
}

export const Card: React.FC<Props> = ({
  name = 'Unnamed Project',
  route = '/reactjs-smallprojects/',
}) => {
  return (
    <>
      <Link
        to={route}
        className=" m-4 rounded-xl border-4 border-[#00D8FF] bg-[#101110] p-4 text-center text-xl font-bold text-[#5ed7ec] 
                    duration-700 hover:border-[#5ed7ec] hover:bg-[#1f1f1f] hover:text-white"
      >
        {name}
      </Link>
    </>
  );
};
