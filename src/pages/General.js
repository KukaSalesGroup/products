import React from 'react';

import Layout from '../components/Layout';
import pic15 from '../assets/images/15.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>General Lab Products</h1>
        <span className="image main">
        </span>
        <section>

		<div className="table-wrapper">
			<table className="alt">
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Description</th>
						<th>Price</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<img src={pic15} alt="" /><br />
							Item One
						</td>
						<td>
							Ante turpis integer aliquet porttitoger aliquet porttitor.
						</td>
						<td>
							29.99
						</td>
						<td>
							<label for="quantity"></label>
							<input type="number" id="quantity" min="0" max="5000"></input>
							<button className="button primary">Add to Cart</button>
						</td>
					</tr>
					<tr>
						<td>
							<img src={pic15} alt="" /><br />
							Item Two
						</td>
						<td>
							Vis ac commodo adipiscing arcu aliquet.
						</td>
						<td>
							19.99
						</td>
						<td>
							<label for="quantity"></label>
							<input type="number" id="quantity" min="0" max="5000"></input>
							<button className="button primary">Add to Cart</button>
						</td>
					</tr>
					<tr>
						<td>
							<img src={pic15} alt="" /><br />
							Item Three
						</td>
						<td>
							Morbi faucibus arcu accumsan lorem.
						</td>
						<td>
							29.99
						</td>
						<td>
							<label for="quantity"></label>
							<input type="number" id="quantity" min="0" max="5000"></input>
							<button className="button primary">Add to Cart</button>
						</td>
					</tr>
					<tr>
						<td>
							<img src={pic15} alt="" /><br />
							Item Four
						</td>
						<td>
							Vitae integer tempus condimentum.
						</td>
						<td>
							19.99
						</td>
						<td>
							<label for="quantity"></label>
							<input type="number" id="quantity" min="0" max="5000"></input>
							<button className="button primary">Add to Cart</button>
					</td>
					</tr>
					<tr>
						<td>
							<img src={pic15} alt="" /><br />
							Item Five
						</td>
						<td>
							Ante turpis integer aliquet porttitor.
						</td>
						<td>
							29.99
						</td>
					<td>
						<label for="quantity"></label>
						<input type="number" id="quantity" min="0" max="5000"></input>
						<button className="button primary">Add to Cart</button>
					</td>
					</tr>
				</tbody>

			</table>
			</div>          
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
