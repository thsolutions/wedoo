import React,{useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AddpeopleImg from "../assets/addpepole.svg";
import Navbar from "../components/Navbar";
import MobileNav from "../components/mobilebottomnav";
const Addpeople = () => {
  const [value, onChange] = useState(new Date());
  const onsubmit = (d) => {
    console.log(d)
  }
  return (
    <div className="addpeople">
      <Navbar></Navbar>
      <Calendar
        onChange={(e) => {
          onChange(e);
          onsubmit(e)
        }}
        value={value}
      />
      <MobileNav></MobileNav>
    </div>
  );
};

export default Addpeople;
