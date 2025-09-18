"use client";
import Heading2 from "@/components/Typography/Heading2";
import Heading6 from "@/components/Typography/Heading6";
import { useEffect, useState } from "react";

const stats = [
  {
    id: 1,
    value: 10,
    suffix: "+",
    label: "Years of Building & Scaling Businesses",
  },
  {
    id: 2,
    value: 1000,
    suffix: "+",
    label: "Clients Thriving With Our Support",
  },
  {
    id: 3,
    value: 200,
    suffix: "+",
    label: " Professionals Working Behind Your Success",
  },
  { 
    id: 4, 
    value: 99, 
    suffix: "%", 
    label: "Success Rate on License Approvals",
  },
  {
    id: 5,
    value: 10,
    suffix: "M+",
    label: "Saved for Businesses via PRO Solutions",
  }
];

function Counter({ value, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 20); // update every 20ms
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className="text-2xl md:text-3xl font-bold text-red-600">
      {count}
      {suffix}
    </span>
  );
}

export default function CounterSection() {
  return (
    <section className="w-full bg-primaryLight py-12 px-6">
      <div className="container">
        <div className="max-w-6xl mx-auto text-center">
          <Heading2 blackHeading={`The Numbers Speak for Themselves`} />
          <div className="flex flex-wrap justify-center md:justify-between border border-gray-200 rounded-lg py-10 px-4 md:px-6 gap-y-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center flex-1 min-w-[150px] max-w-[220px] space-y-2"
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <Heading6 blackHeading={stat.label} className={`!mb-0`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
