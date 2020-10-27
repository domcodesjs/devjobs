import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";

function App() {
    const [params, setParams] = useState({});
    const [page, setPage] = useState(1);
    const { jobs, loading, error } = useFetchJobs(params, page);

    function handleParamChange(e) {
        //function to handle search parameters
        const param = e.target.name; //name of what you want to search i.e. Location
        const value = e.target.value; //value of what you would like to search for i.e. San Francisco
        setPage(1);
        setParams((prevParams) => {
            return { ...prevParams, [params]: value };
        });
    }

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error....</h1>}
            {console.log(jobs)}
        </div>
    );
}

export default App;
