import { Tab, TabList, Tabs } from "@chakra-ui/react";
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
    </TabList>
  </Tabs>
);
