import React from 'react';
import PropTypes from 'prop-types';
import Submit from './btn-submit.styled';

const BtnSubmit = ({ children }) => <Submit className="btn-submit" type="submit">{children}</Submit>;

BtnSubmit.propTypes = {
  children: PropTypes.node,
};

export default BtnSubmit;
