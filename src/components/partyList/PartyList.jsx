import './partyList.css';
import parties from '../../data.js';

const partyList = () => {
    return(
        <div className="partyList__container">
            <h1 className="list_title">
                Party Types
            </h1>
            <ul>
                {parties.map(item => (
                    <div className="party" key={item.index} style={{ backgroundColor: item.status}}>
                        <h1>
                            {item.name}
                        </h1>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default partyList;