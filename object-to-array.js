const data = {
  100: {
    name: "Hundred",
    options: {
      88: {
        name: "Golf Cover",
      },
      89: {
        name: "Terrorism Extension",
      },
    },
  },
  101: {
    name: "Hundred And One",
    options: {
      88: {
        name: "Eighty Eight",
        subOptions: {
          1: { name: "Sub One" },
          2: { name: "Sub Two" },
          3: { name: "Sub Three" },
        },
      },
    },
  },
  102: {
    name: "Hundred And Two",
  },
};

const objToArr = (obj) => {
  return Object.keys(obj).map((el) => {
    const out = { id: el, ...obj[el] };

    Object.keys(out).forEach((k) => {
      if (typeof out[k] === "object") {
        out[k] = Object.keys(out[k]).map((l) => ({ id: l, ...out[k][l] }));
      }

      return out;
    });

    console.log(out);
    return out;
  });
};

// const objToArr = (obj) => {
//   const keys = Object.keys(obj);

//   return keys.map((k) => {
//     const val = obj[k];

//     val.options = Object.keys(val.options).map((ck) => ({
//       ck: val.options[ck],
//     }));

//     return val;
//   });
// };

objToArr(data);

// output = [
//   { id: "100", name: "Hundred" },
//   { id: "101", name: "Hundred And One" },
//   { id: "102", name: "Hundred And Two" }
// ];

// let arr = [];
// const countRec = (count, arr = []) => {
//   if (count < 1) return arr;

//   arr.push(count);
//   return countRec(count - 1, arr);
// };

// console.log(countRec(10));
