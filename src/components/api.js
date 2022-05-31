import React, { useState, useEffect } from 'react'

export function Posts() {
  const [post, getPost] = useState([])
  const API = 'https://marbleunlimited.a2hosted.com/api/inventory/main.php';
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        getPost(res)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])
  return (
    <>
      <h5>Total Quantity : {post.available_quantity}</h5>
    </>
  )
}