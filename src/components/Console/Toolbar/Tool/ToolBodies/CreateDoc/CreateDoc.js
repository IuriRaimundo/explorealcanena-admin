//CSS
import './CreateDoc.css';
//Utils
import { useConsoleContext } from '../../../../../../utils/utils';
//Componentes
import CreateDocEvents from './CreateDocEvents';
import CreateDocPlaces from './CreateDocPlaces';

export default function CreateDoc({ setAllowSubmit, setToolResult }) {
  const { type } = useConsoleContext();
  if (type === 'local') {
    return <CreateDocPlaces setAllowSubmit={setAllowSubmit} setToolResult={setToolResult} />;
  } else if (type === 'eventos') {
    return <CreateDocEvents setAllowSubmit={setAllowSubmit} setToolResult={setToolResult} />;
  }
}
