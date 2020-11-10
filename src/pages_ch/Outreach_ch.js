/// summary
///
///	Outreach 
///   - Compiles the Outreach page based on the components entered in below
///
/// summary

import React from 'react';

// components
import Nav from '../components_ch/NavigationBar_ch';
import OutreachComponent from '../components_ch/OutreachComponent_ch';
import Footer from '../components_ch/Footer_ch';
import Video from '../shared_comps/videos'
//css
import '../css/main.css'


function Outreach (){
      return(
         <div className="all-content">
            {/* Components */}
            <Nav></Nav>
            <OutreachComponent></OutreachComponent>
            <Video></Video>
            <Footer></Footer>
     </div>
   );
}    


export default Outreach