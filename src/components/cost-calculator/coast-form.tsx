import React, { Component } from "react"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { buildingArea: 0, wall: 0, floors: 0, roof: 0 }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

//   handleSubmit(event) {
//     const { buildingArea, wallHeight, floors } = this.state
//     event.preventDefault()
//   }

  handleChange(event) {
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name]: parseInt(event.target.value),
    })
  }

  setRoofValue(e) {
    this.setState({
      ...this.state,
      roofValue: e?.target?.value ?? 0,
    })
  }

  render() {
    if (this.props.selectedElem === "wall") {
      this.wallRef.focus()
    }
    if (this.props.selectedElem === "floors") {
        this.floorRef.focus()
    }
    if (this.props.selectedElem === "roof") {
        this.roofRef.focus()
    }
    let cost = this.state.buildingArea + this.state.wall + this.state.floors + this.state.roof;
    return (
      <form action="" className="form-body">
        <div className="">
          <label htmlFor="buildingArea">Building area</label>
          <input
            type="text"
            id="buildingArea"
            name="buildingArea"
            className="form-input"
            onChange={(event) => this.handleChange(event)}
          />
        </div>
        <div className="">
          <label htmlFor="wallHeight">Wall height</label>
          <input
            ref={r => (this.wallRef = r)}
            type="text"
            id="wall"
            name="wall"
            autoFocus={this.props.selectedElem === "wall"}
            className="form-input"
            onClick={e => {
              this.props.onSelected(e.target.id)
            }}
            onChange={(event) => this.handleChange(event)}
          />
        </div>
        <div className="">
          <label htmlFor="floors">Floors</label>
          <input
            ref={r => (this.floorRef = r)}
            type="text"
            id="floors"
            name="floors"
            className="form-input"
            onClick={e => {
              this.props.onSelected(e.target.id)
            }}
            onChange={(event) => this.handleChange(event)}
          />
        </div>
        <div className="">
          <label htmlFor="roof">Roof</label>
          <input
            ref={r => (this.roofRef = r)}
            type="text"
            id="roof"
            name="roof"
            className="form-input"
            onClick={e => {
              this.props.onSelected(e.target.id)
            }}
            // onChange={e => {
            //   this.setRoofValue(e)
            // }}
            onChange={(event) => this.handleChange(event)}

          />
        </div>
        {/* <div className="">
                    <label htmlFor="wall-width">Wall width</label>
                    <input type="checkbox" id="wall-width" value="15" className="form-checkbox" />
                    <input type="checkbox" id="wall-width" value="50" className="form-checkbox" />
                </div> */}
            Price: {cost}
      </form>
    )
  }
}

export default Form
