import { useEffect, useState } from "react";

export function CurrentDateTime() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const interval: number = setInterval(() => {
      setNow(new Date());
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  const time: string = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  }).format(now);

  const date: string = new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(now);

  return (
    <div className="flex flex-col text-xs leading-tight text-right select-none">
      <div>{time}</div>
      <div>{date}</div>
    </div>
  );
}
