import React from 'react';

import Layout from '../components/Layout';
import k_3120 from '../assets/images/concrete/k-3120.jpg';
import k_3030 from '../assets/images/concrete/k-3030.jpg';
import ks_3005 from '../assets/images/concrete/ks-3005.jpg';
import ks_3105 from '../assets/images/concrete/ks-3105.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
	  <div className="inner">

	  	<h1>
		  Concrete Products
		</h1>  

	    <table className="alt">
		  <thead>
			<tr>
			  <th>Product Name</th>
			  <th>Product ID</th>
			  <th>Description</th>
			</tr>
		  </thead>
		  <tbody>
			<tr>
			  <td>
				<img src={k_3120} alt="k-3120" /><br />
				Rubber Mallet
			  </td>
			  <td>
			  	k-3120
			  </td>			  
			  <td>
			  	Standard mallet style hammer
			  </td>
			</tr>
			<tr>
			  <td>
				<img src={ks_3005} alt="ks-3005" /><br />
				Economy Slump Set
			  </td>
			  <td>
				ks-3005
			  </td>
			  <td>
				This set includes tools used for "slup testing"; testing the downward intermittent movement of rock debris
			  </td>			  
			</tr>
			<tr>
			  <td>
				<img src={ks_3105} alt="ks-3105" /><br />
				Strike off bar
			  </td>
			  <td>
				ks-3105
			  </td>			  
			  <td>
			  	Used to remove excess material from a concrete cylinder mold or air meter vessel, slump cone, or unit weight measure.
			  </td>
			</tr>
			<tr>
			  <td>
				<img src={k_3030} alt="k-3030" /><br />
				Concrete Pocket thermometer
			  </td>
			  <td>
				k-3030
			  </td>			  
			  <td>
			  The Pocket-Type Dial Thermometer measures 25 to 125°F, has an 8" Stem, measures 1 degree increments, and has a 1 3/4" Dial.
			  </td>
			</tr>			
		  </tbody>
	    </table>
	  </div>
    </div>
  </Layout>
);

export default IndexPage;