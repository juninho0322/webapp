import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./form";

describe("Client Form", () => {
  test("First name only if more than 3 characters", () => {
    const firstNameLength = "Luis"; // 4 chars
    const handleSubmit = jest.fn();

    render(<Form onSubmit={handleSubmit} />);

    const nameInput = screen.getByLabelText(/^Name:?$/i);
    fireEvent.change(nameInput, { target: { value: firstNameLength } });

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      firstName: firstNameLength,
    });
  });
});
