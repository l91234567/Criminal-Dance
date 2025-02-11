import * as React from 'react';
import Divider from '@mui/material/Divider';
import SeatSelect from './SeatSelect';
import GroupChat from './GroupChat';
import GameReady from './GameReady';
function GameRoom() {

  return (<>
    <SeatSelect/>
    <br/>
    <GameReady/>
    <br/>
    <Divider>CHAT</Divider>
    <GroupChat/>
  </>
    


  );
}




export default GameRoom;