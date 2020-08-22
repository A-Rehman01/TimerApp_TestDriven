import React from "react"
import { shallow } from "enzyme"
import Timer from "./Timer"

describe("Timer", () => {
  let container:any
  beforeEach(() => (container = shallow(<Timer />)))
  //  check retrun only one or more div
  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  });
  // check 2span exixt on not in Timer Component
  it("should render instances of the TimerButton component", () => {
    expect(container.find("span").length).toEqual(2)
  })
})

