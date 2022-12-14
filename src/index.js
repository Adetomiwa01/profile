import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import profileImg from './profileImg.png'
import data from './data'
import slack from './slack.png'
import git from './github.png'
import zuri from './zuri.png'
import ingressive from './ingressive.png'
import imgHover from './imgHover.png'
import threedot from './threedot.png'
import share from './share.png'



function Top() {
  return (
    <div className="App">
      <header className="App-header">
        
      <div className='shareBar'>
          <img src={share} className="share" alt="" />

          <img src={threedot} className="threedot" alt="" />
        </div>

        <div className='img'>
          <img src={profileImg} className="profile_Img" id='profile_Img' alt="" />

          <img src={imgHover} className="imgHover" alt=""  />
        </div>

        

        <h2 id='slack'>Adetomiwa01</h2>

      </header>
    </div>

    
  );

}

function Link(props) {
  return (
    <div className='links' >
    <a href={props.url} title={props.title} id={props.id} >
      

     <button>{props.location}</button>
      
    </a>
    </div>
  )
}


function Icons() {
  return (
    <div className='icons-btn'>
    <a href='https://github.com/Adetomiwa01/profile'> <img src={slack} className="icon" alt="" /></a>
    <a href='https://github.com/Adetomiwa01/profile'><img src={git} className="icon" alt="" /></a>
    
    </div>
  )
}

function Footer() {
  return (
    <div>
    <hr width="70%" color='#D0D5DD'/>
    <div className='footer'>
  
      <div className='zuri'>
      <img src={zuri} className="zuriImg" alt="" />
      </div>

      <p>HNG Intership 9 Front-End Task</p>

      <div className='ingressive'>
      <img src={ingressive} className="ingressiveImg" alt="" />
      </div>
    </div>
    </div>
  )
}


function Post() {

    const cards = data.map(items => {
    return (
      <Link 
          key={items.id}
          {...items}
    />
    )
    }) 
    
    return (
      <div class="center">
        <Top/>
        <div>
          {cards}
        </div>
        <Icons/>
        <Footer/>
      </div>
    )
  }




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Post/>) 
