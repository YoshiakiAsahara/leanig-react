import Test from "./coponent/Test";
import MapComponent from "./coponent/testcomponet/MapComponent";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box>
      <Test text="Hellow word" />;
      <MapComponent />
    </Box>
  );
}
