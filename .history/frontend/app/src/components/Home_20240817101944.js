import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './css/home.css';
import { Link } from 'react-router-dom';
import UserStatistics from "./UserStatistics";
// import Header from "./Header";
const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div><h1 className="headings">Authenticating...</h1></div>;
  }

  return (
    <>
        
    {/* // isAuthenticated */}
      <div className="whole-home">
      {isAuthenticated ?(<h1 className="headings">Hellow Hellow my friend.. {user.name}</h1>):
      <h1 className="headings ">This website is under construcrtion......</h1>}
       <div id="wrapper-body">
            <div class="container-body">
            <Link to="/IT">
                    <div class="div-body" >
                    <div class="card-body" id="one">
                        <div class="ilustration-body">
                            <lottie-player
                            src="https://assets10.lottiefiles.com/packages/lf20_LrcfNr.json"
                            background="white"
                            speed="1"
                            loop
                            autoplay
                            ></lottie-player>
                        </div>
                        <h3 class="h3-body">Computer Science</h3>
                        <p class="p-body">
                            Designing better computer requires better knowledge
                        </p>
                        <button class="button-body" id="csopen">Open</button>
                        
                    </div>
                </div>
                </Link>
        <Link to="/eee">
          <div class="div-body" >
              <div class="card-body" >
                  <div class="ilustration-body">
                      <lottie-player
                      src="https://assets10.lottiefiles.com/packages/lf20_LrcfNr.json"
                      background="white"
                      speed="1"
                      loop
                      autoplay
                      ></lottie-player>
                    </div>
                    <h3 class="h3-body">EEE</h3>
                    <p class="p-body">
                    Designing better computer requires better knowledge
                    </p>
                    <button class="button-body" id="card-body1">Open</button>
                    
                </div>
            </div>
                      </Link>
            <Link to="/civil">
            <div class="div-body" >
                <div class="card-body">
                    <div class="ilustration-body">
                        <lottie-player
                        src="https://assets10.lottiefiles.com/packages/lf20_LrcfNr.json"
                        background="white"
                        speed="1"
                        loop
                        autoplay
                        ></lottie-player>
                    </div>
                    <h3 class="h3-body">Civil Engineering</h3>
                    <p class="p-body">
                    Designing better computer requires better knowledge
                    </p>
                    <button class="button-body">Open</button>
                    
                </div>
            </div></Link>
            <Link to="/mechanical">
            <div class="div-body" >
                <div class="card-body">
                    <div class="ilustration-body">
                        <lottie-player
                        src="https://assets10.lottiefiles.com/packages/lf20_LrcfNr.json"
                        background="white"
                        speed="1"
                        loop
                        autoplay
                        ></lottie-player>
                    </div>
                    <h3 class="h3-body">Mechanical Engr.</h3>
                    <p class="p-body">
                    Designing better computer requires better knowledge
                    </p>
                    <button class="button-body">Continue</button>
                    
                </div>
            </div></Link>
            <Link to="/ee">
            <div class="div-body" >
                <div class="card-body">
                    <div class="ilustration-body">
                        <lottie-player
                        src="https://assets10.lottiefiles.com/packages/lf20_LrcfNr.json"
                        background="white"
                        speed="1"
                        loop
                        autoplay
                        ></lottie-player>
                    </div>
                    <h3 class="h3-body">Electrical Engr.</h3>
                    <p class="p-body">
                    Designing better computer requires better knowledge
                    </p>
                    <button class="button-body">Continue</button>
                    
                </div>
            </div></Link>
            
            <Link to="/etc">
          <div class="div-body" >
              <div class="card-body">
                  <div class="ilustration-body">
                      <lottie-player
                      src="https://assets10.lottiefiles.com/packages/lf20_LrcfNr.json"
                      background="white"
                      speed="1"
                      loop
                      autoplay
                      ></lottie-player>
                    </div>
                    <h3 class="h3-body">ETC</h3>
                    <p class="p-body">
                    Designing better computer requires better knowledge
                    </p>
                    <button class="button-body">Continue</button>
                    
                </div>
            </div></Link>
        </div>
    </div>
    <h1 className="headings">Connect with out community</h1>
    {/* <UserStatistics /> */}
      </div>
                      </>
      
    )

};

export default Home;