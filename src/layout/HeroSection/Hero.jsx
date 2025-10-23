import React from 'react'
import './Hero.css'
import '../../App.css'
import img1 from '../../asset/img1.jpg'
import imgg  from'../../asset/imgg.jpg'
import  imgmain from '../../asset/imgmain.jpg'

export default function Hero() {
  return (
    <div> 
<div id="carouselExampleDark" class="carousel carousel-dark slide">
<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" id='v'></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={img1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block text-start" id='carousel-capt'>
        <div className='overlay1'>
               <h5>
            Building a<br/> Foundation of<br/> love and <span className="spanh">Support</span>
        </h5>
        <p>A campaign of affection and mercy </p>
         
             <div>
             <button id='btnh'>
                join us
                </button>
             </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={imgg} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" id='carousel-capt'>
         <div className='overlay2'>
               <h5>
          Seeking Family<br/><span className="spanh">Solution?</span>
            
        
        </h5>
        <p>Discover Solution and Support . Vit the family<br/>contact center </p>
  
   
        
             <div>
             <button id='btnh1'>
                join us
                </button>
             </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={imgmain} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>




        
      
 
  )
}
