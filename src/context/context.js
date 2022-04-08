import { useContext, createContext, useEffect, useState} from "react";
import packageJson from "../../package.json";

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

        const caching = ()=> {
            let version = localStorage.getItem('version');
                if(version !== packageJson.version)
                {
                    if('caches' in window){
                        caches.keys().then((names) => {
                    // Delete all the cache files
                            names.forEach(name => {
                                caches.delete(name);
                            })
                        });
            
                    // Makes sure the page reloads. Changes are only visible after you refresh.
                    window.location.reload(true);
                    }
                }
            
                localStorage.clear();
                localStorage.setItem('version',packageJson.version);
        };

        caching();

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