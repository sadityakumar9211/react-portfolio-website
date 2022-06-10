import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../../data/portfolio.json';
import myspacepic from '../../assets/images/myspace.png'
import yelpcamppic from '../../assets/images/yelpcamp.png'
import defencedbms from '../../assets/images/DefenceDBMS.png'
import sqldbms from '../../assets/images/sqldbms.png'
const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(portfolioData);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });


    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                <div className="image-box">
                    <img
                        src={myspacepic}
                        className="portfolio-image"
                        alt="portfolio" />
                    <div className="content">
                        <p className="title">MySpace</p>
                        <h4 className="description">Group Project, EJS, MONGO, EXPRESS, Tailwind, NODEJS</h4>
                        <button
                            className="btn"
                            onClick={() => window.open('https://github.com/sadityakumar9211/MySpace-1')}
                        >View</button>
                        <button style={{'marginLeft': '10px'}}
                            className="btn"
                            onClick={() => window.open('https://mighty-fjord-39866.herokuapp.com/')}
                        >Live</button>
                    </div>
                </div>
                <div className="image-box">
                    <img
                        src={yelpcamppic}
                        className="portfolio-image"
                        alt="portfolio" />
                    <div className="content">
                        <p className="title">YelpCamp</p>
                        <h4 className="description">EJS, MONGODB, EXPRESS, NODEJS</h4>
                        <button
                            className="btn"
                            onClick={() => window.open('https://github.com/sadityakumar9211/Yelp-Camp')}
                        >View</button>
                        <button style={{'marginLeft': '10px'}}
                            className="btn"
                            onClick={() => window.open('https://saditya-yelp-camp.herokuapp.com/')}
                        >Live</button>
                    </div>
                </div>
                <div className="image-box">
                    <img
                        src={defencedbms}
                        className="portfolio-image"
                        alt="portfolio" />
                    <div className="content">
                        <p className="title">Defence Force Database Management System</p>
                        <h4 className="description">C++, OOP</h4>
                        <button
                            className="btn"
                            onClick={() => window.open('https://github.com/sadityakumar9211/Defence-Force-Database-Management-System')}
                        >Code on GitHub</button>
                    </div>
                </div>
                <div className="image-box">
                    <img
                        src={sqldbms}
                        className="portfolio-image"
                        alt="portfolio" />
                    <div className="content">
                        <p className="title">Military Database Management System</p>
                        <h4 className="description">SQL, MySQL</h4>
                        <button
                            className="btn"
                            onClick={() => window.open('https://github.com/sadityakumar9211/DBMS-project')}
                        >View on GitHub</button>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;