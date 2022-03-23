import { ACTIONS } from "./App";
const OperationButton = ({dispatch, operation}) => {
    return (
        <button onClick={()=> dispatch({type: ACTIONS.CHOOSE_OPEARTION, payload: {operation}})}>
            {operation}
        </button>
    );
};

export default OperationButton;