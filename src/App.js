import React, { useState } from "react";
import jsondata from "./mock-data.json";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <main className="App">
            <input
                type="text"
                placeholder="Search term..."
                onChange={event => {
                    setSearchTerm(event.target.value);
                }}
            />
            {jsondata
                .filter(val => {
                    if (searchTerm == "") {
                        return val;
                    } else if (
                        val.first_name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                    ) {
                        return val;
                    } else {
                        return;
                    }
                })
                .map((val, key) => {
                    return (
                        <h1 className="jsonNames" key={key}>
                            {val.first_name}
                        </h1>
                    );
                })}
        </main>
    );
}

export default App;
