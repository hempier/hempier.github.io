import React from "react"
import { bool, func } from 'prop-types';

import "./burger.scss"
import {StyledBurger} from './burger.styled'

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger className="burger col-md-2 off-md-1" open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger