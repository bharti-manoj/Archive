import React from 'react';

const Header = ({open, setOpen}) => {
    return (
        <nav class="navbar navbar-expand-xxld navbar-dark bg-dark">
            <div class="container-fluid justify-content-end">
                <a class="navbar-brand" href="#">Connect</a>
                <i class="fas fa-bars fa-lg text-white" style={{cursor: "pointer"}} onClick={()=> setOpen(!open)}></i>
            </div>
        </nav>
    );
}

export default Header;
