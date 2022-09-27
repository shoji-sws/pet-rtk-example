import { useState } from "react";
import "./App.css";
import { petApi } from "./endpoints/store/petApi";

function App() {
  const fetchResult = petApi.endpoints.findPetsByStatus.useQuery({
    status: "available",
  });

  const [addPet] = petApi.endpoints.addPet.useMutation();
  const [name, setName] = useState("");

  const save = () => {
    addPet({
      pet: {
        name,
        photoUrls: [""],
        status: "available",
      },
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={save}>add</button>
      <div>
        {fetchResult.isFetching ? (
          <div>fetching</div>
        ) : (
          JSON.stringify(fetchResult?.data, null, 2)
        )}
      </div>
    </div>
  );
}

export default App;
