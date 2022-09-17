import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

const countState = atom( {
    key: 'countState',
    default: 0,
} );

const countSlector = selector( {
    key: 'countSlector',
    get: ( { get } ) => {
        const count = get( countState );

        return count + '!';
    }
} );

const Counter = () => {
    const [count, setCount] = useRecoilState( countState );
    const countStr = useRecoilValue( countSlector );

    const clickHandler = () => {
        setCount( count + 1 );
    };

    return (
        <div>
            <button type="button" onClick={clickHandler} >count up</button>
            <p>{count}</p>
            <p>{countStr}</p>
        </div>
    )
};

export default Counter;
