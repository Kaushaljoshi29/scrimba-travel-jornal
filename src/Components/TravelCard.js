import React from "react";
import "./TravelCard.css";

export default function(props) {
  const wikiLink = props.wikiLink
  return (
    <div className="TravelCard--container">
      <img src={props.imageUrl} className="TravelCard--Image" />
      <div className="TravelCard--Info-container">
        <div className="TravelCard--location-info-container">
          <div className="TravelCard--location">
            <img
              src="Assets/location-icon.png"
              className="TravelCard--location-icon"
            />
            <p className="TravelCard--location-name">{props.location}</p>
          </div>

          <a
            target="_blank"
            href={props.googleMapsUrl}
            className="TravelCard--location-link"
          >
            View on Google Maps
          </a>
        </div>
        <a href={wikiLink} target='_blank' className="wiki_link">
          <h1 className="TravelCard--Heading">{props.title}</h1>
        </a>
        <p className="TravelCard--Date">
          <sapn>{props.startDate}</sapn> - <span>{props.endDate}</span>
        </p>
        <p className="TravelCard--Description">{props.description}</p>
      </div>
    </div>
  );
}
