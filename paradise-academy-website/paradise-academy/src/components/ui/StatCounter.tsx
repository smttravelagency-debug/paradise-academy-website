import React, { useEffect, useRef, useState } from 'react';

export function StatCounter({
  value,
  suffix = '',
  label,
  labelBn,
}: {
  value: number;
  suffix?: string;
  label: string;
  labelBn?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-semibold text-white">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-white/75">
        {label}
        {labelBn && <span className="bn block text-xs text-white/55">{labelBn}</span>}
      </div>
    </div>
  );
}
