import { Avatar } from '@material-ui/core';
import avatar from '../images/avatar.png';
import './Entete.scss';
export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">Camille Semaan <Avatar src={avatar} alt="Camille Semaan" /></div>
    </header>
  );
}