function Render(props) {
  const React = window.React

  const { compound, property, monitor, trigger, update } = props

  const ref = React.useRef()

  React.useEffect(() => {
    if (monitor && monitor.setSrc) {
      const remove = monitor.setSrc(data => {
        property.src = data
        update()
      })
      return () => { remove() }
    }
  }, [])

  React.useEffect(() => {
    if (monitor && monitor.setPlay) {
      const remove = monitor.setPlay(data => {
        ref.current.play()
        update()
      })
      return () => { remove() }
    }
  }, [])

  React.useEffect(() => {
    if (monitor && monitor.setPause) {
      const remove = monitor.setPause(data => {
        ref.current.pause()
        update()
      })
      return () => { remove() }
    }
  }, [])

  const onEnded = e => {
    if (trigger && trigger.onEnded) trigger.onEnded(undefined, e)
  }

  return <audio
    {...compound}
    ref={el => ref.current = el}
    src={property.src}
    controls={property.controls}
    autoPlay={property.autoplay}
    loop={property.loop}
    onEnded={onEnded}
  />
}

export default Render