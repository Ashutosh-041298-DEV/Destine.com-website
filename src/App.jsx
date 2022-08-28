import Navbar from "./Components/Navbar/MainNavbar/Navbar";
import "./App.css";
import { Box} from "@chakra-ui/react";
import RespNav from "./Components/Navbar/ResponsiveNavbar/RespNav";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./Components/Footer/Footer";

export default function App({name, email, logout}) {

  return (
    <div className="App">


      <Box className="deskNav">
        <Box borderTop="4px solid #4EA819"
          boxShadow="lg"
          p="1"
          position="fixed"
          width="100%"
          top='0'
          zIndex='100'
          bgColor='white'>
        <Navbar />
        </Box>
      </Box>

      

      <Box className="respNav" mb='-100px '>
        <RespNav/>
      </Box>

      <AllRoutes/>

      <Box w='100%' >
        <Footer/>
      </Box>
        


    </div>
  );
}
