import { Link } from 'react-router-dom';

const Gateway = () => {
    return (
      <div className='flex flex-col justify-center items-center gap-8 lg:gap-16 text-2xl lg:text-4xl'>
        <Link to="type_a">Type A</Link>
        <Link to="type_b">Type B</Link>
      </div>
    )
  }
  
  export default Gateway;
  