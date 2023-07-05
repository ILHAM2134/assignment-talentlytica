import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Box,
  Grid,
  Button,
  Modal,
  Typography,
} from "@mui/material";

import { columns, rows, dataSelect } from "../data";
import SelectSmall from "./Select";
import { useState } from "react";

export default function TableComponent() {
  const [row, setRow] = useState(rows);
  const [open, setOpen] = useState(false);
  const [dataModal, setDataModal] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDataModal = () => {
    var arr1 = row.map((item, i) => {
      return {
        [`mahasiswa_${i + 1}`]: item.ap1,
      };
    });

    var aspek_penilaian_1 = {};

    arr1.forEach((item, index) => {
      aspek_penilaian_1[`mahasiswa_${index + 1}`] =
        item[`mahasiswa_${index + 1}`];
    });

    var arr2 = row.map((item, i) => {
      return {
        [`mahasiswa_${i + 1}`]: item.ap2,
      };
    });

    var aspek_penilaian_2 = {};

    arr2.forEach((item, index) => {
      aspek_penilaian_2[`mahasiswa_${index + 1}`] =
        item[`mahasiswa_${index + 1}`];
    });

    var arr3 = row.map((item, i) => {
      return {
        [`mahasiswa_${i + 1}`]: item.ap3,
      };
    });

    var aspek_penilaian_3 = {};

    arr3.forEach((item, index) => {
      aspek_penilaian_3[`mahasiswa_${index + 1}`] =
        item[`mahasiswa_${index + 1}`];
    });

    var arr4 = row.map((item, i) => {
      return {
        [`mahasiswa_${i + 1}`]: item.ap4,
      };
    });

    var aspek_penilaian_4 = {};

    arr4.forEach((item, index) => {
      aspek_penilaian_4[`mahasiswa_${index + 1}`] =
        item[`mahasiswa_${index + 1}`];
    });

    const compileAspekPenilaian = {
      aspek_penilaian_1,
      aspek_penilaian_2,
      aspek_penilaian_3,
      aspek_penilaian_4,
    };
    console.log(compileAspekPenilaian);
    setDataModal(JSON.stringify(compileAspekPenilaian, null, 2));
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        mt: {
          xs: 2,
          sm: 3,
        },
        py: 3,
      }}
    >
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(({ id, minWidth, label }) => (
                <TableCell
                  key={id}
                  align="center"
                  style={{ minWidth: minWidth }}
                >
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {row.slice(0 * 10, 0 * 10 + 10).map(({ id, name }, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                  <TableCell align="center" style={{ minWidth: 170 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                      }}
                    >
                      <Avatar
                        alt=""
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: "20px", height: "20px" }}
                      />
                      {name}
                    </Box>
                  </TableCell>
                  <TableCell align="center" style={{ minWidth: 140 }}>
                    <SelectSmall
                      dataSelect={dataSelect}
                      state={row}
                      setState={setRow}
                      name="ap1"
                      index={index}
                    />
                  </TableCell>
                  <TableCell align="center" style={{ minWidth: 140 }}>
                    <SelectSmall
                      dataSelect={dataSelect}
                      state={row}
                      setState={setRow}
                      name="ap2"
                      index={index}
                    />
                  </TableCell>
                  <TableCell align="center" style={{ minWidth: 140 }}>
                    <SelectSmall
                      dataSelect={dataSelect}
                      state={row}
                      setState={setRow}
                      name="ap3"
                      index={index}
                    />
                  </TableCell>
                  <TableCell align="center" style={{ minWidth: 140 }}>
                    <SelectSmall
                      dataSelect={dataSelect}
                      state={row}
                      setState={setRow}
                      name="ap4"
                      index={index}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container justifyContent="end">
        <Grid item>
          <Button
            sx={{
              px: 2,
              py: 1,
              backgroundColor: "black",
              color: "white",
              mt: 3,
              mr: 5,
            }}
            onClick={() => {
              handleDataModal();
              handleOpen();
            }}
          >
            Simpan
          </Button>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflow: "scroll" }}
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {dataModal}
          </Typography> */}
          <pre style={{ fontSize: "10px" }}>{dataModal}</pre>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            output diatas dalam bentuk string, cek console browser anda untuk
            melihat output dalam format JSON
          </Typography>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ backgroundColor: "black", color: "white", mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Paper>
  );
}
