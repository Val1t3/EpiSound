import Card from '../Card/card.component';

import "./cardlist.styles.scss";

export default function CardList({stockData}) {
    return (
        <div className="cardlist">
                {stockData.map((data) => {
                    return(
                        <Card data={data} key={data.id} />
                    )
                })}
        </div>
    )
}
