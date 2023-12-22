/* eslint-disable react/prop-types */
import { ScaleLoader } from 'react-spinners'

const Loader = ({ smallHeight }) => {
    return (
        <div
            className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
        >
            <ScaleLoader size={100} color='blue' />
        </div>
    )
}

export default Loader