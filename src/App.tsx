import React, { Component } from 'react';

import { Card } from './Components'


const App = () => {


  return(
    <div>
    <Card 
      title="titolo" 
      description={2}
    />
    <Card 
      title="titolo" 
      description="Lorem ipsum dolor sit amet"
    />
    </div>

  )


}




export default App;
