import { useState, useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import './hero.css';

function Hero() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const storedVisibility = localStorage.getItem("visibility");
    if (storedVisibility) {
      setVisible(JSON.parse(storedVisibility));
    }
  }, []);

  function signOutVisible() {
    setVisible(false);
    localStorage.setItem("visibility", JSON.stringify(false));
    setTimeout(() => {
      setVisible(true); // Set visible to true after 3 seconds
    },0);
  }




  function handleSignIn() {
    setVisible(false);
    localStorage.setItem("visibility", JSON.stringify(false));
    setTimeout(() => {
      setVisible(true); // Set visible to true after 3 seconds
      // Delay the visibility of the Sign Out button by 2 seconds
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }, 3000);
    // Navigate programmatically to the signing page
    window.location.href = '/signin';
  }

  function handleRegister() {
    setVisible(false);
    localStorage.setItem("visibility", JSON.stringify(false));
    setTimeout(() => {
      setVisible(true); // Set visible to true after 3 seconds
    }, 3000);
    // Navigate programmatically to the register page
    window.location.href = '/signup';
  }

  return (
    <>
      <div className="hero__bar">
        <div className="navbar">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="text-white news__dropdown"
                size="sm"
              >
                News
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button color="default" className="settings__button" size="sm">
            Settings
          </Button>
        </div>
        <div className="credentials">
          {!visible ? <Button className="settings__button" size="sm" onClick={signOutVisible}>
              Sign Out
            </Button> : null}
          {visible ? <Button className="settings__button" size="sm" onClick={handleSignIn}>
              Sign In
            </Button> : null}
          {visible ? <Button className="settings__button" size="sm" onClick={handleRegister}>
              Register
            </Button> : null}
        </div>
      </div>
    </>
  )
}

export default Hero;




// import { useState } from "react";
// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
// import { Link } from "react-router-dom";
// import './hero.css'
// function Hero() {
//   const [visible , setVisible] = useState(true)

//   function signOutVisible() {
//     setTimeout(() => {
//       setVisible(false);
//     }, 1000); 
//   }
  


//   return (
//     <>
//       <div className="hero__bar">
//       <div className="navbar">

//       <Dropdown>
//       <DropdownTrigger>
//         <Button 
//           variant="bordered"
//           className="text-white news__dropdown"
//           size="sm"
//         >
//           News
//         </Button>
//       </DropdownTrigger>
//       <DropdownMenu aria-label="Static Actions">
//         <DropdownItem key="new">New file</DropdownItem>
//         <DropdownItem key="copy">Copy link</DropdownItem>
//         <DropdownItem key="edit">Edit file</DropdownItem>
//         <DropdownItem key="delete" className="text-danger" color="danger">
//           Delete file
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//     <Button color="default" className="settings__button" size="sm">
//       Settings
//     </Button>
//       </div>
//     <div className="credentials">
//     {!visible ? <Link to='/'>
//     <Button className="settings__button" size="sm">
//       Sign Out
//     </Button>
//    </Link> : null}
//    {visible ? <Link to='signin'>
//     <Button className="settings__button register" size="sm" onClick={signOutVisible}>
//       Sign In
//     </Button>
//    </Link> : null }
//    {visible ? <Link to='signup'>
//     <Button className="settings__button register" size="sm" onClick={signOutVisible}>
//       Register
//     </Button>
//    </Link>: null }
//     </div>
//       </div>
//     </>
//   )
// }

// export default Hero