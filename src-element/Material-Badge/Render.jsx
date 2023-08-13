function Render(props) {
  const React = window.React
  const { Badge } = window.MaterialUI

  const { compound, property, monitor, children, update } = props

  React.useEffect(() => {
    if (monitor && monitor.setContent) {
      const remove = monitor.setContent(data => {
        property.content = data
        update()
      })
      return () => { remove() }
    }
  }, [])

  return <Badge {...compound} badgeContent={Number(property.content)} max={99999} color={property.color} variant={property.variant} anchorOrigin={property.anchorOrigin}>
    {
      children && children.main ? children.main() : null
    }
  </Badge>
}

export default Render