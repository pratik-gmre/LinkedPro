import { Header } from "@/component/Header/Header"

interface AppLayoutProps {
    WrappedComponent:React.ComponentType<any>
}


export const AppLayout = () =>({WrappedComponent}:AppLayoutProps) => {

    return (props:any)=>{ 

        return( <>
        
        <Header/>
        <WrappedComponent {...props} />
        </>

        )


    }

}