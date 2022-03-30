import { useContext, createContext, useEffect, useState} from "react";

export const content = createContext();

export const Context = ({children}) => {

    const [loadingState, setLoadingState] = useState(true);

    const [contentState, setContentState] = useState({
        head: "",
        aboutMe: "",
        mainProjects: "",
        smallProjects: "",
        resume: ""
    });

    useEffect(() => {

        let data = async() => {
            await fetch("https://junshiun.github.io/jsonFiles/myPortfolio.json").then(res => res.json()).then(res => {
                setContentState({
                    head: res.head,
                    aboutMe: res.aboutMe,
                    mainProjects: res.mainProjects,
                    smallProjects: res.smallProjects,
                    resume: res.resume
                })
            });
            setLoadingState(false);
        }

        data();

    }, [])

    return (
        <content.Provider value={{contentState, loadingState}}>
            {children}
        </content.Provider>
    )
}

export const ContentContext = () => {
    return useContext(content)
}