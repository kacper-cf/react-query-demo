import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider, setLogger } from "react-query";
import { fetchUsers } from "../store";
import { UserList } from "./list";

jest.mock("../store");

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

describe("users - list", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    jest.clearAllMocks();
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
  });

  it("should display the users table correctly", async () => {
    givenFetchUsersResolvesWithUsers();

    render(getComponent());

    await waitFor(() => {
      expect(screen.getByText("Cently Dog")).toBeInTheDocument();
    });

    expect(screen.getByText("some-id")).toBeInTheDocument();
  });

  it("should display fallback value when there is no users", async () => {
    givenFetchUsersResolvesWithoutUsers();

    render(getComponent());

    return waitFor(() => {
      expect(screen.getByText("No users were found.")).toBeInTheDocument();
    });
  });

  it("should display loader, when query is pending", () => {
    givenFetchUsersResolvesWithUsers();

    render(getComponent());

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should show error if query rejects", async () => {
    givenFetchUsersRejected();

    render(getComponent());

    await waitFor(() => {
      expect(screen.getByText("An error occurred")).toBeInTheDocument();
    });
  });

  // ... the same applies to mutation tests

  function givenFetchUsersResolvesWithUsers() {
    (fetchUsers as jest.Mock).mockResolvedValue([
      { fullName: "Cently Dog", id: "some-id" },
    ]);
  }

  function givenFetchUsersResolvesWithoutUsers() {
    (fetchUsers as jest.Mock).mockResolvedValue([]);
  }

  function givenFetchUsersRejected() {
    (fetchUsers as jest.Mock).mockRejectedValue(new Error("error"));
  }

  function getComponent() {
    return (
      <QueryClientProvider client={queryClient}>
        <UserList />
      </QueryClientProvider>
    );
  }
});
