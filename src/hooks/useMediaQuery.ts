import { useEffect, useState } from 'react'

/**
 * 미디어쿼리 상수 (단위: pixel)
 *
 * @constant {Object} BREAK_POINTS
 * @property {number} mobile - 너비 768px 미만
 * @property {number} tablet - 너비 1200px 미만
 * @property {number} desktop - 그 이상
 */
const BREAK_POINTS: {
  mobile: number
  tablet: number
  desktop: number
} = {
  mobile: 768,
  tablet: 1200,
  desktop: Infinity,
}
/**
 * 커스텀 훅: useMediaQuery
 *
 * 현재 화면 크기에 따라 'mobile', 'tablet', 'desktop' 중 하나의 문자열을 반환합니다.
 * 화면 크기가 변경될 때마다 반환되는 값이 업데이트됩니다.
 *
 * @function useMediaQuery
 * @returns {string} 현재 화면 크기에 해당하는 모드 ('mobile', 'tablet', 'desktop')
 * @description
 * 768px 미만 => 'mobile'
 * 1200px 미만 => 'tablet'
 * 1200px 이상 => 'desktop'
 * @example
 * import useMediaQuery from './useMediaQuery';
 *
 * function Component() {
 *   const mode = useMediaQuery();
 *   return <p>현재 모드: {mode}</p>;
 * };
 */

type Mode = 'mobile' | 'tablet' | 'desktop'
function useMediaQuery() {
  const [mode, setMode] = useState<Mode>('desktop')

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < BREAK_POINTS.mobile) {
        return setMode('mobile')
      } else if (width < BREAK_POINTS.tablet) {
        return setMode('tablet')
      } else {
        return setMode('desktop')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mode])

  return mode
}

export default useMediaQuery
