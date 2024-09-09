import React from 'react'

const Blog = () => {
  return (
    <div>
      <section>
    <div className="container">
      <h1>Our recent blogs</h1>
      <div className="row">
        <div className="col-1">
          <div className="block">
            <div className="img-block">
              <img src="/images/Image (3).png" alt="" />
            </div>
            <div className="text-block">
              <span>November 16, 2014</span>
              <h3>Three Pillars of User Delight</h3>
              <p>
                Delight can be experienced viscerally, behaviourally, and
                reflectively. A great design is ...
              </p>
              <div className="block-btn">
                <button className="btn-b b-1">Research</button>
                <button className="btn-b b-2">UI UX</button>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="img-block">
              <img src="/images/Image (4).png" alt="" />
            </div>
            <div className="text-block">
              <span>September 24, 2017</span>
              <h3>UX Mapping Methods</h3>
              <p>
                Visual-design principles can be applied consistently throughout
                the process of creating a polished UX map...
              </p>
              <div className="block-btn">
                <button className="btn-b b-1">Research</button>
                <button className="btn-b b-2">UI Design</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="post-img">
            <img src="/images/Image (5).png" alt="" />
          </div>
          <div className="post-text">
            <span>March 13, 2014</span>
            <h3>Agile Development Projects and Usability</h3>
            <p>
              Agile methods aim to overcome usability barriers in traditional
              development, but post new threats to user experience quality.{" "}
            </p>
            <div className="post-btn">
              <button className="btn-p p-1">Programing</button>
              <button className="btn-p p-2">Research</button>
              <button className="btn-p p-3">Developments</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Blog
