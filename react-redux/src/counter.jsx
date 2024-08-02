import { useDispatch, useSelector } from "react-redux"
export default function counter(){
    let count = useSelector(state=>state.counter)
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=> dispatch({type:'DECREMENT'})}>-</button>
            {' '} <span>{count.count}</span> {' '}
            <button>+</button>
        </div>
    )
}