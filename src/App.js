import React from "react";
import useFetchJobs from "./useFetchJobs";

function App() {
    const { jobs, loading, error } = useFetchJobs();

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error....</h1>}
            <h1>{jobs.length}</h1>
        </div>
    );
}

export default App;
