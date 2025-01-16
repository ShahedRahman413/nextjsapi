"use client"
import Image from "next/image";
export default function Home() {
  const handleClick = async () => {
    let data={
      name: "John Doe",
      age: 30,
      email: "john@example.com",
      phone: "1234567890"
    }
    let a = await fetch("/api/add/",{
     method: "POST",headers: {'Content-Type': 'application/json JSON'},
    body: JSON.string(data),});
    let res = await a.json();
    console.log(res);
  };
  return (
    <div>
      <h1 className=" text-2xl font-bold text-purple-400">Hello for next js</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
