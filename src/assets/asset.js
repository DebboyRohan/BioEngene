import defaultPic from "./defaultPic.jpg";
import linkedinlogo from "./linkedinlogo.png";
import biotechdept from "./biotechdept.jpg";
import maillogo from "./mailLogo.png";

const cardsData = [
  {
    id: 1,
    name: "Jishnu Manglam",
    email: "jishnu.manglam@gmail.com",
    linkedin_url: "https://www.linkedin.com/in/jishnumanglam",
    team: "Core Team",
    designation: "Core Research Member",
  },
  {
    id: 2,
    name: "Kairav Barua",
    email: "kairav.barua@gmail.com",
    linkedin_url: "https://www.linkedin.com/in/kairav-barua-9332b8283",
    team: "Core Team",
    designation: "Core Research Member",
  },
  {
    id: 3,
    name: "Afeerah Naseem",
    email: "afeerahnaseem@gmail.com",
    linkedin_url: "https://www.linkedin.com/in/afeerah-naseem",
    team: "Core Team",
    designation: "Core Research Member",
  },
  {
    id: 4,
    name: "Snehansh Sen",
    email: "sensnehansh20@gmail.com",
    linkedin_url: "https://www.linkedin.com/in/snehansh-sen-3961a4265",
    team: "Core Team",
    designation: "Core Research Member",
  },
  {
    id: 5,
    name: "Ayush Munshi",
    email: "ayushmunshi78@gmail.com",
    linkedin_url: "https://www.linkedin.com/in/ayush-munshi-a7181a301",
    team: "Core Team",
    designation: "Core Research Member",
  },
  {
    id: 6,
    name: "Akshara Sankranthi",
    email: "aksharasankranthi@kgpian.iitkgp.ac.in",
    linkedin_url: "https://www.linkedin.com/in/akshara-sankranthi-796243307",
    team: "Core Team",
    designation: "Core Research Member",
  },
  {
    id: 7,
    name: "Bhanvi Kumar",
    email: "kumarbhanvi@gmail.com",
    linkedin_url: "https://www.linkedin.com/in/bhanvi-kumar-575297303",
    team: "Core",
    designation: "Core Research Member",
  },
  {
    id: 8,
    name: "Krishna Kant",
    email: "Kant4285@gmail.com",
    linkedin_url: "https://www.linkedin.com/in/krishna-kant-86164a240",
    team: "Core Team",
    designation: "Core Research Member",
  },
  {
    id: 9,
    name: "Shreya Mohanty",
    email: "everything.ineed05@gmail.com",
    linkedin_url: "https://www.linkedin.com/in/shreya-mohanty-b3b8a4297",
    team: "Core Team",
    designation: "Core Research Member",
  },
  {
    id: 10,
    name: "Bhumika Marmat",
    email: "bhumikamarmat@kgpian.iitkgp.ac.in",
    linkedin_url: "https://www.linkedin.com/in/bhumikamarmat",
    team: "Spons Team",
    designation: "Spons Lead",
  },
  {
    id: 11,
    name: "Vihar Davuluri",
    email: "vihardavuluri@gmail.com",
    linkedin_url: "https://www.linkedin.com/in/vihar-davuluri-40254326a",
    team: "Spons Team",
    designation: "Spons Lead",
  },
  {
    id: 12,
    name: "Jithendra Bhati",
    email: "bhatijitendra2022@gmail.com",
    linkedin_url: "https://www.linkedin.com/in/jitendra-bhati123iitkgp",
    team: "Web Dev Team",
    designation: "Web Dev Member",
  },
  {
    id: 13,
    name: "Rohan",
    email: "rohankumarpandey234@gmail.com",
    linkedin_url: "https://www.linkedin.com/in/rohan2311",
    team: "Web Dev Team",
    designation: "Web Dev Member",
  },
];
const galleryImages = [
  "https://plus.unsplash.com/premium_photo-1661374914839-a84dc1314c86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlvJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1663013589609-03f3ecdc5509?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlvJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlvdGVjaHxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661391809574-bb92749f8286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlvdGVjaHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpb3RlY2h8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1531956656798-56686eeef3d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJpb3RlY2h8ZW58MHx8MHx8fDA%3D",
];
const slideData = [
  {
    title: "Department of Bioscience and Biotechnology, IIT Kharagpur",
    src: biotechdept,
  },
];
export {
  cardsData,
  defaultPic,
  linkedinlogo,
  biotechdept,
  galleryImages,
  maillogo,
  slideData,
};
