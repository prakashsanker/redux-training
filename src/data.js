const COMPLETED = "completed";
const OPEN = "open";

const data = [
  {
    id: "1",
    description: "Hello",
    title: "some title",
    time: Date.now(),
    status: COMPLETED
  },
  {
    id: "2",
    description: "World",
    title: "some other title",
    time: Date.now(),
    status: OPEN
  },
  {
    id: "3",
    description: "BLARGH",
    title: "Title 2",
    time: Date.now(),
    status: OPEN
  }
];

export default data;
