import React from 'react';
import './Overview.css';
import CurrentPlanetDisplay from './CurrentPlanetDisplay';
import CurrentStats from './CurrentStats';
import FleetMovementDisplay from './FleetMovementDisplay';
import Nav from './Nav';
import PlanetListDisplay from './PlanetListDisplay';
import ResourceDisplay from './ResourceDisplay';
import { Switch, Route } from 'react-router-dom';
import DisplayAlliance from './Buildings/DisplayAlliance';
import DisplayGalexyView from './Buildings/DisplayGalexyView';
import DisplayMines from './Buildings/DisplayMines';
import DisplayProduction from './Buildings/DisplayProduction';
import DisplayResearch from './Buildings/DisplayResearch';
import DisplayShipyard from './Buildings/DisplayShipyard';
import DisplayLeaderBoard from './Buildings/DisplayLeaderBoard';
import DisplayFleetMovement from './Buildings/DisplayFleetMovement';
import DisplayMarket from './Buildings/DisplayMarket';
import DisplayShop from './Buildings/DisplayShop';
import DisplayBattleSimulator from './Buildings/DisplayBattleSimulator';
import Resources from './Buildings/Resources';
import Que from './Que';

export default function Overview() {
  return (
    <>
      <ResourceDisplay />
      <div className='row'>
        <Nav />
        <div className='col-8'>
          <FleetMovementDisplay />
          <Que />
          <Switch>
            <Route path='/Overview' exact={true}>
              <CurrentPlanetDisplay />
            </Route>
            <Route path='/Overview/Alliance'>
              <DisplayAlliance />
            </Route>
            <Route path='/Overview/Galaxy'>
              <DisplayGalexyView />
            </Route>
            <Route path='/Overview/Mines'>
              <DisplayMines />
            </Route>
            <Route path='/Overview/Resources'>
              <Resources />
            </Route>
            <Route path='/Overview/Production'>
              <DisplayProduction />
            </Route>
            <Route path='/Overview/Research'>
              <DisplayResearch />
            </Route>
            <Route path='/Overview/Shipyard'>
              <DisplayShipyard />
            </Route>
            <Route path='/Overview/Leaders'>
              <DisplayLeaderBoard />
            </Route>
            <Route path='/Overview/Fleet'>
              <DisplayFleetMovement />
            </Route>
            <Route path='/Overview/Market'>
              <DisplayMarket />
            </Route>
            <Route path='./Overview/Shop'>
              <DisplayShop />
            </Route>
            <Route path='./Overview/Battle-Simulator'>
              <DisplayBattleSimulator />
            </Route>
          </Switch>
        </div>
        <PlanetListDisplay />
      </div>
      <CurrentStats />
    </>
  );
}
