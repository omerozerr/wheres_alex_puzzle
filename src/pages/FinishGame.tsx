import { useLocation, useNavigate } from 'react-router-dom';
import Wager from '../components/Wager';
import PageHeader from '../components/PageHeader';
import { getNumberAmount } from '../utils';

const FinishGame = () => {
  const location = useLocation();
  const { wager, win } = location.state ?? {}; // Get the challenger and wager from state

  const navigate = useNavigate();

  return (
    <div className='flex h-full w-full flex-col justify-center gap-8'>
      <PageHeader
        bg='bg-primary-blue'
        text={(win as boolean) ? 'CONGRATS WINNER!' : 'BETTER LUCK NEXT TIME'}
      />
      {win && (
        <div className='flex flex-col items-center gap-2'>
          <Wager wagerAmount={getNumberAmount(wager)} winnings />
          <a
            className={`font-extrabold text-primary-green hover:text-primary-green hover:underline`}
            href='/'
          >
            Payout Confirmation
          </a>
        </div>
      )}
      <div className='flex flex-grow flex-col' />
      <div className='flex w-full flex-col gap-2'>
        <button
          className='w-full rounded-full bg-primary-green p-3 text-4xl font-extrabold text-primary-black'
          onClick={() => navigate('/')}
        >
          REFER A PLAYER
        </button>
        <button
          className='w-full rounded-full bg-[#868686] p-3 text-4xl font-extrabold text-primary-black'
          onClick={() => navigate('/new-game')}
        >
          START ANOTHER GAME
        </button>
        <button
          className='w-full bg-transparent text-primary-gray'
          onClick={() => navigate('/')}
        >
          TAKE ME BACK HOME
        </button>
      </div>
    </div>
  );
};

export default FinishGame;
