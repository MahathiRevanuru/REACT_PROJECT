import React,{useContext} from 'react'
import { useLocation } from 'react-router-dom'
import './sp.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube,faFacebook,faTwitter,faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { store } from './Details';
import CardHome from '../Component/main';
 import { RiShareFill } from "react-icons/ri";
 import { FaHandsWash } from "react-icons/fa";


const SingleBlogPage = () => {
const location = useLocation();
const {title, img, description} = location.state;
console.log(title)
const [detail] = useContext(store);

  return (
   <> 
  
   <div className='single__page'>
   <h1>{title}</h1>
   <span id="social" > <a href="https://www.youtube.com/c/jamesqquick"
         className="youtube social">
         <FontAwesomeIcon icon={faYoutube} size="2x" />
       </a>
       <a href="https://www.facebook.com/learnbuildteach/"
         className="facebook social">
         <FontAwesomeIcon icon={faFacebook} size="2x" />
       </a>
       <a href="https://www.twitter.com/jamesqquick" className="twitter social">
         <FontAwesomeIcon icon={faTwitter} size="2x" />
       </a>
       <a href="https://www.instagram.com/learnbuildteach"
         className="instagram social">
         <FontAwesomeIcon icon={faInstagram} size="2x" />
       </a></span>
   

   <img src={img} alt="" />
   <p>{description}</p>


<h2>More from SIREN</h2>
<div className='morearticles '>
                    {
                        detail.filter((article) => { return article.category === "bollywood" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}                            
                            />
                        ))
                    }
                </div>
          <div className='morearticles '>
                    {
                        detail.filter((article) => { return article.category === "technology" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
          <div className='morearticles '>
                    {
                        detail.filter((article) => { return article.category === "food" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
   
</div>

<span id="icon"><FaHandsWash/> 9.3k</span> <br /><br />
<span id="icon"><RiShareFill/> share this article</span>


   </>
  )
}

export default SingleBlogPage;