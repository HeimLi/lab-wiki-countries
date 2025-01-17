import {Link} from "react-router-dom";

function CountriesList({countries}) {

    return (
    <div className="container">
        <div className="row">
           <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
            {countries.map(country => {
        return (
            <div> 
                <Link to={`/country/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" /><br />
                    {country.name.common}
                    </Link>
            </div>
        )}
        )}
        </div>
        </div>
        </div>
        </div>
    )
}


export default CountriesList;