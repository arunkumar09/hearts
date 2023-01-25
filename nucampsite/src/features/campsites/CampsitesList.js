import { selectAllCampsites } from "./campsitesSlice";
import CampsideCard from "./CampsiteCard";
import { Row, Col } from 'reactstrap';
import { useSelector } from "react-redux";

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);
    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={campsite.id}>
                        <CampsideCard campsite={campsite}></CampsideCard>
                    </Col>
                );
            })}
        </Row>
      );
}
 
export default CampsitesList;