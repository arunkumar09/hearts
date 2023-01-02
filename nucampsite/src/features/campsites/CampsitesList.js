import { CAMPSITES } from "../../app/shared/CAMPSITES";
import CampsideCard from "./CampsiteCard";
 import { Row, Col } from 'reactstrap';

const CampsitesList = () => {
    return (
        <Row className='ms-auto'>
            {CAMPSITES.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsideCard campsite={campsite}></CampsideCard>
                    </Col>
                );
            })}
        </Row>
      );
}
 
export default CampsitesList;