import React from 'react';
import './QuickSearch.css';

const QuickSearch = () => {
    return(
        <>
            <div id="quickSearch">
            <span className="quickHeading">
                Quick Search
            </span>
                <span className="quickSubHeading">
                Find Restaurants By MealType
            </span>
                <div className="mainBox">
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src="images/drinks.png" alt="drinks"/>
                        </div>
                        <div className="tileComponent2">
                            <div className="compHeading">
                                <a href="../listing/listing.html">BreakFast</a>
                            </div>
                            <div className="compSubHeading">
                                Best Deal For BreakFast
                            </div>
                        </div>
                    </div>
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src="images/dinner.png" alt="drinks"/>
                        </div>
                        <div className="tileComponent2">
                            <div className="compHeading">
                                <a href="../listing/listing.html">BreakFast</a>
                            </div>
                            <div className="compSubHeading">
                                Best Deal For BreakFast
                            </div>
                        </div>
                    </div>
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src="images/drinks.png" alt="drinks"/>
                        </div>
                        <div className="tileComponent2">
                            <div className="compHeading">
                                <a href="../listing/listing.html">BreakFast</a>
                            </div>
                            <div className="compSubHeading">
                                Best Deal For BreakFast
                            </div>
                        </div>
                    </div>
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src="images/bombay.jpg" alt="drinks"/>
                        </div>
                        <div className="tileComponent2">
                            <div className="compHeading">
                                <a href="../listing/listing.html">BreakFast</a>
                            </div>
                            <div className="compSubHeading">
                                Best Deal For BreakFast
                            </div>
                        </div>
                    </div>
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src="images/snacks.png" alt="drinks"/>
                        </div>
                        <div className="tileComponent2">
                            <div className="compHeading">
                                <a href="../listing/listing.html">BreakFast</a>
                            </div>
                            <div className="compSubHeading">
                                Best Deal For BreakFast
                            </div>
                        </div>
                    </div>
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src="images/nightlife.png" alt="drinks"/>
                        </div>
                        <div className="tileComponent2">
                            <div className="compHeading">
                                <a href="../listing/listing.html">BreakFast</a>
                            </div>
                            <div className="compSubHeading">
                                Best Deal For BreakFast
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuickSearch;