import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface StatNumberProps {
  end: number;
  suffix?: string;
  delay?: number;
}

export const StatNumber: React.FC<StatNumberProps> = ({ end, suffix = '', delay = 0 }) => {
  const { count, ref } = useCountUp({ end, delay });
  
  return (
    <div ref={ref} className="text-4xl font-bold gold-gradient mb-2">
      {count}{suffix}
    </div>
  );
};