import { useEffect, useState } from "react";

export default function ViewCounter() {
  const [count, setCount] = useState(0);
  const endpoint = import.meta.env.VITE_COUNTER_ENDPOINT;

  useEffect(() => {
    fetch(endpoint + "/counter")
      .then((r) => r.json())
      .then((d) => setCount(d.count));
  }, []);

  const increment = async () => {
    const r = await fetch(endpoint + "/counter", { method: "POST" });
    const d = await r.json();
    setCount(d.count);
  };

  return (
    <div className="view_counter_wrap">
      <div className="view_counter">
      <span className="count">{count}</span>
        <span className="label">Views</span>
        <button onClick={increment}>+1</button>
      </div>
    </div>
  );
}