import { Box, Typography, Button } from "@mui/material";
import TableComponent from "./components/Table";

function App() {
  return (
    <Box
      sx={{
        maxWidth: "1100px",
        width: "100%",
        px: { xs: 2, sm: 4, lg: 1 },
        py: { xs: 2, sm: 4, lg: 1 },
        mx: "auto",
        my: "auto",
      }}
    >
      <Button
        variant="outlined"
        href="https://github.com/ILHAM2134/assignment-talentlytica"
        target="_blank"
        sx={{ my: 7 }}
      >
        click here for Github repo source code
      </Button>
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
