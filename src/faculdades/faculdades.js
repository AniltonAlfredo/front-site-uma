import  './faculdades.css'
import { Row, Container, Col, Image } from 'react-bootstrap';
import Facul1 from '../faculdades/1.jpg'
import Facul2 from '../faculdades/2.jpg'
import Facul3 from '../faculdades/3.jpg'
import Facul4 from '../faculdades/4.jpg'
import { Link } from 'react-router-dom'
import { FiChevronsRight } from "react-icons/fi";
//import axios from 'axios'


// const Facul = () => {  

    

//     return facul.map((facul, codigo)=>{

//         return(
//             <div>
//                <h1>{facul.nome}</h1>
//                 {/* <p>{facul.descricao}</p>  */}
                    
                    
//             </div>
            
//         )

//     })
// }


const Faculdades = () => {
    // const [facul, setFacul] = useState([]);

    // const fecthFacul = () => {
    //     axios.get("http://localhost:8080/faculdade/all").then(resposta=>{
    //         console.log(resposta);
    //         setFacul(resposta.data);
            
    // })
    // }
    
    // useEffect(()=>{
    //     fecthFacul()
    // },[]);

    return (

        <Container fluid className="ContainerFaculdade">
            <Container className="ContainerInterno">
                <Row>
                    <h2>NOSSAS FACULDADES<br/><br/></h2>
                     <Col lg="3" className="LogoImagem">                         
                     <Image src={Facul1} roundedCircle height="200px" width="200px"/><br/>
                        <Link to="/faculdade1">
                            <span className='spnFcl'>Faculdade de Engenharia e Arquitectura </span><FiChevronsRight/>
                        </Link>
                    </Col>
                    <Col lg="3" className="LogoImagem">
                        <Image src={Facul2} roundedCircle  height="200px" width="200px"/><br/>
                        <Link to="/faculdade2">
                            <span className='spnFcl'>Faculdade de Ciências Jurídicas e Sociais </span><FiChevronsRight/>
                        </Link>                        
                    </Col>
                    <Col lg="3" className="LogoImagem">
                        <Image src={Facul3} roundedCircle  height="200px" width="200px"/><br/>
                        <Link to="/faculdade3">
                            <span className='spnFcl'>Faculdade de Saúde e Bem-Estar </span><FiChevronsRight/>
                        </Link>
                        
                    </Col>
                    <Col lg="3" className="LogoImagem">
                        <Image src={Facul4} roundedCircle  height="200px" width="200px"/><br/>
                        <Link to="/faculdade4">
                            <span className='spnFcl'>Faculdade de Teologia </span> <FiChevronsRight/>
                        </Link>
                        
                    </Col>
                </Row>
            </Container>
            
        </Container>

       
    )
}

export default Faculdades;