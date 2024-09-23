import React from 'react'


const Navbar =() =>{
    return(
        <div className="w-[100%] bg-white ">
            <div className="flex w-[80%] mx-auto items-center justify-between h-[15vh">
                <div className="relative cursor-pointer w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] object-contain">
                    VISMA
                </div>
                <div className="flex items-center space -x-12">
                    <a href="#" className="nav-link">О компании</a>
                    <a href="#" className="nav-link">Новости</a>
                    <a href="#" className="nav-link">Новост</a>
                    <a href="#" className="nav-link">Новост</a>
                    <a href="#" className="nav-link">Новост</a>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;