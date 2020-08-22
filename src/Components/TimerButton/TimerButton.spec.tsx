import React from "react"
import { shallow } from "enzyme"
import TimerButton from "./TimerButton"


describe("TimerButton", () => {
  let container:any

  beforeEach(() => {
    container = shallow(
      <TimerButton
        setCounter={jest.fn()}
        counter={0}
        setMin={jest.fn()}
        min={0}
      />
    )
  })

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  });
});
