import React, { useState } from "react";
import jsondata from "./mock-data.json";

function App() {
    return (
        <main className="App">
            <input type="text" placeholder="Search term..." />
            {jsondata.map((val, key) => {
                return <h1 className="jsonNames">{val.first_name}</h1>;
            })}
        </main>
    );
}

export default App;
