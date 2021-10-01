import React from 'react';
import { Fragment } from 'react';
import '../Home.css';
function Home() {
  return (
    <Fragment>
      <section className="main">
        <div className="content">
          <div className="first">
            <div className="text">
              <div>
                <h3>General Store</h3>
              </div>
              <div>
                <h1>Grocery Delivery Application</h1>
                <p></p>
                <h2>get everything you need at your doorstep !</h2>
                <div className="btn">
                  <a href="#">login as user</a>
                  <a href="#">login as vendor</a>
                </div>
              </div>
            </div>
          </div>
          <div className="second">
            <div className="image"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
