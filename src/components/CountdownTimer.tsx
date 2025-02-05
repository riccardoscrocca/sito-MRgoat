import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const timeLeft = useCountdown(targetDate);

  const addLeadingZero = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="flex justify-center space-x-4 text-center">
      <div className="bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 min-w-[80px] transform hover:scale-105 transition-all">
        <div className="text-3xl font-bold gold-gradient">{addLeadingZero(timeLeft.days)}</div>
        <div className="text-sm text-gray-400">Giorni</div>
      </div>
      <div className="bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 min-w-[80px] transform hover:scale-105 transition-all">
        <div className="text-3xl font-bold gold-gradient">{addLeadingZero(timeLeft.hours)}</div>
        <div className="text-sm text-gray-400">Ore</div>
      </div>
      <div className="bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 min-w-[80px] transform hover:scale-105 transition-all">
        <div className="text-3xl font-bold gold-gradient">{addLeadingZero(timeLeft.minutes)}</div>
        <div className="text-sm text-gray-400">Minuti</div>
      </div>
      <div className="bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 min-w-[80px] transform hover:scale-105 transition-all">
        <div className="text-3xl font-bold gold-gradient">{addLeadingZero(timeLeft.seconds)}</div>
        <div className="text-sm text-gray-400">Secondi</div>
      </div>
    </div>
  );
};