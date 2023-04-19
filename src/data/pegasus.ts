export type Pegasus = {
  name: string;
  title: string;
  subtitle?: string;
  contact: {
    type: "t" | "c" | "e";
    value: string;
  }[];
  footer?: string;
  website?: string;
};
export default [
  {
    name: "DAVID MARSHALL",
    title: "CEO",
    contact: [
      { type: "e", value: "david@pegasusconsulting.co.za" },
      { type: "c", value: "074 102 2033" },
      { type: "t", value: "010 015 0574" },
    ],
    footer:
      "Member of The South African Institute of Tax Practitioners 10990390 Business Accountant in Practice (SA) 219",
  },
  {
    name: "ANDREA BARRETT",
    title: "Operations Manager",
    contact: [
      { type: "t", value: "+ 27 (0) 74 360 7275" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "MARYKE OBERHOLZER",
    title: "Technical Manager & HR",
    subtitle: "Bcom Management",
    contact: [
      { type: "t", value: "+ 27 (0) 76 815 1586" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "ANIKA NELL",
    title: "Training Officer & Account Manager",
    subtitle:
      "Professional Accounting Technician (SA) - <br/> SAIPA Professional Tax Technician (SA)",
    contact: [
      { type: "t", value: "+ 27 (0) 71 312 3846" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "MICHELLE DU TOIT",
    title: "Junior Accountant",
    contact: [
      { type: "t", value: "+ 27 (0) 83 570 1854" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "JOLINE SMITH",
    title: "Compliance Officer",
    contact: [
      { type: "t", value: "+ 27 (0) 83 299 6143" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "DOMINIQUE RUDOLPH",
    title: "Account Manager",
    contact: [
      { type: "t", value: "+ 27 (0) 60 660 6985" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "BUENA JANSEN VAN VUUREN",
    title: "Junior Accountant",
    contact: [
      { type: "t", value: "+ 27 (0) 71 540 2113" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "HERMAN KLOPPER",
    title: "Account Manager",
    contact: [
      { type: "t", value: "+ 27 (0) 71 287 8743" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "MARTIN FABER",
    title: "Junior Accountant",
    contact: [
      { type: "t", value: "+ 27 (0) 63 188 4568" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "GOUWA RAILOUH",
    title: "Junior Accountant",
    contact: [
      { type: "t", value: "+ 27 (0) 66 252 5954" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "RUAAN ROUX",
    title: "Account Manager",
    contact: [
      { type: "t", value: "+ 27 (0) 84 207 0289" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "MARLE BOTHA",
    title: "Junior Accountant",
    contact: [
      { type: "t", value: "+27 (0) 71 856 2398" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "CLINTON MCSEVENEY",
    title: "Account Manager",
    contact: [
      { type: "t", value: "+ 27 (0) 84 702 4860" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "SYLVIA VAN DEN BERG",
    title: "Junior Accountant",
    contact: [
      { type: "t", value: "+ 27 (0) 83 270 6798" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "BRANDON BEZUIDENHOUT",
    title: "Account Manager",
    contact: [
      { type: "t", value: "+ 27 (0) 62 109 6435" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "THOMAS SWART",
    title: "Junior Accountant",
    contact: [
      { type: "t", value: "+ 27 (0) 76 224 1067" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
  {
    name: "RONEL LOMBART",
    title: "Junior Accountant",
    contact: [
      { type: "t", value: "+27 (0) 82 327 6515" },
      { type: "c", value: "+ 27 (0) 10 015 0574" },
    ],
  },
] satisfies Pegasus[];
