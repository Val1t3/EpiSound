import './card.styles.scss';

export default function Card({data}) {
    var sound = new Audio(data.src);
    return (
        <div className="card" id={data.id} onClick={() => sound.play()} >
            <img src={`./assets/images/pp${data.name}.jpg`} alt={data.name}/>
            <p>{data.name}</p>
        </div>
    )
}
