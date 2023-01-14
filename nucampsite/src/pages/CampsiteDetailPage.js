import { Container, Row } from "reactstrap";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import { useParams } from "react-router-dom";
import CampsiteDetail from "../features/campsites/CampsiteDetail";

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = selectCampsiteById(campsiteId);
    return (
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite}/>
            </Row>
        </Container>
    );
    
};
 
export default CampsiteDetailPage;