import { useState } from "react";
import "./App.css";
import { petApi } from "./endpoints/store/petApi";

function App() {
  const fetchResult = petApi.endpoints.findPetsByStatus.useQuery({
    status: "available",
  });

  const [addPet, result] = petApi.endpoints.addPet.useMutation();
  const [name, setName] = useState("");

  const save = async () => {
    await addPet({
      pet: {
        name,
        photoUrls: [""],
        status: "available",
      },
    }).unwrap();

    window.alert("save!!");
  };

  return (
    <div className="App">
      <h1>form</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          save();
        }}
      >
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        &nbsp;
        <button type="submit">add</button>
        <div>{JSON.stringify(result, null, 2)}</div>
      </form>

      <br />

      <h1>data</h1>
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
