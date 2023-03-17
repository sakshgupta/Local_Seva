import carpenter from "../components/AvailableServices/images/carpenter.png";
import electrician from "../components/AvailableServices/images/electrician.png";
import garbagecollector from "../components/AvailableServices/images/garbagecollector.png";
import handyman from "../components/AvailableServices/images/handyman.png";
import maid from "../components/AvailableServices/images/maid.png";
import plumber from "../components/AvailableServices/images/plumber.png";

const availableServices = [
  {
    id: "1",
    serviceName: "Maid",
    serviceInfo: "Get professional cleaner with one tap",
    serviceImage: maid,
    serviceTime: "5",
  },
  {
    id: "2",
    serviceName: "Electrician",
    serviceInfo: "Book a professional electrician  for on site issue",
    serviceImage: electrician,
    serviceTime: "15",
  },
  {
    id: "3",
    serviceName: "Garbage Collector",
    serviceInfo: "Get your garbage taken away with one tap",
    serviceImage: garbagecollector,
    serviceTime: "5",
  },
  {
    id: "4",
    serviceName: "Handy Man",
    serviceInfo: "Got a chore? Don’t worry we got you covered",
    serviceImage: handyman,
    serviceTime: "10",
  },
  {
    id: "5",
    serviceName: "Carpenter",
    serviceInfo: "Book pro carpenter with good experience",
    serviceImage: carpenter,
    serviceTime: "20",
  },
  {
    id: "6",
    serviceName: "Plumber",
    serviceInfo: "A plumber for any kind of fixures to be fixed",
    serviceImage: plumber,
    serviceTime: "2",
  },
];

export default availableServices;
