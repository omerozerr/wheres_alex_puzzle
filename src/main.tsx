/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PuzzleWalletProvider } from '@puzzlehq/sdk';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='h-screen w-screen'>
    <PuzzleWalletProvider
      dAppName="Where's Omer?"
      dAppDescription='A friendly wager between friends'
      dAppUrl='https://wheres-alex-puzzle-omer.vercel.app/'
      dAppIconURL='https://wheres-alex-puzzle-omer.vercel.app//omer.jpg'
    >
      <App />
    </PuzzleWalletProvider>
  </div>
);
