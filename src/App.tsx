import {Home} from './pages/home';
import {Dialog} from './components/dialog';
import {useState} from 'react';

function App() {
    const [showDialog, setShowDialog] = useState(false);
    const [dialogProject, setDialogProject] = useState(null);

    return (
        <div className="App">
            <Home setShowDialog={setShowDialog} setDialogProject={setDialogProject} />
            <Dialog showDialog={showDialog} setShowDialog={setShowDialog} project={dialogProject} />
        </div>
    );
}

export default App;
