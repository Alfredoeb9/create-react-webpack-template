import { render, screen } from "@testing-library/react";
import Header from "./components/Header/Header";

test("renders learn react link", () => {
  render(<Header title="TODO" />);
  const linkElement = screen.getByText(/TODO/i);
  expect(linkElement).toBeInTheDocument();
});
