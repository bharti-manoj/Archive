import React, { useState } from 'react';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';

const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ position: "relative" }} style={{maxWidth: "100vw"}}>
            <Header setOpen={setOpen} open={open} />
            {open && <Sidebar setOpen={setOpen} />}
            <Content />
        </div>
    );
}

export default Home;
