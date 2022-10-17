import React, {useContext} from 'react'
import { store } from './Details'
import Card from '../Component/ticket'
import SmallCard from '../Component/Tiny';

export const Technology = () => {
  const [detail, ] = useContext(store);
  return (
    <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Technology</h1>
            <h1 style={{ marginLeft:"500px", display: "inline-block" }}>Top Posts</h1>

            <div className="main__container">
            <div className='rightbar'>
                  {
                    detail.filter((article) =>{return article.category === "Technology"}).map((n)=>( <Card 

                      articleid={n.id}
                      imgUrl = {n.Image}
                      description={n.description.slice(0, 200)}
                      title={n.title}

                      />))
                  }
            </div>
            <div className="sidebar">
                    {
                        detail.filter((article) => { return article.category === "Technology" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Technology;