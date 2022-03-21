import { render, screen } from "@testing-library/react";
import { getSession } from "next-auth/react";
import { mocked } from "jest-mock";

import { getPrismicClient } from "../../services/prismic";

import Post, { getServerSideProps } from "../../pages/posts/[slug]";

const post = {
  slug: "my-new-post",
  title: "My New Post",
  content: "<p>Post excerpt<p>",
  updatedAt: "10 e abril de 2022",
};

jest.mock("next-auth/react");
jest.mock("../../services/prismic");

describe("Post page", () => {
  it("should to render correctly", () => {
    render(<Post post={post} />);

    expect(screen.getByText("My New Post")).toBeInTheDocument();
    expect(screen.getByText("Post excerpt")).toBeInTheDocument();
    expect(screen.getByText("10 e abril de 2022")).toBeInTheDocument();
  });

  it("should to redirect user if subscription is not found", async () => {
    const getSessionMocked = mocked(getSession);
    const req = {
      cookies: {},
    };

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: null,
    } as any);

    const response = await getServerSideProps({
      req,
      params: {
        slug: "my-new-post",
      },
    } as any);

    expect(getSessionMocked).toHaveBeenCalledWith({ req });

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: "/posts/preview/my-new-post",
        }),
      })
    );
  });

  it("should to load initial data", async () => {
    const getSessionMocked = mocked(getSession);
    const getPrismicClientMocked = mocked(getPrismicClient);
    const req = {
      cookies: {},
    };

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [{ type: "heading", text: "My new post" }],
          content: [{ type: "paragraph", text: "Post content" }],
        },
        last_publication_date: "03-04-2022",
      }),
    } as any);

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: "fake-active-subscription",
    } as any);

    const response = await getServerSideProps({
      req,
      params: {
        slug: "my-new-post",
      },
    } as any);

    //expect(getPrismicClientMocked).toHaveBeenCalledWith(req);
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: "my-new-post",
            title: "My new post",
            content: "<p>Post content</p>",
            updatedAt: "04 de março de 2022",
          },
        },
      })
    );
  });
});
