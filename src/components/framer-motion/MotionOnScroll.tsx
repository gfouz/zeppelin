import React from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface MotionOnScrollProps {
  className?: string;
  children?: React.ReactNode;
  variants?: Variants | undefined;
}

const MotionOnScroll = (props: MotionOnScrollProps) => {
  const { children, variants, className } = props;
  const control = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={control}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionOnScroll;

export const zoom = {
  visible: { transition: { duration: 0.5 }, scale: 1 },
  hidden: { scale: 0 },
};
export const opacity = {
  visible: { transition: { duration: 4 }, opacity: 1 },
  hidden: { opacity: 0 },
};
export const rotateX = {
  visible: { transition: { duration: 0.5 }, rotateX: 0 },
  hidden: { rotateX: -180 },
};
