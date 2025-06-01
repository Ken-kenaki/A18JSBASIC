const Userdata = [
  {
    id: 1,
    name: "Diwas",
    age: 19,
    gender: "male",
    hasPassedOut: true,
    occupation: undefined,
  },
  {
    id: 2,
    name: "Jalan",
    age: 23,
    gender: "male",
    hasPassedOut: false,
    occupation: "intern",
  },
  {
    id: 3,
    name: "nirpa",
    age: 24,
    gender: "male",
    hasPassedOut: true,
    occupation: "animator",
  },
  {
    id: 4,
    name: "gaurav",
    age: 25,
    gender: "undefined",
    hasPassedOut: false,
    occupation: "be god",
  },
  {
    id: 5,
    name: "Ishwor",
    age: 26,
    gender: "male",
    hasPassedOut: true,
    occupation: "undefined",
  },
  {
    id: 6,
    name: "safalta",
    age: 27,
    gender: "female",
    hasPassedOut: false,
    occupation: "SSWE",
  },
  {
    id: 7,
    name: "bimal",
    age: 28,
    gender: "male",
    hasPassedOut: true,
    occupation: undefined,
  },
];
const response = {
  status: 200,
  message: "Data fetched successfully",
  data: Userdata,
};

const getUserName = () => {
  const APIStatus = response.status;
  if (APIStatus === 200) {
    const result = response.data
      .filter((user) => user.age > 22 && user.occupation)

      .map((user) => user.name);
    return result;
  } else {
  }
};
console.log(getUserName());

const customers = [
  {
    id: 1,
    name: "Diwash",
    buy: [
      { id: 3, name: "Gold chain" },
      { id: 45, name: "Silver chain" },
    ],
  },
  {
    id: 2,
    name: "Gaurav",
    buy: [
      { id: 34, name: "Pressure cooker" },
      { id: 45, name: "Water heater" },
    ],
  },
  {
    id: 1,
    name: "Diwash",
    buy: [
      { id: 3, name: "Gold chain" },
      { id: 45, name: "Silver chain" },
    ],
  },
  {
    id: 4,
    name: "Diwash",
    buy: [
      { id: 3, name: "Gold chain" },
      { id: 45, name: "Silver chain" },
    ],
  },
];
const CustomerResponse = {
  status: 200,
  message: "Data fetched successfully",
  data: customers,
};
const getProductName = () => {
  if (CustomerResponse.status === 200) {
    let boughtProduct = [];
    CustomerResponse.data.forEach((customer) => {
      customer.buy.map((item) => {
        boughtProduct.unshift(item.name);
      });
    });
    return boughtProduct;
  }
};
console.log(getProductName());
