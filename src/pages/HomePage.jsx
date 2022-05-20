import CardList from '../components/CardList/CardList';
import Slider from '../components/Slider/Slider';
import Brands from '../components/Brands/Brands';
import Reviews from '../components/Reviews/Reviews';
import ExtraService from "../components/ExtraService/ExtraService";

function HomePage() {
    return(
        <div>
            < Slider/>
            < CardList subclass={'Custome Builds'}/>
            < CardList subclass={'MSI Laptops'}/>
            < CardList subclass={'Desktops'}/>
            < Brands />
            < Reviews />
            < ExtraService />
        </div>
    )
}

export default HomePage;