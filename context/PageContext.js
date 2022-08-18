import { createContext, useState } from "react";
import Router from "next/router";

const PageContext = createContext();

export function PageProvider({ children }){
    const [contents, setContents] = useState([]);
    const [index, setIndex] = useState();
    const [img, setImg] = useState();
    const routePage = (result, index, img) => {
        setContents([result]),
        setIndex(index),
        setImg(img),
        Router.push({pathname: "/tvshows"})
    }

    return(
        <PageContext.Provider value={{ contents, index, img, routePage }}>
            {children}
        </PageContext.Provider>
    );
}

export default PageContext