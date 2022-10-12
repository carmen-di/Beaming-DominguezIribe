import { Spinner } from 'react-bootstrap';
import './styles.css'

const Loader = () => {
  return (
    <div className='loader'>
        <Spinner animation="border" />
    </div>
  )
}

export default Loader;