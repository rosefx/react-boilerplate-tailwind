import { useState } from "react";
import { fetchNui } from "./utils/fetchNui";

interface ClientPosition {
  x: number;
  y: number;
  z: number;
}

function App() {
  const [position, setPosition] = useState<ClientPosition | null>(null!);

  const handleClientEvent = () => {
    fetchNui<ClientPosition>("GetClientPosition").then(
      (data: ClientPosition) => {
        setPosition(data);
      }
    );
  };

  return (
    <div className="h-screen flex justify-center">
      <div className="h-screen flex flex-col justify-center">
        <div className="w-96 h-96 bg-red-100/50 rounded-md flex justify-center place-items-center">
          <div className="flex flex-col gap-2 justify-center">
            <p>
              My Position: {position?.x} {position?.y} {position?.z}
            </p>
            <button className="bg-blue-500" onClick={handleClientEvent}>
              Get client Position
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
