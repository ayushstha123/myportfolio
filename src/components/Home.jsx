import React from 'react';
import '../index.css';

const Home = () => {

  return (
        <div className='flex flex-col w-2/3 h-2/6'>
          <model-viewer src="./files/shiba.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls tone-mapping="neutral" poster="poster.png" shadow-intensity="1">
            <div slot="hotspot-1" style={{ position: 'relative', top: '90%', left: '50%', transform: 'translate(-0%, -50%)', color: 'black', fontSize: '24px', fontWeight: 'bold' }}>
              This is a dog, he is very good
            </div>
          </model-viewer>
          <model-viewer src="./files/bookcase.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls tone-mapping="neutral" poster="poster.png" shadow-intensity="1">
          </model-viewer>
          <model-viewer src="./files/airplane.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls tone-mapping="neutral" poster="poster.png" shadow-intensity="1">
          </model-viewer>
          <model-viewer src="./files/doll.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls tone-mapping="neutral" poster="poster.png" shadow-intensity="1">
          </model-viewer>
          <model-viewer src="./files/mcintosh.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls tone-mapping="neutral" poster="poster.png" shadow-intensity="1">
          </model-viewer>
          <model-viewer src="./files/house.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls tone-mapping="neutral" poster="poster.png" shadow-intensity="1">
          </model-viewer>
        </div>
     
  );
};

export default Home;
