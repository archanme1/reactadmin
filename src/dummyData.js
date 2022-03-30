export const userColoumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.avatar} alt="" className="cellImg" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Raghav Kattel",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "arg@gmail.com",
    status: "active",
    age: 22,
  },
  {
    id: 2,
    username: "Binod Sherpali",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "binod@gmail.com",
    status: "passive",
    age: 19,
  },
  {
    id: 3,
    username: "Sabin Bista",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "sabin@gmail.com",
    status: "pending",
    age: 25,
  },
  {
    id: 4,
    username: "Sagar SHarma",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "sagar@gmail.com",
    status: "active",
    age: 21,
  },
  {
    id: 5,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "passive",
    age: 21,
  },
  {
    id: 6,
    username: "Milan Shrestha",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "milan@gmail.com",
    status: "active",
    age: 21,
  },
  {
    id: 7,
    username: "Bibek Shah",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "bibek@gmail.com",
    status: "pending",
    age: 23,
  },
  {
    id: 8,
    username: "Rupesh Timal",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "rupesh@gmail.com",
    status: "active",
    age: 25,
  },
  {
    id: 9,
    username: "Amit Shani",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "amit@gmail.com",
    status: "passive",
    age: 29,
  },
  {
    id: 10,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    age: 21,
  },
];

export const productRows = [
  {
    id: 1,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 2,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 3,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 4,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 5,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 6,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 7,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 8,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 9,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 10,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
];

export const userInputs = [
  {
    id: 1,
    label: "Username",
    type: "text",
    placeholder: "archanme1",
  },
  {
    id: 2,
    label: "Full Name",
    type: "text",
    placeholder: "Archan Bhatta",
  },
  {
    id: 3,
    label: "Email",
    type: "email",
    placeholder: "archanme1@gmail.com",
  },
  {
    id: 4,
    label: "Phone",
    type: "text",
    placeholder: "9869702847",
  },
  {
    id: 5,
    label: "Password",
    type: "password",
  },
  {
    id: 6,
    label: "Address",
    type: "text",
    placeholder: "5464, Mississuaga",
  },
  {
    id: 7,
    label: "Country",
    type: "text",
    placeholder: "Canada",
  },
];

export const productInputs = [
  { id: 1, label: "Title", type: "text", placeholder: "Hp Omen 15" },
  { id: 2, label: "Description", type: "text", placeholder: "description" },
  { id: 3, label: "Category", type: "text", placeholder: "Computers" },
  { id: 4, label: "Price", type: "text", placeholder: "100" },
  { id: 5, label: "Stock", type: "text", placeholder: "In Stock" },
];
