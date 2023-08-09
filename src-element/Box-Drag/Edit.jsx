import React from 'react'

import { Grid } from '@mui/material'
import { Switch } from '@mui/material'

function Edit(props) {
  const { value, onChange } = props

  return <Grid container spacing={2}>
    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>拖动</div>
      <Switch checked={value.draggable} onChange={e => onChange(Object.assign({}, value, { draggable: e.target.checked }))} />
    </Grid>
  </Grid >
}

export default Edit