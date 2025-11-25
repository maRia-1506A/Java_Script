const obj = [
  {
    id: 1,
    text: "The sky is blue",
    inCompleted: true
  },
  {
    id: 2,
    text: "This was my biggest nightmare",
    inCompleted: true
  },
  {
    id: 3,
    text: "Goodluck fo your future",
    inCompleted: false
  }
];

console.log(obj[1].text);

//convert to json
const convToJSON= JSON.stringify(obj);
console.log(convToJSON);
