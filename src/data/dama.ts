export type User = {
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
    title: "Director",
    contact: [
      {
        type: "c",
        value: "+27 (0) 74 102 2033",
      },
      {
        type: "t",
        value: "+27 (0) 74 102 2033",
      },
    ],
  },
  {
    name: "CANDICE VAN DUYKER",
    title: "Executive Admin Assistant to David Marshall",
    contact: [
      {
        type: "c",
        value: "+ 27 (0) 83 666 1386",
      },
      {
        type: "t",
        value: "+ 27 (0) 10 015 0574",
      },
    ],
  },
] as User[];
