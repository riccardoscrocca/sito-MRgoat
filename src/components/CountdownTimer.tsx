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
    <div className="flex flex-wrap justify-center gap-4 text-center px-4">
      <div className="bg-white/5 backdrop-blur-lg p-4 md:p-8 rounded-3xl border border-white/10 min-w-[100px] md:min-w-[140px] transform hover:scale-105 transition-all">
        <div className="text-4xl md:text-6xl font-bold gold-gradient mb-2">{addLeadingZero(timeLeft.days)}</div>
        <div className="text-base md:text-lg text-gray-400">Giorni</div>
      </div>
      <div className="bg-white/5 backdrop-blur-lg p-4 md:p-8 rounded-3xl border border-white/10 min-w-[100px] md:min-w-[140px] transform hover:scale-105 transition-all">
        <div className="text-4xl md:text-6xl font-bold gold-gradient mb-2">{addLeadingZero(timeLeft.hours)}</div>
        <div className="text-base md:text-lg text-gray-400">Ore</div>
      </div>
      <div className="bg-white/5 backdrop-blur-lg p-4 md:p-8 rounded-3xl border border-white/10 min-w-[100px] md:min-w-[140px] transform hover:scale-105 transition-all">
        <div className="text-4xl md:text-6xl font-bold gold-gradient mb-2">{addLeadingZero(timeLeft.minutes)}</div>
        <div className="text-base md:text-lg text-gray-400">Minuti</div>
      </div>
      <div className="bg-white/5 backdrop-blur-lg p-4 md:p-8 rounded-3xl border border-white/10 min-w-[100px] md:min-w-[140px] transform hover:scale-105 transition-all">
        <div className="text-4xl md:text-6xl font-bold gold-gradient mb-2">{addLeadingZero(timeLeft.seconds)}</div>
        <div className="text-base md:text-lg text-gray-400">Secondi</div>
      </div>
    </div>
  );
};