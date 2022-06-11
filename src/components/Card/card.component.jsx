import './card.styles.scss';

export default function Card({data}) {
    var sound = new Audio(data.src);
    return (
        <div className="card-container secondary" id={data.id} onClick={() => sound.play()} >
            <img src={`./assets/images/pp${data.name}.jpg`} alt={data.name} className='pt-3' />
            <p className='py-3' >{data.name}</p>
        </div>
    )
}
