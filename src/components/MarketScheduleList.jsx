import React from "react";
import MarketSchedule from "./MarketSchedule";


var scheduleStyle = {
  display:'flex',
  flexWrap: 'wrap',
  justifyContent:'center',
  backgroundColor: '#6fffc3',
  padding: '2vh',
  opacity: '.7',
  overflow: 'visible',
  borderRadius: '4vh',
  margin:'10px'
}


const marketScheduleList = [
  {
    name: "Pils",
    brand: "Heater Allen Brewing",
    price: "$7.00",
    alcoholContent: "4.8%"
  },
  {
    name: "HUB Lager",
    brand: "Hopworks Urban Brewery",
    price: "$6.50",
    alcoholContent: "5.1%"
  },
  {
    name: "Pilsner",
    brand: "Breakside Brewing Co.",
    price: "$6.50",
    alcoholContent: "5.3%"
  },
  {
    name: "Session Lager",
    brand: "Full Sail Brewing Co.",
    price: "$6.00",
    alcoholContent: "5.1%"
  },
  {
    name: "Kölsch",
    brand: "Occidental Brewing Co.",
    price: "$6.50",
    alcoholContent: "4.4%"
  },
  {
    name: "Sterling Pils",
    brand: "Ninkasi Brewing Co.",
    price: "$7.00",
    alcoholContent: "5.1%"
  },
  {
    name: "Omission Lager",
    brand: "Widmer Brothers Brewing",
    price: "$7.00",
    alcoholContent: "4.6%"
  },
  {
    name: "The Vaporizer",
    brand: "Double Mountain Brewery",
    price: "$7.50",
    alcoholContent: "6%"
  },
  {
    name: "Watershed IPA",
    brand: "Oakshire Brewing Co.",
    price: "$7.00",
    alcoholContent: "7.1%"
  },
  {
    name: "RPM",
    brand: "Boneyard Brewing Co.",
    price: "$6.50",
    alcoholContent: "7%"
  }
];

function MarketScheduleList(){

  return (
    <div style = {scheduleStyle}>
      {marketScheduleList.map((marketSchedule, index) =>
        <MarketSchedule name={marketSchedule.name}
        brand={marketSchedule.brand}
        price={marketSchedule.price}
        alcoholContent={marketSchedule.alcoholContent}
        key={index}/>
      )}
    </div>
  );
}

export default MarketScheduleList;
