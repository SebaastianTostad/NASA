import React from "react";
import { screen } from "@testing-library/react";
import { renderWithReduxAndRouter } from "../../Shared/Utils/test_utils";
import MediaCard from "./MediaCard";

describe("MediaCard Component", () => {
  test("shows image", () => {
    const item = {
      data: [
        {
          nasa_id: "s69-32614",
          title: "Apollo 10 portrait at KSC",
          location: "Kennedy Space Center",
          photographer: "NASA",
        }
      ],
      links: [
        {
          href: "https://images-assets.nasa.gov/image/s69-32614/s69-32614~thumb.jpg"
        }
      ]
    };
    renderWithReduxAndRouter(<MediaCard image={item} />);
    const image = screen.getByAltText("Apollo 10 portrait at KSC");
    expect(image).toBeInTheDocument();
  });

  test("shows info", () => {
    const item = {
      data: [
        {
          nasa_id: "s69-32614",
          title: "Apollo 10 portrait at KSC",
          location: "Kennedy Space Center",
          photographer: "NASA",
        }
      ],
      links: [
        {
          href: "https://images-assets.nasa.gov/image/s69-32614/s69-32614~thumb.jpg"
        }
      ]
    };
    renderWithReduxAndRouter(<MediaCard image={item} />);
    const location = screen.getByText("Kennedy Space Center");
    const photographer = screen.getByText("NASA");
    expect(photographer).toBeInTheDocument();
    expect(location).toBeInTheDocument();
  });
});
