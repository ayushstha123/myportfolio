import React from 'react';
import '../index.css';

const Home = () => {

  return (
        <div className='flex flex-col w-2/3 h-2/6'>
         

          <model-viewer src="./files/ship.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls tone-mapping="neutral" poster="poster.png" shadow-intensity="1">
          </model-viewer> 
          <model-viewer src="./files/Eye.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls tone-mapping="neutral" poster="poster.png" shadow-intensity="1">
          </model-viewer> 
          <model-viewer src="./files/tank.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls tone-mapping="neutral" poster="poster.png" shadow-intensity="1">
          </model-viewer>             
        </div>
     
  );
};

export default Home;
