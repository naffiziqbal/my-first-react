import React from "react";
import ReactDOM from 'react-dom';
import  Header  from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./style.css"


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
