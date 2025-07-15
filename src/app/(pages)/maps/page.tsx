import React from 'react'
import {Container} from "@/components/atoms";
import WorldMap from "@/app/(pages)/maps/components/WorldMap";
import MapWrapper from "@/app/(pages)/maps/components/MapWrapper";

function MainMapPage() {
  return (
    <Container>
      <div className='flex items-center justify-center '>
        <MapWrapper>
          <WorldMap />
        </MapWrapper>
      </div>
    </Container>
  )
}

export default MainMapPage