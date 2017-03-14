import React from 'react';
import HomePublic from './HomePublic/HomePublic.js'
import HomePublic from'./HomePublic/General/HomePublic.js'
import Header from './UsersHome/Header/Header.jsx';
import AddComponent from './UsersHome/AddComponent/AddComponent.jsx';
import Cards from './UsersHome/Cards/Cards.jsx';
import Footer from './Footer/Footer.jsx';


class Index extends React.Component {
    render(){
        return(
            <div>
                <HomePublic/>
                <Header/>
                <AddComponent/>
                <Cards/>
				<Footer/>
            </div>
        )
    }
}

export default Index;
