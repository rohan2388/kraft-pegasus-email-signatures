export type Griffon = {
  name: string;
  title: string;
  contact: {
    type: string;
    value: string;
  }[];
};
export default [
  {
    name: "David Marshall",
    title: "CEO",
    contact: [
      {
        type: "c",
        value: "+27 (0) 74 102 2033",
      },
      {
        type: "t",
        value: "+27 (0) 12 804 0464",
      },
    ],
  },
] as Griffon[];
