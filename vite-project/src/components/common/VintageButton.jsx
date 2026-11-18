import { motion } from 'framer-motion'
import './VintageButton.css'

/**
 * A wax-and-ribbon styled button used across every screen.
 * variant: 'primary' (burgundy) | 'ghost' (outlined)
 */
export default function VintageButton({
  children,
  icon: Icon,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
  ...rest
}) {
  return (
    <motion.button
      type="button"
      className={`vbtn vbtn--${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { y: -2, scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      {...rest}
    >
      <span className="vbtn__shine" aria-hidden="true" />
      <span className="vbtn__label">{children}</span>
      {Icon && <Icon className="vbtn__icon" size={18} strokeWidth={1.8} aria-hidden="true" />}
    </motion.button>
  )
}
