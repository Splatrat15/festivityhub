import './home.css';
import PartyList from '../../components/partyList/PartyList';
import AddBtn from '../../components/addBtn/AddBtn'

const Home = () => {
    return(
        <div className="home__container">
            <PartyList/>
            <AddBtn/>
        </div>
    )
}

export default Home;