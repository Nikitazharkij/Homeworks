var data = [
    {
        text: 'some text 1',
        display: true,
        disable: false
    },
    {
        text: 'some text 2',
        display: false,
        disable: false
    },
    {
        text: 'some text 3',
        display: true,
        disable: true
    },
    {
        text: 'some text 4',
        display: true,
        disable: false
    },
];

data.filter(function (item) {
  return item.display === true && item.disable === false;
}).map(function (item) {
  return item.text;
}).forEach(function (item) {
  console.log(item);
});
