"use client";

import React, { FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Flex from "@components/moleculs/Flex";
import TextField from "@components/moleculs/TextField";
import { ClassNames } from "@emotion/react";
import PostTitle from "@components/moleculs/PostTitle";
import Tittles from "@components/moleculs/Tittles";
import Button from "@components/atoms/Button";
import { PostDTO } from "@pages/serverActions/posts";

export interface CreatePostProps {
  onCreate: (post: PostDTO) => void;
}
const CreatePost: FC<CreatePostProps> = ({ onCreate }) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [postDTO, setpostDTO] = useState(null);
  useEffect(() => {
    const postDTOcreated: PostDTO = {
      title: title,
      urlImage: urlImage,
      description: description,
    };
    setpostDTO(postDTOcreated);
  }, [title, description, urlImage]);

  return (
    <div className="w-100  h-100  flex justify-center items-center">
      <form>
        <Flex className="rounded-lg bg-cyan-300 w-96 h-96 text-center flex flex-col px-10 gap-2">
          <Tittles
            className=" text-black font-bold placeholder-slate-950 text-lg"
            title="Create a new post!"
          />
          <TextField
            contentProps="py-1"
            title="Title:"
            errorMessage="error"
            onChange={(event) => {
              settitle(event.currentTarget.value);
            }}
          />
          <TextField
            contentProps="py-1 items-center"
            title="Description:"
            errorMessage="error"
            className="h-24  rounded ..."
            labelProps={{ className: "rounded-md" }}
            onChange={(event) => {
              setdescription(event.currentTarget.value);
            }}
          />
          <TextField
            contentProps="py-1"
            title="Url Image:"
            errorMessage="error"
            className="h-10"
            labelProps={{ className: "rounded-md" }}
            onChange={(event) => {
              setUrlImage(event.currentTarget.value);
            }}
          />
          <Flex className="py-15">
            <Button
              onClick={(event) => onCreate(postDTO)}
              className="bg-lime-50 w-24 text-center justify-center font-bold text-black rounded-full"
            >
              {"Add post"}
            </Button>
          </Flex>
        </Flex>
      </form>
    </div>
  );
};

export default CreatePost;
