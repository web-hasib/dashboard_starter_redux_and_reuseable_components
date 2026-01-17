"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

type SidebarContextType = {
  isExpanded: boolean;
  toggleSidebarCollapse: () => void;
  // handlePointerEnter: () => void;
  // handlePointerLeave: () => void;
  isCollapsedSidebar: boolean;
  // isMouseHovering: boolean;
  hasHydrated: boolean;
  activeTabs: number[];
  handleActiveTabs: (index: number) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function SidebarProvider({ children }: { children: ReactNode })
// change 
{
  const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(true);
  // const [isMouseHovering, setIsMouseHovering] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [activeTabs, setActiveTabs] = useState<number[]>([]);

  const handleActiveTabs = (index: number) => {
    setActiveTabs((prevActiveTabs) =>
      prevActiveTabs.includes(index)
        ? prevActiveTabs.filter((tab) => tab !== index)
        : [...prevActiveTabs, index]
    );
  };

  // Load from localStorage after hydration
  useEffect(() => {
    const loadSidebarState = () => {
      try {
        const appConfig = JSON.parse(localStorage.getItem("appConfig") || "{}");

        // Only update state if we have a valid boolean value
        if (typeof appConfig.sidebarCollapsed === "boolean") {
          setIsCollapsedSidebar(appConfig.sidebarCollapsed);
        }
      } catch (err) {
        console.error("Failed to parse appConfig:", err);
      } finally {
        setHasHydrated(true);
      }
    };

    // Use setTimeout to ensure this runs after hydration is complete
    const timeoutId = setTimeout(loadSidebarState, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  // Sync to localStorage whenever state changes (only after hydration)
  useEffect(() => {
    if (!hasHydrated) return;

    const saveSidebarState = () => {
      try {
        const existingConfig = JSON.parse(
          localStorage.getItem("appConfig") || "{}"
        );
        const updatedConfig = {
          ...existingConfig,
          sidebarCollapsed: isCollapsedSidebar,
        };
        localStorage.setItem("appConfig", JSON.stringify(updatedConfig));
      } catch (err) {
        console.error("Failed to save appConfig:", err);
      }
    };

    saveSidebarState();
  }, [isCollapsedSidebar, hasHydrated]);

  const toggleSidebarCollapse = () => {
    setIsCollapsedSidebar((prev) => !prev);
  };

  // const handlePointerEnter = () => {
  //   setIsMouseHovering(true);
  // };

  // const handlePointerLeave = () => {
  //   setIsMouseHovering(false);
  // };

  const isExpanded = !isCollapsedSidebar; //|| isMouseHovering;

  const contextValue: SidebarContextType = {
    isExpanded,
    toggleSidebarCollapse,
    // handlePointerEnter,
    // handlePointerLeave,
    isCollapsedSidebar,
    // isMouseHovering,
    hasHydrated,
    activeTabs,
    handleActiveTabs,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
