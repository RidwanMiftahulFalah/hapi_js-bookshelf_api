const books = [
  {
    id: 1,
    name: 'AA',
    anu: 1,
  },
  {
    id: 2,
    name: 'BB',
  },
  {
    id: 3,
    name: 'AA',
  },
];

const param = 'aa';

const book = books
  .filter((b) => b.name.toLowerCase() === param.toLowerCase())
  .map(({ name }) => ({
    name,
  }));
console.log(book);

const { anu } = books[0];
console.log(anu);
