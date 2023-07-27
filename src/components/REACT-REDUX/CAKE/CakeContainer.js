import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './CakeAction'

function CakeContainer(props) {
  return (
    <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2 className='display-4 text-danger'>Number of Cakes :{props.numberOfCakes} </h2>
                    <button onClick={props.buyCake} className="btn btn-sm btn-primary">Buy Cake</button>
                </div>
            </div>
    </div>
  )
}

const mapStateToProps = (state) =>{

    return {
        numberOfCakes : state.numberOfCakes
    }
}

const mapDispatchToProps=(dispatch) =>{
    return {
        buyCake : ()=>dispatch(buyCake()),
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)