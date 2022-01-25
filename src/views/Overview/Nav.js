import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='col-2'>
      <div className='text-start'>
        <ul className='nav flex-column text-light'>
          <li className='btn nav-item my-1'>
            <NavLink to='/Overview'>
              <h5>Overview</h5>
            </NavLink>
          </li>
          <li className='btn nav-item my-1'>
            <NavLink to='/Overview/Mines'>
              <h5>Mines</h5>
            </NavLink>
          </li>
          <li className='btn nav-item my-1'>
            <NavLink to='/Overview/Resources'>
              <h5>Resources</h5>
            </NavLink>
          </li>
          <li className='btn nav-item my-1'>
            <NavLink to='/Overview/Production'>
              <h5>Production</h5>
            </NavLink>
          </li>
          <li className='btn nav-item my-1'>
            <NavLink to='/Overview/Research'>
              <h5>Research</h5>
            </NavLink>
          </li>
          <li className='btn nav-item my-1'>
            <NavLink to='/Overview/Shipyard'>
              <h5>Shipyard</h5>
            </NavLink>
          </li>
          <li className='btn nav-item my-1'>
            <NavLink to='/Overview/Fleet'>
              <h5>Fleet</h5>
            </NavLink>
          </li>
          <li className='btn nav-item my-1'>
            <NavLink to='/Overview/Galaxy'>
              <h5>Galaxy View</h5>
            </NavLink>
          </li>
          <li className='btn btn nav-item my-1'>
            <NavLink to='/Overview/Battle-Simulator'>
              <h5>Battle Simulator</h5>
            </NavLink>
          </li>
          <li className='btn nav-item my-1'>
            <NavLink to='/Overview/Alliance'>
              <h5>Alliance</h5>
            </NavLink>
          </li>
          <li className='btn nav-item my-1'>
            <NavLink to='/Overview/Market'>
              <h5>Market</h5>
            </NavLink>
          </li>
          <li className='btn nav-item my-1'>
            <NavLink to='/Overview/Leaders'>
              <h5>Leader Board</h5>
            </NavLink>
          </li>
          <li className='btn nav-item my-1'>
            <NavLink to='/Overview/Galaxy'>
              <h5>Shop</h5>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
