import { useCallback, useRef } from 'react';

/**
 * 需要得到一个不变的函数引用，但是这个不变的函数执行的时候，传递的fn参数是最新的函数
 * @param fn  每次都会变化的最新的函数
 */
export function useCallbackRef<FN extends ((...args: any[]) => any)> (fn: FN): FN {
  // 需要让每次的dom2事件都是最新生成的
  const fnRef = useRef(fn);
  fnRef.current = fn;

  return useCallback(((...args: any[]) => {
    fnRef.current(...args)
  }) as FN, [])
}