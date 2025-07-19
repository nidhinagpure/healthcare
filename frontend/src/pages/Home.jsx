import Banner from '../componenets/Banner';
import SpecialityMenu from '../componenets/SpecialityMenu';
import TopDoctor from '../componenets/TopDoctor';
import Header from './../componenets/Header';

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu />
      <TopDoctor />
      <Banner />
    </div>
  )
}

export default Home;