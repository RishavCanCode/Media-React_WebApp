import React from 'react';
import "./Blog.css";
import { post1,post2,post3 } from '../../assets';

const Blog = () => {
  return (
    <section id ="blog" className='pink'>
      <div className='wrapper'>
        <h2 className='light'>Latest Posts</h2>
        <div className='content-container'>
          <div className='post'>
            <div className='tag'>FILMS</div>
            <a href='#'>
              <img src={post1} alt=""></img>
            </a>
            <a href='#'>
              <h3 className='post-title'>How To Achieve A Successful Career In Direction </h3>
            </a>
          </div>

          <div className='post'>
            <div className='tag'>AUDIO</div>
            <a href='#'>
              <img src={post2} alt=""></img>
            </a>
            <a href='#'>
              <h3 className='post-title'>How to Begin With Audio Processing</h3>
            </a>
          </div>

          <div className='post'>
            <div className='tag'>STUDIO</div>
            <a href='#'>
              <img src={post3} alt=""></img>
            </a>
            <a href='#'>
              <h3 className='post-title'>Is It Possible To Be A One Man Army When It Comes To Film Editing</h3>
            </a>
          </div>

        </div>
        <div className='btn-container'>
          <a href='#' className='all_post_btn'>All Posts</a>
        </div>
        </div>
      </section>
  );
};

export default Blog;