import './searchbox.styles.scss';

export default function Searchbox({onChangeHandler}) {
    return (
        <input className="search-box"
            type='search'
            placeholder='Name ...'
            onChange={onChangeHandler}
        />
    )
}