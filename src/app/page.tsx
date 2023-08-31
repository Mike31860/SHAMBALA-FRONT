"use client";

import HomeView from "./home";
import { Post } from "@domain/models/post";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@pages/contexts/AuthProvider";
import { useRouter } from "next/navigation";

const HomePage = () => {
  return <HomeView />;
};

export default HomePage;
