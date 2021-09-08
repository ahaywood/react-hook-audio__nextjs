import React, { useState } from "react";
import { motion } from "framer-motion"
import { PlusClose } from "./PlusClose";

const Faq = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const plusCloseVariants = {
    plus: { rotate: 45 },
    close: { rotate: 0 },
  }

  const answerVariants = {
    open: { height: 'auto', opacity: 1 },
    close: { height: 0, opacity: 0 }
  }

  const handleClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    setIsOpen(prevValue => !prevValue);
  }

  return (
    <div className="faq">
      <div className="question">
        <a href="#" onClick={(e) => handleClick(e)}>
          <motion.div className="plus-close" variants={plusCloseVariants} animate={isOpen ? 'close' : 'plus'}>
            <PlusClose />
          </motion.div>
          What license is this code covered under?
        </a>
      </div>
      <motion.div className="answer" variants={answerVariants} animate={isOpen ? 'open' : 'close'}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </motion.div>
    </div>
  )
}

export { Faq }
