import { useEffect, useState } from "react";

const Navbar = () => {
    const [show,setShow]=useState(false)
useEffect(()=>{
window.addEventListener('scroll',()=>{
    if(window.scrollY>100){
        setShow(true);
    }else setShow(false)
   return ()=>{
       window.removeEventListener('scroll');
   } 
})
},[])
    return ( 
        <div className={`nav ${show && 'nav-black'}`}>
            <img 
            src="" alt="Netflix" 
             className="logo"/>
            <img src="https://cdn4.iconfinder.com/data/icons/eldorado-user/40/user-128.png" alt="Netfilx" className="avatar"/>
        </div>
     );
}
 
export default Navbar;