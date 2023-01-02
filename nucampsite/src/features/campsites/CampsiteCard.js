import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CampsideCard = (props) => {
    return ( 
        <Card>
            <CardImg
                width='100%'
                src={props.campsite.image}
                alt={props.campsite.name} />
            <CardTitle>{ props.campsite.name}</CardTitle>
        </Card>
     );
}
 
export default CampsideCard;