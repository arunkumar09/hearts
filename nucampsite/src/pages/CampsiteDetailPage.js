import { Container, Row } from "reactstrap";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import { useParams } from "react-router-dom";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = selectCampsiteById(campsiteId);
    return (
        <Container>
            <SubHeader current={campsite.name} detail={true}/>
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />

            </Row>
        </Container>
    );
    
};
 
export default CampsiteDetailPage;