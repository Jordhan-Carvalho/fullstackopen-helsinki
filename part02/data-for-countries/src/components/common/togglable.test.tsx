import React from "react";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import Togglable from "./togglable";

describe("<Togglable />", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <Togglable buttonLabel="show...">
        <div className="testDiv" />
      </Togglable>
    );
  });

  test("renders its children", () => {
    expect(component.container.querySelector(".testDiv")).toBeDefined();
  });

  test("at start the children are not displayed", () => {
    const div = component.container.querySelector(".togglableContent");

    expect(div).toHaveStyle("display: none");
  });

  test("after clicking the button, children are displayed", () => {
    const button = component.getByText("show...");
    fireEvent.click(button);

    const div = component.container.querySelector(".togglableContent");
    expect(div).not.toHaveStyle("display: none");
  });

  test("toggled content can be closed", () => {
    const button = component.getByText("show...");
    fireEvent.click(button);

    // eh aconselhavel usar o metodo de cima... selecionar elementos baseados no texto
    const cancelButton = component.container.querySelector(
      ".togglableContent > button"
    ) as Element;
    fireEvent.click(cancelButton);

    const div = component.container.querySelector(".togglableContent");
    expect(div).toHaveStyle("display: none");
  });
});

// test("renders content", () => {
//   const component = render(
//     <Togglable buttonLabel="Show...">
//       {" "}
//       <div className="test-div" />
//     </Togglable>
//   );
//   component.debug();
//   expect(component.container).toHaveTextContent("Show");

// });
