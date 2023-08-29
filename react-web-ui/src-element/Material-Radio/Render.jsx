import React from 'react'
import { Radio } from '@mui/material'

function Render(props) {
  const { env, update, params, property, monitor, trigger, children, element, prop } = props

  React.useEffect(() => {
    if (monitor && monitor.setCheckedOpen) {
      const remove = monitor.setCheckedOpen(data => {
        property.checked = true
        update()
      })
      return () => { remove() }
    }
  }, [])

  React.useEffect(() => {
    if (monitor && monitor.setCheckedClose) {
      const remove = monitor.setCheckedClose(data => {
        property.checked = false
        update()
      })
      return () => { remove() }
    }
  }, [])

  const onChange = (e) => {
    property.checked = true
    update()
    if (trigger && trigger.onChange) trigger.onChange(property.checked, e)
  }

  if (env === 'dev') {
    return <Radio
      {...params}
      checked={property.checked}
      size={property.size}
      color={property.color}
      disabled={property.disabled}
    />
  }

  if (env === 'prod') {
    return <Radio
      {...params}
      checked={property.checked}
      onChange={onChange}
      size={property.size}
      color={property.color}
      disabled={property.disabled}
    />
  }
}

export default Render