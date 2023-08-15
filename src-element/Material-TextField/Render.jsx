import React from 'react'

function Render(props) {
  const { TextField } = window.MaterialUI

  const { event, property, monitor, trigger, pure, update } = props

  React.useEffect(() => {
    if (monitor && monitor.setValue) {
      const remove = monitor.setValue(data => {
        property.value = data
        update()
      })
      return () => { remove() }
    }
  }, [])
  React.useEffect(() => {
    if (monitor && monitor.setValueEmpty) {
      const remove = monitor.setValueEmpty(data => {
        property.value = ''
        update()
      })
      return () => { remove() }
    }
  }, [])

  const onChange = (e) => {
    if (!pure) return
    property.value = e.target.value
    update()
    if (trigger && trigger.onChange) trigger.onChange(e.target.value, e)
  }
  const onFocus = (e) => {
    if (trigger && trigger.onFocus) trigger.onFocus(e.target.value, e)
  }
  const onBlur = (e) => {
    if (trigger && trigger.onBlur) trigger.onBlur(e.target.value, e)
  }

  return <TextField
    {...event}
    fullWidth
    type={property.type}
    value={property.value}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    variant={property.variant}
    label={property.label}
    size={property.size}
    color={property.color}
    disabled={property.disabled}
  />
}

export default Render