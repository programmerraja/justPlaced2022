import {React} from "react";
import "./style.css";

import Footer from "../../components/Footer";

import hero from "../../img/hero.jpg";

import search from "../../img/search.jpg";
import gothrough from "../../img/gothrough.jpg";
import prepare from "../../img/prepare.jpg";
import nailitdown from "../../img/nailitdown.jpg";



function Home() {

return ( <>
        <div className="hero_container">
           <div className="hero_text">
              <h1> Find the company that suits You </h1>
              <p>Make use of the reviews and interview steps <br/>
                to place the company that you likes</p>
              <div className="hero_button">
                 <a href="/signin">
                 <input type="button" name="signin" value="Sign in" className="hero_button1" />
                 </a>
                 <a href="signup">
                 <input type="button" name="signup" value="Sign up" className="hero_button2" />
                 </a>
              </div>
           </div>
           <div className="hero_img">
              <img src={hero} alt="hero" />
           </div>
        </div>
        <div className="hero_wave">
           
        </div>
        <section className="section_container">
                <h3 className="section_title">How it Works? </h3>
                <div className="how_itworks_container">
                    <div className="how_itworks-card">
                       <img  className="how_itworks-img" src={search}/>
                       <p className="how_itworks-text-bold">1.Search</p>
                       <p className="how_itworks-text">
                       Search for the company you looking for.</p>
                    </div>
                     <div className="how_itworks-card">
                       <img  className="how_itworks-img" src={gothrough}/>
                       <p className="how_itworks-text-bold">2.Go through </p>
                       <p className="how_itworks-text">
                       Go through the review and  
                       interview process about the company.
                       </p>
                    </div>
                     <div className="how_itworks-card">
                       <img  className="how_itworks-img" src={prepare}/>
                        <p className="how_itworks-text-bold">3.Prepare </p>
                       <p className="how_itworks-text">
                       Prepare for the interview based on the interview process.</p>
                    </div>
                     <div className="how_itworks-card">
                        <img  className="how_itworks-img" src={nailitdown}/>
                        <p className="how_itworks-text-bold">4.Nail it down </p>
                        <p className="how_itworks-text">
                        Get placed in your dream company. </p>
                    </div>
                </div>

        </section>
     
        <section className="company_container">
            <div className="company_heading_wrap">
              <h2 className="company_heading">
                Over 2+ companies
              </h2>
              <p className="company_subheading">
                Get in depth information about companies.
                Know about their interview process and how to prepare for it.</p>
            </div>
            <div className="company_wrapper">
                <div className="company_img">
                  <img src="https://static.ambitionbox.com/alpha/company/photos/logos/softsquare.jpg"/>
                </div>
                <div className="company_img">
                  <img src="data:image/png;base64,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"/>
                </div>
                <div className="company_img">
                  <img src="data:image/png;base64,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"/>
                </div>
                <div className="company_img">
                  <img src="data:image/png;base64,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"/>
                </div>

            </div>
        </section>
        <section className="follow_container">  
            <div className="follow_text">
                <h3>Connect With Us</h3>
            </div>
            <div className="follow_icons">
                <a href="https://t.me/+o2u1jURL6YZiNWVl">
                    <i className="fab fa-telegram"></i>
                </a>
            </div>
            <div className="follow_text">
                <h3>Contribute</h3>
            </div>
            <div className="follow_icons">
                <a href="https://github.com/programmerraja/Yuki22">
                    <i style={{color:"black"}} className="fab fa-github"></i>
                </a>
            </div>
        </section>
        <Footer/>
    </>);
}

export default Home;
                        // <i class="fas fa-building"></i>
