// import { client } from "@/sanity/lib/client"

// async function getData() {
//   let fetchData = await client.fetch(`*[_type == 'student']`)
//   return fetchData;
// }

// export default async function Home() {
//   let data = await getData();
//   console.log("data", data)
//   return (
//     <>
//       {
//         data.map((val) => {
//           return (
//             <>
//               <div key={val.studentID}>
//                 <h1>{val.name}</h1>
//                 <h1>{val.age}</h1>
//                 <h1>{val.rollnumber}</h1>
//                 <h1>{val.text}</h1>
//               </div>
//             </>
//           )
//         })


//       }
//     </>
//   )
// }



// "use client"
// import { client } from "@/sanity/lib/client"
// import { useState, useEffect } from 'react';

// async function getData() {
//   let fetchData = await client.fetch(`*[_type == 'teacher']`)
//   return fetchData;
// }

// export default function Home() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const result = await getData();
//       setData(result);
//     }

//     fetchData();
//   }, []);

//   return (
//     <>
//       {
//         data.map((val) => {
//           return (
//             <div key={val.studentID}>
//               <h1>{val.name}</h1>
//               <h1>{val.age}</h1>
//               <h1>{val.rollnumber}</h1>
//               <h1>{val.text}</h1>
              
//             </div>
//           )
//         })
//       }
//     </>
//   )
// }


"use client"
import { client } from "@/sanity/lib/client"
import { useState, useEffect } from 'react';

async function getData() {
  let fetchData = await client.fetch(`*[_type == 'teacher']`)
  return fetchData;
}

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">Muhammad Ahmad</a>
          <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav nav ml-auto">
              <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
              <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
              <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
              <li className="nav-item"><a href="#services-section" className="nav-link"><span>Services</span></a></li>
              <li className="nav-item"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
              <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
              <li className="nav-item"><a href="#blog-section" className="nav-link"><span>My Blog</span></a></li>
              <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
            </ul>
          </div>
        </div>
      </nav>
  






      {/* {
        data.map((val) => {
          return (
            <div key={val._id}>
              <h1>{val.name}</h1>
              <h1>{val.age}</h1>
              <h1>{val.rollnumber}</h1>
              <h1>{val.text}</h1>
              {
                val.image && (
                  <img src={val.image.asset.url} alt="Teacher Image" />
                )
              }
            </div>
          )
        })
      } */}


      
    </>
  )
}

