import React from "react";
import ReactDOM from 'react-dom';
import  Header  from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";


const root = document.getElementById('root')

function App(){
    return(
        <>
        <Header />
        <MainContent />
        <Footer />
    </>
    )
}

ReactDOM.render(
<App />,  root
)
