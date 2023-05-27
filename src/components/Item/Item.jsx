import { animated, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';

export const Item = ({last, startDelete, first, startAdd, length}) => {
  const [marginLeft, setMarginLeft] = useState(0);
  const [springs, api] = useSpring(() => ({
    from: { 
      x: 0,
      opacity: 1
    },
  }))

  useEffect(() => {
    if (last && startDelete) {
      api.start({
        from: {
          x: 0,
          opacity: 1
        },
        to: {
          x: 100,
          opacity: 0
        },
      })
    }
    if (first && startAdd && length) {
      setMarginLeft(100);
      setTimeout(() => setMarginLeft(0), 500);
    }
  }, [startDelete, startAdd])

  return <animated.div
    style={{
      width: '20%',
      height: 200,
      background: 'brown',
      borderRadius: 20,
      transitionDuration: !startDelete ? '0.6s' : '0s',
      marginLeft,
      ...springs
    }}
  />
}