import { ImRadioUnchecked } from "react-icons/im";
import { GenericChild2 } from "./GenericChild2";
import { Tarjeta } from "./Tarjeta";

export const TarjetaTransporte = ({ titulo, child }) => 
        <Tarjeta
            margin={4}
            boxShadow={'2xl'}
            child1={<ImRadioUnchecked />}
            child2={<GenericChild2 titulo={titulo} child={child} />}
            fontSizeChild1={{ base: "4xl", md: "0", lg: "50px", xl: '100px' }}
            colorChild1='brand.primary' 
        />