import { Link } from 'react-router-dom';
import { specialityData }

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id="Speciality">
      <h1 className='text-2xl font-semibold'>Find by Speciality</h1>
      <p className='text-center max-w-xl'>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6'>
        {specialityData.map((item, index) => (
          <Link to={`/doctor/${item.speciality}`} key={index} className='flex flex-col items-center hover:scale-105 transition-transform duration-300'>
            <img src={item.image} alt={item.speciality} className='w-20 h-20 object-cover mb-2' />
            <p className='text-sm font-medium'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
