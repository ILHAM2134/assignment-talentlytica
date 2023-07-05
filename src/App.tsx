import { Box, Typography } from "@mui/material";
import TableComponent from "./components/Table";

function App() {
  return (
    <Box
      sx={{
        maxWidth: "1100px",
        width: "100%",
        px: { xs: 2, sm: 4, lg: 1 },
        py: { xs: 2, sm: 4, lg: 1 },
        border: "1px solid black",
        mx: "auto",
        my: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          letterSpacing: "2px",
          mt: {
            xs: 3,
            sm: 4,
          },
        }}
      >
        Aplikasi Penilaian Mahasiswa
      </Typography>
      <TableComponent />
    </Box>
  );
}

export default App;
