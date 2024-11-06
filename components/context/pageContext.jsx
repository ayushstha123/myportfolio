'use client'
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useMemo,
    useRef,
    useLayoutEffect,
} from 'react'
import Lenis from '@studio-freight/lenis'

const PageContext = createContext({
    lenis: null,
})

export const PageProvider = ({ children }) => {
    const [lenis, setLenis] = useState(null)
    const reqIdRef = useRef()
    const lastScrollYRef = useRef(0)
    const hideNavRef = useRef(false)
    const isScrolledRef = useRef(false)

    useLayoutEffect(() => {
        const lenisInstance = new Lenis({
            smooth: true,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        })

        // Correctly use lenisInstance, not setLenis, to listen to scroll events
        lenisInstance.on('scroll', ({ scroll }) => {
            if (lastScrollYRef.current < scroll && scroll > 160 && !hideNavRef.current) {
                document.body.classList.add('hide_header')
                hideNavRef.current = true
            } else if (lastScrollYRef.current > scroll && scroll < 160 && hideNavRef.current) {
                document.body.classList.remove('hide_header')
                hideNavRef.current = false
            }

            if (scroll > 220 && !isScrolledRef.current) {
                document.body.classList.add('scrolled')
                isScrolledRef.current = true
            } else if (scroll < 220 && isScrolledRef.current) {
                document.body.classList.remove('scrolled')
                isScrolledRef.current = false
            }

            lastScrollYRef.current = scroll
        })

        setLenis(lenisInstance)

        return () => {
            lenisInstance.destroy()
            setLenis(null)
        }
    }, [])

    // Animation loop for updating Lenis on each frame
    useEffect(() => {
        const animate = (time) => {
            lenis?.raf(time)
            reqIdRef.current = requestAnimationFrame(animate)
        }

        if (lenis) {
            reqIdRef.current = requestAnimationFrame(animate)
        }

        // Cleanup to cancel animation frame on component unmount
        return () => cancelAnimationFrame(reqIdRef.current)
    }, [lenis])

    // Memoize the context value to avoid unnecessary re-renders
    const memoValue = useMemo(() => ({ lenis }), [lenis])

    return <PageContext.Provider value={memoValue}>{children}</PageContext.Provider>
}

export default function usePage() {
    return useContext(PageContext)
}
