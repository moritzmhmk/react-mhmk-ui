import React from 'react'
import classnames from 'classnames'

import styles from './style.css'

import Spinner from './icons/Spinner.svg'
import Exclamation from './icons/Exclamation.svg'

export const icons = { Spinner, Exclamation }

export const Input = ({ type, id, className, label, value, onChange, pending, ...props }) => (
  <div className={classnames(styles.formGroup, className)}>
    {label && (
      <label htmlFor={id} className={styles[type]}>
        {pending && <Spinner />}
        {label}
      </label>
    )}
    <input type={type} id={id} value={value} onChange={onChange} {...props} />
  </div>
)

export const Button = ({ label, disabled, onClick, pending, ...props }) => (
  <button disabled={disabled} onClick={onClick} {...props}>
    {pending && <Spinner />}
    {label}
  </button>
)

export const Select = ({ id, label, value, children, onChange, ...props }) => (
  <div className={styles.formGroup}>
    {label && <label htmlFor={id}>{label}</label>}
    <select id={id} value={value} onChange={onChange} {...props}>{children}</select>
  </div>
)

export const TextInputWithOptions = ({ id, className, label, value, options, optionLabels = {}, customLabel, onChange, ...props }) => (
  <div className={classnames(styles.formGroup, styles.withOptions, className)}>
    {label && <label htmlFor={id}>{label}</label>}
    <input
      type='text'
      id={id}
      value={value}
      onChange={onChange}
      {...props}
    />
    <select
      id={id}
      value={Object.keys(options).find(key => options[key] === value) || 'custom'}
      tabIndex='-1'
      onChange={event => onChange({ ...event, target: { ...event.target, value: options[event.target.value] || '' } })}
    >
      {Object.entries(options).map(([k, v]) => (
        <option key={k} value={k}>{optionLabels[k] || v}</option>
      ))}
      <option value='custom'>{customLabel}</option>
    </select>
  </div>
)

export const ErrorMessage = ({ children }) => {
  if (!children) { return null }
  return <div className={styles.errorMessage}><Exclamation />{children}</div>
}
