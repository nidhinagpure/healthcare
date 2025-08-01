import header from './../assets/header_img.png';
import profiles from './../assets/group_profiles.png'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10'>
      {/* --- Left side */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book Appointment <br /> With Trusted Doctor
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img src={profiles} className='w-28' alt='' />
          <p>
            Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block' />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a href='#speciality'className='w-56 flex items-center bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
          Book Appointment
        </a>
      </div>

      {/* --- Right side */}
      <div className='md:w-1/2 relative'>
        <img src={header} className='w-full md:absolute bottom-0 h-auto rounded-lg' alt='' />
      </div>
    </div>
  );
};

export default Header;
