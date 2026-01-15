import { useState } from "react";
import Wellcome from "./components/Wellcome";
import Iot from "./components/Iot";
import Visi_misi from "./components/Visi_misi";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={`h-[5000px] bg-gray-200`}>
      <Wellcome />
      <Iot />
      <Visi_misi />
      <footer>bambang</footer>
    </div>
  );
}
