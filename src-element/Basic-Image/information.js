const information = {
  name: '图片',
  type: 'Basic',
  children: false,
  monitor: [
    { value: '@setVisibleTrue', label: '显示' },
    { value: '@setVisibleFalse', label: '隐藏' },
    { value: 'setSrc', label: '设置图片地址' },
  ],
  trigger: [
    { value: '@onClick', label: 'Click' },
    { value: '@onDoubleClick', label: 'Double Click' },
    { value: '@onMouseEnter', label: 'Mouse Enter' },
    { value: '@onMouseLeave', label: 'Mouse Leave'},
    { value: '@onMouseMove', label: 'Mouse Move' },
    { value: '@onMouseDown', label: 'Mouse Down' },
    { value: '@onMouseUp', label: 'Mouse Up' },
  ],
  style: {
    $nonuse: ['font', 'text', 'textDecoration', 'textShadow', 'textStroke']
  },
  property: {
    src: '',
    alt: ''
  }
}

export default information