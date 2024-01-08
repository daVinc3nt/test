import React, { useState } from 'react';
import { motion, Variants } from "framer-motion";
const BalancePage = () => {
  const leftSideVariant: Variants = {
    initial: { x: -50, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 }
  }

  const rightSideVariant: Variants = {
    initial: { x: 50, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 }
  }
  return (
    <div className='relative flex flex-col sm:flex-row w-full h-full overflow-y-scroll'>
        <div className='w-96 h-200 flex flex-col p-2'>
          <motion.div 
            variants={leftSideVariant} initial="initial" animate="enter" exit="exit"
            transition={{ duration: .5 }}
            className="h-48 mx-1 mt-1 mb-4 bg-white rounded-2xl flex flex-col" style={{
            'boxShadow': '8px 8px 6px -1px rgba(0, 0, 0, 0.1)',
          }}>
            <div className="h-32 bg-orange-500 rounded-t-2xl"></div>
          </motion.div>
          <motion.div 
            variants={leftSideVariant} initial="initial" animate="enter" exit="exit"
            transition={{ duration: .5, delay: .2}}
            className="h-48 my-1 bg-white rounded"></motion.div>
          <motion.div 
            variants={leftSideVariant} initial="initial" animate="enter" exit="exit"
            transition={{ duration: .5, delay: .4}}
            className="h-48 my-1 bg-white rounded"></motion.div>
          <motion.div 
            variants={leftSideVariant} initial="initial" animate="enter" exit="exit"
            transition={{ duration: .5, delay: .6}}
            className="h-48 mt-1 mb-1 bg-white rounded"></motion.div>
        </div>
        <div className='fixed sm:static w-full sm:grow p-3 pl-0 h-200'>
          <motion.div 
            variants={rightSideVariant}
            initial="initial" animate="enter" transition={{ duration: .8 }}
            className="h-[calc(49rem)] sm:h-full bg-white rounded-xl"></motion.div>
        </div>
    </div>
  );
};

export default BalancePage;
