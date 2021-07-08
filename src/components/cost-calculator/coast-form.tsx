import React, { Component } from "react"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {  wallWidth: 0.15, wall: 0, floors: 0, roof: 0, innerSeparator: 0,  }
  }

  handleChange(event) {
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name]: Number(event.target.value),
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
    if (this.props.innerSeparatorRef === "inner-separator") {
      this.innerSeparatorRef.focus()
    }

    let totalCoast, totalMaterials = 0
    const MATERIAL_CUBIC_METER_COST = this.props.costForm.hempMixCubicMetetrPrice
    const FLOORS_MATERIAL_WIDTH = 0.2
    const ROOF_MATERIAL_WIDTH = 0.3
    const INNER_SEPARATOR_MATERIAL_WIDTH = 0.2

    let totalWallsMaterial = this.state.wallWidth * this.state.wall
    let totalWallsCoast = totalWallsMaterial*MATERIAL_CUBIC_METER_COST

    let totalFloorsMaterial = this.state.floors * FLOORS_MATERIAL_WIDTH
    let totalFloorsCoast = totalWallsMaterial * MATERIAL_CUBIC_METER_COST

    let totalRoofMaterial = this.state.roof * ROOF_MATERIAL_WIDTH
    let totalRoofCoast = totalRoofMaterial * MATERIAL_CUBIC_METER_COST

    let totalInnerSeparatorMaterial = this.state.innerSeparator * INNER_SEPARATOR_MATERIAL_WIDTH
    let totalInnerSeparatorCoast = totalInnerSeparatorMaterial * MATERIAL_CUBIC_METER_COST

    totalMaterials = totalWallsMaterial + totalFloorsMaterial + totalRoofMaterial + totalInnerSeparatorMaterial
    totalCoast = totalWallsCoast + totalFloorsCoast + totalRoofCoast + totalInnerSeparatorCoast

    return (
      <form action="" className="cost-calculator__form form-body">
        <div className="cost-calculator__fieldset">
          <h5 className="cost-calculator__heading">{this.props.costForm.wallsHeading}</h5>
          <div className="cost-calculator__fieldset-inner row">
            <div className="col-xs-12 col-lg-6">{this.props.costForm.wallWidthLabel}</div>
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
              {this.props.costForm.wallsAreaLabel}
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
          <h5 className="cost-calculator__heading">{this.props.costForm.floorsHeading}</h5>
          <div className="cost-calculator__fieldset-inner row">
            <label htmlFor="floors" className="col-xs-12 col-lg-6">
              {this.props.costForm.floorsAreaLabel}
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
          <h5 className="cost-calculator__heading">{this.props.costForm.roofHeading}</h5>
          <div className="cost-calculator__radio cost-calculator__fieldset-inner row">
            <label htmlFor="roof" className="col-xs-12 col-lg-6">
              {this.props.costForm.roofAreaLabel}
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
          <h5 className="cost-calculator__heading">{this.props.costForm.innerSeparatorsHeading}</h5>

          <div className="cost-calculator__fieldset-inner row">
            <label htmlFor="inner-separator" className="col-xs-12 col-lg-6">
              {this.props.costForm.innerSeparatorsAreaLabal}
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
                <h4 className="col-xs-6 col-lg-5"> {this.props.costForm.totalMaterialLabel}</h4>
                <div className="col-xs-6 col-lg-7">
                  {totalMaterials}
                  <div className="cost-calculator__metric">
                    м<sup className="cost-calculator__metric-power">3</sup>
                  </div>
                </div>
            </div>
            <div className="cost-calculator__finals-cost row">
                <h4 className="col-xs-6 col-lg-5">{this.props.costForm.totalCostLabel}</h4>
                <div className="col-xs-6 col-lg-7">
                  {totalCoast} ₴
                </div>
            </div>
        </div>
      </form>
    )
  }
}

export default Form
