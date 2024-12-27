const seats = [             // theater layout
    {
        name: "Platinum",   // section name
        price: 500,         // price per seat
        layout: [           // seats layout in a section
            ["J01", "J02", "J03", "J04", "J05", "J06", "J07", "J08", "J09"],    // list of seat ids
            ["I01", "I02", "I03", "I04", "I05", "I06", "I07", "I08", "I09"],
        ],
    },
    {
        name: "Gold",
        price: 400,
        layout: [
            ["H01", "H02", "H03", "H04", "H05", "H06", "H07", "H08", "H09", "H10", "H11", "H12", "H13"],
            ["G01", "G02", "G03", "G04", "G05", "G06", "G07", "G08", "G09", "G10", "G11", "G12", "G13"],
            ["F01", "F02", "F03", "F04", "F05", "F06", "F07", "F08", "F09", "F10", "F11", "F12", "F13"],
            ["E01", "E02", "E03", "E04", "E05", "E06", "E07", "E08", "E09", "E10", "E11", "E12", "E13"],
            ["D01", "D02", "D03", "D04", "D05", "D06", "D07", "D08", "D09", "D10", "D11", "D12", "D13"],
            ["C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08", "C09", "C10", "C11", "C12", "C13"],
        ],
    },
    {
        name: "Silver",
        price: 300,
        layout: [
            ["B01", "B02", "B03", "B04", "B05", "B06", "B07", "B08", "B09", "B10", "B11", "B12", "B13", "B14", "B15"],
            ["A01", "A02", "A03", "A04", "A05", "A06", "A07", "A08", "A09", "A10", "A11", "A12", "A13", "A14", "A15"],
        ],
    },
];

// ********************* Other option (Dynamic) ***********************

const layout = [             // theater layout
    {
        name: "Platinum",   // section name
        price: 500,         // price per seat
        rows: 2,            // total rows in the section
        columns: 9,         // total columns in the section
    },
    {
        name: "Gold",
        price: 400,
        rows: 6,
        columns: 13,
    },
    {
        name: "Silver",
        price: 300,
        rows: 2,
        columns: 15,
    },
];
const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let seatIdPrefix = 0;
const seats2 = layout.reverse().map((section) => {
    const { name, price, rows, columns } = section;
    const layout = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 1; j <= columns; j++) {
            row.push(ALPHA[seatIdPrefix] + j);
        }
        seatIdPrefix++;
        layout.push(row);
    }
    layout.reverse();
    return { name, price, layout };
}).reverse();
console.log(seats2[0].layout);
