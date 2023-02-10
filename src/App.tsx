import {Home} from './pages/home';
import {useState} from 'react';
import './App.scss';

function App() {
    const [showDialog, setShowDialog] = useState(false);
    const [dialogProject, setDialogProject] = useState(null);

    return (
        <div className="App">
            <Home setShowDialog={setShowDialog} setDialogProject={setDialogProject} />
            <div id="picture-frame">
                <div id="bird">
                    <div id="body2"></div>
                    <div id="body1"></div>
                    <div id="wing-l"></div>
                    <div id="wing-r"></div>
                </div>
                {/*<div id="shadow"></div>*/}
            </div>
        </div>
    );
}

export default App;
