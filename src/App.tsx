import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import Snowfall from "react-snowfall";

function App() {
  return (
    <>
      <Snowfall
        color="#3ECF8E"
        snowflakeCount={200}
        radius={[0.5, 1.5]}
        speed={[0.1, 0.12]}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -1, // Make sure it's behind all other content
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
