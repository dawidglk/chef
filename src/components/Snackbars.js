import React from 'react'

import { connect } from 'react-redux'

import { Snackbar, SnackbarContent } from '@material-ui/core'

const Snackbars = ({ bars }) => {
    console.log(bars)
  return (
    <div>
      {bars.map((el, index) => (
        <Snackbar
          style={{ position: 'fixed', bottom: (30 + 70 * index) }}
          key={el.key}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={true}
        >
          <SnackbarContent
            style={{ backgroundColor: el.color }}
            message={el.text}
          />
        </Snackbar>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  bars: state.snackbars.bars
})

export default connect(
  mapStateToProps,null
)(Snackbars)