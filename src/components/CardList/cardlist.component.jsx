import { Container , Col , Row } from 'react-bootstrap';
import Card from '../Card/card.component';

import "./cardlist.styles.scss";

export default function CardList({stockData}) {
    return (
        <Container className='cardlist pt-5' bg='light'>
            <Row>
                {stockData.map((data) => {
                    return(
                        <Col md={3} xs={6} key={data.id} className='px-3 py-4' >
                            <Card data={data} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
