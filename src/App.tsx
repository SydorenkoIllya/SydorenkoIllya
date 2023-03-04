import { Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { useRoutes } from "./routes/routes";


const App = () => {

  const routes = useRoutes()
  return (
    <BrowserRouter>
      <Navbar />
      <Container sx={{ mt: '2rem' }}>
        {routes}
      </Container>
    </BrowserRouter>
  )
}
export default App;