const axios = require("axios");
const { updateSecret, validateSecret } = require("../src/services/secret/secretService");

jest.mock("axios");

describe("secretService Module", () => {
  it("should make a POST request to updateSecret", async () => {
    const baseUrl = "http://localhost:3000/api/secret";
    const secretText = "newSecretText";
    const expectedResponse = { data: { message: "Secret updated successfully" } };

    axios.post.mockResolvedValue(expectedResponse);

    const response = await updateSecret(baseUrl, secretText);

    expect(response).toEqual(expectedResponse);
    expect(axios.post).toHaveBeenCalledWith(`${baseUrl}/updateSecret`, { secretText });
  });

  it("should make a POST request to validateSecret", async () => {
    const baseUrl = "http://localhost:3000/api/secret";
    const secretText = "someSecretText";
    const expectedResponse = { data: { valid: true } };

    axios.post.mockResolvedValue(expectedResponse);

    const response = await validateSecret(baseUrl, secretText);

    expect(response).toEqual(expectedResponse);
    expect(axios.post).toHaveBeenCalledWith(`${baseUrl}/validateSecret`, { secretText });
  });
});
