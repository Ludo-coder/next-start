import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "@/app/page";

describe("Pages /Page ->", () => {
  it("should render", () => {
    render(Page());
    expect(screen.getByText("coucou")).toBeInTheDocument();
  });
});
