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
    <div className="flex justify-center space-x-8 text-center">
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 min-w-[140px] transform hover:scale-105 transition-all">
        <div className="text-6xl font-bold gold-gradient mb-2">{addLeadingZero(timeLeft.days)}</div>
        <div className="text-lg text-gray-400">Giorni</div>
      </div>
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 min-w-[140px] transform hover:scale-105 transition-all">
        <div className="text-6xl font-bold gold-gradient mb-2">{addLeadingZero(timeLeft.hours)}</div>
        <div className="text-lg text-gray-400">Ore</div>
      </div>
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 min-w-[140px] transform hover:scale-105 transition-all">
        <div className="text-6xl font-bold gold-gradient mb-2">{addLeadingZero(timeLeft.minutes)}</div>
        <div className="text-lg text-gray-400">Minuti</div>
      </div>
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 min-w-[140px] transform hover:scale-105 transition-all">
        <div className="text-6xl font-bold gold-gradient mb-2">{addLeadingZero(timeLeft.seconds)}</div>
        <div className="text-lg text-gray-400">Secondi</div>
      </div>
    </div>
  );
};