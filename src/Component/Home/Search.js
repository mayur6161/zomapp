import React, {Component} from "react";
import './search.css';


class  Search extends Component{
    render() {
        return(
            <div id="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find Best Place Near You
                </div>
                <div id="dropdown">
                    <select>
                        <option>----Select Your City----</option>
                    </select>
                    <select className="restSelect">
                        <option>----Select Your Restaurants----</option>
                    </select>
                </div>

            </div>
        )
    }
}

export  default Search;