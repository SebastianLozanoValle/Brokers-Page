import { Text, Box, Container, Heading, Link, Flex, Center } from "@chakra-ui/react"
import { Link as LinkRouter } from "react-router-dom"
import politicas from "../assets/documents/2. F 002 V.1 2020 Contrato de servicios de Agenciamiento de carga Internacional[1].pdf"
// import mar1 from '../assets/img/mar1.jpg'
import { MdFileDownload } from "react-icons/md";

export const Politica = () => {
    return (
        <>
            <Box
                // bg={url(${ mar1 })}
                backgroundSize='cover' position='relative' margin='0' height='300px' backgroundPosition='center' dispaly='flex' alignItems='center' >
                <Box position='absolute' top='0' right='0' bottom='0' left='0' bg='rgba(0, 0, 0, 0.5)'>
                    <Heading textAlign='center' color='white' paddingTop='200px' >Politica de tratamiento de datos</Heading>
                    {/* <Center>
                        <Link href="#descargar">Descargar documento</Link>
                    </Center> */}
                </Box>
            </Box>
            <Box margin='0px 40px ' py={20} fontSize='18px' textAlign='justify'>


                <Heading fontSize='22px' color='#BF292E'> OBJETIVO</Heading><br />
                Indicar las directrices a seguir para el tratamiento de los datos personales de personas naturales y jurídicas en MC SHIPBROKERS S.A.S en cumplimiento de la Ley 1581 de 2012 y sus decretos reglamentarios<br /><br />

                <Heading fontSize='22px' color='#BF292E'>ALCANCE</Heading><br />
                Esta política de Tratamiento de datos personales se aplicará a todas las bases de datos y/o archivos que contengan datos personales que sean objeto de tratamiento por parte de MC SHIPBROKERS S.A.Sen todas sus Agencias<br /><br />

                <Heading fontSize='22px' color='#BF292E'>DEFINICIONES</Heading><br /><br />

                •<b>Autorización:</b> Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de datos personales.<br />
                •<b>Aviso de privacidad:</b> Comunicación verbal o escrita generada por el responsable, dirigida al Titular para el Tratamiento de sus Datos Personales, mediante la cual se le informa acerca de la existencia de las Políticas de Tratamiento de información que le serán aplicables, la forma de acceder a las mismas y las finalidades del Tratamiento que se pretende dar a los datos personales. (Ver el Aviso de Privacidad)<br />
                •<b>Base de Datos:</b> Conjunto organizado de datos personales que sea objeto de Tratamiento.<br />
                •<b>Dato Personal:</b> Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.<br />
                •<b>Encargado del Tratamiento:</b> Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de Datos Personales por cuenta del Responsable del Tratamiento. En los eventos en que el Responsable no ejerza como Encargado de la Base de Datos, se identificará expresamente quién será el Encargado.<br />
                •<b>Responsable del Tratamiento:</b> Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la Base de Datos y/o el Tratamiento de los datos.<br />
                •<b>Términos y Condiciones:</b> marco general en el cual se establecen las condiciones para los participantes de actividades promocionales o afines.<br />
                •<b>Titular:</b> Persona natural cuyos Datos Personales sean objeto de Tratamiento.<br />
                •<b>Tratamiento:</b> Cualquier operación o conjunto de operaciones sobre Datos Personales, tales como la recolección, almacenamiento, uso, circulación o supresión.<br />
                •<b>Transferencia:</b> La transferencia de datos tiene lugar cuando el Responsable y/o Encargado del Tratamiento de datos personales, ubicado en Colombia, envía la información o los datos personales a un receptor, que a su vez es Responsable del Tratamiento y se encuentra dentro o fuera del país.<br />
                •<b>Transmisión:</b> Tratamiento de Datos Personales que implica la comunicación de los mismos dentro o fuera del territorio de la República de Colombia cuando tenga por objeto la realización de un Tratamiento por el Encargado por cuenta del Responsable.<br /><br />

                <Heading color='#BF292E' fontSize='22px'>IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO DE DATOS PERSONALES:</Heading><br /><br />
                •<b>Nombre o Razón Social:</b> MC SHIPBROKERS S.A.S<br />
                •<b>Domicilio o Dirección:</b> AV CALLE 24 No 95 A – 80, ETAPA 1, OFICINA 505, Bogotá., oficina principal<br />
                •<b>Teléfono:</b> 57 6013736727 – 57 6017045292 – 57 6017045528<br />
                •<b>Correo Electrónico:</b> Info@mcshipbrokersllc.com<br /><br />

                <Heading fontSize='22px' color='#BF292E'>TRATAMIENTOS</Heading><br /><br />
                MC SHIPBROKERS S.A.S actuando en calidad de responsable del tratamiento de datos personales, para el adecuado desarrollo de sus actividades recolecta, almacena, organiza, usa, circula, transmite, transfiere, actualiza, rectifica, suprime, elimina y en general gestiona los datos personales correspondientes a personas naturales con quienes tiene o ha tenido relación de acuerdo y en proporción a la finalidad o finalidades que tenga cada tratamiento.<br /><br />

                <Heading fontSize='22px' color='#BF292E'>FINALIDAD</Heading><br /><br />
                Los Datos Personales son objeto de Tratamiento por parte de MC SHIPBROKERS S.A.S con las siguientes finalidades:<br /><br></br>
                •Enviar notificaciones, información y/o actualizaciones a clientes, proveedores y trabajadores.<br />
                •Consultar y acceder la información del titular del dato que repose o se encuentre en bases de datos o archivos de Entidades Públicas o Privadas, nacionales o internacionales.<br />
                •Consultar la información del Titular que repose en Centrales de Riesgo o Bancos de Datos de Información Financiera, además en caso de incumplir con las obligaciones realizar el reporte en dicha central o base de datos.<br />
                •Atender Solicitudes, Quejas y Reclamos por parte del titular, así como realizar la evaluación del nivel de satisfacción al cliente respecto a los servicios prestados y la invitación a eventos organizados MC SHIPBROKERS S.A.S, entre otros.<br />
                •Realizar la preventa, venta, servicio y pos venta de los servicios prestados por <b>MC SHIPBROKERS S.A.S.</b><br />
                •Dar cumplimiento a todas las obligaciones contraídas con los Empleados, clientes y proveedores.<br />
                •Para actividades de mercadeo, estadísticas, de investigación y demás propósitos comerciales que no contravengan la legislación vigente en Colombia.<br />
                •Para la atención de requerimientos judiciales o administrativos y el cumplimiento de mandatos judiciales o legales.<br /><br />

                <Heading fontSize='22px' color='#BF292E'> DERECHOS DE LOS TITULARES: </Heading> <br /><br />

                El Titular de los datos personales tendrá los siguientes derechos:<br />

                •Conocer los Datos Personales sobre los cuales <b>MC SHIPBROKERS S.A.S</b> está realizando el Tratamiento. De igual manera, el Titular puede solicitar en cualquier momento, que sus datos sean actualizados o rectificados. Este derecho se podrá ejercer, entre otro frente a datos son parciales, inexactos, incompletos, fraccionados, induzcan a error, o aquellos cuyo Tratamiento esté expresamente prohibido o no haya sido autorizado.<br />
                •Solicitar prueba de la autorización otorgada a<b> MSHIPBROKERS S.A.S</b> para el Tratamiento de sus Datos Personales.<br />
                •Ser informado por <b>MC SHIPBROKERS S.A.S,</b> previa solicitud, respecto del uso que ésta le ha dado a sus Datos Personales.<br />
                •Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en la Ley de Protección de Datos Personales y las demás normas que la modifiquen, adicionen o complementen.<br />
                •Acceder de forma gratuita a sus Datos Personales objeto de Tratamiento.<br />
                •Revocar la autorización y/o solicitar la supresión del dato cuando en el Tratamiento no se respeten los principios, derechos y garantías constitucionales y legales. La revocatoria y/o supresión procederá<br /><br />

                cuando la Autoridad de Protección de Datos Personales de Colombia haya determinado que en el Tratamiento el Responsable o Encargado han incurrido en conductas contrarias a la Ley 1581 de 2012 (o en su defecto con las normas que la reglamenten, adicionen, ejecuten, complementen, modifiquen, supriman o deroguen) y/o a la Constitución. La solicitud de supresión de la información y la revocatoria de la autorización no procederán cuando el Titular tenga un deber legal o contractual de permanecer en la base de datos o el responsable tenga el deber legal o contractual de continuar con el tratamiento.<br /><br />

                <Heading color='#BF292E' fontSize='22px'>AUTORIZACIÓN DEL TITULAR:</Heading> Exceptuando los casos definidos en la Ley 1581 de 2012 (o en su defecto con las normas que la reglamenten, adicionen, ejecuten, complementen, modifiquen, supriman o deroguen), en los casos en que se requiera contar con la autorización previa del titular, <b>MC SHIPBROKERS S.A.S</b> debe solicitar autorización previa, expresa e informada a los Titulares de los Datos Personales sobre los que requiera realizar el Tratamiento.<br />

                Solo recolectaran datos personales que sean pertinentes y adecuados para la finalidad para la cual son recolectados o requeridos. No podrán        realizar ningún tipo de tratamiento, (recolección, almacenamiento y uso) de datos personales sin consentimiento libre, previo, voluntario,                 debidamente informado del titular, el cual deberá ser obtenido por cualquier medio que pueda ser consultado posteriormente.
                Los datos personales que se encuentren en fuentes de acceso público, con independencia del medio por el cual se tenga acceso, entendiéndose por tales aquellos datos o bases de datos que se encuentran a disposición del público, pueden ser tratados por cualquier persona siempre y cuando, por su naturaleza, sean datos públicos.<br /><br />

                <Heading color='#BF292E' fontSize='22px'>Modo de obtener la autorización:</Heading><br /><br />
                La autorización puede constar en un documento físico, electrónico o en cualquier otro formato que permita garantizar su posterior consulta. La autorización será emitida por <b>MC SHIPBROKERS S.A.S</b> y será puesta a disposición del titular previo al tratamiento de sus datos personales, de conformidad con lo que establece la Ley 1581 de 2102.<br /><br />
                Al momento de solicitar al Titular la autorización, deberá informarle de manera clara y expresa lo siguiente:<br />
                •La identificación y datos de contacto del Responsable y del Encargado del Tratamiento.<br />
                •El Tratamiento al cual serán sometidos sus datos personales y la finalidad del mismo.<br />
                •Los derechos que le asisten como Titular, ver numeral 7 de ésta política<br />
                •El carácter facultativo de la respuesta a las preguntas que le sean hechas, cuando estas versen sobre datos sensibles o sobre los datos de las niñas, niños y adolescentes.<br /><br />

                <Heading color='#BF292E' fontSize='22px'>DISPOSICIONES ESPECIALES PARA EL TRATAMIENTO DE DATOS SENSIBLES</Heading><br /><br />
                De acuerdo a la Ley de Protección de datos personales, se entiende por datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político o que garanticen los derechos y garantías de partidos políticos de oposición así como los datos relativos a la salud, a la vida sexual y los datos biométricos (Huellas dactilares, Firma manuscrita etc.)<br />
                Se podrá hacer uso y tratamiento de datos sensibles, solo cuando <b>MC SHIPBROKERS S.A.S.</b><br /><br />
                •Informe al Titular que por tratarse de datos sensibles no está obligado a autorizar su Tratamiento.<br />
                •Informe al Titular cuáles de los datos que serán objeto de Tratamiento son sensibles y la finalidad del Tratamiento.<br />
                •Ninguna actividad podrá condicionarse a que el Titular suministre Datos Personales sensibles.<br /><br />

                <Heading color='#BF292E' fontSize='22px'> DISPOSICIONES ESPECIALES PARA EL TRATAMIENTO DE DATOS PERSONALES DE NIÑOS, NIÑAS Y ADOLESCENTES</Heading><br /><br />
                Según lo dispuesto por el Artículo 7º de la Ley 1581 de 2012 y el artículo 12 del Decreto 1377 de 2013, <b>MC SHIPBROKERS S.A.S</b> sólo realizará el Tratamiento, esto es, la recolección, almacenamiento, uso, circulación y/o supresión de Datos Personales correspondientes a niños, niñas y adolescentes, siempre y cuando este Tratamiento responda y respete el interés superior de los niños, niñas y adolescentes y asegure el respeto de sus derechos fundamentales.
                Cumplidos los anteriores requisitos, <b>MC SHIPBROKERS S.A.S</b> deberá obtener la Autorización del representante legal del niño, niña o adolescente, previo ejercicio del menor de su derecho a ser escuchado, opinión que será valorada teniendo en cuenta la madurez, autonomía y capacidad para entender el asunto.<br /><br />



                <Heading color='#BF292E' fontSize='22px'> PROCEDIMIENTOS PARA QUE LOS TITULARES DE LA INFORMACIÓN PUEDAN EJERCER LOS DERECHOS A CONOCER, ACTUALIZAR, RECTIFICAR Y SUPRIMIR INFORMACIÓN Y REVOCAR LA AUTORIZACIÓN.</Heading><br /><br />
                Los Titulares de los Datos Personales que estén siendo tratados por <b>MC SHIPBROKERS S.A.S</b> podrán ejercer en cualquier momento sus derechos a conocer, actualizar, rectificar y suprimir información y revocar la autorización.<br />
                Para ello, se ha dispuesto los siguientes medios para la recepción y atención de peticiones y consultas, los cuales permiten conservar prueba de las mismas:<br /><br />
                •	Comunicación dirigida a <b>MC SHIPBROKERS S.A.S,</b> Área Sistemas de Gestión, Calle 25Cbis 99-22 en la ciudad de Bogotá D.C.<br />
                •	Solicitud presentada al correo electrónico: mcshipbrokers.a.s@gmail.com <br /><br />

                <Heading color='#BF292E' fontSize='22px'> SEGURIDAD DE LA INFORMACIÓN</Heading><br /><br />
                En desarrollo del principio de seguridad establecido en la Ley 1581 de 2012,<b> MC SHIPBROKERS S.A.S,</b> proporcionará las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.<br />
                <b>MC SHIPBROKERS S.A.S</b> no garantiza la seguridad total de su información ni se responsabiliza por cualquier consecuencia derivada de fallas técnicas o del ingreso indebido por parte de terceros a la Base de Datos o Archivo en los que reposan los Datos Personales objeto de Tratamiento por parte <b>MC SHIPBROKERS S.A.S</b> y sus encargados.<br /><br />


                <Heading color='#BF292E' fontSize='22px'> TRANSFERENCIA, TRANSMISIÓN DE DATOS PERSONALES</Heading><br /><br />
                Los datos personales con los que cuenta<b> MC SHIPBROKERS S.A.S</b> podrán transmitirse a terceras personas de naturaleza pública, nacional o internacional en cumplimiento de la Ley y de los tratados firmados por Colombia o en el cumplimiento del objeto social de dichas compañías, o a terceros de Naturaleza privada cuando la información suministrada por el Titular deba someterse a procedimientos de verificación y/o autenticación.<br /><br />
                <Heading color='#BF292E' fontSize='22px'>VIGENCIA</Heading><br />
                Las presentes directrices de tratamiento de la información personal rigen desde el 13 de Octubre de 2016.<br />
                La vigencia de la Base de datos será el tiempo razonable y necesario para cumplir las finalidades del tratamiento, teniendo en cuenta lo dispuesto en el Artículo 11 del decreto 1377 de 2013.<br /><br />


                <Box display='flex' border='2px solid black' mb={10}>
                    <Container borderRight='2px solid black'>
                        <Heading fontSize={{base: '14px', md: '18px', lg: '18px'}} textAlign='center' marginBottom='20px'>DATOS DEL AGENTE DE CARGA</Heading>
                        <Text fontSize={{base: '10px', md: '14px', lg: '14px'}} textAlign='center' marginBottom='10px' borderBottom='2px solid black' >
                            MC SHIPBROKERS S.A.S <br />
                            NIT No. 900529156-7
                        </Text>
                        <Heading fontSize={{base: '14px', md: '18px', lg: '18px'}} textAlign='center' borderBottom='2px solid black' >DATOS DEL REPRESENTANTE LEGAL</Heading>
                        <Text textAlign='center' fontSize={{base: '10px', md: '14px', lg: '14px'}}  >
                            Manuel Alfonso Cardenas Forero<br />
                            C.C, 80.100.603 de Bogota<br />
                        </Text>
                        <Text marginTop='90px' textAlign='left' >FIRMA</Text>

                    </Container>

                    <Container borderRight='2px solid black'>
                        <Heading fontSize={{base: '14px', md: '18px', lg: '18px'}} textAlign='center'>DATOS DEL CLIENTE</Heading>
                        <Text fontSize={{base: '10px', md: '14px', lg: '14px'}} textAlign='left' marginBottom='10px' borderBottom='2px solid black' >
                            RAZON SOCIAL: <br />
                            TIPO DE DOCUMENTO:<br />
                            NO DE IDENTIFICACION:
                        </Text>
                        <Heading fontSize={{base: '14px', md: '18px', lg: '18px'}} textAlign='center' borderBottom='2px solid black' >DATOS DEL REPRESENTANTE LEGAL</Heading>
                        <Text textAlign='left' fontSize={{base: '10px', md: '14px', lg: '14px'}}  >
                            NOMBRE:<br />
                            TIPO DE DOCUMENTO:<br />
                            NO  DOCUMENTO:
                        </Text>
                        <Text marginTop='64px' textAlign='left' >FIRMA</Text>

                    </Container>
                </Box>
                <Center>
                    <Flex>
                        <Link p={4}  bg='brand.background' borderRadius={40} m={4} color='brand.primary' as={LinkRouter} to='/contacto'>Contactenos</Link>
                        <Link p={4}  bg='brand.background' borderRadius={40} m={4} color='brand.primary' id="descargar" href={politicas} download={'2. F 002 V.1 2020 Contrato de servicios de Agenciamiento de carga Internacional.pdf'}>
                            Descargar Formato PDF
                        </Link>
                    </Flex>
                </Center>
            </Box>
            <Box position='fixed' left='16px' bottom='30px' width='64px' height='64px' p={2} bg='brand.background'>
                <Link fontSize='3em' href="#descargar"><MdFileDownload /></Link>
            </Box>
        </>
    )
}