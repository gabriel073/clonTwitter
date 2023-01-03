import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Feed from './screens/Feed';
import MessagesScreen from "./screens/messages";


const App: React.FC = () => {
return (
<Layout>

    <Routes>
      <Route element={<Feed/>} path="/" />
      <Route element={<MessagesScreen/>} path="/messages" />
    </Routes>

</Layout>
);
};

export default App;
