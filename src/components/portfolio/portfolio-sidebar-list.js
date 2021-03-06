import React from "react";

const PortfolioSidebarList = props => {
    const portfolioList = props.data.map(portfolioItem => {
        return (
            <div className="portfolio-item-thumb">
              <div className="portfolio-item-img">
                <img src={portfolioList.thumb_imgage_url} />
            </div>
                <h1 className="title">{portfolioItem.name}</h1>
                <h2>{portfolioItem.id}</h2>
            </div>
        );
    });

  return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;