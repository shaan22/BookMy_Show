import React from 'react';
import SliderImages from './SliderImages';
import Cardslider from './Cardslider';
import Cardslider2 from './CardSlider2';
import Premeier from './Premeier';
import Stream from './Stream';
import Events from './Events';

function Home() {
  return (
    <div>
        <SliderImages/>
            <Cardslider/>
            <Cardslider2/>
            <Premeier/>
            <Stream/>
            <Events/>
    </div>
  )
}

export default Home