import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTop = (props) => {
    const router = useRouter()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [router.asPath]);

    return <>{props.children}</>
};

export default ScrollToTop;