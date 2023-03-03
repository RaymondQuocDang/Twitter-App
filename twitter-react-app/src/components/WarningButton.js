import Alert from 'react-bootstrap/Alert';
import './SearchPage.css'

function WarningButton({ show, setShow }) {

  if (show) {
    return (
      <Alert className='warning-alert' variant="warning" onClose={() => setShow(false)} dismissible>
        <p>Sorry, could not find what you're looking for.</p>
      </Alert>
    );
  }
}


export default WarningButton;