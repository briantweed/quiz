import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {disableLoading, enableLoading} from "@store/loadingSlice";
import Light from "@components/shared/Light";


export default function Toggle() {

    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.loading.status);

    const [toggle, setToggle] = useState(isLoading);

    const toggleLoading = () => {
        if (toggle) {
            dispatch(disableLoading());
        } else {
            dispatch(enableLoading());
        }
        setToggle(!toggle);
    }

    return (
        <button onClick={toggleLoading}>Theme <Light>Test</Light></button>
    )

}