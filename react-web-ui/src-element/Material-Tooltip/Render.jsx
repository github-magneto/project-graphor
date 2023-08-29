import React from 'react'
import { Tooltip } from '@mui/material'

function Render(props) {
  const { env, update, params, property, monitor, trigger, children, element, prop } = props

  React.useEffect(() => {
    if (monitor && monitor.setOpenTrue) {
      const remove = monitor.setOpenTrue(data => {
        property.open = true
        update()
      })
      return () => { remove() }
    }
  }, [])

  React.useEffect(() => {
    if (monitor && monitor.setOpenFalse) {
      const remove = monitor.setOpenFalse(data => {
        property.open = false
        update()
      })
      return () => { remove() }
    }
  }, [])

  const onOpen = (e) => {
    property.open = true
    update()
    if (trigger && trigger.onOpen) trigger.onOpen(property.open, e)
  }

  const onClose = (e) => {
    property.open = false
    update()
    if (trigger && trigger.onClose) trigger.onClose(property.open, e)
  }

  if (env === 'dev') {
    return <div {...params}>
      <div>
        {
          children && children.main ? children.main() : null
        }
      </div>
      <div>
        {
          children && children.float ? children.float() : null
        }
      </div>
    </div>
  }

  if (env === 'prod') {
    return <Tooltip
      open={property.open}
      enenterDelay={property.enterDelay}
      leaveDelay={property.leaveDelay}
      title={children && children.float ? children.float() : null}
      placement={property.placementPosition + (property.placementAlign === 'center' ? '' : '-' + property.placementAlign)}
      arrow={property.arrow}
      onOpen={onOpen}
      onClose={onClose}
    >
      {
        children && children.main ? children.main() : null
      }
    </Tooltip>
  }
}

export default Render