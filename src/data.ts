import { v4 as uuidv4 } from "uuid";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  format?: (value: number) => string;
}

export const columns: readonly Column[] = [
  { id: uuidv4(), label: " ", minWidth: 170 },
  { id: uuidv4(), label: "Aspek Penilaian 1", minWidth: 140 },
  {
    id: uuidv4(),
    label: "Aspek Penilaian 2",
    minWidth: 140,
  },
  {
    id: uuidv4(),
    label: "Aspek Penilaian 3",
    minWidth: 140,
  },
  {
    id: uuidv4(),
    label: "Aspek Penilaian 4",
    minWidth: 140,
  },
];

export interface Data {
  id: string;
  name: string;
  ap1: string | number;
  ap2: string | number;
  ap3: string | number;
  ap4: string | number;
}

var row = [];

for (let i = 1; i <= 10; i++) {
  var rowItem = {
    id: `mahasiswa_${i}`,
    name: `Mahasiswa ${i}`,
    ap1: 0,
    ap2: 0,
    ap3: 0,
    ap4: 0,
  };

  row.push(rowItem);
}

export const rows: Data[] = row;

export interface IdataSlctItem {
  text: number | string;
  value: number | string;
}

var dataSlct: IdataSlctItem[] = [];

for (let i = 1; i <= 10; i++) {
  var newObj = {
    text: i,
    value: i,
  };

  dataSlct.push(newObj);
}

export const dataSelect = dataSlct;
