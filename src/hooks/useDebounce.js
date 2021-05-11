import {useState, useEffect} from 'react'

/**
 * Hook that debounce some value
 * @param {any} value Debouncing value
 * @param {number} delay Delay (ms)
 * @returns {any}
 */
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value)
            }, delay)
            return () => {
                clearTimeout(handler)
            }
        },
        [value]
    )

    return debouncedValue
}

export default useDebounce
