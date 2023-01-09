import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CampsideCard = ({ campsite }) => {
    const [image, name] = campsite;
    return ( 
        <Card>
            <CardImg
                width='100%'
                src={image}
                alt={name} />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay> 
        </Card>
     );
}
 
export default CampsideCard;