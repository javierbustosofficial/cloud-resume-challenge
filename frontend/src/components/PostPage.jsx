import React from "react";
import "../assets/stylesheets/post.css"
import Header from "./Header"
import blogData from '../data/blogData'
import { useParams } from "react-router-dom"
import { ChevronLeft } from 'lucide-react'
import { Link } from "react-router-dom";

export default function PostPage() {
  const { handle, date } = useParams();

  const post = blogData.find(p => p.handle === handle);
  return (
    <>
      <Header></Header>
      <div className="post_page">
        <Link className="button" to={`/`}>
          <ChevronLeft />
          Back To Home Page
        </Link>
        <h1 className="title">{post.name}</h1>
        <div className="date">{post.date}</div>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: post.body_html }} />
      </div>
    </>
  )
}

