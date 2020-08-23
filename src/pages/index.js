import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
import pic4 from '../assets/images/04.jpg';
import pic5 from '../assets/images/05.jpg';
import pic6 from '../assets/images/06.jpg';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
              Order Products Online
            <br />
          </h1>
          <p>
            Create and order by adding the desired item to your cart. Once all the items have been added click on the cart button and submit the order for review. An email confirmation will be sent to ensure the order was received. Once the sales team reviews the order a representative of Kuka Sales will call to confirm the order details. 
          </p>
        </header>
        <section className="tiles">
          <article className="style6">
              <span className="image">
                <img src={pic6} alt="" />
              </span>
              <Link to="/Soils">
                <h2>Soils Products</h2>
                <div className="content">
                  <p>
                    Soil aggregate stability is a measure of the ability of soil aggregates to resist degradation when exposed to external forces.
                  </p>
                </div>
              </Link>
            </article>          
          <article className="style1">
            <span className="image">
              <img src={pic1} alt="" />
            </span>
            <Link to="/Aggregate">
              <h2>Aggregate Products</h2>
              <div className="content">
                <p>
                  Aggregate is a broad category of coarse- to medium-grained material used in construction, including sand, gravel, crushed stone, slag, recycled concrete and geosynthetic aggregates.
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
            <Link to="/Asphalt">
              <h2>Asphalt Products</h2>
              <div className="content">
                <p>
                  Asphalt is a mixture of aggregates, binder, and filler, used for constructing and maintaining roads structures. Aggregates could be crushed rock, sand, gravel or slags.
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic3} alt="" />
            </span>
            <Link to="/Concrete">
              <h2>Concrete Products</h2>
              <div className="content">
                <p>
                  Concrete is structural material consisting of a hard, chemically inert particulate substance, known as aggregate bonded together by cement and water.
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={pic4} alt="" />
            </span>
            <Link to="/Scales">
              <h2>Scales Products</h2>
              <div className="content">
                <p>
                  Scales measure the weight and mass of many different kinds of solids, liquids or powders.
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic5} alt="" />
            </span>
            <Link to="/General">
              <h2>General Lab Equipment Products</h2>
              <div className="content">
                <p>
                  Common lab equipment used such as gloves.
                </p>
              </div>
            </Link>
          </article>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
