//CSS
import './UpdateDoc.css';
//Utils
import { useConsoleContext } from '../../../../../../utils/utils';
//Componentes
import UpdateDocPlaces from './UpdateDocPlaces';
import UpdateDocEvents from './UpdateDocEvents';

export default function UpdateDoc({ setAllowSubmit, setToolResult }) {
  const { type, selection } = useConsoleContext();
  if (type === 'local') {
    return <UpdateDocPlaces setAllowSubmit={setAllowSubmit} setToolResult={setToolResult} selection={selection} />;
  } else if (type === 'eventos') {
    return <UpdateDocEvents setAllowSubmit={setAllowSubmit} setToolResult={setToolResult} selection={selection} />;
  }
}
