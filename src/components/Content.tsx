import { Route, Router, Routes} from "react-router-dom"
import HomePage from "./HomePage"
import IllustrationPage from "./Illustration"
import Menu from "./Menu"



const Content = () => {
    return <>
        <Menu></Menu>
        <Routes>
            <Route path = "/" Component={HomePage} > </Route>   
            <Route path = "/illustration" Component={IllustrationPage} > </Route>
        </Routes>
        

    </>
}

export default Content