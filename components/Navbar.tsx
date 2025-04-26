
import logo from '@/public/images/logo.svg'

const Navbar = () => {
  return (
    <div className='flex border'>
        <img src="/images/logo.svg" alt="" className='text-white'  />
        <button>
            <img src="/images/icon-moon.svg" alt="" className='' style={{filter: 'invert(1'}} />

        </button>
    </div>
  )
}

export default Navbar