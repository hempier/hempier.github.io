import React, { Component } from "react"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {  wallWidth: 0.15, wall: 0, floors: 0, roof: 0, innerSeparator: 0,  }
  }

  //   handleSubmit(event) {
  //     const { buildingArea, wallHeight, floors } = this.state
  //     event.preventDefault()
  //   }


  handleChange(event) {
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name]: Number(event.target.value),
    })
    console.log('name: ', event.target.name)
    console.log('value: ', parseInt(event.target.value))
    
  }

  //   setRoofValue(e) {
  //     this.setState({
  //       ...this.state,
  //       roofValue: e?.target?.value ?? 0,
  //     })
  //   }

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
    if (this.props.innerSeparatorRef === "inner-separator") {
      this.innerSeparatorRef.focus()
    }

    let totalCoast, totalMaterials = 0
    const MATERIAL_CUBIC_METER_COST = 2400;

    let totalWallsMaterial = this.state.wallWidth * this.state.wall
    let totalWallsCoast = totalWallsMaterial*MATERIAL_CUBIC_METER_COST

    let totalFloorsMaterial = this.state.floors * 0.2
    let totalFloorsCoast = totalWallsMaterial*MATERIAL_CUBIC_METER_COST

    let totalRoofMaterial = this.state.roof * 0.3
    let totalRoofCoast = totalRoofMaterial*MATERIAL_CUBIC_METER_COST

    let totalInnerSeparatorMaterial = this.state.innerSeparator * 0.2
    let totalInnerSeparatorCoast = totalInnerSeparatorMaterial*MATERIAL_CUBIC_METER_COST

    totalMaterials = totalWallsMaterial + totalFloorsMaterial + totalRoofMaterial + totalInnerSeparatorMaterial
    totalCoast = totalWallsCoast + totalFloorsCoast + totalRoofCoast + totalInnerSeparatorCoast

    console.log('wall width: ', this.state.wallWidth)
    console.log('wall: ', this.state.wall)
    // console.log('floors: ', this.state.floors)
    // console.log('roof: ', this.state.roof)
    // console.log('innerSeparator: ', this.state.innerSeparator)
    return (
      <form action="" className="cost-calculator__form form-body">
        <div className="cost-calculator__fieldset">
          <h5 className="cost-calculator__heading">Стіни</h5>
          <div className="cost-calculator__fieldset-inner row">
            <div className="col-xs-12 col-lg-6">Товщина стіни:</div>
            <label className="radio radio-gradient col-xs-6 col-lg-3">
              <span className="radio__input">
                <input
                  type="radio"
                  name="wallWidth"
                  defaultChecked
                  value="0.15"
                  onChange={event => this.handleChange(event)}
                />
                <span className="radio__control"></span>
              </span>
              <span className="radio__label">15 см</span>
            </label>
            <label className="radio radio-gradient col-xs-6 col-lg-3">
              <span className="radio__input">
                <input
                  type="radio"
                  name="wallWidth"
                  defaultValue="0.4"
                  onChange={event => this.handleChange(event)}
                />
                <span className="radio__control"></span>
              </span>
              <span className="radio__label">40 см</span>
            </label>
          </div>
          <div className="cost-calculator__fieldset-inner row">
            <label htmlFor="wall" className="col-xs-12 col-lg-6">
              Загальна площа стін:
            </label>
            <input
              ref={r => (this.wallRef = r)}
              type="text"
              id="wall"
              name="wall"
              autoFocus={this.props.selectedElem === "wall"}
              className="form-input col-xs-11 col-lg-5"
              onClick={e => {
                this.props.onSelected(e.target.id)
              }}
              onChange={event => this.handleChange(event)}
            />
            <div className="cost-calculator__metric col-xs-1 col-lg-1">
              м<sup className="cost-calculator__metric-power">2</sup>
            </div>
          </div>
        </div>
        <div className="cost-calculator__fieldset">
          <h5 className="cost-calculator__heading">Міжповерхові перекриття</h5>
          <div className="cost-calculator__fieldset-inner row">
            <label htmlFor="floors" className="col-xs-12 col-lg-6">
              Загальна площа перериттів:
            </label>
            <input
              ref={r => (this.floorRef = r)}
              type="text"
              id="floors"
              name="floors"
              className="form-input col-xs-11 col-lg-5"
              onClick={e => {
                this.props.onSelected(e.target.id)
              }}
              onChange={event => this.handleChange(event)}
            />
            <div className="cost-calculator__metric col-xs-1 col-lg-1">
              м<sup className="cost-calculator__metric-power">2</sup>
            </div>
          </div>
        </div>
        <div className="cost-calculator__fieldset">
          <h5 className="cost-calculator__heading">Дах</h5>
          <div className="cost-calculator__radio cost-calculator__fieldset-inner row">
            <label htmlFor="roof" className="col-xs-12 col-lg-6">
              Загальна площа даху:
            </label>
            <input
              ref={r => (this.roofRef = r)}
              type="text"
              id="roof"
              name="roof"
              className="form-input col-xs-11 col-lg-5"
              onClick={e => {
                this.props.onSelected(e.target.id)
              }}
              onChange={event => this.handleChange(event)}
            />
            <div className="cost-calculator__metric col-xs-1 col-lg-1">
              м<sup className="cost-calculator__metric-power">2</sup>
            </div>
          </div>
        </div>
        <div className="cost-calculator__fieldset">
          <h5 className="cost-calculator__heading">Внутрішні стіни</h5>

          <div className="cost-calculator__fieldset-inner row">
            <label htmlFor="inner-separator" className="col-xs-12 col-lg-6">
              Загальна площа внутрішніх стін:
            </label>
            <input
              ref={r => (this.innerSeparatorRef = r)}
              type="text"
              id="inner-separator"
              name="innerSeparator"
              className="form-input col-xs-11 col-lg-5"
              onClick={e => {
                this.props.onSelected(e.target.id)
              }}
              onChange={event => this.handleChange(event)}
            />
            <div className="cost-calculator__metric col-xs-1 col-lg-1">
              м<sup className="cost-calculator__metric-power">2</sup>
            </div>
          </div>
        </div>
        <div className="cost-calculator__finals">
            <div className="cost-calculator__finals-material row">
                <h4 className="col-xs-6 col-lg-5"> TOTAL MATERIAL:</h4> 
                <div className="col-xs-6 col-lg-7">{totalMaterials}</div>
            </div>
            <div className="cost-calculator__finals-cost row">
                <h4 className="col-xs-6 col-lg-5">TOTAL COST:</h4>  
                <div className="col-xs-6 col-lg-7">₴ {totalCoast}</div>
            </div>
        </div>
      </form>
    )
  }
}

export default Form
