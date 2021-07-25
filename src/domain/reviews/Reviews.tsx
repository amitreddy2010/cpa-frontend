import React, { useEffect, useState } from 'react'

type Review = {
  username: string
  description: string
}

const fetechReviews = async () => {
  console.log('reviews data')
  const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/reviews`)
  if (!response.ok) {
    throw Error('Failure in fetching reviews')
  }
  const reviewData: Review[] = await response.json()
  console.log(typeof reviewData)
  return reviewData
}

const Reviews = () => {
  const [status, setstatus] = useState('Loading')
  const [reviews, setreviews] = useState<Review[]>([])

  useEffect(() => {
    fetechReviews()
      .then((reviewsList) => {
        console.log(reviews)
        setreviews(reviewsList)
        setstatus('Success')
      })
      .catch(() => {
        setstatus('Error')
      })
  }, [])

  if (status === 'Loading') return <div>Loading</div>
  if (status === 'Error') return <div>Error in fetching reviews</div>
  return (
    <div>
      Reviews Loaded :{' '}
      {reviews.map((review) => (
        <>
          <div>{review.description}</div>
          <div>{review.username}</div>
        </>
      ))}
    </div>
  )
}

export default Reviews
