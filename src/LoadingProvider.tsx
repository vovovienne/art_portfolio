import { useEffect, useState } from "react"

interface LoadingProviderProps {
    children: React.ReactNode
}
const LoadingProvider: React.FC<LoadingProviderProps> = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load whatever data u need
        setLoading(false);
    }, [])
    
    if (loading) {
        return <>
            Loading Screen
        </>
    }
    return <>
        { props.children }
    </>
}

export default LoadingProvider