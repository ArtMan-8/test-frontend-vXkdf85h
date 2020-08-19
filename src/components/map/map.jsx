import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';

const iconOptions = L.icon({
  iconUrl: 'img/icon-map-pin.svg',
  iconSize: [33, 40],
});

const pinOptions = {
  clickable: true,
  icon: iconOptions,
};

const mapOptions = {
  center: [55.7511, 37.6208],
  zoom: 13,
};

class Map extends React.PureComponent {
  componentDidMount() {
    const { pickPoints } = this.props;
    const map = L.map('map', mapOptions);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const points = pickPoints.map((point) => (L.marker(point.coords, {
      ...pinOptions,
      id: point.id,
      title: point.title,
    })));

    points.forEach((point) => point.on('click', () => {
      this.props.onClick(point.options.title);
    }));
    const group = L.featureGroup(points).addTo(map);
    map.fitBounds(group.getBounds());
  }

  render() {
    return true;
  }
}

Map.propTypes = {
  onClick: PropTypes.func,
  pickPoints: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    coords: PropTypes.arrayOf(PropTypes.number),
  })),
};

export default Map;