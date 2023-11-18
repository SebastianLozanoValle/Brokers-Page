import './Slider.css'
import imagen1 from '../assets/3m.svg'
import imagen2 from '../assets/mrbeast.svg'
import imagen3 from '../assets/forbes.svg'
import imagen4 from '../assets/barstool-store.svg'
import imagen5 from '../assets/budweiser.svg'
import imagen6 from '../assets/buzzfeed.svg'
import imagen7 from '../assets/macys.svg'
import imagen8 from '../assets/menshealth.svg'

export const Slider = () => {
    return (
        <>
            <div className='logos'>
                <div className='logos-slide'>
                    <img src={imagen1} />
                    <img src={imagen2} />
                    <img src={imagen3} />
                    <img src={imagen4} />
                    <img src={imagen5} />
                    <img src={imagen6} />
                    <img src={imagen7} />
                    <img src={imagen8} />
                </div>
                <div className='logos-slide'>
                    <img src={imagen1} />
                    <img src={imagen2} />
                    <img src={imagen3} />
                    <img src={imagen4} />
                    <img src={imagen5} />
                    <img src={imagen6} />
                    <img src={imagen7} />
                    <img src={imagen8} />
                </div>
            </div>
        </>
    )
}