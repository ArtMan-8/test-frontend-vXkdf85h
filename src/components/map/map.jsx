import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';

const Map = ({ onClick, pickPoints }) => {
  const iconOptions = L.icon({
    iconUrl: 'img/icon-map-pin.svg',
    iconSize: [33, 40],
  });

  const mapOptions = {
    center: [55.7511, 37.6208],
    zoom: 13,
  };

  React.useEffect(() => {
    const map = L.map('map', mapOptions);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const points = pickPoints.map((point) => (L.marker(point.coords, {
      clickable: true,
      icon: iconOptions,
      id: point.id,
      title: point.title,
    })));

    points.forEach((point) => point.on('click', () => {
      onClick(point.options.title);
    }));

    const group = L.featureGroup(points).addTo(map);

    map.fitBounds(group.getBounds());

    if (L.Browser.mobile) {
      map.dragging.disable();
    }
  }, []);

  return true;
};

Map.propTypes = {
  onClick: PropTypes.func,
  pickPoints: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    coords: PropTypes.arrayOf(PropTypes.number),
  })),
};

export default Map;
