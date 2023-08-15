import React from 'react'

function Render(props) {
  const { ToggleButtonGroup, ToggleButton } = window.MaterialUI

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
    if (monitor && monitor.setOptions) {
      const remove = monitor.setOptions(data => {
        property.options = data
        update()
      })
      return () => { remove() }
    }
  }, [])

  const onChange = (e, v) => {
    if (!pure) return
    property.value = v
    update()
    if (trigger && trigger.onChange) trigger.onChange(property.value, e)
  }

  const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return <ToggleButtonGroup {...event} {...style} fullWidth={property.fullWidth} size={property.size} color={property.color} orientation={property.orientation} exclusive={property.exclusive} disabled={property.disabled} value={property.value} onChange={onChange}>
    {
      property.options.map((i, index) => {
        return <ToggleButton key={index} value={i.value}>{i.label}</ToggleButton>
      })
    }
  </ToggleButtonGroup>
}

export default Render