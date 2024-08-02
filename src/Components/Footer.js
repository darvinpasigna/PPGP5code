import Logo from '../Images/Logo.png';
import useCode from '../Code/Code';
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import '../App.css';

function Footer() {
    const url = "http://localhost/PP5/1stPP5/videogame.php";
    const [footerCard, setFooterCard] = useState([]);
    const {biFB, biInstagram, whiteEnvlop, biTweet, biYoutube} = useCode();
  
  
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFooterCard(data);
        })
        
    }, []);

    const videoOpts = {
        height: '150',
        width: '260'
    };

    return (
        <>
            <footer>
                <div className='container'>
                    <div className="row" id='topfooter'>
                        <div className="col-6"><img src={Logo} alt="logo" /></div>
                        <div className="col-6" id='socialmed'>
                            <ul>
                                <ol>{biFB}</ol>
                                <ol>{biInstagram}</ol>
                                <ol>{whiteEnvlop}</ol>
                                <ol>{biTweet}</ol>
                                <ol>{biYoutube}</ol>
                            </ul>
                        </div>
                    </div>
                    <hr style={{ height: '4px', backgroundColor: 'black' }} />
                    <div className='row' id='footerContenet'>
                        <div className='col-3'>
                            <h4>PPG</h4>
                    
                        <p>123 Example Street City, State, ZIP Code Country <br />
                        Customer Support: (123) 456-7890 <br />
                        Sales Inquiries: (123) 456-7891 <br />
                        Support: support@example.com</p>
                   
                        </div>
                        <div className='col-3'> 
                            <h4 style={{ textAlign: "center" }}>NEW RELEASE</h4>
                            <div className='d-flex-wrap'>
                                {footerCard.slice(0,3).map((card) => (
                                    <div className="col-md-4 mb-1 cardItem" key={card.id}>
                                        <img src={card.main_img} className="img-fluid rounded-start" alt="cardpic" style={{ width: "100%", height: "120px", objectFit: 'fill' }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 style={{ textAlign: "center" }}>BEST SELLER</h4>
                            <div className='d-flex-wrap'>
                                {footerCard.slice(3, 6).map((card) => (
                                    <div className="col-md-4 mb-1 cardItem" key={card.id}>
                                        <img src={card.main_img} className="img-fluid rounded-start" alt="cardpic" style={{ width: "100%", height: "120px", objectFit: 'fill' }}  />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 style={{ textAlign: "center" }}>Youtube</h4>
                            <YouTube videoId="7KFEtvPBbzc" opts={videoOpts} />
                        </div>
                    </div>
                </div>
            </footer>
            <div className='container-fluid' id='copyright'>
                <p className="m-0">
                    &copy; 2024 <a href="https://yourwebsite.com">PPG</a>. All rights reserved.
                </p>
            </div>
        </>
    );
}

export default Footer;