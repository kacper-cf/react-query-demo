import { Tab, TabList, Tabs, Tag, TagLabel } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <Tabs isFitted={true} width={"100%"}>
    <TabList active>
      <NavLink to={"/"}>
        <Tab>Home</Tab>
      </NavLink>
      <NavLink to={"/users"}>
        <Tab>Users</Tab>
      </NavLink>
      <NavLink to={"/add-user"}>
        <Tab>Add a user</Tab>
      </NavLink>
      <NavLink to={"/airlines"}>
        <Tab>
          Airlines
          <Tag ml={2} colorScheme={"red"}>
            Without cache
          </Tag>
        </Tab>
      </NavLink>
      <NavLink to={"/airlines-paginated"}>
        <Tab>
          Airlines{" "}
          <Tag ml={2} colorScheme={"teal"}>
            With cache
          </Tag>
        </Tab>
      </NavLink>
    </TabList>
  </Tabs>
);
