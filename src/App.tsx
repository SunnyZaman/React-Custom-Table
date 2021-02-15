import React from 'react';
import Table from './components/Table';
import items from './assets/MockData.json'
import { IUser } from './models/User';

function App() {
  const columns = [{
    key: "id",
    name: "Id",
    onRender: (item: IUser) => {
      return <span>{item.Id}</span>;
    },
  },
  {
    key: "first_name",
    name: "First Name",
    onRender: (item: IUser) => {
      return <span>{item.FirstName}</span>;
    },
  },
  {
    key: "last_name",
    name: "Last Name",
    onRender: (item: IUser) => {
      return <span>{item.LastName}</span>;
    },
  },
  {
    key: "email",
    name: "Email",
    onRender: (item: IUser) => {
      return <span>{item.Email}</span>;
    },
  },
  {
    key: "date_of_birth",
    name: "Date of Birth",
    onRender: (item: IUser) => {
      return <span>{item.DateOfBirth?.split("T")[0]}</span>;
    },
  },
  {
    key: "age",
    name: "Age",
    onRender: (item: IUser) => {
      return <span>{item.Age}</span>;
    },
  },
  {
    key: "country",
    name: "Country",
    onRender: (item: IUser) => {
      return <span>{item.Country}</span>;
    },
  },
  {
    key: "phone",
    name: "Phone",
    onRender: (item: IUser) => {
      return <span style={{backgroundColor:"blue", color:'white'}}>{item.Phone}</span>;
    },
  },
  ];
  return (
      <Table columns={columns} items={items} />
  );
}

export default App;
