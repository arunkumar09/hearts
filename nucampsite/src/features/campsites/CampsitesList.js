import { selectAllCampsites } from "./campsitesSlice";
import CampsideCard from "./CampsiteCard";
 import { Row, Col } from 'reactstrap';

const CampsitesList = ({setCampsiteId}) => {
    const campsites = selectAllCampsites();
    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={campsite.id}
                        onClick={() => setCampsiteId(campsite.id)}>
                        <CampsideCard campsite={campsite}></CampsideCard>
                    </Col>
                );
            })}
        </Row>
      );
}
 
export default CampsitesList;