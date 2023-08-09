import React from 'react'

import { TextField } from '@mui/material'
import { Grid } from '@mui/material'

function Edit(props) {
  const { value, onChange } = props

  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <TextField fullWidth label='页面地址' value={value.src} onChange={e => onChange(Object.assign({}, value, { src: e.target.value }))} multiline maxRows={4}/>
    </Grid>
  </Grid>
}

export default Edit