import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

const GoogleMapDisplay = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  return (
    <section className='google-map mt-5'>
      <div className='loc-sec py-5 bg-dark text-center'>
        <div className='continer'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='text-light'>
                ابحث عن موقعنا <FaMapMarkerAlt className='text-primary' />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          {!isLoaded ? <div>Loading...</div> : <Map />}
        </div>
      </div>
    </section>
  );
};
function Map() {
  const center = useMemo(() => ({ lat: 28.31048, lng: 30.713039 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
      <Marker position={center} />
    </GoogleMap>
  );
}
export default GoogleMapDisplay;
