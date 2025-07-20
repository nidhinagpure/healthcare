/*import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Appointments = () => {
 
  const { docId} = useParams()
  const {doctor} = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = async () => {
    const docInfo = doctor.find(doc => doc._id === docId )
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  useEffect(()=>{
    fetchDocInfo()
  },[doctor,docId])
  return (
    <div>
        <div>
          <div>
            <img src={docInfo.image}/>
          </div>
        </div>

    </div>
  )
}

export default Appointments; */

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

import verified_icon from './../assets/verified_icon.svg';
import info_icon from './../assets/info_icon.svg';

const Appointments = () => {
  const { docId } = useParams();
  const { doctor } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    const foundDoctor = doctor.find(doc => doc._id === docId);
    setDocInfo(foundDoctor);
  }, [docId, doctor]);

  // ✅ Handle case where doctor not found or still loading
  if (!docInfo) {
    return <div>Loading doctor details...</div>;
  }

  return docInfo && (
    <div>
      <div>
        <div>
          <img src={docInfo.image} alt='' />
        </div>
        <div>
          <p>{docInfo.name}
            <img src={verified_icon} /></p>
          <div>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
             <button>{docInfo.experience}</button>
          </div>
         
          <p>{docInfo.fees}</p>
          <div>
            <p>About <img src={info_icon}/></p>
            <p>{docInfo.about}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Appointments;

