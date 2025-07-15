import React from 'react'
import {Container} from "@/components/atoms";
import WorldMap from "@/app/(pages)/maps/components/WorldMap";
import MapWrapper from "@/app/(pages)/maps/components/MapWrapper";
import ListOfCountries from "@/app/(pages)/maps/components/ListOfCountries";

function MainMapPage() {
  return (
    <Container>
        <div className='grid grid-cols-12 gap-4' id='worldMapPage'>
            <div className="col-span-12 md:col-span-8">
                <MapWrapper>
                    <WorldMap />
                </MapWrapper>
            </div>
            <div className="col-span-12 md:col-span-4">
                <ListOfCountries />
            </div>
        </div>

    </Container>
  )
}

export default MainMapPage