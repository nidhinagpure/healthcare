/*import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

import verified_icon from './../assets/verified_icon.svg';
import info_icon from './../assets/info_icon.svg';

const Appointments = () => {
  const { docId } = useParams();
  const { doctor } = useContext(AppContext);
  const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  useEffect(() => {
    const foundDoctor = doctor.find(doc => doc._id === docId);
    setDocInfo(foundDoctor);
  }, [docId, doctor]);

  useEffect(() => {
    if (!docInfo) return;

    const getAvailableSlots = async () => {
      setDocSlot([]); // Clear before adding
      let today = new Date();

      for (let i = 0; i < 7; i++) {
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        let endTime = new Date(today);
        endTime.setDate(today.getDate() + i);
        endTime.setHours(21, 0, 0, 0);

        if (i === 0) {
          currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        } else {
          currentDate.setHours(10);
          currentDate.setMinutes(0);
        }

        let timeSlot = [];

        while (currentDate < endTime) {
          let formattedTime = currentDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

          timeSlot.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });

          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }

        setDocSlot(prev => [...prev, timeSlot]);
      }
    };

    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlot); // ✅ This will now run after setDocSlot
  }, [docSlot]);

  if (!docInfo) {
    return <div>Loading doctor details...</div>;
  }
 
  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img
            className='bg-primary w-full sm:max-w-72 rounded-lg'
            src={docInfo.image}
            alt='Doctor'
          />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-4' src={verified_icon} alt='Verified' />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About <img src={info_icon} alt='Info' />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>

          <p className='mt-2 font-medium'>Appointment Fee: <span>${docInfo.fees}</span></p>
        </div>
      </div>
      /*--- Booking slots --- 
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 item-center w-full overflow-x-scroll mt-4'>
          {
            docSlot.length && docSlot.map((item,index)=>(
            <div  onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
             slotIndex === index ? 'text-white bg-primary' : 'border border-gray-600 text-gray-800'
              }`}
              key={index}>
             <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
            <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>
        <div>
          {docSlot.length && docSlot[slotIndex].map((item,index)=>(
            <p key={index}>
              {item.time.toLowerCase()}

            </p>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Appointments; */

import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

import verified_icon from './../assets/verified_icon.svg';
import info_icon from './../assets/info_icon.svg';
import RelatedDoctor from '../componenets/RelatedDoctor';

const Appointments = () => {
  const { docId } = useParams();
  const { doctor } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('')

  useEffect(() => {
    const foundDoctor = doctor.find(doc => doc._id === docId);
    setDocInfo(foundDoctor);
  }, [docId, doctor]);

  useEffect(() => {
    if (!docInfo) return;

    const getAvailableSlots = async () => {
      setDocSlot([]);
      const today = new Date();

      for (let i = 0; i < 7; i++) {
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        let endTime = new Date(currentDate);
        endTime.setHours(21, 0, 0, 0);

        if (i === 0) {
          currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        } else {
          currentDate.setHours(10, 0, 0, 0);
        }

        const timeSlot = [];
        while (currentDate < endTime) {
          timeSlot.push({
            datetime: new Date(currentDate),
            time: currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          });
          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }

        setDocSlot(prev => [...prev, timeSlot]);
      }
    };

    getAvailableSlots();
  }, [docInfo]);

  if (!docInfo) return <div>Loading doctor details...</div>;

  return (
    <div>
      {/* Doctor Info */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img
            className='bg-primary w-full sm:max-w-72 rounded-lg'
            src={docInfo.image}
            alt='Doctor'
          />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-4' src={verified_icon} alt='Verified' />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>
              {docInfo.experience}
            </button>
          </div>
          <div className='mt-3'>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900'>
              About <img src={info_icon} alt='Info' />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='mt-2 font-medium'>
            Appointment Fee: <span>${docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>

        {/* Day Selection */}
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {docSlot.length &&
            docSlot.map((item, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index
                    ? 'bg-primary text-white'
                    : 'border border-gray-600 text-gray-800'
                }`}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
            }
        </div>

        {/* Time Slots */}
        <div className='flex item-center gap-3 w-full overflow-x-scroll mt-4'>
          {docSlot.length && docSlot[slotIndex].map((item, index) => (
            <p
              key={index}
              onClick={() => setSlotTime(item.time)}

             className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white': 'text-gray-400 border border-gray-300'}`}
            >
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 '>Book an Appointment</button>
      </div>
      <RelatedDoctor docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointments;

