import React from "react";

import { Box } from "@chakra-ui/react";

import DashboardStrip from "./DashboardStrip";
import DashGrid from "./DashGrid";
function Dashboard() {
    
  return (
    <Box bgColor='gray.200'  pb='100px'>
     

       <Box mt='110px'>
       
            <DashboardStrip/>
       </Box>
      

       <Box w='75%' m='auto' mt='50px'>
        <DashGrid/>
       </Box>
     </Box>
  );
}
export default Dashboard;