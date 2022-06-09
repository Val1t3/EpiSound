import { stockData } from "../../data";

import Card from '../Card/card.component';

import "./cardlist.styles.scss";

export default function CardList() {
    return (
        <div className="cardlist">
            {stockData.map((data) => {
                return(
                    <Card data={data} />
                )
            })}
        </div>
    )
}
