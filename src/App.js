import React, {useState, useEffect} from 'react';
import {useFetch} from './useFetch';
import Follower from './Follower';

function App() {
  const {loading, data} = useFetch();
  const [page, setPage] = useState(1);
  const [followers, setFollowers] = useState([])

  useEffect(()=>{
    if(loading) return;
    setFollowers(data[page-1]);
  },[loading, page])

  const handleClick = (newPage)=>{
    setPage(newPage);
  }

  const nextPage = ()=>{
    if(page===data.length) return;
    setPage(page+1);
  }

  const prevPage = ()=>{
    if(page===1) return;
    setPage(page-1);
  }

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading...' : 'Git Hub Followers'}</h1>
        <div className='underline'></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower)=>{
            return <Follower key={follower.id} {...follower}/>
          })}
        </div>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>prev</button>
          {data.map((item, index)=>{
            return(
              <button
                key={index + 1}
                className={index+1===page ? 'page-btn active-btn' : 'page-btn'}
                onClick={()=>handleClick(index+1)}
              >
                {index + 1}
              </button>
            )
          })}
          <button className="prev-btn" onClick={nextPage}>next</button>
        </div>
      </section>
    </main>
    );
}

export default App;
