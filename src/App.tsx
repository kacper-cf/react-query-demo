import React from "react";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { CachedPassengers } from "./passengers/cached/cached";
import { CancelQuery } from "./passengers/cancel/cancel";
import { LoadMorePassengers } from "./passengers/loadMore/loadMore";
import { NotCachedPassengers } from "./passengers/notCached/notCached";
import { PassengersParrallel } from "./passengers/parallel/parallel";
import { UserForm } from "./users/form/userForm";
import { UserList } from "./users/list/list";
import { Welcome } from "./welcome/welcome";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/users"} element={<UserList />}></Route>
        <Route path={"/users-2"} element={<UserList />}></Route>
        <Route path={"/add-user"} element={<UserForm />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/airlines-paginated" element={<CachedPassengers />} />
        <Route path="/airlines" element={<NotCachedPassengers />} />
        <Route path="/airlines-load-more" element={<LoadMorePassengers />} />
        <Route path="/airlines-parallel" element={<PassengersParrallel />} />
        <Route path="/airlines-cancel" element={<CancelQuery />} />
      </Routes>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </Layout>
  );
}

export default App;
