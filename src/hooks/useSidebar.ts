import { useEffect, useState } from "react";
import useIsMobile from "./useIsMobile";

const useSidebar = () => {
  const isMobile = useIsMobile()

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(!isMobile);
    const toggleExpand = function () {
      setIsSidebarExpanded((prevValue) => !prevValue);
    };

    useEffect(() => {
      setIsSidebarExpanded(!isMobile)
    }, [isMobile])

    return {isSidebarExpanded, toggleExpand}
}

export default useSidebar