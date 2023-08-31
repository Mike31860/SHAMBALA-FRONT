import React from "react";
import PropTypes from "prop-types";
import Flex from "@components/moleculs/Flex";
import TextField from "@components/moleculs/TextField";
import { ClassNames } from "@emotion/react";
import PostTitle from "@components/moleculs/PostTitle";
import Tittles from "@components/moleculs/Tittles";
import Button from "@components/atoms/Button";

const CreatePost = () => {
  return (
    <div className="w-100  h-100  flex justify-center items-center">
      <form>
        <Flex className="rounded-lg bg-orange-500 w-96 h-96 text-center flex flex-col px-10 gap-2">
          <Tittles
            className=" text-black font-bold placeholder-slate-950 text-lg"
            title="Create a new post!"
          />
          <TextField contentProps="py-1" title="Title" errorMessage="error" />
          <TextField
            contentProps="py-1"
            title="Description"
            errorMessage="error"
            className="h-24"
            labelProps={{ className: "rounded-md" }}
          />
          <Button className="bg-cyan-400 font-bold text-black rounded-full">
            {"Add post"}
          </Button>
        </Flex>
      </form>
    </div>
  );
};

export default CreatePost;
